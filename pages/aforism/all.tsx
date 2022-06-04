import { useEffect, useState } from "react";
import Quote from "../../components/quote";

const AllsPage = () => {
  const [state, setState] = useState([]);
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://zenquotes.io/api/quotes", { method: "GET" })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setState(result);
          // setQuote(result.contents.quotes[0].quote);
          // setAuthor(result.contents.quotes[0].author);
          // return setState(result.item);
        },
        (err) => {
          console.log(err);
        }
      );
  }, []);

  const category = ["Aboba", "22222", "231321312"];
  {
    console.log("такое", state);
  }
  return (
    <div>
      {/* <h1>Alls Aforism</h1>{" "} */}

      {state.map((item, index) => (
        <Quote itemQu={item} key={`${index}_${item}`} />
      ))}
      <div>
        {/* <p>state - {state[0]}</p>
        <h1>Цитата - {quote}</h1>
        <p>Автор - {author}</p> */}
      </div>
    </div>
  );
};

export default AllsPage;
