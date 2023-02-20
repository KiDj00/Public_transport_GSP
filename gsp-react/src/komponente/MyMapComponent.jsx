import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
class MyMapComponent extends React.Component {
  constructor(props){
    super(props)
  }
render() {
    const google = window.google
    const DirectionsComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: <div style={{height: `600px`, width: `600px` }}  />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() { 
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route({
            origin: new google.maps.LatLng(41.8507300, -87.6512600),
            destination: new google.maps.LatLng(41.8525800, -87.6514100),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
this.setState({
                directions: {...result},
                markers: true
              })
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        }
      })
    )(props =>
      <GoogleMap
        defaultZoom={3}
      >
        {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
      </GoogleMap>
    );
return (
        <DirectionsComponent
        />
    )
  }
}
export default MyMapComponent