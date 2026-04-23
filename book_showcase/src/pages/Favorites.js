import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import BookCard from "../components/BookCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container">
      <h2 className="title">Your Favorite Books ❤️</h2>

      {favorites.length === 0 ? (
        <p className="empty">No favorites added yet</p>
      ) : (
        <div className="grid">
          {favorites.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;