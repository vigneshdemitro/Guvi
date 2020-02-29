import random
life = 4
value = random.randint(1, 10)
print("Available life: 5")
inp = int(input('Enter number between 1 and 10 to play: '))

while life <= 4:
    print("Available life: ", life)
    life -= 1
    if inp == value:
        print('You won the game', value)
        break
    else:
        inp = int(input('Enter number between 1 and 10 to play: '))

if inp != value:
    print("You lose the game")
    print('The value is ', value)
