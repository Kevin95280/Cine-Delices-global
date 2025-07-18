import Slider from "react-slick";
import Card from "../Cards/Card";

const RecipeCarousel = ({ title, recipes }) => {
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
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            authorName={recipe.author_username}
            image={recipe.picture_url}
          />
        ))}
      </Slider>
    </section>
  );
};

export default RecipeCarousel;
