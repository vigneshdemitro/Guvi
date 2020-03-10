inputString = input().replace('.','')
inpString = inputString.split()
numberArray = []
for item in inpString:
    if item.isdigit():
        numberArray.append(int(item))
print(max(numberArray))