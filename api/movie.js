import fetch from "node-fetch";

const { APIKEY } = process.env

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body);

  const url = id 
    ? `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&include_adult=false&language=ko-KR` 
    : `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&include_adult=false&language=ko-KR&page=${page}&query=${title}`;

  const res = await fetch(url);
  const json = await res.json();

  response.status(200).json(json)
}