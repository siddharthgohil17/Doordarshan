import axios from 'axios'

const request=axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        key:"AIzaSyAYnVDzDbQCvxk3bagiCKh16FR8oHUxPXg"
    },
})

export default request;