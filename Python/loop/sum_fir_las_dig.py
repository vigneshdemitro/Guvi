# Write a program to find sum of first and last digit of a number.
"""
Positive Test Case:
Input 1 :
Enter number to find first & last digit: 1234

Output 1:
Sum of First & last digit in 1234 is 5

Input 2 :
Enter number to find first & last digit: -1234

Output 2:
Sum of First & last digit in -1234 is 5

Negative Test case:
Input : 0
Output : Zero

Run count : 3
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
sum_fl = first(num) + last(num)
if num > 0:
    print('Sum of First & last digit in', num, 'is', sum_fl)
    exit()
elif num == 0:
    print('Zero')
elif num < 0:
    num = abs(num)
    print('Sum of First & last digit in', num, 'is', sum_fl)
    exit()
