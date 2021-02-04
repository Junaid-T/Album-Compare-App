import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  width: 50%;
  height: 10%;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
  background-color: ${(props) => props.color};
  margin-bottom: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
`;
const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 4px;
`;

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
          <Name>{trackData.content}</Name>
        </Container>
      )}
    </Draggable>
  );
};

export default Track;
