var TI=(i,a)=>()=>(a||i((a={exports:{}}).exports,a),a.exports);var _j=TI((Aj,Sk)=>{var pa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hE(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function MI(i){var a=i.default;if(typeof a=="function"){var l=function(){return a.apply(this,arguments)};l.prototype=a.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(i).forEach(function(h){var p=Object.getOwnPropertyDescriptor(i,h);Object.defineProperty(l,h,p.get?p:{enumerable:!0,get:function(){return i[h]}})}),l}var xv={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(i,a){(function(){var l,h="4.17.21",p=200,k="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",_="Expected a function",E="Invalid `variable` option passed into `_.template`",A="__lodash_hash_undefined__",T=500,I="__lodash_placeholder__",N=1,D=2,z=4,Z=1,ae=2,we=1,ee=2,q=4,ie=8,fe=16,_e=32,Ie=64,de=128,le=256,ye=512,Pe=30,Le="...",$=800,Ue=16,Me=1,Je=2,Xe=3,He=1/0,ut=9007199254740991,An=17976931348623157e292,jn=0/0,zt=4294967295,kt=zt-1,ni=zt>>>1,Vn=[["ary",de],["bind",we],["bindKey",ee],["curry",ie],["curryRight",fe],["flip",ye],["partial",_e],["partialRight",Ie],["rearg",le]],Q="[object Arguments]",ve="[object Array]",De="[object AsyncFunction]",ne="[object Boolean]",ot="[object Date]",$e="[object DOMException]",nt="[object Error]",V="[object Function]",G="[object GeneratorFunction]",re="[object Map]",ue="[object Number]",ge="[object Null]",Se="[object Object]",Be="[object Promise]",xe="[object Proxy]",Te="[object RegExp]",ke="[object Set]",Ve="[object String]",We="[object Symbol]",Fe="[object Undefined]",qe="[object WeakMap]",ze="[object WeakSet]",gt="[object ArrayBuffer]",it="[object DataView]",Kt="[object Float32Array]",Nt="[object Float64Array]",on="[object Int8Array]",fr="[object Int16Array]",Pi="[object Int32Array]",Ft="[object Uint8Array]",$n="[object Uint8ClampedArray]",Nn="[object Uint16Array]",Xi="[object Uint32Array]",Nc=/\b__p \+= '';/g,Th=/\b(__p \+=) '' \+/g,pd=/(__e\(.*?\)|\b__t\)) \+\n'';/g,md=/&(?:amp|lt|gt|quot|#39);/g,ht=/[&<>"']/g,Yr=RegExp(md.source),Ta=RegExp(ht.source),Mh=/<%-([\s\S]+?)%>/g,Ih=/<%([\s\S]+?)%>/g,Ho=/<%=([\s\S]+?)%>/g,Ph=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gr=/^\w*$/,Oc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ma=/[\\^$.*+?()[\]{}|]/g,Nh=RegExp(Ma.source),Ts=/^\s+/,pr=/\s/,Oh=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ms=/\{\n\/\* \[wrapped with (.+)\] \*/,Bh=/,? & /,Lh=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Rh=/[()=,{}\[\]\/\s]/,zh=/\\(\\)?/g,Bc=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,bd=/\w*$/,mr=/^[-+]0x[0-9a-f]+$/i,Is=/^0b[01]+$/i,Ps=/^\[object .+?Constructor\]$/,wt=/^0o[0-7]+$/i,Fh=/^(?:0|[1-9]\d*)$/,jh=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ia=/($^)/,Vh=/['\n\r\u2028\u2029\\]/g,Pa="\\ud800-\\udfff",Uh="\\u0300-\\u036f",Wo="\\ufe20-\\ufe2f",$r="\\u20d0-\\u20ff",Lc=Uh+Wo+$r,ii="\\u2700-\\u27bf",Ns="a-z\\xdf-\\xf6\\xf8-\\xff",Hh="\\xac\\xb1\\xd7\\xf7",Wh="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Yh="\\u2000-\\u206f",kd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",br="A-Z\\xc0-\\xd6\\xd8-\\xde",Os="\\ufe0e\\ufe0f",wd=Hh+Wh+Yh+kd,vo="['\u2019]",Bs="["+Pa+"]",Rc="["+wd+"]",kr="["+Lc+"]",Na="\\d+",$h="["+ii+"]",Oa="["+Ns+"]",wr="[^"+Pa+wd+Na+ii+Ns+br+"]",zc="\\ud83c[\\udffb-\\udfff]",_d="(?:"+kr+"|"+zc+")",Ba="[^"+Pa+"]",Yo="(?:\\ud83c[\\udde6-\\uddff]){2}",Fc="[\\ud800-\\udbff][\\udc00-\\udfff]",Ao="["+br+"]",qn="\\u200d",vd="(?:"+Oa+"|"+wr+")",Ad="(?:"+Ao+"|"+wr+")",jc="(?:"+vo+"(?:d|ll|m|re|s|t|ve))?",Vc="(?:"+vo+"(?:D|LL|M|RE|S|T|VE))?",qr=_d+"?",Cd="["+Os+"]?",Uc="(?:"+qn+"(?:"+[Ba,Yo,Fc].join("|")+")"+Cd+qr+")*",yd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ot="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Hc=Cd+qr+Uc,Wc="(?:"+[$h,Yo,Fc].join("|")+")"+Hc,xd="(?:"+[Ba+kr+"?",kr,Yo,Fc,Bs].join("|")+")",Ls=RegExp(vo,"g"),Yc=RegExp(kr,"g"),$o=RegExp(zc+"(?="+zc+")|"+xd+Hc,"g"),Ed=RegExp([Ao+"?"+Oa+"+"+jc+"(?="+[Rc,Ao,"$"].join("|")+")",Ad+"+"+Vc+"(?="+[Rc,Ao+vd,"$"].join("|")+")",Ao+"?"+vd+"+"+jc,Ao+"+"+Vc,Ot,yd,Na,Wc].join("|"),"g"),$c=RegExp("["+qn+Pa+Lc+Os+"]"),qh=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Dd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Gh=-1,tn={};tn[Kt]=tn[Nt]=tn[on]=tn[fr]=tn[Pi]=tn[Ft]=tn[$n]=tn[Nn]=tn[Xi]=!0,tn[Q]=tn[ve]=tn[gt]=tn[ne]=tn[it]=tn[ot]=tn[nt]=tn[V]=tn[re]=tn[ue]=tn[Se]=tn[Te]=tn[ke]=tn[Ve]=tn[qe]=!1;var rn={};rn[Q]=rn[ve]=rn[gt]=rn[it]=rn[ne]=rn[ot]=rn[Kt]=rn[Nt]=rn[on]=rn[fr]=rn[Pi]=rn[re]=rn[ue]=rn[Se]=rn[Te]=rn[ke]=rn[Ve]=rn[We]=rn[Ft]=rn[$n]=rn[Nn]=rn[Xi]=!0,rn[nt]=rn[V]=rn[qe]=!1;var Kh={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Sd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},La={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ra={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Qh=parseFloat,Zh=parseInt,Td=typeof pa=="object"&&pa&&pa.Object===Object&&pa,Gr=typeof self=="object"&&self&&self.Object===Object&&self,wn=Td||Gr||Function("return this")(),qc=a&&!a.nodeType&&a,qo=qc&&!0&&i&&!i.nodeType&&i,Gc=qo&&qo.exports===qc,za=Gc&&Td.process,_i=function(){try{var J=qo&&qo.require&&qo.require("util").types;return J||za&&za.binding&&za.binding("util")}catch{}}(),Kc=_i&&_i.isArrayBuffer,Qc=_i&&_i.isDate,Md=_i&&_i.isMap,Rs=_i&&_i.isRegExp,Zc=_i&&_i.isSet,Jc=_i&&_i.isTypedArray;function oi(J,oe,ce){switch(ce.length){case 0:return J.call(oe);case 1:return J.call(oe,ce[0]);case 2:return J.call(oe,ce[0],ce[1]);case 3:return J.call(oe,ce[0],ce[1],ce[2])}return J.apply(oe,ce)}function Jh(J,oe,ce,Ge){for(var ft=-1,Bt=J==null?0:J.length;++ft<Bt;){var On=J[ft];oe(Ge,On,ce(On),J)}return Ge}function ui(J,oe){for(var ce=-1,Ge=J==null?0:J.length;++ce<Ge&&oe(J[ce],ce,J)!==!1;);return J}function Id(J,oe){for(var ce=J==null?0:J.length;ce--&&oe(J[ce],ce,J)!==!1;);return J}function Fa(J,oe){for(var ce=-1,Ge=J==null?0:J.length;++ce<Ge;)if(!oe(J[ce],ce,J))return!1;return!0}function eo(J,oe){for(var ce=-1,Ge=J==null?0:J.length,ft=0,Bt=[];++ce<Ge;){var On=J[ce];oe(On,ce,J)&&(Bt[ft++]=On)}return Bt}function _r(J,oe){var ce=J==null?0:J.length;return!!ce&&Qr(J,oe,0)>-1}function zs(J,oe,ce){for(var Ge=-1,ft=J==null?0:J.length;++Ge<ft;)if(ce(oe,J[Ge]))return!0;return!1}function sn(J,oe){for(var ce=-1,Ge=J==null?0:J.length,ft=Array(Ge);++ce<Ge;)ft[ce]=oe(J[ce],ce,J);return ft}function to(J,oe){for(var ce=-1,Ge=oe.length,ft=J.length;++ce<Ge;)J[ft+ce]=oe[ce];return J}function Fs(J,oe,ce,Ge){var ft=-1,Bt=J==null?0:J.length;for(Ge&&Bt&&(ce=J[++ft]);++ft<Bt;)ce=oe(ce,J[ft],ft,J);return ce}function Kr(J,oe,ce,Ge){var ft=J==null?0:J.length;for(Ge&&ft&&(ce=J[--ft]);ft--;)ce=oe(ce,J[ft],ft,J);return ce}function ja(J,oe){for(var ce=-1,Ge=J==null?0:J.length;++ce<Ge;)if(oe(J[ce],ce,J))return!0;return!1}var Pd=Co("length");function Nd(J){return J.split("")}function Od(J){return J.match(Lh)||[]}function Va(J,oe,ce){var Ge;return ce(J,function(ft,Bt,On){if(oe(ft,Bt,On))return Ge=Bt,!1}),Ge}function Ua(J,oe,ce,Ge){for(var ft=J.length,Bt=ce+(Ge?1:-1);Ge?Bt--:++Bt<ft;)if(oe(J[Bt],Bt,J))return Bt;return-1}function Qr(J,oe,ce){return oe===oe?nn(J,oe,ce):Ua(J,Ha,ce)}function Xh(J,oe,ce,Ge){for(var ft=ce-1,Bt=J.length;++ft<Bt;)if(Ge(J[ft],oe))return ft;return-1}function Ha(J){return J!==J}function Xc(J,oe){var ce=J==null?0:J.length;return ce?Zr(J,oe)/ce:jn}function Co(J){return function(oe){return oe==null?l:oe[J]}}function vr(J){return function(oe){return J==null?l:J[oe]}}function Bd(J,oe,ce,Ge,ft){return ft(J,function(Bt,On,jt){ce=Ge?(Ge=!1,Bt):oe(ce,Bt,On,jt)}),ce}function ef(J,oe){var ce=J.length;for(J.sort(oe);ce--;)J[ce]=J[ce].value;return J}function Zr(J,oe){for(var ce,Ge=-1,ft=J.length;++Ge<ft;){var Bt=oe(J[Ge]);Bt!==l&&(ce=ce===l?Bt:ce+Bt)}return ce}function js(J,oe){for(var ce=-1,Ge=Array(J);++ce<J;)Ge[ce]=oe(ce);return Ge}function tf(J,oe){return sn(oe,function(ce){return[ce,J[ce]]})}function el(J){return J&&J.slice(0,il(J)+1).replace(Ts,"")}function vi(J){return function(oe){return J(oe)}}function Wa(J,oe){return sn(oe,function(ce){return J[ce]})}function Jr(J,oe){return J.has(oe)}function Ld(J,oe){for(var ce=-1,Ge=J.length;++ce<Ge&&Qr(oe,J[ce],0)>-1;);return ce}function Ya(J,oe){for(var ce=J.length;ce--&&Qr(oe,J[ce],0)>-1;);return ce}function Rd(J,oe){for(var ce=J.length,Ge=0;ce--;)J[ce]===oe&&++Ge;return Ge}var zd=vr(Kh),nf=vr(Sd);function Fd(J){return"\\"+Ra[J]}function jd(J,oe){return J==null?l:J[oe]}function yo(J){return $c.test(J)}function of(J){return qh.test(J)}function rf(J){for(var oe,ce=[];!(oe=J.next()).done;)ce.push(oe.value);return ce}function $a(J){var oe=-1,ce=Array(J.size);return J.forEach(function(Ge,ft){ce[++oe]=[ft,Ge]}),ce}function tl(J,oe){return function(ce){return J(oe(ce))}}function xo(J,oe){for(var ce=-1,Ge=J.length,ft=0,Bt=[];++ce<Ge;){var On=J[ce];(On===oe||On===I)&&(J[ce]=I,Bt[ft++]=ce)}return Bt}function Vs(J){var oe=-1,ce=Array(J.size);return J.forEach(function(Ge){ce[++oe]=Ge}),ce}function Us(J){var oe=-1,ce=Array(J.size);return J.forEach(function(Ge){ce[++oe]=[Ge,Ge]}),ce}function nn(J,oe,ce){for(var Ge=ce-1,ft=J.length;++Ge<ft;)if(J[Ge]===oe)return Ge;return-1}function nl(J,oe,ce){for(var Ge=ce+1;Ge--;)if(J[Ge]===oe)return Ge;return Ge}function no(J){return yo(J)?Ud(J):Pd(J)}function Un(J){return yo(J)?Ai(J):Nd(J)}function il(J){for(var oe=J.length;oe--&&pr.test(J.charAt(oe)););return oe}var Vd=vr(La);function Ud(J){for(var oe=$o.lastIndex=0;$o.test(J);)++oe;return oe}function Ai(J){return J.match($o)||[]}function Wi(J){return J.match(Ed)||[]}var Hd=function J(oe){oe=oe==null?wn:un.defaults(wn.Object(),oe,un.pick(wn,Dd));var ce=oe.Array,Ge=oe.Date,ft=oe.Error,Bt=oe.Function,On=oe.Math,jt=oe.Object,Eo=oe.RegExp,ri=oe.String,Ci=oe.TypeError,io=ce.prototype,Qt=Bt.prototype,Qn=jt.prototype,si=oe["__core-js_shared__"],hi=Qt.toString,It=Qn.hasOwnProperty,Go=0,Hs=function(){var d=/[^.]+$/.exec(si&&si.keys&&si.keys.IE_PROTO||"");return d?"Symbol(src)_1."+d:""}(),qa=Qn.toString,sf=hi.call(jt),af=wn._,ol=Eo("^"+hi.call(It).replace(Ma,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ga=Gc?oe.Buffer:l,Ko=oe.Symbol,Ar=oe.Uint8Array,C=Ga?Ga.allocUnsafe:l,x=tl(jt.getPrototypeOf,jt),P=jt.create,H=Qn.propertyIsEnumerable,me=io.splice,tt=Ko?Ko.isConcatSpreadable:l,hn=Ko?Ko.iterator:l,Cn=Ko?Ko.toStringTag:l,Hn=function(){try{var d=cs(jt,"defineProperty");return d({},"",{}),d}catch{}}(),Qo=oe.clearTimeout!==wn.clearTimeout&&oe.clearTimeout,Ka=Ge&&Ge.now!==wn.Date.now&&Ge.now,yp=oe.setTimeout!==wn.setTimeout&&oe.setTimeout,Wd=On.ceil,Yd=On.floor,cf=jt.getOwnPropertySymbols,$d=Ga?Ga.isBuffer:l,qd=oe.isFinite,yw=io.join,xw=tl(jt.keys,jt),Bn=On.max,fi=On.min,Ew=Ge.now,Dw=oe.parseInt,Xr=On.random,Sw=io.reverse,Gd=cs(oe,"DataView"),rl=cs(oe,"Map"),lf=cs(oe,"Promise"),Qa=cs(oe,"Set"),sl=cs(oe,"WeakMap"),Kd=cs(jt,"create"),Qd=sl&&new sl,Za={},Tw=ls(Gd),xp=ls(rl),Ep=ls(lf),Mw=ls(Qa),Iw=ls(sl),Zd=Ko?Ko.prototype:l,al=Zd?Zd.valueOf:l,Jd=Zd?Zd.toString:l;function R(d){if(vn(d)&&!pt(d)&&!(d instanceof yt)){if(d instanceof gi)return d;if(It.call(d,"__wrapped__"))return bm(d)}return new gi(d)}var Zn=function(){function d(){}return function(f){if(!_n(f))return{};if(P)return P(f);d.prototype=f;var w=new d;return d.prototype=l,w}}();function cl(){}function gi(d,f){this.__wrapped__=d,this.__actions__=[],this.__chain__=!!f,this.__index__=0,this.__values__=l}R.templateSettings={escape:Mh,evaluate:Ih,interpolate:Ho,variable:"",imports:{_:R}},R.prototype=cl.prototype,R.prototype.constructor=R,gi.prototype=Zn(cl.prototype),gi.prototype.constructor=gi;function yt(d){this.__wrapped__=d,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=zt,this.__views__=[]}function Xd(){var d=new yt(this.__wrapped__);return d.__actions__=Ni(this.__actions__),d.__dir__=this.__dir__,d.__filtered__=this.__filtered__,d.__iteratees__=Ni(this.__iteratees__),d.__takeCount__=this.__takeCount__,d.__views__=Ni(this.__views__),d}function Dp(){if(this.__filtered__){var d=new yt(this);d.__dir__=-1,d.__filtered__=!0}else d=this.clone(),d.__dir__*=-1;return d}function Sp(){var d=this.__wrapped__.value(),f=this.__dir__,w=pt(d),S=f<0,O=w?d.length:0,F=am(0,O,this.__views__),U=F.start,K=F.end,te=K-U,pe=S?K:U-1,be=this.__iteratees__,Ee=be.length,je=0,Qe=fi(te,this.__takeCount__);if(!w||!S&&O==te&&Qe==te)return qp(d,this.__actions__);var at=[];e:for(;te--&&je<Qe;){pe+=f;for(var vt=-1,lt=d[pe];++vt<Ee;){var Ct=be[vt],Tt=Ct.iteratee,Ri=Ct.type,ci=Tt(lt);if(Ri==Je)lt=ci;else if(!ci){if(Ri==Me)continue e;break e}}at[je++]=lt}return at}yt.prototype=Zn(cl.prototype),yt.prototype.constructor=yt;function Yi(d){var f=-1,w=d==null?0:d.length;for(this.clear();++f<w;){var S=d[f];this.set(S[0],S[1])}}function Oe(){this.__data__=Kd?Kd(null):{},this.size=0}function dt(d){var f=this.has(d)&&delete this.__data__[d];return this.size-=f?1:0,f}function eu(d){var f=this.__data__;if(Kd){var w=f[d];return w===A?l:w}return It.call(f,d)?f[d]:l}function df(d){var f=this.__data__;return Kd?f[d]!==l:It.call(f,d)}function Zo(d,f){var w=this.__data__;return this.size+=this.has(d)?0:1,w[d]=Kd&&f===l?A:f,this}Yi.prototype.clear=Oe,Yi.prototype.delete=dt,Yi.prototype.get=eu,Yi.prototype.has=df,Yi.prototype.set=Zo;function Do(d){var f=-1,w=d==null?0:d.length;for(this.clear();++f<w;){var S=d[f];this.set(S[0],S[1])}}function Ja(){this.__data__=[],this.size=0}function uf(d){var f=this.__data__,w=nu(f,d);if(w<0)return!1;var S=f.length-1;return w==S?f.pop():me.call(f,w,1),--this.size,!0}function hf(d){var f=this.__data__,w=nu(f,d);return w<0?l:f[w][1]}function ll(d){return nu(this.__data__,d)>-1}function Xa(d,f){var w=this.__data__,S=nu(w,d);return S<0?(++this.size,w.push([d,f])):w[S][1]=f,this}Do.prototype.clear=Ja,Do.prototype.delete=uf,Do.prototype.get=hf,Do.prototype.has=ll,Do.prototype.set=Xa;function Jo(d){var f=-1,w=d==null?0:d.length;for(this.clear();++f<w;){var S=d[f];this.set(S[0],S[1])}}function ff(){this.size=0,this.__data__={hash:new Yi,map:new(rl||Do),string:new Yi}}function tu(d){var f=Ae(this,d).delete(d);return this.size-=f?1:0,f}function Ws(d){return Ae(this,d).get(d)}function Pw(d){return Ae(this,d).has(d)}function gf(d,f){var w=Ae(this,d),S=w.size;return w.set(d,f),this.size+=w.size==S?0:1,this}Jo.prototype.clear=ff,Jo.prototype.delete=tu,Jo.prototype.get=Ws,Jo.prototype.has=Pw,Jo.prototype.set=gf;function Cr(d){var f=-1,w=d==null?0:d.length;for(this.__data__=new Jo;++f<w;)this.add(d[f])}function Nw(d){return this.__data__.set(d,A),this}function Ys(d){return this.__data__.has(d)}Cr.prototype.add=Cr.prototype.push=Nw,Cr.prototype.has=Ys;function So(d){var f=this.__data__=new Do(d);this.size=f.size}function xt(){this.__data__=new Do,this.size=0}function Tp(d){var f=this.__data__,w=f.delete(d);return this.size=f.size,w}function Ow(d){return this.__data__.get(d)}function Bw(d){return this.__data__.has(d)}function Pt(d,f){var w=this.__data__;if(w instanceof Do){var S=w.__data__;if(!rl||S.length<p-1)return S.push([d,f]),this.size=++w.size,this;w=this.__data__=new Jo(S)}return w.set(d,f),this.size=w.size,this}So.prototype.clear=xt,So.prototype.delete=Tp,So.prototype.get=Ow,So.prototype.has=Bw,So.prototype.set=Pt;function Mp(d,f){var w=pt(d),S=!w&&ia(d),O=!w&&!S&&Tr(d),F=!w&&!S&&!O&&oa(d),U=w||S||O||F,K=U?js(d.length,ri):[],te=K.length;for(var pe in d)(f||It.call(d,pe))&&!(U&&(pe=="length"||O&&(pe=="offset"||pe=="parent")||F&&(pe=="buffer"||pe=="byteLength"||pe=="byteOffset")||Dr(pe,te)))&&K.push(pe);return K}function $s(d){var f=d.length;return f?d[is(0,f-1)]:l}function pf(d,f){return yu(Ni(d),yr(f,0,d.length))}function Ip(d){return yu(Ni(d))}function dl(d,f,w){(w!==l&&!ho(d[f],w)||w===l&&!(f in d))&&yi(d,f,w)}function es(d,f,w){var S=d[f];(!(It.call(d,f)&&ho(S,w))||w===l&&!(f in d))&&yi(d,f,w)}function nu(d,f){for(var w=d.length;w--;)if(ho(d[w][0],f))return w;return-1}function Lw(d,f,w,S){return xr(d,function(O,F,U){f(S,O,w(O),U)}),S}function iu(d,f){return d&&Xo(f,ti(f),d)}function Rw(d,f){return d&&Xo(f,Di(f),d)}function yi(d,f,w){f=="__proto__"&&Hn?Hn(d,f,{configurable:!0,enumerable:!0,value:w,writable:!0}):d[f]=w}function ou(d,f){for(var w=-1,S=f.length,O=ce(S),F=d==null;++w<S;)O[w]=F?l:hs(d,f[w]);return O}function yr(d,f,w){return d===d&&(w!==l&&(d=d<=w?d:w),f!==l&&(d=d>=f?d:f)),d}function oo(d,f,w,S,O,F){var U,K=f&N,te=f&D,pe=f&z;if(w&&(U=O?w(d,S,O,F):w(d)),U!==l)return U;if(!_n(d))return d;var be=pt(d);if(be){if(U=cm(d),!K)return Ni(d,U)}else{var Ee=se(d),je=Ee==V||Ee==G;if(Tr(d))return Kp(d,K);if(Ee==Se||Ee==Q||je&&!O){if(U=te||je?{}:lm(d),!K)return te?em(d,Rw(U,d)):$w(d,iu(U,d))}else{if(!rn[Ee])return O?d:{};U=dm(d,Ee,K)}}F||(F=new So);var Qe=F.get(d);if(Qe)return Qe;F.set(d,U),Gn(d)?d.forEach(function(lt){U.add(oo(lt,f,w,lt,d,F))}):Ou(d)&&d.forEach(function(lt,Ct){U.set(Ct,oo(lt,f,w,Ct,d,F))});var at=pe?te?Zt:Ks:te?Di:ti,vt=be?l:at(d);return ui(vt||d,function(lt,Ct){vt&&(Ct=lt,lt=d[Ct]),es(U,Ct,oo(lt,f,w,Ct,d,F))}),U}function Pp(d){var f=ti(d);return function(w){return ru(w,d,f)}}function ru(d,f,w){var S=w.length;if(d==null)return!S;for(d=jt(d);S--;){var O=w[S],F=f[O],U=d[O];if(U===l&&!(O in d)||!F(U))return!1}return!0}function mf(d,f,w){if(typeof d!="function")throw new Ci(_);return Js(function(){d.apply(l,w)},f)}function ul(d,f,w,S){var O=-1,F=_r,U=!0,K=d.length,te=[],pe=f.length;if(!K)return te;w&&(f=sn(f,vi(w))),S?(F=zs,U=!1):f.length>=p&&(F=Jr,U=!1,f=new Cr(f));e:for(;++O<K;){var be=d[O],Ee=w==null?be:w(be);if(be=S||be!==0?be:0,U&&Ee===Ee){for(var je=pe;je--;)if(f[je]===Ee)continue e;te.push(be)}else F(f,Ee,S)||te.push(be)}return te}var xr=tm(Tn),su=tm(qs,!0);function hl(d,f){var w=!0;return xr(d,function(S,O,F){return w=!!f(S,O,F),w}),w}function fl(d,f,w){for(var S=-1,O=d.length;++S<O;){var F=d[S],U=f(F);if(U!=null&&(K===l?U===U&&!Gi(U):w(U,K)))var K=U,te=F}return te}function Sn(d,f,w,S){var O=d.length;for(w=mt(w),w<0&&(w=-w>O?0:O+w),S=S===l||S>O?O:mt(S),S<0&&(S+=O),S=w>S?0:db(S);w<S;)d[w++]=f;return d}function bf(d,f){var w=[];return xr(d,function(S,O,F){f(S,O,F)&&w.push(S)}),w}function Jn(d,f,w,S,O){var F=-1,U=d.length;for(w||(w=um),O||(O=[]);++F<U;){var K=d[F];f>0&&w(K)?f>1?Jn(K,f-1,w,S,O):to(O,K):S||(O[O.length]=K)}return O}var au=Nf(),gl=Nf(!0);function Tn(d,f){return d&&au(d,f,ti)}function qs(d,f){return d&&gl(d,f,ti)}function pl(d,f){return eo(f,function(w){return Mr(d[w])})}function Gs(d,f){f=Er(f,d);for(var w=0,S=f.length;d!=null&&w<S;)d=d[Io(f[w++])];return w&&w==S?d:l}function kf(d,f,w){var S=f(d);return pt(d)?S:to(S,w(d))}function pi(d){return d==null?d===l?Fe:ge:Cn&&Cn in jt(d)?sm(d):gm(d)}function cu(d,f){return d>f}function ml(d,f){return d!=null&&It.call(d,f)}function Np(d,f){return d!=null&&f in jt(d)}function Op(d,f,w){return d>=fi(f,w)&&d<Bn(f,w)}function ts(d,f,w){for(var S=w?zs:_r,O=d[0].length,F=d.length,U=F,K=ce(F),te=1/0,pe=[];U--;){var be=d[U];U&&f&&(be=sn(be,vi(f))),te=fi(be.length,te),K[U]=!w&&(f||O>=120&&be.length>=120)?new Cr(U&&be):l}be=d[0];var Ee=-1,je=K[0];e:for(;++Ee<O&&pe.length<te;){var Qe=be[Ee],at=f?f(Qe):Qe;if(Qe=w||Qe!==0?Qe:0,!(je?Jr(je,at):S(pe,at,w))){for(U=F;--U;){var vt=K[U];if(!(vt?Jr(vt,at):S(d[U],at,w)))continue e}je&&je.push(at),pe.push(Qe)}}return pe}function ns(d,f,w,S){return Tn(d,function(O,F,U){f(S,w(O),F,U)}),S}function bl(d,f,w){f=Er(f,d),d=Vf(d,f);var S=d==null?d:d[Io(lo(f))];return S==null?l:oi(S,d,w)}function ct(d){return vn(d)&&pi(d)==Q}function Bp(d){return vn(d)&&pi(d)==gt}function zw(d){return vn(d)&&pi(d)==ot}function kl(d,f,w,S,O){return d===f?!0:d==null||f==null||!vn(d)&&!vn(f)?d!==d&&f!==f:Lp(d,f,w,S,kl,O)}function Lp(d,f,w,S,O,F){var U=pt(d),K=pt(f),te=U?ve:se(d),pe=K?ve:se(f);te=te==Q?Se:te,pe=pe==Q?Se:pe;var be=te==Se,Ee=pe==Se,je=te==pe;if(je&&Tr(d)){if(!Tr(f))return!1;U=!0,be=!1}if(je&&!be)return F||(F=new So),U||oa(d)?zf(d,f,w,S,O,F):Gw(d,f,te,w,S,O,F);if(!(w&Z)){var Qe=be&&It.call(d,"__wrapped__"),at=Ee&&It.call(f,"__wrapped__");if(Qe||at){var vt=Qe?d.value():d,lt=at?f.value():f;return F||(F=new So),O(vt,lt,w,S,F)}}return je?(F||(F=new So),as(d,f,w,S,O,F)):!1}function Rp(d){return vn(d)&&se(d)==re}function lu(d,f,w,S){var O=w.length,F=O,U=!S;if(d==null)return!F;for(d=jt(d);O--;){var K=w[O];if(U&&K[2]?K[1]!==d[K[0]]:!(K[0]in d))return!1}for(;++O<F;){K=w[O];var te=K[0],pe=d[te],be=K[1];if(U&&K[2]){if(pe===l&&!(te in d))return!1}else{var Ee=new So;if(S)var je=S(pe,be,te,d,f,Ee);if(!(je===l?kl(be,pe,Z|ae,S,Ee):je))return!1}}return!0}function zp(d){if(!_n(d)||Qw(d))return!1;var f=Mr(d)?ol:Ps;return f.test(ls(d))}function Fp(d){return vn(d)&&pi(d)==Te}function du(d){return vn(d)&&se(d)==ke}function jp(d){return vn(d)&&jl(d.length)&&!!tn[pi(d)]}function Vp(d){return typeof d=="function"?d:d==null?Si:typeof d=="object"?pt(d)?vf(d[0],d[1]):wl(d):dc(d)}function wf(d){if(!ki(d))return xw(d);var f=[];for(var w in jt(d))It.call(d,w)&&w!="constructor"&&f.push(w);return f}function Fw(d){if(!_n(d))return Zw(d);var f=ki(d),w=[];for(var S in d)S=="constructor"&&(f||!It.call(d,S))||w.push(S);return w}function ec(d,f){return d<f}function _f(d,f){var w=-1,S=xi(d)?ce(d.length):[];return xr(d,function(O,F,U){S[++w]=f(O,F,U)}),S}function wl(d){var f=Qs(d);return f.length==1&&f[0][2]?Pl(f[0][0],f[0][1]):function(w){return w===d||lu(w,d,f)}}function vf(d,f){return Ml(d)&&hm(f)?Pl(Io(d),f):function(w){var S=hs(w,d);return S===l&&S===f?zu(w,d):kl(f,S,Z|ae)}}function _l(d,f,w,S,O){d!==f&&au(f,function(F,U){if(O||(O=new So),_n(F))Up(d,f,U,w,_l,S,O);else{var K=S?S(Au(d,U),F,U+"",d,f,O):l;K===l&&(K=F),dl(d,U,K)}},Di)}function Up(d,f,w,S,O,F,U){var K=Au(d,w),te=Au(f,w),pe=U.get(te);if(pe){dl(d,w,pe);return}var be=F?F(K,te,w+"",d,f,U):l,Ee=be===l;if(Ee){var je=pt(te),Qe=!je&&Tr(te),at=!je&&!Qe&&oa(te);be=te,je||Qe||at?pt(K)?be=K:In(K)?be=Ni(K):Qe?(Ee=!1,be=Kp(te,!0)):at?(Ee=!1,be=Jp(te,!0)):be=[]:sc(te)||ia(te)?(be=K,ia(K)?be=ub(K):(!_n(K)||Mr(K))&&(be=lm(te))):Ee=!1}Ee&&(U.set(te,be),O(be,te,S,F,U),U.delete(te)),dl(d,w,be)}function vl(d,f){var w=d.length;if(!!w)return f+=f<0?w:0,Dr(f,w)?d[f]:l}function Al(d,f,w){f.length?f=sn(f,function(F){return pt(F)?function(U){return Gs(U,F.length===1?F[0]:F)}:F}):f=[Si];var S=-1;f=sn(f,vi(et()));var O=_f(d,function(F,U,K){var te=sn(f,function(pe){return pe(F)});return{criteria:te,index:++S,value:F}});return ef(O,function(F,U){return Yw(F,U,w)})}function uu(d,f){return Hp(d,f,function(w,S){return zu(d,S)})}function Hp(d,f,w){for(var S=-1,O=f.length,F={};++S<O;){var U=f[S],K=Gs(d,U);w(K,U)&&Cl(F,Er(U,d),K)}return F}function Wp(d){return function(f){return Gs(f,d)}}function ro(d,f,w,S){var O=S?Xh:Qr,F=-1,U=f.length,K=d;for(d===f&&(f=Ni(f)),w&&(K=sn(d,vi(w)));++F<U;)for(var te=0,pe=f[F],be=w?w(pe):pe;(te=O(K,be,te,S))>-1;)K!==d&&me.call(K,te,1),me.call(d,te,1);return d}function Af(d,f){for(var w=d?f.length:0,S=w-1;w--;){var O=f[w];if(w==S||O!==F){var F=O;Dr(O)?me.call(d,O,1):xf(d,O)}}return d}function is(d,f){return d+Yd(Xr()*(f-d+1))}function os(d,f,w,S){for(var O=-1,F=Bn(Wd((f-d)/(w||1)),0),U=ce(F);F--;)U[S?F:++O]=d,d+=w;return U}function Cf(d,f){var w="";if(!d||f<1||f>ut)return w;do f%2&&(w+=d),f=Yd(f/2),f&&(d+=d);while(f);return w}function _t(d,f){return Cu(jf(d,f,Si),d+"")}function jw(d){return $s(sa(d))}function Vw(d,f){var w=sa(d);return yu(w,yr(f,0,w.length))}function Cl(d,f,w,S){if(!_n(d))return d;f=Er(f,d);for(var O=-1,F=f.length,U=F-1,K=d;K!=null&&++O<F;){var te=Io(f[O]),pe=w;if(te==="__proto__"||te==="constructor"||te==="prototype")return d;if(O!=U){var be=K[te];pe=S?S(be,te,K):l,pe===l&&(pe=_n(be)?be:Dr(f[O+1])?[]:{})}es(K,te,pe),K=K[te]}return d}var Yp=Qd?function(d,f){return Qd.set(d,f),d}:Si,Uw=Hn?function(d,f){return Hn(d,"toString",{configurable:!0,enumerable:!1,value:Ag(f),writable:!0})}:Si;function Hw(d){return yu(sa(d))}function so(d,f,w){var S=-1,O=d.length;f<0&&(f=-f>O?0:O+f),w=w>O?O:w,w<0&&(w+=O),O=f>w?0:w-f>>>0,f>>>=0;for(var F=ce(O);++S<O;)F[S]=d[S+f];return F}function Ww(d,f){var w;return xr(d,function(S,O,F){return w=f(S,O,F),!w}),!!w}function yl(d,f,w){var S=0,O=d==null?S:d.length;if(typeof f=="number"&&f===f&&O<=ni){for(;S<O;){var F=S+O>>>1,U=d[F];U!==null&&!Gi(U)&&(w?U<=f:U<f)?S=F+1:O=F}return O}return yf(d,f,Si,w)}function yf(d,f,w,S){var O=0,F=d==null?0:d.length;if(F===0)return 0;f=w(f);for(var U=f!==f,K=f===null,te=Gi(f),pe=f===l;O<F;){var be=Yd((O+F)/2),Ee=w(d[be]),je=Ee!==l,Qe=Ee===null,at=Ee===Ee,vt=Gi(Ee);if(U)var lt=S||at;else pe?lt=at&&(S||je):K?lt=at&&je&&(S||!Qe):te?lt=at&&je&&!Qe&&(S||!vt):Qe||vt?lt=!1:lt=S?Ee<=f:Ee<f;lt?O=be+1:F=be}return fi(F,kt)}function $p(d,f){for(var w=-1,S=d.length,O=0,F=[];++w<S;){var U=d[w],K=f?f(U):U;if(!w||!ho(K,te)){var te=K;F[O++]=U===0?0:U}}return F}function tc(d){return typeof d=="number"?d:Gi(d)?jn:+d}function $i(d){if(typeof d=="string")return d;if(pt(d))return sn(d,$i)+"";if(Gi(d))return Jd?Jd.call(d):"";var f=d+"";return f=="0"&&1/d==-He?"-0":f}function rs(d,f,w){var S=-1,O=_r,F=d.length,U=!0,K=[],te=K;if(w)U=!1,O=zs;else if(F>=p){var pe=f?null:rm(d);if(pe)return Vs(pe);U=!1,O=Jr,te=new Cr}else te=f?[]:K;e:for(;++S<F;){var be=d[S],Ee=f?f(be):be;if(be=w||be!==0?be:0,U&&Ee===Ee){for(var je=te.length;je--;)if(te[je]===Ee)continue e;f&&te.push(Ee),K.push(be)}else O(te,Ee,w)||(te!==K&&te.push(Ee),K.push(be))}return K}function xf(d,f){return f=Er(f,d),d=Vf(d,f),d==null||delete d[Io(lo(f))]}function xl(d,f,w,S){return Cl(d,f,w(Gs(d,f)),S)}function hu(d,f,w,S){for(var O=d.length,F=S?O:-1;(S?F--:++F<O)&&f(d[F],F,d););return w?so(d,S?0:F,S?F+1:O):so(d,S?F+1:0,S?O:F)}function qp(d,f){var w=d;return w instanceof yt&&(w=w.value()),Fs(f,function(S,O){return O.func.apply(O.thisArg,to([S],O.args))},w)}function Ef(d,f,w){var S=d.length;if(S<2)return S?rs(d[0]):[];for(var O=-1,F=ce(S);++O<S;)for(var U=d[O],K=-1;++K<S;)K!=O&&(F[O]=ul(F[O]||U,d[K],f,w));return rs(Jn(F,1),f,w)}function Df(d,f,w){for(var S=-1,O=d.length,F=f.length,U={};++S<O;){var K=S<F?f[S]:l;w(U,d[S],K)}return U}function Sf(d){return In(d)?d:[]}function Tf(d){return typeof d=="function"?d:Si}function Er(d,f){return pt(d)?d:Ml(d,f)?[d]:pm(Yt(d))}var Mf=_t;function ss(d,f,w){var S=d.length;return w=w===l?S:w,!f&&w>=S?d:so(d,f,w)}var Gp=Qo||function(d){return wn.clearTimeout(d)};function Kp(d,f){if(f)return d.slice();var w=d.length,S=C?C(w):new d.constructor(w);return d.copy(S),S}function fu(d){var f=new d.constructor(d.byteLength);return new Ar(f).set(new Ar(d)),f}function Qp(d,f){var w=f?fu(d.buffer):d.buffer;return new d.constructor(w,d.byteOffset,d.byteLength)}function gu(d){var f=new d.constructor(d.source,bd.exec(d));return f.lastIndex=d.lastIndex,f}function Zp(d){return al?jt(al.call(d)):{}}function Jp(d,f){var w=f?fu(d.buffer):d.buffer;return new d.constructor(w,d.byteOffset,d.length)}function If(d,f){if(d!==f){var w=d!==l,S=d===null,O=d===d,F=Gi(d),U=f!==l,K=f===null,te=f===f,pe=Gi(f);if(!K&&!pe&&!F&&d>f||F&&U&&te&&!K&&!pe||S&&U&&te||!w&&te||!O)return 1;if(!S&&!F&&!pe&&d<f||pe&&w&&O&&!S&&!F||K&&w&&O||!U&&O||!te)return-1}return 0}function Yw(d,f,w){for(var S=-1,O=d.criteria,F=f.criteria,U=O.length,K=w.length;++S<U;){var te=If(O[S],F[S]);if(te){if(S>=K)return te;var pe=w[S];return te*(pe=="desc"?-1:1)}}return d.index-f.index}function Pf(d,f,w,S){for(var O=-1,F=d.length,U=w.length,K=-1,te=f.length,pe=Bn(F-U,0),be=ce(te+pe),Ee=!S;++K<te;)be[K]=f[K];for(;++O<U;)(Ee||O<F)&&(be[w[O]]=d[O]);for(;pe--;)be[K++]=d[O++];return be}function Xp(d,f,w,S){for(var O=-1,F=d.length,U=-1,K=w.length,te=-1,pe=f.length,be=Bn(F-K,0),Ee=ce(be+pe),je=!S;++O<be;)Ee[O]=d[O];for(var Qe=O;++te<pe;)Ee[Qe+te]=f[te];for(;++U<K;)(je||O<F)&&(Ee[Qe+w[U]]=d[O++]);return Ee}function Ni(d,f){var w=-1,S=d.length;for(f||(f=ce(S));++w<S;)f[w]=d[w];return f}function Xo(d,f,w,S){var O=!w;w||(w={});for(var F=-1,U=f.length;++F<U;){var K=f[F],te=S?S(w[K],d[K],K,w,d):l;te===l&&(te=d[K]),O?yi(w,K,te):es(w,K,te)}return w}function $w(d,f){return Xo(d,_u(d),f)}function em(d,f){return Xo(d,vu(d),f)}function pu(d,f){return function(w,S){var O=pt(w)?Jh:Lw,F=f?f():{};return O(w,d,et(S,2),F)}}function er(d){return _t(function(f,w){var S=-1,O=w.length,F=O>1?w[O-1]:l,U=O>2?w[2]:l;for(F=d.length>3&&typeof F=="function"?(O--,F):l,U&&bi(w[0],w[1],U)&&(F=O<3?l:F,O=1),f=jt(f);++S<O;){var K=w[S];K&&d(f,K,S,F)}return f})}function tm(d,f){return function(w,S){if(w==null)return w;if(!xi(w))return d(w,S);for(var O=w.length,F=f?O:-1,U=jt(w);(f?F--:++F<O)&&S(U[F],F,U)!==!1;);return w}}function Nf(d){return function(f,w,S){for(var O=-1,F=jt(f),U=S(f),K=U.length;K--;){var te=U[d?K:++O];if(w(F[te],te,F)===!1)break}return f}}function nm(d,f,w){var S=f&we,O=yn(d);function F(){var U=this&&this!==wn&&this instanceof F?O:d;return U.apply(S?w:this,arguments)}return F}function fn(d){return function(f){f=Yt(f);var w=yo(f)?Un(f):l,S=w?w[0]:f.charAt(0),O=w?ss(w,1).join(""):f.slice(1);return S[d]()+O}}function ao(d){return function(f){return Fs(vg(Db(f).replace(Ls,"")),d,"")}}function yn(d){return function(){var f=arguments;switch(f.length){case 0:return new d;case 1:return new d(f[0]);case 2:return new d(f[0],f[1]);case 3:return new d(f[0],f[1],f[2]);case 4:return new d(f[0],f[1],f[2],f[3]);case 5:return new d(f[0],f[1],f[2],f[3],f[4]);case 6:return new d(f[0],f[1],f[2],f[3],f[4],f[5]);case 7:return new d(f[0],f[1],f[2],f[3],f[4],f[5],f[6])}var w=Zn(d.prototype),S=d.apply(w,f);return _n(S)?S:w}}function co(d,f,w){var S=yn(d);function O(){for(var F=arguments.length,U=ce(F),K=F,te=Oi(O);K--;)U[K]=arguments[K];var pe=F<3&&U[0]!==te&&U[F-1]!==te?[]:xo(U,te);if(F-=pe.length,F<w)return om(d,f,mu,O.placeholder,l,U,pe,l,l,w-F);var be=this&&this!==wn&&this instanceof O?S:d;return oi(be,this,U)}return O}function To(d){return function(f,w,S){var O=jt(f);if(!xi(f)){var F=et(w,3);f=ti(f),w=function(K){return F(O[K],K,O)}}var U=d(f,w,S);return U>-1?O[F?f[U]:U]:l}}function im(d){return mi(function(f){var w=f.length,S=w,O=gi.prototype.thru;for(d&&f.reverse();S--;){var F=f[S];if(typeof F!="function")throw new Ci(_);if(O&&!U&&Vt(F)=="wrapper")var U=new gi([],!0)}for(S=U?S:w;++S<w;){F=f[S];var K=Vt(F),te=K=="wrapper"?qi(F):l;te&&Ff(te[0])&&te[1]==(de|ie|_e|le)&&!te[4].length&&te[9]==1?U=U[Vt(te[0])].apply(U,te[3]):U=F.length==1&&Ff(F)?U[K]():U.thru(F)}return function(){var pe=arguments,be=pe[0];if(U&&pe.length==1&&pt(be))return U.plant(be).value();for(var Ee=0,je=w?f[Ee].apply(this,pe):be;++Ee<w;)je=f[Ee].call(this,je);return je}})}function mu(d,f,w,S,O,F,U,K,te,pe){var be=f&de,Ee=f&we,je=f&ee,Qe=f&(ie|fe),at=f&ye,vt=je?l:yn(d);function lt(){for(var Ct=arguments.length,Tt=ce(Ct),Ri=Ct;Ri--;)Tt[Ri]=arguments[Ri];if(Qe)var ci=Oi(lt),Qi=Rd(Tt,ci);if(S&&(Tt=Pf(Tt,S,O,Qe)),F&&(Tt=Xp(Tt,F,U,Qe)),Ct-=Qi,Qe&&Ct<pe){var zn=xo(Tt,ci);return om(d,f,mu,lt.placeholder,w,Tt,zn,K,te,pe-Ct)}var go=Ee?w:this,Pr=je?go[d]:d;return Ct=Tt.length,K?Tt=Nl(Tt,K):at&&Ct>1&&Tt.reverse(),be&&te<Ct&&(Tt.length=te),this&&this!==wn&&this instanceof lt&&(Pr=vt||yn(Pr)),Pr.apply(go,Tt)}return lt}function El(d,f){return function(w,S){return ns(w,d,f(S),{})}}function Dl(d,f){return function(w,S){var O;if(w===l&&S===l)return f;if(w!==l&&(O=w),S!==l){if(O===l)return S;typeof w=="string"||typeof S=="string"?(w=$i(w),S=$i(S)):(w=tc(w),S=tc(S)),O=d(w,S)}return O}}function bu(d){return mi(function(f){return f=sn(f,vi(et())),_t(function(w){var S=this;return d(f,function(O){return oi(O,S,w)})})})}function mn(d,f){f=f===l?" ":$i(f);var w=f.length;if(w<2)return w?Cf(f,d):f;var S=Cf(f,Wd(d/no(f)));return yo(f)?ss(Un(S),0,d).join(""):S.slice(0,d)}function ku(d,f,w,S){var O=f&we,F=yn(d);function U(){for(var K=-1,te=arguments.length,pe=-1,be=S.length,Ee=ce(be+te),je=this&&this!==wn&&this instanceof U?F:d;++pe<be;)Ee[pe]=S[pe];for(;te--;)Ee[pe++]=arguments[++K];return oi(je,O?w:this,Ee)}return U}function Of(d){return function(f,w,S){return S&&typeof S!="number"&&bi(f,w,S)&&(w=S=l),f=Oo(f),w===l?(w=f,f=0):w=Oo(w),S=S===l?f<w?1:-1:Oo(S),os(f,w,S,d)}}function Sl(d){return function(f,w){return typeof f=="string"&&typeof w=="string"||(f=Ki(f),w=Ki(w)),d(f,w)}}function om(d,f,w,S,O,F,U,K,te,pe){var be=f&ie,Ee=be?U:l,je=be?l:U,Qe=be?F:l,at=be?l:F;f|=be?_e:Ie,f&=~(be?Ie:_e),f&q||(f&=~(we|ee));var vt=[d,f,O,Qe,Ee,at,je,K,te,pe],lt=w.apply(l,vt);return Ff(d)&&Uf(lt,vt),lt.placeholder=S,Hf(lt,d,f)}function Bf(d){var f=On[d];return function(w,S){if(w=Ki(w),S=S==null?0:fi(mt(S),292),S&&qd(w)){var O=(Yt(w)+"e").split("e"),F=f(O[0]+"e"+(+O[1]+S));return O=(Yt(F)+"e").split("e"),+(O[0]+"e"+(+O[1]-S))}return f(w)}}var rm=Qa&&1/Vs(new Qa([,-0]))[1]==He?function(d){return new Qa(d)}:Hu;function Lf(d){return function(f){var w=se(f);return w==re?$a(f):w==ke?Us(f):tf(f,d(f))}}function tr(d,f,w,S,O,F,U,K){var te=f&ee;if(!te&&typeof d!="function")throw new Ci(_);var pe=S?S.length:0;if(pe||(f&=~(_e|Ie),S=O=l),U=U===l?U:Bn(mt(U),0),K=K===l?K:mt(K),pe-=O?O.length:0,f&Ie){var be=S,Ee=O;S=O=l}var je=te?l:qi(d),Qe=[d,f,w,S,O,be,Ee,F,U,K];if(je&&Zs(Qe,je),d=Qe[0],f=Qe[1],w=Qe[2],S=Qe[3],O=Qe[4],K=Qe[9]=Qe[9]===l?te?0:d.length:Bn(Qe[9]-pe,0),!K&&f&(ie|fe)&&(f&=~(ie|fe)),!f||f==we)var at=nm(d,f,w);else f==ie||f==fe?at=co(d,f,K):(f==_e||f==(we|_e))&&!O.length?at=ku(d,f,w,S):at=mu.apply(l,Qe);var vt=je?Yp:Uf;return Hf(vt(at,Qe),d,f)}function Rf(d,f,w,S){return d===l||ho(d,Qn[w])&&!It.call(S,w)?f:d}function wu(d,f,w,S,O,F){return _n(d)&&_n(f)&&(F.set(f,d),_l(d,f,l,wu,F),F.delete(f)),d}function qw(d){return sc(d)?l:d}function zf(d,f,w,S,O,F){var U=w&Z,K=d.length,te=f.length;if(K!=te&&!(U&&te>K))return!1;var pe=F.get(d),be=F.get(f);if(pe&&be)return pe==f&&be==d;var Ee=-1,je=!0,Qe=w&ae?new Cr:l;for(F.set(d,f),F.set(f,d);++Ee<K;){var at=d[Ee],vt=f[Ee];if(S)var lt=U?S(vt,at,Ee,f,d,F):S(at,vt,Ee,d,f,F);if(lt!==l){if(lt)continue;je=!1;break}if(Qe){if(!ja(f,function(Ct,Tt){if(!Jr(Qe,Tt)&&(at===Ct||O(at,Ct,w,S,F)))return Qe.push(Tt)})){je=!1;break}}else if(!(at===vt||O(at,vt,w,S,F))){je=!1;break}}return F.delete(d),F.delete(f),je}function Gw(d,f,w,S,O,F,U){switch(w){case it:if(d.byteLength!=f.byteLength||d.byteOffset!=f.byteOffset)return!1;d=d.buffer,f=f.buffer;case gt:return!(d.byteLength!=f.byteLength||!F(new Ar(d),new Ar(f)));case ne:case ot:case ue:return ho(+d,+f);case nt:return d.name==f.name&&d.message==f.message;case Te:case Ve:return d==f+"";case re:var K=$a;case ke:var te=S&Z;if(K||(K=Vs),d.size!=f.size&&!te)return!1;var pe=U.get(d);if(pe)return pe==f;S|=ae,U.set(d,f);var be=zf(K(d),K(f),S,O,F,U);return U.delete(d),be;case We:if(al)return al.call(d)==al.call(f)}return!1}function as(d,f,w,S,O,F){var U=w&Z,K=Ks(d),te=K.length,pe=Ks(f),be=pe.length;if(te!=be&&!U)return!1;for(var Ee=te;Ee--;){var je=K[Ee];if(!(U?je in f:It.call(f,je)))return!1}var Qe=F.get(d),at=F.get(f);if(Qe&&at)return Qe==f&&at==d;var vt=!0;F.set(d,f),F.set(f,d);for(var lt=U;++Ee<te;){je=K[Ee];var Ct=d[je],Tt=f[je];if(S)var Ri=U?S(Tt,Ct,je,f,d,F):S(Ct,Tt,je,d,f,F);if(!(Ri===l?Ct===Tt||O(Ct,Tt,w,S,F):Ri)){vt=!1;break}lt||(lt=je=="constructor")}if(vt&&!lt){var ci=d.constructor,Qi=f.constructor;ci!=Qi&&"constructor"in d&&"constructor"in f&&!(typeof ci=="function"&&ci instanceof ci&&typeof Qi=="function"&&Qi instanceof Qi)&&(vt=!1)}return F.delete(d),F.delete(f),vt}function mi(d){return Cu(jf(d,l,Cm),d+"")}function Ks(d){return kf(d,ti,_u)}function Zt(d){return kf(d,Di,vu)}var qi=Qd?function(d){return Qd.get(d)}:Hu;function Vt(d){for(var f=d.name+"",w=Za[f],S=It.call(Za,f)?w.length:0;S--;){var O=w[S],F=O.func;if(F==null||F==d)return O.name}return f}function Oi(d){var f=It.call(R,"placeholder")?R:d;return f.placeholder}function et(){var d=R.iteratee||fo;return d=d===fo?Vp:d,arguments.length?d(arguments[0],arguments[1]):d}function Ae(d,f){var w=d.__data__;return Mo(f)?w[typeof f=="string"?"string":"hash"]:w.map}function Qs(d){for(var f=ti(d),w=f.length;w--;){var S=f[w],O=d[S];f[w]=[S,O,hm(O)]}return f}function cs(d,f){var w=jd(d,f);return zp(w)?w:l}function sm(d){var f=It.call(d,Cn),w=d[Cn];try{d[Cn]=l;var S=!0}catch{}var O=qa.call(d);return S&&(f?d[Cn]=w:delete d[Cn]),O}var _u=cf?function(d){return d==null?[]:(d=jt(d),eo(cf(d),function(f){return H.call(d,f)}))}:xg,vu=cf?function(d){for(var f=[];d;)to(f,_u(d)),d=x(d);return f}:xg,se=pi;(Gd&&se(new Gd(new ArrayBuffer(1)))!=it||rl&&se(new rl)!=re||lf&&se(lf.resolve())!=Be||Qa&&se(new Qa)!=ke||sl&&se(new sl)!=qe)&&(se=function(d){var f=pi(d),w=f==Se?d.constructor:l,S=w?ls(w):"";if(S)switch(S){case Tw:return it;case xp:return re;case Ep:return Be;case Mw:return ke;case Iw:return qe}return f});function am(d,f,w){for(var S=-1,O=w.length;++S<O;){var F=w[S],U=F.size;switch(F.type){case"drop":d+=U;break;case"dropRight":f-=U;break;case"take":f=fi(f,d+U);break;case"takeRight":d=Bn(d,f-U);break}}return{start:d,end:f}}function Kw(d){var f=d.match(Ms);return f?f[1].split(Bh):[]}function Tl(d,f,w){f=Er(f,d);for(var S=-1,O=f.length,F=!1;++S<O;){var U=Io(f[S]);if(!(F=d!=null&&w(d,U)))break;d=d[U]}return F||++S!=O?F:(O=d==null?0:d.length,!!O&&jl(O)&&Dr(U,O)&&(pt(d)||ia(d)))}function cm(d){var f=d.length,w=new d.constructor(f);return f&&typeof d[0]=="string"&&It.call(d,"index")&&(w.index=d.index,w.input=d.input),w}function lm(d){return typeof d.constructor=="function"&&!ki(d)?Zn(x(d)):{}}function dm(d,f,w){var S=d.constructor;switch(f){case gt:return fu(d);case ne:case ot:return new S(+d);case it:return Qp(d,w);case Kt:case Nt:case on:case fr:case Pi:case Ft:case $n:case Nn:case Xi:return Jp(d,w);case re:return new S;case ue:case Ve:return new S(d);case Te:return gu(d);case ke:return new S;case We:return Zp(d)}}function nr(d,f){var w=f.length;if(!w)return d;var S=w-1;return f[S]=(w>1?"& ":"")+f[S],f=f.join(w>2?", ":" "),d.replace(Oh,`{
/* [wrapped with `+f+`] */
`)}function um(d){return pt(d)||ia(d)||!!(tt&&d&&d[tt])}function Dr(d,f){var w=typeof d;return f=f==null?ut:f,!!f&&(w=="number"||w!="symbol"&&Fh.test(d))&&d>-1&&d%1==0&&d<f}function bi(d,f,w){if(!_n(w))return!1;var S=typeof f;return(S=="number"?xi(w)&&Dr(f,w.length):S=="string"&&f in w)?ho(w[f],d):!1}function Ml(d,f){if(pt(d))return!1;var w=typeof d;return w=="number"||w=="symbol"||w=="boolean"||d==null||Gi(d)?!0:gr.test(d)||!Ph.test(d)||f!=null&&d in jt(f)}function Mo(d){var f=typeof d;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?d!=="__proto__":d===null}function Ff(d){var f=Vt(d),w=R[f];if(typeof w!="function"||!(f in yt.prototype))return!1;if(d===w)return!0;var S=qi(w);return!!S&&d===S[0]}function Qw(d){return!!Hs&&Hs in d}var Il=si?Mr:Hl;function ki(d){var f=d&&d.constructor,w=typeof f=="function"&&f.prototype||Qn;return d===w}function hm(d){return d===d&&!_n(d)}function Pl(d,f){return function(w){return w==null?!1:w[d]===f&&(f!==l||d in jt(w))}}function fm(d){var f=Mu(d,function(S){return w.size===T&&w.clear(),S}),w=f.cache;return f}function Zs(d,f){var w=d[1],S=f[1],O=w|S,F=O<(we|ee|de),U=S==de&&w==ie||S==de&&w==le&&d[7].length<=f[8]||S==(de|le)&&f[7].length<=f[8]&&w==ie;if(!(F||U))return d;S&we&&(d[2]=f[2],O|=w&we?0:q);var K=f[3];if(K){var te=d[3];d[3]=te?Pf(te,K,f[4]):K,d[4]=te?xo(d[3],I):f[4]}return K=f[5],K&&(te=d[5],d[5]=te?Xp(te,K,f[6]):K,d[6]=te?xo(d[5],I):f[6]),K=f[7],K&&(d[7]=K),S&de&&(d[8]=d[8]==null?f[8]:fi(d[8],f[8])),d[9]==null&&(d[9]=f[9]),d[0]=f[0],d[1]=O,d}function Zw(d){var f=[];if(d!=null)for(var w in jt(d))f.push(w);return f}function gm(d){return qa.call(d)}function jf(d,f,w){return f=Bn(f===l?d.length-1:f,0),function(){for(var S=arguments,O=-1,F=Bn(S.length-f,0),U=ce(F);++O<F;)U[O]=S[f+O];O=-1;for(var K=ce(f+1);++O<f;)K[O]=S[O];return K[f]=w(U),oi(d,this,K)}}function Vf(d,f){return f.length<2?d:Gs(d,so(f,0,-1))}function Nl(d,f){for(var w=d.length,S=fi(f.length,w),O=Ni(d);S--;){var F=f[S];d[S]=Dr(F,w)?O[F]:l}return d}function Au(d,f){if(!(f==="constructor"&&typeof d[f]=="function")&&f!="__proto__")return d[f]}var Uf=Wf(Yp),Js=yp||function(d,f){return wn.setTimeout(d,f)},Cu=Wf(Uw);function Hf(d,f,w){var S=f+"";return Cu(d,nr(S,mm(Kw(S),w)))}function Wf(d){var f=0,w=0;return function(){var S=Ew(),O=Ue-(S-w);if(w=S,O>0){if(++f>=$)return arguments[0]}else f=0;return d.apply(l,arguments)}}function yu(d,f){var w=-1,S=d.length,O=S-1;for(f=f===l?S:f;++w<f;){var F=is(w,O),U=d[F];d[F]=d[w],d[w]=U}return d.length=f,d}var pm=fm(function(d){var f=[];return d.charCodeAt(0)===46&&f.push(""),d.replace(Oc,function(w,S,O,F){f.push(O?F.replace(zh,"$1"):S||w)}),f});function Io(d){if(typeof d=="string"||Gi(d))return d;var f=d+"";return f=="0"&&1/d==-He?"-0":f}function ls(d){if(d!=null){try{return hi.call(d)}catch{}try{return d+""}catch{}}return""}function mm(d,f){return ui(Vn,function(w){var S="_."+w[0];f&w[1]&&!_r(d,S)&&d.push(S)}),d.sort()}function bm(d){if(d instanceof yt)return d.clone();var f=new gi(d.__wrapped__,d.__chain__);return f.__actions__=Ni(d.__actions__),f.__index__=d.__index__,f.__values__=d.__values__,f}function km(d,f,w){(w?bi(d,f,w):f===l)?f=1:f=Bn(mt(f),0);var S=d==null?0:d.length;if(!S||f<1)return[];for(var O=0,F=0,U=ce(Wd(S/f));O<S;)U[F++]=so(d,O,O+=f);return U}function Yf(d){for(var f=-1,w=d==null?0:d.length,S=0,O=[];++f<w;){var F=d[f];F&&(O[S++]=F)}return O}function $f(){var d=arguments.length;if(!d)return[];for(var f=ce(d-1),w=arguments[0],S=d;S--;)f[S-1]=arguments[S];return to(pt(w)?Ni(w):[w],Jn(f,1))}var wm=_t(function(d,f){return In(d)?ul(d,Jn(f,1,In,!0)):[]}),_m=_t(function(d,f){var w=lo(f);return In(w)&&(w=l),In(d)?ul(d,Jn(f,1,In,!0),et(w,2)):[]}),vm=_t(function(d,f){var w=lo(f);return In(w)&&(w=l),In(d)?ul(d,Jn(f,1,In,!0),l,w):[]});function Jw(d,f,w){var S=d==null?0:d.length;return S?(f=w||f===l?1:mt(f),so(d,f<0?0:f,S)):[]}function Xw(d,f,w){var S=d==null?0:d.length;return S?(f=w||f===l?1:mt(f),f=S-f,so(d,0,f<0?0:f)):[]}function Ol(d,f){return d&&d.length?hu(d,et(f,3),!0,!0):[]}function xu(d,f){return d&&d.length?hu(d,et(f,3),!0):[]}function e_(d,f,w,S){var O=d==null?0:d.length;return O?(w&&typeof w!="number"&&bi(d,f,w)&&(w=0,S=O),Sn(d,f,w,S)):[]}function Am(d,f,w){var S=d==null?0:d.length;if(!S)return-1;var O=w==null?0:mt(w);return O<0&&(O=Bn(S+O,0)),Ua(d,et(f,3),O)}function ds(d,f,w){var S=d==null?0:d.length;if(!S)return-1;var O=S-1;return w!==l&&(O=mt(w),O=w<0?Bn(S+O,0):fi(O,S-1)),Ua(d,et(f,3),O,!0)}function Cm(d){var f=d==null?0:d.length;return f?Jn(d,1):[]}function t_(d){var f=d==null?0:d.length;return f?Jn(d,He):[]}function n_(d,f){var w=d==null?0:d.length;return w?(f=f===l?1:mt(f),Jn(d,f)):[]}function i_(d){for(var f=-1,w=d==null?0:d.length,S={};++f<w;){var O=d[f];S[O[0]]=O[1]}return S}function ym(d){return d&&d.length?d[0]:l}function o_(d,f,w){var S=d==null?0:d.length;if(!S)return-1;var O=w==null?0:mt(w);return O<0&&(O=Bn(S+O,0)),Qr(d,f,O)}function r_(d){var f=d==null?0:d.length;return f?so(d,0,-1):[]}var s_=_t(function(d){var f=sn(d,Sf);return f.length&&f[0]===d[0]?ts(f):[]}),a_=_t(function(d){var f=lo(d),w=sn(d,Sf);return f===lo(w)?f=l:w.pop(),w.length&&w[0]===d[0]?ts(w,et(f,2)):[]}),Xs=_t(function(d){var f=lo(d),w=sn(d,Sf);return f=typeof f=="function"?f:l,f&&w.pop(),w.length&&w[0]===d[0]?ts(w,l,f):[]});function c_(d,f){return d==null?"":yw.call(d,f)}function lo(d){var f=d==null?0:d.length;return f?d[f-1]:l}function xm(d,f,w){var S=d==null?0:d.length;if(!S)return-1;var O=S;return w!==l&&(O=mt(w),O=O<0?Bn(S+O,0):fi(O,S-1)),f===f?nl(d,f,O):Ua(d,Ha,O,!0)}function l_(d,f){return d&&d.length?vl(d,mt(f)):l}var d_=_t(Em);function Em(d,f){return d&&d.length&&f&&f.length?ro(d,f):d}function u_(d,f,w){return d&&d.length&&f&&f.length?ro(d,f,et(w,2)):d}function h_(d,f,w){return d&&d.length&&f&&f.length?ro(d,f,l,w):d}var qf=mi(function(d,f){var w=d==null?0:d.length,S=ou(d,f);return Af(d,sn(f,function(O){return Dr(O,w)?+O:O}).sort(If)),S});function Dm(d,f){var w=[];if(!(d&&d.length))return w;var S=-1,O=[],F=d.length;for(f=et(f,3);++S<F;){var U=d[S];f(U,S,d)&&(w.push(U),O.push(S))}return Af(d,O),w}function us(d){return d==null?d:Sw.call(d)}function f_(d,f,w){var S=d==null?0:d.length;return S?(w&&typeof w!="number"&&bi(d,f,w)?(f=0,w=S):(f=f==null?0:mt(f),w=w===l?S:mt(w)),so(d,f,w)):[]}function Sm(d,f){return yl(d,f)}function g_(d,f,w){return yf(d,f,et(w,2))}function p_(d,f){var w=d==null?0:d.length;if(w){var S=yl(d,f);if(S<w&&ho(d[S],f))return S}return-1}function m_(d,f){return yl(d,f,!0)}function Eu(d,f,w){return yf(d,f,et(w,2),!0)}function Tm(d,f){var w=d==null?0:d.length;if(w){var S=yl(d,f,!0)-1;if(ho(d[S],f))return S}return-1}function Mm(d){return d&&d.length?$p(d):[]}function b_(d,f){return d&&d.length?$p(d,et(f,2)):[]}function k_(d){var f=d==null?0:d.length;return f?so(d,1,f):[]}function Gf(d,f,w){return d&&d.length?(f=w||f===l?1:mt(f),so(d,0,f<0?0:f)):[]}function w_(d,f,w){var S=d==null?0:d.length;return S?(f=w||f===l?1:mt(f),f=S-f,so(d,f<0?0:f,S)):[]}function Im(d,f){return d&&d.length?hu(d,et(f,3),!1,!0):[]}function __(d,f){return d&&d.length?hu(d,et(f,3)):[]}var nc=_t(function(d){return rs(Jn(d,1,In,!0))}),uo=_t(function(d){var f=lo(d);return In(f)&&(f=l),rs(Jn(d,1,In,!0),et(f,2))}),Kf=_t(function(d){var f=lo(d);return f=typeof f=="function"?f:l,rs(Jn(d,1,In,!0),l,f)});function Pm(d){return d&&d.length?rs(d):[]}function Bl(d,f){return d&&d.length?rs(d,et(f,2)):[]}function Nm(d,f){return f=typeof f=="function"?f:l,d&&d.length?rs(d,l,f):[]}function ea(d){if(!(d&&d.length))return[];var f=0;return d=eo(d,function(w){if(In(w))return f=Bn(w.length,f),!0}),js(f,function(w){return sn(d,Co(w))})}function ic(d,f){if(!(d&&d.length))return[];var w=ea(d);return f==null?w:sn(w,function(S){return oi(f,l,S)})}var Om=_t(function(d,f){return In(d)?ul(d,f):[]}),Bm=_t(function(d){return Ef(eo(d,In))}),Ln=_t(function(d){var f=lo(d);return In(f)&&(f=l),Ef(eo(d,In),et(f,2))}),Ut=_t(function(d){var f=lo(d);return f=typeof f=="function"?f:l,Ef(eo(d,In),l,f)}),Xn=_t(ea);function Bi(d,f){return Df(d||[],f||[],es)}function ei(d,f){return Df(d||[],f||[],Cl)}var Li=_t(function(d){var f=d.length,w=f>1?d[f-1]:l;return w=typeof w=="function"?(d.pop(),w):l,ic(d,w)});function ir(d){var f=R(d);return f.__chain__=!0,f}function Mn(d,f){return f(d),d}function Wt(d,f){return f(d)}var Po=mi(function(d){var f=d.length,w=f?d[0]:0,S=this.__wrapped__,O=function(F){return ou(F,d)};return f>1||this.__actions__.length||!(S instanceof yt)||!Dr(w)?this.thru(O):(S=S.slice(w,+w+(f?1:0)),S.__actions__.push({func:Wt,args:[O],thisArg:l}),new gi(S,this.__chain__).thru(function(F){return f&&!F.length&&F.push(l),F}))});function v_(){return ir(this)}function A_(){return new gi(this.value(),this.__chain__)}function Sr(){this.__values__===l&&(this.__values__=Lu(this.value()));var d=this.__index__>=this.__values__.length,f=d?l:this.__values__[this.__index__++];return{done:d,value:f}}function C_(){return this}function Lm(d){for(var f,w=this;w instanceof cl;){var S=bm(w);S.__index__=0,S.__values__=l,f?O.__wrapped__=S:f=S;var O=S;w=w.__wrapped__}return O.__wrapped__=d,f}function Rm(){var d=this.__wrapped__;if(d instanceof yt){var f=d;return this.__actions__.length&&(f=new yt(this)),f=f.reverse(),f.__actions__.push({func:Wt,args:[us],thisArg:l}),new gi(f,this.__chain__)}return this.thru(us)}function Ll(){return qp(this.__wrapped__,this.__actions__)}var y_=pu(function(d,f,w){It.call(d,w)?++d[w]:yi(d,w,1)});function zm(d,f,w){var S=pt(d)?Fa:hl;return w&&bi(d,f,w)&&(f=l),S(d,et(f,3))}function x_(d,f){var w=pt(d)?eo:bf;return w(d,et(f,3))}var E_=To(Am),Fm=To(ds);function jm(d,f){return Jn(Rl(d,f),1)}function ai(d,f){return Jn(Rl(d,f),He)}function D_(d,f,w){return w=w===l?1:mt(w),Jn(Rl(d,f),w)}function Vm(d,f){var w=pt(d)?ui:xr;return w(d,et(f,3))}function Um(d,f){var w=pt(d)?Id:su;return w(d,et(f,3))}var Hm=pu(function(d,f,w){It.call(d,w)?d[w].push(f):yi(d,w,[f])});function Wm(d,f,w,S){d=xi(d)?d:sa(d),w=w&&!S?mt(w):0;var O=d.length;return w<0&&(w=Bn(O+w,0)),ac(d)?w<=O&&d.indexOf(f,w)>-1:!!O&&Qr(d,f,w)>-1}var Qf=_t(function(d,f,w){var S=-1,O=typeof f=="function",F=xi(d)?ce(d.length):[];return xr(d,function(U){F[++S]=O?oi(f,U,w):bl(U,f,w)}),F}),Ym=pu(function(d,f,w){yi(d,w,f)});function Rl(d,f){var w=pt(d)?sn:_f;return w(d,et(f,3))}function $m(d,f,w,S){return d==null?[]:(pt(f)||(f=f==null?[]:[f]),w=S?l:w,pt(w)||(w=w==null?[]:[w]),Al(d,f,w))}var qm=pu(function(d,f,w){d[w?0:1].push(f)},function(){return[[],[]]});function S_(d,f,w){var S=pt(d)?Fs:Bd,O=arguments.length<3;return S(d,et(f,4),w,O,xr)}function Du(d,f,w){var S=pt(d)?Kr:Bd,O=arguments.length<3;return S(d,et(f,4),w,O,su)}function Gm(d,f){var w=pt(d)?eo:bf;return w(d,zl(et(f,3)))}function T_(d){var f=pt(d)?$s:jw;return f(d)}function Zf(d,f,w){(w?bi(d,f,w):f===l)?f=1:f=mt(f);var S=pt(d)?pf:Vw;return S(d,f)}function Km(d){var f=pt(d)?Ip:Hw;return f(d)}function M_(d){if(d==null)return 0;if(xi(d))return ac(d)?no(d):d.length;var f=se(d);return f==re||f==ke?d.size:wf(d).length}function Jf(d,f,w){var S=pt(d)?ja:Ww;return w&&bi(d,f,w)&&(f=l),S(d,et(f,3))}var Lt=_t(function(d,f){if(d==null)return[];var w=f.length;return w>1&&bi(d,f[0],f[1])?f=[]:w>2&&bi(f[0],f[1],f[2])&&(f=[f[0]]),Al(d,Jn(f,1),[])}),Su=Ka||function(){return wn.Date.now()};function Qm(d,f){if(typeof f!="function")throw new Ci(_);return d=mt(d),function(){if(--d<1)return f.apply(this,arguments)}}function Zm(d,f,w){return f=w?l:f,f=d&&f==null?d.length:f,tr(d,de,l,l,l,l,f)}function Jm(d,f){var w;if(typeof f!="function")throw new Ci(_);return d=mt(d),function(){return--d>0&&(w=f.apply(this,arguments)),d<=1&&(f=l),w}}var Tu=_t(function(d,f,w){var S=we;if(w.length){var O=xo(w,Oi(Tu));S|=_e}return tr(d,S,f,w,O)}),Xf=_t(function(d,f,w){var S=we|ee;if(w.length){var O=xo(w,Oi(Xf));S|=_e}return tr(f,S,d,w,O)});function eg(d,f,w){f=w?l:f;var S=tr(d,ie,l,l,l,l,l,f);return S.placeholder=eg.placeholder,S}function tg(d,f,w){f=w?l:f;var S=tr(d,fe,l,l,l,l,l,f);return S.placeholder=tg.placeholder,S}function ta(d,f,w){var S,O,F,U,K,te,pe=0,be=!1,Ee=!1,je=!0;if(typeof d!="function")throw new Ci(_);f=Ki(f)||0,_n(w)&&(be=!!w.leading,Ee="maxWait"in w,F=Ee?Bn(Ki(w.maxWait)||0,f):F,je="trailing"in w?!!w.trailing:je);function Qe(zn){var go=S,Pr=O;return S=O=l,pe=zn,U=d.apply(Pr,go),U}function at(zn){return pe=zn,K=Js(Ct,f),be?Qe(zn):U}function vt(zn){var go=zn-te,Pr=zn-pe,Qb=f-go;return Ee?fi(Qb,F-Pr):Qb}function lt(zn){var go=zn-te,Pr=zn-pe;return te===l||go>=f||go<0||Ee&&Pr>=F}function Ct(){var zn=Su();if(lt(zn))return Tt(zn);K=Js(Ct,vt(zn))}function Tt(zn){return K=l,je&&S?Qe(zn):(S=O=l,U)}function Ri(){K!==l&&Gp(K),pe=0,S=te=O=K=l}function ci(){return K===l?U:Tt(Su())}function Qi(){var zn=Su(),go=lt(zn);if(S=arguments,O=this,te=zn,go){if(K===l)return at(te);if(Ee)return Gp(K),K=Js(Ct,f),Qe(te)}return K===l&&(K=Js(Ct,f)),U}return Qi.cancel=Ri,Qi.flush=ci,Qi}var I_=_t(function(d,f){return mf(d,1,f)}),ng=_t(function(d,f,w){return mf(d,Ki(f)||0,w)});function oc(d){return tr(d,ye)}function Mu(d,f){if(typeof d!="function"||f!=null&&typeof f!="function")throw new Ci(_);var w=function(){var S=arguments,O=f?f.apply(this,S):S[0],F=w.cache;if(F.has(O))return F.get(O);var U=d.apply(this,S);return w.cache=F.set(O,U)||F,U};return w.cache=new(Mu.Cache||Jo),w}Mu.Cache=Jo;function zl(d){if(typeof d!="function")throw new Ci(_);return function(){var f=arguments;switch(f.length){case 0:return!d.call(this);case 1:return!d.call(this,f[0]);case 2:return!d.call(this,f[0],f[1]);case 3:return!d.call(this,f[0],f[1],f[2])}return!d.apply(this,f)}}function P_(d){return Jm(2,d)}var N_=Mf(function(d,f){f=f.length==1&&pt(f[0])?sn(f[0],vi(et())):sn(Jn(f,1),vi(et()));var w=f.length;return _t(function(S){for(var O=-1,F=fi(S.length,w);++O<F;)S[O]=f[O].call(this,S[O]);return oi(d,this,S)})}),ig=_t(function(d,f){var w=xo(f,Oi(ig));return tr(d,_e,l,f,w)}),Xm=_t(function(d,f){var w=xo(f,Oi(Xm));return tr(d,Ie,l,f,w)}),O_=mi(function(d,f){return tr(d,le,l,l,l,f)});function B_(d,f){if(typeof d!="function")throw new Ci(_);return f=f===l?f:mt(f),_t(d,f)}function L_(d,f){if(typeof d!="function")throw new Ci(_);return f=f==null?0:Bn(mt(f),0),_t(function(w){var S=w[f],O=ss(w,0,f);return S&&to(O,S),oi(d,this,O)})}function R_(d,f,w){var S=!0,O=!0;if(typeof d!="function")throw new Ci(_);return _n(w)&&(S="leading"in w?!!w.leading:S,O="trailing"in w?!!w.trailing:O),ta(d,f,{leading:S,maxWait:f,trailing:O})}function z_(d){return Zm(d,1)}function og(d,f){return ig(Tf(f),d)}function na(){if(!arguments.length)return[];var d=arguments[0];return pt(d)?d:[d]}function No(d){return oo(d,z)}function Fl(d,f){return f=typeof f=="function"?f:l,oo(d,z,f)}function F_(d){return oo(d,N|z)}function eb(d,f){return f=typeof f=="function"?f:l,oo(d,N|z,f)}function Iu(d,f){return f==null||ru(d,f,ti(f))}function ho(d,f){return d===f||d!==d&&f!==f}var j_=Sl(cu),V_=Sl(function(d,f){return d>=f}),ia=ct(function(){return arguments}())?ct:function(d){return vn(d)&&It.call(d,"callee")&&!H.call(d,"callee")},pt=ce.isArray,tb=Kc?vi(Kc):Bp;function xi(d){return d!=null&&jl(d.length)&&!Mr(d)}function In(d){return vn(d)&&xi(d)}function nb(d){return d===!0||d===!1||vn(d)&&pi(d)==ne}var Tr=$d||Hl,rc=Qc?vi(Qc):zw;function Pu(d){return vn(d)&&d.nodeType===1&&!sc(d)}function rg(d){if(d==null)return!0;if(xi(d)&&(pt(d)||typeof d=="string"||typeof d.splice=="function"||Tr(d)||oa(d)||ia(d)))return!d.length;var f=se(d);if(f==re||f==ke)return!d.size;if(ki(d))return!wf(d).length;for(var w in d)if(It.call(d,w))return!1;return!0}function sg(d,f){return kl(d,f)}function ib(d,f,w){w=typeof w=="function"?w:l;var S=w?w(d,f):l;return S===l?kl(d,f,l,w):!!S}function Nu(d){if(!vn(d))return!1;var f=pi(d);return f==nt||f==$e||typeof d.message=="string"&&typeof d.name=="string"&&!sc(d)}function ob(d){return typeof d=="number"&&qd(d)}function Mr(d){if(!_n(d))return!1;var f=pi(d);return f==V||f==G||f==De||f==xe}function Et(d){return typeof d=="number"&&d==mt(d)}function jl(d){return typeof d=="number"&&d>-1&&d%1==0&&d<=ut}function _n(d){var f=typeof d;return d!=null&&(f=="object"||f=="function")}function vn(d){return d!=null&&typeof d=="object"}var Ou=Md?vi(Md):Rp;function rb(d,f){return d===f||lu(d,f,Qs(f))}function U_(d,f,w){return w=typeof w=="function"?w:l,lu(d,f,Qs(f),w)}function sb(d){return cg(d)&&d!=+d}function ab(d){if(Il(d))throw new ft(k);return zp(d)}function Ei(d){return d===null}function ag(d){return d==null}function cg(d){return typeof d=="number"||vn(d)&&pi(d)==ue}function sc(d){if(!vn(d)||pi(d)!=Se)return!1;var f=x(d);if(f===null)return!0;var w=It.call(f,"constructor")&&f.constructor;return typeof w=="function"&&w instanceof w&&hi.call(w)==sf}var lg=Rs?vi(Rs):Fp;function cb(d){return Et(d)&&d>=-ut&&d<=ut}var Gn=Zc?vi(Zc):du;function ac(d){return typeof d=="string"||!pt(d)&&vn(d)&&pi(d)==Ve}function Gi(d){return typeof d=="symbol"||vn(d)&&pi(d)==We}var oa=Jc?vi(Jc):jp;function Bu(d){return d===l}function H_(d){return vn(d)&&se(d)==qe}function dg(d){return vn(d)&&pi(d)==ze}var lb=Sl(ec),Rn=Sl(function(d,f){return d<=f});function Lu(d){if(!d)return[];if(xi(d))return ac(d)?Un(d):Ni(d);if(hn&&d[hn])return rf(d[hn]());var f=se(d),w=f==re?$a:f==ke?Vs:sa;return w(d)}function Oo(d){if(!d)return d===0?d:0;if(d=Ki(d),d===He||d===-He){var f=d<0?-1:1;return f*An}return d===d?d:0}function mt(d){var f=Oo(d),w=f%1;return f===f?w?f-w:f:0}function db(d){return d?yr(mt(d),0,zt):0}function Ki(d){if(typeof d=="number")return d;if(Gi(d))return jn;if(_n(d)){var f=typeof d.valueOf=="function"?d.valueOf():d;d=_n(f)?f+"":f}if(typeof d!="string")return d===0?d:+d;d=el(d);var w=Is.test(d);return w||wt.test(d)?Zh(d.slice(2),w?2:8):mr.test(d)?jn:+d}function ub(d){return Xo(d,Di(d))}function ra(d){return d?yr(mt(d),-ut,ut):d===0?d:0}function Yt(d){return d==null?"":$i(d)}var W_=er(function(d,f){if(ki(f)||xi(f)){Xo(f,ti(f),d);return}for(var w in f)It.call(f,w)&&es(d,w,f[w])}),cn=er(function(d,f){Xo(f,Di(f),d)}),Vl=er(function(d,f,w,S){Xo(f,Di(f),d,S)}),Y_=er(function(d,f,w,S){Xo(f,ti(f),d,S)}),Ru=mi(ou);function hb(d,f){var w=Zn(d);return f==null?w:iu(w,f)}var $_=_t(function(d,f){d=jt(d);var w=-1,S=f.length,O=S>2?f[2]:l;for(O&&bi(f[0],f[1],O)&&(S=1);++w<S;)for(var F=f[w],U=Di(F),K=-1,te=U.length;++K<te;){var pe=U[K],be=d[pe];(be===l||ho(be,Qn[pe])&&!It.call(d,pe))&&(d[pe]=F[pe])}return d}),fb=_t(function(d){return d.push(l,wu),oi(kb,l,d)});function q_(d,f){return Va(d,et(f,3),Tn)}function gb(d,f){return Va(d,et(f,3),qs)}function G_(d,f){return d==null?d:au(d,et(f,3),Di)}function ug(d,f){return d==null?d:gl(d,et(f,3),Di)}function K_(d,f){return d&&Tn(d,et(f,3))}function pb(d,f){return d&&qs(d,et(f,3))}function Q_(d){return d==null?[]:pl(d,ti(d))}function cc(d){return d==null?[]:pl(d,Di(d))}function hs(d,f,w){var S=d==null?l:Gs(d,f);return S===l?w:S}function hg(d,f){return d!=null&&Tl(d,f,ml)}function zu(d,f){return d!=null&&Tl(d,f,Np)}var Z_=El(function(d,f,w){f!=null&&typeof f.toString!="function"&&(f=qa.call(f)),d[f]=w},Ag(Si)),mb=El(function(d,f,w){f!=null&&typeof f.toString!="function"&&(f=qa.call(f)),It.call(d,f)?d[f].push(w):d[f]=[w]},et),bb=_t(bl);function ti(d){return xi(d)?Mp(d):wf(d)}function Di(d){return xi(d)?Mp(d,!0):Fw(d)}function J_(d,f){var w={};return f=et(f,3),Tn(d,function(S,O,F){yi(w,f(S,O,F),S)}),w}function fg(d,f){var w={};return f=et(f,3),Tn(d,function(S,O,F){yi(w,O,f(S,O,F))}),w}var X_=er(function(d,f,w){_l(d,f,w)}),kb=er(function(d,f,w,S){_l(d,f,w,S)}),e0=mi(function(d,f){var w={};if(d==null)return w;var S=!1;f=sn(f,function(F){return F=Er(F,d),S||(S=F.length>1),F}),Xo(d,Zt(d),w),S&&(w=oo(w,N|D|z,qw));for(var O=f.length;O--;)xf(w,f[O]);return w});function wb(d,f){return _b(d,zl(et(f)))}var t0=mi(function(d,f){return d==null?{}:uu(d,f)});function _b(d,f){if(d==null)return{};var w=sn(Zt(d),function(S){return[S]});return f=et(f),Hp(d,w,function(S,O){return f(S,O[0])})}function vb(d,f,w){f=Er(f,d);var S=-1,O=f.length;for(O||(O=1,d=l);++S<O;){var F=d==null?l:d[Io(f[S])];F===l&&(S=O,F=w),d=Mr(F)?F.call(d):F}return d}function n0(d,f,w){return d==null?d:Cl(d,f,w)}function Ab(d,f,w,S){return S=typeof S=="function"?S:l,d==null?d:Cl(d,f,w,S)}var Cb=Lf(ti),gg=Lf(Di);function i0(d,f,w){var S=pt(d),O=S||Tr(d)||oa(d);if(f=et(f,4),w==null){var F=d&&d.constructor;O?w=S?new F:[]:_n(d)?w=Mr(F)?Zn(x(d)):{}:w={}}return(O?ui:Tn)(d,function(U,K,te){return f(w,U,K,te)}),w}function fs(d,f){return d==null?!0:xf(d,f)}function pg(d,f,w){return d==null?d:xl(d,f,Tf(w))}function yb(d,f,w,S){return S=typeof S=="function"?S:l,d==null?d:xl(d,f,Tf(w),S)}function sa(d){return d==null?[]:Wa(d,ti(d))}function xb(d){return d==null?[]:Wa(d,Di(d))}function o0(d,f,w){return w===l&&(w=f,f=l),w!==l&&(w=Ki(w),w=w===w?w:0),f!==l&&(f=Ki(f),f=f===f?f:0),yr(Ki(d),f,w)}function r0(d,f,w){return f=Oo(f),w===l?(w=f,f=0):w=Oo(w),d=Ki(d),Op(d,f,w)}function Eb(d,f,w){if(w&&typeof w!="boolean"&&bi(d,f,w)&&(f=w=l),w===l&&(typeof f=="boolean"?(w=f,f=l):typeof d=="boolean"&&(w=d,d=l)),d===l&&f===l?(d=0,f=1):(d=Oo(d),f===l?(f=d,d=0):f=Oo(f)),d>f){var S=d;d=f,f=S}if(w||d%1||f%1){var O=Xr();return fi(d+O*(f-d+Qh("1e-"+((O+"").length-1))),f)}return is(d,f)}var s0=ao(function(d,f,w){return f=f.toLowerCase(),d+(w?mg(f):f)});function mg(d){return _g(Yt(d).toLowerCase())}function Db(d){return d=Yt(d),d&&d.replace(jh,zd).replace(Yc,"")}function a0(d,f,w){d=Yt(d),f=$i(f);var S=d.length;w=w===l?S:yr(mt(w),0,S);var O=w;return w-=f.length,w>=0&&d.slice(w,O)==f}function c0(d){return d=Yt(d),d&&Ta.test(d)?d.replace(ht,nf):d}function Sb(d){return d=Yt(d),d&&Nh.test(d)?d.replace(Ma,"\\$&"):d}var l0=ao(function(d,f,w){return d+(w?"-":"")+f.toLowerCase()}),Tb=ao(function(d,f,w){return d+(w?" ":"")+f.toLowerCase()}),d0=fn("toLowerCase");function u0(d,f,w){d=Yt(d),f=mt(f);var S=f?no(d):0;if(!f||S>=f)return d;var O=(f-S)/2;return mn(Yd(O),w)+d+mn(Wd(O),w)}function h0(d,f,w){d=Yt(d),f=mt(f);var S=f?no(d):0;return f&&S<f?d+mn(f-S,w):d}function Mb(d,f,w){d=Yt(d),f=mt(f);var S=f?no(d):0;return f&&S<f?mn(f-S,w)+d:d}function f0(d,f,w){return w||f==null?f=0:f&&(f=+f),Dw(Yt(d).replace(Ts,""),f||0)}function bg(d,f,w){return(w?bi(d,f,w):f===l)?f=1:f=mt(f),Cf(Yt(d),f)}function kg(){var d=arguments,f=Yt(d[0]);return d.length<3?f:f.replace(d[1],d[2])}var wg=ao(function(d,f,w){return d+(w?"_":"")+f.toLowerCase()});function Ib(d,f,w){return w&&typeof w!="number"&&bi(d,f,w)&&(f=w=l),w=w===l?zt:w>>>0,w?(d=Yt(d),d&&(typeof f=="string"||f!=null&&!lg(f))&&(f=$i(f),!f&&yo(d))?ss(Un(d),0,w):d.split(f,w)):[]}var Pb=ao(function(d,f,w){return d+(w?" ":"")+_g(f)});function g0(d,f,w){return d=Yt(d),w=w==null?0:yr(mt(w),0,d.length),f=$i(f),d.slice(w,w+f.length)==f}function Nb(d,f,w){var S=R.templateSettings;w&&bi(d,f,w)&&(f=l),d=Yt(d),f=Vl({},f,S,Rf);var O=Vl({},f.imports,S.imports,Rf),F=ti(O),U=Wa(O,F),K,te,pe=0,be=f.interpolate||Ia,Ee="__p += '",je=Eo((f.escape||Ia).source+"|"+be.source+"|"+(be===Ho?Bc:Ia).source+"|"+(f.evaluate||Ia).source+"|$","g"),Qe="//# sourceURL="+(It.call(f,"sourceURL")?(f.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Gh+"]")+`
`;d.replace(je,function(lt,Ct,Tt,Ri,ci,Qi){return Tt||(Tt=Ri),Ee+=d.slice(pe,Qi).replace(Vh,Fd),Ct&&(K=!0,Ee+=`' +
__e(`+Ct+`) +
'`),ci&&(te=!0,Ee+=`';
`+ci+`;
__p += '`),Tt&&(Ee+=`' +
((__t = (`+Tt+`)) == null ? '' : __t) +
'`),pe=Qi+lt.length,lt}),Ee+=`';
`;var at=It.call(f,"variable")&&f.variable;if(!at)Ee=`with (obj) {
`+Ee+`
}
`;else if(Rh.test(at))throw new ft(E);Ee=(te?Ee.replace(Nc,""):Ee).replace(Th,"$1").replace(pd,"$1;"),Ee="function("+(at||"obj")+`) {
`+(at?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(K?", __e = _.escape":"")+(te?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Ee+`return __p
}`;var vt=Bb(function(){return Bt(F,Qe+"return "+Ee).apply(l,U)});if(vt.source=Ee,Nu(vt))throw vt;return vt}function p0(d){return Yt(d).toLowerCase()}function Fu(d){return Yt(d).toUpperCase()}function ju(d,f,w){if(d=Yt(d),d&&(w||f===l))return el(d);if(!d||!(f=$i(f)))return d;var S=Un(d),O=Un(f),F=Ld(S,O),U=Ya(S,O)+1;return ss(S,F,U).join("")}function m0(d,f,w){if(d=Yt(d),d&&(w||f===l))return d.slice(0,il(d)+1);if(!d||!(f=$i(f)))return d;var S=Un(d),O=Ya(S,Un(f))+1;return ss(S,0,O).join("")}function b0(d,f,w){if(d=Yt(d),d&&(w||f===l))return d.replace(Ts,"");if(!d||!(f=$i(f)))return d;var S=Un(d),O=Ld(S,Un(f));return ss(S,O).join("")}function Ob(d,f){var w=Pe,S=Le;if(_n(f)){var O="separator"in f?f.separator:O;w="length"in f?mt(f.length):w,S="omission"in f?$i(f.omission):S}d=Yt(d);var F=d.length;if(yo(d)){var U=Un(d);F=U.length}if(w>=F)return d;var K=w-no(S);if(K<1)return S;var te=U?ss(U,0,K).join(""):d.slice(0,K);if(O===l)return te+S;if(U&&(K+=te.length-K),lg(O)){if(d.slice(K).search(O)){var pe,be=te;for(O.global||(O=Eo(O.source,Yt(bd.exec(O))+"g")),O.lastIndex=0;pe=O.exec(be);)var Ee=pe.index;te=te.slice(0,Ee===l?K:Ee)}}else if(d.indexOf($i(O),K)!=K){var je=te.lastIndexOf(O);je>-1&&(te=te.slice(0,je))}return te+S}function k0(d){return d=Yt(d),d&&Yr.test(d)?d.replace(md,Vd):d}var Ul=ao(function(d,f,w){return d+(w?" ":"")+f.toUpperCase()}),_g=fn("toUpperCase");function vg(d,f,w){return d=Yt(d),f=w?l:f,f===l?of(d)?Wi(d):Od(d):d.match(f)||[]}var Bb=_t(function(d,f){try{return oi(d,l,f)}catch(w){return Nu(w)?w:new ft(w)}}),w0=mi(function(d,f){return ui(f,function(w){w=Io(w),yi(d,w,Tu(d[w],d))}),d});function Lb(d){var f=d==null?0:d.length,w=et();return d=f?sn(d,function(S){if(typeof S[1]!="function")throw new Ci(_);return[w(S[0]),S[1]]}):[],_t(function(S){for(var O=-1;++O<f;){var F=d[O];if(oi(F[0],this,S))return oi(F[1],this,S)}})}function _0(d){return Pp(oo(d,N))}function Ag(d){return function(){return d}}function Cg(d,f){return d==null||d!==d?f:d}var yg=im(),Rb=im(!0);function Si(d){return d}function fo(d){return Vp(typeof d=="function"?d:oo(d,N))}function zb(d){return wl(oo(d,N))}function v0(d,f){return vf(d,oo(f,N))}var Fb=_t(function(d,f){return function(w){return bl(w,d,f)}}),A0=_t(function(d,f){return function(w){return bl(d,w,f)}});function Vu(d,f,w){var S=ti(f),O=pl(f,S);w==null&&!(_n(f)&&(O.length||!S.length))&&(w=f,f=d,d=this,O=pl(f,ti(f)));var F=!(_n(w)&&"chain"in w)||!!w.chain,U=Mr(d);return ui(O,function(K){var te=f[K];d[K]=te,U&&(d.prototype[K]=function(){var pe=this.__chain__;if(F||pe){var be=d(this.__wrapped__),Ee=be.__actions__=Ni(this.__actions__);return Ee.push({func:te,args:arguments,thisArg:d}),be.__chain__=pe,be}return te.apply(d,to([this.value()],arguments))})}),d}function Uu(){return wn._===this&&(wn._=af),this}function Hu(){}function jb(d){return d=mt(d),_t(function(f){return vl(f,d)})}var Vb=bu(sn),gs=bu(Fa),lc=bu(ja);function dc(d){return Ml(d)?Co(Io(d)):Wp(d)}function Ub(d){return function(f){return d==null?l:Gs(d,f)}}var C0=Of(),ps=Of(!0);function xg(){return[]}function Hl(){return!1}function y0(){return{}}function Wu(){return""}function x0(){return!0}function Hb(d,f){if(d=mt(d),d<1||d>ut)return[];var w=zt,S=fi(d,zt);f=et(f),d-=zt;for(var O=js(S,f);++w<d;)f(w);return O}function xn(d){return pt(d)?sn(d,Io):Gi(d)?[d]:Ni(pm(Yt(d)))}function Eg(d){var f=++Go;return Yt(d)+f}var E0=Dl(function(d,f){return d+f},0),D0=Bf("ceil"),Wb=Dl(function(d,f){return d/f},1),S0=Bf("floor");function Yb(d){return d&&d.length?fl(d,Si,cu):l}function $b(d,f){return d&&d.length?fl(d,et(f,2),cu):l}function T0(d){return Xc(d,Si)}function Ir(d,f){return Xc(d,et(f,2))}function aa(d){return d&&d.length?fl(d,Si,ec):l}function ms(d,f){return d&&d.length?fl(d,et(f,2),ec):l}var qb=Dl(function(d,f){return d*f},1),M0=Bf("round"),Gb=Dl(function(d,f){return d-f},0);function I0(d){return d&&d.length?Zr(d,Si):0}function Kb(d,f){return d&&d.length?Zr(d,et(f,2)):0}return R.after=Qm,R.ary=Zm,R.assign=W_,R.assignIn=cn,R.assignInWith=Vl,R.assignWith=Y_,R.at=Ru,R.before=Jm,R.bind=Tu,R.bindAll=w0,R.bindKey=Xf,R.castArray=na,R.chain=ir,R.chunk=km,R.compact=Yf,R.concat=$f,R.cond=Lb,R.conforms=_0,R.constant=Ag,R.countBy=y_,R.create=hb,R.curry=eg,R.curryRight=tg,R.debounce=ta,R.defaults=$_,R.defaultsDeep=fb,R.defer=I_,R.delay=ng,R.difference=wm,R.differenceBy=_m,R.differenceWith=vm,R.drop=Jw,R.dropRight=Xw,R.dropRightWhile=Ol,R.dropWhile=xu,R.fill=e_,R.filter=x_,R.flatMap=jm,R.flatMapDeep=ai,R.flatMapDepth=D_,R.flatten=Cm,R.flattenDeep=t_,R.flattenDepth=n_,R.flip=oc,R.flow=yg,R.flowRight=Rb,R.fromPairs=i_,R.functions=Q_,R.functionsIn=cc,R.groupBy=Hm,R.initial=r_,R.intersection=s_,R.intersectionBy=a_,R.intersectionWith=Xs,R.invert=Z_,R.invertBy=mb,R.invokeMap=Qf,R.iteratee=fo,R.keyBy=Ym,R.keys=ti,R.keysIn=Di,R.map=Rl,R.mapKeys=J_,R.mapValues=fg,R.matches=zb,R.matchesProperty=v0,R.memoize=Mu,R.merge=X_,R.mergeWith=kb,R.method=Fb,R.methodOf=A0,R.mixin=Vu,R.negate=zl,R.nthArg=jb,R.omit=e0,R.omitBy=wb,R.once=P_,R.orderBy=$m,R.over=Vb,R.overArgs=N_,R.overEvery=gs,R.overSome=lc,R.partial=ig,R.partialRight=Xm,R.partition=qm,R.pick=t0,R.pickBy=_b,R.property=dc,R.propertyOf=Ub,R.pull=d_,R.pullAll=Em,R.pullAllBy=u_,R.pullAllWith=h_,R.pullAt=qf,R.range=C0,R.rangeRight=ps,R.rearg=O_,R.reject=Gm,R.remove=Dm,R.rest=B_,R.reverse=us,R.sampleSize=Zf,R.set=n0,R.setWith=Ab,R.shuffle=Km,R.slice=f_,R.sortBy=Lt,R.sortedUniq=Mm,R.sortedUniqBy=b_,R.split=Ib,R.spread=L_,R.tail=k_,R.take=Gf,R.takeRight=w_,R.takeRightWhile=Im,R.takeWhile=__,R.tap=Mn,R.throttle=R_,R.thru=Wt,R.toArray=Lu,R.toPairs=Cb,R.toPairsIn=gg,R.toPath=xn,R.toPlainObject=ub,R.transform=i0,R.unary=z_,R.union=nc,R.unionBy=uo,R.unionWith=Kf,R.uniq=Pm,R.uniqBy=Bl,R.uniqWith=Nm,R.unset=fs,R.unzip=ea,R.unzipWith=ic,R.update=pg,R.updateWith=yb,R.values=sa,R.valuesIn=xb,R.without=Om,R.words=vg,R.wrap=og,R.xor=Bm,R.xorBy=Ln,R.xorWith=Ut,R.zip=Xn,R.zipObject=Bi,R.zipObjectDeep=ei,R.zipWith=Li,R.entries=Cb,R.entriesIn=gg,R.extend=cn,R.extendWith=Vl,Vu(R,R),R.add=E0,R.attempt=Bb,R.camelCase=s0,R.capitalize=mg,R.ceil=D0,R.clamp=o0,R.clone=No,R.cloneDeep=F_,R.cloneDeepWith=eb,R.cloneWith=Fl,R.conformsTo=Iu,R.deburr=Db,R.defaultTo=Cg,R.divide=Wb,R.endsWith=a0,R.eq=ho,R.escape=c0,R.escapeRegExp=Sb,R.every=zm,R.find=E_,R.findIndex=Am,R.findKey=q_,R.findLast=Fm,R.findLastIndex=ds,R.findLastKey=gb,R.floor=S0,R.forEach=Vm,R.forEachRight=Um,R.forIn=G_,R.forInRight=ug,R.forOwn=K_,R.forOwnRight=pb,R.get=hs,R.gt=j_,R.gte=V_,R.has=hg,R.hasIn=zu,R.head=ym,R.identity=Si,R.includes=Wm,R.indexOf=o_,R.inRange=r0,R.invoke=bb,R.isArguments=ia,R.isArray=pt,R.isArrayBuffer=tb,R.isArrayLike=xi,R.isArrayLikeObject=In,R.isBoolean=nb,R.isBuffer=Tr,R.isDate=rc,R.isElement=Pu,R.isEmpty=rg,R.isEqual=sg,R.isEqualWith=ib,R.isError=Nu,R.isFinite=ob,R.isFunction=Mr,R.isInteger=Et,R.isLength=jl,R.isMap=Ou,R.isMatch=rb,R.isMatchWith=U_,R.isNaN=sb,R.isNative=ab,R.isNil=ag,R.isNull=Ei,R.isNumber=cg,R.isObject=_n,R.isObjectLike=vn,R.isPlainObject=sc,R.isRegExp=lg,R.isSafeInteger=cb,R.isSet=Gn,R.isString=ac,R.isSymbol=Gi,R.isTypedArray=oa,R.isUndefined=Bu,R.isWeakMap=H_,R.isWeakSet=dg,R.join=c_,R.kebabCase=l0,R.last=lo,R.lastIndexOf=xm,R.lowerCase=Tb,R.lowerFirst=d0,R.lt=lb,R.lte=Rn,R.max=Yb,R.maxBy=$b,R.mean=T0,R.meanBy=Ir,R.min=aa,R.minBy=ms,R.stubArray=xg,R.stubFalse=Hl,R.stubObject=y0,R.stubString=Wu,R.stubTrue=x0,R.multiply=qb,R.nth=l_,R.noConflict=Uu,R.noop=Hu,R.now=Su,R.pad=u0,R.padEnd=h0,R.padStart=Mb,R.parseInt=f0,R.random=Eb,R.reduce=S_,R.reduceRight=Du,R.repeat=bg,R.replace=kg,R.result=vb,R.round=M0,R.runInContext=J,R.sample=T_,R.size=M_,R.snakeCase=wg,R.some=Jf,R.sortedIndex=Sm,R.sortedIndexBy=g_,R.sortedIndexOf=p_,R.sortedLastIndex=m_,R.sortedLastIndexBy=Eu,R.sortedLastIndexOf=Tm,R.startCase=Pb,R.startsWith=g0,R.subtract=Gb,R.sum=I0,R.sumBy=Kb,R.template=Nb,R.times=Hb,R.toFinite=Oo,R.toInteger=mt,R.toLength=db,R.toLower=p0,R.toNumber=Ki,R.toSafeInteger=ra,R.toString=Yt,R.toUpper=Fu,R.trim=ju,R.trimEnd=m0,R.trimStart=b0,R.truncate=Ob,R.unescape=k0,R.uniqueId=Eg,R.upperCase=Ul,R.upperFirst=_g,R.each=Vm,R.eachRight=Um,R.first=ym,Vu(R,function(){var d={};return Tn(R,function(f,w){It.call(R.prototype,w)||(d[w]=f)}),d}(),{chain:!1}),R.VERSION=h,ui(["bind","bindKey","curry","curryRight","partial","partialRight"],function(d){R[d].placeholder=R}),ui(["drop","take"],function(d,f){yt.prototype[d]=function(w){w=w===l?1:Bn(mt(w),0);var S=this.__filtered__&&!f?new yt(this):this.clone();return S.__filtered__?S.__takeCount__=fi(w,S.__takeCount__):S.__views__.push({size:fi(w,zt),type:d+(S.__dir__<0?"Right":"")}),S},yt.prototype[d+"Right"]=function(w){return this.reverse()[d](w).reverse()}}),ui(["filter","map","takeWhile"],function(d,f){var w=f+1,S=w==Me||w==Xe;yt.prototype[d]=function(O){var F=this.clone();return F.__iteratees__.push({iteratee:et(O,3),type:w}),F.__filtered__=F.__filtered__||S,F}}),ui(["head","last"],function(d,f){var w="take"+(f?"Right":"");yt.prototype[d]=function(){return this[w](1).value()[0]}}),ui(["initial","tail"],function(d,f){var w="drop"+(f?"":"Right");yt.prototype[d]=function(){return this.__filtered__?new yt(this):this[w](1)}}),yt.prototype.compact=function(){return this.filter(Si)},yt.prototype.find=function(d){return this.filter(d).head()},yt.prototype.findLast=function(d){return this.reverse().find(d)},yt.prototype.invokeMap=_t(function(d,f){return typeof d=="function"?new yt(this):this.map(function(w){return bl(w,d,f)})}),yt.prototype.reject=function(d){return this.filter(zl(et(d)))},yt.prototype.slice=function(d,f){d=mt(d);var w=this;return w.__filtered__&&(d>0||f<0)?new yt(w):(d<0?w=w.takeRight(-d):d&&(w=w.drop(d)),f!==l&&(f=mt(f),w=f<0?w.dropRight(-f):w.take(f-d)),w)},yt.prototype.takeRightWhile=function(d){return this.reverse().takeWhile(d).reverse()},yt.prototype.toArray=function(){return this.take(zt)},Tn(yt.prototype,function(d,f){var w=/^(?:filter|find|map|reject)|While$/.test(f),S=/^(?:head|last)$/.test(f),O=R[S?"take"+(f=="last"?"Right":""):f],F=S||/^find/.test(f);!O||(R.prototype[f]=function(){var U=this.__wrapped__,K=S?[1]:arguments,te=U instanceof yt,pe=K[0],be=te||pt(U),Ee=function(Ct){var Tt=O.apply(R,to([Ct],K));return S&&je?Tt[0]:Tt};be&&w&&typeof pe=="function"&&pe.length!=1&&(te=be=!1);var je=this.__chain__,Qe=!!this.__actions__.length,at=F&&!je,vt=te&&!Qe;if(!F&&be){U=vt?U:new yt(this);var lt=d.apply(U,K);return lt.__actions__.push({func:Wt,args:[Ee],thisArg:l}),new gi(lt,je)}return at&&vt?d.apply(this,K):(lt=this.thru(Ee),at?S?lt.value()[0]:lt.value():lt)})}),ui(["pop","push","shift","sort","splice","unshift"],function(d){var f=io[d],w=/^(?:push|sort|unshift)$/.test(d)?"tap":"thru",S=/^(?:pop|shift)$/.test(d);R.prototype[d]=function(){var O=arguments;if(S&&!this.__chain__){var F=this.value();return f.apply(pt(F)?F:[],O)}return this[w](function(U){return f.apply(pt(U)?U:[],O)})}}),Tn(yt.prototype,function(d,f){var w=R[f];if(w){var S=w.name+"";It.call(Za,S)||(Za[S]=[]),Za[S].push({name:f,func:w})}}),Za[mu(l,ee).name]=[{name:"wrapper",func:l}],yt.prototype.clone=Xd,yt.prototype.reverse=Dp,yt.prototype.value=Sp,R.prototype.at=Po,R.prototype.chain=v_,R.prototype.commit=A_,R.prototype.next=Sr,R.prototype.plant=Lm,R.prototype.reverse=Rm,R.prototype.toJSON=R.prototype.valueOf=R.prototype.value=Ll,R.prototype.first=R.prototype.head,hn&&(R.prototype[hn]=C_),R},un=Hd();qo?((qo.exports=un)._=un,qc._=un):wn._=un}).call(pa)})(xv,xv.exports);const II=xv.exports;function fE(i,a){return function(){return i.apply(a,arguments)}}const{toString:gE}=Object.prototype,{getPrototypeOf:sA}=Object,aA=(i=>a=>{const l=gE.call(a);return i[l]||(i[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),xa=i=>(i=i.toLowerCase(),a=>aA(a)===i),Vk=i=>a=>typeof a===i,{isArray:ap}=Array,Ev=Vk("undefined");function PI(i){return i!==null&&!Ev(i)&&i.constructor!==null&&!Ev(i.constructor)&&vh(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const pE=xa("ArrayBuffer");function NI(i){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(i):a=i&&i.buffer&&pE(i.buffer),a}const OI=Vk("string"),vh=Vk("function"),mE=Vk("number"),bE=i=>i!==null&&typeof i=="object",BI=i=>i===!0||i===!1,vk=i=>{if(aA(i)!=="object")return!1;const a=sA(i);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},LI=xa("Date"),RI=xa("File"),zI=xa("Blob"),FI=xa("FileList"),jI=i=>bE(i)&&vh(i.pipe),VI=i=>{const a="[object FormData]";return i&&(typeof FormData=="function"&&i instanceof FormData||gE.call(i)===a||vh(i.toString)&&i.toString()===a)},UI=xa("URLSearchParams"),HI=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Uk(i,a,{allOwnKeys:l=!1}={}){if(i===null||typeof i>"u")return;let h,p;if(typeof i!="object"&&(i=[i]),ap(i))for(h=0,p=i.length;h<p;h++)a.call(null,i[h],h,i);else{const k=l?Object.getOwnPropertyNames(i):Object.keys(i),_=k.length;let E;for(h=0;h<_;h++)E=k[h],a.call(null,i[E],E,i)}}function Dv(){const i={},a=(l,h)=>{vk(i[h])&&vk(l)?i[h]=Dv(i[h],l):vk(l)?i[h]=Dv({},l):ap(l)?i[h]=l.slice():i[h]=l};for(let l=0,h=arguments.length;l<h;l++)arguments[l]&&Uk(arguments[l],a);return i}const WI=(i,a,l,{allOwnKeys:h}={})=>(Uk(a,(p,k)=>{l&&vh(p)?i[k]=fE(p,l):i[k]=p},{allOwnKeys:h}),i),YI=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),$I=(i,a,l,h)=>{i.prototype=Object.create(a.prototype,h),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:a.prototype}),l&&Object.assign(i.prototype,l)},qI=(i,a,l,h)=>{let p,k,_;const E={};if(a=a||{},i==null)return a;do{for(p=Object.getOwnPropertyNames(i),k=p.length;k-- >0;)_=p[k],(!h||h(_,i,a))&&!E[_]&&(a[_]=i[_],E[_]=!0);i=l!==!1&&sA(i)}while(i&&(!l||l(i,a))&&i!==Object.prototype);return a},GI=(i,a,l)=>{i=String(i),(l===void 0||l>i.length)&&(l=i.length),l-=a.length;const h=i.indexOf(a,l);return h!==-1&&h===l},KI=i=>{if(!i)return null;if(ap(i))return i;let a=i.length;if(!mE(a))return null;const l=new Array(a);for(;a-- >0;)l[a]=i[a];return l},QI=(i=>a=>i&&a instanceof i)(typeof Uint8Array<"u"&&sA(Uint8Array)),ZI=(i,a)=>{const h=(i&&i[Symbol.iterator]).call(i);let p;for(;(p=h.next())&&!p.done;){const k=p.value;a.call(i,k[0],k[1])}},JI=(i,a)=>{let l;const h=[];for(;(l=i.exec(a))!==null;)h.push(l);return h},XI=xa("HTMLFormElement"),e5=i=>i.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(l,h,p){return h.toUpperCase()+p}),Q1=(({hasOwnProperty:i})=>(a,l)=>i.call(a,l))(Object.prototype),t5=xa("RegExp"),kE=(i,a)=>{const l=Object.getOwnPropertyDescriptors(i),h={};Uk(l,(p,k)=>{a(p,k,i)!==!1&&(h[k]=p)}),Object.defineProperties(i,h)},n5=i=>{kE(i,(a,l)=>{const h=i[l];if(!!vh(h)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not read-only method '"+l+"'")})}})},i5=(i,a)=>{const l={},h=p=>{p.forEach(k=>{l[k]=!0})};return ap(i)?h(i):h(String(i).split(a)),l},o5=()=>{},r5=(i,a)=>(i=+i,Number.isFinite(i)?i:a),Ce={isArray:ap,isArrayBuffer:pE,isBuffer:PI,isFormData:VI,isArrayBufferView:NI,isString:OI,isNumber:mE,isBoolean:BI,isObject:bE,isPlainObject:vk,isUndefined:Ev,isDate:LI,isFile:RI,isBlob:zI,isRegExp:t5,isFunction:vh,isStream:jI,isURLSearchParams:UI,isTypedArray:QI,isFileList:FI,forEach:Uk,merge:Dv,extend:WI,trim:HI,stripBOM:YI,inherits:$I,toFlatObject:qI,kindOf:aA,kindOfTest:xa,endsWith:GI,toArray:KI,forEachEntry:ZI,matchAll:JI,isHTMLForm:XI,hasOwnProperty:Q1,hasOwnProp:Q1,reduceDescriptors:kE,freezeMethods:n5,toObjectSet:i5,toCamelCase:e5,noop:o5,toFiniteNumber:r5};function Jt(i,a,l,h,p){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",a&&(this.code=a),l&&(this.config=l),h&&(this.request=h),p&&(this.response=p)}Ce.inherits(Jt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const wE=Jt.prototype,_E={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{_E[i]={value:i}});Object.defineProperties(Jt,_E);Object.defineProperty(wE,"isAxiosError",{value:!0});Jt.from=(i,a,l,h,p,k)=>{const _=Object.create(wE);return Ce.toFlatObject(i,_,function(A){return A!==Error.prototype},E=>E!=="isAxiosError"),Jt.call(_,i.message,a,l,h,p),_.cause=i,_.name=i.name,k&&Object.assign(_,k),_};var s5=typeof self=="object"?self.FormData:window.FormData;function Sv(i){return Ce.isPlainObject(i)||Ce.isArray(i)}function vE(i){return Ce.endsWith(i,"[]")?i.slice(0,-2):i}function Z1(i,a,l){return i?i.concat(a).map(function(p,k){return p=vE(p),!l&&k?"["+p+"]":p}).join(l?".":""):a}function a5(i){return Ce.isArray(i)&&!i.some(Sv)}const c5=Ce.toFlatObject(Ce,{},null,function(a){return/^is[A-Z]/.test(a)});function l5(i){return i&&Ce.isFunction(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator]}function Hk(i,a,l){if(!Ce.isObject(i))throw new TypeError("target must be an object");a=a||new(s5||FormData),l=Ce.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(ae,we){return!Ce.isUndefined(we[ae])});const h=l.metaTokens,p=l.visitor||I,k=l.dots,_=l.indexes,A=(l.Blob||typeof Blob<"u"&&Blob)&&l5(a);if(!Ce.isFunction(p))throw new TypeError("visitor must be a function");function T(Z){if(Z===null)return"";if(Ce.isDate(Z))return Z.toISOString();if(!A&&Ce.isBlob(Z))throw new Jt("Blob is not supported. Use a Buffer instead.");return Ce.isArrayBuffer(Z)||Ce.isTypedArray(Z)?A&&typeof Blob=="function"?new Blob([Z]):Buffer.from(Z):Z}function I(Z,ae,we){let ee=Z;if(Z&&!we&&typeof Z=="object"){if(Ce.endsWith(ae,"{}"))ae=h?ae:ae.slice(0,-2),Z=JSON.stringify(Z);else if(Ce.isArray(Z)&&a5(Z)||Ce.isFileList(Z)||Ce.endsWith(ae,"[]")&&(ee=Ce.toArray(Z)))return ae=vE(ae),ee.forEach(function(ie,fe){!(Ce.isUndefined(ie)||ie===null)&&a.append(_===!0?Z1([ae],fe,k):_===null?ae:ae+"[]",T(ie))}),!1}return Sv(Z)?!0:(a.append(Z1(we,ae,k),T(Z)),!1)}const N=[],D=Object.assign(c5,{defaultVisitor:I,convertValue:T,isVisitable:Sv});function z(Z,ae){if(!Ce.isUndefined(Z)){if(N.indexOf(Z)!==-1)throw Error("Circular reference detected in "+ae.join("."));N.push(Z),Ce.forEach(Z,function(ee,q){(!(Ce.isUndefined(ee)||ee===null)&&p.call(a,ee,Ce.isString(q)?q.trim():q,ae,D))===!0&&z(ee,ae?ae.concat(q):[q])}),N.pop()}}if(!Ce.isObject(i))throw new TypeError("data must be an object");return z(i),a}function J1(i){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(h){return a[h]})}function cA(i,a){this._pairs=[],i&&Hk(i,this,a)}const AE=cA.prototype;AE.append=function(a,l){this._pairs.push([a,l])};AE.toString=function(a){const l=a?function(h){return a.call(this,h,J1)}:J1;return this._pairs.map(function(p){return l(p[0])+"="+l(p[1])},"").join("&")};function d5(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function CE(i,a,l){if(!a)return i;const h=l&&l.encode||d5,p=l&&l.serialize;let k;if(p?k=p(a,l):k=Ce.isURLSearchParams(a)?a.toString():new cA(a,l).toString(h),k){const _=i.indexOf("#");_!==-1&&(i=i.slice(0,_)),i+=(i.indexOf("?")===-1?"?":"&")+k}return i}class X1{constructor(){this.handlers=[]}use(a,l,h){return this.handlers.push({fulfilled:a,rejected:l,synchronous:h?h.synchronous:!1,runWhen:h?h.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){Ce.forEach(this.handlers,function(h){h!==null&&a(h)})}}const yE={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},u5=typeof URLSearchParams<"u"?URLSearchParams:cA,h5=FormData,f5=(()=>{let i;return typeof navigator<"u"&&((i=navigator.product)==="ReactNative"||i==="NativeScript"||i==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),wa={isBrowser:!0,classes:{URLSearchParams:u5,FormData:h5,Blob},isStandardBrowserEnv:f5,protocols:["http","https","file","blob","url","data"]};function g5(i,a){return Hk(i,new wa.classes.URLSearchParams,Object.assign({visitor:function(l,h,p,k){return wa.isNode&&Ce.isBuffer(l)?(this.append(h,l.toString("base64")),!1):k.defaultVisitor.apply(this,arguments)}},a))}function p5(i){return Ce.matchAll(/\w+|\[(\w*)]/g,i).map(a=>a[0]==="[]"?"":a[1]||a[0])}function m5(i){const a={},l=Object.keys(i);let h;const p=l.length;let k;for(h=0;h<p;h++)k=l[h],a[k]=i[k];return a}function xE(i){function a(l,h,p,k){let _=l[k++];const E=Number.isFinite(+_),A=k>=l.length;return _=!_&&Ce.isArray(p)?p.length:_,A?(Ce.hasOwnProp(p,_)?p[_]=[p[_],h]:p[_]=h,!E):((!p[_]||!Ce.isObject(p[_]))&&(p[_]=[]),a(l,h,p[_],k)&&Ce.isArray(p[_])&&(p[_]=m5(p[_])),!E)}if(Ce.isFormData(i)&&Ce.isFunction(i.entries)){const l={};return Ce.forEachEntry(i,(h,p)=>{a(p5(h),p,l,0)}),l}return null}function b5(i,a,l){const h=l.config.validateStatus;!l.status||!h||h(l.status)?i(l):a(new Jt("Request failed with status code "+l.status,[Jt.ERR_BAD_REQUEST,Jt.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}const k5=wa.isStandardBrowserEnv?function(){return{write:function(l,h,p,k,_,E){const A=[];A.push(l+"="+encodeURIComponent(h)),Ce.isNumber(p)&&A.push("expires="+new Date(p).toGMTString()),Ce.isString(k)&&A.push("path="+k),Ce.isString(_)&&A.push("domain="+_),E===!0&&A.push("secure"),document.cookie=A.join("; ")},read:function(l){const h=document.cookie.match(new RegExp("(^|;\\s*)("+l+")=([^;]*)"));return h?decodeURIComponent(h[3]):null},remove:function(l){this.write(l,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function w5(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function _5(i,a){return a?i.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):i}function EE(i,a){return i&&!w5(a)?_5(i,a):a}const v5=wa.isStandardBrowserEnv?function(){const a=/(msie|trident)/i.test(navigator.userAgent),l=document.createElement("a");let h;function p(k){let _=k;return a&&(l.setAttribute("href",_),_=l.href),l.setAttribute("href",_),{href:l.href,protocol:l.protocol?l.protocol.replace(/:$/,""):"",host:l.host,search:l.search?l.search.replace(/^\?/,""):"",hash:l.hash?l.hash.replace(/^#/,""):"",hostname:l.hostname,port:l.port,pathname:l.pathname.charAt(0)==="/"?l.pathname:"/"+l.pathname}}return h=p(window.location.href),function(_){const E=Ce.isString(_)?p(_):_;return E.protocol===h.protocol&&E.host===h.host}}():function(){return function(){return!0}}();function cp(i,a,l){Jt.call(this,i==null?"canceled":i,Jt.ERR_CANCELED,a,l),this.name="CanceledError"}Ce.inherits(cp,Jt,{__CANCEL__:!0});function A5(i){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return a&&a[1]||""}const C5=Ce.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),y5=i=>{const a={};let l,h,p;return i&&i.split(`
`).forEach(function(_){p=_.indexOf(":"),l=_.substring(0,p).trim().toLowerCase(),h=_.substring(p+1).trim(),!(!l||a[l]&&C5[l])&&(l==="set-cookie"?a[l]?a[l].push(h):a[l]=[h]:a[l]=a[l]?a[l]+", "+h:h)}),a},ex=Symbol("internals"),DE=Symbol("defaults");function Og(i){return i&&String(i).trim().toLowerCase()}function Ak(i){return i===!1||i==null?i:Ce.isArray(i)?i.map(Ak):String(i)}function x5(i){const a=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let h;for(;h=l.exec(i);)a[h[1]]=h[2];return a}function tx(i,a,l,h){if(Ce.isFunction(h))return h.call(this,a,l);if(!!Ce.isString(a)){if(Ce.isString(h))return a.indexOf(h)!==-1;if(Ce.isRegExp(h))return h.test(a)}}function E5(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,l,h)=>l.toUpperCase()+h)}function D5(i,a){const l=Ce.toCamelCase(" "+a);["get","set","has"].forEach(h=>{Object.defineProperty(i,h+l,{value:function(p,k,_){return this[h].call(this,a,p,k,_)},configurable:!0})})}function Sg(i,a){a=a.toLowerCase();const l=Object.keys(i);let h=l.length,p;for(;h-- >0;)if(p=l[h],a===p.toLowerCase())return p;return null}function dr(i,a){i&&this.set(i),this[DE]=a||null}Object.assign(dr.prototype,{set:function(i,a,l){const h=this;function p(k,_,E){const A=Og(_);if(!A)throw new Error("header name must be a non-empty string");const T=Sg(h,A);T&&E!==!0&&(h[T]===!1||E===!1)||(h[T||_]=Ak(k))}return Ce.isPlainObject(i)?Ce.forEach(i,(k,_)=>{p(k,_,a)}):p(a,i,l),this},get:function(i,a){if(i=Og(i),!i)return;const l=Sg(this,i);if(l){const h=this[l];if(!a)return h;if(a===!0)return x5(h);if(Ce.isFunction(a))return a.call(this,h,l);if(Ce.isRegExp(a))return a.exec(h);throw new TypeError("parser must be boolean|regexp|function")}},has:function(i,a){if(i=Og(i),i){const l=Sg(this,i);return!!(l&&(!a||tx(this,this[l],l,a)))}return!1},delete:function(i,a){const l=this;let h=!1;function p(k){if(k=Og(k),k){const _=Sg(l,k);_&&(!a||tx(l,l[_],_,a))&&(delete l[_],h=!0)}}return Ce.isArray(i)?i.forEach(p):p(i),h},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(i){const a=this,l={};return Ce.forEach(this,(h,p)=>{const k=Sg(l,p);if(k){a[k]=Ak(h),delete a[p];return}const _=i?E5(p):String(p).trim();_!==p&&delete a[p],a[_]=Ak(h),l[_]=!0}),this},toJSON:function(i){const a=Object.create(null);return Ce.forEach(Object.assign({},this[DE]||null,this),(l,h)=>{l==null||l===!1||(a[h]=i&&Ce.isArray(l)?l.join(", "):l)}),a}});Object.assign(dr,{from:function(i){return Ce.isString(i)?new this(y5(i)):i instanceof this?i:new this(i)},accessor:function(i){const l=(this[ex]=this[ex]={accessors:{}}).accessors,h=this.prototype;function p(k){const _=Og(k);l[_]||(D5(h,k),l[_]=!0)}return Ce.isArray(i)?i.forEach(p):p(i),this}});dr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);Ce.freezeMethods(dr.prototype);Ce.freezeMethods(dr);function S5(i,a){i=i||10;const l=new Array(i),h=new Array(i);let p=0,k=0,_;return a=a!==void 0?a:1e3,function(A){const T=Date.now(),I=h[k];_||(_=T),l[p]=A,h[p]=T;let N=k,D=0;for(;N!==p;)D+=l[N++],N=N%i;if(p=(p+1)%i,p===k&&(k=(k+1)%i),T-_<a)return;const z=I&&T-I;return z?Math.round(D*1e3/z):void 0}}function nx(i,a){let l=0;const h=S5(50,250);return p=>{const k=p.loaded,_=p.lengthComputable?p.total:void 0,E=k-l,A=h(E),T=k<=_;l=k;const I={loaded:k,total:_,progress:_?k/_:void 0,bytes:E,rate:A||void 0,estimated:A&&_&&T?(_-k)/A:void 0};I[a?"download":"upload"]=!0,i(I)}}function ix(i){return new Promise(function(l,h){let p=i.data;const k=dr.from(i.headers).normalize(),_=i.responseType;let E;function A(){i.cancelToken&&i.cancelToken.unsubscribe(E),i.signal&&i.signal.removeEventListener("abort",E)}Ce.isFormData(p)&&wa.isStandardBrowserEnv&&k.setContentType(!1);let T=new XMLHttpRequest;if(i.auth){const z=i.auth.username||"",Z=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";k.set("Authorization","Basic "+btoa(z+":"+Z))}const I=EE(i.baseURL,i.url);T.open(i.method.toUpperCase(),CE(I,i.params,i.paramsSerializer),!0),T.timeout=i.timeout;function N(){if(!T)return;const z=dr.from("getAllResponseHeaders"in T&&T.getAllResponseHeaders()),ae={data:!_||_==="text"||_==="json"?T.responseText:T.response,status:T.status,statusText:T.statusText,headers:z,config:i,request:T};b5(function(ee){l(ee),A()},function(ee){h(ee),A()},ae),T=null}if("onloadend"in T?T.onloadend=N:T.onreadystatechange=function(){!T||T.readyState!==4||T.status===0&&!(T.responseURL&&T.responseURL.indexOf("file:")===0)||setTimeout(N)},T.onabort=function(){!T||(h(new Jt("Request aborted",Jt.ECONNABORTED,i,T)),T=null)},T.onerror=function(){h(new Jt("Network Error",Jt.ERR_NETWORK,i,T)),T=null},T.ontimeout=function(){let Z=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const ae=i.transitional||yE;i.timeoutErrorMessage&&(Z=i.timeoutErrorMessage),h(new Jt(Z,ae.clarifyTimeoutError?Jt.ETIMEDOUT:Jt.ECONNABORTED,i,T)),T=null},wa.isStandardBrowserEnv){const z=(i.withCredentials||v5(I))&&i.xsrfCookieName&&k5.read(i.xsrfCookieName);z&&k.set(i.xsrfHeaderName,z)}p===void 0&&k.setContentType(null),"setRequestHeader"in T&&Ce.forEach(k.toJSON(),function(Z,ae){T.setRequestHeader(ae,Z)}),Ce.isUndefined(i.withCredentials)||(T.withCredentials=!!i.withCredentials),_&&_!=="json"&&(T.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&T.addEventListener("progress",nx(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&T.upload&&T.upload.addEventListener("progress",nx(i.onUploadProgress)),(i.cancelToken||i.signal)&&(E=z=>{!T||(h(!z||z.type?new cp(null,i,T):z),T.abort(),T=null)},i.cancelToken&&i.cancelToken.subscribe(E),i.signal&&(i.signal.aborted?E():i.signal.addEventListener("abort",E)));const D=A5(I);if(D&&wa.protocols.indexOf(D)===-1){h(new Jt("Unsupported protocol "+D+":",Jt.ERR_BAD_REQUEST,i));return}T.send(p||null)})}const ox={http:ix,xhr:ix},rx={getAdapter:i=>{if(Ce.isString(i)){const a=ox[i];if(!i)throw Error(Ce.hasOwnProp(i)?`Adapter '${i}' is not available in the build`:`Can not resolve adapter '${i}'`);return a}if(!Ce.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:ox},T5={"Content-Type":"application/x-www-form-urlencoded"};function M5(){let i;return typeof XMLHttpRequest<"u"?i=rx.getAdapter("xhr"):typeof process<"u"&&Ce.kindOf(process)==="process"&&(i=rx.getAdapter("http")),i}function I5(i,a,l){if(Ce.isString(i))try{return(a||JSON.parse)(i),Ce.trim(i)}catch(h){if(h.name!=="SyntaxError")throw h}return(l||JSON.stringify)(i)}const Ah={transitional:yE,adapter:M5(),transformRequest:[function(a,l){const h=l.getContentType()||"",p=h.indexOf("application/json")>-1,k=Ce.isObject(a);if(k&&Ce.isHTMLForm(a)&&(a=new FormData(a)),Ce.isFormData(a))return p&&p?JSON.stringify(xE(a)):a;if(Ce.isArrayBuffer(a)||Ce.isBuffer(a)||Ce.isStream(a)||Ce.isFile(a)||Ce.isBlob(a))return a;if(Ce.isArrayBufferView(a))return a.buffer;if(Ce.isURLSearchParams(a))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let E;if(k){if(h.indexOf("application/x-www-form-urlencoded")>-1)return g5(a,this.formSerializer).toString();if((E=Ce.isFileList(a))||h.indexOf("multipart/form-data")>-1){const A=this.env&&this.env.FormData;return Hk(E?{"files[]":a}:a,A&&new A,this.formSerializer)}}return k||p?(l.setContentType("application/json",!1),I5(a)):a}],transformResponse:[function(a){const l=this.transitional||Ah.transitional,h=l&&l.forcedJSONParsing,p=this.responseType==="json";if(a&&Ce.isString(a)&&(h&&!this.responseType||p)){const _=!(l&&l.silentJSONParsing)&&p;try{return JSON.parse(a)}catch(E){if(_)throw E.name==="SyntaxError"?Jt.from(E,Jt.ERR_BAD_RESPONSE,this,null,this.response):E}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:wa.classes.FormData,Blob:wa.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Ce.forEach(["delete","get","head"],function(a){Ah.headers[a]={}});Ce.forEach(["post","put","patch"],function(a){Ah.headers[a]=Ce.merge(T5)});function cv(i,a){const l=this||Ah,h=a||l,p=dr.from(h.headers);let k=h.data;return Ce.forEach(i,function(E){k=E.call(l,k,p.normalize(),a?a.status:void 0)}),p.normalize(),k}function SE(i){return!!(i&&i.__CANCEL__)}function lv(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new cp}function sx(i){return lv(i),i.headers=dr.from(i.headers),i.data=cv.call(i,i.transformRequest),(i.adapter||Ah.adapter)(i).then(function(h){return lv(i),h.data=cv.call(i,i.transformResponse,h),h.headers=dr.from(h.headers),h},function(h){return SE(h)||(lv(i),h&&h.response&&(h.response.data=cv.call(i,i.transformResponse,h.response),h.response.headers=dr.from(h.response.headers))),Promise.reject(h)})}function Kg(i,a){a=a||{};const l={};function h(T,I){return Ce.isPlainObject(T)&&Ce.isPlainObject(I)?Ce.merge(T,I):Ce.isPlainObject(I)?Ce.merge({},I):Ce.isArray(I)?I.slice():I}function p(T){if(Ce.isUndefined(a[T])){if(!Ce.isUndefined(i[T]))return h(void 0,i[T])}else return h(i[T],a[T])}function k(T){if(!Ce.isUndefined(a[T]))return h(void 0,a[T])}function _(T){if(Ce.isUndefined(a[T])){if(!Ce.isUndefined(i[T]))return h(void 0,i[T])}else return h(void 0,a[T])}function E(T){if(T in a)return h(i[T],a[T]);if(T in i)return h(void 0,i[T])}const A={url:k,method:k,data:k,baseURL:_,transformRequest:_,transformResponse:_,paramsSerializer:_,timeout:_,timeoutMessage:_,withCredentials:_,adapter:_,responseType:_,xsrfCookieName:_,xsrfHeaderName:_,onUploadProgress:_,onDownloadProgress:_,decompress:_,maxContentLength:_,maxBodyLength:_,beforeRedirect:_,transport:_,httpAgent:_,httpsAgent:_,cancelToken:_,socketPath:_,responseEncoding:_,validateStatus:E};return Ce.forEach(Object.keys(i).concat(Object.keys(a)),function(I){const N=A[I]||p,D=N(I);Ce.isUndefined(D)&&N!==E||(l[I]=D)}),l}const TE="1.1.3",lA={};["object","boolean","number","function","string","symbol"].forEach((i,a)=>{lA[i]=function(h){return typeof h===i||"a"+(a<1?"n ":" ")+i}});const ax={};lA.transitional=function(a,l,h){function p(k,_){return"[Axios v"+TE+"] Transitional option '"+k+"'"+_+(h?". "+h:"")}return(k,_,E)=>{if(a===!1)throw new Jt(p(_," has been removed"+(l?" in "+l:"")),Jt.ERR_DEPRECATED);return l&&!ax[_]&&(ax[_]=!0,console.warn(p(_," has been deprecated since v"+l+" and will be removed in the near future"))),a?a(k,_,E):!0}};function P5(i,a,l){if(typeof i!="object")throw new Jt("options must be an object",Jt.ERR_BAD_OPTION_VALUE);const h=Object.keys(i);let p=h.length;for(;p-- >0;){const k=h[p],_=a[k];if(_){const E=i[k],A=E===void 0||_(E,k,i);if(A!==!0)throw new Jt("option "+k+" must be "+A,Jt.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new Jt("Unknown option "+k,Jt.ERR_BAD_OPTION)}}const Tv={assertOptions:P5,validators:lA},hc=Tv.validators;class ed{constructor(a){this.defaults=a,this.interceptors={request:new X1,response:new X1}}request(a,l){typeof a=="string"?(l=l||{},l.url=a):l=a||{},l=Kg(this.defaults,l);const{transitional:h,paramsSerializer:p}=l;h!==void 0&&Tv.assertOptions(h,{silentJSONParsing:hc.transitional(hc.boolean),forcedJSONParsing:hc.transitional(hc.boolean),clarifyTimeoutError:hc.transitional(hc.boolean)},!1),p!==void 0&&Tv.assertOptions(p,{encode:hc.function,serialize:hc.function},!0),l.method=(l.method||this.defaults.method||"get").toLowerCase();const k=l.headers&&Ce.merge(l.headers.common,l.headers[l.method]);k&&Ce.forEach(["delete","get","head","post","put","patch","common"],function(Z){delete l.headers[Z]}),l.headers=new dr(l.headers,k);const _=[];let E=!0;this.interceptors.request.forEach(function(Z){typeof Z.runWhen=="function"&&Z.runWhen(l)===!1||(E=E&&Z.synchronous,_.unshift(Z.fulfilled,Z.rejected))});const A=[];this.interceptors.response.forEach(function(Z){A.push(Z.fulfilled,Z.rejected)});let T,I=0,N;if(!E){const z=[sx.bind(this),void 0];for(z.unshift.apply(z,_),z.push.apply(z,A),N=z.length,T=Promise.resolve(l);I<N;)T=T.then(z[I++],z[I++]);return T}N=_.length;let D=l;for(I=0;I<N;){const z=_[I++],Z=_[I++];try{D=z(D)}catch(ae){Z.call(this,ae);break}}try{T=sx.call(this,D)}catch(z){return Promise.reject(z)}for(I=0,N=A.length;I<N;)T=T.then(A[I++],A[I++]);return T}getUri(a){a=Kg(this.defaults,a);const l=EE(a.baseURL,a.url);return CE(l,a.params,a.paramsSerializer)}}Ce.forEach(["delete","get","head","options"],function(a){ed.prototype[a]=function(l,h){return this.request(Kg(h||{},{method:a,url:l,data:(h||{}).data}))}});Ce.forEach(["post","put","patch"],function(a){function l(h){return function(k,_,E){return this.request(Kg(E||{},{method:a,headers:h?{"Content-Type":"multipart/form-data"}:{},url:k,data:_}))}}ed.prototype[a]=l(),ed.prototype[a+"Form"]=l(!0)});class dA{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(k){l=k});const h=this;this.promise.then(p=>{if(!h._listeners)return;let k=h._listeners.length;for(;k-- >0;)h._listeners[k](p);h._listeners=null}),this.promise.then=p=>{let k;const _=new Promise(E=>{h.subscribe(E),k=E}).then(p);return _.cancel=function(){h.unsubscribe(k)},_},a(function(k,_,E){h.reason||(h.reason=new cp(k,_,E),l(h.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const l=this._listeners.indexOf(a);l!==-1&&this._listeners.splice(l,1)}static source(){let a;return{token:new dA(function(p){a=p}),cancel:a}}}function N5(i){return function(l){return i.apply(null,l)}}function O5(i){return Ce.isObject(i)&&i.isAxiosError===!0}function ME(i){const a=new ed(i),l=fE(ed.prototype.request,a);return Ce.extend(l,ed.prototype,a,{allOwnKeys:!0}),Ce.extend(l,a,null,{allOwnKeys:!0}),l.create=function(p){return ME(Kg(i,p))},l}const _o=ME(Ah);_o.Axios=ed;_o.CanceledError=cp;_o.CancelToken=dA;_o.isCancel=SE;_o.VERSION=TE;_o.toFormData=Hk;_o.AxiosError=Jt;_o.Cancel=_o.CanceledError;_o.all=function(a){return Promise.all(a)};_o.spread=N5;_o.isAxiosError=O5;_o.formToJSON=i=>xE(Ce.isHTMLForm(i)?new FormData(i):i);window._=II;window.axios=_o;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";function Wk(i,a){const l=Object.create(null),h=i.split(",");for(let p=0;p<h.length;p++)l[h[p]]=!0;return a?p=>!!l[p.toLowerCase()]:p=>!!l[p]}const B5="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",L5=Wk(B5);function lp(i){if(Ze(i)){const a={};for(let l=0;l<i.length;l++){const h=i[l],p=Fn(h)?j5(h):lp(h);if(p)for(const k in p)a[k]=p[k]}return a}else{if(Fn(i))return i;if(kn(i))return i}}const R5=/;(?![^(]*\))/g,z5=/:([^]+)/,F5=/\/\*.*?\*\//gs;function j5(i){const a={};return i.replace(F5,"").split(R5).forEach(l=>{if(l){const h=l.split(z5);h.length>1&&(a[h[0].trim()]=h[1].trim())}}),a}function dp(i){let a="";if(Fn(i))a=i;else if(Ze(i))for(let l=0;l<i.length;l++){const h=dp(i[l]);h&&(a+=h+" ")}else if(kn(i))for(const l in i)i[l]&&(a+=l+" ");return a.trim()}function V5(i){if(!i)return null;let{class:a,style:l}=i;return a&&!Fn(a)&&(i.class=dp(a)),l&&(i.style=lp(l)),i}const U5="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",H5=Wk(U5);function IE(i){return!!i||i===""}function W5(i,a){if(i.length!==a.length)return!1;let l=!0;for(let h=0;l&&h<i.length;h++)l=Ec(i[h],a[h]);return l}function Ec(i,a){if(i===a)return!0;let l=cx(i),h=cx(a);if(l||h)return l&&h?i.getTime()===a.getTime():!1;if(l=Qg(i),h=Qg(a),l||h)return i===a;if(l=Ze(i),h=Ze(a),l||h)return l&&h?W5(i,a):!1;if(l=kn(i),h=kn(a),l||h){if(!l||!h)return!1;const p=Object.keys(i).length,k=Object.keys(a).length;if(p!==k)return!1;for(const _ in i){const E=i.hasOwnProperty(_),A=a.hasOwnProperty(_);if(E&&!A||!E&&A||!Ec(i[_],a[_]))return!1}}return String(i)===String(a)}function Yk(i,a){return i.findIndex(l=>Ec(l,a))}const Ji=i=>Fn(i)?i:i==null?"":Ze(i)||kn(i)&&(i.toString===NE||!bt(i.toString))?JSON.stringify(i,PE,2):String(i),PE=(i,a)=>a&&a.__v_isRef?PE(i,a.value):ah(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((l,[h,p])=>(l[`${h} =>`]=p,l),{})}:ud(a)?{[`Set(${a.size})`]:[...a.values()]}:kn(a)&&!Ze(a)&&!OE(a)?String(a):a,gn={},sh=[],Fr=()=>{},Y5=()=>!1,$5=/^on[^a-z]/,up=i=>$5.test(i),uA=i=>i.startsWith("onUpdate:"),Yn=Object.assign,hA=(i,a)=>{const l=i.indexOf(a);l>-1&&i.splice(l,1)},q5=Object.prototype.hasOwnProperty,qt=(i,a)=>q5.call(i,a),Ze=Array.isArray,ah=i=>hp(i)==="[object Map]",ud=i=>hp(i)==="[object Set]",cx=i=>hp(i)==="[object Date]",bt=i=>typeof i=="function",Fn=i=>typeof i=="string",Qg=i=>typeof i=="symbol",kn=i=>i!==null&&typeof i=="object",fA=i=>kn(i)&&bt(i.then)&&bt(i.catch),NE=Object.prototype.toString,hp=i=>NE.call(i),G5=i=>hp(i).slice(8,-1),OE=i=>hp(i)==="[object Object]",gA=i=>Fn(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Rg=Wk(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$k=i=>{const a=Object.create(null);return l=>a[l]||(a[l]=i(l))},K5=/-(\w)/g,wo=$k(i=>i.replace(K5,(a,l)=>l?l.toUpperCase():"")),Q5=/\B([A-Z])/g,cr=$k(i=>i.replace(Q5,"-$1").toLowerCase()),fp=$k(i=>i.charAt(0).toUpperCase()+i.slice(1)),zg=$k(i=>i?`on${fp(i)}`:""),ph=(i,a)=>!Object.is(i,a),ch=(i,a)=>{for(let l=0;l<i.length;l++)i[l](a)},Tk=(i,a,l)=>{Object.defineProperty(i,a,{configurable:!0,enumerable:!1,value:l})},Aa=i=>{const a=parseFloat(i);return isNaN(a)?i:a};let lx;const Z5=()=>lx||(lx=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Bo;class pA{constructor(a=!1){this.detached=a,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Bo,!a&&Bo&&(this.index=(Bo.scopes||(Bo.scopes=[])).push(this)-1)}run(a){if(this.active){const l=Bo;try{return Bo=this,a()}finally{Bo=l}}}on(){Bo=this}off(){Bo=this.parent}stop(a){if(this.active){let l,h;for(l=0,h=this.effects.length;l<h;l++)this.effects[l].stop();for(l=0,h=this.cleanups.length;l<h;l++)this.cleanups[l]();if(this.scopes)for(l=0,h=this.scopes.length;l<h;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!a){const p=this.parent.scopes.pop();p&&p!==this&&(this.parent.scopes[this.index]=p,p.index=this.index)}this.parent=void 0,this.active=!1}}}function J5(i){return new pA(i)}function BE(i,a=Bo){a&&a.active&&a.effects.push(i)}function X5(){return Bo}function eP(i){Bo&&Bo.cleanups.push(i)}const mA=i=>{const a=new Set(i);return a.w=0,a.n=0,a},LE=i=>(i.w&Dc)>0,RE=i=>(i.n&Dc)>0,tP=({deps:i})=>{if(i.length)for(let a=0;a<i.length;a++)i[a].w|=Dc},nP=i=>{const{deps:a}=i;if(a.length){let l=0;for(let h=0;h<a.length;h++){const p=a[h];LE(p)&&!RE(p)?p.delete(i):a[l++]=p,p.w&=~Dc,p.n&=~Dc}a.length=l}},Mv=new WeakMap;let Bg=0,Dc=1;const Iv=30;let Rr;const td=Symbol(""),Pv=Symbol("");class gp{constructor(a,l=null,h){this.fn=a,this.scheduler=l,this.active=!0,this.deps=[],this.parent=void 0,BE(this,h)}run(){if(!this.active)return this.fn();let a=Rr,l=Cc;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=Rr,Rr=this,Cc=!0,Dc=1<<++Bg,Bg<=Iv?tP(this):dx(this),this.fn()}finally{Bg<=Iv&&nP(this),Dc=1<<--Bg,Rr=this.parent,Cc=l,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rr===this?this.deferStop=!0:this.active&&(dx(this),this.onStop&&this.onStop(),this.active=!1)}}function dx(i){const{deps:a}=i;if(a.length){for(let l=0;l<a.length;l++)a[l].delete(i);a.length=0}}function iP(i,a){i.effect&&(i=i.effect.fn);const l=new gp(i);a&&(Yn(l,a),a.scope&&BE(l,a.scope)),(!a||!a.lazy)&&l.run();const h=l.run.bind(l);return h.effect=l,h}function oP(i){i.effect.stop()}let Cc=!0;const zE=[];function Ch(){zE.push(Cc),Cc=!1}function yh(){const i=zE.pop();Cc=i===void 0?!0:i}function Vo(i,a,l){if(Cc&&Rr){let h=Mv.get(i);h||Mv.set(i,h=new Map);let p=h.get(l);p||h.set(l,p=mA()),FE(p)}}function FE(i,a){let l=!1;Bg<=Iv?RE(i)||(i.n|=Dc,l=!LE(i)):l=!i.has(Rr),l&&(i.add(Rr),Rr.deps.push(i))}function Ca(i,a,l,h,p,k){const _=Mv.get(i);if(!_)return;let E=[];if(a==="clear")E=[..._.values()];else if(l==="length"&&Ze(i)){const A=Aa(h);_.forEach((T,I)=>{(I==="length"||I>=A)&&E.push(T)})}else switch(l!==void 0&&E.push(_.get(l)),a){case"add":Ze(i)?gA(l)&&E.push(_.get("length")):(E.push(_.get(td)),ah(i)&&E.push(_.get(Pv)));break;case"delete":Ze(i)||(E.push(_.get(td)),ah(i)&&E.push(_.get(Pv)));break;case"set":ah(i)&&E.push(_.get(td));break}if(E.length===1)E[0]&&Nv(E[0]);else{const A=[];for(const T of E)T&&A.push(...T);Nv(mA(A))}}function Nv(i,a){const l=Ze(i)?i:[...i];for(const h of l)h.computed&&ux(h);for(const h of l)h.computed||ux(h)}function ux(i,a){(i!==Rr||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const rP=Wk("__proto__,__v_isRef,__isVue"),jE=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Qg)),sP=qk(),aP=qk(!1,!0),cP=qk(!0),lP=qk(!0,!0),hx=dP();function dP(){const i={};return["includes","indexOf","lastIndexOf"].forEach(a=>{i[a]=function(...l){const h=Gt(this);for(let k=0,_=this.length;k<_;k++)Vo(h,"get",k+"");const p=h[a](...l);return p===-1||p===!1?h[a](...l.map(Gt)):p}}),["push","pop","shift","unshift","splice"].forEach(a=>{i[a]=function(...l){Ch();const h=Gt(this)[a].apply(this,l);return yh(),h}}),i}function qk(i=!1,a=!1){return function(h,p,k){if(p==="__v_isReactive")return!i;if(p==="__v_isReadonly")return i;if(p==="__v_isShallow")return a;if(p==="__v_raw"&&k===(i?a?qE:$E:a?YE:WE).get(h))return h;const _=Ze(h);if(!i&&_&&qt(hx,p))return Reflect.get(hx,p,k);const E=Reflect.get(h,p,k);return(Qg(p)?jE.has(p):rP(p))||(i||Vo(h,"get",p),a)?E:wi(E)?_&&gA(p)?E:E.value:kn(E)?i?kA(E):xh(E):E}}const uP=VE(),hP=VE(!0);function VE(i=!1){return function(l,h,p,k){let _=l[h];if(ad(_)&&wi(_)&&!wi(p))return!1;if(!i&&(!Zg(p)&&!ad(p)&&(_=Gt(_),p=Gt(p)),!Ze(l)&&wi(_)&&!wi(p)))return _.value=p,!0;const E=Ze(l)&&gA(h)?Number(h)<l.length:qt(l,h),A=Reflect.set(l,h,p,k);return l===Gt(k)&&(E?ph(p,_)&&Ca(l,"set",h,p):Ca(l,"add",h,p)),A}}function fP(i,a){const l=qt(i,a);i[a];const h=Reflect.deleteProperty(i,a);return h&&l&&Ca(i,"delete",a,void 0),h}function gP(i,a){const l=Reflect.has(i,a);return(!Qg(a)||!jE.has(a))&&Vo(i,"has",a),l}function pP(i){return Vo(i,"iterate",Ze(i)?"length":td),Reflect.ownKeys(i)}const UE={get:sP,set:uP,deleteProperty:fP,has:gP,ownKeys:pP},HE={get:cP,set(i,a){return!0},deleteProperty(i,a){return!0}},mP=Yn({},UE,{get:aP,set:hP}),bP=Yn({},HE,{get:lP}),bA=i=>i,Gk=i=>Reflect.getPrototypeOf(i);function ak(i,a,l=!1,h=!1){i=i.__v_raw;const p=Gt(i),k=Gt(a);l||(a!==k&&Vo(p,"get",a),Vo(p,"get",k));const{has:_}=Gk(p),E=h?bA:l?vA:Jg;if(_.call(p,a))return E(i.get(a));if(_.call(p,k))return E(i.get(k));i!==p&&i.get(a)}function ck(i,a=!1){const l=this.__v_raw,h=Gt(l),p=Gt(i);return a||(i!==p&&Vo(h,"has",i),Vo(h,"has",p)),i===p?l.has(i):l.has(i)||l.has(p)}function lk(i,a=!1){return i=i.__v_raw,!a&&Vo(Gt(i),"iterate",td),Reflect.get(i,"size",i)}function fx(i){i=Gt(i);const a=Gt(this);return Gk(a).has.call(a,i)||(a.add(i),Ca(a,"add",i,i)),this}function gx(i,a){a=Gt(a);const l=Gt(this),{has:h,get:p}=Gk(l);let k=h.call(l,i);k||(i=Gt(i),k=h.call(l,i));const _=p.call(l,i);return l.set(i,a),k?ph(a,_)&&Ca(l,"set",i,a):Ca(l,"add",i,a),this}function px(i){const a=Gt(this),{has:l,get:h}=Gk(a);let p=l.call(a,i);p||(i=Gt(i),p=l.call(a,i)),h&&h.call(a,i);const k=a.delete(i);return p&&Ca(a,"delete",i,void 0),k}function mx(){const i=Gt(this),a=i.size!==0,l=i.clear();return a&&Ca(i,"clear",void 0,void 0),l}function dk(i,a){return function(h,p){const k=this,_=k.__v_raw,E=Gt(_),A=a?bA:i?vA:Jg;return!i&&Vo(E,"iterate",td),_.forEach((T,I)=>h.call(p,A(T),A(I),k))}}function uk(i,a,l){return function(...h){const p=this.__v_raw,k=Gt(p),_=ah(k),E=i==="entries"||i===Symbol.iterator&&_,A=i==="keys"&&_,T=p[i](...h),I=l?bA:a?vA:Jg;return!a&&Vo(k,"iterate",A?Pv:td),{next(){const{value:N,done:D}=T.next();return D?{value:N,done:D}:{value:E?[I(N[0]),I(N[1])]:I(N),done:D}},[Symbol.iterator](){return this}}}}function fc(i){return function(...a){return i==="delete"?!1:this}}function kP(){const i={get(k){return ak(this,k)},get size(){return lk(this)},has:ck,add:fx,set:gx,delete:px,clear:mx,forEach:dk(!1,!1)},a={get(k){return ak(this,k,!1,!0)},get size(){return lk(this)},has:ck,add:fx,set:gx,delete:px,clear:mx,forEach:dk(!1,!0)},l={get(k){return ak(this,k,!0)},get size(){return lk(this,!0)},has(k){return ck.call(this,k,!0)},add:fc("add"),set:fc("set"),delete:fc("delete"),clear:fc("clear"),forEach:dk(!0,!1)},h={get(k){return ak(this,k,!0,!0)},get size(){return lk(this,!0)},has(k){return ck.call(this,k,!0)},add:fc("add"),set:fc("set"),delete:fc("delete"),clear:fc("clear"),forEach:dk(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(k=>{i[k]=uk(k,!1,!1),l[k]=uk(k,!0,!1),a[k]=uk(k,!1,!0),h[k]=uk(k,!0,!0)}),[i,l,a,h]}const[wP,_P,vP,AP]=kP();function Kk(i,a){const l=a?i?AP:vP:i?_P:wP;return(h,p,k)=>p==="__v_isReactive"?!i:p==="__v_isReadonly"?i:p==="__v_raw"?h:Reflect.get(qt(l,p)&&p in h?l:h,p,k)}const CP={get:Kk(!1,!1)},yP={get:Kk(!1,!0)},xP={get:Kk(!0,!1)},EP={get:Kk(!0,!0)},WE=new WeakMap,YE=new WeakMap,$E=new WeakMap,qE=new WeakMap;function DP(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function SP(i){return i.__v_skip||!Object.isExtensible(i)?0:DP(G5(i))}function xh(i){return ad(i)?i:Qk(i,!1,UE,CP,WE)}function GE(i){return Qk(i,!1,mP,yP,YE)}function kA(i){return Qk(i,!0,HE,xP,$E)}function TP(i){return Qk(i,!0,bP,EP,qE)}function Qk(i,a,l,h,p){if(!kn(i)||i.__v_raw&&!(a&&i.__v_isReactive))return i;const k=p.get(i);if(k)return k;const _=SP(i);if(_===0)return i;const E=new Proxy(i,_===2?h:l);return p.set(i,E),E}function nd(i){return ad(i)?nd(i.__v_raw):!!(i&&i.__v_isReactive)}function ad(i){return!!(i&&i.__v_isReadonly)}function Zg(i){return!!(i&&i.__v_isShallow)}function wA(i){return nd(i)||ad(i)}function Gt(i){const a=i&&i.__v_raw;return a?Gt(a):i}function _A(i){return Tk(i,"__v_skip",!0),i}const Jg=i=>kn(i)?xh(i):i,vA=i=>kn(i)?kA(i):i;function AA(i){Cc&&Rr&&(i=Gt(i),FE(i.dep||(i.dep=mA())))}function Zk(i,a){i=Gt(i),i.dep&&Nv(i.dep)}function wi(i){return!!(i&&i.__v_isRef===!0)}function Fg(i){return QE(i,!1)}function KE(i){return QE(i,!0)}function QE(i,a){return wi(i)?i:new MP(i,a)}class MP{constructor(a,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?a:Gt(a),this._value=l?a:Jg(a)}get value(){return AA(this),this._value}set value(a){const l=this.__v_isShallow||Zg(a)||ad(a);a=l?a:Gt(a),ph(a,this._rawValue)&&(this._rawValue=a,this._value=l?a:Jg(a),Zk(this))}}function IP(i){Zk(i)}function id(i){return wi(i)?i.value:i}const PP={get:(i,a,l)=>id(Reflect.get(i,a,l)),set:(i,a,l,h)=>{const p=i[a];return wi(p)&&!wi(l)?(p.value=l,!0):Reflect.set(i,a,l,h)}};function CA(i){return nd(i)?i:new Proxy(i,PP)}class NP{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:h}=a(()=>AA(this),()=>Zk(this));this._get=l,this._set=h}get value(){return this._get()}set value(a){this._set(a)}}function OP(i){return new NP(i)}function BP(i){const a=Ze(i)?new Array(i.length):{};for(const l in i)a[l]=ZE(i,l);return a}class LP{constructor(a,l,h){this._object=a,this._key=l,this._defaultValue=h,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}}function ZE(i,a,l){const h=i[a];return wi(h)?h:new LP(i,a,l)}var JE;class RP{constructor(a,l,h,p){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this[JE]=!1,this._dirty=!0,this.effect=new gp(a,()=>{this._dirty||(this._dirty=!0,Zk(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!p,this.__v_isReadonly=h}get value(){const a=Gt(this);return AA(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}JE="__v_isReadonly";function zP(i,a,l=!1){let h,p;const k=bt(i);return k?(h=i,p=Fr):(h=i.get,p=i.set),new RP(h,p,k||!p,l)}function FP(i,...a){}function _a(i,a,l,h){let p;try{p=h?i(...h):i()}catch(k){hd(k,a,l)}return p}function jo(i,a,l,h){if(bt(i)){const k=_a(i,a,l,h);return k&&fA(k)&&k.catch(_=>{hd(_,a,l)}),k}const p=[];for(let k=0;k<i.length;k++)p.push(jo(i[k],a,l,h));return p}function hd(i,a,l,h=!0){const p=a?a.vnode:null;if(a){let k=a.parent;const _=a.proxy,E=l;for(;k;){const T=k.ec;if(T){for(let I=0;I<T.length;I++)if(T[I](i,_,E)===!1)return}k=k.parent}const A=a.appContext.config.errorHandler;if(A){_a(A,null,10,[i,_,E]);return}}jP(i,l,p,h)}function jP(i,a,l,h=!0){console.error(i)}let Xg=!1,Ov=!1;const Fi=[];let _s=0;const lh=[];let fa=null,Ql=0;const XE=Promise.resolve();let yA=null;function Jk(i){const a=yA||XE;return i?a.then(this?i.bind(this):i):a}function VP(i){let a=_s+1,l=Fi.length;for(;a<l;){const h=a+l>>>1;ep(Fi[h])<i?a=h+1:l=h}return a}function Xk(i){(!Fi.length||!Fi.includes(i,Xg&&i.allowRecurse?_s+1:_s))&&(i.id==null?Fi.push(i):Fi.splice(VP(i.id),0,i),e2())}function e2(){!Xg&&!Ov&&(Ov=!0,yA=XE.then(t2))}function UP(i){const a=Fi.indexOf(i);a>_s&&Fi.splice(a,1)}function xA(i){Ze(i)?lh.push(...i):(!fa||!fa.includes(i,i.allowRecurse?Ql+1:Ql))&&lh.push(i),e2()}function bx(i,a=Xg?_s+1:0){for(;a<Fi.length;a++){const l=Fi[a];l&&l.pre&&(Fi.splice(a,1),a--,l())}}function Mk(i){if(lh.length){const a=[...new Set(lh)];if(lh.length=0,fa){fa.push(...a);return}for(fa=a,fa.sort((l,h)=>ep(l)-ep(h)),Ql=0;Ql<fa.length;Ql++)fa[Ql]();fa=null,Ql=0}}const ep=i=>i.id==null?1/0:i.id,HP=(i,a)=>{const l=ep(i)-ep(a);if(l===0){if(i.pre&&!a.pre)return-1;if(a.pre&&!i.pre)return 1}return l};function t2(i){Ov=!1,Xg=!0,Fi.sort(HP);const a=Fr;try{for(_s=0;_s<Fi.length;_s++){const l=Fi[_s];l&&l.active!==!1&&_a(l,null,14)}}finally{_s=0,Fi.length=0,Mk(),Xg=!1,yA=null,(Fi.length||lh.length)&&t2()}}let nh,hk=[];function n2(i,a){var l,h;nh=i,nh?(nh.enabled=!0,hk.forEach(({event:p,args:k})=>nh.emit(p,...k)),hk=[]):typeof window<"u"&&window.HTMLElement&&!(!((h=(l=window.navigator)===null||l===void 0?void 0:l.userAgent)===null||h===void 0)&&h.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(k=>{n2(k,a)}),setTimeout(()=>{nh||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,hk=[])},3e3)):hk=[]}function WP(i,a,...l){if(i.isUnmounted)return;const h=i.vnode.props||gn;let p=l;const k=a.startsWith("update:"),_=k&&a.slice(7);if(_&&_ in h){const I=`${_==="modelValue"?"model":_}Modifiers`,{number:N,trim:D}=h[I]||gn;D&&(p=l.map(z=>Fn(z)?z.trim():z)),N&&(p=l.map(Aa))}let E,A=h[E=zg(a)]||h[E=zg(wo(a))];!A&&k&&(A=h[E=zg(cr(a))]),A&&jo(A,i,6,p);const T=h[E+"Once"];if(T){if(!i.emitted)i.emitted={};else if(i.emitted[E])return;i.emitted[E]=!0,jo(T,i,6,p)}}function i2(i,a,l=!1){const h=a.emitsCache,p=h.get(i);if(p!==void 0)return p;const k=i.emits;let _={},E=!1;if(!bt(i)){const A=T=>{const I=i2(T,a,!0);I&&(E=!0,Yn(_,I))};!l&&a.mixins.length&&a.mixins.forEach(A),i.extends&&A(i.extends),i.mixins&&i.mixins.forEach(A)}return!k&&!E?(kn(i)&&h.set(i,null),null):(Ze(k)?k.forEach(A=>_[A]=null):Yn(_,k),kn(i)&&h.set(i,_),_)}function ew(i,a){return!i||!up(a)?!1:(a=a.slice(2).replace(/Once$/,""),qt(i,a[0].toLowerCase()+a.slice(1))||qt(i,cr(a))||qt(i,a))}let Ii=null,tw=null;function tp(i){const a=Ii;return Ii=i,tw=i&&i.type.__scopeId||null,a}function YP(i){tw=i}function $P(){tw=null}const qP=i=>lr;function lr(i,a=Ii,l){if(!a||i._n)return i;const h=(...p)=>{h._d&&Vv(-1);const k=tp(a);let _;try{_=i(...p)}finally{tp(k),h._d&&Vv(1)}return _};return h._n=!0,h._c=!0,h._d=!0,h}function Ck(i){const{type:a,vnode:l,proxy:h,withProxy:p,props:k,propsOptions:[_],slots:E,attrs:A,emit:T,render:I,renderCache:N,data:D,setupState:z,ctx:Z,inheritAttrs:ae}=i;let we,ee;const q=tp(i);try{if(l.shapeFlag&4){const fe=p||h;we=Ro(I.call(fe,fe,N,k,z,D,Z)),ee=A}else{const fe=a;we=Ro(fe.length>1?fe(k,{attrs:A,slots:E,emit:T}):fe(k,null)),ee=a.props?A:KP(A)}}catch(fe){Hg.length=0,hd(fe,i,1),we=Mt(ji)}let ie=we;if(ee&&ae!==!1){const fe=Object.keys(ee),{shapeFlag:_e}=ie;fe.length&&_e&7&&(_&&fe.some(uA)&&(ee=QP(ee,_)),ie=xs(ie,ee))}return l.dirs&&(ie=xs(ie),ie.dirs=ie.dirs?ie.dirs.concat(l.dirs):l.dirs),l.transition&&(ie.transition=l.transition),we=ie,tp(q),we}function GP(i){let a;for(let l=0;l<i.length;l++){const h=i[l];if(Sc(h)){if(h.type!==ji||h.children==="v-if"){if(a)return;a=h}}else return}return a}const KP=i=>{let a;for(const l in i)(l==="class"||l==="style"||up(l))&&((a||(a={}))[l]=i[l]);return a},QP=(i,a)=>{const l={};for(const h in i)(!uA(h)||!(h.slice(9)in a))&&(l[h]=i[h]);return l};function ZP(i,a,l){const{props:h,children:p,component:k}=i,{props:_,children:E,patchFlag:A}=a,T=k.emitsOptions;if(a.dirs||a.transition)return!0;if(l&&A>=0){if(A&1024)return!0;if(A&16)return h?kx(h,_,T):!!_;if(A&8){const I=a.dynamicProps;for(let N=0;N<I.length;N++){const D=I[N];if(_[D]!==h[D]&&!ew(T,D))return!0}}}else return(p||E)&&(!E||!E.$stable)?!0:h===_?!1:h?_?kx(h,_,T):!0:!!_;return!1}function kx(i,a,l){const h=Object.keys(a);if(h.length!==Object.keys(i).length)return!0;for(let p=0;p<h.length;p++){const k=h[p];if(a[k]!==i[k]&&!ew(l,k))return!0}return!1}function EA({vnode:i,parent:a},l){for(;a&&a.subTree===i;)(i=a.vnode).el=l,a=a.parent}const o2=i=>i.__isSuspense,JP={name:"Suspense",__isSuspense:!0,process(i,a,l,h,p,k,_,E,A,T){i==null?eN(a,l,h,p,k,_,E,A,T):tN(i,a,l,h,p,_,E,A,T)},hydrate:nN,create:DA,normalize:iN},XP=JP;function np(i,a){const l=i.props&&i.props[a];bt(l)&&l()}function eN(i,a,l,h,p,k,_,E,A){const{p:T,o:{createElement:I}}=A,N=I("div"),D=i.suspense=DA(i,p,h,a,N,l,k,_,E,A);T(null,D.pendingBranch=i.ssContent,N,null,h,D,k,_),D.deps>0?(np(i,"onPending"),np(i,"onFallback"),T(null,i.ssFallback,a,l,h,null,k,_),dh(D,i.ssFallback)):D.resolve()}function tN(i,a,l,h,p,k,_,E,{p:A,um:T,o:{createElement:I}}){const N=a.suspense=i.suspense;N.vnode=a,a.el=i.el;const D=a.ssContent,z=a.ssFallback,{activeBranch:Z,pendingBranch:ae,isInFallback:we,isHydrating:ee}=N;if(ae)N.pendingBranch=D,vs(D,ae)?(A(ae,D,N.hiddenContainer,null,p,N,k,_,E),N.deps<=0?N.resolve():we&&(A(Z,z,l,h,p,null,k,_,E),dh(N,z))):(N.pendingId++,ee?(N.isHydrating=!1,N.activeBranch=ae):T(ae,p,N),N.deps=0,N.effects.length=0,N.hiddenContainer=I("div"),we?(A(null,D,N.hiddenContainer,null,p,N,k,_,E),N.deps<=0?N.resolve():(A(Z,z,l,h,p,null,k,_,E),dh(N,z))):Z&&vs(D,Z)?(A(Z,D,l,h,p,N,k,_,E),N.resolve(!0)):(A(null,D,N.hiddenContainer,null,p,N,k,_,E),N.deps<=0&&N.resolve()));else if(Z&&vs(D,Z))A(Z,D,l,h,p,N,k,_,E),dh(N,D);else if(np(a,"onPending"),N.pendingBranch=D,N.pendingId++,A(null,D,N.hiddenContainer,null,p,N,k,_,E),N.deps<=0)N.resolve();else{const{timeout:q,pendingId:ie}=N;q>0?setTimeout(()=>{N.pendingId===ie&&N.fallback(z)},q):q===0&&N.fallback(z)}}function DA(i,a,l,h,p,k,_,E,A,T,I=!1){const{p:N,m:D,um:z,n:Z,o:{parentNode:ae,remove:we}}=T,ee=Aa(i.props&&i.props.timeout),q={vnode:i,parent:a,parentComponent:l,isSVG:_,container:h,hiddenContainer:p,anchor:k,deps:0,pendingId:0,timeout:typeof ee=="number"?ee:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:I,isUnmounted:!1,effects:[],resolve(ie=!1){const{vnode:fe,activeBranch:_e,pendingBranch:Ie,pendingId:de,effects:le,parentComponent:ye,container:Pe}=q;if(q.isHydrating)q.isHydrating=!1;else if(!ie){const Ue=_e&&Ie.transition&&Ie.transition.mode==="out-in";Ue&&(_e.transition.afterLeave=()=>{de===q.pendingId&&D(Ie,Pe,Me,0)});let{anchor:Me}=q;_e&&(Me=Z(_e),z(_e,ye,q,!0)),Ue||D(Ie,Pe,Me,0)}dh(q,Ie),q.pendingBranch=null,q.isInFallback=!1;let Le=q.parent,$=!1;for(;Le;){if(Le.pendingBranch){Le.effects.push(...le),$=!0;break}Le=Le.parent}$||xA(le),q.effects=[],np(fe,"onResolve")},fallback(ie){if(!q.pendingBranch)return;const{vnode:fe,activeBranch:_e,parentComponent:Ie,container:de,isSVG:le}=q;np(fe,"onFallback");const ye=Z(_e),Pe=()=>{!q.isInFallback||(N(null,ie,de,ye,Ie,null,le,E,A),dh(q,ie))},Le=ie.transition&&ie.transition.mode==="out-in";Le&&(_e.transition.afterLeave=Pe),q.isInFallback=!0,z(_e,Ie,null,!0),Le||Pe()},move(ie,fe,_e){q.activeBranch&&D(q.activeBranch,ie,fe,_e),q.container=ie},next(){return q.activeBranch&&Z(q.activeBranch)},registerDep(ie,fe){const _e=!!q.pendingBranch;_e&&q.deps++;const Ie=ie.vnode.el;ie.asyncDep.catch(de=>{hd(de,ie,0)}).then(de=>{if(ie.isUnmounted||q.isUnmounted||q.pendingId!==ie.suspenseId)return;ie.asyncResolved=!0;const{vnode:le}=ie;Uv(ie,de,!1),Ie&&(le.el=Ie);const ye=!Ie&&ie.subTree.el;fe(ie,le,ae(Ie||ie.subTree.el),Ie?null:Z(ie.subTree),q,_,A),ye&&we(ye),EA(ie,le.el),_e&&--q.deps===0&&q.resolve()})},unmount(ie,fe){q.isUnmounted=!0,q.activeBranch&&z(q.activeBranch,l,ie,fe),q.pendingBranch&&z(q.pendingBranch,l,ie,fe)}};return q}function nN(i,a,l,h,p,k,_,E,A){const T=a.suspense=DA(a,h,l,i.parentNode,document.createElement("div"),null,p,k,_,E,!0),I=A(i,T.pendingBranch=a.ssContent,l,T,k,_);return T.deps===0&&T.resolve(),I}function iN(i){const{shapeFlag:a,children:l}=i,h=a&32;i.ssContent=wx(h?l.default:l),i.ssFallback=h?wx(l.fallback):Mt(ji)}function wx(i){let a;if(bt(i)){const l=dd&&i._c;l&&(i._d=!1,Dt()),i=i(),l&&(i._d=!0,a=ko,I2())}return Ze(i)&&(i=GP(i)),i=Ro(i),a&&!i.dynamicChildren&&(i.dynamicChildren=a.filter(l=>l!==i)),i}function r2(i,a){a&&a.pendingBranch?Ze(i)?a.effects.push(...i):a.effects.push(i):xA(i)}function dh(i,a){i.activeBranch=a;const{vnode:l,parentComponent:h}=i,p=l.el=a.el;h&&h.subTree===l&&(h.vnode.el=p,EA(h,p))}function jg(i,a){if(li){let l=li.provides;const h=li.parent&&li.parent.provides;h===l&&(l=li.provides=Object.create(h)),l[i]=a}}function Cs(i,a,l=!1){const h=li||Ii;if(h){const p=h.parent==null?h.vnode.appContext&&h.vnode.appContext.provides:h.parent.provides;if(p&&i in p)return p[i];if(arguments.length>1)return l&&bt(a)?a.call(h.proxy):a}}function oN(i,a){return pp(i,null,a)}function s2(i,a){return pp(i,null,{flush:"post"})}function rN(i,a){return pp(i,null,{flush:"sync"})}const fk={};function uh(i,a,l){return pp(i,a,l)}function pp(i,a,{immediate:l,deep:h,flush:p,onTrack:k,onTrigger:_}=gn){const E=li;let A,T=!1,I=!1;if(wi(i)?(A=()=>i.value,T=Zg(i)):nd(i)?(A=()=>i,h=!0):Ze(i)?(I=!0,T=i.some(ie=>nd(ie)||Zg(ie)),A=()=>i.map(ie=>{if(wi(ie))return ie.value;if(nd(ie))return Jl(ie);if(bt(ie))return _a(ie,E,2)})):bt(i)?a?A=()=>_a(i,E,2):A=()=>{if(!(E&&E.isUnmounted))return N&&N(),jo(i,E,3,[D])}:A=Fr,a&&h){const ie=A;A=()=>Jl(ie())}let N,D=ie=>{N=ee.onStop=()=>{_a(ie,E,4)}},z;if(bh)if(D=Fr,a?l&&jo(a,E,3,[A(),I?[]:void 0,D]):A(),p==="sync"){const ie=H2();z=ie.__watcherHandles||(ie.__watcherHandles=[])}else return Fr;let Z=I?new Array(i.length).fill(fk):fk;const ae=()=>{if(!!ee.active)if(a){const ie=ee.run();(h||T||(I?ie.some((fe,_e)=>ph(fe,Z[_e])):ph(ie,Z)))&&(N&&N(),jo(a,E,3,[ie,Z===fk?void 0:I&&Z[0]===fk?[]:Z,D]),Z=ie)}else ee.run()};ae.allowRecurse=!!a;let we;p==="sync"?we=ae:p==="post"?we=()=>Mi(ae,E&&E.suspense):(ae.pre=!0,E&&(ae.id=E.uid),we=()=>Xk(ae));const ee=new gp(A,we);a?l?ae():Z=ee.run():p==="post"?Mi(ee.run.bind(ee),E&&E.suspense):ee.run();const q=()=>{ee.stop(),E&&E.scope&&hA(E.scope.effects,ee)};return z&&z.push(q),q}function sN(i,a,l){const h=this.proxy,p=Fn(i)?i.includes(".")?a2(h,i):()=>h[i]:i.bind(h,h);let k;bt(a)?k=a:(k=a.handler,l=a);const _=li;Tc(this);const E=pp(p,k.bind(h),l);return _?Tc(_):yc(),E}function a2(i,a){const l=a.split(".");return()=>{let h=i;for(let p=0;p<l.length&&h;p++)h=h[l[p]];return h}}function Jl(i,a){if(!kn(i)||i.__v_skip||(a=a||new Set,a.has(i)))return i;if(a.add(i),wi(i))Jl(i.value,a);else if(Ze(i))for(let l=0;l<i.length;l++)Jl(i[l],a);else if(ud(i)||ah(i))i.forEach(l=>{Jl(l,a)});else if(OE(i))for(const l in i)Jl(i[l],a);return i}function SA(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kp(()=>{i.isMounted=!0}),rw(()=>{i.isUnmounting=!0}),i}const sr=[Function,Array],aN={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sr,onEnter:sr,onAfterEnter:sr,onEnterCancelled:sr,onBeforeLeave:sr,onLeave:sr,onAfterLeave:sr,onLeaveCancelled:sr,onBeforeAppear:sr,onAppear:sr,onAfterAppear:sr,onAppearCancelled:sr},setup(i,{slots:a}){const l=Pc(),h=SA();let p;return()=>{const k=a.default&&nw(a.default(),!0);if(!k||!k.length)return;let _=k[0];if(k.length>1){for(const ae of k)if(ae.type!==ji){_=ae;break}}const E=Gt(i),{mode:A}=E;if(h.isLeaving)return dv(_);const T=_x(_);if(!T)return dv(_);const I=mh(T,E,h,l);cd(T,I);const N=l.subTree,D=N&&_x(N);let z=!1;const{getTransitionKey:Z}=T.type;if(Z){const ae=Z();p===void 0?p=ae:ae!==p&&(p=ae,z=!0)}if(D&&D.type!==ji&&(!vs(T,D)||z)){const ae=mh(D,E,h,l);if(cd(D,ae),A==="out-in")return h.isLeaving=!0,ae.afterLeave=()=>{h.isLeaving=!1,l.update.active!==!1&&l.update()},dv(_);A==="in-out"&&T.type!==ji&&(ae.delayLeave=(we,ee,q)=>{const ie=c2(h,D);ie[String(D.key)]=D,we._leaveCb=()=>{ee(),we._leaveCb=void 0,delete I.delayedLeave},I.delayedLeave=q})}return _}}},TA=aN;function c2(i,a){const{leavingVNodes:l}=i;let h=l.get(a.type);return h||(h=Object.create(null),l.set(a.type,h)),h}function mh(i,a,l,h){const{appear:p,mode:k,persisted:_=!1,onBeforeEnter:E,onEnter:A,onAfterEnter:T,onEnterCancelled:I,onBeforeLeave:N,onLeave:D,onAfterLeave:z,onLeaveCancelled:Z,onBeforeAppear:ae,onAppear:we,onAfterAppear:ee,onAppearCancelled:q}=a,ie=String(i.key),fe=c2(l,i),_e=(le,ye)=>{le&&jo(le,h,9,ye)},Ie=(le,ye)=>{const Pe=ye[1];_e(le,ye),Ze(le)?le.every(Le=>Le.length<=1)&&Pe():le.length<=1&&Pe()},de={mode:k,persisted:_,beforeEnter(le){let ye=E;if(!l.isMounted)if(p)ye=ae||E;else return;le._leaveCb&&le._leaveCb(!0);const Pe=fe[ie];Pe&&vs(i,Pe)&&Pe.el._leaveCb&&Pe.el._leaveCb(),_e(ye,[le])},enter(le){let ye=A,Pe=T,Le=I;if(!l.isMounted)if(p)ye=we||A,Pe=ee||T,Le=q||I;else return;let $=!1;const Ue=le._enterCb=Me=>{$||($=!0,Me?_e(Le,[le]):_e(Pe,[le]),de.delayedLeave&&de.delayedLeave(),le._enterCb=void 0)};ye?Ie(ye,[le,Ue]):Ue()},leave(le,ye){const Pe=String(i.key);if(le._enterCb&&le._enterCb(!0),l.isUnmounting)return ye();_e(N,[le]);let Le=!1;const $=le._leaveCb=Ue=>{Le||(Le=!0,ye(),Ue?_e(Z,[le]):_e(z,[le]),le._leaveCb=void 0,fe[Pe]===i&&delete fe[Pe])};fe[Pe]=i,D?Ie(D,[le,$]):$()},clone(le){return mh(le,a,l,h)}};return de}function dv(i){if(bp(i))return i=xs(i),i.children=null,i}function _x(i){return bp(i)?i.children?i.children[0]:void 0:i}function cd(i,a){i.shapeFlag&6&&i.component?cd(i.component.subTree,a):i.shapeFlag&128?(i.ssContent.transition=a.clone(i.ssContent),i.ssFallback.transition=a.clone(i.ssFallback)):i.transition=a}function nw(i,a=!1,l){let h=[],p=0;for(let k=0;k<i.length;k++){let _=i[k];const E=l==null?_.key:String(l)+String(_.key!=null?_.key:k);_.type===bn?(_.patchFlag&128&&p++,h=h.concat(nw(_.children,a,E))):(a||_.type!==ji)&&h.push(E!=null?xs(_,{key:E}):_)}if(p>1)for(let k=0;k<h.length;k++)h[k].patchFlag=-2;return h}function mp(i){return bt(i)?{setup:i,name:i.name}:i}const od=i=>!!i.type.__asyncLoader;function cN(i){bt(i)&&(i={loader:i});const{loader:a,loadingComponent:l,errorComponent:h,delay:p=200,timeout:k,suspensible:_=!0,onError:E}=i;let A=null,T,I=0;const N=()=>(I++,A=null,D()),D=()=>{let z;return A||(z=A=a().catch(Z=>{if(Z=Z instanceof Error?Z:new Error(String(Z)),E)return new Promise((ae,we)=>{E(Z,()=>ae(N()),()=>we(Z),I+1)});throw Z}).then(Z=>z!==A&&A?A:(Z&&(Z.__esModule||Z[Symbol.toStringTag]==="Module")&&(Z=Z.default),T=Z,Z)))};return mp({name:"AsyncComponentWrapper",__asyncLoader:D,get __asyncResolved(){return T},setup(){const z=li;if(T)return()=>uv(T,z);const Z=q=>{A=null,hd(q,z,13,!h)};if(_&&z.suspense||bh)return D().then(q=>()=>uv(q,z)).catch(q=>(Z(q),()=>h?Mt(h,{error:q}):null));const ae=Fg(!1),we=Fg(),ee=Fg(!!p);return p&&setTimeout(()=>{ee.value=!1},p),k!=null&&setTimeout(()=>{if(!ae.value&&!we.value){const q=new Error(`Async component timed out after ${k}ms.`);Z(q),we.value=q}},k),D().then(()=>{ae.value=!0,z.parent&&bp(z.parent.vnode)&&Xk(z.parent.update)}).catch(q=>{Z(q),we.value=q}),()=>{if(ae.value&&T)return uv(T,z);if(we.value&&h)return Mt(h,{error:we.value});if(l&&!ee.value)return Mt(l)}}})}function uv(i,a){const{ref:l,props:h,children:p,ce:k}=a.vnode,_=Mt(i,h,p);return _.ref=l,_.ce=k,delete a.vnode.ce,_}const bp=i=>i.type.__isKeepAlive,lN={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(i,{slots:a}){const l=Pc(),h=l.ctx;if(!h.renderer)return()=>{const q=a.default&&a.default();return q&&q.length===1?q[0]:q};const p=new Map,k=new Set;let _=null;const E=l.suspense,{renderer:{p:A,m:T,um:I,o:{createElement:N}}}=h,D=N("div");h.activate=(q,ie,fe,_e,Ie)=>{const de=q.component;T(q,ie,fe,0,E),A(de.vnode,q,ie,fe,de,E,_e,q.slotScopeIds,Ie),Mi(()=>{de.isDeactivated=!1,de.a&&ch(de.a);const le=q.props&&q.props.onVnodeMounted;le&&mo(le,de.parent,q)},E)},h.deactivate=q=>{const ie=q.component;T(q,D,null,1,E),Mi(()=>{ie.da&&ch(ie.da);const fe=q.props&&q.props.onVnodeUnmounted;fe&&mo(fe,ie.parent,q),ie.isDeactivated=!0},E)};function z(q){hv(q),I(q,l,E,!0)}function Z(q){p.forEach((ie,fe)=>{const _e=Wv(ie.type);_e&&(!q||!q(_e))&&ae(fe)})}function ae(q){const ie=p.get(q);!_||ie.type!==_.type?z(ie):_&&hv(_),p.delete(q),k.delete(q)}uh(()=>[i.include,i.exclude],([q,ie])=>{q&&Z(fe=>Lg(q,fe)),ie&&Z(fe=>!Lg(ie,fe))},{flush:"post",deep:!0});let we=null;const ee=()=>{we!=null&&p.set(we,fv(l.subTree))};return kp(ee),ow(ee),rw(()=>{p.forEach(q=>{const{subTree:ie,suspense:fe}=l,_e=fv(ie);if(q.type===_e.type){hv(_e);const Ie=_e.component.da;Ie&&Mi(Ie,fe);return}z(q)})}),()=>{if(we=null,!a.default)return null;const q=a.default(),ie=q[0];if(q.length>1)return _=null,q;if(!Sc(ie)||!(ie.shapeFlag&4)&&!(ie.shapeFlag&128))return _=null,ie;let fe=fv(ie);const _e=fe.type,Ie=Wv(od(fe)?fe.type.__asyncResolved||{}:_e),{include:de,exclude:le,max:ye}=i;if(de&&(!Ie||!Lg(de,Ie))||le&&Ie&&Lg(le,Ie))return _=fe,ie;const Pe=fe.key==null?_e:fe.key,Le=p.get(Pe);return fe.el&&(fe=xs(fe),ie.shapeFlag&128&&(ie.ssContent=fe)),we=Pe,Le?(fe.el=Le.el,fe.component=Le.component,fe.transition&&cd(fe,fe.transition),fe.shapeFlag|=512,k.delete(Pe),k.add(Pe)):(k.add(Pe),ye&&k.size>parseInt(ye,10)&&ae(k.values().next().value)),fe.shapeFlag|=256,_=fe,o2(ie.type)?ie:fe}}},dN=lN;function Lg(i,a){return Ze(i)?i.some(l=>Lg(l,a)):Fn(i)?i.split(",").includes(a):i.test?i.test(a):!1}function l2(i,a){u2(i,"a",a)}function d2(i,a){u2(i,"da",a)}function u2(i,a,l=li){const h=i.__wdc||(i.__wdc=()=>{let p=l;for(;p;){if(p.isDeactivated)return;p=p.parent}return i()});if(iw(a,h,l),l){let p=l.parent;for(;p&&p.parent;)bp(p.parent.vnode)&&uN(h,a,l,p),p=p.parent}}function uN(i,a,l,h){const p=iw(a,i,h,!0);sw(()=>{hA(h[a],p)},l)}function hv(i){i.shapeFlag&=-257,i.shapeFlag&=-513}function fv(i){return i.shapeFlag&128?i.ssContent:i}function iw(i,a,l=li,h=!1){if(l){const p=l[i]||(l[i]=[]),k=a.__weh||(a.__weh=(..._)=>{if(l.isUnmounted)return;Ch(),Tc(l);const E=jo(a,l,i,_);return yc(),yh(),E});return h?p.unshift(k):p.push(k),k}}const Ea=i=>(a,l=li)=>(!bh||i==="sp")&&iw(i,(...h)=>a(...h),l),h2=Ea("bm"),kp=Ea("m"),f2=Ea("bu"),ow=Ea("u"),rw=Ea("bum"),sw=Ea("um"),g2=Ea("sp"),p2=Ea("rtg"),m2=Ea("rtc");function b2(i,a=li){iw("ec",i,a)}function Lr(i,a){const l=Ii;if(l===null)return i;const h=cw(l)||l.proxy,p=i.dirs||(i.dirs=[]);for(let k=0;k<a.length;k++){let[_,E,A,T=gn]=a[k];_&&(bt(_)&&(_={mounted:_,updated:_}),_.deep&&Jl(E),p.push({dir:_,instance:h,value:E,oldValue:void 0,arg:A,modifiers:T}))}return i}function ws(i,a,l,h){const p=i.dirs,k=a&&a.dirs;for(let _=0;_<p.length;_++){const E=p[_];k&&(E.oldValue=k[_].value);let A=E.dir[h];A&&(Ch(),jo(A,l,8,[i.el,E,i,a]),yh())}}const MA="components",hN="directives";function ys(i,a){return IA(MA,i,!0,a)||i}const k2=Symbol();function fN(i){return Fn(i)?IA(MA,i,!1)||i:i||k2}function gN(i){return IA(hN,i)}function IA(i,a,l=!0,h=!1){const p=Ii||li;if(p){const k=p.type;if(i===MA){const E=Wv(k,!1);if(E&&(E===a||E===wo(a)||E===fp(wo(a))))return k}const _=vx(p[i]||k[i],a)||vx(p.appContext[i],a);return!_&&h?k:_}}function vx(i,a){return i&&(i[a]||i[wo(a)]||i[fp(wo(a))])}function wp(i,a,l,h){let p;const k=l&&l[h];if(Ze(i)||Fn(i)){p=new Array(i.length);for(let _=0,E=i.length;_<E;_++)p[_]=a(i[_],_,void 0,k&&k[_])}else if(typeof i=="number"){p=new Array(i);for(let _=0;_<i;_++)p[_]=a(_+1,_,void 0,k&&k[_])}else if(kn(i))if(i[Symbol.iterator])p=Array.from(i,(_,E)=>a(_,E,void 0,k&&k[E]));else{const _=Object.keys(i);p=new Array(_.length);for(let E=0,A=_.length;E<A;E++){const T=_[E];p[E]=a(i[T],T,E,k&&k[E])}}else p=[];return l&&(l[h]=p),p}function pN(i,a){for(let l=0;l<a.length;l++){const h=a[l];if(Ze(h))for(let p=0;p<h.length;p++)i[h[p].name]=h[p].fn;else h&&(i[h.name]=h.key?(...p)=>{const k=h.fn(...p);return k&&(k.key=h.key),k}:h.fn)}return i}function mN(i,a,l={},h,p){if(Ii.isCE||Ii.parent&&od(Ii.parent)&&Ii.parent.isCE)return a!=="default"&&(l.name=a),Mt("slot",l,h&&h());let k=i[a];k&&k._c&&(k._d=!1),Dt();const _=k&&w2(k(l)),E=Ic(bn,{key:l.key||_&&_.key||`_${a}`},_||(h?h():[]),_&&i._===1?64:-2);return!p&&E.scopeId&&(E.slotScopeIds=[E.scopeId+"-s"]),k&&k._c&&(k._d=!0),E}function w2(i){return i.some(a=>Sc(a)?!(a.type===ji||a.type===bn&&!w2(a.children)):!0)?i:null}function bN(i,a){const l={};for(const h in i)l[a&&/[A-Z]/.test(h)?`on:${h}`:zg(h)]=i[h];return l}const Bv=i=>i?R2(i)?cw(i)||i.proxy:Bv(i.parent):null,Vg=Yn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Bv(i.parent),$root:i=>Bv(i.root),$emit:i=>i.emit,$options:i=>PA(i),$forceUpdate:i=>i.f||(i.f=()=>Xk(i.update)),$nextTick:i=>i.n||(i.n=Jk.bind(i.proxy)),$watch:i=>sN.bind(i)}),gv=(i,a)=>i!==gn&&!i.__isScriptSetup&&qt(i,a),Lv={get({_:i},a){const{ctx:l,setupState:h,data:p,props:k,accessCache:_,type:E,appContext:A}=i;let T;if(a[0]!=="$"){const z=_[a];if(z!==void 0)switch(z){case 1:return h[a];case 2:return p[a];case 4:return l[a];case 3:return k[a]}else{if(gv(h,a))return _[a]=1,h[a];if(p!==gn&&qt(p,a))return _[a]=2,p[a];if((T=i.propsOptions[0])&&qt(T,a))return _[a]=3,k[a];if(l!==gn&&qt(l,a))return _[a]=4,l[a];Rv&&(_[a]=0)}}const I=Vg[a];let N,D;if(I)return a==="$attrs"&&Vo(i,"get",a),I(i);if((N=E.__cssModules)&&(N=N[a]))return N;if(l!==gn&&qt(l,a))return _[a]=4,l[a];if(D=A.config.globalProperties,qt(D,a))return D[a]},set({_:i},a,l){const{data:h,setupState:p,ctx:k}=i;return gv(p,a)?(p[a]=l,!0):h!==gn&&qt(h,a)?(h[a]=l,!0):qt(i.props,a)||a[0]==="$"&&a.slice(1)in i?!1:(k[a]=l,!0)},has({_:{data:i,setupState:a,accessCache:l,ctx:h,appContext:p,propsOptions:k}},_){let E;return!!l[_]||i!==gn&&qt(i,_)||gv(a,_)||(E=k[0])&&qt(E,_)||qt(h,_)||qt(Vg,_)||qt(p.config.globalProperties,_)},defineProperty(i,a,l){return l.get!=null?i._.accessCache[a]=0:qt(l,"value")&&this.set(i,a,l.value,null),Reflect.defineProperty(i,a,l)}},kN=Yn({},Lv,{get(i,a){if(a!==Symbol.unscopables)return Lv.get(i,a,i)},has(i,a){return a[0]!=="_"&&!L5(a)}});let Rv=!0;function wN(i){const a=PA(i),l=i.proxy,h=i.ctx;Rv=!1,a.beforeCreate&&Ax(a.beforeCreate,i,"bc");const{data:p,computed:k,methods:_,watch:E,provide:A,inject:T,created:I,beforeMount:N,mounted:D,beforeUpdate:z,updated:Z,activated:ae,deactivated:we,beforeDestroy:ee,beforeUnmount:q,destroyed:ie,unmounted:fe,render:_e,renderTracked:Ie,renderTriggered:de,errorCaptured:le,serverPrefetch:ye,expose:Pe,inheritAttrs:Le,components:$,directives:Ue,filters:Me}=a;if(T&&_N(T,h,null,i.appContext.config.unwrapInjectedRef),_)for(const He in _){const ut=_[He];bt(ut)&&(h[He]=ut.bind(l))}if(p){const He=p.call(l,l);kn(He)&&(i.data=xh(He))}if(Rv=!0,k)for(const He in k){const ut=k[He],An=bt(ut)?ut.bind(l,l):bt(ut.get)?ut.get.bind(l,l):Fr,jn=!bt(ut)&&bt(ut.set)?ut.set.bind(l):Fr,zt=Fo({get:An,set:jn});Object.defineProperty(h,He,{enumerable:!0,configurable:!0,get:()=>zt.value,set:kt=>zt.value=kt})}if(E)for(const He in E)_2(E[He],h,l,He);if(A){const He=bt(A)?A.call(l):A;Reflect.ownKeys(He).forEach(ut=>{jg(ut,He[ut])})}I&&Ax(I,i,"c");function Xe(He,ut){Ze(ut)?ut.forEach(An=>He(An.bind(l))):ut&&He(ut.bind(l))}if(Xe(h2,N),Xe(kp,D),Xe(f2,z),Xe(ow,Z),Xe(l2,ae),Xe(d2,we),Xe(b2,le),Xe(m2,Ie),Xe(p2,de),Xe(rw,q),Xe(sw,fe),Xe(g2,ye),Ze(Pe))if(Pe.length){const He=i.exposed||(i.exposed={});Pe.forEach(ut=>{Object.defineProperty(He,ut,{get:()=>l[ut],set:An=>l[ut]=An})})}else i.exposed||(i.exposed={});_e&&i.render===Fr&&(i.render=_e),Le!=null&&(i.inheritAttrs=Le),$&&(i.components=$),Ue&&(i.directives=Ue)}function _N(i,a,l=Fr,h=!1){Ze(i)&&(i=zv(i));for(const p in i){const k=i[p];let _;kn(k)?"default"in k?_=Cs(k.from||p,k.default,!0):_=Cs(k.from||p):_=Cs(k),wi(_)&&h?Object.defineProperty(a,p,{enumerable:!0,configurable:!0,get:()=>_.value,set:E=>_.value=E}):a[p]=_}}function Ax(i,a,l){jo(Ze(i)?i.map(h=>h.bind(a.proxy)):i.bind(a.proxy),a,l)}function _2(i,a,l,h){const p=h.includes(".")?a2(l,h):()=>l[h];if(Fn(i)){const k=a[i];bt(k)&&uh(p,k)}else if(bt(i))uh(p,i.bind(l));else if(kn(i))if(Ze(i))i.forEach(k=>_2(k,a,l,h));else{const k=bt(i.handler)?i.handler.bind(l):a[i.handler];bt(k)&&uh(p,k,i)}}function PA(i){const a=i.type,{mixins:l,extends:h}=a,{mixins:p,optionsCache:k,config:{optionMergeStrategies:_}}=i.appContext,E=k.get(a);let A;return E?A=E:!p.length&&!l&&!h?A=a:(A={},p.length&&p.forEach(T=>Ik(A,T,_,!0)),Ik(A,a,_)),kn(a)&&k.set(a,A),A}function Ik(i,a,l,h=!1){const{mixins:p,extends:k}=a;k&&Ik(i,k,l,!0),p&&p.forEach(_=>Ik(i,_,l,!0));for(const _ in a)if(!(h&&_==="expose")){const E=vN[_]||l&&l[_];i[_]=E?E(i[_],a[_]):a[_]}return i}const vN={data:Cx,props:Kl,emits:Kl,methods:Kl,computed:Kl,beforeCreate:Zi,created:Zi,beforeMount:Zi,mounted:Zi,beforeUpdate:Zi,updated:Zi,beforeDestroy:Zi,beforeUnmount:Zi,destroyed:Zi,unmounted:Zi,activated:Zi,deactivated:Zi,errorCaptured:Zi,serverPrefetch:Zi,components:Kl,directives:Kl,watch:CN,provide:Cx,inject:AN};function Cx(i,a){return a?i?function(){return Yn(bt(i)?i.call(this,this):i,bt(a)?a.call(this,this):a)}:a:i}function AN(i,a){return Kl(zv(i),zv(a))}function zv(i){if(Ze(i)){const a={};for(let l=0;l<i.length;l++)a[i[l]]=i[l];return a}return i}function Zi(i,a){return i?[...new Set([].concat(i,a))]:a}function Kl(i,a){return i?Yn(Yn(Object.create(null),i),a):a}function CN(i,a){if(!i)return a;if(!a)return i;const l=Yn(Object.create(null),i);for(const h in a)l[h]=Zi(i[h],a[h]);return l}function yN(i,a,l,h=!1){const p={},k={};Tk(k,aw,1),i.propsDefaults=Object.create(null),v2(i,a,p,k);for(const _ in i.propsOptions[0])_ in p||(p[_]=void 0);l?i.props=h?p:GE(p):i.type.props?i.props=p:i.props=k,i.attrs=k}function xN(i,a,l,h){const{props:p,attrs:k,vnode:{patchFlag:_}}=i,E=Gt(p),[A]=i.propsOptions;let T=!1;if((h||_>0)&&!(_&16)){if(_&8){const I=i.vnode.dynamicProps;for(let N=0;N<I.length;N++){let D=I[N];if(ew(i.emitsOptions,D))continue;const z=a[D];if(A)if(qt(k,D))z!==k[D]&&(k[D]=z,T=!0);else{const Z=wo(D);p[Z]=Fv(A,E,Z,z,i,!1)}else z!==k[D]&&(k[D]=z,T=!0)}}}else{v2(i,a,p,k)&&(T=!0);let I;for(const N in E)(!a||!qt(a,N)&&((I=cr(N))===N||!qt(a,I)))&&(A?l&&(l[N]!==void 0||l[I]!==void 0)&&(p[N]=Fv(A,E,N,void 0,i,!0)):delete p[N]);if(k!==E)for(const N in k)(!a||!qt(a,N)&&!0)&&(delete k[N],T=!0)}T&&Ca(i,"set","$attrs")}function v2(i,a,l,h){const[p,k]=i.propsOptions;let _=!1,E;if(a)for(let A in a){if(Rg(A))continue;const T=a[A];let I;p&&qt(p,I=wo(A))?!k||!k.includes(I)?l[I]=T:(E||(E={}))[I]=T:ew(i.emitsOptions,A)||(!(A in h)||T!==h[A])&&(h[A]=T,_=!0)}if(k){const A=Gt(l),T=E||gn;for(let I=0;I<k.length;I++){const N=k[I];l[N]=Fv(p,A,N,T[N],i,!qt(T,N))}}return _}function Fv(i,a,l,h,p,k){const _=i[l];if(_!=null){const E=qt(_,"default");if(E&&h===void 0){const A=_.default;if(_.type!==Function&&bt(A)){const{propsDefaults:T}=p;l in T?h=T[l]:(Tc(p),h=T[l]=A.call(null,a),yc())}else h=A}_[0]&&(k&&!E?h=!1:_[1]&&(h===""||h===cr(l))&&(h=!0))}return h}function A2(i,a,l=!1){const h=a.propsCache,p=h.get(i);if(p)return p;const k=i.props,_={},E=[];let A=!1;if(!bt(i)){const I=N=>{A=!0;const[D,z]=A2(N,a,!0);Yn(_,D),z&&E.push(...z)};!l&&a.mixins.length&&a.mixins.forEach(I),i.extends&&I(i.extends),i.mixins&&i.mixins.forEach(I)}if(!k&&!A)return kn(i)&&h.set(i,sh),sh;if(Ze(k))for(let I=0;I<k.length;I++){const N=wo(k[I]);yx(N)&&(_[N]=gn)}else if(k)for(const I in k){const N=wo(I);if(yx(N)){const D=k[I],z=_[N]=Ze(D)||bt(D)?{type:D}:Object.assign({},D);if(z){const Z=Dx(Boolean,z.type),ae=Dx(String,z.type);z[0]=Z>-1,z[1]=ae<0||Z<ae,(Z>-1||qt(z,"default"))&&E.push(N)}}}const T=[_,E];return kn(i)&&h.set(i,T),T}function yx(i){return i[0]!=="$"}function xx(i){const a=i&&i.toString().match(/^\s*function (\w+)/);return a?a[1]:i===null?"null":""}function Ex(i,a){return xx(i)===xx(a)}function Dx(i,a){return Ze(a)?a.findIndex(l=>Ex(l,i)):bt(a)&&Ex(a,i)?0:-1}const C2=i=>i[0]==="_"||i==="$stable",NA=i=>Ze(i)?i.map(Ro):[Ro(i)],EN=(i,a,l)=>{if(a._n)return a;const h=lr((...p)=>NA(a(...p)),l);return h._c=!1,h},y2=(i,a,l)=>{const h=i._ctx;for(const p in i){if(C2(p))continue;const k=i[p];if(bt(k))a[p]=EN(p,k,h);else if(k!=null){const _=NA(k);a[p]=()=>_}}},x2=(i,a)=>{const l=NA(a);i.slots.default=()=>l},DN=(i,a)=>{if(i.vnode.shapeFlag&32){const l=a._;l?(i.slots=Gt(a),Tk(a,"_",l)):y2(a,i.slots={})}else i.slots={},a&&x2(i,a);Tk(i.slots,aw,1)},SN=(i,a,l)=>{const{vnode:h,slots:p}=i;let k=!0,_=gn;if(h.shapeFlag&32){const E=a._;E?l&&E===1?k=!1:(Yn(p,a),!l&&E===1&&delete p._):(k=!a.$stable,y2(a,p)),_=a}else a&&(x2(i,a),_={default:1});if(k)for(const E in p)!C2(E)&&!(E in _)&&delete p[E]};function E2(){return{app:null,config:{isNativeTag:Y5,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let TN=0;function MN(i,a){return function(h,p=null){bt(h)||(h=Object.assign({},h)),p!=null&&!kn(p)&&(p=null);const k=E2(),_=new Set;let E=!1;const A=k.app={_uid:TN++,_component:h,_props:p,_container:null,_context:k,_instance:null,version:Y2,get config(){return k.config},set config(T){},use(T,...I){return _.has(T)||(T&&bt(T.install)?(_.add(T),T.install(A,...I)):bt(T)&&(_.add(T),T(A,...I))),A},mixin(T){return k.mixins.includes(T)||k.mixins.push(T),A},component(T,I){return I?(k.components[T]=I,A):k.components[T]},directive(T,I){return I?(k.directives[T]=I,A):k.directives[T]},mount(T,I,N){if(!E){const D=Mt(h,p);return D.appContext=k,I&&a?a(D,T):i(D,T,N),E=!0,A._container=T,T.__vue_app__=A,cw(D.component)||D.component.proxy}},unmount(){E&&(i(null,A._container),delete A._container.__vue_app__)},provide(T,I){return k.provides[T]=I,A}};return A}}function Pk(i,a,l,h,p=!1){if(Ze(i)){i.forEach((D,z)=>Pk(D,a&&(Ze(a)?a[z]:a),l,h,p));return}if(od(h)&&!p)return;const k=h.shapeFlag&4?cw(h.component)||h.component.proxy:h.el,_=p?null:k,{i:E,r:A}=i,T=a&&a.r,I=E.refs===gn?E.refs={}:E.refs,N=E.setupState;if(T!=null&&T!==A&&(Fn(T)?(I[T]=null,qt(N,T)&&(N[T]=null)):wi(T)&&(T.value=null)),bt(A))_a(A,E,12,[_,I]);else{const D=Fn(A),z=wi(A);if(D||z){const Z=()=>{if(i.f){const ae=D?qt(N,A)?N[A]:I[A]:A.value;p?Ze(ae)&&hA(ae,k):Ze(ae)?ae.includes(k)||ae.push(k):D?(I[A]=[k],qt(N,A)&&(N[A]=I[A])):(A.value=[k],i.k&&(I[i.k]=A.value))}else D?(I[A]=_,qt(N,A)&&(N[A]=_)):z&&(A.value=_,i.k&&(I[i.k]=_))};_?(Z.id=-1,Mi(Z,l)):Z()}}}let gc=!1;const gk=i=>/svg/.test(i.namespaceURI)&&i.tagName!=="foreignObject",pk=i=>i.nodeType===8;function IN(i){const{mt:a,p:l,o:{patchProp:h,createText:p,nextSibling:k,parentNode:_,remove:E,insert:A,createComment:T}}=i,I=(ee,q)=>{if(!q.hasChildNodes()){l(null,ee,q),Mk(),q._vnode=ee;return}gc=!1,N(q.firstChild,ee,null,null,null),Mk(),q._vnode=ee,gc&&console.error("Hydration completed but contains mismatches.")},N=(ee,q,ie,fe,_e,Ie=!1)=>{const de=pk(ee)&&ee.data==="[",le=()=>ae(ee,q,ie,fe,_e,de),{type:ye,ref:Pe,shapeFlag:Le,patchFlag:$}=q;let Ue=ee.nodeType;q.el=ee,$===-2&&(Ie=!1,q.dynamicChildren=null);let Me=null;switch(ye){case ld:Ue!==3?q.children===""?(A(q.el=p(""),_(ee),ee),Me=ee):Me=le():(ee.data!==q.children&&(gc=!0,ee.data=q.children),Me=k(ee));break;case ji:Ue!==8||de?Me=le():Me=k(ee);break;case rd:if(de&&(ee=k(ee),Ue=ee.nodeType),Ue===1||Ue===3){Me=ee;const Je=!q.children.length;for(let Xe=0;Xe<q.staticCount;Xe++)Je&&(q.children+=Me.nodeType===1?Me.outerHTML:Me.data),Xe===q.staticCount-1&&(q.anchor=Me),Me=k(Me);return de?k(Me):Me}else le();break;case bn:de?Me=Z(ee,q,ie,fe,_e,Ie):Me=le();break;default:if(Le&1)Ue!==1||q.type.toLowerCase()!==ee.tagName.toLowerCase()?Me=le():Me=D(ee,q,ie,fe,_e,Ie);else if(Le&6){q.slotScopeIds=_e;const Je=_(ee);if(a(q,Je,null,ie,fe,gk(Je),Ie),Me=de?we(ee):k(ee),Me&&pk(Me)&&Me.data==="teleport end"&&(Me=k(Me)),od(q)){let Xe;de?(Xe=Mt(bn),Xe.anchor=Me?Me.previousSibling:Je.lastChild):Xe=ee.nodeType===3?bo(""):Mt("div"),Xe.el=ee,q.component.subTree=Xe}}else Le&64?Ue!==8?Me=le():Me=q.type.hydrate(ee,q,ie,fe,_e,Ie,i,z):Le&128&&(Me=q.type.hydrate(ee,q,ie,fe,gk(_(ee)),_e,Ie,i,N))}return Pe!=null&&Pk(Pe,null,fe,q),Me},D=(ee,q,ie,fe,_e,Ie)=>{Ie=Ie||!!q.dynamicChildren;const{type:de,props:le,patchFlag:ye,shapeFlag:Pe,dirs:Le}=q,$=de==="input"&&Le||de==="option";if($||ye!==-1){if(Le&&ws(q,null,ie,"created"),le)if($||!Ie||ye&48)for(const Me in le)($&&Me.endsWith("value")||up(Me)&&!Rg(Me))&&h(ee,Me,null,le[Me],!1,void 0,ie);else le.onClick&&h(ee,"onClick",null,le.onClick,!1,void 0,ie);let Ue;if((Ue=le&&le.onVnodeBeforeMount)&&mo(Ue,ie,q),Le&&ws(q,null,ie,"beforeMount"),((Ue=le&&le.onVnodeMounted)||Le)&&r2(()=>{Ue&&mo(Ue,ie,q),Le&&ws(q,null,ie,"mounted")},fe),Pe&16&&!(le&&(le.innerHTML||le.textContent))){let Me=z(ee.firstChild,q,ee,ie,fe,_e,Ie);for(;Me;){gc=!0;const Je=Me;Me=Me.nextSibling,E(Je)}}else Pe&8&&ee.textContent!==q.children&&(gc=!0,ee.textContent=q.children)}return ee.nextSibling},z=(ee,q,ie,fe,_e,Ie,de)=>{de=de||!!q.dynamicChildren;const le=q.children,ye=le.length;for(let Pe=0;Pe<ye;Pe++){const Le=de?le[Pe]:le[Pe]=Ro(le[Pe]);if(ee)ee=N(ee,Le,fe,_e,Ie,de);else{if(Le.type===ld&&!Le.children)continue;gc=!0,l(null,Le,ie,null,fe,_e,gk(ie),Ie)}}return ee},Z=(ee,q,ie,fe,_e,Ie)=>{const{slotScopeIds:de}=q;de&&(_e=_e?_e.concat(de):de);const le=_(ee),ye=z(k(ee),q,le,ie,fe,_e,Ie);return ye&&pk(ye)&&ye.data==="]"?k(q.anchor=ye):(gc=!0,A(q.anchor=T("]"),le,ye),ye)},ae=(ee,q,ie,fe,_e,Ie)=>{if(gc=!0,q.el=null,Ie){const ye=we(ee);for(;;){const Pe=k(ee);if(Pe&&Pe!==ye)E(Pe);else break}}const de=k(ee),le=_(ee);return E(ee),l(null,q,le,de,ie,fe,gk(le),_e),de},we=ee=>{let q=0;for(;ee;)if(ee=k(ee),ee&&pk(ee)&&(ee.data==="["&&q++,ee.data==="]")){if(q===0)return k(ee);q--}return ee};return[I,N]}const Mi=r2;function D2(i){return T2(i)}function S2(i){return T2(i,IN)}function T2(i,a){const l=Z5();l.__VUE__=!0;const{insert:h,remove:p,patchProp:k,createElement:_,createText:E,createComment:A,setText:T,setElementText:I,parentNode:N,nextSibling:D,setScopeId:z=Fr,insertStaticContent:Z}=i,ae=(V,G,re,ue=null,ge=null,Se=null,Be=!1,xe=null,Te=!!G.dynamicChildren)=>{if(V===G)return;V&&!vs(V,G)&&(ue=De(V),kt(V,ge,Se,!0),V=null),G.patchFlag===-2&&(Te=!1,G.dynamicChildren=null);const{type:ke,ref:Ve,shapeFlag:We}=G;switch(ke){case ld:we(V,G,re,ue);break;case ji:ee(V,G,re,ue);break;case rd:V==null&&q(G,re,ue,Be);break;case bn:$(V,G,re,ue,ge,Se,Be,xe,Te);break;default:We&1?_e(V,G,re,ue,ge,Se,Be,xe,Te):We&6?Ue(V,G,re,ue,ge,Se,Be,xe,Te):(We&64||We&128)&&ke.process(V,G,re,ue,ge,Se,Be,xe,Te,ot)}Ve!=null&&ge&&Pk(Ve,V&&V.ref,Se,G||V,!G)},we=(V,G,re,ue)=>{if(V==null)h(G.el=E(G.children),re,ue);else{const ge=G.el=V.el;G.children!==V.children&&T(ge,G.children)}},ee=(V,G,re,ue)=>{V==null?h(G.el=A(G.children||""),re,ue):G.el=V.el},q=(V,G,re,ue)=>{[V.el,V.anchor]=Z(V.children,G,re,ue,V.el,V.anchor)},ie=({el:V,anchor:G},re,ue)=>{let ge;for(;V&&V!==G;)ge=D(V),h(V,re,ue),V=ge;h(G,re,ue)},fe=({el:V,anchor:G})=>{let re;for(;V&&V!==G;)re=D(V),p(V),V=re;p(G)},_e=(V,G,re,ue,ge,Se,Be,xe,Te)=>{Be=Be||G.type==="svg",V==null?Ie(G,re,ue,ge,Se,Be,xe,Te):ye(V,G,ge,Se,Be,xe,Te)},Ie=(V,G,re,ue,ge,Se,Be,xe)=>{let Te,ke;const{type:Ve,props:We,shapeFlag:Fe,transition:qe,dirs:ze}=V;if(Te=V.el=_(V.type,Se,We&&We.is,We),Fe&8?I(Te,V.children):Fe&16&&le(V.children,Te,null,ue,ge,Se&&Ve!=="foreignObject",Be,xe),ze&&ws(V,null,ue,"created"),We){for(const it in We)it!=="value"&&!Rg(it)&&k(Te,it,null,We[it],Se,V.children,ue,ge,ve);"value"in We&&k(Te,"value",null,We.value),(ke=We.onVnodeBeforeMount)&&mo(ke,ue,V)}de(Te,V,V.scopeId,Be,ue),ze&&ws(V,null,ue,"beforeMount");const gt=(!ge||ge&&!ge.pendingBranch)&&qe&&!qe.persisted;gt&&qe.beforeEnter(Te),h(Te,G,re),((ke=We&&We.onVnodeMounted)||gt||ze)&&Mi(()=>{ke&&mo(ke,ue,V),gt&&qe.enter(Te),ze&&ws(V,null,ue,"mounted")},ge)},de=(V,G,re,ue,ge)=>{if(re&&z(V,re),ue)for(let Se=0;Se<ue.length;Se++)z(V,ue[Se]);if(ge){let Se=ge.subTree;if(G===Se){const Be=ge.vnode;de(V,Be,Be.scopeId,Be.slotScopeIds,ge.parent)}}},le=(V,G,re,ue,ge,Se,Be,xe,Te=0)=>{for(let ke=Te;ke<V.length;ke++){const Ve=V[ke]=xe?wc(V[ke]):Ro(V[ke]);ae(null,Ve,G,re,ue,ge,Se,Be,xe)}},ye=(V,G,re,ue,ge,Se,Be)=>{const xe=G.el=V.el;let{patchFlag:Te,dynamicChildren:ke,dirs:Ve}=G;Te|=V.patchFlag&16;const We=V.props||gn,Fe=G.props||gn;let qe;re&&$l(re,!1),(qe=Fe.onVnodeBeforeUpdate)&&mo(qe,re,G,V),Ve&&ws(G,V,re,"beforeUpdate"),re&&$l(re,!0);const ze=ge&&G.type!=="foreignObject";if(ke?Pe(V.dynamicChildren,ke,xe,re,ue,ze,Se):Be||ut(V,G,xe,null,re,ue,ze,Se,!1),Te>0){if(Te&16)Le(xe,G,We,Fe,re,ue,ge);else if(Te&2&&We.class!==Fe.class&&k(xe,"class",null,Fe.class,ge),Te&4&&k(xe,"style",We.style,Fe.style,ge),Te&8){const gt=G.dynamicProps;for(let it=0;it<gt.length;it++){const Kt=gt[it],Nt=We[Kt],on=Fe[Kt];(on!==Nt||Kt==="value")&&k(xe,Kt,Nt,on,ge,V.children,re,ue,ve)}}Te&1&&V.children!==G.children&&I(xe,G.children)}else!Be&&ke==null&&Le(xe,G,We,Fe,re,ue,ge);((qe=Fe.onVnodeUpdated)||Ve)&&Mi(()=>{qe&&mo(qe,re,G,V),Ve&&ws(G,V,re,"updated")},ue)},Pe=(V,G,re,ue,ge,Se,Be)=>{for(let xe=0;xe<G.length;xe++){const Te=V[xe],ke=G[xe],Ve=Te.el&&(Te.type===bn||!vs(Te,ke)||Te.shapeFlag&70)?N(Te.el):re;ae(Te,ke,Ve,null,ue,ge,Se,Be,!0)}},Le=(V,G,re,ue,ge,Se,Be)=>{if(re!==ue){if(re!==gn)for(const xe in re)!Rg(xe)&&!(xe in ue)&&k(V,xe,re[xe],null,Be,G.children,ge,Se,ve);for(const xe in ue){if(Rg(xe))continue;const Te=ue[xe],ke=re[xe];Te!==ke&&xe!=="value"&&k(V,xe,ke,Te,Be,G.children,ge,Se,ve)}"value"in ue&&k(V,"value",re.value,ue.value)}},$=(V,G,re,ue,ge,Se,Be,xe,Te)=>{const ke=G.el=V?V.el:E(""),Ve=G.anchor=V?V.anchor:E("");let{patchFlag:We,dynamicChildren:Fe,slotScopeIds:qe}=G;qe&&(xe=xe?xe.concat(qe):qe),V==null?(h(ke,re,ue),h(Ve,re,ue),le(G.children,re,Ve,ge,Se,Be,xe,Te)):We>0&&We&64&&Fe&&V.dynamicChildren?(Pe(V.dynamicChildren,Fe,re,ge,Se,Be,xe),(G.key!=null||ge&&G===ge.subTree)&&OA(V,G,!0)):ut(V,G,re,Ve,ge,Se,Be,xe,Te)},Ue=(V,G,re,ue,ge,Se,Be,xe,Te)=>{G.slotScopeIds=xe,V==null?G.shapeFlag&512?ge.ctx.activate(G,re,ue,Be,Te):Me(G,re,ue,ge,Se,Be,Te):Je(V,G,Te)},Me=(V,G,re,ue,ge,Se,Be)=>{const xe=V.component=L2(V,ue,ge);if(bp(V)&&(xe.ctx.renderer=ot),z2(xe),xe.asyncDep){if(ge&&ge.registerDep(xe,Xe),!V.el){const Te=xe.subTree=Mt(ji);ee(null,Te,G,re)}return}Xe(xe,V,G,re,ge,Se,Be)},Je=(V,G,re)=>{const ue=G.component=V.component;if(ZP(V,G,re))if(ue.asyncDep&&!ue.asyncResolved){He(ue,G,re);return}else ue.next=G,UP(ue.update),ue.update();else G.el=V.el,ue.vnode=G},Xe=(V,G,re,ue,ge,Se,Be)=>{const xe=()=>{if(V.isMounted){let{next:Ve,bu:We,u:Fe,parent:qe,vnode:ze}=V,gt=Ve,it;$l(V,!1),Ve?(Ve.el=ze.el,He(V,Ve,Be)):Ve=ze,We&&ch(We),(it=Ve.props&&Ve.props.onVnodeBeforeUpdate)&&mo(it,qe,Ve,ze),$l(V,!0);const Kt=Ck(V),Nt=V.subTree;V.subTree=Kt,ae(Nt,Kt,N(Nt.el),De(Nt),V,ge,Se),Ve.el=Kt.el,gt===null&&EA(V,Kt.el),Fe&&Mi(Fe,ge),(it=Ve.props&&Ve.props.onVnodeUpdated)&&Mi(()=>mo(it,qe,Ve,ze),ge)}else{let Ve;const{el:We,props:Fe}=G,{bm:qe,m:ze,parent:gt}=V,it=od(G);if($l(V,!1),qe&&ch(qe),!it&&(Ve=Fe&&Fe.onVnodeBeforeMount)&&mo(Ve,gt,G),$l(V,!0),We&&nt){const Kt=()=>{V.subTree=Ck(V),nt(We,V.subTree,V,ge,null)};it?G.type.__asyncLoader().then(()=>!V.isUnmounted&&Kt()):Kt()}else{const Kt=V.subTree=Ck(V);ae(null,Kt,re,ue,V,ge,Se),G.el=Kt.el}if(ze&&Mi(ze,ge),!it&&(Ve=Fe&&Fe.onVnodeMounted)){const Kt=G;Mi(()=>mo(Ve,gt,Kt),ge)}(G.shapeFlag&256||gt&&od(gt.vnode)&&gt.vnode.shapeFlag&256)&&V.a&&Mi(V.a,ge),V.isMounted=!0,G=re=ue=null}},Te=V.effect=new gp(xe,()=>Xk(ke),V.scope),ke=V.update=()=>Te.run();ke.id=V.uid,$l(V,!0),ke()},He=(V,G,re)=>{G.component=V;const ue=V.vnode.props;V.vnode=G,V.next=null,xN(V,G.props,ue,re),SN(V,G.children,re),Ch(),bx(),yh()},ut=(V,G,re,ue,ge,Se,Be,xe,Te=!1)=>{const ke=V&&V.children,Ve=V?V.shapeFlag:0,We=G.children,{patchFlag:Fe,shapeFlag:qe}=G;if(Fe>0){if(Fe&128){jn(ke,We,re,ue,ge,Se,Be,xe,Te);return}else if(Fe&256){An(ke,We,re,ue,ge,Se,Be,xe,Te);return}}qe&8?(Ve&16&&ve(ke,ge,Se),We!==ke&&I(re,We)):Ve&16?qe&16?jn(ke,We,re,ue,ge,Se,Be,xe,Te):ve(ke,ge,Se,!0):(Ve&8&&I(re,""),qe&16&&le(We,re,ue,ge,Se,Be,xe,Te))},An=(V,G,re,ue,ge,Se,Be,xe,Te)=>{V=V||sh,G=G||sh;const ke=V.length,Ve=G.length,We=Math.min(ke,Ve);let Fe;for(Fe=0;Fe<We;Fe++){const qe=G[Fe]=Te?wc(G[Fe]):Ro(G[Fe]);ae(V[Fe],qe,re,null,ge,Se,Be,xe,Te)}ke>Ve?ve(V,ge,Se,!0,!1,We):le(G,re,ue,ge,Se,Be,xe,Te,We)},jn=(V,G,re,ue,ge,Se,Be,xe,Te)=>{let ke=0;const Ve=G.length;let We=V.length-1,Fe=Ve-1;for(;ke<=We&&ke<=Fe;){const qe=V[ke],ze=G[ke]=Te?wc(G[ke]):Ro(G[ke]);if(vs(qe,ze))ae(qe,ze,re,null,ge,Se,Be,xe,Te);else break;ke++}for(;ke<=We&&ke<=Fe;){const qe=V[We],ze=G[Fe]=Te?wc(G[Fe]):Ro(G[Fe]);if(vs(qe,ze))ae(qe,ze,re,null,ge,Se,Be,xe,Te);else break;We--,Fe--}if(ke>We){if(ke<=Fe){const qe=Fe+1,ze=qe<Ve?G[qe].el:ue;for(;ke<=Fe;)ae(null,G[ke]=Te?wc(G[ke]):Ro(G[ke]),re,ze,ge,Se,Be,xe,Te),ke++}}else if(ke>Fe)for(;ke<=We;)kt(V[ke],ge,Se,!0),ke++;else{const qe=ke,ze=ke,gt=new Map;for(ke=ze;ke<=Fe;ke++){const $n=G[ke]=Te?wc(G[ke]):Ro(G[ke]);$n.key!=null&&gt.set($n.key,ke)}let it,Kt=0;const Nt=Fe-ze+1;let on=!1,fr=0;const Pi=new Array(Nt);for(ke=0;ke<Nt;ke++)Pi[ke]=0;for(ke=qe;ke<=We;ke++){const $n=V[ke];if(Kt>=Nt){kt($n,ge,Se,!0);continue}let Nn;if($n.key!=null)Nn=gt.get($n.key);else for(it=ze;it<=Fe;it++)if(Pi[it-ze]===0&&vs($n,G[it])){Nn=it;break}Nn===void 0?kt($n,ge,Se,!0):(Pi[Nn-ze]=ke+1,Nn>=fr?fr=Nn:on=!0,ae($n,G[Nn],re,null,ge,Se,Be,xe,Te),Kt++)}const Ft=on?PN(Pi):sh;for(it=Ft.length-1,ke=Nt-1;ke>=0;ke--){const $n=ze+ke,Nn=G[$n],Xi=$n+1<Ve?G[$n+1].el:ue;Pi[ke]===0?ae(null,Nn,re,Xi,ge,Se,Be,xe,Te):on&&(it<0||ke!==Ft[it]?zt(Nn,re,Xi,2):it--)}}},zt=(V,G,re,ue,ge=null)=>{const{el:Se,type:Be,transition:xe,children:Te,shapeFlag:ke}=V;if(ke&6){zt(V.component.subTree,G,re,ue);return}if(ke&128){V.suspense.move(G,re,ue);return}if(ke&64){Be.move(V,G,re,ot);return}if(Be===bn){h(Se,G,re);for(let We=0;We<Te.length;We++)zt(Te[We],G,re,ue);h(V.anchor,G,re);return}if(Be===rd){ie(V,G,re);return}if(ue!==2&&ke&1&&xe)if(ue===0)xe.beforeEnter(Se),h(Se,G,re),Mi(()=>xe.enter(Se),ge);else{const{leave:We,delayLeave:Fe,afterLeave:qe}=xe,ze=()=>h(Se,G,re),gt=()=>{We(Se,()=>{ze(),qe&&qe()})};Fe?Fe(Se,ze,gt):gt()}else h(Se,G,re)},kt=(V,G,re,ue=!1,ge=!1)=>{const{type:Se,props:Be,ref:xe,children:Te,dynamicChildren:ke,shapeFlag:Ve,patchFlag:We,dirs:Fe}=V;if(xe!=null&&Pk(xe,null,re,V,!0),Ve&256){G.ctx.deactivate(V);return}const qe=Ve&1&&Fe,ze=!od(V);let gt;if(ze&&(gt=Be&&Be.onVnodeBeforeUnmount)&&mo(gt,G,V),Ve&6)Q(V.component,re,ue);else{if(Ve&128){V.suspense.unmount(re,ue);return}qe&&ws(V,null,G,"beforeUnmount"),Ve&64?V.type.remove(V,G,re,ge,ot,ue):ke&&(Se!==bn||We>0&&We&64)?ve(ke,G,re,!1,!0):(Se===bn&&We&384||!ge&&Ve&16)&&ve(Te,G,re),ue&&ni(V)}(ze&&(gt=Be&&Be.onVnodeUnmounted)||qe)&&Mi(()=>{gt&&mo(gt,G,V),qe&&ws(V,null,G,"unmounted")},re)},ni=V=>{const{type:G,el:re,anchor:ue,transition:ge}=V;if(G===bn){Vn(re,ue);return}if(G===rd){fe(V);return}const Se=()=>{p(re),ge&&!ge.persisted&&ge.afterLeave&&ge.afterLeave()};if(V.shapeFlag&1&&ge&&!ge.persisted){const{leave:Be,delayLeave:xe}=ge,Te=()=>Be(re,Se);xe?xe(V.el,Se,Te):Te()}else Se()},Vn=(V,G)=>{let re;for(;V!==G;)re=D(V),p(V),V=re;p(G)},Q=(V,G,re)=>{const{bum:ue,scope:ge,update:Se,subTree:Be,um:xe}=V;ue&&ch(ue),ge.stop(),Se&&(Se.active=!1,kt(Be,V,G,re)),xe&&Mi(xe,G),Mi(()=>{V.isUnmounted=!0},G),G&&G.pendingBranch&&!G.isUnmounted&&V.asyncDep&&!V.asyncResolved&&V.suspenseId===G.pendingId&&(G.deps--,G.deps===0&&G.resolve())},ve=(V,G,re,ue=!1,ge=!1,Se=0)=>{for(let Be=Se;Be<V.length;Be++)kt(V[Be],G,re,ue,ge)},De=V=>V.shapeFlag&6?De(V.component.subTree):V.shapeFlag&128?V.suspense.next():D(V.anchor||V.el),ne=(V,G,re)=>{V==null?G._vnode&&kt(G._vnode,null,null,!0):ae(G._vnode||null,V,G,null,null,null,re),bx(),Mk(),G._vnode=V},ot={p:ae,um:kt,m:zt,r:ni,mt:Me,mc:le,pc:ut,pbc:Pe,n:De,o:i};let $e,nt;return a&&([$e,nt]=a(ot)),{render:ne,hydrate:$e,createApp:MN(ne,$e)}}function $l({effect:i,update:a},l){i.allowRecurse=a.allowRecurse=l}function OA(i,a,l=!1){const h=i.children,p=a.children;if(Ze(h)&&Ze(p))for(let k=0;k<h.length;k++){const _=h[k];let E=p[k];E.shapeFlag&1&&!E.dynamicChildren&&((E.patchFlag<=0||E.patchFlag===32)&&(E=p[k]=wc(p[k]),E.el=_.el),l||OA(_,E)),E.type===ld&&(E.el=_.el)}}function PN(i){const a=i.slice(),l=[0];let h,p,k,_,E;const A=i.length;for(h=0;h<A;h++){const T=i[h];if(T!==0){if(p=l[l.length-1],i[p]<T){a[h]=p,l.push(h);continue}for(k=0,_=l.length-1;k<_;)E=k+_>>1,i[l[E]]<T?k=E+1:_=E;T<i[l[k]]&&(k>0&&(a[h]=l[k-1]),l[k]=h)}}for(k=l.length,_=l[k-1];k-- >0;)l[k]=_,_=a[_];return l}const NN=i=>i.__isTeleport,Ug=i=>i&&(i.disabled||i.disabled===""),Sx=i=>typeof SVGElement<"u"&&i instanceof SVGElement,jv=(i,a)=>{const l=i&&i.to;return Fn(l)?a?a(l):null:l},ON={__isTeleport:!0,process(i,a,l,h,p,k,_,E,A,T){const{mc:I,pc:N,pbc:D,o:{insert:z,querySelector:Z,createText:ae,createComment:we}}=T,ee=Ug(a.props);let{shapeFlag:q,children:ie,dynamicChildren:fe}=a;if(i==null){const _e=a.el=ae(""),Ie=a.anchor=ae("");z(_e,l,h),z(Ie,l,h);const de=a.target=jv(a.props,Z),le=a.targetAnchor=ae("");de&&(z(le,de),_=_||Sx(de));const ye=(Pe,Le)=>{q&16&&I(ie,Pe,Le,p,k,_,E,A)};ee?ye(l,Ie):de&&ye(de,le)}else{a.el=i.el;const _e=a.anchor=i.anchor,Ie=a.target=i.target,de=a.targetAnchor=i.targetAnchor,le=Ug(i.props),ye=le?l:Ie,Pe=le?_e:de;if(_=_||Sx(Ie),fe?(D(i.dynamicChildren,fe,ye,p,k,_,E),OA(i,a,!0)):A||N(i,a,ye,Pe,p,k,_,E,!1),ee)le||mk(a,l,_e,T,1);else if((a.props&&a.props.to)!==(i.props&&i.props.to)){const Le=a.target=jv(a.props,Z);Le&&mk(a,Le,null,T,0)}else le&&mk(a,Ie,de,T,1)}M2(a)},remove(i,a,l,h,{um:p,o:{remove:k}},_){const{shapeFlag:E,children:A,anchor:T,targetAnchor:I,target:N,props:D}=i;if(N&&k(I),(_||!Ug(D))&&(k(T),E&16))for(let z=0;z<A.length;z++){const Z=A[z];p(Z,a,l,!0,!!Z.dynamicChildren)}},move:mk,hydrate:BN};function mk(i,a,l,{o:{insert:h},m:p},k=2){k===0&&h(i.targetAnchor,a,l);const{el:_,anchor:E,shapeFlag:A,children:T,props:I}=i,N=k===2;if(N&&h(_,a,l),(!N||Ug(I))&&A&16)for(let D=0;D<T.length;D++)p(T[D],a,l,2);N&&h(E,a,l)}function BN(i,a,l,h,p,k,{o:{nextSibling:_,parentNode:E,querySelector:A}},T){const I=a.target=jv(a.props,A);if(I){const N=I._lpa||I.firstChild;if(a.shapeFlag&16)if(Ug(a.props))a.anchor=T(_(i),a,E(i),l,h,p,k),a.targetAnchor=N;else{a.anchor=_(i);let D=N;for(;D;)if(D=_(D),D&&D.nodeType===8&&D.data==="teleport anchor"){a.targetAnchor=D,I._lpa=a.targetAnchor&&_(a.targetAnchor);break}T(N,a,I,l,h,p,k)}M2(a)}return a.anchor&&_(a.anchor)}const LN=ON;function M2(i){const a=i.ctx;if(a&&a.ut){let l=i.children[0].el;for(;l!==i.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",a.uid),l=l.nextSibling;a.ut()}}const bn=Symbol(void 0),ld=Symbol(void 0),ji=Symbol(void 0),rd=Symbol(void 0),Hg=[];let ko=null;function Dt(i=!1){Hg.push(ko=i?null:[])}function I2(){Hg.pop(),ko=Hg[Hg.length-1]||null}let dd=1;function Vv(i){dd+=i}function P2(i){return i.dynamicChildren=dd>0?ko||sh:null,I2(),dd>0&&ko&&ko.push(i),i}function an(i,a,l,h,p,k){return P2(Y(i,a,l,h,p,k,!0))}function Ic(i,a,l,h,p){return P2(Mt(i,a,l,h,p,!0))}function Sc(i){return i?i.__v_isVNode===!0:!1}function vs(i,a){return i.type===a.type&&i.key===a.key}function RN(i){}const aw="__vInternal",N2=({key:i})=>i!=null?i:null,yk=({ref:i,ref_key:a,ref_for:l})=>i!=null?Fn(i)||wi(i)||bt(i)?{i:Ii,r:i,k:a,f:!!l}:i:null;function Y(i,a=null,l=null,h=0,p=null,k=i===bn?0:1,_=!1,E=!1){const A={__v_isVNode:!0,__v_skip:!0,type:i,props:a,key:a&&N2(a),ref:a&&yk(a),scopeId:tw,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:k,patchFlag:h,dynamicProps:p,dynamicChildren:null,appContext:null,ctx:Ii};return E?(BA(A,l),k&128&&i.normalize(A)):l&&(A.shapeFlag|=Fn(l)?8:16),dd>0&&!_&&ko&&(A.patchFlag>0||k&6)&&A.patchFlag!==32&&ko.push(A),A}const Mt=zN;function zN(i,a=null,l=null,h=0,p=null,k=!1){if((!i||i===k2)&&(i=ji),Sc(i)){const E=xs(i,a,!0);return l&&BA(E,l),dd>0&&!k&&ko&&(E.shapeFlag&6?ko[ko.indexOf(i)]=E:ko.push(E)),E.patchFlag|=-2,E}if(YN(i)&&(i=i.__vccOpts),a){a=O2(a);let{class:E,style:A}=a;E&&!Fn(E)&&(a.class=dp(E)),kn(A)&&(wA(A)&&!Ze(A)&&(A=Yn({},A)),a.style=lp(A))}const _=Fn(i)?1:o2(i)?128:NN(i)?64:kn(i)?4:bt(i)?2:0;return Y(i,a,l,h,p,_,k,!0)}function O2(i){return i?wA(i)||aw in i?Yn({},i):i:null}function xs(i,a,l=!1){const{props:h,ref:p,patchFlag:k,children:_}=i,E=a?B2(h||{},a):h;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:E,key:E&&N2(E),ref:a&&a.ref?l&&p?Ze(p)?p.concat(yk(a)):[p,yk(a)]:yk(a):p,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:_,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:a&&i.type!==bn?k===-1?16:k|16:k,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&xs(i.ssContent),ssFallback:i.ssFallback&&xs(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx}}function bo(i=" ",a=0){return Mt(ld,null,i,a)}function Eh(i,a){const l=Mt(rd,null,i);return l.staticCount=a,l}function jr(i="",a=!1){return a?(Dt(),Ic(ji,null,i)):Mt(ji,null,i)}function Ro(i){return i==null||typeof i=="boolean"?Mt(ji):Ze(i)?Mt(bn,null,i.slice()):typeof i=="object"?wc(i):Mt(ld,null,String(i))}function wc(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:xs(i)}function BA(i,a){let l=0;const{shapeFlag:h}=i;if(a==null)a=null;else if(Ze(a))l=16;else if(typeof a=="object")if(h&65){const p=a.default;p&&(p._c&&(p._d=!1),BA(i,p()),p._c&&(p._d=!0));return}else{l=32;const p=a._;!p&&!(aw in a)?a._ctx=Ii:p===3&&Ii&&(Ii.slots._===1?a._=1:(a._=2,i.patchFlag|=1024))}else bt(a)?(a={default:a,_ctx:Ii},l=32):(a=String(a),h&64?(l=16,a=[bo(a)]):l=8);i.children=a,i.shapeFlag|=l}function B2(...i){const a={};for(let l=0;l<i.length;l++){const h=i[l];for(const p in h)if(p==="class")a.class!==h.class&&(a.class=dp([a.class,h.class]));else if(p==="style")a.style=lp([a.style,h.style]);else if(up(p)){const k=a[p],_=h[p];_&&k!==_&&!(Ze(k)&&k.includes(_))&&(a[p]=k?[].concat(k,_):_)}else p!==""&&(a[p]=h[p])}return a}function mo(i,a,l,h=null){jo(i,a,7,[l,h])}const FN=E2();let jN=0;function L2(i,a,l){const h=i.type,p=(a?a.appContext:i.appContext)||FN,k={uid:jN++,vnode:i,type:h,parent:a,appContext:p,root:null,next:null,subTree:null,effect:null,update:null,scope:new pA(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(p.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:A2(h,p),emitsOptions:i2(h,p),emit:null,emitted:null,propsDefaults:gn,inheritAttrs:h.inheritAttrs,ctx:gn,data:gn,props:gn,attrs:gn,slots:gn,refs:gn,setupState:gn,setupContext:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return k.ctx={_:k},k.root=a?a.root:k,k.emit=WP.bind(null,k),i.ce&&i.ce(k),k}let li=null;const Pc=()=>li||Ii,Tc=i=>{li=i,i.scope.on()},yc=()=>{li&&li.scope.off(),li=null};function R2(i){return i.vnode.shapeFlag&4}let bh=!1;function z2(i,a=!1){bh=a;const{props:l,children:h}=i.vnode,p=R2(i);yN(i,l,p,a),DN(i,h);const k=p?VN(i,a):void 0;return bh=!1,k}function VN(i,a){const l=i.type;i.accessCache=Object.create(null),i.proxy=_A(new Proxy(i.ctx,Lv));const{setup:h}=l;if(h){const p=i.setupContext=h.length>1?j2(i):null;Tc(i),Ch();const k=_a(h,i,0,[i.props,p]);if(yh(),yc(),fA(k)){if(k.then(yc,yc),a)return k.then(_=>{Uv(i,_,a)}).catch(_=>{hd(_,i,0)});i.asyncDep=k}else Uv(i,k,a)}else F2(i,a)}function Uv(i,a,l){bt(a)?i.type.__ssrInlineRender?i.ssrRender=a:i.render=a:kn(a)&&(i.setupState=CA(a)),F2(i,l)}let Nk,Hv;function UN(i){Nk=i,Hv=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,kN))}}const HN=()=>!Nk;function F2(i,a,l){const h=i.type;if(!i.render){if(!a&&Nk&&!h.render){const p=h.template||PA(i).template;if(p){const{isCustomElement:k,compilerOptions:_}=i.appContext.config,{delimiters:E,compilerOptions:A}=h,T=Yn(Yn({isCustomElement:k,delimiters:E},_),A);h.render=Nk(p,T)}}i.render=h.render||Fr,Hv&&Hv(i)}Tc(i),Ch(),wN(i),yh(),yc()}function WN(i){return new Proxy(i.attrs,{get(a,l){return Vo(i,"get","$attrs"),a[l]}})}function j2(i){const a=h=>{i.exposed=h||{}};let l;return{get attrs(){return l||(l=WN(i))},slots:i.slots,emit:i.emit,expose:a}}function cw(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(CA(_A(i.exposed)),{get(a,l){if(l in a)return a[l];if(l in Vg)return Vg[l](i)},has(a,l){return l in a||l in Vg}}))}function Wv(i,a=!0){return bt(i)?i.displayName||i.name:i.name||a&&i.__name}function YN(i){return bt(i)&&"__vccOpts"in i}const Fo=(i,a)=>zP(i,a,bh);function $N(){return null}function qN(){return null}function GN(i){}function KN(i,a){return null}function QN(){return V2().slots}function ZN(){return V2().attrs}function V2(){const i=Pc();return i.setupContext||(i.setupContext=j2(i))}function JN(i,a){const l=Ze(i)?i.reduce((h,p)=>(h[p]={},h),{}):i;for(const h in a){const p=l[h];p?Ze(p)||bt(p)?l[h]={type:p,default:a[h]}:p.default=a[h]:p===null&&(l[h]={default:a[h]})}return l}function XN(i,a){const l={};for(const h in i)a.includes(h)||Object.defineProperty(l,h,{enumerable:!0,get:()=>i[h]});return l}function eO(i){const a=Pc();let l=i();return yc(),fA(l)&&(l=l.catch(h=>{throw Tc(a),h})),[l,()=>Tc(a)]}function lw(i,a,l){const h=arguments.length;return h===2?kn(a)&&!Ze(a)?Sc(a)?Mt(i,null,[a]):Mt(i,a):Mt(i,null,a):(h>3?l=Array.prototype.slice.call(arguments,2):h===3&&Sc(l)&&(l=[l]),Mt(i,a,l))}const U2=Symbol(""),H2=()=>Cs(U2);function tO(){}function nO(i,a,l,h){const p=l[h];if(p&&W2(p,i))return p;const k=a();return k.memo=i.slice(),l[h]=k}function W2(i,a){const l=i.memo;if(l.length!=a.length)return!1;for(let h=0;h<l.length;h++)if(ph(l[h],a[h]))return!1;return dd>0&&ko&&ko.push(i),!0}const Y2="3.2.45",iO={createComponentInstance:L2,setupComponent:z2,renderComponentRoot:Ck,setCurrentRenderingInstance:tp,isVNode:Sc,normalizeVNode:Ro},oO=iO,rO=null,sO=null,aO="http://www.w3.org/2000/svg",Zl=typeof document<"u"?document:null,Tx=Zl&&Zl.createElement("template"),cO={insert:(i,a,l)=>{a.insertBefore(i,l||null)},remove:i=>{const a=i.parentNode;a&&a.removeChild(i)},createElement:(i,a,l,h)=>{const p=a?Zl.createElementNS(aO,i):Zl.createElement(i,l?{is:l}:void 0);return i==="select"&&h&&h.multiple!=null&&p.setAttribute("multiple",h.multiple),p},createText:i=>Zl.createTextNode(i),createComment:i=>Zl.createComment(i),setText:(i,a)=>{i.nodeValue=a},setElementText:(i,a)=>{i.textContent=a},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Zl.querySelector(i),setScopeId(i,a){i.setAttribute(a,"")},insertStaticContent(i,a,l,h,p,k){const _=l?l.previousSibling:a.lastChild;if(p&&(p===k||p.nextSibling))for(;a.insertBefore(p.cloneNode(!0),l),!(p===k||!(p=p.nextSibling)););else{Tx.innerHTML=h?`<svg>${i}</svg>`:i;const E=Tx.content;if(h){const A=E.firstChild;for(;A.firstChild;)E.appendChild(A.firstChild);E.removeChild(A)}a.insertBefore(E,l)}return[_?_.nextSibling:a.firstChild,l?l.previousSibling:a.lastChild]}};function lO(i,a,l){const h=i._vtc;h&&(a=(a?[a,...h]:[...h]).join(" ")),a==null?i.removeAttribute("class"):l?i.setAttribute("class",a):i.className=a}function dO(i,a,l){const h=i.style,p=Fn(l);if(l&&!p){for(const k in l)Yv(h,k,l[k]);if(a&&!Fn(a))for(const k in a)l[k]==null&&Yv(h,k,"")}else{const k=h.display;p?a!==l&&(h.cssText=l):a&&i.removeAttribute("style"),"_vod"in i&&(h.display=k)}}const Mx=/\s*!important$/;function Yv(i,a,l){if(Ze(l))l.forEach(h=>Yv(i,a,h));else if(l==null&&(l=""),a.startsWith("--"))i.setProperty(a,l);else{const h=uO(i,a);Mx.test(l)?i.setProperty(cr(h),l.replace(Mx,""),"important"):i[h]=l}}const Ix=["Webkit","Moz","ms"],pv={};function uO(i,a){const l=pv[a];if(l)return l;let h=wo(a);if(h!=="filter"&&h in i)return pv[a]=h;h=fp(h);for(let p=0;p<Ix.length;p++){const k=Ix[p]+h;if(k in i)return pv[a]=k}return a}const Px="http://www.w3.org/1999/xlink";function hO(i,a,l,h,p){if(h&&a.startsWith("xlink:"))l==null?i.removeAttributeNS(Px,a.slice(6,a.length)):i.setAttributeNS(Px,a,l);else{const k=H5(a);l==null||k&&!IE(l)?i.removeAttribute(a):i.setAttribute(a,k?"":l)}}function fO(i,a,l,h,p,k,_){if(a==="innerHTML"||a==="textContent"){h&&_(h,p,k),i[a]=l==null?"":l;return}if(a==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=l;const A=l==null?"":l;(i.value!==A||i.tagName==="OPTION")&&(i.value=A),l==null&&i.removeAttribute(a);return}let E=!1;if(l===""||l==null){const A=typeof i[a];A==="boolean"?l=IE(l):l==null&&A==="string"?(l="",E=!0):A==="number"&&(l=0,E=!0)}try{i[a]=l}catch{}E&&i.removeAttribute(a)}function ma(i,a,l,h){i.addEventListener(a,l,h)}function gO(i,a,l,h){i.removeEventListener(a,l,h)}function pO(i,a,l,h,p=null){const k=i._vei||(i._vei={}),_=k[a];if(h&&_)_.value=h;else{const[E,A]=mO(a);if(h){const T=k[a]=wO(h,p);ma(i,E,T,A)}else _&&(gO(i,E,_,A),k[a]=void 0)}}const Nx=/(?:Once|Passive|Capture)$/;function mO(i){let a;if(Nx.test(i)){a={};let h;for(;h=i.match(Nx);)i=i.slice(0,i.length-h[0].length),a[h[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):cr(i.slice(2)),a]}let mv=0;const bO=Promise.resolve(),kO=()=>mv||(bO.then(()=>mv=0),mv=Date.now());function wO(i,a){const l=h=>{if(!h._vts)h._vts=Date.now();else if(h._vts<=l.attached)return;jo(_O(h,l.value),a,5,[h])};return l.value=i,l.attached=kO(),l}function _O(i,a){if(Ze(a)){const l=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{l.call(i),i._stopped=!0},a.map(h=>p=>!p._stopped&&h&&h(p))}else return a}const Ox=/^on[a-z]/,vO=(i,a,l,h,p=!1,k,_,E,A)=>{a==="class"?lO(i,h,p):a==="style"?dO(i,l,h):up(a)?uA(a)||pO(i,a,l,h,_):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):AO(i,a,h,p))?fO(i,a,h,k,_,E,A):(a==="true-value"?i._trueValue=h:a==="false-value"&&(i._falseValue=h),hO(i,a,h,p))};function AO(i,a,l,h){return h?!!(a==="innerHTML"||a==="textContent"||a in i&&Ox.test(a)&&bt(l)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&i.tagName==="INPUT"||a==="type"&&i.tagName==="TEXTAREA"||Ox.test(a)&&Fn(l)?!1:a in i}function $2(i,a){const l=mp(i);class h extends dw{constructor(k){super(l,k,a)}}return h.def=l,h}const CO=i=>$2(i,sD),yO=typeof HTMLElement<"u"?HTMLElement:class{};class dw extends yO{constructor(a,l={},h){super(),this._def=a,this._props=l,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&h?h(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Jk(()=>{this._connected||(Gv(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let h=0;h<this.attributes.length;h++)this._setAttr(this.attributes[h].name);new MutationObserver(h=>{for(const p of h)this._setAttr(p.attributeName)}).observe(this,{attributes:!0});const a=(h,p=!1)=>{const{props:k,styles:_}=h;let E;if(k&&!Ze(k))for(const A in k){const T=k[A];(T===Number||T&&T.type===Number)&&(A in this._props&&(this._props[A]=Aa(this._props[A])),(E||(E=Object.create(null)))[wo(A)]=!0)}this._numberProps=E,p&&this._resolveProps(h),this._applyStyles(_),this._update()},l=this._def.__asyncLoader;l?l().then(h=>a(h,!0)):a(this._def)}_resolveProps(a){const{props:l}=a,h=Ze(l)?l:Object.keys(l||{});for(const p of Object.keys(this))p[0]!=="_"&&h.includes(p)&&this._setProp(p,this[p],!0,!1);for(const p of h.map(wo))Object.defineProperty(this,p,{get(){return this._getProp(p)},set(k){this._setProp(p,k)}})}_setAttr(a){let l=this.getAttribute(a);const h=wo(a);this._numberProps&&this._numberProps[h]&&(l=Aa(l)),this._setProp(h,l,!1)}_getProp(a){return this._props[a]}_setProp(a,l,h=!0,p=!0){l!==this._props[a]&&(this._props[a]=l,p&&this._instance&&this._update(),h&&(l===!0?this.setAttribute(cr(a),""):typeof l=="string"||typeof l=="number"?this.setAttribute(cr(a),l+""):l||this.removeAttribute(cr(a))))}_update(){Gv(this._createVNode(),this.shadowRoot)}_createVNode(){const a=Mt(this._def,Yn({},this._props));return this._instance||(a.ce=l=>{this._instance=l,l.isCE=!0;const h=(k,_)=>{this.dispatchEvent(new CustomEvent(k,{detail:_}))};l.emit=(k,..._)=>{h(k,_),cr(k)!==k&&h(cr(k),_)};let p=this;for(;p=p&&(p.parentNode||p.host);)if(p instanceof dw){l.parent=p._instance,l.provides=p._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(l=>{const h=document.createElement("style");h.textContent=l,this.shadowRoot.appendChild(h)})}}function xO(i="$style"){{const a=Pc();if(!a)return gn;const l=a.type.__cssModules;if(!l)return gn;const h=l[i];return h||gn}}function EO(i){const a=Pc();if(!a)return;const l=a.ut=(p=i(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(k=>qv(k,p))},h=()=>{const p=i(a.proxy);$v(a.subTree,p),l(p)};s2(h),kp(()=>{const p=new MutationObserver(h);p.observe(a.subTree.el.parentNode,{childList:!0}),sw(()=>p.disconnect())})}function $v(i,a){if(i.shapeFlag&128){const l=i.suspense;i=l.activeBranch,l.pendingBranch&&!l.isHydrating&&l.effects.push(()=>{$v(l.activeBranch,a)})}for(;i.component;)i=i.component.subTree;if(i.shapeFlag&1&&i.el)qv(i.el,a);else if(i.type===bn)i.children.forEach(l=>$v(l,a));else if(i.type===rd){let{el:l,anchor:h}=i;for(;l&&(qv(l,a),l!==h);)l=l.nextSibling}}function qv(i,a){if(i.nodeType===1){const l=i.style;for(const h in a)l.setProperty(`--${h}`,a[h])}}const pc="transition",Tg="animation",LA=(i,{slots:a})=>lw(TA,G2(i),a);LA.displayName="Transition";const q2={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},DO=LA.props=Yn({},TA.props,q2),ql=(i,a=[])=>{Ze(i)?i.forEach(l=>l(...a)):i&&i(...a)},Bx=i=>i?Ze(i)?i.some(a=>a.length>1):i.length>1:!1;function G2(i){const a={};for(const $ in i)$ in q2||(a[$]=i[$]);if(i.css===!1)return a;const{name:l="v",type:h,duration:p,enterFromClass:k=`${l}-enter-from`,enterActiveClass:_=`${l}-enter-active`,enterToClass:E=`${l}-enter-to`,appearFromClass:A=k,appearActiveClass:T=_,appearToClass:I=E,leaveFromClass:N=`${l}-leave-from`,leaveActiveClass:D=`${l}-leave-active`,leaveToClass:z=`${l}-leave-to`}=i,Z=SO(p),ae=Z&&Z[0],we=Z&&Z[1],{onBeforeEnter:ee,onEnter:q,onEnterCancelled:ie,onLeave:fe,onLeaveCancelled:_e,onBeforeAppear:Ie=ee,onAppear:de=q,onAppearCancelled:le=ie}=a,ye=($,Ue,Me)=>{kc($,Ue?I:E),kc($,Ue?T:_),Me&&Me()},Pe=($,Ue)=>{$._isLeaving=!1,kc($,N),kc($,z),kc($,D),Ue&&Ue()},Le=$=>(Ue,Me)=>{const Je=$?de:q,Xe=()=>ye(Ue,$,Me);ql(Je,[Ue,Xe]),Lx(()=>{kc(Ue,$?A:k),ha(Ue,$?I:E),Bx(Je)||Rx(Ue,h,ae,Xe)})};return Yn(a,{onBeforeEnter($){ql(ee,[$]),ha($,k),ha($,_)},onBeforeAppear($){ql(Ie,[$]),ha($,A),ha($,T)},onEnter:Le(!1),onAppear:Le(!0),onLeave($,Ue){$._isLeaving=!0;const Me=()=>Pe($,Ue);ha($,N),Q2(),ha($,D),Lx(()=>{!$._isLeaving||(kc($,N),ha($,z),Bx(fe)||Rx($,h,we,Me))}),ql(fe,[$,Me])},onEnterCancelled($){ye($,!1),ql(ie,[$])},onAppearCancelled($){ye($,!0),ql(le,[$])},onLeaveCancelled($){Pe($),ql(_e,[$])}})}function SO(i){if(i==null)return null;if(kn(i))return[bv(i.enter),bv(i.leave)];{const a=bv(i);return[a,a]}}function bv(i){return Aa(i)}function ha(i,a){a.split(/\s+/).forEach(l=>l&&i.classList.add(l)),(i._vtc||(i._vtc=new Set)).add(a)}function kc(i,a){a.split(/\s+/).forEach(h=>h&&i.classList.remove(h));const{_vtc:l}=i;l&&(l.delete(a),l.size||(i._vtc=void 0))}function Lx(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let TO=0;function Rx(i,a,l,h){const p=i._endId=++TO,k=()=>{p===i._endId&&h()};if(l)return setTimeout(k,l);const{type:_,timeout:E,propCount:A}=K2(i,a);if(!_)return h();const T=_+"end";let I=0;const N=()=>{i.removeEventListener(T,D),k()},D=z=>{z.target===i&&++I>=A&&N()};setTimeout(()=>{I<A&&N()},E+1),i.addEventListener(T,D)}function K2(i,a){const l=window.getComputedStyle(i),h=Z=>(l[Z]||"").split(", "),p=h(`${pc}Delay`),k=h(`${pc}Duration`),_=zx(p,k),E=h(`${Tg}Delay`),A=h(`${Tg}Duration`),T=zx(E,A);let I=null,N=0,D=0;a===pc?_>0&&(I=pc,N=_,D=k.length):a===Tg?T>0&&(I=Tg,N=T,D=A.length):(N=Math.max(_,T),I=N>0?_>T?pc:Tg:null,D=I?I===pc?k.length:A.length:0);const z=I===pc&&/\b(transform|all)(,|$)/.test(h(`${pc}Property`).toString());return{type:I,timeout:N,propCount:D,hasTransform:z}}function zx(i,a){for(;i.length<a.length;)i=i.concat(i);return Math.max(...a.map((l,h)=>Fx(l)+Fx(i[h])))}function Fx(i){return Number(i.slice(0,-1).replace(",","."))*1e3}function Q2(){return document.body.offsetHeight}const Z2=new WeakMap,J2=new WeakMap,MO={name:"TransitionGroup",props:Yn({},DO,{tag:String,moveClass:String}),setup(i,{slots:a}){const l=Pc(),h=SA();let p,k;return ow(()=>{if(!p.length)return;const _=i.moveClass||`${i.name||"v"}-move`;if(!BO(p[0].el,l.vnode.el,_))return;p.forEach(PO),p.forEach(NO);const E=p.filter(OO);Q2(),E.forEach(A=>{const T=A.el,I=T.style;ha(T,_),I.transform=I.webkitTransform=I.transitionDuration="";const N=T._moveCb=D=>{D&&D.target!==T||(!D||/transform$/.test(D.propertyName))&&(T.removeEventListener("transitionend",N),T._moveCb=null,kc(T,_))};T.addEventListener("transitionend",N)})}),()=>{const _=Gt(i),E=G2(_);let A=_.tag||bn;p=k,k=a.default?nw(a.default()):[];for(let T=0;T<k.length;T++){const I=k[T];I.key!=null&&cd(I,mh(I,E,h,l))}if(p)for(let T=0;T<p.length;T++){const I=p[T];cd(I,mh(I,E,h,l)),Z2.set(I,I.el.getBoundingClientRect())}return Mt(A,null,k)}}},IO=MO;function PO(i){const a=i.el;a._moveCb&&a._moveCb(),a._enterCb&&a._enterCb()}function NO(i){J2.set(i,i.el.getBoundingClientRect())}function OO(i){const a=Z2.get(i),l=J2.get(i),h=a.left-l.left,p=a.top-l.top;if(h||p){const k=i.el.style;return k.transform=k.webkitTransform=`translate(${h}px,${p}px)`,k.transitionDuration="0s",i}}function BO(i,a,l){const h=i.cloneNode();i._vtc&&i._vtc.forEach(_=>{_.split(/\s+/).forEach(E=>E&&h.classList.remove(E))}),l.split(/\s+/).forEach(_=>_&&h.classList.add(_)),h.style.display="none";const p=a.nodeType===1?a:a.parentNode;p.appendChild(h);const{hasTransform:k}=K2(h);return p.removeChild(h),k}const Mc=i=>{const a=i.props["onUpdate:modelValue"]||!1;return Ze(a)?l=>ch(a,l):a};function LO(i){i.target.composing=!0}function jx(i){const a=i.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Lo={created(i,{modifiers:{lazy:a,trim:l,number:h}},p){i._assign=Mc(p);const k=h||p.props&&p.props.type==="number";ma(i,a?"change":"input",_=>{if(_.target.composing)return;let E=i.value;l&&(E=E.trim()),k&&(E=Aa(E)),i._assign(E)}),l&&ma(i,"change",()=>{i.value=i.value.trim()}),a||(ma(i,"compositionstart",LO),ma(i,"compositionend",jx),ma(i,"change",jx))},mounted(i,{value:a}){i.value=a==null?"":a},beforeUpdate(i,{value:a,modifiers:{lazy:l,trim:h,number:p}},k){if(i._assign=Mc(k),i.composing||document.activeElement===i&&i.type!=="range"&&(l||h&&i.value.trim()===a||(p||i.type==="number")&&Aa(i.value)===a))return;const _=a==null?"":a;i.value!==_&&(i.value=_)}},RA={deep:!0,created(i,a,l){i._assign=Mc(l),ma(i,"change",()=>{const h=i._modelValue,p=kh(i),k=i.checked,_=i._assign;if(Ze(h)){const E=Yk(h,p),A=E!==-1;if(k&&!A)_(h.concat(p));else if(!k&&A){const T=[...h];T.splice(E,1),_(T)}}else if(ud(h)){const E=new Set(h);k?E.add(p):E.delete(p),_(E)}else _(X2(i,k))})},mounted:Vx,beforeUpdate(i,a,l){i._assign=Mc(l),Vx(i,a,l)}};function Vx(i,{value:a,oldValue:l},h){i._modelValue=a,Ze(a)?i.checked=Yk(a,h.props.value)>-1:ud(a)?i.checked=a.has(h.props.value):a!==l&&(i.checked=Ec(a,X2(i,!0)))}const zA={created(i,{value:a},l){i.checked=Ec(a,l.props.value),i._assign=Mc(l),ma(i,"change",()=>{i._assign(kh(i))})},beforeUpdate(i,{value:a,oldValue:l},h){i._assign=Mc(h),a!==l&&(i.checked=Ec(a,h.props.value))}},FA={deep:!0,created(i,{value:a,modifiers:{number:l}},h){const p=ud(a);ma(i,"change",()=>{const k=Array.prototype.filter.call(i.options,_=>_.selected).map(_=>l?Aa(kh(_)):kh(_));i._assign(i.multiple?p?new Set(k):k:k[0])}),i._assign=Mc(h)},mounted(i,{value:a}){Ux(i,a)},beforeUpdate(i,a,l){i._assign=Mc(l)},updated(i,{value:a}){Ux(i,a)}};function Ux(i,a){const l=i.multiple;if(!(l&&!Ze(a)&&!ud(a))){for(let h=0,p=i.options.length;h<p;h++){const k=i.options[h],_=kh(k);if(l)Ze(a)?k.selected=Yk(a,_)>-1:k.selected=a.has(_);else if(Ec(kh(k),a)){i.selectedIndex!==h&&(i.selectedIndex=h);return}}!l&&i.selectedIndex!==-1&&(i.selectedIndex=-1)}}function kh(i){return"_value"in i?i._value:i.value}function X2(i,a){const l=a?"_trueValue":"_falseValue";return l in i?i[l]:a}const eD={created(i,a,l){bk(i,a,l,null,"created")},mounted(i,a,l){bk(i,a,l,null,"mounted")},beforeUpdate(i,a,l,h){bk(i,a,l,h,"beforeUpdate")},updated(i,a,l,h){bk(i,a,l,h,"updated")}};function tD(i,a){switch(i){case"SELECT":return FA;case"TEXTAREA":return Lo;default:switch(a){case"checkbox":return RA;case"radio":return zA;default:return Lo}}}function bk(i,a,l,h,p){const _=tD(i.tagName,l.props&&l.props.type)[p];_&&_(i,a,l,h)}function RO(){Lo.getSSRProps=({value:i})=>({value:i}),zA.getSSRProps=({value:i},a)=>{if(a.props&&Ec(a.props.value,i))return{checked:!0}},RA.getSSRProps=({value:i},a)=>{if(Ze(i)){if(a.props&&Yk(i,a.props.value)>-1)return{checked:!0}}else if(ud(i)){if(a.props&&i.has(a.props.value))return{checked:!0}}else if(i)return{checked:!0}},eD.getSSRProps=(i,a)=>{if(typeof a.type!="string")return;const l=tD(a.type.toUpperCase(),a.props&&a.props.type);if(l.getSSRProps)return l.getSSRProps(i,a)}}const zO=["ctrl","shift","alt","meta"],FO={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,a)=>zO.some(l=>i[`${l}Key`]&&!a.includes(l))},jO=(i,a)=>(l,...h)=>{for(let p=0;p<a.length;p++){const k=FO[a[p]];if(k&&k(l,a))return}return i(l,...h)},VO={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},UO=(i,a)=>l=>{if(!("key"in l))return;const h=cr(l.key);if(a.some(p=>p===h||VO[p]===h))return i(l)},nD={beforeMount(i,{value:a},{transition:l}){i._vod=i.style.display==="none"?"":i.style.display,l&&a?l.beforeEnter(i):Mg(i,a)},mounted(i,{value:a},{transition:l}){l&&a&&l.enter(i)},updated(i,{value:a,oldValue:l},{transition:h}){!a!=!l&&(h?a?(h.beforeEnter(i),Mg(i,!0),h.enter(i)):h.leave(i,()=>{Mg(i,!1)}):Mg(i,a))},beforeUnmount(i,{value:a}){Mg(i,a)}};function Mg(i,a){i.style.display=a?i._vod:"none"}function HO(){nD.getSSRProps=({value:i})=>{if(!i)return{style:{display:"none"}}}}const iD=Yn({patchProp:vO},cO);let Wg,Hx=!1;function oD(){return Wg||(Wg=D2(iD))}function rD(){return Wg=Hx?Wg:S2(iD),Hx=!0,Wg}const Gv=(...i)=>{oD().render(...i)},sD=(...i)=>{rD().hydrate(...i)},aD=(...i)=>{const a=oD().createApp(...i),{mount:l}=a;return a.mount=h=>{const p=cD(h);if(!p)return;const k=a._component;!bt(k)&&!k.render&&!k.template&&(k.template=p.innerHTML),p.innerHTML="";const _=l(p,!1,p instanceof SVGElement);return p instanceof Element&&(p.removeAttribute("v-cloak"),p.setAttribute("data-v-app","")),_},a},WO=(...i)=>{const a=rD().createApp(...i),{mount:l}=a;return a.mount=h=>{const p=cD(h);if(p)return l(p,!0,p instanceof SVGElement)},a};function cD(i){return Fn(i)?document.querySelector(i):i}let Wx=!1;const YO=()=>{Wx||(Wx=!0,RO(),HO())},$O=()=>{},qO=Object.freeze(Object.defineProperty({__proto__:null,compile:$O,EffectScope:pA,ReactiveEffect:gp,customRef:OP,effect:iP,effectScope:J5,getCurrentScope:X5,isProxy:wA,isReactive:nd,isReadonly:ad,isRef:wi,isShallow:Zg,markRaw:_A,onScopeDispose:eP,proxyRefs:CA,reactive:xh,readonly:kA,ref:Fg,shallowReactive:GE,shallowReadonly:TP,shallowRef:KE,stop:oP,toRaw:Gt,toRef:ZE,toRefs:BP,triggerRef:IP,unref:id,camelize:wo,capitalize:fp,normalizeClass:dp,normalizeProps:V5,normalizeStyle:lp,toDisplayString:Ji,toHandlerKey:zg,BaseTransition:TA,Comment:ji,Fragment:bn,KeepAlive:dN,Static:rd,Suspense:XP,Teleport:LN,Text:ld,callWithAsyncErrorHandling:jo,callWithErrorHandling:_a,cloneVNode:xs,compatUtils:sO,computed:Fo,createBlock:Ic,createCommentVNode:jr,createElementBlock:an,createElementVNode:Y,createHydrationRenderer:S2,createPropsRestProxy:XN,createRenderer:D2,createSlots:pN,createStaticVNode:Eh,createTextVNode:bo,createVNode:Mt,defineAsyncComponent:cN,defineComponent:mp,defineEmits:qN,defineExpose:GN,defineProps:$N,get devtools(){return nh},getCurrentInstance:Pc,getTransitionRawChildren:nw,guardReactiveProps:O2,h:lw,handleError:hd,initCustomFormatter:tO,inject:Cs,isMemoSame:W2,isRuntimeOnly:HN,isVNode:Sc,mergeDefaults:JN,mergeProps:B2,nextTick:Jk,onActivated:l2,onBeforeMount:h2,onBeforeUnmount:rw,onBeforeUpdate:f2,onDeactivated:d2,onErrorCaptured:b2,onMounted:kp,onRenderTracked:m2,onRenderTriggered:p2,onServerPrefetch:g2,onUnmounted:sw,onUpdated:ow,openBlock:Dt,popScopeId:$P,provide:jg,pushScopeId:YP,queuePostFlushCb:xA,registerRuntimeCompiler:UN,renderList:wp,renderSlot:mN,resolveComponent:ys,resolveDirective:gN,resolveDynamicComponent:fN,resolveFilter:rO,resolveTransitionHooks:mh,setBlockTracking:Vv,setDevtoolsHook:n2,setTransitionHooks:cd,ssrContextKey:U2,ssrUtils:oO,toHandlers:bN,transformVNodeArgs:RN,useAttrs:ZN,useSSRContext:H2,useSlots:QN,useTransitionState:SA,version:Y2,warn:FP,watch:uh,watchEffect:oN,watchPostEffect:s2,watchSyncEffect:rN,withAsyncContext:eO,withCtx:lr,withDefaults:KN,withDirectives:Lr,withMemo:nO,withScopeId:qP,Transition:LA,TransitionGroup:IO,VueElement:dw,createApp:aD,createSSRApp:WO,defineCustomElement:$2,defineSSRCustomElement:CO,hydrate:sD,initDirectivesForSSR:YO,render:Gv,useCssModule:xO,useCssVars:EO,vModelCheckbox:RA,vModelDynamic:eD,vModelRadio:zA,vModelSelect:FA,vModelText:Lo,vShow:nD,withKeys:UO,withModifiers:jO},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ih=typeof window<"u";function GO(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const dn=Object.assign;function kv(i,a){const l={};for(const h in a){const p=a[h];l[h]=Vr(p)?p.map(i):i(p)}return l}const Yg=()=>{},Vr=Array.isArray,KO=/\/$/,QO=i=>i.replace(KO,"");function wv(i,a,l="/"){let h,p={},k="",_="";const E=a.indexOf("#");let A=a.indexOf("?");return E<A&&E>=0&&(A=-1),A>-1&&(h=a.slice(0,A),k=a.slice(A+1,E>-1?E:a.length),p=i(k)),E>-1&&(h=h||a.slice(0,E),_=a.slice(E,a.length)),h=eB(h!=null?h:a,l),{fullPath:h+(k&&"?")+k+_,path:h,query:p,hash:_}}function ZO(i,a){const l=a.query?i(a.query):"";return a.path+(l&&"?")+l+(a.hash||"")}function Yx(i,a){return!a||!i.toLowerCase().startsWith(a.toLowerCase())?i:i.slice(a.length)||"/"}function JO(i,a,l){const h=a.matched.length-1,p=l.matched.length-1;return h>-1&&h===p&&wh(a.matched[h],l.matched[p])&&lD(a.params,l.params)&&i(a.query)===i(l.query)&&a.hash===l.hash}function wh(i,a){return(i.aliasOf||i)===(a.aliasOf||a)}function lD(i,a){if(Object.keys(i).length!==Object.keys(a).length)return!1;for(const l in i)if(!XO(i[l],a[l]))return!1;return!0}function XO(i,a){return Vr(i)?$x(i,a):Vr(a)?$x(a,i):i===a}function $x(i,a){return Vr(a)?i.length===a.length&&i.every((l,h)=>l===a[h]):i.length===1&&i[0]===a}function eB(i,a){if(i.startsWith("/"))return i;if(!i)return a;const l=a.split("/"),h=i.split("/");let p=l.length-1,k,_;for(k=0;k<h.length;k++)if(_=h[k],_!==".")if(_==="..")p>1&&p--;else break;return l.slice(0,p).join("/")+"/"+h.slice(k-(k===h.length?1:0)).join("/")}var ip;(function(i){i.pop="pop",i.push="push"})(ip||(ip={}));var $g;(function(i){i.back="back",i.forward="forward",i.unknown=""})($g||($g={}));function tB(i){if(!i)if(ih){const a=document.querySelector("base");i=a&&a.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),QO(i)}const nB=/^[^#]+#/;function iB(i,a){return i.replace(nB,"#")+a}function oB(i,a){const l=document.documentElement.getBoundingClientRect(),h=i.getBoundingClientRect();return{behavior:a.behavior,left:h.left-l.left-(a.left||0),top:h.top-l.top-(a.top||0)}}const uw=()=>({left:window.pageXOffset,top:window.pageYOffset});function rB(i){let a;if("el"in i){const l=i.el,h=typeof l=="string"&&l.startsWith("#"),p=typeof l=="string"?h?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!p)return;a=oB(p,i)}else a=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function qx(i,a){return(history.state?history.state.position-a:-1)+i}const Kv=new Map;function sB(i,a){Kv.set(i,a)}function aB(i){const a=Kv.get(i);return Kv.delete(i),a}let cB=()=>location.protocol+"//"+location.host;function dD(i,a){const{pathname:l,search:h,hash:p}=a,k=i.indexOf("#");if(k>-1){let E=p.includes(i.slice(k))?i.slice(k).length:1,A=p.slice(E);return A[0]!=="/"&&(A="/"+A),Yx(A,"")}return Yx(l,i)+h+p}function lB(i,a,l,h){let p=[],k=[],_=null;const E=({state:D})=>{const z=dD(i,location),Z=l.value,ae=a.value;let we=0;if(D){if(l.value=z,a.value=D,_&&_===Z){_=null;return}we=ae?D.position-ae.position:0}else h(z);p.forEach(ee=>{ee(l.value,Z,{delta:we,type:ip.pop,direction:we?we>0?$g.forward:$g.back:$g.unknown})})};function A(){_=l.value}function T(D){p.push(D);const z=()=>{const Z=p.indexOf(D);Z>-1&&p.splice(Z,1)};return k.push(z),z}function I(){const{history:D}=window;!D.state||D.replaceState(dn({},D.state,{scroll:uw()}),"")}function N(){for(const D of k)D();k=[],window.removeEventListener("popstate",E),window.removeEventListener("beforeunload",I)}return window.addEventListener("popstate",E),window.addEventListener("beforeunload",I),{pauseListeners:A,listen:T,destroy:N}}function Gx(i,a,l,h=!1,p=!1){return{back:i,current:a,forward:l,replaced:h,position:window.history.length,scroll:p?uw():null}}function dB(i){const{history:a,location:l}=window,h={value:dD(i,l)},p={value:a.state};p.value||k(h.value,{back:null,current:h.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function k(A,T,I){const N=i.indexOf("#"),D=N>-1?(l.host&&document.querySelector("base")?i:i.slice(N))+A:cB()+i+A;try{a[I?"replaceState":"pushState"](T,"",D),p.value=T}catch(z){console.error(z),l[I?"replace":"assign"](D)}}function _(A,T){const I=dn({},a.state,Gx(p.value.back,A,p.value.forward,!0),T,{position:p.value.position});k(A,I,!0),h.value=A}function E(A,T){const I=dn({},p.value,a.state,{forward:A,scroll:uw()});k(I.current,I,!0);const N=dn({},Gx(h.value,A,null),{position:I.position+1},T);k(A,N,!1),h.value=A}return{location:h,state:p,push:E,replace:_}}function uB(i){i=tB(i);const a=dB(i),l=lB(i,a.state,a.location,a.replace);function h(k,_=!0){_||l.pauseListeners(),history.go(k)}const p=dn({location:"",base:i,go:h,createHref:iB.bind(null,i)},a,l);return Object.defineProperty(p,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(p,"state",{enumerable:!0,get:()=>a.state.value}),p}function hB(i){return typeof i=="string"||i&&typeof i=="object"}function uD(i){return typeof i=="string"||typeof i=="symbol"}const mc={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hD=Symbol("");var Kx;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Kx||(Kx={}));function _h(i,a){return dn(new Error,{type:i,[hD]:!0},a)}function da(i,a){return i instanceof Error&&hD in i&&(a==null||!!(i.type&a))}const Qx="[^/]+?",fB={sensitive:!1,strict:!1,start:!0,end:!0},gB=/[.+*?^${}()[\]/\\]/g;function pB(i,a){const l=dn({},fB,a),h=[];let p=l.start?"^":"";const k=[];for(const T of i){const I=T.length?[]:[90];l.strict&&!T.length&&(p+="/");for(let N=0;N<T.length;N++){const D=T[N];let z=40+(l.sensitive?.25:0);if(D.type===0)N||(p+="/"),p+=D.value.replace(gB,"\\$&"),z+=40;else if(D.type===1){const{value:Z,repeatable:ae,optional:we,regexp:ee}=D;k.push({name:Z,repeatable:ae,optional:we});const q=ee||Qx;if(q!==Qx){z+=10;try{new RegExp(`(${q})`)}catch(fe){throw new Error(`Invalid custom RegExp for param "${Z}" (${q}): `+fe.message)}}let ie=ae?`((?:${q})(?:/(?:${q}))*)`:`(${q})`;N||(ie=we&&T.length<2?`(?:/${ie})`:"/"+ie),we&&(ie+="?"),p+=ie,z+=20,we&&(z+=-8),ae&&(z+=-20),q===".*"&&(z+=-50)}I.push(z)}h.push(I)}if(l.strict&&l.end){const T=h.length-1;h[T][h[T].length-1]+=.7000000000000001}l.strict||(p+="/?"),l.end?p+="$":l.strict&&(p+="(?:/|$)");const _=new RegExp(p,l.sensitive?"":"i");function E(T){const I=T.match(_),N={};if(!I)return null;for(let D=1;D<I.length;D++){const z=I[D]||"",Z=k[D-1];N[Z.name]=z&&Z.repeatable?z.split("/"):z}return N}function A(T){let I="",N=!1;for(const D of i){(!N||!I.endsWith("/"))&&(I+="/"),N=!1;for(const z of D)if(z.type===0)I+=z.value;else if(z.type===1){const{value:Z,repeatable:ae,optional:we}=z,ee=Z in T?T[Z]:"";if(Vr(ee)&&!ae)throw new Error(`Provided param "${Z}" is an array but it is not repeatable (* or + modifiers)`);const q=Vr(ee)?ee.join("/"):ee;if(!q)if(we)D.length<2&&(I.endsWith("/")?I=I.slice(0,-1):N=!0);else throw new Error(`Missing required param "${Z}"`);I+=q}}return I||"/"}return{re:_,score:h,keys:k,parse:E,stringify:A}}function mB(i,a){let l=0;for(;l<i.length&&l<a.length;){const h=a[l]-i[l];if(h)return h;l++}return i.length<a.length?i.length===1&&i[0]===40+40?-1:1:i.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function bB(i,a){let l=0;const h=i.score,p=a.score;for(;l<h.length&&l<p.length;){const k=mB(h[l],p[l]);if(k)return k;l++}if(Math.abs(p.length-h.length)===1){if(Zx(h))return 1;if(Zx(p))return-1}return p.length-h.length}function Zx(i){const a=i[i.length-1];return i.length>0&&a[a.length-1]<0}const kB={type:0,value:""},wB=/[a-zA-Z0-9_]/;function _B(i){if(!i)return[[]];if(i==="/")return[[kB]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function a(z){throw new Error(`ERR (${l})/"${T}": ${z}`)}let l=0,h=l;const p=[];let k;function _(){k&&p.push(k),k=[]}let E=0,A,T="",I="";function N(){!T||(l===0?k.push({type:0,value:T}):l===1||l===2||l===3?(k.length>1&&(A==="*"||A==="+")&&a(`A repeatable param (${T}) must be alone in its segment. eg: '/:ids+.`),k.push({type:1,value:T,regexp:I,repeatable:A==="*"||A==="+",optional:A==="*"||A==="?"})):a("Invalid state to consume buffer"),T="")}function D(){T+=A}for(;E<i.length;){if(A=i[E++],A==="\\"&&l!==2){h=l,l=4;continue}switch(l){case 0:A==="/"?(T&&N(),_()):A===":"?(N(),l=1):D();break;case 4:D(),l=h;break;case 1:A==="("?l=2:wB.test(A)?D():(N(),l=0,A!=="*"&&A!=="?"&&A!=="+"&&E--);break;case 2:A===")"?I[I.length-1]=="\\"?I=I.slice(0,-1)+A:l=3:I+=A;break;case 3:N(),l=0,A!=="*"&&A!=="?"&&A!=="+"&&E--,I="";break;default:a("Unknown state");break}}return l===2&&a(`Unfinished custom RegExp for param "${T}"`),N(),_(),p}function vB(i,a,l){const h=pB(_B(i.path),l),p=dn(h,{record:i,parent:a,children:[],alias:[]});return a&&!p.record.aliasOf==!a.record.aliasOf&&a.children.push(p),p}function AB(i,a){const l=[],h=new Map;a=eE({strict:!1,end:!0,sensitive:!1},a);function p(I){return h.get(I)}function k(I,N,D){const z=!D,Z=CB(I);Z.aliasOf=D&&D.record;const ae=eE(a,I),we=[Z];if("alias"in I){const ie=typeof I.alias=="string"?[I.alias]:I.alias;for(const fe of ie)we.push(dn({},Z,{components:D?D.record.components:Z.components,path:fe,aliasOf:D?D.record:Z}))}let ee,q;for(const ie of we){const{path:fe}=ie;if(N&&fe[0]!=="/"){const _e=N.record.path,Ie=_e[_e.length-1]==="/"?"":"/";ie.path=N.record.path+(fe&&Ie+fe)}if(ee=vB(ie,N,ae),D?D.alias.push(ee):(q=q||ee,q!==ee&&q.alias.push(ee),z&&I.name&&!Xx(ee)&&_(I.name)),Z.children){const _e=Z.children;for(let Ie=0;Ie<_e.length;Ie++)k(_e[Ie],ee,D&&D.children[Ie])}D=D||ee,(ee.record.components&&Object.keys(ee.record.components).length||ee.record.name||ee.record.redirect)&&A(ee)}return q?()=>{_(q)}:Yg}function _(I){if(uD(I)){const N=h.get(I);N&&(h.delete(I),l.splice(l.indexOf(N),1),N.children.forEach(_),N.alias.forEach(_))}else{const N=l.indexOf(I);N>-1&&(l.splice(N,1),I.record.name&&h.delete(I.record.name),I.children.forEach(_),I.alias.forEach(_))}}function E(){return l}function A(I){let N=0;for(;N<l.length&&bB(I,l[N])>=0&&(I.record.path!==l[N].record.path||!fD(I,l[N]));)N++;l.splice(N,0,I),I.record.name&&!Xx(I)&&h.set(I.record.name,I)}function T(I,N){let D,z={},Z,ae;if("name"in I&&I.name){if(D=h.get(I.name),!D)throw _h(1,{location:I});ae=D.record.name,z=dn(Jx(N.params,D.keys.filter(q=>!q.optional).map(q=>q.name)),I.params&&Jx(I.params,D.keys.map(q=>q.name))),Z=D.stringify(z)}else if("path"in I)Z=I.path,D=l.find(q=>q.re.test(Z)),D&&(z=D.parse(Z),ae=D.record.name);else{if(D=N.name?h.get(N.name):l.find(q=>q.re.test(N.path)),!D)throw _h(1,{location:I,currentLocation:N});ae=D.record.name,z=dn({},N.params,I.params),Z=D.stringify(z)}const we=[];let ee=D;for(;ee;)we.unshift(ee.record),ee=ee.parent;return{name:ae,path:Z,params:z,matched:we,meta:xB(we)}}return i.forEach(I=>k(I)),{addRoute:k,resolve:T,removeRoute:_,getRoutes:E,getRecordMatcher:p}}function Jx(i,a){const l={};for(const h of a)h in i&&(l[h]=i[h]);return l}function CB(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:yB(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function yB(i){const a={},l=i.props||!1;if("component"in i)a.default=l;else for(const h in i.components)a[h]=typeof l=="boolean"?l:l[h];return a}function Xx(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function xB(i){return i.reduce((a,l)=>dn(a,l.meta),{})}function eE(i,a){const l={};for(const h in i)l[h]=h in a?a[h]:i[h];return l}function fD(i,a){return a.children.some(l=>l===i||fD(i,l))}const gD=/#/g,EB=/&/g,DB=/\//g,SB=/=/g,TB=/\?/g,pD=/\+/g,MB=/%5B/g,IB=/%5D/g,mD=/%5E/g,PB=/%60/g,bD=/%7B/g,NB=/%7C/g,kD=/%7D/g,OB=/%20/g;function jA(i){return encodeURI(""+i).replace(NB,"|").replace(MB,"[").replace(IB,"]")}function BB(i){return jA(i).replace(bD,"{").replace(kD,"}").replace(mD,"^")}function Qv(i){return jA(i).replace(pD,"%2B").replace(OB,"+").replace(gD,"%23").replace(EB,"%26").replace(PB,"`").replace(bD,"{").replace(kD,"}").replace(mD,"^")}function LB(i){return Qv(i).replace(SB,"%3D")}function RB(i){return jA(i).replace(gD,"%23").replace(TB,"%3F")}function zB(i){return i==null?"":RB(i).replace(DB,"%2F")}function Ok(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function FB(i){const a={};if(i===""||i==="?")return a;const h=(i[0]==="?"?i.slice(1):i).split("&");for(let p=0;p<h.length;++p){const k=h[p].replace(pD," "),_=k.indexOf("="),E=Ok(_<0?k:k.slice(0,_)),A=_<0?null:Ok(k.slice(_+1));if(E in a){let T=a[E];Vr(T)||(T=a[E]=[T]),T.push(A)}else a[E]=A}return a}function tE(i){let a="";for(let l in i){const h=i[l];if(l=LB(l),h==null){h!==void 0&&(a+=(a.length?"&":"")+l);continue}(Vr(h)?h.map(k=>k&&Qv(k)):[h&&Qv(h)]).forEach(k=>{k!==void 0&&(a+=(a.length?"&":"")+l,k!=null&&(a+="="+k))})}return a}function jB(i){const a={};for(const l in i){const h=i[l];h!==void 0&&(a[l]=Vr(h)?h.map(p=>p==null?null:""+p):h==null?h:""+h)}return a}const VB=Symbol(""),nE=Symbol(""),VA=Symbol(""),wD=Symbol(""),Zv=Symbol("");function Ig(){let i=[];function a(h){return i.push(h),()=>{const p=i.indexOf(h);p>-1&&i.splice(p,1)}}function l(){i=[]}return{add:a,list:()=>i,reset:l}}function _c(i,a,l,h,p){const k=h&&(h.enterCallbacks[p]=h.enterCallbacks[p]||[]);return()=>new Promise((_,E)=>{const A=N=>{N===!1?E(_h(4,{from:l,to:a})):N instanceof Error?E(N):hB(N)?E(_h(2,{from:a,to:N})):(k&&h.enterCallbacks[p]===k&&typeof N=="function"&&k.push(N),_())},T=i.call(h&&h.instances[p],a,l,A);let I=Promise.resolve(T);i.length<3&&(I=I.then(A)),I.catch(N=>E(N))})}function _v(i,a,l,h){const p=[];for(const k of i)for(const _ in k.components){let E=k.components[_];if(!(a!=="beforeRouteEnter"&&!k.instances[_]))if(UB(E)){const T=(E.__vccOpts||E)[a];T&&p.push(_c(T,l,h,k,_))}else{let A=E();p.push(()=>A.then(T=>{if(!T)return Promise.reject(new Error(`Couldn't resolve component "${_}" at "${k.path}"`));const I=GO(T)?T.default:T;k.components[_]=I;const D=(I.__vccOpts||I)[a];return D&&_c(D,l,h,k,_)()}))}}return p}function UB(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function iE(i){const a=Cs(VA),l=Cs(wD),h=Fo(()=>a.resolve(id(i.to))),p=Fo(()=>{const{matched:A}=h.value,{length:T}=A,I=A[T-1],N=l.matched;if(!I||!N.length)return-1;const D=N.findIndex(wh.bind(null,I));if(D>-1)return D;const z=oE(A[T-2]);return T>1&&oE(I)===z&&N[N.length-1].path!==z?N.findIndex(wh.bind(null,A[T-2])):D}),k=Fo(()=>p.value>-1&&$B(l.params,h.value.params)),_=Fo(()=>p.value>-1&&p.value===l.matched.length-1&&lD(l.params,h.value.params));function E(A={}){return YB(A)?a[id(i.replace)?"replace":"push"](id(i.to)).catch(Yg):Promise.resolve()}return{route:h,href:Fo(()=>h.value.href),isActive:k,isExactActive:_,navigate:E}}const HB=mp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:iE,setup(i,{slots:a}){const l=xh(iE(i)),{options:h}=Cs(VA),p=Fo(()=>({[rE(i.activeClass,h.linkActiveClass,"router-link-active")]:l.isActive,[rE(i.exactActiveClass,h.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const k=a.default&&a.default(l);return i.custom?k:lw("a",{"aria-current":l.isExactActive?i.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:p.value},k)}}}),WB=HB;function YB(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const a=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return i.preventDefault&&i.preventDefault(),!0}}function $B(i,a){for(const l in a){const h=a[l],p=i[l];if(typeof h=="string"){if(h!==p)return!1}else if(!Vr(p)||p.length!==h.length||h.some((k,_)=>k!==p[_]))return!1}return!0}function oE(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const rE=(i,a,l)=>i!=null?i:a!=null?a:l,qB=mp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:a,slots:l}){const h=Cs(Zv),p=Fo(()=>i.route||h.value),k=Cs(nE,0),_=Fo(()=>{let T=id(k);const{matched:I}=p.value;let N;for(;(N=I[T])&&!N.components;)T++;return T}),E=Fo(()=>p.value.matched[_.value]);jg(nE,Fo(()=>_.value+1)),jg(VB,E),jg(Zv,p);const A=Fg();return uh(()=>[A.value,E.value,i.name],([T,I,N],[D,z,Z])=>{I&&(I.instances[N]=T,z&&z!==I&&T&&T===D&&(I.leaveGuards.size||(I.leaveGuards=z.leaveGuards),I.updateGuards.size||(I.updateGuards=z.updateGuards))),T&&I&&(!z||!wh(I,z)||!D)&&(I.enterCallbacks[N]||[]).forEach(ae=>ae(T))},{flush:"post"}),()=>{const T=p.value,I=i.name,N=E.value,D=N&&N.components[I];if(!D)return sE(l.default,{Component:D,route:T});const z=N.props[I],Z=z?z===!0?T.params:typeof z=="function"?z(T):z:null,we=lw(D,dn({},Z,a,{onVnodeUnmounted:ee=>{ee.component.isUnmounted&&(N.instances[I]=null)},ref:A}));return sE(l.default,{Component:we,route:T})||we}}});function sE(i,a){if(!i)return null;const l=i(a);return l.length===1?l[0]:l}const GB=qB;function KB(i){const a=AB(i.routes,i),l=i.parseQuery||FB,h=i.stringifyQuery||tE,p=i.history,k=Ig(),_=Ig(),E=Ig(),A=KE(mc);let T=mc;ih&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const I=kv.bind(null,Q=>""+Q),N=kv.bind(null,zB),D=kv.bind(null,Ok);function z(Q,ve){let De,ne;return uD(Q)?(De=a.getRecordMatcher(Q),ne=ve):ne=Q,a.addRoute(ne,De)}function Z(Q){const ve=a.getRecordMatcher(Q);ve&&a.removeRoute(ve)}function ae(){return a.getRoutes().map(Q=>Q.record)}function we(Q){return!!a.getRecordMatcher(Q)}function ee(Q,ve){if(ve=dn({},ve||A.value),typeof Q=="string"){const V=wv(l,Q,ve.path),G=a.resolve({path:V.path},ve),re=p.createHref(V.fullPath);return dn(V,G,{params:D(G.params),hash:Ok(V.hash),redirectedFrom:void 0,href:re})}let De;if("path"in Q)De=dn({},Q,{path:wv(l,Q.path,ve.path).path});else{const V=dn({},Q.params);for(const G in V)V[G]==null&&delete V[G];De=dn({},Q,{params:N(Q.params)}),ve.params=N(ve.params)}const ne=a.resolve(De,ve),ot=Q.hash||"";ne.params=I(D(ne.params));const $e=ZO(h,dn({},Q,{hash:BB(ot),path:ne.path})),nt=p.createHref($e);return dn({fullPath:$e,hash:ot,query:h===tE?jB(Q.query):Q.query||{}},ne,{redirectedFrom:void 0,href:nt})}function q(Q){return typeof Q=="string"?wv(l,Q,A.value.path):dn({},Q)}function ie(Q,ve){if(T!==Q)return _h(8,{from:ve,to:Q})}function fe(Q){return de(Q)}function _e(Q){return fe(dn(q(Q),{replace:!0}))}function Ie(Q){const ve=Q.matched[Q.matched.length-1];if(ve&&ve.redirect){const{redirect:De}=ve;let ne=typeof De=="function"?De(Q):De;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=q(ne):{path:ne},ne.params={}),dn({query:Q.query,hash:Q.hash,params:"path"in ne?{}:Q.params},ne)}}function de(Q,ve){const De=T=ee(Q),ne=A.value,ot=Q.state,$e=Q.force,nt=Q.replace===!0,V=Ie(De);if(V)return de(dn(q(V),{state:typeof V=="object"?dn({},ot,V.state):ot,force:$e,replace:nt}),ve||De);const G=De;G.redirectedFrom=ve;let re;return!$e&&JO(h,ne,De)&&(re=_h(16,{to:G,from:ne}),jn(ne,ne,!0,!1)),(re?Promise.resolve(re):ye(G,ne)).catch(ue=>da(ue)?da(ue,2)?ue:An(ue):He(ue,G,ne)).then(ue=>{if(ue){if(da(ue,2))return de(dn({replace:nt},q(ue.to),{state:typeof ue.to=="object"?dn({},ot,ue.to.state):ot,force:$e}),ve||G)}else ue=Le(G,ne,!0,nt,ot);return Pe(G,ne,ue),ue})}function le(Q,ve){const De=ie(Q,ve);return De?Promise.reject(De):Promise.resolve()}function ye(Q,ve){let De;const[ne,ot,$e]=QB(Q,ve);De=_v(ne.reverse(),"beforeRouteLeave",Q,ve);for(const V of ne)V.leaveGuards.forEach(G=>{De.push(_c(G,Q,ve))});const nt=le.bind(null,Q,ve);return De.push(nt),eh(De).then(()=>{De=[];for(const V of k.list())De.push(_c(V,Q,ve));return De.push(nt),eh(De)}).then(()=>{De=_v(ot,"beforeRouteUpdate",Q,ve);for(const V of ot)V.updateGuards.forEach(G=>{De.push(_c(G,Q,ve))});return De.push(nt),eh(De)}).then(()=>{De=[];for(const V of Q.matched)if(V.beforeEnter&&!ve.matched.includes(V))if(Vr(V.beforeEnter))for(const G of V.beforeEnter)De.push(_c(G,Q,ve));else De.push(_c(V.beforeEnter,Q,ve));return De.push(nt),eh(De)}).then(()=>(Q.matched.forEach(V=>V.enterCallbacks={}),De=_v($e,"beforeRouteEnter",Q,ve),De.push(nt),eh(De))).then(()=>{De=[];for(const V of _.list())De.push(_c(V,Q,ve));return De.push(nt),eh(De)}).catch(V=>da(V,8)?V:Promise.reject(V))}function Pe(Q,ve,De){for(const ne of E.list())ne(Q,ve,De)}function Le(Q,ve,De,ne,ot){const $e=ie(Q,ve);if($e)return $e;const nt=ve===mc,V=ih?history.state:{};De&&(ne||nt?p.replace(Q.fullPath,dn({scroll:nt&&V&&V.scroll},ot)):p.push(Q.fullPath,ot)),A.value=Q,jn(Q,ve,De,nt),An()}let $;function Ue(){$||($=p.listen((Q,ve,De)=>{if(!Vn.listening)return;const ne=ee(Q),ot=Ie(ne);if(ot){de(dn(ot,{replace:!0}),ne).catch(Yg);return}T=ne;const $e=A.value;ih&&sB(qx($e.fullPath,De.delta),uw()),ye(ne,$e).catch(nt=>da(nt,12)?nt:da(nt,2)?(de(nt.to,ne).then(V=>{da(V,20)&&!De.delta&&De.type===ip.pop&&p.go(-1,!1)}).catch(Yg),Promise.reject()):(De.delta&&p.go(-De.delta,!1),He(nt,ne,$e))).then(nt=>{nt=nt||Le(ne,$e,!1),nt&&(De.delta&&!da(nt,8)?p.go(-De.delta,!1):De.type===ip.pop&&da(nt,20)&&p.go(-1,!1)),Pe(ne,$e,nt)}).catch(Yg)}))}let Me=Ig(),Je=Ig(),Xe;function He(Q,ve,De){An(Q);const ne=Je.list();return ne.length?ne.forEach(ot=>ot(Q,ve,De)):console.error(Q),Promise.reject(Q)}function ut(){return Xe&&A.value!==mc?Promise.resolve():new Promise((Q,ve)=>{Me.add([Q,ve])})}function An(Q){return Xe||(Xe=!Q,Ue(),Me.list().forEach(([ve,De])=>Q?De(Q):ve()),Me.reset()),Q}function jn(Q,ve,De,ne){const{scrollBehavior:ot}=i;if(!ih||!ot)return Promise.resolve();const $e=!De&&aB(qx(Q.fullPath,0))||(ne||!De)&&history.state&&history.state.scroll||null;return Jk().then(()=>ot(Q,ve,$e)).then(nt=>nt&&rB(nt)).catch(nt=>He(nt,Q,ve))}const zt=Q=>p.go(Q);let kt;const ni=new Set,Vn={currentRoute:A,listening:!0,addRoute:z,removeRoute:Z,hasRoute:we,getRoutes:ae,resolve:ee,options:i,push:fe,replace:_e,go:zt,back:()=>zt(-1),forward:()=>zt(1),beforeEach:k.add,beforeResolve:_.add,afterEach:E.add,onError:Je.add,isReady:ut,install(Q){const ve=this;Q.component("RouterLink",WB),Q.component("RouterView",GB),Q.config.globalProperties.$router=ve,Object.defineProperty(Q.config.globalProperties,"$route",{enumerable:!0,get:()=>id(A)}),ih&&!kt&&A.value===mc&&(kt=!0,fe(p.location).catch(ot=>{}));const De={};for(const ot in mc)De[ot]=Fo(()=>A.value[ot]);Q.provide(VA,ve),Q.provide(wD,xh(De)),Q.provide(Zv,A);const ne=Q.unmount;ni.add(Q),Q.unmount=function(){ni.delete(Q),ni.size<1&&(T=mc,$&&$(),$=null,A.value=mc,kt=!1,Xe=!1),ne()}}};return Vn}function eh(i){return i.reduce((a,l)=>a.then(()=>l()),Promise.resolve())}function QB(i,a){const l=[],h=[],p=[],k=Math.max(a.matched.length,i.matched.length);for(let _=0;_<k;_++){const E=a.matched[_];E&&(i.matched.find(T=>wh(T,E))?h.push(E):l.push(E));const A=i.matched[_];A&&(a.matched.find(T=>wh(T,A))||p.push(A))}return[l,h,p]}const fd=(i,a)=>{const l=i.__vccOpts||i;for(const[h,p]of a)l[h]=p;return l},ZB={},JB={class:"row mt-4"},XB=Eh('<div class="col-12 mb-4"><div class="card bg-yellow-100 border-0 shadow"><div class="card-header d-sm-flex flex-row align-items-center flex-0"><div class="d-block mb-3 mb-sm-0"><div class="fs-5 fw-normal mb-2">\u041F\u0440\u043E\u0434\u0430\u0436\u0438</div><h2 class="fs-3 fw-extrabold">186 321 \u0440\u0443\u0431.</h2></div><div class="d-flex ms-auto"><a href="#" class="btn btn-secondary text-dark btn-sm me-2">\u0414\u0435\u043D\u044C</a><a href="#" class="btn btn-dark btn-sm">\u041D\u0435\u0434\u0435\u043B\u044F</a><a href="#" class="btn btn-dark btn-sm">\u041C\u0435\u0441\u044F\u0446</a></div></div><div class="card-body p-2"><div class="ct-chart-sales-value ct-double-octave ct-series-g"></div></div></div></div><div class="col-12 col-sm-6 col-xl-4 mb-4"><div class="card border-0 shadow"><div class="card-body"><div class="row d-block d-xl-flex align-items-center"><div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center"><div class="icon-shape icon-shape-primary rounded me-4 me-sm-0"><svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg></div><div class="d-sm-none"><h2 class="h5">Customers</h2><h3 class="fw-extrabold mb-1">345,678</h3></div></div><div class="col-12 col-xl-7 px-xl-0"><div class="d-none d-sm-block"><h2 class="h6 text-gray-400 mb-0">Customers</h2><h3 class="fw-extrabold mb-2">345k</h3></div><small class="d-flex align-items-center text-gray-500"> Feb 1 - Apr 1, <svg class="icon icon-xxs text-gray-500 ms-2 me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg> USA </small><div class="small d-flex mt-1"><div>Since last month <svg class="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg><span class="text-success fw-bolder">22%</span></div></div></div></div></div></div></div><div class="col-12 col-sm-6 col-xl-4 mb-4"><div class="card border-0 shadow"><div class="card-body"><div class="row d-block d-xl-flex align-items-center"><div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center"><div class="icon-shape icon-shape-secondary rounded me-4 me-sm-0"><svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg></div><div class="d-sm-none"><h2 class="fw-extrabold h5">Revenue</h2><h3 class="mb-1">$43,594</h3></div></div><div class="col-12 col-xl-7 px-xl-0"><div class="d-none d-sm-block"><h2 class="h6 text-gray-400 mb-0">Revenue</h2><h3 class="fw-extrabold mb-2">$43,594</h3></div><small class="d-flex align-items-center text-gray-500"> Feb 1 - Apr 1, <svg class="icon icon-xxs text-gray-500 ms-2 me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg> GER </small><div class="small d-flex mt-1"><div>Since last month <svg class="icon icon-xs text-danger" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="text-danger fw-bolder">2%</span></div></div></div></div></div></div></div><div class="col-12 col-sm-6 col-xl-4 mb-4"><div class="card border-0 shadow"><div class="card-body"><div class="row d-block d-xl-flex align-items-center"><div class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center"><div class="icon-shape icon-shape-tertiary rounded me-4 me-sm-0"><svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></div><div class="d-sm-none"><h2 class="fw-extrabold h5"> Bounce Rate</h2><h3 class="mb-1">50.88%</h3></div></div><div class="col-12 col-xl-7 px-xl-0"><div class="d-none d-sm-block"><h2 class="h6 text-gray-400 mb-0"> Bounce Rate</h2><h3 class="fw-extrabold mb-2">50.88%</h3></div><small class="text-gray-500"> Feb 1 - Apr 1 </small><div class="small d-flex mt-1"><div>Since last month <svg class="icon icon-xs text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg><span class="text-success fw-bolder">4%</span></div></div></div></div></div></div></div>',4),e4=[XB];function t4(i,a){return Dt(),an("div",JB,e4)}const n4=fd(ZB,[["render",t4]]),i4={data(){return{shops:[],views:{loading:!0}}},created(){this.loadShops()},methods:{loadShops(){axios.get("/api/shops").then(i=>{this.shops=i.data,this.views.loading=!1})}}},o4={class:"d-flex justify-content-between align-items-center w-100 flex-wrap py-4"},r4=Y("h1",{class:"h4 m-0"},"\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B",-1),s4={class:"card border-0 shadow mb-4"},a4={class:"card-body"},c4={key:1,class:"table-responsive"},l4={class:"table table-centered table-nowrap mb-0 rounded"},d4=Y("thead",{class:"thead-light"},[Y("tr",null,[Y("th",{class:"border-0 rounded-start"},"#"),Y("th",{class:"border-0"},"\u0414\u043E\u043C\u0435\u043D"),Y("th",{class:"border-0"},"\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435"),Y("th",{class:"border-0"},"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0430\u0439\u0441\u044B"),Y("th",{class:"border-0 rounded-end"})])],-1),u4={class:"align-middle"},h4={class:"align-middle"},f4={class:"align-middle"},g4={class:"align-middle"},p4={class:"align-middle text-end"};function m4(i,a,l,h,p,k){const _=ys("router-link"),E=ys("loader");return Dt(),an(bn,null,[Y("div",o4,[r4,Mt(_,{to:{name:"ShopMaster"},class:"btn btn-secondary"},{default:lr(()=>[bo("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0430\u0433\u0430\u0437\u0438\u043D")]),_:1})]),Y("div",s4,[Y("div",a4,[p.views.loading?(Dt(),Ic(E,{key:0})):jr("",!0),p.views.loading?jr("",!0):(Dt(),an("div",c4,[Y("table",l4,[d4,Y("tbody",null,[(Dt(!0),an(bn,null,wp(p.shops,(A,T)=>(Dt(),an("tr",null,[Y("td",u4,Ji(T+1),1),Y("td",h4,[Y("strong",null,Ji(A.domain),1)]),Y("td",f4,Ji(A.description),1),Y("td",g4,[A.pricelist?(Dt(),an(bn,{key:0},[bo(Ji(A.pricelist.name),1)],64)):jr("",!0)]),Y("td",p4,[Mt(_,{to:{name:"ShopMaster",params:{uid:A.uid}},class:"btn btn-outline-info"},{default:lr(()=>[bo("\u0414\u0435\u0442\u0430\u043B\u0438")]),_:2},1032,["to"])])]))),256))])])]))])])],64)}const b4=fd(i4,[["render",m4]]);var _D={exports:{}};const k4=MI(qO);/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(i,a){(function(l,h){i.exports=h(k4)})(window,function(l){return function(h){var p={};function k(_){if(p[_])return p[_].exports;var E=p[_]={i:_,l:!1,exports:{}};return h[_].call(E.exports,E,E.exports,k),E.l=!0,E.exports}return k.m=h,k.c=p,k.d=function(_,E,A){k.o(_,E)||Object.defineProperty(_,E,{enumerable:!0,get:A})},k.r=function(_){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},k.t=function(_,E){if(1&E&&(_=k(_)),8&E||4&E&&typeof _=="object"&&_&&_.__esModule)return _;var A=Object.create(null);if(k.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:_}),2&E&&typeof _!="string")for(var T in _)k.d(A,T,function(I){return _[I]}.bind(null,T));return A},k.n=function(_){var E=_&&_.__esModule?function(){return _.default}:function(){return _};return k.d(E,"a",E),E},k.o=function(_,E){return Object.prototype.hasOwnProperty.call(_,E)},k.p="",k(k.s=3)}([function(h,p){h.exports=l},function(h,p,k){(function(_){var E=typeof _=="object"&&_&&_.Object===Object&&_;p.a=E}).call(this,k(2))},function(h,p){var k;k=function(){return this}();try{k=k||new Function("return this")()}catch{typeof window=="object"&&(k=window)}h.exports=k},function(h,p,k){k.r(p);var _=k(0),E=k.n(_),A=function(Q){var ve=typeof Q;return Q!=null&&(ve=="object"||ve=="function")},T=k(1),I=typeof self=="object"&&self&&self.Object===Object&&self,N=T.a||I||Function("return this")(),D=function(){return N.Date.now()},z=/\s/,Z=function(Q){for(var ve=Q.length;ve--&&z.test(Q.charAt(ve)););return ve},ae=/^\s+/,we=function(Q){return Q&&Q.slice(0,Z(Q)+1).replace(ae,"")},ee=N.Symbol,q=Object.prototype,ie=q.hasOwnProperty,fe=q.toString,_e=ee?ee.toStringTag:void 0,Ie=function(Q){var ve=ie.call(Q,_e),De=Q[_e];try{Q[_e]=void 0;var ne=!0}catch{}var ot=fe.call(Q);return ne&&(ve?Q[_e]=De:delete Q[_e]),ot},de=Object.prototype.toString,le=function(Q){return de.call(Q)},ye=ee?ee.toStringTag:void 0,Pe=function(Q){return Q==null?Q===void 0?"[object Undefined]":"[object Null]":ye&&ye in Object(Q)?Ie(Q):le(Q)},Le=function(Q){return Q!=null&&typeof Q=="object"},$=function(Q){return typeof Q=="symbol"||Le(Q)&&Pe(Q)=="[object Symbol]"},Ue=/^[-+]0x[0-9a-f]+$/i,Me=/^0b[01]+$/i,Je=/^0o[0-7]+$/i,Xe=parseInt,He=function(Q){if(typeof Q=="number")return Q;if($(Q))return NaN;if(A(Q)){var ve=typeof Q.valueOf=="function"?Q.valueOf():Q;Q=A(ve)?ve+"":ve}if(typeof Q!="string")return Q===0?Q:+Q;Q=we(Q);var De=Me.test(Q);return De||Je.test(Q)?Xe(Q.slice(2),De?2:8):Ue.test(Q)?NaN:+Q},ut=Math.max,An=Math.min,jn=function(Q,ve,De){var ne,ot,$e,nt,V,G,re=0,ue=!1,ge=!1,Se=!0;if(typeof Q!="function")throw new TypeError("Expected a function");function Be(Fe){var qe=ne,ze=ot;return ne=ot=void 0,re=Fe,nt=Q.apply(ze,qe)}function xe(Fe){return re=Fe,V=setTimeout(ke,ve),ue?Be(Fe):nt}function Te(Fe){var qe=Fe-G;return G===void 0||qe>=ve||qe<0||ge&&Fe-re>=$e}function ke(){var Fe=D();if(Te(Fe))return Ve(Fe);V=setTimeout(ke,function(qe){var ze=ve-(qe-G);return ge?An(ze,$e-(qe-re)):ze}(Fe))}function Ve(Fe){return V=void 0,Se&&ne?Be(Fe):(ne=ot=void 0,nt)}function We(){var Fe=D(),qe=Te(Fe);if(ne=arguments,ot=this,G=Fe,qe){if(V===void 0)return xe(G);if(ge)return clearTimeout(V),V=setTimeout(ke,ve),Be(G)}return V===void 0&&(V=setTimeout(ke,ve)),nt}return ve=He(ve)||0,A(De)&&(ue=!!De.leading,$e=(ge="maxWait"in De)?ut(He(De.maxWait)||0,ve):$e,Se="trailing"in De?!!De.trailing:Se),We.cancel=function(){V!==void 0&&clearTimeout(V),re=0,ne=G=ot=V=void 0},We.flush=function(){return V===void 0?nt:Ve(D())},We},zt={name:"ckeditor",created(){const{CKEDITOR_VERSION:Q}=window;if(Q){const[ve]=Q.split(".").map(Number);ve<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(_.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const Q=Object.assign({},this.config);this.modelValue&&(Q.initialData=this.modelValue),this.editor.create(this.$el,Q).then(ve=>{this.instance=Object(_.markRaw)(ve),this.setUpEditorEvents(),this.modelValue!==Q.initialData&&ve.setData(this.modelValue),this.disabled&&ve.enableReadOnlyMode("Integration Sample"),this.$emit("ready",ve)}).catch(ve=>{console.error(ve)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(Q){this.instance&&Q!==this.lastEditorData&&this.instance.setData(Q)},disabled(Q){Q?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const Q=this.instance,ve=jn(De=>{const ne=this.lastEditorData=Q.getData();this.$emit("update:modelValue",ne,De,Q),this.$emit("input",ne,De,Q)},300,{leading:!0});Q.model.document.on("change:data",ve),Q.editing.view.document.on("focus",De=>{this.$emit("focus",De,Q)}),Q.editing.view.document.on("blur",De=>{this.$emit("blur",De,Q)})}}};const kt=E.a?E.a.version:_.version,[ni]=kt.split(".").map(Q=>parseInt(Q,10));if(ni<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Vn={install(Q){Q.component("ckeditor",zt)},component:zt};p.default=Vn}]).default})})(_D);const w4=hE(_D.exports);var Jv={exports:{}};(function(i,a){(function(l){const h=l.en=l.en||{};h.dictionary=Object.assign(h.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(l,h){i.exports=h()}(self,()=>(()=>{var l={3062:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const z=D},903:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const z=D},3143:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const z=D},4717:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const z=D},9315:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const z=D},8733:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const z=D},3508:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const z=D},2640:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const z=D},5083:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const z=D},4036:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const z=D},3773:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const z=D},3689:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const z=D},1905:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const z=D},9773:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const z=D},2347:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const z=D},7754:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const z=D},4652:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const z=D},7442:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const z=D},9292:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const z=D},1613:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const z=D},6306:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const z=D},3881:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const z=D},6945:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const z=D},4906:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const z=D},5332:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const z=D},6781:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const z=D},5485:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const z=D},3949:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const z=D},7686:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const z=D},7339:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const z=D},9688:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const z=D},8847:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const z=D},6574:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const z=D},4879:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const z=D},3662:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const z=D},2577:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const z=D},1046:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const z=D},8793:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const z=D},4650:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const z=D},7676:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const z=D},5868:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const z=D},6764:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const z=D},9695:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const z=D},5542:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const z=D},3332:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const z=D},4793:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const z=D},3488:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const z=D},8506:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const z=D},4921:(_,E,A)=>{A.d(E,{Z:()=>z});var T=A(1799),I=A.n(T),N=A(2609),D=A.n(N)()(I());D.push([_.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const z=D},2609:_=>{_.exports=function(E){var A=[];return A.toString=function(){return this.map(function(T){var I=E(T);return T[2]?"@media ".concat(T[2]," {").concat(I,"}"):I}).join("")},A.i=function(T,I,N){typeof T=="string"&&(T=[[null,T,""]]);var D={};if(N)for(var z=0;z<this.length;z++){var Z=this[z][0];Z!=null&&(D[Z]=!0)}for(var ae=0;ae<T.length;ae++){var we=[].concat(T[ae]);N&&D[we[0]]||(I&&(we[2]?we[2]="".concat(I," and ").concat(we[2]):we[2]=I),A.push(we))}},A}},1799:_=>{function E(T,I){return function(N){if(Array.isArray(N))return N}(T)||function(N,D){var z=N&&(typeof Symbol<"u"&&N[Symbol.iterator]||N["@@iterator"]);if(z!=null){var Z,ae,we=[],ee=!0,q=!1;try{for(z=z.call(N);!(ee=(Z=z.next()).done)&&(we.push(Z.value),!D||we.length!==D);ee=!0);}catch(ie){q=!0,ae=ie}finally{try{ee||z.return==null||z.return()}finally{if(q)throw ae}}return we}}(T,I)||function(N,D){if(!!N){if(typeof N=="string")return A(N,D);var z=Object.prototype.toString.call(N).slice(8,-1);if(z==="Object"&&N.constructor&&(z=N.constructor.name),z==="Map"||z==="Set")return Array.from(N);if(z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z))return A(N,D)}}(T,I)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function A(T,I){(I==null||I>T.length)&&(I=T.length);for(var N=0,D=new Array(I);N<I;N++)D[N]=T[N];return D}_.exports=function(T){var I=E(T,4),N=I[1],D=I[3];if(!D)return N;if(typeof btoa=="function"){var z=btoa(unescape(encodeURIComponent(JSON.stringify(D)))),Z="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(z),ae="/*# ".concat(Z," */"),we=D.sources.map(function(ee){return"/*# sourceURL=".concat(D.sourceRoot||"").concat(ee," */")});return[N].concat(we).concat([ae]).join(`
`)}return[N].join(`
`)}},6062:(_,E,A)=>{var T,I=function(){return T===void 0&&(T=Boolean(window&&document&&document.all&&!window.atob)),T},N=function(){var de={};return function(le){if(de[le]===void 0){var ye=document.querySelector(le);if(window.HTMLIFrameElement&&ye instanceof window.HTMLIFrameElement)try{ye=ye.contentDocument.head}catch{ye=null}de[le]=ye}return de[le]}}(),D=[];function z(de){for(var le=-1,ye=0;ye<D.length;ye++)if(D[ye].identifier===de){le=ye;break}return le}function Z(de,le){for(var ye={},Pe=[],Le=0;Le<de.length;Le++){var $=de[Le],Ue=le.base?$[0]+le.base:$[0],Me=ye[Ue]||0,Je="".concat(Ue," ").concat(Me);ye[Ue]=Me+1;var Xe=z(Je),He={css:$[1],media:$[2],sourceMap:$[3]};Xe!==-1?(D[Xe].references++,D[Xe].updater(He)):D.push({identifier:Je,updater:Ie(He,le),references:1}),Pe.push(Je)}return Pe}function ae(de){var le=document.createElement("style"),ye=de.attributes||{};if(ye.nonce===void 0){var Pe=A.nc;Pe&&(ye.nonce=Pe)}if(Object.keys(ye).forEach(function($){le.setAttribute($,ye[$])}),typeof de.insert=="function")de.insert(le);else{var Le=N(de.insert||"head");if(!Le)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Le.appendChild(le)}return le}var we,ee=(we=[],function(de,le){return we[de]=le,we.filter(Boolean).join(`
`)});function q(de,le,ye,Pe){var Le=ye?"":Pe.media?"@media ".concat(Pe.media," {").concat(Pe.css,"}"):Pe.css;if(de.styleSheet)de.styleSheet.cssText=ee(le,Le);else{var $=document.createTextNode(Le),Ue=de.childNodes;Ue[le]&&de.removeChild(Ue[le]),Ue.length?de.insertBefore($,Ue[le]):de.appendChild($)}}function ie(de,le,ye){var Pe=ye.css,Le=ye.media,$=ye.sourceMap;if(Le?de.setAttribute("media",Le):de.removeAttribute("media"),$&&typeof btoa<"u"&&(Pe+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify($))))," */")),de.styleSheet)de.styleSheet.cssText=Pe;else{for(;de.firstChild;)de.removeChild(de.firstChild);de.appendChild(document.createTextNode(Pe))}}var fe=null,_e=0;function Ie(de,le){var ye,Pe,Le;if(le.singleton){var $=_e++;ye=fe||(fe=ae(le)),Pe=q.bind(null,ye,$,!1),Le=q.bind(null,ye,$,!0)}else ye=ae(le),Pe=ie.bind(null,ye,le),Le=function(){(function(Ue){if(Ue.parentNode===null)return!1;Ue.parentNode.removeChild(Ue)})(ye)};return Pe(de),function(Ue){if(Ue){if(Ue.css===de.css&&Ue.media===de.media&&Ue.sourceMap===de.sourceMap)return;Pe(de=Ue)}else Le()}}_.exports=function(de,le){(le=le||{}).singleton||typeof le.singleton=="boolean"||(le.singleton=I());var ye=Z(de=de||[],le);return function(Pe){if(Pe=Pe||[],Object.prototype.toString.call(Pe)==="[object Array]"){for(var Le=0;Le<ye.length;Le++){var $=z(ye[Le]);D[$].references--}for(var Ue=Z(Pe,le),Me=0;Me<ye.length;Me++){var Je=z(ye[Me]);D[Je].references===0&&(D[Je].updater(),D.splice(Je,1))}ye=Ue}}}}},h={};function p(_){var E=h[_];if(E!==void 0)return E.exports;var A=h[_]={id:_,exports:{}};return l[_](A,A.exports,p),A.exports}p.n=_=>{var E=_&&_.__esModule?()=>_.default:()=>_;return p.d(E,{a:E}),E},p.d=(_,E)=>{for(var A in E)p.o(E,A)&&!p.o(_,A)&&Object.defineProperty(_,A,{enumerable:!0,get:E[A]})},p.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),p.o=(_,E)=>Object.prototype.hasOwnProperty.call(_,E),p.nc=void 0;var k={};return(()=>{p.d(k,{default:()=>av});const _=function(){return function r(){r.called=!0}};class E{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=_(),this.off=_()}}const A=new Array(256).fill("").map((r,e)=>("0"+e.toString(16)).slice(-2));function T(){const r=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+A[r>>0&255]+A[r>>8&255]+A[r>>16&255]+A[r>>24&255]+A[e>>0&255]+A[e>>8&255]+A[e>>16&255]+A[e>>24&255]+A[t>>0&255]+A[t>>8&255]+A[t>>16&255]+A[t>>24&255]+A[n>>0&255]+A[n>>8&255]+A[n>>16&255]+A[n>>24&255]}const I={get(r="normal"){return typeof r!="number"?this[r]||this.normal:r},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function N(r,e){const t=I.get(e.priority);for(let n=0;n<r.length;n++)if(I.get(r[n].priority)<t)return void r.splice(n,0,e);r.push(e)}class D extends Error{constructor(e,t,n){super(function(o,s){const c=new WeakSet,u=(b,v)=>{if(typeof v=="object"&&v!==null){if(c.has(v))return`[object ${v.constructor.name}]`;c.add(v)}return v},g=s?` ${JSON.stringify(s,u)}`:"",m=ae(o);return o+g+m}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new D(e.message,t);throw n.stack=e.stack,n}}function z(r,e){console.warn(...we(r,e))}function Z(r,e){console.error(...we(r,e))}function ae(r){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${r}`}function we(r,e){const t=ae(r);return e?[r,e,t]:[r,t]}const ee="35.3.1",q=typeof window=="object"?window:p.g;if(q.CKEDITOR_VERSION)throw new D("ckeditor-duplicated-modules",null);q.CKEDITOR_VERSION=ee;const ie=Symbol("listeningTo"),fe=Symbol("emitterId"),_e=Symbol("delegations");function Ie(r){return class extends r{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let o=!1;this.listenTo(this,e,(s,...c)=>{o||(o=!0,s.off(),t.call(this,s,...c))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,o={}){let s,c;this[ie]||(this[ie]={});const u=this[ie];ye(e)||le(e);const g=ye(e);(s=u[g])||(s=u[g]={emitter:e,callbacks:{}}),(c=s.callbacks[t])||(c=s.callbacks[t]=[]),c.push(n),function(m,b,v,y,M){b._addEventListener?b._addEventListener(v,y,M):m._addEventListener.call(b,v,y,M)}(this,e,t,n,o)}stopListening(e,t,n){const o=this[ie];let s=e&&ye(e);const c=o&&s?o[s]:void 0,u=c&&t?c.callbacks[t]:void 0;if(!(!o||e&&!c||t&&!u))if(n)Me(this,e,t,n),u.indexOf(n)!==-1&&(u.length===1?delete c.callbacks[t]:Me(this,e,t,n));else if(u){for(;n=u.pop();)Me(this,e,t,n);delete c.callbacks[t]}else if(c){for(t in c.callbacks)this.stopListening(e,t);delete o[s]}else{for(s in o)this.stopListening(o[s].emitter);delete this[ie]}}fire(e,...t){try{const n=e instanceof E?e:new E(this,e),o=n.name;let s=$(this,o);if(n.path.push(this),s){const u=[n,...t];s=Array.from(s);for(let g=0;g<s.length&&(s[g].callback.apply(this,u),n.off.called&&(delete n.off.called,this._removeEventListener(o,s[g].callback)),!n.stop.called);g++);}const c=this[_e];if(c){const u=c.get(o),g=c.get("*");u&&Ue(u,n,t),g&&Ue(g,n,t)}return n.return}catch(n){D.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[_e]||(this[_e]=new Map),e.forEach(o=>{const s=this[_e].get(o);s?s.set(t,n):this[_e].set(o,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[_e])if(e)if(t){const n=this[_e].get(e);n&&n.delete(t)}else this[_e].delete(e);else this[_e].clear()}_addEventListener(e,t,n){(function(c,u){const g=Pe(c);if(g[u])return;let m=u,b=null;const v=[];for(;m!==""&&!g[m];)g[m]={callbacks:[],childEvents:[]},v.push(g[m]),b&&g[m].childEvents.push(b),b=m,m=m.substr(0,m.lastIndexOf(":"));if(m!==""){for(const y of v)y.callbacks=g[m].callbacks.slice();g[m].childEvents.push(b)}})(this,e);const o=Le(this,e),s={callback:t,priority:I.get(n.priority)};for(const c of o)N(c,s)}_removeEventListener(e,t){const n=Le(this,e);for(const o of n)for(let s=0;s<o.length;s++)o[s].callback==t&&(o.splice(s,1),s--)}}}const de=Ie(Object);function le(r,e){r[fe]||(r[fe]=e||T())}function ye(r){return r[fe]}function Pe(r){return r._events||Object.defineProperty(r,"_events",{value:{}}),r._events}function Le(r,e){const t=Pe(r)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const s=Le(r,t.childEvents[o]);n=n.concat(s)}return n}function $(r,e){let t;return r._events&&(t=r._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?$(r,e.substr(0,e.lastIndexOf(":"))):null}function Ue(r,e,t){for(let[n,o]of r){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const s=new E(e.source,o);s.path=[...e.path],n.fire(s,...t)}}function Me(r,e,t,n){e._removeEventListener?e._removeEventListener(t,n):r._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{Ie[r]=de.prototype[r]});const Je=function(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")},Xe=Symbol("observableProperties"),He=Symbol("boundObservables"),ut=Symbol("boundProperties"),An=Symbol("decoratedMethods"),jn=Symbol("decoratedOriginal");function zt(r){return class extends r{set(e,t){if(Je(e))return void Object.keys(e).forEach(o=>{this.set(o,e[o])},this);ni(this);const n=this[Xe];if(e in this&&!n.has(e))throw new D("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(o){const s=n.get(e);let c=this.fire(`set:${e}`,e,o,s);c===void 0&&(c=o),s===c&&n.has(e)||(n.set(e,c),this.fire(`change:${e}`,e,c,s))}}),this[e]=t}bind(...e){if(!e.length||!ve(e))throw new D("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new D("observable-bind-duplicate-properties",this);ni(this);const t=this[ut];e.forEach(o=>{if(t.has(o))throw new D("observable-bind-rebind",this)});const n=new Map;return e.forEach(o=>{const s={property:o,to:[]};t.set(o,s),n.set(o,s)}),{to:Vn,toMany:Q,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[Xe])return;const t=this[ut],n=this[He];if(e.length){if(!ve(e))throw new D("observable-unbind-wrong-properties",this);e.forEach(o=>{const s=t.get(o);s&&(s.to.forEach(([c,u])=>{const g=n.get(c),m=g[u];m.delete(s),m.size||delete g[u],Object.keys(g).length||(n.delete(c),this.stopListening(c,"change"))}),t.delete(o))})}else n.forEach((o,s)=>{this.stopListening(s,"change")}),n.clear(),t.clear()}decorate(e){ni(this);const t=this[e];if(!t)throw new D("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,o)=>{n.return=t.apply(this,o)}),this[e]=function(...n){return this.fire(e,n)},this[e][jn]=t,this[An]||(this[An]=[]),this[An].push(e)}stopListening(e,t,n){if(!e&&this[An]){for(const o of this[An])this[o]=this[o][jn];delete this[An]}de.prototype.stopListening.call(this,e,t,n)}}}const kt=zt(de);function ni(r){r[Xe]||(Object.defineProperty(r,Xe,{value:new Map}),Object.defineProperty(r,He,{value:new Map}),Object.defineProperty(r,ut,{value:new Map}))}function Vn(...r){const e=function(...s){if(!s.length)throw new D("observable-bind-to-parse-error",null);const c={to:[]};let u;return typeof s[s.length-1]=="function"&&(c.callback=s.pop()),s.forEach(g=>{if(typeof g=="string")u.properties.push(g);else{if(typeof g!="object")throw new D("observable-bind-to-parse-error",null);u={observable:g,properties:[]},c.to.push(u)}}),c}(...r),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new D("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new D("observable-bind-to-extra-callback",this);var o;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new D("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(s=>{const c=o[He];let u;c.get(s.observable)||o.listenTo(s.observable,"change",(g,m)=>{u=c.get(s.observable)[m],u&&u.forEach(b=>{De(o,b.property)})})}),function(s){let c;s._bindings.forEach((u,g)=>{s._to.forEach(m=>{c=m.properties[u.callback?0:s._bindProperties.indexOf(g)],u.to.push([m.observable,c]),function(b,v,y,M){const B=b[He],L=B.get(y),j=L||{};j[M]||(j[M]=new Set),j[M].add(v),L||B.set(y,j)}(s._observable,u,m.observable,c)})})}(this),this._bindProperties.forEach(s=>{De(this._observable,s)})}function Q(r,e,t){if(this._bindings.size>1)throw new D("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const s=n.map(c=>[c,o]);return Array.prototype.concat.apply([],s)}(r,e),t)}function ve(r){return r.every(e=>typeof e=="string")}function De(r,e){const t=r[ut].get(e);let n;t.callback?n=t.callback.apply(r,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(r,e)?r[e]=n:r.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{zt[r]=kt.prototype[r]});class ne extends kt{constructor(e){super(),this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",ot,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",ot),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function ot(r){r.return=!1,r.stop()}class $e extends kt{constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",nt,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",nt),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function nt(r){r.return=!1,r.stop()}class V extends $e{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){N(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}const G=typeof pa=="object"&&pa&&pa.Object===Object&&pa;var re=typeof self=="object"&&self&&self.Object===Object&&self;const ue=G||re||Function("return this")(),ge=ue.Symbol;var Se=Object.prototype,Be=Se.hasOwnProperty,xe=Se.toString,Te=ge?ge.toStringTag:void 0;const ke=function(r){var e=Be.call(r,Te),t=r[Te];try{r[Te]=void 0;var n=!0}catch{}var o=xe.call(r);return n&&(e?r[Te]=t:delete r[Te]),o};var Ve=Object.prototype.toString;const We=function(r){return Ve.call(r)};var Fe=ge?ge.toStringTag:void 0;const qe=function(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":Fe&&Fe in Object(r)?ke(r):We(r)},ze=function(r,e){return function(t){return r(e(t))}},gt=ze(Object.getPrototypeOf,Object),it=function(r){return r!=null&&typeof r=="object"};var Kt=Function.prototype,Nt=Object.prototype,on=Kt.toString,fr=Nt.hasOwnProperty,Pi=on.call(Object);const Ft=function(r){if(!it(r)||qe(r)!="[object Object]")return!1;var e=gt(r);if(e===null)return!0;var t=fr.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&on.call(t)==Pi},$n=function(){this.__data__=[],this.size=0},Nn=function(r,e){return r===e||r!=r&&e!=e},Xi=function(r,e){for(var t=r.length;t--;)if(Nn(r[t][0],e))return t;return-1};var Nc=Array.prototype.splice;const Th=function(r){var e=this.__data__,t=Xi(e,r);return!(t<0)&&(t==e.length-1?e.pop():Nc.call(e,t,1),--this.size,!0)},pd=function(r){var e=this.__data__,t=Xi(e,r);return t<0?void 0:e[t][1]},md=function(r){return Xi(this.__data__,r)>-1},ht=function(r,e){var t=this.__data__,n=Xi(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this};function Yr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Yr.prototype.clear=$n,Yr.prototype.delete=Th,Yr.prototype.get=pd,Yr.prototype.has=md,Yr.prototype.set=ht;const Ta=Yr,Mh=function(){this.__data__=new Ta,this.size=0},Ih=function(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t},Ho=function(r){return this.__data__.get(r)},Ph=function(r){return this.__data__.has(r)},gr=function(r){if(!Je(r))return!1;var e=qe(r);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Oc=ue["__core-js_shared__"];var Ma=function(){var r=/[^.]+$/.exec(Oc&&Oc.keys&&Oc.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();const Nh=function(r){return!!Ma&&Ma in r};var Ts=Function.prototype.toString;const pr=function(r){if(r!=null){try{return Ts.call(r)}catch{}try{return r+""}catch{}}return""};var Oh=/^\[object .+?Constructor\]$/,Ms=Function.prototype,Bh=Object.prototype,Lh=Ms.toString,Rh=Bh.hasOwnProperty,zh=RegExp("^"+Lh.call(Rh).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Bc=function(r){return!(!Je(r)||Nh(r))&&(gr(r)?zh:Oh).test(pr(r))},bd=function(r,e){return r==null?void 0:r[e]},mr=function(r,e){var t=bd(r,e);return Bc(t)?t:void 0},Is=mr(ue,"Map"),Ps=mr(Object,"create"),wt=function(){this.__data__=Ps?Ps(null):{},this.size=0},Fh=function(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e};var jh=Object.prototype.hasOwnProperty;const Ia=function(r){var e=this.__data__;if(Ps){var t=e[r];return t==="__lodash_hash_undefined__"?void 0:t}return jh.call(e,r)?e[r]:void 0};var Vh=Object.prototype.hasOwnProperty;const Pa=function(r){var e=this.__data__;return Ps?e[r]!==void 0:Vh.call(e,r)},Uh=function(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=Ps&&e===void 0?"__lodash_hash_undefined__":e,this};function Wo(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}Wo.prototype.clear=wt,Wo.prototype.delete=Fh,Wo.prototype.get=Ia,Wo.prototype.has=Pa,Wo.prototype.set=Uh;const $r=Wo,Lc=function(){this.size=0,this.__data__={hash:new $r,map:new(Is||Ta),string:new $r}},ii=function(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null},Ns=function(r,e){var t=r.__data__;return ii(e)?t[typeof e=="string"?"string":"hash"]:t.map},Hh=function(r){var e=Ns(this,r).delete(r);return this.size-=e?1:0,e},Wh=function(r){return Ns(this,r).get(r)},Yh=function(r){return Ns(this,r).has(r)},kd=function(r,e){var t=Ns(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this};function br(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}br.prototype.clear=Lc,br.prototype.delete=Hh,br.prototype.get=Wh,br.prototype.has=Yh,br.prototype.set=kd;const Os=br,wd=function(r,e){var t=this.__data__;if(t instanceof Ta){var n=t.__data__;if(!Is||n.length<199)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new Os(n)}return t.set(r,e),this.size=t.size,this};function vo(r){var e=this.__data__=new Ta(r);this.size=e.size}vo.prototype.clear=Mh,vo.prototype.delete=Ih,vo.prototype.get=Ho,vo.prototype.has=Ph,vo.prototype.set=wd;const Bs=vo,Rc=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r},kr=function(){try{var r=mr(Object,"defineProperty");return r({},"",{}),r}catch{}}(),Na=function(r,e,t){e=="__proto__"&&kr?kr(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t};var $h=Object.prototype.hasOwnProperty;const Oa=function(r,e,t){var n=r[e];$h.call(r,e)&&Nn(n,t)&&(t!==void 0||e in r)||Na(r,e,t)},wr=function(r,e,t,n){var o=!t;t||(t={});for(var s=-1,c=e.length;++s<c;){var u=e[s],g=n?n(t[u],r[u],u,t,r):void 0;g===void 0&&(g=r[u]),o?Na(t,u,g):Oa(t,u,g)}return t},zc=function(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n},_d=function(r){return it(r)&&qe(r)=="[object Arguments]"};var Ba=Object.prototype,Yo=Ba.hasOwnProperty,Fc=Ba.propertyIsEnumerable;const Ao=_d(function(){return arguments}())?_d:function(r){return it(r)&&Yo.call(r,"callee")&&!Fc.call(r,"callee")},qn=Array.isArray,vd=function(){return!1};var Ad=a&&!a.nodeType&&a,jc=Ad&&!0&&i&&!i.nodeType&&i,Vc=jc&&jc.exports===Ad?ue.Buffer:void 0;const qr=(Vc?Vc.isBuffer:void 0)||vd;var Cd=/^(?:0|[1-9]\d*)$/;const Uc=function(r,e){var t=typeof r;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&Cd.test(r))&&r>-1&&r%1==0&&r<e},yd=function(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=9007199254740991};var Ot={};Ot["[object Float32Array]"]=Ot["[object Float64Array]"]=Ot["[object Int8Array]"]=Ot["[object Int16Array]"]=Ot["[object Int32Array]"]=Ot["[object Uint8Array]"]=Ot["[object Uint8ClampedArray]"]=Ot["[object Uint16Array]"]=Ot["[object Uint32Array]"]=!0,Ot["[object Arguments]"]=Ot["[object Array]"]=Ot["[object ArrayBuffer]"]=Ot["[object Boolean]"]=Ot["[object DataView]"]=Ot["[object Date]"]=Ot["[object Error]"]=Ot["[object Function]"]=Ot["[object Map]"]=Ot["[object Number]"]=Ot["[object Object]"]=Ot["[object RegExp]"]=Ot["[object Set]"]=Ot["[object String]"]=Ot["[object WeakMap]"]=!1;const Hc=function(r){return it(r)&&yd(r.length)&&!!Ot[qe(r)]},Wc=function(r){return function(e){return r(e)}};var xd=a&&!a.nodeType&&a,Ls=xd&&!0&&i&&!i.nodeType&&i,Yc=Ls&&Ls.exports===xd&&G.process;const $o=function(){try{var r=Ls&&Ls.require&&Ls.require("util").types;return r||Yc&&Yc.binding&&Yc.binding("util")}catch{}}();var Ed=$o&&$o.isTypedArray;const $c=Ed?Wc(Ed):Hc;var qh=Object.prototype.hasOwnProperty;const Dd=function(r,e){var t=qn(r),n=!t&&Ao(r),o=!t&&!n&&qr(r),s=!t&&!n&&!o&&$c(r),c=t||n||o||s,u=c?zc(r.length,String):[],g=u.length;for(var m in r)!e&&!qh.call(r,m)||c&&(m=="length"||o&&(m=="offset"||m=="parent")||s&&(m=="buffer"||m=="byteLength"||m=="byteOffset")||Uc(m,g))||u.push(m);return u};var Gh=Object.prototype;const tn=function(r){var e=r&&r.constructor;return r===(typeof e=="function"&&e.prototype||Gh)},rn=ze(Object.keys,Object);var Kh=Object.prototype.hasOwnProperty;const Sd=function(r){if(!tn(r))return rn(r);var e=[];for(var t in Object(r))Kh.call(r,t)&&t!="constructor"&&e.push(t);return e},La=function(r){return r!=null&&yd(r.length)&&!gr(r)},Ra=function(r){return La(r)?Dd(r):Sd(r)},Qh=function(r,e){return r&&wr(e,Ra(e),r)},Zh=function(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e};var Td=Object.prototype.hasOwnProperty;const Gr=function(r){if(!Je(r))return Zh(r);var e=tn(r),t=[];for(var n in r)(n!="constructor"||!e&&Td.call(r,n))&&t.push(n);return t},wn=function(r){return La(r)?Dd(r,!0):Gr(r)},qc=function(r,e){return r&&wr(e,wn(e),r)};var qo=a&&!a.nodeType&&a,Gc=qo&&!0&&i&&!i.nodeType&&i,za=Gc&&Gc.exports===qo?ue.Buffer:void 0,_i=za?za.allocUnsafe:void 0;const Kc=function(r,e){if(e)return r.slice();var t=r.length,n=_i?_i(t):new r.constructor(t);return r.copy(n),n},Qc=function(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e},Md=function(r,e){for(var t=-1,n=r==null?0:r.length,o=0,s=[];++t<n;){var c=r[t];e(c,t,r)&&(s[o++]=c)}return s},Rs=function(){return[]};var Zc=Object.prototype.propertyIsEnumerable,Jc=Object.getOwnPropertySymbols;const oi=Jc?function(r){return r==null?[]:(r=Object(r),Md(Jc(r),function(e){return Zc.call(r,e)}))}:Rs,Jh=function(r,e){return wr(r,oi(r),e)},ui=function(r,e){for(var t=-1,n=e.length,o=r.length;++t<n;)r[o+t]=e[t];return r},Id=Object.getOwnPropertySymbols?function(r){for(var e=[];r;)ui(e,oi(r)),r=gt(r);return e}:Rs,Fa=function(r,e){return wr(r,Id(r),e)},eo=function(r,e,t){var n=e(r);return qn(r)?n:ui(n,t(r))},_r=function(r){return eo(r,Ra,oi)},zs=function(r){return eo(r,wn,Id)},sn=mr(ue,"DataView"),to=mr(ue,"Promise"),Fs=mr(ue,"Set"),Kr=mr(ue,"WeakMap");var ja="[object Map]",Pd="[object Promise]",Nd="[object Set]",Od="[object WeakMap]",Va="[object DataView]",Ua=pr(sn),Qr=pr(Is),Xh=pr(to),Ha=pr(Fs),Xc=pr(Kr),Co=qe;(sn&&Co(new sn(new ArrayBuffer(1)))!=Va||Is&&Co(new Is)!=ja||to&&Co(to.resolve())!=Pd||Fs&&Co(new Fs)!=Nd||Kr&&Co(new Kr)!=Od)&&(Co=function(r){var e=qe(r),t=e=="[object Object]"?r.constructor:void 0,n=t?pr(t):"";if(n)switch(n){case Ua:return Va;case Qr:return ja;case Xh:return Pd;case Ha:return Nd;case Xc:return Od}return e});const vr=Co;var Bd=Object.prototype.hasOwnProperty;const ef=function(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&Bd.call(r,"index")&&(t.index=r.index,t.input=r.input),t},Zr=ue.Uint8Array,js=function(r){var e=new r.constructor(r.byteLength);return new Zr(e).set(new Zr(r)),e},tf=function(r,e){var t=e?js(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)};var el=/\w*$/;const vi=function(r){var e=new r.constructor(r.source,el.exec(r));return e.lastIndex=r.lastIndex,e};var Wa=ge?ge.prototype:void 0,Jr=Wa?Wa.valueOf:void 0;const Ld=function(r){return Jr?Object(Jr.call(r)):{}},Ya=function(r,e){var t=e?js(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)},Rd=function(r,e,t){var n=r.constructor;switch(e){case"[object ArrayBuffer]":return js(r);case"[object Boolean]":case"[object Date]":return new n(+r);case"[object DataView]":return tf(r,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ya(r,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(r);case"[object RegExp]":return vi(r);case"[object Symbol]":return Ld(r)}};var zd=Object.create;const nf=function(){function r(){}return function(e){if(!Je(e))return{};if(zd)return zd(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}(),Fd=function(r){return typeof r.constructor!="function"||tn(r)?{}:nf(gt(r))},jd=function(r){return it(r)&&vr(r)=="[object Map]"};var yo=$o&&$o.isMap;const of=yo?Wc(yo):jd,rf=function(r){return it(r)&&vr(r)=="[object Set]"};var $a=$o&&$o.isSet;const tl=$a?Wc($a):rf;var xo="[object Arguments]",Vs="[object Function]",Us="[object Object]",nn={};nn[xo]=nn["[object Array]"]=nn["[object ArrayBuffer]"]=nn["[object DataView]"]=nn["[object Boolean]"]=nn["[object Date]"]=nn["[object Float32Array]"]=nn["[object Float64Array]"]=nn["[object Int8Array]"]=nn["[object Int16Array]"]=nn["[object Int32Array]"]=nn["[object Map]"]=nn["[object Number]"]=nn["[object Object]"]=nn["[object RegExp]"]=nn["[object Set]"]=nn["[object String]"]=nn["[object Symbol]"]=nn["[object Uint8Array]"]=nn["[object Uint8ClampedArray]"]=nn["[object Uint16Array]"]=nn["[object Uint32Array]"]=!0,nn["[object Error]"]=nn[Vs]=nn["[object WeakMap]"]=!1;const nl=function r(e,t,n,o,s,c){var u,g=1&t,m=2&t,b=4&t;if(n&&(u=s?n(e,o,s,c):n(e)),u!==void 0)return u;if(!Je(e))return e;var v=qn(e);if(v){if(u=ef(e),!g)return Qc(e,u)}else{var y=vr(e),M=y==Vs||y=="[object GeneratorFunction]";if(qr(e))return Kc(e,g);if(y==Us||y==xo||M&&!s){if(u=m||M?{}:Fd(e),!g)return m?Fa(e,qc(u,e)):Jh(e,Qh(u,e))}else{if(!nn[y])return s?e:{};u=Rd(e,y,g)}}c||(c=new Bs);var B=c.get(e);if(B)return B;c.set(e,u),tl(e)?e.forEach(function(j){u.add(r(j,t,n,j,e,c))}):of(e)&&e.forEach(function(j,W){u.set(W,r(j,t,n,W,e,c))});var L=v?void 0:(b?m?zs:_r:m?wn:Ra)(e);return Rc(L||e,function(j,W){L&&(j=e[W=j]),Oa(u,W,r(j,t,n,W,e,c))}),u},no=function(r,e){return nl(r,5,e=typeof e=="function"?e:void 0)},Un=function(r){return it(r)&&r.nodeType===1&&!Ft(r)};class il{constructor(e,t){this._config={},t&&this.define(Vd(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(Ft(t))return void this._setObjectToTarget(e,t,o);const s=t.split(".");t=s.pop();for(const c of s)Ft(e[c])||(e[c]={}),e=e[c];if(Ft(n))return Ft(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!Ft(e[o])){e=null;break}e=e[o]}return e?Vd(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function Vd(r){return no(r,Ud)}function Ud(r){return Un(r)?r:void 0}function Ai(r){return!(!r||!r[Symbol.iterator])}class Wi extends de{constructor(e={},t={}){super();const n=Ai(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new D("collection-add-item-invalid-index",this);let n=0;for(const o of e){const s=this._getItemIdBeforeAdding(o),c=t+n;this._items.splice(c,0,o),this._itemMap.set(s,o),this.fire("add",o,c),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new D("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new D("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,s,c)=>{const u=t._bindToCollection==this,g=t._bindToInternalToExternalMap.get(s);if(u&&g)this._bindToExternalToInternalMap.set(s,g),this._bindToInternalToExternalMap.set(g,s);else{const m=e(s);if(!m)return void this._skippedIndexesFromExternal.push(c);let b=c;for(const v of this._skippedIndexesFromExternal)c>v&&b--;for(const v of t._skippedIndexesFromExternal)b>=v&&b++;this._bindToExternalToInternalMap.set(s,m),this._bindToInternalToExternalMap.set(m,s),this.add(m,b);for(let v=0;v<t._skippedIndexesFromExternal.length;v++)b<=t._skippedIndexesFromExternal[v]&&t._skippedIndexesFromExternal[v]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,s,c)=>{const u=this._bindToExternalToInternalMap.get(s);u&&this.remove(u),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((g,m)=>(c<m&&g.push(m-1),c>m&&g.push(m),g),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new D("collection-add-invalid-id",this);if(this.get(n))throw new D("collection-add-item-already-exists",this)}else e[t]=n=T();return n}_remove(e){let t,n,o,s=!1;const c=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),s=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],s=!o,o&&(n=o[c])):(o=e,n=o[c],t=this._items.indexOf(o),s=t==-1||!this._itemMap.get(n)),s)throw new D("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const u=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(u),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}class Hd extends de{constructor(e,t=[],n=[]){super(),this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,s]of n)this._contextPlugins.set(o,s),this._contextPlugins.set(s,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new D("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,s=this._context;(function B(L,j=new Set){L.forEach(W=>{g(W)&&(j.has(W)||(j.add(W),W.pluginName&&!o._availablePlugins.has(W.pluginName)&&o._availablePlugins.set(W.pluginName,W),W.requires&&B(W.requires,j)))})})(e),y(e);const c=[...function B(L,j=new Set){return L.map(W=>g(W)?W:o._availablePlugins.get(W)).reduce((W,X)=>j.has(X)?W:(j.add(X),X.requires&&(y(X.requires,X),B(X.requires,j).forEach(he=>W.add(he))),W.add(X)),new Set)}(e.filter(B=>!b(B,t)))];(function(B,L){for(const j of L){if(typeof j!="function")throw new D("plugincollection-replace-plugin-invalid-type",null,{pluginItem:j});const W=j.pluginName;if(!W)throw new D("plugincollection-replace-plugin-missing-name",null,{pluginItem:j});if(j.requires&&j.requires.length)throw new D("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:W});const X=o._availablePlugins.get(W);if(!X)throw new D("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:W});const he=B.indexOf(X);if(he===-1){if(o._contextPlugins.has(X))return;throw new D("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:W})}if(X.requires&&X.requires.length)throw new D("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:W});B.splice(he,1,j),o._availablePlugins.set(W,j)}})(c,n);const u=function(B){return B.map(L=>{let j=o._contextPlugins.get(L);return j=j||new L(s),o._add(L,j),j})}(c);return M(u,"init").then(()=>M(u,"afterInit")).then(()=>u);function g(B){return typeof B=="function"}function m(B){return g(B)&&B.isContextPlugin}function b(B,L){return L.some(j=>j===B||v(B)===j||v(j)===B)}function v(B){return g(B)?B.pluginName||B.name:B}function y(B,L=null){B.map(j=>g(j)?j:o._availablePlugins.get(j)||j).forEach(j=>{(function(W,X){if(!g(W))throw X?new D("plugincollection-soft-required",s,{missingPlugin:W,requiredBy:v(X)}):new D("plugincollection-plugin-not-found",s,{plugin:W})})(j,L),function(W,X){if(!!m(X)&&!m(W))throw new D("plugincollection-context-required",s,{plugin:v(W),requiredBy:v(X)})}(j,L),function(W,X){if(!!X&&!!b(W,t))throw new D("plugincollection-required",s,{plugin:v(W),requiredBy:v(X)})}(j,L)})}function M(B,L){return B.reduce((j,W)=>W[L]?o._contextPlugins.has(W)?j:j.then(W[L].bind(W)):j,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new D("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}function un(r){return Array.isArray(r)?r:[r]}let J;try{J={window,document}}catch{J={window:{},document:{}}}const oe=J;function ce(r,e,t=1){if(typeof t!="number")throw new D("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(oe.window.CKEDITOR_TRANSLATIONS).length;n===1&&(r=Object.keys(oe.window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(g,m){return!!oe.window.CKEDITOR_TRANSLATIONS[g]&&!!oe.window.CKEDITOR_TRANSLATIONS[g].dictionary[m]}(r,o))return t!==1?e.plural:e.string;const s=oe.window.CKEDITOR_TRANSLATIONS[r].dictionary,c=oe.window.CKEDITOR_TRANSLATIONS[r].getPluralForm||(g=>g===1?0:1),u=s[o];return typeof u=="string"?u:u[Number(c(t))]}oe.window.CKEDITOR_TRANSLATIONS||(oe.window.CKEDITOR_TRANSLATIONS={});const Ge=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function ft(r){return Ge.includes(r)?"rtl":"ltr"}class Bt{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=ft(this.uiLanguage),this.contentLanguageDirection=ft(this.contentLanguage),this.t=(t,n)=>this._t(t,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=un(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,s){return o.replace(/%(\d+)/g,(c,u)=>u<s.length?s[u]:c)}(ce(this.uiLanguage,e,n),t)}}class On{constructor(e){this.config=new il(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new Hd(this,t);const n=this.config.get("language")||{};this.locale=new Bt({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Wi,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new D("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new D("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new D("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class jt extends kt{constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class Eo{is(){throw new Error("is() method is abstract")}}function ri(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)if(r[n]!=e[n])return n;return r.length==e.length?"same":r.length<e.length?"prefix":"extension"}const Ci=function(r){return nl(r,4)};class io extends Ie(Eo){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new D("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=ri(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Ci(this);return delete e.parent,e}}io.prototype.is=function(r){return r==="node"||r==="view:node"};class Qt extends io{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Qt&&(this===e||this.data===e.data)}_clone(){return new Qt(this.document,this.data)}}Qt.prototype.is=function(r){return r==="$text"||r==="view:$text"||r==="text"||r==="view:text"||r==="node"||r==="view:node"};class Qn extends Eo{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new D("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new D("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}function si(r){return Ai(r)?new Map(r):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(r)}Qn.prototype.is=function(r){return r==="$textProxy"||r==="view:$textProxy"||r==="textProxy"||r==="view:textProxy"};class hi{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=It(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const s=It(n,o);s&&t.push({element:n,pattern:o,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function It(r,e){if(typeof e=="function")return e(r);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,r.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const s=new Set(o.getAttributeKeys());return Ft(n)?(n.style!==void 0&&z("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&z("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),Go(n,s,c=>o.getAttribute(c))}(e.attributes,r),!t.attributes)||e.classes&&(t.classes=function(n,o){return Go(n,o.getClassNames(),()=>{})}(e.classes,r),!t.classes)||e.styles&&(t.styles=function(n,o){return Go(n,o.getStyleNames(!0),s=>o.getStyle(s))}(e.styles,r),!t.styles)?null:t}function Go(r,e,t){const n=function(c){return Array.isArray(c)?c.map(u=>Ft(u)?(u.key!==void 0&&u.value!==void 0||z("matcher-pattern-missing-key-or-value",u),[u.key,u.value]):[u,!0]):Ft(c)?Object.entries(c):[[c,!0]]}(r),o=Array.from(e),s=[];if(n.forEach(([c,u])=>{o.forEach(g=>{(function(m,b){return m===!0||m===b||m instanceof RegExp&&b.match(m)})(c,g)&&function(m,b,v){if(m===!0)return!0;const y=v(b);return m===y||m instanceof RegExp&&!!String(y).match(m)}(u,g,t)&&s.push(g)})}),n.length&&!(s.length<n.length))return s}const Hs=function(r){return typeof r=="symbol"||it(r)&&qe(r)=="[object Symbol]"};var qa=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sf=/^\w*$/;const af=function(r,e){if(qn(r))return!1;var t=typeof r;return!(t!="number"&&t!="symbol"&&t!="boolean"&&r!=null&&!Hs(r))||sf.test(r)||!qa.test(r)||e!=null&&r in Object(e)};function ol(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],s=t.cache;if(s.has(o))return s.get(o);var c=r.apply(this,n);return t.cache=s.set(o,c)||s,c};return t.cache=new(ol.Cache||Os),t}ol.Cache=Os;const Ga=ol;var Ko=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ar=/\\(\\)?/g,C=function(r){var e=Ga(r,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(Ko,function(t,n,o,s){e.push(o?s.replace(Ar,"$1"):n||t)}),e});const x=C,P=function(r,e){for(var t=-1,n=r==null?0:r.length,o=Array(n);++t<n;)o[t]=e(r[t],t,r);return o};var H=ge?ge.prototype:void 0,me=H?H.toString:void 0;const tt=function r(e){if(typeof e=="string")return e;if(qn(e))return P(e,r)+"";if(Hs(e))return me?me.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},hn=function(r){return r==null?"":tt(r)},Cn=function(r,e){return qn(r)?r:af(r,e)?[r]:x(hn(r))},Hn=function(r){var e=r==null?0:r.length;return e?r[e-1]:void 0},Qo=function(r){if(typeof r=="string"||Hs(r))return r;var e=r+"";return e=="0"&&1/r==-1/0?"-0":e},Ka=function(r,e){for(var t=0,n=(e=Cn(e,r)).length;r!=null&&t<n;)r=r[Qo(e[t++])];return t&&t==n?r:void 0},yp=function(r,e,t){var n=-1,o=r.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(o);++n<o;)s[n]=r[n+e];return s},Wd=function(r,e){return e.length<2?r:Ka(r,yp(e,0,-1))},Yd=function(r,e){return e=Cn(e,r),(r=Wd(r,e))==null||delete r[Qo(Hn(e))]},cf=function(r,e){return r==null||Yd(r,e)},$d=function(r,e,t){var n=r==null?void 0:Ka(r,e);return n===void 0?t:n},qd=function(r,e,t){(t!==void 0&&!Nn(r[e],t)||t===void 0&&!(e in r))&&Na(r,e,t)},yw=function(r){return function(e,t,n){for(var o=-1,s=Object(e),c=n(e),u=c.length;u--;){var g=c[r?u:++o];if(t(s[g],g,s)===!1)break}return e}}(),xw=function(r){return it(r)&&La(r)},Bn=function(r,e){if((e!=="constructor"||typeof r[e]!="function")&&e!="__proto__")return r[e]},fi=function(r){return wr(r,wn(r))},Ew=function(r,e,t,n,o,s,c){var u=Bn(r,t),g=Bn(e,t),m=c.get(g);if(m)qd(r,t,m);else{var b=s?s(u,g,t+"",r,e,c):void 0,v=b===void 0;if(v){var y=qn(g),M=!y&&qr(g),B=!y&&!M&&$c(g);b=g,y||M||B?qn(u)?b=u:xw(u)?b=Qc(u):M?(v=!1,b=Kc(g,!0)):B?(v=!1,b=Ya(g,!0)):b=[]:Ft(g)||Ao(g)?(b=u,Ao(u)?b=fi(u):Je(u)&&!gr(u)||(b=Fd(g))):v=!1}v&&(c.set(g,b),o(b,g,n,s,c),c.delete(g)),qd(r,t,b)}},Dw=function r(e,t,n,o,s){e!==t&&yw(t,function(c,u){if(s||(s=new Bs),Je(c))Ew(e,t,u,n,r,o,s);else{var g=o?o(Bn(e,u),c,u+"",e,t,s):void 0;g===void 0&&(g=c),qd(e,u,g)}},wn)},Xr=function(r){return r},Sw=function(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)};var Gd=Math.max;const rl=function(r,e,t){return e=Gd(e===void 0?r.length-1:e,0),function(){for(var n=arguments,o=-1,s=Gd(n.length-e,0),c=Array(s);++o<s;)c[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=t(c),Sw(r,this,u)}},lf=function(r){return function(){return r}},Qa=kr?function(r,e){return kr(r,"toString",{configurable:!0,enumerable:!1,value:lf(e),writable:!0})}:Xr;var sl=Date.now;const Qd=function(r){var e=0,t=0;return function(){var n=sl(),o=16-(n-t);if(t=n,o>0){if(++e>=800)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}(Qa),Za=function(r,e){return Qd(rl(r,e,Xr),r+"")},Tw=function(r,e,t){if(!Je(t))return!1;var n=typeof e;return!!(n=="number"?La(t)&&Uc(e,t.length):n=="string"&&e in t)&&Nn(t[e],r)},xp=function(r){return Za(function(e,t){var n=-1,o=t.length,s=o>1?t[o-1]:void 0,c=o>2?t[2]:void 0;for(s=r.length>3&&typeof s=="function"?(o--,s):void 0,c&&Tw(t[0],t[1],c)&&(s=o<3?void 0:s,o=1),e=Object(e);++n<o;){var u=t[n];u&&r(e,u,n,s)}return e})},Ep=xp(function(r,e,t){Dw(r,e,t)}),Mw=function(r,e,t,n){if(!Je(r))return r;for(var o=-1,s=(e=Cn(e,r)).length,c=s-1,u=r;u!=null&&++o<s;){var g=Qo(e[o]),m=t;if(g==="__proto__"||g==="constructor"||g==="prototype")return r;if(o!=c){var b=u[g];(m=n?n(b,g,u):void 0)===void 0&&(m=Je(b)?b:Uc(e[o+1])?[]:{})}Oa(u,g,m),u=u[g]}return r},Iw=function(r,e,t){return r==null?r:Mw(r,e,t)};class Zd{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,s=0,c=0,u=null;const g=new Map;if(n==="")return g;n.charAt(n.length-1)!=";"&&(n+=";");for(let m=0;m<n.length;m++){const b=n.charAt(m);if(o===null)switch(b){case":":u||(u=n.substr(s,m-s),c=m+1);break;case'"':case"'":o=b;break;case";":{const v=n.substr(c,m-c);u&&g.set(u.trim(),v.trim()),u=null,s=m+1;break}}else b===o&&(o=null)}return g}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(Je(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Jd(e);cf(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Je(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=$d(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class al{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Je(t))R(n,Jd(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:s,value:c}=o(t);R(n,s,c)}else R(n,e,t)}getNormalized(e,t){if(!e)return Ep({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return $d(t,n);const o=n(e,t);if(o)return o}return $d(t,Jd(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const s=this.getNormalized(o,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Jd(r){return r.replace("-",".")}function R(r,e,t){let n=t;Je(t)&&(n=Ep({},$d(r,e),t)),Iw(r,e,n)}class Zn extends io{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=function(s){const c=si(s);for(const[u,g]of c)g===null?c.delete(u):typeof g!="string"&&c.set(u,String(g));return c}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");cl(this._classes,s),this._attrs.delete("class")}this._styles=new Zd(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Zn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new hi(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,c){return typeof c=="string"?[new Qt(s,c)]:(Ai(c)||(c=[c]),Array.from(c).map(u=>typeof u=="string"?new Qt(s,u):u instanceof Qn?new Qt(s,u.data):u))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?cl(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of un(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of un(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),Ft(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of un(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function cl(r,e){const t=e.split(/\s+/);r.clear(),t.forEach(n=>r.add(n))}Zn.prototype.is=function(r,e){return e?e===this.name&&(r==="element"||r==="view:element"):r==="element"||r==="view:element"||r==="node"||r==="view:node"};class gi extends Zn{constructor(...e){super(...e),this.getFillerOffset=yt}}function yt(){const r=[...this.getChildren()],e=r[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of r)if(!t.is("uiElement"))return null;return this.childCount}gi.prototype.is=function(r,e){return e?e===this.name&&(r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Xd extends zt(gi){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Xd.prototype.is=function(r,e){return e?e===this.name&&(r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};const Dp=Symbol("rootName");class Sp extends Xd{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Dp)}set rootName(e){this._setCustomProperty(Dp,e)}set _name(e){this.name=e}}Sp.prototype.is=function(r,e){return e?e===this.name&&(r==="rootElement"||r==="view:rootElement"||r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"):r==="rootElement"||r==="view:rootElement"||r==="editableElement"||r==="view:editableElement"||r==="containerElement"||r==="view:containerElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Yi{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new D("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new D("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=Oe._createAt(e.startPosition):this.position=Oe._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof Qt){if(e.isAtEnd)return this.position=Oe._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof Zn)return this.shallow?e.offset++:e=new Oe(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof Qt){if(this.singleCharacters)return e=new Oe(o,0),this.position=e,this._next();{let s,c=o.data.length;return o==this._boundaryEndParent?(c=this.boundaries.end.offset,s=new Qn(o,0,c),e=Oe._createAfter(s)):(s=new Qn(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",s,t,e,c)}}if(typeof o=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const c=new Qn(n,e.offset,s);return e.offset+=s,this.position=e,this._formatReturnValue("text",c,t,e,s)}return e=Oe._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof Qt){if(e.isAtStart)return this.position=Oe._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof Zn)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new Oe(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof Qt){if(this.singleCharacters)return e=new Oe(o,o.data.length),this.position=e,this._previous();{let s,c=o.data.length;if(o==this._boundaryStartParent){const u=this.boundaries.start.offset;s=new Qn(o,u,o.data.length-u),c=s.data.length,e=Oe._createBefore(s)}else s=new Qn(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",s,t,e,c)}}if(typeof o=="string"){let s;if(this.singleCharacters)s=1;else{const u=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-u}e.offset-=s;const c=new Qn(n,e.offset,s);return this.position=e,this._formatReturnValue("text",c,t,e,s)}return e=Oe._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,s){return t instanceof Qn&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Oe._createAfter(t.textNode):(o=Oe._createAfter(t.textNode),this.position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Oe._createBefore(t.textNode):(o=Oe._createBefore(t.textNode),this.position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:s}}}}class Oe extends Eo{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Xd);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=Oe._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Yi(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=ri(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Yi(e)}clone(){return new Oe(this.parent,this.offset)}static _createAt(e,t){if(e instanceof Oe)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new D("view-createpositionat-offset-required",n)}return new Oe(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new Oe(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new D("view-position-after-root",e,{root:e});return new Oe(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new Oe(e.textNode,e.offsetInText);if(!e.parent)throw new D("view-position-before-root",e,{root:e});return new Oe(e.parent,e.index)}}Oe.prototype.is=function(r){return r==="position"||r==="view:position"};class dt extends Eo{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Yi({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(eu,{direction:"backward"}),t=this.end.getLastMatchingPosition(eu);return e.parent.is("$text")&&e.isAtStart&&(e=Oe._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=Oe._createAfter(t.parent)),new dt(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(eu);if(e.isAfter(this.end)||e.isEqual(this.end))return new dt(e,e);let t=this.end.getLastMatchingPosition(eu,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new Oe(n,0)),o&&o.is("$text")&&(t=new Oe(o,o.data.length)),new dt(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new dt(this.start,e.start)),this.containsPosition(e.end)&&t.push(new dt(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new dt(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Yi(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new dt(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Yi(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Yi(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new Oe(e,t),new Oe(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(Oe._createBefore(e),t)}}function eu(r){return!(!r.item.is("attributeElement")&&!r.item.is("uiElement"))}function df(r){let e=0;for(const t of r)e++;return e}dt.prototype.is=function(r){return r==="range"||r==="view:range"};class Zo extends Ie(Eo){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=df(this.getRanges());if(t!=df(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(o);else if(t instanceof Zo||t instanceof Do)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof dt)this._setRanges([t],o&&o.backward),this._setFakeOptions(o);else if(t instanceof Oe)this._setRanges([new dt(t)]),this._setFakeOptions(o);else if(t instanceof io){const s=!!o&&!!o.backward;let c;if(n===void 0)throw new D("view-selection-setto-required-second-parameter",this);c=n=="in"?dt._createIn(t):n=="on"?dt._createOn(t):new dt(Oe._createAt(t,n)),this._setRanges([c],s),this._setFakeOptions(o)}else{if(!Ai(t))throw new D("view-selection-setto-not-selectable",this);this._setRanges(t,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new D("view-selection-setfocus-no-ranges",this);const n=Oe._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new dt(n,o),!0):this._addRange(new dt(o,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof dt))throw new D("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new D("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new dt(e.start,e.end))}}Zo.prototype.is=function(r){return r==="selection"||r==="view:selection"};class Do extends Ie(Eo){constructor(...e){super(),this._selection=new Zo,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Do.prototype.is=function(r){return r==="selection"||r=="documentSelection"||r=="view:selection"||r=="view:documentSelection"};class Ja extends E{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const uf=Symbol("bubbling contexts");function hf(r){return class extends r{fire(e,...t){try{const n=e instanceof E?e:new E(this,e),o=ff(this);if(!o.size)return;if(ll(n,"capturing",this),Xa(o,"$capture",n,...t))return n.return;const s=n.startRange||this.selection.getFirstRange(),c=s?s.getContainedElement():null,u=!!c&&Boolean(Jo(o,c));let g=c||function(m){if(!m)return null;const b=m.start.parent,v=m.end.parent,y=b.getPath(),M=v.getPath();return y.length>M.length?b:v}(s);if(ll(n,"atTarget",g),!u){if(Xa(o,"$text",n,...t))return n.return;ll(n,"bubbling",g)}for(;g;){if(g.is("rootElement")){if(Xa(o,"$root",n,...t))return n.return}else if(g.is("element")&&Xa(o,g.name,n,...t))return n.return;if(Xa(o,g,n,...t))return n.return;g=g.parent,ll(n,"bubbling",g)}return ll(n,"bubbling",this),Xa(o,"$document",n,...t),n.return}catch(n){D.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const o=un(n.context||"$document"),s=ff(this);for(const c of o){let u=s.get(c);u||(u=new de,s.set(c,u)),this.listenTo(u,e,t,n)}}_removeEventListener(e,t){const n=ff(this);for(const o of n.values())this.stopListening(o,e,t)}}}{const r=hf(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{hf[e]=r.prototype[e]})}function ll(r,e,t){r instanceof Ja&&(r._eventPhase=e,r._currentTarget=t)}function Xa(r,e,t,...n){const o=typeof e=="string"?r.get(e):Jo(r,e);return!!o&&(o.fire(t,...n),t.stop.called)}function Jo(r,e){for(const[t,n]of r)if(typeof t=="function"&&t(e))return n;return null}function ff(r){return r[uf]||(r[uf]=new Map),r[uf]}class tu extends hf(kt){constructor(e){super(),this.selection=new Do,this.roots=new Wi({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class Ws extends Zn{constructor(...e){super(...e),this.getFillerOffset=Pw,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new D("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function Pw(){if(gf(this))return null;let r=this.parent;for(;r&&r.is("attributeElement");){if(gf(r)>1)return null;r=r.parent}return!r||gf(r)>1?null:this.childCount}function gf(r){return Array.from(r.getChildren()).filter(e=>!e.is("uiElement")).length}Ws.DEFAULT_PRIORITY=10,Ws.prototype.is=function(r,e){return e?e===this.name&&(r==="attributeElement"||r==="view:attributeElement"||r==="element"||r==="view:element"):r==="attributeElement"||r==="view:attributeElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class Cr extends Zn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=Nw}_insertChild(e,t){if(t&&(t instanceof io||Array.from(t).length>0))throw new D("view-emptyelement-cannot-add",[this,t]);return 0}}function Nw(){return null}Cr.prototype.is=function(r,e){return e?e===this.name&&(r==="emptyElement"||r==="view:emptyElement"||r==="element"||r==="view:element"):r==="emptyElement"||r==="view:emptyElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};const Ys=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),So={isMac:Tp(Ys),isWindows:function(r){return r.indexOf("windows")>-1}(Ys),isGecko:function(r){return!!r.match(/gecko\/\d+/)}(Ys),isSafari:function(r){return r.indexOf(" applewebkit/")>-1&&r.indexOf("chrome")===-1}(Ys),isiOS:function(r){return!!r.match(/iphone|ipad/i)||Tp(r)&&navigator.maxTouchPoints>0}(Ys),isAndroid:function(r){return r.indexOf("android")>-1}(Ys),isBlink:function(r){return r.indexOf("chrome/")>-1&&r.indexOf("edge/")<0}(Ys),features:{isRegExpUnicodePropertySupported:function(){let r=!1;try{r="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return r}()}},xt=So;function Tp(r){return r.indexOf("macintosh")>-1}const Ow={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},Bw={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Pt=function(){const r={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);r[t.toLowerCase()]=e}for(let e=48;e<=57;e++)r[e-48]=e;for(let e=112;e<=123;e++)r["f"+(e-111)]=e;for(const e of"`-=[];',./\\")r[e]=e.charCodeAt(0);return r}(),Mp=Object.fromEntries(Object.entries(Pt).map(([r,e])=>[e,r.charAt(0).toUpperCase()+r.slice(1)]));function $s(r){let e;if(typeof r=="string"){if(e=Pt[r.toLowerCase()],!e)throw new D("keyboard-unknown-key",null,{key:r})}else e=r.keyCode+(r.altKey?Pt.alt:0)+(r.ctrlKey?Pt.ctrl:0)+(r.shiftKey?Pt.shift:0)+(r.metaKey?Pt.cmd:0);return e}function pf(r){return typeof r=="string"&&(r=function(e){return e.split("+").map(t=>t.trim())}(r)),r.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return $s(t.slice(0,-1));const n=$s(t);return xt.isMac&&n==Pt.ctrl?Pt.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Ip(r){let e=pf(r);return Object.entries(xt.isMac?Ow:Bw).reduce((t,[n,o])=>((e&Pt[n])!=0&&(e&=~Pt[n],t+=o),t),"")+(e?Mp[e]:"")}function dl(r,e){const t=e==="ltr";switch(r){case Pt.arrowleft:return t?"left":"right";case Pt.arrowright:return t?"right":"left";case Pt.arrowup:return"up";case Pt.arrowdown:return"down"}}class es extends Zn{constructor(...e){super(...e),this.getFillerOffset=Lw}_insertChild(e,t){if(t&&(t instanceof io||Array.from(t).length>0))throw new D("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function nu(r){r.document.on("arrowKey",(e,t)=>function(n,o,s){if(o.keyCode==Pt.arrowright){const c=o.domTarget.ownerDocument.defaultView.getSelection(),u=c.rangeCount==1&&c.getRangeAt(0).collapsed;if(u||o.shiftKey){const g=c.focusNode,m=c.focusOffset,b=s.domPositionToView(g,m);if(b===null)return;let v=!1;const y=b.getLastMatchingPosition(M=>(M.item.is("uiElement")&&(v=!0),!(!M.item.is("uiElement")&&!M.item.is("attributeElement"))));if(v){const M=s.viewPositionToDom(y);u?c.collapse(M.parent,M.offset):c.extend(M.parent,M.offset)}}}}(0,t,r.domConverter),{priority:"low"})}function Lw(){return null}es.prototype.is=function(r,e){return e?e===this.name&&(r==="uiElement"||r==="view:uiElement"||r==="element"||r==="view:element"):r==="uiElement"||r==="view:uiElement"||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class iu extends Zn{constructor(...e){super(...e),this.getFillerOffset=Rw}_insertChild(e,t){if(t&&(t instanceof io||Array.from(t).length>0))throw new D("view-rawelement-cannot-add",[this,t]);return 0}render(){}}function Rw(){return null}iu.prototype.is=function(r,e){return e?e===this.name&&(r==="rawElement"||r==="view:rawElement"||r==="element"||r==="view:element"):r==="rawElement"||r==="view:rawElement"||r===this.name||r==="view:"+this.name||r==="element"||r==="view:element"||r==="node"||r==="view:node"};class yi extends Ie(Eo){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,c){return typeof c=="string"?[new Qt(s,c)]:(Ai(c)||(c=[c]),Array.from(c).map(u=>typeof u=="string"?new Qt(s,u):u instanceof Qn?new Qt(s,u.data):u))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}yi.prototype.is=function(r){return r==="documentFragment"||r==="view:documentFragment"};class ou{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new yi(this.document,e)}createText(e){return new Qt(this.document,e)}createAttributeElement(e,t,n={}){const o=new Ws(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let s=null;Ft(n)?o=n:s=n;const c=new gi(this.document,e,t,s);return o.renderUnsafeAttributes&&c._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),c}createEditableElement(e,t,n={}){const o=new Xd(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new Cr(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new es(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const s=new iu(this.document,e,t);return n&&(s.render=n),o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Ft(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof Oe?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new D("view-writer-break-non-container-element",this.document);if(!t.parent)throw new D("view-writer-break-root",this.document);if(e.isAtStart)return Oe._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(Oe._createAfter(t),n);const o=new dt(e,Oe._createAt(t,"end")),s=new Oe(n,0);this.move(o,s)}return Oe._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const c=n.parent,u=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Oe(c,u))}const o=n.getChild(t-1),s=n.getChild(t);if(!o||!s)return e;if(o.is("$text")&&s.is("$text"))return mf(o,s);if(o.is("attributeElement")&&s.is("attributeElement")&&o.isSimilar(s)){const c=o.childCount;return o._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new Oe(o,c))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new D("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),s=o instanceof Qt?Oe._createAt(o,"end"):Oe._createAt(t,"end");return this.move(dt._createIn(n),Oe._createAt(t,"end")),this.remove(dt._createOn(n)),s}insert(e,t){xr(t=Ai(t)?[...t]:[t],this.document);const n=t.reduce((c,u)=>{const g=c[c.length-1],m=!u.is("uiElement");return g&&g.breakAttributes==m?g.nodes.push(u):c.push({breakAttributes:m,nodes:[u]}),c},[]);let o=null,s=e;for(const{nodes:c,breakAttributes:u}of n){const g=this._insertNodes(s,c,u);o||(o=g.start),s=g.end}return o?new dt(o,s):new dt(e)}remove(e){const t=e instanceof dt?e:dt._createOn(e);if(hl(t,this.document),t.isCollapsed)return new yi(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),s=n.parent,c=o.offset-n.offset,u=s._removeChildren(n.offset,c);for(const m of u)this._removeFromClonedElementsGroup(m);const g=this.mergeAttributes(n);return t.start=g,t.end=g.clone(),new yi(this.document,u)}clear(e,t){hl(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const s=o.item;let c;if(s.is("element")&&t.isSimilar(s))c=dt._createOn(s);else if(!o.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const u=s.getAncestors().find(g=>g.is("element")&&t.isSimilar(g));u&&(c=dt._createIn(u))}c&&(c.end.isAfter(e.end)&&(c.end=e.end),c.start.isBefore(e.start)&&(c.start=e.start),this.remove(c))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,s=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Ws))throw new D("view-writer-wrap-invalid-attribute",this.document);if(hl(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(c=>!c.is("uiElement")))&&(o=o.getLastMatchingPosition(c=>c.item.is("uiElement"))),o=this._wrapPosition(o,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new dt(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Ws))throw new D("view-writer-unwrap-invalid-attribute",this.document);if(hl(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,c=this._unwrapChildren(s,n.offset,o.offset,t),u=this.mergeAttributes(c.start);u.isEqual(c.start)||c.end.offset--;const g=this.mergeAttributes(c.end);return new dt(u,g)}rename(e,t){const n=new gi(this.document,e,t.getAttributes());return this.insert(Oe._createAfter(t),n),this.move(dt._createIn(t),Oe._createAt(n,0)),this.remove(dt._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return Oe._createAt(e,t)}createPositionAfter(e){return Oe._createAfter(e)}createPositionBefore(e){return Oe._createBefore(e)}createRange(...e){return new dt(...e)}createRangeOn(e){return dt._createOn(e)}createRangeIn(e){return dt._createIn(e)}createSelection(...e){return new Zo(...e)}createSlot(e){if(!this._slotFactory)throw new D("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,s;if(o=n?yr(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new D("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?ru(e):e;const c=o._insertChild(s.offset,t);for(const b of t)this._addToClonedElementsGroup(b);const u=s.getShiftedBy(c),g=this.mergeAttributes(s);g.isEqual(s)||u.offset--;const m=this.mergeAttributes(u);return new dt(g,m)}_wrapChildren(e,t,n,o){let s=t;const c=[];for(;s<n;){const g=e.getChild(s),m=g.is("$text"),b=g.is("attributeElement");if(b&&this._wrapAttributeElement(o,g))c.push(new Oe(e,s));else if(m||!b||oo(o,g)){const v=o._clone();g._remove(),v._appendChild(g),e._insertChild(s,v),this._addToClonedElementsGroup(v),c.push(new Oe(e,s))}else this._wrapChildren(g,0,g.childCount,o);s++}let u=0;for(const g of c)g.offset-=u,g.offset!=t&&(this.mergeAttributes(g).isEqual(g)||(u++,n--));return dt._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let s=t;const c=[];for(;s<n;){const g=e.getChild(s);if(g.is("attributeElement"))if(g.isSimilar(o)){const m=g.getChildren(),b=g.childCount;g._remove(),e._insertChild(s,m),this._removeFromClonedElementsGroup(g),c.push(new Oe(e,s),new Oe(e,s+b)),s+=b,n+=b-1}else this._unwrapAttributeElement(o,g)?(c.push(new Oe(e,s),new Oe(e,s+1)),s++):(this._unwrapChildren(g,0,g.childCount,o),s++);else s++}let u=0;for(const g of c)g.offset-=u,!(g.offset==t||g.offset==n)&&(this.mergeAttributes(g).isEqual(g)||(u++,n--));return dt._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,c=this._wrapChildren(s,n.offset,o.offset,t),u=this.mergeAttributes(c.start);u.isEqual(c.start)||c.end.offset--;const g=this.mergeAttributes(c.end);return new dt(u,g)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Pp(e.clone());e.parent.is("$text")&&(e=ru(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new dt(e,e.getShiftedBy(1));this.wrap(o,t);const s=new Oe(n.parent,n.index);n._remove();const c=s.nodeBefore,u=s.nodeAfter;return c instanceof Qt&&u instanceof Qt?mf(c,u):Pp(s)}_wrapAttributeElement(e,t){if(!fl(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!fl(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(hl(e,this.document),e.isCollapsed){const g=this._breakAttributes(e.start,t);return new dt(g,g)}const s=this._breakAttributes(o,t),c=s.parent.childCount,u=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-c,new dt(u,s)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new D("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new D("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new D("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&su(o.parent)||su(o))return e.clone();if(o.is("$text"))return this._breakAttributes(ru(e),t);if(n==o.childCount){const s=new Oe(o.parent,o.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new Oe(o.parent,o.index);return this._breakAttributes(s,t)}{const s=o.index+1,c=o._clone();o.parent._insertChild(s,c),this._addToClonedElementsGroup(c);const u=o.childCount-n,g=o._removeChildren(n,u);c._appendChild(g);const m=new Oe(o.parent,s);return this._breakAttributes(m,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function yr(r){let e=r.parent;for(;!su(e);){if(!e)return;e=e.parent}return e}function oo(r,e){return r.priority<e.priority||!(r.priority>e.priority)&&r.getIdentity()<e.getIdentity()}function Pp(r){const e=r.nodeBefore;if(e&&e.is("$text"))return new Oe(e,e.data.length);const t=r.nodeAfter;return t&&t.is("$text")?new Oe(t,0):r}function ru(r){if(r.offset==r.parent.data.length)return new Oe(r.parent.parent,r.parent.index+1);if(r.offset===0)return new Oe(r.parent.parent,r.parent.index);const e=r.parent.data.slice(r.offset);return r.parent._data=r.parent.data.slice(0,r.offset),r.parent.parent._insertChild(r.parent.index+1,new Qt(r.root.document,e)),new Oe(r.parent.parent,r.parent.index+1)}function mf(r,e){const t=r.data.length;return r._data+=e.data,e._remove(),new Oe(r,t)}const ul=[Qt,Ws,gi,Cr,iu,es];function xr(r,e){for(const t of r){if(!ul.some(n=>t instanceof n))throw new D("view-writer-insert-invalid-node-type",e);t.is("$text")||xr(t.getChildren(),e)}}function su(r){return r&&(r.is("containerElement")||r.is("documentFragment"))}function hl(r,e){const t=yr(r.start),n=yr(r.end);if(!t||!n||t!==n)throw new D("view-writer-invalid-range-container",e)}function fl(r,e){return r.id===null&&e.id===null}function Sn(r){return Object.prototype.toString.call(r)=="[object Text]"}const bf=r=>r.createTextNode("\xA0"),Jn=r=>{const e=r.createElement("span");return e.dataset.ckeFiller="true",e.innerText="\xA0",e},au=r=>{const e=r.createElement("br");return e.dataset.ckeFiller="true",e},gl="\u2060".repeat(7);function Tn(r){return Sn(r)&&r.data.substr(0,7)===gl}function qs(r){return r.data.length==7&&Tn(r)}function pl(r){return Tn(r)?r.data.slice(7):r.data}function Gs(r,e){if(e.keyCode==Pt.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;Tn(n)&&o<=7&&t.collapse(n,0)}}}function kf(r,e,t,n=!1){t=t||function(u,g){return u===g};const o=Array.isArray(r)?r:Array.prototype.slice.call(r),s=Array.isArray(e)?e:Array.prototype.slice.call(e),c=function(u,g,m){const b=pi(u,g,m);if(b===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const v=cu(u,b),y=cu(g,b),M=pi(v,y,m),B=u.length-M,L=g.length-M;return{firstIndex:b,lastIndexOld:B,lastIndexNew:L}}(o,s,t);return n?function(u,g){const{firstIndex:m,lastIndexOld:b,lastIndexNew:v}=u;if(m===-1)return Array(g).fill("equal");let y=[];return m>0&&(y=y.concat(Array(m).fill("equal"))),v-m>0&&(y=y.concat(Array(v-m).fill("insert"))),b-m>0&&(y=y.concat(Array(b-m).fill("delete"))),v<g&&(y=y.concat(Array(g-v).fill("equal"))),y}(c,s.length):function(u,g){const m=[],{firstIndex:b,lastIndexOld:v,lastIndexNew:y}=g;return y-b>0&&m.push({index:b,type:"insert",values:u.slice(b,y)}),v-b>0&&m.push({index:b+(y-b),type:"delete",howMany:v-b}),m}(s,c)}function pi(r,e,t){for(let n=0;n<Math.max(r.length,e.length);n++)if(r[n]===void 0||e[n]===void 0||!t(r[n],e[n]))return n;return-1}function cu(r,e){return r.slice(e).reverse()}function ml(r,e,t){t=t||function(L,j){return L===j};const n=r.length,o=e.length;if(n>200||o>200||n+o>300)return ml.fastDiff(r,e,t,!0);let s,c;if(o<n){const L=r;r=e,e=L,s="delete",c="insert"}else s="insert",c="delete";const u=r.length,g=e.length,m=g-u,b={},v={};function y(L){const j=(v[L-1]!==void 0?v[L-1]:-1)+1,W=v[L+1]!==void 0?v[L+1]:-1,X=j>W?-1:1;b[L+X]&&(b[L]=b[L+X].slice(0)),b[L]||(b[L]=[]),b[L].push(j>W?s:c);let he=Math.max(j,W),Re=he-L;for(;Re<u&&he<g&&t(r[Re],e[he]);)Re++,he++,b[L].push("equal");return he}let M,B=0;do{for(M=-B;M<m;M++)v[M]=y(M);for(M=m+B;M>m;M--)v[M]=y(M);v[m]=y(m),B++}while(v[m]!==g);return b[m].slice(1)}function Np(r,e,t){r.insertBefore(t,r.childNodes[e]||null)}function Op(r){const e=r.parentNode;e&&e.removeChild(r)}function ts(r){return r&&r.nodeType===Node.COMMENT_NODE}function ns(r){if(r){if(r.defaultView)return r instanceof r.defaultView.Document;if(r.ownerDocument&&r.ownerDocument.defaultView)return r instanceof r.ownerDocument.defaultView.Node}return!1}ml.fastDiff=kf;var bl=p(6062),ct=p.n(bl),Bp=p(9315),zw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Bp.Z,zw),Bp.Z.locals;class kl extends kt{constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),xt.isBlink&&!xt.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new D("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!xt.isAndroid)return;let e=null;const t=!(xt.isBlink&&!xt.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=Oe._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;Tn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Lp(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),o=this._diffNodeLists(t,n),s=this._findReplaceActions(o,t,n);if(s.indexOf("replace")!==-1){const c={equal:0,insert:0,delete:0};for(const u of s)if(u==="replace"){const g=c.equal+c.insert,m=c.equal+c.delete,b=e.getChild(g);!b||b.is("uiElement")||b.is("rawElement")||this._updateElementMappings(b,t[m]),Op(n[g]),c.equal++}else c[u]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?Oe._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Sn(t.parent)&&Tn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Tn(e))throw new D("view-renderer-filler-was-lost",this);qs(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(c){if(c.getAttribute("contenteditable")=="false")return!1;const u=c.findAncestor(g=>g.hasAttribute("contenteditable"));return!u||u.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,s=e.nodeAfter;return!(o instanceof Qt||s instanceof Qt)&&(!xt.isAndroid||!o&&!s)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let o=this.domConverter.viewToDom(e).data;const s=t.inlineFillerPosition;s&&s.parent==e.parent&&s.offset==e.index&&(o=gl+o),Fp(n,o)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),o=e.getAttributeKeys();for(const s of o)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(xt.isAndroid){let v=null;for(const y of Array.from(n.childNodes)){if(v&&Sn(v)&&Sn(y)){n.normalize();break}v=y}}const o=t.inlineFillerPosition,s=n.childNodes,c=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&Lp(n.ownerDocument,c,o.offset);const u=this._diffNodeLists(s,c),g=xt.isAndroid?this._findReplaceActions(u,s,c,{replaceText:!0}):u;let m=0;const b=new Set;for(const v of g)v==="delete"?(b.add(s[m]),Op(s[m])):v!=="equal"&&v!=="replace"||m++;m=0;for(const v of g)v==="insert"?(Np(n,m,c[m]),m++):v==="replace"?(Fp(s[m],c[m].data),m++):v==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(c[m])),m++);for(const v of b)v.parentNode||this.domConverter.unbindDomElement(v)}_diffNodeLists(e,t){return ml(e=function(n,o){const s=Array.from(n);return s.length==0||!o||s[s.length-1]==o&&s.pop(),s}(e,this._fakeSelectionContainer),t,zp.bind(null,this.domConverter))}_findReplaceActions(e,t,n,o={}){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let s=[],c=[],u=[];const g={equal:0,insert:0,delete:0};for(const m of e)m==="insert"?u.push(n[g.equal+g.insert]):m==="delete"?c.push(t[g.equal+g.delete]):(s=s.concat(ml(c,u,o.replaceText?lu:Rp).map(b=>b==="equal"?"replace":b)),s.push("equal"),c=[],u=[]),g[m]++;return s.concat(ml(c,u,o.replaceText?lu:Rp).map(m=>m==="equal"?"replace":m))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(xt.isBlink&&!xt.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&xt.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(c){const u=c.createElement("div");return u.className="ck-fake-selection-container",Object.assign(u.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),u.textContent="\xA0",u}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=t.getSelection(),s=t.createRange();o.removeAllRanges(),s.selectNodeContents(n),o.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),xt.isGecko&&function(s,c){const u=s.parent;if(u.nodeType!=Node.ELEMENT_NODE||s.offset!=u.childNodes.length-1)return;const g=u.childNodes[s.offset];g&&g.tagName=="BR"&&c.addRange(c.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Lp(r,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(Sn(o))return o.data=gl+o.data,o;{const s=r.createTextNode(gl);return Array.isArray(e)?n.splice(t,0,s):Np(e,t,s),s}}function Rp(r,e){return ns(r)&&ns(e)&&!Sn(r)&&!Sn(e)&&!ts(r)&&!ts(e)&&r.tagName.toLowerCase()===e.tagName.toLowerCase()}function lu(r,e){return ns(r)&&ns(e)&&Sn(r)&&Sn(e)}function zp(r,e,t){return e===t||(Sn(e)&&Sn(t)?e.data===t.data:!(!r.isBlockFiller(e)||!r.isBlockFiller(t)))}function Fp(r,e){const t=r.data;if(t==e)return;const n=kf(t,e);for(const o of n)o.type==="insert"?r.insertData(o.index,o.values.join("")):r.deleteData(o.index,o.howMany)}function du(r){let e=0;for(;r.previousSibling;)r=r.previousSibling,e++;return e}function jp(r){const e=[];let t=r;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}const Vp=au(oe.document),wf=bf(oe.document),Fw=Jn(oe.document),ec="data-ck-unsafe-attribute-",_f="data-ck-unsafe-element";class wl{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?oe.document:oe.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new hi,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Zo(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)o.appendChild(s[0]);const c=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),u=[];let g;for(;g=c.nextNode();)u.push(g);for(const m of u){for(const v of m.getAttributeNames())this.setDomElementAttribute(m,v,m.getAttribute(v));const b=m.tagName.toLowerCase();this._shouldRenameElement(b)&&(Up(b),m.replaceWith(this._createReplacementDomElement(b,m)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(Up(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);s||z("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(ec+t)&&s&&e.removeAttribute(ec+t),e.setAttribute(s?t:ec+t,n)}removeDomElementAttribute(e,t){t!=_f&&(e.removeAttribute(t),e.removeAttribute(ec+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const s of e.getChildren()){n===o&&(yield this._getBlockFiller());const c=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");c&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(c&&z("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return Tn(n)&&(o+=7),{parent:n,offset:o}}{let n,o,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const c=e.nodeBefore;if(o=c.is("$text")?this.findCorrespondingDomText(c):this.mapViewToDom(c),!o)return null;n=o.parentNode,s=o.nextSibling}return Sn(s)&&Tn(s)?{parent:s,offset:7}:{parent:n,offset:o?du(o)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(ts(e)&&t.skipComments)return null;if(Sn(e)){if(qs(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new Qt(this.document,o)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new yi(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const s=e.attributes;if(s)for(let c=s.length,u=0;u<c;u++)o._setAttribute(s[u].name,s[u].value);if(this._isViewElementWithRawContent(o,t)||ts(e)){const c=ts(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",c),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const s of this.domChildrenToView(e,t))o._appendChild(s);return o}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],s=this.domToView(o,t);s!==null&&(yield s)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;Sn(o)&&(o=o.parentNode);const s=this.fakeSelectionToView(o);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const s=e.getRangeAt(o),c=this.domRangeToView(s);c&&n.push(c)}return new Zo(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new dt(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,du(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return Oe._createBefore(n);if(Sn(e)){if(qs(e))return this.domPositionToView(e.parentNode,du(e));const o=this.findCorrespondingViewText(e);let s=t;return o?(Tn(e)&&(s-=7,s=s<0?0:s),new Oe(o,s)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new Oe(o,0)}else{const o=e.childNodes[t-1];if(Sn(o)&&qs(o))return this.domPositionToView(o.parentNode,du(o));const s=Sn(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(s&&s.parent)return new Oe(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(qs(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const s=o.nextSibling;return s instanceof Qt?s:null}}else{const o=this.mapDomToView(e.parentNode);if(o){const s=o.getChild(0);return s instanceof Qt?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=oe.window,s=[];vf(t,c=>{const{scrollLeft:u,scrollTop:g}=c;s.push([u,g])}),t.focus(),vf(t,c=>{const[u,g]=s.shift();c.scrollLeft=u,c.scrollTop=g}),oe.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(Vp):!(e.tagName!=="BR"||!_l(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(Fw)||function(t,n){return t.isEqualNode(wf)&&_l(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=jp(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return bf(this._domDocument);case"markedNbsp":return Jn(this._domDocument);case"br":return au(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Sn(e)&&Tn(e)&&t<7||this.isElement(e)&&Tn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(m,b){return jp(m).some(v=>v.tagName&&b.includes(v.tagName.toLowerCase()))}(e,this.preElements))return pl(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),s=this._checkShouldLeftTrimDomText(e,n),c=this._checkShouldRightTrimDomText(e,o);s&&(t=t.replace(/^ /,"")),c&&(t=t.replace(/ $/,"")),t=pl(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const u=o&&this.isElement(o)&&o.tagName!="BR",g=o&&Sn(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||u||g)&&(t=t.replace(/\u00A0$/," ")),(s||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Tn(e)}_getTouchingInlineViewNode(e,t){const n=new Yi({startPosition:t?Oe._createAfter(e):Oe._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let s=!0,c=e;do if(!s&&c[n]?c=c[n]:c[o]?(c=c[o],s=!1):(c=c.parentNode,s=!0),!c||this._isBlockElement(c))return null;while(!Sn(c)&&c.tagName!="BR"&&!this._isInlineObjectElement(c));return c}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(ts(e))return new es(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Zn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(_f,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function vf(r,e){let t=r;for(;t;)e(t),t=t.parentElement}function _l(r,e){const t=r.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Up(r){r==="script"&&z("domconverter-unsafe-script-element-detected"),r==="style"&&z("domconverter-unsafe-style-element-detected")}function vl(r){const e=Object.prototype.toString.apply(r);return e=="[object Window]"||e=="[object global]"}function Al(r){return class extends r{listenTo(e,t,n,o={}){if(ns(e)||vl(e)){const s={capture:!!o.useCapture,passive:!!o.usePassive},c=this._getProxyEmitter(e,s)||new Hp(e,s);this.listenTo(c,t,n,o)}else de.prototype.listenTo.call(this,e,t,n,o)}stopListening(e,t,n){if(ns(e)||vl(e)){const o=this._getAllProxyEmitters(e);for(const s of o)this.stopListening(s,t,n)}else de.prototype.stopListening.call(this,e,t,n)}_getProxyEmitter(e,t){return function(n,o){const s=n[ie];return s&&s[o]?s[o].emitter:null}(this,Wp(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}}const uu=Al(de);["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(r=>{Al[r]=uu.prototype[r]});class Hp extends de{constructor(e,t){super(),le(this,Wp(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),de.prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){de.prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Wp(r,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=T())}(r);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}class ro extends uu{constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Af=xp(function(r,e){wr(e,wn(e),r)});class is{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Af(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class os extends ro{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new is(this.view,t,n))}}class Cf extends os{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return $s(this)}};this.fire(e.type,e,t)}}const _t=function(){return ue.Date.now()};var jw=/\s/;const Vw=function(r){for(var e=r.length;e--&&jw.test(r.charAt(e)););return e};var Cl=/^\s+/;const Yp=function(r){return r&&r.slice(0,Vw(r)+1).replace(Cl,"")};var Uw=/^[-+]0x[0-9a-f]+$/i,Hw=/^0b[01]+$/i,so=/^0o[0-7]+$/i,Ww=parseInt;const yl=function(r){if(typeof r=="number")return r;if(Hs(r))return NaN;if(Je(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=Je(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=Yp(r);var t=Hw.test(r);return t||so.test(r)?Ww(r.slice(2),t?2:8):Uw.test(r)?NaN:+r};var yf=Math.max,$p=Math.min;const tc=function(r,e,t){var n,o,s,c,u,g,m=0,b=!1,v=!1,y=!0;if(typeof r!="function")throw new TypeError("Expected a function");function M(he){var Re=n,st=o;return n=o=void 0,m=he,c=r.apply(st,Re)}function B(he){return m=he,u=setTimeout(j,e),b?M(he):c}function L(he){var Re=he-g;return g===void 0||Re>=e||Re<0||v&&he-m>=s}function j(){var he=_t();if(L(he))return W(he);u=setTimeout(j,function(Re){var st=e-(Re-g);return v?$p(st,s-(Re-m)):st}(he))}function W(he){return u=void 0,y&&n?M(he):(n=o=void 0,c)}function X(){var he=_t(),Re=L(he);if(n=arguments,o=this,g=he,Re){if(u===void 0)return B(g);if(v)return clearTimeout(u),u=setTimeout(j,e),M(g)}return u===void 0&&(u=setTimeout(j,e)),c}return e=yl(e)||0,Je(t)&&(b=!!t.leading,s=(v="maxWait"in t)?yf(yl(t.maxWait)||0,e):s,y="trailing"in t?!!t.trailing:y),X.cancel=function(){u!==void 0&&clearTimeout(u),m=0,n=g=o=u=void 0},X.flush=function(){return u===void 0?c:W(_t())},X};class $i extends ro{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=tc(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Zo(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Pt.arrowleft&&e!=Pt.arrowup||n.setTo(n.getFirstPosition()),e!=Pt.arrowright&&e!=Pt.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}const rs=function(r){return this.__data__.set(r,"__lodash_hash_undefined__"),this},xf=function(r){return this.__data__.has(r)};function xl(r){var e=-1,t=r==null?0:r.length;for(this.__data__=new Os;++e<t;)this.add(r[e])}xl.prototype.add=xl.prototype.push=rs,xl.prototype.has=xf;const hu=xl,qp=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n;)if(e(r[t],t,r))return!0;return!1},Ef=function(r,e){return r.has(e)},Df=function(r,e,t,n,o,s){var c=1&t,u=r.length,g=e.length;if(u!=g&&!(c&&g>u))return!1;var m=s.get(r),b=s.get(e);if(m&&b)return m==e&&b==r;var v=-1,y=!0,M=2&t?new hu:void 0;for(s.set(r,e),s.set(e,r);++v<u;){var B=r[v],L=e[v];if(n)var j=c?n(L,B,v,e,r,s):n(B,L,v,r,e,s);if(j!==void 0){if(j)continue;y=!1;break}if(M){if(!qp(e,function(W,X){if(!Ef(M,X)&&(B===W||o(B,W,t,n,s)))return M.push(X)})){y=!1;break}}else if(B!==L&&!o(B,L,t,n,s)){y=!1;break}}return s.delete(r),s.delete(e),y},Sf=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n,o){t[++e]=[o,n]}),t},Tf=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n){t[++e]=n}),t};var Er=ge?ge.prototype:void 0,Mf=Er?Er.valueOf:void 0;const ss=function(r,e,t,n,o,s,c){switch(t){case"[object DataView]":if(r.byteLength!=e.byteLength||r.byteOffset!=e.byteOffset)return!1;r=r.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(r.byteLength!=e.byteLength||!s(new Zr(r),new Zr(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Nn(+r,+e);case"[object Error]":return r.name==e.name&&r.message==e.message;case"[object RegExp]":case"[object String]":return r==e+"";case"[object Map]":var u=Sf;case"[object Set]":var g=1&n;if(u||(u=Tf),r.size!=e.size&&!g)return!1;var m=c.get(r);if(m)return m==e;n|=2,c.set(r,e);var b=Df(u(r),u(e),n,o,s,c);return c.delete(r),b;case"[object Symbol]":if(Mf)return Mf.call(r)==Mf.call(e)}return!1};var Gp=Object.prototype.hasOwnProperty;const Kp=function(r,e,t,n,o,s){var c=1&t,u=_r(r),g=u.length;if(g!=_r(e).length&&!c)return!1;for(var m=g;m--;){var b=u[m];if(!(c?b in e:Gp.call(e,b)))return!1}var v=s.get(r),y=s.get(e);if(v&&y)return v==e&&y==r;var M=!0;s.set(r,e),s.set(e,r);for(var B=c;++m<g;){var L=r[b=u[m]],j=e[b];if(n)var W=c?n(j,L,b,e,r,s):n(L,j,b,r,e,s);if(!(W===void 0?L===j||o(L,j,t,n,s):W)){M=!1;break}B||(B=b=="constructor")}if(M&&!B){var X=r.constructor,he=e.constructor;X==he||!("constructor"in r)||!("constructor"in e)||typeof X=="function"&&X instanceof X&&typeof he=="function"&&he instanceof he||(M=!1)}return s.delete(r),s.delete(e),M};var fu="[object Arguments]",Qp="[object Array]",gu="[object Object]",Zp=Object.prototype.hasOwnProperty;const Jp=function(r,e,t,n,o,s){var c=qn(r),u=qn(e),g=c?Qp:vr(r),m=u?Qp:vr(e),b=(g=g==fu?gu:g)==gu,v=(m=m==fu?gu:m)==gu,y=g==m;if(y&&qr(r)){if(!qr(e))return!1;c=!0,b=!1}if(y&&!b)return s||(s=new Bs),c||$c(r)?Df(r,e,t,n,o,s):ss(r,e,g,t,n,o,s);if(!(1&t)){var M=b&&Zp.call(r,"__wrapped__"),B=v&&Zp.call(e,"__wrapped__");if(M||B){var L=M?r.value():r,j=B?e.value():e;return s||(s=new Bs),o(L,j,t,n,s)}}return!!y&&(s||(s=new Bs),Kp(r,e,t,n,o,s))},If=function r(e,t,n,o,s){return e===t||(e==null||t==null||!it(e)&&!it(t)?e!=e&&t!=t:Jp(e,t,n,o,r,s))},Yw=function(r,e,t){var n=(t=typeof t=="function"?t:void 0)?t(r,e):void 0;return n===void 0?If(r,e,void 0,t):!!n};class Pf extends ro{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,o=new Set;for(const c of e){const u=t.mapDomToView(c.target);u&&(u.is("uiElement")||u.is("rawElement")||c.type!=="childList"||this._isBogusBrMutation(c)||o.add(u))}for(const c of e){const u=t.mapDomToView(c.target);if((!u||!u.is("uiElement")&&!u.is("rawElement"))&&c.type==="characterData"){const g=t.findCorrespondingViewText(c.target);g&&!o.has(g.parent)?n.add(g):!g&&Tn(c.target)&&o.add(t.mapDomToView(c.target.parentNode))}}let s=!1;for(const c of n)s=!0,this.renderer.markToSync("text",c);for(const c of o){const u=t.mapViewToDom(c),g=Array.from(c.getChildren()),m=Array.from(t.domChildrenToView(u,{withChildren:!1}));Yw(g,m,Xp)||(s=!0,this.renderer.markToSync("children",c))}s&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function Xp(r,e){if(!Array.isArray(r))return r===e||!(!r.is("$text")||!e.is("$text"))&&r.data===e.data}class Ni extends ro{constructor(e){super(e),this.mutationObserver=e.getObserver(Pf),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=tc(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=tc(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(o,s)=>{this.document.isComposing&&!xt.isAndroid||(this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Xo extends os{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.change(()=>{}),50)}),t.on("blur",(n,o)=>{const s=t.selection.editableElement;s!==null&&s!==o.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class $w extends os{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class em{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),o=Array.from(t.items||[]);return n.length?n:o.filter(s=>s.kind==="file").map(s=>s.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class pu extends os{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,o=n.document;let s=null,c=null,u=[];if(e.dataTransfer&&(s=new em(e.dataTransfer)),e.data!==null?c=e.data:s&&(c=s.getData("text/plain")),o.selection.isFake)u=Array.from(o.selection.getRanges());else if(t.length)u=t.map(g=>n.domConverter.domRangeToView(g));else if(xt.isAndroid){const g=e.target.ownerDocument.defaultView.getSelection();u=Array.from(n.domConverter.domSelectionToView(g).getRanges())}xt.isAndroid&&e.inputType=="insertCompositionText"&&c&&c.endsWith(`
`)?this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(u[0].end)]}):this.fire(e.type,e,{data:c,dataTransfer:s,targetRanges:u,inputType:e.inputType,isComposing:e.isComposing})}}function er(r,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);n.concat(o).forEach(s=>{if(s in r.prototype||typeof t=="function"&&(s=="length"||s=="name"||s=="prototype"))return;const c=Object.getOwnPropertyDescriptor(t,s);c.enumerable=!1,Object.defineProperty(r.prototype,s,c)})})}class tm{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}const Nf=function(r){return typeof r=="string"||!qn(r)&&it(r)&&qe(r)=="[object String]"};function nm(r,e,t={},n=[]){const o=t&&t.xmlns,s=o?r.createElementNS(o,e):r.createElement(e);for(const c in t)s.setAttribute(c,t[c]);!Nf(n)&&Ai(n)||(n=[n]);for(let c of n)Nf(c)&&(c=r.createTextNode(c)),s.appendChild(c);return s}class fn{constructor(e,t){fn._observerInstance||fn._createObserver(),this._element=e,this._callback=t,fn._addElementCallback(e,t),fn._observerInstance.observe(e)}destroy(){fn._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){fn._elementCallbacks||(fn._elementCallbacks=new Map);let n=fn._elementCallbacks.get(e);n||(n=new Set,fn._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=fn._getElementCallbacks(e);n&&(n.delete(t),n.size||(fn._elementCallbacks.delete(e),fn._observerInstance.unobserve(e))),fn._elementCallbacks&&!fn._elementCallbacks.size&&(fn._observerInstance=null,fn._elementCallbacks=null)}static _getElementCallbacks(e){return fn._elementCallbacks?fn._elementCallbacks.get(e):null}static _createObserver(){fn._observerInstance=new oe.window.ResizeObserver(e=>{for(const t of e){const n=fn._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}function ao(r){return!!(r&&r.getClientRects&&r.getClientRects().length)}function yn(r){const e=r.next();return e.done?null:e.value}fn._observerInstance=null,fn._elementCallbacks=null;class co extends Al(kt){constructor(){super(),this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new D("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class To{constructor(){this._listener=new uu}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+$s(n),n)})}set(e,t,n={}){const o=pf(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(c,u)=>{t(u,()=>{u.preventDefault(),u.stopPropagation(),c.stop()}),c.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+$s(e),e)}destroy(){this._listener.stopListening()}}class im extends ro{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((o=n.keyCode)==Pt.arrowright||o==Pt.arrowleft||o==Pt.arrowup||o==Pt.arrowdown)){const s=new Ja(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(s,n),s.stop.called&&t.stop()}var o})}observe(){}}class mu extends ro{constructor(e){super(e);const t=this.document;t.on("keydown",(n,o)=>{if(!this.isEnabled||o.keyCode!=Pt.tab||o.ctrlKey)return;const s=new Ja(t,"tab",t.selection.getFirstRange());t.fire(s,o),s.stop.called&&n.stop()})}observe(){}}function El(r){return Object.prototype.toString.apply(r)=="[object Range]"}function Dl(r){const e=r.ownerDocument.defaultView.getComputedStyle(r);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const bu=["top","right","bottom","left","width","height"];class mn{constructor(e){const t=El(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Sl(e)||t)if(t){const n=mn.getDomRangeRects(e);ku(this,mn.getBoundingRect(n))}else ku(this,e.getBoundingClientRect());else if(vl(e)){const{innerWidth:n,innerHeight:o}=e;ku(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else ku(this,e)}clone(){return new mn(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new mn(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!Of(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!Of(n);){const o=new mn(n),s=t.getIntersection(o);if(!s)return null;s.getArea()<t.getArea()&&(t=s),n=n.parentNode}}return t}isEqual(e){for(const t of bu)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(vl(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const s=Dl(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new mn(o));else{let o=e.startContainer;Sn(o)&&(o=o.parentNode);const s=new mn(o.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new mn(t))}}function ku(r,e){for(const t of bu)r[t]=e[t]}function Of(r){return!!Sl(r)&&r===r.ownerDocument.body}function Sl(r){return r!==null&&typeof r=="object"&&r.nodeType===1&&typeof r.getBoundingClientRect=="function"}function om(r,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),s=new mn(r).excludeScrollbarsAndBorders();if(![o,n].every(c=>s.contains(c))){let{scrollX:c,scrollY:u}=r;Lf(o,s)?u-=s.top-e.top+t:rm(n,s)&&(u+=e.bottom-s.bottom+t),tr(e,s)?c-=s.left-e.left+t:Rf(e,s)&&(c+=e.right-s.right+t),r.scrollTo(c,u)}}function Bf(r,e){const t=wu(r);let n,o;for(;r!=t.document.body;)o=e(),n=new mn(r).excludeScrollbarsAndBorders(),n.contains(o)||(Lf(o,n)?r.scrollTop-=n.top-o.top:rm(o,n)&&(r.scrollTop+=o.bottom-n.bottom),tr(o,n)?r.scrollLeft-=n.left-o.left:Rf(o,n)&&(r.scrollLeft+=o.right-n.right)),r=r.parentNode}function rm(r,e){return r.bottom>e.bottom}function Lf(r,e){return r.top<e.top}function tr(r,e){return r.left<e.left}function Rf(r,e){return r.right>e.right}function wu(r){return El(r)?r.startContainer.ownerDocument.defaultView:r.ownerDocument.defaultView}function qw(r){if(El(r)){let e=r.commonAncestorContainer;return Sn(e)&&(e=e.parentNode),e}return r.parentNode}function zf(r,e){const t=wu(r),n=new mn(r);if(t===e)return n;{let o=t;for(;o!=e;){const s=o.frameElement,c=new mn(s).excludeScrollbarsAndBorders();n.moveBy(c.left,c.top),o=o.parent}}return n}class Gw extends kt{constructor(e){super(),this.document=new tu(e),this.domConverter=new wl(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new kl(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting","isComposing").to(this.document,"isFocused","isSelecting","isComposing"),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new ou(this.document),this.addObserver(Pf),this.addObserver(Ni),this.addObserver(Xo),this.addObserver(Cf),this.addObserver($i),this.addObserver($w),this.addObserver(im),this.addObserver(pu),this.addObserver(mu),this.document.on("arrowKey",Gs,{priority:"low"}),nu(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const o={};for(const{name:c,value:u}of Array.from(e.attributes))o[c]=u,c==="class"?this._writer.addClass(u.split(" "),n):this._writer.setAttribute(c,u,n);this._initialDomRootAttributes.set(e,o);const s=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};s(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(c,u)=>this._renderer.markToSync("children",u)),n.on("change:attributes",(c,u)=>this._renderer.markToSync("attributes",u)),n.on("change:text",(c,u)=>this._renderer.markToSync("text",u)),n.on("change:isReadOnly",()=>this.change(s)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const c of this._observers.values())c.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:o})=>t.removeAttribute(o));const n=this._initialDomRootAttributes.get(t);for(const o in n)t.setAttribute(o,n[o]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,o]of this.domRoots)t.observe(o,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&function({target:t,viewportOffset:n=0}){const o=wu(t);let s=o,c=null;for(;s;){let u;u=qw(s==o?t:c),Bf(u,()=>zf(t,s));const g=zf(t,s);if(om(s,g,n),s.parent!=s){if(c=s.frameElement,s=s.parent,!c)return}else s=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new D("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){D.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return Oe._createAt(e,t)}createPositionAfter(e){return Oe._createAfter(e)}createPositionBefore(e){return Oe._createBefore(e)}createRange(...e){return new dt(...e)}createRangeOn(e){return dt._createOn(e)}createRangeIn(e){return dt._createIn(e)}createSelection(...e){return new Zo(...e)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class as{is(){throw new Error("is() method is abstract")}}class mi extends as{constructor(e){super(),this.parent=null,this._attrs=si(e)}get document(){return null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new D("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new D("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=ri(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}_clone(e){return new mi(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=si(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}mi.prototype.is=function(r){return r==="node"||r==="model:node"};class Ks{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new D("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new D("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof mi))throw new D("model-nodelist-insertnodes-not-node",this);this._nodes=function(n,o,s,c){if(Math.max(o.length,n.length)>1e4)return n.slice(0,s).concat(o).concat(n.slice(s+c,n.length));{const u=Array.from(n);return u.splice(s,c,...o),u}}(this._nodes,Array.from(t),e,0)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class Zt extends mi{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new Zt(this.data,this.getAttributes())}static fromJSON(e){return new Zt(e.data,e.attributes)}}Zt.prototype.is=function(r){return r==="$text"||r==="model:$text"||r==="text"||r==="model:text"||r==="node"||r==="model:node"};class qi extends as{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.offsetSize)throw new D("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new D("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}qi.prototype.is=function(r){return r==="$textProxy"||r==="model:$textProxy"||r==="textProxy"||r==="model:textProxy"};class Vt extends mi{constructor(e,t,n){super(t),this.name=e,this._children=new Ks,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new Vt(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new Zt(o)]:(Ai(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new Zt(s):s instanceof qi?new Zt(s.data,s.getAttributes()):s))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}static fromJSON(e){let t;if(e.children){t=[];for(const n of e.children)n.name?t.push(Vt.fromJSON(n)):t.push(Zt.fromJSON(n))}return new Vt(e.name,e.attributes,t)}}Vt.prototype.is=function(r,e){return e?e===this.name&&(r==="element"||r==="model:element"):r==="element"||r==="model:element"||r==="node"||r==="model:node"};class Oi{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new D("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new D("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=Ae._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,o,s;do o=this.position,s=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o,this._visitedParent=s)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};const o=Qs(t,n),s=o||cs(t,n,o);if(s instanceof Vt)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=s),this.position=t,et("elementStart",s,e,t,1);if(s instanceof Zt){let c;if(this.singleCharacters)c=1;else{let m=s.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<m&&(m=this.boundaries.end.offset),c=m-t.offset}const u=t.offset-s.startOffset,g=new qi(s,u,c);return t.offset+=c,this.position=t,et("text",g,e,t,c)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():et("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};const o=t.parent,s=Qs(t,o),c=s||sm(t,o,s);if(c instanceof Vt)return t.offset--,this.shallow?(this.position=t,et("elementStart",c,e,t,1)):(t.path.push(c.maxOffset),this.position=t,this._visitedParent=c,this.ignoreElementEnd?this._previous():et("elementEnd",c,e,t));if(c instanceof Zt){let u;if(this.singleCharacters)u=1;else{let b=c.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>b&&(b=this.boundaries.start.offset),u=t.offset-b}const g=t.offset-c.startOffset,m=new qi(c,g-u,u);return t.offset-=u,this.position=t,et("text",m,e,t,u)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,et("elementStart",n,e,t,1)}}function et(r,e,t,n,o){return{done:!1,value:{type:r,item:e,previousPosition:t,nextPosition:n,length:o}}}class Ae extends as{constructor(e,t,n="toNone"){if(super(),!e.is("element")&&!e.is("documentFragment"))throw new D("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new D("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new D("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new D("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Qs(this,this.parent)}get nodeAfter(){const e=this.parent;return cs(this,e,Qs(this,e))}get nodeBefore(){const e=this.parent;return sm(this,e,Qs(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=ri(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Oi(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=ri(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){if(this.root!==e.root)return!1;const t=Math.min(this.path.length,e.path.length);for(let n=0;n<t;n++){const o=this.path[n]-e.path[n];if(o<-1||o>1)return!1;if(o===1)return _u(e,this,n);if(o===-1)return _u(this,e,n)}return this.path.length===e.path.length||(this.path.length>e.path.length?vu(this.path,t):vu(e.path,t))}hasSameParentAs(e){return this.root!==e.root?!1:ri(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=Ae._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?Ae._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=Ae._createAt(this);if(this.root!=e.root)return n;if(ri(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(ri(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;if(e.offset<=this.path[o]){if(e.offset+t>this.path[o])return null;n.path[o]-=t}}return n}_getTransformedByInsertion(e,t){const n=Ae._createAt(this);if(this.root!=e.root)return n;if(ri(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(ri(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;e.offset<=this.path[o]&&(n.path[o]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return Ae._createAt(this);const o=this._getTransformedByDeletion(e,n);return o===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):o._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,o=Ae._createAt(t);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-e.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof Ae)return new Ae(e.root,e.path,e.stickiness);{const o=e;if(t=="end")t=o.maxOffset;else{if(t=="before")return this._createBefore(o,n);if(t=="after")return this._createAfter(o,n);if(t!==0&&!t)throw new D("model-createpositionat-offset-required",[this,e])}if(!o.is("element")&&!o.is("documentFragment"))throw new D("model-position-parent-incorrect",[this,e]);const s=o.getPath();return s.push(t),new this(o.root,s,n)}}static _createAfter(e,t){if(!e.parent)throw new D("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new D("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new Ae(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new D("model-position-fromjson-no-root",t,{rootName:e.root});return new Ae(t.getRoot(e.root),e.path,e.stickiness)}}function Qs(r,e){const t=e.getChild(e.offsetToIndex(r.offset));return t&&t.is("$text")&&t.startOffset<r.offset?t:null}function cs(r,e,t){return t!==null?null:e.getChild(e.offsetToIndex(r.offset))}function sm(r,e,t){return t!==null?null:e.getChild(e.offsetToIndex(r.offset)-1)}function _u(r,e,t){return t+1!==r.path.length&&!!vu(e.path,t+1)&&!!function(n,o){let s=n.parent,c=n.path.length-1,u=0;for(;c>=o;){if(n.path[c]+u!==s.maxOffset)return!1;u=1,c--,s=s.parent}return!0}(r,t+1)}function vu(r,e){for(;e<r.length;){if(r[e]!==0)return!1;e++}return!0}Ae.prototype.is=function(r){return r==="position"||r==="model:position"};class se extends as{constructor(e,t){super(),this.start=Ae._createAt(e),this.end=t?Ae._createAt(t):Ae._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new Oi({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return ri(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}containsItem(e){const t=Ae._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new se(this.start,e.start)),this.containsPosition(e.end)&&t.push(new se(e.end,this.end))):t.push(new se(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new se(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let o=this.start,s=this.end;return e.start.isBefore(o)&&(o=e.start),e.end.isAfter(s)&&(s=e.end),new se(o,s)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=Ae._createAt(this.start);let o=n.parent;for(;n.path.length>t+1;){const s=o.maxOffset-n.offset;s!==0&&e.push(new se(n,n.getShiftedBy(s))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const s=this.end.path[n.path.length-1],c=s-n.offset;c!==0&&e.push(new se(n,n.getShiftedBy(c))),n.offset=s,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new Oi(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Oi(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Oi(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new se(this.start,this.end)]}getTransformedByOperations(e){const t=[new se(this.start,this.end)];for(const n of e)for(let o=0;o<t.length;o++){const s=t[o].getTransformedByOperation(n);t.splice(o,1,...s),o+=s.length-1}for(let n=0;n<t.length;n++){const o=t[n];for(let s=n+1;s<t.length;s++){const c=t[s];(o.containsRange(c)||c.containsRange(o)||o.isEqual(c))&&t.splice(s,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,o=e.howMany,s=e.targetPosition;return this._getTransformedByMove(n,s,o,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new se(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new se(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=Ae._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new se(t,n)):new se(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new se(this.start,e),new se(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const o=new se(this.start,this.end);return o.start=o.start._getTransformedByInsertion(e,t),o.end=o.end._getTransformedByInsertion(e,t),[o]}}_getTransformedByMove(e,t,n,o=!1){if(this.isCollapsed){const v=this.start._getTransformedByMove(e,t,n);return[new se(v)]}const s=se._createFromPositionAndShift(e,n),c=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!o&&(s.containsPosition(this.start)||s.containsPosition(this.end))){const v=this.start._getTransformedByMove(e,t,n),y=this.end._getTransformedByMove(e,t,n);return[new se(v,y)]}let u;const g=this.getDifference(s);let m=null;const b=this.getIntersection(s);if(g.length==1?m=new se(g[0].start._getTransformedByDeletion(e,n),g[0].end._getTransformedByDeletion(e,n)):g.length==2&&(m=new se(this.start,this.end._getTransformedByDeletion(e,n))),u=m?m._getTransformedByInsertion(c,n,b!==null||o):[],b){const v=new se(b.start._getCombined(s.start,c),b.end._getCombined(s.start,c));u.length==2?u.splice(1,0,v):u.push(v)}return u}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),o=this.end._getTransformedByDeletion(e,t);return n==null&&o==null?null:(n==null&&(n=e),o==null&&(o=e),new se(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return new this(Ae._createAt(e,0),Ae._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(Ae._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new D("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((s,c)=>s.start.isAfter(c.start)?1:-1);const n=e.indexOf(t),o=new this(t.start,t.end);if(n>0)for(let s=n-1;e[s].end.isEqual(o.start);s++)o.start=Ae._createAt(e[s].start);for(let s=n+1;s<e.length&&e[s].start.isEqual(o.end);s++)o.end=Ae._createAt(e[s].end);return o}static fromJSON(e,t){return new this(Ae.fromJSON(e.start,t),Ae.fromJSON(e.end,t))}}se.prototype.is=function(r){return r==="range"||r==="model:range"};class am extends de{constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new D("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),o=this._viewToModelMapping.get(n),s=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=Ae._createAt(o,s)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const o of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(o);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const o=this._elementToMarkerNames.get(e)||new Set;o.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,o)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const o=this._elementToMarkerNames.get(e);o&&(o.delete(t),o.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new se(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new dt(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const o of t)if(o.is("attributeElement"))for(const s of o.getElementsWithSameId())n.add(s);else n.add(o);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let o=0;for(let s=0;s<t;s++)o+=this.getModelLength(e.getChild(s));return o}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,o=0,s=0,c=0;if(e.is("$text"))return new Oe(e,t);for(;s<t;)n=e.getChild(c),o=this.getModelLength(n),s+=o,c++;return s==t?this._moveViewPositionToTextNode(new Oe(e,c)):this.findPositionIn(n,t-(s-o))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof Qt?new Oe(t,t.data.length):n instanceof Qt?new Oe(n,0):e}}class Kw{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=Tl(t),e instanceof qi&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=Tl(t),e instanceof qi&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=Tl(t),e instanceof qi&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const o=n.get(t);return o===void 0?null:o}revert(e,t){t=Tl(t),e instanceof qi&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,o]of this._consumable)for(const[s,c]of o){const u=s.split(":")[0];c&&e==u&&t.push({event:s,item:n.name||n.description})}if(t.length)throw new D("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const o=n.get(e.endOffset);o&&(t=o.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,o=e.parent,s=Symbol("$textProxy:"+e.data);let c,u;return c=this._textProxyRegistry.get(t),c||(c=new Map,this._textProxyRegistry.set(t,c)),u=c.get(n),u||(u=new Map,c.set(n,u)),u.set(o,s),s}}function Tl(r){const e=r.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?r:e.length>1?e[0]+":"+e[1]:e[0]}class cm extends de{constructor(e){super(),this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const o=this._createConversionApi(n,e.getRefreshedItems());for(const c of e.getMarkersToRemove())this._convertMarkerRemove(c.name,c.range,o);const s=this._reduceChanges(e.getChanges());for(const c of s)c.type==="insert"?this._convertInsert(se._createFromPositionAndShift(c.position,c.length),o):c.type==="reinsert"?this._convertReinsert(se._createFromPositionAndShift(c.position,c.length),o):c.type==="remove"?this._convertRemove(c.position,c.length,c.name,o):this._convertAttribute(c.range,c.attributeKey,c.attributeOldValue,c.attributeNewValue,o);for(const c of o.mapper.flushUnboundMarkerNames()){const u=t.get(c).getRange();this._convertMarkerRemove(c,u,o),this._convertMarkerAdd(c,u,o)}for(const c of e.getMarkersToAdd())this._convertMarkerAdd(c.name,c.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(e,t,n,o={}){const s=this._createConversionApi(n,void 0,o);this._convertInsert(e,s);for(const[c,u]of t)this._convertMarkerAdd(c,u,s);s.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const o=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),s=this._createConversionApi(n);if(this._addConsumablesForSelection(s.consumable,e,o),this.fire("selection",{selection:e},s),e.isCollapsed){for(const c of o){const u=c.getRange();if(!lm(e.getFirstPosition(),c,s.mapper))continue;const g={item:e,markerName:c.name,markerRange:u};s.consumable.test(e,"addMarker:"+c.name)&&this.fire(`addMarker:${c.name}`,g,s)}for(const c of e.getAttributeKeys()){const u={item:e,range:e.getFirstRange(),attributeKey:c,attributeOldValue:null,attributeNewValue:e.getAttribute(c)};s.consumable.test(e,"attribute:"+u.attributeKey)&&this.fire(`attribute:${u.attributeKey}:$text`,u,s)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const o of Array.from(e.getWalker({shallow:!0})).map(dm))this._testAndFire("insert",o,t)}_convertRemove(e,t,n,o){this.fire(`remove:${n}`,{position:e,length:t},o)}_convertAttribute(e,t,n,o,s){this._addConsumablesForRange(s.consumable,e,`attribute:${t}`);for(const c of e){const u={item:c.item,range:se._createFromPositionAndShift(c.previousPosition,c.length),attributeKey:t,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${t}`,u,s)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const o of n.map(dm))this._testAndFire("insert",{...o,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const o=`addMarker:${e}`;if(n.consumable.add(t,o),this.fire(o,{markerName:e,markerRange:t},n),n.consumable.consume(t,o)){this._addConsumablesForRange(n.consumable,t,o);for(const s of t.getItems()){if(!n.consumable.test(s,o))continue;const c={item:s,range:se._createOn(s),markerName:e,markerRange:t};this.fire(o,c,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire(`removeMarker:${e}`,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const o=n.item;if(e.test(o,"insert")===null){e.add(o,"insert");for(const s of o.getAttributeKeys())e.add(o,"attribute:"+s)}}return e}_addConsumablesForRange(e,t,n){for(const o of t.getItems())e.add(o,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const o of n)e.add(t,"addMarker:"+o.name);for(const o of t.getAttributeKeys())e.add(t,"attribute:"+o);return e}_testAndFire(e,t,n){const o=function(g,m){const b=m.item.is("element")?m.item.name:"$text";return`${g}:${b}`}(e,t),s=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,c=this._firedEventsMap.get(n),u=c.get(s);if(u){if(u.has(o))return;u.add(o)}else c.set(s,new Set([o]));this.fire(o,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:se._createOn(e)};for(const o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,t)}_createConversionApi(e,t=new Set,n={}){const o={...this._conversionApi,consumable:new Kw,writer:e,options:n,convertItem:s=>this._convertInsert(se._createOn(s),o),convertChildren:s=>this._convertInsert(se._createIn(s),o,{doNotAddConsumables:!0}),convertAttributes:s=>this._testAndFireAddAttributes(s,o),canReuseView:s=>!t.has(o.mapper.toModelElement(s))};return this._firedEventsMap.set(o,new Map),o}}function lm(r,e,t){const n=e.getRange(),o=Array.from(r.getAncestors());return o.shift(),o.reverse(),!o.some(s=>{if(n.containsItem(s))return!!t.toViewElement(s).getCustomProperty("addHighlight")})}function dm(r){return{item:r.item,range:se._createFromPositionAndShift(r.previousPosition,r.length)}}class nr extends Ie(as){constructor(...e){super(),this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e.length&&this.setTo(...e)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new se(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new se(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new se(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]);else if(t instanceof nr)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof se)this._setRanges([t],!!o&&!!o.backward);else if(t instanceof Ae)this._setRanges([new se(t)]);else if(t instanceof mi){const s=!!o&&!!o.backward;let c;if(n=="in")c=se._createIn(t);else if(n=="on")c=se._createOn(t);else{if(n===void 0)throw new D("model-selection-setto-required-second-parameter",[this,t]);c=new se(Ae._createAt(t,n))}this._setRanges([c],s)}else{if(!Ai(t))throw new D("model-selection-setto-not-selectable",[this,t]);this._setRanges(t,o&&!!o.backward)}}_setRanges(e,t=!1){const n=Array.from(e),o=n.some(s=>{if(!(s instanceof se))throw new D("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(c=>!c.isEqual(s))});(n.length!==this._ranges.length||o)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0}))}setFocus(e,t){if(this.anchor===null)throw new D("model-selection-setfocus-no-ranges",[this,e]);const n=Ae._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new se(n,o)),this._lastRangeBackward=!0):(this._pushRange(new se(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=bi(t.start,e);n&&Ml(n,t)&&(yield n);for(const s of t.getWalker()){const c=s.item;s.type=="elementEnd"&&Dr(c,e,t)&&(yield c)}const o=bi(t.end,e);o&&!t.end.isTouching(Ae._createAt(o,0))&&Ml(o,t)&&(yield o)}}containsEntireContent(e=this.anchor.root){const t=Ae._createAt(e,0),n=Ae._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new se(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new D("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_replaceAllRanges(e){this._removeAllRanges();for(const t of e)this._pushRange(t)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function um(r,e){return!e.has(r)&&(e.add(r),r.root.document.model.schema.isBlock(r)&&!!r.parent)}function Dr(r,e,t){return um(r,e)&&Ml(r,t)}function bi(r,e){const t=r.parent.root.document.model.schema,n=r.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const s=n.find(c=>!o&&(o=t.isLimit(c),!o&&um(c,e)));return n.forEach(c=>e.add(c)),s}function Ml(r,e){const t=function(n){const o=n.root.document.model.schema;let s=n.parent;for(;s;){if(o.isBlock(s))return s;s=s.parent}}(r);return t?!e.containsRange(se._createOn(t),!0):!0}nr.prototype.is=function(r){return r==="selection"||r==="model:selection"};class Mo extends Ie(se){constructor(e,t){super(e,t),Ff.call(this)}detach(){this.stopListening()}toRange(){return new se(this.start,this.end)}static fromRange(e){return new Mo(e.start,e.end)}}function Ff(){this.listenTo(this.root.document.model,"applyOperation",(r,e)=>{const t=e[0];t.isDocumentOperation&&Qw.call(this,t)},{priority:"low"})}function Qw(r){const e=this.getTransformedByOperation(r),t=se._createFromRanges(e),n=!t.isEqual(this),o=function(c,u){switch(u.type){case"insert":return c.containsPosition(u.position);case"move":case"remove":case"reinsert":case"merge":return c.containsPosition(u.sourcePosition)||c.start.isEqual(u.sourcePosition)||c.containsPosition(u.targetPosition);case"split":return c.containsPosition(u.splitPosition)||c.containsPosition(u.insertionPosition)}return!1}(this,r);let s=null;if(n){t.root.rootName=="$graveyard"&&(s=r.type=="remove"?r.sourcePosition:r.deletionPosition);const c=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",c,{deletionPosition:s})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:s})}Mo.prototype.is=function(r){return r==="liveRange"||r==="model:liveRange"||r=="range"||r==="model:range"};const Il="selection:";class ki extends Ie(as){constructor(e){super(),this._selection=new hm(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(...e){this._selection.setTo(...e)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return Il+e}static _isStoreAttributeKey(e){return e.startsWith(Il)}}ki.prototype.is=function(r){return r==="selection"||r=="model:selection"||r=="documentSelection"||r=="model:documentSelection"};class hm extends nr{constructor(e){super(),this.markers=new Wi({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(t,n,o,s)=>{this._updateMarker(n,s)}),this.listenTo(this._document,"change",(t,n)=>{(function(o,s){const c=o.document.differ;for(const u of c.getChanges()){if(u.type!="insert")continue;const g=u.position.parent;u.length===g.maxOffset&&o.enqueueChange(s,m=>{const b=Array.from(g.getAttributeKeys()).filter(v=>v.startsWith(Il));for(const v of b)m.removeAttribute(v,g)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...e){super.setTo(...e),this._updateAttributes(!0),this.updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this.updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=T();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new D("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this.updateMarkers()}_replaceAllRanges(e){this._validateSelectionRanges(e),super._replaceAllRanges(e)}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_validateSelectionRanges(e){for(const t of e)if(!this._document._validateSelectionRange(t))throw new D("document-selection-wrong-position",this,{range:t})}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=Mo.fromRange(e);return t.on("change:range",(n,o,s)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=s.deletionPosition;const c=this._ranges.indexOf(t);this._ranges.splice(c,1),t.detach()}}),t}updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const o of this._model.markers){const s=o.name.split(":",1)[0];if(!this._observedMarkers.has(s))continue;const c=o.getRange();for(const u of this.getRanges())c.containsRange(u,!u.isCollapsed)&&e.push(o)}const n=Array.from(this.markers);for(const o of e)this.markers.has(o)||(this.markers.add(o),t=!0);for(const o of Array.from(this.markers))e.includes(o)||(this.markers.remove(o),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1;const s=Array.from(this.markers),c=this.markers.has(e);if(t){let u=!1;for(const g of this.getRanges())if(t.containsRange(g,!g.isCollapsed)){u=!0;break}u&&!c?(this.markers.add(e),o=!0):!u&&c&&(this.markers.remove(e),o=!0)}else c&&(this.markers.remove(e),o=!0);o&&this.fire("change:marker",{oldMarkers:s,directChange:!1})}_updateAttributes(e){const t=si(this._getSurroundingAttributes()),n=si(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[s,c]of this._attributePriority)c=="low"&&(this._attrs.delete(s),this._attributePriority.delete(s));this._setAttributesTo(t);const o=[];for(const[s,c]of this.getAttributes())n.has(s)&&n.get(s)===c||o.push(s);for(const[s]of n)this.hasAttribute(s)||o.push(s);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(e,t,n=!0){const o=n?"normal":"low";return o=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,o),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,o]of this.getAttributes())e.get(n)!==o&&this._removeAttribute(n,!1);for(const[n,o]of e)this._setAttribute(n,o,!1)&&t.add(n);return t}*getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(Il)&&(yield[t.substr(Il.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const o=e.textNode?e.textNode:e.nodeBefore,s=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=Pl(o)),n||(n=Pl(s)),!this.isGravityOverridden&&!n){let c=o;for(;c&&!t.isInline(c)&&!n;)c=c.previousSibling,n=Pl(c)}if(!n){let c=s;for(;c&&!t.isInline(c)&&!n;)c=c.nextSibling,n=Pl(c)}n||(n=this.getStoredAttributes())}else{const o=this.getFirstRange();for(const s of o){if(s.item.is("element")&&t.isObject(s.item))break;if(s.type=="text"){n=s.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function Pl(r){return r instanceof qi||r instanceof Zt?r.getAttributes():null}class fm{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}const Zs=function(r){return nl(r,5)};class Zw extends fm{elementToElement(e){return this.add(function(t){const n=Vf(t.model),o=Nl(t.view,"container");return n.attributes.length&&(n.children=!0),s=>{s.on(`insert:${n.name}`,function(c,u=pm){return(g,m,b)=>{if(!u(m.item,b.consumable,{preflight:!0}))return;const v=c(m.item,b,m);if(!v)return;u(m.item,b.consumable);const y=b.mapper.toViewPosition(m.range.start);b.mapper.bindElements(m.item,v),b.writer.insert(y,v),b.convertAttributes(m.item),Wf(v,m.item.getChildren(),b,{reconversion:m.reconversion})}}(o,Hf(n)),{priority:t.converterPriority||"normal"}),(n.children||n.attributes.length)&&s.on("reduceChanges",Cu(n),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){const n=Vf(t.model),o=Nl(t.view,"container");return n.children=!0,s=>{if(s._conversionApi.schema.checkChild(n.name,"$text"))throw new D("conversion-element-to-structure-disallowed-text",s,{elementName:n.name});var c,u;s.on(`insert:${n.name}`,(c=o,u=Hf(n),(g,m,b)=>{if(!u(m.item,b.consumable,{preflight:!0}))return;const v=new Map;b.writer._registerSlotFactory(function(B,L,j){return(W,X="children")=>{const he=W.createContainerElement("$slot");let Re=null;if(X==="children")Re=Array.from(B.getChildren());else{if(typeof X!="function")throw new D("conversion-slot-mode-unknown",j.dispatcher,{modeOrFilter:X});Re=Array.from(B.getChildren()).filter(st=>X(st))}return L.set(he,Re),he}}(m.item,v,b));const y=c(m.item,b,m);if(b.writer._clearSlotFactory(),!y)return;(function(B,L,j){const W=Array.from(L.values()).flat(),X=new Set(W);if(X.size!=W.length)throw new D("conversion-slot-filter-overlap",j.dispatcher,{element:B});if(X.size!=B.childCount)throw new D("conversion-slot-filter-incomplete",j.dispatcher,{element:B})})(m.item,v,b),u(m.item,b.consumable);const M=b.mapper.toViewPosition(m.range.start);b.mapper.bindElements(m.item,y),b.writer.insert(M,y),b.convertAttributes(m.item),function(B,L,j,W){j.mapper.on("modelToViewPosition",Re,{priority:"highest"});let X=null,he=null;for([X,he]of L)Wf(B,he,j,W),j.writer.move(j.writer.createRangeIn(X),j.writer.createPositionBefore(X)),j.writer.remove(X);function Re(st,Rt){const $t=Rt.modelPosition.nodeAfter,Br=he.indexOf($t);Br<0||(Rt.viewPosition=Rt.mapper.findPositionIn(X,Br))}j.mapper.off("modelToViewPosition",Re)}(y,v,b,{reconversion:m.reconversion})}),{priority:t.converterPriority||"normal"}),s.on("reduceChanges",Cu(n),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){let n=(t=Zs(t)).model;typeof n=="string"&&(n={key:n});let o=`attribute:${n.key}`;if(n.name&&(o+=":"+n.name),n.values)for(const c of n.values)t.view[c]=Nl(t.view[c],"attribute");else t.view=Nl(t.view,"attribute");const s=Au(t);return c=>{c.on(o,function(u){return(g,m,b)=>{if(!b.consumable.test(m.item,g.name))return;const v=u(m.attributeOldValue,b,m),y=u(m.attributeNewValue,b,m);if(!v&&!y)return;b.consumable.consume(m.item,g.name);const M=b.writer,B=M.document.selection;if(m.item instanceof nr||m.item instanceof ki)M.wrap(B.getFirstRange(),y);else{let L=b.mapper.toViewRange(m.range);m.attributeOldValue!==null&&v&&(L=M.unwrap(L,v)),m.attributeNewValue!==null&&y&&M.wrap(L,y)}}}(s),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){let n=(t=Zs(t)).model;typeof n=="string"&&(n={key:n});let o=`attribute:${n.key}`;if(n.name&&(o+=":"+n.name),n.values)for(const c of n.values)t.view[c]=Uf(t.view[c]);else t.view=Uf(t.view);const s=Au(t);return c=>{var u;c.on(o,(u=s,(g,m,b)=>{if(!b.consumable.test(m.item,g.name))return;const v=u(m.attributeOldValue,b,m),y=u(m.attributeNewValue,b,m);if(!v&&!y)return;b.consumable.consume(m.item,g.name);const M=b.mapper.toViewElement(m.item),B=b.writer;if(!M)throw new D("conversion-attribute-to-attribute-on-text",b.dispatcher,m);if(m.attributeOldValue!==null&&v)if(v.key=="class"){const L=un(v.value);for(const j of L)B.removeClass(j,M)}else if(v.key=="style"){const L=Object.keys(v.value);for(const j of L)B.removeStyle(j,M)}else B.removeAttribute(v.key,M);if(m.attributeNewValue!==null&&y)if(y.key=="class"){const L=un(y.value);for(const j of L)B.addClass(j,M)}else if(y.key=="style"){const L=Object.keys(y.value);for(const j of L)B.setStyle(j,y.value[j],M)}else B.setAttribute(y.key,y.value,M)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){const n=Nl(t.view,"ui");return o=>{var s;o.on(`addMarker:${t.model}`,(s=n,(c,u,g)=>{u.isOpening=!0;const m=s(u,g);u.isOpening=!1;const b=s(u,g);if(!m||!b)return;const v=u.markerRange;if(v.isCollapsed&&!g.consumable.consume(v,c.name))return;for(const B of v)if(!g.consumable.consume(B.item,c.name))return;const y=g.mapper,M=g.writer;M.insert(y.toViewPosition(v.start),m),g.mapper.bindElementToMarker(m,u.markerName),v.isCollapsed||(M.insert(y.toViewPosition(v.end),b),g.mapper.bindElementToMarker(b,u.markerName)),c.stop()}),{priority:t.converterPriority||"normal"}),o.on(`removeMarker:${t.model}`,(c,u,g)=>{const m=g.mapper.markerNameToElements(u.markerName);if(m){for(const b of m)g.mapper.unbindElementFromMarkerName(b,u.markerName),g.writer.clear(g.writer.createRangeOn(b),b);g.writer.clearClonedElementsGroup(u.markerName),c.stop()}},{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var o;n.on(`addMarker:${t.model}`,(o=t.view,(s,c,u)=>{if(!c.item||!(c.item instanceof nr||c.item instanceof ki||c.item.is("$textProxy")))return;const g=Js(o,c,u);if(!g||!u.consumable.consume(c.item,s.name))return;const m=u.writer,b=gm(m,g),v=m.document.selection;if(c.item instanceof nr||c.item instanceof ki)m.wrap(v.getFirstRange(),b);else{const y=u.mapper.toViewRange(c.range),M=m.wrap(y,b);for(const B of M.getItems())if(B.is("attributeElement")&&B.isSimilar(b)){u.mapper.bindElementToMarker(B,c.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on(`addMarker:${t.model}`,function(s){return(c,u,g)=>{if(!u.item||!(u.item instanceof Vt))return;const m=Js(s,u,g);if(!m||!g.consumable.test(u.item,c.name))return;const b=g.mapper.toViewElement(u.item);if(b&&b.getCustomProperty("addHighlight")){g.consumable.consume(u.item,c.name);for(const v of se._createIn(u.item))g.consumable.consume(v.item,c.name);b.getCustomProperty("addHighlight")(b,m,g.writer),g.mapper.bindElementToMarker(b,u.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on(`removeMarker:${t.model}`,function(s){return(c,u,g)=>{if(u.markerRange.isCollapsed)return;const m=Js(s,u,g);if(!m)return;const b=gm(g.writer,m),v=g.mapper.markerNameToElements(u.markerName);if(v){for(const y of v)g.mapper.unbindElementFromMarkerName(y,u.markerName),y.is("attributeElement")?g.writer.unwrap(g.writer.createRangeOn(y),b):y.getCustomProperty("removeHighlight")(y,m.id,g.writer);g.writer.clearClonedElementsGroup(u.markerName),c.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){const n=(t=Zs(t)).model;let o=t.view;return o||(o=s=>({group:n,name:s.substr(t.model.length+1)})),s=>{var c;s.on(`addMarker:${n}`,(c=o,(u,g,m)=>{const b=c(g.markerName,m);if(!b)return;const v=g.markerRange;m.consumable.consume(v,u.name)&&(jf(v,!1,m,g,b),jf(v,!0,m,g,b),u.stop())}),{priority:t.converterPriority||"normal"}),s.on(`removeMarker:${n}`,function(u){return(g,m,b)=>{const v=u(m.markerName,b);if(!v)return;const y=b.mapper.markerNameToElements(m.markerName);if(y){for(const B of y)b.mapper.unbindElementFromMarkerName(B,m.markerName),B.is("containerElement")?(M(`data-${v.group}-start-before`,B),M(`data-${v.group}-start-after`,B),M(`data-${v.group}-end-before`,B),M(`data-${v.group}-end-after`,B)):b.writer.clear(b.writer.createRangeOn(B),B);b.writer.clearClonedElementsGroup(m.markerName),g.stop()}function M(B,L){if(L.hasAttribute(B)){const j=new Set(L.getAttribute(B).split(","));j.delete(v.name),j.size==0?b.writer.removeAttribute(B,L):b.writer.setAttribute(B,Array.from(j).join(","),L)}}}}(o),{priority:t.converterPriority||"normal"})}}(e))}}function gm(r,e){const t=r.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function jf(r,e,t,n,o){const s=e?r.start:r.end,c=s.nodeAfter&&s.nodeAfter.is("element")?s.nodeAfter:null,u=s.nodeBefore&&s.nodeBefore.is("element")?s.nodeBefore:null;if(c||u){let g,m;e&&c||!e&&!u?(g=c,m=!0):(g=u,m=!1);const b=t.mapper.toViewElement(g);if(b)return void function(v,y,M,B,L,j){const W=`data-${j.group}-${y?"start":"end"}-${M?"before":"after"}`,X=v.hasAttribute(W)?v.getAttribute(W).split(","):[];X.unshift(j.name),B.writer.setAttribute(W,X.join(","),v),B.mapper.bindElementToMarker(v,L.markerName)}(b,e,m,t,n,o)}(function(g,m,b,v,y){const M=`${y.group}-${m?"start":"end"}`,B=y.name?{name:y.name}:null,L=b.writer.createUIElement(M,B);b.writer.insert(g,L),b.mapper.bindElementToMarker(L,v.markerName)})(t.mapper.toViewPosition(s),e,t,n,o)}function Vf(r){return typeof r=="string"&&(r={name:r}),r.attributes?Array.isArray(r.attributes)||(r.attributes=[r.attributes]):r.attributes=[],r.children=!!r.children,r}function Nl(r,e){return typeof r=="function"?r:(t,n)=>function(o,s,c){typeof o=="string"&&(o={name:o});let u;const g=s.writer,m=Object.assign({},o.attributes);if(c=="container")u=g.createContainerElement(o.name,m);else if(c=="attribute"){const b={priority:o.priority||Ws.DEFAULT_PRIORITY};u=g.createAttributeElement(o.name,m,b)}else u=g.createUIElement(o.name,m);if(o.styles){const b=Object.keys(o.styles);for(const v of b)g.setStyle(v,o.styles[v],u)}if(o.classes){const b=o.classes;if(typeof b=="string")g.addClass(b,u);else for(const v of b)g.addClass(v,u)}return u}(r,n,e)}function Au(r){return r.model.values?(e,t,n)=>{const o=r.view[e];return o?o(e,t,n):null}:r.view}function Uf(r){return typeof r=="string"?e=>({key:r,value:e}):typeof r=="object"?r.value?()=>r:e=>({key:r.key,value:e}):r}function Js(r,e,t){const n=typeof r=="function"?r(e,t):r;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function Cu(r){const e=function(t){return(n,o)=>{if(!n.is("element",t.name))return!1;if(o.type=="attribute"){if(t.attributes.includes(o.attributeKey))return!0}else if(t.children)return!0;return!1}}(r);return(t,n)=>{const o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const s of n.changes){const c=s.type=="attribute"?s.range.start.nodeAfter:s.position.parent;if(c&&e(c,s)){if(!n.reconvertedElements.has(c)){n.reconvertedElements.add(c);const u=Ae._createBefore(c);o.push({type:"remove",name:c.name,position:u,length:1},{type:"reinsert",name:c.name,position:u,length:1})}}else o.push(s)}n.changes=o}}function Hf(r){return(e,t,n={})=>{const o=["insert"];for(const s of r.attributes)e.hasAttribute(s)&&o.push(`attribute:${s}`);return!!o.every(s=>t.test(e,s))&&(n.preflight||o.forEach(s=>t.consume(e,s)),!0)}}function Wf(r,e,t,n){for(const o of e)yu(r.root,o,t,n)||t.convertItem(o)}function yu(r,e,t,n){const{writer:o,mapper:s}=t;if(!n.reconversion)return!1;const c=s.toViewElement(e);return!(!c||c.root==r)&&!!t.canReuseView(c)&&(o.move(o.createRangeOn(c),s.toViewPosition(Ae._createBefore(e))),!0)}function pm(r,e,{preflight:t}={}){return t?e.test(r,"insert"):e.consume(r,"insert")}function Io(r){const{schema:e,document:t}=r.model;for(const n of t.getRootNames()){const o=t.getRoot(n);if(o.isEmpty&&!e.checkChild(o,"$text")&&e.checkChild(o,"paragraph"))return r.insertElement("paragraph",o),!0}return!1}function ls(r,e,t){const n=t.createContext(r);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function mm(r,e){const t=e.createElement("paragraph");return e.insert(t,r),e.createPositionAt(t,0)}class bm extends fm{elementToElement(e){return this.add(km(e))}elementToAttribute(e){return this.add(function(t){wm(t=Zs(t));const n=_m(t,!1),o=Yf(t.view),s=o?`element:${o}`:"element";return c=>{c.on(s,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=Zs(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(s){typeof s.view=="string"&&(s.view={key:s.view});const c=s.view.key;let u;return c=="class"||c=="style"?u={[c=="class"?"classes":"styles"]:s.view.value}:u={attributes:{[c]:s.view.value===void 0?/[\s\S]*/:s.view.value}},s.view.name&&(u.name=s.view.name),s.view=u,c}(t)),wm(t,n);const o=_m(t,!0);return s=>{s.on("element",o,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){const n=function(o){return(s,c)=>{const u=typeof o=="string"?o:o(s,c);return c.writer.createElement("$marker",{"data-name":u})}}(t.model);return km({...t,model:n})}(e))}dataToMarker(e){return this.add(function(t){(t=Zs(t)).model||(t.model=c=>c?t.view+":"+c:t.view);const n={view:t.view,model:t.model},o=$f(vm(n,"start")),s=$f(vm(n,"end"));return c=>{c.on(`element:${t.view}-start`,o,{priority:t.converterPriority||"normal"}),c.on(`element:${t.view}-end`,s,{priority:t.converterPriority||"normal"});const u=I.get("low"),g=I.get("highest"),m=I.get(t.converterPriority)/g;c.on("element",function(b){return(v,y,M)=>{const B=`data-${b.view}`;function L(j,W){for(const X of W){const he=b.model(X,M),Re=M.writer.createElement("$marker",{"data-name":he});M.writer.insert(Re,j),y.modelCursor.isEqual(j)?y.modelCursor=y.modelCursor.getShiftedBy(1):y.modelCursor=y.modelCursor._getTransformedByInsertion(j,1),y.modelRange=y.modelRange._getTransformedByInsertion(j,1)[0]}}(M.consumable.test(y.viewItem,{attributes:B+"-end-after"})||M.consumable.test(y.viewItem,{attributes:B+"-start-after"})||M.consumable.test(y.viewItem,{attributes:B+"-end-before"})||M.consumable.test(y.viewItem,{attributes:B+"-start-before"}))&&(y.modelRange||Object.assign(y,M.convertChildren(y.viewItem,y.modelCursor)),M.consumable.consume(y.viewItem,{attributes:B+"-end-after"})&&L(y.modelRange.end,y.viewItem.getAttribute(B+"-end-after").split(",")),M.consumable.consume(y.viewItem,{attributes:B+"-start-after"})&&L(y.modelRange.end,y.viewItem.getAttribute(B+"-start-after").split(",")),M.consumable.consume(y.viewItem,{attributes:B+"-end-before"})&&L(y.modelRange.start,y.viewItem.getAttribute(B+"-end-before").split(",")),M.consumable.consume(y.viewItem,{attributes:B+"-start-before"})&&L(y.modelRange.start,y.viewItem.getAttribute(B+"-start-before").split(",")))}}(n),{priority:u+m})}}(e))}}function km(r){const e=$f(r=Zs(r)),t=Yf(r.view),n=t?`element:${t}`:"element";return o=>{o.on(n,e,{priority:r.converterPriority||"normal"})}}function Yf(r){return typeof r=="string"?r:typeof r=="object"&&typeof r.name=="string"?r.name:null}function $f(r){const e=new hi(r.view);return(t,n,o)=>{const s=e.match(n.viewItem);if(!s)return;const c=s.match;if(c.name=!0,!o.consumable.test(n.viewItem,c))return;const u=function(g,m,b){return g instanceof Function?g(m,b):b.writer.createElement(g)}(r.model,n.viewItem,o);u&&o.safeInsert(u,n.modelCursor)&&(o.consumable.consume(n.viewItem,c),o.convertChildren(n.viewItem,u),o.updateConversionResult(u,n))}}function wm(r,e=null){const t=e===null||(s=>s.getAttribute(e)),n=typeof r.model!="object"?r.model:r.model.key,o=typeof r.model!="object"||r.model.value===void 0?t:r.model.value;r.model={key:n,value:o}}function _m(r,e){const t=new hi(r.view);return(n,o,s)=>{if(!o.modelRange&&e)return;const c=t.match(o.viewItem);if(!c||(function(b,v){const y=typeof b=="function"?b(v):b;return typeof y=="object"&&!Yf(y)?!1:!y.classes&&!y.attributes&&!y.styles}(r.view,o.viewItem)?c.match.name=!0:delete c.match.name,!s.consumable.test(o.viewItem,c.match)))return;const u=r.model.key,g=typeof r.model.value=="function"?r.model.value(o.viewItem,s):r.model.value;if(g===null)return;o.modelRange||Object.assign(o,s.convertChildren(o.viewItem,o.modelCursor)),function(b,v,y,M){let B=!1;for(const L of Array.from(b.getItems({shallow:y})))M.schema.checkAttribute(L,v.key)&&(B=!0,L.hasAttribute(v.key)||M.writer.setAttribute(v.key,v.value,L));return B}(o.modelRange,{key:u,value:g},e,s)&&(s.consumable.test(o.viewItem,{name:!0})&&(c.match.name=!0),s.consumable.consume(o.viewItem,c.match))}}function vm(r,e){return{view:`${r.view}-${e}`,model:(t,n)=>{const o=t.getAttribute("name"),s=r.model(o,n);return n.writer.createElement("$marker",{"data-name":s})}}}class Jw extends kt{constructor(e,t){super(),this.model=e,this.view=new Gw(t),this.mapper=new am,this.downcastDispatcher=new cm({mapper:this.mapper,schema:e.schema});const n=this.model.document,o=n.selection,s=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(c=>{this.downcastDispatcher.convertChanges(n.differ,s,c),this.downcastDispatcher.convertSelection(o,s,c)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(c,u){return(g,m)=>{const b=m.newSelection,v=[];for(const M of b.getRanges())v.push(u.toModelRange(M));const y=c.createSelection(v,{backward:b.isBackward});y.isEqual(c.document.selection)||c.change(M=>{M.setSelection(y)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(c,u,g)=>{if(!g.consumable.consume(u.item,c.name))return;const m=g.writer,b=g.mapper.toViewPosition(u.range.start),v=m.createText(u.item.data);m.insert(b,v)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(c,u,g)=>{g.convertAttributes(u.item),u.reconversion||!u.item.is("element")||u.item.isEmpty||g.convertChildren(u.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(c,u,g)=>{const m=g.mapper.toViewPosition(u.position),b=u.position.getShiftedBy(u.length),v=g.mapper.toViewPosition(b,{isPhantom:!0}),y=g.writer.createRange(m,v),M=g.writer.remove(y.getTrimmed());for(const B of g.writer.createRangeIn(M).getItems())g.mapper.unbindViewElement(B,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(c,u,g)=>{const m=g.writer,b=m.document.selection;for(const v of b.getRanges())v.isCollapsed&&v.end.parent.isAttached()&&g.writer.mergeAttributes(v.start);m.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(c,u,g)=>{const m=u.selection;if(m.isCollapsed||!g.consumable.consume(m,"selection"))return;const b=[];for(const v of m.getRanges())b.push(g.mapper.toViewRange(v));g.writer.setSelection(b,{backward:m.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(c,u,g)=>{const m=u.selection;if(!m.isCollapsed||!g.consumable.consume(m,"selection"))return;const b=g.writer,v=m.getFirstPosition(),y=g.mapper.toViewPosition(v),M=b.breakAttributes(y);b.setSelection(M)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(c=>{if(c.rootName=="$graveyard")return null;const u=new Sp(this.view.document,c.name);return u.rootName=c.rootName,this.mapper.bindElements(c,u),u})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new D("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}class Xw{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new D("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class Ol{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new e_(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const c of n)c!="style"&&c!="class"&&t.attributes.push(c);const o=e.getClassNames();for(const c of o)t.classes.push(c);const s=e.getStyleNames();for(const c of s)t.styles.push(c);return t}static createFrom(e,t){if(t||(t=new Ol),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,Ol.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=Ol.createFrom(n,t);return t}}const xu=["attributes","classes","styles"];class e_{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t of xu)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t of xu)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t of xu)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t of xu)t in e&&this._revert(t,e[t])}_add(e,t){const n=qn(t)?t:[t],o=this._consumables[e];for(const s of n){if(e==="attributes"&&(s==="class"||s==="style"))throw new D("viewconsumable-invalid-attribute",this);if(o.set(s,!0),e==="styles")for(const c of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(c,!0)}}_test(e,t){const n=qn(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){const c=o.get(s);if(c===void 0)return null;if(!c)return!1}else{const c=s=="class"?"classes":"styles",u=this._test(c,[...this._consumables[c].keys()]);if(u!==!0)return u}return!0}_consume(e,t){const n=qn(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){if(o.set(s,!1),e=="styles")for(const c of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(c,!1)}else{const c=s=="class"?"classes":"styles";this._consume(c,[...this._consumables[c].keys()])}}_revert(e,t){const n=qn(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style")o.get(s)===!1&&o.set(s,!0);else{const c=s=="class"?"classes":"styles";this._revert(c,[...this._consumables[c].keys()])}}}class Am extends kt{constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new ds(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new ds(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new D("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new D("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:"is"in e&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t){if(e instanceof Ae){const n=e.nodeBefore,o=e.nodeAfter;if(!(n instanceof Vt))throw new D("schema-check-merge-no-element-before",this);if(!(o instanceof Vt))throw new D("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,o])=>{if(!o)return;const s=e(n,o);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,o])=>{const s=e(n,o);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof Ae?t=e.parent:t=(e instanceof se?[e]:Array.from(e.getRanges())).reduce((n,o)=>{const s=o.getCommonAncestor();return n?n.getCommonAncestor(s,{includeSelf:!0}):s},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new Zt("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const o of n)for(const s of o)if(this.checkAttribute(s.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const o of n)yield*o.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new se(e);let n,o;const s=e.getAncestors().reverse().find(c=>this.isLimit(c))||e.root;t!="both"&&t!="backward"||(n=new Oi({boundaries:se._createIn(s),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(o=new Oi({boundaries:se._createIn(s),startPosition:e}));for(const c of function*(u,g){let m=!1;for(;!m;){if(m=!0,u){const b=u.next();b.done||(m=!1,yield{walker:u,value:b.value})}if(g){const b=g.next();b.done||(m=!1,yield{walker:g,value:b.value})}}}(n,o)){const u=c.walker==n?"elementEnd":"elementStart",g=c.value;if(g.type==u&&this.isObject(g.item))return se._createOn(g.item);if(this.checkChild(g.nextPosition,"$text"))return new se(g.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const o=n.model;for(const[s,c]of Object.entries(t))o.schema.checkAttribute(e,s)&&n.setAttribute(s,c,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))xm(this,n,t);else{const o=se._createIn(n).getPositions();for(const s of o)xm(this,s.nodeBefore||s.parent,t)}}getAttributesWithProperty(e,t,n){const o={};for(const[s,c]of e.getAttributes()){const u=this.getAttributeProperties(s);u[t]!==void 0&&(n!==void 0&&n!==u[t]||(o[s]=c))}return o}createContext(e){return new ds(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const o of n)e[o]=Cm(t[o],o);for(const o of n)t_(e,o);for(const o of n)n_(e,o);for(const o of n)i_(e,o);for(const o of n)ym(e,o),o_(e,o);for(const o of n)r_(e,o),s_(e,o),a_(e,o);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const o=t.getItem(n);if(e.allowIn.includes(o.name)){if(n==0)return!0;{const s=this.getDefinition(o);return this._checkContextMatch(s,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,o=e.start;for(const s of e.getItems({shallow:!0}))s.is("element")&&(yield*this._getValidRangesForRange(se._createIn(s),t)),this.checkAttribute(s,t)||(n.isEqual(o)||(yield new se(n,o)),n=Ae._createAfter(s)),o=Ae._createAfter(s);n.isEqual(o)||(yield new se(n,o))}}class ds{constructor(e){if(e instanceof ds)return e;let t;t=typeof e=="string"?[e]:Array.isArray(e)?e:e.getAncestors({includeSelf:!0}),this._items=t.map(lo)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new ds([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function Cm(r,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(const s of n){const c=Object.keys(s).filter(u=>u.startsWith("is"));for(const u of c)o[u]=!!s[u]}}(r,t),Xs(r,t,"allowIn"),Xs(r,t,"allowContentOf"),Xs(r,t,"allowWhere"),Xs(r,t,"allowAttributes"),Xs(r,t,"allowAttributesOf"),Xs(r,t,"allowChildren"),Xs(r,t,"inheritTypesFrom"),function(n,o){for(const s of n){const c=s.inheritAllFrom;c&&(o.allowContentOf.push(c),o.allowWhere.push(c),o.allowAttributesOf.push(c),o.inheritTypesFrom.push(c))}}(r,t),t}function t_(r,e){const t=r[e];for(const n of t.allowChildren){const o=r[n];o&&o.allowIn.push(e)}t.allowChildren.length=0}function n_(r,e){for(const t of r[e].allowContentOf)r[t]&&c_(r,t).forEach(n=>{n.allowIn.push(e)});delete r[e].allowContentOf}function i_(r,e){for(const t of r[e].allowWhere){const n=r[t];if(n){const o=n.allowIn;r[e].allowIn.push(...o)}}delete r[e].allowWhere}function ym(r,e){for(const t of r[e].allowAttributesOf){const n=r[t];if(n){const o=n.allowAttributes;r[e].allowAttributes.push(...o)}}delete r[e].allowAttributesOf}function o_(r,e){const t=r[e];for(const n of t.inheritTypesFrom){const o=r[n];if(o){const s=Object.keys(o).filter(c=>c.startsWith("is"));for(const c of s)c in t||(t[c]=o[c])}}delete t.inheritTypesFrom}function r_(r,e){const t=r[e],n=t.allowIn.filter(o=>r[o]);t.allowIn=Array.from(new Set(n))}function s_(r,e){const t=r[e];for(const n of t.allowIn)r[n].allowChildren.push(e)}function a_(r,e){const t=r[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function Xs(r,e,t){for(const n of r){const o=n[t];typeof o=="string"?e[t].push(o):Array.isArray(o)&&e[t].push(...o)}}function c_(r,e){const t=r[e];return(n=r,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(t.name));var n}function lo(r){return typeof r=="string"||r.is("documentFragment")?{name:typeof r=="string"?r:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:r.is("element")?r.name:"$text",*getAttributeKeys(){yield*r.getAttributeKeys()},getAttribute:e=>r.getAttribute(e)}}function xm(r,e,t){for(const n of e.getAttributeKeys())r.checkAttribute(e,n)||t.removeAttribute(n,e)}class l_ extends de{constructor(e){super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi={...e,consumable:null,writer:null,store:null,convertItem:(t,n)=>this._convertItem(t,n),convertChildren:(t,n)=>this._convertChildren(t,n),safeInsert:(t,n)=>this._safeInsert(t,n),updateConversionResult:(t,n)=>this._updateConversionResult(t,n),splitToAllowedParent:(t,n)=>this._splitToAllowedParent(t,n),getSplitParts:t=>this._getSplitParts(t),keepEmptyElement:t=>this._keepEmptyElement(t)}}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(c,u){let g;for(const m of new ds(c)){const b={};for(const y of m.getAttributeKeys())b[y]=m.getAttribute(y);const v=u.createElement(m.name,b);g&&u.insert(v,g),g=Ae._createAt(v,0)}return g}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=Ol.createFrom(e),this.conversionApi.store={};const{modelRange:o}=this._convertItem(e,this._modelCursor),s=t.createDocumentFragment();if(o){this._removeEmptyElements();for(const c of Array.from(this._modelCursor.parent.getChildren()))t.append(c,s);s.markers=function(c,u){const g=new Set,m=new Map,b=se._createIn(c).getItems();for(const v of b)v.is("element","$marker")&&g.add(v);for(const v of g){const y=v.getAttribute("data-name"),M=u.createPositionBefore(v);m.has(y)?m.get(y).end=M.clone():m.set(y,new se(M.clone())),u.remove(v)}return m}(s,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,s}_convertItem(e,t){const n={viewItem:e,modelCursor:t,modelRange:null};if(e.is("element")?this.fire(`element:${e.name}`,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof se))throw new D("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:Ae._createAt(t,0);const o=new se(n);for(const s of Array.from(e.getChildren())){const c=this._convertItem(s,n);c.modelRange instanceof se&&(o.end=c.modelRange.end,n=c.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),o=this.conversionApi.writer;t.modelRange||(t.modelRange=o.createRange(o.createPositionBefore(e),o.createPositionAfter(n[n.length-1])));const s=this._cursorParents.get(e);t.modelCursor=s?o.createPositionAt(s,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:o}=this.conversionApi;let s=n.findAllowedParent(t,e);if(s){if(s===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(s)&&(s=null)}if(!s)return ls(t,e,n)?{position:mm(t,o)}:null;const c=this.conversionApi.writer.split(t,s),u=[];for(const m of c.range.getWalker())if(m.type=="elementEnd")u.push(m.item);else{const b=u.pop(),v=m.item;this._registerSplitPair(b,v)}const g=c.range.end.parent;return this._cursorParents.set(e,g),{position:c.position,cursorParent:g}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}class d_{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class Em{constructor(e){this.domParser=new DOMParser,this.domConverter=new wl(e,{renderingMode:"data"}),this.htmlWriter=new d_}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t)}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),o=t.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class u_ extends de{constructor(e,t){super(),this.model=e,this.mapper=new am,this.downcastDispatcher=new cm({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,o,s)=>{if(!s.consumable.consume(o.item,n.name))return;const c=s.writer,u=s.mapper.toViewPosition(o.range.start),g=c.createText(o.item.data);c.insert(u,g)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,s)=>{s.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||s.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new l_({schema:e.schema}),this.viewDocument=new tu(t),this.stylesProcessor=t,this.htmlProcessor=new Em(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new ou(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:s,consumable:c,writer:u})=>{let g=o.modelCursor;if(!c.test(o.viewItem))return;if(!s.checkChild(g,"$text")){if(!ls(g,"$text",s)||o.viewItem.data.trim().length==0)return;g=mm(g,u)}c.consume(o.viewItem);const m=u.createText(o.viewItem.data);u.insert(m,g),o.modelRange=u.createRange(g,g.getShiftedBy(m.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){const{modelRange:c,modelCursor:u}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=c,o.modelCursor=u}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){const{modelRange:c,modelCursor:u}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=c,o.modelCursor=u}},{priority:"lowest"}),kt.prototype.decorate.call(this,"init"),kt.prototype.decorate.call(this,"set"),kt.prototype.decorate.call(this,"get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},Io)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new D("datacontroller-get-non-existent-root",this);const o=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();const s=se._createIn(e),c=new yi(n);this.mapper.bindElements(e,c);const u=e.is("documentFragment")?e.markers:function(g){const m=[],b=g.root.document;if(!b)return new Map;const v=se._createIn(g);for(const y of b.model.markers){const M=y.getRange(),B=M.isCollapsed,L=M.start.isEqual(v.start)||M.end.isEqual(v.end);if(B&&L)m.push([y.name,M]);else{const j=v.getIntersection(M);j&&m.push([y.name,j])}}return m.sort(([y,M],[B,L])=>{if(M.end.compareWith(L.start)!=="after")return 1;if(M.start.compareWith(L.end)!=="before")return-1;switch(M.start.compareWith(L.start)){case"before":return 1;case"after":return-1;default:switch(M.end.compareWith(L.end)){case"before":return 1;case"after":return-1;default:return B.localeCompare(y)}}}),new Map(m)}(e);return this.downcastDispatcher.convert(s,u,o,t),c}init(e){if(this.model.document.version)throw new D("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new D("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const o of Object.keys(t)){const s=this.model.document.getRoot(o);n.insert(this.parse(t[o],s),s,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new D("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const s of Object.keys(n)){const c=this.model.document.getRoot(s);o.remove(o.createRangeIn(c)),o.insert(this.parse(n[s],c),c,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}class h_{constructor(e,t){this._helpers=new Map,this._downcast=un(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=un(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new D("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new D("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of qf(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of qf(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of qf(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new D("conversion-group-exists",this);const o=n?new Zw(t):new bm(t);this._helpers.set(e,o)}}function*qf(r){if(r.model.values)for(const e of r.model.values){const t={key:r.model.key,value:e},n=r.view[e],o=r.upcastAlso?r.upcastAlso[e]:void 0;yield*Dm(t,n,o)}else yield*Dm(r.model,r.view,r.upcastAlso)}function*Dm(r,e,t){if(yield{model:r,view:e},t)for(const n of un(t))yield{model:r,view:n}}class us{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},z("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:o=!1,isTyping:s=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=o,this.isTyping=s}get type(){return z("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class f_{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){const t=e;switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const n of t.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const n=this._isInInsertedElement(t.sourcePosition.parent),o=this._isInInsertedElement(t.targetPosition.parent);n||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),o||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const n=se._createFromPositionAndShift(t.position,1);for(const o of this._markerCollection.getMarkersIntersectingRange(n)){const s=o.getData();this.bufferMarkerChange(o.name,s,s)}break}case"split":{const n=t.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const n=t.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);const o=t.graveyardPosition.parent;this._markInsert(o,t.graveyardPosition.offset,1);const s=t.targetPosition.parent;this._isInInsertedElement(s)||this._markInsert(s,t.targetPosition.offset,n.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const o=this._changedMarkers.get(e);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,o=!e.range&&t.range,s=e.range&&t.range&&!e.range.isEqual(t.range);if(n||o||s)return!0}}return!1}getChanges(e={}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const o=this._changesInElement.get(n).sort((b,v)=>b.offset===v.offset?b.type!=v.type?b.type=="remove"?-1:1:0:b.offset<v.offset?-1:1),s=this._elementSnapshots.get(n),c=Sm(n.getChildren()),u=g_(s.length,o);let g=0,m=0;for(const b of u)if(b==="i")t.push(this._getInsertDiff(n,g,c[g])),g++;else if(b==="r")t.push(this._getRemoveDiff(n,g,s[m])),m++;else if(b==="a"){const v=c[g].attributes,y=s[m].attributes;let M;if(c[g].name=="$text")M=new se(Ae._createAt(n,g),Ae._createAt(n,g+1));else{const B=n.offsetToIndex(g);M=new se(Ae._createAt(n,g),Ae._createAt(n.getChild(B),0))}t.push(...this._getAttributesDiff(M,y,v)),g++,m++}else g++,m++}t.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<t.length;n++){const s=t[o],c=t[n],u=s.type=="remove"&&c.type=="remove"&&s.name=="$text"&&c.name=="$text"&&s.position.isEqual(c.position),g=s.type=="insert"&&c.type=="insert"&&s.name=="$text"&&c.name=="$text"&&s.position.parent==c.position.parent&&s.position.offset+s.length==c.position.offset,m=s.type=="attribute"&&c.type=="attribute"&&s.position.parent==c.position.parent&&s.range.isFlat&&c.range.isFlat&&s.position.offset+s.length==c.position.offset&&s.attributeKey==c.attributeKey&&s.attributeOldValue==c.attributeOldValue&&s.attributeNewValue==c.attributeNewValue;u||g||m?(s.length++,m&&(s.range.end=s.range.end.getShiftedBy(1)),t[n]=null):o=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(p_),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=se._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(e,t,n){const o={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o)}_markRemove(e,t,n){const o={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,Sm(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const o=e.offset+e.howMany,s=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<s&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<s){const c=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:o,howMany:c-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=e.howMany;else if(o<=s)if(e.offset<n.offset){const c=o-n.offset;n.offset=e.offset,n.howMany-=c,e.nodesToHandle-=c}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<s){const c=s-e.offset;n.howMany-=c,e.nodesToHandle-=c}}if(n.type=="remove"&&(o<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const c=o-n.offset;n.offset=e.offset,n.howMany-=c}else if(e.offset<s)if(o<=s){const c=n.howMany;n.howMany=e.offset-n.offset;const u=c-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:u,count:this._changeCount++})}else n.howMany-=s-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&o>n.offset){if(o>s){const c={type:"attribute",offset:s,howMany:o-s,count:this._changeCount++};this._handleChange(c,t),t.push(c)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<s&&(o>s?(e.nodesToHandle=o-s,e.offset=s):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&o>n.offset){const c={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(c,t),t.push(c),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&o<=s?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&o>=s&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:Ae._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:Ae._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const o=[];n=new Map(n);for(const[s,c]of t){const u=n.has(s)?n.get(s):null;u!==c&&o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:c,attributeNewValue:u,changeCount:this._changeCount++}),n.delete(s)}for(const[s,c]of n)o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:null,attributeNewValue:c,changeCount:this._changeCount++});return o}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),o=e.startOffset;if(n){for(const s of n)if(s.type=="insert"&&o>=s.offset&&o<s.offset+s.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const o=new se(Ae._createAt(e,t),Ae._createAt(e,t+n));for(const s of o.getItems({shallow:!0}))s.is("element")&&(this._elementSnapshots.delete(s),this._changesInElement.delete(s),this._removeAllNestedChanges(s,0,s.maxOffset))}}function Sm(r){const e=[];for(const t of r)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function g_(r,e){const t=[];let n=0,o=0;for(const s of e){if(s.offset>n){for(let c=0;c<s.offset-n;c++)t.push("e");o+=s.offset-n}if(s.type=="insert"){for(let c=0;c<s.howMany;c++)t.push("i");n=s.offset+s.howMany}else if(s.type=="remove"){for(let c=0;c<s.howMany;c++)t.push("r");n=s.offset,o+=s.howMany}else t.push(..."a".repeat(s.howMany).split("")),n=s.offset+s.howMany,o+=s.howMany}if(o<r)for(let s=0;s<r-o-n;s++)t.push("e");return t}function p_(r){const e="position"in r&&r.position.root.rootName=="$graveyard",t="range"in r&&r.range.root.rootName=="$graveyard";return!e&&!t}class m_{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new D("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let o=t-1;for(const[u,g]of this._gaps)e>u&&e<g&&(e=g),o>u&&o<g&&(o=u-1);if(o<n.baseVersion||e>this.lastOperation.baseVersion)return[];let s=this._baseVersionToOperationIndex.get(e);s===void 0&&(s=0);let c=this._baseVersionToOperationIndex.get(o);return c===void 0&&(c=this._operations.length-1),this._operations.slice(s,c+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class Eu extends Vt{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}toJSON(){return this.rootName}}function Tm(r,e){return!!(t=r.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(r.charAt(e));var t}function Mm(r,e){return!!(t=r.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}Eu.prototype.is=function(r,e){return e?e===this.name&&(r==="rootElement"||r==="model:rootElement"||r==="element"||r==="model:element"):r==="rootElement"||r==="model:rootElement"||r==="element"||r==="model:element"||r==="node"||r==="model:node"};const b_=function(){const r=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${r}|${e}(?:\u200D${e})*`,"ug")}();function k_(r,e){const t=String(r).matchAll(b_);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}const Gf="$graveyard";class w_ extends de{constructor(e){super(),this.model=e,this.history=new m_,this.selection=new ki(this),this.roots=new Wi({idProperty:"rootName"}),this.differ=new f_(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Gf),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,o,s,c)=>{const u={...n.getData(),range:s};this.differ.bufferMarkerChange(n.name,c,u),o===null&&n.on("change",(g,m)=>{const b=n.getData();this.differ.bufferMarkerChange(n.name,{...b,range:m},b)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(Gf)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new D("model-document-createroot-name-exists",this,{name:t});const n=new Eu(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=Gf)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=Ci(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,o=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(o)||t.createRange(o)}_validateSelectionRange(e){return Im(e.start)&&Im(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function Im(r){const e=r.textNode;if(e){const t=e.data,n=r.offset-e.startOffset;return!Tm(t,n)&&!Mm(t,n)}return!0}class __ extends de{constructor(){super(),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof nc?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,o=!1){const s=e instanceof nc?e.name:e;if(s.includes(","))throw new D("markercollection-incorrect-marker-name",this);const c=this._markers.get(s);if(c){const m=c.getData(),b=c.getRange();let v=!1;return b.isEqual(t)||(c._attachLiveRange(Mo.fromRange(t)),v=!0),n!=c.managedUsingOperations&&(c._managedUsingOperations=n,v=!0),typeof o=="boolean"&&o!=c.affectsData&&(c._affectsData=o,v=!0),v&&this.fire(`update:${s}`,c,b,t,m),c}const u=Mo.fromRange(t),g=new nc(s,u,n,o);return this._markers.set(s,g),this.fire(`update:${s}`,g,null,t,{...g.getData(),range:null}),g}_remove(e){const t=e instanceof nc?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire(`update:${t}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof nc?e.name:e,n=this._markers.get(t);if(!n)throw new D("markercollection-refresh-marker-not-exists",this);const o=n.getRange();this.fire(`update:${t}`,n,o,o,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}class nc extends Ie(as){constructor(e,t,n,o){super(),this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new D("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new D("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new D("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new D("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new D("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}nc.prototype.is=function(r){return r==="marker"||r==="model:marker"};class uo{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e,t){return new this(e.baseVersion)}}function Kf(r,e){const t=Nm(e),n=t.reduce((c,u)=>c+u.offsetSize,0),o=r.parent;ic(r);const s=r.index;return o._insertChild(s,t),ea(o,s+t.length),ea(o,s),new se(r,r.getShiftedBy(n))}function Pm(r){if(!r.isFlat)throw new D("operation-utils-remove-range-not-flat",this);const e=r.start.parent;ic(r.start),ic(r.end);const t=e._removeChildren(r.start.index,r.end.index-r.start.index);return ea(e,r.start.index),t}function Bl(r,e){if(!r.isFlat)throw new D("operation-utils-move-range-not-flat",this);const t=Pm(r);return Kf(e=e._getTransformedByDeletion(r.start,r.end.offset-r.start.offset),t)}function Nm(r){const e=[];(function t(n){if(typeof n=="string")e.push(new Zt(n));else if(n instanceof qi)e.push(new Zt(n.data,n.getAttributes()));else if(n instanceof mi)e.push(n);else if(Ai(n))for(const o of n)t(o)})(r);for(let t=1;t<e.length;t++){const n=e[t],o=e[t-1];n instanceof Zt&&o instanceof Zt&&Om(n,o)&&(e.splice(t-1,2,new Zt(o.data+n.data,o.getAttributes())),t--)}return e}function ea(r,e){const t=r.getChild(e-1),n=r.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&Om(t,n)){const o=new Zt(t.data+n.data,t.getAttributes());r._removeChildren(e-1,2),r._insertChild(e-1,o)}}function ic(r){const e=r.textNode,t=r.parent;if(e){const n=r.offset-e.startOffset,o=e.index;t._removeChildren(o,1);const s=new Zt(e.data.substr(0,n),e.getAttributes()),c=new Zt(e.data.substr(n),e.getAttributes());t._insertChild(o,[s,c])}}function Om(r,e){const t=r.getAttributes(),n=e.getAttributes();for(const o of t){if(o[1]!==e.getAttribute(o[0]))return!1;n.next()}return n.next().done}const Bm=function(r,e){return If(r,e)};class Ln extends uo{constructor(e,t,n,o,s){super(s),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new Ln(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Ln(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new D("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Bm(e.getAttribute(this.key),this.oldValue))throw new D("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new D("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){Bm(this.oldValue,this.newValue)||function(e,t,n){ic(e.start),ic(e.end);for(const o of e.getItems({shallow:!0})){const s=o.is("$textProxy")?o.textNode:o;n!==null?s._setAttribute(t,n):s._removeAttribute(t),ea(s.parent,s.index)}ea(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new Ln(se.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Ut extends uo{constructor(e,t,n,o){super(o),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new Ut(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new Ut(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new D("move-operation-nodes-do-not-exist",this);if(e===t&&n<o&&o<n+this.howMany)throw new D("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&ri(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const s=this.sourcePosition.path.length-1;if(this.targetPosition.path[s]>=n&&this.targetPosition.path[s]<n+this.howMany)throw new D("move-operation-node-into-itself",this)}}_execute(){Bl(se._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=Ae.fromJSON(e.sourcePosition,t),o=Ae.fromJSON(e.targetPosition,t);return new this(n,e.howMany,o,e.baseVersion)}}class Xn extends uo{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new Ks(Nm(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new Ks([...this.nodes].map(n=>n._clone(!0))),t=new Xn(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new Ae(e,[0]);return new Ut(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new D("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new Ks([...e].map(t=>t._clone(!0))),Kf(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const s of e.nodes)s.name?n.push(Vt.fromJSON(s)):n.push(Zt.fromJSON(s));const o=new Xn(Ae.fromJSON(e.position,t),n,e.baseVersion);return o.shouldReceiveAttributes=e.shouldReceiveAttributes,o}}class Bi extends uo{constructor(e,t,n,o,s,c){super(c),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=s,this._markers=o}get type(){return"marker"}clone(){return new Bi(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new Bi(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new Bi(e.name,e.oldRange?se.fromJSON(e.oldRange,t):null,e.newRange?se.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class ei extends uo{get type(){return"noop"}clone(){return new ei(this.baseVersion)}getReversed(){return new ei(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class Li extends uo{constructor(e,t,n,o){super(o),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new Li(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Li(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof Vt))throw new D("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new D("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new Li(Ae.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class ir extends uo{constructor(e,t,n,o,s){super(s),this.root=e,this.key=t,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new ir(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new ir(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new D("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new D("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new D("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new D("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new ir(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Mn extends uo{constructor(e,t,n,o,s){super(s),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new Ae(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new se(this.sourcePosition,e)}clone(){return new Mn(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new Ae(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new Wt(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new D("merge-operation-source-position-invalid",this);if(!t.parent)throw new D("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new D("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;Bl(se._createIn(e),this.targetPosition),Bl(se._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=Ae.fromJSON(e.sourcePosition,t),o=Ae.fromJSON(e.targetPosition,t),s=Ae.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,o,s,e.baseVersion)}}class Wt extends uo{constructor(e,t,n,o,s){super(s),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new Ae(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new se(this.splitPosition,e)}clone(){return new Wt(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new Ae(e,[0]);return new Mn(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new D("split-operation-position-invalid",this);if(!e.parent)throw new D("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new D("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new D("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)Bl(se._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();Kf(this.insertionPosition,t)}Bl(new se(Ae._createAt(e,this.splitPosition.offset),Ae._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new Ae(e.root,t,"toPrevious")}static fromJSON(e,t){const n=Ae.fromJSON(e.splitPosition,t),o=Ae.fromJSON(e.insertionPosition,t),s=e.graveyardPosition?Ae.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,o,s,e.baseVersion)}}const Po={};Po[Ln.className]=Ln,Po[Xn.className]=Xn,Po[Bi.className]=Bi,Po[Ut.className]=Ut,Po[ei.className]=ei,Po[uo.className]=uo,Po[Li.className]=Li,Po[ir.className]=ir,Po[Wt.className]=Wt,Po[Mn.className]=Mn;class v_{static fromJSON(e,t){return Po[e.__className].fromJSON(e,t)}}class A_ extends uo{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new D("detach-operation-on-document-node",this)}_execute(){Pm(se._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class Sr extends as{constructor(e){super(),this.markers=new Map,this._children=new Ks,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}getAncestors(){return[]}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(Vt.fromJSON(n)):t.push(Zt.fromJSON(n));return new Sr(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new Zt(o)]:(Ai(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new Zt(s):s instanceof qi?new Zt(s.data,s.getAttributes()):s))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}}Sr.prototype.is=function(r){return r==="documentFragment"||r==="model:documentFragment"};class C_{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new Zt(e,t)}createElement(e,t){return new Vt(e,t)}createDocumentFragment(){return new Sr}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof Zt&&e.data=="")return;const o=Ae._createAt(t,n);if(e.parent){if(zm(e.root,o.root))return void this.move(se._createOn(e),o);if(e.root.document)throw new D("model-writer-insert-forbidden-move",this);this.remove(e)}const s=o.root.document?o.root.document.version:null,c=new Xn(o,e,s);if(e instanceof Zt&&(c.shouldReceiveAttributes=!0),this.batch.addOperation(c),this.model.applyOperation(c),e instanceof Sr)for(const[u,g]of e.markers){const m=Ae._createAt(g.root,0),b={range:new se(g.start._getCombined(m,o),g.end._getCombined(m,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(u)?this.updateMarker(u,b):this.addMarker(u,b)}}insertText(e,t,n,o){t instanceof Sr||t instanceof Vt||t instanceof Ae?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,o)}insertElement(e,t,n,o){t instanceof Sr||t instanceof Vt||t instanceof Ae?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,o)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof Sr||t instanceof Vt?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof Sr||t instanceof Vt?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof se){const o=n.getMinimalFlatRanges();for(const s of o)Lm(this,e,t,s)}else Rm(this,e,t,n)}setAttributes(e,t){for(const[n,o]of si(e))this.setAttribute(n,o,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof se){const n=t.getMinimalFlatRanges();for(const o of n)Lm(this,e,null,o)}else Rm(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const o of n.getAttributeKeys())this.removeAttribute(o,n)};if(e instanceof se)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof se))throw new D("writer-move-invalid-range",this);if(!e.isFlat)throw new D("writer-move-range-not-flat",this);const o=Ae._createAt(t,n);if(o.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!zm(e.root,o.root))throw new D("writer-move-different-document",this);const s=e.root.document?e.root.document.version:null,c=new Ut(e.start,e.end.offset-e.start.offset,o,s);this.batch.addOperation(c),this.model.applyOperation(c)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof se?e:se._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),y_(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof Vt))throw new D("writer-merge-no-element-before",this);if(!(n instanceof Vt))throw new D("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(...e){return this.model.createSelection(...e)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(se._createIn(n),Ae._createAt(t,"end")),this.remove(n)}_merge(e){const t=Ae._createAt(e.nodeBefore,"end"),n=Ae._createAt(e.nodeAfter,0),o=e.root.document.graveyard,s=new Ae(o,[0]),c=e.root.document.version,u=new Mn(n,e.nodeAfter.maxOffset,t,s,c);this.batch.addOperation(u),this.model.applyOperation(u)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof Vt))throw new D("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,o=new Li(Ae._createBefore(e),e.name,t,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(e,t){this._assertWriterUsedCorrectly();let n,o,s=e.parent;if(!s.parent)throw new D("writer-split-element-no-parent",this);if(t||(t=s.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new D("writer-split-invalid-limit-element",this);do{const c=s.root.document?s.root.document.version:null,u=s.maxOffset-e.offset,g=Wt.getInsertionPosition(e),m=new Wt(e,u,g,null,c);this.batch.addOperation(m),this.model.applyOperation(m),n||o||(n=s,o=e.parent.nextSibling),s=(e=this.createPositionAfter(e.parent)).parent}while(s!==t);return{position:e,range:new se(Ae._createAt(n,"end"),Ae._createAt(o,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new D("writer-wrap-range-not-flat",this);const n=t instanceof Vt?t:new Vt(t);if(n.childCount>0)throw new D("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new D("writer-wrap-element-attached",this);this.insert(n,e.start);const o=new se(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(o,Ae._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new D("writer-unwrap-element-no-parent",this);this.move(se._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new D("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,o=t.range,s=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new D("writer-addmarker-marker-exists",this);if(!o)throw new D("writer-addmarker-no-range",this);return n?(Ll(this,e,null,o,s),this.model.markers.get(e)):this.model.markers._set(e,o,n,s)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,o=this.model.markers.get(n);if(!o)throw new D("writer-updatemarker-marker-not-exists",this);if(!t)return z("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);const s=typeof t.usingOperation=="boolean",c=typeof t.affectsData=="boolean",u=c?t.affectsData:o.affectsData;if(!s&&!t.range&&!c)throw new D("writer-updatemarker-wrong-options",this);const g=o.getRange(),m=t.range?t.range:g;s&&t.usingOperation!==o.managedUsingOperations?t.usingOperation?Ll(this,n,null,m,u):(Ll(this,n,g,null,u),this.model.markers._set(n,m,void 0,u)):o.managedUsingOperations?Ll(this,n,g,m,u):this.model.markers._set(n,m,void 0,u)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new D("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);Ll(this,t,n.getRange(),null,n.affectsData)}setSelection(...e){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...e)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,o]of si(e))this._setSelectionAttribute(n,o)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=ki._getStoreAttributeKey(e);this.setAttribute(o,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=ki._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new D("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const o=n.getRange();let s=!1;if(e==="move"){const c=t;s=c.containsPosition(o.start)||c.start.isEqual(o.start)||c.containsPosition(o.end)||c.end.isEqual(o.end)}else{const c=t,u=c.nodeBefore,g=c.nodeAfter,m=o.start.parent==u&&o.start.isAtEnd,b=o.end.parent==g&&o.end.offset==0,v=o.end.nodeAfter==g,y=o.start.nodeAfter==g;s=m||b||v||y}s&&this.updateMarker(n.name,{range:o})}}}function Lm(r,e,t,n){const o=r.model,s=o.document;let c,u,g,m=n.start;for(const v of n.getWalker({shallow:!0}))g=v.item.getAttribute(e),c&&u!=g&&(u!=t&&b(),m=c),c=v.nextPosition,u=g;function b(){const v=new se(m,c),y=v.root.document?s.version:null,M=new Ln(v,e,u,t,y);r.batch.addOperation(M),o.applyOperation(M)}c instanceof Ae&&c!=m&&u!=t&&b()}function Rm(r,e,t,n){const o=r.model,s=o.document,c=n.getAttribute(e);let u,g;if(c!=t){if(n.root===n){const m=n.document?s.version:null;g=new ir(n,e,c,t,m)}else{u=new se(Ae._createBefore(n),r.createPositionAfter(n));const m=u.root.document?s.version:null;g=new Ln(u,e,c,t,m)}r.batch.addOperation(g),o.applyOperation(g)}}function Ll(r,e,t,n,o){const s=r.model,c=s.document,u=new Bi(e,t,n,s.markers,!!o,c.version);r.batch.addOperation(u),s.applyOperation(u)}function y_(r,e,t,n){let o;if(r.root.document){const s=n.document,c=new Ae(s.graveyard,[0]);o=new Ut(r,e,c,s.version)}else o=new A_(r,e);t.addOperation(o),n.applyOperation(o)}function zm(r,e){return r===e||r instanceof Eu&&e instanceof Eu}function x_(r){r.document.registerPostFixer(e=>function(t,n){const o=n.document.selection,s=n.schema,c=[];let u=!1;for(const g of o.getRanges()){const m=E_(g,s);m&&!m.isEqual(g)?(c.push(m),u=!0):c.push(g)}return u&&t.setSelection(function(g){const m=[...g],b=new Set;let v=1;for(;v<m.length;){const y=m[v],M=m.slice(0,v);for(const[B,L]of M.entries())if(!b.has(B)){if(y.isEqual(L))b.add(B);else if(y.isIntersecting(L)){b.add(B),b.add(v);const j=y.getJoined(L);m.push(j)}}v++}return m.filter((y,M)=>!b.has(M))}(c),{backward:o.isBackward}),!1}(e,r))}function E_(r,e){return r.isCollapsed?function(t,n){const o=t.start,s=n.getNearestSelectionRange(o);if(!s){const u=o.getAncestors().reverse().find(g=>n.isObject(g));return u?se._createOn(u):null}if(!s.isCollapsed)return s;const c=s.start;return o.isEqual(c)?null:new se(c)}(r,e):function(t,n){const{start:o,end:s}=t,c=n.checkChild(o,"$text"),u=n.checkChild(s,"$text"),g=n.getLimitElement(o),m=n.getLimitElement(s);if(g===m){if(c&&u)return null;if(function(y,M,B){const L=y.nodeAfter&&!B.isLimit(y.nodeAfter)||B.checkChild(y,"$text"),j=M.nodeBefore&&!B.isLimit(M.nodeBefore)||B.checkChild(M,"$text");return L||j}(o,s,n)){const y=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),M=s.nodeBefore&&n.isSelectable(s.nodeBefore)?null:n.getNearestSelectionRange(s,"backward"),B=y?y.start:o,L=M?M.end:s;return new se(B,L)}}const b=g&&!g.is("rootElement"),v=m&&!m.is("rootElement");if(b||v){const y=o.nodeAfter&&s.nodeBefore&&o.nodeAfter.parent===s.nodeBefore.parent,M=b&&(!y||!jm(o.nodeAfter,n)),B=v&&(!y||!jm(s.nodeBefore,n));let L=o,j=s;return M&&(L=Ae._createBefore(Fm(g,n))),B&&(j=Ae._createAfter(Fm(m,n))),new se(L,j)}return null}(r,e)}function Fm(r,e){let t=r,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function jm(r,e){return r&&e.isSelectable(r)}class ai extends Ie(Ae){constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new D("model-liveposition-root-not-rootelement",e);D_.call(this)}detach(){this.stopListening()}toPosition(){return new Ae(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function D_(){this.listenTo(this.root.document.model,"applyOperation",(r,e)=>{const t=e[0];t.isDocumentOperation&&Vm.call(this,t)},{priority:"low"})}function Vm(r){const e=this.getTransformedByOperation(r);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}function Um(r,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const o=r.schema;r.change(s=>{if(!t.doNotResetEntireContent&&function(m,b){const v=m.getLimitElement(b);if(!b.containsEntireContent(v))return!1;const y=b.getFirstRange();return y.start.parent==y.end.parent?!1:m.checkChild(v,"paragraph")}(o,e))return void function(m,b){const v=m.model.schema.getLimitElement(b);m.remove(m.createRangeIn(v)),Ym(m,m.createPositionAt(v,0),b)}(s,e);const c={};if(!t.doNotAutoparagraph){const m=e.getSelectedElement();m&&Object.assign(c,o.getAttributesWithProperty(m,"copyOnReplace",!0))}const[u,g]=function(m){const b=m.root.document.model,v=m.start;let y=m.end;if(b.hasContent(m,{ignoreMarkers:!0})){const M=function(B){const L=B.parent,j=L.root.document.model.schema,W=L.getAncestors({parentFirst:!0,includeSelf:!0});for(const X of W){if(j.isLimit(X))return null;if(j.isBlock(X))return X}}(y);if(M&&y.isTouching(b.createPositionAt(M,0))){const B=b.createSelection(m);b.modifySelection(B,{direction:"backward"});const L=B.getLastPosition(),j=b.createRange(L,y);b.hasContent(j,{ignoreMarkers:!0})||(y=L)}}return[ai.fromPosition(v,"toPrevious"),ai.fromPosition(y,"toNext")]}(n);u.isTouching(g)||s.remove(s.createRange(u,g)),t.leaveUnmerged||(function(m,b,v){const y=m.model;if(!Qf(m.model.schema,b,v))return;const[M,B]=function(L,j){const W=L.getAncestors(),X=j.getAncestors();let he=0;for(;W[he]&&W[he]==X[he];)he++;return[W[he],X[he]]}(b,v);!M||!B||(!y.hasContent(M,{ignoreMarkers:!0})&&y.hasContent(B,{ignoreMarkers:!0})?Wm(m,b,v,M.parent):Hm(m,b,v,M.parent))}(s,u,g),o.removeDisallowedAttributes(u.parent.getChildren(),s)),Rl(s,e,u),!t.doNotAutoparagraph&&function(m,b){const v=m.checkChild(b,"$text"),y=m.checkChild(b,"paragraph");return!v&&y}(o,u)&&Ym(s,u,e,c),u.detach(),g.detach()})}function Hm(r,e,t,n){const o=e.parent,s=t.parent;if(o!=n&&s!=n){for(e=r.createPositionAfter(o),(t=r.createPositionBefore(s)).isEqual(e)||r.insert(s,e),r.merge(e);t.parent.isEmpty;){const c=t.parent;t=r.createPositionBefore(c),r.remove(c)}Qf(r.model.schema,e,t)&&Hm(r,e,t,n)}}function Wm(r,e,t,n){const o=e.parent,s=t.parent;if(o!=n&&s!=n){for(e=r.createPositionAfter(o),(t=r.createPositionBefore(s)).isEqual(e)||r.insert(o,t);e.parent.isEmpty;){const c=e.parent;e=r.createPositionBefore(c),r.remove(c)}t=r.createPositionBefore(s),function(c,u){const g=u.nodeBefore,m=u.nodeAfter;g.name!=m.name&&c.rename(g,m.name),c.clearAttributes(g),c.setAttributes(Object.fromEntries(m.getAttributes()),g),c.merge(u)}(r,t),Qf(r.model.schema,e,t)&&Wm(r,e,t,n)}}function Qf(r,e,t){const n=e.parent,o=t.parent;return n!=o&&!r.isLimit(n)&&!r.isLimit(o)&&function(s,c,u){const g=new se(s,c);for(const m of g.getWalker())if(u.isLimit(m.item))return!1;return!0}(e,t,r)}function Ym(r,e,t,n={}){const o=r.createElement("paragraph");r.model.schema.setAllowedAttributes(o,n,r),r.insert(o,e),Rl(r,t,r.createPositionAt(o,0))}function Rl(r,e,t){e instanceof ki?r.setSelection(t):e.setTo(t)}function $m(r,e){const t=[];Array.from(r.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(r.start)||n.start.isEqual(r.start))&&(n.end.isBefore(r.end)||n.end.isEqual(r.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){const s=e.createRangeOn(o);o=o.parent,e.remove(s)}})}ai.prototype.is=function(r){return r==="livePosition"||r==="model:livePosition"||r=="position"||r==="model:position"};var qm=p(4717),S_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(qm.Z,S_),qm.Z.locals;const Du=new WeakMap;function Gm(r){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:s=!1}=r,c=e.document;Du.has(c)||(Du.set(c,new Map),c.registerPostFixer(u=>Zf(c,u)),c.on("change:isComposing",()=>{e.change(u=>Zf(c,u))},{priority:"high"})),Du.get(c).set(t,{text:n,isDirectHost:o,keepOnFocus:s,hostElement:o?t:null}),e.change(u=>Zf(c,u))}function T_(r,e){return!!e.hasClass("ck-placeholder")&&(r.removeClass("ck-placeholder",e),!0)}function Zf(r,e){const t=Du.get(r),n=[];let o=!1;for(const[s,c]of t)c.isDirectHost&&(n.push(s),Km(e,s,c)&&(o=!0));for(const[s,c]of t){if(c.isDirectHost)continue;const u=M_(s);u&&(n.includes(u)||(c.hostElement=u,Km(e,s,c)&&(o=!0)))}return o}function Km(r,e,t){const{text:n,isDirectHost:o,hostElement:s}=t;let c=!1;return s.getAttribute("data-placeholder")!==n&&(r.setAttribute("data-placeholder",n,s),c=!0),(o||e.childCount==1)&&function(u,g){if(!u.isAttached()||Array.from(u.getChildren()).some(y=>!y.is("uiElement")))return!1;const b=u.document,v=b.selection.anchor;return!(b.isComposing&&v&&v.parent===u||!g&&b.isFocused&&(!v||v.parent===u))}(s,t.keepOnFocus)?function(u,g){return!g.hasClass("ck-placeholder")&&(u.addClass("ck-placeholder",g),!0)}(r,s)&&(c=!0):T_(r,s)&&(c=!0),c}function M_(r){if(r.childCount){const e=r.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}const Jf=new Map;function Lt(r,e,t){let n=Jf.get(r);n||(n=new Map,Jf.set(r,n)),n.set(e,t)}function Su(r){return[r]}function Qm(r,e,t={}){const n=function(o,s){const c=Jf.get(o);return c&&c.has(s)?c.get(s):Su}(r.constructor,e.constructor);try{return n(r=r.clone(),e,t)}catch(o){throw o}}function Zm(r,e,t){r=r.slice(),e=e.slice();const n=new Jm(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(r),n.setOriginalOperations(e);const o=n.originalOperations;if(r.length==0||e.length==0)return{operationsA:r,operationsB:e,originalOperations:o};const s=new WeakMap;for(const g of r)s.set(g,0);const c={nextBaseVersionA:r[r.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:r.length,originalOperationsBCount:e.length};let u=0;for(;u<r.length;){const g=r[u],m=s.get(g);if(m==e.length){u++;continue}const b=e[m],v=Qm(g,b,n.getContext(g,b,!0)),y=Qm(b,g,n.getContext(b,g,!1));n.updateRelation(g,b),n.setOriginalOperations(v,g),n.setOriginalOperations(y,b);for(const M of v)s.set(M,m+y.length);r.splice(u,1,...v),e.splice(m,1,...y)}if(t.padWithNoOps){const g=r.length-c.originalOperationsACount,m=e.length-c.originalOperationsBCount;Xf(r,m-g),Xf(e,g-m)}return Tu(r,c.nextBaseVersionB),Tu(e,c.nextBaseVersionA),{operationsA:r,operationsB:e,originalOperations:o}}class Jm{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const o of e)this.originalOperations.set(o,n||o)}updateRelation(e,t){if(e instanceof Ut)t instanceof Mn?e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter"):t instanceof Ut&&(e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter"));else if(e instanceof Wt){if(t instanceof Mn)e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");else if(t instanceof Ut)if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=se._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const o=n.end.offset-e.splitPosition.offset,s=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:o,offset:s})}}}else if(e instanceof Mn)t instanceof Mn?(e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement")):t instanceof Wt&&e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource");else if(e instanceof Bi){const n=e.newRange;if(!n)return;if(t instanceof Ut){const o=se._createFromPositionAndShift(t.sourcePosition,t.howMany),s=o.containsPosition(n.start)||o.start.isEqual(n.start),c=o.containsPosition(n.end)||o.end.isEqual(n.end);!s&&!c||o.containsRange(n)||this._setRelation(e,t,{side:s?"left":"right",path:s?n.start.path.slice():n.end.path.slice()})}else if(t instanceof Mn){const o=n.start.isEqual(t.targetPosition),s=n.start.isEqual(t.deletionPosition),c=n.end.isEqual(t.deletionPosition),u=n.end.isEqual(t.sourcePosition);(o||s||c||u)&&this._setRelation(e,t,{wasInLeftElement:o,wasStartBeforeMergedElement:s,wasEndBeforeMergedElement:c,wasInRightElement:u})}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),o=this._history.getUndoneOperation(n);if(!o)return null;const s=this.originalOperations.get(e),c=this._relations.get(s);return c&&c.get(o)||null}_setRelation(e,t,n){const o=this.originalOperations.get(e),s=this.originalOperations.get(t);let c=this._relations.get(o);c||(c=new Map,this._relations.set(o,c)),c.set(s,n)}}function Tu(r,e){for(const t of r)t.baseVersion=e++}function Xf(r,e){for(let t=0;t<e;t++)r.push(new ei(0))}function eg(r,e,t){const n=r.nodes.getNode(0).getAttribute(e);if(n==t)return null;const o=new se(r.position,r.position.getShiftedBy(r.howMany));return new Ln(o,e,n,t,0)}function tg(r,e){return r.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function ta(r,e){const t=[];for(let n=0;n<r.length;n++){const o=r[n],s=new Ut(o.start,o.end.offset-o.start.offset,e,0);t.push(s);for(let c=n+1;c<r.length;c++)r[c]=r[c]._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)[0];e=e._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)}return t}Lt(Ln,Ln,(r,e,t)=>{if(r.key===e.key&&r.range.start.hasSameParentAs(e.range.start)){const n=r.range.getDifference(e.range).map(s=>new Ln(s,r.key,r.oldValue,r.newValue,0)),o=r.range.getIntersection(e.range);return o&&t.aIsStrong&&n.push(new Ln(o,e.key,e.newValue,r.newValue,0)),n.length==0?[new ei(0)]:n}return[r]}),Lt(Ln,Xn,(r,e)=>{if(r.range.start.hasSameParentAs(e.position)&&r.range.containsPosition(e.position)){const t=r.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new Ln(n,r.key,r.oldValue,r.newValue,r.baseVersion));if(e.shouldReceiveAttributes){const n=eg(e,r.key,r.oldValue);n&&t.unshift(n)}return t}return r.range=r.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[r]}),Lt(Ln,Mn,(r,e)=>{const t=[];r.range.start.hasSameParentAs(e.deletionPosition)&&(r.range.containsPosition(e.deletionPosition)||r.range.start.isEqual(e.deletionPosition))&&t.push(se._createFromPositionAndShift(e.graveyardPosition,1));const n=r.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(o=>new Ln(o,r.key,r.oldValue,r.newValue,r.baseVersion))}),Lt(Ln,Ut,(r,e)=>function(n,o){const s=se._createFromPositionAndShift(o.sourcePosition,o.howMany);let c=null,u=[];s.containsRange(n,!0)?c=n:n.start.hasSameParentAs(s.start)?(u=n.getDifference(s),c=n.getIntersection(s)):u=[n];const g=[];for(let m of u){m=m._getTransformedByDeletion(o.sourcePosition,o.howMany);const b=o.getMovedRangeStart(),v=m.start.hasSameParentAs(b),y=m._getTransformedByInsertion(b,o.howMany,v);g.push(...y)}return c&&g.push(c._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),g}(r.range,e).map(n=>new Ln(n,r.key,r.oldValue,r.newValue,r.baseVersion))),Lt(Ln,Wt,(r,e)=>{if(r.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||r.range.end.offset++,[r];if(r.range.start.hasSameParentAs(e.splitPosition)&&r.range.containsPosition(e.splitPosition)){const t=r.clone();return t.range=new se(e.moveTargetPosition.clone(),r.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),r.range.end=e.splitPosition.clone(),r.range.end.stickiness="toPrevious",[r,t]}return r.range=r.range._getTransformedBySplitOperation(e),[r]}),Lt(Xn,Ln,(r,e)=>{const t=[r];if(r.shouldReceiveAttributes&&r.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(r.position)){const n=eg(r,e.key,e.newValue);n&&t.push(n)}return t}),Lt(Xn,Xn,(r,e,t)=>(r.position.isEqual(e.position)&&t.aIsStrong||(r.position=r.position._getTransformedByInsertOperation(e)),[r])),Lt(Xn,Ut,(r,e)=>(r.position=r.position._getTransformedByMoveOperation(e),[r])),Lt(Xn,Wt,(r,e)=>(r.position=r.position._getTransformedBySplitOperation(e),[r])),Lt(Xn,Mn,(r,e)=>(r.position=r.position._getTransformedByMergeOperation(e),[r])),Lt(Bi,Xn,(r,e)=>(r.oldRange&&(r.oldRange=r.oldRange._getTransformedByInsertOperation(e)[0]),r.newRange&&(r.newRange=r.newRange._getTransformedByInsertOperation(e)[0]),[r])),Lt(Bi,Bi,(r,e,t)=>{if(r.name==e.name){if(!t.aIsStrong)return[new ei(0)];r.oldRange=e.newRange?e.newRange.clone():null}return[r]}),Lt(Bi,Mn,(r,e)=>(r.oldRange&&(r.oldRange=r.oldRange._getTransformedByMergeOperation(e)),r.newRange&&(r.newRange=r.newRange._getTransformedByMergeOperation(e)),[r])),Lt(Bi,Ut,(r,e,t)=>{if(r.oldRange&&(r.oldRange=se._createFromRanges(r.oldRange._getTransformedByMoveOperation(e))),r.newRange){if(t.abRelation){const n=se._createFromRanges(r.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(r.newRange.start))return r.newRange.end=n.end,r.newRange.start.path=t.abRelation.path,[r];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(r.newRange.end))return r.newRange.start=n.start,r.newRange.end.path=t.abRelation.path,[r]}r.newRange=se._createFromRanges(r.newRange._getTransformedByMoveOperation(e))}return[r]}),Lt(Bi,Wt,(r,e,t)=>{if(r.oldRange&&(r.oldRange=r.oldRange._getTransformedBySplitOperation(e)),r.newRange){if(t.abRelation){const n=r.newRange._getTransformedBySplitOperation(e);return r.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?r.newRange.start=Ae._createAt(e.insertionPosition):r.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(r.newRange.start=Ae._createAt(e.moveTargetPosition)),r.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?r.newRange.end=Ae._createAt(e.moveTargetPosition):r.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?r.newRange.end=Ae._createAt(e.insertionPosition):r.newRange.end=n.end,[r]}r.newRange=r.newRange._getTransformedBySplitOperation(e)}return[r]}),Lt(Mn,Xn,(r,e)=>(r.sourcePosition.hasSameParentAs(e.position)&&(r.howMany+=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByInsertOperation(e),r.targetPosition=r.targetPosition._getTransformedByInsertOperation(e),[r])),Lt(Mn,Mn,(r,e,t)=>{if(r.sourcePosition.isEqual(e.sourcePosition)&&r.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),r.sourcePosition=new Ae(e.graveyardPosition.root,n),r.howMany=0,[r]}return[new ei(0)]}if(r.sourcePosition.isEqual(e.sourcePosition)&&!r.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=r.targetPosition.root.rootName=="$graveyard",o=e.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const c=e.targetPosition._getTransformedByMergeOperation(e),u=r.targetPosition._getTransformedByMergeOperation(e);return[new Ut(c,r.howMany,u,0)]}return[new ei(0)]}return r.sourcePosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByMergeOperation(e),r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),r.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(r.graveyardPosition=r.graveyardPosition._getTransformedByMergeOperation(e)),[r]}),Lt(Mn,Ut,(r,e,t)=>{const n=se._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&r.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(r.sourcePosition)?[new ei(0)]:(r.sourcePosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.sourcePosition.hasSameParentAs(e.sourcePosition)&&(r.howMany-=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByMoveOperation(e),r.targetPosition=r.targetPosition._getTransformedByMoveOperation(e),r.graveyardPosition.isEqual(e.targetPosition)||(r.graveyardPosition=r.graveyardPosition._getTransformedByMoveOperation(e)),[r])}),Lt(Mn,Wt,(r,e,t)=>{if(e.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),r.deletionPosition.isEqual(e.graveyardPosition)&&(r.howMany=e.howMany)),r.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,o=e.graveyardPosition&&r.deletionPosition.isEqual(e.graveyardPosition);if(n||o||t.abRelation=="mergeTargetNotMoved")return r.sourcePosition=r.sourcePosition._getTransformedBySplitOperation(e),[r]}if(r.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return r.howMany=0,r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r];if(t.abRelation=="mergeSameElement"||r.sourcePosition.offset>0)return r.sourcePosition=e.moveTargetPosition.clone(),r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r]}return r.sourcePosition.hasSameParentAs(e.splitPosition)&&(r.howMany=e.splitPosition.offset),r.sourcePosition=r.sourcePosition._getTransformedBySplitOperation(e),r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r]}),Lt(Ut,Xn,(r,e)=>{const t=se._createFromPositionAndShift(r.sourcePosition,r.howMany)._getTransformedByInsertOperation(e,!1)[0];return r.sourcePosition=t.start,r.howMany=t.end.offset-t.start.offset,r.targetPosition.isEqual(e.position)||(r.targetPosition=r.targetPosition._getTransformedByInsertOperation(e)),[r]}),Lt(Ut,Ut,(r,e,t)=>{const n=se._createFromPositionAndShift(r.sourcePosition,r.howMany),o=se._createFromPositionAndShift(e.sourcePosition,e.howMany);let s,c=t.aIsStrong,u=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?u=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(u=!1),s=r.targetPosition.isEqual(e.targetPosition)&&u?r.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):r.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),tg(r,e)&&tg(e,r))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),ta([n],s);if(o.containsPosition(r.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),ta([n],s);const g=ri(r.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(g=="prefix"||g=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),ta([n],s);r.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?r.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(c=!1):c=!0;const m=[],b=n.getDifference(o);for(const y of b){y.start=y.start._getTransformedByDeletion(e.sourcePosition,e.howMany),y.end=y.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const M=ri(y.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",B=y._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,M);m.push(...B)}const v=n.getIntersection(o);return v!==null&&c&&(v.start=v.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),v.end=v.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),m.length===0?m.push(v):m.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?m.unshift(v):m.push(v):m.splice(1,0,v)),m.length===0?[new ei(r.baseVersion)]:ta(m,s)}),Lt(Ut,Wt,(r,e,t)=>{let n=r.targetPosition.clone();r.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=r.targetPosition._getTransformedBySplitOperation(e));const o=se._createFromPositionAndShift(r.sourcePosition,r.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||r.howMany++,r.targetPosition=n,[r];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let c=new se(e.splitPosition,o.end);return c=c._getTransformedBySplitOperation(e),ta([new se(o.start,e.splitPosition),c],n)}r.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),r.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=r.targetPosition);const s=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const c=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);r.howMany>1&&c&&!t.aWasUndone&&s.push(se._createFromPositionAndShift(e.insertionPosition,1))}return ta(s,n)}),Lt(Ut,Mn,(r,e,t)=>{const n=se._createFromPositionAndShift(r.sourcePosition,r.howMany);if(e.deletionPosition.hasSameParentAs(r.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(r.type!="remove"||t.forceWeakRemove){if(r.howMany==1)return t.bWasUndone?(r.sourcePosition=e.graveyardPosition.clone(),r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),[r]):[new ei(0)]}else if(!t.aWasUndone){const s=[];let c=e.graveyardPosition.clone(),u=e.targetPosition._getTransformedByMergeOperation(e);r.howMany>1&&(s.push(new Ut(r.sourcePosition,r.howMany-1,r.targetPosition,0)),c=c._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany-1),u=u._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany-1));const g=e.deletionPosition._getCombined(r.sourcePosition,r.targetPosition),m=new Ut(c,1,g,0),b=m.getMovedRangeStart().path.slice();b.push(0);const v=new Ae(m.targetPosition.root,b);u=u._getTransformedByMove(c,g,1);const y=new Ut(u,e.howMany,v,0);return s.push(m),s.push(y),s}}const o=se._createFromPositionAndShift(r.sourcePosition,r.howMany)._getTransformedByMergeOperation(e);return r.sourcePosition=o.start,r.howMany=o.end.offset-o.start.offset,r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),[r]}),Lt(Li,Xn,(r,e)=>(r.position=r.position._getTransformedByInsertOperation(e),[r])),Lt(Li,Mn,(r,e)=>r.position.isEqual(e.deletionPosition)?(r.position=e.graveyardPosition.clone(),r.position.stickiness="toNext",[r]):(r.position=r.position._getTransformedByMergeOperation(e),[r])),Lt(Li,Ut,(r,e)=>(r.position=r.position._getTransformedByMoveOperation(e),[r])),Lt(Li,Li,(r,e,t)=>{if(r.position.isEqual(e.position)){if(!t.aIsStrong)return[new ei(0)];r.oldName=e.newName}return[r]}),Lt(Li,Wt,(r,e)=>{if(ri(r.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new Li(r.position.getShiftedBy(1),r.oldName,r.newName,0);return[r,t]}return r.position=r.position._getTransformedBySplitOperation(e),[r]}),Lt(ir,ir,(r,e,t)=>{if(r.root===e.root&&r.key===e.key){if(!t.aIsStrong||r.newValue===e.newValue)return[new ei(0)];r.oldValue=e.newValue}return[r]}),Lt(Wt,Xn,(r,e)=>(r.splitPosition.hasSameParentAs(e.position)&&r.splitPosition.offset<e.position.offset&&(r.howMany+=e.howMany),r.splitPosition=r.splitPosition._getTransformedByInsertOperation(e),r.insertionPosition=r.insertionPosition._getTransformedByInsertOperation(e),[r])),Lt(Wt,Mn,(r,e,t)=>{if(!r.graveyardPosition&&!t.bWasUndone&&r.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const o=new Ae(e.graveyardPosition.root,n),s=Wt.getInsertionPosition(new Ae(e.graveyardPosition.root,n)),c=new Wt(o,0,s,null,0);return r.splitPosition=r.splitPosition._getTransformedByMergeOperation(e),r.insertionPosition=Wt.getInsertionPosition(r.splitPosition),r.graveyardPosition=c.insertionPosition.clone(),r.graveyardPosition.stickiness="toNext",[c,r]}return r.splitPosition.hasSameParentAs(e.deletionPosition)&&!r.splitPosition.isAfter(e.deletionPosition)&&r.howMany--,r.splitPosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.splitPosition=r.splitPosition._getTransformedByMergeOperation(e),r.insertionPosition=Wt.getInsertionPosition(r.splitPosition),r.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedByMergeOperation(e)),[r]}),Lt(Wt,Ut,(r,e,t)=>{const n=se._createFromPositionAndShift(e.sourcePosition,e.howMany);if(r.graveyardPosition){const s=n.start.isEqual(r.graveyardPosition)||n.containsPosition(r.graveyardPosition);if(!t.bWasUndone&&s){const c=r.splitPosition._getTransformedByMoveOperation(e),u=r.graveyardPosition._getTransformedByMoveOperation(e),g=u.path.slice();g.push(0);const m=new Ae(u.root,g);return[new Ut(c,r.howMany,m,0)]}r.graveyardPosition=r.graveyardPosition._getTransformedByMoveOperation(e)}const o=r.splitPosition.isEqual(e.targetPosition);if(o&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return r.howMany+=e.howMany,r.splitPosition=r.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),r.insertionPosition=Wt.getInsertionPosition(r.splitPosition),[r];if(o&&t.abRelation&&t.abRelation.howMany){const{howMany:s,offset:c}=t.abRelation;return r.howMany+=s,r.splitPosition=r.splitPosition.getShiftedBy(c),[r]}if(r.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(r.splitPosition)){const s=e.howMany-(r.splitPosition.offset-e.sourcePosition.offset);return r.howMany-=s,r.splitPosition.hasSameParentAs(e.targetPosition)&&r.splitPosition.offset<e.targetPosition.offset&&(r.howMany+=e.howMany),r.splitPosition=e.sourcePosition.clone(),r.insertionPosition=Wt.getInsertionPosition(r.splitPosition),[r]}return e.sourcePosition.isEqual(e.targetPosition)||(r.splitPosition.hasSameParentAs(e.sourcePosition)&&r.splitPosition.offset<=e.sourcePosition.offset&&(r.howMany-=e.howMany),r.splitPosition.hasSameParentAs(e.targetPosition)&&r.splitPosition.offset<e.targetPosition.offset&&(r.howMany+=e.howMany)),r.splitPosition.stickiness="toNone",r.splitPosition=r.splitPosition._getTransformedByMoveOperation(e),r.splitPosition.stickiness="toNext",r.graveyardPosition?r.insertionPosition=r.insertionPosition._getTransformedByMoveOperation(e):r.insertionPosition=Wt.getInsertionPosition(r.splitPosition),[r]}),Lt(Wt,Wt,(r,e,t)=>{if(r.splitPosition.isEqual(e.splitPosition)){if(!r.graveyardPosition&&!e.graveyardPosition)return[new ei(0)];if(r.graveyardPosition&&e.graveyardPosition&&r.graveyardPosition.isEqual(e.graveyardPosition))return[new ei(0)];if(t.abRelation=="splitBefore")return r.howMany=0,r.graveyardPosition=r.graveyardPosition._getTransformedBySplitOperation(e),[r]}if(r.graveyardPosition&&e.graveyardPosition&&r.graveyardPosition.isEqual(e.graveyardPosition)){const n=r.splitPosition.root.rootName=="$graveyard",o=e.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const c=[];return e.howMany&&c.push(new Ut(e.moveTargetPosition,e.howMany,e.splitPosition,0)),r.howMany&&c.push(new Ut(r.splitPosition,r.howMany,r.moveTargetPosition,0)),c}return[new ei(0)]}if(r.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedBySplitOperation(e)),r.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return r.howMany++,[r];if(e.splitPosition.isEqual(r.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const o=new Ae(e.insertionPosition.root,n);return[r,new Ut(r.insertionPosition,1,o,0)]}return r.splitPosition.hasSameParentAs(e.splitPosition)&&r.splitPosition.offset<e.splitPosition.offset&&(r.howMany-=e.howMany),r.splitPosition=r.splitPosition._getTransformedBySplitOperation(e),r.insertionPosition=Wt.getInsertionPosition(r.splitPosition),[r]});class I_ extends os{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class ng extends os{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class oc{constructor(e){this.document=e}createDocumentFragment(e){return new yi(this.document,e)}createElement(e,t,n){return new Zn(this.document,e,t,n)}createText(e){return new Qt(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const o=n.getChildIndex(e);return this.removeChildren(o,1,n),this.insertChild(o,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new Zn(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Ft(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return Oe._createAt(e,t)}createPositionAfter(e){return Oe._createAfter(e)}createPositionBefore(e){return Oe._createBefore(e)}createRange(e,t){return new dt(e,t)}createRangeOn(e){return dt._createOn(e)}createRangeIn(e){return dt._createIn(e)}createSelection(...e){return new Zo(...e)}}class Mu{constructor(e,t,n){this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new D("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?se._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new se(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=ai.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new D("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=e:this._nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=ai.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=ai.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof Vt)||!this._canMergeLeft(e))return;const t=ai._createBefore(e);t.stickiness="toNext";const n=ai.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=ai._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=ai._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof Vt)||!this._canMergeRight(e))return;const t=ai._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new D("insertcontent-invalid-insertion-position",this);this.position=Ae._createAt(t.nodeBefore,"end");const n=ai.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=ai._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=ai._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof Vt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof Vt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function zl(r,e,t="auto"){const n=r.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return t=="before"||t=="after"?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const o=yn(r.getSelectedBlocks());if(!o)return e.createRange(r.focus);if(o.isEmpty)return e.createRange(e.createPositionAt(o,0));const s=e.createPositionAfter(o);return r.focus.isTouching(s)?e.createRange(s):e.createRange(e.createPositionBefore(o))}function P_(r,e,t,n,o={}){if(!r.schema.isObject(e))throw new D("insertobject-element-not-an-object",r,{object:e});let s;s=t?t instanceof nr||t instanceof ki?t:r.createSelection(t,n):r.document.selection;let c=s;o.findOptimalPosition&&r.schema.isBlock(e)&&(c=r.createSelection(zl(s,r,o.findOptimalPosition)));const u=yn(s.getSelectedBlocks()),g={};return u&&Object.assign(g,r.schema.getAttributesWithProperty(u,"copyOnReplace",!0)),r.change(m=>{c.isCollapsed||r.deleteContent(c,{doNotAutoparagraph:!0});let b=e;const v=c.anchor.parent;!r.schema.checkChild(v,e)&&r.schema.checkChild(v,"paragraph")&&r.schema.checkChild("paragraph",e)&&(b=m.createElement("paragraph"),m.insert(e,b)),r.schema.setAllowedAttributes(b,g,m);const y=r.insertContent(b,c);return y.isCollapsed||o.setSelection&&function(M,B,L,j){const W=M.model;if(L=="after"){let X=B.nextSibling;!(X&&W.schema.checkChild(X,"$text"))&&W.schema.checkChild(B.parent,"paragraph")&&(X=M.createElement("paragraph"),W.schema.setAllowedAttributes(X,j,M),W.insertContent(X,M.createPositionAfter(B))),X&&M.setSelection(X,0)}else{if(L!="on")throw new D("insertobject-invalid-place-parameter-value",W);M.setSelection(B,"on")}}(m,e,o.setSelection,g),y})}function N_(r,e){const{isForward:t,walker:n,unit:o,schema:s,treatEmojiAsSingleUnit:c}=r,{type:u,item:g,nextPosition:m}=e;if(u=="text")return r.unit==="word"?function(b,v){let y=b.position.textNode;for(y||(y=v?b.position.nodeAfter:b.position.nodeBefore);y&&y.is("$text");){const M=b.position.offset-y.startOffset;if(O_(y,M,v))y=v?b.position.nodeAfter:b.position.nodeBefore;else{if(Xm(y.data,M,v))break;b.next()}}return b.position}(n,t):function(b,v,y){const M=b.position.textNode;if(M){const B=M.data;let L=b.position.offset-M.startOffset;for(;Tm(B,L)||v=="character"&&Mm(B,L)||y&&k_(B,L);)b.next(),L=b.position.offset-M.startOffset}return b.position}(n,o,c);if(u==(t?"elementStart":"elementEnd")){if(s.isSelectable(g))return Ae._createAt(g,t?"after":"before");if(s.checkChild(m,"$text"))return m}else{if(s.isLimit(g))return void n.skip(()=>!0);if(s.checkChild(m,"$text"))return m}}function ig(r,e){const t=r.root,n=Ae._createAt(t,e?"end":0);return e?new se(r,n):new se(n,r)}function Xm(r,e,t){const n=e+(t?0:-1);return' ,.?!:;"-()'.includes(r.charAt(n))}function O_(r,e,t){return e===(t?r.offsetSize:0)}class B_ extends kt{constructor(){super(),this.markers=new __,this.document=new w_(this),this.schema=new Am,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),x_(this),this.document.registerPostFixer(Io)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new us,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){D.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new us):e instanceof us||(e=new us(e)):e=new us,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){D.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(o,s,c,u){return o.change(g=>{let m;m=c?c instanceof nr||c instanceof ki?c:g.createSelection(c,u):o.document.selection,m.isCollapsed||o.deleteContent(m,{doNotAutoparagraph:!0});const b=new Mu(o,g,m.anchor),v=[];let y;if(s.is("documentFragment")){if(s.markers.size){const L=[];for(const[j,W]of s.markers){const{start:X,end:he}=W,Re=X.isEqual(he);L.push({position:X,name:j,isCollapsed:Re},{position:he,name:j,isCollapsed:Re})}L.sort(({position:j},{position:W})=>j.isBefore(W)?1:-1);for(const{position:j,name:W,isCollapsed:X}of L){let he=null,Re=null;const st=j.parent===s&&j.isAtStart,Rt=j.parent===s&&j.isAtEnd;st||Rt?X&&(Re=st?"start":"end"):(he=g.createElement("$marker"),g.insert(he,j)),v.push({name:W,element:he,collapsed:Re})}}y=s.getChildren()}else y=[s];b.handleNodes(y);let M=b.getSelectionRange();if(s.is("documentFragment")&&v.length){const L=M?Mo.fromRange(M):null,j={};for(let W=v.length-1;W>=0;W--){const{name:X,element:he,collapsed:Re}=v[W],st=!j[X];if(st&&(j[X]=[]),he){const Rt=g.createPositionAt(he,"before");j[X].push(Rt),g.remove(he)}else{const Rt=b.getAffectedRange();if(!Rt){Re&&j[X].push(b.position);continue}Re?j[X].push(Rt[Re]):j[X].push(st?Rt.start:Rt.end)}}for(const[W,[X,he]]of Object.entries(j))X&&he&&X.root===he.root&&g.addMarker(W,{usingOperation:!0,affectsData:!0,range:new se(X,he)});L&&(M=L.toRange(),L.detach())}M&&(m instanceof ki?g.setSelection(M):m.setTo(M));const B=b.getAffectedRange()||o.createRange(m.anchor);return b.destroy(),B})}(this,e,t,n)}insertObject(e,t,n,o){return P_(this,e,t,n,o)}deleteContent(e,t){Um(this,e,t)}modifySelection(e,t){(function(n,o,s={}){const c=n.schema,u=s.direction!="backward",g=s.unit?s.unit:"character",m=!!s.treatEmojiAsSingleUnit,b=o.focus,v=new Oi({boundaries:ig(b,u),singleCharacters:!0,direction:u?"forward":"backward"}),y={walker:v,schema:c,isForward:u,unit:g,treatEmojiAsSingleUnit:m};let M;for(;M=v.next();){if(M.done)return;const B=N_(y,M.value);if(B)return void(o instanceof ki?n.change(L=>{L.setSelectionFocus(B)}):o.setFocus(B))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(o=>{const s=o.createDocumentFragment(),c=n.getFirstRange();if(!c||c.isCollapsed)return s;const u=c.start.root,g=c.start.getCommonPath(c.end),m=u.getNodeByPath(g);let b;b=c.start.parent==c.end.parent?c:o.createRange(o.createPositionAt(m,c.start.path[g.length]),o.createPositionAt(m,c.end.path[g.length]+1));const v=b.end.offset-b.start.offset;for(const y of b.getItems({shallow:!0}))y.is("$textProxy")?o.appendText(y.data,y.getAttributes(),s):o.append(o.cloneElement(y,!0),s);if(b!=c){const y=c._getTransformedByMove(b.start,o.createPositionAt(s,0),v)[0],M=o.createRange(o.createPositionAt(s,0),y.start);$m(o.createRange(y.end,o.createPositionAt(s,"end")),o),$m(M,o)}return s})}(this,e)}hasContent(e,t={}){const n=e instanceof se?e:se._createIn(e);if(n.isCollapsed)return!1;const{ignoreWhitespaces:o=!1,ignoreMarkers:s=!1}=t;if(!s){for(const c of this.markers.getMarkersIntersectingRange(n))if(c.affectsData)return!0}for(const c of n.getItems())if(this.schema.isContent(c)&&(!c.is("$textProxy")||!o||c.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new Ae(e,t,n)}createPositionAt(e,t){return Ae._createAt(e,t)}createPositionAfter(e){return Ae._createAfter(e)}createPositionBefore(e){return Ae._createBefore(e)}createRange(e,t){return new se(e,t)}createRangeIn(e){return se._createIn(e)}createRangeOn(e){return se._createOn(e)}createSelection(...e){return new nr(...e)}createBatch(e){return new us(e)}createOperationFromJSON(e){return v_.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new C_(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return e}}class L_ extends To{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const o=t;t=(s,c)=>{this.editor.execute(o),c()}}super.set(e,t,n)}}class R_ extends kt{constructor(e={}){super();const t=this.constructor,n=e.language||t.defaultConfig&&t.defaultConfig.language;this._context=e.context||new On({language:n}),this._context._addEditor(this,!e.context);const o=Array.from(t.builtinPlugins||[]);this.config=new il(e,t.defaultConfig),this.config.define("plugins",o),this.config.define(this._context._getEditorConfig()),this.plugins=new Hd(this,o,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new Xw,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new B_;const s=new al;this.data=new u_(this.model,s),this.editing=new Jw(this.model,s),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new h_([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new L_(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new D("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new D("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new D("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],o=e.get("extraPlugins")||[],s=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(o),n,s)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(e,...t){try{return this.commands.execute(e,...t)}catch(n){D.rethrowUnexpectedError(n,this)}}focus(){this.editing.view.focus()}}class z_{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(og(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new D("componentfactory-item-missing",this,{name:e});return this._components.get(og(e)).callback(this.editor.locale)}has(e){return this._components.has(og(e))}}function og(r){return String(r).toLowerCase()}class na extends Wi{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new D("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const o of e)n.delegate(o).to(t);this.on("add",(n,o)=>{for(const s of e)o.delegate(s).to(t)}),this.on("remove",(n,o)=>{for(const s of e)o.stopDelegating(s,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}class No extends de{constructor(e){super(),Object.assign(this,tb(pt(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new D("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)Pu(n)?yield n:rg(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,o)=>new F_({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:o}),if:(n,o,s)=>new eb({observable:e,emitter:t,attribute:n,valueIfTrue:o,callback:s})}}static extend(e,t){if(e._isRendered)throw new D("template-extend-render",[this,e]);Tr(e,tb(pt(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new D("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Iu(this.text)?this._bindToObservable({schema:this.text,updater:j_(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const o in this.attributes){const s=t.getAttribute(o),c=this.attributes[o];n&&(n.attributes[o]=s);const u=ib(c)?c[0].ns:null;if(Iu(c)){const g=ib(c)?c[0].value:c;n&&Nu(o)&&g.unshift(s),this._bindToObservable({schema:g,updater:V_(t,o,u),data:e})}else if(o=="style"&&typeof c[0]!="string")this._renderStyleAttribute(c[0],e);else{n&&s&&Nu(o)&&c.unshift(s);const g=c.map(m=>m&&m.value||m).reduce((m,b)=>m.concat(b),[]).reduce(In,"");rc(g)||t.setAttributeNS(u,o,g)}}}_renderStyleAttribute(e,t){const n=t.node;for(const o in e){const s=e[o];Iu(s)?this._bindToObservable({schema:[s],updater:ia(n,o),data:t}):n.style[o]=s}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,o=e.isApplying;let s=0;for(const c of this.children)if(sg(c)){if(!o){c.setParent(t);for(const u of c)n.appendChild(u.element)}}else if(Pu(c))o||(c.isRendered||c.render(),n.appendChild(c.element));else if(ns(c))n.appendChild(c);else if(o){const u={children:[],bindings:[],attributes:{}};e.revertData.children.push(u),c._renderNode({intoFragment:!1,node:n.childNodes[s++],isApplying:!0,revertData:u})}else n.appendChild(c.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(o=>{const[s,c]=t.split("@");return o.activateDomEventListener(s,c,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const o=n.revertData;ho(e,t,n);const s=e.filter(c=>!rc(c)).filter(c=>c.observable).map(c=>c.activateAttributeListener(e,t,n));o&&o.bindings.push(s)}_revertTemplateFromNode(e,t){for(const o of t.bindings)for(const s of o)s();if(t.text)return void(e.textContent=t.text);const n=e;for(const o in t.attributes){const s=t.attributes[o];s===null?n.removeAttribute(o):n.setAttribute(o,s)}for(let o=0;o<t.children.length;++o)this._revertTemplateFromNode(n.childNodes[o],t.children[o])}}class Fl{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const o=()=>ho(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,o),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,o)}}}class F_ extends Fl{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const o=(s,c)=>{t&&!c.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(c):this.observable.fire(this.eventNameOrFunction,c))};return this.emitter.listenTo(n.node,e,o),()=>{this.emitter.stopListening(n.node,e,o)}}}class eb extends Fl{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!rc(super.getValue(e))&&(this.valueIfTrue||!0)}}function Iu(r){return!!r&&(r.value&&(r=r.value),Array.isArray(r)?r.some(Iu):r instanceof Fl)}function ho(r,e,{node:t}){const n=function(s,c){return s.map(u=>u instanceof Fl?u.getValue(c):u)}(r,t);let o;o=r.length==1&&r[0]instanceof eb?n[0]:n.reduce(In,""),rc(o)?e.remove():e.set(o)}function j_(r){return{set(e){r.textContent=e},remove(){r.textContent=""}}}function V_(r,e,t){return{set(n){r.setAttributeNS(t,e,n)},remove(){r.removeAttributeNS(t,e)}}}function ia(r,e){return{set(t){r.style[e]=t},remove(){r.style[e]=null}}}function pt(r){return no(r,e=>{if(e&&(e instanceof Fl||rg(e)||Pu(e)||sg(e)))return e})}function tb(r){if(typeof r=="string"?r=function(e){return{text:[e]}}(r):r.text&&function(e){e.text=un(e.text)}(r),r.on&&(r.eventListeners=function(e){for(const t in e)xi(e,t);return e}(r.on),delete r.on),!r.text){r.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=un(t[n].value)),xi(t,n)}(r.attributes);const e=[];if(r.children)if(sg(r.children))e.push(r.children);else for(const t of r.children)rg(t)||Pu(t)||ns(t)?e.push(t):e.push(new No(t));r.children=e}return r}function xi(r,e){r[e]=un(r[e])}function In(r,e){return rc(e)?r:rc(r)?e:`${r} ${e}`}function nb(r,e){for(const t in e)r[t]?r[t].push(...e[t]):r[t]=e[t]}function Tr(r,e){if(e.attributes&&(r.attributes||(r.attributes={}),nb(r.attributes,e.attributes)),e.eventListeners&&(r.eventListeners||(r.eventListeners={}),nb(r.eventListeners,e.eventListeners)),e.text&&r.text.push(...e.text),e.children&&e.children.length){if(r.children.length!=e.children.length)throw new D("ui-template-extend-children-mismatch",r);let t=0;for(const n of e.children)Tr(r.children[t++],n)}}function rc(r){return!r&&r!==0}function Pu(r){return r instanceof Et}function rg(r){return r instanceof No}function sg(r){return r instanceof na}function ib(r){return Je(r[0])&&r[0].ns}function Nu(r){return r=="class"||r=="style"}var ob=p(4793),Mr={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(ob.Z,Mr),ob.Z.locals;class Et extends Al(kt){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Wi,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=No.bind(this,this)}createCollection(e){const t=new na(e);return this._viewCollections.add(t),t}registerChild(e){Ai(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){Ai(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new No(e)}extendTemplate(e){No.extend(this.template,e)}render(){if(this.isRendered)throw new D("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function jl({element:r,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:s}){gr(e)&&(e=e()),gr(n)&&(n=n());const c=function(y){return y&&y.parentNode?y.offsetParent===oe.document.body?null:y.offsetParent:null}(r),u=new mn(r),g=new mn(e);let m;const b=o&&function(y){y=Object.assign({top:0,bottom:0,left:0,right:0},y);const M=new mn(oe.window);return M.top+=y.top,M.height-=y.top,M.bottom-=y.bottom,M.height-=y.bottom,M}(s)||null,v={targetRect:g,elementRect:u,positionedElementAncestor:c,viewportRect:b};if(n||o){const y=n&&new mn(n).getVisible();Object.assign(v,{limiterRect:y,viewportRect:b}),m=function(M,B){const{elementRect:L}=B,j=L.getArea(),W=M.map(Re=>new vn(Re,B)).filter(Re=>!!Re.name);let X=0,he=null;for(const Re of W){const{limiterIntersectionArea:st,viewportIntersectionArea:Rt}=Re;if(st===j)return Re;const $t=Rt**2+st**2;$t>X&&(X=$t,he=Re)}return he}(t,v)||new vn(t[0],v)}else m=new vn(t[0],v);return m}function _n(r){const{scrollX:e,scrollY:t}=oe.window;return r.clone().moveBy(e,t)}class vn{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:s,name:c,config:u}=n;this.name=c,this.config=u,this._positioningFunctionCorrdinates={left:o,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=_n(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=_n(new mn(t)),o=Dl(t);let s=0,c=0;s-=n.left,c-=n.top,s+=t.scrollLeft,c+=t.scrollTop,s-=o.left,c-=o.top,e.moveBy(s,c)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function Ou(r){return e=>e+r}var rb=p(8793),U_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(rb.Z,U_),rb.Z.locals;const sb=Ou("px"),ab=oe.document.body;class Ei extends Et{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class",void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",sb),left:t.to("left",sb)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=Ei.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:ab,fitInViewport:!0},e),o=Ei._getOptimalPosition(n),s=parseInt(o.left),c=parseInt(o.top),u=o.name,g=o.config||{},{withArrow:m=!0}=g;this.top=c,this.left=s,this.position=u,this.withArrow=m}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=ag(e.target),n=e.limiter?ag(e.limiter):ab;this.listenTo(oe.document,"scroll",(o,s)=>{const c=s.target,u=t&&c.contains(t),g=n&&c.contains(n);!u&&!g&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(oe.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(oe.document,"scroll"),this.stopListening(oe.window,"resize")}}function ag(r){return Un(r)?r:El(r)?r.commonAncestorContainer:typeof r=="function"?ag(r()):null}function cg(r={}){const{sideOffset:e=Ei.arrowSideOffset,heightOffset:t=Ei.arrowHeightOffset,stickyVerticalOffset:n=Ei.stickyVerticalOffset,config:o}=r;return{northWestArrowSouthWest:(u,g)=>({top:s(u,g),left:u.left-e,name:"arrow_sw",...o&&{config:o}}),northWestArrowSouthMiddleWest:(u,g)=>({top:s(u,g),left:u.left-.25*g.width-e,name:"arrow_smw",...o&&{config:o}}),northWestArrowSouth:(u,g)=>({top:s(u,g),left:u.left-g.width/2,name:"arrow_s",...o&&{config:o}}),northWestArrowSouthMiddleEast:(u,g)=>({top:s(u,g),left:u.left-.75*g.width+e,name:"arrow_sme",...o&&{config:o}}),northWestArrowSouthEast:(u,g)=>({top:s(u,g),left:u.left-g.width+e,name:"arrow_se",...o&&{config:o}}),northArrowSouthWest:(u,g)=>({top:s(u,g),left:u.left+u.width/2-e,name:"arrow_sw",...o&&{config:o}}),northArrowSouthMiddleWest:(u,g)=>({top:s(u,g),left:u.left+u.width/2-.25*g.width-e,name:"arrow_smw",...o&&{config:o}}),northArrowSouth:(u,g)=>({top:s(u,g),left:u.left+u.width/2-g.width/2,name:"arrow_s",...o&&{config:o}}),northArrowSouthMiddleEast:(u,g)=>({top:s(u,g),left:u.left+u.width/2-.75*g.width+e,name:"arrow_sme",...o&&{config:o}}),northArrowSouthEast:(u,g)=>({top:s(u,g),left:u.left+u.width/2-g.width+e,name:"arrow_se",...o&&{config:o}}),northEastArrowSouthWest:(u,g)=>({top:s(u,g),left:u.right-e,name:"arrow_sw",...o&&{config:o}}),northEastArrowSouthMiddleWest:(u,g)=>({top:s(u,g),left:u.right-.25*g.width-e,name:"arrow_smw",...o&&{config:o}}),northEastArrowSouth:(u,g)=>({top:s(u,g),left:u.right-g.width/2,name:"arrow_s",...o&&{config:o}}),northEastArrowSouthMiddleEast:(u,g)=>({top:s(u,g),left:u.right-.75*g.width+e,name:"arrow_sme",...o&&{config:o}}),northEastArrowSouthEast:(u,g)=>({top:s(u,g),left:u.right-g.width+e,name:"arrow_se",...o&&{config:o}}),southWestArrowNorthWest:u=>({top:c(u),left:u.left-e,name:"arrow_nw",...o&&{config:o}}),southWestArrowNorthMiddleWest:(u,g)=>({top:c(u),left:u.left-.25*g.width-e,name:"arrow_nmw",...o&&{config:o}}),southWestArrowNorth:(u,g)=>({top:c(u),left:u.left-g.width/2,name:"arrow_n",...o&&{config:o}}),southWestArrowNorthMiddleEast:(u,g)=>({top:c(u),left:u.left-.75*g.width+e,name:"arrow_nme",...o&&{config:o}}),southWestArrowNorthEast:(u,g)=>({top:c(u),left:u.left-g.width+e,name:"arrow_ne",...o&&{config:o}}),southArrowNorthWest:u=>({top:c(u),left:u.left+u.width/2-e,name:"arrow_nw",...o&&{config:o}}),southArrowNorthMiddleWest:(u,g)=>({top:c(u),left:u.left+u.width/2-.25*g.width-e,name:"arrow_nmw",...o&&{config:o}}),southArrowNorth:(u,g)=>({top:c(u),left:u.left+u.width/2-g.width/2,name:"arrow_n",...o&&{config:o}}),southArrowNorthMiddleEast:(u,g)=>({top:c(u),left:u.left+u.width/2-.75*g.width+e,name:"arrow_nme",...o&&{config:o}}),southArrowNorthEast:(u,g)=>({top:c(u),left:u.left+u.width/2-g.width+e,name:"arrow_ne",...o&&{config:o}}),southEastArrowNorthWest:u=>({top:c(u),left:u.right-e,name:"arrow_nw",...o&&{config:o}}),southEastArrowNorthMiddleWest:(u,g)=>({top:c(u),left:u.right-.25*g.width-e,name:"arrow_nmw",...o&&{config:o}}),southEastArrowNorth:(u,g)=>({top:c(u),left:u.right-g.width/2,name:"arrow_n",...o&&{config:o}}),southEastArrowNorthMiddleEast:(u,g)=>({top:c(u),left:u.right-.75*g.width+e,name:"arrow_nme",...o&&{config:o}}),southEastArrowNorthEast:(u,g)=>({top:c(u),left:u.right-g.width+e,name:"arrow_ne",...o&&{config:o}}),westArrowEast:(u,g)=>({top:u.top+u.height/2-g.height/2,left:u.left-g.width-t,name:"arrow_e",...o&&{config:o}}),eastArrowWest:(u,g)=>({top:u.top+u.height/2-g.height/2,left:u.right+t,name:"arrow_w",...o&&{config:o}}),viewportStickyNorth:(u,g,m)=>u.getIntersection(m)?{top:m.top+n,left:u.left+u.width/2-g.width/2,name:"arrowless",config:{withArrow:!1,...o}}:null};function s(u,g){return u.top-g.height-t}function c(u){return u.bottom+t}}Ei.arrowSideOffset=25,Ei.arrowHeightOffset=10,Ei.stickyVerticalOffset=20,Ei._getOptimalPosition=jl,Ei.defaultPositions=cg();var sc=p(3332),lg={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(sc.Z,lg),sc.Z.locals;const cb="ck-tooltip";class Gn extends uu{constructor(e){if(super(),Gn._editors.add(e),Gn._instance)return Gn._instance;Gn._instance=this,this.tooltipTextView=new Et(e.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new Ei(e.locale),this.balloonPanelView.class=cb,this.balloonPanelView.content.add(this.tooltipTextView),this._resizeObserver=null,this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._pinTooltipDebounced=tc(this._pinTooltip,600),this.listenTo(oe.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(oe.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(oe.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(oe.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(oe.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(e){const t=e.ui.view&&e.ui.view.body;Gn._editors.delete(e),this.stopListening(e.ui),t&&t.has(this.balloonPanelView)&&t.remove(this.balloonPanelView),Gn._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),Gn._instance=null)}static getPositioningFunctions(e){const t=Gn.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[e]}_onEnterOrFocus(e,{target:t}){const n=ac(t);var o;n&&n!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(n,{text:(o=n).dataset.ckeTooltipText,position:o.dataset.ckeTooltipPosition||"s",cssClass:o.dataset.ckeTooltipClass||""}))}_onLeaveOrBlur(e,{target:t,relatedTarget:n}){if(e.name==="mouseleave"){if(!Un(t)||this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;const o=ac(t),s=ac(n);o&&o!==s&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(e,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(e,{text:t,position:n,cssClass:o}){const s=yn(Gn._editors.values()).ui.view.body;s.has(this.balloonPanelView)||s.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:e,positions:Gn.getPositioningFunctions(n)}),this._resizeObserver=new fn(e,()=>{ao(e)||this._unpinTooltip()}),this.balloonPanelView.class=[cb,o].filter(c=>c).join(" ");for(const c of Gn._editors)this.listenTo(c.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=e,this._currentTooltipPosition=n}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(const e of Gn._editors)this.stopListening(e.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver&&this._resizeObserver.destroy()}_updateTooltipPosition(){ao(this._currentElementWithTooltip)?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:Gn.getPositioningFunctions(this._currentTooltipPosition)}):this._unpinTooltip()}}function ac(r){return Un(r)?r.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}Gn.defaultBalloonPositions=cg({heightOffset:5,sideOffset:13}),Gn._editors=new Set,Gn._instance=null;class Gi extends kt{constructor(e){super(),this.editor=e,this.componentFactory=new z_(e),this.focusTracker=new co,this.tooltipManager=new Gn(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.isReady=!1,this.once("ready",()=>{this.isReady=!0}),this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update()),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor);for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,o;e.keystrokes.set("Alt+F10",(s,c)=>{const u=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(u)&&!Array.from(t.domRoots.values()).includes(u)&&(n=u);const g=this._getCurrentFocusedToolbarDefinition();g&&o||(o=this._getFocusableCandidateToolbarDefinitions());for(let m=0;m<o.length;m++){const b=o.shift();if(o.push(b),b!==g&&this._focusFocusableCandidateToolbar(b)){g&&g.options.afterBlur&&g.options.afterBlur();break}}c()}),e.keystrokes.set("Esc",(s,c)=>{const u=this._getCurrentFocusedToolbarDefinition();u&&(n?(n.focus(),n=null):e.editing.view.focus(),u.options.afterBlur&&u.options.afterBlur(),c())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:o}=t;(ao(n.element)||o.beforeFocus)&&e.push(t)}return e.sort((t,n)=>oa(t)-oa(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!ao(t.element)&&(t.focus(),!0)}}function oa(r){const{toolbarView:e,options:t}=r;let n=10;return ao(e.element)&&n--,t.isContextual&&n--,n}function Bu(r){return class extends r{setData(e){this.data.set(e)}getData(e){return this.data.get(e)}}}{const r=Bu(Object);Bu.setData=r.prototype.setData,Bu.getData=r.prototype.getData}function H_(r,e){r instanceof HTMLTextAreaElement&&(r.value=e),r.innerHTML=e}function dg(r){return class extends r{updateSourceElement(e=this.data.get()){if(!this.sourceElement)throw new D("editor-missing-sourceelement",this);const t=this.config.get("updateSourceElementOnDestroy"),n=this.sourceElement instanceof HTMLTextAreaElement;H_(this.sourceElement,t||n?e:"")}}}dg.updateSourceElement=dg(Object).prototype.updateSourceElement;class lb extends jt{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Wi({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new D("pendingactions-add-invalid-message",this);const t=new kt;return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const Rn={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path clip-rule="evenodd" d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path clip-rule="evenodd" d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>'};function Lu({emitter:r,activator:e,callback:t,contextElements:n}){r.listenTo(document,"mousedown",(o,s)=>{if(!e())return;const c=typeof s.composedPath=="function"?s.composedPath():[];for(const u of n)if(u.contains(s.target)||c.includes(u))return;t()})}function Oo(r){const e=r;e.set("_isCssTransitionsDisabled",!1),e.disableCssTransitions=()=>{e._isCssTransitionsDisabled=!0},e.enableCssTransitions=()=>{e._isCssTransitionsDisabled=!1},e.extendTemplate({attributes:{class:[e.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function mt({view:r}){r.listenTo(r.element,"submit",(e,t)=>{t.preventDefault(),r.fire("submit")},{useCapture:!0})}class db extends na{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new No({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=nm(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var Ki=p(6574),ub={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Ki.Z,ub),Ki.Z.locals;class ra extends Et{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",e.if("isColorInherited","ck-icon_inherit-color")],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");t&&(this.viewBox=t);for(const{name:n,value:o}of Array.from(e.attributes))ra.presentationalAttributeNames.includes(n)&&this.element.setAttribute(n,o);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}ra.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var Yt=p(4906),W_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Yt.Z,W_),Yt.Z.locals;class cn extends Et{constructor(e){super(e);const t=this.bindTemplate,n=T();this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new ra,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const o={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",s=>!s),t.if("isVisible","ck-hidden",s=>!s),t.to("isOn",s=>s?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",s=>s||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,s=>!s),"aria-pressed":t.to("isOn",s=>!!this.isToggleable&&String(!!s)),"data-cke-tooltip-text":t.to("_tooltipString"),"data-cke-tooltip-position":t.to("tooltipPosition")},children:this.children,on:{click:t.to(s=>{this.isEnabled?this.fire("execute"):s.preventDefault()})}};xt.isSafari&&(o.on.mousedown=t.to(s=>{this.focus(),s.preventDefault()})),this.setTemplate(o)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(e){const t=new Et,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new Et;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>Ip(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=Ip(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var Vl=p(5332),Y_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Vl.Z,Y_),Vl.Z.locals;class Ru extends cn{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new Et;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var hb=p(6781),$_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(hb.Z,$_),hb.Z.locals;const fb='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class q_ extends cn{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new ra;return e.content=fb,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var gb=p(7686),G_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(gb.Z,G_),gb.Z.locals;class ug extends Et{constructor(e){super(e);const t=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new To,this.focusTracker=new co,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new cn;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new cn,t=e.bindTemplate;return e.icon=fb,e.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":t.to("isOn"),"aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class K_ extends Et{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){if(this.children.length){const e=this.children.first;typeof e.focus=="function"?e.focus():z("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var pb=p(5485),Q_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(pb.Z,Q_),pb.Z.locals;class cc extends Et{constructor(e,t,n){super(e);const o=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new To,this.focusTracker=new co,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",s=>!s)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":o.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,n,o)=>{o&&(this.panelPosition==="auto"?this.panelView.position=cc._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:o,northEast:s,northWest:c,southMiddleEast:u,southMiddleWest:g,northMiddleEast:m,northMiddleWest:b}=cc.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,u,g,e,s,c,m,b,t]:[o,n,g,u,e,c,s,b,m,t]}}cc.defaultPanelPositions={south:(r,e)=>({top:r.bottom,left:r.left-(e.width-r.width)/2,name:"s"}),southEast:r=>({top:r.bottom,left:r.left,name:"se"}),southWest:(r,e)=>({top:r.bottom,left:r.left-e.width+r.width,name:"sw"}),southMiddleEast:(r,e)=>({top:r.bottom,left:r.left-(e.width-r.width)/4,name:"sme"}),southMiddleWest:(r,e)=>({top:r.bottom,left:r.left-3*(e.width-r.width)/4,name:"smw"}),north:(r,e)=>({top:r.top-e.height,left:r.left-(e.width-r.width)/2,name:"n"}),northEast:(r,e)=>({top:r.top-e.height,left:r.left,name:"ne"}),northWest:(r,e)=>({top:r.top-e.height,left:r.left-e.width+r.width,name:"nw"}),northMiddleEast:(r,e)=>({top:r.top-e.height,left:r.left-(e.width-r.width)/4,name:"nme"}),northMiddleWest:(r,e)=>({top:r.top-e.height,left:r.left-3*(e.width-r.width)/4,name:"nmw"})},cc._getOptimalPosition=jl;class hs{constructor(e){if(this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const o of n)e.keystrokeHandler.set(o,(s,c)=>{this[t](),c()})}}get first(){return this.focusables.find(hg)||null}get last(){return this.focusables.filter(hg).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const o=t.element===this.focusTracker.focusedElement;return o&&(e=n),o}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let o=(t+n+e)%n;do{const s=this.focusables.get(o);if(hg(s))return s;o=(o+n+e)%n}while(o!==t);return null}}function hg(r){return!(!r.focus||!ao(r.element))}class zu extends Et{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class Z_ extends Et{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function mb(r){return Array.isArray(r)?{items:r,removeItems:[]}:r?Object.assign({items:[],removeItems:[]},r):{items:[],removeItems:[]}}var bb=p(5542),ti={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(bb.Z,ti),bb.Z.locals;const{threeVerticalDots:Di}=Rn,J_={alignLeft:Rn.alignLeft,bold:Rn.bold,importExport:Rn.importExport,paragraph:Rn.paragraph,plus:Rn.plus,text:Rn.text,threeVerticalDots:Rn.threeVerticalDots};class fg extends Et{constructor(e,t){super(e);const n=this.bindTemplate,o=this.t;this.options=t||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new co,this.keystrokes=new To,this.set("class",void 0),this.set("isCompact",!1),this.itemsView=new X_(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const s=e.uiLanguageDirection==="rtl";this._focusCycler=new hs({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[s?"arrowright":"arrowleft","arrowup"],focusNext:[s?"arrowleft":"arrowright","arrowdown"]}});const c=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var u;this.options.shouldGroupWhenFull&&this.options.isFloating&&c.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:c,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(u=this,u.bindTemplate.to(g=>{g.target===u.element&&g.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new e0(this):new kb(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t,n){const o=mb(e),s=n||o.removeItems,c=this._cleanItemsConfiguration(o.items,t,s).map(u=>Je(u)?this._createNestedToolbarDropdown(u,t,s):u==="|"?new zu:u==="-"?new Z_:t.create(u)).filter(u=>!!u);this.items.addMany(c)}_cleanItemsConfiguration(e,t,n){const o=e.filter((s,c,u)=>s==="|"||n.indexOf(s)===-1&&(s==="-"?!this.options.shouldGroupWhenFull||(z("toolbarview-line-break-ignored-when-grouping-items",u),!1):!(!Je(s)&&!t.has(s))||(z("toolbarview-item-unavailable",{item:s}),!1)));return this._cleanSeparatorsAndLineBreaks(o)}_cleanSeparatorsAndLineBreaks(e){const t=c=>c!=="-"&&c!=="|",n=e.length,o=e.findIndex(t);if(o===-1)return[];const s=n-e.slice().reverse().findIndex(t);return e.slice(o,s).filter((c,u,g)=>t(c)?!0:!(u>0&&g[u-1]===c))}_createNestedToolbarDropdown(e,t,n){let{label:o,icon:s,items:c,tooltip:u=!0,withText:g=!1}=e;if(c=this._cleanItemsConfiguration(c,t,n),!c.length)return null;const m=fs(this.locale);return o||z("toolbarview-nested-toolbar-dropdown-missing-label",e),m.class="ck-toolbar__nested-toolbar-dropdown",m.buttonView.set({label:o,tooltip:u,withText:!!g}),s!==!1?m.buttonView.icon=J_[s]||s||Di:m.buttonView.withText=!0,pg(m,[]),m.toolbarView.fillFromConfig(c,t,n),m}}class X_ extends Et{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class kb{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class e0{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const o=n.index,s=Array.from(n.added);for(const c of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(c):this.ungroupedItems.remove(c);for(let c=o;c<o+s.length;c++){const u=s[c-o];c>this.ungroupedItems.length?this.groupedItems.add(u,c-this.ungroupedItems.length):this.ungroupedItems.add(u,c)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!ao(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new mn(e.lastChild),o=new mn(e);if(!this.cachedPadding){const s=oe.window.getComputedStyle(e),c=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(s[c])}return t==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new fn(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new zu),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=fs(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",pg(n,[]),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:Di}),n.toolbarView.items.bindTo(this.groupedItems).using(o=>o),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var wb=p(1046),t0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(wb.Z,t0),wb.Z.locals;class _b extends Et{constructor(e){super(e),this.items=this.createCollection(),this.focusTracker=new co,this.keystrokes=new To,this._focusCycler=new hs({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class vb extends Et{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",t.if("isVisible","ck-hidden",n=>!n)]},children:this.children})}focus(){this.children.first.focus()}}class n0 extends Et{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var Ab=p(7339),Cb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Ab.Z,Cb),Ab.Z.locals;var gg=p(3949),i0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(gg.Z,i0),gg.Z.locals;function fs(r,e=q_){const t=new e(r),n=new K_(r),o=new cc(r,t,n);return t.bind("isEnabled").to(o),t instanceof ug?t.arrowView.bind("isOn").to(o,"isOpen"):t.bind("isOn").to(o,"isOpen"),function(s){(function(c){c.on("render",()=>{Lu({emitter:c,activator:()=>c.isOpen,callback:()=>{c.isOpen=!1},contextElements:[c.element]})})})(s),function(c){c.on("execute",u=>{u.source instanceof Ru||(c.isOpen=!1)})}(s),function(c){c.focusTracker.on("change:isFocused",(u,g,m)=>{c.isOpen&&!m&&(c.isOpen=!1)})}(s),function(c){c.keystrokes.set("arrowdown",(u,g)=>{c.isOpen&&(c.panelView.focus(),g())}),c.keystrokes.set("arrowup",(u,g)=>{c.isOpen&&(c.panelView.focusLast(),g())})}(s),function(c){c.on("change:isOpen",(u,g,m)=>{m||c.panelView.element.contains(oe.document.activeElement)&&c.buttonView.focus()})}(s),function(c){c.on("change:isOpen",(u,g,m)=>{m&&c.panelView.focus()},{priority:"low"})}(s)}(o),o}function pg(r,e,t={}){const n=r.locale,o=n.t,s=r.toolbarView=new fg(n);s.set("ariaLabel",o("Dropdown toolbar")),r.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(c=>s.items.add(c)),t.enableActiveItemFocusOnDropdownOpen&&sa(r,()=>s.items.find(c=>c.isOn)),r.panelView.children.add(s),s.items.delegate("execute").to(r)}function yb(r,e){const t=r.locale,n=r.listView=new _b(t);n.items.bindTo(e).using(o=>{if(o.type==="separator")return new n0(t);if(o.type==="button"||o.type==="switchbutton"){const s=new vb(t);let c;return c=o.type==="button"?new cn(t):new Ru(t),c.bind(...Object.keys(o.model)).to(o.model),c.delegate("execute").to(s),s.children.add(c),s}return null}),r.panelView.children.add(n),n.items.delegate("execute").to(r),sa(r,()=>n.items.find(o=>o instanceof vb&&o.children.first.isOn))}function sa(r,e){r.on("change:isOpen",()=>{if(!r.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():z("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:I.low-10})}var xb=p(9688),o0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(xb.Z,o0),xb.Z.locals;class r0 extends Et{constructor(e){super(e),this.body=new db(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var Eb=p(3662),s0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Eb.Z,s0),Eb.Z.locals;class mg extends Et{constructor(e){super(e),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${T()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class Db extends r0{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new mg;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class a0 extends Et{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(o=>{const s=e.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",s),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}e.isRenderingInProgress?function n(o){e.once("change:isRenderingInProgress",(s,c,u)=>{u?n(o):t(o)})}(this):t(this)}}class c0 extends a0{constructor(e,t,n,o={}){super(e,t,n);const s=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var Sb=p(8847),l0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Sb.Z,l0),Sb.Z.locals;var Tb=p(4879),d0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Tb.Z,d0),Tb.Z.locals;class u0 extends Et{constructor(e){super(e),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new co,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class h0 extends u0{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var Mb=p(2577),f0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Mb.Z,f0),Mb.Z.locals;class bg extends Et{constructor(e,t){super(e);const n=`ck-labeled-field-view-${T()}`,o=`ck-labeled-field-view-status-${T()}`;this.fieldView=t(this,n,o),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(c,u)=>c||u);const s=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",s.to("class"),s.if("isEnabled","ck-disabled",c=>!c),s.if("isEmpty","ck-labeled-field-view_empty"),s.if("isFocused","ck-labeled-field-view_focused"),s.if("placeholder","ck-labeled-field-view_placeholder"),s.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(e){const t=new mg(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new Et(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function kg(r,e,t){const n=new h0(r.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(r,"isEnabled",o=>!o),n.bind("hasError").to(r,"errorText",o=>!!o),n.on("input",()=>{r.errorText=null}),r.bind("isEmpty","isFocused","placeholder").to(n),n}class wg extends jt{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Ib extends kt{constructor(e,t){super(),t&&Af(this,t),e&&this.set(e)}}var Pb=p(4650),g0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Pb.Z,g0),Pb.Z.locals;var Nb=p(7676),p0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Nb.Z,p0),Nb.Z.locals;const Fu=Ou("px");class ju extends ne{constructor(e){super(e),this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new Ei(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new D("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new D("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new D("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new m0(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[s,o])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new b0(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class m0 extends Et{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new co,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new cn(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class b0 extends Et{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Fu),left:n.to("left",Fu),width:n.to("width",Fu),height:n.to("height",Fu)}},children:this.content}),this.on("change:numberOfPanels",(o,s,c,u)=>{c>u?this._addPanels(c-u):this._removePanels(u-c),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Et;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:o}=new mn(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:o})}}}var Ob=p(5868),k0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Ob.Z,k0),Ob.Z.locals;const Ul=Ou("px");class _g extends Et{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new No({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?Ul(this._panelRect.height):null)}}}).render(),this._contentPanel=new No({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?Ul(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",n=>n?Ul(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",n=>n?Ul(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(oe.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Ul(-oe.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var vg=p(9695),Bb={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(vg.Z,Bb),vg.Z.locals;class w0 extends Gi{constructor(e,t){super(e),this.view=t,this._toolbarConfig=mb(e.config.get("toolbar")),this._elementReplacer=new tm}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,o=t.editing.view,s=n.editable,c=o.document.getRoot();s.name=c.rootName,n.render();const u=s.element;this.setEditableElement(s.name,u),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(u),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),o=e.sourceElement,s=e.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");s&&Gm({view:t,element:n,text:s,isDirectHost:!1,keepOnFocus:!0})}}var Lb=p(3143),_0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Lb.Z,_0),Lb.Z.locals;class Ag extends Db{constructor(e,t,n={}){super(e),this.stickyPanel=new _g(e),this.toolbar=new fg(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new c0(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Cg extends R_{constructor(e,t={}){if(!Un(e)&&t.initialData!==void 0)throw new D("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return Un(s)?(c=s,c instanceof HTMLTextAreaElement?c.value:c.innerHTML):s;var c}(e)),Un(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new Ag(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new w0(this,o),function(s){if(!gr(s.updateSourceElement))throw new D("attachtoform-missing-elementapi-interface",s);const c=s.sourceElement;if(function(u){return!!u&&u.tagName.toLowerCase()==="textarea"}(c)&&c.form){let u;const g=c.form,m=()=>s.updateSourceElement();gr(g.submit)&&(u=g.submit,g.submit=()=>{m(),u.apply(g)}),g.addEventListener("submit",m),s.on("destroy",()=>{g.removeEventListener("submit",m),u&&(g.submit=u)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const o=new this(e,t);n(o.initPlugins().then(()=>o.ui.init(Un(e)?e:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}er(Cg,Bu),er(Cg,dg);class yg extends os{constructor(e){super(e);const t=this.document;function n(o){return(s,c)=>{c.preventDefault();const u=c.dropRange?[c.dropRange]:null,g=new E(t,o);t.fire(g,{dataTransfer:c.dataTransfer,method:s.name,targetRanges:u,target:c.target}),g.stop.called&&c.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new em("clipboardData"in e?e.clipboardData:e.dataTransfer)};e.type!="drop"&&e.type!="dragover"||(t.dropRange=function(n,o){const s=o.target.ownerDocument,c=o.clientX,u=o.clientY;let g;return s.caretRangeFromPoint&&s.caretRangeFromPoint(c,u)?g=s.caretRangeFromPoint(c,u):o.rangeParent&&(g=s.createRange(),g.setStart(o.rangeParent,o.rangeOffset),g.collapse(!0)),g?n.domConverter.domRangeToView(g):null}(this.view,e)),this.fire(e.type,e,t)}}const Rb=["figcaption","li"];function Si(r){let e="";if(r.is("$text")||r.is("$textProxy"))e=r.data;else if(r.is("element","img")&&r.hasAttribute("alt"))e=r.getAttribute("alt");else if(r.is("element","br"))e=`
`;else{let t=null;for(const n of r.getChildren()){const o=Si(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(Rb.includes(t.name)||Rb.includes(n.name)?e+=`
`:e+=`

* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(i,a){(function(l,h){i.exports=h()})(bc,function(){const l="SweetAlert2:",h=C=>{const x=[];for(let P=0;P<C.length;P++)x.indexOf(C[P])===-1&&x.push(C[P]);return x},p=C=>C.charAt(0).toUpperCase()+C.slice(1),k=C=>Array.prototype.slice.call(C),_=C=>{console.warn("".concat(l," ").concat(typeof C=="object"?C.join(" "):C))},E=C=>{console.error("".concat(l," ").concat(C))},A=[],T=C=>{A.includes(C)||(A.push(C),_(C))},I=(C,x)=>{T('"'.concat(C,'" is deprecated and will be removed in the next major release. Please use "').concat(x,'" instead.'))},N=C=>typeof C=="function"?C():C,D=C=>C&&typeof C.toPromise=="function",z=C=>D(C)?C.toPromise():Promise.resolve(C),Z=C=>C&&Promise.resolve(C)===C,ae={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},we=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],ee={},q=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ie=C=>Object.prototype.hasOwnProperty.call(ae,C),fe=C=>we.indexOf(C)!==-1,_e=C=>ee[C],Ie=C=>{ie(C)||_('Unknown parameter "'.concat(C,'"'))},de=C=>{q.includes(C)&&_('The parameter "'.concat(C,'" is incompatible with toasts'))},le=C=>{_e(C)&&I(C,_e(C))},ye=C=>{!C.backdrop&&C.allowOutsideClick&&_('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const x in C)Ie(x),C.toast&&de(x),le(x)},Pe="swal2-",Le=C=>{const x={};for(const P in C)x[C[P]]=Pe+C[P];return x},$=Le(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),Ue=Le(["success","warning","info","question","error"]),Me=()=>document.body.querySelector(".".concat($.container)),Je=C=>{const x=Me();return x?x.querySelector(C):null},Xe=C=>Je(".".concat(C)),He=()=>Xe($.popup),ut=()=>Xe($.icon),An=()=>Xe($.title),jn=()=>Xe($["html-container"]),zt=()=>Xe($.image),kt=()=>Xe($["progress-steps"]),ni=()=>Xe($["validation-message"]),Vn=()=>Je(".".concat($.actions," .").concat($.confirm)),Q=()=>Je(".".concat($.actions," .").concat($.deny)),ve=()=>Xe($["input-label"]),De=()=>Je(".".concat($.loader)),ne=()=>Je(".".concat($.actions," .").concat($.cancel)),ot=()=>Xe($.actions),$e=()=>Xe($.footer),nt=()=>Xe($["timer-progress-bar"]),V=()=>Xe($.close),G=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,re=()=>{const C=k(He().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((P,H)=>{const me=parseInt(P.getAttribute("tabindex")),tt=parseInt(H.getAttribute("tabindex"));return me>tt?1:me<tt?-1:0}),x=k(He().querySelectorAll(G)).filter(P=>P.getAttribute("tabindex")!=="-1");return h(C.concat(x)).filter(P=>Ft(P))},ue=()=>!Te(document.body,$["toast-shown"])&&!Te(document.body,$["no-backdrop"]),ge=()=>He()&&Te(He(),$.toast),Se=()=>He().hasAttribute("data-loading"),Be={previousBodyPadding:null},xe=(C,x)=>{if(C.textContent="",x){const H=new DOMParser().parseFromString(x,"text/html");k(H.querySelector("head").childNodes).forEach(me=>{C.appendChild(me)}),k(H.querySelector("body").childNodes).forEach(me=>{C.appendChild(me)})}},Te=(C,x)=>{if(!x)return!1;const P=x.split(/\s+/);for(let H=0;H<P.length;H++)if(!C.classList.contains(P[H]))return!1;return!0},ke=(C,x)=>{k(C.classList).forEach(P=>{!Object.values($).includes(P)&&!Object.values(Ue).includes(P)&&!Object.values(x.showClass).includes(P)&&C.classList.remove(P)})},Ve=(C,x,P)=>{if(ke(C,x),x.customClass&&x.customClass[P]){if(typeof x.customClass[P]!="string"&&!x.customClass[P].forEach)return _("Invalid type of customClass.".concat(P,'! Expected string or iterable object, got "').concat(typeof x.customClass[P],'"'));ze(C,x.customClass[P])}},We=(C,x)=>{if(!x)return null;switch(x){case"select":case"textarea":case"file":return C.querySelector(".".concat($.popup," > .").concat($[x]));case"checkbox":return C.querySelector(".".concat($.popup," > .").concat($.checkbox," input"));case"radio":return C.querySelector(".".concat($.popup," > .").concat($.radio," input:checked"))||C.querySelector(".".concat($.popup," > .").concat($.radio," input:first-child"));case"range":return C.querySelector(".".concat($.popup," > .").concat($.range," input"));default:return C.querySelector(".".concat($.popup," > .").concat($.input))}},Fe=C=>{if(C.focus(),C.type!=="file"){const x=C.value;C.value="",C.value=x}},qe=(C,x,P)=>{!C||!x||(typeof x=="string"&&(x=x.split(/\s+/).filter(Boolean)),x.forEach(H=>{Array.isArray(C)?C.forEach(me=>{P?me.classList.add(H):me.classList.remove(H)}):P?C.classList.add(H):C.classList.remove(H)}))},ze=(C,x)=>{qe(C,x,!0)},gt=(C,x)=>{qe(C,x,!1)},it=(C,x)=>{const P=k(C.childNodes);for(let H=0;H<P.length;H++)if(Te(P[H],x))return P[H]},Kt=(C,x,P)=>{P==="".concat(parseInt(P))&&(P=parseInt(P)),P||parseInt(P)===0?C.style[x]=typeof P=="number"?"".concat(P,"px"):P:C.style.removeProperty(x)},Nt=function(C){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";C.style.display=x},on=C=>{C.style.display="none"},fr=(C,x,P,H)=>{const me=C.querySelector(x);me&&(me.style[P]=H)},Pi=(C,x,P)=>{x?Nt(C,P):on(C)},Ft=C=>!!(C&&(C.offsetWidth||C.offsetHeight||C.getClientRects().length)),$n=()=>!Ft(Vn())&&!Ft(Q())&&!Ft(ne()),Nn=C=>C.scrollHeight>C.clientHeight,Xi=C=>{const x=window.getComputedStyle(C),P=parseFloat(x.getPropertyValue("animation-duration")||"0"),H=parseFloat(x.getPropertyValue("transition-duration")||"0");return P>0||H>0},Nc=function(C){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const P=nt();Ft(P)&&(x&&(P.style.transition="none",P.style.width="100%"),setTimeout(()=>{P.style.transition="width ".concat(C/1e3,"s linear"),P.style.width="0%"},10))},Th=()=>{const C=nt(),x=parseInt(window.getComputedStyle(C).width);C.style.removeProperty("transition"),C.style.width="100%";const P=parseInt(window.getComputedStyle(C).width),H=x/P*100;C.style.removeProperty("transition"),C.style.width="".concat(H,"%")},pd=()=>typeof window>"u"||typeof document>"u",md=100,ht={},Yr=()=>{ht.previousActiveElement&&ht.previousActiveElement.focus?(ht.previousActiveElement.focus(),ht.previousActiveElement=null):document.body&&document.body.focus()},Ta=C=>new Promise(x=>{if(!C)return x();const P=window.scrollX,H=window.scrollY;ht.restoreFocusTimeout=setTimeout(()=>{Yr(),x()},md),window.scrollTo(P,H)}),Mh=`
 <div aria-labelledby="`.concat($.title,'" aria-describedby="').concat($["html-container"],'" class="').concat($.popup,`" tabindex="-1">
   <button type="button" class="`).concat($.close,`"></button>
   <ul class="`).concat($["progress-steps"],`"></ul>
   <div class="`).concat($.icon,`"></div>
   <img class="`).concat($.image,`" />
   <h2 class="`).concat($.title,'" id="').concat($.title,`"></h2>
   <div class="`).concat($["html-container"],'" id="').concat($["html-container"],`"></div>
   <input class="`).concat($.input,`" />
   <input type="file" class="`).concat($.file,`" />
   <div class="`).concat($.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat($.select,`"></select>
   <div class="`).concat($.radio,`"></div>
   <label for="`).concat($.checkbox,'" class="').concat($.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat($.label,`"></span>
   </label>
   <textarea class="`).concat($.textarea,`"></textarea>
   <div class="`).concat($["validation-message"],'" id="').concat($["validation-message"],`"></div>
   <div class="`).concat($.actions,`">
     <div class="`).concat($.loader,`"></div>
     <button type="button" class="`).concat($.confirm,`"></button>
     <button type="button" class="`).concat($.deny,`"></button>
     <button type="button" class="`).concat($.cancel,`"></button>
   </div>
   <div class="`).concat($.footer,`"></div>
   <div class="`).concat($["timer-progress-bar-container"],`">
     <div class="`).concat($["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Ih=()=>{const C=Me();return C?(C.remove(),gt([document.documentElement,document.body],[$["no-backdrop"],$["toast-shown"],$["has-column"]]),!0):!1},Ho=()=>{ht.currentInstance.resetValidationMessage()},Ph=()=>{const C=He(),x=it(C,$.input),P=it(C,$.file),H=C.querySelector(".".concat($.range," input")),me=C.querySelector(".".concat($.range," output")),tt=it(C,$.select),hn=C.querySelector(".".concat($.checkbox," input")),Cn=it(C,$.textarea);x.oninput=Ho,P.onchange=Ho,tt.onchange=Ho,hn.onchange=Ho,Cn.oninput=Ho,H.oninput=()=>{Ho(),me.value=H.value},H.onchange=()=>{Ho(),H.nextSibling.value=H.value}},gr=C=>typeof C=="string"?document.querySelector(C):C,Oc=C=>{const x=He();x.setAttribute("role",C.toast?"alert":"dialog"),x.setAttribute("aria-live",C.toast?"polite":"assertive"),C.toast||x.setAttribute("aria-modal","true")},Ma=C=>{window.getComputedStyle(C).direction==="rtl"&&ze(Me(),$.rtl)},Nh=C=>{const x=Ih();if(pd()){E("SweetAlert2 requires document to initialize");return}const P=document.createElement("div");P.className=$.container,x&&ze(P,$["no-transition"]),xe(P,Mh);const H=gr(C.target);H.appendChild(P),Oc(C),Ma(H),Ph()},Ts=(C,x)=>{C instanceof HTMLElement?x.appendChild(C):typeof C=="object"?pr(C,x):C&&xe(x,C)},pr=(C,x)=>{C.jquery?Oh(x,C):xe(x,C.toString())},Oh=(C,x)=>{if(C.textContent="",0 in x)for(let P=0;P in x;P++)C.appendChild(x[P].cloneNode(!0));else C.appendChild(x.cloneNode(!0))},Ms=(()=>{if(pd())return!1;const C=document.createElement("div"),x={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const P in x)if(Object.prototype.hasOwnProperty.call(x,P)&&typeof C.style[P]<"u")return x[P];return!1})(),Bh=()=>{const C=document.createElement("div");C.className=$["scrollbar-measure"],document.body.appendChild(C);const x=C.getBoundingClientRect().width-C.clientWidth;return document.body.removeChild(C),x},Lh=(C,x)=>{const P=ot(),H=De();!x.showConfirmButton&&!x.showDenyButton&&!x.showCancelButton?on(P):Nt(P),Ve(P,x,"actions"),Rh(P,H,x),xe(H,x.loaderHtml),Ve(H,x,"loader")};function Rh(C,x,P){const H=Vn(),me=Q(),tt=ne();Bc(H,"confirm",P),Bc(me,"deny",P),Bc(tt,"cancel",P),zh(H,me,tt,P),P.reverseButtons&&(P.toast?(C.insertBefore(tt,H),C.insertBefore(me,H)):(C.insertBefore(tt,x),C.insertBefore(me,x),C.insertBefore(H,x)))}function zh(C,x,P,H){if(!H.buttonsStyling)return gt([C,x,P],$.styled);ze([C,x,P],$.styled),H.confirmButtonColor&&(C.style.backgroundColor=H.confirmButtonColor,ze(C,$["default-outline"])),H.denyButtonColor&&(x.style.backgroundColor=H.denyButtonColor,ze(x,$["default-outline"])),H.cancelButtonColor&&(P.style.backgroundColor=H.cancelButtonColor,ze(P,$["default-outline"]))}function Bc(C,x,P){Pi(C,P["show".concat(p(x),"Button")],"inline-block"),xe(C,P["".concat(x,"ButtonText")]),C.setAttribute("aria-label",P["".concat(x,"ButtonAriaLabel")]),C.className=$[x],Ve(C,P,"".concat(x,"Button")),ze(C,P["".concat(x,"ButtonClass")])}function bd(C,x){typeof x=="string"?C.style.background=x:x||ze([document.documentElement,document.body],$["no-backdrop"])}function mr(C,x){x in $?ze(C,$[x]):(_('The "position" parameter is not valid, defaulting to "center"'),ze(C,$.center))}function Is(C,x){if(x&&typeof x=="string"){const P="grow-".concat(x);P in $&&ze(C,$[P])}}const Ps=(C,x)=>{const P=Me();!P||(bd(P,x.backdrop),mr(P,x.position),Is(P,x.grow),Ve(P,x,"container"))};var wt={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const Fh=["input","file","range","select","radio","checkbox","textarea"],jh=(C,x)=>{const P=He(),H=wt.innerParams.get(C),me=!H||x.input!==H.input;Fh.forEach(tt=>{const hn=$[tt],Cn=it(P,hn);Pa(tt,x.inputAttributes),Cn.className=hn,me&&on(Cn)}),x.input&&(me&&Ia(x),Uh(x))},Ia=C=>{if(!ii[C.input])return E('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(C.input,'"'));const x=Lc(C.input),P=ii[C.input](x,C);Nt(P),setTimeout(()=>{Fe(P)})},Vh=C=>{for(let x=0;x<C.attributes.length;x++){const P=C.attributes[x].name;["type","value","style"].includes(P)||C.removeAttribute(P)}},Pa=(C,x)=>{const P=We(He(),C);if(!!P){Vh(P);for(const H in x)P.setAttribute(H,x[H])}},Uh=C=>{const x=Lc(C.input);C.customClass&&ze(x,C.customClass.input)},Wo=(C,x)=>{(!C.placeholder||x.inputPlaceholder)&&(C.placeholder=x.inputPlaceholder)},$r=(C,x,P)=>{if(P.inputLabel){C.id=$.input;const H=document.createElement("label"),me=$["input-label"];H.setAttribute("for",C.id),H.className=me,ze(H,P.customClass.inputLabel),H.innerText=P.inputLabel,x.insertAdjacentElement("beforebegin",H)}},Lc=C=>{const x=$[C]?$[C]:$.input;return it(He(),x)},ii={};ii.text=ii.email=ii.password=ii.number=ii.tel=ii.url=(C,x)=>(typeof x.inputValue=="string"||typeof x.inputValue=="number"?C.value=x.inputValue:Z(x.inputValue)||_('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof x.inputValue,'"')),$r(C,C,x),Wo(C,x),C.type=x.input,C),ii.file=(C,x)=>($r(C,C,x),Wo(C,x),C),ii.range=(C,x)=>{const P=C.querySelector("input"),H=C.querySelector("output");return P.value=x.inputValue,P.type=x.input,H.value=x.inputValue,$r(P,C,x),C},ii.select=(C,x)=>{if(C.textContent="",x.inputPlaceholder){const P=document.createElement("option");xe(P,x.inputPlaceholder),P.value="",P.disabled=!0,P.selected=!0,C.appendChild(P)}return $r(C,C,x),C},ii.radio=C=>(C.textContent="",C),ii.checkbox=(C,x)=>{const P=We(He(),"checkbox");P.value="1",P.id=$.checkbox,P.checked=Boolean(x.inputValue);const H=C.querySelector("span");return xe(H,x.inputPlaceholder),C},ii.textarea=(C,x)=>{C.value=x.inputValue,Wo(C,x),$r(C,C,x);const P=H=>parseInt(window.getComputedStyle(H).marginLeft)+parseInt(window.getComputedStyle(H).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const H=parseInt(window.getComputedStyle(He()).width),me=()=>{const tt=C.offsetWidth+P(C);tt>H?He().style.width="".concat(tt,"px"):He().style.width=null};new MutationObserver(me).observe(C,{attributes:!0,attributeFilter:["style"]})}}),C};const Ns=(C,x)=>{const P=jn();Ve(P,x,"htmlContainer"),x.html?(Ts(x.html,P),Nt(P,"block")):x.text?(P.textContent=x.text,Nt(P,"block")):on(P),jh(C,x)},Hh=(C,x)=>{const P=$e();Pi(P,x.footer),x.footer&&Ts(x.footer,P),Ve(P,x,"footer")},Wh=(C,x)=>{const P=V();xe(P,x.closeButtonHtml),Ve(P,x,"closeButton"),Pi(P,x.showCloseButton),P.setAttribute("aria-label",x.closeButtonAriaLabel)},Yh=(C,x)=>{const P=wt.innerParams.get(C),H=ut();if(P&&x.icon===P.icon){vo(H,x),kd(H,x);return}if(!x.icon&&!x.iconHtml)return on(H);if(x.icon&&Object.keys(Ue).indexOf(x.icon)===-1)return E('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(x.icon,'"')),on(H);Nt(H),vo(H,x),kd(H,x),ze(H,x.showClass.icon)},kd=(C,x)=>{for(const P in Ue)x.icon!==P&&gt(C,Ue[P]);ze(C,Ue[x.icon]),Bs(C,x),br(),Ve(C,x,"icon")},br=()=>{const C=He(),x=window.getComputedStyle(C).getPropertyValue("background-color"),P=C.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let H=0;H<P.length;H++)P[H].style.backgroundColor=x},Os=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,wd=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,vo=(C,x)=>{C.textContent="",x.iconHtml?xe(C,Rc(x.iconHtml)):x.icon==="success"?xe(C,Os):x.icon==="error"?xe(C,wd):xe(C,Rc({question:"?",warning:"!",info:"i"}[x.icon]))},Bs=(C,x)=>{if(!!x.iconColor){C.style.color=x.iconColor,C.style.borderColor=x.iconColor;for(const P of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])fr(C,P,"backgroundColor",x.iconColor);fr(C,".swal2-success-ring","borderColor",x.iconColor)}},Rc=C=>'<div class="'.concat($["icon-content"],'">').concat(C,"</div>"),kr=(C,x)=>{const P=zt();if(!x.imageUrl)return on(P);Nt(P,""),P.setAttribute("src",x.imageUrl),P.setAttribute("alt",x.imageAlt),Kt(P,"width",x.imageWidth),Kt(P,"height",x.imageHeight),P.className=$.image,Ve(P,x,"image")},Na=C=>{const x=document.createElement("li");return ze(x,$["progress-step"]),xe(x,C),x},$h=C=>{const x=document.createElement("li");return ze(x,$["progress-step-line"]),C.progressStepsDistance&&(x.style.width=C.progressStepsDistance),x},Oa=(C,x)=>{const P=kt();if(!x.progressSteps||x.progressSteps.length===0)return on(P);Nt(P),P.textContent="",x.currentProgressStep>=x.progressSteps.length&&_("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),x.progressSteps.forEach((H,me)=>{const tt=Na(H);if(P.appendChild(tt),me===x.currentProgressStep&&ze(tt,$["active-progress-step"]),me!==x.progressSteps.length-1){const hn=$h(x);P.appendChild(hn)}})},wr=(C,x)=>{const P=An();Pi(P,x.title||x.titleText,"block"),x.title&&Ts(x.title,P),x.titleText&&(P.innerText=x.titleText),Ve(P,x,"title")},zc=(C,x)=>{const P=Me(),H=He();x.toast?(Kt(P,"width",x.width),H.style.width="100%",H.insertBefore(De(),ut())):Kt(H,"width",x.width),Kt(H,"padding",x.padding),x.color&&(H.style.color=x.color),x.background&&(H.style.background=x.background),on(ni()),_d(H,x)},_d=(C,x)=>{C.className="".concat($.popup," ").concat(Ft(C)?x.showClass.popup:""),x.toast?(ze([document.documentElement,document.body],$["toast-shown"]),ze(C,$.toast)):ze(C,$.modal),Ve(C,x,"popup"),typeof x.customClass=="string"&&ze(C,x.customClass),x.icon&&ze(C,$["icon-".concat(x.icon)])},Ba=(C,x)=>{zc(C,x),Ps(C,x),Oa(C,x),Yh(C,x),kr(C,x),wr(C,x),Wh(C,x),Ns(C,x),Lh(C,x),Hh(C,x),typeof x.didRender=="function"&&x.didRender(He())},Yo=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Fc=()=>{k(document.body.children).forEach(x=>{x===Me()||x.contains(Me())||(x.hasAttribute("aria-hidden")&&x.setAttribute("data-previous-aria-hidden",x.getAttribute("aria-hidden")),x.setAttribute("aria-hidden","true"))})},Ao=()=>{k(document.body.children).forEach(x=>{x.hasAttribute("data-previous-aria-hidden")?(x.setAttribute("aria-hidden",x.getAttribute("data-previous-aria-hidden")),x.removeAttribute("data-previous-aria-hidden")):x.removeAttribute("aria-hidden")})},qn=["swal-title","swal-html","swal-footer"],vd=C=>{const x=typeof C.template=="string"?document.querySelector(C.template):C.template;if(!x)return{};const P=x.content;return yd(P),Object.assign(Ad(P),jc(P),Vc(P),qr(P),Cd(P),Uc(P,qn))},Ad=C=>{const x={};return k(C.querySelectorAll("swal-param")).forEach(P=>{Ot(P,["name","value"]);const H=P.getAttribute("name"),me=P.getAttribute("value");typeof ae[H]=="boolean"&&me==="false"&&(x[H]=!1),typeof ae[H]=="object"&&(x[H]=JSON.parse(me))}),x},jc=C=>{const x={};return k(C.querySelectorAll("swal-button")).forEach(P=>{Ot(P,["type","color","aria-label"]);const H=P.getAttribute("type");x["".concat(H,"ButtonText")]=P.innerHTML,x["show".concat(p(H),"Button")]=!0,P.hasAttribute("color")&&(x["".concat(H,"ButtonColor")]=P.getAttribute("color")),P.hasAttribute("aria-label")&&(x["".concat(H,"ButtonAriaLabel")]=P.getAttribute("aria-label"))}),x},Vc=C=>{const x={},P=C.querySelector("swal-image");return P&&(Ot(P,["src","width","height","alt"]),P.hasAttribute("src")&&(x.imageUrl=P.getAttribute("src")),P.hasAttribute("width")&&(x.imageWidth=P.getAttribute("width")),P.hasAttribute("height")&&(x.imageHeight=P.getAttribute("height")),P.hasAttribute("alt")&&(x.imageAlt=P.getAttribute("alt"))),x},qr=C=>{const x={},P=C.querySelector("swal-icon");return P&&(Ot(P,["type","color"]),P.hasAttribute("type")&&(x.icon=P.getAttribute("type")),P.hasAttribute("color")&&(x.iconColor=P.getAttribute("color")),x.iconHtml=P.innerHTML),x},Cd=C=>{const x={},P=C.querySelector("swal-input");P&&(Ot(P,["type","label","placeholder","value"]),x.input=P.getAttribute("type")||"text",P.hasAttribute("label")&&(x.inputLabel=P.getAttribute("label")),P.hasAttribute("placeholder")&&(x.inputPlaceholder=P.getAttribute("placeholder")),P.hasAttribute("value")&&(x.inputValue=P.getAttribute("value")));const H=C.querySelectorAll("swal-input-option");return H.length&&(x.inputOptions={},k(H).forEach(me=>{Ot(me,["value"]);const tt=me.getAttribute("value"),hn=me.innerHTML;x.inputOptions[tt]=hn})),x},Uc=(C,x)=>{const P={};for(const H in x){const me=x[H],tt=C.querySelector(me);tt&&(Ot(tt,[]),P[me.replace(/^swal-/,"")]=tt.innerHTML.trim())}return P},yd=C=>{const x=qn.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);k(C.children).forEach(P=>{const H=P.tagName.toLowerCase();x.indexOf(H)===-1&&_("Unrecognized element <".concat(H,">"))})},Ot=(C,x)=>{k(C.attributes).forEach(P=>{x.indexOf(P.name)===-1&&_(['Unrecognized attribute "'.concat(P.name,'" on <').concat(C.tagName.toLowerCase(),">."),"".concat(x.length?"Allowed attributes are: ".concat(x.join(", ")):"To set the value, use HTML within the element.")])})};var Hc={email:(C,x)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(C)?Promise.resolve():Promise.resolve(x||"Invalid email address"),url:(C,x)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(C)?Promise.resolve():Promise.resolve(x||"Invalid URL")};function Wc(C){C.inputValidator||Object.keys(Hc).forEach(x=>{C.input===x&&(C.inputValidator=Hc[x])})}function xd(C){(!C.target||typeof C.target=="string"&&!document.querySelector(C.target)||typeof C.target!="string"&&!C.target.appendChild)&&(_('Target parameter is not valid, defaulting to "body"'),C.target="body")}function Ls(C){Wc(C),C.showLoaderOnConfirm&&!C.preConfirm&&_(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),xd(C),typeof C.title=="string"&&(C.title=C.title.split(`
`).join("<br />")),Nh(C)}class Yc{constructor(x,P){this.callback=x,this.remaining=P,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(x){const P=this.running;return P&&this.stop(),this.remaining+=x,P&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const $o=()=>{Be.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Be.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(Be.previousBodyPadding+Bh(),"px"))},Ed=()=>{Be.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(Be.previousBodyPadding,"px"),Be.previousBodyPadding=null)},$c=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Te(document.body,$.iosfix)){const x=document.body.scrollTop;document.body.style.top="".concat(x*-1,"px"),ze(document.body,$.iosfix),Dd(),qh()}},qh=()=>{const C=navigator.userAgent,x=!!C.match(/iPad/i)||!!C.match(/iPhone/i),P=!!C.match(/WebKit/i);x&&P&&!C.match(/CriOS/i)&&He().scrollHeight>window.innerHeight-44&&(Me().style.paddingBottom="".concat(44,"px"))},Dd=()=>{const C=Me();let x;C.ontouchstart=P=>{x=Gh(P)},C.ontouchmove=P=>{x&&(P.preventDefault(),P.stopPropagation())}},Gh=C=>{const x=C.target,P=Me();return tn(C)||rn(C)?!1:x===P||!Nn(P)&&x.tagName!=="INPUT"&&x.tagName!=="TEXTAREA"&&!(Nn(jn())&&jn().contains(x))},tn=C=>C.touches&&C.touches.length&&C.touches[0].touchType==="stylus",rn=C=>C.touches&&C.touches.length>1,Kh=()=>{if(Te(document.body,$.iosfix)){const C=parseInt(document.body.style.top,10);gt(document.body,$.iosfix),document.body.style.top="",document.body.scrollTop=C*-1}},Sd=10,La=C=>{const x=Me(),P=He();typeof C.willOpen=="function"&&C.willOpen(P);const me=window.getComputedStyle(document.body).overflowY;Td(x,P,C),setTimeout(()=>{Qh(x,P)},Sd),ue()&&(Zh(x,C.scrollbarPadding,me),Fc()),!ge()&&!ht.previousActiveElement&&(ht.previousActiveElement=document.activeElement),typeof C.didOpen=="function"&&setTimeout(()=>C.didOpen(P)),gt(x,$["no-transition"])},Ra=C=>{const x=He();if(C.target!==x)return;const P=Me();x.removeEventListener(Ms,Ra),P.style.overflowY="auto"},Qh=(C,x)=>{Ms&&Xi(x)?(C.style.overflowY="hidden",x.addEventListener(Ms,Ra)):C.style.overflowY="auto"},Zh=(C,x,P)=>{$c(),x&&P!=="hidden"&&$o(),setTimeout(()=>{C.scrollTop=0})},Td=(C,x,P)=>{ze(C,P.showClass.backdrop),x.style.setProperty("opacity","0","important"),Nt(x,"grid"),setTimeout(()=>{ze(x,P.showClass.popup),x.style.removeProperty("opacity")},Sd),ze([document.documentElement,document.body],$.shown),P.heightAuto&&P.backdrop&&!P.toast&&ze([document.documentElement,document.body],$["height-auto"])},Gr=C=>{let x=He();x||new Ar,x=He();const P=De();ge()?on(ut()):wn(x,C),Nt(P),x.setAttribute("data-loading",!0),x.setAttribute("aria-busy",!0),x.focus()},wn=(C,x)=>{const P=ot(),H=De();!x&&Ft(Vn())&&(x=Vn()),Nt(P),x&&(on(x),H.setAttribute("data-button-to-replace",x.className)),H.parentNode.insertBefore(H,x),ze([C,P],$.loading)},qc=(C,x)=>{x.input==="select"||x.input==="radio"?Kc(C,x):["text","email","number","tel","textarea"].includes(x.input)&&(D(x.inputValue)||Z(x.inputValue))&&(Gr(Vn()),Qc(C,x))},qo=(C,x)=>{const P=C.getInput();if(!P)return null;switch(x.input){case"checkbox":return Gc(P);case"radio":return za(P);case"file":return _i(P);default:return x.inputAutoTrim?P.value.trim():P.value}},Gc=C=>C.checked?1:0,za=C=>C.checked?C.value:null,_i=C=>C.files.length?C.getAttribute("multiple")!==null?C.files:C.files[0]:null,Kc=(C,x)=>{const P=He(),H=me=>Md[x.input](P,Rs(me),x);D(x.inputOptions)||Z(x.inputOptions)?(Gr(Vn()),z(x.inputOptions).then(me=>{C.hideLoading(),H(me)})):typeof x.inputOptions=="object"?H(x.inputOptions):E("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof x.inputOptions))},Qc=(C,x)=>{const P=C.getInput();on(P),z(x.inputValue).then(H=>{P.value=x.input==="number"?parseFloat(H)||0:"".concat(H),Nt(P),P.focus(),C.hideLoading()}).catch(H=>{E("Error in inputValue promise: ".concat(H)),P.value="",Nt(P),P.focus(),C.hideLoading()})},Md={select:(C,x,P)=>{const H=it(C,$.select),me=(tt,hn,Cn)=>{const Hn=document.createElement("option");Hn.value=Cn,xe(Hn,hn),Hn.selected=Zc(Cn,P.inputValue),tt.appendChild(Hn)};x.forEach(tt=>{const hn=tt[0],Cn=tt[1];if(Array.isArray(Cn)){const Hn=document.createElement("optgroup");Hn.label=hn,Hn.disabled=!1,H.appendChild(Hn),Cn.forEach(Qo=>me(Hn,Qo[1],Qo[0]))}else me(H,Cn,hn)}),H.focus()},radio:(C,x,P)=>{const H=it(C,$.radio);x.forEach(tt=>{const hn=tt[0],Cn=tt[1],Hn=document.createElement("input"),Qo=document.createElement("label");Hn.type="radio",Hn.name=$.radio,Hn.value=hn,Zc(hn,P.inputValue)&&(Hn.checked=!0);const Ka=document.createElement("span");xe(Ka,Cn),Ka.className=$.label,Qo.appendChild(Hn),Qo.appendChild(Ka),H.appendChild(Qo)});const me=H.querySelectorAll("input");me.length&&me[0].focus()}},Rs=C=>{const x=[];return typeof Map<"u"&&C instanceof Map?C.forEach((P,H)=>{let me=P;typeof me=="object"&&(me=Rs(me)),x.push([H,me])}):Object.keys(C).forEach(P=>{let H=C[P];typeof H=="object"&&(H=Rs(H)),x.push([P,H])}),x},Zc=(C,x)=>x&&x.toString()===C.toString(),Jc=C=>{const x=wt.innerParams.get(C);C.disableButtons(),x.input?ui(C,"confirm"):zs(C,!0)},oi=C=>{const x=wt.innerParams.get(C);C.disableButtons(),x.returnInputValueOnDeny?ui(C,"deny"):Fa(C,!1)},Jh=(C,x)=>{C.disableButtons(),x(Yo.cancel)},ui=(C,x)=>{const P=wt.innerParams.get(C);if(!P.input)return E('The "input" parameter is needed to be set when using returnInputValueOn'.concat(p(x)));const H=qo(C,P);P.inputValidator?Id(C,H,x):C.getInput().checkValidity()?x==="deny"?Fa(C,H):zs(C,H):(C.enableButtons(),C.showValidationMessage(P.validationMessage))},Id=(C,x,P)=>{const H=wt.innerParams.get(C);C.disableInput(),Promise.resolve().then(()=>z(H.inputValidator(x,H.validationMessage))).then(tt=>{C.enableButtons(),C.enableInput(),tt?C.showValidationMessage(tt):P==="deny"?Fa(C,x):zs(C,x)})},Fa=(C,x)=>{const P=wt.innerParams.get(C||void 0);P.showLoaderOnDeny&&Gr(Q()),P.preDeny?(wt.awaitingPromise.set(C||void 0,!0),Promise.resolve().then(()=>z(P.preDeny(x,P.validationMessage))).then(me=>{me===!1?C.hideLoading():C.closePopup({isDenied:!0,value:typeof me>"u"?x:me})}).catch(me=>_r(C||void 0,me))):C.closePopup({isDenied:!0,value:x})},eo=(C,x)=>{C.closePopup({isConfirmed:!0,value:x})},_r=(C,x)=>{C.rejectPromise(x)},zs=(C,x)=>{const P=wt.innerParams.get(C||void 0);P.showLoaderOnConfirm&&Gr(),P.preConfirm?(C.resetValidationMessage(),wt.awaitingPromise.set(C||void 0,!0),Promise.resolve().then(()=>z(P.preConfirm(x,P.validationMessage))).then(me=>{Ft(ni())||me===!1?C.hideLoading():eo(C,typeof me>"u"?x:me)}).catch(me=>_r(C||void 0,me))):eo(C,x)},sn=(C,x,P)=>{wt.innerParams.get(C).toast?to(C,x,P):(ja(x),Pd(x),Nd(C,x,P))},to=(C,x,P)=>{x.popup.onclick=()=>{const H=wt.innerParams.get(C);H&&(Fs(H)||H.timer||H.input)||P(Yo.close)}},Fs=C=>C.showConfirmButton||C.showDenyButton||C.showCancelButton||C.showCloseButton;let Kr=!1;const ja=C=>{C.popup.onmousedown=()=>{C.container.onmouseup=function(x){C.container.onmouseup=void 0,x.target===C.container&&(Kr=!0)}}},Pd=C=>{C.container.onmousedown=()=>{C.popup.onmouseup=function(x){C.popup.onmouseup=void 0,(x.target===C.popup||C.popup.contains(x.target))&&(Kr=!0)}}},Nd=(C,x,P)=>{x.container.onclick=H=>{const me=wt.innerParams.get(C);if(Kr){Kr=!1;return}H.target===x.container&&N(me.allowOutsideClick)&&P(Yo.backdrop)}},Od=()=>Ft(He()),Va=()=>Vn()&&Vn().click(),Ua=()=>Q()&&Q().click(),Qr=()=>ne()&&ne().click(),Xh=(C,x,P,H)=>{x.keydownTarget&&x.keydownHandlerAdded&&(x.keydownTarget.removeEventListener("keydown",x.keydownHandler,{capture:x.keydownListenerCapture}),x.keydownHandlerAdded=!1),P.toast||(x.keydownHandler=me=>vr(C,me,H),x.keydownTarget=P.keydownListenerCapture?window:He(),x.keydownListenerCapture=P.keydownListenerCapture,x.keydownTarget.addEventListener("keydown",x.keydownHandler,{capture:x.keydownListenerCapture}),x.keydownHandlerAdded=!0)},Ha=(C,x,P)=>{const H=re();if(H.length)return x=x+P,x===H.length?x=0:x===-1&&(x=H.length-1),H[x].focus();He().focus()},Xc=["ArrowRight","ArrowDown"],Co=["ArrowLeft","ArrowUp"],vr=(C,x,P)=>{const H=wt.innerParams.get(C);!H||(H.stopKeydownPropagation&&x.stopPropagation(),x.key==="Enter"?Bd(C,x,H):x.key==="Tab"?ef(x,H):[...Xc,...Co].includes(x.key)?Zr(x.key):x.key==="Escape"&&js(x,H,P))},Bd=(C,x,P)=>{if(!(!N(P.allowEnterKey)||x.isComposing)&&x.target&&C.getInput()&&x.target.outerHTML===C.getInput().outerHTML){if(["textarea","file"].includes(P.input))return;Va(),x.preventDefault()}},ef=(C,x)=>{const P=C.target,H=re();let me=-1;for(let tt=0;tt<H.length;tt++)if(P===H[tt]){me=tt;break}C.shiftKey?Ha(x,me,-1):Ha(x,me,1),C.stopPropagation(),C.preventDefault()},Zr=C=>{const x=Vn(),P=Q(),H=ne();if(![x,P,H].includes(document.activeElement))return;const me=Xc.includes(C)?"nextElementSibling":"previousElementSibling",tt=document.activeElement[me];tt instanceof HTMLElement&&tt.focus()},js=(C,x,P)=>{N(x.allowEscapeKey)&&(C.preventDefault(),P(Yo.esc))},tf=C=>typeof C=="object"&&C.jquery,el=C=>C instanceof Element||tf(C),vi=C=>{const x={};return typeof C[0]=="object"&&!el(C[0])?Object.assign(x,C[0]):["title","html","icon"].forEach((P,H)=>{const me=C[H];typeof me=="string"||el(me)?x[P]=me:me!==void 0&&E("Unexpected type of ".concat(P,'! Expected "string" or "Element", got ').concat(typeof me))}),x};function Wa(){const C=this;for(var x=arguments.length,P=new Array(x),H=0;H<x;H++)P[H]=arguments[H];return new C(...P)}function Jr(C){class x extends this{_main(H,me){return super._main(H,Object.assign({},C,me))}}return x}const Ld=()=>ht.timeout&&ht.timeout.getTimerLeft(),Ya=()=>{if(ht.timeout)return Th(),ht.timeout.stop()},Rd=()=>{if(ht.timeout){const C=ht.timeout.start();return Nc(C),C}},zd=()=>{const C=ht.timeout;return C&&(C.running?Ya():Rd())},nf=C=>{if(ht.timeout){const x=ht.timeout.increase(C);return Nc(x,!0),x}},Fd=()=>ht.timeout&&ht.timeout.isRunning();let jd=!1;const yo={};function of(){let C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";yo[C]=this,jd||(document.body.addEventListener("click",rf),jd=!0)}const rf=C=>{for(let x=C.target;x&&x!==document;x=x.parentNode)for(const P in yo){const H=x.getAttribute(P);if(H){yo[P].fire({template:H});return}}};var $a=Object.freeze({isValidParameter:ie,isUpdatableParameter:fe,isDeprecatedParameter:_e,argsToParams:vi,isVisible:Od,clickConfirm:Va,clickDeny:Ua,clickCancel:Qr,getContainer:Me,getPopup:He,getTitle:An,getHtmlContainer:jn,getImage:zt,getIcon:ut,getInputLabel:ve,getCloseButton:V,getActions:ot,getConfirmButton:Vn,getDenyButton:Q,getCancelButton:ne,getLoader:De,getFooter:$e,getTimerProgressBar:nt,getFocusableElements:re,getValidationMessage:ni,isLoading:Se,fire:Wa,mixin:Jr,showLoading:Gr,enableLoading:Gr,getTimerLeft:Ld,stopTimer:Ya,resumeTimer:Rd,toggleTimer:zd,increaseTimer:nf,isTimerRunning:Fd,bindClickHandler:of});function tl(){const C=wt.innerParams.get(this);if(!C)return;const x=wt.domCache.get(this);on(x.loader),ge()?C.icon&&Nt(ut()):xo(x),gt([x.popup,x.actions],$.loading),x.popup.removeAttribute("aria-busy"),x.popup.removeAttribute("data-loading"),x.confirmButton.disabled=!1,x.denyButton.disabled=!1,x.cancelButton.disabled=!1}const xo=C=>{const x=C.popup.getElementsByClassName(C.loader.getAttribute("data-button-to-replace"));x.length?Nt(x[0],"inline-block"):$n()&&on(C.actions)};function Vs(C){const x=wt.innerParams.get(C||this),P=wt.domCache.get(C||this);return P?We(P.popup,x.input):null}var Us={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function nn(C,x,P,H){ge()?un(C,H):(Ta(P).then(()=>un(C,H)),ht.keydownTarget.removeEventListener("keydown",ht.keydownHandler,{capture:ht.keydownListenerCapture}),ht.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(x.setAttribute("style","display:none !important"),x.removeAttribute("class"),x.innerHTML=""):x.remove(),ue()&&(Ed(),Kh(),Ao()),nl()}function nl(){gt([document.documentElement,document.body],[$.shown,$["height-auto"],$["no-backdrop"],$["toast-shown"]])}function no(C){C=Ai(C);const x=Us.swalPromiseResolve.get(this),P=il(this);this.isAwaitingPromise()?C.isDismissed||(Ud(this),x(C)):P&&x(C)}function Un(){return!!wt.awaitingPromise.get(this)}const il=C=>{const x=He();if(!x)return!1;const P=wt.innerParams.get(C);if(!P||Te(x,P.hideClass.popup))return!1;gt(x,P.showClass.popup),ze(x,P.hideClass.popup);const H=Me();return gt(H,P.showClass.backdrop),ze(H,P.hideClass.backdrop),Wi(C,x,P),!0};function Vd(C){const x=Us.swalPromiseReject.get(this);Ud(this),x&&x(C)}const Ud=C=>{C.isAwaitingPromise()&&(wt.awaitingPromise.delete(C),wt.innerParams.get(C)||C._destroy())},Ai=C=>typeof C>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},C),Wi=(C,x,P)=>{const H=Me(),me=Ms&&Xi(x);typeof P.willClose=="function"&&P.willClose(x),me?Hd(C,x,H,P.returnFocus,P.didClose):nn(C,H,P.returnFocus,P.didClose)},Hd=(C,x,P,H,me)=>{ht.swalCloseEventFinishedCallback=nn.bind(null,C,P,H,me),x.addEventListener(Ms,function(tt){tt.target===x&&(ht.swalCloseEventFinishedCallback(),delete ht.swalCloseEventFinishedCallback)})},un=(C,x)=>{setTimeout(()=>{typeof x=="function"&&x.bind(C.params)(),C._destroy()})};function J(C,x,P){const H=wt.domCache.get(C);x.forEach(me=>{H[me].disabled=P})}function oe(C,x){if(!C)return!1;if(C.type==="radio"){const H=C.parentNode.parentNode.querySelectorAll("input");for(let me=0;me<H.length;me++)H[me].disabled=x}else C.disabled=x}function ce(){J(this,["confirmButton","denyButton","cancelButton"],!1)}function Ge(){J(this,["confirmButton","denyButton","cancelButton"],!0)}function ft(){return oe(this.getInput(),!1)}function Bt(){return oe(this.getInput(),!0)}function On(C){const x=wt.domCache.get(this),P=wt.innerParams.get(this);xe(x.validationMessage,C),x.validationMessage.className=$["validation-message"],P.customClass&&P.customClass.validationMessage&&ze(x.validationMessage,P.customClass.validationMessage),Nt(x.validationMessage);const H=this.getInput();H&&(H.setAttribute("aria-invalid",!0),H.setAttribute("aria-describedby",$["validation-message"]),Fe(H),ze(H,$.inputerror))}function jt(){const C=wt.domCache.get(this);C.validationMessage&&on(C.validationMessage);const x=this.getInput();x&&(x.removeAttribute("aria-invalid"),x.removeAttribute("aria-describedby"),gt(x,$.inputerror))}function Eo(){return wt.domCache.get(this).progressSteps}function ri(C){const x=He(),P=wt.innerParams.get(this);if(!x||Te(x,P.hideClass.popup))return _("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const H=Ci(C),me=Object.assign({},P,H);Ba(this,me),wt.innerParams.set(this,me),Object.defineProperties(this,{params:{value:Object.assign({},this.params,C),writable:!1,enumerable:!0}})}const Ci=C=>{const x={};return Object.keys(C).forEach(P=>{fe(P)?x[P]=C[P]:_('Invalid parameter to update: "'.concat(P,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),x};function io(){const C=wt.domCache.get(this),x=wt.innerParams.get(this);if(!x){Qn(this);return}C.popup&&ht.swalCloseEventFinishedCallback&&(ht.swalCloseEventFinishedCallback(),delete ht.swalCloseEventFinishedCallback),ht.deferDisposalTimer&&(clearTimeout(ht.deferDisposalTimer),delete ht.deferDisposalTimer),typeof x.didDestroy=="function"&&x.didDestroy(),Qt(this)}const Qt=C=>{Qn(C),delete C.params,delete ht.keydownHandler,delete ht.keydownTarget,delete ht.currentInstance},Qn=C=>{C.isAwaitingPromise()?(si(wt,C),wt.awaitingPromise.set(C,!0)):(si(Us,C),si(wt,C))},si=(C,x)=>{for(const P in C)C[P].delete(x)};var hi=Object.freeze({hideLoading:tl,disableLoading:tl,getInput:Vs,close:no,isAwaitingPromise:Un,rejectPromise:Vd,closePopup:no,closeModal:no,closeToast:no,enableButtons:ce,disableButtons:Ge,enableInput:ft,disableInput:Bt,showValidationMessage:On,resetValidationMessage:jt,getProgressSteps:Eo,update:ri,_destroy:io});let It;class Go{constructor(){if(typeof window>"u")return;It=this;for(var x=arguments.length,P=new Array(x),H=0;H<x;H++)P[H]=arguments[H];const me=Object.freeze(this.constructor.argsToParams(P));Object.defineProperties(this,{params:{value:me,writable:!1,enumerable:!0,configurable:!0}});const tt=this._main(this.params);wt.promise.set(this,tt)}_main(x){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};ye(Object.assign({},P,x)),ht.currentInstance&&(ht.currentInstance._destroy(),ue()&&Ao()),ht.currentInstance=this;const H=qa(x,P);Ls(H),Object.freeze(H),ht.timeout&&(ht.timeout.stop(),delete ht.timeout),clearTimeout(ht.restoreFocusTimeout);const me=sf(this);return Ba(this,H),wt.innerParams.set(this,H),Hs(this,me,H)}then(x){return wt.promise.get(this).then(x)}finally(x){return wt.promise.get(this).finally(x)}}const Hs=(C,x,P)=>new Promise((H,me)=>{const tt=hn=>{C.closePopup({isDismissed:!0,dismiss:hn})};Us.swalPromiseResolve.set(C,H),Us.swalPromiseReject.set(C,me),x.confirmButton.onclick=()=>Jc(C),x.denyButton.onclick=()=>oi(C),x.cancelButton.onclick=()=>Jh(C,tt),x.closeButton.onclick=()=>tt(Yo.close),sn(C,x,tt),Xh(C,ht,P,tt),qc(C,P),La(P),af(ht,P,tt),ol(x,P),setTimeout(()=>{x.container.scrollTop=0})}),qa=(C,x)=>{const P=vd(C),H=Object.assign({},ae,x,P,C);return H.showClass=Object.assign({},ae.showClass,H.showClass),H.hideClass=Object.assign({},ae.hideClass,H.hideClass),H},sf=C=>{const x={popup:He(),container:Me(),actions:ot(),confirmButton:Vn(),denyButton:Q(),cancelButton:ne(),loader:De(),closeButton:V(),validationMessage:ni(),progressSteps:kt()};return wt.domCache.set(C,x),x},af=(C,x,P)=>{const H=nt();on(H),x.timer&&(C.timeout=new Yc(()=>{P("timer"),delete C.timeout},x.timer),x.timerProgressBar&&(Nt(H),Ve(H,x,"timerProgressBar"),setTimeout(()=>{C.timeout&&C.timeout.running&&Nc(x.timer)})))},ol=(C,x)=>{if(!x.toast){if(!N(x.allowEnterKey))return Ko();Ga(C,x)||Ha(x,-1,1)}},Ga=(C,x)=>x.focusDeny&&Ft(C.denyButton)?(C.denyButton.focus(),!0):x.focusCancel&&Ft(C.cancelButton)?(C.cancelButton.focus(),!0):x.focusConfirm&&Ft(C.confirmButton)?(C.confirmButton.focus(),!0):!1,Ko=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(Go.prototype,hi),Object.assign(Go,$a),Object.keys(hi).forEach(C=>{Go[C]=function(){if(It)return It[C](...arguments)}}),Go.DismissReason=Yo,Go.version="11.4.0";const Ar=Go;return Ar.default=Ar,Ar}),typeof bc<"u"&&bc.Sweetalert2&&(bc.swal=bc.sweetAlert=bc.Swal=bc.SweetAlert=bc.Sweetalert2)})(vD);var kk=vD.exports;class wR{static install(a,l={}){var h;const p=kk.mixin(l),k=function(..._){return p.fire.call(p,..._)};Object.assign(k,kk),Object.keys(kk).filter(_=>typeof kk[_]=="function").forEach(_=>{k[_]=p[_].bind(p)}),((h=a.config)==null?void 0:h.globalProperties)&&!a.config.globalProperties.$swal?(a.config.globalProperties.$swal=k,a.provide("$swal",k)):Object.prototype.hasOwnProperty.call(a,"$swal")||(a.prototype.$swal=k,a.swal=k)}}//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var AD;function Ye(){return AD.apply(null,arguments)}function _R(i){AD=i}function Ur(i){return i instanceof Array||Object.prototype.toString.call(i)==="[object Array]"}function sd(i){return i!=null&&Object.prototype.toString.call(i)==="[object Object]"}function Xt(i,a){return Object.prototype.hasOwnProperty.call(i,a)}function UA(i){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(i).length===0;var a;for(a in i)if(Xt(i,a))return!1;return!0}function po(i){return i===void 0}function ya(i){return typeof i=="number"||Object.prototype.toString.call(i)==="[object Number]"}function _p(i){return i instanceof Date||Object.prototype.toString.call(i)==="[object Date]"}function CD(i,a){var l=[],h,p=i.length;for(h=0;h<p;++h)l.push(a(i[h],h));return l}function vc(i,a){for(var l in a)Xt(a,l)&&(i[l]=a[l]);return Xt(a,"toString")&&(i.toString=a.toString),Xt(a,"valueOf")&&(i.valueOf=a.valueOf),i}function Ds(i,a,l,h){return qD(i,a,l,h,!0).utc()}function vR(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function At(i){return i._pf==null&&(i._pf=vR()),i._pf}var Xv;Array.prototype.some?Xv=Array.prototype.some:Xv=function(i){var a=Object(this),l=a.length>>>0,h;for(h=0;h<l;h++)if(h in a&&i.call(this,a[h],h,a))return!0;return!1};function HA(i){if(i._isValid==null){var a=At(i),l=Xv.call(a.parsedDateParts,function(p){return p!=null}),h=!isNaN(i._d.getTime())&&a.overflow<0&&!a.empty&&!a.invalidEra&&!a.invalidMonth&&!a.invalidWeekday&&!a.weekdayMismatch&&!a.nullInput&&!a.invalidFormat&&!a.userInvalidated&&(!a.meridiem||a.meridiem&&l);if(i._strict&&(h=h&&a.charsLeftOver===0&&a.unusedTokens.length===0&&a.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(i))i._isValid=h;else return h}return i._isValid}function hw(i){var a=Ds(NaN);return i!=null?vc(At(a),i):At(a).userInvalidated=!0,a}var aE=Ye.momentProperties=[],vv=!1;function WA(i,a){var l,h,p,k=aE.length;if(po(a._isAMomentObject)||(i._isAMomentObject=a._isAMomentObject),po(a._i)||(i._i=a._i),po(a._f)||(i._f=a._f),po(a._l)||(i._l=a._l),po(a._strict)||(i._strict=a._strict),po(a._tzm)||(i._tzm=a._tzm),po(a._isUTC)||(i._isUTC=a._isUTC),po(a._offset)||(i._offset=a._offset),po(a._pf)||(i._pf=At(a)),po(a._locale)||(i._locale=a._locale),k>0)for(l=0;l<k;l++)h=aE[l],p=a[h],po(p)||(i[h]=p);return i}function vp(i){WA(this,i),this._d=new Date(i._d!=null?i._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),vv===!1&&(vv=!0,Ye.updateOffset(this),vv=!1)}function Hr(i){return i instanceof vp||i!=null&&i._isAMomentObject!=null}function yD(i){Ye.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+i)}function ur(i,a){var l=!0;return vc(function(){if(Ye.deprecationHandler!=null&&Ye.deprecationHandler(null,i),l){var h=[],p,k,_,E=arguments.length;for(k=0;k<E;k++){if(p="",typeof arguments[k]=="object"){p+=`
[`+k+"] ";for(_ in arguments[0])Xt(arguments[0],_)&&(p+=_+": "+arguments[0][_]+", ");p=p.slice(0,-2)}else p=arguments[k];h.push(p)}yD(i+`
Arguments: `+Array.prototype.slice.call(h).join("")+`
Ye.version="2.29.4";_R(En);Ye.fn=Ne;Ye.min=az;Ye.max=cz;Ye.now=lz;Ye.utc=Ds;Ye.unix=RF;Ye.months=FF;Ye.isDate=_p;Ye.locale=xc;Ye.invalid=hw;Ye.duration=Wr;Ye.isMoment=Hr;Ye.weekdays=VF;Ye.parseZone=zF;Ye.localeData=Da;Ye.isDuration=Ek;Ye.monthsShort=jF;Ye.weekdaysMin=HF;Ye.defineLocale=XA;Ye.updateLocale=z3;Ye.locales=F3;Ye.weekdaysShort=UF;Ye.normalizeUnits=hr;Ye.relativeTimeRounding=bj;Ye.relativeTimeThreshold=kj;Ye.calendarFormat=Oz;Ye.prototype=Ne;Ye.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const fS=aD(hR).component("Loader",kR).use(zL).use(wR);fS.config.globalProperties.$filters={datetime(i){return Ye.utc(i).utcOffset(3).format("DD.MM.YYYY H:mm")},date(i){return Ye.utc(i).utcOffset(3).format("DD.MM.YYYY")}};fS.mount("#app")});export default _j();