def cat(inp):
    if inp == 'Mini':
        cab = 0
        while cab < 3:
            i = 0
            book = input('Do you want to book cab Y/N: ')
            if book == 'Y':
                start = int(input('Enter the start point: '))
                end = int(input('Enter the end point: '))
                dis = (end - start)
                rate(inp)
                print('Cab booked')
                Mini.pop(i)                
                cab += 1
                i += 1
                if cab == 3:
                    print('All cabs in category booked')
    if inp == 'Micro':
        cab = 0
        while cab < 3:
            i = 0
            book = input('Do you want to book cab Y/N: ')
            if book == 'Y':
                print('Cab booked')
                Micro.pop(i)
                rate(inp)
                cab += 1
                i += 1
                if cab == 3:
                    print('All cabs in category booked')
    if inp == 'Share':
        cab = 0
        while cab < 3:
            i = 0
            book = input('Do you want to book cab Y/N: ')
            if book == 'Y':
                print('Cab booked')
                Share.pop(i)
                rate(inp)
                cab += 1
                i += 1
                if cab == 3:
                    print('All cabs in category booked')
    if inp == 'Prime':
        cab = 0
        while cab < 3:
            i = 0
            book = input('Do you want to book cab Y/N: ')
            if book == 'Y':
                print('Cab booked')
                Prime.pop(i)
                rate(inp)
                cab += 1
                i += 1
                if cab == 3:
                    print('All cabs in category booked')


def rate(inp):
    price = category.get(inp)
    bill = dis*price
    print("The bill amount is ", bill)


category = {'Mini': 10, 'Micro': 20, 'Share': 30, 'Prime': 40}
Mini = ['c1', 'c2', 'c3']
Micro = ['c1', 'c2', 'c3']
Share = ['c1', 'c2', 'c3']
Prime = ['c1', 'c2', 'c3']
cabscount = len(Mini)+len(Micro)+len(Share)+len(Prime)
dis = 0

while cabscount != 0:
    # start = int(input('Enter the start point: '))
    # end = int(input('Enter the end point: '))
    # dis = (end - start)
    print('Available options are: ', category)
    cat(input('Enter category: '))
print('Cabs in all category is booked')






