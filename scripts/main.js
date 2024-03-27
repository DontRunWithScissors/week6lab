




let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");



function setUserName()
{
	let myName = prompt("Please enter your name.");
	if (!myName)
	{
		setUserName();
	}
	else
	{
		localStorage.setItem("name", myName);
		myHeading.innerHTML = `BECOME A HELLDIVER + ${myName}!`;
	}
}



if (!localStorage.getItem("name")) 
{
	setUserName();
}
else
{
	let storedName = localStorage.getItem("name");
	myHeading.innerHTML = `BECOME A HELLDIVER + ${storedName}!`;
}


myButton.onclick = () =>
{
	setUserName();
};