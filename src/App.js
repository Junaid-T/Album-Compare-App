import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import initialData from "./test_data";
import TrackContainer from "./TracksContainer";
import Points from "./Points";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const [ranking, setRanking] = useState([]);

  // Intialize tracks in state
  useEffect(() => {
    const tracks = initialData.track_ids;
    setRanking(tracks);
  }, []);

  // OnDragEnds responsibility is to synchronously update the state to reflect the drag and drop result.
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (destination === null) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Here we update the state to persist any "drag and drops".
    // Remove the "dragged" item from its place and inserts it to where the destination is.
    const newArray = [...ranking];
    newArray.splice(source.index, 1);
    newArray.splice(destination.index, 0, draggableId);
    setRanking(newArray);
  };

  return (
    <div id="dashboardContainer">
      <DragDropContext onDragEnd={onDragEnd}>
        <TrackContainer tracks={ranking} data={initialData} />
      </DragDropContext>
      <Points data={initialData} ranking={ranking} />
    </div>
  );
};

export default App;
