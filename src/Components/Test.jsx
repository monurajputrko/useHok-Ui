import { Geolocation } from "usehoks";

const MyComponent = () => {
  const position = Geolocation();
  console.log(position);
  return (
    <div>
      {position.map && <a href={position.map}>Go to Location</a>}
      
      {/* {position.latitude && position.longitude && (
        <p>
          Latitude: {position.latitude}, Longitude: {position.longitude}
        </p>
      )}
      {position.locationName && <p>Location Name: {position.locationName}</p>}
      {position.map && (
        <p>
          <a href={position.map}>View on Map</a>
        </p>
      )} */}
    </div>
  );
};

export default MyComponent;
