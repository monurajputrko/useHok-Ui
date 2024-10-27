import { type } from "@testing-library/user-event/dist/type";

export const Data = [
  {
    id: "1",
    title: "useDebounce",
    description:
      "useDebounce delays invoking a function until after a specified delay.",
    mainDescription:
      "useDebounce is a custom React hook that delays invoking a function until after a specified delay. It takes two parameters: func, which is the function to be invoked, and delay, which is the delay in milliseconds. The hook uses a useEffect hook to set up a timeout that invokes the function after the specified delay. If the function is invoked again before the timeout expires, the previous timeout is cleared, and a new timeout is set. This allows you to debounce expensive operations such as API calls or event handlers. The hook returns undefined.",
    input: [
      {
        name: "func",
        type: "function",
        description: "The function to be invoked after the delay.",
      },
      {
        name: "delay",
        type: "number",
        description: "The delay in milliseconds before invoking the function.",
      },
    ],
    output: [
      {
        name: "useDebounce",
        type: "function",
        description:
          "A function that can be used to debounce the invocation of another function. It accepts two arguments: func, the function to be invoked, and delay, the delay in milliseconds.",
      },
    ],
    demoCode: `import React, { useState } from 'react';
      import { useDebounce } from 'usehoks'; // Importing form useHoks
      
      function App() {
        const [value, setValue] = useState('');
      
        useDebounce(() => {
          console.log('Debounced value:', value);
        }, 500);
      
        const handleChange = (e) => {
          setValue(e.target.value);
        };
      
        return (
          <div>
            <input type="text" onChange={handleChange} />
          </div>
        );
      }
      
      export default App;
      
      `,
  },
  {
    id: "2",
    title: "setLocal",
    description:
      "setLocal saves a value to local storage, handling JSON serialization",
    mainDescription:
      "The setLocal custom hook provides a convenient way to store data in the browser's localStorage while handling potential errors that may occur during the storage process. It accepts two arguments: key, a string representing the key under which the value will be stored, and value, the value to be stored. The value is converted to a JSON string using JSON.stringify before being stored, ensuring that complex data structures can be safely stored and retrieved. If an error occurs during the storage process, such as exceeding the localStorage quota or the value being unable to be stringified, the hook catches the error and logs it to the console using console.error. This helps prevent the application from crashing and allows for graceful error handling.",
    input: [
      {
        name: "key",
        type: "string",
        description:
          "The key under which the value will be stored in localStorage.",
      },
      {
        name: "value",
        type: "any",
        description:
          "The value to be stored in localStorage. This can be any type of value, including functions, objects, arrays, and more.",
      },
    ],
    output: [
      {
        name: "setLocal",
        type: "function",
        description:
          "A function that can be used to set the value in localStorage. It accepts a single argument, value, which is the value to be stored in localStorage.",
      },
    ],
    demoCode: `import React from 'react';
    import { setLocal } from 'usehoks'; // Importing form useHoks
    
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
    input: [
      {
        name: "key",
        type: "string",
        description:
          "The key under which the value will be stored in localStorage.",
      },
    ],
    output: [
      {
        name: "getLocal",
        type: "function",
        description:
          "A function that can be used to get the value in localStorage. It accepts a single argument, value, which is the value to be stored in localStorage.",
      },
    ],
    demoCode: `import React from 'react';
    import { getLocal } from 'usehoks'; // Importing form useHoks
    
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
  {
    id: "4",
    title: "useTimeout",
    description:
      "useTimeout hook for executing a callback function after a specified delay.",
    mainDescription:
      "The useTimeout hook in React enables you to perform actions after a specified delay, enhancing the interactivity of your components. By encapsulating the logic for setting and clearing timeouts, this hook simplifies the management of timed events, such as animations, notifications, or data updates. You can easily integrate useTimeout into your functional components, providing a clean and efficient solution for executing code asynchronously. Whether you need to delay a function call, update UI elements, or trigger side effects, useTimeout offers a straightforward approach to handling timed operations in React applications.",
    input: [
      {
        name: "callback",
        type: " Function",
        description: "A function to be executed after the specified delay.",
      },
      {
        name: "Delay",
        type: "Number",
        description:
          "The delay in milliseconds before executing the callback function",
      },
    ],
    output: [
      {
        name: "None",
        type: "None",
        description:
          "useTimeout hook does not return anything. It internally manages the timeout and executes the provided callback function after the specified delay.",
      },
    ],
    demoCode: `import React, { useState } from 'react';
    import { useTimeout } from 'usehoks'; // Importing form useHoks
    
    const MyComponent = () => {
      const [count, setCount] = useState(0);
    
      // Define a callback function
      const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
      };
    
      // Call the useTimeout hook with the callback function and delay
      useTimeout(incrementCount, 1000); // increment count after 1 second
    
      return (
        <div>
          <p>Count: {count}</p>
        </div>
      );
    };
    
    export default MyComponent;
    
    `,
  },
  {
    id: "5",
    title: "useThrottle",
    description:
      "useThrottle hook for delaying function calls, limiting their execution rate to prevent excessive calls.",
    mainDescription:
      "The useThrottle hook in React is a versatile tool that allows you to throttle the execution of functions, ensuring they are not called more frequently than a specified rate. By wrapping a function with useThrottle, you can control how often it can be invoked, preventing performance issues caused by excessive function calls. This is particularly useful in scenarios where you want to limit the rate of user interactions, such as handling scroll or resize events. The hook uses a combination of useState and useRef to manage the throttling logic, providing a simple and efficient solution for controlling the flow of function executions in your React applications.",
    input: [
      {
        name: "callback",
        type: " Function",
        description: "A function to be throttled after the specified delay.",
      },
      {
        name: "Delay",
        type: "Number",
        description: "The useThrottle hook returns the throttled function.",
      },
    ],
    output: [
      {
        name: "None",
        type: "None",
        description:
          "useTimeout hook does not return anything. It internally manages the timeout and executes the provided callback function after the specified delay.",
      },
    ],

    demoCode: `import React, { useState } from 'react';
    import { useThrottle } from 'usehoks'; // Importing form useHoks
    
    const MyComponent = () => {
      const [count, setCount] = useState(0);
      
      // Throttle the increment function
      const incrementThrottled = useThrottle(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000); // throttle to once per second
    
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={incrementThrottled}>Increment</button>
        </div>
      );
    };
    
    export default MyComponent;
    
    `,
  },
  {
    id: "6",
    title: "removeLocal",
    description: "Functions to remove a specific item from local storage.",
    mainDescription:
      "The removeLocal function allows you to remove a specific item from local storage by providing its key. If the item does not exist, no action is taken. This function is useful for managing local storage in your web applications, enabling you to selectively remove data on your application's needs.",
    input: [
      {
        name: "key",
        type: "String",
        description: "The key of the item to remove from local storage.",
      },
    ],
    output: [
      {
        name: "None",
        type: "None",
        description: "These functions do not return any value.",
      },
    ],

    demoCode: `
    import { removeLocal } from 'usehoks'; // Importing form useHoks
    
    const MyComponent = () => {
      
      const removedata = () => {
        removeLocal('myKey');  // key of your local Storage that you want to remove
      }; 
    
      return (
        <div>
          <button onClick={removedata}>Increment</button>
        </div>
      );
    };
    
    export default MyComponent;
    
    `,
  },
  {
    id: "7",
    title: "clearAllLocal",
    description: "Functions to remove a specific item from local storage.",
    mainDescription:
      " the clearAllLocal function clears all items from local storage, effectively resetting it. This function is wrapped in a try-catch block to handle any errors that may occur during the operation. This function is useful for managing local storage in your web applications, enabling you to clear the entire storage space based on your application's needs.",
    input: [
      {
        name: "None",
        type: "None",
        description: "These functions do not take any value as input.",
      },
    ],
    output: [
      {
        name: "None",
        type: "None",
        description: "These functions do not return any value.",
      },
    ],

    demoCode: `
    import { clearAllLocal } from 'usehoks'; // Importing form useHoks
    
    const MyComponent = () => {
      
      const removedata = () => {
        clearAllLocal();  // clear all Local Storage data
      }; 
    
      return (
        <div>
          <button onClick={removedata}>Increment</button>
        </div>
      );
    };
    
    export default MyComponent;
    
    `,
  },
  {
    id: "8",
    title: "setSession",
    description:
      "setSession stores a value in session storage, stringifying it to JSON.",
    mainDescription:
      "setSession is a function designed to simplify the storage of values in session storage. It takes two parameters: key and value. The key parameter specifies the key under which the value will be stored in session storage. The value parameter is the value to be stored, which will be converted to a string using JSON.stringify before storage. The function sets the value in session storage using sessionStorage.setItem(key, JSON.stringify(value)). If there is an error during the storage process, the function catches and logs the error. ",
    input: [
      {
        name: "key",
        type: "string",
        description:
          "The key under which the value will be stored in sessionStorage.",
      },
      {
        name: "value",
        type: "any",
        description:
          "The value to be stored in sessionStorage. It will be converted to a string using JSON.stringify.",
      },
    ],
    output: [
      {
        name: "None",
        type: "None",
        description:
          "setSession is not return anything it used to store the data in session storage",
      },
    ],
    demoCode: `import React from 'react';
      import { setSession } from 'usehoks'; // Importing form useHoks
      
      function App() {
        const handleButtonClick = () => {
          const key = 'myKey';
          const value = { name: 'John', age: 30 };
          setSession(key, value);
        };
      
        return (
          <div>
            <button onClick={handleButtonClick}>Set Session Storage</button>
          </div>
        );
      }
      
      export default App;
      
      `,
  },
  {
    id: "9",
    title: "getSession",
    description:
      "getSession retrieves a value from session storage, parsing it from JSON.",
    mainDescription:
      "getSession is a function designed to simplify the retrieval of values stored in session storage. It takes a key parameter that specifies the key under which the value is stored. The function attempts to retrieve the value associated with the key from session storage using sessionStorage.getItem(key). If the value exists (item is not null), the function attempts to parse the value as JSON using JSON.parse(item). If parsing is successful, the parsed value is returned. If the key does not exist or if there is an error parsing the value, the function returns null. The function includes error handling to catch and log any errors that occur during the retrieval process.",
    input: [
      {
        name: "key",
        type: "string",
        description:
          "The key under which the value is stored in sessionStorage.",
      },
    ],
    output: [
      {
        name: "getSession",
        type: "function",
        description:
          "A function that can be used to get the value in sessionStorage. It accepts a single argument, key, which is the key under which the value is stored.",
      },
    ],
    demoCode: `import React from 'react';
        import { getSession } from 'usehoks'; // Importing form useHoks
        
        function App() {
          const handleButtonClick = () => {
            const key = 'myKey';
            const value = getSession(key);
            console.log('Value from session storage:', value);
          };
        
          return (
            <div>
              <button onClick={handleButtonClick}>Get Session Storage</button>
            </div>
          );
        }
        
        export default App;
        
        `,
  },

  {
    id: "10",
    title: "removeSession",
    description:
      "removeSession removes a value from session storage using its key.",
    mainDescription:
      "removeSession is a function designed to simplify the removal of values from session storage. It takes a key parameter that specifies the key of the value to be removed. The function attempts to remove the value associated with the key from session storage using sessionStorage.removeItem(key). If there is an error during the removal process, the function catches and logs the error.",
    input: [
      {
        name: "key",
        type: "string",
        description: "The key of the value to be removed from sessionStorage.",
      },
    ],
    output: [
      {
        name: "removeSession",
        type: "function",
        description:
          "A function that can be used to remove a value from sessionStorage. It accepts a single argument, key, which is the key of the value to be removed.",
      },
    ],
    demoCode: `import React from 'react';
          import { removeSession } from 'usehoks'; // Importing form useHoks
          
          function App() {
            const handleButtonClick = () => {
              const key = 'myKey';
              removeSession(key);
            };
          
            return (
              <div>
                <button onClick={handleButtonClick}>Remove Session Storage</button>
              </div>
            );
          }
          
          export default App;
          
          `,
  },
  {
    id: "11",
    title: "clearAllSession",
    description: "clearAllSession clears all values from session storage.",
    mainDescription:
      "clearAllSession is a function designed to simplify the clearing of all values from session storage. It does not take any parameters. The function attempts to clear all values from session storage using sessionStorage.clear(). If there is an error during the clearing process, the function catches and logs the error.",
    input: [
      {
        name: "None",
        type: "None",
        description:
          "A function that can be used to clear all values from sessionStorage. It does not accept any arguments.",
      },
    ],
    output: [
      {
        name: "clearAllSession",
        type: "function",
        description:
          "A function that can be used to clear all values from sessionStorage. It does not accept any arguments.",
      },
    ],
    demoCode: `import React from 'react';
            import { clearAllSession } from 'usehoks'; // Importing form useHoks
            
            function App() {
              const handleButtonClick = () => {
                clearAllSession();
                console.log('All values cleared from session storage');
              };
            
              return (
                <div>
                  <button onClick={handleButtonClick}>Clear All Session Storage</button>
                </div>
              );
            }
            
            export default App;
            
            `,
  },
  {
    id: "12",
    title: "setCookie",
    description:
      "setCookie sets a cookie with the specified name, value, and expiration days.",
    mainDescription:
      "setCookie is a function designed to simplify the creation of cookies in the browser. It takes three parameters: name, value, and days. The name parameter specifies the name of the cookie, while the value parameter specifies the value of the cookie. The days parameter specifies the number of days until the cookie expires. The function calculates the expiration date based on the current date and time, adds the cookie to the document's cookies using document.cookie, and sets the cookie's path to '/'. If there is an error during the setting process, the function catches and logs the error.",
    input: [
      {
        name: "name",
        type: "string",
        description: "The name of the cookie to be set.",
      },
      {
        name: "value",
        type: "string",
        description: "The value of the cookie to be set.",
      },
      {
        name: "days",
        type: "number",
        description:
          "The number of days until the cookie expires. If not specified, the cookie is session-only.",
      },
    ],
    output: [
      {
        name: "setCookie",
        type: "function",
        description:
          "A function that can be used to set a cookie in the browser. It accepts three arguments: name, value, and days.",
      },
    ],
    demoCode: `import React from 'react';
              import { setCookie } from 'usehoks'; // Importing form useHoks
              
              function App() {
                const handleButtonClick = () => {
                  const name = 'myCookie';
                  const value = 'cookieValue';
                  const days = 7; // Cookie will expire in 7 days
                  setCookie(name, value, days);
                  console.log('Cookie set');
                };
              
                return (
                  <div>
                    <button onClick={handleButtonClick}>Set Cookie</button>
                  </div>
                );
              }
              
              export default App;
              
              `,
  },
  {
    id: "27",
    title: "getCookie",
    description:
      "getCookie retrieves the value of a cookie with the specified name.",
    mainDescription:
      "getCookie is a function designed to simplify the retrieval of cookies in the browser. It takes one parameter: name, which specifies the name of the cookie to retrieve. The function parses document.cookie to find the cookie with the specified name and returns its value. If the cookie is not found, the function returns null. The function includes error handling to catch and log any errors that occur during the retrieval process.",
    input: [
      {
        name: "name",
        type: "string",
        description: "The name of the cookie to retrieve.",
      },
    ],
    output: [
      {
        name: "getCookie",
        type: "function",
        description:
          "A function that can be used to get the value of a cookie in the browser. It accepts a single argument, name, which is the name of the cookie to retrieve.",
      },
    ],
    demoCode: `import React from 'react';
      import { getCookie } from 'usehoks'; // Importing form useHoks
      
      function App() {
        const handleButtonClick = () => {
          const name = 'myCookie';
          const value = getCookie(name);
          console.log('Cookie value:', value);
        };
      
        return (
          <div>
            <button onClick={handleButtonClick}>Get Cookie</button>
          </div>
        );
      }
      
      export default App;
      
      `,
  },
  {
    id: "13",
    title: "eraseCookie",
    description:
      "eraseCookie removes a cookie with the specified name by setting its expiration date to a past date.",
    mainDescription:
      "eraseCookie is a function designed to simplify the removal of cookies in the browser. It takes one parameter: name, which specifies the name of the cookie to remove. The function removes the cookie by setting its expiration date to a past date using document.cookie, effectively expiring the cookie immediately. If there is an error during the removal process, the function catches and logs the error.",
    input: [
      {
        name: "name",
        type: "string",
        description: "The name of the cookie to remove.",
      },
    ],
    output: [
      {
        name: "eraseCookie",
        type: "function",
        description:
          "A function that can be used to remove a cookie in the browser. It accepts a single argument, name, which is the name of the cookie to remove.",
      },
    ],
    demoCode: `import React from 'react';
        import { eraseCookie } from 'usehoks'; // Importing form useHoks
        
        function App() {
          const handleButtonClick = () => {
            const name = 'myCookie';
            eraseCookie(name);
            console.log('Cookie erased');
          };
        
          return (
            <div>
              <button onClick={handleButtonClick}>Erase Cookie</button>
            </div>
          );
        }
        
        export default App;
        
        `,
  },
  {
    id: "14",
    title: "useMediaQuery",
    description:
      "useMediaQuery returns a boolean indicating if the current viewport matches the given media query.",
    mainDescription:
      "useMediaQuery is a custom React hook that allows you to check if the current viewport matches a specified media query. It takes one parameter: query, which is a string representing the media query to be evaluated. The hook initializes a boolean value isMatch based on the initial match of the media query. It then adds a listener to the window.matchMedia(query) object to update the isMatch value whenever the viewport matches the media query. Finally, it returns the current value of isMatch. This hook is useful for creating responsive components that adapt to different viewport sizes.",
    input: [
      {
        name: "query",
        type: "string",
        description:
          "The media query string to be evaluated, e.g., '(min-width: 768px)'",
      },
    ],
    output: [
      {
        name: "useMediaQuery",
        type: "function",
        description:
          "A function that can be used to check if the current viewport matches the given media query. It returns a boolean value indicating the match status.",
      },
    ],
    demoCode: `import React from 'react';
          import { useMediaQuery } from 'usehoks'; // Importing form useHoks
          
          function App() {
            const isLargeScreen = useMediaQuery('(min-width: 768px)');
          
            return (
              <div>
                <p>Is large screen? {isLargeScreen ? 'Yes' : 'No'}</p>
              </div>
            );
          }
          
          export default App;
          
          `,
  },
  {
    id: "15",
    title: "isOnline",
    description:
      "isOnline returns a boolean indicating if the user is currently online.",
    mainDescription:
      "isOnline is a custom React hook that allows you to check if the user's device is currently online. It initializes a state variable isOnline based on the initial value of navigator.onLine, which indicates the online status of the device. The hook then adds event listeners for the 'online' and 'offline' events to update the isOnline state accordingly. When the component unmounts, the event listeners are removed to avoid memory leaks. Finally, the hook returns the current value of isOnline. This hook is useful for displaying different content or behavior based on the user's online status.",
    input: [],
    output: [
      {
        name: "isOnline",
        type: "function",
        description:
          "A function that can be used to check if the user's device is currently online. It returns a boolean value indicating the online status.",
      },
    ],
    demoCode: `import React from 'react';
            import { isOnline } from 'usehoks'; // Importing form useHoks
            
            function App() {
              const isOnline = isOnline();
            
              return (
                <div>
                  <p>User is {isOnline ? 'online' : 'offline'}</p>
                </div>
              );
            }
            
            export default App;
            
            `,
  },
  {
    id: "16",
    title: "Settitle",
    description:
      "Settitle sets the title of the document to the specified value.",
    mainDescription:
      "Settitle is a custom React hook that sets the title of the document to the specified value. It takes one parameter: title, which is the new title of the document. The hook uses a useEffect hook to update the document title whenever the title prop changes. This allows you to dynamically change the document title based on the state of your application.",
    input: [
      {
        name: "title",
        type: "string",
        description: "The new title to be set for the document.",
      },
    ],
    output: [
      {
        name: "Settitle",
        type: "function",
        description:
          "A function that can be used to set the title of the document. It accepts a single argument, title, which is the new title of the document.",
      },
    ],
    demoCode: `import React from 'react';
              import { Settitle } from 'usehoks'; // Importing form useHoks
              
              function App() {
                Settitle('New Title');
              
                return (
                  <div>
                    <p>Document title set to 'New Title'</p>
                  </div>
                );
              }
              
              export default App;
              
              `,
  },
  {
    id: "17",
    title: "setFavicon",
    description:
      "setFavicon sets the favicon of the document to the specified URL.",
    mainDescription:
      "setFavicon is a custom React hook that sets the favicon of the document to the specified URL. It takes one parameter: url, which is the URL of the new favicon. The hook checks if a favicon link element exists in the document. If it does, it updates the href attribute of the existing favicon link element. If a favicon link element does not exist, the hook creates a new link element with the rel attribute set to 'icon' and the href attribute set to the specified URL, and appends it to the document head.",
    input: [
      {
        name: "url",
        type: "string",
        description: "The URL of the new favicon.",
      },
    ],
    output: [
      {
        name: "setFavicon",
        type: "function",
        description:
          "A function that can be used to set the favicon of the document. It accepts a single argument, url, which is the URL of the new favicon.",
      },
    ],
    demoCode: `import React from 'react';
                import { setFavicon } from 'usehoks'; // Importing form useHoks
                
                function App() {
                  setFavicon('https://example.com/favicon.ico');
                
                  return (
                    <div>
                      <p>Favicon set to 'https://example.com/favicon.ico'</p>
                    </div>
                  );
                }
                
                export default App;
                
                `,
  },
  {
    id: "18",
    title: "KeyPress",
    description:
      "KeyPress calls a callback function when a specific key is pressed.",
    mainDescription:
      "KeyPress is a custom React hook that calls a callback function when a specific key is pressed. It takes two parameters: key, which is the key to listen for, and callback, which is the function to call when the key is pressed. The hook adds a 'keydown' event listener to the window object and invokes the callback function when the event.key matches the specified key. When the component unmounts, the event listener is removed to avoid memory leaks.",
    input: [
      {
        name: "key",
        type: "string",
        description:
          "The key to listen for, e.g., 'Enter', 'Escape', 'ArrowUp', etc.",
      },
      {
        name: "callback",
        type: "function",
        description:
          "The callback function to be called when the specified key is pressed.",
      },
    ],
    output: [
      {
        name: "KeyPress",
        type: "function",
        description:
          "A function that can be used to listen for a specific key press and call a callback function. It accepts two arguments: key, the key to listen for, and callback, the function to call when the key is pressed.",
      },
    ],
    demoCode: `import React from 'react';
                  import { KeyPress } from 'usehoks'; // Importing form useHoks
                  
                  function App() {
                    KeyPress('Enter', () => {
                      console.log('Enter key pressed');
                    });
                  
                    return (
                      <div>
                        <p>Press Enter key to see the message in console</p>
                      </div>
                    );
                  }
                  
                  export default App;
                  
                  `,
  },
  {
    id: "19",
    title: "LazyLoad",
    description:
      "LazyLoad returns a boolean indicating if an element is visible in the viewport.",
    mainDescription:
      "LazyLoad is a custom React hook that returns a boolean indicating if a specified element is visible in the viewport. It uses the IntersectionObserver API to observe the target element and update the visibility state based on the intersection ratio. The hook takes no parameters and returns a boolean value. This hook is useful for lazy loading content or triggering animations when an element comes into view.",
    input: [],
    output: [
      {
        name: "LazyLoad",
        type: "function",
        description:
          "A function that can be used to check if a specified element is visible in the viewport. It returns a boolean value indicating the visibility state.",
      },
    ],
    demoCode: `import React from 'react';
                    import { LazyLoad } from 'usehoks'; // Importing form useHoks
                    
                    function App() {
                      const isVisible = LazyLoad();
                    
                      return (
                        <div>
                          <div id="lazy-load-element" style={{ height: '100vh' }}>
                            {isVisible ? <p>Element is visible</p> : <p>Element is not visible</p>}
                          </div>
                        </div>
                      );
                    }
                    
                    export default App;
                    
                    `,
  },
  {
    id: "20",
    title: "ClickOutside",
    description:
      "ClickOutside calls a callback function when a click occurs outside a specified element.",
    mainDescription:
      "ClickOutside is a custom React hook that calls a callback function when a click occurs outside a specified element. It takes two parameters: ref, which is a ref object pointing to the element, and callback, which is the function to call when a click occurs outside the element. The hook adds a 'mousedown' event listener to the document and checks if the click target is outside the specified element. If the click is outside, the callback function is called. When the component unmounts, the event listener is removed to avoid memory leaks.",
    input: [
      {
        name: "ref",
        type: "object",
        description: "A ref object pointing to the element.",
      },
      {
        name: "callback",
        type: "function",
        description:
          "The callback function to be called when a click occurs outside the specified element.",
      },
    ],
    output: [
      {
        name: "ClickOutside",
        type: "function",
        description:
          "A function that can be used to listen for clicks outside a specified element and call a callback function. It accepts two arguments: ref, a ref object pointing to the element, and callback, the function to call when a click occurs outside the element.",
      },
    ],
    demoCode: `import React, { useRef } from 'react';
                      import { ClickOutside } from 'usehoks'; // Importing form useHoks
                      
                      function App() {
                        const ref = useRef(null);
                      
                        ClickOutside(ref, () => {
                          console.log('Clicked outside the element');
                        });
                      
                        return (
                          <div ref={ref} style={{ width: '200px', height: '200px', backgroundColor: 'lightgray' }}>
                            Click outside this box
                          </div>
                        );
                      }
                      
                      export default App;
                      
                      `,
  },
  {
    id: "21",
    title: "OnHover",
    description:
      "OnHover returns a boolean indicating if an element is currently being hovered over.",
    mainDescription:
      "OnHover is a custom React hook that returns a boolean indicating if a specified element is currently being hovered over. It uses the useState and useEffect hooks to manage the hover state and add event listeners for 'mouseover' and 'mouseout' events on the element. When the element is hovered over, the hook updates the hover state to true, and when the mouse leaves the element, the hover state is updated to false. This hook is useful for adding hover effects or conditional rendering based on hover state.",
    input: [],
    output: [
      {
        name: "OnHover",
        type: "function",
        description:
          "A function that can be used to check if a specified element is currently being hovered over. It returns a boolean value indicating the hover state.",
      },
    ],
    demoCode: `import React from 'react';
                        import { OnHover } from 'usehoks'; // Importing form useHoks
                        
                        function App() {
                          const isHovered = OnHover();
                        
                          return (
                            <div id="element-to-hover-over" style={{ width: '200px', height: '200px', backgroundColor: isHovered ? 'lightblue' : 'lightgray' }}>
                              Hover over this element
                            </div>
                          );
                        }
                        
                        export default App;
                        
                        `,
  },
  {
    id: "22",
    title: "isScroll",
    description: "isScroll returns the current scroll position of the window.",
    mainDescription:
      "isScroll is a custom React hook that returns the current scroll position of the window. It uses the useState and useEffect hooks to manage the scroll position state and adds a 'scroll' event listener to the window to update the scroll position whenever the user scrolls. When the component unmounts, the event listener is removed to avoid memory leaks.",
    input: [],
    output: [
      {
        name: "isScroll",
        type: "function",
        description:
          "A function that can be used to get the current scroll position of the window. It returns a number indicating the scroll position.",
      },
    ],
    demoCode: `import React from 'react';
                          import { isScroll } from 'usehoks'; // Importing form useHoks
                          
                          function App() {
                            const scrollPosition = isScroll();
                          
                            return (
                              <div>
                                <p>Scroll position: {scrollPosition}</p>
                              </div>
                            );
                          }
                          
                          export default App;
                          
                          `,
  },
  {
    id: "23",
    title: "Geolocation",
    description:
      "Geolocation returns the current geolocation information including latitude, longitude, location name, and map URL.",
    mainDescription:
      "Geolocation is a custom React hook that returns the current geolocation information including latitude, longitude, location name, and map URL. It uses the useState and useEffect hooks to manage the geolocation state and fetch the location name using the OpenStreetMap Nominatim API. The hook first retrieves the current geolocation coordinates using the navigator.geolocation API. It then fetches the location name based on the coordinates and updates the state. The map URL is dynamically generated based on the latitude and longitude.",
    input: [],
    output: [
      {
        name: "Geolocation",
        type: "function",
        description:
          "A function that can be used to get the current geolocation information. It returns an object containing latitude, longitude, location name, map URL, and error message.",
      },
    ],
    demoCode: `import { Geolocation } from "usehoks"; // Importing form useHoks

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
    `,
  },
  {
    id: "24",
    title: "Clipboard",
    description:
      "Clipboard provides functionality to copy text to the clipboard and returns a boolean indicating if the text was copied.",
    mainDescription:
      "Clipboard is a custom React hook that provides functionality to copy text to the clipboard. It returns an object with two properties: copied, a boolean indicating if the text was successfully copied, and copyToClipboard, a function that accepts a text parameter and attempts to copy it to the clipboard using the navigator.clipboard API. The copied state is set to true when the text is successfully copied and resets to false after a specified delay (default 2000 milliseconds). This hook is useful for adding copy functionality to components.",
    input: [
      {
        name: "delay",
        type: "number",
        description:
          "Optional. The delay in milliseconds before resetting the copied state. Default is 2000 milliseconds.",
      },
    ],
    output: [
      {
        name: "copied",
        type: "boolean",
        description:
          "A boolean indicating if the text was successfully copied to the clipboard.",
      },
      {
        name: "copyToClipboard",
        type: "function",
        description:
          "A function that can be used to copy text to the clipboard. It accepts a single argument, text, which is the text to be copied.",
      },
    ],
    demoCode: `import React, { useState } from 'react';
                              import { Clipboard } from 'usehoks'; // Importing form useHoks
                              
                              function App() {
                                const [textToCopy, setTextToCopy] = useState('');
                                const { copied, copyToClipboard } = Clipboard();
                              
                                const handleInputChange = (event) => {
                                  setTextToCopy(event.target.value);
                                };
                              
                                return (
                                  <div>
                                    <input type="text" value={textToCopy} onChange={handleInputChange} />
                                    <button onClick={() => copyToClipboard(textToCopy)}>Copy</button>
                                    {copied ? <p>Copied!</p> : null}
                                  </div>
                                );
                              }
                              
                              export default App;
                              
                              `,
  },
  {
    id: "25",
    title: "Script",
    description:
      "Script dynamically loads an external script into the document.",
    mainDescription:
      "Script is a custom React hook that dynamically loads an external script into the document. It takes a src parameter, which is the URL of the script to load. The hook uses the useEffect hook to create a new script element, set its src attribute to the specified URL, and append it to the document body. When the component unmounts, the script element is removed from the document to avoid memory leaks. This hook is useful for lazy loading scripts or dynamically adding scripts to the document.",
    input: [
      {
        name: "src",
        type: "string",
        description: "The URL of the external script to load.",
      },
    ],
    output: [],
    demoCode: `import React from 'react';
                                import { Script } from 'usehoks'; // Importing form useHoks
                                
                                function App() {
                                  Script('https://example.com/script.js');
                                
                                  return (
                                    <div>
                                      <p>Script loaded dynamically!</p>
                                    </div>
                                  );
                                }
                                
                                export default App;
                                
                                `,
  },
  {
    id: "26",
    title: "useNotification",
    description:
      "useNotification displays a desktop notification with the specified title and options.",
    mainDescription:
      "useNotification is a custom React hook that displays a desktop notification with the specified title and options. It checks if the browser supports desktop notifications and if the user has granted permission. If permissions are granted, it creates a new Notification object with the specified title and options. If permissions are not granted but have not been denied, it requests permission and displays the notification if permission is granted. This hook is useful for displaying notifications in web applications.",
    input: [
      {
        name: "title",
        type: "string",
        description: "The title of the notification.",
      },
      {
        name: "options",
        type: "object",
        description:
          "Optional. An object containing options for the notification, such as body, icon, etc.",
      },
    ],
    output: [],
    demoCode: `import React from 'react';
                                  import { useNotification } from 'usehoks'; // Importing form useHoks
                                  
                                  function App() {
                                    useNotification('New message', { body: 'You have a new message!' });
                                  
                                    return (
                                      <div>
                                        <p>Notification displayed!</p>
                                      </div>
                                    );
                                  }
                                  
                                  export default App;
                                  
                                  `,
  },
  {
    id: "28",
    title: "FullScreen",
    description:
      "FullScreen provides functionality to toggle full screen mode.",
    mainDescription:
      "FullScreen is a custom React hook that provides functionality to toggle full screen mode. It uses the useState and useCallback hooks to manage the full screen state and toggle function. The toggleFullScreen function checks if the document is currently in full screen mode. If not, it requests full screen mode for the document's element. If the document is already in full screen mode, it exits full screen mode. This hook is useful for providing a full screen experience in web applications.",
    input: [],
    output: [
      {
        name: "isFullScreen",
        type: "boolean",
        description:
          "A boolean indicating if the document is currently in full screen mode.",
      },
      {
        name: "toggleFullScreen",
        type: "function",
        description:
          "A function that can be used to toggle full screen mode. It requests full screen mode if the document is not in full screen mode, and exits full screen mode if it is.",
      },
    ],
    demoCode: `import React from 'react';
                                    import { FullScreen } from 'usehoks'; // Importing form useHoks
                                    
                                    function App() {
                                      const { isFullScreen, toggleFullScreen } = FullScreen();
                                    
                                      return (
                                        <div>
                                          <button onClick={toggleFullScreen}>{isFullScreen ? 'Exit Full Screen' : 'Enter Full Screen'}</button>
                                        </div>
                                      );
                                    }
                                    
                                    export default App;
                                    
                                    `,
  },
  {
    id: "29",
    title: "useGeofence",
    description:
      "useGeofence determines if the user's current location is inside a geofence.",
    mainDescription:
      "useGeofence is a custom React hook that determines if the user's current location is inside a geofence. It takes geofenceCoordinates, an object containing latitude and longitude of the geofence center, and geofenceRadius, the radius of the geofence in meters, as inputs. The hook uses the useState and useEffect hooks to manage the geofence state and continuously watch the user's position using the navigator.geolocation API. When the user's position changes, the hook calculates the distance between the user's location and the geofence center using the haversine formula. If the distance is less than or equal to the geofence radius, the user is considered inside the geofence.",
    input: [
      {
        name: "geofenceCoordinates",
        type: "object",
        description:
          "An object containing latitude and longitude of the geofence center.",
      },
      {
        name: "geofenceRadius",
        type: "number",
        description: "The radius of the geofence in meters.",
      },
    ],
    output: [
      {
        name: "isInsideGeofence",
        type: "boolean",
        description:
          "A boolean indicating if the user's current location is inside the geofence.",
      },
    ],
    demoCode: `import React from 'react';
                                      import { useGeofence } from 'usehoks'; // Importing form useHoks
                                      
                                      function App() {
                                        const geofenceCoordinates = { latitude: 37.7749, longitude: -122.4194 };
                                        const geofenceRadius = 1000; // 1 kilometer
                                        const isInsideGeofence = useGeofence(geofenceCoordinates, geofenceRadius);
                                      
                                        return (
                                          <div>
                                            <p>{isInsideGeofence ? 'Inside Geofence' : 'Outside Geofence'}</p>
                                          </div>
                                        );
                                      }
                                      
                                      export default App;
                                      
                                      `,
  },
  {
    id: "30",
    title: "QRCodeScanner",
    description: "QRCodeScanner scans QR codes using the device's camera.",
    mainDescription:
      "QRCodeScanner is a custom React hook that scans QR codes using the device's camera. It uses the useState, useEffect, and useRef hooks to manage the scanned QR code and the video stream. The hook requests access to the device's camera using navigator.mediaDevices.getUserMedia and displays the camera feed in a video element. It then continuously captures frames from the video feed, decodes them using the jsQR library, and sets the scanned QR code state if a QR code is detected. The hook stops the video stream when the component unmounts to prevent memory leaks.",
    input: [],
    output: [
      {
        name: "scannedQRCode",
        type: "string",
        description:
          "The data encoded in the scanned QR code, if a QR code is detected.",
      },
      {
        name: "videoRef",
        type: "object",
        description:
          "A ref object that should be attached to a video element to display the camera feed.",
      },
    ],
    demoCode: `import React, { useRef } from 'react';
                                        import { QRCodeScanner } from 'usehoks'; // Importing form useHoks
                                        
                                        function App() {
                                          const { scannedQRCode, videoRef } = QRCodeScanner();
                                        
                                          return (
                                            <div>
                                              <video ref={videoRef} />
                                              <p>Scanned QR Code: {scannedQRCode}</p>
                                            </div>
                                          );
                                        }
                                        
                                        export default App;
                                        
                                        `,
  },
  {
    id: "31",
    title: "ScreenOrientation",
    description:
      "ScreenOrientation detects the screen orientation (landscape or portrait).",
    mainDescription:
      "ScreenOrientation is a custom React hook that detects the screen orientation (landscape or portrait). It uses the useState and useEffect hooks to manage the orientation state and listen for changes in the screen orientation. The hook determines the orientation based on the window.screen.orientation.type property, which indicates the current orientation of the screen. When the screen orientation changes, the hook updates the orientation state accordingly.",
    input: [],
    output: [
      {
        name: "orientation",
        type: "string",
        description:
          "The current screen orientation, either 'landscape' or 'portrait'.",
      },
    ],
    demoCode: `import React from 'react';
                                          import { ScreenOrientation } from 'usehoks'; // Importing form useHoks
                                          
                                          function App() {
                                            const orientation = ScreenOrientation();
                                          
                                            return (
                                              <div>
                                                <p>Screen Orientation: {orientation}</p>
                                              </div>
                                            );
                                          }
                                          
                                          export default App;
                                          
                                          `,
  },
  {
    id: "33",
    title: "QRCodeGenerator",
    description:
      "QRCodeGenerator generates a QR code image URL from the provided data.",
    mainDescription:
      "QRCodeGenerator is a custom React hook that generates a QR code image URL from the provided data. It uses the useState and useEffect hooks to manage the QR code URL state and generate the URL using the QRCode.toDataURL method. The hook accepts two parameters: data, the data to be encoded in the QR code, and size (optional), the size of the QR code image in pixels. When the data or size changes, the hook regenerates the QR code URL.",
    input: [
      {
        name: "data",
        type: "string",
        description: "The data to be encoded in the QR code.",
      },
      {
        name: "size",
        type: "number",
        description:
          "The size of the QR code image in pixels. Defaults to 200.",
      },
    ],
    output: [
      {
        name: "qrCodeUrl",
        type: "string",
        description: "The URL of the generated QR code image.",
      },
    ],
    demoCode: `import React from 'react';
                                            import { QRCodeGenerator } from 'usehoks'; // Importing form useHoks
                                            
                                            function App() {
                                              const data = 'Example Data';
                                              const size = 200;
                                              const qrCodeUrl = QRCodeGenerator(data, size);
                                            
                                              return (
                                                <div>
                                                  <img src={qrCodeUrl} alt="QR Code" />
                                                </div>
                                              );
                                            }
                                            
                                            export default App;
                                            
                                            `,
  },
  {
    id: "34",
    title: "QRCodeGenerator",
    description:
      "QRCodeGenerator generates a QR code image URL from the provided data.",
    mainDescription:
      "QRCodeGenerator is a custom React hook that generates a QR code image URL from the provided data. It uses the useState and useEffect hooks to manage the QR code URL state and generate the URL using the QRCode.toDataURL method. The hook accepts two parameters: data, the data to be encoded in the QR code, and size (optional), the size of the QR code image in pixels. When the data or size changes, the hook regenerates the QR code URL.",
    input: [
      {
        name: "data",
        type: "string",
        description: "The data to be encoded in the QR code.",
      },
      {
        name: "size",
        type: "number",
        description:
          "The size of the QR code image in pixels. Defaults to 200.",
      },
    ],
    output: [
      {
        name: "qrCodeUrl",
        type: "string",
        description: "The URL of the generated QR code image.",
      },
    ],
    demoCode: `import React from 'react';
                                              import { QRCodeGenerator } from 'usehoks'; // Importing form useHoks
                                              
                                              function App() {
                                                const data = 'Example Data';
                                                const size = 200;
                                                const qrCodeUrl = QRCodeGenerator(data, size);
                                              
                                                return (
                                                  <div>
                                                    <img src={qrCodeUrl} alt="QR Code" />
                                                  </div>
                                                );
                                              }
                                              
                                              export default App;
                                              
                                              `,
  },
  {
    id: "35",
    title: "useWebSocket",
    description:
      "useWebSocket creates a WebSocket connection and manages sending and receiving messages.",
    mainDescription:
      "useWebSocket is a custom React hook that creates a WebSocket connection and manages sending and receiving messages. It uses the useState and useEffect hooks to manage the WebSocket connection and incoming messages. The hook accepts a URL parameter for the WebSocket server endpoint. When the component mounts, the hook creates a new WebSocket connection and sets up event listeners for open, message, and close events. It also provides a sendMessage function to send messages over the WebSocket connection.",
    input: [
      {
        name: "url",
        type: "string",
        description: "The URL of the WebSocket server endpoint.",
      },
    ],
    output: [
      {
        name: "message",
        type: "string",
        description: "The latest message received from the WebSocket server.",
      },
      {
        name: "sendMessage",
        type: "function",
        description:
          "A function to send a message over the WebSocket connection. It accepts a single argument, message, which is the message to send.",
      },
    ],
    demoCode: `import React, { useState } from 'react';
                                                import { useWebSocket } from 'usehoks'; // Importing form useHoks
                                                
                                                function App() {
                                                  const url = 'ws://localhost:8080';
                                                  const { message, sendMessage } = useWebSocket(url);
                                                  const [inputValue, setInputValue] = useState('');
                                                
                                                  const handleInputChange = (event) => {
                                                    setInputValue(event.target.value);
                                                  };
                                                
                                                  const handleSendMessage = () => {
                                                    sendMessage(inputValue);
                                                    setInputValue('');
                                                  };
                                                
                                                  return (
                                                    <div>
                                                      <p>Received Message: {message}</p>
                                                      <input type="text" value={inputValue} onChange={handleInputChange} />
                                                      <button onClick={handleSendMessage}>Send Message</button>
                                                    </div>
                                                  );
                                                }
                                                
                                                export default App;
                                                
                                                `,
  },
  {
    id: "36",
    title: "Fetcher",
    description:
      "Fetcher is a custom React hook for making HTTP requests with fetch.",
    mainDescription:
      "Fetcher is a custom React hook for making HTTP requests with fetch. It manages the state of the data, loading status, and errors for the request. The hook provides functions for performing various HTTP methods such as GET, POST, PUT, PATCH, and DELETE. It accepts a URL and optional options for each request. When a request is made, the loading state is set to true, and the data and error states are updated based on the response from the server.",
    input: [
      {
        name: "url",
        type: "string",
        description: "The URL for the HTTP request.",
      },
      {
        name: "options",
        type: "object",
        description:
          "Optional options object for the fetch request, such as method, headers, and body.",
      },
    ],
    output: [
      {
        name: "data",
        type: "any",
        description: "The data returned from the HTTP request.",
      },
      {
        name: "loading",
        type: "boolean",
        description: "A boolean indicating whether the request is in progress.",
      },
      {
        name: "error",
        type: "Error",
        description:
          "An Error object containing the error message if the request fails.",
      },
      {
        name: "get",
        type: "function",
        description:
          "A function to fetch data from the specified URL with optional options.",
      },
      {
        name: "post",
        type: "function",
        description:
          "A function to send a POST request to the specified URL with the given body.",
      },
      {
        name: "put",
        type: "function",
        description:
          "A function to send a PUT request to the specified URL with the given body.",
      },
      {
        name: "patch",
        type: "function",
        description:
          "A function to send a PATCH request to the specified URL with the given body.",
      },
      {
        name: "Delete",
        type: "function",
        description:
          "A function to send a DELETE request to the specified URL.",
      },
    ],
    demoCode: `import React from 'react';
                                                  import { Fetcher } from 'usehoks'; // Importing form useHoks
                                                  
                                                  function App() {
                                                    const { data, loading, error, fetchData, post, put, patch, Delete } = Fetcher();
                                                  
                                                    return (
                                                      <div>
                                                        <button onClick={() => get('https://api.example.com/data')}>
                                                          Fetch Data
                                                        </button>
                                                        <button onClick={() => post('https://api.example.com/data', { key: 'value' })}>
                                                          Post Data
                                                        </button>
                                                        <button onClick={() => put('https://api.example.com/data', { key: 'value' })}>
                                                          Put Data
                                                        </button>
                                                        <button onClick={() => patch('https://api.example.com/data', { key: 'value' })}>
                                                          Patch Data
                                                        </button>
                                                        <button onClick={() => Delete('https://api.example.com/data')}>
                                                          Delete Data
                                                        </button>
                                                        {loading && <p>Loading...</p>}
                                                        {error && <p>Error: {error.message}</p>}
                                                        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                                                      </div>
                                                    );
                                                  }
                                                  
                                                  export default App;
                                                  
                                                  `,
  },
  {
    id: "37",
    title: "PageVisibility",
    description:
      "PageVisibility is a custom React hook for tracking the visibility state of the page.",
    mainDescription:
      "PageVisibility is a custom React hook for tracking the visibility state of the page. It returns a boolean value indicating whether the page is currently visible or hidden. The hook listens for the visibilitychange event and updates the visibility state accordingly. When the page becomes visible, the hook returns true, and when the page becomes hidden, it returns false.",
    input: [],
    output: [
      {
        name: "isVisible",
        type: "boolean",
        description:
          "A boolean value indicating whether the page is currently visible (true) or hidden (false).",
      },
    ],
    demoCode: `import React from 'react';
                                                    import { PageVisibility } from 'usehoks'; // Importing form useHoks
                                                    
                                                    function App() {
                                                      const isVisible = PageVisibility();
                                                    
                                                      return (
                                                        <div>
                                                          <p>{isVisible ? 'Page is visible' : 'Page is hidden'}</p>
                                                        </div>
                                                      );
                                                    }
                                                    
                                                    export default App;
                                                    
                                                    `,
  },
  {
    id: "38",
    title: "IdleTimer",
    description:
      "IdleTimer is a custom React hook for detecting user idle state based on a timeout.",
    mainDescription:
      "IdleTimer is a custom React hook for detecting user idle state based on a timeout. It returns a boolean value indicating whether the user is currently idle or active. The hook listens for user activity events (mousemove, keydown, mousedown, touchstart) and resets an idle timer whenever an activity occurs. If no activity is detected within the specified timeout, the hook sets the idle state to true.",
    input: [
      {
        name: "timeout",
        type: "number",
        description:
          "The timeout (in milliseconds) after which the user is considered idle if no activity occurs.",
      },
    ],
    output: [
      {
        name: "isIdle",
        type: "boolean",
        description:
          "A boolean value indicating whether the user is currently idle (true) or active (false).",
      },
    ],
    demoCode: `import React from 'react';
                                                      import { IdleTimer } from 'usehoks'; // Importing form useHoks
                                                      
                                                      function App() {
                                                        const isIdle = IdleTimer(5000); // Set timeout to 5 seconds
                                                      
                                                        return (
                                                          <div>
                                                            <p>{isIdle ? 'User is idle' : 'User is active'}</p>
                                                          </div>
                                                        );
                                                      }
                                                      
                                                      export default App;
                                                      
                                                      `,
  },
  {
    id: "39",
    title: "useForm",
    description:
      "useForm is a custom React hook for handling form state and validation.",
    mainDescription:
      "useForm is a custom React hook for handling form state and validation. It takes two parameters: initialValues, an object containing the initial form values, and validationRules, an object containing validation functions for each form field. The hook returns an object with values, errors, handleChange, and handleSubmit functions. The handleChange function updates the form values and runs validation rules for the corresponding field. The handleSubmit function validates the entire form and executes a callback with the form values if the form is valid.",
    input: [
      {
        name: "initialValues",
        type: "object",
        description:
          "An object containing the initial values for the form fields.",
      },
      {
        name: "validationRules",
        type: "object",
        description:
          "An object containing validation functions for each form field. The keys should match the field names in initialValues.",
      },
    ],
    output: [
      {
        name: "values",
        type: "object",
        description:
          "An object containing the current values of the form fields.",
      },
      {
        name: "errors",
        type: "object",
        description:
          "An object containing any validation errors for the form fields.",
      },
      {
        name: "handleChange",
        type: "function",
        description:
          "A function that handles changes to form field values and runs validation.",
      },
      {
        name: "handleSubmit",
        type: "function",
        description:
          "A function that validates the entire form and executes a callback with the form values if the form is valid.",
      },
    ],
    demoCode: `import React from 'react';
                                                        import { useForm } from 'usehoks'; // Importing form useHoks
                                                        
                                                        function App() {
                                                          const { values, errors, handleChange, handleSubmit } = useForm(
                                                            { username: '', password: '' },
                                                            {
                                                              username: (value) => (value.length < 5 ? 'Username must be at least 5 characters long' : null),
                                                              password: (value) => (value.length < 8 ? 'Password must be at least 8 characters long' : null),
                                                            }
                                                          );
                                                        
                                                          const onSubmit = (data) => {
                                                            console.log('Form submitted with values:', data);
                                                          };
                                                        
                                                          return (
                                                            <div>
                                                              <input
                                                                type="text"
                                                                name="username"
                                                                value={values.username}
                                                                onChange={(e) => handleChange('username', e.target.value)}
                                                              />
                                                              {errors.username && <p>{errors.username}</p>}
                                                        
                                                              <input
                                                                type="password"
                                                                name="password"
                                                                value={values.password}
                                                                onChange={(e) => handleChange('password', e.target.value)}
                                                              />
                                                              {errors.password && <p>{errors.password}</p>}
                                                        
                                                              <button onClick={() => handleSubmit(onSubmit)}>Submit</button>
                                                            </div>
                                                          );
                                                        }
                                                        
                                                        export default App;
                                                        
                                                        `,
  },
  {
    id: "40",
    title: "useEventListener",
    description:
      "useEventListener is a custom React hook for adding and removing event listeners.",
    mainDescription:
      "useEventListener is a custom React hook for adding and removing event listeners. It takes three parameters: eventName (string), the name of the event to listen for, handler (function), the event handler function, and element (optional, defaults to window), the DOM element to attach the event listener to. The hook uses useEffect to add the event listener when the component mounts and remove it when the component unmounts. It ensures that the element supports addEventListener before adding the listener, and it handles cleanup by removing the listener in the return function of useEffect.",
    input: [
      {
        name: "eventName",
        type: "string",
        description:
          "The name of the event to listen for, such as 'click', 'keydown', etc.",
      },
      {
        name: "handler",
        type: "function",
        description:
          "The event handler function that will be called when the event is triggered.",
      },
      {
        name: "element",
        type: "DOM element",
        description:
          "The DOM element to attach the event listener to. Defaults to window if not specified.",
      },
    ],
    output: [],
    demoCode: `import React from 'react';
                                                          import { useEventListener } from 'usehoks'; // Importing form useHoks
                                                          
                                                          function App() {
                                                            const handleResize = () => {
                                                              console.log('Window resized');
                                                            };
                                                          
                                                            useEventListener('resize', handleResize);
                                                          
                                                            return (
                                                              <div>
                                                                Resize the window to see the effect
                                                              </div>
                                                            );
                                                          }
                                                          
                                                          export default App;
                                                          
                                                          `,
  },
  {
    id: "41",
    title: "useCaptcha",
    description:
      "useCaptcha is a custom React hook for generating and validating CAPTCHA strings.",
    mainDescription:
      "useCaptcha is a custom React hook for generating and validating CAPTCHA strings. It uses useState to manage the CAPTCHA string state and provides functions for generating a new CAPTCHA, regenerating the current CAPTCHA, and validating user input against the current CAPTCHA. The hook generates a random string of alphanumeric characters for the CAPTCHA and uses it to create a URL for a dummy image. This URL can be used to display the CAPTCHA image in a UI. The validateCaptcha function compares the user input with the current CAPTCHA string and returns a boolean indicating whether the input is correct.",
    input: [],
    output: [
      {
        name: "captcha",
        type: "string",
        description:
          "A URL for a dummy image representing the current CAPTCHA string.",
      },
      {
        name: "regenerateCaptcha",
        type: "function",
        description:
          "A function that regenerates the CAPTCHA string and updates the URL.",
      },
      {
        name: "validateCaptcha",
        type: "function",
        description:
          "A function that validates user input against the current CAPTCHA string. Returns true if the input is correct, false otherwise.",
      },
    ],
    demoCode: `import React, { useState } from 'react';
                                                            import { useCaptcha } from 'usehoks'; // Importing form useHoks
                                                            
                                                            function App() {
                                                              const { captcha, regenerateCaptcha, validateCaptcha } = useCaptcha();
                                                              const [userInput, setUserInput] = useState('');
                                                            
                                                              const handleSubmit = () => {
                                                                if (validateCaptcha(userInput)) {
                                                                  alert('CAPTCHA validation successful!');
                                                                } else {
                                                                  alert('CAPTCHA validation failed!');
                                                                }
                                                              };
                                                            
                                                              return (
                                                                <div>
                                                                  <img src={captcha} alt="CAPTCHA" />
                                                                  <br />
                                                                  <button onClick={regenerateCaptcha}>Regenerate CAPTCHA</button>
                                                                  <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                                                                  <button onClick={handleSubmit}>Submit</button>
                                                                </div>
                                                              );
                                                            }
                                                            
                                                            export default App;
                                                            
                                                            `,
  },
  {
    id: "42",
    title: "usePagination",
    description:
      "usePagination is a custom React hook for managing pagination state.",
    mainDescription:
      "usePagination is a custom React hook that helps manage pagination state for a list of items. It takes the total number of items and the number of items per page as input and returns the current page number, total number of pages, functions to navigate to the next and previous pages, and a function to go to a specific page. It also provides boolean values indicating whether there is a next or previous page.",
    input: [
      {
        name: "items",
        type: "Array of Obj",
        description: "Total items that need to Paginated",
      },
      {
        name: "itemsPerPage",
        type: "number",
        description: "The number of items to display per page. Default is 10.",
      },
    ],
    output: [
      {
        name: "currentPage",
        type: "number",
        description: "The current page number.",
      },
      {
        name: "totalPages",
        type: "number",
        description: "The total number of pages.",
      },
      {
        name: "nextPage",
        type: "function",
        description: "A function to go to the next page.",
      },
      {
        name: "prevPage",
        type: "function",
        description: "A function to go to the previous page.",
      },
      {
        name: "goToPage",
        type: "function",
        description: "A function to go to a specific page.",
      },
      {
        name: "hasNextPage",
        type: "boolean",
        description: "Indicates whether there is a next page.",
      },
      {
        name: "hasPrevPage",
        type: "boolean",
        description: "Indicates whether there is a previous page.",
      },
      {
        name:"currentItems",
        type:"Array of Obj",
        description:"The items for the current page"
      }
    ],
    demoCode: `
import UserData from './data.js';
import { usePagination } from 'usehoks';

function PaginatedComponent() {
  const itemsPerPage = 10;
  const { currentPage, totalPages, nextPage, prevPage, goToPage, hasNextPage, hasPrevPage, currentItems } = usePagination(UserData, itemsPerPage);

  return (
    <div>
      <ul>
        {currentItems.map(item => (
          <li key={item.id}>{item.username}</li>
        ))}
      </ul>
      <div>
        <button disabled={!hasPrevPage} onClick={prevPage}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button disabled={!hasNextPage} onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default PaginatedComponent;

    `,
  },
  {
    id: "43",
    title: "useModal",
    description: "useModal is a custom React hook for managing modal state.",
    mainDescription:
      "useModal is a custom React hook that helps manage the state of a modal. It provides functions to open and close the modal, as well as a boolean value indicating whether the modal is currently open.",
    input: [{}],
    output: [
      {
        name: "isOpen",
        type: "boolean",
        description: "Indicates whether the modal is open.",
      },
      {
        name: "openModal",
        type: "function",
        description: "A function to open the modal.",
      },
      {
        name: "closeModal",
        type: "function",
        description: "A function to close the modal.",
      },
    ],
    demoCode: `import React from 'react';
    import { useModal } from 'usehoks'; // Importing form useHoks
    
    function App() {
      const { isOpen, openModal, closeModal } = useModal();
    
      return (
        <div>
          <button onClick={openModal}>Open Modal</button>
          {isOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p>Modal content goes here.</p>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    export default App;
    `,
  },
  {
    id: "44",
    title: "useCountdown",
    description:
      "useCountdown is a custom React hook for creating countdown timers.",
    mainDescription:
      "useCountdown is a custom React hook that creates a countdown timer based on a target date and time. It calculates the time left until the target date and time and updates the time left every second.",
    input: [
      {
        name: "initialDate",
        type: "Date",
        description: "The initial target date for the countdown timer.",
      },
      {
        name: "initialTime",
        type: "string",
        description:
          "The initial target time for the countdown timer in 'HH:mm' format.",
      },
    ],
    output: [
      {
        name: "targetDate",
        type: "Date",
        description: "The target date for the countdown timer.",
      },
      {
        name: "setTargetDate",
        type: "function",
        description: "A function to update the target date.",
      },
      {
        name: "targetTime",
        type: "string",
        description:
          "The target time for the countdown timer in 'HH:mm' format.",
      },
      {
        name: "setTargetTime",
        type: "function",
        description: "A function to update the target time.",
      },
      {
        name: "timeLeft",
        type: "object",
        description:
          "An object containing the time left until the target date and time, with properties for years, days, hours, minutes, seconds, and milliseconds.",
      },
    ],
    demoCode: `import React, { useState } from 'react';
    import { useCountdown } from 'usehoks'; // Importing form useHoks
    
    function CountdownTimer() {
      const [targetDate, setTargetDate] = useState(new Date());
      const [targetTime, setTargetTime] = useState('00:00');
      const { timeLeft } = useCountdown(targetDate, targetTime);
    
      const handleDateChange = (event) => {
        setTargetDate(new Date(event.target.value));
      };
    
      const handleTimeChange = (event) => {
        setTargetTime(event.target.value);
      };
    
      return (
        <div>
          <label>
            Target Date:
            <input type="date" value={targetDate.toISOString().split('T')[0]} onChange={handleDateChange} />
          </label>
          <br />
          <label>
            Target Time:
            <input type="time" value={targetTime} onChange={handleTimeChange} />
          </label>
          <br />
          <div>
            Time Left: {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
          </div>
        </div>
      );
    }
    
    export default CountdownTimer;
    `,
  },
  {
    id: "45",
    title: "getFormValues",
    description:
      "getFormValues is a custom React hook for getting values from form inputs.",
    mainDescription:
      "getFormValues is a custom React hook that provides a way to get values from form inputs using a ref to the form element. It returns the form ref and a function to get the form values as an object.",
    input: [],
    output: [
      {
        name: "formRef",
        type: "RefObject",
        description:
          "A ref object that should be attached to the form element.",
      },
      {
        name: "getValues",
        type: "function",
        description: "A function that returns the form values as an object.",
      },
    ],
    demoCode: `import React, { useRef } from 'react';
    import { getFormValues } from 'usehoks'; // Importing form useHoks
    
    function FormComponent() {
      const { formRef, getValues } = getFormValues();
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const values = getValues();
        console.log('Form values:', values);
      };
    
      return (
        <form ref={formRef} onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
    
    export default FormComponent;
    `,
  },
  {
    id: "46",
    title: "LongKeyPress",
    description:
      "LongKeyPress is a custom React hook for detecting long key presses.",
    mainDescription:
      "LongKeyPress is a custom React hook that detects when a key is pressed for a specified duration and then triggers a callback. It takes the target key, a callback function, and an optional custom delay as arguments.",
    input: [
      {
        name: "targetKey",
        type: "string",
        description: "The key to listen for long presses.",
      },
      {
        name: "callback",
        type: "function",
        description:
          "The callback function to be executed when the key is pressed for a long duration.",
      },
      {
        name: "customDelay",
        type: "number",
        description:
          "An optional custom delay in milliseconds for the long press duration. Default is 500 milliseconds.",
      },
    ],
    output: [
      {
        name: "isPressing",
        type: "boolean",
        description:
          "A boolean value indicating whether the key is currently being pressed for a long duration.",
      },
    ],
    demoCode: `import React from 'react';
    import { LongKeyPress } from 'usehoks'; // Importing form useHoks
    
    function App() {
      const handleLongPress = () => {
        console.log('Long key press detected!');
      };
  
      const isPressing = LongKeyPress('a', handleLongPress, 1000);
  
      return (
        <div>
          <h1>Press and hold the 'a' key for 1 second</h1>
          <p>Long key press detected: {isPressing ? 'Yes' : 'No'}</p>
        </div>
      );
    }
  
    export default App;
    `,
  },
];
