// Feladatok hozzáadása, szerkesztése és törlése
document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = ""; // Ürítsük ki a beviteli mezőt
    } else {
        alert("Kérjük, adjon meg egy feladatot.");
    }
});

// Feladat hozzáadása a listához
function addTask(taskText) {
    const li = document.createElement('li');
    
    // Feladat szövege
    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    // Kép hozzáadása
    const img = document.createElement('img');
    img.src = '../fo_projekt/img/dumbell.png'; // Ide írd be a kép elérési útját
    img.alt = 'Feladat kép'; // Alternatív szöveg
    img.classList.add('task-image'); // Képhez osztály hozzáadása

    // Szerkesztés gomb
    const editBtn = document.createElement('button');
    editBtn.textContent = "Szerkesztés";
    editBtn.classList.add('edit-btn');
    
    // Szerkesztés funkció
    editBtn.addEventListener('click', function() {
        const newTaskText = prompt("Szerkessze a feladatot:", taskText);
        if (newTaskText !== null && newTaskText.trim()) {
            span.textContent = newTaskText.trim();
        }
    });

    // Törlés gomb
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Törlés";
    deleteBtn.classList.add('delete-btn');
    
    // Törlés funkció
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // Feladat késznek jelölése (kattintásra áthúzás)
    span.addEventListener('click', function() {
        span.classList.toggle('completed');
    });

    // Összeállítjuk az elemeket
    li.appendChild(img); // Kép hozzáadása a listához
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(li);
}

