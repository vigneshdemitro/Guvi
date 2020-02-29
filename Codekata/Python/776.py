import math
r = float(input())
if r > 0:
    circumference = 2 * math.pi * r
    print(round(circumference, 2))
elif r < 0:
    print('Error')
