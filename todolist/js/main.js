const
  $btn = document.querySelector('.add-controls_btn'),
  $inp = document.querySelector('.add-controls_inp'),
  $out = document.querySelector('.out'),
  date = document.getElementById('date'),
  remove = document.getElementById('remove'),
  them = document.getElementById('theme'),
  sidebar = document.getElementById("mySidenav");
// зірка
function star() {
  const starx = document.bodycreateElement('star');
  starx.classList.toggle(".m-on");
}
document.addEventListener('click', checkPriority);

function checkPriority(e) {
  let
    $target = e.target,
    targetClasses = $target.className.split(' ');

  // console.log('--| target');
  // console.log(targetClasses);

  let isRight = targetClasses.indexOf('out_task_star');

  if (!(isRight < 0)) {
    console.log('--| change star!');

    $target.classList.add("m-on");
  }
}
// добавлення задачі
$btn.addEventListener('click', addTask);
function addTask(e) {
  let taskName = $inp.value;
  let dates = date.value;
  console.log(`--| task name: ${taskName}`);
  // перевірка на попрожню строку
  if (taskName != '' && taskName != ' ' && taskName != '  ') {
    console.log(` -| name is right`);
    // добавлення задачі

    $btn.addEventListener('cliсck', addTask);
    const task = document.createElement('div');
    task.className = 'task';
    task.id = taskName;
    $out.append(task);

    const taskN = document.createElement('p');
    const check = document.createElement('input');
    const button = document.createElement('button');
    const btnshow = document.createElement('button');
    check.type = "checkbox";
    button.textContent = 'Remove';
    btnshow.textContent = 'Show';
    btnshow.classList.add('btn__show');

    //star
    let star = new Image();
    // star.src = 'E:/sendbox/todolist/img/staroff.jpg';
    star.src = '../img/staroff.jpg';
    star.addEventListener('click', () => {
      // star.src = 'E:/sendbox/todolist/img/staron.jpg';
      star.src = '../img/staron.jpg';
    });

    function subTask() {
      console.log("--| subTask");
    } // sub task
    // function myFunction() {
    //   var popup = document.getElementById("myPopup");
    //   popup.classList.toggle("show");
    // }

    btnshow.addEventListener('click', subTask);

    button.addEventListener('click', () => {
      button.remove(),
        task.remove(),
        check.remove(),
        btnshow.remove()
    });
    task.append(star, taskN, check, button, btnshow);
    taskN.textContent = taskName;
    btnshow.addEventListener('click', () => {
      // по нажатию на кнопку вызывается поп ап и раскрывается карточка 
      const modalWindow = document.querySelector('.modal');
      modalWindow.style.display = 'block';
      const modalClose = document.querySelector('.modal__close');
      modalClose.addEventListener('click', () => {
        modalWindow.style.display = 'none';
      });
    });
  }

}


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
