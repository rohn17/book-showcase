import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";

function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("react");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );

      setBooks(res.data.items || []);
      setLoading(false);
    } catch (err) {
      setError("Something went wrong!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={fetchBooks}>Search</button>
      </div>

      {loading && <Loader />}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;