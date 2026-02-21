import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import TaskCard from "../TaskCard/TaskCard.jsx";
import NewTask from "../NewTask/NewTask.jsx";

const STORAGE_KEY = "rabbit_planner_tasks";
const LAST_RESET_KEY = "rabbit_planner_last_reset";

const BASE_TASKS = [
  {
    id: 0,
    name: "Morning rutine",
    description: "morning wake up and take dog out",
    completed: false,
    priority: "moderate",
  },
  {
    id: 1,
    name: "School",
    description: "Do an hour of School work weather codding or lessons",
    completed: false,
    priority: "high",
  },
  {
    id: 2,
    name: "Oranize closet",
    description: "orginizethe closet to look presentable",
    completed: false,
    priority: "low",
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : BASE_TASKS;
  });

  // ✅ DAILY RESET (must be after setTasks exists)
  useEffect(() => {
    const today = new Date().toDateString();
    const lastReset = localStorage.getItem(LAST_RESET_KEY);

    if (lastReset !== today) {
      setTasks((prev) => prev.map((t) => ({ ...t, completed: false })));
      localStorage.setItem(LAST_RESET_KEY, today);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
const handleDeleteTask = (id) => {
  if (!window.confirm("Delete this task?")) return;
  setTasks((prev) => prev.filter((t) => t.id !== id));
};

  const handleAddTask = ({ name, description, priority }) => {
  const newTask = {
    id: Date.now(),              // simple unique id
    name: name.trim(),
    description: description.trim(),
    completed: false,
    priority: priority || "moderate",
  };

  setTasks((prev) => [newTask, ...prev]);  // add to top
  setIsModalOpen(false);                  // close modal after add
};

  const orderedTasks = [
    ...tasks.filter((t) => !t.completed),
    ...tasks.filter((t) => t.completed),
  ];

  return (
    <div className="page">
      <div className="page__content">
        <Header onOpenModal={() => setIsModalOpen(true)} />
        {orderedTasks.map((task) => (
          <TaskCard onDelete={() => handleDeleteTask(task.id)} key={task.id} task={task} onToggle={handleCompleted} />
        ))}
      </div>

      {isModalOpen && <NewTask onClose={() => setIsModalOpen(false)} onAddTask={handleAddTask}/>}
    </div>
  );
}

export default App;