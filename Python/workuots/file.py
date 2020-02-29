# f = open('dict.txt','w+')
# rollno = {'S1':1,'S2':2,'S3':3,'S4':4}
# marks = {'S1':200,'S2':150,'S3':180,'S4':190}

student = {}
strength = int(input('Enter student strength: '))
for i in range(1,strength+1):
    print('Enter mark of Student ',i,end=' : ')
    marks = int(input())
    student[i] = marks
a = open('student.txt','a+')
a.write('%s\r\n'%(student))
a.close()
b = open('student.txt','r')
c = eval(b.read())
if student == c:
    print(c)
b.close()
