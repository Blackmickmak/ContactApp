import { Component } from '@angular/core';

@Component({
    selector: 'app-locate',
    templateUrl:'./locate.component.html',
    styleUrls:['./locate.component.html']
})
export class LocateComponent {
    yourLocation: string = "";
    errorLocation: string = "";

    locate()
    {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(this.displayLocation, this.displayError);
        } else {
            alert('Oops, no geolocation support');
        }
    }

    displayLocation(position: any)
    {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let div = document.getElementById("location");

        div.innerHTML = "You are at the latitude " + latitude + ", Longitude " + longitude;

        let ourCoords = { latitude: 47.624851, longitude: -122.52099 };


        let startLatRads = (position.coords.latitude * Math.PI) / 180;
        let startLongRads = (position.coords.longitude * Math.PI) / 180;
        let destLatRads = (ourCoords.latitude * Math.PI) / 180;
        let destLongRads = (ourCoords.longitude * Math.PI) / 180;

        let Radius = 6371;
        let km = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
            Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;

        //let km = this.computeDistance(position.coords, ourCoords);
        let distance = document.getElementById("distance");
        distance.innerHTML = "You are " + km + " km from the WickedlySmart HQ";
    }

    computeDistance(startCoords: any, destCoords: any)
    {
        let startLatRads = this.degreesToRadians(startCoords.latitude);
        let startLongRads = this.degreesToRadians(startCoords.longitude);
        let destLatRads = this.degreesToRadians(destCoords.latitude);
        let destLongRads = this.degreesToRadians(destCoords.longitude);

        let Radius = 6371;
        let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
            Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;

        return distance;
    }

    displayError(error: any) {
        let errorTypes = {}
        let errorMessage = errorTypes[error.code];
        if (error.code == 0 || error.code == 2)
        {
            errorMessage = errorMessage + " " + error.message;
            this.errorLocation = errorMessage;
        }
        let div = document.getElementById("location");
        div.innerHTML = errorMessage;
    }

    degreesToRadians(degrees: any)
    {
        let radians = (degrees * Math.PI) / 180;
        return radians;
    }
}
