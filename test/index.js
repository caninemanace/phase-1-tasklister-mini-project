document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get the task description input value
        const taskInput = document.getElementById("new-task-description");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create a new list item
            const li = document.createElement("li");
            li.textContent = taskText;

            // Create a delete button for each task
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.style.marginLeft = "10px";

            // Add event listener to remove task on button click
            deleteButton.addEventListener("click", function () {
                li.remove();
            });

            // Append the delete button to the list item
            li.appendChild(deleteButton);
            taskList.appendChild(li);

            // Clear the input field after submitting
            taskInput.value = "";
        }
    });
});
