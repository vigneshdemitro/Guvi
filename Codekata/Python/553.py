def unique(xx):
	return list(dict.fromkeys(xx))


N = input()
list1 = [x for x in input().split()]
print(*unique(list1), sep=' ')
