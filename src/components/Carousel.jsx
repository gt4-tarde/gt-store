import { Carousel } from "react-bootstrap"
import slides from '../data/slidesList'
import './Carousel.css'
import { Link } from "react-router-dom";

function CarouselComponent() {
    return (
        <Carousel
            className="shop-carousel"
            interval={3000}
            pause="hover"
        >
            {slides.map((slide) => (
                <Carousel.Item key={slide.title}>
                    <img
                        className="shop-carousel__image"
                        src={slide.image}
                        alt={slide.title}/>
                    <Carousel.Caption className="shop-carousel__caption">
                        <h2>{slide.title}</h2>
                        <p>{slide.description}</p>
                        <Link className="shop-carousel__link" to="/produtos">
                            Ver produtos
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default CarouselComponent