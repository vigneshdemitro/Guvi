# Write a program to print reverse of digits of a given number.
"""
Positive Test Case:
Input :
Enter number to print reverse: 1234

Output :
Reverse of given number 1234 is 4321

Negative Test case:
Input : 0
Output : Zero

Run count : 1
"""


def reverse(xx):
    n = xx
    i = 0
    rev = 0
    while n > 0:
        i = n % 10
        rev = (rev * 10) + i
        n = n // 10
    return rev


num = int(input('Enter number to print reverse: '))
if num > 0:
    print('Reverse of given number', num, 'is', reverse(num))
elif num == 0:
    print('Zero')
elif num < 0:
    num = abs(num)
    print('Reverse of given number', num, 'is', reverse(num))

