import math
a,b,c = [int(x) for x in input().split()]
area = (a**2) + (b**2)
if c == math.sqrt(area):
    print('yes')
else:
    print('no')
