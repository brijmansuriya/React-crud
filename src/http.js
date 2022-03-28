import axios from 'axios';
export default axios.create({
    baseURL:"http://localhost/flutter_api/api",
    headers:{
        "Content-type":"application/json"
    }
    
})  