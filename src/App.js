import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies, fetchGenres } from './api';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import Filters from './components/Filters';
import translations from './components/translations';
import styled from 'styled-components';

const App = () => {
  const [language, setLanguage] = useState('en-US');
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('desc');
  const [genreMap, setGenreMap] = useState({});

  const { data: moviesData, isLoading, isError, error } = useQuery({
    queryKey: ['movies', { language, page }],
    queryFn: fetchMovies,
    keepPreviousData: true,
  });

  const genresQuery = useQuery({
    queryKey: ['genres', language],
    queryFn: () => fetchGenres(language),
  });

  useEffect(() => {
    if (genresQuery.data) {
      const map = genresQuery.data.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      setGenreMap(map);
    }
  }, [genresQuery.data]);

  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const currentTranslations = translations[language === 'en-US' ? 'en' : 'ko'];
  return (
    <AppContainer>
      <Title>상영중인 영화</Title>
      <Filters 
        language={language} 
        setLanguage={setLanguage} 
        sortOrder={sortOrder} 
        setSortOrder={setSortOrder} 
      />
      <MovieList 
        movies={moviesData.results} 
        genreMap={genreMap} 
        sortOrder={sortOrder} 
        translations={currentTranslations}
      />
      <Pagination 
        page={page} 
        setPage={setPage} 
        totalPages={moviesData.total_pages} 
      />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  margin-top:40px;
  text-align: center;
  font-size:34px;
  color: #000;
`;