function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
}