/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://i.pinimg.com/originals/3f/81/0b/3f810b1005ca9177f479f51334f31cbe.jpg" />
      </Background>
      <ImageTitle>
        <img src="http://assets.stickpng.com/thumbs/5c80f70f72f5d9028c17ed26.png" />
      </ImageTitle>
      <Controls>
        <PlayButon>
          <img src="./images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButon>
        <TrailerButton>
          <img src="./images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton></AddButton>
        <GroupWatchButton></GroupWatchButton>
      </Controls>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  // 100% vertical height - 70px of navbar is height of page
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  //best goal for any image, give it a container and width 100%, height 100%, objetct-fit: contain
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
`;

const PlayButon = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rbg(249, 249, 249);
  border: none;
  cursor: pointer;
  letter-spacing: 1.8px;

  span {
    color: black;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled.button``;

const AddButton = styled.button``;

const GroupWatchButton = styled.button``;
