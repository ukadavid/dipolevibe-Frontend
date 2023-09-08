import axios from 'axios';


const baseUrl = import.meta.env.VITE_BASE_URL;
const TranscriptionUrl = import.meta.env.VITE_URL;

// Get Request
export const apiGet = (path) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.get(`${baseUrl}${path}`, config)
}

// Post Request
export const apiPost = (path, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.post(`${baseUrl}${path}`, data, config)
}
export const apiTranscribePost = (path, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.post(`${TranscriptionUrl}${path}`, data, config)
}

// Put Request
export const apiPut = (path, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.put(`${baseUrl}${path}`, data, config)
}

// Patch Request
export const apiPatch = (path, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.patch(`${baseUrl}${path}`, data, config)
}

// Delete Request
// Delete Request

export const apiDelete = (path, id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    return axios.delete(`${baseUrl}${path}/${id}`, config);
}