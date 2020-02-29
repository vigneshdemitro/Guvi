np = input()
list1 = []
num = ['0','1','2','3','4','5','6','7','8','9']
sum = 0
for x in np:
    list1.append(x)
for i in list1:
    if i in num:
        y = int(i)
        sum += y
print(sum)
