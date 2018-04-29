import React, { Component } from 'react';
import './ServicesList.css';
import ServiceCell from '../ServiceCell';

class ServicesList extends Component {

    getServicesIdeal(servicesData) {
      var services = []
      var moreServices = []
      for(var i = 0; i < servicesData.length; i++) {
        const currentService = servicesData[i];
        const currentServiceInfo = currentService.info;
        switch (currentService.id) {
          case 'Outlets':
            services.push(
              {
                text: `${currentServiceInfo.numberOfOutlets} Available Outlets`,
                icon: null,
                iconAlt: null,
              },
            )
            break;
          case 'Internet':
            if(currentServiceInfo.hasFreeWiFi) {
              services.push(
                {
                  text: `Free WiFi`,
                  icon: null,
                  iconAlt: null,
                },
              )
            }
            if(currentServiceInfo.internetSpeed) {
              moreServices.push(
                {
                  text: `${currentServiceInfo.internetSpeed}Mbps Internet`,
                  icon: null,
                  iconAlt: null,
                },
              )
            }
            if(currentServiceInfo.hasEthernet) {
              moreServices.push(
                {
                  text: `Wired Internet Available`,
                  icon: null,
                  iconAlt: null,
                },
              )
            }
            break;
          case 'Parking':
            if(currentServiceInfo.freeParkingOnPremises) {
              services.push(
                {
                  text: `Free Parking`,
                  icon: null,
                  iconAlt: null,
                },
              )
            }
            if(currentServiceInfo.streetParking) {
              moreServices.push(
                {
                  text: `Street Parking`,
                  icon: null,
                  iconAlt: null,
                },
              )
            }
            if(currentServiceInfo.bikeParking) {
              moreServices.push(
                {
                  text: `Bike Parking`,
                  icon: null,
                  iconAlt: null,
                },
              )
            }
            if(currentServiceInfo.paidParkingOnPremises) {
              moreServices.push(
                {
                  text: `Paid Parking on Premises`,
                  icon: null,
                  iconAlt: null,
                },
              )
            }
            break;
          case 'Tables':
            if(currentServiceInfo.numberOfTables) {
              services.push(
                {
                  text: `${currentServiceInfo.numberOfTables} Available Tables`,
                  icon: null,
                  iconAlt: null,
                },
              )
            }
            break;
          case 'Payment':
            if(currentServiceInfo.acceptsCreditCards) {
              services.push(
                {
                  text: `Accepts Credit Cards`,
                  icon: null,
                  iconAlt: null,
                },
              )
            }
            break;
          case 'Noise':
            if(currentServiceInfo.noiseLevel) {
              const noiseLevel = currentServiceInfo.noiseLevel
              var noiseText = ''
              if(noiseLevel === 'High') {
                noiseText = 'Noisy Place'
              } else if (noiseLevel === 'Average') {
                noiseText = 'Average Noise'
              } else if (noiseLevel === 'Low') {
                noiseText = 'Quiet Place'
              }
              services.push(
                {
                  text: `${noiseText}`,
                  icon: null,
                  iconAlt: null,
                },
              )
            }
            break;
          default:
            break;

        }
      }
      services.push.apply(services, moreServices)
      return services
    }
    render() {
        const services = this.props.services;
        return (
          <div className="services-list-container">
            {
              services
              .map((service, i) =>
                <ServiceCell key={i} service={service}/>
              )
            }
          </div>
        );
    }
}

export default ServicesList;
