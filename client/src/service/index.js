  
import axios from 'axios'
export default axios.create({
    baseURL: 'http://localhost:9000/',
    timeout: 100,
    headers: {
        'X-Custom-Header': 'foobar',
        "content-type": "application/json"
    }
});