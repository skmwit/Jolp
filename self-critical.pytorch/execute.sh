#!/bin/sh

python tools/eval.py --model='../model/model-best.pth' --infos_path="../model/infos_fc-best.pkl" --device="cpu" --force 0 --image_folder="/Users/irene/Image-Captioning Demo/img"