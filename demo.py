import yaml
import cv2
import torch
import requests
import numpy as np
import gc
import torch.nn.functional as F
import pandas as pd


import torchvision.models as models
import torchvision.transforms as transforms

from PIL import Image
from IPython.display import display, HTML, clear_output
from ipywidgets import widgets, Layout
from io import BytesIO

import captioning
import captioning.utils.opts as opts
import captioning.utils.misc as utils
from captioning.data.dataloader import *
from captioning.data.dataloaderraw import *
import captioning.utils.eval_utils as eval_utils
import argparse
import json
import captioning.models as models

import captioning.modules.losses as losses

custom = '{"name": "img.png","voids": "#00ff00ff","0": "#ff00ff00","100%": "#f80654ff"}'

parser = argparse.ArgumentParser()

# Input paths
parser.add_argument('--model', type=str, default='',
                help='path to model to evaluate')
parser.add_argument('--cnn_model', type=str,  default='resnet101',
                help='resnet101, resnet152')
parser.add_argument('--infos_path', type=str, default='',
                help='path to infos to evaluate')
parser.add_argument('--only_lang_eval', type=int, default=0,
                help='lang eval on saved results')
parser.add_argument('--force', type=int, default=0,
                help='force to evaluate no matter if there are results available')
parser.add_argument('--device', type=str, default='cuda',
                help='cpu or cuda')
parser.add_argument('--image_folder', type=str, default='',
                help='path to image folder to evaluate')
parser.add_argument('--split', type=str, default='test', 
    help='if running on MSCOCO images, which split to use: val|test|train')
opt = parser.parse_args()
#opt['image_folder'] = "/Users/irene/Image-Captioning Demo/img"

# Load infos
with open(opt.infos_path, 'rb') as f:
    infos = utils.pickle_load(f)

# override and collect parameters
# replace = ['input_att_dir', 'input_box_dir', 'input_label_h5', 'batch_size', 'id']
replace = ['id']
# # 'input_json'
# # 'input_fc_dir'
ignore = ['start_from']

for k in vars(infos['opt']).keys():
    # if k in replace:
    #     setattr(opt, k, getattr(opt, k) or getattr(infos['opt'], k, ''))
    #elif k not in ignore:
    if k not in ignore:
        if not k in vars(opt):
            vars(opt).update({k: vars(infos['opt'])[k]}) # copy over options from model

vocab = infos['vocab'] # ix -> word mapping

pred_fn = os.path.join('eval_results/', '.saved_pred_'+ opt.id + '_' + opt.split + '.pth')
result_fn = os.path.join('eval_results/', opt.id + '_' + opt.split + '.json')

if opt.only_lang_eval == 1 or (not opt.force and os.path.isfile(pred_fn)): 
    # if results existed, then skip, unless force is on
    if not opt.force:
        try:
            if os.path.isfile(result_fn):
                print(result_fn)
                json.load(open(result_fn, 'r'))
                print('already evaluated')
                os._exit(0)
        except:
            pass

    predictions, n_predictions = torch.load(pred_fn)
    lang_stats = eval_utils.language_eval(opt.input_json, predictions, n_predictions, vars(opt), opt.split)
    print(lang_stats)

# At this point only_lang_eval if 0
if not opt.force:
    # Check out if 
    try:
        # if no pred exists, then continue
        tmp = torch.load(pred_fn)
        # if language_eval == 1, and no pred exists, then continue
        if opt.language_eval == 1:
            json.load(open(result_fn, 'r'))
        print('Result is already there')
        os._exit(0)
    except:
        pass

# Setup the model
opt.vocab = vocab
model = models.setup(opt)
del opt.vocab
model.load_state_dict(torch.load(opt.model, map_location='cpu'))
model.to(opt.device)
model.eval()
crit = losses.LanguageModelCriterion()

# Create the Data Loader instance
if len(opt.image_folder) == 0:
    loader = DataLoader(opt)
else:
    loader = DataLoaderRaw({'folder_path': opt.image_folder, 
                            'coco_json': opt.coco_json,
                            'batch_size': opt.batch_size,
                            'cnn_model': opt.cnn_model})
# When eval using provided pretrained model, the vocab may be different from what you have in your cocotalk.json
# So make sure to use the vocab in infos file.
loader.dataset.ix_to_word = infos['vocab']


# Set sample options
opt.dataset = opt.input_json
loss, split_predictions, lang_stats = eval_utils.eval_split(model, crit, loader, 
        vars(opt))

print('loss: ', loss)
if lang_stats:
    print(lang_stats)

if opt.dump_json == 1:
    # dump the json
    json.dump(split_predictions, open('vis/vis.json', 'w'))
# infos = captioning.utils.misc.pickle_load(open('./model/infos_fc-best.pkl', 'rb'))
# infos['opt'].vocab = infos['vocab']

# model = captioning.models.setup(infos['opt'])
# model.load_state_dict(torch.load('./model/model-best.pth'))
# model.eval()
# crit = losses.LanguageModelCriterion()

# if len(opt.image_folder) == 0:
#     loader = DataLoader(opt)
# else:
#     loader = DataLoaderRaw({'folder_path': opt.image_folder, 
#                             'coco_json': opt.coco_json,
#                             'batch_size': opt.batch_size,
#                             'cnn_model': opt.cnn_model})


# loss, split_predictions, lang_stats = eval_utils.eval_split(model, crit, loader, 
#         vars(opt))