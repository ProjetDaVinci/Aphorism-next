import React from "react";

export type ChildrenProp = {
  children: React.ReactNode;
};

export type QuoteResponse = {
  q: string;
  a: string;
  c: string;
  h: string;
  liked: boolean;
};

export type QuotesProps = {
  quotes: QuoteResponse[];
};
