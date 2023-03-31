export function createTaskPlanner() {
	// Tu código aquí 👈
	let tasks = []
  
	const addTask = (task) => {
	  tasks.push({ ...task, completed: false })
	  return [...tasks]
	}
  
	const removeTask = (value) => {
	  tasks = tasks.filter(task => task.name !== value && task.id !== value)
	  return [...tasks]
	}
  
	const getTasks = () => {
	  return [...tasks]
	}
  
	const getPendingTasks = () => {
	  return [...tasks.filter(task => !task.completed)]
	}
  
	const getCompletedTasks = () => {
	  return [...tasks.filter(task => !!task.completed)]
	}
  
	const markTaskAsCompleted = (value) => {
	  for (const task of tasks) {
		if (task.name === value || task.id === value) {
		  task.completed = true
		}
	  }
	}
  
	const getSortedTasksByPriority = () => {
	  const filteredTasks = [...tasks].sort((a, b) => a.priority - b.priority)
	  return filteredTasks
	}
  
	const filterTasksByTag = (tag) => {
	  const filteredTasks = [...tasks].filter(task => task.tags.includes(tag))
	  return filteredTasks
	}
  
	const updateTask = (taskId, updates) => {
	  for (const index in tasks) {
		if (tasks[index].id === taskId) {
		  tasks[index] = { ...tasks[index], ...updates }
		}
	  }
	}
  
	return {
	  addTask,
	  removeTask,
	  getTasks,
	  getPendingTasks,
	  getCompletedTasks,
	  markTaskAsCompleted,
	  getSortedTasksByPriority,
	  filterTasksByTag,
	  updateTask
	}
  }
  