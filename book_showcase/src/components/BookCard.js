import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function BookCard({ book }) {
  const { addFavorite, removeFavorite, favorites } = useContext(FavoritesContext);

  const isFav = favorites.find((b) => b.id === book.id);

  return (
    <div className="card">
      <img
        src={
          book.volumeInfo.imageLinks?.thumbnail ||
          "https://via.placeholder.com/150"
        }
        alt="book"
      />

      <div className="card-content">
        <h4>{book.volumeInfo.title}</h4>
        <p>{book.volumeInfo.authors?.[0] || "Unknown Author"}</p>

        <div className="btns">
          <Link to={`/books/${book.id}`} className="details-btn">
            View
          </Link>

          <button
            className={isFav ? "fav active" : "fav"}
            onClick={() =>
              isFav ? removeFavorite(book.id) : addFavorite(book)
            }
          >
            {isFav ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;