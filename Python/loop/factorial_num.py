# Write a program to calculate factorial of a number.
"""
Positive Test case:
Input :
Enter number to find its factorial: 3

Output :
Factorial of given number 3 is 6

Negative Test case:
Input:
Enter number to find its factorial: 0

Output:
Zero

Run count : 1
"""


def factorial(xx):
    fact = 1
    i = 1
    for i in range(1, xx+1):
        fact = fact * i
    return fact


num = int(input('Enter number to find its factorial: '))
if num > 0:
    print('Factorial of given number', num, 'is', factorial(num))
elif num == 0:
    print('Zero')
elif num < 0:
    print('Negative')
