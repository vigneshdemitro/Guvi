def pancheck(pan_no):
    first_str = pan[:5]
    num_str = pan[5:9]
    first_check = 0
    last_check = 1
    num_check = 1
    
    if first_str.isupper():
        first_check = 1
        
    for i in num_str:
        if int(i) >=1 and int(i) <= 9:
            continue
        num_check = 0
        
    if first_check == 1 and num_check == 1 and last_check == 1:
        print('pan')
    else:
        print('not pan')
        
        
pan = input()

if len(pan) == 10:
    for i in range(5):
        if pan[i].isalpha():
            first_pass = 1
        else:
            print('not pan')
            exit()
    
    for i in range(5,9):
        if pan[i].isdigit():
            num_pass = 1
        else:
            print('not pan')
            exit()
    
    if pan[len(pan)-1].isupper():
        last_pass = 1
    else:
        print('not pan')
        exit()
    
    if first_pass == 1 and num_pass == 1 and last_pass == 1:
        pancheck(pan)
        
else:
    print('not pan')
