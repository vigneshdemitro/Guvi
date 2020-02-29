# list = []
# length = int(input())
# i=0
# while i < length:
#     i = int(input())
#     list.append(i)
# key = int(input())
# list1= list[: key+1]
# print(list)
# print(list1)
# print(sum(list1))

# list = []
# even = []
# odd = []
# length = int(input())
# i=0
# while i < length:
#     i = int(input())
#     list.append(i)
# for i in list:
#     if i % 2 == 0:
#         even.append(i)
#     elif i % 2 != 0:
#         odd.append(i)
# print('The sum of even numbers in list', sum(even))
# print('The sum of odd numbers in list', sum(odd))

list = []
even = []
odd = []
length = int(input())
for i in range(length):
    i = int(input())
    list.append(i)
for i in list:
    if i % 2 == 0:
        even.append(i)
    elif i % 2 != 0:
        odd.append(i)
print('The sum of even numbers in list', sum(even))
print('The sum of odd numbers in list', sum(odd))