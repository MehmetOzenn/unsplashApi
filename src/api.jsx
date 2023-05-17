import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization : 'Client-ID mjkxiDPZgRHeRWDa4tZPfHuUXgZTtKxS3Cz1ZCdmJ30'
      },
      params:{
        query:term,
        per_page:20
      }
    });  
    return response.data.results;
  
};

export default searchImages;