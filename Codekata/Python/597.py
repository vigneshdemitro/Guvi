def beautiful(xx):
  s = sum(xx)
  if s % 2 == 0 and s % 3 == 0 and s % 5 == 0:
	  return 1


N = int(input())
list1 = [int(x) for x in input().split()]
if beautiful(list1):
  print(1)
else:
  print(0)
