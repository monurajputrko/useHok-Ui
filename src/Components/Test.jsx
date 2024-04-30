import { QRCodeScanner, ScreenOrientation, useGeofence, useNotification } from "usehoks";


const MyComponent = () => {
  const orientation = ScreenOrientation();
  return (
     <div>
     <p>Screen Orientation: {orientation}</p>
    </div>
  );
};

export default MyComponent;
