(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0FX9":function(t,e,r){var n=r("Z92M"),o=r("qmMu"),i=r("QUaw"),a=r("QAZZ");function s(t,e,r,i,a){var s=[].slice.call(arguments,1),u=s.length,c="function"==typeof s[u-1];if(!c&&!n())throw new Error("Callback required as last argument");if(!c){if(u<1)throw new Error("Too few arguments provided");return 1===u?(r=e,e=i=void 0):2!==u||e.getContext||(i=r,r=e,e=void 0),new Promise(function(n,a){try{var s=o.create(r,i);n(t(s,e,i))}catch(u){a(u)}})}if(u<2)throw new Error("Too few arguments provided");2===u?(a=r,r=e,e=i=void 0):3===u&&(e.getContext&&void 0===a?(a=i,i=void 0):(a=i,i=r,r=e,e=void 0));try{var l=o.create(r,i);a(null,t(l,e,i))}catch(f){a(f)}}e.create=o.create,e.toCanvas=s.bind(null,i.render),e.toDataURL=s.bind(null,i.renderToDataURL),e.toString=s.bind(null,function(t,e,r){return a.render(t,r)})},"1sBl":function(t,e,r){var n=r("e/Dd").getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){for(var r=[],n=e.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}},"3X7Y":function(t,e,r){var n=r("u/Db");function o(t){this.mode=n.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))},t.exports=o},"7uVY":function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},AZa5:function(t,e,r){var n=r("Wogr"),o=r("u/Db");function i(t){this.mode=o.BYTE,this.data=new n(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)},t.exports=i},BCVQ:function(t,e){var r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(r=r.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(n,"g"),e.NUMERIC=new RegExp("[0-9]+","g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var o=new RegExp("^"+r+"$"),i=new RegExp("^[0-9]+$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return o.test(t)},e.testNumeric=function(t){return i.test(t)},e.testAlphanumeric=function(t){return a.test(t)}},ELBg:function(t,e,r){"use strict";var n={single_source_shortest_paths:function(t,e,r){var o={},i={};i[e]=0;var a,s,u,c,l,f,h=n.PriorityQueue.make();for(h.push(e,0);!h.empty();)for(u in c=(a=h.pop()).cost,l=t[s=a.value]||{})l.hasOwnProperty(u)&&(f=c+l[u],(void 0===i[u]||i[u]>f)&&(i[u]=f,h.push(u,f),o[u]=s));if(void 0!==r&&void 0===i[r]){var d=["Could not find a path from ",e," to ",r,"."].join("");throw new Error(d)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),n=t[n];return r.reverse(),r},find_path:function(t,e,r){var o=n.single_source_shortest_paths(t,e,r);return n.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var e,r=n.PriorityQueue,o={};for(e in t=t||{},r)r.hasOwnProperty(e)&&(o[e]=r[e]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){this.queue.push({value:t,cost:e}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=n},J6Nv:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},JzKC:function(t,e,r){var n=r("Wogr"),o=r("aZ40");e.mul=function(t,e){var r=new n(t.length+e.length-1);r.fill(0);for(var i=0;i<t.length;i++)for(var a=0;a<e.length;a++)r[i+a]^=o.mul(t[i],e[a]);return r},e.mod=function(t,e){for(var r=new n(t);r.length-e.length>=0;){for(var i=r[0],a=0;a<e.length;a++)r[a]^=o.mul(e[a],i);for(var s=0;s<r.length&&0===r[s];)s++;r=r.slice(s)}return r},e.generateECPolynomial=function(t){for(var r=new n([1]),i=0;i<t;i++)r=e.mul(r,[1,o.exp(i)]);return r}},Lzq4:function(t,e,r){var n=r("u/Db"),o=r("e/Dd");function i(t){this.mode=n.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=o.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}t.put(r=192*(r>>>8&255)+(255&r),13)}},t.exports=i},NPxG:function(t,e,r){var n=r("ekOh"),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return i[4*(t-1)+0];case n.M:return i[4*(t-1)+1];case n.Q:return i[4*(t-1)+2];case n.H:return i[4*(t-1)+3];default:return}}},QAZZ:function(t,e,r){var n=r("Rb7d");function o(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function i(t,e,r){var n=t+e;return void 0!==r&&(n+=" "+r),n}e.render=function(t,e,r){var a=n.getOptions(e),s=t.modules.size,u=t.modules.data,c=s+2*a.margin,l=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",f="<path "+o(a.color.dark,"stroke")+' d="'+function(t,e,r){for(var n="",o=0,a=!1,s=0,u=0;u<t.length;u++){var c=Math.floor(u%e),l=Math.floor(u/e);c||a||(a=!0),t[u]?(s++,u>0&&c>0&&t[u-1]||(n+=a?i("M",c+r,.5+l+r):i("m",o,0),o=0,a=!1),c+1<e&&t[u+1]||(n+=i("h",s),s=0)):o++}return n}(u,s,a.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+'viewBox="0 0 '+c+" "+c+'" shape-rendering="crispEdges">'+l+f+"</svg>\n";return"function"==typeof r&&r(null,h),h}},QUaw:function(t,e,r){var n=r("Rb7d");e.render=function(t,e,r){var o=r,i=e;void 0!==o||e&&e.getContext||(o=e,e=void 0),e||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=n.getOptions(o);var a=n.getImageWidth(t.modules.size,o),s=i.getContext("2d"),u=s.createImageData(a,a);return n.qrToImageData(u.data,t,o),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(s,i,a),s.putImageData(u,0,0),i},e.renderToDataURL=function(t,r,n){var o=n;return void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={}),e.render(t,r,o).toDataURL(o.type||"image/png",(o.rendererOpts||{}).quality)}},Rb7d:function(t,e){function r(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e=t.width&&t.width>=21?t.width:void 0;return{width:e,scale:e?4:t.scale||4,margin:null==t.margin||t.margin<0?4:t.margin,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){var n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){for(var o=r.modules.size,i=r.modules.data,a=e.getScale(o,n),s=Math.floor((o+2*n.margin)*a),u=n.margin*a,c=[n.color.light,n.color.dark],l=0;l<s;l++)for(var f=0;f<s;f++){var h=4*(l*s+f),d=n.color.light;l>=u&&f>=u&&l<s-u&&f<s-u&&(d=c[i[Math.floor((l-u)/a)*o+Math.floor((f-u)/a)]?1:0]),t[h++]=d.r,t[h++]=d.g,t[h++]=d.b,t[h]=d.a}}},V35J:function(t,e,r){var n=r("Wogr");function o(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new n(t*t),this.data.fill(0),this.reservedBit=new n(t*t),this.reservedBit.fill(0)}o.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},o.prototype.get=function(t,e){return this.data[t*this.size+e]},o.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},o.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=o},Wogr:function(t,e,r){"use strict";var n=r("7uVY"),o=(i.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(e){return!1}}())?2147483647:1073741823;function i(t,e,r){return i.TYPED_ARRAY_SUPPORT||this instanceof i?"number"==typeof t?u(this,t):function(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");var o;return o=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),i.TYPED_ARRAY_SUPPORT?o.__proto__=i.prototype:o=c(t,o),o}(t,e,r,n):"string"==typeof e?function(t,e){var r=0|f(e),n=s(t,r),o=n.write(e);return o!==r&&(n=n.slice(0,o)),n}(t,e):function(t,e){if(i.isBuffer(e)){var r=0|a(e.length),n=s(t,r);return 0===n.length||e.copy(n,0,0,r),n}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(o=e.length)!=o?s(t,0):c(t,e);if("Buffer"===e.type&&Array.isArray(e.data))return c(t,e.data)}var o;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}(this,t,e,r):new i(t,e,r)}function a(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function s(t,e){var r;return i.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(e)).__proto__=i.prototype:(null===(r=t)&&(r=new i(e)),r.length=e),r}function u(t,e){var r=s(t,e<0?0:0|a(e));if(!i.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)r[n]=0;return r}function c(t,e){for(var r=e.length<0?0:0|a(e.length),n=s(t,r),o=0;o<r;o+=1)n[o]=255&e[o];return n}function l(t,e){var r;e=e||1/0;for(var n=t.length,o=null,i=[],a=0;a<n;++a){if((r=t.charCodeAt(a))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function f(t){return i.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t),0===t.length?0:l(t).length)}i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),i.prototype.write=function(t,e,r){void 0===e||void 0===r&&"string"==typeof e?(r=this.length,e=0):isFinite(e)&&(e|=0,isFinite(r)?r|=0:r=void 0);var n=this.length-e;if((void 0===r||r>n)&&(r=n),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(t,e,r,n){return function(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}(l(e,t.length-r),t,r,n)}(this,t,e,r)},i.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),i.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=i.prototype;else{var o=e-t;r=new i(o,void 0);for(var a=0;a<o;++a)r[a]=this[a+t]}return r},i.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,a=n-r;if(this===t&&r<e&&e<n)for(o=a-1;o>=0;--o)t[o+e]=this[o+r];else if(a<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<a;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+a),e);return a},i.prototype.fill=function(t,e,r){if("string"==typeof t){if("string"==typeof e?(e=0,r=this.length):"string"==typeof r&&(r=this.length),1===t.length){var n=t.charCodeAt(0);n<256&&(t=n)}}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var a=i.isBuffer(t)?t:new i(t),s=a.length;for(o=0;o<r-e;++o)this[o+e]=a[o%s]}return this},i.concat=function(t,e){if(!n(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s(null,0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var o=u(null,e),a=0;for(r=0;r<t.length;++r){var c=t[r];if(!i.isBuffer(c))throw new TypeError('"list" argument must be an Array of Buffers');c.copy(o,a),a+=c.length}return o},i.byteLength=f,i.prototype._isBuffer=!0,i.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.exports=i},Z92M:function(t,e){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},aZ40:function(t,e,r){var n,o,i=r("Wogr");i.alloc?(n=i.alloc(512),o=i.alloc(256)):(n=new i(512),o=new i(256)),function(){for(var t=1,e=0;e<255;e++)n[e]=t,o[t]=e,256&(t<<=1)&&(t^=285);for(e=255;e<512;e++)n[e]=n[e-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return o[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[o[t]+o[e]]}},"e/Dd":function(t,e){var r,n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return n[t]},e.getBCHDigit=function(t){for(var e=0;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');r=t},e.isKanjiModeEnabled=function(){return void 0!==r},e.toSJIS=function(t){return r(t)}},e6BP:function(t,e){function r(){this.buffer=[],this.length=0}r.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=r},eQOe:function(t,e){function r(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2==0;case e.Patterns.PATTERN001:return r%2==0;case e.Patterns.PATTERN010:return n%3==0;case e.Patterns.PATTERN011:return(r+n)%3==0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case e.Patterns.PATTERN101:return r*n%2+r*n%3==0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){for(var e=t.size,r=0,n=0,o=0,i=null,a=null,s=0;s<e;s++){n=o=0,i=a=null;for(var u=0;u<e;u++){var c=t.get(s,u);c===i?n++:(n>=5&&(r+=n-5+3),i=c,n=1),(c=t.get(u,s))===a?o++:(o>=5&&(r+=o-5+3),a=c,o=1)}n>=5&&(r+=n-5+3),o>=5&&(r+=o-5+3)}return r},e.getPenaltyN2=function(t){for(var e=t.size,r=0,n=0;n<e-1;n++)for(var o=0;o<e-1;o++){var i=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==i&&0!==i||r++}return 3*r},e.getPenaltyN3=function(t){for(var e=t.size,r=0,n=0,o=0,i=0;i<e;i++){n=o=0;for(var a=0;a<e;a++)n=n<<1&2047|t.get(i,a),a>=10&&(1488===n||93===n)&&r++,o=o<<1&2047|t.get(a,i),a>=10&&(1488===o||93===o)&&r++}return 40*r},e.getPenaltyN4=function(t){for(var e=0,r=t.data.length,n=0;n<r;n++)e+=t.data[n];return 10*Math.abs(Math.ceil(100*e/r/5)-10)},e.applyMask=function(t,e){for(var n=e.size,o=0;o<n;o++)for(var i=0;i<n;i++)e.isReserved(i,o)||e.xor(i,o,r(t,i,o))},e.getBestMask=function(t,r){for(var n=Object.keys(e.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),e.applyMask(a,t);var s=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),s<i&&(i=s,o=a)}return o}},ekOh:function(t,e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(n){return r}}},hcqN:function(t,e,r){"use strict";r.r(e),r.d(e,"StationDetailsModule",function(){return P});var n=r("ofXK"),o=r("pDmh"),i=r("fXoL"),a=r("XiUz"),s=r("1mNh"),u=r("3Pt+");let c=(()=>{class t{constructor(t){this.formGroupDirective=t}set data(t){t&&(this.formGroupDirective.form.patchValue(t),this.formGroupDirective.form.markAsPristine())}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(u.f))},t.\u0275dir=i.Hb({type:t,selectors:[["","iresaConnectForm",""]],inputs:{data:["iresaConnectForm","data"]}}),t})();var l=r("Wp6s"),f=r("kmnG"),h=r("qFsG"),d=r("bTqV");let g=(()=>{class t{constructor(t,e){this.fb=t,this.stations=e,this.buildForm()}ngOnInit(){}buildForm(){this.form=this.fb.group({name:[""],address:[""],city:[""],state:[""],zipCode:[""],secretCode:[""]})}save(){this.stations.updateStationDetails(this.form.value)}resetSecretCode(){this.form.get("secretCode").setValue(Object(s.i)(12))}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(u.b),i.Mb(o.p))},t.\u0275cmp=i.Gb({type:t,selectors:[["iresa-portal-station-form"]],inputs:{data:"data"},decls:28,vars:2,consts:[[1,"station-details",3,"formGroup","iresaConnectForm"],["fxLayout","column"],["fxFlex","grow"],["matInput","","placeholder","Name","formControlName","name"],["matInput","","placeholder","Address","formControlName","address"],["fxLayout","row wrap","fxLayoutGap","5px","fxLayoutAlign","start center"],["fxFlex",""],["matInput","","placeholder","City","formControlName","city"],["matInput","","placeholder","State","formControlName","state"],["matInput","","placeholder","Zip Code","formControlName","zipCode"],["fxLayout","row","fxLayoutGap","5px","fxLayoutAlign","start center"],["fxFlex","90"],["matInput","","placeholder","Secret Code","formControlName","secretCode"],["align","start"],["fxFlex","","mat-button","","color","primary",3,"click"],[1,"form-action"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(i.Sb(0,"form",0),i.Sb(1,"mat-card"),i.Sb(2,"div",1),i.Sb(3,"div"),i.Sb(4,"mat-form-field",2),i.Nb(5,"input",3),i.Rb(),i.Rb(),i.Sb(6,"div"),i.Sb(7,"mat-form-field",2),i.Nb(8,"input",4),i.Rb(),i.Rb(),i.Sb(9,"div"),i.Sb(10,"div",5),i.Sb(11,"mat-form-field",6),i.Nb(12,"input",7),i.Rb(),i.Sb(13,"mat-form-field",6),i.Nb(14,"input",8),i.Rb(),i.Sb(15,"mat-form-field",6),i.Nb(16,"input",9),i.Rb(),i.Rb(),i.Rb(),i.Sb(17,"div"),i.Sb(18,"div",10),i.Sb(19,"mat-form-field",11),i.Nb(20,"input",12),i.Sb(21,"mat-hint",13),i.Cc(22,"Click Save to reset Secret Key"),i.Rb(),i.Rb(),i.Sb(23,"button",14),i.ac("click",function(){return e.resetSecretCode()}),i.Cc(24," Reset "),i.Rb(),i.Rb(),i.Rb(),i.Sb(25,"div",15),i.Sb(26,"button",16),i.ac("click",function(){return e.save()}),i.Cc(27,"Save"),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&t&&i.kc("formGroup",e.form)("iresaConnectForm",e.data)},directives:[u.p,u.k,u.f,c,l.a,a.c,f.b,a.a,h.a,u.a,u.j,u.e,a.d,a.b,f.e,d.b],styles:[".station-details[_ngcontent-%COMP%]   .form-action[_ngcontent-%COMP%]{margin-top:10px}"],changeDetection:0}),t})();var p=r("0IaG"),v=r("0FX9");const m=["qrcElement"];let b=(()=>{class t{constructor(t,e){this.renderer=t,this.platformId=e,this.colordark="",this.colorlight="",this.level="",this.hidetitle=!1,this.size=0,this.usesvg=!1,this.allowEmptyString=!1,this.qrdata="",this.colorDark="#000000ff",this.colorLight="#ffffffff",this.cssClass="qrcode",this.elementType="canvas",this.errorCorrectionLevel="M",this.margin=4,this.scale=4,this.width=10,""!==this.colordark&&console.warn("[angularx-qrcode] colordark is deprecated, use colorDark."),""!==this.colorlight&&console.warn("[angularx-qrcode] colorlight is deprecated, use colorLight."),""!==this.level&&console.warn("[angularx-qrcode] level is deprecated, use errorCorrectionLevel."),!1!==this.hidetitle&&console.warn("[angularx-qrcode] hidetitle is deprecated."),0!==this.size&&console.warn("[angularx-qrcode] size is deprecated, use `width`. Defaults to 10."),!1!==this.usesvg&&console.warn("[angularx-qrcode] usesvg is deprecated, use [elementType]=\"'svg'\".")}ngOnChanges(){this.createQRCode()}isValidQrCodeText(t){return!1===this.allowEmptyString?!(void 0===t||""===t||"null"===t||null===t):!(void 0===t)}toDataURL(){return new Promise((t,e)=>{Object(v.toDataURL)(this.qrdata,{color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,version:this.version,width:this.width},(r,n)=>{r?e(r):t(n)})})}toCanvas(t){return new Promise((e,r)=>{Object(v.toCanvas)(t,this.qrdata,{color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,version:this.version,width:this.width},t=>{t?r(t):e("success")})})}toSVG(){return new Promise((t,e)=>{Object(v.toString)(this.qrdata,{color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,type:"svg",version:this.version,width:this.width},(r,n)=>{r?e(r):t(n)})})}renderElement(t){for(const e of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,e);this.renderer.appendChild(this.qrcElement.nativeElement,t)}createQRCode(){this.version&&this.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),this.version=40):this.version&&this.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),this.version=1):void 0!==this.version&&isNaN(this.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),this.version=void 0);try{if(!this.isValidQrCodeText(this.qrdata))throw new Error('[angularx-qrcode] Field `qrdata` is empty, set`allowEmptyString="true"` to overwrite this behaviour.');let t;switch(this.elementType){case"canvas":t=this.renderer.createElement("canvas"),this.toCanvas(t).then(()=>{this.renderElement(t)}).catch(t=>{console.error("[angularx-qrcode] canvas error: ",t)});break;case"svg":t=this.renderer.createElement("svg","svg"),this.toSVG().then(e=>{t.innerHTML=e,this.renderer.setAttribute(t,"height",""+this.width),this.renderer.setAttribute(t,"width",""+this.width),this.renderElement(t)}).catch(t=>{console.error("[angularx-qrcode] svg error: ",t)});break;case"url":case"img":default:t=this.renderer.createElement("img"),this.toDataURL().then(e=>{t.setAttribute("src",e),this.renderElement(t)}).catch(t=>{console.error("[angularx-qrcode] img/url error: ",t)})}}catch(t){console.error("[angularx-qrcode] Error generating QR Code: ",t.message)}}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(i.F),i.Mb(i.C))},t.\u0275cmp=i.Gb({type:t,selectors:[["qrcode"]],viewQuery:function(t,e){if(1&t&&i.xc(m,!0),2&t){let t;i.pc(t=i.bc())&&(e.qrcElement=t.first)}},inputs:{colordark:"colordark",colorlight:"colorlight",level:"level",hidetitle:"hidetitle",size:"size",usesvg:"usesvg",allowEmptyString:"allowEmptyString",qrdata:"qrdata",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",margin:"margin",scale:"scale",width:"width",version:"version"},features:[i.zb],decls:2,vars:2,consts:[["qrcElement",""]],template:function(t,e){1&t&&i.Nb(0,"div",null,0),2&t&&i.Db(e.cssClass)},encapsulation:2,changeDetection:0}),t})(),w=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},providers:[]}),t})(),y=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){}onNoClick(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(p.g),i.Mb(p.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["iresa-portal-qr-code-dialog"]],decls:2,vars:3,consts:[["mat-dialog-content",""],[3,"qrdata","size","level"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Nb(1,"qrcode",1),i.Rb()),2&t&&(i.Bb(1),i.kc("qrdata",e.data.code)("size",256)("level","M"))},directives:[p.e,b],styles:[""],changeDetection:0}),t})(),E=(()=>{class t{constructor(t){this.dialog=t}ngOnInit(){}openDialog(){this.dialog.open(y,{width:"auto",height:"auto",data:{code:this.code}})}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(p.b))},t.\u0275cmp=i.Gb({type:t,selectors:[["iresa-portal-qr-code"]],inputs:{code:"code"},decls:7,vars:3,consts:[["fxLayout","column","fxLayoutAlign","center center"],[3,"qrdata","size","level"],["mat-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(i.Sb(0,"mat-card"),i.Sb(1,"div",0),i.Sb(2,"p"),i.Cc(3," Scan QR code below "),i.Rb(),i.Nb(4,"qrcode",1),i.Sb(5,"button",2),i.ac("click",function(){return e.openDialog()}),i.Cc(6," Click here to zoom in "),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.Bb(4),i.kc("qrdata",e.code)("size",100)("level","M"))},directives:[l.a,a.c,a.b,b,d.b],styles:[""],changeDetection:0}),t})();function C(t,e){if(1&t&&(i.Sb(0,"div"),i.Sb(1,"h3"),i.Cc(2,"Station Details"),i.Rb(),i.Sb(3,"div",1),i.Sb(4,"div",2),i.Nb(5,"iresa-portal-station-form",3),i.Rb(),i.Sb(6,"div",4),i.Nb(7,"iresa-portal-qr-code",5),i.Rb(),i.Rb(),i.Rb()),2&t){const t=e.ngIf;i.Bb(5),i.kc("data",t),i.Bb(2),i.kc("code",t.secretCode)}}let R=(()=>{class t{constructor(t){this.stations=t}ngOnInit(){}get stationDetails$(){return this.stations.stationDetails$}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(o.p))},t.\u0275cmp=i.Gb({type:t,selectors:[["iresa-portal-station-details"]],decls:2,vars:3,consts:[[4,"ngIf"],["fxLayout","row","fxLayoutGap","15px"],["fxFlex","65"],[3,"data"],["fxFlex",""],[3,"code"]],template:function(t,e){1&t&&(i.Bc(0,C,8,2,"div",0),i.fc(1,"async")),2&t&&i.kc("ngIf",i.gc(1,1,e.stationDetails$))},directives:[n.k,a.c,a.d,a.a,g,E],pipes:[n.b],styles:[""],changeDetection:0}),t})();var A=r("tyNb"),B=r("YUcS"),S=r("u47x");let P=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},providers:[o.n],imports:[[n.c,l.d,f.d,h.b,d.c,p.f,B.a,o.o,s.a,w,S.a,A.i.forChild([{path:"",resolve:{data:o.n},component:R}])]]}),t})()},jSPq:function(t,e,r){var n=r("Wogr"),o=r("JzKC");function i(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},i.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new n(this.degree);e.fill(0);var r=n.concat([t,e],t.length+this.degree),i=o.mod(r,this.genPoly),a=this.degree-i.length;if(a>0){var s=new n(this.degree);return s.fill(0),i.copy(s,a),s}return i},t.exports=i},"kk9/":function(t,e,r){var n=r("e/Dd").getSymbolSize;e.getPositions=function(t){var e=n(t);return[[0,0],[e-7,0],[0,e-7]]}},lYJp:function(t,e,r){var n=r("e/Dd"),o=n.getBCHDigit(1335);e.getEncodedBits=function(t,e){for(var r=t.bit<<3|e,i=r<<10;n.getBCHDigit(i)-o>=0;)i^=1335<<n.getBCHDigit(i)-o;return 21522^(r<<10|i)}},nZSm:function(t,e,r){var n=r("u/Db"),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=n.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*o.indexOf(this.data[e]);r+=o.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},qmMu:function(t,e,r){var n=r("Wogr"),o=r("e/Dd"),i=r("ekOh"),a=r("e6BP"),s=r("V35J"),u=r("1sBl"),c=r("kk9/"),l=r("eQOe"),f=r("NPxG"),h=r("jSPq"),d=r("yKow"),g=r("lYJp"),p=r("u/Db"),v=r("vvrf"),m=r("7uVY");function b(t,e,r){var n,o,i=t.size,a=g.getEncodedBits(e,r);for(n=0;n<15;n++)t.set(n<6?n:n<8?n+1:i-15+n,8,o=1==(a>>n&1),!0),t.set(8,n<8?i-n-1:n<9?15-n-1+1:15-n-1,o,!0);t.set(i-8,8,1,!0)}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");var r,g,w=i.M;return void 0!==e&&(w=i.from(e.errorCorrectionLevel,i.M),r=d.from(e.version),g=l.from(e.maskPattern),e.toSJISFunc&&o.setToSJISFunction(e.toSJISFunc)),function(t,e,r,i){var g;if(m(t))g=v.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var w=e;if(!w){var y=v.rawSplit(t);w=d.getBestVersionForData(y,r)}g=v.fromString(t,w||40)}var E=d.getBestVersionForData(g,r);if(!E)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<E)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+E+".\n")}else e=E;var C=function(t,e,r){var i=new a;r.forEach(function(e){i.put(e.mode.bit,4),i.put(e.getLength(),p.getCharCountIndicator(e.mode,t)),e.write(i)});var s=8*(o.getSymbolTotalCodewords(t)-f.getTotalCodewordsCount(t,e));for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);for(var u=(s-i.getLengthInBits())/8,c=0;c<u;c++)i.put(c%2?17:236,8);return function(t,e,r){for(var i=o.getSymbolTotalCodewords(e),a=i-f.getTotalCodewordsCount(e,r),s=f.getBlocksCount(e,r),u=s-i%s,c=Math.floor(i/s),l=Math.floor(a/s),d=l+1,g=c-l,p=new h(g),v=0,m=new Array(s),b=new Array(s),w=0,y=new n(t.buffer),E=0;E<s;E++){var C=E<u?l:d;m[E]=y.slice(v,v+C),b[E]=p.encode(m[E]),v+=C,w=Math.max(w,C)}var R,A,B=new n(i),S=0;for(R=0;R<w;R++)for(A=0;A<s;A++)R<m[A].length&&(B[S++]=m[A][R]);for(R=0;R<g;R++)for(A=0;A<s;A++)B[S++]=b[A][R];return B}(i,t,e)}(e,r,g),R=o.getSymbolSize(e),A=new s(R);return function(t,e){for(var r=t.size,n=c.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],s=-1;s<=7;s++)if(!(i+s<=-1||r<=i+s))for(var u=-1;u<=7;u++)a+u<=-1||r<=a+u||t.set(i+s,a+u,s>=0&&s<=6&&(0===u||6===u)||u>=0&&u<=6&&(0===s||6===s)||s>=2&&s<=4&&u>=2&&u<=4,!0)}(A,e),function(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2==0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}(A),function(t,e){for(var r=u.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var s=-2;s<=2;s++)t.set(o+a,i+s,-2===a||2===a||-2===s||2===s||0===a&&0===s,!0)}(A,e),b(A,r,0),e>=7&&function(t,e){for(var r,n,o,i=t.size,a=d.getEncodedBits(e),s=0;s<18;s++)r=Math.floor(s/3),t.set(r,n=s%3+i-8-3,o=1==(a>>s&1),!0),t.set(n,r,o,!0)}(A,e),function(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,s=r-1;s>0;s-=2)for(6===s&&s--;;){for(var u=0;u<2;u++)if(!t.isReserved(o,s-u)){var c=!1;a<e.length&&(c=1==(e[a]>>>i&1)),t.set(o,s-u,c),-1==--i&&(a++,i=7)}if((o+=n)<0||r<=o){o-=n,n=-n;break}}}(A,C),isNaN(i)&&(i=l.getBestMask(A,b.bind(null,A,r))),l.applyMask(i,A),b(A,r,i),{modules:A,version:e,errorCorrectionLevel:r,maskPattern:i,segments:g}}(t,r,w,g)}},"u/Db":function(t,e,r){var n=r("J6Nv"),o=r("BCVQ");e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!n.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(n){return r}}},vvrf:function(t,e,r){var n=r("u/Db"),o=r("3X7Y"),i=r("nZSm"),a=r("AZa5"),s=r("Lzq4"),u=r("BCVQ"),c=r("e/Dd"),l=r("ELBg");function f(t){return unescape(encodeURIComponent(t)).length}function h(t,e,r){for(var n,o=[];null!==(n=t.exec(r));)o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function d(t){var e,r,o=h(u.NUMERIC,n.NUMERIC,t),i=h(u.ALPHANUMERIC,n.ALPHANUMERIC,t);return c.isKanjiModeEnabled()?(e=h(u.BYTE,n.BYTE,t),r=h(u.KANJI,n.KANJI,t)):(e=h(u.BYTE_KANJI,n.BYTE,t),r=[]),o.concat(i,e,r).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function g(t,e){switch(e){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return i.getBitsLength(t);case n.KANJI:return s.getBitsLength(t);case n.BYTE:return a.getBitsLength(t)}}function p(t,e){var r,u=n.getBestModeForData(t);if((r=n.from(e,u))!==n.BYTE&&r.bit<u.bit)throw new Error('"'+t+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(u));switch(r!==n.KANJI||c.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new o(t);case n.ALPHANUMERIC:return new i(t);case n.KANJI:return new s(t);case n.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(p(e,null)):e.data&&t.push(p(e.data,e.mode)),t},[])},e.fromString=function(t,r){for(var o=function(t,e){for(var r={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var s=t[a],u=[],c=0;c<s.length;c++){var l=s[c],f=""+a+c;u.push(f),r[f]={node:l,lastCount:0},o[f]={};for(var h=0;h<i.length;h++){var d=i[h];r[d]&&r[d].node.mode===l.mode?(o[d][f]=g(r[d].lastCount+l.length,l.mode)-g(r[d].lastCount,l.mode),r[d].lastCount+=l.length):(r[d]&&(r[d].lastCount=l.length),o[d][f]=g(l.length,l.mode)+4+n.getCharCountIndicator(l.mode,e))}}i=u}for(h=0;h<i.length;h++)o[i[h]].end=0;return{map:o,table:r}}(function(t){for(var e=[],r=0;r<t.length;r++){var o=t[r];switch(o.mode){case n.NUMERIC:e.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:e.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:e.push([o,{data:o.data,mode:n.BYTE,length:f(o.data)}]);break;case n.BYTE:e.push([{data:o.data,mode:n.BYTE,length:f(o.data)}])}}return e}(d(t,c.isKanjiModeEnabled())),r),i=l.find_path(o.map,"start","end"),a=[],s=1;s<i.length-1;s++)a.push(o.table[i[s]].node);return e.fromArray(a.reduce(function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[]))},e.rawSplit=function(t){return e.fromArray(d(t,c.isKanjiModeEnabled()))}},yKow:function(t,e,r){var n=r("e/Dd"),o=r("NPxG"),i=r("ekOh"),a=r("u/Db"),s=r("J6Nv"),u=r("7uVY"),c=n.getBCHDigit(7973);function l(t,e){return a.getCharCountIndicator(t,e)+4}function f(t,e){var r=0;return t.forEach(function(t){var n=l(t.mode,e);r+=n+t.getBitsLength()}),r}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!s.isValid(t))throw new Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);var i=8*(n.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e));if(r===a.MIXED)return i;var u=i-l(r,t);switch(r){case a.NUMERIC:return Math.floor(u/10*3);case a.ALPHANUMERIC:return Math.floor(u/11*2);case a.KANJI:return Math.floor(u/13);case a.BYTE:default:return Math.floor(u/8)}},e.getBestVersionForData=function(t,r){var n,o=i.from(r,i.M);if(u(t)){if(t.length>1)return function(t,r){for(var n=1;n<=40;n++)if(f(t,n)<=e.getCapacity(n,r,a.MIXED))return n}(t,o);if(0===t.length)return 1;n=t[0]}else n=t;return function(t,r,n){for(var o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}(n.mode,n.getLength(),o)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var e=t<<12;n.getBCHDigit(e)-c>=0;)e^=7973<<n.getBCHDigit(e)-c;return t<<12|e}}}]);