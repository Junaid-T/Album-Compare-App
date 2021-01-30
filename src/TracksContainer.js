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
  border: 2px solid grey;
  text-align: center;
`;

const List = styled.div`
  height: 80%;
  width: 100%;
  border: 2px solid grey;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
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
