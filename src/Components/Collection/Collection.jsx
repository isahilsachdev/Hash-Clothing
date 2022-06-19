import React from 'react';
import Slider from 'react-slick';

import CollectionItem from './CollectionItem';
import {
    CollectionContainer,
    CollectionTitle,
    SliderContainer,
} from './collection.styles';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useDispatch } from "react-redux";
import { postCartItem } from '../../Redux/App/action';

const Collection = ({ title, items, routeName }) => {
    const dispatch = useDispatch();
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                },
            },
        ],
    };
    const handleAddToCard = (cloth) => {
        dispatch(postCartItem(cloth));
    };

    return (
        <CollectionContainer>
            <CollectionTitle>{title?.toUpperCase()}</CollectionTitle>
            <SliderContainer>
                <Slider {...settings}>
                    {items?.map((item, index) => (
                            <CollectionItem key={index} item={item} handleAddToCard={handleAddToCard} />
                        ))}
                </Slider>
            </SliderContainer>
        </CollectionContainer>
    );
};
export default Collection;
