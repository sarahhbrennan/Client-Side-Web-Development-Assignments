//function for welcome
function quiz()
{	
	//declare variables
	var name, welcomeMessage;
	name = document.getElementById("player").value;
	welcomeMessage = "Welcome to the quiz "+name;
	if(name == "")
	{
		alert("Please enter a name");
	}
	else
	{
		document.getElementById("welcomePlayer").innerHTML = welcomeMessage;
		//hides the ability to input player name and start playing
		document.getElementById("playerStart").hidden = true;
		//displays question tabs and submit button
		document.getElementById("questions").hidden = false;
		document.getElementById("submitButton").hidden = false;	
		document.getElementById("refreshButton").hidden = false;		
	}
	
}
//function for showing each question when button clicked
function showQuestion(evt, questionNum) 
{
    //declare variables
    var i, questionData, questionLinks;

    //hide all elements in questionData
    questionData = document.getElementsByClassName("questionData");
    for (i = 0; i < questionData.length; i++) {
        questionData[i].style.display = "none";
    }

    //when a question tab button clicked, that tab is set to active
    document.getElementById(questionNum).style.display = "block";
    evt.currentTarget.className += " active";
}
//function for answering questions
function submit()
{
	//declare variables
	var i, correct, question1Value, correctMessage;
	correct = 0;
	
	//goes through each questions to see if they have all been attempted, if not error
	if(document.answers1.science[0].checked == false && document.answers1.science[1].checked == false && document.answers1.science[2].checked == false && document.answers1.science[3].checked == false && document.answers1.science[4].checked == false || document.answers2.sport[0].checked == false && document.answers2.sport[1].checked == false && document.answers2.sport[2].checked == false && document.answers2.sport[3].checked == false || document.getElementById("question3Answer").value == "" || document.getElementById("answers4").value == "empty" || document.answers5.movies[0].checked == false && document.answers5.movies[1].checked == false && document.answers5.movies[2].checked == false && document.answers5.movies[3].checked == false)
	{
		alert("Please attempt all questions before submitting")
	}
	//if all questions have an answer then check if answers are correct
	else
	{
		//Science question
		if(document.answers1.science[1].checked == true && document.answers1.science[2].checked == true && document.answers1.science[0].checked == false && document.answers1.science[3].checked == false && document.answers1.science[4].checked == false)
		{
			correct++;
			document.getElementById("correct1").hidden = false;
		}
		else
		{
			document.getElementById("correctAnswer1").hidden = false;
			document.getElementById("wrong1").hidden = false;
		}
		
		//Sport Question
		if(document.answers2.sport[1].checked == true)
		{
			correct++;
			document.getElementById("correct2").hidden = false;
		}
		else
		{
			document.getElementById("correctAnswer2").hidden = false;
			document.getElementById("wrong2").hidden = false;
		}
		
		//Music Question
		if(document.getElementById("question3Answer").value == "Pete Best" || document.getElementById("question3Answer").value == "pete best")
		{
			correct++;
			document.getElementById("correct3").hidden = false;
		}
		else
		{
			document.getElementById("correctAnswer3").hidden = false;
			document.getElementById("wrong3").hidden = false;
			
		}
		
		//Geography Question
		if(document.getElementById("answers4").value == "a")
		{
			correct++;
			document.getElementById("correct4").hidden = false;
		}
		else
		{
			document.getElementById("correctAnswer4").hidden = false;
			document.getElementById("wrong4").hidden = false;
		}
		
		//Movies question
		if(document.answers5.movies[2].checked == true)
		{
			correct++;
			document.getElementById("correct5").hidden = false;
		}
		else
		{
			document.getElementById("correctAnswer5").hidden = false;
			document.getElementById("wrong5").hidden = false;
		}	

		if(correct==5)
		{
			document.getElementById("winner").hidden = false;	
		}
		else if(correct==4)
		{
			document.getElementById("4correct").hidden = false;	
		}
		else if(correct==3)
		{
			document.getElementById("3correct").hidden = false;	
		}
		else if(correct==2)
		{
			document.getElementById("2correct").hidden = false;	
		}
		else if(correct==1)
		{
			document.getElementById("1correct").hidden = false;	
		}
		else
		{
			document.getElementById("loser").hidden = false;	
		}
		correctMessage = "You got "+correct+"/5 right";
		document.getElementById("result").innerHTML = correctMessage;
		document.getElementById("submitButton").hidden = true;	
		document.getElementById("refreshButton").hidden = true;
	}
	
}

//function to reset all answers given
function refresh()
{
	//question 1
	document.answers1.science[0].checked = false;
	document.answers1.science[1].checked = false;
	document.answers1.science[2].checked = false;
	document.answers1.science[3].checked = false;
	document.answers1.science[4].checked = false;
	
	//question 2
	document.answers2.sport[0].checked = false;
	document.answers2.sport[1].checked = false;
	document.answers2.sport[2].checked = false;
	document.answers2.sport[3].checked = false;
	
	//question 3
	document.getElementById("question3Answer").value = "";
	
	//question 4	
	document.answers4.geography[0].checked = false;
	document.answers4.geography[1].checked = false;
	document.answers4.geography[2].checked = false;
	document.answers4.geography[3].checked = false;
	
	//question 5
	document.answers5.movies[0].checked = false;
	document.answers5.movies[1].checked = false;
	document.answers5.movies[2].checked = false;
	document.answers5.movies[3].checked = false;
}