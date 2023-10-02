import { createContext, useEffect, useState } from "react";
import { CardListType, CardType } from "../types";

interface ScoreBoard {
  selectedCards: string[];
  status: "lose" | "win" | "neutral";
}

interface StateType extends CardListType {
  filteredCardList: CardType[];
  chooseLevel: (level: number) => void;
  setCardList: React.Dispatch<React.SetStateAction<CardType[]>>;
  handleClick: (name: string) => void;
  scoreBoard: ScoreBoard;
  closeModal: () => void;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

const initialScoreBoard: ScoreBoard = {
  selectedCards: [],
  status: "neutral",
};

const initialState: StateType = {
  cardList: [],
  filteredCardList: [],
  chooseLevel: (level: number) => {},
  setCardList: () => {},
  handleClick: (name: string) => {},
  scoreBoard: initialScoreBoard,
  closeModal: () => {},
};

const AppContext = createContext(initialState);

function shuffle(array: CardType[]) {
  const newArr = [...array];
  let i = newArr.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    // Fisher–Yates Shuffle:
    temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }

  return newArr;
}

export const AppContextProvider = (props: AppContextProviderProps) => {
  const [cardList, setCardList] = useState<CardType[]>([]);
  const [filteredCardList, setFilteredCardList] = useState<CardType[]>([]);
  const [scoreBoard, setScoreBoard] = useState<ScoreBoard>(initialScoreBoard);

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=15";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCardList([...data.results]));
  }, []);

  function handleClick(name: string) {
    const nextCount = !scoreBoard.selectedCards.some((item) => item === name);
    if (nextCount) {
      const isWin =
        scoreBoard.selectedCards.length === filteredCardList.length - 1;
      if (isWin) {
        setScoreBoard((pre) => ({
          selectedCards: [...pre.selectedCards, name],
          status: "win",
        }));
      } else {
        setScoreBoard((pre) => ({
          ...pre,
          selectedCards: [...pre.selectedCards, name],
        }));
      }
      swapCards();
    } else {
      const isLose = scoreBoard.selectedCards.length < filteredCardList.length;
      if (isLose) {
        setScoreBoard((pre) => ({ ...pre, status: "lose" }));
      }
    }
  }

  function swapCards() {
    const shuffledCards = shuffle(filteredCardList);
    setFilteredCardList(shuffledCards);
  }

  function chooseLevel(level: number) {
    if (level === 1) {
      setFilteredCardList(cardList.slice(0, 5));
    } else if (level === 2) {
      setFilteredCardList(cardList.slice(0, 10));
    } else if (level === 3) {
      setFilteredCardList([...cardList]);
    }
  }

  function closeModal() {
    setScoreBoard((pre) => ({ selectedCards: [], status: "neutral" }));
  }

  return (
    <AppContext.Provider
      value={{
        cardList,
        setCardList,
        handleClick,
        scoreBoard,
        filteredCardList,
        chooseLevel,
        closeModal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
