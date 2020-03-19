n = int(input())
list1 = [int(x) for x in input().split()][:n]
list1.sort()
print(list1[len(list1)-2])
