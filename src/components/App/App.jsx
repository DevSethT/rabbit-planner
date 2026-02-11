import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import TaskCard from "../TaskCard/TaskCard.jsx";
import NewTask from "../NewTask/NewTask.jsx";

const STORAGE_KEY = "rabbit_planner_tasks";

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
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : BASE_TASKS;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const orderedTasks = [
    ...tasks.filter((t) => !t.completed),
    ...tasks.filter((t) => t.completed),
  ];

  return (
    <>
      <Header />
      {orderedTasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={handleCompleted} />
      ))}
      <NewTask />
    </>
  );
}

export default App;
