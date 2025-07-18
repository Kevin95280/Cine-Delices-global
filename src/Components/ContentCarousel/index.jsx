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

    if (recipes && recipes.length > 0) {
      recipes.forEach((recipe) => {
        if (recipe.picture_url) preloadImage(recipe.picture_url);
      });
    }
  }, [recipes]);

// Fonction utilitaire pour tronquer le texte si nécessaire
// Limite le titre à XX caractères et ajoute "…" si nécessaire
  const truncate = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
};

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <Slider {...settings}>
        {items.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            authorName={item.author_username}
            image={item.picture_url || item.poster_path} // picture_url pour les recettes, poster_path pour les films
          />
        ))}
      </Slider>
    </section>
  );
};
