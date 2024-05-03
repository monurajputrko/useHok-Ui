import { Geolocation } from "usehoks";

const MyComponent = () => {
  const {longitude,latitude,locationName,map} = Geolocation();
  
  console.log(locationName); // Getting The Address
  console.log(longitude); // Getting The Longitude
  console.log(latitude); // Getting The Latitude
  console.log(map); // Getting The Map Link

  return (
    <div>
      <p>
        Latitude: {latitude}, Longitude: {longitude}
      </p>
      <a href={map}>Go to Location</a>
    </div>
  );
};

export default MyComponent;
