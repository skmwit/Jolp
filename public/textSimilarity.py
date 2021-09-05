from konlpy.tag import Kkma
from konlpy.tag import Okt
from konlpy.tag import Komoran
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import time
import json
import numpy as np
import sys
import os

# sentence = "아이보리 스키니"
sentence=sys.argv[1]
sentences = {}

current_dir=os.getcwd()
# json 불러와서 image_id와 caption 불러오기
with open(current_dir+"/vis.json") as json_file:
    json_data = json.load(json_file)
    for i in range(len(json_data)):
        sentences[json_data[i]['image_id']]=json_data[i]['caption']

komoran = Komoran()

# print("[komoran 형태소 분석기 -> 코사인 유사도]")
# startTime = time.time()

# komoran 형태소 분석기
# 단어와 형태소 모두 출력
comTk = komoran.pos(sentence)
comTk = [''.join(list(t)) for t in comTk]
comTk = ' '.join(comTk)
# print("\t형태소 분석 결과 : ",comTk)

ttks = []
for sen in list(sentences.values()):
    ttk = komoran.pos(sen)
    ttk = [''.join(list(t)) for t in ttk]
    ttk = ' '.join(ttk)
    ttks.append(ttk)

n = len(ttks)
tks = []
for i in range(n):
    tk = (comTk, ttks[i])
    tks.append(tk)

# 형태소 벡테화
tfidf_vectorizer = TfidfVectorizer()
tfidf_matrixs = []

for i in range(n):
    tfidf_matrix = tfidf_vectorizer.fit_transform(tks[i])
    tfidf_matrixs.append(tfidf_matrix)

# 코사인 유사도 계산
similarities = []
for i in range(n):
    similarities.append(cosine_similarity(tfidf_matrixs[i][0:1], tfidf_matrixs[i][1:2][0][0]))

# endTime = time.time()
# processTime = endTime - startTime
# print(f"\tkomoran 소요 시간 : {processTime}")

# 가장 유사도 높은 문장 구하기
# pair = {(image_id, similarity_score):caption}
pair = {}
for i in range(n):
    pair[(list(sentences.keys())[i],round(np.float64(similarities[i]).item(), 7))]=list(sentences.values())[i]

# key는 (image_id, similarity_score)로 이루어진 튜플이다.
# similarity_score 기준으로 내름차순 정렬한다.
pair = sorted(pair.items(), key=lambda item: item[0][1], reverse=True)
result = pair[:3]

# json으로 내보낼 데이터 result_list에 담기
result_list = []

# image_id, caption, similarity_score로 이루어진 json object 3개 생성 후 
# result_list에 저장
for res in result:
    result_list.append({
    "image_id": res[0][0],
    "caption":res[1],
    "similarity_score":res[0][1]
})

# # json으로 dump
# with open("result.json", 'w') as f:
#     json.dump(result_list, f, ensure_ascii=False)
# print(json.dumps(result_list, ensure_ascii=False))
print(json.dumps(result_list))