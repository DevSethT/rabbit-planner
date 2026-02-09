import "./TaskCard.css";

function TaskCard({ task, onToggle }) {
  console.log(task);
  return (
    <div className={`card ${task.completed ? "card--done" : ""}`}>
      <div className="card__content">
        <div className="card__info">
          <h2 className="card__title">{task.name}</h2>
          <p className="card__discription">{task.description}</p>
        </div>
        <div className="card__checkbox-box">
          <label className="card__checkbox-label">
            <input
              id={task.id + "checkbox"}
              type="checkbox"
              name="completed"
              className="card__checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
