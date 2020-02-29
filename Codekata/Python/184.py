n,k = input().split()
n = int(n)
k = int(k)
ar = list(int(x) for x in input().split())[:n]
if k in ar:
	print('yes')
else:
	print('no')
