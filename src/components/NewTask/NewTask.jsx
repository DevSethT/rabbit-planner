import "./NewTask.css";

function NewTask() {
  return (
    <div className="newTask__background">
      <div className="newTask__modal">
        <form className="newTask__form">
          <button type="button" className="newTask__cls-btn">
            X
          </button>
          <label htmlFor="task-name" className="newTask__name-label">
            Task Name:
            <input id="task-name" type="text" className="newTask__name-input" />
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
            />
          </label>
          <div className="newTask__priority-box">
            <p className="newTask__priority-text">Please Select One:</p>
            <label htmlFor="high" className="newTask__label">
              <input
                id="high"
                type="radio"
                name="priority"
                className="newTask__priority-selection"
              />
              High
            </label>
            <label htmlFor="medium" className="newTask__label">
              <input
                id="medium"
                type="radio"
                name="priority"
                className="newTask__priority-selection"
              />
              Medium
            </label>
            <label htmlFor="low" className="newTask__label">
              <input
                id="low"
                type="radio"
                name="priority"
                className="newTask__priority-selection"
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
