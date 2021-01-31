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

export const postActivity = (activity) => {
  return fetch(`${API}/activity/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activity),
  })
    .then((responce) => {
      return responce.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
