import { useContext } from "react";
import AppContext from "../context";

export default function ScoreBoard() {
  const { scoreBoard, filteredCardList } = useContext(AppContext);
  return (
    <div className="scoreBoard">
      <div>Current Score : {scoreBoard.selectedCards.length}</div>
      <div>Target Score : {filteredCardList.length}</div>
    </div>
  );
}
