f = open("calc.txt","a+")

def file_write(aa, bb):
    a = open("calc.txt","a+")
    a.write("First number: %d\r\n"%(aa))
    a.write("Second number: %d\r\n"%(bb))


def file_write1(xx):
    a = open("calc.txt","a+")
    a.write()


def calculation(xx, yy, zz):
    if xx == 'add':
        ad = add(yy, zz)
        print('The addition of ', yy, ' &', zz, ' is', ad)   
        f.write('The addition of '+ str(yy)+' & '+str(zz)+' is '+str(ad)+'\r\n')
    elif xx == 'sub':
        su = sub(yy, zz)
        print('The subtraction of ', yy, ' &', zz, ' is', su)
        f.write('The subtraction of '+ str(yy)+' & '+str(zz)+' is '+str(su)+'\r\n')
    elif xx == 'mul':
        mu = mul(yy, zz)
        print('The multiplication of ', yy, ' & ', zz, ' is', mu)
        f.write('The multiplication of '+ str(yy)+' & '+str(zz)+' is '+str(mu)+'\r\n')
    elif xx == 'div':
        di = div(yy, zz)
        print('The division of ', yy, ' &', zz, ' is', di)
        f.write('The division of '+ str(yy)+' & '+str(zz)+' is '+str(di)+'\r\n')



def add(a, b):
    return a + b 


def sub(a, b):
    return a - b
    

def mul(a, b):
    return a * b


def div(a, b):
    return a / b


count = 1
while count > 0:
    a1 = int(input('Enter first number: '))
    f.write('Enter first number: %d\r\n'%(a1))
    b1 = int(input('Enter second number: '))
    f.write('Enter second number: %d\r\n'%(b1))
    calc = {1: 'add', 2: 'sub', 3: 'mul', 4: 'div'}
    f.write(str(calc))
    print('Which operation you want to perform', calc)
    f.write('Which operation you want to perform'+str(calc)+'\r\n')
    opt = int(input('Enter option: '))
    f.write('Enter option: %d\r\n' %(opt))
    calculation(calc.get(opt),a1,b1)
    cont = input('Do you wish to continue Y/N: ')
    f.write('Do you wish to continue Y/N: '+cont+'\r\n')
    if cont == 'Y':
        count += 1
    elif cont == 'N':
        print('Bye Bye')
        f.write('Bye Bye \r\n')
        break

f.close()

f1 = open("calc.txt","r")
if f1.mode == 'r':
    c = f1.read()
print(c)
f1.close()