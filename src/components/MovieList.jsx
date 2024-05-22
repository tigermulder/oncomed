import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const MovieList = ({ movies, genreMap, sortOrder, translations  }) => {
  const IMAGE_BASE_URL = process.env.REACT_APP_IMG;

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.vote_average - b.vote_average;
    } else {
      return b.vote_average - a.vote_average;
    }
  });

  return (
    <MovieContainer>
      {sortedMovies.map((movie, index) => (
        <MovieCard key={movie.id}>
          {index < 4 && <RankBadge>{index + 1}</RankBadge>}
          <MovieImage src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieOverview>{movie.overview}</MovieOverview>
          <MovieGenres>{translations.genres}: {movie.genre_ids.map((id) => genreMap[id]).join(', ')}</MovieGenres>
          <MovieRating>
            {translations.rating}: <FaStar color="gold" /> {movie.vote_average}
          </MovieRating>
        </MovieCard>
      ))}
    </MovieContainer>
  );
};

export default MovieList;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MovieCard = styled.div`
  position: relative;
  margin: 20px;
  border: 1px solid #ccc;
  padding: 15px;
  width: 260px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 350px;
`;

const MovieTitle = styled.h2`
  margin:22px 0 10px;  
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const MovieOverview = styled.p`
  font-size: 12px;
  line-height:1.5em;
  color: #666;
`;

const MovieGenres = styled.p`
  margin-top:10px;
  font-size: 13px;
  color: #666;
`;

const MovieRating = styled.p`
  display:flex;
  margin-top:10px;
  font-size: 15px;
  align-items:center;
  gap:2px;
  color: #333;
`;

const RankBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #f7242e;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
  border-radius: 3px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;