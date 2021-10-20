// function login(email, password) {
//   debugger;
//   return fetch("http://localhost:8080/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   }).then((data) => {
//     localStorage.setItem("user", JSON.stringify(data));
//     localStorage.setItem("token", data.token);
//     return data.json();
//   });
// }

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return fetch("http://localhost:8080/login", requestOptions)
    .then((response) => {
      return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
          if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            // location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", data.token);
        const cart = { data: [] };
        localStorage.setItem("cart", JSON.stringify(cart));
        return data;
      });
    })
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

export const authService = {
  login,
  logout,
};
