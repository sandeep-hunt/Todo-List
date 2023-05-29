window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const task = document.querySelector('#content');
    const taskForm = document.querySelector('#new-task-form');

    taskForm.addEventListener('submit', e => {
        e.preventDefault();

        const todo = {
            task: e.target.elements.content.value
        }

        localStorage.setItem('todos', JSON.stringify(todo));

        e.target.reset();

        displayTasks();
    });
    displayTasks();
})

function displayTasks() {
    const tasks = document.querySelector('#tasks');

    for (let i = 0; i < localStorage.length; i++){
        let todos = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(todos));
        console.log(todos, value);

        const task = document.createElement("div");
        task.classList.add("task");

        const task_content = document.createElement("div");
        task_content.classList.add("content");

        task.appendChild(task_content);

        const task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.value = value.task;
        task_input.setAttribute("readonly", "readonly");

        task_content.appendChild(task_input);

        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");

        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerText = "Edit";

        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerText = "Delete";

        task_actions.appendChild(task_edit);
        task_actions.appendChild(task_delete);

        task.appendChild(task_actions);

        tasks.appendChild(task);
        
    }
}