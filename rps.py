import random

option = ["rock", "paper", "scissors"]
# scoreboard soon
# comsco = 0
# plasco = 0
while True:
    computer = random.choice(option)
    player = input("rock, paper, or scissors? type stop to quit.\n")
    if player == "stop":
        print("session ending")
        break

    print("computer:" + computer)
    print("player:" + player)

    if player == computer:
        print("tied")

    elif(
        (player == "rock" and computer == "scissors") or
        (player == "scissors" and computer == "paper") or
        (player == "paper" and computer == "rock")
    ):
        print("user won")
        # plasco += 1
    else:
        print("computer won")
        # comsco += 1
        # print(comsco)
        # print(plasco)

    print("")