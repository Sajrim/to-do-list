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
