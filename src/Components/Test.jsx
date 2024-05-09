import { Notification } from "usehoks";


export default function Calculator() {

  
  // Notification("Hello", { body: "This is a notification" });

  const show = ()=>{
  }

  return (
    <div className="container">
    <h1>Hello World</h1>
    <button onClick={()=>{
           show();
    }}>Click ME</button>
    </div>
  );
}
