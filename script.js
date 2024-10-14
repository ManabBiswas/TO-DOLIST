document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');
    const container = document.querySelector('.container');
    const todo = document.querySelector('.todo');

    addButton.addEventListener('click', addTask);

    container.addEventListener('click', function (e) {
        if (e.target && e.target.className === 'deleteButton') {
            e.target.parentElement.remove();
        }
    });

    function addTask() {
        const taskNumber = document.querySelectorAll('.todo').length + 1;
        const newTask = document.createElement('div');
        newTask.className = 'todo';

        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.id = `check${taskNumber}`;
        newCheckbox.name = 'checkbox';
        newCheckbox.className = 'todoCheckbox';

        const newLabel = document.createElement('label');
        newLabel.className = 'todoLabel';
        newLabel.setAttribute('for', `todo${taskNumber}`);
        newLabel.textContent = `Todo ${taskNumber}:`;

        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.id = `todo${taskNumber}`;
        newInput.className = 'todoValue';
        newInput.placeholder = 'Write what to do.....';

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'deleteButton';
        deleteButton.textContent = '✖';

        newTask.appendChild(newCheckbox);
        newTask.appendChild(newLabel);
        newTask.appendChild(newInput);
        newTask.appendChild(deleteButton);

        container.appendChild(newTask);
    }
// footer   
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
