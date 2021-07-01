import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styled from '@emotion/styled';

const Container = styled.div`
    width: 100vw;
    height: 50vh;
`;

const mapStyles = {        
    height: "50vh",
    width: "100vw"
};

const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.3954,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    }
  ];

const map = () => {

    return (
        <Container>
            <LoadScript
            googleMapsApiKey='AIzaSyADV3hGeKgUaRqF5W5l-VvjYbIFgICdhQw'>
                <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
            {
                    locations.map(item => {
                      return (
                      <Marker key={item.name} position={item.location}/>
                      )
                    })
                 }
                </GoogleMap>
            </LoadScript>
        </Container>
    );
}
 
export default map;