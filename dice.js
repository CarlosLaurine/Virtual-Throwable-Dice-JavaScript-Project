/**
 * JS - Flex Fuel Calculator
 * @author Carlos Pinho
 * 
 */

//JS document's only function sortDice

function sortDice(){

	/*Generating a sortedNumber var and attributing it a number resulted from 
	  multiple math functions: "Math.random"(to generate a random number from 0 to 1)
	  times 6 (in order to make those generated numbers range between 0 to 6) plus 1
	  (since there are no "0 face" in a dice), and Math.ceil to shorten those float 
	  numbers generated into their respective greater integer neighbors (this way
	  the code ensures that the value outcomes will have a well defined range and thus 
	  will be predictable and processable)

	*/

var sortedNumber = Math.ceil((Math.random()*6) + 1);

/*switch case structure generated to change the main dice image's src value
  according to each sortedNumber var outcome
*/

switch(sortedNumber){

	case 1:

	//each case firs shows two alerts announcing the result, then change the image accordingly 

			alert("And the Result was .......")
			alert("Face " + sortedNumber + " !!")
			document.getElementById("diceFace").src = "Imgs//diceFace1.png";

	break;

	case 2:

			alert("And the Result was .......")
			alert("Face " + sortedNumber + " !!")
			document.getElementById("diceFace").src = "Imgs//diceFace2.png";

	break;

	case 3:

			alert("And the Result was .......")
			alert("Face " + sortedNumber + " !!")
			document.getElementById("diceFace").src = "Imgs//diceFace3.png";

	break;

	case 4:

			alert("And the Result was .......")
			alert("Face " + sortedNumber + " !!")
			document.getElementById("diceFace").src = "Imgs//diceFace4.png";

	break;

	case 5:

			alert("And the Result was .......")
			alert("Face " + sortedNumber + " !!")
			document.getElementById("diceFace").src = "Imgs//diceFace5.png";

	break;

	case 6:

			alert("And the Result was .......")
			alert("Face " + sortedNumber + " !!")
			document.getElementById("diceFace").src = "Imgs//diceFace6.png";

	break;


	/*In case no expected outcomes match some auto-generated sortedNumber var,
	  the default case defines that an alert asking the user to refresh his
	  browser page will pop up at the screen
	*/

	default:

		alert("Unknown Program Error -  Please Reset the Page")

	break;




}
}