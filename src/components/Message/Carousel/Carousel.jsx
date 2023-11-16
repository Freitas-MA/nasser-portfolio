import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyCarousel(props) {
  const { Photos } = props;
  console.log(props);
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      transitionTime={500}
      showStatus={false}
      showIndicators={true}
      stopOnHover={false}
      emulateTouch={true}
      dynamicHeight={true}
      centerMode={true}
    >
      {Photos.map(({ photo, id }) => (
        <div key={id}>
          <img src={photo} alt="carousel" />
        </div>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
