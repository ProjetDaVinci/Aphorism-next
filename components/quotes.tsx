import React, { FC, useState } from "react";
import { QuoteResponse, QuotesProps } from "../types/types";
import { useLocalStorage } from "../utils/useLocalStorage";
import Quote from "./UI/Quote";

const Quotes: FC<QuotesProps> = ({ quotes }) => {
  const [localQuotes, setQuotes] = useLocalStorage<QuoteResponse[]>(
    "quotes",
    []
  );

  const [quotesState, setQuotesState] = useState<QuoteResponse[]>(
    localQuotes === null ? quotes : localQuotes
  );

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
