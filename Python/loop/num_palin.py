# Write a program to check whether a number is palindrome or not.
"""
Positive Test Case:
Input 2:
Enter number to print reverse: 212

Output 2:
The given number is palindrome

Input 2:
Enter number to print reverse: 20120

Output 2:
Not a palindrome

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
    if num == reverse(num):
        print('The given number is palindrome')
    else:
        print('Not a palindrome')
elif num == 0:
    print('Zero')
elif num < 0:
    print('Negative number')

