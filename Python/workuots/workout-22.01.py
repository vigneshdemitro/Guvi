# 1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39
# count = 1
# i = 1
# while count <= 20:
#     print(i,end=' ')
#     i += 2
#     count += 1

# 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40
# count = 1
# i = 2
# while count <= 20:
#     print(i,end=' ')
#     i += 2
#     count += 1


# 1 9 25 49 81 121 169 225 289 361 441 529 625 729 841 961 1089 1225 1369 1521
# count = 1
# i = 1
# while count <= 20:
#     c = i**2
#     print(c,end=' ')
#     i += 2
#     count += 1

# 4 16 36 64 100 144 196 256 324 400 484 576 676 784 900 1024 1156 1296 1444 1600
# count = 1
# i = 2
# while count <= 20:
#     c = i**2
#     print(c,end=' ')
#     i += 2
#     count += 1

# 1 4 3 8 5 12 7 16 9 20 11 24 13 28 15 32 17 36 19 40
# count = 1
# i = 1
# j = 4
# while count <= 21:
#     if count == 1:
#         count += 1
#         continue
#     elif count % 2 == 0:
#         print(i, end=' ')
#         i += 2
#         count += 1
#     elif count % 2 != 0:
#         print(j, end=' ')
#         j += 4
#         count += 1

# 1 2 27 4 125 6 343 8 729 10 1331 12 2197 14 3375 16 4913 18 6859 20
# count = 1
# i = 1
# j = 2
# while count <= 21:
#     if count == 1:
#         count += 1
#         continue
#     elif count % 2 == 0:
#         c = i**3
#         print(c, end=' ')
#         i += 2
#         count += 1
#     elif count % 2 != 0:
#         print(j, end=' ')
#         j += 2
#         count += 1

# namelist = ('wub_wub', 'RubyPinch', 'go|dfish', 'Nitori')
# name1 = list(namelist)
# name1.append('pb122')
# namelist = tuple(name1)
# if 'pb122' in namelist:
#     print("Now I know pb122!")

# print("Hello!")
# name = input("Enter your name: ")
# print("Your name is " + name + ".")

# namelist = ['wub_wub', 'RubyPinch', 'go|dfish', 'Nitori']
# namelist.extend(['theelous3'])
# print(namelist)
# name = input("Enter your name: ")
# namelist.append(name)
# print(namelist)
# if name in namelist:
#     print("I know you!")
# else:
#     print("I don't know you.")

# name = {'__Myst__': 'cats',
#         'Arun': 'dogs',
#         'horusr': 'cats',
#         'caisa64': 'cats and dogs'}
# for pets in name.keys():
#    # pets = str(name.keys())
#    #  print(pets)
#     print(name.get(pets))
#
# print(('horusr', 'cats') in name.items())
# print(('horusr', 'dogs') in name.items())

a1 = 10


# def print_abc(xx):
#     a2 = 20
#     # print(a1)
#     return a2
#     print(a1)
#
#
# dd = print_abc("Hi")
# print(dd)

# def add(a,b):
#     return a+b
#
#
# c=add(10,20)
# print(c)

# def sub(a,b):
#     return a-b
#
#
# c=sub(10,20)
# print(c)

# def mul(a,b):
#     return a*b
#
#
# c=mul(10,20)
# print(c)


# for i in range(0,3):
#     for j in range(0,3):
#         print(j)
#         for k in range(0,3):
#             for l in range(3,0):
#                 print(l)
#             print(k)
#         print(j)
#     print(i)

# for i in range(0,3):
#     for j in range(3,0):
#         print(j)
#         for k in range(0,3):
#             for l in range(3,0):
#                 print(l)
#             print(k)
#         print(j)
#     print(i)
