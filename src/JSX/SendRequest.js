import axios from 'axios';

const api = axios.create({
    baseURL : `https://protected-inlet-17146.herokuapp.com`
})

const SendRequest = (url, other) =>{

      return new Promise((resolve, reject) =>{

        api.post(url, other).then((res) =>{
          return res.data;
        }).then((data) =>{  
            resolve(JSON.parse(data));
        }).catch((err) =>{
          reject(err);
        })
      })
}

export default SendRequest;