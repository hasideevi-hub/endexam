
import React, { useState } from "react";
import "./App.css";

const newsData = [
  {
    id: 1,
    category: "Technology",
    title: "Artificial Intelligence is Transforming the Future",
    description:
      "New AI technologies are changing industries and creating exciting opportunities around the world.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    date: "November 24, 2026",
  },
  {
    id: 2,
    category: "India",
    title: "Major Developments Across India Today",
    description:
      "Important updates and developments from different parts of the country.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
    date: "November 24, 2026",
  },
  {
    id: 3,
    category: "Sports",
    title: "Cricket Fans Excited About Upcoming Matches",
    description:
      "Cricket enthusiasts are looking forward to the upcoming international matches.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800",
    date: "November 24, 2026",
  },
  {
    id: 4,
    category: "Business",
    title: "Global Markets See New Developments",
    description:
      "Business leaders and investors are watching the latest market trends.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
    date: "November 24, 2026",
  },
];

const breakingNews = [
  "Latest technology developments making headlines worldwide!",
  "Important national updates and announcements today!",
  "Sports fans await exciting upcoming competitions!",
];

function App() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "India",
    "Technology",
    "Sports",
    "Business",
  ];

  const filteredNews =
    category === "All"
      ? newsData
      : newsData.filter((news) => news.category === category);

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">
          NEWS<span>24</span>
        </h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#breaking">Breaking News</a>
          <a href="#headlines">Headlines</a>
        </nav>

        <button className="subscribe">Subscribe</button>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div>
          <p className="hero-label">YOUR DAILY NEWS SOURCE</p>
          <h2>Stay Updated.<br />Stay Informed.</h2>
          <p>
            Get the latest headlines, breaking news and
            trending stories from around the world.
          </p>
          <a href="#headlines" className="read-btn">
            Explore News →
          </a>
        </div>
      </section>

      {/* Breaking News */}
      <section className="breaking-section" id="breaking">
        <div className="breaking-title">
          <span className="live-dot"></span>
          BREAKING NEWS
        </div>

        <div className="breaking-list">
          {breakingNews.map((news, index) => (
            <div className="breaking-item" key={index}>
              <span>🔴</span> {news}
            </div>
          ))}
        </div>
      </section>

      {/* Headlines */}
      <section className="headlines" id="headlines">
        <div className="section-heading">
          <div>
            <p className="small-heading">TOP STORIES</p>
            <h2>Latest Headlines</h2>
          </div>
          <span>Today's News 📰</span>
        </div>

        {/* Categories */}
        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* News Cards */}
        <div className="news-grid">
          {filteredNews.map((news) => (
            <article className="news-card" key={news.id}>
              <img src={news.image} alt={news.title} />

              <div className="news-content">
                <span className="news-category">
                  {news.category}
                </span>

                <h3>{news.title}</h3>

                <p>{news.description}</p>

                <div className="news-footer">
                  <span>{news.date}</span>
                  <button
                    onClick={() =>
                      alert(news.title + "\n\n" + news.description)
                    }
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h2>NEWS<span>24</span></h2>
        <p>Your trusted source for daily updates.</p>
        <p>© 2026 NEWS24. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
