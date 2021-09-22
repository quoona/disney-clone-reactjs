/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://i.pinimg.com/originals/c9/03/70/c90370d1b0be99b2b00058983564f4cc.jpg" />
      </Background>
      <ImageTitle>
        <img src="https://i.pinimg.com/originals/eb/a7/23/eba7239c665aae1b3a302b5b42479a60.png" />
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
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="./images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 - 24m - fantasy, family, animation</SubTitle>
      <Description>Adventure of Fin and Jay</Description>
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
  align-items: center;
`;

const PlayButon = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
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

const TrailerButton = styled(PlayButon)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);

  span {
    color: rgb(249, 249, 249);
    text-transform: uppercase;
  }
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  cursor: pointer;
  margin-right: 15px;
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  img {
    opacity: 0.9;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  min-height: 20px;
  margin-top: 26px;
  font-size: 15px;
`;

const Description = styled.div`
  line-height: 1.4;
  color: rgb(249, 249, 249);
  font-size: 20px;
  margin-top: 16px;
`;
