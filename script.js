document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('addButton');
    const container = document.querySelector('.container');

    addButton.addEventListener('click', addTask);

    function addTask() {
        const taskNumber = document.querySelectorAll('.todo').length + 1;
        
        const newTask = document.createElement('div');
        newTask.className = 'todo';
        const newLabel = document.createElement('label');
        newLabel.className = 'todoLabel';
        newLabel.setAttribute('for', `todo${taskNumber}`);
        newLabel.textContent = `Todo ${taskNumber}:`;

        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.id = `todo${taskNumber}`;
        newInput.className = 'todoValue';
        newInput.placeholder = 'Write what to do.....';

        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.id = `check${taskNumber}`;
        newCheckbox.name = 'checkbox';
        newCheckbox.className = 'todoCheckbox';

        newTask.appendChild(newLabel);
        newTask.appendChild(newInput);
        newTask.appendChild(newCheckbox);
        container.appendChild(newTask);
    }
// footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
