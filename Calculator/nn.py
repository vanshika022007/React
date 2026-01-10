choice = input()
a,b = map(int,input().split())

def greater(a,b):
        if a>b:
            print(a)
        elif b>a:
            print(b)

if choice == "G":
    greater(a,b)

def smaller(a,b):
        if a<b:
            print(a)
        elif b<a:
            print(b)

if choice == "S":
    smaller(a,b)