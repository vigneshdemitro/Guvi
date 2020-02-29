def encrypt(text, s):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if char.isupper():
            result += chr((ord(char) + s - 65) % 26 + 65)
        else:
            result += chr((ord(char) + s - 97) % 26 + 97)
    return result


def decrypt(text, s):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if char.isupper():
            result += chr((ord(char) + (26-s) - 65) % 26 + 65)
        else:
            result += chr((ord(char) + (26-s) - 97) % 26 + 97)
    return result


text = input('Enter text: ')
print('Encrypt : 1\n'+'Decrypt : 2')
choice = int(input('Enter choice: '))
if choice == 1:
    s = int(input('Enter the Shift number: '))
    enp = encrypt(text,s)
    print("Text         : "+text)
    print("Shift        : "+str(s))
    print("Encryption   : "+enp)    
elif choice == 2:
    s = int(input('Enter the Shift number: '))
    dep = decrypt(text,s)
    print("Text         : "+text)
    print("Shift        : "+str(s))
    print("Decryption   : "+dep)
