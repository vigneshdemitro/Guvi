vowels = {'a':97,'e':101,'i':105,'o':111,'u':117}
string = input()
sum_vowels = 0
weight = 0
for j in string:
    for i in vowels:
        if j == i:
            sum_vowels += vowels[j]
        weight += ord(i)
if weight == sum:
    print(1)
else:
    print(0)
