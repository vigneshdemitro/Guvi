def composite(num):
    flag = 1
    for i in range(2,(num//2)):
        if num % i == 0:
            flag = 0
            return flag
    return flag


n = int(input())
flag = composite(n)
if flag:
	print('no')
else:
	print('yes')
