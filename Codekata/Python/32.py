n = int(input())
sum = 0
if n <= 100000:
	for i in range(1,n+1):
		sum += i
print(sum)
