import React, { Component, FC } from "react";

interface IQuote {
  children?: React.ReactNode;
  itemQu: any;
}

const Quote: FC<IQuote> = ({ children, itemQu }) => {
  {
    console.log("item", typeof itemQu);
  }
  return (
    <div>
      <p>{itemQu.q}</p>
      <br />
      <h5>{itemQu.a}</h5>
      {/* <div>{itemQu.q}</div> */}
    </div>
  );
};

export default Quote;
