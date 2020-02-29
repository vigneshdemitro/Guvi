# Write a program to check whether a number is Prime number or not.
"""
Positive Test case:
Input :
Enter number to check prime or not: 100

Output :
Not a prime number

Negative Test case:
Input:
Enter number to check prime or not: 0

Output:
Zero

Run count : 5
"""


def prime(xx):
    flag = 1
    for i in range(2, int(xx/2)):
        if xx % i == 0:
            flag = 0
            return flag
    return flag


choice = 'Y'
while choice == 'Y':
    num = int(input('Enter number to check prime or not: '))
    if num == 1:
        print('1 is not a prime number')
        choice = input('Do you wish to continue Y/N: ')
    elif num == 0:
        print('Zero')
        choice = input('Do you wish to continue Y/N: ')
    elif num == 2:
        print('2 is an Even Prime number')
        choice = input('Do you wish to continue Y/N: ')
    elif num > 2:
        check = 1
        if check == prime(num):
            print('The given number is prime')
            exit()
        else:
            print('Not a prime number')
            exit()
