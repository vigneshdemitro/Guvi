n = input()
list = []
swap = []
for i in n:
    list.append(int(i))
print(list)
print(sum(list))
list[0], list[len(list)-1] = list[len(list)-1], list[0]
print(list)
print(list[0]+list[len(list)-1])
