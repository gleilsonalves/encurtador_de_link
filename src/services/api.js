import axios from 'axios'

export const key = '93a90fb377e8fe5feb8e0271bc6f8a19cbded963'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'authorization': `Bearer ${key}` 
    }
})

export default api