string = input()
rev = ""
vowels = ['a','e','i','o','u']
out = ""
for j in range(1,len(string)+1):
    rev += string[-j]
for i in rev:
    if i in vowels:
        continue
    out += i
if len(out) == 0:
	print(-1)
else:
	print(out)
