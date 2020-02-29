def duplicate(xx, yy):
	dupli = []
	for i in range(yy):
		for j in range(i+1, yy):
			if xx[i] == xx[j] and xx[i] not in dupli:
				dupli.append(xx[i])
	return dupli

N = int(input())
list1 = [int(x) for x in input().split()]
print(*duplicate(list1, N), sep=' ')
