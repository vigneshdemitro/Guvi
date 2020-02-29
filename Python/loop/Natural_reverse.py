# Write a program to print all natural numbers from n to 1.
"""
Positive Test case:
Input : 5
Output : 5 4 3 2 1

Negative Test case:
Input : -1
Output : Negative number entered
"""
N = int(input())
if N > 0:
    for i in range(N, 0, -1):
        print(i, end=' ')
elif N == 0:
    print('Zero')
elif N < 0:
    print('Negative number entered')
