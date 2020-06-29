// Write your Character component here
import React from "react";
import styled from "styled-components";

const DivBackground = styled.div`
  border: 4px solid grey;
  margin: 20px 300px;
  padding: 5px;
  background-color: white;
`;

const NameBackground = styled.h2`
  color: #2b3464;
`;

const Character = (props) => {
    return (
        <DivBackground>
            <NameBackground>{props.characterData.name}</NameBackground>
            <p> height: {Math.round(props.characterData.height / 30.5)} ft</p>
            <p> weight: {Math.round(props.characterData.mass * 2.2)} lbs</p>
            <p> eye color: {props.characterData.eye_color}</p>
        </DivBackground>
    );
};

export default Character;