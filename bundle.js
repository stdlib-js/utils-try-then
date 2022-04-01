// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).trythen=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,a=Object.prototype,o=a.toString,u=a.__defineGetter__,c=a.__defineSetter__,f=a.__lookupGetter__,s=a.__lookupSetter__;var l=function(r,e,t){var n,i,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(f.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,i&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,e,t.get),p&&c&&c.call(r,e,t.set),r},p=i,v=l,g=n()?p:v;var d=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=d;var m=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return b&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,E=y;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},T="function"==typeof Symbol?Symbol.toStringTag:"",O=_,x=T,V=y;var S=j,k=function(r){var e,t,n;if(null==r)return V.call(r);t=r[x],e=O(r,x);try{r[x]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[x]=t:delete r[x],n},I=w()?k:S,A=Boolean.prototype.toString;var F=I,R=function(r){try{return A.call(r),!0}catch(r){return!1}},$=w();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||($?R(r):"[object Boolean]"===F(r)))},C=m,N=M;var B=h,G=function(r){return C(r)||N(r)},L=M;B(G,"isPrimitive",m),B(G,"isObject",L);var Z=G;var W=function(){return new Function("return this;")()},X="object"==typeof self?self:null,z="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof U?U:null;module.exports=Y;var D=Z.isPrimitive,q=W,H=X,J=z,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},rr=Q(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=e,ir=er,ar=tr;var or=function(){return"function"==typeof nr||"object"==typeof ar||"function"==typeof ir};var ur=function(){return/^\s*function\s*([^(]*)/i},cr=ur;h(cr,"REGEXP",ur());var fr=cr,sr=I;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===sr(r)};var pr=function(r){return null!==r&&"object"==typeof r};h(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var vr=pr;var gr=I,dr=fr.REGEXP,hr=function(r){return vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var mr=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return hr(r)?"Buffer":t},br=mr;var wr=mr;var yr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e},Er=function(r){return wr(r).toLowerCase()},jr=or()?Er:yr;var Pr=function(r){return"function"===jr(r)};var _r=function(r){return"string"==typeof r},Tr=String.prototype.valueOf;var Or=I,xr=function(r){try{return Tr.call(r),!0}catch(r){return!1}},Vr=w();var Sr=function(r){return"object"==typeof r&&(r instanceof String||(Vr?xr(r):"[object String]"===Or(r)))},kr=_r,Ir=Sr;var Ar=h,Fr=function(r){return kr(r)||Ir(r)},Rr=Sr;Ar(Fr,"isPrimitive",_r),Ar(Fr,"isObject",Rr);var $r=Fr,Mr=Math.floor;var Cr=function(r){return Mr(r)===r},Nr=Cr;var Br=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Nr(r.length)&&r.length>=0&&r.length<=9007199254740991};var Gr=function(r){return"number"==typeof r},Lr=Number,Zr=Lr.prototype.toString;var Wr=I,Xr=Lr,zr=function(r){try{return Zr.call(r),!0}catch(r){return!1}},Ur=w();var Yr=function(r){return"object"==typeof r&&(r instanceof Xr||(Ur?zr(r):"[object Number]"===Wr(r)))},Dr=Gr,qr=Yr;var Hr=h,Jr=function(r){return Dr(r)||qr(r)},Kr=Yr;Hr(Jr,"isPrimitive",Gr),Hr(Jr,"isObject",Kr);var Qr=Jr,re=Number.POSITIVE_INFINITY,ee=Lr.NEGATIVE_INFINITY,te=re,ne=ee,ie=Cr;var ae=function(r){return r<te&&r>ne&&ie(r)},oe=Qr.isPrimitive,ue=ae;var ce=function(r){return oe(r)&&ue(r)},fe=Qr.isObject,se=ae;var le=function(r){return fe(r)&&se(r.valueOf())},pe=ce,ve=le;var ge=h,de=function(r){return pe(r)||ve(r)},he=le;ge(de,"isPrimitive",ce),ge(de,"isObject",he);var me=de;var be=function(r){return r!=r},we=Qr.isPrimitive,ye=be;var Ee=function(r){return we(r)&&ye(r)},je=Qr.isObject,Pe=be;var _e=function(r){return je(r)&&Pe(r.valueOf())},Te=Ee,Oe=_e;var xe=h,Ve=function(r){return Te(r)||Oe(r)},Se=_e;xe(Ve,"isPrimitive",Ee),xe(Ve,"isObject",Se);var ke=Br,Ie=me.isPrimitive,Ae=$r.isPrimitive,Fe=Ve.isPrimitive;var Re=function(r,e,t){var n,i,a;if(!ke(r)&&!Ae(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ie(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ae(r)){if(!Ae(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Fe(e)){for(a=i;a<n;a++)if(Fe(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},$e=Re,Me=$r.isPrimitive;var Ce=function(r){if(!Me(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ne=$r.isPrimitive;var Be=function(r){if(!Ne(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ge=Ce,Le=Be,Ze=$r.isPrimitive;var We=function(r){return Ze(r)&&r===Le(r)&&r!==Ge(r)},Xe=re,ze=ee;var Ue=function(r){return r==r&&r>ze&&r<Xe},Ye=me.isPrimitive;var De=function(r){return Ye(r)&&r>=0},qe=me.isObject;var He=function(r){return qe(r)&&r.valueOf()>=0},Je=De,Ke=He;var Qe=h,rt=function(r){return Je(r)||Ke(r)},et=He;Qe(rt,"isPrimitive",De),Qe(rt,"isObject",et);var tt=rt.isPrimitive,nt=$r.isPrimitive;var it=function(r,e){var t,n;if(!nt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!tt(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},at=me.isPrimitive,ot=$r.isPrimitive;var ut=function(r,e,t){var n,i;if(!ot(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ot(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!at(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},ct=it,ft=ut;var st=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ft(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ct("0",i):ct("0",i)+r,n&&(r="-"+r)),r},lt=We,pt=Be,vt=Ce,gt=Ue,dt=Qr.isPrimitive,ht=st;var mt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!gt(n)){if(!dt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ht(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ht(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=lt(r.specifier)?pt(t):vt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},bt=$r.isPrimitive,wt=/[-\/\\^$*+?.()|[\]{}]/g;var yt=function(r){var e,t;if(!bt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(wt,"\\$&"):(e=(e=r.substring(1,t)).replace(wt,"\\$&"),r=r[0]+e+r.substring(t))},Et=RegExp.prototype.exec;var jt=I,Pt=function(r){try{return Et.call(r),!0}catch(r){return!1}},_t=w();var Tt=yt,Ot=Pr,xt=$r.isPrimitive,Vt=function(r){return"object"==typeof r&&(r instanceof RegExp||(_t?Pt(r):"[object RegExp]"===jt(r)))};var St=We,kt=Be,It=Ce,At=function(r,e,t){if(!xt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(xt(e))e=Tt(e),e=new RegExp(e,"g");else if(!Vt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!xt(t)&&!Ot(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Ft=Ue,Rt=Qr.isPrimitive,$t=function(r){return Math.abs(r)},Mt=/e\+(\d)$/,Ct=/e-(\d)$/,Nt=/^(\d+)$/,Bt=/^(\d+)e/,Gt=/\.0$/,Lt=/\.0*e/,Zt=/(\..*[^0])0*e/;var Wt=function(r){var e,t,n=parseFloat(r.arg);if(!Ft(n)){if(!Rt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":$t(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=At(t,Zt,"$1e"),t=At(t,Lt,"e"),t=At(t,Gt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=At(t,Mt,"e+0$1"),t=At(t,Ct,"e-0$1"),r.alternate&&(t=At(t,Nt,"$1."),t=At(t,Bt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=St(r.specifier)?kt(t):It(t)},Xt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var zt=it;var Ut=$r.isPrimitive,Yt=$e,Dt=be,qt=mt,Ht=Wt,Jt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Xt.exec(r);a;)(t=r.slice(e,Xt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Xt.lastIndex,a=Xt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Kt=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+zt(" ",n):zt(" ",n)+r},Qt=st,rn=String.fromCharCode;var en=function(r){var e,t,n,i,a,o,u,c,f;if(!Ut(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=Jt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Ut(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Yt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Dt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Dt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=qt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Dt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Dt(a)?String(n.arg):rn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Ht(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Qt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Kt(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},tn=Pr,nn=en;return function(r,e){if(!tn(r))throw new TypeError(nn("invalid argument. First argument must be a function. Value: `%s`.",r));if(!tn(e))throw new TypeError(nn("invalid argument. Second argument must be a function. Value: `%s`.",e));try{return r()}catch(r){return e(r)}}}));
//# sourceMappingURL=bundle.js.map
