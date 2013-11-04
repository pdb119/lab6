//signup.js 
// add your JavaScript code to this file
window.onload = function() {
	var stateSel = document.getElementById("state");
	var state;
	for(state in usStates) {
		var newState = document.createElement("option");
		newState.setAttribute("value", usStates[state]["abbreviation"]);
		newState.innerHTML = usStates[state]["name"];
		stateSel.add(newState);
	}
	$(".signup-form").submit(submitted);
	$("#refer").change(referChanged);
	$(".cancel-signup").click(function(){
			$(".cancel-signup-modal").modal();							   
		});
	$(".btn-abandon").click(function(){
			window.location("http://google.com");
		});
		
};

function submitted(){
	var signupForm = $(this);
	if(signupForm.find("input[name='addr-1']").val()){
		if(!signupForm.find("input[name='zip']").val()){
			alert("You must fill in the zip code to complete your address.");
			return false;
		}
	}
	return true;
}

function referChanged(){
	var other = document.querySelector("input[name='refer-other']");
	if(this.value == "other"){
		other.style.visibility = "visible";
		other.disabled = false;
		other.focus();
	} else {
		other.style.visibility = "hidden";
		other.disabled = true;
	}
}

