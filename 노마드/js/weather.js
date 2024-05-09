function onGeoOk(position){
    console.log(position);
}

function onGeoError(){


}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);