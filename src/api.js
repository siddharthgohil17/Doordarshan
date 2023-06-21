import axios from 'axios'

const request=axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        key:"AIzaSyDv5tCUb6WXdzgTZ54MHOcgA8wWzrJWV8M",
    },
})

export default request;