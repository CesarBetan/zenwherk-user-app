import React, { Component } from 'react';
import axios from 'axios';
import { apiUrl } from '../../Constants';
import './Place.css';
import NavBar from '../NavBar';
import Hero from './Hero';
import Reviews from './Reviews';
import Services from './Services';
import Address from './Address'
import About from './About';
import Hours from './Hours';
import moment from 'moment';
import Gallery from './Gallery';

class Place extends Component {

    constructor(props) {
      super(props)
      this.getPlace = this.getPlace.bind(this);
      let uuid = this.props.match.params.uuid;
      this.state = { place : null, uuid: uuid }
    }

    componentWillMount() {
      this.getPlace()
    }

    getPlace() {
      const endpoint = apiUrl + 'public/place/'
      axios.get(endpoint + this.state.uuid).then(response => {
        switch (response.status) {
          case 200:
              this.setState({place : response.data})
            break;
          case 404:
            console.log("NOTHING TO SEE HERE")
            break;
          default:

        }
      })
    }

    createSchedule(hours) {
      const daysDictionary = {}
      const schedule = []
      hours.map((current, i) =>
        daysDictionary[current.day] = i
      )
      for(let i = 1; i <= 7; i++) {
        if(daysDictionary[i] !== undefined) {
          let current = hours[daysDictionary[i]]
          let openingTime = moment(current.openTime).format('hh:mm A')
          let shortOpeningTime = moment(current.openTime).minute() === 0 ?
          moment(current.openTime).format('hA') :
          moment(current.openTime).format('h:mmA')
          let closingTime = moment(current.closeTime).format('hh:mm A')
          let shortClosingTime = moment(current.closeTime).minute() === 0 ?
          moment(current.closeTime).format('hA') :
          moment(current.closeTime).format('h:mmA')
          schedule.push({day: i, open: true, openingTime: openingTime,
          shortOpeningTime: shortOpeningTime, closingTime: closingTime,
          shortClosingTime: shortClosingTime})
        } else {
          schedule.push({day: i, open: false})
        }
      }
      return schedule
    }

    render() {
        const place = this.state.place;
        const schedule = place === null ? undefined :
        this.createSchedule(place.schedules);
        return (
          <div>
              {
                place === null ?
                <div>
                  Loading...
                </div>
                :
                <div>
                  <NavBar/>
                  <Hero title={place.name}
                  picture={place.pictures.length > 0 ?
                  place.pictures[0] : undefined} schedule={schedule}/>
                  <Reviews uuidPlace={this.state.uuid} reviews={place.reviews}/>
                  <Services services={place.features}/>
                  <Gallery pictures={place.pictures}/>
                  <Address latitude={place.latitude}
                  longitude={place.longitude}
                  address={place.address}/>
                  <About description={place.description}
                  phone={place.phone} website={place.website}/>
                  <Hours schedule={schedule}/>
                </div>
              }
          </div>
        );
    }
}

export default Place;
