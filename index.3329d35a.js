!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=function(t){return fetch("https://restcountries.com/v3.1/name/".concat(t,"?fields=name.official,capital,population,flags.svg,languages")).then((function(t){return t.json}))},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return d.Date.now()};function m(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(m(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=m(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var o=f.test(e);return o||c.test(e)?a(e.slice(2),o?2:8):u.test(e)?NaN:+e}e=function(t,e,n){var o,i,r,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function h(t){return a=t,f=setTimeout(O,e),l?v(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=r}function O(){var t=b();if(j(t))return T(t);f=setTimeout(O,function(t){var n=e-(t-c);return s?y(n,r-(t-a)):n}(t))}function T(t){return f=void 0,d&&o?v(t):(o=i=void 0,u)}function w(){var t=b(),n=j(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(O,e),v(c)}return void 0===f&&(f=setTimeout(O,e)),u}return e=g(e)||0,m(n)&&(l=!!n.leading,r=(s="maxWait"in n)?p(g(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:T(b())},w};var h={inputEl:document.querySelector("#search-box"),listEl:document.querySelector(".country-list"),infoContainer:document.querySelector(".country-info")};h.inputEl.addEventListener("input",t(e)((function(t){var e=this.value.trim();e&&o(e)}),300))}();
//# sourceMappingURL=index.3329d35a.js.map
