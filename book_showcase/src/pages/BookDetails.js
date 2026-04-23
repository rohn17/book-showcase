import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      setBook(res.data);
    };

    fetchBook();
  }, [id]);

  if (!book) return <Loader />;

  return (
    <div className="details">
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt="book"
      />

      <div className="info">
        <h2>{book.volumeInfo.title}</h2>
        <p className="author">
          {book.volumeInfo.authors?.join(", ")}
        </p>
        <p className="desc">{book.volumeInfo.description}</p>
      </div>
    </div>
  );
}

export default BookDetails;