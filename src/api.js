// 보안이나 유지보수를 위해 환경변수 사용
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_URL;


// fetchMovies 함수: 영화 데이터 가져오기
export async function fetchMovies({ queryKey }) {
  const [key, { language, page }] = queryKey;
  const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${language}&page=${page}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`네트워크 응답오류입니다: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// fetchGenres 함수: 장르 데이터 가져오기
export async function fetchGenres(language) {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${language}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('네트워크 응답오류입니다.');
  }
  const data = await response.json();
  return data.genres;
}
