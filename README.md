## clearEar- A Project to Train Your Musical Ear

## Game Methodology
There are two modes to clearEar:
1. Where you play a note and you try to guess the note and 
2. When a random sequence of notes in a major scale are played and you have to guess the key of those notes
    i. Easy: where the tonic is played softly in the background while other notes play and you can see the scale degree of those notes
    ii. Medium: where the tonic is played softly in the background but you can't see the scale degree of those notes (note the scale degree lines mentioned below don't exist here:color of background key is there and colors for each note populate over it in the center but are more transparent and slide left to right like all other notes)
    iii. Hard: where you can see the scale degrees of the notes but you can't hear the tonic in the background (no background color)
    iv. Expert: where you can only hear the notes (just changes color like mode 1 for each note played: no scale degree lines)

![piano-image](https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80)

## Page Structure
There is a navigation bar at the top of clearEar that slides between different instruments when you hover over it. When you choose one to play, it populates on the top-left of the screen. Below the navbar are buttons for different game modes for that instrument as well as two sliders to adjust the volume for all modes and the background key volume for mode 2

For the second mode:
Below the buttons, the band displays 7 horizontal lines, each representing a scale degree, each time a note in that scale degree is played a random beam of color shoots across the screen along that line from left to right. For Easy and Medium versions of mode 2, the background color also displays a color to represent the tonic of the scale and shows up as the same color as the 1st scale degree in that scale.

For the first mode:
The lines explained above don't exist and the band that they are on just lights up in a color when a random note is played

You can hit the Display Key Button for relevant instruments in the top-right corner to see the actual notes played on the instrument in the top-right div where the instrument is shown

## My First Steps:
I will begin the project by using sounds I make on Garageband and downloading them into my project folder
I will use a for loop and constructor function to play a random sound of the 12 notes when I hit the button and it will also display a random color within the band (a div) below 
I will set up an event listener to display mode 1 and 2
I will set up a more detailed wireframe and start implementing it

## Links to my Work

Current Trello Project Schedule: https://trello.com/b/enJ4lJfU/clearear-project and wireframe in this folder

## Credits 

The resources I will be using will be Garageband, Trello, Figma, and internet research