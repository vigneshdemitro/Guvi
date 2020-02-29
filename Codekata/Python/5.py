string = input()
rev = ""
for j in range(1,len(string)+1):
    rev += string[-j]
if rev == string:
    print('yes')
else:
    print('no')
