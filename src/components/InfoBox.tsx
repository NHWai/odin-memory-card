import { useContext } from "react";
import Modal from "./Modal";
import GameLevel from "./GameLevel";
import Button from "./Button";
import AppContext from "../context";
const InfoBox = () => {
  const { scoreBoard, closeModal } = useContext(AppContext);

  return (
    <Modal closeModal={() => {}} open={scoreBoard.status !== "neutral"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div className="header">You {scoreBoard.status}</div>
        <Button handleClick={closeModal} text="Restart &#x27f3;" />
        <GameLevel handleClick={closeModal} />
      </div>
    </Modal>
  );
};

export default InfoBox;
