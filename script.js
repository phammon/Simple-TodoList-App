var todos=["shop", "work-out"];
var input = prompt("What would you like to do?(please open console)");
var h1 = document.querySelector("h1");
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover",function() {
		this.style.color = "yellow";
	});
	lis[i].addEventListener("mouseout",function() {
		this.style.color = "black";
	});
}

while(input!=="quit") {
	//handle input
	if(input==="list") {
		listTodo();
	} else if(input==="new") {
		//ask for new todo
		newTodo();
  }	 else if(input === "delete") {
	  //ask for index of todo
	  	deleteTodo();
  }
	//ask again for new input
	 input = prompt("What would you like to do?");
}
 console.log("OK you quit the app");
 
 function listTodo() {
		 
 		console.log("***********");
		todos.forEach(function(todo, i){ //iterate through array to list all items
		console.log(i + ": " + todo); 
	});
		console.log("***********");
 }
 function newTodo () {
	 var newTodo = prompt("Enter new todo");
	 todos.push(newTodo);
	 console.log("added Todo!")
	
 }
 function deleteTodo() {
	 //ask for index of todo
	  var index = prompt("What is the index?");
	  todos.splice(index, 1); //find index and delete 1 item
	  console.log("Deleted todo!");
 }