import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container=styled.div`
margin:10px;
`;



const Trailer =styled.div`
margin-top:10px;
`;

const Videos = ({videoKey}) =>
<Container>
<Trailer>
<iframe title="video" width="300" height="200"
src={`https://www.youtube.com/embed/${videoKey}`}
 frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen />
</Trailer>
</Container>;

// href={`https://www.youtube.com/watch?v=${videoKey}`}

Videos.propTypes={
    videoKey:PropTypes.string.isRequired,
}

export default Videos;
