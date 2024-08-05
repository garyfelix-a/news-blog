import { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';

export const NewsBlog = () => {
  const [news, setNews] = useState([]);
  const url =
    "https://newsapi.org/v2/everything?q=google&pageSize=30&apiKey=e0b744c1dc294de88096050e373bd544";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setNews(data.articles || []);
  //       console.log("Fetched articles:", data.articles);
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //     }
  //   };
  //   fetchData();
  // }, [url]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setNews(data.articles || []);
        console.log("Fetched articles:", data.articles);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [url]);

  if (news.length === 0) return <div>Loading....</div>;

  return (
    <section className="news-section">
      <h2>News - Blog</h2>
      <div className="news-blog">
        {/* cards */}
        {news.map((newsCard, index) => (
          <div key={index} className="news-card">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={newsCard.urlToImage} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title news-title">{newsCard.title}</h5>
                <p className="card-text news-description">{newsCard.description}</p>
                <a href="#" className="btn btn-primary">
                  View More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// style={{
//     display: 'flex',
//     flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
//     marginBottom: '20px'
// }}
