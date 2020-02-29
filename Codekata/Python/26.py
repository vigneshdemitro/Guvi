n,k = input().split()
n = int(n)
k = int(k)
list1 = list(int(x) for x in input().split())[:n]
if k in list1:
	print('yes')
else:
	print('no')
