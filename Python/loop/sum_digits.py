# Write a program to calculate sum of digits of a number.
"""
Positive Test Case:
Input :
Enter number to find sum of digits: 1234

Output :
Sum of given number 1234 is 10

Negative Test case:
Input : 0
Output : Zero

Run count : 2
"""


def sum_digits(xx):
    n = xx
    i = 0
    sum_no = 0
    while n > 0:
        i = n % 10
        sum_no += i
        n = n // 10
    return sum_no


num = int(input('Enter number to find sum of digits: '))
if num > 0:
    print('Sum of given number', num, 'is', sum_digits(num))
elif num == 0:
    print('Zero')
elif num < 0:
    num = abs(num)
    sum_digits(num)
    print('Sum of given number', num, 'is', sum_digits(num))

