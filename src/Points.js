import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 300px;
  height: 400px;
  border: 3px solid white;
  border-radius: 5px;
  text-align: center;
  margin-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 600;
`;
const AlbumName = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AlbumPoints = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Points = (props) => {
  const [albums, setAlbums] = useState({});
  const tracks = props.data.tracks;
  const ranking = props.ranking;

  // On mount this stores an object with each album & it's number of occurences in the data.
  useEffect(() => {
    let newAlbums = {};
    for (const track in tracks) {
      const album = tracks[track].album;
      if (!newAlbums[album]) {
        newAlbums[album] = 1;
      } else {
        newAlbums[album] = newAlbums[album] + 1;
      }
      setAlbums(newAlbums);
    }
  }, [tracks]);

  // Calculate the weighting of the specific album based on number of occurences
  const calculateWeighting = (album) => {
    const albumLength = albums[album];
    return Math.min(...Object.values(albums)) / albumLength;
  };

  // This iterates through the rankings array an extracts the position of the relevent albums and cumulates the points
  // Points are assigned based on index positon and the weighting for that album.
  const calculatePoints = (album) => {
    let points = 0;
    const weighting = calculateWeighting(album);
    const rankingLength = ranking.length;
    ranking.forEach((track, index) => {
      if (tracks[track].album === album) {
        points = points + (rankingLength - index);
      }
    });
    return points * weighting;
  };

  // For each album we create a name componant and the current points of the album, all in a wrapper component
  const content = !albums
    ? null
    : Object.keys(albums).map((album, index) => {
        const totalPoints = calculatePoints(album);
        return (
          <Wrapper key={`${album}_${index}`}>
            <AlbumName>{album}</AlbumName>
            <AlbumPoints>{totalPoints}</AlbumPoints>
          </Wrapper>
        );
      });

  return <Container>{content}</Container>;
};

export default Points;
