# from gensim.models import FastText
# from gensim.models import KeyedVectors

# # model = fasttext.load_facebook_model('ko.bin')
# # print(model.most_similar('영웅'))
# model = FastText.load_fasttext_format('ko.bin', binary=False)

from gensim.models import FastText
from gensim.models.word2vec import Word2Vec

model = FastText.load('ko.bin')
