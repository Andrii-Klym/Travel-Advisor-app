import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Topography,  useMediaQuery } from "@material-ui/core"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab"

import useStyles from "./styles"

const Map = () => {
    const classes = useStyles();
    const isMobele = useMediaQuery('(min-width:600px)');

    const coordinates = { lat: 49.8397, lng: 24.0297 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA5Ha1nXmA09Zn7cF8rUKurK84nU5Au2sk' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;