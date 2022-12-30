const axios = require('axios').default;

const URI = 'https://medclub.onrender.com/api';

export async function fetchProducts(page, limit) {
  // if (endpoint === null) {
  //   return;
  // }
  const response = await axios
    .get(`${URI}/products${page ? `/?limit=${limit}&page=${page}` : ''}`)
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
  return response;
}

export async function fetchProductById(id) {
  try {
    const {
      title,
      price,
      description,
      TM,
      Instruction_description,
      full_images,
      image_of_size,
      product_about,
      recommended_products,
    } = await axios.get(`${URI}/products/${id}`).then(res => {
      return res.data;
    });

    return {
      title,
      price,
      description,
      TM,
      Instruction_description,
      full_images,
      image_of_size,
      product_about,
      recommended_products,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

// export async function fetchCrew(id) {
//   const fetchCrew = await axios
//     .get(`${URI}movie/${id}/credits?api_key=${API_KEY}`)
//     .then(res => {
//       return res.data.crew;
//     });

//   const crewInfo = fetchCrew.map(member => {
//     const { profile_path, name, job, id } = member;
//     return { profile_path, name, job, id };
//   });

//   const filterCrew = new Map(crewInfo.map(crew => [crew.id, crew]));
//   const filteredCrew = [...filterCrew.values()];

//   return filteredCrew;
// }
// export async function fetchReviews(id) {
//   const fetchReviews = await axios
//     .get(`${URI}movie/${id}/reviews?api_key=${API_KEY}`)
//     .then(res => {
//       return res.data.results;
//     });

//   const reviewInfo = fetchReviews.map(review => {
//     const { author, content, id } = review;
//     return { author, content, id };
//   });
//   return reviewInfo;
// }

// export async function searchMovies(queue) {
//   const searchMovies = await axios
//     .get(`${URI}search/movie?api_key=${API_KEY}&query=${queue}`)
//     .then(res => {
//       return res.data.results;
//     });

//   return searchMovies;
// }
