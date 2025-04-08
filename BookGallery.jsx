import "./BookGallery.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookGallery = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books")
      .then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="gallery">
      {books.map((book) => (
        <div
          key={book.id}
          className="book-card hover:shadow-lg hover:scale-105 transition-all"
        >
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <Link to={`/book/${book.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookGallery;
