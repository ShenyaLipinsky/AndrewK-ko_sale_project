const axios = require('axios').default;

const URI = 'https://medclub.onrender.com/api';

export async function fetchProducts(category = '', page, limit) {
  // if (endpoint === null) {
  //   return;
  // }
  const response = await axios
    .get(
      `${URI}/products${category}${page ? `/?limit=${limit}&page=${page}` : ''}`
    )
    .then(res => {
      return res.data;
    })
    .catch(err => console.log(err));
  return response;
}

export async function fetchProductById(id) {
  try {
    const {
      TM,
      title,
      category,
      description,
      full_images,
      image,
      image_of_size,
      instruction_description,
      popularity,
      price,
      size_and_price,
      product_about,
      recommended_products,
      short_description,
    } = await axios.get(`${URI}/products/${id}`).then(res => {
      return res.data;
    });

    return {
      title,
      short_description,
      popularity,
      image,
      category,
      price,
      size_and_price,
      description,
      TM,
      instruction_description,
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

export async function fetchInstruction(id) {
  try {
    const { instruction_description } = await axios
      .get(`${URI}/products/${id}`)
      .then(res => {
        return res.data;
      });

    return {
      instruction_description,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function fetchTableOfSizes(id) {
  try {
    const { image_of_size } = await axios
      .get(`${URI}/products/${id}`)
      .then(res => {
        return res.data;
      });

    return {
      image_of_size,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addProduct(body) {
  try {
    const response = await axios.post(`${URI}/products/`, body).then(res => {
      console.log(res);
      return res.data;
    });

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateProduct(id, body) {
  try {
    const response = await axios
      .post(`${URI}/products/:${id}`, body)
      .then(res => {
        console.log(res);
        return res.data;
      });

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
