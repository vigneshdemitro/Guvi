import random

user = {}
forms = []

# File Write:
def file_write(xx):
    f = open('reg_form.txt','a+')
    f.write('%s\r\n'%(xx))
    f.close()


# File read:
def file_read():
    f = open('reg_form.txt','r')
    c = eval(f.read())
    f.close()
    return c

# Registration form:
def registration_form(name,email,phno,password):
    key = random.randint(100,200)
    bal = 10000
    forms.append(name)
    forms.append(email)
    forms.append(phno)
    forms.append(password)
    forms.append(bal)
    user[key] = forms
    file_write(user)
    return key


def name():
    return input('Enter name: ')


def email():
    return input('Enter e-mail id: ')


def phone():
    return input('Enter Phone no: ')


def passwd():
    return input('Enter password: ')


# Login:
def login():
    while True:
        if choice == 1:
            name1 = name()
            email1 = email()
            phoneno1 = phone()
            passwd1 = passwd()
            ukey = registration_form(name1,email1,phoneno1,passwd1)
            print('Your unique key: '+str(ukey))
            return input(('Do you wish to continue Y/N: '))
        elif choice == 2:
            key = int(input('Enter your unique key: '))
            passrd = input('Enter your password: ')
            user_val = file_read()
            for k,v in user_val.items():
                if key == k and  passrd in v:
                    print('Login successful')
                    print('1.Check Balance\n2.Deposit\n3.Withdraw\n4.User Details\n5.Logout')
                    user_input = int(input())
                    menu(user_input,key)
                else:
                    print('Login failed! Plese enter valid unique key or password')
    return input(('Do you wish to continue Y/N: '))
        

# To check balance of user:
def balance(key):
    user_val = file_read()
    for k in user_val:
        if key == k:
            bal_val = user_val[key][4]
    return bal_val


# To withdraw to user a/c: 
def withdraw(key):
    amount = int(input('Enter amount to withdraw: '))
    user_val = file_read()
    bal = balance(key) - amount
    if bal >= 10000:
        user_val[key][4] = bal - amount
        print('Balance in a/c: ',balance(key))
    else:
        print('Available balance: ',balance(key))
        print('Insufficient minimum balance! Please enter lesser amount to withdraw')
        amount = int(input('Enter amount to withdraw: '))
        
 
# To deposit to user a/c:       
def deposit(key):
    amount = int(input('Enter amount to deposit: '))
    user_val = file_read()
    bal1 = balance(key)
    if amount >= 5000:
        user_val[key][4] = amount+bal1
        print('Availble balance in A/C:',balance(key))
    elif amount <= 5000:
        print('Enter amount greater than 5000 to deposit: ')
        amount = int(input('Enter amount to deposit: '))
 
 
# To get user details:   
def user_details(key):
    user_val = file_read()
    for k,v in user_val.items():
        if key == k:
            print('Name: '+' '+v[0]+'\n')
            print('e-mail id:'+' '+v[1]+'\n')
            print('Mobile No: '+' '+v[2]+'\n')
            print('Balance: '+' '+str(v[4])+'\n')
    

# To logout of application
def logout(key):
    print('Bye Bye')
    exit()

   
# Main menu after login
def menu(choice,userkey):
    if choice == 1:
        bal2 = balance(userkey)
        print('Available Balance in A/C: ',bal2)
        login()
    elif choice == 2:
        deposit(userkey)
    elif choice == 3:
        withdraw(userkey)
    elif choice == 4:
        user_details(userkey)
    elif choice == 5:
        logout(userkey)
    
        
print('Hello User!')
print('1. Do you want to register \n'+'2. Sign in')
choice = int(input('Enter your choice: '))
value = login()
def bank_menu():
    if value == 'Y':
        print('1.Check Balance\n2.Deposit\n3.Withdraw\n4.User Details\n5.Logout')
        user_input = int(input())
        return user_input
    else:
        cont = input('Do you wish to continue Press:C / Exit:E')
        if cont == 'C':
            login()
        else:
            exit()

forms.clear()
print('Bye Bye')


