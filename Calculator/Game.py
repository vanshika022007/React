player1 = input("Enter rock, paper, scissor: ")
player2 = input("Enter rock, paper, scissor: ")

def win(player1,player2):
    if player1 == "scissor" and player2 == "paper":
        return "Player1 wins"

    elif player2 == "scissor" and player1 == "paper":
        return "Player2 wins"

    elif player1 == "rock" and player2 == "paper":
        return "Player2 wins"

    elif player1 == "paper" and player2 == "rock":
        return "Player1 wins"

    elif player1 == "scissor" and player2 == "rock":
        return "Player2 wins"

    elif player1 == "rock" and player2 == "scissor":
        return "Player1 wins"

    else:
        return "Draw"

x = print(win(player1,player2))

player1 = input("Enter rock, paper, scissor: ")
player2 = input("Enter rock, paper, scissor: ")

y = print(win(player1,player2))

player1 = input("Enter rock, paper, scissor: ")
player2 = input("Enter rock, paper, scissor: ")

z = print(win(player1,player2))

print(x,y,z)

def win_time(x,y,z):
    if x == "Player1 wins" and y == "Player1 wins" and z =="Player1 wins":
        return "Player 1 won all the rounds"

    elif x == "Player2 wins" and y == "Player2 wins" and z =="Player2 wins":
        return "Player 2 won all the rounds"

    elif x == "Player1 wins" or y == "Player1 wins" or z == "Player1 wins":
        return "Player2 won 2 rounds"

    elif x == "Player2 wins" or y == "Player2 wins" or z == "Player2 wins":
        return "Player1 won 2 rounds"
    
    elif x == "Draw" or y == "Draw" or z == "Draw":
        return "Draw"

    elif x == "Player1 wins" and (y == "Draw" or z == "Draw"):
        return "Both the players won 1 round"
    
    elif y == "Player1 wins" and (x == "Draw" or z == "Draw"):
        return "Both the players won 1 round"

    elif z == "Player1 wins" and (y == "Draw" or x == "Draw"):
        return "Both the players won 1 round"

    elif x == "Player1 wins" and (y == "Draw" and z == "Draw"):
        return "Player1 won 1 round"

    elif y == "Player1 wins" and (x == "Draw" and z == "Draw"):
        return "Player1 won 1 round"

    elif z == "Player1 wins" and (y == "Draw" and x == "Draw"):
        return "Player1 won 1 round"

    elif x == "Player2 wins" and (y == "Draw" and z == "Draw"):
        return "Player2 won 1 round"

    elif y == "Player2 wins" and (x == "Draw" and z == "Draw"):
        return "Player2 won 1 round"

    elif z == "Player2 wins" and (y == "Draw" and x == "Draw"):
        return "Player2 won 1 round"
    
print(win_time(x,y,z))

#Do it by playercount 