inp = input()
l = len(inp)
sum = 0
for i in range(l):
    a = int(inp[i])
    sum += a**l
print(sum)
