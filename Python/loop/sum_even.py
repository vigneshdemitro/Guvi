# Write a program to find sum of all even numbers between 1 to n.
"""
Positive test case:
Input : 5
Output : 6

Negative test case:
Input : -1
Output : Negative number
Input : 0
Output : Zero
"""
N = int(input())
i = 1
sum_even = 0
if N > 0:
    while i < N:
        if i % 2 == 0:
            sum_even += i
            i += 1
        elif i % 2 != 0:
            i += 1
    print(sum_even)
elif N == 0:
    print('Zero')
elif N < 0:
    print('Negative number')

