# Write a program to find first and last digit of a number.
"""
Positive Test Case:
Input 1 :
Enter number to find first & last digit: 1234

Output 1:
First digit in 1234 is 1
Last digit in 1234 is 4

Input 2 :
Enter number to find first & last digit: -1234

Output 2:
First digit in 1234 is 1
Last digit in 1234 is 4

Negative Test case:
Input : 0
Output : Zero

Run count : 10
"""


def first(xx):
    n = xx
    while n >= 10:
        n = n // 10
    return n


def last(xx):
    n = xx
    while n > 0:
        n = n % 10
        break
    return n


num = int(input('Enter number to find first & last digit: '))
if num > 0:
    print('First digit in', num, 'is', first(num))
    print('Last digit in', num, 'is', last(num))
    exit()
elif num == 0:
    print('Zero')
elif num < 0:
    num = abs(num)
    print('First digit in', num, 'is', first(num))
    print('Last digit in', num, 'is', last(num))
    exit()
