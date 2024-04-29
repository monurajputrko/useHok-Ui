export const Data = [
  {
    id: "1",
    title: "useDebounce",
    description:
      "Delay the execution of function or state update with useDebounce.",
    mainDescription:
      "The useDebounce hook is useful for delaying the execution of functions or state updates until a specified time period has passed without any further changes to the input value. This is especially useful in scenarios such as handling user input or triggering network requests, where it effectively reduces unnecessary computations and ensures that resource-intensive operations are only performed after a pause in the input activity.",
    input: [{
        name: "value",
        type: "any",
        description:
          "The value to be debounced. This can be any type of value, including functions, objects, arrays, and more.",
  
    }, {
        name: "delay",
        type: "number",
        description:
          "The delay time in milliseconds. After this amount of time, the latest value is used.",
    }],
    output: [{
        name: "debouncedValue",
        type: "any",
        description:
          "The debounced value, which is the latest value passed to the hook after the specified delay time has passed.",
    }],
    demoCode: "",
  },
  {
    id: "2",
    title: "setLocal",
    description:
      "setLocal saves a value to local storage, handling JSON serialization",
    mainDescription:
      "The setLocal custom hook provides a convenient way to store data in the browser's localStorage while handling potential errors that may occur during the storage process. It accepts two arguments: key, a string representing the key under which the value will be stored, and value, the value to be stored. The value is converted to a JSON string using JSON.stringify before being stored, ensuring that complex data structures can be safely stored and retrieved. If an error occurs during the storage process, such as exceeding the localStorage quota or the value being unable to be stringified, the hook catches the error and logs it to the console using console.error. This helps prevent the application from crashing and allows for graceful error handling.",
    input: [{
        name: "key",
        type: "string",
        description:
          "The key under which the value will be stored in localStorage.",
    },{
        name: "value",
        type: "any",
        description:
          "The value to be stored in localStorage. This can be any type of value, including functions, objects, arrays, and more.",
    }],
    output: [{
        name: "setLocal",
        type: "function",
        description:
          "A function that can be used to set the value in localStorage. It accepts a single argument, value, which is the value to be stored in localStorage.",
    }],
    demoCode: `import React from 'react';
    import { setLocal } from './usehoks'; // Assuming you've saved the function in a file named 'localStorageUtils.js'
    
    function App() {
      const handleButtonClick = () => {
        const key = 'myKey';
        const value = { message: 'Hello, world!' };
        setLocal(key, value);
      };
    
      return (
        <div>
          <button onClick={handleButtonClick}>Set Local Storage</button>
        </div>
      );
    }
    
    export default App;
    `,
  },
  {
    id: "3",
    title: "getLocal",
    description:
      "getLocal retrieves a value from local storage, parsing it from JSON.",
    mainDescription:
      " getLocal is a function designed to simplify the retrieval of values stored in local storage. It takes a key parameter that specifies the key under which the value is stored. The function attempts to retrieve the value associated with the key from local storage using localStorage.getItem(key). If the value exists (item is not null), the function attempts to parse the value as JSON using JSON.parse(item). If parsing is successful, the parsed value is returned. If the key does not exist or if there is an error parsing the value, the function returns null. The function includes error handling to catch and log any errors that occur during the retrieval process.",
    input: [{
        name: "key",
        type: "string",
        description:
          "The key under which the value will be stored in localStorage.",
    }],
    output: [{
        name: "getLocal",
        type: "function",
        description:
          "A function that can be used to get the value in localStorage. It accepts a single argument, value, which is the value to be stored in localStorage.",
    }],
    demoCode: `import React from 'react';
    import { getLocal } from './usehoks'; // Assuming you've saved the function in a file named 'localStorageUtils.js'
    
    function App() {
      const handleButtonClick = () => {
        const key = 'myKey';
        const value = getLocal(key);
        console.log('Value from local storage:', value);
      };
    
      return (
        <div>
          <button onClick={handleButtonClick}>Get Local Storage</button>
        </div>
      );
    }
    
    export default App;
    
    `,
  },
];
