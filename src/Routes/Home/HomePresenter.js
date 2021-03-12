import React from "react";
import PropTypes  from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components"
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Container = styled.div`
background-color:#000;
width:100vw;
height:100vh;
background: ${props=> props.backDrop?  `url(https://image.tmdb.org/t/p/original/${props.backDrop})` : '#000'};
background-size:cover;
background-position:center;
position:relative;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,1.653509) 10%, rgba(200,200,200,0) 100%);

}`



const HomePresenter = ({
    nowPlaying,
    // upcoming,
    // popular,
    loading,
    error}) => (
        <>
        <Helmet><title>Home | MovieNight </title></Helmet>
        { loading ? <Loader /> : 
        <Container backDrop={nowPlaying[2]['backdrop_path']}>
        <Overlay></Overlay>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
        {/* {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
        {nowPlaying.map(movie=> ( <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date.substring(0,4)} isMovie={true} /> ))}
        </Section>)} */}

        {/* {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
        {upcoming.map(movie=> ( <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date.substring(0,4)} isMovie={true}/> ))}
        </Section>)} */}

        {/* {popular && popular.length > 0 && (
        <Section title="Popular Movies">
        {popular.map(movie=> ( <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date.substring(0,4)} isMovie={true} /> ))}
        </Section>)} */}
        {error && <Message color="#e74c3c" text={error}/>}
        </Container>}
        </>
    )
       
        

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    // upcoming: PropTypes.array,
    // popular: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}


export default HomePresenter;