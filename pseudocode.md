# Create a page that displays a mind reader game

# Requirements
    Updates without refreshing.
    Responds to the screen it appears on.
    Styled

# Data Structures and Functions
    Variables
       *  page stores the current page.
       *  header links to the header in html to output what the header is.
       *  helperText links to the helperText in html to ouput the current helperText.
       *  button1 links to the button1 in html to output the current button1 text.
       *  button2 links to the button2 in html to output the current button2 text.
       *  symbol stores an array of 10 symbols.
       *  yourSymbol stores a symbol that is assigned radomly to a number divisible by 9.
    Fucntions
        * updatePage function: updates the page with the values of header, helperText, button1, and button2 based on the current value of page.
        * nextPage function: increases the value of page by 1 and then uses the updatePage function.
        * restartPage function: if the value of page is equal to 0, then increases the value of page by 1 and updates the page, else sets the value of page to 0 and then uses the updatePage function.
        * randomizeSymbol function: randomizes the array of symbols, using a for loop assigns a radom symbol to each number from 1-99, all numbers divisible by 9 get the same symbol.
        * hideButton1 function: a function to hide button 1 if the page value is 0 or 5??? how do i implement this?
        start function: set the page to 0 and updatePage
# Program
START
init()

CREATE page CREATE header CREATE helperText CREATE button1 CREATE button2

updatePage

if page is equal to 0 populate the page with the current values header: "I can read your mind" button1: hideButton! function helperText: "" button2: Go

nextPage

if page is equal to 1 populate the page with the current values header: "pick a number from 01-99" button1: "NEXT" helperText: "when you have your number click next" button2: reset

nextPage

if page is equal to 2 populate the page with the current values header: "add both digits together to get a new number" button1: "NEXT" helperText: "Ex: 14 is 1+4=5 click next to proceed" button2: reset

nextPage

if page is equal to 3 populate the page with the current values header: "subtract your new number from the original number" button1: "NEXT" helperText button2: reset

nextPage

if page is equal to 4 populate the page with the current values header: randomizeSymbol function button1: "REVEAL" helperText: "Find your new number note the symbol next to it. button2: reset

nextPage

if page is equal to populate the page with the current values header: "yourSymbol" button1: hideButton1 helperText: "your symbol is: yourSymbol" button2: reset