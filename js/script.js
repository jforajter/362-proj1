function emailValidate() {
	var emails = document.getElementById("email").value;
	
	if (emails.value== "")
	{
		window.alert("please enter your email");
		emails.focus();
		return false;
	}

}