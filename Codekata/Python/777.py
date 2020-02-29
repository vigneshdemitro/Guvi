month = int(input())
list1 = [1, 3, 5, 7, 8, 9, 11]
list2 = [4, 6, 10, 12]
if month in list1:
    print(31)
elif month in list2:
    print(30)
elif month == 2:
    print(28)
else:
    print('Error')
