import { useState } from "react";
import "./NewTask.css";

function NewTask({ onClose, onAddTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !priority) return;

    onAddTask({
      name,
      description,
      priority,
    });

    // optional reset (modal will close anyway)
    setName("");
    setDescription("");
    setPriority("");
  };

  return (
    <div className="newTask__background">
      <div className="newTask__modal">
        <form className="newTask__form" onSubmit={handleSubmit}>
          
          <button
            type="button"
            onClick={onClose}
            className="newTask__cls-btn"
          >
            X
          </button>

          <label htmlFor="task-name" className="newTask__name-label">
            Task Name:
            <input
              id="task-name"
              type="text"
              className="newTask__name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label
            htmlFor="task-description"
            className="newTask__description-label"
          >
            Task Description:
            <input
              id="task-description"
              type="text"
              className="newTask__description-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <div className="newTask__priority-box">
            <p className="newTask__priority-text">Please Select One:</p>

            <label htmlFor="high" className="newTask__label">
              <input
                id="high"
                type="radio"
                name="priority"
                value="high"
                checked={priority === "high"}
                onChange={(e) => setPriority(e.target.value)}
                required
              />
              High
            </label>

            <label htmlFor="moderate" className="newTask__label">
              <input
                id="moderate"
                type="radio"
                name="priority"
                value="moderate"
                checked={priority === "moderate"}
                onChange={(e) => setPriority(e.target.value)}
                required
              />
              Moderate
            </label>

            <label htmlFor="low" className="newTask__label">
              <input
                id="low"
                type="radio"
                name="priority"
                value="low"
                checked={priority === "low"}
                onChange={(e) => setPriority(e.target.value)}
                required
              />
              Low
            </label>
          </div>

          <button type="submit" className="newTask__create-btn">
            + Create Task
          </button>

        </form>
      </div>
    </div>
  );
}

export default NewTask;