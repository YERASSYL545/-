import "./BookDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`
      )
      .then((res) => setBook(res.data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
    </div>
  );
};

export default BookDetail;
