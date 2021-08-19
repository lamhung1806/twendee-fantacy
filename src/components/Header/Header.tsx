import NavBar from "components/NavBar";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="wrapper">
        <div className="player">
          <h1 className="gameTitle">Donator Fantasy EPL</h1>
          <NavBar />
        </div>
      </div>
    </div>
  );
}
