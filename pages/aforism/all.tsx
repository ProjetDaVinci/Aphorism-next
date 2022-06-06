import axios, { AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import Quotes from "../../components/quotes";
import { QuoteResponse, QuotesProps } from "../../types/types";

const AllsPage = ({ quotes }: QuotesProps) => {
  return <Quotes quotes={quotes} />;
};

export const getServerSideProps: GetServerSideProps<QuotesProps> = async (
  ctx
) => {
  const dataFetch: AxiosResponse = await axios.get(
    "https://zenquotes.io/api/quotes"
  );
  const data: QuoteResponse[] = dataFetch.data;
  console.log("res", data);

  return { props: { quotes: data } };
};
export default AllsPage;
