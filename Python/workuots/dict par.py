#Workouts

#Sort the list
# l1 = [3, 1, 4, 2, 5]
# l1.sort()
# print(l1)

# #print the squares of all the number in the list
# l2 = [3, 1, 4, 2, 5]
# l3 = []
# for i in l2:
#     c = i**2
#     l3.append(c)
# print('The available list: ',l2)
# print('Square of numbers in list: ',l3)

# #print all the elements in the list

# l3 = [
#     (105, "d"),
#     (21, "z"),
#     (0, "v")
# ]
# l4 = []
# for i in l3:
#     l4.append(i[0])
#     l4.append(i[1])
# print(l4)

# #Print all the value in the list
# #print the hex value of green
# #print the hex codes of all colors

# l = [
#     {
#         "color": "red",
#         "value": "#f00"
#     },
#     {
#         "color": "green",
#         "value": "#0f0"
#     },
#     {
#         "color": "blue",
#         "value": "#00f"
#     }
# ]
# print(l)
# retrieve = input('Enter the color to print value: ')
# for item in l:

#Print the languages that are inferior to Python

# py = {'Python': 'Rocks', 'inferior': ['java', 'cobol']}
# inf = py.get('inferior')
# for i in py.keys():
#     if i == 'inferior':
#         print(py.get(i))

# Print my Bill

# prices = {'apple': 0.40, 'banana': 0.50}
# my_purchase = {
#     'apple': 1,
#     'banana': 6}
#
#
# def bill(inp):
#     bills = 0
#     qty = my_purchase.get(inp)
#     indirate = qty*prices.get(inp)
#     bills += indirate
#     return bills
#
#
# tbill = 0
# for i in my_purchase.keys():
#     print('Items Bought:',i,'Quantity:',my_purchase.get(i))
#     itembill = bill(i)
#     tbill += itembill
#
# print('Total bill amount: ',tbill)

# print(py[''])
#
#
# #print the items
# #print the roles


junk = {
    "characters": {
        "Lonestar": {
            "id": 55923,
            "role": "renegade",
            "items": [
                "space winnebago",
                "leather jacket"
            ]
        },
        "Barfolomew": {
            "id": 55924,
            "role": "mawg",
            "items": [
                "peanut butter jar",
                "waggy tail"
            ]
        },
        "Dark Helmet": {
            "id": 99999,
            "role": "Good is dumb",
            "items": [
                "Shwartz",
                "helmet"
            ]
        },
        "Skroob": {
            "id": 12345,
            "role": "Spaceballs CEO",
            "items": [
                "luggage"
            ]
        }
    }
}
print(junk["characters"]["Lonestar"]["items"])



# wtf = {2: [1, 2, 3], 'a': {'b': {'c': {'d': {'e': [1, 2, 3]}}}}}
#
# #Get the first array value for the key 2
# #Print all the array value for the key 2
# #Print value of key 'a','b','c','d','e'
# #Print the sum of the array with key 'e'
# #set value of key 'e' to ['Chera','Chola','Pandiya']
#
# print(wtf['a']['b']['c']['d']['e'])
# #Get the value Mats from the Dict
#
# body = {
#     'query': {
#         'filtered': {
#             'query': {
#                 'match': {'description': 'addictive'}
#             },
#             'filter': {
#                 'term': {'created_by': 'Mats'}
#             }
#         }
#     }
# }
#
# #Modify the below statement to print Mats
# print(body["query"]['filtered']['filter'])
#
#
# # print the IMDB star rating ( 6.7)
# # print the length of the movie
#
# movie_box = {
#     "Robin Hood: Men in Tights": {
#         "imdb_stars": 6.7,
#         "length": 104,
#         "stars": [ {"name": "Cary Elwes", "imdb": "nm0000144", "role": "Robin Hood"},
#                    {"name": "Richard Lewis", "imdb": "nm0507659", "role": "Prince John"} ]
#     }
# }
#
# print(movie_box["Robin Hood: Men in Tights"])
