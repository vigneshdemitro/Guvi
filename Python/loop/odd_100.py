# Write a program to print all even numbers between 1 to 100. - using while loop
"""
Positive test case:
Output : 1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99
"""

i = 1
while i < 100:
    if i % 2 == 0:
        i += 1
    elif i % 2 != 0:
        print(i, end=' ')
        i += 1
