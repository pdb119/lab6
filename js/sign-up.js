//signup.js 
// add your JavaScript code to this file
window.onload = function() {
	var stateSel = document.getElementById("state");
	//var stateSel = $(".state");
	var state;
	for(state in usStates) {
		var newState = document.createElement("option");
		newState.setAttribute("value", usStates[state]["abbreviation"]);
		newState.innerHTML = usStates[state]["name"];
		stateSel.add(newState);
	}
	$(".signup-form").submit(submitted);
};

function submitted(){
	var signupForm = $(this);
	p(signupForm.find("input[name='addr-1']").val());
	//p(signupform.firstname.value);
	return false;
}

function p(stringMsg){
	console.log(stringMsg);
}

