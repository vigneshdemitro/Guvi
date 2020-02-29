ques = {'1.Capital of TamilNadu': 'Chennai',
        '2.Capital of Andhra Pradesh': 'Amaravathi',
        '3.Capital of Uttar Pradesh': 'Lucknow',
        '4.Capital of Arunachal Pradesh': 'Itanagar',
        '5.Capital of Punjab': 'Chandigarh'}

option1 = {1: 'Chennai',
           2: 'Trichy',
           3: 'Coimbatore',
           4: 'Madurai'}

option2 = {1: 'Hyderabad',
           2: 'Amaravathi',
           3: 'Vijayawada',
           4: 'Ongole'}

option3 = {1: 'Kanpur',
           2: 'Agra',
           3: 'Ghazidabad',
           4: 'Lucknow'}

option4 = {1: 'Dibrugarh',
           2: 'Jorhat',
           3: 'Itanagar',
           4: 'Gohpur'}

option5 = {1: 'Chandigarh',
           2: 'Amritsar',
           3: 'Pathankot',
           4: 'Ludhiana'}


def opt(x):
    if x == 1:
        print(option1)
    elif x == 2:
        print(option2)
    elif x == 3:
        print(option3)
    elif x == 4:
        print(option4)
    elif x == 5:
        print(option5)


def quiz(xx):
    if xx == 1:
        return option1.get(xx)
    elif xx == 2:
        return option2.get(xx)
    elif xx == 3:
        return option3.get(xx)
    elif xx == 4:
        return option4.get(xx)
    elif xx == 5:
        return option5.get(xx)


score = 0
j = 1
name = input('Enter your name: ')
print('Hello ' + name + " Let's Play Quiz")
for i in ques.keys():
    print(i)
    if j >= 1:
        opt(j)
        choosedoption = int(input('Enter the option number: '))
        answer = quiz(choosedoption)
        j += 1
        if answer == ques.get(i):
            # print(ques.get(i))
            score += 5
            print(score)

print('Your final score is ',score)
