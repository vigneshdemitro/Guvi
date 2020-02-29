inp = input()
l = len(inp)
if l == 3:
    for i in range(l):
        j = i+1
        for j in  range(j,l):
            k = j+1
            for k in  range(k,l):
                if ord(inp[i]) != ord(inp[j]) != ord(inp[k]):
                    print(1)
                else:
                    print(0)
else:
    print(0)
