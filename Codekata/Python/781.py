N = int(input())
list = []
for i in range(1, N+1):
  if N == 0:
      print('NULL')
  elif N > 0:
      a = 9 * i
      list.append(a)
print(*list, sep = ' ')
