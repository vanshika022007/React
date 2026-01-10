a1 = "1"
a2 = "2"
a3 = "3"
a4 = "4"
a5 = "5"
a6 = "6"
a7 = "7"
a8 = "8"
a9 = "9"
def tic():
    print("      *       *     ")
    print(" ",a1,"  *  ",a2,"  *  ",a3,"  ")
    print("      *       *     ")
    print("* * * * * * * * * * *")
    print("      *       *     ")
    print(" ",a4,"  *  ",a5,"  *  ",a6,"  ")
    print("      *       *     ")
    print("* * * * * * * * * * *")
    print("      *       *     ")
    print(" ",a7,"  *  ",a8,"  *  ",a9,"  ")
    print("      *       *     ")

def update(position):
    global a1,a2,a3,a4,a5,a6,a7,a8,a9
    if position == a1:
        a1 = X
    elif position == a2:
        a2 = X
    elif position == a3:
        a3 = X
    elif position == a4:
        a4 = X
    elif position == a5:
        a5 = X
    elif position == a6:
        a6 = X
    elif position == a7:
        a7 = X
    elif position == a8:
        a8 = X
    elif position == a9:
        a9 = X
for i in range(1,10):
    X = input("Write your symbol-- ")
    position = input("Write your position-- ")
    update(position)
    tic()