import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Track from "./Track";

const Container = styled.div`
  height: 100%;
  width: 40%;
  margin: 2% auto;
`;
const Title = styled.h2`
  height: 10%;
  width: 100%;
  border: 3px solid white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  letter-spacing: 3px;
  font-weight: 600;
  border-radius: 5px;
  margin-bottom: 3%;
`;

const List = styled.div`
  height: 90%;
  width: 100%;
  border: 4px solid white;
  border-radius: 5px;
  padding: 1% 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Column = (props) => {
  const tracks = props.tracks.map((track, index) => {
    return <Track key={track} id={track} index={index} data={props.data} />;
  });

  return (
    <Container>
      <Title>Hammer Off</Title>
      <Droppable droppableId="1">
        {(provided) => (
          <List ref={provided.innerRef} {...provided.droppableProps}>
            {tracks}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
