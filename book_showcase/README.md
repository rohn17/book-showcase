# 📚 BookSpace – Interactive Book Showcase

A modern and beginner-friendly React.js application that allows users to explore books using the Google Books API. Users can search for books, view detailed information, and save their favorite books for later.

---

## 🚀 Live Features

* 🔍 Search books using Google Books API
* 📖 View detailed book information
* ❤️ Add and remove favorite books
* 💾 Favorites stored using LocalStorage
* 🔄 Client-side routing with React Router
* ⚡ Loading and error handling
* ♻️ Reusable components for clean structure
* 🎨 Clean and responsive UI design

---

## 🛠️ Tech Stack

* React.js
* Axios
* React Router DOM
* CSS (custom styling)
* Google Books API

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Navbar.js
│   ├── BookCard.js
│   ├── Loader.js
│
├── pages/
│   ├── Home.js
│   ├── BookDetails.js
│   ├── Favorites.js
│
├── context/
│   ├── FavoritesContext.js
│
├── App.js
├── App.css
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/bookspace.git
```

2. Navigate into the project folder

```
cd bookspace
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm start
```

---

## 🌐 API Used

Google Books API:

```
https://www.googleapis.com/books/v1/volumes?q=react
```

Used for:

* Fetching book list (search)
* Fetching single book details

---

## 📸 Screenshots

(Add screenshots of your UI here)

---

## 🎯 Key Functionalities

### 🔹 Home Page

* Fetches books from API
* Displays books in grid layout
* Search functionality

### 🔹 Book Details Page

* Shows detailed information of selected book
* Dynamic routing using book ID

### 🔹 Favorites Page

* Add/remove favorite books
* Data stored in localStorage
* Displays saved books

---

## 🎨 UI Highlights

* Clean card-based layout
* Responsive grid system
* Hover effects for better UX
* Simple and user-friendly design

---

## ✨ Future Improvements

* 🌙 Dark mode
* ⚡ Debounced search (real-time search)
* 📄 Pagination
* ⭐ Ratings and reviews
* 🎬 Animations (Framer Motion)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Rohan Choudhary

---
