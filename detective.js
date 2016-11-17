var Detective = function(dName, dSidekick)
{
	var name = dName;
	var sidekick = dSidekick;
	var solution = "none";
	var notebook = [];
	notebook.push("It was a dark and stormy night."); 	
	return {
		getName: function() {
		return name;},
		
		getSidekick: function(){
		return sidekick;},
		
		getNotebook: function(){
			return notebook;
		},
		
		getSolution: function(){
			return solution;
		},
		
		compareSolution: function(otherDetective){
			if (solution == otherDetective.getSolution())
			{ return true;
		}
		else
		{return false;
	}
		},
		setName: function(newName) {
		name = newName;
		},
		
		setSidekick: function (newSidekick){
		sidekick = newSidekick;
		},
		
		setSolution: function (newSolution){
			solution = newSolution;
		},
		
		addToNotebook: function (note){
			notebook.push(note);
		},
		
		solveCrime: function()
    {
		var response = name + " has solved the crime with the help of " + sidekick + "!";
    return response;
		} 
	}
};

var playerDetective = new Detective("Player 1", "a friend");
console.log(playerDetective.getName());

playerDetective.addToNotebook("The murderer drove a red car.");
playerDetective.addToNotebook("A button was left at the crime scene.");
playerDetective.addToNotebook("There was a woolen thread on the button.");
playerDetective.addToNotebook("There are water stains on Colonel Mustard's floor.");
playerDetective.addToNotebook("The butler drives a black car.");
playerDetective.addToNotebook("The femme fatale's evening gown does not have buttons.");
playerDetective.addToNotebook("Professor Moriarty is allergic to wool.");

var masterDetective = new Detective("Master Detective", "a friend");

masterDetective.setSolution("Colonel Mustard");

var nameDiv = document.getElementById("nameSection");

nameDiv.addEventListener("click", function(event) {
	if(event.target.nodeName == "BUTTON"){
			playerDetective.setName(event.target.textContent);
			var nameDisplay = document.getElementById("Detective Name");
	nameDisplay.textContent = "You have chosen " + playerDetective.getName() + "."};
});

var sidekickDiv = document.getElementById("sidekicks");

sidekickDiv.addEventListener("click", function(event){
	if(event.target.nodeName == "BUTTON"){
		playerDetective.setSidekick(event.target.textContent);
		var sidekickDisplay = document.getElementById("Sidekick Name");
		sidekickDisplay.textContent = "Your sidekick is " + playerDetective.getSidekick() + ".";
	}
	
});

var noteButton = document.getElementById("notebook");

function displayNotes()
{
	var caseFile = playerDetective.getNotebook();
	var numNotes = caseFile.length;
	var displayArea = document.getElementById("notesDisplay");
	for (var i = 0; i<numNotes; i++)
	{
		var listItem = document.createElement("li");
		listItem.textContent = caseFile[i];
		displayArea.appendChild(listItem);
	}
	noteButton.removeEventListener("click", displayNotes);
}

noteButton.addEventListener("click", displayNotes);

var suspectDiv = document.getElementById("suspects");

suspectDiv.addEventListener("click", function(event) {
	if(event.target.nodeName == "BUTTON"){
		    playerDetective.setSolution(event.target.textContent);
			var solutionDisplay = document.getElementById("playerGuess");
	        solutionDisplay.textContent =  "You say " + playerDetective.getSolution() + " did it."
			};
});

var finishDiv = document.getElementById("finish");
finishDiv.addEventListener("click", function(event) {
	if(event.target.nodeName == "BUTTON"){
		var result;
		   if(playerDetective.compareSolution(masterDetective))
		   {
			   result = playerDetective.solveCrime();
		   }
		   else
		   {
			   result= "Nope, try again!";
		   } 
	var resultDisplay = document.getElementById("show results");
    resultDisplay.textContent = result;
	}	
});


