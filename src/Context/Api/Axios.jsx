import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const TranscriptionUrl = import.meta.env.VITE_TranscriptionUrl;

// Get Request
export const apiGet = (path) => {
  return axios.get(`${baseUrl}${path}`);
};

export const apiGetVideos = (path) => {
    console.log(path);
    return axios.get(`${TranscriptionUrl}${path}`);
};

// Post Request
export const apiPost = (path, data) => {
  return axios.post(`${baseUrl}${path}`, data);
};

export const apiPostViewCount = (path) => {
    //console.log(`${TranscriptionUrl}${path}`);
    return axios.post(`${TranscriptionUrl}${path}`);
  };

export const apiTranscribePost = (path, data) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return axios.post(`${TranscriptionUrl}${path}`, data, config);
};

// Put Request
export const apiPut = (path, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return axios.put(`${baseUrl}${path}`, data, config);
};

// Patch Request
export const apiPatch = (path, data) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return axios.patch(`${baseUrl}${path}`, data, config);
};

// Delete Request
export const apiDelete = (path, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return axios.delete(`${baseUrl}${path}/${id}`, config);
};
