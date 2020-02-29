word = ['GOD', 'WON', 'WIN', 'SUCCESS']
guessed = ''
guess = input('Enter a character to check: ')
life = 5
while life > 0:
    for char in word:
        if char in word:
            guessed += char
            print(guessed)
        else:
            life -= 1
            input('Enter a character to check: ')
