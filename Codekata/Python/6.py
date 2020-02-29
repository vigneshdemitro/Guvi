inp = input()
vowels = ['a','e','i','o','u']
a = 0
for i in inp:
    if i in vowels:
        a = 1
if a == 1:
    print('yes')
elif a == 0:
	print('no')
