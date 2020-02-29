n = int(input())
a = list(int(x) for x in input().split())[:n]
if n <= 100000:
    minimum = min(a)
    maximum = max(a)
    min_index = a.index(minimum)+1
    max_index = a.index(maximum)+1
    print(min_index,max_index)
