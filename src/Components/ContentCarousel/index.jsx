import { useEffect } from "react";
import Slider from "react-slick";
import Card from "../Cards/Card";

export default function ContentCarousel({ title, items }) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 9,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1},
      },
    ],
  };

  // Précharge les images du carousel
  useEffect(() => {
    const preloadImage = (url) => {
      const img = new Image();
      img.src = url;
      img.decode().catch(() => {}); // évite les blocages JS
    };

    if (items && items.length > 0) {
      items.forEach((item) => {
        if (item.picture_url) preloadImage(item.picture_url);
      });
    }
  }, [items]);

// Fonction utilitaire pour tronquer le texte si nécessaire
// Limite le titre à XX caractères et ajoute "…" si nécessaire
  const truncate = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
};

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">{title}</h2>

      {/* Rendu statique si une seule recette */}
      {items.length === 1 ? (
        <div className="carousel-single">
          <Card
            key={items[0].id}
            id={items[0].id}
            title={items[0].title}
            authorName={items[0].author_username}
            image={items[0].picture_url || items[0].poster_path}
          />
        </div>
      ) : (
        <Slider {...settings}>
          {items.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={truncate(item.title, 18)}
              authorName={item.author_username}
              image={item.picture_url || item.poster_path}
              type={item.poster_path ? "movie" : "recipe"}
            />
          ))}
        </Slider>
        )}
    </section>
  );
};
