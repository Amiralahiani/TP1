document.addEventListener("DOMContentLoaded", loadTasks);

        function addTask() {
            var nameInput = document.getElementById("nameInput").value.trim();
            var taskInput = document.getElementById("taskInput").value.trim();
            if (nameInput === "" || taskInput === "") return;
            
            var taskText = `${nameInput} : ${taskInput}`;
            var li = document.createElement("li");
            li.innerHTML = `${taskText} <span class="delete" onclick="removeTask(this)">🗑️</span>`;
            document.getElementById("taskList").appendChild(li);
            
            saveTask(taskText);
            document.getElementById("nameInput").value = "";
            document.getElementById("taskInput").value = "";
        }

        function removeTask(element) {
            var taskText = element.parentElement.textContent.replace("🗑️", "").trim();
            element.parentElement.remove();
        }

        function saveTask(task) {
            var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
