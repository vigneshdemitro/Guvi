n = int(input())
a = input().split()
for i in range(n):
    a[i] = int(a[i])
b = a[0]+a[1]+a[2]
c = a[-1]+a[-2]+a[-3]
if b == c:
    print(1)
else:
    print(0)
