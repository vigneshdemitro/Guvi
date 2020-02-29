list1 = []
N = int(input())
if N < 0:
    print('Error')
elif N == 0:
    print(0)
elif N > 0:
    for i in range(N+1):
        if i == 4 & 0:
            continue
        else:
            i = i**2
            list1.append(i)
length = len(list1)
print(list1[length-1])
