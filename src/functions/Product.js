import axios from "axios";
import queryStr from 'query-string'
const uri = `https://softx.herokuapp.com/api/v1/products`;
export const getAllProds = (filters) => {
  console.log({ filters })
  const str = queryStr.stringify(filters)
  return axios
    .get(`${uri}?${str}`)
    .then((data) => {
      console.log({ data: data.data.data });
      return data.data.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
};

export const getOneProd = (id) => {
  console.log({ id });
  return axios
    .get(`${uri}/${id}`)
    .then((data) => {
      console.log({ data: data.data.data });
      return data.data.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
};

export const updateOneProd = (id, values) => {
  console.log({ id, values });
  return axios
    .put(`${uri}/${id}`, values, {
      headers: { "Content-Type": "application/json" },
    })
    .then(({ data }) => {
      console.log({ data: data.data });
      return data.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
};

export const uploadPhoto = (id, data) => {
  console.log({ id, data });
  return axios
    .put(`${uri}/${id}/images`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(({ data }) => {
      console.log({ data: data.data });
      return data.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
};

export const deleteImage = (id,deleteID) => {
  console.log({ id});
  return axios
    .put(`${uri}/${id}/images/${deleteID}`)
    .then(({ data }) => {
      console.log({ data: data.data });
      return data.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
};
