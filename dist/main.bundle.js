!function(){var e={355:function(){const e=document.querySelector(".hamburger-menu__checkbox"),t=document.querySelector(".sidebar");e.addEventListener("change",(()=>{t.classList.toggle("sidebar--open")}))},955:function(){const e=document.querySelectorAll(".progress-slider__list");document.querySelectorAll(".progress-slider__button").forEach((e=>{e.addEventListener("click",(()=>{e.closest(".progress-slider").querySelector(".progress-slider__list").scrollLeft+="left-button"===e.id?-150:150}))}));let t=!1,r=null;const o=e=>{t&&(r.scrollLeft-=e.movementX)};e.forEach((e=>{e.addEventListener("mousedown",(()=>{t=!0,r=e})),e.addEventListener("mousemove",o),e.addEventListener("mouseup",(()=>{t=!1,r=null}))}))},533:function(){document.querySelector(".header__show-search").addEventListener("click",(function(){const e=document.querySelector(".header__search"),t=document.querySelector(".header__logo"),r=document.querySelector(".header__input");e.classList.toggle("header__search--open"),t.classList.toggle("header__logo--hide"),r.focus()}))},57:function(){const e=document.querySelector(".sidebar__details"),t=document.querySelectorAll(".sidebar__submenu-item");Array.from(t).some((e=>e.classList.contains("sidebar__submenu-item--current")))&&(e.open=!0)},234:function(){const e=document.querySelectorAll(".video-player__element"),t=document.querySelectorAll(".video-player__button"),r=document.querySelectorAll(".video-player__caption");t.forEach(((t,o)=>{t.addEventListener("click",(()=>{const n=e[o],c=r[o];n.classList.remove("video-player__element--no-controls"),n.play(),n.tabIndex=0,t.style.display="none",c&&(c.style.display="none")}))}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!e;)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){"use strict";r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r(355),r(955),r(533),r(234),r(57)}()}();