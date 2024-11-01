document.getElementById('add-task-btn').addEventListener('click', function() {
    addTaskFromInput();
});

document.getElementById('task-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTaskFromInput();
    }
});

function addTaskFromInput() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = "";
        saveTasks();
    } else {
        alert("Kérjük, adjon meg egy feladatot.");
    }
}

function addTask(taskText, completed = false, starred = false) {
    const li = document.createElement('li');
    li.classList.add('task-item');

    // Csillag gomb hozzáadása a feladathoz
    const starBtn = document.createElement('span');
    starBtn.textContent = '★';
    starBtn.classList.add('star-btn');
    if (starred) starBtn.classList.add('starred');

    // Csillagozás esemény kezelése
    starBtn.addEventListener('click', function() {
        starBtn.classList.toggle('starred');
        saveTasks();
    });

    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');
    if (completed) span.classList.add('completed');

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
            saveTasks();
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Törlés";
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function() {
        li.remove();
        saveTasks();
    });

    span.addEventListener('click', function() {
        span.classList.toggle('completed');
        saveTasks();
    });

    // Csillag gomb hozzáadása a feladat elemhez
    li.appendChild(starBtn);
    li.appendChild(img);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(task => {
        tasks.push({
            text: task.querySelector('.task-text').textContent,
            completed: task.querySelector('.task-text').classList.contains('completed'),
            starred: task.querySelector('.star-btn').classList.contains('starred') // Csillagozott állapot mentése
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task.text, task.completed, task.starred));
}

window.addEventListener('load', loadTasks);

function toggleDropdown() {
    const dropdown = document.getElementById("dropdown-menu");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("dropdown-menu");
    const profileIcon = document.querySelector(".profile-icon");

    if (!dropdown.contains(event.target) && event.target !== profileIcon) {
        dropdown.style.display = "none";
    }
});