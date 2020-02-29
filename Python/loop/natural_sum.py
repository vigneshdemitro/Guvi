# Write a program to find sum of all natural numbers between 1 to n.
"""
Positive Test case:
Input : 5
Output : 15

Negative Test case:
Input : -1
Output : Negative number entered
"""
N = int(input())
sum = 0
if N > 0:
    for i in range(1, N+1):
        sum += i
elif N == 0:
    print('Zero')
elif N < 0:
    print('Negative number entered')
print(sum)
