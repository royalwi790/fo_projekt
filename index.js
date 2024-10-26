document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = "";
    } else {
        alert("Kérjük, adjon meg egy feladatot.");
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    const img = document.createElement('img');
    img.src = '../fo_projekt/img/dumbell.png';
    img.alt = 'Feladat kép';
    img.classList.add('task-image');

    const editBtn = document.createElement('button');
    editBtn.textContent = "Szerkesztés";
    editBtn.classList.add('edit-btn');

    editBtn.addEventListener('click', function() {
        const newTaskText = prompt("Szerkessze a feladatot:", taskText);
        if (newTaskText !== null && newTaskText.trim()) {
            span.textContent = newTaskText.trim();
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Törlés";
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    span.addEventListener('click', function() {
        span.classList.toggle('completed');
    });

    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
}