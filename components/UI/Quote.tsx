import React, { FC, useState } from "react";
import { FcLike } from "react-icons/fc";
import { QuoteResponse } from "../../types/types";
import styles from "./Qu.module.css";

interface IQuote {
  itemQu: QuoteResponse;
  like: (quote: string, author: string, liked: boolean) => void;
}

const Quote: FC<IQuote> = ({ itemQu, like }) => {
  const [isLiked, setIsLiked] = useState(itemQu.liked);

  const setLike = () => {
    setIsLiked(!isLiked);
    like(itemQu.q, itemQu.a, isLiked);
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.quote}>{itemQu.q}</p>
        <h5>Author - {itemQu.a}</h5>
      </div>
      <div className={styles.like_container}>
        <FcLike
          size="2em"
          color="white"
          fillOpacity={isLiked ? 1 : 0.1}
          onClick={setLike}
          className={styles.like}
        />
      </div>
    </div>
  );
};

export default Quote;
