import axios from 'axios';

export const onSearchSubmit = async (term) => {
    const response = await axios.get('/search/photos', {
      params: { query: term.trim()} 
    })
    return response
  }
  
  export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: 'Client-ID J0jVD1abc1UlcWsV2H8nUcCHBomdiEqtF6Cqdo6oAPY'
    },
  })
