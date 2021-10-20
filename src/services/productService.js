function fetchProduct(email, password) {
  return fetch("http://localhost:8080/product").then((response) => {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      localStorage.setItem("product", JSON.stringify(data));
      return data;
    });
  });
}

export const productService = {
  fetchProduct,
};
