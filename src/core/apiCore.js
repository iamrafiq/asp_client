import { API } from "../config";

export const getCountries = () => {
  return fetch(`${API}/country/all`, {
    method: "GET",
  })
    .then((responce) => {
      return responce.json();
    })
    .catch((err) => console.log(err));
};
