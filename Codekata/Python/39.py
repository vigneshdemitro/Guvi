sentence = input().split()
string = input()
count = 0
if len(sentence) <= 1000000: 
    for word in sentence:
        if word == string:
            count += 1
if count > 0:
    print(count)
else:
    print(-1)
