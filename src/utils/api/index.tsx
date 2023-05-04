import axios from 'axios';

export const apiPost = (url:string, data: Record<string, any>) => {
    const config = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
      },
    }
    return axios.post(url , data)
}