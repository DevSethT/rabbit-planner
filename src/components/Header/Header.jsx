import "./Header.css";

function Header() {
  return (
    <header className="header">
      <span className="header__span">
        <h1 className="header__tittle">Rabbit Planner</h1>
      </span>
      <button className="header__btn">+ Add Task</button>
    </header>
  );
}

export default Header;
