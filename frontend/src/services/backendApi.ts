import axios from 'axios'

export const backendApi = (url: string) => {
    const client = axios.create({
        baseURL: 'http://localhost:8080/' + url,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })

    client.interceptors.response.use(response => {
        console.log('Response:', response);
        return response
    }, function (error) {
        console.log('An error occurred while calling backend', error)
        if (error.response) {
            // client received an error response (5xx, 4xx)
            if (error.response.status === 404) {
                return { status: error.response.status }
            }
            return Promise.reject(error.response)
        } else if (error.request) {
            // client never received a response, or request never left
        } else {
            // anything else
        }
        return Promise.reject(error);
    })

    return client
}