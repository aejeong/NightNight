import React from "react";
import PropTypes  from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Videos from "Components/Videos";
import Loader from "Components/Loader";
import Slider from "react-slick";

const Container = styled.div`
height: calc(100vh - 50px);
width:100%;
position: relative;
padding:50px;
`;

const Backdrop = styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
background-image: url(${props => props.bgImage});
background-position: center center;
background-size: cover;
filter: blur(3px);
opacity:0.5;
z-index:0;
`;

const Content = styled.div`
display:flex;
width:100%;
position: relative;
z-index: 1;
height: 100%;
margin-left:5px;
`;

const Cover = styled.div`
width:30%;
background-image: url(${props => props.bgImage});
background-position: center center;
background-size: cover;
height: 100%;
border-radius: 5px;
`;

const Data= styled.div`
width: 70%;
margin-left:10px;
`;

const Title= styled.h1`
font-size: 32px;
margin-bottom:10px;
`;

const TagLine = styled.span`
padding-left:1px;
font-size:25px;
opacity: 0.5;
font-weight:lighter;
`;

const ItemContainer = styled.div`
margin:20px 0;
`;

const Item = styled.span`
`;

const Divider = styled.span`
margin: 0 10px;
`;

const Overview =styled.p`
font-size:12px;
opacity: 0.7;
line-height: 1.5;
width:50%;
margin-top:10px;
margin-bottom:90px;
`;

const VideoContainer=styled.div`

width:75%;
height:100px;
margin-left:30px;

`;

const VideoTrailer=styled.div`
font-size: 20px;
margin-left:10px;
opacity:0.7;
display:inline;
`

const Production =styled.div`
display:flex;
span{
    margin:5px 10px;
opacity: 0.3;
font-size:15px;
}
`;

const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1
  };

const DetailPresenter = ({
    result,
    loading,
    error}) => 
   loading ? (
       <>
       <Helmet>
           <title>Loading | MovieNight</title>
       </Helmet>
       <Loader />
       </>
   )  :  ( <Container>
       <Helmet><title>{result.original_title ? result.original_title : result.original_name}{" "} | MovieNight</title></Helmet>
   <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
   <Content>
       <Cover bgImage={ result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../images/noimage.jpg")}/>

       <Data>
           <Production>{result.production_companies ? result.production_companies.map(index => <span key={index.id}>{index.name}</span> ) : " "}</Production>
           <Title>{result.original_title ? result.original_title : result.original_name }</Title>
           <ItemContainer>
               <Item>{result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}</Item>
           <Divider>―</Divider>
           <Item>{result.runtime ? result.runtime : result.episode_run_time[0]}min</Item>
           <Divider>―</Divider>
           <Item>{result.genres && result.genres.map((genre, index) => index === result.genres.length-1 ?
            genre.name : `${genre.name} / `)} </Item>
           </ItemContainer>
            <TagLine>{result.tagline}</TagLine>
            <Overview>{result.overview}</Overview>
                       <VideoTrailer><i className="fas fa-play-circle"></i> Trailler </VideoTrailer>
                <VideoContainer>
                    
                        {result.videos.results && result.videos.results.length >=3 ? 
                        (
                             <Slider {...settings}> 
                            {result.videos.results.map(index =>
                               <Videos key={index.id}  videoKey={index.key}/>)}
                            </Slider>
                              ) :(  
                                  <>
                            <Videos key={result.videos.results[0].id} videoKey={result.videos.results[0].key}/>
                            </>
                        )}
                </VideoContainer>
            
       </Data>
   </Content>
</Container>);


    DetailPresenter.propTypes = {
    result : PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;
