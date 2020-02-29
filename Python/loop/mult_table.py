# Write a program to print multiplication table of any number.
"""
Postive test case:
Input :
Enter the number to generate table: 10
Enter the number upto which table should generate: 15

Output :
Table of 10 for 15 Numbers:
10 20 30 40 50 60 70 80 90 100 110 120 130 140 150 

Negative test case:
Input : -1
Output : Negative number

Run Count : 5
"""


def mul(xx, yy):
    i = 1
    count = 1
    while count <= yy:
        table = i * xx
        i += 1
        count += 1
        print(table, end=' ')


T = int(input('Enter the number to generate table: '))
if T > 0:
    N = int(input('Enter the number upto which table should generate: '))
    print('Table of', T, 'for', N, 'Numbers:')
    mul(T, N)
elif T == 0:
    print('Zero')
elif T < 0:
    print('Negative number')
