# Srting palindrome


def palindrome(xx):
    rev = ""
    for i in xx:
        rev = i + rev
    return rev


inp = input('Enter String to find palindrome')
print(palindrome(inp))

