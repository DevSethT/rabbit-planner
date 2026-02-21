import "./Header.css";

function Header({ onOpenModal }) {
  return (
    <header className="header">
      <span className="header__span">
        <h1 className="header__tittle">Rabbit Planner</h1>
      </span>
      <button onClick={onOpenModal} className="header__btn">+ Add Task</button>
    </header>
  );
}

export default Header;
