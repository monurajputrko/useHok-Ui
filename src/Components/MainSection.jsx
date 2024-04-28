import React from 'react'

export default function MainSection() {
    const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  return (
    <section class="_hooks-grid_1fp8c_1">
   
    <ul class="_hooks-list_1fp8c_12">
     
      {data.map((e)=>(<li class="_hook_1wx7b_1">
        <a href="/usedebounce">
          <h3 class="_card-title_1wx7b_16">useDebounce</h3>
          <p class="_card-description_1wx7b_24">Delay the execution of function or state update with useDebounce.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>))}
      {/* <li class="_hook_1wx7b_1">
        <a href="/uselocalstorage">
          <h3 class="_card-title_1wx7b_16">useLocalStorage</h3>
          <p class="_card-description_1wx7b_24">Store, retrieve, and synchronize data from the browser’s localStorage API with useLocalStorage</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usewindowsize">
          <h3 class="_card-title_1wx7b_16">useWindowSize</h3>
          <p class="_card-description_1wx7b_24">Track the dimensions of the browser window with useWindowSize.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/useprevious">
          <h3 class="_card-title_1wx7b_16">usePrevious</h3>
          <p class="_card-description_1wx7b_24">Track the previous value of a variable with usePrevious.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/useintersectionobserver">
          <h3 class="_card-title_1wx7b_16">useIntersectionObserver</h3>
          <p class="_card-description_1wx7b_24">Track and manage the visibility of your DOM elements within the viewport with useIntersectionObserver.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usenetworkstate">
          <h3 class="_card-title_1wx7b_16">useNetworkState</h3>
          <p class="_card-description_1wx7b_24">Monitor and adapt to network conditions seamlessly with useNetworkState.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usemediaquery">
          <h3 class="_card-title_1wx7b_16">useMediaQuery</h3>
          <p class="_card-description_1wx7b_24">Subscribe and respond to media query changes with useMediaQuery.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/useorientation">
          <h3 class="_card-title_1wx7b_16">useOrientation</h3>
          <p class="_card-description_1wx7b_24">Manage and respond to changes in device orientation with useOrientation.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usesessionstorage">
          <h3 class="_card-title_1wx7b_16">useSessionStorage</h3>
          <p class="_card-description_1wx7b_24">Store, retrieve, and synchronize data from the browser’s session storage with useSessionStorage.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usepreferredlanguage">
          <h3 class="_card-title_1wx7b_16">usePreferredLanguage</h3>
          <p class="_card-description_1wx7b_24">Adapt to user language preferences dynamically with usePreferredLanguage.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usefetch">
          <h3 class="_card-title_1wx7b_16">useFetch</h3>
          <p class="_card-description_1wx7b_24">Fetch data with accurate states, caching, and no stale responses using useFetch.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usecontinuousretry">
          <h3 class="_card-title_1wx7b_16">useContinuousRetry</h3>
          <p class="_card-description_1wx7b_24">Automates retries of a callback function until it succeeds with useContinuousRetry</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usevisibilitychange">
          <h3 class="_card-title_1wx7b_16">useVisibilityChange</h3>
          <p class="_card-description_1wx7b_24">Track document visibility and respond to changes with useVisibilityChange.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      
      <li class="_hook_1wx7b_1">
        <a href="/usescript">
          <h3 class="_card-title_1wx7b_16">useScript</h3>
          <p class="_card-description_1wx7b_24">Load and manage external JavaScript scripts with useScript.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/userenderinfo">
          <h3 class="_card-title_1wx7b_16">useRenderInfo</h3>
          <p class="_card-description_1wx7b_24">Debug renders and improve performance with useRenderInfo.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/userendercount">
          <h3 class="_card-title_1wx7b_16">useRenderCount</h3>
          <p class="_card-description_1wx7b_24">Identify unnecessary re-renders and monitor update frequency with useRenderCount.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/userandominterval">
          <h3 class="_card-title_1wx7b_16">useRandomInterval</h3>
          <p class="_card-description_1wx7b_24">Execute a callback function at a random interval with useRandomInterval.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/useintervalwhen">
          <h3 class="_card-title_1wx7b_16">useIntervalWhen</h3>
          <p class="_card-description_1wx7b_24">Create dynamic timers that can be started, paused, or resumed with useIntervalWhen.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/useinterval">
          <h3 class="_card-title_1wx7b_16">useInterval</h3>
          <p class="_card-description_1wx7b_24">Schedule periodic actions like data polling or animations with useInterval.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/uselockbodyscroll">
          <h3 class="_card-title_1wx7b_16">useLockBodyScroll</h3>
          <p class="_card-description_1wx7b_24">Temporarily disable scrolling on the document body with useLockBodyScroll.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usecountdown">
          <h3 class="_card-title_1wx7b_16">useCountdown</h3>
          <p class="_card-description_1wx7b_24">Create countdown timers using useCountdown.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/useisclient">
          <h3 class="_card-title_1wx7b_16">useIsClient</h3>
          <p class="_card-description_1wx7b_24">Determine whether the code is running on the client-side or server-side with useIsClient.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usequeue">
          <h3 class="_card-title_1wx7b_16">useQueue</h3>
          <p class="_card-description_1wx7b_24">Add, remove, and clear element from a queue data structure with useQueue.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usehover">
          <h3 class="_card-title_1wx7b_16">useHover</h3>
          <p class="_card-description_1wx7b_24">Track whether an element is being hovered over with useHover.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usetimeout">
          <h3 class="_card-title_1wx7b_16">useTimeout</h3>
          <p class="_card-description_1wx7b_24">Create delayed actions or timed events using useTimeout.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      
      <li class="_hook_1wx7b_1">
        <a href="/useeventlistener">
          <h3 class="_card-title_1wx7b_16">useEventListener</h3>
          <p class="_card-description_1wx7b_24">Listen for events on a target element with useEventListener.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usekeypress">
          <h3 class="_card-title_1wx7b_16">useKeyPress</h3>
          <p class="_card-description_1wx7b_24">Detect and perform actions on key press events with useKeyPress.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usemap">
          <h3 class="_card-title_1wx7b_16">useMap</h3>
          <p class="_card-description_1wx7b_24">Synchronize and update state based on the Map data structure with useMap.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usethrottle">
          <h3 class="_card-title_1wx7b_16">useThrottle</h3>
          <p class="_card-description_1wx7b_24">Throttle computationally expensive operations with useThrottle.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/useset">
          <h3 class="_card-title_1wx7b_16">useSet</h3>
          <p class="_card-description_1wx7b_24">Synchronize and update state based on the Set data structure with useSet.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usecopytoclipboard">
          <h3 class="_card-title_1wx7b_16">useCopyToClipboard</h3>
          <p class="_card-description_1wx7b_24">Copy text to the clipboard using useCopyToClipboard.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usebattery">
          <h3 class="_card-title_1wx7b_16">useBattery</h3>
          <p class="_card-description_1wx7b_24">Track the battery status of a user’s device with useBattery.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/useidle">
          <h3 class="_card-title_1wx7b_16">useIdle</h3>
          <p class="_card-description_1wx7b_24">Detect user inactivity with useIdle.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usetoggle">
          <h3 class="_card-title_1wx7b_16">useToggle</h3>
          <p class="_card-description_1wx7b_24">A hook to toggle a boolean value with useToggle.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usehistorystate">
          <h3 class="_card-title_1wx7b_16">useHistoryState</h3>
          <p class="_card-description_1wx7b_24">Add undo / redo functionality with useHistoryState.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usegeolocation">
          <h3 class="_card-title_1wx7b_16">useGeolocation</h3>
          <p class="_card-description_1wx7b_24">Access and monitor a user's geolocation (after they give permission) with useGeolocation.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usepageleave">
          <h3 class="_card-title_1wx7b_16">usePageLeave</h3>
          <p class="_card-description_1wx7b_24">Track when a user navigates away from a webpage with usePageLeave.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      
      <li class="_hook_1wx7b_1">
        <a href="/useobjectstate">
          <h3 class="_card-title_1wx7b_16">useObjectState</h3>
          <p class="_card-description_1wx7b_24">Manage complex state objects with useObjectState.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/uselogger">
          <h3 class="_card-title_1wx7b_16">useLogger</h3>
          <p class="_card-description_1wx7b_24">Debug lifecycle events with useLogger.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usedocumenttitle">
          <h3 class="_card-title_1wx7b_16">useDocumentTitle</h3>
          <p class="_card-description_1wx7b_24">Dynamically update the title of a webpage with useDocumentTitle.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/useisfirstrender">
          <h3 class="_card-title_1wx7b_16">useIsFirstRender</h3>
          <p class="_card-description_1wx7b_24">Differentiate between the first and subsequent renders with useIsFirstRender.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/uselongpress">
          <h3 class="_card-title_1wx7b_16">useLongPress</h3>
          <p class="_card-description_1wx7b_24">Enable precise control of long-press interactions for both touch and mouse events with useLongPress.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usefavicon">
          <h3 class="_card-title_1wx7b_16">useFavicon</h3>
          <p class="_card-description_1wx7b_24">Dynamically update the favicon with useFavicon.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usedefault">
          <h3 class="_card-title_1wx7b_16">useDefault</h3>
          <p class="_card-description_1wx7b_24">Manage state with default values using useDefault.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usewindowscroll">
          <h3 class="_card-title_1wx7b_16">useWindowScroll</h3>
          <p class="_card-description_1wx7b_24">Track and manipulate the scroll position of a web page with useWindowScroll.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usemeasure">
          <h3 class="_card-title_1wx7b_16">useMeasure</h3>
          <p class="_card-description_1wx7b_24">Effortlessly measure and track your component’s dimensions with useMeasure.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/useclickaway">
          <h3 class="_card-title_1wx7b_16">useClickAway</h3>
          <p class="_card-description_1wx7b_24">Detect clicks outside of specific component with useClickAway.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/uselist">
          <h3 class="_card-title_1wx7b_16">useList</h3>
          <p class="_card-description_1wx7b_24">Manage and manipulate lists with useList.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usecounter">
          <h3 class="_card-title_1wx7b_16">useCounter</h3>
          <p class="_card-description_1wx7b_24">Manage a counter value with minimum and maximum limits with useCounter.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li>
      <li class="_hook_1wx7b_1">
        <a href="/usemouse">
          <h3 class="_card-title_1wx7b_16">useMouse</h3>
          <p class="_card-description_1wx7b_24">Track and retrieve the position of the mouse cursor with useMouse.</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="_arrow_1wx7b_29" viewBox="0 0 36 24">
            <path fill="none" stroke="#12b2e2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.86 12h30.18M21.31 1.15 34.14 12 21.31 22.85"></path>
          </svg>
        </a>
      </li> */}
    </ul>
  </section>
  )
}
