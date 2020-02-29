# Write a program to calculate product of digits of a number.
"""
Positive Test Case:
Input :
Enter number to find product of digits: 124

Output :
Product of given number 124 is 18

Negative Test case:
Input : 0
Output : Zero

Run count : 1
"""


def prod_digits(xx):
    n = xx
    i = 0
    product = 1
    while n > 0:
        i = n % 10
        product *= i
        n = n // 10
    return product


num = int(input('Enter number to find product of digits: '))
if num > 0:
    print('Product of given number', num, 'is', prod_digits(num))
elif num == 0:
    print('Zero')
elif num < 0:
    num = abs(num)
    print('Product of given number', num, 'is', prod_digits(num))

