n = int(input())
array = set(list(str(n)))
if len(array) == 2:
	print('Saturated')
else:
	print('Unsaturated')
