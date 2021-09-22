let
  $btn = document.querySelector('.add-controls_btn'),
  $inp = document.querySelector('.add-controls_inp'),
  $out = document.querySelector('.out'),
  date = document.getElementById('date'),
  remove = document.getElementById('remove'),
  them = document.getElementById('theme'),
  sidebar = document.getElementById("mySidenav");
// зірка
function star() {
   var starx = document.bodycreateElement('star');
   starx.classList.toggle(".m-on");
}
document.addEventListener('click', checkPriority);
function checkPriority(e){
  let
    $target = e.target,
    targetClasses = $target.className.split(' ');

  console.log('--| target');
  console.log(targetClasses);

  let isRight = targetClasses.indexOf('out_task_star');

  if(!(isRight<0)){
    console.log('--| change star!');

    $target.classList.add("m-on");
  }
}
// добавлення задачі
$btn.addEventListener('click', addTask);
function addTask(e){
  let taskName = $inp.value;
  let dates    =  date.value;
  console.log('--| task name: ' + taskName);
// перевірка на попрожню строку
  if( taskName!='' && taskName!=' ' && taskName!='  '){
    console.log(` -| name is right`);
// добавлення задачі

$btn.addEventListener('click', addTask);
let task   = document.createElement('div');
task.className     = 'task';
task.id            = taskName;
$out.append(task); 


let taskN  = document.createElement('p');
let check  = document.createElement('input')
let button = document.createElement('button')
let btnshow = document.createElement('button');
check.type = "checkbox";
button.textContent = 'Remove';
btnshow.textContent = 'Show';

//star
let star   = new Image();
star.src ='E:/sendbox/todolist/img/staroff.jpg';
star.addEventListener('click', starClass);
function starClass() {
  star.src ='E:/sendbox/todolist/img/staron.jpg';
}

function subTask() {
  console.log("--| subTask")
} // sub task
 function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

btnshow.addEventListener('click', subTask);

button.addEventListener('click', ()=>{  button.remove(),task.remove(),check.remove(),btnshow.remove() });
task.append(star,taskN,check,button,btnshow); 
taskN.textContent   = taskName;
    btnshow.addEventListener('click', ()=>{myFunction()});
 /*  var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");*/

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
}

}

/*btnshow.addEventListener('click', ()=>{
  console.log("sub")
});
*/
/*
function subTask() {
  console.log("--| subTask")
}*/

// sidebar
function openNavt() {
  sidebar.style.width = "520px";
}

function closeNavt() {
  sidebar.style.width = "0";
}
// dark theme
function theme() {
   var element = document.body;
   element.classList.toggle("dark-mode");
} 