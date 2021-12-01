const AUTHORIZATION_KEY = '563492ad6f91700001000001ba630320db23455a92fa3fafe7edaf59';
// const API_PEXELS = 'https://api.pexels.com/v1/curated';

async function requestApiPexels(page) {
  const requiriment = await
  fetch(`https://api.pexels.com/v1/search?query=nature&page=${page}`, {
    headers: {
      Authorization: AUTHORIZATION_KEY,
    },
  }).then((response) => response.json());
  return requiriment;
}

export default requestApiPexels;
