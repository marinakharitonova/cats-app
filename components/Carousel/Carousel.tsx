import React from 'react';
import {IconButton} from '@chakra-ui/react';
import {BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi';
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from './Carousel.module.css'
import Slider, {Settings} from 'react-slick';

const defaultSettings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
};

type CarouselProps = {
    cards: string[]
    settings?: Settings
}

type ArrowProps = {
    onClick?: () => void
}

/**
 * Carousel component renders a slick-carousel
 */
export default function Carousel({cards, settings = defaultSettings}: CarouselProps) {
    return (
        <Slider {...settings}>
            {cards.map(url => (
                <Image
                    key={url}
                    src={url}
                    alt="Cat"
                    className={styles.image}
                    width="632"
                    height="500"
                />
            ))}
        </Slider>
    );
}

function SamplePrevArrow({onClick}: ArrowProps) {
    return (
        <IconButton
            aria-label="left-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            left="-20px"
            top="50%"
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={onClick}
        >
            <BiLeftArrowAlt/>
        </IconButton>
    )
}

function SampleNextArrow({onClick}: ArrowProps) {
    return (
        <IconButton
            aria-label="right-arrow"
            colorScheme="messenger"
            borderRadius="full"
            position="absolute"
            right="-20px"
            top="50%"
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={onClick}
        >
            <BiRightArrowAlt/>
        </IconButton>
    )
}


