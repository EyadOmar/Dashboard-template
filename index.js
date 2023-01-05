// Latest Tasks
const deleteBtns = document.querySelectorAll(".tasks .task .delete");
const tasks = document.querySelectorAll(".tasks .task");
deleteBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    tasks[i].classList.toggle("completed");
  });
});
