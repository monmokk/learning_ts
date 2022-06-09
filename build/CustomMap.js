"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMap = void 0;
/// <reference types="@types/google.maps" />
class CustomMap {
    constructor(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
    addMarker(mappable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}
exports.CustomMap = CustomMap;
//# sourceMappingURL=CustomMap.js.map