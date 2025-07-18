import Slider from "react-slick";
import Card from "../Cards/Card";

export default function ContentCarousel({ title, items }) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
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
