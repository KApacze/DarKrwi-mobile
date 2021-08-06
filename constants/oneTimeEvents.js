import {serverURL} from '../assets/config/server'

export const getAllOneTimeEvents = () => {
    let url = `${serverURL}events/eventList`
    return fetch(url, {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => { 
        return response.json();})
    .then(responseData => {
        if(responseData !== undefined)
            return responseData;})
    .catch(err => {
    });
  
};

export const getEventsByRegion = (region) => {
    let events;
    let url = `${serverURL}events/eventList`
    return fetch(url, {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    })
    .then(response => { 
        return response.json();})
    .then(responseData => {
        events = responseData;
        })
    .catch(err => {
    })
    .then( () =>
        {
            if(events){
                events = Object.values(events).filter((key) => {
                    return ((key.region[0] === region) )
                })
            } else 
            events = null;
            if(events){
                events = Object.values(events).filter((key) => {
                    try {
                    // if(typeof(key.place) !== 'undefined' || key.place !== null)
                        return (toSimpleDate(new Date(key.time.date)) >= toSimpleDate(new Date())) 
                    }
                    catch(error) {
                       // console.log(error.name + ":" + error.message);
                    }
                })
            } 
           
            if(events !== undefined) {
                return events; 
            }

        }
        
    );
}

makeRequest = (method, data, api = "/events/eventList") =>{ 
    return axios({
      method: method,
      url: api,
      data: data,
    });
  }

  toSimpleDate = (date) => {
    return date.setHours(0,0,0,0);
  }