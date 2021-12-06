const AUTHORIZATION_KEY = '563492ad6f91700001000001ba630320db23455a92fa3fafe7edaf59';
const API_PEXELS = 'https://api.pexels.com/v1/curated?per_page=20';

async function requestApiPexels() {
  const requiriment = await
  fetch(API_PEXELS, {
    headers: {
      Authorization: AUTHORIZATION_KEY,
    },
  }).then((response) => response.json());
  return requiriment;
}

export default requestApiPexels;
