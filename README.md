# project1ConnectFour 
#  WELCOME TO CONNECT FOUR #

## [CLICK TO PLAY](https://apimento.github.io/project1ConnectFour/) ##

<img width="600" alt="Screen Shot 2022-02-24 at 5 05 22 PM" src="https://user-images.githubusercontent.com/98665437/155617838-a7156916-d359-44df-bf61-32dc16a38bfe.png">


# OBJECTIVE # 
The first player to populate four(4) cells in a single line (vertical, horizontal or diagonal) wins. 

<img width="300" alt="Screen Shot 2022-02-24 at 5 07 44 PM" src="https://user-images.githubusercontent.com/98665437/155619109-1433e4a3-74ff-4576-82ec-d00f229b5d37.png">
<img width="300" alt="Screen Shot 2022-02-24 at 5 08 45 PM" src="https://user-images.githubusercontent.com/98665437/155619133-6aae6185-7430-48a5-a2bd-01059f5d4032.png">
<img width="300" alt="Screen Shot 2022-02-24 at 5 42 00 PM" src="https://user-images.githubusercontent.com/98665437/155619992-b65d8bfa-b0d7-4942-85af-8c983d9ccfa9.png">


# HOW TO PLAY # 
This version of the game is for two players. 
Each player will have a distinct coloured token (light or dark, in this case). 
One at a time, each player will click the row of cells they want to place their token in. The token will take the on the lowest unpopulated cell in that row. 

To the right of the game board is a guide to let users know whose turn it currently is. If the square border is around your color token, it is your turn.  

If all the cells in the board are populated and no player has connected a line of four of their tokens, then the game results in a tie. 

<img width="400" alt="Screen Shot 2022-02-24 at 5 12 39 PM" src="https://user-images.githubusercontent.com/98665437/155619340-06ade70d-7852-4d34-951f-21a784b973e1.png">

Clicking the "RESET BOARD" button will clear the game board of any popuated cells, and thus, start the game over.  

Be sure to play with your sound ON :)


# TOOLS #
This game was created using HTML5, CSS, JAVASCRIPT and 3 .WAV audio files. 


# CONTEXT AND LEARNING EXPERIENCE #
Currently I'm enrolled in General Assembly's Software Engineering Immersive course, based in Toronto, Canada. 
This is my submission for our first project, at the end of week 3 of a 12 week course. 

This project was an excellent learning opportunity for me. 

Initially, I had chosen this particular game becasue I thought that it would have coding similarities to "TicTacToe", and while there are some 
(functions that populate cells after click events, functions that check for a winner by counting connecting cells populated by a particular player, toggling 
who is the current player, etc).  

I was able to find a resource that helped me construct the game's win logic - without that, the logic would have been the most challenging aspect of the
game's programming. I now have a stronger understanding of how to create functions that iterate over specific elements 
(in this case the cells surrounding the cell populated by the player (ie- the event target) as opposed to iterating over every cell in the entire board. 

I gave myself the task of replicating my wireframe as closely as possible. This proved to become quite the challenge.
This is the wireframe I created using figma, before beginning development: 

<img width="400" alt="Screen Shot 2022-02-17 at 3 07 29 PM" src="https://user-images.githubusercontent.com/98665437/155620667-adafc9df-6111-4247-9704-4aec966914f8.png">


As a UX designer, I wanted to task myself with a scenario that reflected what the development process is like, as a developer, working with a UX team. 
Through many hours of troubleshooting, playing, and research, I was able to program my game to very closely resemble 
my wireframe. It was tedious, but art is nothing if not tedious.
To make my wireframe become reality, I relied heavily on CSS. I created the divs on HTML, then shaped them, then created a grid and placed each element in its 
appropriate position. I found that my elements were just slightly off in my grid, but I decided to let it remain that way for the time being. 

After creating and placing each other element, I realised that the stands for the game board would be the most difficult elements to create and position in CSS. 
When it came to it, I began to research how to move elements and then came upon the transform tool (which has now become my FAVORITE), which allows the developer
to rotate, move, resize, reproportion, flip, spin, etc. any element, regardless of whether or not it has a specific grid placement. 

Upon my wonderment at this new tool, I used it to manipulate other elements into positions that more accurately resembled the wireframe.   

# DESIGN CHOICES AND PERSPECTIVE #
<dl>
  <dt>Harmony</dt>
<dd>I wanted to create a harmonious screen in which all elements could be seen and accessed without any scrolling. </dd>
<dd>I wanted to include and image of an actual game board, which should match the mental model many users have of playing this game in the physical world. </dd>
<dd>I chose a palette of blues that are easy to look at, and in a variety of values and warmths. </dd>
</dl>

<dl>
  <dt>Accesibility</dt> 
  <dd>I chose to have the players' tokens have the highest and lowest colour values, in order to differentiate them from each other and any of the other elements on the page. This also allows anyone who may be colourblind or viewing the game on a greyscale screen, the ability to still fully play the game.  </dd>
  <dd>I chose you use big chunky buttons and big clear text to optimize visual accessibility. </dd>
</dl> 

<dl>
  <dt>Drama</dt>
  <dd>I chose sound effects (which are triggered by various click events and game outcomes) that feel appropriate for their corresponding event, while enhancing the 
drama of the game. </dd>
</dl>


# NEXT STEPS #
After first deployment, I've realized that the sizing of the game is different that what was previewed for me when working / debugging on VS code. This will have to be adjusted. For now, the game is best experienced at 67% screen width. 
In the future, I hope to impliment animations of tokens sliding into their appropriate places (rather than just having the cell change colour) and version
of the game where the player can play against the CPU. 



# CONTACT #
Feel free to contact me at: 
apimento92@gmail.com 
or on [linkedIn](https://www.linkedin.com/in/andrew-pimento-090080202/) 

Thanks for taking the time to visit my page! 
Andrew 
