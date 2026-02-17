let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.classList.add(task.priority.toLowerCase());
        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            ${task.name} | ${task.priority} | ${task.date}
            <div>
                <button onclick="toggleTask(${index})">✔</button>
                <button onclick="deleteTask(${index})">X</button>
            </div>
        `;

        list.appendChild(li);
    });
}

function addTask() {
    const name = document.getElementById("taskInput").value;
    const priority = document.getElementById("priority").value;
    const date = document.getElementById("dueDate").value;

    if (name === "") return;

    tasks.push({
        name,
        priority,
        date,
        completed: false
    });

    saveTasks();
    renderTasks();
}

function toggleTask(i) {
    tasks[i].completed = !tasks[i].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(i) {
    tasks.splice(i, 1);
    saveTasks();
    renderTasks();
}

renderTasks();
