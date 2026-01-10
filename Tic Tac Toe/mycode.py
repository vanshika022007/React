a1 = 1
a2 = 2
a3 = 3
a4 = 4
a5 = 5
a6 = 6
a7 = 7
a8 = 8
a9 = 9

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

def winner(X):
    if a1 == X and a2 == X and a3 == X:
        return True
    if a4 == X and a5 == X and a6 == X:
        return True
    if a7 == X and a8 == X and a9 == X:
        return True
    if a1 == X and a4 == X and a7 == X:
        return True
    if a2 == X and a5 == X and a8 == X:
        return True
    if a3 == X and a6 == X and a9 == X:
        return True
    if a1 == X and a5 == X and a9 == X:
        return True
    if a3 == X and a5 == X and a7 == X:
        return True
    
def check(position):
    if position < 1 or position > 9:
        return False
    if position == 1 and a1 != 1:
        return False
    if position == 2 and a2 != 2:
        return False
    if position == 3 and a3 != 3:
        return False
    if position == 4 and a4 != 4:
        return False
    if position == 5 and a5 != 5:
        return False
    if position == 6 and a6 != 6:
        return False
    if position == 7 and a7 != 7:
        return False
    if position == 8 and a8 != 8:
        return False
    if position == 9 and a9 != 9:
        return False
    return True

def update(position, turn):
    global a1,a2,a3,a4,a5,a6,a7,a8,a9
    if position == a1:
        a1 = turn
    elif position == a2:
        a2 = turn
    elif position == a3:
        a3 = turn
    elif position == a4:
        a4 = turn
    elif position == a5:
        a5 = turn
    elif position == a6:
        a6 = turn
    elif position == a7:
        a7 = turn
    elif position == a8:
        a8 = turn
    elif position == a9:
        a9 = turn

turn = "X"
moves = 0

while True:
    tic()
    print("Player",turn,"is playing.")
    position = int(input("Write your position-- "))
    if check(position) == False:
        print("Invalid move, try again!")
    
    update(position,turn)
    if check(position) == True:
        moves += 1

    if winner(turn):
        tic()
        print("Player",turn,"wins!")
        break

    if moves == 9:
        tic()
        print("Game Draw!")
        break
    
    if turn == "X":
        turn = "O"
    else:
        turn = "X"
    