import React, { FC, useEffect, useState } from "react";
import { QuoteResponse, QuotesProps } from "../types/types";
import { useLocalStorage } from "../utils/useLocalStorage";
import Quote from "./UI/Quote";

const Quotes: FC<QuotesProps> = ({ quotes }) => {
  const equals = (arr1: Array<QuoteResponse>, arr2: Array<QuoteResponse>) => {
    return (
      arr1.length === arr2.length &&
      arr1.every((value, index) => value === arr2[index])
    );
  };

  const [localQuotes, setQuotes] = useLocalStorage<QuoteResponse[]>(
    "quotes",
    []
  );

  useEffect(() => {
    setQuotesState(equals(localQuotes, []) ? quotes : localQuotes);
  }, []);

  const [quotesState, setQuotesState] = useState<QuoteResponse[]>([]);

  const like = (quote: string, author: string, liked: boolean) => {
    quotesState.map((item) => {
      if (item.q !== quote) {
        const newQuote: QuoteResponse = {
          q: quote,
          liked,
          a: author,
          c: "",
          h: "",
        };
        setQuotesState((prevState) => [...prevState, newQuote]);
      }
    });

    const changedQuote = quotesState.map((item) => {
      if (item.q === quote) {
        item.liked = !item.liked;
      }

      return item;
    });
    setQuotesState(changedQuote);
    localStorage.setItem("quotes", JSON.stringify(quotesState));
    setQuotes(quotesState);
  };

  return (
    <div className="QuoteMap">
      {quotesState &&
        quotesState.map((item, index) => (
          <Quote itemQu={item} like={like} key={`${index}_${item}`} />
        ))}
    </div>
  );
};

export default Quotes;
