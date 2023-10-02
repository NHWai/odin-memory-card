import { useEffect, useRef } from "react";
import GameLevel from "./GameLevel";

interface Props {
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomePage = ({ setStart }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.setProperty("--n", "200");
    }
  }, []);

  return (
    <div className="welcomePage">
      <div>
        <div className="header">Game Rules</div>
        <div className="typeContainer">
          <span className="type" ref={ref}>
            Get points by clicking on an image but don't click on any more than
            once!
          </span>
        </div>
      </div>
      <GameLevel handleClick={() => setStart(true)} />
    </div>
  );
};

export default WelcomePage;
