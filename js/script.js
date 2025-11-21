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
