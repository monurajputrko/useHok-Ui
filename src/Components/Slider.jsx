import React, { useState } from 'react'
import logo from './use.png'
import { Clipboard } from 'usehoks/Hookes/Module3';
export default function Slider() {
    const {copyToClipboard,copied} = Clipboard(1000)
    const copyClick = ()=>{
        copyToClipboard('npm i usehoks')
    }
    
  return (
    <header class="hero astro-IQQ5RAKT">
      <img src={logo} width="546" height="80" alt="useHooks" class="astro-IQQ5RAKT" />
      <h1 class="astro-IQQ5RAKT">A collection of modern, server-safe React hooks </h1>
      <div class="install astro-IQQ5RAKT astro-RYJLWM3K">
        <code class="astro-IQQ5RAKT astro-RYJLWM3K">npm i usehoks</code>
        <button onClick={copyClick} class="copy-btn astro-IQQ5RAKT astro-RYJLWM3K">{copied ? "Copied!" : "Copy"}</button>
      </div>
      <div class="marquee marquee-left astro-IQQ5RAKT">
        <ul class="marquee-content astro-IQQ5RAKT">
          <li class="astro-IQQ5RAKT">
            <a href="/usebattery" tabindex="-1" class="astro-IQQ5RAKT">useBattery</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useclickaway" tabindex="-1" class="astro-IQQ5RAKT">useClickAway</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usecontinuousretry" tabindex="-1" class="astro-IQQ5RAKT">useContinuousRetry</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usecopytoclipboard" tabindex="-1" class="astro-IQQ5RAKT">useCopyToClipboard</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usecountdown" tabindex="-1" class="astro-IQQ5RAKT">useCountdown</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usecounter" tabindex="-1" class="astro-IQQ5RAKT">useCounter</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usedebounce" tabindex="-1" class="astro-IQQ5RAKT">useDebounce</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usedefault" tabindex="-1" class="astro-IQQ5RAKT">useDefault</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usedocumenttitle" tabindex="-1" class="astro-IQQ5RAKT">useDocumentTitle</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useeventlistener" tabindex="-1" class="astro-IQQ5RAKT">useEventListener</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usefavicon" tabindex="-1" class="astro-IQQ5RAKT">useFavicon</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usefetch" tabindex="-1" class="astro-IQQ5RAKT">useFetch</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usegeolocation" tabindex="-1" class="astro-IQQ5RAKT">useGeolocation</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usehistorystate" tabindex="-1" class="astro-IQQ5RAKT">useHistoryState</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usehover" tabindex="-1" class="astro-IQQ5RAKT">useHover</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useidle" tabindex="-1" class="astro-IQQ5RAKT">useIdle</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useintersectionobserver" tabindex="-1" class="astro-IQQ5RAKT">useIntersectionObserver</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useinterval" tabindex="-1" class="astro-IQQ5RAKT">useInterval</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useintervalwhen" tabindex="-1" class="astro-IQQ5RAKT">useIntervalWhen</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useisclient" tabindex="-1" class="astro-IQQ5RAKT">useIsClient</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useisfirstrender" tabindex="-1" class="astro-IQQ5RAKT">useIsFirstRender</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usekeypress" tabindex="-1" class="astro-IQQ5RAKT">useKeyPress</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/uselist" tabindex="-1" class="astro-IQQ5RAKT">useList</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/uselocalstorage" tabindex="-1" class="astro-IQQ5RAKT">useLocalStorage</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/uselockbodyscroll" tabindex="-1" class="astro-IQQ5RAKT">useLockBodyScroll</a>
          </li>
        </ul>
        <ul class="marquee-content astro-IQQ5RAKT">
          <li class="astro-IQQ5RAKT">
            <a href="/usebattery" tabindex="-1" class="astro-IQQ5RAKT">useBattery</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useclickaway" tabindex="-1" class="astro-IQQ5RAKT">useClickAway</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usecontinuousretry" tabindex="-1" class="astro-IQQ5RAKT">useContinuousRetry</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usecopytoclipboard" tabindex="-1" class="astro-IQQ5RAKT">useCopyToClipboard</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usecountdown" tabindex="-1" class="astro-IQQ5RAKT">useCountdown</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usecounter" tabindex="-1" class="astro-IQQ5RAKT">useCounter</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usedebounce" tabindex="-1" class="astro-IQQ5RAKT">useDebounce</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usedefault" tabindex="-1" class="astro-IQQ5RAKT">useDefault</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usedocumenttitle" tabindex="-1" class="astro-IQQ5RAKT">useDocumentTitle</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useeventlistener" tabindex="-1" class="astro-IQQ5RAKT">useEventListener</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usefavicon" tabindex="-1" class="astro-IQQ5RAKT">useFavicon</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usefetch" tabindex="-1" class="astro-IQQ5RAKT">useFetch</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usegeolocation" tabindex="-1" class="astro-IQQ5RAKT">useGeolocation</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usehistorystate" tabindex="-1" class="astro-IQQ5RAKT">useHistoryState</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usehover" tabindex="-1" class="astro-IQQ5RAKT">useHover</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useidle" tabindex="-1" class="astro-IQQ5RAKT">useIdle</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useintersectionobserver" tabindex="-1" class="astro-IQQ5RAKT">useIntersectionObserver</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useinterval" tabindex="-1" class="astro-IQQ5RAKT">useInterval</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useintervalwhen" tabindex="-1" class="astro-IQQ5RAKT">useIntervalWhen</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useisclient" tabindex="-1" class="astro-IQQ5RAKT">useIsClient</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useisfirstrender" tabindex="-1" class="astro-IQQ5RAKT">useIsFirstRender</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usekeypress" tabindex="-1" class="astro-IQQ5RAKT">useKeyPress</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/uselist" tabindex="-1" class="astro-IQQ5RAKT">useList</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/uselocalstorage" tabindex="-1" class="astro-IQQ5RAKT">useLocalStorage</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/uselockbodyscroll" tabindex="-1" class="astro-IQQ5RAKT">useLockBodyScroll</a>
          </li>
        </ul>
      </div>
      <div class="marquee marquee-right astro-IQQ5RAKT">
        <ul class="marquee-content astro-IQQ5RAKT">
          <li class="astro-IQQ5RAKT">
            <a href="/uselogger" tabindex="-1" class="astro-IQQ5RAKT">useLogger</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/uselongpress" tabindex="-1" class="astro-IQQ5RAKT">useLongPress</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usemap" tabindex="-1" class="astro-IQQ5RAKT">useMap</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usemeasure" tabindex="-1" class="astro-IQQ5RAKT">useMeasure</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usemediaquery" tabindex="-1" class="astro-IQQ5RAKT">useMediaQuery</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usemouse" tabindex="-1" class="astro-IQQ5RAKT">useMouse</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usenetworkstate" tabindex="-1" class="astro-IQQ5RAKT">useNetworkState</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useobjectstate" tabindex="-1" class="astro-IQQ5RAKT">useObjectState</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useorientation" tabindex="-1" class="astro-IQQ5RAKT">useOrientation</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usepageleave" tabindex="-1" class="astro-IQQ5RAKT">usePageLeave</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usepreferredlanguage" tabindex="-1" class="astro-IQQ5RAKT">usePreferredLanguage</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useprevious" tabindex="-1" class="astro-IQQ5RAKT">usePrevious</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usequeue" tabindex="-1" class="astro-IQQ5RAKT">useQueue</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/userandominterval" tabindex="-1" class="astro-IQQ5RAKT">useRandomInterval</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/userendercount" tabindex="-1" class="astro-IQQ5RAKT">useRenderCount</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/userenderinfo" tabindex="-1" class="astro-IQQ5RAKT">useRenderInfo</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usescript" tabindex="-1" class="astro-IQQ5RAKT">useScript</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usesessionstorage" tabindex="-1" class="astro-IQQ5RAKT">useSessionStorage</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useset" tabindex="-1" class="astro-IQQ5RAKT">useSet</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usethrottle" tabindex="-1" class="astro-IQQ5RAKT">useThrottle</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usetimeout" tabindex="-1" class="astro-IQQ5RAKT">useTimeout</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usetoggle" tabindex="-1" class="astro-IQQ5RAKT">useToggle</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usevisibilitychange" tabindex="-1" class="astro-IQQ5RAKT">useVisibilityChange</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usewindowscroll" tabindex="-1" class="astro-IQQ5RAKT">useWindowScroll</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usewindowsize" tabindex="-1" class="astro-IQQ5RAKT">useWindowSize</a>
          </li>
        </ul>
        <ul class="marquee-content astro-IQQ5RAKT">
          <li class="astro-IQQ5RAKT">
            <a href="/uselogger" tabindex="-1" class="astro-IQQ5RAKT">useLogger</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/uselongpress" tabindex="-1" class="astro-IQQ5RAKT">useLongPress</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usemap" tabindex="-1" class="astro-IQQ5RAKT">useMap</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usemeasure" tabindex="-1" class="astro-IQQ5RAKT">useMeasure</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usemediaquery" tabindex="-1" class="astro-IQQ5RAKT">useMediaQuery</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usemouse" tabindex="-1" class="astro-IQQ5RAKT">useMouse</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usenetworkstate" tabindex="-1" class="astro-IQQ5RAKT">useNetworkState</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useobjectstate" tabindex="-1" class="astro-IQQ5RAKT">useObjectState</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useorientation" tabindex="-1" class="astro-IQQ5RAKT">useOrientation</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usepageleave" tabindex="-1" class="astro-IQQ5RAKT">usePageLeave</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usepreferredlanguage" tabindex="-1" class="astro-IQQ5RAKT">usePreferredLanguage</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useprevious" tabindex="-1" class="astro-IQQ5RAKT">usePrevious</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usequeue" tabindex="-1" class="astro-IQQ5RAKT">useQueue</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/userandominterval" tabindex="-1" class="astro-IQQ5RAKT">useRandomInterval</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/userendercount" tabindex="-1" class="astro-IQQ5RAKT">useRenderCount</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/userenderinfo" tabindex="-1" class="astro-IQQ5RAKT">useRenderInfo</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usescript" tabindex="-1" class="astro-IQQ5RAKT">useScript</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usesessionstorage" tabindex="-1" class="astro-IQQ5RAKT">useSessionStorage</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/useset" tabindex="-1" class="astro-IQQ5RAKT">useSet</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usethrottle" tabindex="-1" class="astro-IQQ5RAKT">useThrottle</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usetimeout" tabindex="-1" class="astro-IQQ5RAKT">useTimeout</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usetoggle" tabindex="-1" class="astro-IQQ5RAKT">useToggle</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usevisibilitychange" tabindex="-1" class="astro-IQQ5RAKT">useVisibilityChange</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usewindowscroll" tabindex="-1" class="astro-IQQ5RAKT">useWindowScroll</a>
          </li>
          <li class="astro-IQQ5RAKT">
            <a href="/usewindowsize" tabindex="-1" class="astro-IQQ5RAKT">useWindowSize</a>
          </li>
        </ul>
      </div>
    </header>
  )
}
