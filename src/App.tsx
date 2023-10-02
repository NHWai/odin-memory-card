import { useContext, useState } from "react";
import CardList from "./components/CardList";
import AppContext from "./context";
import ScoreBoard from "./components/ScoreBoard";
import WelcomePage from "./components/WelcomePage";
import InfoBox from "./components/InfoBox";

function App() {
  const { filteredCardList } = useContext(AppContext);
  const [start, setStart] = useState(false);

  return (
    <main>
      <div className="title">Memory Card</div>
      {start ? (
        <>
          <ScoreBoard />
          <CardList cardList={filteredCardList} />
          <InfoBox />
        </>
      ) : (
        <WelcomePage setStart={setStart} />
      )}
    </main>
  );
}

export default App;
