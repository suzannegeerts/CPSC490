
function dropDown() {
	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;

	for (i = 0; i < dropdown.length; i++) {
 	 	dropdown[i].addEventListener("click", function() {
    	this.classList.toggle("active");
    	var dropdownContent = this.nextElementSibling;
    	if (dropdownContent.style.display === "block") {
      		dropdownContent.style.display = "none";
    	} else {
      		dropdownContent.style.display = "block";
    		}
  		});
	}
}

function sendMessage() {
	document.getElementById("contactform").submit();
	var interest = document.forms[0].options.value;
	alert("I will be in touch within 3 business days to discuss your " + interest + ". Thanks for your interest!");
}

function getInterest() {
	var obj = document.getElementById("options");
    document.getElementById("interest").innerHTML = 
    obj.options[obj.selectedIndex].text;
}

function changeColor(x) {
	x.style.background = "#ffd3d9";
}

function popUpMessage() {
	prefer = document.forms[0].options.value;
	if (prefer == "Select") {
		return;
	}
	else if (prefer == "Wedding Cake") {
		alert("Congratulations - you're getting married! Let's plan your dream " + prefer + "!")
	}
	else if (prefer == "Birthday Cake") {
		alert("The perfect birthday party starts with the perfect " + prefer + "!")
	}
	else if (prefer == "Occassion Cake") {
		alert("Let's make this occassion extra special with the perfect " + prefer + "!")
	}
	else if (prefer == "Cupcakes") {
		alert("Let's celebrate! " + prefer + " are perfect for every party!")
	}
	else if (prefer == "Treats") {
		alert("Yum! What kind of " + prefer + " would you like at your next event?")
	}
	else if (prefer == "Other") {
		alert("What can I bake to make your next event the best one yet?")
	}
}