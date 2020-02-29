# Write a program to print all alphabets from a to z. - using while loop
"""
Positive test case:
Output : a b c d e f g h i j k l m n o p q r s t u v w x y z
"""
ch = 97
while ch < 123:
    print(chr(ch), end=' ')
    ch += 1
