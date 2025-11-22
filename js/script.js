{
  let tasks = [];
  let hideDoneTasks = false;
}

const removeTask = (taskIndex) => {
  const removedItemIndex = taskIndex;
  tasks = [
    ...tasks.slice(0, removedItemIndex),
    ...tasks.slice(removedItemIndex + 1),
  ];
  render();
};

const toggleTaskDone = (taskIndex) => {
  tasks = [
    ...tasks.slice(0, taskIndex),
    {
      ...tasks[taskIndex],
      done: !tasks[taskIndex].done,
    },
    ...tasks.slice(taskIndex + 1),
  ];
  render();
};

const addNewTask = (newTaskContent) => {
  tasks = [...tasks, { content: newTaskContent }];
  render();
};

const markAllTasksDone = () => {
  tasks = tasks.map((task) => ({
    ...task,
    done: true,
  }));
  render();
};

const toggleHideDoneTasks = () => {
  hideDoneTasks = !hideDoneTasks;
  render();
};

const bindRemoveEvents = () => {
  const removeButtons = document.querySelectorAll(".js-remove");

  removeButtons.forEach((removeButton, taskIndex) => {
    removeButton.addEventListener("click", () => {
      removeTask(taskIndex);
    });
  });
};

const bindToggleDoneEvents = () => {
  const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

  toggleDoneButtons.forEach((toggleDoneButton, taskIndex) => {
    toggleDoneButton.addEventListener("click", () => {
      toggleTaskDone(taskIndex);
    });
  });
};

const renderTasks = () => {
  const taskToHTML = (task) => `
    <li class="tasks__item ${task.done && hideDoneTasks ? "tasks__item--hidden" : ""} js-task">
      <button class="tasks__button tasks__button--toggleDone js-toggleDone">
        ${task.done ? "✔️" : ""}
      </button>
      <span class="tasks__content${task.done ? " tasks__content--done" : ""}">
        ${task.content}
      </span>
      <button class="tasks__button tasks__button--remove js-remove">🗑️</button>
    </li> `;

  const tasksElement = document.querySelector(".js-tasks");
  tasksElement.innerHTML = tasks.map(taskToHTML).join("");
};

const renderButtons = () => {
  const buttonsElement = document.querySelector(".js-buttons");

  if (!tasks.length) {
    buttonsElement.innerHTML = "";
    return;
  }

  buttonsElement.innerHTML = `
    <button class="section__button js-buttonHideDone">
      ${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
    </button>
    <button class="section__button js-buttonAllDone"
      ${tasks.every(({ done }) => done) ? "disabled" : ""}
    >
      Ukończ wszystkie
    </button>
  `;
};

const bindButtonsEvents = () => {
  const buttonAllDone = document.querySelector(".js-buttonAllDone");

  if (buttonAllDone) {
    buttonAllDone.addEventListener("click", markAllTasksDone);
  }

  const buttonHideDone = document.querySelector(".js-buttonHideDone");

  if (buttonHideDone) {
    buttonHideDone.addEventListener("click", toggleHideDoneTasks);
  }
};
