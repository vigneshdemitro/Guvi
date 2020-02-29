inp = input()
check = inp
rev = ""
for x in check:
  rev = x + rev
if inp == rev:
  print(1)
else:
  print(0)
