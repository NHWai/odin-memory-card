import { useContext } from "react";
import Button from "./Button";
import AppContext from "../context";

interface Props {
  handleClick: () => void;
}

const GameLevel = ({ handleClick }: Props) => {
  const { chooseLevel } = useContext(AppContext);

  function handleBtnClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLButtonElement;
    if (target.tagName === "BUTTON") {
      handleClick();
    }
  }

  return (
    <div>
      <div className="header">Choose Difficulty</div>
      <div className="btn-group" onClick={handleBtnClick}>
        <Button text="Easy" handleClick={() => chooseLevel(1)} />
        <Button text="Medium" handleClick={() => chooseLevel(2)} />
        <Button text="Hard" handleClick={() => chooseLevel(3)} />
      </div>
    </div>
  );
};

export default GameLevel;
