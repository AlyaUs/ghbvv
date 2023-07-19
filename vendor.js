
function showText(event) {
  const target = event.target;
  const taskBox = target.closest('.task-box').id;
  const taskNumber = taskBox.substr(taskBox.length - 1);
  target.parentNode.querySelector('.output').textContent = `Завдання #${taskNumber} виконане правильно!`;
}