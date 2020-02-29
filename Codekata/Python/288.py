n = int(input())
string_inp = list(x for x in input().split())[:n]
prefix = input()
count = 0
for i in string_inp:
	if(i.startswith(prefix)):
		count += 1
print(count)
