import { CardListType } from "../types";
import Card from "./Card";

export default function CardList({ cardList }: CardListType) {
  return (
    <div className="cardContainer">
      {cardList.map((item) => (
        <Card key={item.name} {...item} />
      ))}
    </div>
  );
}
