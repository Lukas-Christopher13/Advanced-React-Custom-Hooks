import { useState } from "react";
import { useEffect } from "react";

const useGeolocation = () => {

  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() =>{
    const onSuccess = (e) => {
      setCurrentLocation({
        latitude: e.coords.latitude.toFixed(3),
        longitude: e.coords.logitude.toFixed(3)
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess);
  })
  
  
  return currentLocation;
}

export default useGeolocation;