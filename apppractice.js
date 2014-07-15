window.onload = function(event) {

var form = document.getElementById('todo_list');
var list = document.getElementById('current_list');

//Will append items to on-going list
var addItem = function(itemz, notez) {
	var button = document.createElement('button');
	var listElement = document.createElement('li');
	var listEntry = document.createTextNode(itemz.value);
	var noteEntry = document.createTextNode(':\n   ' + notez.value);

	button.innerHTML = "Did it!";

	list.appendChild(listElement);
	listElement.appendChild(button);
	listElement.appendChild(listEntry);
	listElement.appendChild(noteEntry);

	button.onclick = function(event) {
		list.removeChild(listElement);
	}


}


form.onsubmit = function(event) {
	event.preventDefault();

	var myItems = this.todo;
	var myNotes = this.notes;

	addItem(myItems, myNotes);
	this.reset();
}

//window.onload brace	
}