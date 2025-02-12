word = 'я купил бронетранспортер вчера большечем6'

words = word.split(' ')
new_words = []
for w in words:
    if len(w) > 6:
        w = w[:6] + '*'
    new_words.append(w)
print(' '.join(new_words))