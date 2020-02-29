# Write a program to print all natural numbers from 1 to n. - using while loop
"""
Positive Test case:
Input : 5
Output : 1 2 3 4 5

Negative Test case:
Input : -1
Output : Negative number entered
"""
N = int(input())
if N > 0:
    for i in range(1, N+1):
        print(i, end=' ')
elif N == 0:
    print('Zero')
elif N < 0:
    print('Negative number entered')
