function slider() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  };

  return fetch("http://localhost:8080/slider", requestOptions)
    .then((response) => {
      return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          if (response.status === 401) {
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        // localStorage.setItem("user", JSON.stringify(data));
        // localStorage.setItem("token", data.token);
        return data;
      });
    })
    .then((data) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("slider", JSON.stringify(data));

      return data;
    });
}

export const sliderService = {
  slider,
};
