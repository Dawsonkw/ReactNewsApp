import React, { Component } from "react";
import Slider from "react-slick";
import NewsApp from "./NewsApp";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarouselPic = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    
    
    return (
        <div className="">
            <Slider {...settings}>
            {props.articles.map((article, index) => (
                <NewsApp 
                    key={index}
                    image={article.image}
                    urlToImage={article.urlToImage}
                    title={article.title}
                />
            ))}
            </Slider>
        </div>
    );
};

export default CarouselPic;