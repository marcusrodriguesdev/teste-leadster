const AUTHORIZATION_KEY = '563492ad6f91700001000001ba630320db23455a92fa3fafe7edaf59';
const API_PEXELS = (page) => `https://api.pexels.com/v1/curated?page=${page}&per_page=16`;

async function requestApiPexels(currentPage) {
  const requiriment = await
  fetch(API_PEXELS(currentPage), {
    headers: {
      Authorization: AUTHORIZATION_KEY,
    },
  }).then((response) => response.json());
  return requiriment;
}

export default requestApiPexels;
