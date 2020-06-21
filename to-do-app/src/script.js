var errorMessage = document.getElementById('errorBase');
var tastBox = document.getElementById('checkboxes');
    
//function that validates if user wrote something or not
 function toDo() {
   //displays alert message if user hits enter/clicks button without any text
        if (!document.getElementById('enterText').value) {
             errorMessage.style.display = "block";
     }
//if user wrote something, it 1). hides error message if it was shown and 2). calls the addToDo function to display task
   else {
     if (errorMessage.style.display = "block") {
             errorMessage.style.display = "none"; 
       var input = document.getElementById('enterText').value;
       todoList(input);
       //makes text input empty again once user enters their task
       document.getElementById('enterText').value = '';
     }
   }

}

//adds and removes tasks
function todoList(task) {
 var ul = document.getElementById('checkboxes');
 var li = document.createElement('li');
  
 var btn = document.createElement('button');
 btn.setAttribute("class", "btn");
 var trash = document.createElement('i');
 trash.setAttribute("class", "far fa-trash-alt");
 btn.appendChild(trash);
  
 var checkbox = document.createElement('input');
 checkbox.setAttribute("type", "checkbox",);
 var label = document.createElement('label');
 label.innerText = task;
 li.appendChild(checkbox);
 li.appendChild(label);
 li.appendChild(btn);
 ul.appendChild(li);
 btn.addEventListener('click', function() { 
   this.parentNode.remove(); }, false);
}

var text = document.getElementById('enterText');
//when user hits enter, it reponds the same as a click by calling the toDo function 
text.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    toDo();
  }
});

  //when user hits the plus button, it calls the toDo function
document.getElementById('plus').addEventListener("click", toDo);