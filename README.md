# RPSc
Rock Paper Scissors
Pseudo Code
User input => Using promt function ?
    1 = rock
    2= paper
    3 = scissors
Check if the user input is valid

Computer random => Use math.random() function?
    1 >> 3

Evaluation user vs computer
    user 1 computer 1 = draw => state draw
    user 1 computer 2 = computer win => Computer status +=1
    user 1 computer 3 = user win => User status +=1
    user 2 computer 1 = user win => User status +=1
    user 2 computer 2 = draw => state draw
    user 2 computer 3 = computer win => Computer status +=1
    user 3 computer 1 = computer win => Computer status +=1
    user 3 computer 2 = user win => User status +=1
    user 3 computer 3 = draw => state draw
use double nested switch condition function. For Ex: Switch user 1||2||3 then for 1 switch computer 1||2||3 and continue... => Is there any other better ways?

Loop all the above 5 times => use condition function computer status = 3, computer win; else user win
