n = int(input())
list1 = list(map(int,input().strip().split()))[:n]
list1.sort()
print(list1[len(list1)-1])
