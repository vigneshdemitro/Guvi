# Write a program to count number of digits in a number.
"""
Positive Test Case:
Input 1 :
Enter number to find count of digits: 12345

Output 1:
Count of numbers in 12345 is 5

Input 2 :
Enter number to find count of digits: -12345

Output 2:
Count of numbers in 12345 is 5

Negative Test case:
Input : 0
Output : Zero

Run count : 10
"""


def count(xx):
    n = xx
    counts = 0
    while n > 0:
        n = n // 10
        counts += 1
    return counts


num = int(input('Enter number to find count of digits: '))
if num > 0:
    print('Count of numbers in', num, 'is', count(num))
elif num == 0:
    print('Zero')
elif num < 0:
    num = abs(num)
    count(num)
    print('Count of numbers in', num, 'is', count(num))

