import {serverURL} from '../assets/config/server'
import axios from 'axios'


export const getAllStationaryPoints = () => {
    let url = `${serverURL}points/pointsList`
    console.log("url", url)
    return fetch(url, {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => { 
        // console.log("response", response); 
        return response.json();})
    .then(responseData => {
        //console.log("responseData",responseData); 
        return responseData;})
    .catch(err => {
        //console.log("fetch error" + err);
    });
  
};

export const getPointsByRegion = (region) => {
    let points;
    let url = `${serverURL}points/pointsList`
    return fetch(url, {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => { 
        //console.log("response", response); 
        return response.json();})
    .then(responseData => {
        //console.log("responseData",responseData); 
        points = responseData;})
    .catch(err => {
        //console.log("fetch error" + err);
    }).then( () =>
        {
            if(points){
                points = Object.values(points).filter((key) => {
                    // console.log("key region", key.region);
                    //  console.log("key region[0]", key.region[0]);
                     return key.region[0] === region 
                })
            } else points = null;
            
            // console.log("filtered points type", points.type);
            // console.log("filtered points lenght", points.lenght);
            // console.log("filtered points ", points);
            if(points !== undefined)
                {
                    return points;
            }
        }
    );
    return points;
}

makeRequest = (method, data, api = "/points/pointList") =>{
    // returns a Promise
    return axios({
      method: method,
      url: api,
      data: data,
    });
  }