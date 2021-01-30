import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  width: 100px;
  height: 80px;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
  background-color: ${(props) => props.color};
  margin-bottom: 1%;
`;
const Title = styled.h3``;
const Name = styled.p``;

const Track = (props) => {
  const trackData = props.data.tracks[props.id];
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          color={trackData.color}
        >
          <Title />
          <Name>{trackData.content}</Name>
        </Container>
      )}
    </Draggable>
  );
};

export default Track;
