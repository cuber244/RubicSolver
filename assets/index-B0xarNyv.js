(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Hl="modulepreload",Kl=function(i,t){return new URL(i,t).href},wa={},Yl=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=Kl(c,n),c in wa)return;wa[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===c&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Hl,d||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((g,_)=>{m.addEventListener("load",g),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},gi=["U","R","F","D","L","B"],ps="UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB",Ra={U:0,R:9,F:18,D:27,L:36,B:45},aa={U:4,R:13,F:22,D:31,L:40,B:49},Jl=[[8,9,20],[6,18,38],[0,36,47],[2,45,11],[29,26,15],[27,44,24],[33,53,42],[35,17,51]],Ql=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],jl=[[5,10],[7,19],[3,37],[1,46],[32,16],[28,25],[30,43],[34,52],[23,12],[21,41],[50,39],[48,14]],ql=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],$l={U:{normal:[0,1,0],pos:(i,t)=>[t-1,1,i-1]},R:{normal:[1,0,0],pos:(i,t)=>[1,1-i,1-t]},F:{normal:[0,0,1],pos:(i,t)=>[t-1,1-i,1]},D:{normal:[0,-1,0],pos:(i,t)=>[t-1,-1,1-i]},L:{normal:[-1,0,0],pos:(i,t)=>[-1,1-i,t-1]},B:{normal:[0,0,-1],pos:(i,t)=>[1-t,1-i,-1]}},Cs=[],ws=[];for(const i of gi){const t=$l[i];for(let e=0;e<9;e++)Cs[Ra[i]+e]=t.pos(Math.floor(e/3),e%3),ws[Ra[i]+e]=t.normal}const Zo=(i,t)=>`${i[0]},${i[1]},${i[2]}|${t[0]},${t[1]},${t[2]}`,zo=new Map;for(let i=0;i<54;i++)zo.set(Zo(Cs[i],ws[i]),i);function Ua(i,t,e){const[n,s,r]=i;return t===0?e===1?[n,-r,s]:[n,r,-s]:t===1?e===1?[r,s,-n]:[-r,s,n]:e===1?[-s,n,r]:[s,-n,r]}const mn={R:{axis:0,layers:[1],dir:-1},L:{axis:0,layers:[-1],dir:1},M:{axis:0,layers:[0],dir:1},r:{axis:0,layers:[0,1],dir:-1},l:{axis:0,layers:[-1,0],dir:1},x:{axis:0,layers:[-1,0,1],dir:-1},U:{axis:1,layers:[1],dir:-1},D:{axis:1,layers:[-1],dir:1},E:{axis:1,layers:[0],dir:1},u:{axis:1,layers:[0,1],dir:-1},d:{axis:1,layers:[-1,0],dir:1},y:{axis:1,layers:[-1,0,1],dir:-1},F:{axis:2,layers:[1],dir:-1},B:{axis:2,layers:[-1],dir:1},S:{axis:2,layers:[0],dir:-1},f:{axis:2,layers:[0,1],dir:-1},b:{axis:2,layers:[-1,0],dir:1},z:{axis:2,layers:[-1,0,1],dir:-1}},Xo=new Set(["x","y","z"]),ko=new Set(["M","E","S"]),tc=new Set(["U","D","L","R","F","B"]);function ec(i){const t=new Int8Array(54);for(let e=0;e<54;e++){const n=Cs[e];if(i.layers.includes(n[i.axis])){const s=Ua(n,i.axis,i.dir),r=Ua(ws[e],i.axis,i.dir),a=zo.get(Zo(s,r));if(a===void 0)throw new Error("geometry bug");t[a]=e}else t[e]=e}return t}const ms=new Int8Array(54).map((i,t)=>t);function nn(i,t){const e=new Int8Array(54);for(let n=0;n<54;n++)e[n]=i[t[n]];return e}function gs(i){const t=new Int8Array(54);for(let e=0;e<54;e++)t[i[e]]=e;return t}const Ho=new Map;for(const[i,t]of Object.entries(mn))Ho.set(i,ec(t));const nc=/^([URFDLB])w([2']*)$|^([URFDLBMESxyzudlrfb])([2']*)$/;function Ae(i){const t=[];for(const e of i.trim().split(/[\s()[\]]+/)){if(!e)continue;const n=nc.exec(e);if(!n)throw new Error(`invalid move token: "${e}"`);const s=n[1]?n[1].toLowerCase():n[3],r=(n[1]?n[2]:n[4])??"";let a=r.includes("2")?2:1;r.includes("'")&&(a=4-a),t.push({base:s,amount:a})}return t}function gn(i){return i.base+(i.amount===2?"2":i.amount===3?"'":"")}const Aa=new Map;function Fn(i){const t=i.base+i.amount;let e=Aa.get(t);if(!e){const n=Ho.get(i.base);if(!n)throw new Error(`unknown move base: ${i.base}`);e=n;for(let s=1;s<i.amount;s++)e=nn(e,n);Aa.set(t,e)}return e}function xs(i){let t=ms;for(const e of i)t=nn(t,Fn(e));return t}function br(i,t){let e="";for(let n=0;n<54;n++)e+=i[t[n]];return e}function ic(i,t){return br(i,xs(t))}function Xn(i,t){return ic(i,Ae(t))}function Ss(i){return[...i].reverse().map(t=>({base:t.base,amount:4-t.amount}))}const vr={};for(const[i,t]of Object.entries(mn))vr[i]=t.axis;const Pa=["U","D","R","L","F","B","M","E","S","u","d","r","l","f","b","x","y","z"];function Ws(i){let t=[...i];for(;;){const e=[];let n=0,s=!1;for(;n<t.length;){const r=vr[t[n].base];let a=n;const o=new Map;for(;a<t.length&&vr[t[a].base]===r;)o.set(t[a].base,((o.get(t[a].base)??0)+t[a].amount)%4),a++;const l=[...o.entries()].filter(([,c])=>c!==0);l.sort((c,d)=>Pa.indexOf(c[0])-Pa.indexOf(d[0])),l.length!==a-n&&(s=!0);for(const[c,d]of l)e.push({base:c,amount:d});n=a}if(!s)return e;t=e}}const sc={r:["x","L"],l:["x","R"],u:["y","D"],d:["y","U"],f:["z","B"],b:["z","F"]},Ko=new Map;for(const i of[...tc,...ko,...Object.keys(sc),...Xo])for(const t of[1,2,3])Ko.set(Fn({base:i,amount:t}).join(","),{base:i,amount:t});function Oe(i,t){const e=nn(nn(i,Fn(t)),gs(i)),n=Ko.get(e.join(","));if(!n)throw new Error(`conjugate not found for ${gn(t)}`);return n}const Fa=new Map;{const i=[[]];for(const t of["x","y","z"])for(const e of[1,2,3])i.push([{base:t,amount:e}]);for(const t of i)for(const e of i){const n=[...t,...e],s=xs(n).join(",");Fa.has(s)||Fa.set(s,n)}}function rc(i){const t=new Array(8).fill(-1),e=new Array(8).fill(-1),n=new Array(12).fill(-1),s=new Array(12).fill(-1);for(let r=0;r<8;r++){t:for(let a=0;a<8;a++)for(let o=0;o<3;o++){let l=!0;for(let c=0;c<3;c++)if(i[Jl[r][(c+o)%3]]!==Ql[a][c]){l=!1;break}if(l){t[r]=a,e[r]=o;break t}}if(t[r]<0)return null}for(let r=0;r<12;r++){t:for(let a=0;a<12;a++)for(let o=0;o<2;o++){let l=!0;for(let c=0;c<2;c++)if(i[jl[r][(c+o)%2]]!==ql[a][c]){l=!1;break}if(l){n[r]=a,s[r]=o;break t}}if(n[r]<0)return null}return{cp:t,co:e,ep:n,eo:s}}function Da(i){let t=0;for(let e=0;e<i.length;e++)for(let n=e+1;n<i.length;n++)i[e]>i[n]&&(t^=1);return t}function Yo(i){if(i.length!==54)return{ok:!1,code:"WRONG_LENGTH"};if(!/^[URFDLB]{54}$/.test(i))return{ok:!1,code:"INVALID_CHARS"};for(const n of gi)if(i[aa[n]]!==n)return{ok:!1,code:"WRONG_CENTERS"};const t={};for(const n of i)t[n]=(t[n]??0)+1;for(const n of gi)if(t[n]!==9)return{ok:!1,code:"COLOR_COUNT"};const e=rc(i);return e?new Set(e.cp).size!==8||new Set(e.ep).size!==12?{ok:!1,code:"INVALID_PIECES"}:e.co.reduce((n,s)=>n+s,0)%3!==0?{ok:!1,code:"TWIST"}:e.eo.reduce((n,s)=>n+s,0)%2!==0?{ok:!1,code:"FLIP"}:Da(e.cp)!==Da(e.ep)?{ok:!1,code:"PARITY"}:{ok:!0,cubie:e}:{ok:!1,code:"INVALID_PIECES"}}function Jo(i){if(i.length!==54)return null;const t=new Map;for(const n of gi){const s=i[aa[n]];if(t.has(s))return null;t.set(s,n)}let e="";for(const n of i){const s=t.get(n);if(!s)return null;e+=s}return e}const Ni=i=>(4-i)%4,ac={M:{rot:"x",rotInv:!0,a:"R",aInv:!1,b:"L",bInv:!0},E:{rot:"y",rotInv:!0,a:"U",aInv:!1,b:"D",bInv:!0},S:{rot:"z",rotInv:!1,a:"F",aInv:!0,b:"B",bInv:!1}},Va={r:{rot:"x",rotInv:!1,outer:"L"},l:{rot:"x",rotInv:!0,outer:"R"},u:{rot:"y",rotInv:!1,outer:"D"},d:{rot:"y",rotInv:!0,outer:"U"},f:{rot:"z",rotInv:!1,outer:"B"},b:{rot:"z",rotInv:!0,outer:"F"}};function oc(i){let t=ms,e=ms;const n=[],s=[];i.phases.forEach((a,o)=>{const l=[];for(const c of Ae(a.moves.join(" "))){if(Xo.has(c.base)){t=nn(t,Fn(c)),a.name!=="orient"&&(e=nn(e,Fn(c)));continue}const d=t;let h,f=null;if(ko.has(c.base)){const g=ac[c.base],_={base:g.rot,amount:g.rotInv?Ni(c.amount):c.amount};t=nn(t,Fn(_)),h=[Oe(t,{base:g.a,amount:g.aInv?Ni(c.amount):c.amount}),Oe(t,{base:g.b,amount:g.bInv?Ni(c.amount):c.amount})],f=Oe(d,_)}else if(Va[c.base]){const g=Va[c.base],_={base:g.rot,amount:g.rotInv?Ni(c.amount):c.amount};t=nn(t,Fn(_)),h=[Oe(t,{base:g.outer,amount:c.amount})],f=Oe(d,_)}else h=[Oe(t,c)];const m=gn(Oe(e,c));l.push(m),n.push({display:m,physical:h,drift:f,rho:nn(d,gs(e)),phaseIndex:o})}l.length>0&&s.push({name:a.name,detail:a.detail,moves:l})});const r=s.flatMap(a=>a.moves);return{display:{method:i.method,phases:s,moves:r,totalMoves:r.length},steps:n,regripWhiteDown:i.phases[0]?.name==="orient"}}const lc=(i,t)=>i.base===t.base&&i.amount===t.amount;class cc{steps;pointer=0;remaining=[];deviation=[];lastCompletedStep=null;constructor(t){this.steps=t,this.enterStep()}enterStep(){this.remaining=this.done?[]:this.steps[this.pointer].physical.map(t=>({...t}))}get total(){return this.steps.length}get done(){return this.pointer>=this.steps.length}get deviated(){return this.deviation.length>0}get currentStep(){return this.done?null:this.steps[this.pointer]}get untouched(){const t=this.currentStep;return t?this.remaining.length===t.physical.length&&this.remaining.every((e,n)=>lc(e,t.physical[n])):!1}get recoveryMoves(){return Ws(Ss(this.deviation)).map(gn)}get recoveryDisplayMoves(){const t=this.currentStep?.rho??ms,e=gs(t);return Ws(Ss(this.deviation)).map(n=>gn(Oe(e,n)))}feed(t){if(this.lastCompletedStep=null,this.done)return"ignored";const e=Ae(t)[0];if(this.deviation.length>0)return this.deviation=Ws([...this.deviation,e]),this.deviation.length===0?"recovered":"recovering";const n=this.steps[this.pointer];for(let s=0;s<this.remaining.length;s++){const r=this.remaining[s];if(e.base===r.base){if(r.amount===2&&e.amount!==2)return this.remaining[s]={base:e.base,amount:e.amount},"partial";if(e.amount===r.amount)return this.remaining.splice(s,1),this.remaining.length>0?"partial":(this.pointer++,this.lastCompletedStep=n,this.enterStep(),this.done?"done":"advance")}}return this.deviation=[e],"deviate"}get displayNext(){if(this.done)return null;if(this.deviated)return this.recoveryDisplayMoves.join(" ");const t=this.steps[this.pointer];if(this.untouched||t.physical.length>1)return t.display;const e=gs(t.rho);return this.remaining.map(n=>gn(Oe(e,n))).join(" ")}get hintMove(){if(this.done)return null;if(this.deviated)return this.recoveryMoves[0]??null;const t=this.steps[this.pointer];return this.untouched?gn(Oe(t.rho,Ae(t.display)[0])):this.remaining.length>0?gn(this.remaining[0]):null}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="166",dc=0,Ga=1,uc=2,Qo=1,hc=2,en=3,bn=0,Me=1,sn=2,Sn=0,hi=1,Na=2,Ba=3,Wa=4,fc=5,An=100,pc=101,mc=102,gc=103,xc=104,Sc=200,_c=201,bc=202,vc=203,Mr=204,yr=205,Mc=206,yc=207,Ic=208,Tc=209,Ec=210,Lc=211,Cc=212,wc=213,Rc=214,Uc=0,Ac=1,Pc=2,_s=3,Fc=4,Dc=5,Vc=6,Gc=7,la=0,Nc=1,Bc=2,_n=0,Wc=1,Oc=2,Zc=3,zc=4,Xc=5,kc=6,Hc=7,jo=300,xi=301,Si=302,Ir=303,Tr=304,Rs=306,Er=1e3,Dn=1001,Lr=1002,Pe=1003,Kc=1004,Bi=1005,Ne=1006,Os=1007,Vn=1008,on=1009,qo=1010,$o=1011,Ui=1012,ca=1013,Wn=1014,rn=1015,Ai=1016,da=1017,ua=1018,_i=1020,tl=35902,el=1021,nl=1022,Be=1023,il=1024,sl=1025,fi=1026,bi=1027,rl=1028,ha=1029,al=1030,fa=1031,pa=1033,os=33776,ls=33777,cs=33778,ds=33779,Cr=35840,wr=35841,Rr=35842,Ur=35843,Ar=36196,Pr=37492,Fr=37496,Dr=37808,Vr=37809,Gr=37810,Nr=37811,Br=37812,Wr=37813,Or=37814,Zr=37815,zr=37816,Xr=37817,kr=37818,Hr=37819,Kr=37820,Yr=37821,us=36492,Jr=36494,Qr=36495,ol=36283,jr=36284,qr=36285,$r=36286,Yc=3200,Jc=3201,ll=0,Qc=1,xn="",Ze="srgb",Mn="srgb-linear",ma="display-p3",Us="display-p3-linear",bs="linear",Qt="srgb",vs="rec709",Ms="p3",kn=7680,Oa=519,jc=512,qc=513,$c=514,cl=515,td=516,ed=517,nd=518,id=519,Za=35044,za="300 es",an=2e3,ys=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,ta=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function sd(i,t){return(i%t+t)%t}function zs(i,t,e){return(1-e)*i+e*t}function Ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,s,r,a,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],u=s[6],I=s[1],v=s[4],T=s[7],B=s[2],L=s[5],C=s[8];return r[0]=a*_+o*I+l*B,r[3]=a*p+o*v+l*L,r[6]=a*u+o*T+l*C,r[1]=c*_+d*I+h*B,r[4]=c*p+d*v+h*L,r[7]=c*u+d*T+h*C,r[2]=f*_+m*I+g*B,r[5]=f*p+m*v+g*L,r[8]=f*u+m*T+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,f=o*l-d*r,m=c*r-a*l,g=e*h+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-d*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(d*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new Ut;function dl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rd(){const i=Is("canvas");return i.style.display="block",i}const Xa={};function ul(i){i in Xa||(Xa[i]=!0,console.warn(i))}function ad(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ka=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ha=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wi={[Mn]:{transfer:bs,primaries:vs,toReference:i=>i,fromReference:i=>i},[Ze]:{transfer:Qt,primaries:vs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Us]:{transfer:bs,primaries:Ms,toReference:i=>i.applyMatrix3(Ha),fromReference:i=>i.applyMatrix3(ka)},[ma]:{transfer:Qt,primaries:Ms,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ha),fromReference:i=>i.applyMatrix3(ka).convertLinearToSRGB()}},od=new Set([Mn,Us]),Ht={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!od.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Wi[t].toReference,s=Wi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Wi[i].primaries},getTransfer:function(i){return i===xn?bs:Wi[i].transfer}};function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hn;class ld{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=Is("canvas")),Hn.width=t.width,Hn.height=t.height;const n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cd=0;class hl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hs(s[a].image)):r.push(Hs(s[a]))}else r=Hs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Hs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dd=0;class ye extends Mi{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=Dn,s=Dn,r=Ne,a=Vn,o=Be,l=on,c=ye.DEFAULT_ANISOTROPY,d=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Pi(),this.name="",this.source=new hl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Er:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Er:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=jo;ye.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,T=(m+1)/2,B=(u+1)/2,L=(d+f)/4,C=(h+_)/4,G=(g+p)/4;return v>T&&v>B?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=L/n,r=C/n):T>B?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=L/s,r=G/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=C/r,s=G/r),this.set(n,s,r,e),this}let I=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-d)*(f-d));return Math.abs(I)<.001&&(I=1),this.x=(p-g)/I,this.y=(h-_)/I,this.z=(f-d)/I,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ud extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends ud{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fl extends ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hd extends ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ce{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==m||d!==g){let p=1-o;const u=l*f+c*m+d*g+h*_,I=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const B=Math.sqrt(v),L=Math.atan2(B,u*I);p=Math.sin(p*L)/B,o=Math.sin(o*L)/B}const T=o*I;if(l=l*p+f*T,c=c*p+m*T,d=d*p+g*T,h=h*p+_*T,p===1-o){const B=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=B,c*=B,d*=B,h*=B}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+d*h+l*m-c*f,t[e+1]=l*g+d*f+c*h-o*m,t[e+2]=c*g+d*m+o*f-l*h,t[e+3]=d*g-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"YXZ":this._x=f*d*h+c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"ZXY":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h-f*m*g;break;case"ZYX":this._x=f*d*h-c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h+f*m*g;break;case"YZX":this._x=f*d*h+c*m*g,this._y=c*m*h+f*d*g,this._z=c*d*g-f*m*h,this._w=c*d*h-f*m*g;break;case"XZY":this._x=f*d*h-c*m*g,this._y=c*m*h-f*d*g,this._z=c*d*g+f*m*h,this._w=c*d*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new P,Ka=new Ce;class Fi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(De.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(De.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=De.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,De):De.fromBufferAttribute(r,a),De.applyMatrix4(t.matrixWorld),this.expandByPoint(De);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(t.matrixWorld),this.union(Oi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,De),De.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ei),Zi.subVectors(this.max,Ei),Kn.subVectors(t.a,Ei),Yn.subVectors(t.b,Ei),Jn.subVectors(t.c,Ei),cn.subVectors(Yn,Kn),dn.subVectors(Jn,Yn),In.subVectors(Kn,Jn);let e=[0,-cn.z,cn.y,0,-dn.z,dn.y,0,-In.z,In.y,cn.z,0,-cn.x,dn.z,0,-dn.x,In.z,0,-In.x,-cn.y,cn.x,0,-dn.y,dn.x,0,-In.y,In.x,0];return!Ys(e,Kn,Yn,Jn,Zi)||(e=[1,0,0,0,1,0,0,0,1],!Ys(e,Kn,Yn,Jn,Zi))?!1:(zi.crossVectors(cn,dn),e=[zi.x,zi.y,zi.z],Ys(e,Kn,Yn,Jn,Zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,De).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(De).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new P,new P,new P,new P,new P,new P,new P,new P],De=new P,Oi=new Fi,Kn=new P,Yn=new P,Jn=new P,cn=new P,dn=new P,In=new P,Ei=new P,Zi=new P,zi=new P,Tn=new P;function Ys(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Tn.fromArray(i,r);const o=s.x*Math.abs(Tn.x)+s.y*Math.abs(Tn.y)+s.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),d=n.dot(Tn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const fd=new Fi,Li=new P,Js=new P;class ga{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Li.subVectors(t,this.center);const e=Li.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Li.copy(t.center).add(Js)),this.expandByPoint(Li.copy(t.center).sub(Js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const je=new P,Qs=new P,Xi=new P,un=new P,js=new P,ki=new P,qs=new P;class pd{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(je.copy(this.origin).addScaledVector(this.direction,e),je.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Qs.copy(t).add(e).multiplyScalar(.5),Xi.copy(e).sub(t).normalize(),un.copy(this.origin).sub(Qs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Xi),o=un.dot(this.direction),l=-un.dot(Xi),c=un.lengthSq(),d=Math.abs(1-a*a);let h,f,m,g;if(d>0)if(h=a*l-o,f=a*o-l,g=r*d,h>=0)if(f>=-g)if(f<=g){const _=1/d;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Qs).addScaledVector(Xi,f),m}intersectSphere(t,e){je.subVectors(t.center,this.origin);const n=je.dot(this.direction),s=je.dot(je)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,je)!==null}intersectTriangle(t,e,n,s,r){js.subVectors(e,t),ki.subVectors(n,t),qs.crossVectors(js,ki);let a=this.direction.dot(qs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,t);const l=o*this.direction.dot(ki.crossVectors(un,ki));if(l<0)return null;const c=o*this.direction.dot(js.cross(un));if(c<0||l+c>a)return null;const d=-o*un.dot(qs);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,a,o,l,c,d,h,f,m,g,_,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,h,f,m,g,_,p)}set(t,e,n,s,r,a,o,l,c,d,h,f,m,g,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),a=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*d,m=a*h,g=o*d,_=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*d,m=l*h,g=c*d,_=c*h;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*d,m=l*h,g=c*d,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*d,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*d,m=a*h,g=o*d,_=o*h;e[0]=l*d,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*d,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=f*h+_,e[5]=a*d,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*d,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(md,t,gd)}lookAt(t,e,n){const s=this.elements;return Ee.subVectors(t,e),Ee.lengthSq()===0&&(Ee.z=1),Ee.normalize(),hn.crossVectors(n,Ee),hn.lengthSq()===0&&(Math.abs(n.z)===1?Ee.x+=1e-4:Ee.z+=1e-4,Ee.normalize(),hn.crossVectors(n,Ee)),hn.normalize(),Hi.crossVectors(Ee,hn),s[0]=hn.x,s[4]=Hi.x,s[8]=Ee.x,s[1]=hn.y,s[5]=Hi.y,s[9]=Ee.y,s[2]=hn.z,s[6]=Hi.z,s[10]=Ee.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],I=n[3],v=n[7],T=n[11],B=n[15],L=s[0],C=s[4],G=s[8],M=s[12],b=s[1],R=s[5],X=s[9],N=s[13],z=s[2],Y=s[6],O=s[10],j=s[14],W=s[3],ct=s[7],pt=s[11],mt=s[15];return r[0]=a*L+o*b+l*z+c*W,r[4]=a*C+o*R+l*Y+c*ct,r[8]=a*G+o*X+l*O+c*pt,r[12]=a*M+o*N+l*j+c*mt,r[1]=d*L+h*b+f*z+m*W,r[5]=d*C+h*R+f*Y+m*ct,r[9]=d*G+h*X+f*O+m*pt,r[13]=d*M+h*N+f*j+m*mt,r[2]=g*L+_*b+p*z+u*W,r[6]=g*C+_*R+p*Y+u*ct,r[10]=g*G+_*X+p*O+u*pt,r[14]=g*M+_*N+p*j+u*mt,r[3]=I*L+v*b+T*z+B*W,r[7]=I*C+v*R+T*Y+B*ct,r[11]=I*G+v*X+T*O+B*pt,r[15]=I*M+v*N+T*j+B*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*m-n*l*m)+_*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*d-r*l*d)+p*(+e*c*h-e*o*m-r*a*h+n*a*m+r*o*d-n*c*d)+u*(-s*o*d-e*l*h+e*o*f+s*a*h-n*a*f+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],I=h*p*c-_*f*c+_*l*m-o*p*m-h*l*u+o*f*u,v=g*f*c-d*p*c-g*l*m+a*p*m+d*l*u-a*f*u,T=d*_*c-g*h*c+g*o*m-a*_*m-d*o*u+a*h*u,B=g*h*l-d*_*l-g*o*f+a*_*f+d*o*p-a*h*p,L=e*I+n*v+s*T+r*B;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return t[0]=I*C,t[1]=(_*f*r-h*p*r-_*s*m+n*p*m+h*s*u-n*f*u)*C,t[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*u+n*l*u)*C,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*m-n*l*m)*C,t[4]=v*C,t[5]=(d*p*r-g*f*r+g*s*m-e*p*m-d*s*u+e*f*u)*C,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*u-e*l*u)*C,t[7]=(a*f*r-d*l*r+d*s*c-e*f*c-a*s*m+e*l*m)*C,t[8]=T*C,t[9]=(g*h*r-d*_*r-g*n*m+e*_*m+d*n*u-e*h*u)*C,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*u+e*o*u)*C,t[11]=(d*o*r-a*h*r-d*n*c+e*h*c+a*n*m-e*o*m)*C,t[12]=B*C,t[13]=(d*_*s-g*h*s+g*n*f-e*_*f-d*n*p+e*h*p)*C,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*p-e*o*p)*C,t[15]=(a*h*s-d*o*s+d*n*l-e*h*l-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,f=r*c,m=r*d,g=r*h,_=a*d,p=a*h,u=o*h,I=l*c,v=l*d,T=l*h,B=n.x,L=n.y,C=n.z;return s[0]=(1-(_+u))*B,s[1]=(m+T)*B,s[2]=(g-v)*B,s[3]=0,s[4]=(m-T)*L,s[5]=(1-(f+u))*L,s[6]=(p+I)*L,s[7]=0,s[8]=(g+v)*C,s[9]=(p-I)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qn.set(s[0],s[1],s[2]).length();const a=Qn.set(s[4],s[5],s[6]).length(),o=Qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ve.copy(this);const c=1/r,d=1/a,h=1/o;return Ve.elements[0]*=c,Ve.elements[1]*=c,Ve.elements[2]*=c,Ve.elements[4]*=d,Ve.elements[5]*=d,Ve.elements[6]*=d,Ve.elements[8]*=h,Ve.elements[9]*=h,Ve.elements[10]*=h,e.setFromRotationMatrix(Ve),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=an){const l=this.elements,c=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(o===an)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ys)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=an){const l=this.elements,c=1/(e-t),d=1/(n-s),h=1/(a-r),f=(e+t)*c,m=(n+s)*d;let g,_;if(o===an)g=(a+r)*h,_=-2*h;else if(o===ys)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new P,Ve=new ie,md=new P(0,0,0),gd=new P(1,1,1),hn=new P,Hi=new P,Ee=new P,Ya=new ie,Ja=new Ce;class Ye{constructor(t=0,e=0,n=0,s=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ya.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ya,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xd=0;const Qa=new P,jn=new Ce,qe=new ie,Ki=new P,Ci=new P,Sd=new P,_d=new Ce,ja=new P(1,0,0),qa=new P(0,1,0),$a=new P(0,0,1),to={type:"added"},bd={type:"removed"},qn={type:"childadded",child:null},$s={type:"childremoved",child:null};class xe extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new P,e=new Ye,n=new Ce,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ut}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(ja,t)}rotateY(t){return this.rotateOnAxis(qa,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,e){return Qa.copy(t).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ja,t)}translateY(t){return this.translateOnAxis(qa,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(Ci,Ki,this.up):qe.lookAt(Ki,Ci,this.up),this.quaternion.setFromRotationMatrix(qe),s&&(qe.extractRotation(s.matrixWorld),jn.setFromRotationMatrix(qe),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(to),qn.child=t,this.dispatchEvent(qn),qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bd),$s.child=t,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(to),qn.child=t,this.dispatchEvent(qn),qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new P(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new P,$e=new P,tr=new P,tn=new P,$n=new P,ti=new P,eo=new P,er=new P,nr=new P,ir=new P;class ke{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ge.subVectors(t,e),s.cross(Ge);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ge.subVectors(s,e),$e.subVectors(n,e),tr.subVectors(t,e);const a=Ge.dot(Ge),o=Ge.dot($e),l=Ge.dot(tr),c=$e.dot($e),d=$e.dot(tr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,g=(a*d-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(a,tn.y),l.addScaledVector(o,tn.z),l)}static isFrontFacing(t,e,n,s){return Ge.subVectors(n,e),$e.subVectors(t,e),Ge.cross($e).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),$e.subVectors(this.a,this.b),Ge.cross($e).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;$n.subVectors(s,n),ti.subVectors(r,n),er.subVectors(t,n);const l=$n.dot(er),c=ti.dot(er);if(l<=0&&c<=0)return e.copy(n);nr.subVectors(t,s);const d=$n.dot(nr),h=ti.dot(nr);if(d>=0&&h<=d)return e.copy(s);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector($n,a);ir.subVectors(t,r);const m=$n.dot(ir),g=ti.dot(ir);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ti,o);const p=d*g-m*h;if(p<=0&&h-d>=0&&m-g>=0)return eo.subVectors(r,s),o=(h-d)/(h-d+(m-g)),e.copy(s).addScaledVector(eo,o);const u=1/(p+_+f);return a=_*u,o=f*u,e.copy(n).addScaledVector($n,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function sr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ht.workingColorSpace){if(t=sd(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=sr(a,r,t+1/3),this.g=sr(a,r,t),this.b=sr(a,r,t-1/3)}return Ht.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=ml[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Ht.fromWorkingColorSpace(ge.copy(this),t),Math.round(be(ge.r*255,0,255))*65536+Math.round(be(ge.g*255,0,255))*256+Math.round(be(ge.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.fromWorkingColorSpace(ge.copy(this),e);const n=ge.r,s=ge.g,r=ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=Ze){Ht.fromWorkingColorSpace(ge.copy(this),t);const e=ge.r,n=ge.g,s=ge.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(Yi);const n=zs(fn.h,Yi.h,e),s=zs(fn.s,Yi.s,e),r=zs(fn.l,Yi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ge=new Wt;Wt.NAMES=ml;let vd=0;class Di extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=hi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mr,this.blendDst=yr,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mr&&(n.blendSrc=this.blendSrc),this.blendDst!==yr&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class gl extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new P,Ji=new Bt;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ul("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}}class xl extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sl extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Nn extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Md=0;const Re=new ie,rr=new xe,ei=new P,Le=new Fi,wi=new Fi,he=new P;class Zn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dl(t)?Sl:xl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Re.makeRotationFromQuaternion(t),this.applyMatrix4(Re),this}rotateX(t){return Re.makeRotationX(t),this.applyMatrix4(Re),this}rotateY(t){return Re.makeRotationY(t),this.applyMatrix4(Re),this}rotateZ(t){return Re.makeRotationZ(t),this.applyMatrix4(Re),this}translate(t,e,n){return Re.makeTranslation(t,e,n),this.applyMatrix4(Re),this}scale(t,e,n){return Re.makeScale(t,e,n),this.applyMatrix4(Re),this}lookAt(t){return rr.lookAt(t),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];wi.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(Le.min,wi.min),Le.expandByPoint(he),he.addVectors(Le.max,wi.max),Le.expandByPoint(he)):(Le.expandByPoint(wi.min),Le.expandByPoint(wi.max))}Le.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)he.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(he));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)he.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(t,c),he.add(ei)),s=Math.max(s,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let G=0;G<n.count;G++)o[G]=new P,l[G]=new P;const c=new P,d=new P,h=new P,f=new Bt,m=new Bt,g=new Bt,_=new P,p=new P;function u(G,M,b){c.fromBufferAttribute(n,G),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,G),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),d.sub(c),h.sub(c),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(R),o[G].add(_),o[M].add(_),o[b].add(_),l[G].add(p),l[M].add(p),l[b].add(p))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let G=0,M=I.length;G<M;++G){const b=I[G],R=b.start,X=b.count;for(let N=R,z=R+X;N<z;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const v=new P,T=new P,B=new P,L=new P;function C(G){B.fromBufferAttribute(s,G),L.copy(B);const M=o[G];v.copy(M),v.sub(B.multiplyScalar(B.dot(M))).normalize(),T.crossVectors(L,M);const R=T.dot(l[G])<0?-1:1;a.setXYZW(G,v.x,v.y,v.z,R)}for(let G=0,M=I.length;G<M;++G){const b=I[G],R=b.start,X=b.count;for(let N=R,z=R+X;N<z;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,d=new P,h=new P;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*d;for(let u=0;u<d;u++)f[g++]=c[m++]}return new Ke(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const no=new ie,En=new pd,Qi=new ga,io=new P,ni=new P,ii=new P,si=new P,ar=new P,ji=new P,qi=new Bt,$i=new Bt,ts=new Bt,so=new P,ro=new P,ao=new P,es=new P,ns=new P;class He extends xe{constructor(t=new Zn,e=new gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ji.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(ar.fromBufferAttribute(h,t),a?ji.addScaledVector(ar,d):ji.addScaledVector(ar.sub(e),d))}e.add(ji)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),En.copy(t.ray).recast(t.near),!(Qi.containsPoint(En.origin)===!1&&(En.intersectSphere(Qi,io)===null||En.origin.distanceToSquared(io)>(t.far-t.near)**2))&&(no.copy(r).invert(),En.copy(t.ray).applyMatrix4(no),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,En)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],I=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=I,B=v;T<B;T+=3){const L=o.getX(T),C=o.getX(T+1),G=o.getX(T+2);s=is(this,u,t,n,c,d,h,L,C,G),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const I=o.getX(p),v=o.getX(p+1),T=o.getX(p+2);s=is(this,a,t,n,c,d,h,I,v,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],I=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=I,B=v;T<B;T+=3){const L=T,C=T+1,G=T+2;s=is(this,u,t,n,c,d,h,L,C,G),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const I=p,v=p+1,T=p+2;s=is(this,a,t,n,c,d,h,I,v,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function yd(i,t,e,n,s,r,a,o){let l;if(t.side===Me?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===bn,o),l===null)return null;ns.copy(o),ns.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ns);return c<e.near||c>e.far?null:{distance:c,point:ns.clone(),object:i}}function is(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ni),i.getVertexPosition(l,ii),i.getVertexPosition(c,si);const d=yd(i,t,e,n,ni,ii,si,es);if(d){s&&(qi.fromBufferAttribute(s,o),$i.fromBufferAttribute(s,l),ts.fromBufferAttribute(s,c),d.uv=ke.getInterpolation(es,ni,ii,si,qi,$i,ts,new Bt)),r&&(qi.fromBufferAttribute(r,o),$i.fromBufferAttribute(r,l),ts.fromBufferAttribute(r,c),d.uv1=ke.getInterpolation(es,ni,ii,si,qi,$i,ts,new Bt)),a&&(so.fromBufferAttribute(a,o),ro.fromBufferAttribute(a,l),ao.fromBufferAttribute(a,c),d.normal=ke.getInterpolation(es,ni,ii,si,so,ro,ao,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};ke.getNormal(ni,ii,si,h.normal),d.face=h}return d}class yi extends Zn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(d,3)),this.setAttribute("uv",new Nn(h,2));function g(_,p,u,I,v,T,B,L,C,G,M){const b=T/C,R=B/G,X=T/2,N=B/2,z=L/2,Y=C+1,O=G+1;let j=0,W=0;const ct=new P;for(let pt=0;pt<O;pt++){const mt=pt*R-N;for(let Vt=0;Vt<Y;Vt++){const Kt=Vt*b-X;ct[_]=Kt*I,ct[p]=mt*v,ct[u]=z,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[p]=0,ct[u]=L>0?1:-1,d.push(ct.x,ct.y,ct.z),h.push(Vt/C),h.push(1-pt/G),j+=1}}for(let pt=0;pt<G;pt++)for(let mt=0;mt<C;mt++){const Vt=f+mt+Y*pt,Kt=f+mt+Y*(pt+1),Z=f+(mt+1)+Y*(pt+1),q=f+(mt+1)+Y*pt;l.push(Vt,Kt,q),l.push(Kt,Z,q),W+=6}o.addGroup(m,W,M),m+=W,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Se(i){const t={};for(let e=0;e<i.length;e++){const n=vi(i[e]);for(const s in n)t[s]=n[s]}return t}function Id(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _l(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}const Td={clone:vi,merge:Se};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bl extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=an}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new P,oo=new Bt,lo=new Bt;class Ue extends bl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,oo,lo),e.subVectors(lo,oo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ri=-90,ai=1;class Cd extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ue(ri,ai,t,e);s.layers=this.layers,this.add(s);const r=new Ue(ri,ai,t,e);r.layers=this.layers,this.add(r);const a=new Ue(ri,ai,t,e);a.layers=this.layers,this.add(a);const o=new Ue(ri,ai,t,e);o.layers=this.layers,this.add(o);const l=new Ue(ri,ai,t,e);l.layers=this.layers,this.add(l);const c=new Ue(ri,ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vl extends ye{constructor(t,e,n,s,r,a,o,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:xi,super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wd extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yi(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:Sn});r.uniforms.tEquirect.value=e;const a=new He(s,r),o=e.minFilter;return e.minFilter===Vn&&(e.minFilter=Ne),new Cd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const or=new P,Rd=new P,Ud=new Ut;class Rn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=or.subVectors(n,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(or),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ud.getNormalMatrix(t),s=this.coplanarPoint(or).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new ga,ss=new P;class xa{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=an){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],h=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],u=s[12],I=s[13],v=s[14],T=s[15];if(n[0].setComponents(l-r,f-c,p-m,T-u).normalize(),n[1].setComponents(l+r,f+c,p+m,T+u).normalize(),n[2].setComponents(l+a,f+d,p+g,T+I).normalize(),n[3].setComponents(l-a,f-d,p-g,T-I).normalize(),n[4].setComponents(l-o,f-h,p-_,T-v).normalize(),e===an)n[5].setComponents(l+o,f+h,p+_,T+v).normalize();else if(e===ys)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){return Ln.center.set(0,0,0),Ln.radius=.7071067811865476,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ss.x=s.normal.x>0?t.max.x:t.min.x,ss.y=s.normal.y>0?t.max.y:t.min.y,ss.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ml(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ad(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,o),h.count===-1&&f.length===0&&i.bufferSubData(c,0,d),f.length!==0){for(let m=0,g=f.length;m<g;m++){const _=f[m];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class As extends Zn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=t/o,f=e/l,m=[],g=[],_=[],p=[];for(let u=0;u<d;u++){const I=u*f-a;for(let v=0;v<c;v++){const T=v*h-r;g.push(T,-I,0),_.push(0,0,1),p.push(v/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let I=0;I<o;I++){const v=I+c*u,T=I+c*(u+1),B=I+1+c*(u+1),L=I+1+c*u;m.push(v,T,L),m.push(T,B,L)}this.setIndex(m),this.setAttribute("position",new Nn(g,3)),this.setAttribute("normal",new Nn(_,3)),this.setAttribute("uv",new Nn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Od=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,su=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",du=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Su=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ru=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Au=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Du=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ih=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ah=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ch=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ph=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_h=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ih=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Th=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ah=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ph=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Oh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$h=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rt={alphahash_fragment:Pd,alphahash_pars_fragment:Fd,alphamap_fragment:Dd,alphamap_pars_fragment:Vd,alphatest_fragment:Gd,alphatest_pars_fragment:Nd,aomap_fragment:Bd,aomap_pars_fragment:Wd,batching_pars_vertex:Od,batching_vertex:Zd,begin_vertex:zd,beginnormal_vertex:Xd,bsdfs:kd,iridescence_fragment:Hd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:jd,color_fragment:qd,color_pars_fragment:$d,color_pars_vertex:tu,color_vertex:eu,common:nu,cube_uv_reflection_fragment:iu,defaultnormal_vertex:su,displacementmap_pars_vertex:ru,displacementmap_vertex:au,emissivemap_fragment:ou,emissivemap_pars_fragment:lu,colorspace_fragment:cu,colorspace_pars_fragment:du,envmap_fragment:uu,envmap_common_pars_fragment:hu,envmap_pars_fragment:fu,envmap_pars_vertex:pu,envmap_physical_pars_fragment:Tu,envmap_vertex:mu,fog_vertex:gu,fog_pars_vertex:xu,fog_fragment:Su,fog_pars_fragment:_u,gradientmap_pars_fragment:bu,lightmap_pars_fragment:vu,lights_lambert_fragment:Mu,lights_lambert_pars_fragment:yu,lights_pars_begin:Iu,lights_toon_fragment:Eu,lights_toon_pars_fragment:Lu,lights_phong_fragment:Cu,lights_phong_pars_fragment:wu,lights_physical_fragment:Ru,lights_physical_pars_fragment:Uu,lights_fragment_begin:Au,lights_fragment_maps:Pu,lights_fragment_end:Fu,logdepthbuf_fragment:Du,logdepthbuf_pars_fragment:Vu,logdepthbuf_pars_vertex:Gu,logdepthbuf_vertex:Nu,map_fragment:Bu,map_pars_fragment:Wu,map_particle_fragment:Ou,map_particle_pars_fragment:Zu,metalnessmap_fragment:zu,metalnessmap_pars_fragment:Xu,morphinstance_vertex:ku,morphcolor_vertex:Hu,morphnormal_vertex:Ku,morphtarget_pars_vertex:Yu,morphtarget_vertex:Ju,normal_fragment_begin:Qu,normal_fragment_maps:ju,normal_pars_fragment:qu,normal_pars_vertex:$u,normal_vertex:th,normalmap_pars_fragment:eh,clearcoat_normal_fragment_begin:nh,clearcoat_normal_fragment_maps:ih,clearcoat_pars_fragment:sh,iridescence_pars_fragment:rh,opaque_fragment:ah,packing:oh,premultiplied_alpha_fragment:lh,project_vertex:ch,dithering_fragment:dh,dithering_pars_fragment:uh,roughnessmap_fragment:hh,roughnessmap_pars_fragment:fh,shadowmap_pars_fragment:ph,shadowmap_pars_vertex:mh,shadowmap_vertex:gh,shadowmask_pars_fragment:xh,skinbase_vertex:Sh,skinning_pars_vertex:_h,skinning_vertex:bh,skinnormal_vertex:vh,specularmap_fragment:Mh,specularmap_pars_fragment:yh,tonemapping_fragment:Ih,tonemapping_pars_fragment:Th,transmission_fragment:Eh,transmission_pars_fragment:Lh,uv_pars_fragment:Ch,uv_pars_vertex:wh,uv_vertex:Rh,worldpos_vertex:Uh,background_vert:Ah,background_frag:Ph,backgroundCube_vert:Fh,backgroundCube_frag:Dh,cube_vert:Vh,cube_frag:Gh,depth_vert:Nh,depth_frag:Bh,distanceRGBA_vert:Wh,distanceRGBA_frag:Oh,equirect_vert:Zh,equirect_frag:zh,linedashed_vert:Xh,linedashed_frag:kh,meshbasic_vert:Hh,meshbasic_frag:Kh,meshlambert_vert:Yh,meshlambert_frag:Jh,meshmatcap_vert:Qh,meshmatcap_frag:jh,meshnormal_vert:qh,meshnormal_frag:$h,meshphong_vert:tf,meshphong_frag:ef,meshphysical_vert:nf,meshphysical_frag:sf,meshtoon_vert:rf,meshtoon_frag:af,points_vert:of,points_frag:lf,shadow_vert:cf,shadow_frag:df,sprite_vert:uf,sprite_frag:hf},it={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Xe={basic:{uniforms:Se([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Se([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Se([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Se([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Se([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Se([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Se([it.points,it.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Se([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Se([it.common,it.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Se([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Se([it.sprite,it.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:Se([it.common,it.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:Se([it.lights,it.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Xe.physical={uniforms:Se([Xe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const rs={r:0,b:0,g:0},Cn=new Ye,ff=new ie;function pf(i,t,e,n,s,r,a){const o=new Wt(0);let l=r===!0?0:1,c,d,h=null,f=0,m=null;function g(I){let v=I.isScene===!0?I.background:null;return v&&v.isTexture&&(v=(I.backgroundBlurriness>0?e:t).get(v)),v}function _(I){let v=!1;const T=g(I);T===null?u(o,l):T&&T.isColor&&(u(T,1),v=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(I,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Rs)?(d===void 0&&(d=new He(new yi(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:vi(Xe.backgroundCube.uniforms),vertexShader:Xe.backgroundCube.vertexShader,fragmentShader:Xe.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Cn.copy(v.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ff.makeRotationFromEuler(Cn)),d.material.toneMapped=Ht.getTransfer(T.colorSpace)!==Qt,(h!==T||f!==T.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,h=T,f=T.version,m=i.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new He(new As(2,2),new vn({name:"BackgroundMaterial",uniforms:vi(Xe.background.uniforms),vertexShader:Xe.background.vertexShader,fragmentShader:Xe.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(T.colorSpace)!==Qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,m=i.toneMapping),c.layers.enableAll(),I.unshift(c,c.geometry,c.material,0,0,null))}function u(I,v){I.getRGB(rs,_l(i)),n.buffers.color.setClear(rs.r,rs.g,rs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(I,v=1){o.set(I),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(I){l=I,u(o,l)},render:_,addToRenderList:p}}function mf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(b,R,X,N,z){let Y=!1;const O=h(N,X,R);r!==O&&(r=O,c(r.object)),Y=m(b,N,X,z),Y&&g(b,N,X,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,T(b,R,X,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function h(b,R,X){const N=X.wireframe===!0;let z=n[b.id];z===void 0&&(z={},n[b.id]=z);let Y=z[R.id];Y===void 0&&(Y={},z[R.id]=Y);let O=Y[N];return O===void 0&&(O=f(l()),Y[N]=O),O}function f(b){const R=[],X=[],N=[];for(let z=0;z<e;z++)R[z]=0,X[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:X,attributeDivisors:N,object:b,attributes:{},index:null}}function m(b,R,X,N){const z=r.attributes,Y=R.attributes;let O=0;const j=X.getAttributes();for(const W in j)if(j[W].location>=0){const pt=z[W];let mt=Y[W];if(mt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor)),pt===void 0||pt.attribute!==mt||mt&&pt.data!==mt.data)return!0;O++}return r.attributesNum!==O||r.index!==N}function g(b,R,X,N){const z={},Y=R.attributes;let O=0;const j=X.getAttributes();for(const W in j)if(j[W].location>=0){let pt=Y[W];pt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor));const mt={};mt.attribute=pt,pt&&pt.data&&(mt.data=pt.data),z[W]=mt,O++}r.attributes=z,r.attributesNum=O,r.index=N}function _(){const b=r.newAttributes;for(let R=0,X=b.length;R<X;R++)b[R]=0}function p(b){u(b,0)}function u(b,R){const X=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;X[b]=1,N[b]===0&&(i.enableVertexAttribArray(b),N[b]=1),z[b]!==R&&(i.vertexAttribDivisor(b,R),z[b]=R)}function I(){const b=r.newAttributes,R=r.enabledAttributes;for(let X=0,N=R.length;X<N;X++)R[X]!==b[X]&&(i.disableVertexAttribArray(X),R[X]=0)}function v(b,R,X,N,z,Y,O){O===!0?i.vertexAttribIPointer(b,R,X,z,Y):i.vertexAttribPointer(b,R,X,N,z,Y)}function T(b,R,X,N){_();const z=N.attributes,Y=X.getAttributes(),O=R.defaultAttributeValues;for(const j in Y){const W=Y[j];if(W.location>=0){let ct=z[j];if(ct===void 0&&(j==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),j==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor)),ct!==void 0){const pt=ct.normalized,mt=ct.itemSize,Vt=t.get(ct);if(Vt===void 0)continue;const Kt=Vt.buffer,Z=Vt.type,q=Vt.bytesPerElement,ut=Z===i.INT||Z===i.UNSIGNED_INT||ct.gpuType===ca;if(ct.isInterleavedBufferAttribute){const ot=ct.data,Lt=ot.stride,At=ct.offset;if(ot.isInstancedInterleavedBuffer){for(let Dt=0;Dt<W.locationSize;Dt++)u(W.location+Dt,ot.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Dt=0;Dt<W.locationSize;Dt++)p(W.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Dt=0;Dt<W.locationSize;Dt++)v(W.location+Dt,mt/W.locationSize,Z,pt,Lt*q,(At+mt/W.locationSize*Dt)*q,ut)}else{if(ct.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)u(W.location+ot,ct.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let ot=0;ot<W.locationSize;ot++)v(W.location+ot,mt/W.locationSize,Z,pt,mt*q,mt/W.locationSize*ot*q,ut)}}else if(O!==void 0){const pt=O[j];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(W.location,pt);break;case 3:i.vertexAttrib3fv(W.location,pt);break;case 4:i.vertexAttrib4fv(W.location,pt);break;default:i.vertexAttrib1fv(W.location,pt)}}}}I()}function B(){G();for(const b in n){const R=n[b];for(const X in R){const N=R[X];for(const z in N)d(N[z].object),delete N[z];delete R[X]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;const R=n[b.id];for(const X in R){const N=R[X];for(const z in N)d(N[z].object),delete N[z];delete R[X]}delete n[b.id]}function C(b){for(const R in n){const X=n[R];if(X[b.id]===void 0)continue;const N=X[b.id];for(const z in N)d(N[z].object),delete N[z];delete X[b.id]}}function G(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:G,resetDefaultState:M,dispose:B,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:I}}function gf(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=d[g];e.update(m,n,1)}function l(c,d,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Be&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const C=L===Ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==on&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==rn&&!C)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:u,maxVaryings:I,maxFragmentUniforms:v,vertexTextures:T,maxSamples:B}}function Sf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Rn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||s;return s=f,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,u=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?d(null):c();else{const I=r?0:n,v=I*4;let T=u.clippingState||null;l.value=T,T=d(g,f,v,m);for(let B=0;B!==v;++B)T[B]=e[B];u.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=I}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,I=f.matrixWorldInverse;o.getNormalMatrix(I),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,T=m;v!==_;++v,T+=4)a.copy(h[v]).applyMatrix4(I,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function _f(i){let t=new WeakMap;function e(a,o){return o===Ir?a.mapping=xi:o===Tr&&(a.mapping=Si),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ir||o===Tr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class yl extends bl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const di=4,co=[.125,.215,.35,.446,.526,.582],Pn=20,lr=new yl,uo=new Wt;let cr=null,dr=0,ur=0,hr=!1;const Un=(1+Math.sqrt(5))/2,oi=1/Un,ho=[new P(-Un,oi,0),new P(Un,oi,0),new P(-oi,0,Un),new P(oi,0,Un),new P(0,Un,-oi),new P(0,Un,oi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class fo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){cr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cr,dr,ur),this._renderer.xr.enabled=hr,t.scissorTest=!1,as(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cr=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Ai,format:Be,colorSpace:Mn,depthBuffer:!1},s=po(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bf(r)),this._blurMaterial=vf(r,t,e)}return s}_compileMaterial(t){const e=new He(this._lodPlanes[0],t);this._renderer.compile(e,lr)}_sceneToCubeUV(t,e,n,s){const o=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(uo),d.toneMapping=_n,d.autoClear=!1;const m=new gl({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),g=new He(new yi,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(uo),_=!0);for(let u=0;u<6;u++){const I=u%3;I===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):I===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;as(s,I*v,u>2?v:0,v,v),d.setRenderTarget(s),_&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xi||t.mapping===Si;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;as(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ho[(s-r-1)%ho.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new He(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),_=r/g,p=isFinite(r)?1+Math.floor(d*_):Pn;p>Pn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pn}`);const u=[];let I=0;for(let C=0;C<Pn;++C){const G=C/_,M=Math.exp(-G*G/2);u.push(M),C===0?I+=M:C<p&&(I+=2*M)}for(let C=0;C<u.length;C++)u[C]=u[C]/I;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const T=this._sizeLods[s],B=3*T*(s>v-di?s-v+di:0),L=4*(this._cubeSize-T);as(e,B,L,3*T,2*T),l.setRenderTarget(e),l.render(h,lr)}}function bf(i){const t=[],e=[],n=[];let s=i;const r=i-di+1+co.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-di?l=co[a-i+di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,g=6,_=3,p=2,u=1,I=new Float32Array(_*g*m),v=new Float32Array(p*g*m),T=new Float32Array(u*g*m);for(let L=0;L<m;L++){const C=L%3*2/3-1,G=L>2?0:-1,M=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];I.set(M,_*g*L),v.set(f,p*g*L);const b=[L,L,L,L,L,L];T.set(b,u*g*L)}const B=new Zn;B.setAttribute("position",new Ke(I,_)),B.setAttribute("uv",new Ke(v,p)),B.setAttribute("faceIndex",new Ke(T,u)),t.push(B),s>di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function po(i,t,e){const n=new On(i,t,e);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vf(i,t,e){const n=new Float32Array(Pn),s=new P(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function mo(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function go(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Sa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ir||l===Tr,d=l===xi||l===Si;if(c||d){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new fo(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new fo(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function yf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ul("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function If(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const I=m.array;_=m.version;for(let v=0,T=I.length;v<T;v+=3){const B=I[v+0],L=I[v+1],C=I[v+2];f.push(B,L,L,C,C,B)}}else if(g!==void 0){const I=g.array;_=g.version;for(let v=0,T=I.length/3-1;v<T;v+=3){const B=v+0,L=v+1,C=v+2;f.push(B,L,L,C,C,B)}}else return;const p=new(dl(f)?Sl:xl)(f,1);p.version=_;const u=r.get(h);u&&t.remove(u),r.set(h,p)}function d(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Tf(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),e.update(m,n,g))}function d(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function h(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let u=0;for(let I=0;I<g;I++)u+=m[I];for(let I=0;I<_.length;I++)e.update(u,n,_[I])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Ef(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lf(i,t,e){const n=new WeakMap,s=new ce;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],I=o.morphAttributes.color||[];let v=0;m===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let T=o.attributes.position.count*v,B=1;T>t.maxTextureSize&&(B=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const L=new Float32Array(T*B*4*h),C=new fl(L,T,B,h);C.type=rn,C.needsUpdate=!0;const G=v*4;for(let b=0;b<h;b++){const R=p[b],X=u[b],N=I[b],z=T*B*4*b;for(let Y=0;Y<R.count;Y++){const O=Y*G;m===!0&&(s.fromBufferAttribute(R,Y),L[z+O+0]=s.x,L[z+O+1]=s.y,L[z+O+2]=s.z,L[z+O+3]=0),g===!0&&(s.fromBufferAttribute(X,Y),L[z+O+4]=s.x,L[z+O+5]=s.y,L[z+O+6]=s.z,L[z+O+7]=0),_===!0&&(s.fromBufferAttribute(N,Y),L[z+O+8]=s.x,L[z+O+9]=s.y,L[z+O+10]=s.z,L[z+O+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new Bt(T,B)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cf(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Il extends ye{constructor(t,e,n,s,r,a,o,l,c,d=fi){if(d!==fi&&d!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===fi&&(n=Wn),n===void 0&&d===bi&&(n=_i),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tl=new ye,xo=new Il(1,1),El=new fl,Ll=new hd,Cl=new vl,So=[],_o=[],bo=new Float32Array(16),vo=new Float32Array(9),Mo=new Float32Array(4);function Ii(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=So[s];if(r===void 0&&(r=new Float32Array(s),So[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function de(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ps(i,t){let e=_o[t];e===void 0&&(e=new Int32Array(t),_o[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function Pf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(de(e,n))return;Mo.set(n),i.uniformMatrix2fv(this.addr,!1,Mo),ue(e,n)}}function Ff(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(de(e,n))return;vo.set(n),i.uniformMatrix3fv(this.addr,!1,vo),ue(e,n)}}function Df(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(de(e,n))return;bo.set(n),i.uniformMatrix4fv(this.addr,!1,bo),ue(e,n)}}function Vf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function Bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function Wf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function Zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function Xf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xo.compareFunction=cl,r=xo):r=Tl,e.setTexture2D(t||r,s)}function kf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ll,s)}function Hf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Cl,s)}function Kf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||El,s)}function Yf(i){switch(i){case 5126:return wf;case 35664:return Rf;case 35665:return Uf;case 35666:return Af;case 35674:return Pf;case 35675:return Ff;case 35676:return Df;case 5124:case 35670:return Vf;case 35667:case 35671:return Gf;case 35668:case 35672:return Nf;case 35669:case 35673:return Bf;case 5125:return Wf;case 36294:return Of;case 36295:return Zf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return Xf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return Kf}}function Jf(i,t){i.uniform1fv(this.addr,t)}function Qf(i,t){const e=Ii(t,this.size,2);i.uniform2fv(this.addr,e)}function jf(i,t){const e=Ii(t,this.size,3);i.uniform3fv(this.addr,e)}function qf(i,t){const e=Ii(t,this.size,4);i.uniform4fv(this.addr,e)}function $f(i,t){const e=Ii(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tp(i,t){const e=Ii(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ep(i,t){const e=Ii(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function np(i,t){i.uniform1iv(this.addr,t)}function ip(i,t){i.uniform2iv(this.addr,t)}function sp(i,t){i.uniform3iv(this.addr,t)}function rp(i,t){i.uniform4iv(this.addr,t)}function ap(i,t){i.uniform1uiv(this.addr,t)}function op(i,t){i.uniform2uiv(this.addr,t)}function lp(i,t){i.uniform3uiv(this.addr,t)}function cp(i,t){i.uniform4uiv(this.addr,t)}function dp(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);de(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Tl,r[a])}function up(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);de(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ll,r[a])}function hp(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);de(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Cl,r[a])}function fp(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);de(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||El,r[a])}function pp(i){switch(i){case 5126:return Jf;case 35664:return Qf;case 35665:return jf;case 35666:return qf;case 35674:return $f;case 35675:return tp;case 35676:return ep;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return sp;case 35669:case 35673:return rp;case 5125:return ap;case 36294:return op;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return fp}}class mp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yf(e.type)}}class gp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pp(e.type)}}class xp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function yo(i,t){i.seq.push(t),i.map[t.id]=t}function Sp(i,t,e){const n=i.name,s=n.length;for(fr.lastIndex=0;;){const r=fr.exec(n),a=fr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yo(e,c===void 0?new mp(o,i,t):new gp(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new xp(o),yo(e,h)),e=h}}}class hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Sp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Io(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _p=37297;let bp=0;function vp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Mp(i){const t=Ht.getPrimaries(Ht.workingColorSpace),e=Ht.getPrimaries(i);let n;switch(t===e?n="":t===Ms&&e===vs?n="LinearDisplayP3ToLinearSRGB":t===vs&&e===Ms&&(n="LinearSRGBToLinearDisplayP3"),i){case Mn:case Us:return[n,"LinearTransferOETF"];case Ze:case ma:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function To(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+vp(i.getShaderSource(t),a)}else return s}function yp(i,t){const e=Mp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ip(i,t){let e;switch(t){case Wc:e="Linear";break;case Oc:e="Reinhard";break;case Zc:e="OptimizedCineon";break;case zc:e="ACESFilmic";break;case kc:e="AgX";break;case Hc:e="Neutral";break;case Xc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function Ep(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ri(i){return i!==""}function Eo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace(Cp,Rp)}const wp=new Map;function Rp(i,t){let e=Rt[t];if(e===void 0){const n=wp.get(t);if(n!==void 0)e=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ea(e)}const Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Co(i){return i.replace(Up,Ap)}function Ap(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function Fp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xi:case Si:t="ENVMAP_TYPE_CUBE";break;case Rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Si:t="ENVMAP_MODE_REFRACTION";break}return t}function Vp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case la:t="ENVMAP_BLENDING_MULTIPLY";break;case Nc:t="ENVMAP_BLENDING_MIX";break;case Bc:t="ENVMAP_BLENDING_ADD";break}return t}function Gp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Np(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Pp(e),c=Fp(e),d=Dp(e),h=Vp(e),f=Gp(e),m=Tp(e),g=Ep(r),_=s.createProgram();let p,u,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),u.length>0&&(u+=`
`)):(p=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),u=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?Rt.tonemapping_pars_fragment:"",e.toneMapping!==_n?Ip("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,yp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),a=ea(a),a=Eo(a,e),a=Lo(a,e),o=ea(o),o=Eo(o,e),o=Lo(o,e),a=Co(a),o=Co(o),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=I+p+a,T=I+u+o,B=Io(s,s.VERTEX_SHADER,v),L=Io(s,s.FRAGMENT_SHADER,T);s.attachShader(_,B),s.attachShader(_,L),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(R){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(B).trim(),z=s.getShaderInfoLog(L).trim();let Y=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,B,L);else{const j=To(s,B,"vertex"),W=To(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+j+`
`+W)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(N===""||z==="")&&(O=!1);O&&(R.diagnostics={runnable:Y,programLog:X,vertexShader:{log:N,prefix:p},fragmentShader:{log:z,prefix:u}})}s.deleteShader(B),s.deleteShader(L),G=new hs(s,_),M=Lp(s,_)}let G;this.getUniforms=function(){return G===void 0&&C(this),G};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,_p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=B,this.fragmentShader=L,this}let Bp=0;class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Op(t),e.set(t,n)),n}}class Op{constructor(t){this.id=Bp++,this.code=t,this.usedTimes=0}}function Zp(i,t,e,n,s,r,a){const o=new pl,l=new Wp,c=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,b,R,X,N){const z=X.fog,Y=N.geometry,O=M.isMeshStandardMaterial?X.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||O),W=j&&j.mapping===Rs?j.image.height:null,ct=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=pt!==void 0?pt.length:0;let Vt=0;Y.morphAttributes.position!==void 0&&(Vt=1),Y.morphAttributes.normal!==void 0&&(Vt=2),Y.morphAttributes.color!==void 0&&(Vt=3);let Kt,Z,q,ut;if(ct){const Ot=Xe[ct];Kt=Ot.vertexShader,Z=Ot.fragmentShader}else Kt=M.vertexShader,Z=M.fragmentShader,l.update(M),q=l.getVertexShaderID(M),ut=l.getFragmentShaderID(M);const ot=i.getRenderTarget(),Lt=N.isInstancedMesh===!0,At=N.isBatchedMesh===!0,Dt=!!M.map,$t=!!M.matcap,E=!!j,se=!!M.aoMap,kt=!!M.lightMap,Yt=!!M.bumpMap,xt=!!M.normalMap,re=!!M.displacementMap,Tt=!!M.emissiveMap,Ct=!!M.metalnessMap,y=!!M.roughnessMap,x=M.anisotropy>0,V=M.clearcoat>0,J=M.dispersion>0,Q=M.iridescence>0,K=M.sheen>0,St=M.transmission>0,st=x&&!!M.anisotropyMap,lt=V&&!!M.clearcoatMap,wt=V&&!!M.clearcoatNormalMap,$=V&&!!M.clearcoatRoughnessMap,at=Q&&!!M.iridescenceMap,Gt=Q&&!!M.iridescenceThicknessMap,It=K&&!!M.sheenColorMap,dt=K&&!!M.sheenRoughnessMap,Et=!!M.specularMap,Pt=!!M.specularColorMap,qt=!!M.specularIntensityMap,w=St&&!!M.transmissionMap,tt=St&&!!M.thicknessMap,k=!!M.gradientMap,H=!!M.alphaMap,nt=M.alphaTest>0,bt=!!M.alphaHash,Nt=!!M.extensions;let ae=_n;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ae=i.toneMapping);const fe={shaderID:ct,shaderType:M.type,shaderName:M.name,vertexShader:Kt,fragmentShader:Z,defines:M.defines,customVertexShaderID:q,customFragmentShaderID:ut,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:At,batchingColor:At&&N._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&N.instanceColor!==null,instancingMorph:Lt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Mn,alphaToCoverage:!!M.alphaToCoverage,map:Dt,matcap:$t,envMap:E,envMapMode:E&&j.mapping,envMapCubeUVHeight:W,aoMap:se,lightMap:kt,bumpMap:Yt,normalMap:xt,displacementMap:f&&re,emissiveMap:Tt,normalMapObjectSpace:xt&&M.normalMapType===Qc,normalMapTangentSpace:xt&&M.normalMapType===ll,metalnessMap:Ct,roughnessMap:y,anisotropy:x,anisotropyMap:st,clearcoat:V,clearcoatMap:lt,clearcoatNormalMap:wt,clearcoatRoughnessMap:$,dispersion:J,iridescence:Q,iridescenceMap:at,iridescenceThicknessMap:Gt,sheen:K,sheenColorMap:It,sheenRoughnessMap:dt,specularMap:Et,specularColorMap:Pt,specularIntensityMap:qt,transmission:St,transmissionMap:w,thicknessMap:tt,gradientMap:k,opaque:M.transparent===!1&&M.blending===hi&&M.alphaToCoverage===!1,alphaMap:H,alphaTest:nt,alphaHash:bt,combine:M.combine,mapUv:Dt&&_(M.map.channel),aoMapUv:se&&_(M.aoMap.channel),lightMapUv:kt&&_(M.lightMap.channel),bumpMapUv:Yt&&_(M.bumpMap.channel),normalMapUv:xt&&_(M.normalMap.channel),displacementMapUv:re&&_(M.displacementMap.channel),emissiveMapUv:Tt&&_(M.emissiveMap.channel),metalnessMapUv:Ct&&_(M.metalnessMap.channel),roughnessMapUv:y&&_(M.roughnessMap.channel),anisotropyMapUv:st&&_(M.anisotropyMap.channel),clearcoatMapUv:lt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(M.sheenRoughnessMap.channel),specularMapUv:Et&&_(M.specularMap.channel),specularColorMapUv:Pt&&_(M.specularColorMap.channel),specularIntensityMapUv:qt&&_(M.specularIntensityMap.channel),transmissionMapUv:w&&_(M.transmissionMap.channel),thicknessMapUv:tt&&_(M.thicknessMap.channel),alphaMapUv:H&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(xt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&(Dt||H),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:N.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Vt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Dt&&M.map.isVideoTexture===!0&&Ht.getTransfer(M.map.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===sn,flipSided:M.side===Me,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Nt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&M.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function u(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)b.push(R),b.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(I(b,M),v(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function I(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.doubleSided&&o.enable(10),b.flipSided&&o.enable(11),b.useDepthPacking&&o.enable(12),b.dithering&&o.enable(13),b.transmission&&o.enable(14),b.sheen&&o.enable(15),b.opaque&&o.enable(16),b.pointsUvs&&o.enable(17),b.decodeVideoTexture&&o.enable(18),b.alphaToCoverage&&o.enable(19),M.push(o.mask)}function T(M){const b=g[M.type];let R;if(b){const X=Xe[b];R=Td.clone(X.uniforms)}else R=M.uniforms;return R}function B(M,b){let R;for(let X=0,N=d.length;X<N;X++){const z=d[X];if(z.cacheKey===b){R=z,++R.usedTimes;break}}return R===void 0&&(R=new Np(i,b,M,r),d.push(R)),R}function L(M){if(--M.usedTimes===0){const b=d.indexOf(M);d[b]=d[d.length-1],d.pop(),M.destroy()}}function C(M){l.remove(M)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:T,acquireProgram:B,releaseProgram:L,releaseShaderCache:C,programs:d,dispose:G}}function zp(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Xp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ro(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,m,g,_,p){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=_,u.group=p),t++,u}function o(h,f,m,g,_,p){const u=a(h,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(h,f,m,g,_,p){const u=a(h,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,f){e.length>1&&e.sort(h||Xp),n.length>1&&n.sort(f||Ro),s.length>1&&s.sort(f||Ro)}function d(){for(let h=t,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function kp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Uo,i.set(n,[a])):s>=r.length?(a=new Uo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Wt};break;case"SpotLight":e={position:new P,direction:new P,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Kp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Yp=0;function Jp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qp(i){const t=new Hp,e=Kp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new ie,a=new ie;function o(c){let d=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,_=0,p=0,u=0,I=0,v=0,T=0,B=0,L=0,C=0;c.sort(Jp);for(let M=0,b=c.length;M<b;M++){const R=c[M],X=R.color,N=R.intensity,z=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=X.r*N,h+=X.g*N,f+=X.b*N;else if(R.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(R.sh.coefficients[O],N);C++}else if(R.isDirectionalLight){const O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,W=e.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=R.shadow.matrix,I++}n.directional[m]=O,m++}else if(R.isSpotLight){const O=t.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(X).multiplyScalar(N),O.distance=z,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,n.spot[_]=O;const j=R.shadow;if(R.map&&(n.spotLightMap[B]=R.map,B++,j.updateMatrices(R),R.castShadow&&L++),n.spotLightMatrix[_]=j.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=Y,T++}_++}else if(R.isRectAreaLight){const O=t.get(R);O.color.copy(X).multiplyScalar(N),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=O,p++}else if(R.isPointLight){const O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){const j=R.shadow,W=e.get(R);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=O,g++}else if(R.isHemisphereLight){const O=t.get(R);O.skyColor.copy(R.color).multiplyScalar(N),O.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[u]=O,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;const G=n.hash;(G.directionalLength!==m||G.pointLength!==g||G.spotLength!==_||G.rectAreaLength!==p||G.hemiLength!==u||G.numDirectionalShadows!==I||G.numPointShadows!==v||G.numSpotShadows!==T||G.numSpotMaps!==B||G.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=T+B-L,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,G.directionalLength=m,G.pointLength=g,G.spotLength=_,G.rectAreaLength=p,G.hemiLength=u,G.numDirectionalShadows=I,G.numPointShadows=v,G.numSpotShadows=T,G.numSpotMaps=B,G.numLightProbes=C,n.version=Yp++)}function l(c,d){let h=0,f=0,m=0,g=0,_=0;const p=d.matrixWorldInverse;for(let u=0,I=c.length;u<I;u++){const v=c[u];if(v.isDirectionalLight){const T=n.directional[h];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(v.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const T=n.hemi[_];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Ao(i){const t=new Qp(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function jp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ao(i),t.set(s,[o])):r>=a.length?(o=new Ao(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class qp extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $p extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nm(i,t,e){let n=new xa;const s=new Bt,r=new Bt,a=new ce,o=new qp({depthPacking:Jc}),l=new $p,c={},d=e.maxTextureSize,h={[bn]:Me,[Me]:bn,[sn]:sn},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:tm,fragmentShader:em}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Zn;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new He(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let u=this.type;this.render=function(L,C,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Sn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const N=u!==en&&this.type===en,z=u===en&&this.type!==en;for(let Y=0,O=L.length;Y<O;Y++){const j=L[Y],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ct=W.getFrameExtents();if(s.multiply(ct),r.copy(W.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ct.x),s.x=r.x*ct.x,W.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ct.y),s.y=r.y*ct.y,W.mapSize.y=r.y)),W.map===null||N===!0||z===!0){const mt=this.type!==en?{minFilter:Pe,magFilter:Pe}:{};W.map!==null&&W.map.dispose(),W.map=new On(s.x,s.y,mt),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const pt=W.getViewportCount();for(let mt=0;mt<pt;mt++){const Vt=W.getViewport(mt);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),X.viewport(a),W.updateMatrices(j,mt),n=W.getFrustum(),T(C,G,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===en&&I(W,G),W.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(M,b,R)};function I(L,C){const G=t.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new On(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(C,null,G,f,_,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(C,null,G,m,_,null)}function v(L,C,G,M){let b=null;const R=G.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)b=R;else if(b=G.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=b.uuid,N=C.uuid;let z=c[X];z===void 0&&(z={},c[X]=z);let Y=z[N];Y===void 0&&(Y=b.clone(),z[N]=Y,C.addEventListener("dispose",B)),b=Y}if(b.visible=C.visible,b.wireframe=C.wireframe,M===en?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=i.properties.get(b);X.light=G}return b}function T(L,C,G,M,b){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===en)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,L.matrixWorld);const N=t.update(L),z=L.material;if(Array.isArray(z)){const Y=N.groups;for(let O=0,j=Y.length;O<j;O++){const W=Y[O],ct=z[W.materialIndex];if(ct&&ct.visible){const pt=v(L,ct,M,b);L.onBeforeShadow(i,L,C,G,N,pt,W),i.renderBufferDirect(G,null,N,pt,L,W),L.onAfterShadow(i,L,C,G,N,pt,W)}}}else if(z.visible){const Y=v(L,z,M,b);L.onBeforeShadow(i,L,C,G,N,Y,null),i.renderBufferDirect(G,null,N,Y,L,null),L.onAfterShadow(i,L,C,G,N,Y,null)}}const X=L.children;for(let N=0,z=X.length;N<z;N++)T(X[N],C,G,M,b)}function B(L){L.target.removeEventListener("dispose",B);for(const G in c){const M=c[G],b=L.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function im(i){function t(){let w=!1;const tt=new ce;let k=null;const H=new ce(0,0,0,0);return{setMask:function(nt){k!==nt&&!w&&(i.colorMask(nt,nt,nt,nt),k=nt)},setLocked:function(nt){w=nt},setClear:function(nt,bt,Nt,ae,fe){fe===!0&&(nt*=ae,bt*=ae,Nt*=ae),tt.set(nt,bt,Nt,ae),H.equals(tt)===!1&&(i.clearColor(nt,bt,Nt,ae),H.copy(tt))},reset:function(){w=!1,k=null,H.set(-1,0,0,0)}}}function e(){let w=!1,tt=null,k=null,H=null;return{setTest:function(nt){nt?ut(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(nt){tt!==nt&&!w&&(i.depthMask(nt),tt=nt)},setFunc:function(nt){if(k!==nt){switch(nt){case Uc:i.depthFunc(i.NEVER);break;case Ac:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Fc:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Vc:i.depthFunc(i.GREATER);break;case Gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=nt}},setLocked:function(nt){w=nt},setClear:function(nt){H!==nt&&(i.clearDepth(nt),H=nt)},reset:function(){w=!1,tt=null,k=null,H=null}}}function n(){let w=!1,tt=null,k=null,H=null,nt=null,bt=null,Nt=null,ae=null,fe=null;return{setTest:function(Ot){w||(Ot?ut(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Ot){tt!==Ot&&!w&&(i.stencilMask(Ot),tt=Ot)},setFunc:function(Ot,Je,We){(k!==Ot||H!==Je||nt!==We)&&(i.stencilFunc(Ot,Je,We),k=Ot,H=Je,nt=We)},setOp:function(Ot,Je,We){(bt!==Ot||Nt!==Je||ae!==We)&&(i.stencilOp(Ot,Je,We),bt=Ot,Nt=Je,ae=We)},setLocked:function(Ot){w=Ot},setClear:function(Ot){fe!==Ot&&(i.clearStencil(Ot),fe=Ot)},reset:function(){w=!1,tt=null,k=null,H=null,nt=null,bt=null,Nt=null,ae=null,fe=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,u=null,I=null,v=null,T=null,B=null,L=new Wt(0,0,0),C=0,G=!1,M=null,b=null,R=null,X=null,N=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,O=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=O>=1):j.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=O>=2);let W=null,ct={};const pt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Vt=new ce().fromArray(pt),Kt=new ce().fromArray(mt);function Z(w,tt,k,H){const nt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(w,bt),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<k;Nt++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,H,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(tt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return bt}const q={};q[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),r.setFunc(_s),Yt(!1),xt(Ga),ut(i.CULL_FACE),se(Sn);function ut(w){c[w]!==!0&&(i.enable(w),c[w]=!0)}function ot(w){c[w]!==!1&&(i.disable(w),c[w]=!1)}function Lt(w,tt){return d[w]!==tt?(i.bindFramebuffer(w,tt),d[w]=tt,w===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=tt),w===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function At(w,tt){let k=f,H=!1;if(w){k=h.get(tt),k===void 0&&(k=[],h.set(tt,k));const nt=w.textures;if(k.length!==nt.length||k[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Nt=nt.length;bt<Nt;bt++)k[bt]=i.COLOR_ATTACHMENT0+bt;k.length=nt.length,H=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,H=!0);H&&i.drawBuffers(k)}function Dt(w){return m!==w?(i.useProgram(w),m=w,!0):!1}const $t={[An]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};$t[gc]=i.MIN,$t[xc]=i.MAX;const E={[Sc]:i.ZERO,[_c]:i.ONE,[bc]:i.SRC_COLOR,[Mr]:i.SRC_ALPHA,[Ec]:i.SRC_ALPHA_SATURATE,[Ic]:i.DST_COLOR,[Mc]:i.DST_ALPHA,[vc]:i.ONE_MINUS_SRC_COLOR,[yr]:i.ONE_MINUS_SRC_ALPHA,[Tc]:i.ONE_MINUS_DST_COLOR,[yc]:i.ONE_MINUS_DST_ALPHA,[Lc]:i.CONSTANT_COLOR,[Cc]:i.ONE_MINUS_CONSTANT_COLOR,[wc]:i.CONSTANT_ALPHA,[Rc]:i.ONE_MINUS_CONSTANT_ALPHA};function se(w,tt,k,H,nt,bt,Nt,ae,fe,Ot){if(w===Sn){g===!0&&(ot(i.BLEND),g=!1);return}if(g===!1&&(ut(i.BLEND),g=!0),w!==fc){if(w!==_||Ot!==G){if((p!==An||v!==An)&&(i.blendEquation(i.FUNC_ADD),p=An,v=An),Ot)switch(w){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Na:i.blendFunc(i.ONE,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Na:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}u=null,I=null,T=null,B=null,L.set(0,0,0),C=0,_=w,G=Ot}return}nt=nt||tt,bt=bt||k,Nt=Nt||H,(tt!==p||nt!==v)&&(i.blendEquationSeparate($t[tt],$t[nt]),p=tt,v=nt),(k!==u||H!==I||bt!==T||Nt!==B)&&(i.blendFuncSeparate(E[k],E[H],E[bt],E[Nt]),u=k,I=H,T=bt,B=Nt),(ae.equals(L)===!1||fe!==C)&&(i.blendColor(ae.r,ae.g,ae.b,fe),L.copy(ae),C=fe),_=w,G=!1}function kt(w,tt){w.side===sn?ot(i.CULL_FACE):ut(i.CULL_FACE);let k=w.side===Me;tt&&(k=!k),Yt(k),w.blending===hi&&w.transparent===!1?se(Sn):se(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),r.setFunc(w.depthFunc),r.setTest(w.depthTest),r.setMask(w.depthWrite),s.setMask(w.colorWrite);const H=w.stencilWrite;a.setTest(H),H&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Tt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(w){M!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),M=w)}function xt(w){w!==dc?(ut(i.CULL_FACE),w!==b&&(w===Ga?i.cullFace(i.BACK):w===uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),b=w}function re(w){w!==R&&(Y&&i.lineWidth(w),R=w)}function Tt(w,tt,k){w?(ut(i.POLYGON_OFFSET_FILL),(X!==tt||N!==k)&&(i.polygonOffset(tt,k),X=tt,N=k)):ot(i.POLYGON_OFFSET_FILL)}function Ct(w){w?ut(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function y(w){w===void 0&&(w=i.TEXTURE0+z-1),W!==w&&(i.activeTexture(w),W=w)}function x(w,tt,k){k===void 0&&(W===null?k=i.TEXTURE0+z-1:k=W);let H=ct[k];H===void 0&&(H={type:void 0,texture:void 0},ct[k]=H),(H.type!==w||H.texture!==tt)&&(W!==k&&(i.activeTexture(k),W=k),i.bindTexture(w,tt||q[w]),H.type=w,H.texture=tt)}function V(){const w=ct[W];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function wt(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function at(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function It(w){Vt.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),Vt.copy(w))}function dt(w){Kt.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),Kt.copy(w))}function Et(w,tt){let k=l.get(tt);k===void 0&&(k=new WeakMap,l.set(tt,k));let H=k.get(w);H===void 0&&(H=i.getUniformBlockIndex(tt,w.name),k.set(w,H))}function Pt(w,tt){const H=l.get(tt).get(w);o.get(tt)!==H&&(i.uniformBlockBinding(tt,H,w.__bindingPointIndex),o.set(tt,H))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,ct={},d={},h=new WeakMap,f=[],m=null,g=!1,_=null,p=null,u=null,I=null,v=null,T=null,B=null,L=new Wt(0,0,0),C=0,G=!1,M=null,b=null,R=null,X=null,N=null,Vt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ut,disable:ot,bindFramebuffer:Lt,drawBuffers:At,useProgram:Dt,setBlending:se,setMaterial:kt,setFlipSided:Yt,setCullFace:xt,setLineWidth:re,setPolygonOffset:Tt,setScissorTest:Ct,activeTexture:y,bindTexture:x,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:at,texImage3D:Gt,updateUBOMapping:Et,uniformBlockBinding:Pt,texStorage2D:wt,texStorage3D:$,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:st,compressedTexSubImage3D:lt,scissor:It,viewport:dt,reset:qt}}function Po(i,t,e,n){const s=sm(n);switch(e){case el:return i*t;case il:return i*t;case sl:return i*t*2;case rl:return i*t/s.components*s.byteLength;case ha:return i*t/s.components*s.byteLength;case al:return i*t*2/s.components*s.byteLength;case fa:return i*t*2/s.components*s.byteLength;case nl:return i*t*3/s.components*s.byteLength;case Be:return i*t*4/s.components*s.byteLength;case pa:return i*t*4/s.components*s.byteLength;case os:case ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cs:case ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wr:case Ur:return Math.max(i,16)*Math.max(t,8)/4;case Cr:case Rr:return Math.max(i,8)*Math.max(t,8)/2;case Ar:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Br:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Or:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case us:case Jr:case Qr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ol:case jr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qr:case $r:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sm(i){switch(i){case on:case qo:return{byteLength:1,components:1};case Ui:case $o:case Ai:return{byteLength:2,components:1};case da:case ua:return{byteLength:2,components:4};case Wn:case ca:case rn:return{byteLength:4,components:1};case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return m?new OffscreenCanvas(y,x):Is("canvas")}function _(y,x,V){let J=1;const Q=Ct(y);if((Q.width>V||Q.height>V)&&(J=V/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const K=Math.floor(J*Q.width),St=Math.floor(J*Q.height);h===void 0&&(h=g(K,St));const st=x?g(K,St):h;return st.width=K,st.height=St,st.getContext("2d").drawImage(y,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+St+")."),st}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),y;return y}function p(y){return y.generateMipmaps&&y.minFilter!==Pe&&y.minFilter!==Ne}function u(y){i.generateMipmap(y)}function I(y,x,V,J,Q=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let K=x;if(x===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),x===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),x===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),x===i.RGBA){const St=Q?bs:Ht.getTransfer(J);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=St===Qt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(y,x){let V;return y?x===null||x===Wn||x===_i?V=i.DEPTH24_STENCIL8:x===rn?V=i.DEPTH32F_STENCIL8:x===Ui&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Wn||x===_i?V=i.DEPTH_COMPONENT24:x===rn?V=i.DEPTH_COMPONENT32F:x===Ui&&(V=i.DEPTH_COMPONENT16),V}function T(y,x){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Pe&&y.minFilter!==Ne?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function B(y){const x=y.target;x.removeEventListener("dispose",B),C(x),x.isVideoTexture&&d.delete(x)}function L(y){const x=y.target;x.removeEventListener("dispose",L),M(x)}function C(y){const x=n.get(y);if(x.__webglInit===void 0)return;const V=y.source,J=f.get(V);if(J){const Q=J[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(y),Object.keys(J).length===0&&f.delete(V)}n.remove(y)}function G(y){const x=n.get(y);i.deleteTexture(x.__webglTexture);const V=y.source,J=f.get(V);delete J[x.__cacheKey],a.memory.textures--}function M(y){const x=n.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let Q=0;Q<x.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=y.textures;for(let J=0,Q=V.length;J<Q;J++){const K=n.get(V[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(y)}let b=0;function R(){b=0}function X(){const y=b;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),b+=1,y}function N(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function z(y,x){const V=n.get(y);if(y.isVideoTexture&&re(y),y.isRenderTargetTexture===!1&&y.version>0&&V.__version!==y.version){const J=y.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(V,y,x);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function Y(y,x){const V=n.get(y);if(y.version>0&&V.__version!==y.version){Kt(V,y,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function O(y,x){const V=n.get(y);if(y.version>0&&V.__version!==y.version){Kt(V,y,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function j(y,x){const V=n.get(y);if(y.version>0&&V.__version!==y.version){Z(V,y,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}const W={[Er]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},ct={[Pe]:i.NEAREST,[Kc]:i.NEAREST_MIPMAP_NEAREST,[Bi]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[Os]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},pt={[jc]:i.NEVER,[id]:i.ALWAYS,[qc]:i.LESS,[cl]:i.LEQUAL,[$c]:i.EQUAL,[nd]:i.GEQUAL,[td]:i.GREATER,[ed]:i.NOTEQUAL};function mt(y,x){if(x.type===rn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ne||x.magFilter===Os||x.magFilter===Bi||x.magFilter===Vn||x.minFilter===Ne||x.minFilter===Os||x.minFilter===Bi||x.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,W[x.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,W[x.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,W[x.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ct[x.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ct[x.minFilter]),x.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,pt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Pe||x.minFilter!==Bi&&x.minFilter!==Vn||x.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Vt(y,x){let V=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",B));const J=x.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const K=N(x);if(K!==y.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[K].usedTimes++;const St=Q[y.__cacheKey];St!==void 0&&(Q[y.__cacheKey].usedTimes--,St.usedTimes===0&&G(x)),y.__cacheKey=K,y.__webglTexture=Q[K].texture}return V}function Kt(y,x,V){let J=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=i.TEXTURE_3D);const Q=Vt(y,x),K=x.source;e.bindTexture(J,y.__webglTexture,i.TEXTURE0+V);const St=n.get(K);if(K.version!==St.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);const st=Ht.getPrimaries(Ht.workingColorSpace),lt=x.colorSpace===xn?null:Ht.getPrimaries(x.colorSpace),wt=x.colorSpace===xn||st===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let $=_(x.image,!1,s.maxTextureSize);$=Tt(x,$);const at=r.convert(x.format,x.colorSpace),Gt=r.convert(x.type);let It=I(x.internalFormat,at,Gt,x.colorSpace,x.isVideoTexture);mt(J,x);let dt;const Et=x.mipmaps,Pt=x.isVideoTexture!==!0,qt=St.__version===void 0||Q===!0,w=K.dataReady,tt=T(x,$);if(x.isDepthTexture)It=v(x.format===bi,x.type),qt&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,It,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,It,$.width,$.height,0,at,Gt,null));else if(x.isDataTexture)if(Et.length>0){Pt&&qt&&e.texStorage2D(i.TEXTURE_2D,tt,It,Et[0].width,Et[0].height);for(let k=0,H=Et.length;k<H;k++)dt=Et[k],Pt?w&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,at,Gt,dt.data):e.texImage2D(i.TEXTURE_2D,k,It,dt.width,dt.height,0,at,Gt,dt.data);x.generateMipmaps=!1}else Pt?(qt&&e.texStorage2D(i.TEXTURE_2D,tt,It,$.width,$.height),w&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,at,Gt,$.data)):e.texImage2D(i.TEXTURE_2D,0,It,$.width,$.height,0,at,Gt,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pt&&qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,It,Et[0].width,Et[0].height,$.depth);for(let k=0,H=Et.length;k<H;k++)if(dt=Et[k],x.format!==Be)if(at!==null)if(Pt){if(w)if(x.layerUpdates.size>0){const nt=Po(dt.width,dt.height,x.format,x.type);for(const bt of x.layerUpdates){const Nt=dt.data.subarray(bt*nt/dt.data.BYTES_PER_ELEMENT,(bt+1)*nt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,bt,dt.width,dt.height,1,at,Nt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,dt.width,dt.height,$.depth,at,dt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,It,dt.width,dt.height,$.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?w&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,dt.width,dt.height,$.depth,at,Gt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,It,dt.width,dt.height,$.depth,0,at,Gt,dt.data)}else{Pt&&qt&&e.texStorage2D(i.TEXTURE_2D,tt,It,Et[0].width,Et[0].height);for(let k=0,H=Et.length;k<H;k++)dt=Et[k],x.format!==Be?at!==null?Pt?w&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,at,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,It,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?w&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt.width,dt.height,at,Gt,dt.data):e.texImage2D(i.TEXTURE_2D,k,It,dt.width,dt.height,0,at,Gt,dt.data)}else if(x.isDataArrayTexture)if(Pt){if(qt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,It,$.width,$.height,$.depth),w)if(x.layerUpdates.size>0){const k=Po($.width,$.height,x.format,x.type);for(const H of x.layerUpdates){const nt=$.data.subarray(H*k/$.data.BYTES_PER_ELEMENT,(H+1)*k/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,H,$.width,$.height,1,at,Gt,nt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,at,Gt,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,$.width,$.height,$.depth,0,at,Gt,$.data);else if(x.isData3DTexture)Pt?(qt&&e.texStorage3D(i.TEXTURE_3D,tt,It,$.width,$.height,$.depth),w&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,at,Gt,$.data)):e.texImage3D(i.TEXTURE_3D,0,It,$.width,$.height,$.depth,0,at,Gt,$.data);else if(x.isFramebufferTexture){if(qt)if(Pt)e.texStorage2D(i.TEXTURE_2D,tt,It,$.width,$.height);else{let k=$.width,H=$.height;for(let nt=0;nt<tt;nt++)e.texImage2D(i.TEXTURE_2D,nt,It,k,H,0,at,Gt,null),k>>=1,H>>=1}}else if(Et.length>0){if(Pt&&qt){const k=Ct(Et[0]);e.texStorage2D(i.TEXTURE_2D,tt,It,k.width,k.height)}for(let k=0,H=Et.length;k<H;k++)dt=Et[k],Pt?w&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,at,Gt,dt):e.texImage2D(i.TEXTURE_2D,k,It,at,Gt,dt);x.generateMipmaps=!1}else if(Pt){if(qt){const k=Ct($);e.texStorage2D(i.TEXTURE_2D,tt,It,k.width,k.height)}w&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,Gt,$)}else e.texImage2D(i.TEXTURE_2D,0,It,at,Gt,$);p(x)&&u(J),St.__version=K.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Z(y,x,V){if(x.image.length!==6)return;const J=Vt(y,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+V);const K=n.get(Q);if(Q.version!==K.__version||J===!0){e.activeTexture(i.TEXTURE0+V);const St=Ht.getPrimaries(Ht.workingColorSpace),st=x.colorSpace===xn?null:Ht.getPrimaries(x.colorSpace),lt=x.colorSpace===xn||St===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const wt=x.isCompressedTexture||x.image[0].isCompressedTexture,$=x.image[0]&&x.image[0].isDataTexture,at=[];for(let H=0;H<6;H++)!wt&&!$?at[H]=_(x.image[H],!0,s.maxCubemapSize):at[H]=$?x.image[H].image:x.image[H],at[H]=Tt(x,at[H]);const Gt=at[0],It=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),Et=I(x.internalFormat,It,dt,x.colorSpace),Pt=x.isVideoTexture!==!0,qt=K.__version===void 0||J===!0,w=Q.dataReady;let tt=T(x,Gt);mt(i.TEXTURE_CUBE_MAP,x);let k;if(wt){Pt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Et,Gt.width,Gt.height);for(let H=0;H<6;H++){k=at[H].mipmaps;for(let nt=0;nt<k.length;nt++){const bt=k[nt];x.format!==Be?It!==null?Pt?w&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,nt,0,0,bt.width,bt.height,It,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,nt,Et,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,nt,0,0,bt.width,bt.height,It,dt,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,nt,Et,bt.width,bt.height,0,It,dt,bt.data)}}}else{if(k=x.mipmaps,Pt&&qt){k.length>0&&tt++;const H=Ct(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,Et,H.width,H.height)}for(let H=0;H<6;H++)if($){Pt?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,at[H].width,at[H].height,It,dt,at[H].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Et,at[H].width,at[H].height,0,It,dt,at[H].data);for(let nt=0;nt<k.length;nt++){const Nt=k[nt].image[H].image;Pt?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,nt+1,0,0,Nt.width,Nt.height,It,dt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,nt+1,Et,Nt.width,Nt.height,0,It,dt,Nt.data)}}else{Pt?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,It,dt,at[H]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Et,It,dt,at[H]);for(let nt=0;nt<k.length;nt++){const bt=k[nt];Pt?w&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,nt+1,0,0,It,dt,bt.image[H]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,nt+1,Et,It,dt,bt.image[H])}}}p(x)&&u(i.TEXTURE_CUBE_MAP),K.__version=Q.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function q(y,x,V,J,Q,K){const St=r.convert(V.format,V.colorSpace),st=r.convert(V.type),lt=I(V.internalFormat,St,st,V.colorSpace);if(!n.get(x).__hasExternalTextures){const $=Math.max(1,x.width>>K),at=Math.max(1,x.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,lt,$,at,x.depth,0,St,st,null):e.texImage2D(Q,K,lt,$,at,0,St,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,n.get(V).__webglTexture,0,Yt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,n.get(V).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(y,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,y),x.depthBuffer){const J=x.depthTexture,Q=J&&J.isDepthTexture?J.type:null,K=v(x.stencilBuffer,Q),St=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=Yt(x);xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,K,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,y)}else{const J=x.textures;for(let Q=0;Q<J.length;Q++){const K=J[Q],St=r.convert(K.format,K.colorSpace),st=r.convert(K.type),lt=I(K.internalFormat,St,st,K.colorSpace),wt=Yt(x);V&&xt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,lt,x.width,x.height):xt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,lt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,lt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z(x.depthTexture,0);const J=n.get(x.depthTexture).__webglTexture,Q=Yt(x);if(x.depthTexture.format===fi)xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(x.depthTexture.format===bi)xt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Lt(y){const x=n.get(y),V=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ot(x.__webglFramebuffer,y)}else if(V){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=i.createRenderbuffer(),ut(x.__webglDepthbuffer[J],y,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),ut(x.__webglDepthbuffer,y,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(y,x,V){const J=n.get(y);x!==void 0&&q(J.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Lt(y)}function Dt(y){const x=y.texture,V=n.get(y),J=n.get(x);y.addEventListener("dispose",L);const Q=y.textures,K=y.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[st]=[];for(let lt=0;lt<x.mipmaps.length;lt++)V.__webglFramebuffer[st][lt]=i.createFramebuffer()}else V.__webglFramebuffer[st]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)V.__webglFramebuffer[st]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(St)for(let st=0,lt=Q.length;st<lt;st++){const wt=n.get(Q[st]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&xt(y)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let st=0;st<Q.length;st++){const lt=Q[st];V.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[st]);const wt=r.convert(lt.format,lt.colorSpace),$=r.convert(lt.type),at=I(lt.internalFormat,wt,$,lt.colorSpace,y.isXRRenderTarget===!0),Gt=Yt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,at,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,V.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),mt(i.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)q(V.__webglFramebuffer[st][lt],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,lt);else q(V.__webglFramebuffer[st],y,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let st=0,lt=Q.length;st<lt;st++){const wt=Q[st],$=n.get(wt);e.bindTexture(i.TEXTURE_2D,$.__webglTexture),mt(i.TEXTURE_2D,wt),q(V.__webglFramebuffer,y,wt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),p(wt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(st=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,J.__webglTexture),mt(st,x),x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)q(V.__webglFramebuffer[lt],y,x,i.COLOR_ATTACHMENT0,st,lt);else q(V.__webglFramebuffer,y,x,i.COLOR_ATTACHMENT0,st,0);p(x)&&u(st),e.unbindTexture()}y.depthBuffer&&Lt(y)}function $t(y){const x=y.textures;for(let V=0,J=x.length;V<J;V++){const Q=x[V];if(p(Q)){const K=y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,St=n.get(Q).__webglTexture;e.bindTexture(K,St),u(K),e.unbindTexture()}}}const E=[],se=[];function kt(y){if(y.samples>0){if(xt(y)===!1){const x=y.textures,V=y.width,J=y.height;let Q=i.COLOR_BUFFER_BIT;const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(y),st=x.length>1;if(st)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[lt]);const wt=n.get(x[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,wt,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,Q,i.NEAREST),l===!0&&(E.length=0,se.length=0,E.push(i.COLOR_ATTACHMENT0+lt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(E.push(K),se.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,E))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,St.__webglColorRenderbuffer[lt]);const wt=n.get(x[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Yt(y){return Math.min(s.maxSamples,y.samples)}function xt(y){const x=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function re(y){const x=a.render.frame;d.get(y)!==x&&(d.set(y,x),y.update())}function Tt(y,x){const V=y.colorSpace,J=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||V!==Mn&&V!==xn&&(Ht.getTransfer(V)===Qt?(J!==Be||Q!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Ct(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=R,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=O,this.setTextureCube=j,this.rebindTextures=At,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=q,this.useMultisampledRTT=xt}function am(i,t){function e(n,s=xn){let r;const a=Ht.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qo)return i.BYTE;if(n===$o)return i.SHORT;if(n===Ui)return i.UNSIGNED_SHORT;if(n===ca)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Ai)return i.HALF_FLOAT;if(n===el)return i.ALPHA;if(n===nl)return i.RGB;if(n===Be)return i.RGBA;if(n===il)return i.LUMINANCE;if(n===sl)return i.LUMINANCE_ALPHA;if(n===fi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===rl)return i.RED;if(n===ha)return i.RED_INTEGER;if(n===al)return i.RG;if(n===fa)return i.RG_INTEGER;if(n===pa)return i.RGBA_INTEGER;if(n===os||n===ls||n===cs||n===ds)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cr||n===wr||n===Rr||n===Ur)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ar||n===Pr||n===Fr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ar||n===Pr)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dr||n===Vr||n===Gr||n===Nr||n===Br||n===Wr||n===Or||n===Zr||n===zr||n===Xr||n===kr||n===Hr||n===Kr||n===Yr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Br)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Or)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===us||n===Jr||n===Qr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===us)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===jr||n===qr||n===$r)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===us)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$r)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class om extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ui extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lm={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vn({vertexShader:cm,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new He(new As(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hm extends Mi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,g=null;const _=new um,p=e.getContextAttributes();let u=null,I=null;const v=[],T=[],B=new Bt;let L=null;const C=new Ue;C.layers.enable(1),C.viewport=new ce;const G=new Ue;G.layers.enable(2),G.viewport=new ce;const M=[C,G],b=new om;b.layers.enable(1),b.layers.enable(2);let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let q=v[Z];return q===void 0&&(q=new pr,v[Z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(Z){let q=v[Z];return q===void 0&&(q=new pr,v[Z]=q),q.getGripSpace()},this.getHand=function(Z){let q=v[Z];return q===void 0&&(q=new pr,v[Z]=q),q.getHandSpace()};function N(Z){const q=T.indexOf(Z.inputSource);if(q===-1)return;const ut=v[q];ut!==void 0&&(ut.update(Z.inputSource,Z.frame,c||a),ut.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<v.length;Z++){const q=T[Z];q!==null&&(T[Z]=null,v[Z].disconnect(q))}R=null,X=null,_.reset(),t.setRenderTarget(u),m=null,f=null,h=null,s=null,I=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),I=new On(m.framebufferWidth,m.framebufferHeight,{format:Be,type:on,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,ut=null,ot=null;p.depth&&(ot=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=p.stencil?bi:fi,ut=p.stencil?_i:Wn);const Lt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),I=new On(f.textureWidth,f.textureHeight,{format:Be,type:on,depthTexture:new Il(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(Z){for(let q=0;q<Z.removed.length;q++){const ut=Z.removed[q],ot=T.indexOf(ut);ot>=0&&(T[ot]=null,v[ot].disconnect(ut))}for(let q=0;q<Z.added.length;q++){const ut=Z.added[q];let ot=T.indexOf(ut);if(ot===-1){for(let At=0;At<v.length;At++)if(At>=T.length){T.push(ut),ot=At;break}else if(T[At]===null){T[At]=ut,ot=At;break}if(ot===-1)break}const Lt=v[ot];Lt&&Lt.connect(ut)}}const O=new P,j=new P;function W(Z,q,ut){O.setFromMatrixPosition(q.matrixWorld),j.setFromMatrixPosition(ut.matrixWorld);const ot=O.distanceTo(j),Lt=q.projectionMatrix.elements,At=ut.projectionMatrix.elements,Dt=Lt[14]/(Lt[10]-1),$t=Lt[14]/(Lt[10]+1),E=(Lt[9]+1)/Lt[5],se=(Lt[9]-1)/Lt[5],kt=(Lt[8]-1)/Lt[0],Yt=(At[8]+1)/At[0],xt=Dt*kt,re=Dt*Yt,Tt=ot/(-kt+Yt),Ct=Tt*-kt;q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ct),Z.translateZ(Tt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const y=Dt+Tt,x=$t+Tt,V=xt-Ct,J=re+(ot-Ct),Q=E*$t/x*y,K=se*$t/x*y;Z.projectionMatrix.makePerspective(V,J,Q,K,y,x),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function ct(Z,q){q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;_.texture!==null&&(Z.near=_.depthNear,Z.far=_.depthFar),b.near=G.near=C.near=Z.near,b.far=G.far=C.far=Z.far,(R!==b.near||X!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,X=b.far,C.near=R,C.far=X,G.near=R,G.far=X,C.updateProjectionMatrix(),G.updateProjectionMatrix(),Z.updateProjectionMatrix());const q=Z.parent,ut=b.cameras;ct(b,q);for(let ot=0;ot<ut.length;ot++)ct(ut[ot],q);ut.length===2?W(b,C,G):b.projectionMatrix.copy(C.projectionMatrix),pt(Z,b,q)};function pt(Z,q,ut){ut===null?Z.matrix.copy(q.matrixWorld):(Z.matrix.copy(ut.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(q.projectionMatrix),Z.projectionMatrixInverse.copy(q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ta*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let mt=null;function Vt(Z,q){if(d=q.getViewerPose(c||a),g=q,d!==null){const ut=d.views;m!==null&&(t.setRenderTargetFramebuffer(I,m.framebuffer),t.setRenderTarget(I));let ot=!1;ut.length!==b.cameras.length&&(b.cameras.length=0,ot=!0);for(let At=0;At<ut.length;At++){const Dt=ut[At];let $t=null;if(m!==null)$t=m.getViewport(Dt);else{const se=h.getViewSubImage(f,Dt);$t=se.viewport,At===0&&(t.setRenderTargetTextures(I,se.colorTexture,f.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(I))}let E=M[At];E===void 0&&(E=new Ue,E.layers.enable(At),E.viewport=new ce,M[At]=E),E.matrix.fromArray(Dt.transform.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale),E.projectionMatrix.fromArray(Dt.projectionMatrix),E.projectionMatrixInverse.copy(E.projectionMatrix).invert(),E.viewport.set($t.x,$t.y,$t.width,$t.height),At===0&&(b.matrix.copy(E.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ot===!0&&b.cameras.push(E)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const At=h.getDepthInformation(ut[0]);At&&At.isValid&&At.texture&&_.init(t,At,s.renderState)}}for(let ut=0;ut<v.length;ut++){const ot=T[ut],Lt=v[ut];ot!==null&&Lt!==void 0&&Lt.update(ot,q,c||a)}mt&&mt(Z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const Kt=new Ml;Kt.setAnimationLoop(Vt),this.setAnimationLoop=function(Z){mt=Z},this.dispose=function(){}}}const wn=new Ye,fm=new ie;function pm(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,_l(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,I,v,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),h(p,u)):u.isMeshPhongMaterial?(r(p,u),d(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,T)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,I,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Me&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Me&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const I=t.get(u),v=I.envMap,T=I.envMapRotation;v&&(p.envMap.value=v,wn.copy(T),wn.x*=-1,wn.y*=-1,wn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),p.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(wn)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,I,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*I,p.scale.value=v*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,I){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Me&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=I.texture,p.transmissionSamplerSize.value.set(I.width,I.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const I=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(I.matrixWorld),p.nearDistance.value=I.shadow.camera.near,p.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(I,v){const T=v.program;n.uniformBlockBinding(I,T)}function c(I,v){let T=s[I.id];T===void 0&&(g(I),T=d(I),s[I.id]=T,I.addEventListener("dispose",p));const B=v.program;n.updateUBOMapping(I,B);const L=t.render.frame;r[I.id]!==L&&(f(I),r[I.id]=L)}function d(I){const v=h();I.__bindingPointIndex=v;const T=i.createBuffer(),B=I.__size,L=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,B,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,T),T}function h(){for(let I=0;I<o;I++)if(a.indexOf(I)===-1)return a.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(I){const v=s[I.id],T=I.uniforms,B=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let L=0,C=T.length;L<C;L++){const G=Array.isArray(T[L])?T[L]:[T[L]];for(let M=0,b=G.length;M<b;M++){const R=G[M];if(m(R,L,M,B)===!0){const X=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let Y=0;Y<N.length;Y++){const O=N[Y],j=_(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,X+z,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(I,v,T,B){const L=I.value,C=v+"_"+T;if(B[C]===void 0)return typeof L=="number"||typeof L=="boolean"?B[C]=L:B[C]=L.clone(),!0;{const G=B[C];if(typeof L=="number"||typeof L=="boolean"){if(G!==L)return B[C]=L,!0}else if(G.equals(L)===!1)return G.copy(L),!0}return!1}function g(I){const v=I.uniforms;let T=0;const B=16;for(let C=0,G=v.length;C<G;C++){const M=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,R=M.length;b<R;b++){const X=M[b],N=Array.isArray(X.value)?X.value:[X.value];for(let z=0,Y=N.length;z<Y;z++){const O=N[z],j=_(O),W=T%B;W!==0&&B-W<j.boundary&&(T+=B-W),X.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=j.storage}}}const L=T%B;return L>0&&(T+=B-L),I.__size=T,I.__cache={},this}function _(I){const v={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(v.boundary=4,v.storage=4):I.isVector2?(v.boundary=8,v.storage=8):I.isVector3||I.isColor?(v.boundary=16,v.storage=12):I.isVector4?(v.boundary=16,v.storage=16):I.isMatrix3?(v.boundary=48,v.storage=48):I.isMatrix4?(v.boundary=64,v.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),v}function p(I){const v=I.target;v.removeEventListener("dispose",p);const T=a.indexOf(v.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(const I in s)i.deleteBuffer(s[I]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class gm{constructor(t={}){const{canvas:e=rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=_n,this.toneMappingExposure=1;const v=this;let T=!1,B=0,L=0,C=null,G=-1,M=null;const b=new ce,R=new ce;let X=null;const N=new Wt(0);let z=0,Y=e.width,O=e.height,j=1,W=null,ct=null;const pt=new ce(0,0,Y,O),mt=new ce(0,0,Y,O);let Vt=!1;const Kt=new xa;let Z=!1,q=!1;const ut=new ie,ot=new P,Lt=new ce,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function $t(){return C===null?j:1}let E=n;function se(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oa}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",H,!1),e.addEventListener("webglcontextcreationerror",nt,!1),E===null){const U="webgl2";if(E=se(U,S),E===null)throw se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let kt,Yt,xt,re,Tt,Ct,y,x,V,J,Q,K,St,st,lt,wt,$,at,Gt,It,dt,Et,Pt,qt;function w(){kt=new yf(E),kt.init(),Et=new am(E,kt),Yt=new xf(E,kt,t,Et),xt=new im(E),re=new Ef(E),Tt=new zp,Ct=new rm(E,kt,xt,Tt,Yt,Et,re),y=new _f(v),x=new Mf(v),V=new Ad(E),Pt=new mf(E,V),J=new If(E,V,re,Pt),Q=new Cf(E,J,V,re),Gt=new Lf(E,Yt,Ct),wt=new Sf(Tt),K=new Zp(v,y,x,kt,Yt,Pt,wt),St=new pm(v,Tt),st=new kp,lt=new jp(kt),at=new pf(v,y,x,xt,Q,f,l),$=new nm(v,Q,Yt),qt=new mm(E,re,Yt,xt),It=new gf(E,kt,re),dt=new Tf(E,kt,re),re.programs=K.programs,v.capabilities=Yt,v.extensions=kt,v.properties=Tt,v.renderLists=st,v.shadowMap=$,v.state=xt,v.info=re}w();const tt=new hm(v,E);this.xr=tt,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const S=kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(Y,O,!1))},this.getSize=function(S){return S.set(Y,O)},this.setSize=function(S,U,F=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,O=U,e.width=Math.floor(S*j),e.height=Math.floor(U*j),F===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Y*j,O*j).floor()},this.setDrawingBufferSize=function(S,U,F){Y=S,O=U,j=F,e.width=Math.floor(S*F),e.height=Math.floor(U*F),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(pt)},this.setViewport=function(S,U,F,D){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,U,F,D),xt.viewport(b.copy(pt).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(mt)},this.setScissor=function(S,U,F,D){S.isVector4?mt.set(S.x,S.y,S.z,S.w):mt.set(S,U,F,D),xt.scissor(R.copy(mt).multiplyScalar(j).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(S){xt.setScissorTest(Vt=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){ct=S},this.getClearColor=function(S){return S.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(S=!0,U=!0,F=!0){let D=0;if(S){let A=!1;if(C!==null){const et=C.texture.format;A=et===pa||et===fa||et===ha}if(A){const et=C.texture.type,rt=et===on||et===Wn||et===Ui||et===_i||et===da||et===ua,ht=at.getClearColor(),ft=at.getClearAlpha(),vt=ht.r,Mt=ht.g,_t=ht.b;rt?(m[0]=vt,m[1]=Mt,m[2]=_t,m[3]=ft,E.clearBufferuiv(E.COLOR,0,m)):(g[0]=vt,g[1]=Mt,g[2]=_t,g[3]=ft,E.clearBufferiv(E.COLOR,0,g))}else D|=E.COLOR_BUFFER_BIT}U&&(D|=E.DEPTH_BUFFER_BIT),F&&(D|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",H,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),st.dispose(),lt.dispose(),Tt.dispose(),y.dispose(),x.dispose(),Q.dispose(),Pt.dispose(),qt.dispose(),K.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",We),tt.removeEventListener("sessionend",Ma),yn.stop()};function k(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=re.autoReset,U=$.enabled,F=$.autoUpdate,D=$.needsUpdate,A=$.type;w(),re.autoReset=S,$.enabled=U,$.autoUpdate=F,$.needsUpdate=D,$.type=A}function nt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function bt(S){const U=S.target;U.removeEventListener("dispose",bt),Nt(U)}function Nt(S){ae(S),Tt.remove(S)}function ae(S){const U=Tt.get(S).programs;U!==void 0&&(U.forEach(function(F){K.releaseProgram(F)}),S.isShaderMaterial&&K.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,F,D,A,et){U===null&&(U=At);const rt=A.isMesh&&A.matrixWorld.determinant()<0,ht=Zl(S,U,F,D,A);xt.setMaterial(D,rt);let ft=F.index,vt=1;if(D.wireframe===!0){if(ft=J.getWireframeAttribute(F),ft===void 0)return;vt=2}const Mt=F.drawRange,_t=F.attributes.position;let Zt=Mt.start*vt,te=(Mt.start+Mt.count)*vt;et!==null&&(Zt=Math.max(Zt,et.start*vt),te=Math.min(te,(et.start+et.count)*vt)),ft!==null?(Zt=Math.max(Zt,0),te=Math.min(te,ft.count)):_t!=null&&(Zt=Math.max(Zt,0),te=Math.min(te,_t.count));const ee=te-Zt;if(ee<0||ee===1/0)return;Pt.setup(A,D,ht,F,ft);let Ie,zt=It;if(ft!==null&&(Ie=V.get(ft),zt=dt,zt.setIndex(Ie)),A.isMesh)D.wireframe===!0?(xt.setLineWidth(D.wireframeLinewidth*$t()),zt.setMode(E.LINES)):zt.setMode(E.TRIANGLES);else if(A.isLine){let gt=D.linewidth;gt===void 0&&(gt=1),xt.setLineWidth(gt*$t()),A.isLineSegments?zt.setMode(E.LINES):A.isLineLoop?zt.setMode(E.LINE_LOOP):zt.setMode(E.LINE_STRIP)}else A.isPoints?zt.setMode(E.POINTS):A.isSprite&&zt.setMode(E.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)zt.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))zt.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const gt=A._multiDrawStarts,pe=A._multiDrawCounts,Xt=A._multiDrawCount,Fe=ft?V.get(ft).bytesPerElement:1,zn=Tt.get(D).currentProgram.getUniforms();for(let Te=0;Te<Xt;Te++)zn.setValue(E,"_gl_DrawID",Te),zt.render(gt[Te]/Fe,pe[Te])}else if(A.isInstancedMesh)zt.renderInstances(Zt,ee,A.count);else if(F.isInstancedBufferGeometry){const gt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,pe=Math.min(F.instanceCount,gt);zt.renderInstances(Zt,ee,pe)}else zt.render(Zt,ee)};function fe(S,U,F){S.transparent===!0&&S.side===sn&&S.forceSinglePass===!1?(S.side=Me,S.needsUpdate=!0,Gi(S,U,F),S.side=bn,S.needsUpdate=!0,Gi(S,U,F),S.side=sn):Gi(S,U,F)}this.compile=function(S,U,F=null){F===null&&(F=S),p=lt.get(F),p.init(U),I.push(p),F.traverseVisible(function(A){A.isLight&&A.layers.test(U.layers)&&(p.pushLight(A),A.castShadow&&p.pushShadow(A))}),S!==F&&S.traverseVisible(function(A){A.isLight&&A.layers.test(U.layers)&&(p.pushLight(A),A.castShadow&&p.pushShadow(A))}),p.setupLights();const D=new Set;return S.traverse(function(A){const et=A.material;if(et)if(Array.isArray(et))for(let rt=0;rt<et.length;rt++){const ht=et[rt];fe(ht,F,A),D.add(ht)}else fe(et,F,A),D.add(et)}),I.pop(),p=null,D},this.compileAsync=function(S,U,F=null){const D=this.compile(S,U,F);return new Promise(A=>{function et(){if(D.forEach(function(rt){Tt.get(rt).currentProgram.isReady()&&D.delete(rt)}),D.size===0){A(S);return}setTimeout(et,10)}kt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ot=null;function Je(S){Ot&&Ot(S)}function We(){yn.stop()}function Ma(){yn.start()}const yn=new Ml;yn.setAnimationLoop(Je),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(S){Ot=S,tt.setAnimationLoop(S),S===null?yn.stop():yn.start()},tt.addEventListener("sessionstart",We),tt.addEventListener("sessionend",Ma),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(U),U=tt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,C),p=lt.get(S,I.length),p.init(U),I.push(p),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Kt.setFromProjectionMatrix(ut),q=this.localClippingEnabled,Z=wt.init(this.clippingPlanes,q),_=st.get(S,u.length),_.init(),u.push(_),tt.enabled===!0&&tt.isPresenting===!0){const et=v.xr.getDepthSensingMesh();et!==null&&Vs(et,U,-1/0,v.sortObjects)}Vs(S,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,ct),Dt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Dt&&at.addToRenderList(_,S),this.info.render.frame++,Z===!0&&wt.beginShadows();const F=p.state.shadowsArray;$.render(F,S,U),Z===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const D=_.opaque,A=_.transmissive;if(p.setupLights(),U.isArrayCamera){const et=U.cameras;if(A.length>0)for(let rt=0,ht=et.length;rt<ht;rt++){const ft=et[rt];Ia(D,A,S,ft)}Dt&&at.render(S);for(let rt=0,ht=et.length;rt<ht;rt++){const ft=et[rt];ya(_,S,ft,ft.viewport)}}else A.length>0&&Ia(D,A,S,U),Dt&&at.render(S),ya(_,S,U);C!==null&&(Ct.updateMultisampleRenderTarget(C),Ct.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(v,S,U),Pt.resetDefaultState(),G=-1,M=null,I.pop(),I.length>0?(p=I[I.length-1],Z===!0&&wt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Vs(S,U,F,D){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Kt.intersectsSprite(S)){D&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ut);const rt=Q.update(S),ht=S.material;ht.visible&&_.push(S,rt,ht,F,Lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Kt.intersectsObject(S))){const rt=Q.update(S),ht=S.material;if(D&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Lt.copy(rt.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(ut)),Array.isArray(ht)){const ft=rt.groups;for(let vt=0,Mt=ft.length;vt<Mt;vt++){const _t=ft[vt],Zt=ht[_t.materialIndex];Zt&&Zt.visible&&_.push(S,rt,Zt,F,Lt.z,_t)}}else ht.visible&&_.push(S,rt,ht,F,Lt.z,null)}}const et=S.children;for(let rt=0,ht=et.length;rt<ht;rt++)Vs(et[rt],U,F,D)}function ya(S,U,F,D){const A=S.opaque,et=S.transmissive,rt=S.transparent;p.setupLightsView(F),Z===!0&&wt.setGlobalState(v.clippingPlanes,F),D&&xt.viewport(b.copy(D)),A.length>0&&Vi(A,U,F),et.length>0&&Vi(et,U,F),rt.length>0&&Vi(rt,U,F),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ia(S,U,F,D){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[D.id]===void 0&&(p.state.transmissionRenderTarget[D.id]=new On(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Ai:on,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const et=p.state.transmissionRenderTarget[D.id],rt=D.viewport||b;et.setSize(rt.z,rt.w);const ht=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(N),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),Dt?at.render(F):v.clear();const ft=v.toneMapping;v.toneMapping=_n;const vt=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),p.setupLightsView(D),Z===!0&&wt.setGlobalState(v.clippingPlanes,D),Vi(S,F,D),Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let _t=0,Zt=U.length;_t<Zt;_t++){const te=U[_t],ee=te.object,Ie=te.geometry,zt=te.material,gt=te.group;if(zt.side===sn&&ee.layers.test(D.layers)){const pe=zt.side;zt.side=Me,zt.needsUpdate=!0,Ta(ee,F,D,Ie,zt,gt),zt.side=pe,zt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et))}v.setRenderTarget(ht),v.setClearColor(N,z),vt!==void 0&&(D.viewport=vt),v.toneMapping=ft}function Vi(S,U,F){const D=U.isScene===!0?U.overrideMaterial:null;for(let A=0,et=S.length;A<et;A++){const rt=S[A],ht=rt.object,ft=rt.geometry,vt=D===null?rt.material:D,Mt=rt.group;ht.layers.test(F.layers)&&Ta(ht,U,F,ft,vt,Mt)}}function Ta(S,U,F,D,A,et){S.onBeforeRender(v,U,F,D,A,et),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),A.transparent===!0&&A.side===sn&&A.forceSinglePass===!1?(A.side=Me,A.needsUpdate=!0,v.renderBufferDirect(F,U,D,A,S,et),A.side=bn,A.needsUpdate=!0,v.renderBufferDirect(F,U,D,A,S,et),A.side=sn):v.renderBufferDirect(F,U,D,A,S,et),S.onAfterRender(v,U,F,D,A,et)}function Gi(S,U,F){U.isScene!==!0&&(U=At);const D=Tt.get(S),A=p.state.lights,et=p.state.shadowsArray,rt=A.state.version,ht=K.getParameters(S,A.state,et,U,F),ft=K.getProgramCacheKey(ht);let vt=D.programs;D.environment=S.isMeshStandardMaterial?U.environment:null,D.fog=U.fog,D.envMap=(S.isMeshStandardMaterial?x:y).get(S.envMap||D.environment),D.envMapRotation=D.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,vt===void 0&&(S.addEventListener("dispose",bt),vt=new Map,D.programs=vt);let Mt=vt.get(ft);if(Mt!==void 0){if(D.currentProgram===Mt&&D.lightsStateVersion===rt)return La(S,ht),Mt}else ht.uniforms=K.getUniforms(S),S.onBeforeCompile(ht,v),Mt=K.acquireProgram(ht,ft),vt.set(ft,Mt),D.uniforms=ht.uniforms;const _t=D.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(_t.clippingPlanes=wt.uniform),La(S,ht),D.needsLights=Xl(S),D.lightsStateVersion=rt,D.needsLights&&(_t.ambientLightColor.value=A.state.ambient,_t.lightProbe.value=A.state.probe,_t.directionalLights.value=A.state.directional,_t.directionalLightShadows.value=A.state.directionalShadow,_t.spotLights.value=A.state.spot,_t.spotLightShadows.value=A.state.spotShadow,_t.rectAreaLights.value=A.state.rectArea,_t.ltc_1.value=A.state.rectAreaLTC1,_t.ltc_2.value=A.state.rectAreaLTC2,_t.pointLights.value=A.state.point,_t.pointLightShadows.value=A.state.pointShadow,_t.hemisphereLights.value=A.state.hemi,_t.directionalShadowMap.value=A.state.directionalShadowMap,_t.directionalShadowMatrix.value=A.state.directionalShadowMatrix,_t.spotShadowMap.value=A.state.spotShadowMap,_t.spotLightMatrix.value=A.state.spotLightMatrix,_t.spotLightMap.value=A.state.spotLightMap,_t.pointShadowMap.value=A.state.pointShadowMap,_t.pointShadowMatrix.value=A.state.pointShadowMatrix),D.currentProgram=Mt,D.uniformsList=null,Mt}function Ea(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=hs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function La(S,U){const F=Tt.get(S);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function Zl(S,U,F,D,A){U.isScene!==!0&&(U=At),Ct.resetTextureUnits();const et=U.fog,rt=D.isMeshStandardMaterial?U.environment:null,ht=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Mn,ft=(D.isMeshStandardMaterial?x:y).get(D.envMap||rt),vt=D.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Mt=!!F.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),_t=!!F.morphAttributes.position,Zt=!!F.morphAttributes.normal,te=!!F.morphAttributes.color;let ee=_n;D.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ee=v.toneMapping);const Ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,zt=Ie!==void 0?Ie.length:0,gt=Tt.get(D),pe=p.state.lights;if(Z===!0&&(q===!0||S!==M)){const we=S===M&&D.id===G;wt.setState(D,S,we)}let Xt=!1;D.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==pe.state.version||gt.outputColorSpace!==ht||A.isBatchedMesh&&gt.batching===!1||!A.isBatchedMesh&&gt.batching===!0||A.isBatchedMesh&&gt.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&gt.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&gt.instancing===!1||!A.isInstancedMesh&&gt.instancing===!0||A.isSkinnedMesh&&gt.skinning===!1||!A.isSkinnedMesh&&gt.skinning===!0||A.isInstancedMesh&&gt.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&gt.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&gt.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&gt.instancingMorph===!1&&A.morphTexture!==null||gt.envMap!==ft||D.fog===!0&&gt.fog!==et||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==wt.numPlanes||gt.numIntersection!==wt.numIntersection)||gt.vertexAlphas!==vt||gt.vertexTangents!==Mt||gt.morphTargets!==_t||gt.morphNormals!==Zt||gt.morphColors!==te||gt.toneMapping!==ee||gt.morphTargetsCount!==zt)&&(Xt=!0):(Xt=!0,gt.__version=D.version);let Fe=gt.currentProgram;Xt===!0&&(Fe=Gi(D,U,A));let zn=!1,Te=!1,Gs=!1;const oe=Fe.getUniforms(),ln=gt.uniforms;if(xt.useProgram(Fe.program)&&(zn=!0,Te=!0,Gs=!0),D.id!==G&&(G=D.id,Te=!0),zn||M!==S){oe.setValue(E,"projectionMatrix",S.projectionMatrix),oe.setValue(E,"viewMatrix",S.matrixWorldInverse);const we=oe.map.cameraPosition;we!==void 0&&we.setValue(E,ot.setFromMatrixPosition(S.matrixWorld)),Yt.logarithmicDepthBuffer&&oe.setValue(E,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&oe.setValue(E,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Te=!0,Gs=!0)}if(A.isSkinnedMesh){oe.setOptional(E,A,"bindMatrix"),oe.setOptional(E,A,"bindMatrixInverse");const we=A.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),oe.setValue(E,"boneTexture",we.boneTexture,Ct))}A.isBatchedMesh&&(oe.setOptional(E,A,"batchingTexture"),oe.setValue(E,"batchingTexture",A._matricesTexture,Ct),oe.setOptional(E,A,"batchingIdTexture"),oe.setValue(E,"batchingIdTexture",A._indirectTexture,Ct),oe.setOptional(E,A,"batchingColorTexture"),A._colorsTexture!==null&&oe.setValue(E,"batchingColorTexture",A._colorsTexture,Ct));const Ns=F.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&Gt.update(A,F,Fe),(Te||gt.receiveShadow!==A.receiveShadow)&&(gt.receiveShadow=A.receiveShadow,oe.setValue(E,"receiveShadow",A.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(ln.envMap.value=ft,ln.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),D.isMeshStandardMaterial&&D.envMap===null&&U.environment!==null&&(ln.envMapIntensity.value=U.environmentIntensity),Te&&(oe.setValue(E,"toneMappingExposure",v.toneMappingExposure),gt.needsLights&&zl(ln,Gs),et&&D.fog===!0&&St.refreshFogUniforms(ln,et),St.refreshMaterialUniforms(ln,D,j,O,p.state.transmissionRenderTarget[S.id]),hs.upload(E,Ea(gt),ln,Ct)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(hs.upload(E,Ea(gt),ln,Ct),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&oe.setValue(E,"center",A.center),oe.setValue(E,"modelViewMatrix",A.modelViewMatrix),oe.setValue(E,"normalMatrix",A.normalMatrix),oe.setValue(E,"modelMatrix",A.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const we=D.uniformsGroups;for(let Bs=0,kl=we.length;Bs<kl;Bs++){const Ca=we[Bs];qt.update(Ca,Fe),qt.bind(Ca,Fe)}}return Fe}function zl(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Xl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,U,F){Tt.get(S.texture).__webglTexture=U,Tt.get(S.depthTexture).__webglTexture=F;const D=Tt.get(S);D.__hasExternalTextures=!0,D.__autoAllocateDepthBuffer=F===void 0,D.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const F=Tt.get(S);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,F=0){C=S,B=U,L=F;let D=!0,A=null,et=!1,rt=!1;if(S){const ft=Tt.get(S);ft.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(E.FRAMEBUFFER,null),D=!1):ft.__webglFramebuffer===void 0?Ct.setupRenderTarget(S):ft.__hasExternalTextures&&Ct.rebindTextures(S,Tt.get(S.texture).__webglTexture,Tt.get(S.depthTexture).__webglTexture);const vt=S.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(rt=!0);const Mt=Tt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Mt[U])?A=Mt[U][F]:A=Mt[U],et=!0):S.samples>0&&Ct.useMultisampledRTT(S)===!1?A=Tt.get(S).__webglMultisampledFramebuffer:Array.isArray(Mt)?A=Mt[F]:A=Mt,b.copy(S.viewport),R.copy(S.scissor),X=S.scissorTest}else b.copy(pt).multiplyScalar(j).floor(),R.copy(mt).multiplyScalar(j).floor(),X=Vt;if(xt.bindFramebuffer(E.FRAMEBUFFER,A)&&D&&xt.drawBuffers(S,A),xt.viewport(b),xt.scissor(R),xt.setScissorTest(X),et){const ft=Tt.get(S.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,F)}else if(rt){const ft=Tt.get(S.texture),vt=U||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,ft.__webglTexture,F||0,vt)}G=-1},this.readRenderTargetPixels=function(S,U,F,D,A,et,rt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&rt!==void 0&&(ht=ht[rt]),ht){xt.bindFramebuffer(E.FRAMEBUFFER,ht);try{const ft=S.texture,vt=ft.format,Mt=ft.type;if(!Yt.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-D&&F>=0&&F<=S.height-A&&E.readPixels(U,F,D,A,Et.convert(vt),Et.convert(Mt),et)}finally{const ft=C!==null?Tt.get(C).__webglFramebuffer:null;xt.bindFramebuffer(E.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(S,U,F,D,A,et,rt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&rt!==void 0&&(ht=ht[rt]),ht){xt.bindFramebuffer(E.FRAMEBUFFER,ht);try{const ft=S.texture,vt=ft.format,Mt=ft.type;if(!Yt.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-D&&F>=0&&F<=S.height-A){const _t=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,_t),E.bufferData(E.PIXEL_PACK_BUFFER,et.byteLength,E.STREAM_READ),E.readPixels(U,F,D,A,Et.convert(vt),Et.convert(Mt),0),E.flush();const Zt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);await ad(E,Zt,4);try{E.bindBuffer(E.PIXEL_PACK_BUFFER,_t),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,et)}finally{E.deleteBuffer(_t),E.deleteSync(Zt)}return et}}finally{const ft=C!==null?Tt.get(C).__webglFramebuffer:null;xt.bindFramebuffer(E.FRAMEBUFFER,ft)}}},this.copyFramebufferToTexture=function(S,U=null,F=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const D=Math.pow(2,-F),A=Math.floor(S.image.width*D),et=Math.floor(S.image.height*D),rt=U!==null?U.x:0,ht=U!==null?U.y:0;Ct.setTexture2D(S,0),E.copyTexSubImage2D(E.TEXTURE_2D,F,0,0,rt,ht,A,et),xt.unbindTexture()},this.copyTextureToTexture=function(S,U,F=null,D=null,A=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1],U=arguments[2],A=arguments[3]||0,F=null);let et,rt,ht,ft,vt,Mt;F!==null?(et=F.max.x-F.min.x,rt=F.max.y-F.min.y,ht=F.min.x,ft=F.min.y):(et=S.image.width,rt=S.image.height,ht=0,ft=0),D!==null?(vt=D.x,Mt=D.y):(vt=0,Mt=0);const _t=Et.convert(U.format),Zt=Et.convert(U.type);Ct.setTexture2D(U,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,U.unpackAlignment);const te=E.getParameter(E.UNPACK_ROW_LENGTH),ee=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Ie=E.getParameter(E.UNPACK_SKIP_PIXELS),zt=E.getParameter(E.UNPACK_SKIP_ROWS),gt=E.getParameter(E.UNPACK_SKIP_IMAGES),pe=S.isCompressedTexture?S.mipmaps[A]:S.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,pe.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,pe.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ht),E.pixelStorei(E.UNPACK_SKIP_ROWS,ft),S.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,A,vt,Mt,et,rt,_t,Zt,pe.data):S.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,A,vt,Mt,pe.width,pe.height,_t,pe.data):E.texSubImage2D(E.TEXTURE_2D,A,vt,Mt,et,rt,_t,Zt,pe),E.pixelStorei(E.UNPACK_ROW_LENGTH,te),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ee),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ie),E.pixelStorei(E.UNPACK_SKIP_ROWS,zt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,gt),A===0&&U.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,F=null,D=null,A=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,D=arguments[1]||null,S=arguments[2],U=arguments[3],A=arguments[4]||0);let et,rt,ht,ft,vt,Mt,_t,Zt,te;const ee=S.isCompressedTexture?S.mipmaps[A]:S.image;F!==null?(et=F.max.x-F.min.x,rt=F.max.y-F.min.y,ht=F.max.z-F.min.z,ft=F.min.x,vt=F.min.y,Mt=F.min.z):(et=ee.width,rt=ee.height,ht=ee.depth,ft=0,vt=0,Mt=0),D!==null?(_t=D.x,Zt=D.y,te=D.z):(_t=0,Zt=0,te=0);const Ie=Et.convert(U.format),zt=Et.convert(U.type);let gt;if(U.isData3DTexture)Ct.setTexture3D(U,0),gt=E.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ct.setTexture2DArray(U,0),gt=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,U.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,U.unpackAlignment);const pe=E.getParameter(E.UNPACK_ROW_LENGTH),Xt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Fe=E.getParameter(E.UNPACK_SKIP_PIXELS),zn=E.getParameter(E.UNPACK_SKIP_ROWS),Te=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,ee.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ee.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ft),E.pixelStorei(E.UNPACK_SKIP_ROWS,vt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Mt),S.isDataTexture||S.isData3DTexture?E.texSubImage3D(gt,A,_t,Zt,te,et,rt,ht,Ie,zt,ee.data):U.isCompressedArrayTexture?E.compressedTexSubImage3D(gt,A,_t,Zt,te,et,rt,ht,Ie,ee.data):E.texSubImage3D(gt,A,_t,Zt,te,et,rt,ht,Ie,zt,ee),E.pixelStorei(E.UNPACK_ROW_LENGTH,pe),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Xt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Fe),E.pixelStorei(E.UNPACK_SKIP_ROWS,zn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Te),A===0&&U.generateMipmaps&&E.generateMipmap(gt),xt.unbindTexture()},this.initRenderTarget=function(S){Tt.get(S).__webglFramebuffer===void 0&&Ct.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ct.setTextureCube(S,0):S.isData3DTexture?Ct.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ct.setTexture2DArray(S,0):Ct.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){B=0,L=0,C=null,xt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ma?"display-p3":"srgb",e.unpackColorSpace=Ht.workingColorSpace===Us?"display-p3":"srgb"}}class xm extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sm extends Di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wl extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const mr=new ie,Fo=new P,Do=new P;class _m{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fo),Do.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Do),e.updateMatrixWorld(),mr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bm extends _m{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vo extends wl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new bm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vm extends wl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);const Mm={U:16119285,R:13836311,F:42826,D:16766464,L:16747520,B:22488},ym=986899,Im=[[4,[0,1,0]],[13,[1,0,0]],[22,[0,0,1]],[31,[0,-1,0]],[40,[-1,0,0]],[49,[0,0,-1]]];function Tm(i){return i[0]===1?0:i[0]===-1?1:i[1]===1?2:i[1]===-1?3:i[2]===1?4:5}class Em{scene=new xm;camera;renderer;cubies=[];cubeRoot=new ui;pivot=new ui;state=ps;animating=!1;constructor(t){this.camera=new Ue(32,1,.1,100),this.camera.position.set(5.2,4.6,6.2),this.camera.lookAt(0,0,0),this.renderer=new gm({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(this.renderer.domElement),this.scene.add(new vm(16777215,1.1));const e=new Vo(16777215,1.2);e.position.set(6,10,7),this.scene.add(e);const n=new Vo(16777215,.5);n.position.set(-6,-4,-7),this.scene.add(n),this.scene.add(this.cubeRoot),this.cubeRoot.add(this.pivot),this.buildCubies(),this.paint(),this.setupPointerRotation();const s=()=>{const a=t.clientWidth,o=t.clientHeight;this.camera.aspect=a/o,this.camera.updateProjectionMatrix(),this.renderer.setSize(a,o)};new ResizeObserver(s).observe(t),s();const r=()=>{requestAnimationFrame(r),this.hintTick(performance.now()),this.renderer.render(this.scene,this.camera)};r()}mainAxisLocal=new P(0,1,0);axisLock=!1;handViewQuat=null;computeMainAxisFromState(){const t=Im.find(([e])=>this.state[e]==="U");t&&this.mainAxisLocal.set(...t[1])}updateMainAxisFromState(){this.axisLock||this.computeMainAxisFromState()}setAxisLock(t){this.axisLock=t,t||this.computeMainAxisFromState()}beginAssistView(t){this.computeMainAxisFromState(),this.axisLock=!0,this.handViewQuat=t?new Ce().setFromAxisAngle(new P(0,0,1),Math.PI):new Ce,this.resetView(!0)}endAssistView(){this.handViewQuat=null}driftAxisAngle(t){const e=mn[t.base];if(!e)return null;const n=new P(e.axis===0?1:0,e.axis===1?1:0,e.axis===2?1:0),s=t.amount===3?-1:t.amount;return{axis:n,angle:e.dir*s*(Math.PI/2)}}finishDrift(t,e){this.mainAxisLocal.applyAxisAngle(t,-e).round(),this.handViewQuat?.multiply(new Ce().setFromAxisAngle(t,e))}playHandDrift(t,e=220){const n=this.driftAxisAngle(t);if(!n)return Promise.resolve();const{axis:s,angle:r}=n;if(e<=0)return this.cubeRoot.quaternion.multiply(new Ce().setFromAxisAngle(s,r)),this.finishDrift(s,r),Promise.resolve();const a=this.cubeRoot.quaternion.clone(),o=new Ce,l=performance.now();return new Promise(c=>{const d=h=>{const f=Math.min(1,(h-l)/e),m=1-Math.pow(1-f,3);o.setFromAxisAngle(s,r*m),this.cubeRoot.quaternion.copy(a).multiply(o),f<1?requestAnimationFrame(d):(this.finishDrift(s,r),c())};requestAnimationFrame(d)})}playHandTurn(t,e,n=220){if(this.animating)return Promise.reject(new Error("busy"));const s=this.driftAxisAngle(e);if(!s)return Promise.reject(new Error(`unknown drift ${e.base}`));const{axis:r,angle:a}=s,o=mn[e.base];for(const g of t)if(mn[g.base]?.axis!==o.axis)return(async()=>{for(const _ of t)await this.playMove(_,n);await this.playHandDrift(e,n)})();this.releaseHint(),this.animating=!0;const l=new Set(t.map(g=>mn[g.base].layers[0])),c=[-1,0,1].filter(g=>!l.has(g)),d=g=>[g.x,g.y,g.z][o.axis],h=this.cubies.filter(g=>c.includes(Math.round(d(g.home))));this.pivot.rotation.set(0,0,0);for(const g of h)this.pivot.attach(g.mesh);const f=Math.max(60,n*(e.amount===2?1.4:1)),m=performance.now();return new Promise(g=>{const _=p=>{const u=Math.min(1,(p-m)/f),I=1-Math.pow(1-u,3);if(this.pivot.setRotationFromAxisAngle(r,a*I),u<1)requestAnimationFrame(_);else{for(const v of h)this.cubeRoot.attach(v.mesh),v.mesh.position.copy(v.home),v.mesh.rotation.set(0,0,0);this.pivot.rotation.set(0,0,0),this.state=br(this.state,xs(t)),this.paint(),this.cubeRoot.quaternion.multiply(new Ce().setFromAxisAngle(r,a)),this.finishDrift(r,a),this.animating=!1,g()}};requestAnimationFrame(_)})}resetView(t=!1){const e=this.cubeRoot.quaternion.clone(),n=t&&this.handViewQuat?this.handViewQuat.clone():new Ce,s=performance.now(),r=350,a=o=>{const l=Math.min(1,(o-s)/r),c=1-Math.pow(1-l,3);this.cubeRoot.quaternion.slerpQuaternions(e,n,c),l<1&&requestAnimationFrame(a)};requestAnimationFrame(a)}setupPointerRotation(){const t=this.renderer.domElement;t.style.cursor="grab";const e=.0075;let n=!1,s=0,r=0;const a=new P(1,0,0).applyQuaternion(this.camera.quaternion),o=new Ce,l=new P(0,1,0),c=()=>{const h=this.mainAxisLocal.clone().applyQuaternion(this.cubeRoot.quaternion);return h.dot(l)<0&&h.negate(),h.normalize()};t.addEventListener("pointerdown",h=>{n=!0,s=h.clientX,r=h.clientY,t.setPointerCapture(h.pointerId),t.style.cursor="grabbing"}),t.addEventListener("pointermove",h=>{if(!n)return;const f=h.clientX-s,m=h.clientY-r;s=h.clientX,r=h.clientY,f!==0&&(o.setFromAxisAngle(c(),f*e),this.cubeRoot.quaternion.premultiply(o)),m!==0&&(o.setFromAxisAngle(a,m*e),this.cubeRoot.quaternion.premultiply(o))});const d=h=>{n=!1,t.hasPointerCapture(h.pointerId)&&t.releasePointerCapture(h.pointerId),t.style.cursor="grab"};t.addEventListener("pointerup",d),t.addEventListener("pointercancel",d),t.addEventListener("wheel",h=>{h.preventDefault();const f=this.camera.position.length(),m=Math.min(16,Math.max(5,f*(h.deltaY>0?1.08:.93)));this.camera.position.setLength(m)},{passive:!1})}buildCubies(){const t=new yi(.96,.96,.96);for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){if(e===0&&n===0&&s===0)continue;const r=Array.from({length:6},()=>new Sm({color:ym})),a=new He(t,r);a.position.set(e,n,s);const o={mesh:a,home:new P(e,n,s),stickers:[]};for(let l=0;l<54;l++){const c=Cs[l];c[0]===e&&c[1]===n&&c[2]===s&&o.stickers.push({facelet:l,material:Tm(ws[l])})}this.cubies.push(o),this.cubeRoot.add(a)}}paint(){for(const t of this.cubies)for(const e of t.stickers)t.mesh.material[e.material].color.setHex(Mm[this.state[e.facelet]])}setState(t){this.releaseHint(),this.state=t,this.paint(),this.updateMainAxisFromState()}get busy(){return this.animating}hintToken=null;hintCubies=[];hintStart=0;setHint(t){const e=t?Ae(t)[0]:null;this.hintToken&&e&&this.hintToken.base===e.base&&this.hintToken.amount===e.amount||(this.releaseHint(),this.hintToken=e,this.hintStart=performance.now())}releaseHint(){if(this.hintCubies.length){for(const t of this.hintCubies)this.cubeRoot.attach(t.mesh),t.mesh.position.copy(t.home),t.mesh.rotation.set(0,0,0);this.hintCubies=[]}this.pivot.rotation.set(0,0,0)}hintTick(t){if(!this.hintToken||this.animating)return;const e=mn[this.hintToken.base];if(!e)return;if(this.hintCubies.length===0){const f=m=>[m.x,m.y,m.z][e.axis];this.hintCubies=this.cubies.filter(m=>e.layers.includes(Math.round(f(m.home)))),this.pivot.rotation.set(0,0,0);for(const m of this.hintCubies)this.pivot.attach(m.mesh);this.hintStart=t}const n=450,s=250,a=(t-this.hintStart)%(n+s+250),o=f=>f*f*(3-2*f);let l;a<n?l=o(a/n):a<n+s?l=1:l=0;const c=new P(e.axis===0?1:0,e.axis===1?1:0,e.axis===2?1:0),d=this.hintToken.amount===3?-1:this.hintToken.amount,h=e.dir*d*(Math.PI/2)*l;this.pivot.setRotationFromAxisAngle(c,h)}playMove(t,e=250){if(this.animating)return Promise.reject(new Error("busy"));const n=mn[t.base];if(!n)return Promise.reject(new Error(`unknown move ${t.base}`));this.releaseHint(),this.animating=!0;const s=new P(n.axis===0?1:0,n.axis===1?1:0,n.axis===2?1:0),r=t.amount===3?-1:t.amount,a=n.dir*r*(Math.PI/2),o=h=>[h.x,h.y,h.z][n.axis],l=this.cubies.filter(h=>n.layers.includes(Math.round(o(h.home))));this.pivot.rotation.set(0,0,0);for(const h of l)this.pivot.attach(h.mesh);const c=Math.max(60,e*(t.amount===2?1.4:1)),d=performance.now();return new Promise(h=>{const f=m=>{const g=Math.min(1,(m-d)/c),_=1-Math.pow(1-g,3);if(this.pivot.setRotationFromAxisAngle(s,a*_),g<1)requestAnimationFrame(f);else{for(const p of l)this.cubeRoot.attach(p.mesh),p.mesh.position.copy(p.home),p.mesh.rotation.set(0,0,0);this.pivot.rotation.set(0,0,0),this.state=br(this.state,xs([t])),this.paint(),"xyz".includes(t.base)&&this.updateMainAxisFromState(),this.animating=!1,h()}};requestAnimationFrame(f)})}}const Lm={ja:{subtitle:"ルービックキューブ・ソルバー",scramble:"スクランブル",generate:"WCAスクランブル生成",apply:"適用",reset:"リセット",solve:"解法を生成",solving:"計算中…",method_cfop:"CFOP",method_roux:"Roux",method_optimal:"最短 (two-phase)",editor:"展開図エディタ",editor_hint:"色を選んでステッカーをクリック (センターは固定)",load3d:"3Dから読込",apply3d:"キューブへ反映",solution:"解法",moves_count:"手",playback_speed:"速度",autoplay:"自動再生",reset_view:"視点リセット",ready:"準備完了",initializing:"ソルバー初期化中…",phase_orient:"持ち替え (白面を下、緑面を正面へ)",phase_cross:"Cross (白面)",phase_f2l:"F2L",phase_oll:"OLL (黄色面)",phase_pll:"PLL (黄色面)",phase_fb:"FB (第1ブロック)",phase_fb_edge:"FB 1 — DLエッジ",phase_fb_pair1:"FB 2 — 1組目のペア",phase_fb_pair2:"FB 3 — 2組目のペア",phase_sb:"SB (第2ブロック)",phase_sb_edge:"SB 1 — DRエッジ",phase_sb_pair1:"SB 2 — 1組目のペア",phase_sb_pair2:"SB 3 — 2組目のペア",phase_cmll:"CMLL",phase_lse:"LSE",phase_lse_eo:"LSE 4a — EO (エッジの向き)",phase_lse_lr:"LSE 4b — UL/UR エッジ",phase_lse_ep:"LSE 4c — 仕上げ (M2/U2)",phase_twophase:"two-phase",err_WRONG_LENGTH:"54文字ではありません",err_INVALID_CHARS:"不正な文字が含まれています",err_WRONG_CENTERS:"センターの配置が不正です",err_COLOR_COUNT:"各色ちょうど9枚である必要があります",err_INVALID_PIECES:"存在しないピースがあります (色の組合せが不正)",err_TWIST:"コーナーのねじれが不正です (組み立てミス状態)",err_FLIP:"エッジの反転が不正です (組み立てミス状態)",err_PARITY:"パリティが不正です (2点交換状態)",err_INVALID_STATE:"不正な状態です",err_SOLVER:"ソルバーでエラーが発生しました",scramble_invalid:"スクランブル記法が不正です",smartcube:"スマートキューブ (GAN356i)",gan_connect:"接続",gan_disconnect:"切断",gan_connecting:"接続中…",gan_connected:"接続済み: ",gan_mac_hint:"MACアドレスは自動取得できない場合のみ入力 (保存されます)",gan_sync:"状態を再読込",gan_reset:"実機を完成状態として登録",gan_reset_confirm:"実機を6面完成させた状態でOKを押してください。実機の内部状態を完成としてリセットします。",gan_no_bt:"このブラウザは Web Bluetooth 非対応です (PC版 Chrome / Edge を使用してください)",gan_smart_hint:"実機接続中: 3D表示は実機に追従します。「解法を生成」後、実機で回すと進行します",gan_assist_progress:"アシスト進行中",gan_next:"次の手",gan_deviated:"⚠ 手順から外れました",gan_recover:"戻し手順",gan_recovered:"↩ 手順に復帰しました",gan_regrip:"🖐 まず持ち替え: 白面を下、緑面を正面にしてください",gan_regrip_up:"🖐 白面を上、緑面を正面にして持ってください",gan_done:"🎉 6面完成!",gan_scramble_hint:"実機でスクランブルを回してください (3Dは実機に追従します)",gan_connect_failed:"接続に失敗しました",gan_disabled_while_connected:"実機接続中は使用できません",gan_mac_prompt:"のMACアドレスを入力してください (例: AB:12:34:56:78:9A)"},en:{subtitle:"Rubik's Cube Solver",scramble:"Scramble",generate:"Generate WCA scramble",apply:"Apply",reset:"Reset",solve:"Solve",solving:"Solving…",method_cfop:"CFOP",method_roux:"Roux",method_optimal:"Shortest (two-phase)",editor:"Net editor",editor_hint:"Pick a color and click stickers (centers are fixed)",load3d:"Load from 3D",apply3d:"Apply to cube",solution:"Solution",moves_count:"moves",playback_speed:"Speed",autoplay:"Auto play",reset_view:"Reset view",ready:"Ready",initializing:"Initializing solver…",phase_orient:"Regrip (white down, green front)",phase_cross:"Cross (white)",phase_f2l:"F2L",phase_oll:"OLL (yellow)",phase_pll:"PLL (yellow)",phase_fb:"FB (first block)",phase_fb_edge:"FB 1 — DL edge",phase_fb_pair1:"FB 2 — first pair",phase_fb_pair2:"FB 3 — second pair",phase_sb:"SB (second block)",phase_sb_edge:"SB 1 — DR edge",phase_sb_pair1:"SB 2 — first pair",phase_sb_pair2:"SB 3 — second pair",phase_cmll:"CMLL",phase_lse:"LSE",phase_lse_eo:"LSE 4a — edge orientation",phase_lse_lr:"LSE 4b — UL/UR edges",phase_lse_ep:"LSE 4c — finish (M2/U2)",phase_twophase:"two-phase",err_WRONG_LENGTH:"State must be 54 characters",err_INVALID_CHARS:"Invalid characters",err_WRONG_CENTERS:"Invalid center arrangement",err_COLOR_COUNT:"Each color must appear exactly 9 times",err_INVALID_PIECES:"Impossible piece (invalid color combination)",err_TWIST:"Corner twist parity error (reassembled cube)",err_FLIP:"Edge flip parity error (reassembled cube)",err_PARITY:"Permutation parity error (two pieces swapped)",err_INVALID_STATE:"Invalid state",err_SOLVER:"Solver error",scramble_invalid:"Invalid scramble notation",smartcube:"Smart cube (GAN356i)",gan_connect:"Connect",gan_disconnect:"Disconnect",gan_connecting:"Connecting…",gan_connected:"Connected: ",gan_mac_hint:"Enter MAC address only if auto-detection fails (saved locally)",gan_sync:"Reload state",gan_reset:"Mark cube as solved",gan_reset_confirm:"Make sure the physical cube is solved, then press OK. This resets the internal state of the cube.",gan_no_bt:"Web Bluetooth is not supported in this browser (use desktop Chrome / Edge)",gan_smart_hint:'Connected: the 3D view follows the physical cube. Press "Solve", then turn the cube to advance.',gan_assist_progress:"Assist in progress",gan_next:"Next move",gan_deviated:"⚠ Off sequence",gan_recover:"Undo with",gan_recovered:"↩ Back on track",gan_regrip:"🖐 Regrip first: white face down, green face front",gan_regrip_up:"🖐 Hold with white face up, green face front",gan_done:"🎉 Solved!",gan_scramble_hint:"Perform the scramble on the physical cube (3D follows it)",gan_connect_failed:"Connection failed",gan_disabled_while_connected:"Not available while the smart cube is connected",gan_mac_prompt:": enter its MAC address (e.g. AB:12:34:56:78:9A)"}};let _a=localStorage.getItem("cubesolver-lang")||"ja";function na(){return _a}function Cm(i){_a=i,localStorage.setItem("cubesolver-lang",i),document.dispatchEvent(new CustomEvent("langchange"))}function Ft(i){return Lm[_a][i]??i}const Go={U:"#f5f5f5",R:"#d32017",F:"#00a74a",D:"#ffd600",L:"#ff8c00",B:"#0057d8"},No=new Set(Object.values(aa));class wm{constructor(t,e,n,s){this.onApply=n,this.onLoad=s,this.state=e,t.innerHTML="";const r=document.createElement("div");r.className="net-palette";for(const f of gi){const m=document.createElement("button");m.className="net-swatch",m.style.background=Go[f],m.dataset.face=f,m.title=f,m.addEventListener("click",()=>{this.selected=f,r.querySelectorAll(".net-swatch").forEach(g=>g.classList.remove("selected")),m.classList.add("selected")}),f==="U"&&m.classList.add("selected"),r.appendChild(m)}t.appendChild(r);const a=document.createElement("div");a.className="net-grid";const o={U:[0,3],L:[3,0],F:[3,3],R:[3,6],B:[3,9],D:[6,3]};for(const f of gi){const[m,g]=o[f];for(let _=0;_<9;_++){const p="URFDLB".indexOf(f)*9+_,u=document.createElement("button");u.className="net-cell",u.style.gridRow=String(m+Math.floor(_/3)+1),u.style.gridColumn=String(g+_%3+1),No.has(p)&&u.classList.add("center"),u.addEventListener("click",()=>{No.has(p)||(this.state=this.state.slice(0,p)+this.selected+this.state.slice(p+1),this.paint())}),this.cells[p]=u,a.appendChild(u)}}t.appendChild(a);const l=document.createElement("p");l.className="net-hint",l.dataset.i18n="editor_hint",l.textContent=Ft("editor_hint"),t.appendChild(l);const c=document.createElement("div");c.className="net-actions";const d=document.createElement("button");d.className="btn",d.dataset.i18n="load3d",d.textContent=Ft("load3d"),d.addEventListener("click",()=>{this.state=this.onLoad(),this.paint()});const h=document.createElement("button");h.className="btn primary",h.dataset.i18n="apply3d",h.textContent=Ft("apply3d"),h.addEventListener("click",()=>this.onApply(this.state)),c.append(d,h),t.appendChild(c),this.paint()}cells=[];selected="U";state;setState(t){this.state=t,this.paint()}paint(){for(let t=0;t<54;t++)this.cells[t].style.background=Go[this.state[t]]}}class Rm{constructor(t,e,n,s){this.cube=t,this.listEl=e,this.controlsEl=n,this.speedInput=s,this.renderControls(),document.addEventListener("langchange",()=>{this.renderList(),this.updateUI()})}tokens=[];phaseOfMove=[];pointer=0;baseState="";playing=!1;solution=null;chips=[];externalMode=!1;get isActive(){return this.solution!==null}setSolution(t){this.stop(),this.solution=t,this.tokens=[],this.phaseOfMove=[],this.pointer=0,this.baseState=this.cube.state,t&&t.phases.forEach((e,n)=>{for(const s of e.moves)this.tokens.push(Ae(s)[0]),this.phaseOfMove.push(n)}),this.renderList(),this.updateUI()}reset(){this.setSolution(null)}setExternalMode(t){this.externalMode=t,this.stop(),this.updateUI()}setExternalPointer(t){this.pointer=Math.max(0,Math.min(t,this.tokens.length)),this.updateUI()}recoveryEl=null;setRecovery(t){if(!t||t.length===0){this.recoveryEl?.remove(),this.recoveryEl=null;return}this.recoveryEl||(this.recoveryEl=document.createElement("div"),this.recoveryEl.className="recovery-inline"),this.recoveryEl.innerHTML="";const e=document.createElement("span");e.className="recovery-label",e.textContent=`⚠ ${Ft("gan_recover")}:`,this.recoveryEl.appendChild(e);for(const s of t){const r=document.createElement("span");r.className="move-chip recovery-chip",r.textContent=s,this.recoveryEl.appendChild(r)}const n=this.chips[this.pointer];n?.parentElement?n.parentElement.insertBefore(this.recoveryEl,n):this.listEl.appendChild(this.recoveryEl)}duration(){return 600-Number(this.speedInput.value)*5}async stepForward(){if(this.cube.busy||this.pointer>=this.tokens.length)return!1;const t=this.tokens[this.pointer++];return await this.cube.playMove(t,this.duration()),this.updateUI(),!0}async stepBack(){if(this.cube.busy||this.pointer<=0)return;const t=this.tokens[--this.pointer];await this.cube.playMove(Ss([t])[0],this.duration()),this.updateUI()}jumpStart(){this.stop(),!this.cube.busy&&(this.pointer=0,this.cube.setState(this.baseState),this.updateUI())}async jumpEnd(){for(this.stop();this.pointer<this.tokens.length&&!this.cube.busy;){const t=this.tokens[this.pointer++];await this.cube.playMove(t,60)}this.updateUI()}async play(){if(this.playing){this.stop();return}for(this.playing=!0,this.updateUI();this.playing&&await this.stepForward();)await new Promise(e=>setTimeout(e,60));this.playing=!1,this.updateUI()}stop(){this.playing=!1}buttons={};renderControls(){this.controlsEl.innerHTML="";const t=(e,n,s)=>{const r=document.createElement("button");r.className="btn ctrl",r.textContent=e,r.addEventListener("click",n),this.buttons[s]=r,this.controlsEl.appendChild(r)};t("⏮",()=>this.jumpStart(),"start"),t("◀",()=>void this.stepBack(),"back"),t("▶",()=>void this.play(),"play"),t("▶▶",()=>void this.stepForward(),"fwd"),t("⏭",()=>void this.jumpEnd(),"end")}renderList(){if(this.listEl.innerHTML="",this.chips=[],this.recoveryEl=null,!this.solution)return;const t=document.createElement("div");t.className="solution-header",t.textContent=`${Ft("solution")}: ${this.solution.totalMoves} ${Ft("moves_count")}`,this.listEl.appendChild(t);let e=0;this.solution.phases.forEach(n=>{const s=document.createElement("div");s.className="phase";const r=document.createElement("div");r.className="phase-label",r.textContent=Ft(`phase_${n.name}`)+(n.detail?` — ${n.detail}`:"")+` (${n.moves.length})`,s.appendChild(r);const a=document.createElement("div");a.className="phase-moves";for(const o of n.moves){const l=document.createElement("button");l.className="move-chip",l.textContent=o;const c=e+1;l.addEventListener("click",()=>void this.jumpTo(c)),this.chips.push(l),a.appendChild(l),e++}s.appendChild(a),this.listEl.appendChild(s)})}async jumpTo(t){if(!this.externalMode){for(this.stop();this.pointer<t&&this.pointer<this.tokens.length;){if(this.cube.busy)return;await this.cube.playMove(this.tokens[this.pointer++],80)}for(;this.pointer>t&&this.pointer>0;){if(this.cube.busy)return;await this.cube.playMove(Ss([this.tokens[--this.pointer]])[0],80)}this.updateUI()}}updateUI(){this.chips.forEach((n,s)=>{n.classList.toggle("done",s<this.pointer),n.classList.toggle("current",s===this.pointer)}),this.chips[this.pointer]?.scrollIntoView({block:"nearest"}),this.buttons.play.textContent=this.playing?"⏸":"▶";const e=this.tokens.length>0&&!this.externalMode;for(const n of["start","back","play","fwd","end"])this.buttons[n].disabled=!e}}const Rl="Y29uc3QgZXQ9WyJVIiwiUiIsIkYiLCJEIiwiTCIsIkIiXSx5ZT0iVVVVVVVVVVVVUlJSUlJSUlJSRkZGRkZGRkZGRERERERERERETExMTExMTExMQkJCQkJCQkJCIixfdD17VTowLFI6OSxGOjE4LEQ6MjcsTDozNixCOjQ1fSxKdD17VTo0LFI6MTMsRjoyMixEOjMxLEw6NDAsQjo0OX07ZnVuY3Rpb24gYmUobil7Zm9yKGxldCBlPTA7ZTw2O2UrKyl7Y29uc3Qgbz1uW2UqOSs0XTtmb3IobGV0IHQ9MDt0PDk7dCsrKWlmKG5bZSo5K3RdIT09bylyZXR1cm4hMX1yZXR1cm4hMH1jb25zdCBibj1bWzgsOSwyMF0sWzYsMTgsMzhdLFswLDM2LDQ3XSxbMiw0NSwxMV0sWzI5LDI2LDE1XSxbMjcsNDQsMjRdLFszMyw1Myw0Ml0sWzM1LDE3LDUxXV0sTW49W1siVSIsIlIiLCJGIl0sWyJVIiwiRiIsIkwiXSxbIlUiLCJMIiwiQiJdLFsiVSIsIkIiLCJSIl0sWyJEIiwiRiIsIlIiXSxbIkQiLCJMIiwiRiJdLFsiRCIsIkIiLCJMIl0sWyJEIiwiUiIsIkIiXV0sa249W1s1LDEwXSxbNywxOV0sWzMsMzddLFsxLDQ2XSxbMzIsMTZdLFsyOCwyNV0sWzMwLDQzXSxbMzQsNTJdLFsyMywxMl0sWzIxLDQxXSxbNTAsMzldLFs0OCwxNF1dLENuPVtbIlUiLCJSIl0sWyJVIiwiRiJdLFsiVSIsIkwiXSxbIlUiLCJCIl0sWyJEIiwiUiJdLFsiRCIsIkYiXSxbIkQiLCJMIl0sWyJEIiwiQiJdLFsiRiIsIlIiXSxbIkYiLCJMIl0sWyJCIiwiTCJdLFsiQiIsIlIiXV0sQm49e1U6e25vcm1hbDpbMCwxLDBdLHBvczoobixlKT0+W2UtMSwxLG4tMV19LFI6e25vcm1hbDpbMSwwLDBdLHBvczoobixlKT0+WzEsMS1uLDEtZV19LEY6e25vcm1hbDpbMCwwLDFdLHBvczoobixlKT0+W2UtMSwxLW4sMV19LEQ6e25vcm1hbDpbMCwtMSwwXSxwb3M6KG4sZSk9PltlLTEsLTEsMS1uXX0sTDp7bm9ybWFsOlstMSwwLDBdLHBvczoobixlKT0+Wy0xLDEtbixlLTFdfSxCOntub3JtYWw6WzAsMCwtMV0scG9zOihuLGUpPT5bMS1lLDEtbiwtMV19fSx2dD1bXSxEdD1bXTtmb3IoY29uc3QgbiBvZiBldCl7Y29uc3QgZT1CbltuXTtmb3IobGV0IG89MDtvPDk7bysrKXZ0W190W25dK29dPWUucG9zKE1hdGguZmxvb3Ioby8zKSxvJTMpLER0W190W25dK29dPWUubm9ybWFsfWNvbnN0IFh0PShuLGUpPT5gJHtuWzBdfSwke25bMV19LCR7blsyXX18JHtlWzBdfSwke2VbMV19LCR7ZVsyXX1gLEd0PW5ldyBNYXA7Zm9yKGxldCBuPTA7bjw1NDtuKyspR3Quc2V0KFh0KHZ0W25dLER0W25dKSxuKTtmdW5jdGlvbiB4dChuLGUsbyl7Y29uc3RbdCxyLGxdPW47cmV0dXJuIGU9PT0wP289PT0xP1t0LC1sLHJdOlt0LGwsLXJdOmU9PT0xP289PT0xP1tsLHIsLXRdOlstbCxyLHRdOm89PT0xP1stcix0LGxdOltyLC10LGxdfWNvbnN0IFl0PXtSOntheGlzOjAsbGF5ZXJzOlsxXSxkaXI6LTF9LEw6e2F4aXM6MCxsYXllcnM6Wy0xXSxkaXI6MX0sTTp7YXhpczowLGxheWVyczpbMF0sZGlyOjF9LHI6e2F4aXM6MCxsYXllcnM6WzAsMV0sZGlyOi0xfSxsOntheGlzOjAsbGF5ZXJzOlstMSwwXSxkaXI6MX0seDp7YXhpczowLGxheWVyczpbLTEsMCwxXSxkaXI6LTF9LFU6e2F4aXM6MSxsYXllcnM6WzFdLGRpcjotMX0sRDp7YXhpczoxLGxheWVyczpbLTFdLGRpcjoxfSxFOntheGlzOjEsbGF5ZXJzOlswXSxkaXI6MX0sdTp7YXhpczoxLGxheWVyczpbMCwxXSxkaXI6LTF9LGQ6e2F4aXM6MSxsYXllcnM6Wy0xLDBdLGRpcjoxfSx5OntheGlzOjEsbGF5ZXJzOlstMSwwLDFdLGRpcjotMX0sRjp7YXhpczoyLGxheWVyczpbMV0sZGlyOi0xfSxCOntheGlzOjIsbGF5ZXJzOlstMV0sZGlyOjF9LFM6e2F4aXM6MixsYXllcnM6WzBdLGRpcjotMX0sZjp7YXhpczoyLGxheWVyczpbMCwxXSxkaXI6LTF9LGI6e2F4aXM6MixsYXllcnM6Wy0xLDBdLGRpcjoxfSx6OntheGlzOjIsbGF5ZXJzOlstMSwwLDFdLGRpcjotMX19LFd0PW5ldyBTZXQoWyJ4IiwieSIsInoiXSksVG49bmV3IFNldChbIk0iLCJFIiwiUyJdKSxBbj1uZXcgU2V0KFsiVSIsIkQiLCJMIiwiUiIsIkYiLCJCIl0pO2Z1bmN0aW9uIF9uKG4pe2NvbnN0IGU9bmV3IEludDhBcnJheSg1NCk7Zm9yKGxldCBvPTA7bzw1NDtvKyspe2NvbnN0IHQ9dnRbb107aWYobi5sYXllcnMuaW5jbHVkZXModFtuLmF4aXNdKSl7Y29uc3Qgcj14dCh0LG4uYXhpcyxuLmRpciksbD14dChEdFtvXSxuLmF4aXMsbi5kaXIpLHM9R3QuZ2V0KFh0KHIsbCkpO2lmKHM9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKCJnZW9tZXRyeSBidWciKTtlW3NdPW99ZWxzZSBlW29dPW99cmV0dXJuIGV9Y29uc3QgdHQ9bmV3IEludDhBcnJheSg1NCkubWFwKChuLGUpPT5lKTtmdW5jdGlvbiBKZShuLGUpe2NvbnN0IG89bmV3IEludDhBcnJheSg1NCk7Zm9yKGxldCB0PTA7dDw1NDt0Kyspb1t0XT1uW2VbdF1dO3JldHVybiBvfWZ1bmN0aW9uIHF0KG4pe2NvbnN0IGU9bmV3IEludDhBcnJheSg1NCk7Zm9yKGxldCBvPTA7bzw1NDtvKyspZVtuW29dXT1vO3JldHVybiBlfWZ1bmN0aW9uIFp0KG4sZSl7Zm9yKGxldCBvPTA7bzw1NDtvKyspaWYobltvXSE9PWVbb10pcmV0dXJuITE7cmV0dXJuITB9Y29uc3QgUXQ9bmV3IE1hcDtmb3IoY29uc3RbbixlXW9mIE9iamVjdC5lbnRyaWVzKFl0KSlRdC5zZXQobixfbihlKSk7Y29uc3QgeG49L14oW1VSRkRMQl0pdyhbMiddKikkfF4oW1VSRkRMQk1FU3h5enVkbHJmYl0pKFsyJ10qKSQvO2Z1bmN0aW9uIHBlKG4pe2NvbnN0IGU9W107Zm9yKGNvbnN0IG8gb2Ygbi50cmltKCkuc3BsaXQoL1tccygpW1xdXSsvKSl7aWYoIW8pY29udGludWU7Y29uc3QgdD14bi5leGVjKG8pO2lmKCF0KXRocm93IG5ldyBFcnJvcihgaW52YWxpZCBtb3ZlIHRva2VuOiAiJHtvfSJgKTtjb25zdCByPXRbMV0/dFsxXS50b0xvd2VyQ2FzZSgpOnRbM10sbD0odFsxXT90WzJdOnRbNF0pPz8iIjtsZXQgcz1sLmluY2x1ZGVzKCIyIik/MjoxO2wuaW5jbHVkZXMoIiciKSYmKHM9NC1zKSxlLnB1c2goe2Jhc2U6cixhbW91bnQ6c30pfXJldHVybiBlfWZ1bmN0aW9uIFN0KG4pe3JldHVybiBuLmJhc2UrKG4uYW1vdW50PT09Mj8iMiI6bi5hbW91bnQ9PT0zPyInIjoiIil9ZnVuY3Rpb24gZW4obil7cmV0dXJuIG4ubWFwKFN0KS5qb2luKCIgIil9Y29uc3QgUHQ9bmV3IE1hcDtmdW5jdGlvbiBFZShuKXtjb25zdCBlPW4uYmFzZStuLmFtb3VudDtsZXQgbz1QdC5nZXQoZSk7aWYoIW8pe2NvbnN0IHQ9UXQuZ2V0KG4uYmFzZSk7aWYoIXQpdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIG1vdmUgYmFzZTogJHtuLmJhc2V9YCk7bz10O2ZvcihsZXQgcj0xO3I8bi5hbW91bnQ7cisrKW89SmUobyx0KTtQdC5zZXQoZSxvKX1yZXR1cm4gb31mdW5jdGlvbiBsZShuKXtsZXQgZT10dDtmb3IoY29uc3QgbyBvZiBuKWU9SmUoZSxFZShvKSk7cmV0dXJuIGV9ZnVuY3Rpb24gUmUobixlKXtsZXQgbz0iIjtmb3IobGV0IHQ9MDt0PDU0O3QrKylvKz1uW2VbdF1dO3JldHVybiBvfWZ1bmN0aW9uIE90KG4sZSl7cmV0dXJuIFJlKG4sbGUoZSkpfWZ1bmN0aW9uIFBuKG4sZSl7cmV0dXJuIE90KG4scGUoZSkpfWZ1bmN0aW9uIHN0KG4pe3JldHVyblsuLi5uXS5yZXZlcnNlKCkubWFwKGU9Pih7YmFzZTplLmJhc2UsYW1vdW50OjQtZS5hbW91bnR9KSl9Y29uc3QgVXQ9e307Zm9yKGNvbnN0W24sZV1vZiBPYmplY3QuZW50cmllcyhZdCkpVXRbbl09ZS5heGlzO2NvbnN0IE50PVsiVSIsIkQiLCJSIiwiTCIsIkYiLCJCIiwiTSIsIkUiLCJTIiwidSIsImQiLCJyIiwibCIsImYiLCJiIiwieCIsInkiLCJ6Il07ZnVuY3Rpb24gZ2Uobil7bGV0IGU9Wy4uLm5dO2Zvcig7Oyl7Y29uc3Qgbz1bXTtsZXQgdD0wLHI9ITE7Zm9yKDt0PGUubGVuZ3RoOyl7Y29uc3QgbD1VdFtlW3RdLmJhc2VdO2xldCBzPXQ7Y29uc3QgaT1uZXcgTWFwO2Zvcig7czxlLmxlbmd0aCYmVXRbZVtzXS5iYXNlXT09PWw7KWkuc2V0KGVbc10uYmFzZSwoKGkuZ2V0KGVbc10uYmFzZSk/PzApK2Vbc10uYW1vdW50KSU0KSxzKys7Y29uc3QgYT1bLi4uaS5lbnRyaWVzKCldLmZpbHRlcigoWyxSXSk9PlIhPT0wKTthLnNvcnQoKFIsRCk9Pk50LmluZGV4T2YoUlswXSktTnQuaW5kZXhPZihEWzBdKSksYS5sZW5ndGghPT1zLXQmJihyPSEwKTtmb3IoY29uc3RbUixEXW9mIGEpby5wdXNoKHtiYXNlOlIsYW1vdW50OkR9KTt0PXN9aWYoIXIpcmV0dXJuIG87ZT1vfX1jb25zdCB0bj17cjpbIngiLCJMIl0sbDpbIngiLCJSIl0sdTpbInkiLCJEIl0sZDpbInkiLCJVIl0sZjpbInoiLCJCIl0sYjpbInoiLCJGIl19LE5uPW5ldyBTZXQoWyJsIiwiZCIsImIiXSksbm49bmV3IE1hcDtmb3IoY29uc3QgbiBvZlsuLi5BbiwuLi5UbiwuLi5PYmplY3Qua2V5cyh0biksLi4uV3RdKWZvcihjb25zdCBlIG9mWzEsMiwzXSlubi5zZXQoRWUoe2Jhc2U6bixhbW91bnQ6ZX0pLmpvaW4oIiwiKSx7YmFzZTpuLGFtb3VudDplfSk7ZnVuY3Rpb24gSW4obixlKXtjb25zdCBvPUplKEplKG4sRWUoZSkpLHF0KG4pKSx0PW5uLmdldChvLmpvaW4oIiwiKSk7aWYoIXQpdGhyb3cgbmV3IEVycm9yKGBjb25qdWdhdGUgbm90IGZvdW5kIGZvciAke1N0KGUpfWApO3JldHVybiB0fWZ1bmN0aW9uIG9uKG4pe2xldCBlPXR0O2NvbnN0IG89W10sdD1yPT57V3QuaGFzKHIuYmFzZSk/ZT1KZShlLEVlKHIpKTpvLnB1c2goWnQoZSx0dCk/cjpJbihlLHIpKX07Zm9yKGNvbnN0IHIgb2Ygbil7Y29uc3QgbD10bltyLmJhc2VdO2lmKGwpe2NvbnN0W3MsaV09bCxhPU5uLmhhcyhyLmJhc2UpPzQtci5hbW91bnQ6ci5hbW91bnQ7dCh7YmFzZTpzLGFtb3VudDphfSksdCh7YmFzZTppLGFtb3VudDpyLmFtb3VudH0pfWVsc2UgdChyKX1yZXR1cm57dG9rZW5zOmdlKG8pLHJvdGF0aW9uOmV9fWNvbnN0IGh0PW5ldyBNYXA7e2NvbnN0IG49W1tdXTtmb3IoY29uc3QgZSBvZlsieCIsInkiLCJ6Il0pZm9yKGNvbnN0IG8gb2ZbMSwyLDNdKW4ucHVzaChbe2Jhc2U6ZSxhbW91bnQ6b31dKTtmb3IoY29uc3QgZSBvZiBuKWZvcihjb25zdCBvIG9mIG4pe2NvbnN0IHQ9Wy4uLmUsLi4ub10scj1sZSh0KS5qb2luKCIsIik7aHQuaGFzKHIpfHxodC5zZXQocix0KX19ZnVuY3Rpb24gam4obil7cmV0dXJuIGh0LmdldChuLmpvaW4oIiwiKSk/P251bGx9Y29uc3QgJG49WzQsMTMsMjIsMzEsNDAsNDldO2Z1bmN0aW9uIEl0KG4pe2NvbnN0IGU9bGUobik7cmV0dXJuICRuLmV2ZXJ5KG89PmVbb109PT1vKX1mdW5jdGlvbiBLbihuKXtjb25zdHt0b2tlbnM6ZSxyb3RhdGlvbjpvfT1vbihuKTtpZihJdChlKSlyZXR1cm4gZ2UoZSk7Y29uc3QgdD1qbihvKTtpZighdCl0aHJvdyBuZXcgRXJyb3IoIm5vbi1yb3RhdGlvbiByZXNpZHVhbCIpO2NvbnN0IHI9Z2UoWy4uLmUsLi4udF0pO2lmKCFJdChyKSl0aHJvdyBuZXcgRXJyb3IoImFsZyBkb2VzIG5vdCBwcmVzZXJ2ZSBjZW50ZXJzIik7cmV0dXJuIHJ9ZnVuY3Rpb24gYWUobil7Y29uc3QgZT1uZXcgQXJyYXkoOCkuZmlsbCgtMSksbz1uZXcgQXJyYXkoOCkuZmlsbCgtMSksdD1uZXcgQXJyYXkoMTIpLmZpbGwoLTEpLHI9bmV3IEFycmF5KDEyKS5maWxsKC0xKTtmb3IobGV0IGw9MDtsPDg7bCsrKXtlOmZvcihsZXQgcz0wO3M8ODtzKyspZm9yKGxldCBpPTA7aTwzO2krKyl7bGV0IGE9ITA7Zm9yKGxldCBSPTA7UjwzO1IrKylpZihuW2JuW2xdWyhSK2kpJTNdXSE9PU1uW3NdW1JdKXthPSExO2JyZWFrfWlmKGEpe2VbbF09cyxvW2xdPWk7YnJlYWsgZX19aWYoZVtsXTwwKXJldHVybiBudWxsfWZvcihsZXQgbD0wO2w8MTI7bCsrKXtlOmZvcihsZXQgcz0wO3M8MTI7cysrKWZvcihsZXQgaT0wO2k8MjtpKyspe2xldCBhPSEwO2ZvcihsZXQgUj0wO1I8MjtSKyspaWYobltrbltsXVsoUitpKSUyXV0hPT1DbltzXVtSXSl7YT0hMTticmVha31pZihhKXt0W2xdPXMscltsXT1pO2JyZWFrIGV9fWlmKHRbbF08MClyZXR1cm4gbnVsbH1yZXR1cm57Y3A6ZSxjbzpvLGVwOnQsZW86cn19Y29uc3QganQ9bmV3IE1hcDtmdW5jdGlvbiBYZShuKXtjb25zdCBlPVN0KG4pO2xldCBvPWp0LmdldChlKTtpZihvKXJldHVybiBvO2NvbnN0IHQ9YWUoUmUoeWUsRWUobikpKTtpZighdCl0aHJvdyBuZXcgRXJyb3IoIm1vdmUgbWFwIGJ1ZyIpO2NvbnN0IHI9bmV3IFVpbnQ4QXJyYXkoMjQpLGw9bmV3IFVpbnQ4QXJyYXkoMjQpO2ZvcihsZXQgcz0wO3M8MTI7cysrKXtjb25zdCBpPXQuZXBbc107Zm9yKGxldCBhPTA7YTwyO2ErKylyW2kqMithXT1zKjIrKGErdC5lb1tzXSklMn1mb3IobGV0IHM9MDtzPDg7cysrKXtjb25zdCBpPXQuY3Bbc107Zm9yKGxldCBhPTA7YTwzO2ErKylsW2kqMythXT1zKjMrKGErdC5jb1tzXSklM31yZXR1cm4gbz17ZWRnZTpyLGNvcm5lcjpsfSxqdC5zZXQoZSxvKSxvfWZ1bmN0aW9uIHJuKG4sZSl7Y29uc3Qgbz1YZShlKSx0PW5ldyBBcnJheSg4KSxyPW5ldyBBcnJheSg4KSxsPW5ldyBBcnJheSgxMikscz1uZXcgQXJyYXkoMTIpO2ZvcihsZXQgaT0wO2k8MTI7aSsrKXtjb25zdCBhPW8uZWRnZVtpKjIrMF0sUj1hPj4xO2xbUl09bi5lcFtpXSxzW1JdPShuLmVvW2ldKyhhJjEpKSUyfWZvcihsZXQgaT0wO2k8ODtpKyspe2NvbnN0IGE9by5jb3JuZXJbaSozKzBdLFI9TWF0aC5mbG9vcihhLzMpO3RbUl09bi5jcFtpXSxyW1JdPShuLmNvW2ldK2ElMyklM31yZXR1cm57Y3A6dCxjbzpyLGVwOmwsZW86c319ZnVuY3Rpb24gJHQobil7bGV0IGU9MDtmb3IobGV0IG89MDtvPG4ubGVuZ3RoO28rKylmb3IobGV0IHQ9bysxO3Q8bi5sZW5ndGg7dCsrKW5bb10+blt0XSYmKGVePTEpO3JldHVybiBlfWZ1bmN0aW9uIHpuKG4pe2lmKG4ubGVuZ3RoIT09NTQpcmV0dXJue29rOiExLGNvZGU6IldST05HX0xFTkdUSCJ9O2lmKCEvXltVUkZETEJdezU0fSQvLnRlc3QobikpcmV0dXJue29rOiExLGNvZGU6IklOVkFMSURfQ0hBUlMifTtmb3IoY29uc3QgdCBvZiBldClpZihuW0p0W3RdXSE9PXQpcmV0dXJue29rOiExLGNvZGU6IldST05HX0NFTlRFUlMifTtjb25zdCBlPXt9O2Zvcihjb25zdCB0IG9mIG4pZVt0XT0oZVt0XT8/MCkrMTtmb3IoY29uc3QgdCBvZiBldClpZihlW3RdIT09OSlyZXR1cm57b2s6ITEsY29kZToiQ09MT1JfQ09VTlQifTtjb25zdCBvPWFlKG4pO3JldHVybiBvP25ldyBTZXQoby5jcCkuc2l6ZSE9PTh8fG5ldyBTZXQoby5lcCkuc2l6ZSE9PTEyP3tvazohMSxjb2RlOiJJTlZBTElEX1BJRUNFUyJ9Om8uY28ucmVkdWNlKCh0LHIpPT50K3IsMCklMyE9PTA/e29rOiExLGNvZGU6IlRXSVNUIn06by5lby5yZWR1Y2UoKHQscik9PnQrciwwKSUyIT09MD97b2s6ITEsY29kZToiRkxJUCJ9OiR0KG8uY3ApIT09JHQoby5lcCk/e29rOiExLGNvZGU6IlBBUklUWSJ9OntvazohMCxjdWJpZTpvfTp7b2s6ITEsY29kZToiSU5WQUxJRF9QSUVDRVMifX1mdW5jdGlvbiBzbihuKXtpZihuLmxlbmd0aCE9PTU0KXJldHVybiBudWxsO2NvbnN0IGU9bmV3IE1hcDtmb3IoY29uc3QgdCBvZiBldCl7Y29uc3Qgcj1uW0p0W3RdXTtpZihlLmhhcyhyKSlyZXR1cm4gbnVsbDtlLnNldChyLHQpfWxldCBvPSIiO2Zvcihjb25zdCB0IG9mIG4pe2NvbnN0IHI9ZS5nZXQodCk7aWYoIXIpcmV0dXJuIG51bGw7bys9cn1yZXR1cm4gb31jb25zdCBrZT1bXTtmb3IoY29uc3QgbiBvZlsiVSIsIkQiLCJMIiwiUiIsIkYiLCJCIl0pZm9yKGNvbnN0IGUgb2ZbMSwyLDNdKWtlLnB1c2goe2Jhc2U6bixhbW91bnQ6ZX0pO2NvbnN0IEhlPVtdO2Zvcihjb25zdCBuIG9mWyJVIiwiUiIsInIiLCJNIl0pZm9yKGNvbnN0IGUgb2ZbMSwyLDNdKUhlLnB1c2goe2Jhc2U6bixhbW91bnQ6ZX0pO2NvbnN0IGx0PVtdO2Zvcihjb25zdCBuIG9mWyJVIiwiTSJdKWZvcihjb25zdCBlIG9mWzEsMiwzXSlsdC5wdXNoKHtiYXNlOm4sYW1vdW50OmV9KTtmdW5jdGlvbiBudChuLGUpe2ZvcihsZXQgbz0wO288MTI7bysrKWlmKG4uZXBbb109PT1lKXJldHVybiBvKjIrbi5lb1tvXTt0aHJvdyBuZXcgRXJyb3IoImVkZ2Ugbm90IGZvdW5kIil9ZnVuY3Rpb24gb3QobixlKXtmb3IobGV0IG89MDtvPDg7bysrKWlmKG4uY3Bbb109PT1lKXJldHVybiBvKjMrbi5jb1tvXTt0aHJvdyBuZXcgRXJyb3IoImNvcm5lciBub3QgZm91bmQiKX1mdW5jdGlvbiBWbihuLGUpe2xldCBvPTA7Zm9yKGxldCB0PTA7dDxuLmxlbmd0aDt0Kyspbz1vKjI0K25bdF07cmV0dXJuIG99ZnVuY3Rpb24gT2UobixlLG8pe2NvbnN0IHQ9bi5sZW5ndGgrZS5sZW5ndGgscj0yNCoqdCxsPW5ldyBVaW50OEFycmF5KHIpLmZpbGwoMjU1KSxzPW8ubWFwKFQ9PlhlKFQpLmVkZ2UpLGk9by5tYXAoVD0+WGUoVCkuY29ybmVyKSxhPXtkaXN0OmwsdG9rZW5zOm8sZWRnZVBpZWNlczpuLGNvcm5lclBpZWNlczplLGVkZ2VNYXBzOnMsY29ybmVyTWFwczppLHJhZGl4Om5ldyBBcnJheSh0KS5maWxsKDI0KX0sUj1bLi4ubi5tYXAoVD0+VCoyKSwuLi5lLm1hcChUPT5UKjMpXSxEPVZuKFIpO2xldCB5PW5ldyBVaW50MzJBcnJheSgxKTt5WzBdPUQsbFtEXT0wO2xldCBNPTA7Y29uc3QgQT1uLmxlbmd0aCxQPW5ldyBBcnJheSh0KTtmb3IoO3kubGVuZ3RoPjA7KXtjb25zdCBUPVtdO2ZvcihsZXQgVj0wO1Y8eS5sZW5ndGg7VisrKXtsZXQgWT15W1ZdO2ZvcihsZXQgST10LTE7ST49MDtJLS0pUFtJXT1ZJTI0LFk9TWF0aC5mbG9vcihZLzI0KTtmb3IobGV0IEk9MDtJPG8ubGVuZ3RoO0krKyl7Y29uc3QgSj1zW0ldLG9lPWlbSV07bGV0IFE9MDtmb3IobGV0IFo9MDtaPHQ7WisrKVE9USoyNCsoWjxBP0pbUFtaXV06b2VbUFtaXV0pO2xbUV09PT0yNTUmJihsW1FdPU0rMSxULnB1c2goUSkpfX1NKysseT1VaW50MzJBcnJheS5mcm9tKFQpfXJldHVybiBhfWZ1bmN0aW9uIEhuKG4sZSl7cmV0dXJuWy4uLmUuZWRnZVBpZWNlcy5tYXAobz0+bnQobixvKSksLi4uZS5jb3JuZXJQaWVjZXMubWFwKG89Pm90KG4sbykpXX1mdW5jdGlvbiBxZShuLGUpe2xldCBvPUhuKG4sZSk7Y29uc3QgdD1lLmVkZ2VQaWVjZXMubGVuZ3RoLHI9by5sZW5ndGg7bGV0IGw9MDtmb3IobGV0IGE9MDthPHI7YSsrKWw9bCoyNCtvW2FdO2lmKGUuZGlzdFtsXT09PTI1NSlyZXR1cm4gbnVsbDtjb25zdCBzPVtdO2xldCBpPTA7Zm9yKDtlLmRpc3RbbF0+MDspe2lmKGkrKz40MCl0aHJvdyBuZXcgRXJyb3IoInRhYmxlIGRlc2NlbnQgc3R1Y2siKTtjb25zdCBhPWUuZGlzdFtsXTtsZXQgUj0hMTtmb3IobGV0IEQ9MDtEPGUudG9rZW5zLmxlbmd0aDtEKyspe2NvbnN0IHk9ZS5lZGdlTWFwc1tEXSxNPWUuY29ybmVyTWFwc1tEXTtsZXQgQT0wO2NvbnN0IFA9bmV3IEFycmF5KHIpO2ZvcihsZXQgVD0wO1Q8cjtUKyspUFtUXT1UPHQ/eVtvW1RdXTpNW29bVF1dLEE9QSoyNCtQW1RdO2lmKGUuZGlzdFtBXT09PWEtMSl7cy5wdXNoKGUudG9rZW5zW0RdKSxvPVAsbD1BLFI9ITA7YnJlYWt9fWlmKCFSKXRocm93IG5ldyBFcnJvcigidGFibGUgZGVzY2VudCBmYWlsZWQiKX1yZXR1cm4gc31jbGFzcyB6IGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSxvKXtzdXBlcihvPz9lKSx0aGlzLmNvZGU9ZX19Y29uc3QgdmU9bj0+KHtiYXNlOiJVIixhbW91bnQ6bn0pO2Z1bmN0aW9uIERlKG4sZSl7bGV0IG89ZT8/YWUoeWUpO2Zvcihjb25zdCB0IG9mIG4pbz1ybihvLHQpO3JldHVybiBvfWZ1bmN0aW9uIEpuKG4pe2xldCBlPTA7Zm9yKGxldCBvPTA7bzw0O28rKyllPWUqMytuLmNvW29dO2ZvcihsZXQgbz0wO288NDtvKyspZT1lKjIrbi5lb1tvXTtyZXR1cm4gZX1mdW5jdGlvbiBsbihuKXtsZXQgZT0wO2ZvcihsZXQgbz0wO288NDtvKyspe2lmKG4uY3Bbb10+M3x8bi5jb1tvXSE9PTApcmV0dXJuIG51bGw7ZT1lKjQrbi5jcFtvXX1mb3IobGV0IG89MDtvPDQ7bysrKXtpZihuLmVwW29dPjN8fG4uZW9bb10hPT0wKXJldHVybiBudWxsO2U9ZSo0K24uZXBbb119cmV0dXJuIGV9ZnVuY3Rpb24geXQobil7bGV0IGU9MDtmb3IobGV0IG89MDtvPDQ7bysrKXtpZihuLmNwW29dPjMpcmV0dXJuIG51bGw7ZT1lKjQrbi5jcFtvXX1mb3IobGV0IG89MDtvPDQ7bysrKWU9ZSozK24uY29bb107cmV0dXJuIGV9Y29uc3QgTHQ9bmV3IFNldDt7Zm9yKGxldCBuPTA7bjw5O24rKylMdC5hZGQobik7Zm9yKGNvbnN0IG4gb2ZbOSwxOCwzNiw0NV0pZm9yKGxldCBlPTA7ZTwzO2UrKylMdC5hZGQobitlKX1mdW5jdGlvbiBhbihuKXtjb25zdCBlPU90KHllLG4pO2ZvcihsZXQgbz0wO288NTQ7bysrKWlmKCFMdC5oYXMobykmJmVbb10hPT15ZVtvXSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBYbihuKXtjb25zdCBlPURlKG4pO2Zvcihjb25zdCB0IG9mWzksMTAsNiw4LDExLDRdKWlmKGUuZXBbdF0hPT10fHxlLmVvW3RdIT09MClyZXR1cm4hMTtmb3IoY29uc3QgdCBvZls1LDYsNCw3XSlpZihlLmNwW3RdIT09dHx8ZS5jb1t0XSE9PTApcmV0dXJuITE7Y29uc3Qgbz1PdCh5ZSxuKTtyZXR1cm4gb1s0MF09PT0iTCImJm9bMTNdPT09IlIifWZ1bmN0aW9uIEduKG4sZSxvLHQpe2NvbnN0IHI9c3QobyksbD10P1swLDEsMiwzXTpbMF07Zm9yKGNvbnN0IHMgb2YgbCl7Y29uc3QgaT1zPT09MD9bXTpbdmUoNC1zKV0sYT1EZShbLi4uaSwuLi5yXSksUj1uLmtleU9mKGEpO1IhPT1udWxsJiYhbi5kYi5oYXMoUikmJm4uZGIuc2V0KFIse3Rva2VuczpvLGZpbmFsVTpzLGVudHJ5OmV9KX19ZnVuY3Rpb24gRXQobixlLG8sdCxyLGwpe2NvbnN0IHM9e2tleU9mOmUsZ29hbEtleXM6cixkYjpuZXcgTWFwLGVudHJpZXM6W10sY2Fub25pY2FsOm99O2Zvcihjb25zdCBpIG9mIG4pe2NvbnN0IGE9S24ocGUoaS5hbGcpKTtpZighdChhKSl0aHJvdyBuZXcgeigiREJfSU5WQUxJRCIsYCR7aS5pZH06IHN0cnVjdHVyYWwgY2hlY2sgZmFpbGVkYCk7cy5lbnRyaWVzLnB1c2goe2VudHJ5OmksdG9rZW5zOmF9KSxHbihzLGksYSxsKX1yZXR1cm4gc31mdW5jdGlvbiBZbihuKXtjb25zdCBlPW5ldyBBcnJheSg4KS5maWxsKDApLG89bmV3IEFycmF5KDEyKS5maWxsKDApO2xldCB0PW47Zm9yKGxldCByPTM7cj49MDtyLS0pb1tyXT10JjEsdD4+PTE7Zm9yKGxldCByPTM7cj49MDtyLS0pZVtyXT10JTMsdD1NYXRoLmZsb29yKHQvMyk7cmV0dXJuKGVbMF0rZVsxXStlWzJdK2VbM10pJTMhPT0wfHwob1swXStvWzFdK29bMl0rb1szXSklMiE9PTA/bnVsbDp7Y3A6WzAsMSwyLDMsNCw1LDYsN10sY286ZSxlcDpbLi4uQXJyYXkoMTIpLmtleXMoKV0sZW86b319ZnVuY3Rpb24gV24obil7cmV0dXJuIEV0KG4sSm4sWW4sYW4sbmV3IFNldChbMF0pLCExKX1mdW5jdGlvbiBxbihuKXtjb25zdCBlPVswLDAsMCwwLDQsNSw2LDddLG89WzAsMCwwLDAsNCw1LDYsNyw4LDksMTAsMTFdO2xldCB0PW47Zm9yKGxldCByPTM7cj49MDtyLS0pb1tyXT10JjMsdD4+PTI7Zm9yKGxldCByPTM7cj49MDtyLS0pZVtyXT10JjMsdD4+PTI7cmV0dXJuIG5ldyBTZXQoZS5zbGljZSgwLDQpKS5zaXplIT09NHx8bmV3IFNldChvLnNsaWNlKDAsNCkpLnNpemUhPT00P251bGw6e2NwOmUsY286bmV3IEFycmF5KDgpLmZpbGwoMCksZXA6byxlbzpuZXcgQXJyYXkoMTIpLmZpbGwoMCl9fWZ1bmN0aW9uIFpuKCl7Y29uc3Qgbj1uZXcgU2V0O2Zvcihjb25zdCBlIG9mWzAsMSwyLDNdKXtjb25zdCBvPURlKGU9PT0wP1tdOlt2ZShlKV0pLHQ9bG4obyk7dCE9PW51bGwmJm4uYWRkKHQpfXJldHVybiBufWZ1bmN0aW9uIFFuKG4pe3JldHVybiBFdChuLGxuLHFuLG89PntpZighYW4obykpcmV0dXJuITE7Y29uc3QgdD1EZShvKTtyZXR1cm4gdC5jby5ldmVyeShyPT5yPT09MCkmJnQuZW8uZXZlcnkocj0+cj09PTApfSxabigpLCEwKX1mdW5jdGlvbiBlbyhuKXtjb25zdCBlPVswLDAsMCwwLDQsNSw2LDddLG89bmV3IEFycmF5KDgpLmZpbGwoMCk7bGV0IHQ9bjtmb3IobGV0IHI9MztyPj0wO3ItLSlvW3JdPXQlMyx0PU1hdGguZmxvb3IodC8zKTtmb3IobGV0IHI9MztyPj0wO3ItLSllW3JdPXQmMyx0Pj49MjtyZXR1cm4gbmV3IFNldChlLnNsaWNlKDAsNCkpLnNpemUhPT00fHwob1swXStvWzFdK29bMl0rb1szXSklMyE9PTA/bnVsbDp7Y3A6ZSxjbzpvLGVwOlsuLi5BcnJheSgxMikua2V5cygpXSxlbzpuZXcgQXJyYXkoMTIpLmZpbGwoMCl9fWZ1bmN0aW9uIHRvKCl7Y29uc3Qgbj1uZXcgU2V0O2Zvcihjb25zdCBlIG9mWzAsMSwyLDNdKXtjb25zdCBvPURlKGU9PT0wP1tdOlt2ZShlKV0pLHQ9eXQobyk7dCE9PW51bGwmJm4uYWRkKHQpfXJldHVybiBufWZ1bmN0aW9uIG5vKG4pe3JldHVybiBFdChuLHl0LGVvLFhuLHRvKCksITApfWZ1bmN0aW9uIG10KG4sZSl7Y29uc3Qgbz1uLmtleU9mKGUpO2lmKG89PT1udWxsKXRocm93IG5ldyB6KCJMTF9QSEFTRV9QUkVDT05ESVRJT04iKTtpZihuLmdvYWxLZXlzLmhhcyhvKSl7Y29uc3QgaT1LdChuLGUpO3JldHVybnt0b2tlbnM6aT9bdmUoaSldOltdLGRldGFpbDoic2tpcCJ9fWZvcihjb25zdCBpIG9mWzAsMSwyLDNdKXtjb25zdCBhPWk9PT0wP1tdOlt2ZShpKV0sUj1pPT09MD9lOkRlKGEsZSksRD1uLmtleU9mKFIpO2lmKEQhPT1udWxsKXtjb25zdCB5PW4uZGIuZ2V0KEQpO2lmKHkpe2NvbnN0IE09Wy4uLmEsLi4ueS50b2tlbnNdO3JldHVybiB5LmZpbmFsVSYmTS5wdXNoKHZlKHkuZmluYWxVKSkse3Rva2VuczpnZShNKSxkZXRhaWw6eS5lbnRyeS5uYW1lPz95LmVudHJ5LmlkfX19fWNvbnN0IHQ9cm8obixvKTtpZighdCl0aHJvdyBuZXcgeigiTExfVU5TT0xWQUJMRSIpO2xldCByPVtdLGw9ZTtmb3IoY29uc3QgaSBvZiB0KXtjb25zdCBhPWkuYXVmPT09MD9bXTpbdmUoaS5hdWYpXTtyPVsuLi5yLC4uLmEsLi4uaS50b2tlbnNdLGw9RGUoWy4uLmEsLi4uaS50b2tlbnNdLGwpfWNvbnN0IHM9S3QobixsKTtyZXR1cm4gcyYmci5wdXNoKHZlKHMpKSx7dG9rZW5zOmdlKHIpLGRldGFpbDpgY2hhaW4oJHt0Lmxlbmd0aH0pYH19ZnVuY3Rpb24gS3QobixlKXtmb3IoY29uc3QgbyBvZlswLDEsMiwzXSl7Y29uc3QgdD1vPT09MD9lOkRlKFt2ZShvKV0sZSk7bGV0IHI9ITA7Zm9yKGxldCBsPTA7bDw0O2wrKylpZih0LmNwW2xdIT09bHx8dC5jb1tsXSE9PTApe3I9ITE7YnJlYWt9aWYocil7bGV0IGw9ITA7Zm9yKGxldCBzPTA7czw0O3MrKylpZih0LmVwW3NdIT09c3x8dC5lb1tzXSE9PTApe2w9ITE7YnJlYWt9aWYobHx8b28obikpcmV0dXJuIG99fXJldHVybiAwfWZ1bmN0aW9uIG9vKG4pe3JldHVybiBuLmtleU9mPT09eXR9ZnVuY3Rpb24gcm8obixlKXtjb25zdCBvPW5ldyBTZXQoW2VdKTtsZXQgdD1be2tleTplLHBhdGg6W119XTtmb3IobGV0IHI9MDtyPDQ7cisrKXtjb25zdCBsPVtdO2Zvcihjb25zdCBzIG9mIHQpe2NvbnN0IGk9bi5jYW5vbmljYWwocy5rZXkpO2lmKGkpZm9yKGNvbnN0IGEgb2ZbMCwxLDIsM10pe2NvbnN0IFI9YT09PTA/W106W3ZlKGEpXSxEPWE9PT0wP2k6RGUoUixpKTtmb3IoY29uc3R7dG9rZW5zOnl9b2Ygbi5lbnRyaWVzKXtjb25zdCBNPURlKHksRCksQT1uLmtleU9mKE0pO2lmKEE9PT1udWxsfHxvLmhhcyhBKSljb250aW51ZTtjb25zdCBQPVsuLi5zLnBhdGgse2F1ZjphLHRva2Vuczp5fV07aWYobi5nb2FsS2V5cy5oYXMoQSkpcmV0dXJuIFA7by5hZGQoQSksbC5wdXNoKHtrZXk6QSxwYXRoOlB9KX19fXQ9bH1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDZShuKXtyZXR1cm4gZW4obikuc3BsaXQoIiAiKS5maWx0ZXIoQm9vbGVhbil9dmFyIGlvPVt7aWQ6Ik9MTDAxIixuYW1lOiJEb3QgMSIsYWxnOiJSIFUyIFIyIEYgUiBGJyBVMiBSJyBGIFIgRicifSx7aWQ6Ik9MTDAyIixuYW1lOiJEb3QgMiIsYWxnOiJGIFIgVSBSJyBVJyBGJyBmIFIgVSBSJyBVJyBmJyJ9LHtpZDoiT0xMMDMiLG5hbWU6IkRvdCAzIixhbGc6ImYgUiBVIFInIFUnIGYnIFUnIEYgUiBVIFInIFUnIEYnIn0se2lkOiJPTEwwNCIsbmFtZToiRG90IDQiLGFsZzoiZiBSIFUgUicgVScgZicgVSBGIFIgVSBSJyBVJyBGJyJ9LHtpZDoiT0xMMDUiLG5hbWU6IlNxdWFyZSBMZWZ0IixhbGc6InInIFUyIFIgVSBSJyBVIHIifSx7aWQ6Ik9MTDA2IixuYW1lOiJTcXVhcmUgUmlnaHQiLGFsZzoiciBVMiBSJyBVJyBSIFUnIHInIn0se2lkOiJPTEwwNyIsbmFtZToiU21hbGwgTGlnaHRuaW5nIixhbGc6InIgVSBSJyBVIFIgVTIgcicifSx7aWQ6Ik9MTDA4IixuYW1lOiJTbWFsbCBMaWdodG5pbmcgMiIsYWxnOiJyJyBVJyBSIFUnIFInIFUyIHIifSx7aWQ6Ik9MTDA5IixuYW1lOiJGaXNoIEtpdGUiLGFsZzoiUiBVIFInIFUnIFInIEYgUjIgVSBSJyBVJyBGJyJ9LHtpZDoiT0xMMTAiLG5hbWU6IkZpc2ggQW50aS1LaXRlIixhbGc6IlIgVSBSJyBVIFInIEYgUiBGJyBSIFUyIFInIn0se2lkOiJPTEwxMSIsbmFtZToiU21hbGwgTGlnaHRuaW5nIDMiLGFsZzoiciBVIFInIFUgUicgRiBSIEYnIFIgVTIgcicifSx7aWQ6Ik9MTDEyIixuYW1lOiJTbWFsbCBMaWdodG5pbmcgNCIsYWxnOiJNJyBSJyBVJyBSIFUnIFInIFUyIFIgVScgTSJ9LHtpZDoiT0xMMTMiLG5hbWU6IktuaWdodCAxIixhbGc6IkYgVSBSIFUnIFIyIEYnIFIgVSBSIFUnIFInIn0se2lkOiJPTEwxNCIsbmFtZToiS25pZ2h0IDIiLGFsZzoiUicgRiBSIFUgUicgRicgUiBGIFUnIEYnIn0se2lkOiJPTEwxNSIsbmFtZToiS25pZ2h0IDMiLGFsZzoicicgVScgciBSJyBVJyBSIFUgcicgVSByIn0se2lkOiJPTEwxNiIsbmFtZToiS25pZ2h0IDQiLGFsZzoiciBVIHInIFIgVSBSJyBVJyByIFUnIHInIn0se2lkOiJPTEwxNyIsbmFtZToiRG90IDUiLGFsZzoiUiBVIFInIFUgUicgRiBSIEYnIFUyIFInIEYgUiBGJyJ9LHtpZDoiT0xMMTgiLG5hbWU6IkRvdCA2IixhbGc6InIgVSBSJyBVIFIgVTIgcjIgVScgUiBVJyBSJyBVMiByIn0se2lkOiJPTEwxOSIsbmFtZToiRG90IDciLGFsZzoiTSBVIFIgVSBSJyBVJyBNJyBSJyBGIFIgRicifSx7aWQ6Ik9MTDIwIixuYW1lOiJEb3QgOCAoWCkiLGFsZzoiTSBVIFIgVSBSJyBVJyBNMiBVIFIgVScgcicifSx7aWQ6Ik9MTDIxIixuYW1lOiJDcm9zcyAxIChIKSIsYWxnOiJSIFUyIFInIFUnIFIgVSBSJyBVJyBSIFUnIFInIn0se2lkOiJPTEwyMiIsbmFtZToiQ3Jvc3MgMiAoUGkpIixhbGc6IlIgVTIgUjIgVScgUjIgVScgUjIgVTIgUiJ9LHtpZDoiT0xMMjMiLG5hbWU6IkNyb3NzIDMgKFUpIixhbGc6IlIyIEQnIFIgVTIgUicgRCBSIFUyIFIifSx7aWQ6Ik9MTDI0IixuYW1lOiJDcm9zcyA0IChUKSIsYWxnOiJyIFUgUicgVScgcicgRiBSIEYnIn0se2lkOiJPTEwyNSIsbmFtZToiQ3Jvc3MgNSAoTCkiLGFsZzoiRicgciBVIFInIFUnIHInIEYgUiJ9LHtpZDoiT0xMMjYiLG5hbWU6IkNyb3NzIDYgKEFudGlzdW5lKSIsYWxnOiJSIFUyIFInIFUnIFIgVScgUicifSx7aWQ6Ik9MTDI3IixuYW1lOiJDcm9zcyA3IChTdW5lKSIsYWxnOiJSIFUgUicgVSBSIFUyIFInIn0se2lkOiJPTEwyOCIsbmFtZToiQ29ybmVycyBPcmllbnRlZCAxIixhbGc6InIgVSBSJyBVJyBNIFUgUiBVJyBSJyJ9LHtpZDoiT0xMMjkiLG5hbWU6IkF3a3dhcmQgMSIsYWxnOiJSIFUgUicgVScgUiBVJyBSJyBGJyBVJyBGIFIgVSBSJyJ9LHtpZDoiT0xMMzAiLG5hbWU6IkF3a3dhcmQgMiIsYWxnOiJGIFUgUiBVMiBSJyBVJyBSIFUyIFInIFUnIEYnIn0se2lkOiJPTEwzMSIsbmFtZToiUCAxIixhbGc6IlInIFUnIEYgVSBSIFUnIFInIEYnIFIifSx7aWQ6Ik9MTDMyIixuYW1lOiJQIDIiLGFsZzoiUiBVIEInIFUnIFInIFUgUiBCIFInIn0se2lkOiJPTEwzMyIsbmFtZToiVCAxIixhbGc6IlIgVSBSJyBVJyBSJyBGIFIgRicifSx7aWQ6Ik9MTDM0IixuYW1lOiJDIDEiLGFsZzoiUiBVIFIyIFUnIFInIEYgUiBVIFIgVScgRicifSx7aWQ6Ik9MTDM1IixuYW1lOiJGaXNoIDMiLGFsZzoiUiBVMiBSMiBGIFIgRicgUiBVMiBSJyJ9LHtpZDoiT0xMMzYiLG5hbWU6IlcgMSIsYWxnOiJMJyBVJyBMIFUnIEwnIFUgTCBVIEwgRicgTCcgRiJ9LHtpZDoiT0xMMzciLG5hbWU6IkZpc2ggNCIsYWxnOiJGIFInIEYnIFIgVSBSIFUnIFInIn0se2lkOiJPTEwzOCIsbmFtZToiVyAyIixhbGc6IlIgVSBSJyBVIFIgVScgUicgVScgUicgRiBSIEYnIn0se2lkOiJPTEwzOSIsbmFtZToiQmlnIExpZ2h0bmluZyAxIixhbGc6IkwgRicgTCcgVScgTCBVIEYgVScgTCcifSx7aWQ6Ik9MTDQwIixuYW1lOiJCaWcgTGlnaHRuaW5nIDIiLGFsZzoiUicgRiBSIFUgUicgVScgRicgVSBSIn0se2lkOiJPTEw0MSIsbmFtZToiQXdrd2FyZCAzIixhbGc6IlIgVSBSJyBVIFIgVTIgUicgRiBSIFUgUicgVScgRicifSx7aWQ6Ik9MTDQyIixuYW1lOiJBd2t3YXJkIDQiLGFsZzoiUicgVScgUiBVJyBSJyBVMiBSIEYgUiBVIFInIFUnIEYnIn0se2lkOiJPTEw0MyIsbmFtZToiUCAzIixhbGc6IkYnIFUnIEwnIFUgTCBGIn0se2lkOiJPTEw0NCIsbmFtZToiUCA0IixhbGc6IkYgVSBSIFUnIFInIEYnIn0se2lkOiJPTEw0NSIsbmFtZToiVCAyIixhbGc6IkYgUiBVIFInIFUnIEYnIn0se2lkOiJPTEw0NiIsbmFtZToiQyAyIixhbGc6IlInIFUnIFInIEYgUiBGJyBVIFIifSx7aWQ6Ik9MTDQ3IixuYW1lOiJTbWFsbCBMIDEiLGFsZzoiUicgVScgUicgRiBSIEYnIFInIEYgUiBGJyBVIFIifSx7aWQ6Ik9MTDQ4IixuYW1lOiJTbWFsbCBMIDIiLGFsZzoiRiBSIFUgUicgVScgUiBVIFInIFUnIEYnIn0se2lkOiJPTEw0OSIsbmFtZToiU21hbGwgTCAzIixhbGc6InIgVScgcjIgVSByMiBVIHIyIFUnIHIifSx7aWQ6Ik9MTDUwIixuYW1lOiJTbWFsbCBMIDQiLGFsZzoicicgVSByMiBVJyByMiBVJyByMiBVIHInIn0se2lkOiJPTEw1MSIsbmFtZToiSSAxIixhbGc6IkYgVSBSIFUnIFInIFUgUiBVJyBSJyBGJyJ9LHtpZDoiT0xMNTIiLG5hbWU6IkkgMiIsYWxnOiJSIFUgUicgVSBSIFUnIEIgVScgQicgUicifSx7aWQ6Ik9MTDUzIixuYW1lOiJTbWFsbCBMIDUiLGFsZzoicicgVScgUiBVJyBSJyBVIFIgVScgUicgVTIgciJ9LHtpZDoiT0xMNTQiLG5hbWU6IlNtYWxsIEwgNiIsYWxnOiJyIFUgUicgVSBSIFUnIFInIFUgUiBVMiByJyJ9LHtpZDoiT0xMNTUiLG5hbWU6IkkgMyIsYWxnOiJSIFUyIFIyIFUnIFIgVScgUicgVTIgRiBSIEYnIn0se2lkOiJPTEw1NiIsbmFtZToiSSA0IixhbGc6InInIFUnIHIgVScgUicgVSBSIFUnIFInIFUgUiByJyBVIHIifSx7aWQ6Ik9MTDU3IixuYW1lOiJDb3JuZXJzIE9yaWVudGVkIDIiLGFsZzoiUiBVIFInIFUnIE0nIFUgUiBVJyByJyJ9XSxzbz1be2lkOiJQTEwtQWEiLG5hbWU6IkFhIHBlcm0iLGFsZzoieCBSJyBVIFInIEQyIFIgVScgUicgRDIgUjIgeCcifSx7aWQ6IlBMTC1BYiIsbmFtZToiQWIgcGVybSIsYWxnOiJ4IFIyIEQyIFIgVSBSJyBEMiBSIFUnIFIgeCcifSx7aWQ6IlBMTC1FIixuYW1lOiJFIHBlcm0iLGFsZzoieCcgUiBVJyBSJyBEIFIgVSBSJyBEJyBSIFUgUicgRCBSIFUnIFInIEQnIHgifSx7aWQ6IlBMTC1GIixuYW1lOiJGIHBlcm0iLGFsZzoiUicgVScgRicgUiBVIFInIFUnIFInIEYgUjIgVScgUicgVScgUiBVIFInIFUgUiJ9LHtpZDoiUExMLUdhIixuYW1lOiJHYSBwZXJtIixhbGc6IlIyIFUgUicgVSBSJyBVJyBSIFUnIFIyIFUnIEQgUicgVSBSIEQnIn0se2lkOiJQTEwtR2IiLG5hbWU6IkdiIHBlcm0iLGFsZzoiUicgVScgUiBVIEQnIFIyIFUgUicgVSBSIFUnIFIgVScgUjIgRCJ9LHtpZDoiUExMLUdjIixuYW1lOiJHYyBwZXJtIixhbGc6IlIyIFUnIFIgVScgUiBVIFInIFUgUjIgVSBEJyBSIFUnIFInIEQifSx7aWQ6IlBMTC1HZCIsbmFtZToiR2QgcGVybSIsYWxnOiJSIFUgUicgVScgRCBSMiBVJyBSIFUnIFInIFUgUicgVSBSMiBEJyJ9LHtpZDoiUExMLUgiLG5hbWU6IkggcGVybSIsYWxnOiJNMiBVIE0yIFUyIE0yIFUgTTIifSx7aWQ6IlBMTC1KYSIsbmFtZToiSmEgcGVybSIsYWxnOiJSJyBVIEwnIFUyIFIgVScgUicgVTIgUiBMIn0se2lkOiJQTEwtSmIiLG5hbWU6IkpiIHBlcm0iLGFsZzoiUiBVIFInIEYnIFIgVSBSJyBVJyBSJyBGIFIyIFUnIFInIn0se2lkOiJQTEwtTmEiLG5hbWU6Ik5hIHBlcm0iLGFsZzoiUiBVIFInIFUgUiBVIFInIEYnIFIgVSBSJyBVJyBSJyBGIFIyIFUnIFInIFUyIFIgVScgUicifSx7aWQ6IlBMTC1OYiIsbmFtZToiTmIgcGVybSIsYWxnOiJSJyBVIFIgVScgUicgRicgVScgRiBSIFUgUicgRiBSJyBGJyBSIFUnIFIifSx7aWQ6IlBMTC1SYSIsbmFtZToiUmEgcGVybSIsYWxnOiJSIFUnIFInIFUnIFIgVSBSIEQgUicgVScgUiBEJyBSJyBVMiBSJyJ9LHtpZDoiUExMLVJiIixuYW1lOiJSYiBwZXJtIixhbGc6IlIyIEYgUiBVIFIgVScgUicgRicgUiBVMiBSJyBVMiBSIn0se2lkOiJQTEwtVCIsbmFtZToiVCBwZXJtIixhbGc6IlIgVSBSJyBVJyBSJyBGIFIyIFUnIFInIFUnIFIgVSBSJyBGJyJ9LHtpZDoiUExMLVVhIixuYW1lOiJVYSBwZXJtIixhbGc6Ik0yIFUgTSBVMiBNJyBVIE0yIn0se2lkOiJQTEwtVWIiLG5hbWU6IlViIHBlcm0iLGFsZzoiTTIgVScgTSBVMiBNJyBVJyBNMiJ9LHtpZDoiUExMLVYiLG5hbWU6IlYgcGVybSIsYWxnOiJSJyBVIFInIFUnIHkgUicgRicgUjIgVScgUicgVSBSJyBGIFIgRiJ9LHtpZDoiUExMLVkiLG5hbWU6IlkgcGVybSIsYWxnOiJGIFIgVScgUicgVScgUiBVIFInIEYnIFIgVSBSJyBVJyBSJyBGIFIgRicifSx7aWQ6IlBMTC1aIixuYW1lOiJaIHBlcm0iLGFsZzoiTScgVSBNMiBVIE0yIFUgTScgVTIgTTIifV0sbG89W3tpZDoiRjJMMDEiLGFsZzoiVSBSIFUnIFInIn0se2lkOiJGMkwwMiIsYWxnOiJ5IFUnIEwnIFUgTCJ9LHtpZDoiRjJMMDMiLGFsZzoiRicgVScgRiJ9LHtpZDoiRjJMMDQiLGFsZzoiUiBVIFInIn0se2lkOiJGMkwwNSIsYWxnOiJVJyBSIFUgUicgVSBSIFUgUicifSx7aWQ6IkYyTDA2IixhbGc6IlUnIFIgVTIgUicgVTIgUiBVJyBSJyJ9LHtpZDoiRjJMMDciLGFsZzoiVScgUiBVIFInIFUyIFIgVScgUicifSx7aWQ6IkYyTDA4IixhbGc6IlUnIFIgVTIgUicgVSBSIFUnIFInIn0se2lkOiJGMkwwOSIsYWxnOiJVIEYnIFUnIEYgVScgUiBVIFInIn0se2lkOiJGMkwxMCIsYWxnOiJVJyBSIFUnIFInIFUgRicgVScgRiJ9LHtpZDoiRjJMMTEiLGFsZzoiUiBVJyBSJyBVMiBGJyBVJyBGIn0se2lkOiJGMkwxMiIsYWxnOiJVIEYnIFUyIEYgVScgUiBVIFInIn0se2lkOiJGMkwxMyIsYWxnOiJVMiBSIFUgUicgVSBSIFUnIFInIn0se2lkOiJGMkwxNCIsYWxnOiJVIFIgVTIgUicgVSBSIFUnIFInIn0se2lkOiJGMkwxNSIsYWxnOiJSIFUyIFInIFUnIFIgVSBSJyJ9LHtpZDoiRjJMMTYiLGFsZzoiRicgVSBGIFUyIFIgVSBSJyJ9LHtpZDoiRjJMMTciLGFsZzoiVSBSIFUnIFInIFUnIEYnIFUgRiJ9LHtpZDoiRjJMMTgiLGFsZzoiVScgRicgVSBGIFUgUiBVJyBSJyJ9LHtpZDoiRjJMMTkiLGFsZzoiVSBSIFUnIFInIFUgUiBVJyBSJyBVIFIgVScgUicifSx7aWQ6IkYyTDIwIixhbGc6IlUnIFIgVScgUicgVSBSIFUgUicifSx7aWQ6IkYyTDIxIixhbGc6IlUyIFIgVScgUicgVScgRicgVScgRiJ9LHtpZDoiRjJMMjIiLGFsZzoiRicgVSBGIFUnIEYnIFUgRiBVJyBSIFUgUicifV07Y29uc3QgYW89bj0+KHtiYXNlOiJVIixhbW91bnQ6bn0pLGNuPVt7bmFtZToiRlIiLGNvcm5lcjo0LGVkZ2U6OCxYOiJSIixZOiJGIn0se25hbWU6IkZMIixjb3JuZXI6NSxlZGdlOjksWDoiRiIsWToiTCJ9LHtuYW1lOiJCTCIsY29ybmVyOjYsZWRnZToxMCxYOiJMIixZOiJCIn0se25hbWU6IkJSIixjb3JuZXI6NyxlZGdlOjExLFg6IkIiLFk6IlIifV07ZnVuY3Rpb24gZm4obil7bGV0IGU9bmV3IFVpbnQ4QXJyYXkoMjQpLm1hcCgodCxyKT0+ciksbz1uZXcgVWludDhBcnJheSgyNCkubWFwKCh0LHIpPT5yKTtmb3IoY29uc3QgdCBvZiBuKXtjb25zdCByPVhlKHQpLGw9bmV3IFVpbnQ4QXJyYXkoMjQpLHM9bmV3IFVpbnQ4QXJyYXkoMjQpO2ZvcihsZXQgaT0wO2k8MjQ7aSsrKWxbaV09ci5jb3JuZXJbZVtpXV0sc1tpXT1yLmVkZ2Vbb1tpXV07ZT1sLG89c31yZXR1cm57Y29ybmVyOmUsZWRnZTpvfX1mdW5jdGlvbiBjbyhuKXtjb25zdCBlPVtdLG89W107Zm9yKGNvbnN0IHQgb2ZbIiIsIiciLCIyIl0pby5wdXNoKGAke24uWH0gVSR7dH0gJHtuLlh9J2ApLG8ucHVzaChgJHtuLll9JyBVJHt0fSAke24uWX1gKTtmb3IoY29uc3QgdCBvZlsiIiwiVSAiLCJVJyAiLCJVMiAiXSlmb3IoY29uc3QgciBvZiBvKXtjb25zdCBsPXBlKHQrcikscz1mbihsKTtlLnB1c2goe3Rva2VuczpsLGNvcm5lck1hcDpzLmNvcm5lcixlZGdlTWFwOnMuZWRnZX0pfXJldHVybiBlfWZ1bmN0aW9uIGZvKG4pe2NvbnN0IGU9Y28obiksbz1uZXcgVWludDhBcnJheSg1NzYpLmZpbGwoMjU1KSx0PW4uY29ybmVyKjMqMjQrbi5lZGdlKjI7b1t0XT0wO2NvbnN0IHI9ZS5tYXAoaT0+Zm4oc3QoaS50b2tlbnMpKSk7bGV0IGw9W3RdLHM9MDtmb3IoO2wubGVuZ3RoOyl7Y29uc3QgaT1bXTtmb3IoY29uc3QgYSBvZiBsKXtjb25zdCBSPU1hdGguZmxvb3IoYS8yNCksRD1hJTI0O2Zvcihjb25zdCB5IG9mIHIpe2NvbnN0IE09eS5jb3JuZXJbUl0qMjQreS5lZGdlW0RdO29bTV09PT0yNTUmJihvW01dPXMrMSxpLnB1c2goTSkpfX1zKyssbD1pfXJldHVybntkZWY6bixjb21wb3NpdGVzOmUsZGlzdDpvLG92ZXJyaWRlczpuZXcgTWFwfX1mdW5jdGlvbiBSbyhuKXtjb25zdCBlPUVlKHtiYXNlOiJ5IixhbW91bnQ6MX0pLG89WzQsMTMsMjIsMzEsNDAsNDldO2Zvcihjb25zdCB0IG9mIGxvKXtjb25zdHt0b2tlbnM6cn09b24ocGUodC5hbGcpKSxsPVJlKHllLGxlKHIpKTtpZihvLnNvbWUoaT0+bFtpXSE9PXllW2ldKSljb250aW51ZTtsZXQgcz10dDtmb3IobGV0IGk9MDtpPDQ7aSsrKXtjb25zdCBhPWk9PT0wP3I6ci5tYXAoUj0+dW8ocyxSKSk7VW8obix0LmlkLGEpLHM9cHQocyxlKX19fWZ1bmN0aW9uIHB0KG4sZSl7Y29uc3Qgbz1uZXcgSW50OEFycmF5KDU0KTtmb3IobGV0IHQ9MDt0PDU0O3QrKylvW3RdPW5bZVt0XV07cmV0dXJuIG99Y29uc3QgenQ9bmV3IE1hcDtmdW5jdGlvbiB1byhuLGUpe2NvbnN0IG89bi5qb2luKCIsIikrInwiK2UuYmFzZStlLmFtb3VudDtsZXQgdD16dC5nZXQobyk7aWYodClyZXR1cm4gdDtjb25zdCByPXB0KHB0KG4sRWUoZSkpLHF0KG4pKTtmb3IoY29uc3QgbCBvZlsiVSIsIkQiLCJMIiwiUiIsIkYiLCJCIiwiTSIsIkUiLCJTIl0pZm9yKGNvbnN0IHMgb2ZbMSwyLDNdKWlmKFp0KHIsRWUoe2Jhc2U6bCxhbW91bnQ6c30pKSlyZXR1cm4gdD17YmFzZTpsLGFtb3VudDpzfSx6dC5zZXQobyx0KSx0O3Rocm93IG5ldyB6KCJEQl9JTlZBTElEIiwiY29uanVnYXRlIG5vdCBmb3VuZCIpfWZ1bmN0aW9uIFVvKG4sZSxvKXtjb25zdCB0PVplKHN0KG8pKTtsZXQgcj1udWxsO2Zvcihjb25zdCBhIG9mIG4pe2NvbnN0IFI9dC5jcFthLmRlZi5jb3JuZXJdPT09YS5kZWYuY29ybmVyJiZ0LmNvW2EuZGVmLmNvcm5lcl09PT0wLEQ9dC5lcFthLmRlZi5lZGdlXT09PWEuZGVmLmVkZ2UmJnQuZW9bYS5kZWYuZWRnZV09PT0wO2lmKCFSfHwhRCl7aWYocilyZXR1cm47cj1hfX1pZighcilyZXR1cm47Zm9yKGNvbnN0IGEgb2ZbNCw1LDYsN10paWYodC5lcFthXSE9PWF8fHQuZW9bYV0hPT0wKXJldHVybjtjb25zdCBsPW90KHQsci5kZWYuY29ybmVyKSxzPW50KHQsci5kZWYuZWRnZSksaT1sKjI0K3M7ci5vdmVycmlkZXMuaGFzKGkpfHxyLm92ZXJyaWRlcy5zZXQoaSx7dG9rZW5zOm8saWQ6ZX0pfWZ1bmN0aW9uIFplKG4sZSl7bGV0IG89ZT8/YWUoeWUpO2Zvcihjb25zdCB0IG9mIG4pbz1ybihvLHQpO3JldHVybiBvfWxldCBkdD1udWxsLEZ0PW51bGwsUm49bnVsbCx1bj1udWxsO2Z1bmN0aW9uIFVuKCl7ZHR8fChkdD1PZShbNCw1LDYsN10sW10sa2UpLEZ0PWNuLm1hcChmbyksUm8oRnQpLFJuPVduKGlvKSx1bj1RbihzbykpfWZ1bmN0aW9uIGhvKG4sZSl7cmV0dXJuIG4uY3BbZS5jb3JuZXJdPT09ZS5jb3JuZXImJm4uY29bZS5jb3JuZXJdPT09MCYmbi5lcFtlLmVkZ2VdPT09ZS5lZGdlJiZuLmVvW2UuZWRnZV09PT0wfWZ1bmN0aW9uIExvKG4sZSl7Y29uc3Qgbz1bXTtsZXQgdD1uO2ZvcihsZXQgcj0wO3I8NjtyKyspe2NvbnN0IGw9b3QodCxlLmRlZi5jb3JuZXIpLHM9bnQodCxlLmRlZi5lZGdlKSxpPWwqMjQrcztpZihpPT09ZS5kZWYuY29ybmVyKjMqMjQrZS5kZWYuZWRnZSoyKXJldHVybiBnZShvKTtmb3IoY29uc3QgUiBvZlswLDEsMiwzXSl7Y29uc3QgRD1SPT09MD9bXTpbYW8oUildLHk9Uj09PTA/dDpaZShELHQpLE09b3QoeSxlLmRlZi5jb3JuZXIpKjI0K250KHksZS5kZWYuZWRnZSksQT1lLm92ZXJyaWRlcy5nZXQoTSk7aWYoQSlyZXR1cm4gZ2UoWy4uLm8sLi4uRCwuLi5BLnRva2Vuc10pfWlmKGUuZGlzdFtpXSE9PTI1NSl7bGV0IFI9aSxEPXQ7Zm9yKDtlLmRpc3RbUl0+MDspe2NvbnN0IHk9ZS5kaXN0W1JdO2xldCBNPSExO2Zvcihjb25zdCBBIG9mIGUuY29tcG9zaXRlcyl7Y29uc3QgUD1BLmNvcm5lck1hcFtNYXRoLmZsb29yKFIvMjQpXSoyNCtBLmVkZ2VNYXBbUiUyNF07aWYoZS5kaXN0W1BdPT09eS0xKXtvLnB1c2goLi4uQS50b2tlbnMpLEQ9WmUoQS50b2tlbnMsRCksUj1QLE09ITA7YnJlYWt9fWlmKCFNKXRocm93IG5ldyB6KCJGMkxfREVTQ0VOVCIpfXJldHVybiBnZShvKX1jb25zdCBhPW1vKHQsZS5kZWYpO2lmKCFhKXRocm93IG5ldyB6KCJGMkxfU1RVQ0siKTtvLnB1c2goLi4uYSksdD1aZShhLHQpfXRocm93IG5ldyB6KCJGMkxfTE9PUCIpfWZ1bmN0aW9uIG1vKG4sZSl7Y29uc3Qgbz1uLmNwLmluZGV4T2YoZS5jb3JuZXIpLHQ9bi5lcC5pbmRleE9mKGUuZWRnZSk7Zm9yKGNvbnN0IHIgb2YgY24paWYobz09PXIuY29ybmVyJiZyLmNvcm5lciE9PWUuY29ybmVyfHx0PT09ci5lZGdlJiZyLmVkZ2UhPT1lLmVkZ2UpcmV0dXJuIHBlKGAke3IuWH0gVSAke3IuWH0nYCk7cmV0dXJuIG89PT1lLmNvcm5lcnx8dD09PWUuZWRnZT9wZShgJHtlLlh9IFUgJHtlLlh9J2ApOm51bGx9ZnVuY3Rpb24gcG8obil7aWYoVW4oKSxiZShuKSlyZXR1cm57bWV0aG9kOiJjZm9wIixwaGFzZXM6W10sbW92ZXM6W10sdG90YWxNb3ZlczowfTtjb25zdCBlPXNuKFJlKG4sbGUocGUoInoyIikpKSk7aWYoIWV8fCFhZShlKSl0aHJvdyBuZXcgeigiSU5WQUxJRF9TVEFURSIpO2NvbnN0IG89W3tuYW1lOiJvcmllbnQiLG1vdmVzOlsiejIiXX1dO2xldCB0PWU7Y29uc3Qgcj1xZShhZSh0KSxkdCk7aWYoIXIpdGhyb3cgbmV3IHooIkNST1NTX0ZBSUxFRCIpO2NvbnN0IGw9Z2Uocik7dD1SZSh0LGxlKGwpKSxvLnB1c2goe25hbWU6ImNyb3NzIixtb3ZlczpDZShsKX0pO2NvbnN0IHM9bmV3IFNldChGdCk7bGV0IGk9MTtmb3IoO3Muc2l6ZTspe2NvbnN0IHk9YWUodCk7bGV0IE09bnVsbDtmb3IoY29uc3QgQSBvZiBzKXtpZihobyh5LEEuZGVmKSl7cy5kZWxldGUoQSk7Y29udGludWV9Y29uc3QgUD1Mbyh5LEEpOyghTXx8UC5sZW5ndGg8TS50b2tlbnMubGVuZ3RoKSYmKE09e3NvbHZlcjpBLHRva2VuczpQfSl9aWYoIU0pYnJlYWs7cy5kZWxldGUoTS5zb2x2ZXIpLHQ9UmUodCxsZShNLnRva2VucykpLG8ucHVzaCh7bmFtZToiZjJsIixkZXRhaWw6YCMke2krK30gJHtNLnNvbHZlci5kZWYubmFtZX1gLG1vdmVzOkNlKE0udG9rZW5zKX0pfWNvbnN0IGE9bXQoUm4sYWUodCkpO3Q9UmUodCxsZShhLnRva2VucykpLG8ucHVzaCh7bmFtZToib2xsIixkZXRhaWw6YS5kZXRhaWwsbW92ZXM6Q2UoYS50b2tlbnMpfSk7Y29uc3QgUj1tdCh1bixhZSh0KSk7aWYodD1SZSh0LGxlKFIudG9rZW5zKSksby5wdXNoKHtuYW1lOiJwbGwiLGRldGFpbDpSLmRldGFpbCxtb3ZlczpDZShSLnRva2Vucyl9KSwhYmUodCkpdGhyb3cgbmV3IHooIlNPTFZFUl9FUlJPUiIsIkNGT1AgZGlkIG5vdCBzb2x2ZSB0aGUgY3ViZSIpO2NvbnN0IEQ9by5mbGF0TWFwKHk9PnkubW92ZXMpO2lmKCFiZShSZShuLGxlKHBlKEQuam9pbigiICIpKSkpKSl0aHJvdyBuZXcgeigiU09MVkVSX0VSUk9SIiwic29sdXRpb24gZG9lcyBub3Qgc29sdmUgb3JpZ2luYWwgc3RhdGUiKTtyZXR1cm57bWV0aG9kOiJjZm9wIixwaGFzZXM6byxtb3ZlczpELHRvdGFsTW92ZXM6aG4oRCl9fWZ1bmN0aW9uIGhuKG4pe3JldHVybiBuLmZpbHRlcihlPT4hInh5eiIuaW5jbHVkZXMoZVswXSkpLmxlbmd0aH12YXIgRm89W3tpZDoiQ01MTC1PMSIsbmFtZToiTyBBZGphY2VudCBTd2FwIixhbGc6IlIgVSBSJyBGJyBSIFUgUicgVScgUicgRiBSMiBVJyBSJyJ9LHtpZDoiQ01MTC1PMiIsbmFtZToiTyBEaWFnb25hbCBTd2FwIixhbGc6IkYgUiBVJyBSJyBVJyBSIFUgUicgRicgUiBVIFInIFUnIFInIEYgUiBGJyJ9LHtpZDoiQ01MTC1IMSIsbmFtZToiSCBSb3dzIixhbGc6IlIgVTIgUicgVScgUiBVIFInIFUnIFIgVScgUicifSx7aWQ6IkNNTEwtSDIiLG5hbWU6IkggQ29sdW1ucyIsYWxnOiJGIFIgVSBSJyBVJyBSIFUgUicgVScgUiBVIFInIFUnIEYnIn0se2lkOiJDTUxMLUgzIixuYW1lOiJIIFJvdyIsYWxnOiJVIFIgVTIgUjIgRiBSIEYnIFIgVTIgUicifSx7aWQ6IkNNTEwtSDQiLG5hbWU6IkggQ29sdW1uIixhbGc6InIgVScgcjIgRCcgciBVJyByJyBEIHIyIFUgcicifSx7aWQ6IkNNTEwtUGkxIixuYW1lOiJQaSBSaWdodCBCYXIiLGFsZzoiRiBSIFUgUicgVScgUiBVIFInIFUnIEYnIn0se2lkOiJDTUxMLVBpMiIsbmFtZToiUGkgQmFjayBTbGFzaCIsYWxnOiJVIEYgUicgRicgUiBVMiBSIFUnIFInIFUgUiBVMiBSJyJ9LHtpZDoiQ01MTC1QaTMiLG5hbWU6IlBpIFggQ2hlY2tlcmJvYXJkIixhbGc6IlUnIFInIEYgUiBVIEYgVScgUiBVIFInIFUnIEYnIn0se2lkOiJDTUxMLVBpNCIsbmFtZToiUGkgRm9yd2FyZCBTbGFzaCIsYWxnOiJSIFUyIFInIFUnIFIgVSBSJyBVMiBSJyBGIFIgRicifSx7aWQ6IkNNTEwtUGk1IixuYW1lOiJQaSBDb2x1bW5zIixhbGc6IlUnIHIgVScgcjIgRCcgciBVIHInIEQgcjIgVSByJyJ9LHtpZDoiQ01MTC1QaTYiLG5hbWU6IlBpIExlZnQgQmFyIixhbGc6IlUnIEYgUiBVIFInIFUnIEYnIFIgVTIgUicgVScgUiBVJyBSJyJ9LHtpZDoiQ01MTC1VMSIsbmFtZToiVSBGb3J3YXJkIFNsYXNoIixhbGc6IlUyIFIyIEQgUicgVTIgUiBEJyBSJyBVMiBSJyJ9LHtpZDoiQ01MTC1VMiIsbmFtZToiVSBCYWNrIFNsYXNoIixhbGc6IlIyIEQnIFIgVTIgUicgRCBSIFUyIFIifSx7aWQ6IkNNTEwtVTMiLG5hbWU6IlUgRnJvbnQgUm93IixhbGc6IkYgUjIgRCBSJyBVIFIgRCcgUjIgVScgRicifSx7aWQ6IkNNTEwtVTQiLG5hbWU6IlUgUm93cyIsYWxnOiJGIFIgVSBSJyBVJyBGJyJ9LHtpZDoiQ01MTC1VNSIsbmFtZToiVSBYIENoZWNrZXJib2FyZCIsYWxnOiJSIFUyIFInIFUnIFIgVScgUicgRiBSIFUgUicgVScgRicifSx7aWQ6IkNNTEwtVTYiLG5hbWU6IlUgTGVmdCBCYXIiLGFsZzoiRiBSIFUnIFInIFUgUiBVIFInIEYnIn0se2lkOiJDTUxMLVQxIixuYW1lOiJUIExlZnQgQmFyIixhbGc6IlUnIFIgVSBSJyBVJyBSJyBGIFIgRicifSx7aWQ6IkNNTEwtVDIiLG5hbWU6IlQgUmlnaHQgQmFyIixhbGc6IlIgVSBSJyBVJyBSJyBGIFIgRicifSx7aWQ6IkNNTEwtVDMiLG5hbWU6IlQgUm93cyIsYWxnOiJVIFIyIEQgUicgVTIgUiBEJyBSJyBVMiBSJyJ9LHtpZDoiQ01MTC1UNCIsbmFtZToiVCBGcm9udCBSb3ciLGFsZzoicicgVSByIFUyIFIyIEYgUiBGJyBSIn0se2lkOiJDTUxMLVQ1IixuYW1lOiJUIENvbHVtbnMiLGFsZzoicicgRCcgciBVIHInIEQgciBVJyByIFUgcicifSx7aWQ6IkNNTEwtVDYiLG5hbWU6IlQgQmFjayBSb3ciLGFsZzoicjIgRCcgciBVIHInIEQgcjIgVScgcicgVScgciJ9LHtpZDoiQ01MTC1TMSIsbmFtZToiUyBMZWZ0IEJhciIsYWxnOiJSIFUgUicgVSBSIFUyIFInIn0se2lkOiJDTUxMLVMyIixuYW1lOiJTIFJpZ2h0IEJhciIsYWxnOiJVJyBMJyBVMiBMIFUgTCcgVSBMIn0se2lkOiJDTUxMLVMzIixuYW1lOiJTIEJhY2sgU2xhc2giLGFsZzoiVSBSIFUgUicgVSBSJyBGIFIgRicgUiBVMiBSJyJ9LHtpZDoiQ01MTC1TNCIsbmFtZToiUyBSb3dzIixhbGc6IlIgVSBSJyBVJyBSJyBGIFIgRicgUiBVIFInIFUgUiBVMiBSJyJ9LHtpZDoiQ01MTC1TNSIsbmFtZToiUyBDb2x1bW5zIixhbGc6IkYgUiBVIFInIFUnIEYnIFIgVSBSJyBVIFIgVTIgUicifSx7aWQ6IkNNTEwtUzYiLG5hbWU6IlMgWCBDaGVja2VyYm9hcmQiLGFsZzoiVSBSIFUgUicgVScgUicgRiBSIEYnIFIgVSBSJyBVIFIgVTIgUicifSx7aWQ6IkNNTEwtQVMxIixuYW1lOiJBUyBSaWdodCBCYXIiLGFsZzoiVSBSIFUyIFInIFUnIFIgVScgUicifSx7aWQ6IkNNTEwtQVMyIixuYW1lOiJBUyBMZWZ0IEJhciIsYWxnOiJMJyBVMiBMIFUgTCcgVSBMIn0se2lkOiJDTUxMLUFTMyIsbmFtZToiQVMgRm9yd2FyZCBTbGFzaCIsYWxnOiJSIFUyIFInIFUnIFIgVScgUicgVScgUiBVIFInIEYnIFIgVSBSJyBVJyBSJyBGIFIyIFUnIFInIn0se2lkOiJDTUxMLUFTNCIsbmFtZToiQVMgQ29sdW1ucyIsYWxnOiJGIFIgVSBSJyBVJyBGJyBVIFIgVTIgUicgVScgUiBVJyBSJyJ9LHtpZDoiQ01MTC1BUzUiLG5hbWU6IkFTIFJvd3MiLGFsZzoiUiBVIFInIFUnIFInIEYgUiBGJyBVMiBSIFUyIFInIFUnIFIgVScgUicifSx7aWQ6IkNNTEwtQVM2IixuYW1lOiJBUyBYIENoZWNrZXJib2FyZCIsYWxnOiJVIEYgUiBVJyBSJyBVJyBSIFUgUicgRicgUiBVMiBSJyBVJyBSIFUnIFInIn0se2lkOiJDTUxMLUwxIixuYW1lOiJMIE1pcnJvciIsYWxnOiJGIFIgVScgUicgVScgUiBVIFInIEYnIn0se2lkOiJDTUxMLUwyIixuYW1lOiJMIEludmVyc2UiLGFsZzoiRiBSJyBGJyBSIFUgUiBVJyBSJyJ9LHtpZDoiQ01MTC1MMyIsbmFtZToiTCBQdXJlIixhbGc6IlIgVTIgUicgVScgUiBVIFInIFUnIFIgVSBSJyBVJyBSIFUnIFInIn0se2lkOiJDTUxMLUw0IixuYW1lOiJMIEZyb250IENvbW11dGF0b3IiLGFsZzoiUiBVMiBSIEQgUicgVTIgUiBEJyBSMiJ9LHtpZDoiQ01MTC1MNSIsbmFtZToiTCBEaWFnIixhbGc6IlInIFUnIFIgVSBSJyBGJyBSIFUgUicgVScgUicgRiBSMiJ9LHtpZDoiQ01MTC1MNiIsbmFtZToiTCBCYWNrIENvbW11dGF0b3IiLGFsZzoiUicgVTIgUicgRCcgUiBVMiBSJyBEIFIyIn1dO2NvbnN0IGJ0PVswLDEsMiwzLDUsN10sTXQ9bmV3IEludDhBcnJheSgxMikuZmlsbCgtMSk7YnQuZm9yRWFjaCgobixlKT0+e010W25dPWV9KTtmdW5jdGlvbiBHZShuKXtsZXQgZT0wO2ZvcihsZXQgbz0wO288NjtvKyspe2xldCB0PTA7Zm9yKGxldCByPW8rMTtyPDY7cisrKW5bcl08bltvXSYmdCsrO2U9ZSooNi1vKSt0fXJldHVybiBlfWNvbnN0IFZ0PVsxMjAsMjQsNiwyLDEsMV07ZnVuY3Rpb24ga3Qobil7Y29uc3QgZT1bMCwxLDIsMyw0LDVdLG89W107bGV0IHQ9bjtmb3IobGV0IHI9MDtyPDY7cisrKXtjb25zdCBsPU1hdGguZmxvb3IodC9WdFtyXSk7dCU9VnRbcl0sby5wdXNoKGUuc3BsaWNlKGwsMSlbMF0pfXJldHVybiBvfWNvbnN0IHJ0PTcyMCo2NCo0KjQ7ZnVuY3Rpb24gWWUobixlLG8sdCl7cmV0dXJuKChuKjY0K2UpKjQrbykqNCt0fWZ1bmN0aW9uIGdvKCl7Y29uc3Qgbj1sdC5tYXAoYT0+e2NvbnN0IFI9WGUoYSkuZWRnZSxEPW5ldyBVaW50OEFycmF5KDEyKTtmb3IobGV0IE09MDtNPDY7TSsrKXtjb25zdCBBPWJ0W01dO2ZvcihsZXQgUD0wO1A8MjtQKyspe2NvbnN0IFQ9UltBKjIrUF0sVj1NdFtUPj4xXTtpZihWPDApdGhyb3cgbmV3IEVycm9yKCJMU0Ugc2xvdCBlc2NhcGVkIik7RFtNKjIrUF09VioyKyhUJjEpfX1jb25zdCB5PWEuYmFzZT09PSJNIjtyZXR1cm57c2xvdE1hcDpELGNlbnRlckRlbHRhOnk/YS5hbW91bnQ6MCxjb3JuZXJEZWx0YTp5PzA6YS5hbW91bnR9fSksZT1uZXcgVWludDhBcnJheShydCkuZmlsbCgyNTUpLG89WWUoR2UoWzAsMSwyLDMsNCw1XSksMCwwLDApO2Vbb109MDtsZXQgdD1bb10scj0wO2NvbnN0IGw9bmV3IEFycmF5KDYpLHM9bmV3IEFycmF5KDYpLGk9bmV3IEFycmF5KDYpO2Zvcig7dC5sZW5ndGg7KXtjb25zdCBhPVtdO2Zvcihjb25zdCBSIG9mIHQpe2NvbnN0IEQ9UiYzLHk9Uj4+MiYzLE09Uj4+NCY2MyxBPVI+PjEwLFA9a3QoQSk7Zm9yKGxldCBUPTA7VDw2O1QrKylsW1RdPVBbVF07Zm9yKGNvbnN0IFQgb2Ygbil7Zm9yKGxldCBJPTA7STw2O0krKyl7Y29uc3QgSj1ULnNsb3RNYXBbSSoyKyhNPj5JJjEpXTtzW0o+PjFdPWxbSV0saVtKPj4xXT1KJjF9bGV0IFY9MDtmb3IobGV0IEk9MDtJPDY7SSsrKVZ8PWlbSV08PEk7Y29uc3QgWT1ZZShHZShzKSxWLCh5K1QuY2VudGVyRGVsdGEpJTQsKEQrVC5jb3JuZXJEZWx0YSklNCk7ZVtZXT09PTI1NSYmKGVbWV09cisxLGEucHVzaChZKSl9fXIrKyx0PWF9cmV0dXJue2Rpc3Q6ZSx0cmFuc2l0aW9uczpufX1jb25zdCBMbj1bMCwxLDIsMyw0LDVdLG1uPVswLDEsMiw0XSxwbj1bMSwzLDQsNV07ZnVuY3Rpb24gd28obixlKXtjb25zdCBvPW4mMyx0PW4+PjImMyxyPW4+PjQmNjMsbD1uPj4xMCxzPWt0KGwpLGk9bmV3IEFycmF5KDYpO2xldCBhPTA7Zm9yKGxldCBSPTA7Ujw2O1IrKyl7Y29uc3QgRD1lLnNsb3RNYXBbUioyKyhyPj5SJjEpXTtpW0Q+PjFdPXNbUl0sYXw9KEQmMSk8PChEPj4xKX1yZXR1cm4gWWUoR2UoaSksYSwodCtlLmNlbnRlckRlbHRhKSU0LChvK2UuY29ybmVyRGVsdGEpJTQpfWZ1bmN0aW9uIFJ0KG4sZSxvKXtjb25zdCB0PW5ldyBVaW50OEFycmF5KHJ0KS5maWxsKDI1NSk7bGV0IHI9W107Zm9yKGNvbnN0IHMgb2YgZSl0W3NdPTAsci5wdXNoKHMpO2xldCBsPTA7Zm9yKDtyLmxlbmd0aDspe2NvbnN0IHM9W107Zm9yKGNvbnN0IGkgb2Ygcilmb3IoY29uc3QgYSBvZiBvKXtjb25zdCBSPXdvKGksbi50cmFuc2l0aW9uc1thXSk7dFtSXT09PTI1NSYmKHRbUl09bCsxLHMucHVzaChSKSl9bCsrLHI9c31yZXR1cm4gdH1mdW5jdGlvbiB2byhuKXtjb25zdCBlPVllKEdlKFswLDEsMiwzLDQsNV0pLDAsMCwwKSxvPVJ0KG4sW2VdLHBuKSx0PVtdO2ZvcihsZXQgaT0wO2k8cnQ7aSsrKXtpZihvW2ldPT09MjU1fHxuLmRpc3RbaV09PT0yNTV8fGk+PjQmNjMmNSljb250aW51ZTtjb25zdCBSPWt0KGk+PjEwKTtSWzBdPT09MCYmUlsyXT09PTImJnQucHVzaChpKX1jb25zdCByPVJ0KG4sdCxtbiksbD1bXTtmb3IobGV0IGk9MDtpPHJ0O2krKylyW2ldPT09MjU1fHxuLmRpc3RbaV09PT0yNTV8fGk+PjQmNjN8fGwucHVzaChpKTtyZXR1cm57ZW86UnQobixsLExuKSxscjpyLGVwOm99fWZ1bmN0aW9uIHV0KG4sZSxvKXtsZXQgdD1uLHI9aXQodCk7aWYoZVtyXT09PTI1NSlyZXR1cm4gbnVsbDtjb25zdCBsPVtdO2xldCBzPTA7Zm9yKDtlW3JdPjA7KXtpZihzKys+NDApcmV0dXJuIG51bGw7Y29uc3QgaT1lW3JdO2xldCBhPSExO2Zvcihjb25zdCBSIG9mIG8pe2NvbnN0IEQ9bHRbUl0seT1SZSh0LGxlKFtEXSkpLE09aXQoeSk7aWYoZVtNXT09PWktMSl7bC5wdXNoKEQpLHQ9eSxyPU0sYT0hMDticmVha319aWYoIWEpcmV0dXJuIG51bGx9cmV0dXJuIGx9ZnVuY3Rpb24gaXQobil7Y29uc3QgZT1hZShuKTtpZighZSl0aHJvdyBuZXcgeigiSU5WQUxJRF9TVEFURSIpO2NvbnN0IG89bmV3IEFycmF5KDYpO2xldCB0PTA7Zm9yKGxldCBpPTA7aTw2O2krKyl7Y29uc3QgYT1idFtpXSxSPU10W2UuZXBbYV1dO2lmKFI8MCl0aHJvdyBuZXcgeigiTFNFX1BSRUNPTkRJVElPTiIpO29baV09Uix0fD1lLmVvW2FdPDxpfWNvbnN0IGw9W25bNF0sblsyMl0sblszMV0sbls0OV1dLmluZGV4T2YoIlUiKTtpZihsPDApdGhyb3cgbmV3IHooIkxTRV9QUkVDT05ESVRJT04iKTtjb25zdCBzPWUuY3AuaW5kZXhPZigwKTtpZihzPDB8fHM+Myl0aHJvdyBuZXcgeigiTFNFX1BSRUNPTkRJVElPTiIpO3JldHVybiBZZShHZShvKSx0LGwscyl9ZnVuY3Rpb24gRG8obixlKXtsZXQgbz1uLHQ9aXQobyk7aWYoZS5kaXN0W3RdPT09MjU1KXRocm93IG5ldyB6KCJMU0VfVU5SRUFDSEFCTEUiKTtjb25zdCByPVtdO2xldCBsPTA7Zm9yKDtlLmRpc3RbdF0+MDspe2lmKGwrKz4zMCl0aHJvdyBuZXcgeigiTFNFX0RFU0NFTlQiKTtjb25zdCBzPWUuZGlzdFt0XTtsZXQgaT0hMTtmb3IoY29uc3QgYSBvZiBsdCl7Y29uc3QgUj1SZShvLGxlKFthXSkpLEQ9aXQoUik7aWYoZS5kaXN0W0RdPT09cy0xKXtyLnB1c2goYSksbz1SLHQ9RCxpPSEwO2JyZWFrfX1pZighaSl0aHJvdyBuZXcgeigiTFNFX0RFU0NFTlQiKX1yZXR1cm4gcn1sZXQgZ3Q9bnVsbCxkbj1udWxsLEZuPW51bGwsZ249W10sd249bnVsbCx2bj1bXSx3dD1udWxsLFFlPW51bGwsRG49bnVsbDtmdW5jdGlvbiBTbigpe2d0fHwoZ3Q9T2UoWzksMTAsNl0sWzUsNl0sa2UpLGRuPU9lKFs4LDExLDRdLFs0LDddLEhlKSxGbj1PZShbNl0sW10sa2UpLGduPVt7bmFtZToiRkwiLHRhYmxlOk9lKFs2LDldLFs1XSxrZSl9LHtuYW1lOiJCTCIsdGFibGU6T2UoWzYsMTBdLFs2XSxrZSl9XSx3bj1PZShbNF0sW10sSGUpLHZuPVt7bmFtZToiRlIiLHRhYmxlOk9lKFs0LDhdLFs0XSxIZSl9LHtuYW1lOiJCUiIsdGFibGU6T2UoWzQsMTFdLFs3XSxIZSl9XSx3dD1nbygpLFFlPXZvKHd0KSxEbj1ubyhGbykpfWZ1bmN0aW9uIFNvKG4pe2lmKFNuKCksYmUobikpcmV0dXJue21ldGhvZDoicm91eCIscGhhc2VzOltdLG1vdmVzOltdLHRvdGFsTW92ZXM6MH07Y29uc3QgZT1zbihSZShuLGxlKHBlKCJ6MiIpKSkpO2lmKCFlfHwhYWUoZSkpdGhyb3cgbmV3IHooIklOVkFMSURfU1RBVEUiKTtjb25zdCBvPVt7bmFtZToib3JpZW50Iixtb3ZlczpbInoyIl19XTtsZXQgdD1lO2NvbnN0IHI9KFIsRCx5KT0+e2NvbnN0IE09Z2UoRCk7dD1SZSh0LGxlKE0pKSxvLnB1c2goe25hbWU6UixkZXRhaWw6eSxtb3ZlczpDZShNKX0pfSxsPShSLEQseSxNKT0+e2NvbnN0IEE9cWUoYWUodCksRCk7aWYoIUEpdGhyb3cgbmV3IHooYCR7Ui50b1VwcGVyQ2FzZSgpfV9GQUlMRURgKTtBLmxlbmd0aCYmcihgJHtSfV9lZGdlYCxBKTtjb25zdCBQPXkubWFwKFY9Pih7bmFtZTpWLm5hbWUsdG9rZW5zOnFlKGFlKHQpLFYudGFibGUpfSkpO2lmKFAuc29tZShWPT4hVi50b2tlbnMpKXRocm93IG5ldyB6KGAke1IudG9VcHBlckNhc2UoKX1fRkFJTEVEYCk7UC5zb3J0KChWLFkpPT5WLnRva2Vucy5sZW5ndGgtWS50b2tlbnMubGVuZ3RoKSxQWzBdLnRva2Vucy5sZW5ndGgmJnIoYCR7Un1fcGFpcjFgLFBbMF0udG9rZW5zLFBbMF0ubmFtZSk7Y29uc3QgVD1xZShhZSh0KSxNKTtpZighVCl0aHJvdyBuZXcgeihgJHtSLnRvVXBwZXJDYXNlKCl9X0ZBSUxFRGApO1QubGVuZ3RoJiZyKGAke1J9X3BhaXIyYCxULFBbMV0ubmFtZSl9O2woImZiIixGbixnbixndCksbCgic2IiLHduLHZuLGRuKTtjb25zdCBzPW10KERuLGFlKHQpKTtyKCJjbWxsIixzLnRva2VucyxzLmRldGFpbCk7Y29uc3QgaT11dCh0LFFlLmVvLExuKTtpZihpKXtpLmxlbmd0aCYmcigibHNlX2VvIixpKTtjb25zdCBSPXV0KHQsUWUubHIsbW4pO2lmKCFSKXRocm93IG5ldyB6KCJMU0VfNEJfRkFJTEVEIik7Ui5sZW5ndGgmJnIoImxzZV9sciIsUik7Y29uc3QgRD11dCh0LFFlLmVwLHBuKTtpZighRCl0aHJvdyBuZXcgeigiTFNFXzRDX0ZBSUxFRCIpO0QubGVuZ3RoJiZyKCJsc2VfZXAiLEQpfWVsc2UgcigibHNlIixEbyh0LHd0KSk7aWYoIWJlKHQpKXRocm93IG5ldyB6KCJTT0xWRVJfRVJST1IiLCJSb3V4IGRpZCBub3Qgc29sdmUgdGhlIGN1YmUiKTtjb25zdCBhPW8uZmxhdE1hcChSPT5SLm1vdmVzKTtpZighYmUoUmUobixsZShwZShhLmpvaW4oIiAiKSkpKSkpdGhyb3cgbmV3IHooIlNPTFZFUl9FUlJPUiIsInNvbHV0aW9uIGRvZXMgbm90IHNvbHZlIG9yaWdpbmFsIHN0YXRlIik7cmV0dXJue21ldGhvZDoicm91eCIscGhhc2VzOm8sbW92ZXM6YSx0b3RhbE1vdmVzOmhuKGEpfX12YXIgT249dHlwZW9mIGdsb2JhbFRoaXM8InUiP2dsb2JhbFRoaXM6dHlwZW9mIHdpbmRvdzwidSI/d2luZG93OnR5cGVvZiBnbG9iYWw8InUiP2dsb2JhbDp0eXBlb2Ygc2VsZjwidSI/c2VsZjp7fTtmdW5jdGlvbiBPbyhuKXtyZXR1cm4gbiYmbi5fX2VzTW9kdWxlJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobiwiZGVmYXVsdCIpP24uZGVmYXVsdDpufXZhciB5bj17ZXhwb3J0czp7fX07KGZ1bmN0aW9uKG4peyhmdW5jdGlvbigpe3ZhciBlLG8sdCxyLGwscyxpLGEsUixELHksTSxBLFAsVCxWLFksSSxKLG9lLFEsWixjZSx1ZSxVZSxMZSxtZSxCZSxXZSxNZSxkZSxGZSx3ZTtbSixJLFAsbCxZLGVdPVswLDEsMiwzLDQsNV0sW21lLGNlLFVlLFEsUix5LGksQV09WzAsMSwyLDMsNCw1LDYsN10sW0xlLFosdWUsb2UsTSxhLEQscyxWLFQsbyx0XT1bMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMV0sW1dlLGRlLHdlXT1mdW5jdGlvbigpe3ZhciB0ZSxyZSxuZSxOLFcsZztyZXR1cm4gZz1mdW5jdGlvbihkKXtyZXR1cm4gZC0xfSxXPWZ1bmN0aW9uKGQpe3JldHVybiBnKDkpK2R9LG5lPWZ1bmN0aW9uKGQpe3JldHVybiBXKDkpK2R9LHJlPWZ1bmN0aW9uKGQpe3JldHVybiBuZSg5KStkfSxOPWZ1bmN0aW9uKGQpe3JldHVybiByZSg5KStkfSx0ZT1mdW5jdGlvbihkKXtyZXR1cm4gTig5KStkfSxbWzQsMTMsMjIsMzEsNDAsNDldLFtbZyg5KSxXKDEpLG5lKDMpXSxbZyg3KSxuZSgxKSxOKDMpXSxbZygxKSxOKDEpLHRlKDMpXSxbZygzKSx0ZSgxKSxXKDMpXSxbcmUoMyksbmUoOSksVyg3KV0sW3JlKDEpLE4oOSksbmUoNyldLFtyZSg3KSx0ZSg5KSxOKDcpXSxbcmUoOSksVyg5KSx0ZSg3KV1dLFtbZyg2KSxXKDIpXSxbZyg4KSxuZSgyKV0sW2coNCksTigyKV0sW2coMiksdGUoMildLFtyZSg2KSxXKDgpXSxbcmUoMiksbmUoOCldLFtyZSg0KSxOKDgpXSxbcmUoOCksdGUoOCldLFtuZSg2KSxXKDQpXSxbbmUoNCksTig2KV0sW3RlKDYpLE4oNCldLFt0ZSg0KSxXKDYpXV1dfSgpLEJlPVsiVSIsIlIiLCJGIiwiRCIsIkwiLCJCIl0sTWU9W1siVSIsIlIiLCJGIl0sWyJVIiwiRiIsIkwiXSxbIlUiLCJMIiwiQiJdLFsiVSIsIkIiLCJSIl0sWyJEIiwiRiIsIlIiXSxbIkQiLCJMIiwiRiJdLFsiRCIsIkIiLCJMIl0sWyJEIiwiUiIsIkIiXV0sRmU9W1siVSIsIlIiXSxbIlUiLCJGIl0sWyJVIiwiTCJdLFsiVSIsIkIiXSxbIkQiLCJSIl0sWyJEIiwiRiJdLFsiRCIsIkwiXSxbIkQiLCJCIl0sWyJGIiwiUiJdLFsiRiIsIkwiXSxbIkIiLCJMIl0sWyJCIiwiUiJdXSxyPWZ1bmN0aW9uKCl7dmFyIHRlLHJlLG5lO2NsYXNzIE57Y29uc3RydWN0b3IoZyl7ZyE9bnVsbD90aGlzLmluaXQoZyk6dGhpcy5pZGVudGl0eSgpLHRoaXMubmV3Q2VudGVyPWZ1bmN0aW9uKCl7dmFyIGQscDtmb3IocD1bXSxkPTA7ZDw9NTsrK2QpcC5wdXNoKDApO3JldHVybiBwfSgpLHRoaXMubmV3Q3A9ZnVuY3Rpb24oKXt2YXIgZCxwO2ZvcihwPVtdLGQ9MDtkPD03OysrZClwLnB1c2goMCk7cmV0dXJuIHB9KCksdGhpcy5uZXdFcD1mdW5jdGlvbigpe3ZhciBkLHA7Zm9yKHA9W10sZD0wO2Q8PTExOysrZClwLnB1c2goMCk7cmV0dXJuIHB9KCksdGhpcy5uZXdDbz1mdW5jdGlvbigpe3ZhciBkLHA7Zm9yKHA9W10sZD0wO2Q8PTc7KytkKXAucHVzaCgwKTtyZXR1cm4gcH0oKSx0aGlzLm5ld0VvPWZ1bmN0aW9uKCl7dmFyIGQscDtmb3IocD1bXSxkPTA7ZDw9MTE7KytkKXAucHVzaCgwKTtyZXR1cm4gcH0oKX1pbml0KGcpe3JldHVybiB0aGlzLmNlbnRlcj1nLmNlbnRlci5zbGljZSgwKSx0aGlzLmNvPWcuY28uc2xpY2UoMCksdGhpcy5lcD1nLmVwLnNsaWNlKDApLHRoaXMuY3A9Zy5jcC5zbGljZSgwKSx0aGlzLmVvPWcuZW8uc2xpY2UoMCl9aWRlbnRpdHkoKXtyZXR1cm4gdGhpcy5jZW50ZXI9WzAsMSwyLDMsNCw1XSx0aGlzLmNwPVswLDEsMiwzLDQsNSw2LDddLHRoaXMuY289ZnVuY3Rpb24oKXt2YXIgZyxkO2ZvcihkPVtdLGc9MDtnPD03OysrZylkLnB1c2goMCk7cmV0dXJuIGR9KCksdGhpcy5lcD1bMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMV0sdGhpcy5lbz1mdW5jdGlvbigpe3ZhciBnLGQ7Zm9yKGQ9W10sZz0wO2c8PTExOysrZylkLnB1c2goMCk7cmV0dXJuIGR9KCl9dG9KU09OKCl7cmV0dXJue2NlbnRlcjp0aGlzLmNlbnRlcixjcDp0aGlzLmNwLGNvOnRoaXMuY28sZXA6dGhpcy5lcCxlbzp0aGlzLmVvfX1hc1N0cmluZygpe3ZhciBnLGQscCx2LEUsTyxqLEssayxfLCQ7Zm9yKCQ9W10scD12PTA7djw9NTtwPSsrdikkWzkqcCs0XT1CZVt0aGlzLmNlbnRlcltwXV07Zm9yKHA9RT0wO0U8PTc7cD0rK0UpZm9yKGc9dGhpcy5jcFtwXSxrPXRoaXMuY29bcF0saj1PPTA7Tzw9MjtqPSsrTykkW2RlW3BdWyhqK2spJTNdXT1NZVtnXVtqXTtmb3IocD1LPTA7Szw9MTE7cD0rK0spZm9yKGQ9dGhpcy5lcFtwXSxrPXRoaXMuZW9bcF0saj1fPTA7Xzw9MTtqPSsrXykkW3dlW3BdWyhqK2spJTJdXT1GZVtkXVtqXTtyZXR1cm4gJC5qb2luKCIiKX1zdGF0aWMgZnJvbVN0cmluZyhnKXt2YXIgZCxwLHYsRSxPLGosSyxrLF8sJCxHLGllLHNlLGM7Zm9yKHY9bmV3IE4sRT1qPTA7ajw9NTtFPSsrailmb3IoTz1LPTA7Szw9NTtPPSsrSylnWzkqRSs0XT09PUJlW09dJiYodi5jZW50ZXJbRV09Tyk7Zm9yKEU9az0wO2s8PTc7RT0rK2spe2ZvcigkPV89MDtfPD0yJiYhKChjPWdbZGVbRV1bJF1dKT09PSJVInx8Yz09PSJEIik7JD0rK18pO2ZvcihkPWdbZGVbRV1bKCQrMSklM11dLHA9Z1tkZVtFXVsoJCsyKSUzXV0sTz1HPTA7Rzw9NztPPSsrRylkPT09TWVbT11bMV0mJnA9PT1NZVtPXVsyXSYmKHYuY3BbRV09Tyx2LmNvW0VdPSQlMyl9Zm9yKEU9aWU9MDtpZTw9MTE7RT0rK2llKWZvcihPPXNlPTA7c2U8PTExO089KytzZSl7aWYoZ1t3ZVtFXVswXV09PT1GZVtPXVswXSYmZ1t3ZVtFXVsxXV09PT1GZVtPXVsxXSl7di5lcFtFXT1PLHYuZW9bRV09MDticmVha31pZihnW3dlW0VdWzBdXT09PUZlW09dWzFdJiZnW3dlW0VdWzFdXT09PUZlW09dWzBdKXt2LmVwW0VdPU8sdi5lb1tFXT0xO2JyZWFrfX1yZXR1cm4gdn1jbG9uZSgpe3JldHVybiBuZXcgTih0aGlzLnRvSlNPTigpKX1zdGF0aWMgcmFuZG9tKCl7cmV0dXJuIG5ldyBOKCkucmFuZG9taXplKCl9aXNTb2x2ZWQoKXt2YXIgZyxkLHAsdixFLE8sajtmb3IocD10aGlzLmNsb25lKCkscC5tb3ZlKHAudXByaWdodCgpKSxkPUU9MDtFPD01O2Q9KytFKWlmKHAuY2VudGVyW2RdIT09ZClyZXR1cm4hMTtmb3IoZz1PPTA7Tzw9NztnPSsrTylpZihwLmNwW2ddIT09Z3x8cC5jb1tnXSE9PTApcmV0dXJuITE7Zm9yKHY9aj0wO2o8PTExO3Y9KytqKWlmKHAuZXBbdl0hPT12fHxwLmVvW3ZdIT09MClyZXR1cm4hMTtyZXR1cm4hMH1jZW50ZXJNdWx0aXBseShnKXt2YXIgZCxwLHY7Zm9yKHY9cD0wO3A8PTU7dj0rK3ApZD1nLmNlbnRlclt2XSx0aGlzLm5ld0NlbnRlclt2XT10aGlzLmNlbnRlcltkXTtyZXR1cm5bdGhpcy5jZW50ZXIsdGhpcy5uZXdDZW50ZXJdPVt0aGlzLm5ld0NlbnRlcix0aGlzLmNlbnRlcl0sdGhpc31jb3JuZXJNdWx0aXBseShnKXt2YXIgZCxwLHY7Zm9yKHY9cD0wO3A8PTc7dj0rK3ApZD1nLmNwW3ZdLHRoaXMubmV3Q3Bbdl09dGhpcy5jcFtkXSx0aGlzLm5ld0NvW3ZdPSh0aGlzLmNvW2RdK2cuY29bdl0pJTM7cmV0dXJuW3RoaXMuY3AsdGhpcy5uZXdDcF09W3RoaXMubmV3Q3AsdGhpcy5jcF0sW3RoaXMuY28sdGhpcy5uZXdDb109W3RoaXMubmV3Q28sdGhpcy5jb10sdGhpc31lZGdlTXVsdGlwbHkoZyl7dmFyIGQscCx2O2Zvcih2PXA9MDtwPD0xMTt2PSsrcClkPWcuZXBbdl0sdGhpcy5uZXdFcFt2XT10aGlzLmVwW2RdLHRoaXMubmV3RW9bdl09KHRoaXMuZW9bZF0rZy5lb1t2XSklMjtyZXR1cm5bdGhpcy5lcCx0aGlzLm5ld0VwXT1bdGhpcy5uZXdFcCx0aGlzLmVwXSxbdGhpcy5lbyx0aGlzLm5ld0VvXT1bdGhpcy5uZXdFbyx0aGlzLmVvXSx0aGlzfW11bHRpcGx5KGcpe3JldHVybiB0aGlzLmNlbnRlck11bHRpcGx5KGcpLHRoaXMuY29ybmVyTXVsdGlwbHkoZyksdGhpcy5lZGdlTXVsdGlwbHkoZyksdGhpc31tb3ZlKGcpe3ZhciBkLHAsdixFLE8saixLLGs7Zm9yKEs9bmUoZykscD0wLEU9Sy5sZW5ndGg7cDxFO3ArKylmb3IoTz1LW3BdLGQ9Ty8zfDAsaj1PJTMsdj0wLGs9ajswPD1rP3Y8PWs6dj49azswPD1rPysrdjotLXYpdGhpcy5tdWx0aXBseShOLm1vdmVzW2RdKTtyZXR1cm4gdGhpc311cHJpZ2h0KCl7dmFyIGcsZCxwLHYsRSxPO2ZvcihnPXRoaXMuY2xvbmUoKSxPPVtdLGQ9dj0wO3Y8PTUmJmcuY2VudGVyW2RdIT09UDtkPSsrdik7c3dpdGNoKGQpe2Nhc2UgbDpPLnB1c2goIngiKTticmVhaztjYXNlIEo6Ty5wdXNoKCJ4JyIpO2JyZWFrO2Nhc2UgZTpPLnB1c2goIngyIik7YnJlYWs7Y2FzZSBJOk8ucHVzaCgieSIpO2JyZWFrO2Nhc2UgWTpPLnB1c2goInknIil9Zm9yKE8ubGVuZ3RoJiZnLm1vdmUoT1swXSkscD1FPTA7RTw9NSYmZy5jZW50ZXJbcF0hPT1KO3A9KytFKTtzd2l0Y2gocCl7Y2FzZSBZOk8ucHVzaCgieiIpO2JyZWFrO2Nhc2UgSTpPLnB1c2goInonIik7YnJlYWs7Y2FzZSBsOk8ucHVzaCgiejIiKX1yZXR1cm4gTy5qb2luKCIgIil9c3RhdGljIGludmVyc2UoZyl7dmFyIGQscCx2LEUsTyxqLEs7aWYoaj1mdW5jdGlvbigpe3ZhciBrLF8sJCxHO2ZvcigkPW5lKGcpLEc9W10saz0wLF89JC5sZW5ndGg7azxfO2srKylFPSRba10sZD1FLzN8MCxPPUUlMyxHLnB1c2goZCozKy0oTy0xKSsxKTtyZXR1cm4gR30oKSxqLnJldmVyc2UoKSx0eXBlb2YgZz09InN0cmluZyIpe2ZvcihLPSIiLHA9MCx2PWoubGVuZ3RoO3A8djtwKyspRT1qW3BdLGQ9RS8zfDAsTz1FJTMsSys9dGVbZF0sTz09PTE/Sys9IjIiOk89PT0yJiYoSys9IiciKSxLKz0iICI7cmV0dXJuIEsuc3Vic3RyaW5nKDAsSy5sZW5ndGgtMSl9ZWxzZSByZXR1cm4gZy5sZW5ndGghPW51bGw/ajpqWzBdfX1yZXR1cm4gTi5wcm90b3R5cGUucmFuZG9taXplPWZ1bmN0aW9uKCl7dmFyIFcsZyxkLHAsdixFLE8saixLO3JldHVybiBFPWZ1bmN0aW9uKGssXyl7cmV0dXJuIGsrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihfLWsrMSkpfSxLPWZ1bmN0aW9uKGspe3ZhciBfLCQ7Zm9yKF89ay5sZW5ndGg7XyE9PTA7KSQ9RSgwLF8tMSksXy09MSxrW19dLFtrW19dLGtbJF1dPVtrWyRdLGtbX11dfSxwPWZ1bmN0aW9uKGspe3ZhciBfLCQsRyxpZSxzZSxjLHU7Zm9yKHNlPTAsdT1mdW5jdGlvbigpe3ZhciBVLGgsZjtmb3IoZj1bXSxVPTAsaD1rLmxlbmd0aC0xOzA8PWg/VTw9aDpVPj1oOzA8PWg/KytVOi0tVSlmLnB1c2goITEpO3JldHVybiBmfSgpOzspe2ZvcihfPS0xLEc9aWU9MCxjPWsubGVuZ3RoLTE7MDw9Yz9pZTw9YzppZT49YztHPTA8PWM/KytpZTotLWllKWlmKCF1W0ddKXtfPUc7YnJlYWt9aWYoXz09PS0xKWJyZWFrO2ZvcigkPTA7IXVbX107KXVbX109ITAsJCsrLF89a1tfXTtzZSs9JCsxfXJldHVybiBzZX0sVz1mdW5jdGlvbihrLF8pe3ZhciAkO3JldHVybiAkPXAoXykrcChrKSwkJTI9PT0wfSxkPWZ1bmN0aW9uKGssXyl7Zm9yKEsoXyksSyhrKTshVyhrLF8pOylLKF8pLEsoayl9LE89ZnVuY3Rpb24oayxfKXt2YXIgJCxHLGllLHNlO2ZvcihpZT0wLCQ9Rz0wLHNlPWsubGVuZ3RoLTE7MDw9c2U/Rzw9c2U6Rz49c2U7JD0wPD1zZT8rK0c6LS1HKWllKz1rWyRdPUUoMCxfLTEpfSx2PWZ1bmN0aW9uKGssXyl7cmV0dXJuIGsucmVkdWNlKGZ1bmN0aW9uKCQsRyl7cmV0dXJuICQrR30pJV89PT0wfSxnPWZ1bmN0aW9uKGssXyl7Zm9yKE8oaywzKTshdihrLDMpOylPKGssMyk7Zm9yKE8oXywyKTshdihfLDIpOylPKF8sMil9LGo9ZnVuY3Rpb24oKXtyZXR1cm4gZCh0aGlzLmNwLHRoaXMuZXApLGcodGhpcy5jbyx0aGlzLmVvKSx0aGlzfSxqfSgpLE4ubW92ZXM9W3tjZW50ZXI6WzAsMSwyLDMsNCw1XSxjcDpbUSxtZSxjZSxVZSxSLHksaSxBXSxjbzpbMCwwLDAsMCwwLDAsMCwwXSxlcDpbb2UsTGUsWix1ZSxNLGEsRCxzLFYsVCxvLHRdLGVvOlswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF19LHtjZW50ZXI6WzAsMSwyLDMsNCw1XSxjcDpbUixjZSxVZSxtZSxBLHksaSxRXSxjbzpbMiwwLDAsMSwxLDAsMCwyXSxlcDpbVixaLHVlLG9lLHQsYSxELHMsTSxULG8sTGVdLGVvOlswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF19LHtjZW50ZXI6WzAsMSwyLDMsNCw1XSxjcDpbY2UseSxVZSxRLG1lLFIsaSxBXSxjbzpbMSwyLDAsMCwyLDEsMCwwXSxlcDpbTGUsVCx1ZSxvZSxNLFYsRCxzLFosYSxvLHRdLGVvOlswLDEsMCwwLDAsMSwwLDAsMSwxLDAsMF19LHtjZW50ZXI6WzAsMSwyLDMsNCw1XSxjcDpbbWUsY2UsVWUsUSx5LGksQSxSXSxjbzpbMCwwLDAsMCwwLDAsMCwwXSxlcDpbTGUsWix1ZSxvZSxhLEQscyxNLFYsVCxvLHRdLGVvOlswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF19LHtjZW50ZXI6WzAsMSwyLDMsNCw1XSxjcDpbbWUsVWUsaSxRLFIsY2UseSxBXSxjbzpbMCwxLDIsMCwwLDIsMSwwXSxlcDpbTGUsWixvLG9lLE0sYSxULHMsVix1ZSxELHRdLGVvOlswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF19LHtjZW50ZXI6WzAsMSwyLDMsNCw1XSxjcDpbbWUsY2UsUSxBLFIseSxVZSxpXSxjbzpbMCwwLDEsMiwwLDAsMiwxXSxlcDpbTGUsWix1ZSx0LE0sYSxELG8sVixULG9lLHNdLGVvOlswLDAsMCwxLDAsMCwwLDEsMCwwLDEsMV19LHtjZW50ZXI6W0osUCxZLGwsZSxJXSxjcDpbbWUsY2UsVWUsUSxSLHksaSxBXSxjbzpbMCwwLDAsMCwwLDAsMCwwXSxlcDpbTGUsWix1ZSxvZSxNLGEsRCxzLFQsbyx0LFZdLGVvOlswLDAsMCwwLDAsMCwwLDAsMSwxLDEsMV19LHtjZW50ZXI6W2UsSSxKLFAsWSxsXSxjcDpbbWUsY2UsVWUsUSxSLHksaSxBXSxjbzpbMCwwLDAsMCwwLDAsMCwwXSxlcDpbTGUsb2UsdWUscyxNLFosRCxhLFYsVCxvLHRdLGVvOlswLDEsMCwxLDAsMSwwLDEsMCwwLDAsMF19LHtjZW50ZXI6W1ksSixQLEksbCxlXSxjcDpbbWUsY2UsVWUsUSxSLHksaSxBXSxjbzpbMCwwLDAsMCwwLDAsMCwwXSxlcDpbdWUsWixELG9lLExlLGEsTSxzLFYsVCxvLHRdLGVvOlsxLDAsMSwwLDEsMCwxLDAsMCwwLDAsMF19XSxyZT17VTowLFI6MSxGOjIsRDozLEw6NCxCOjUsRTo2LE06NyxTOjgseDo5LHk6MTAsejoxMSx1OjEyLHI6MTMsZjoxNCxkOjE1LGw6MTYsYjoxN30sdGU9ezA6IlUiLDE6IlIiLDI6IkYiLDM6IkQiLDQ6IkwiLDU6IkIiLDY6IkUiLDc6Ik0iLDg6IlMiLDk6IngiLDEwOiJ5IiwxMToieiIsMTI6InUiLDEzOiJyIiwxNDoiZiIsMTU6ImQiLDE2OiJsIiwxNzoiYiJ9LG5lPWZ1bmN0aW9uKFcpe3ZhciBnLGQscCx2LEUsTyxqO2lmKHR5cGVvZiBXPT0ic3RyaW5nIil7Zm9yKE89Vy5zcGxpdCgvXHMrLyksaj1bXSxnPTAsZD1PLmxlbmd0aDtnPGQ7ZysrKWlmKHY9T1tnXSx2Lmxlbmd0aCE9PTApe2lmKHYubGVuZ3RoPjIpdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vdmU6ICR7dn1gKTtpZihwPXJlW3ZbMF1dLHA9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG1vdmU6ICR7dn1gKTtpZih2Lmxlbmd0aD09PTEpRT0wO2Vsc2UgaWYodlsxXT09PSIyIilFPTE7ZWxzZSBpZih2WzFdPT09IiciKUU9MjtlbHNlIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb3ZlOiAke3Z9YCk7ai5wdXNoKHAqMytFKX1yZXR1cm4gan1lbHNlIHJldHVybiBXLmxlbmd0aCE9bnVsbD9XOltXXX0sTi5tb3Zlcy5wdXNoKG5ldyBOKCkubW92ZSgiUiBNJyBMJyIpLnRvSlNPTigpKSxOLm1vdmVzLnB1c2gobmV3IE4oKS5tb3ZlKCJVIEUnIEQnIikudG9KU09OKCkpLE4ubW92ZXMucHVzaChuZXcgTigpLm1vdmUoIkYgUyBCJyIpLnRvSlNPTigpKSxOLm1vdmVzLnB1c2gobmV3IE4oKS5tb3ZlKCJVIEUnIikudG9KU09OKCkpLE4ubW92ZXMucHVzaChuZXcgTigpLm1vdmUoIlIgTSciKS50b0pTT04oKSksTi5tb3Zlcy5wdXNoKG5ldyBOKCkubW92ZSgiRiBTIikudG9KU09OKCkpLE4ubW92ZXMucHVzaChuZXcgTigpLm1vdmUoIkQgRSIpLnRvSlNPTigpKSxOLm1vdmVzLnB1c2gobmV3IE4oKS5tb3ZlKCJMIE0iKS50b0pTT04oKSksTi5tb3Zlcy5wdXNoKG5ldyBOKCkubW92ZSgiQiBTJyIpLnRvSlNPTigpKSxOfS5jYWxsKHRoaXMpLG4hPT1udWxsP24uZXhwb3J0cz1yOnRoaXMuQ3ViZT1yfSkuY2FsbChPbil9KSh5bik7dmFyIEVuPXluLmV4cG9ydHM7KGZ1bmN0aW9uKCl7dmFyIG4sZSxvLHQscixsLHMsaSxhLFIsRCx5LE0sQSxQLFQsVixZLEksSixvZSxRLFosY2UsdWUsVWUsTGUsbWUsQmUsV2UsTWUsZGUsRmUsd2UsdGUscmUsbmUsTixXLGcsZCxwLHYsRSxPLGosSyxrLF8sJCxHLGllLHNlPVtdLmluZGV4T2Y7dD10aGlzLkN1YmV8fEVuLFtGZSxCZSxNZSxMZSxpLFIsbCx5XT1bMCwxLDIsMyw0LDUsNiw3XSxbZGUsbWUsV2UsVWUsRCxzLGEscixBLE0sbixlXT1bMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMV0sbz1mdW5jdGlvbihjLHUpe3ZhciBVLGgsZjtpZihjPHUpcmV0dXJuIDA7Zm9yKHU+Yy8yJiYodT1jLXUpLGY9MSxVPWMsaD0xO1UhPT1jLXU7KWYqPVUsZi89aCxVLS0saCsrO3JldHVybiBmfSxnPWZ1bmN0aW9uKGMpe3ZhciB1LFUsaCxmO2Zvcih1PTEsVT1oPTIsZj1jOzI8PWY/aDw9ZjpoPj1mO1U9Mjw9Zj8rK2g6LS1oKXUqPVU7cmV0dXJuIHV9LHA9ZnVuY3Rpb24oYyx1KXtyZXR1cm4gYz51P2M6dX0sJD1mdW5jdGlvbihjLHUsVSl7dmFyIGgsZixtLHcsUztmb3IoUz1jW3VdLGg9Zj1tPXUsdz1VLTE7bTw9dz9mPD13OmY+PXc7aD1tPD13PysrZjotLWYpY1toXT1jW2grMV07cmV0dXJuIGNbVV09U30sRz1mdW5jdGlvbihjLHUsVSl7dmFyIGgsZixtLHcsUztmb3IoUz1jW1VdLGg9Zj1tPVUsdz11KzE7bTw9dz9mPD13OmY+PXc7aD1tPD13PysrZjotLWYpY1toXT1jW2gtMV07cmV0dXJuIGNbdV09U30sSz1mdW5jdGlvbihjLHUsVSxoPSExKXt2YXIgZixtLHcsUyxDLEg7cmV0dXJuIFM9VS11LHc9ZyhTKzEpLGM9PT0iY29ybmVycyI/KG09NyxIPSJjcCIpOihtPTExLEg9ImVwIiksQz1mdW5jdGlvbigpe3ZhciBCLEwsRjtmb3IoRj1bXSxmPUI9MCxMPVM7MDw9TD9CPD1MOkI+PUw7Zj0wPD1MPysrQjotLUIpRi5wdXNoKDApO3JldHVybiBGfSgpLGZ1bmN0aW9uKEIpe3ZhciBMLEYseCxiLFgscSxlZSxoZSxTZSxUZSxBZSxfZSxhdCx4ZSxQZSxjdCxOZSxmdCxUdCxJZSxBdCxqZSwkZSxLZSxmZSx6ZSxWZTtpZihCIT1udWxsKXtmb3IoZj1xPTAsQWU9UzswPD1BZT9xPD1BZTpxPj1BZTtmPTA8PUFlPysrcTotLXEpQ1tmXT1mK3U7Zm9yKEY9QiV3LEw9Qi93fDAsU2U9dGhpc1tIXSxmPWVlPTAsX2U9bTswPD1fZT9lZTw9X2U6ZWU+PV9lO2Y9MDw9X2U/KytlZTotLWVlKVNlW2ZdPS0xO2ZvcihiPWhlPTEseGU9UzsxPD14ZT9oZTw9eGU6aGU+PXhlO2I9MTw9eGU/KytoZTotLWhlKWZvcihYPUYlKGIrMSksRj1GLyhiKzEpfDA7WD4wOylHKEMsMCxiKSxYLS07aWYoZmU9UyxoKWZvcihiPVRlPTAsUGU9bTswPD1QZT9UZTw9UGU6VGU+PVBlO2I9MDw9UGU/KytUZTotLVRlKXg9byhtLWIsZmUrMSksTC14Pj0wJiYoU2VbYl09Q1tTLWZlXSxMLT14LGZlLS0pO2Vsc2UgZm9yKGI9amU9Y3Q9bTtjdDw9MD9qZTw9MDpqZT49MDtiPWN0PD0wPysramU6LS1qZSl4PW8oYixmZSsxKSxMLXg+PTAmJihTZVtiXT1DW2ZlXSxMLT14LGZlLS0pO3JldHVybiB0aGlzfWVsc2V7Zm9yKFNlPXRoaXNbSF0sZj0kZT0wLE5lPVM7MDw9TmU/JGU8PU5lOiRlPj1OZTtmPTA8PU5lPysrJGU6LS0kZSlDW2ZdPS0xO2lmKEw9Rj1mZT0wLGgpZm9yKGI9S2U9ZnQ9bTtmdDw9MD9LZTw9MDpLZT49MDtiPWZ0PD0wPysrS2U6LS1LZSl1PD0oVHQ9U2VbYl0pJiZUdDw9VSYmKEwrPW8obS1iLGZlKzEpLENbUy1mZV09U2VbYl0sZmUrKyk7ZWxzZSBmb3IoYj16ZT0wLEllPW07MDw9SWU/emU8PUllOnplPj1JZTtiPTA8PUllPysremU6LS16ZSl1PD0oQXQ9U2VbYl0pJiZBdDw9VSYmKEwrPW8oYixmZSsxKSxDW2ZlXT1TZVtiXSxmZSsrKTtmb3IoYj1WZT1hdD1TO2F0PD0wP1ZlPD0wOlZlPj0wO2I9YXQ8PTA/KytWZTotLVZlKXtmb3IoWD0wO0NbYl0hPT11K2I7KSQoQywwLGIpLFgrKztGPShiKzEpKkYrWH1yZXR1cm4gTCp3K0Z9fX0sUD17dHdpc3Q6ZnVuY3Rpb24oYyl7dmFyIHUsVSxoLGYsbSx3O2lmKGMhPW51bGwpe2ZvcihtPTAsdT1VPTY7VT49MDt1PS0tVSlmPWMlMyxjPWMvM3wwLHRoaXMuY29bdV09ZixtKz1mO3JldHVybiB0aGlzLmNvWzddPSgzLW0lMyklMyx0aGlzfWVsc2V7Zm9yKHc9MCx1PWg9MDtoPD02O3U9KytoKXc9Myp3K3RoaXMuY29bdV07cmV0dXJuIHd9fSxmbGlwOmZ1bmN0aW9uKGMpe3ZhciB1LFUsaCxmLG0sdztpZihjIT1udWxsKXtmb3IobT0wLHU9VT0xMDtVPj0wO3U9LS1VKWY9YyUyLGM9Yy8yfDAsdGhpcy5lb1t1XT1mLG0rPWY7cmV0dXJuIHRoaXMuZW9bMTFdPSgyLW0lMiklMix0aGlzfWVsc2V7Zm9yKHc9MCx1PWg9MDtoPD0xMDt1PSsraCl3PTIqdyt0aGlzLmVvW3VdO3JldHVybiB3fX0sY29ybmVyUGFyaXR5OmZ1bmN0aW9uKCl7dmFyIGMsdSxVLGgsZixtLHcsUyxDO2ZvcihDPTAsYz1VPWY9eSxtPUZlKzE7Zjw9bT9VPD1tOlU+PW07Yz1mPD1tPysrVTotLVUpZm9yKHU9aD13PWMtMSxTPUZlO3c8PVM/aDw9UzpoPj1TO3U9dzw9Uz8rK2g6LS1oKXRoaXMuY3BbdV0+dGhpcy5jcFtjXSYmQysrO3JldHVybiBDJTJ9LGVkZ2VQYXJpdHk6ZnVuY3Rpb24oKXt2YXIgYyx1LFUsaCxmLG0sdyxTLEM7Zm9yKEM9MCxjPVU9Zj1lLG09ZGUrMTtmPD1tP1U8PW06VT49bTtjPWY8PW0/KytVOi0tVSlmb3IodT1oPXc9Yy0xLFM9ZGU7dzw9Uz9oPD1TOmg+PVM7dT13PD1TPysraDotLWgpdGhpcy5lcFt1XT50aGlzLmVwW2NdJiZDKys7cmV0dXJuIEMlMn0sVVJGdG9ETEY6SygiY29ybmVycyIsRmUsUiksVVJ0b1VMOksoImVkZ2VzIixkZSxXZSksVUJ0b0RGOksoImVkZ2VzIixVZSxzKSxVUnRvREY6SygiZWRnZXMiLGRlLHMpLEZSdG9CUjpLKCJlZGdlcyIsQSxlLCEwKX07Zm9yKGQgaW4gUClpZT1QW2RdLHQucHJvdG90eXBlW2RdPWllO3JlPWZ1bmN0aW9uKGMsdSxVKXt2YXIgaCxmLG0sdyxTLEMsSCxCLEwsRix4O2ZvcihoPWM9PT0iY29ybmVycyI/ImNvcm5lck11bHRpcGx5IjoiZWRnZU11bHRpcGx5IixmPW5ldyB0LHg9W10sbT1DPTAsRj1VLTE7MDw9Rj9DPD1GOkM+PUY7bT0wPD1GPysrQzotLUMpe2ZvcihmW3VdKG0pLHc9W10sUz1CPTA7Qjw9NTtTPSsrQil7Zm9yKEg9dC5tb3Zlc1tTXSxMPTA7TDw9MjsrK0wpZltoXShIKSx3LnB1c2goZlt1XSgpKTtmW2hdKEgpfXgucHVzaCh3KX1yZXR1cm4geH0sdj1mdW5jdGlvbigpe3ZhciBjLHU7cmV0dXJuIGM9bmV3IHQsdT1uZXcgdCxmdW5jdGlvbihVLGgpe3ZhciBmLG07Zm9yKGMuVVJ0b1VMKFUpLHUuVUJ0b0RGKGgpLGY9bT0wO208PTc7Zj0rK20paWYoYy5lcFtmXSE9PS0xKXtpZih1LmVwW2ZdIT09LTEpcmV0dXJuLTE7dS5lcFtmXT1jLmVwW2ZdfXJldHVybiB1LlVSdG9ERigpfX0oKSxvZT0yMTg3LFQ9MjA0OCxZPTIsVj0xMTg4MCxJPTQ5NSxKPTI0LFo9MjAxNjAsY2U9MjAxNjAsdWU9MTMyMCxRPTEzMjAsdC5tb3ZlVGFibGVzPXtwYXJpdHk6W1sxLDAsMSwxLDAsMSwxLDAsMSwxLDAsMSwxLDAsMSwxLDAsMV0sWzAsMSwwLDAsMSwwLDAsMSwwLDAsMSwwLDAsMSwwLDAsMSwwXV0sdHdpc3Q6bnVsbCxmbGlwOm51bGwsRlJ0b0JSOm51bGwsVVJGdG9ETEY6bnVsbCxVUnRvREY6bnVsbCxVUnRvVUw6bnVsbCxVQnRvREY6bnVsbCxtZXJnZVVSdG9ERjpudWxsfSxFPXt0d2lzdDpbImNvcm5lcnMiLG9lXSxmbGlwOlsiZWRnZXMiLFRdLEZSdG9CUjpbImVkZ2VzIixWXSxVUkZ0b0RMRjpbImNvcm5lcnMiLFpdLFVSdG9ERjpbImVkZ2VzIixjZV0sVVJ0b1VMOlsiZWRnZXMiLHVlXSxVQnRvREY6WyJlZGdlcyIsUV0sbWVyZ2VVUnRvREY6W119LHQuY29tcHV0ZU1vdmVUYWJsZXM9ZnVuY3Rpb24oLi4uYyl7dmFyIHUsVSxoLGYsbSx3O2ZvcihjLmxlbmd0aD09PTAmJihjPWZ1bmN0aW9uKCl7dmFyIFM7Uz1bXTtmb3IoaCBpbiBFKVMucHVzaChoKTtyZXR1cm4gU30oKSksVT0wLHU9Yy5sZW5ndGg7VTx1O1UrKyl3PWNbVV0sdGhpcy5tb3ZlVGFibGVzW3ddPT09bnVsbCYmKHc9PT0ibWVyZ2VVUnRvREYiP3RoaXMubW92ZVRhYmxlcy5tZXJnZVVSdG9ERj1mdW5jdGlvbigpe3ZhciBTLEMsSCxCO2ZvcihCPVtdLEM9SD0wO0g8PTMzNTtDPSsrSClCLnB1c2goZnVuY3Rpb24oKXt2YXIgTCxGO2ZvcihGPVtdLFM9TD0wO0w8PTMzNTtTPSsrTClGLnB1c2godihDLFMpKTtyZXR1cm4gRn0oKSk7cmV0dXJuIEJ9KCk6KFtmLG1dPUVbd10sdGhpcy5tb3ZlVGFibGVzW3ddPXJlKGYsdyxtKSkpO3JldHVybiB0aGlzfSx3ZT1bMCwxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxN10sTz1mdW5jdGlvbigpe3ZhciBjLHUsVSxoLGYsbSx3LFM7Zm9yKFM9W10sdT1VPTA7VTw9NTt1PSsrVSl7Zm9yKGg9W10sYz1mPTA7Zjw9NTtjPSsrZilpZihjIT09dSYmYyE9PXUtMylmb3Iodz1tPTA7bTw9Mjt3PSsrbSloLnB1c2goYyozK3cpO1MucHVzaChoKX1yZXR1cm4gU30oKSx0ZT1bMCwxLDIsNCw3LDksMTAsMTEsMTMsMTZdLGo9ZnVuY3Rpb24oKXt2YXIgYyx1LFUsaCxmLG0sdyxTLEMsSDtmb3IoSD1bXSx1PWg9MDtoPD01O3U9KytoKXtmb3IoZj1bXSxjPW09MDttPD01O2M9KyttKWlmKGMhPT11JiZjIT09dS0zKWZvcihDPWM9PT0wfHxjPT09Mz9bMCwxLDJdOlsxXSx3PTAsVT1DLmxlbmd0aDt3PFU7dysrKVM9Q1t3XSxmLnB1c2goYyozK1MpO0gucHVzaChmKX1yZXR1cm4gSH0oKSxrPWZ1bmN0aW9uKGMsdSxVKXt2YXIgaCxmLG07cmV0dXJuIGg9dSU4LG09dT4+MyxmPWg8PDIsVSE9bnVsbD8oY1ttXSY9figxNTw8ZiksY1ttXXw9VTw8ZixVKTooY1ttXSYxNTw8Zik+Pj5mfSxuZT1mdW5jdGlvbihjLHUsVSxoKXt2YXIgZixtLHcsUyxDLEgsQixMLEYseCxiLFg7Zm9yKFg9ZnVuY3Rpb24oKXt2YXIgcSxlZSxoZTtmb3IoaGU9W10scT0wLGVlPU1hdGguY2VpbCh1LzgpLTE7MDw9ZWU/cTw9ZWU6cT49ZWU7MDw9ZWU/KytxOi0tcSloZS5wdXNoKDQyOTQ5NjcyOTUpO3JldHVybiBoZX0oKSxjPT09MT9MPXdlOkw9dGUsbT0wLGsoWCwwLG0pLHc9MTt3IT09dTspe2ZvcihTPUg9MCxiPXUtMTswPD1iP0g8PWI6SD49YjtTPTA8PWI/KytIOi0tSClpZihrKFgsUyk9PT1tKWZvcihmPVUoUykseD0wLEM9TC5sZW5ndGg7eDxDO3grKylCPUxbeF0sRj1oKGYsQiksayhYLEYpPT09MTUmJihrKFgsRixtKzEpLHcrKyk7bSsrfXJldHVybiBYfSx0LnBydW5pbmdUYWJsZXM9e3NsaWNlVHdpc3Q6bnVsbCxzbGljZUZsaXA6bnVsbCxzbGljZVVSRnRvRExGUGFyaXR5Om51bGwsc2xpY2VVUnRvREZQYXJpdHk6bnVsbH0sXz17c2xpY2VUd2lzdDpbMSxJKm9lLGZ1bmN0aW9uKGMpe3JldHVybltjJUksYy9JfDBdfSxmdW5jdGlvbihjLHUpe3ZhciBVLGgsZixtO3JldHVybltmLG1dPWMsVT10Lm1vdmVUYWJsZXMuRlJ0b0JSW2YqMjRdW3VdLzI0fDAsaD10Lm1vdmVUYWJsZXMudHdpc3RbbV1bdV0saCpJK1V9XSxzbGljZUZsaXA6WzEsSSpULGZ1bmN0aW9uKGMpe3JldHVybltjJUksYy9JfDBdfSxmdW5jdGlvbihjLHUpe3ZhciBVLGgsZixtO3JldHVyblttLFVdPWMsZj10Lm1vdmVUYWJsZXMuRlJ0b0JSW20qMjRdW3VdLzI0fDAsaD10Lm1vdmVUYWJsZXMuZmxpcFtVXVt1XSxoKkkrZn1dLHNsaWNlVVJGdG9ETEZQYXJpdHk6WzIsSipaKlksZnVuY3Rpb24oYyl7cmV0dXJuW2MlMiwoYy8yfDApJUosKGMvMnwwKS9KfDBdfSxmdW5jdGlvbihjLHUpe3ZhciBVLGgsZixtLHcsUztyZXR1cm5bdyxTLFVdPWMsaD10Lm1vdmVUYWJsZXMucGFyaXR5W3ddW3VdLGY9dC5tb3ZlVGFibGVzLkZSdG9CUltTXVt1XSxtPXQubW92ZVRhYmxlcy5VUkZ0b0RMRltVXVt1XSwobSpKK2YpKjIraH1dLHNsaWNlVVJ0b0RGUGFyaXR5OlsyLEoqY2UqWSxmdW5jdGlvbihjKXtyZXR1cm5bYyUyLChjLzJ8MCklSiwoYy8yfDApL0p8MF19LGZ1bmN0aW9uKGMsdSl7dmFyIFUsaCxmLG0sdyxTO3JldHVyblt3LFMsVV09YyxoPXQubW92ZVRhYmxlcy5wYXJpdHlbd11bdV0sZj10Lm1vdmVUYWJsZXMuRlJ0b0JSW1NdW3VdLG09dC5tb3ZlVGFibGVzLlVSdG9ERltVXVt1XSwobSpKK2YpKjIraH1dfSx0LmNvbXB1dGVQcnVuaW5nVGFibGVzPWZ1bmN0aW9uKC4uLmMpe3ZhciB1LFUsaCxmLG07Zm9yKGMubGVuZ3RoPT09MCYmKGM9ZnVuY3Rpb24oKXt2YXIgdzt3PVtdO2ZvcihoIGluIF8pdy5wdXNoKGgpO3JldHVybiB3fSgpKSxVPTAsdT1jLmxlbmd0aDtVPHU7VSsrKW09Y1tVXSx0aGlzLnBydW5pbmdUYWJsZXNbbV09PT1udWxsJiYoZj1fW21dLHRoaXMucHJ1bmluZ1RhYmxlc1ttXT1uZSguLi5mKSk7cmV0dXJuIHRoaXN9LHQuaW5pdFNvbHZlcj1mdW5jdGlvbigpe3JldHVybiB0LmNvbXB1dGVNb3ZlVGFibGVzKCksdC5jb21wdXRlUHJ1bmluZ1RhYmxlcygpfSx0LnByb3RvdHlwZS5zb2x2ZVVwcmlnaHQ9ZnVuY3Rpb24oYz0yMil7dmFyIHUsVSxoLGYsbSx3LFMsQyxIO3JldHVybiBoPWZ1bmN0aW9uKCl7dmFyIEIsTCxGLHgsYixYLHE7Zm9yKEw9WyJVIiwiUiIsIkYiLCJEIiwiTCIsIkIiXSxYPVsiIiwiMiIsIiciXSxxPVtdLEI9Rj0wO0Y8PTU7Qj0rK0YpZm9yKGI9eD0wO3g8PTI7Yj0rK3gpcS5wdXNoKExbQl0rWFtiXSk7cmV0dXJuIHF9KCksdT1jbGFzc3tjb25zdHJ1Y3RvcihMKXt0aGlzLnBhcmVudD1udWxsLHRoaXMubGFzdE1vdmU9bnVsbCx0aGlzLmRlcHRoPTAsTCYmdGhpcy5pbml0KEwpfWluaXQoTCl7cmV0dXJuIHRoaXMuZmxpcD1MLmZsaXAoKSx0aGlzLnR3aXN0PUwudHdpc3QoKSx0aGlzLnNsaWNlPUwuRlJ0b0JSKCkvSnwwLHRoaXMucGFyaXR5PUwuY29ybmVyUGFyaXR5KCksdGhpcy5VUkZ0b0RMRj1MLlVSRnRvRExGKCksdGhpcy5GUnRvQlI9TC5GUnRvQlIoKSx0aGlzLlVSdG9VTD1MLlVSdG9VTCgpLHRoaXMuVUJ0b0RGPUwuVUJ0b0RGKCksdGhpc31zb2x1dGlvbigpe3JldHVybiB0aGlzLnBhcmVudD90aGlzLnBhcmVudC5zb2x1dGlvbigpK2hbdGhpcy5sYXN0TW92ZV0rIiAiOiIifW1vdmUoTCxGLHgpe3JldHVybiB0Lm1vdmVUYWJsZXNbTF1bRl1beF19cHJ1bmluZyhMLEYpe3JldHVybiBrKHQucHJ1bmluZ1RhYmxlc1tMXSxGKX1tb3ZlczEoKXtyZXR1cm4gdGhpcy5sYXN0TW92ZSE9PW51bGw/T1t0aGlzLmxhc3RNb3ZlLzN8MF06d2V9bWluRGlzdDEoKXt2YXIgTCxGO3JldHVybiBMPXRoaXMucHJ1bmluZygic2xpY2VGbGlwIixJKnRoaXMuZmxpcCt0aGlzLnNsaWNlKSxGPXRoaXMucHJ1bmluZygic2xpY2VUd2lzdCIsSSp0aGlzLnR3aXN0K3RoaXMuc2xpY2UpLHAoTCxGKX1uZXh0MShMKXt2YXIgRjtyZXR1cm4gRj1VLnBvcCgpLEYucGFyZW50PXRoaXMsRi5sYXN0TW92ZT1MLEYuZGVwdGg9dGhpcy5kZXB0aCsxLEYuZmxpcD10aGlzLm1vdmUoImZsaXAiLHRoaXMuZmxpcCxMKSxGLnR3aXN0PXRoaXMubW92ZSgidHdpc3QiLHRoaXMudHdpc3QsTCksRi5zbGljZT10aGlzLm1vdmUoIkZSdG9CUiIsdGhpcy5zbGljZSoyNCxMKS8yNHwwLEZ9bW92ZXMyKCl7cmV0dXJuIHRoaXMubGFzdE1vdmUhPT1udWxsP2pbdGhpcy5sYXN0TW92ZS8zfDBdOnRlfW1pbkRpc3QyKCl7dmFyIEwsRix4LGI7cmV0dXJuIHg9KEoqdGhpcy5VUnRvREYrdGhpcy5GUnRvQlIpKlkrdGhpcy5wYXJpdHksTD10aGlzLnBydW5pbmcoInNsaWNlVVJ0b0RGUGFyaXR5Iix4KSxiPShKKnRoaXMuVVJGdG9ETEYrdGhpcy5GUnRvQlIpKlkrdGhpcy5wYXJpdHksRj10aGlzLnBydW5pbmcoInNsaWNlVVJGdG9ETEZQYXJpdHkiLGIpLHAoTCxGKX1pbml0MihMPSEwKXtpZih0aGlzLnBhcmVudCE9PW51bGwmJih0aGlzLnBhcmVudC5pbml0MighMSksdGhpcy5VUkZ0b0RMRj10aGlzLm1vdmUoIlVSRnRvRExGIix0aGlzLnBhcmVudC5VUkZ0b0RMRix0aGlzLmxhc3RNb3ZlKSx0aGlzLkZSdG9CUj10aGlzLm1vdmUoIkZSdG9CUiIsdGhpcy5wYXJlbnQuRlJ0b0JSLHRoaXMubGFzdE1vdmUpLHRoaXMucGFyaXR5PXRoaXMubW92ZSgicGFyaXR5Iix0aGlzLnBhcmVudC5wYXJpdHksdGhpcy5sYXN0TW92ZSksdGhpcy5VUnRvVUw9dGhpcy5tb3ZlKCJVUnRvVUwiLHRoaXMucGFyZW50LlVSdG9VTCx0aGlzLmxhc3RNb3ZlKSx0aGlzLlVCdG9ERj10aGlzLm1vdmUoIlVCdG9ERiIsdGhpcy5wYXJlbnQuVUJ0b0RGLHRoaXMubGFzdE1vdmUpLEwpKXJldHVybiB0aGlzLlVSdG9ERj10aGlzLm1vdmUoIm1lcmdlVVJ0b0RGIix0aGlzLlVSdG9VTCx0aGlzLlVCdG9ERil9bmV4dDIoTCl7dmFyIEY7cmV0dXJuIEY9VS5wb3AoKSxGLnBhcmVudD10aGlzLEYubGFzdE1vdmU9TCxGLmRlcHRoPXRoaXMuZGVwdGgrMSxGLlVSRnRvRExGPXRoaXMubW92ZSgiVVJGdG9ETEYiLHRoaXMuVVJGdG9ETEYsTCksRi5GUnRvQlI9dGhpcy5tb3ZlKCJGUnRvQlIiLHRoaXMuRlJ0b0JSLEwpLEYucGFyaXR5PXRoaXMubW92ZSgicGFyaXR5Iix0aGlzLnBhcml0eSxMKSxGLlVSdG9ERj10aGlzLm1vdmUoIlVSdG9ERiIsdGhpcy5VUnRvREYsTCksRn19LEM9bnVsbCxtPWZ1bmN0aW9uKEIpe3ZhciBMLEYseCxiO2ZvcihMPTAsYj1bXSxMPUY9MSx4PWM7KDE8PXg/Rjw9eDpGPj14KSYmKGYoQixMKSxDPT09bnVsbCk7TD0xPD14PysrRjotLUYpYi5wdXNoKEwrKyk7cmV0dXJuIGJ9LGY9ZnVuY3Rpb24oQixMKXt2YXIgRix4LGIsWCxxLGVlLGhlO2lmKEw9PT0wKXtpZihCLm1pbkRpc3QxKCk9PT0wJiYoQi5sYXN0TW92ZT09PW51bGx8fChxPUIubGFzdE1vdmUsc2UuY2FsbCh0ZSxxKTwwKSkpcmV0dXJuIFMoQil9ZWxzZSBpZihMPjAmJkIubWluRGlzdDEoKTw9TCl7Zm9yKGVlPUIubW92ZXMxKCksaGU9W10seD0wLEY9ZWUubGVuZ3RoO3g8RiYmKGI9ZWVbeF0sWD1CLm5leHQxKGIpLGYoWCxMLTEpLFUucHVzaChYKSxDPT09bnVsbCk7eCsrKWhlLnB1c2godm9pZCAwKTtyZXR1cm4gaGV9fSxTPWZ1bmN0aW9uKEIpe3ZhciBMLEYseCxiO2ZvcihCLmluaXQyKCksYj1bXSxMPUY9MSx4PWMtQi5kZXB0aDsoMTw9eD9GPD14OkY+PXgpJiYodyhCLEwpLEM9PT1udWxsKTtMPTE8PXg/KytGOi0tRiliLnB1c2goTCsrKTtyZXR1cm4gYn0sdz1mdW5jdGlvbihCLEwpe3ZhciBGLHgsYixYLHEsZWU7aWYoTD09PTApe2lmKEIubWluRGlzdDIoKT09PTApcmV0dXJuIEM9Qi5zb2x1dGlvbigpfWVsc2UgaWYoTD4wJiZCLm1pbkRpc3QyKCk8PUwpe2ZvcihxPUIubW92ZXMyKCksZWU9W10seD0wLEY9cS5sZW5ndGg7eDxGJiYoYj1xW3hdLFg9Qi5uZXh0MihiKSx3KFgsTC0xKSxVLnB1c2goWCksQz09PW51bGwpO3grKyllZS5wdXNoKHZvaWQgMCk7cmV0dXJuIGVlfX0sVT1mdW5jdGlvbigpe3ZhciBCLEwsRjtmb3IoRj1bXSxCPTAsTD1jKzE7MDw9TD9CPD1MOkI+PUw7MDw9TD8rK0I6LS1CKUYucHVzaChuZXcgdSk7cmV0dXJuIEZ9KCksSD1VLnBvcCgpLmluaXQodGhpcyksbShIKSxVLnB1c2goSCksQy5sZW5ndGg+MCYmKEM9Qy5zdWJzdHJpbmcoMCxDLmxlbmd0aC0xKSksQ30sVz17VTowLFI6MSxGOjIsRDozLEw6NCxCOjV9LE49ezA6IlUiLDE6IlIiLDI6IkYiLDM6IkQiLDQ6IkwiLDU6IkIifSx0LnByb3RvdHlwZS5zb2x2ZT1mdW5jdGlvbihjPTIyKXt2YXIgdSxVLGgsZixtLHcsUyxDLEg7Zm9yKHU9dGhpcy5jbG9uZSgpLEM9dS51cHJpZ2h0KCksdS5tb3ZlKEMpLHc9bmV3IHQoKS5tb3ZlKEMpLmNlbnRlcixIPXUuc29sdmVVcHJpZ2h0KGMpLFM9W10sbT1ILnNwbGl0KCIgIiksaD0wLFU9bS5sZW5ndGg7aDxVO2grKylmPW1baF0sUy5wdXNoKE5bd1tXW2ZbMF1dXV0pLGYubGVuZ3RoPjEmJihTW1MubGVuZ3RoLTFdKz1mWzFdKTtyZXR1cm4gUy5qb2luKCIgIil9LHQuc2NyYW1ibGU9ZnVuY3Rpb24oKXtyZXR1cm4gdC5pbnZlcnNlKHQucmFuZG9tKCkuc29sdmUoKSl9fSkuY2FsbChPbik7dmFyIHlvPUVuLEN0PU9vKHlvKTtsZXQgSHQ9ITE7ZnVuY3Rpb24gQnQoKXtIdHx8KEN0LmluaXRTb2x2ZXIoKSxIdD0hMCl9ZnVuY3Rpb24gRW8obil7aWYoQnQoKSxiZShuKSlyZXR1cm57bWV0aG9kOiJvcHRpbWFsIixwaGFzZXM6W3tuYW1lOiJ0d29waGFzZSIsbW92ZXM6W119XSxtb3ZlczpbXSx0b3RhbE1vdmVzOjB9O2xldCBlO3RyeXtlPUN0LmZyb21TdHJpbmcobikuc29sdmUoKX1jYXRjaChyKXt0aHJvdyBuZXcgeigiU09MVkVSX0VSUk9SIixgdHdvLXBoYXNlIGZhaWxlZDogJHtTdHJpbmcocil9YCl9Y29uc3Qgbz1nZShwZShlKSksdD1DZShvKTtyZXR1cm57bWV0aG9kOiJvcHRpbWFsIixwaGFzZXM6W3tuYW1lOiJ0d29waGFzZSIsbW92ZXM6dH1dLG1vdmVzOnQsdG90YWxNb3Zlczp0Lmxlbmd0aH19ZnVuY3Rpb24gYm8oKXtCdCgpO2NvbnN0IG49Q3QucmFuZG9tKCksZT1uLnNvbHZlKCksbz1lbihzdChwZShlKSkpLHQ9UG4oeWUsbyk7aWYodCE9PW4uYXNTdHJpbmcoKSl0aHJvdyBuZXcgRXJyb3IoInNjcmFtYmxlIHNlbGYtY2hlY2sgZmFpbGVkIik7cmV0dXJue3NjcmFtYmxlOm8sc3RhdGU6dH19ZnVuY3Rpb24gTW8obil7bj09PSJjZm9wIj9VbigpOm49PT0icm91eCI/U24oKTpCdCgpfWZ1bmN0aW9uIGtvKG4sZSl7Y29uc3Qgbz16bihuKTtpZighby5vayl0aHJvdyBuZXcgeigiSU5WQUxJRF9TVEFURSIsby5jb2RlKTtzd2l0Y2goZSl7Y2FzZSJjZm9wIjpyZXR1cm4gcG8obik7Y2FzZSJyb3V4IjpyZXR1cm4gU28obik7Y2FzZSJvcHRpbWFsIjpyZXR1cm4gRW8obik7ZGVmYXVsdDp0aHJvdyBuZXcgeigiVU5LTk9XTl9NRVRIT0QiLFN0cmluZyhlKSl9fXNlbGYub25tZXNzYWdlPW49Pntjb25zdCBlPW4uZGF0YSxvPXQ9PnNlbGYucG9zdE1lc3NhZ2UodCk7dHJ5e3N3aXRjaChlLmFjdGlvbil7Y2FzZSJpbml0Ijp7Y29uc3QgdD1lLm1ldGhvZD8/Im9wdGltYWwiO01vKHQpLG8oe2lkOmUuaWQsb2s6ITAscmVhZHk6dH0pO2JyZWFrfWNhc2Uic29sdmUiOntpZighZS5zdGF0ZXx8IWUubWV0aG9kKXRocm93IG5ldyB6KCJCQURfUkVRVUVTVCIsInN0YXRlIGFuZCBtZXRob2QgYXJlIHJlcXVpcmVkIik7Y29uc3QgdD1rbyhlLnN0YXRlLGUubWV0aG9kKTtvKHtpZDplLmlkLG9rOiEwLHNvbHV0aW9uOnR9KTticmVha31jYXNlInNjcmFtYmxlIjp7Y29uc3R7c2NyYW1ibGU6dCxzdGF0ZTpyfT1ibygpO28oe2lkOmUuaWQsb2s6ITAsc2NyYW1ibGU6dCxzdGF0ZTpyfSk7YnJlYWt9ZGVmYXVsdDp0aHJvdyBuZXcgeigiVU5LTk9XTl9BQ1RJT04iLFN0cmluZyhlLmFjdGlvbikpfX1jYXRjaCh0KXtjb25zdCByPXQgaW5zdGFuY2VvZiB6P3QuY29kZToiSU5URVJOQUwiO28oe2lkOmUuaWQsb2s6ITEsZXJyb3I6e2NvZGU6cixtZXNzYWdlOnQgaW5zdGFuY2VvZiBFcnJvcj90Lm1lc3NhZ2U6U3RyaW5nKHQpfX0pfX07Cg==",Um=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0)),Bo=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",Um(Rl)],{type:"text/javascript;charset=utf-8"});function Am(i){let t;try{if(t=Bo&&(self.URL||self.webkitURL).createObjectURL(Bo),!t)throw"";const e=new Worker(t,{type:"module",name:i?.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;base64,"+Rl,{type:"module",name:i?.name})}}const Ul=new Am;let Pm=1;const ia=new Map;Ul.onmessage=i=>{const t=ia.get(i.data.id);t&&(ia.delete(i.data.id),t.resolve(i.data))};function ba(i){const t=Pm++;return new Promise(e=>{ia.set(t,{resolve:e}),Ul.postMessage({id:t,...i})})}const Jt=i=>{const t=document.querySelector(i);if(!t)throw new Error(`missing element: ${i}`);return t},yt=new Em(Jt("#cube3d")),ve=new Rm(yt,Jt("#solutionList"),Jt("#playbackControls"),Jt("#speed"));let Al="cfop",fs=!1;const Ts=Jt("#status"),li=Jt("#solveBtn"),Es=Jt("#scrambleInput"),Bn=Jt("#scrambleError"),gr=Jt("#solveError"),xr=Jt("#editorError"),Fs=new wm(Jt("#netEditor"),yt.state,i=>{if(ne?.connected){xr.textContent=Ft("gan_disabled_while_connected");return}const t=Jo(i)??i,e=Yo(t);if(!e.ok){xr.textContent=Ft(`err_${e.code}`);return}xr.textContent="",ve.reset(),yt.setState(t)},()=>yt.state);let Pl=!1;Ts.textContent=Ft("initializing");ba({action:"init",method:"optimal"}).then(()=>{Pl=!0,Ts.textContent=Ft("ready"),Ts.classList.add("ready")});Jt("#genScramble").addEventListener("click",async()=>{if(yt.busy&&!ne?.connected)return;Bn.textContent="";const i=await ba({action:"scramble"});if(!i.ok){Bn.textContent=i.error.message;return}if(Es.value=i.scramble,ne?.connected){ci.textContent=Ft("gan_scramble_hint");return}ve.reset(),await Fl(i.scramble)});Jt("#applyScramble").addEventListener("click",async()=>{if(!yt.busy){if(ne?.connected){Bn.textContent=Ft("gan_disabled_while_connected");return}Bn.textContent="";try{Ae(Es.value)}catch{Bn.textContent=Ft("scramble_invalid");return}ve.reset(),yt.setState(ps),await Fl(Es.value)}});Jt("#resetView").addEventListener("click",()=>yt.resetView(!!(ne?.connected&&jt&&!jt.done)));Jt("#resetCube").addEventListener("click",()=>{if(!yt.busy){if(ne?.connected){Bn.textContent=Ft("gan_disabled_while_connected");return}ve.reset(),Es.value="",Bn.textContent="",yt.setState(ps),Fs.setState(ps)}});async function Fl(i){const t=Ae(i);for(const e of t)await yt.playMove(e,110);Fs.setState(yt.state)}Jt("#methodTabs").addEventListener("click",i=>{const t=i.target.closest(".tab");t&&(Al=t.dataset.method,document.querySelectorAll(".tab").forEach(e=>e.classList.remove("active")),t.classList.add("active"))});li.addEventListener("click",async()=>{if(fs||yt.busy)return;gr.textContent="";const i=Jo(yt.state)??yt.state,t=Yo(i);if(!t.ok){gr.textContent=Ft(`err_${t.code}`);return}fs=!0,li.textContent=Ft("solving"),li.disabled=!0;try{const e=await ba({action:"solve",method:Al,state:i});if(!e.ok)gr.textContent=`${Ft("err_SOLVER")} (${e.error.code})`,ve.reset();else{let n=e.solution;if(ne?.connected){const s=oc(n);jt=new cc(s.steps),n=s.display,Nl=s.regripWhiteDown,Ds=null,yt.beginAssistView(s.regripWhiteDown),va(),Bl(),ve.setRecovery(null)}ve.setSolution(n),ve.setExternalMode(!!ne?.connected)}}finally{fs=!1,li.textContent=Ft("solve"),li.disabled=!1}});const sa=Jt("#ganConnect"),Wo=Jt("#ganStatus"),Dl=Jt("#ganBattery"),Gn=Jt("#ganMac"),Vl=Jt("#ganSync"),Gl=Jt("#ganMarkSolved"),ci=Jt("#ganAssistStatus"),Sr=Jt("#ganError"),Ls="cubesolver-gan-mac";Gn.value=localStorage.getItem(Ls)??"";let ne=null,jt=null,Nl=!0,Ds=null;const ze=[];let _r=!1;const Fm={U:"D",D:"U",R:"L",L:"R",F:"B",B:"F"},Dm={R:"x",L:"x",U:"y",D:"y",F:"z",B:"z"},Vm=new Set(["R","U","F"]);function Gm(i,t){return Fm[i.base]===t.base&&(i.amount+t.amount)%4===0}function Nm(i,t){const e=Vm.has(i.base)?i:t;return{base:Dm[e.base],amount:(4-e.amount)%4}}function ra(i){const t=i.replace(/[^0-9a-fA-F]/g,"").toUpperCase();return t.length!==12?null:t.match(/.{2}/g).join(":")}async function Bm(i,t){const e=ra(Gn.value);if(e)return e;if(!t)return null;const n=prompt(`${i.name??"GAN Cube"} ${Ft("gan_mac_prompt")}`),s=n?ra(n):null;return s&&(Gn.value=s,localStorage.setItem(Ls,s)),s}async function Wm(){if(!_r){_r=!0;try{for(;ze.length>0;){const i=ze.shift(),t=Ae(i.move)[0];let e=null;if(!i.drift){ze.length===0&&await new Promise(a=>setTimeout(a,60));const r=ze[0];r&&Gm(t,Ae(r.move)[0])&&(e=ze.shift())}const n=ze.length>5;if(e){const r=Ae(e.move)[0],a=Nm(t,r);n?(yt.setState(Xn(yt.state,`${i.move} ${e.move}`)),yt.playHandDrift(a,0)):await yt.playHandTurn([t,r],a,200).catch(()=>{yt.setState(Xn(yt.state,`${i.move} ${e.move}`)),yt.playHandDrift(a,0)});continue}if(i.drift){const r=Ae(i.drift)[0];n?(yt.setState(Xn(yt.state,i.move)),yt.playHandDrift(r,0)):await yt.playHandTurn([t],r,220).catch(()=>{yt.setState(Xn(yt.state,i.move)),yt.playHandDrift(r,0)});continue}if(n){yt.setState(Xn(yt.state,i.move));continue}const s=ze.length>1?45:90;try{await yt.playMove(t,s)}catch{yt.setState(Xn(yt.state,i.move))}}}finally{_r=!1,Fs.setState(yt.state),jt?.done&&yt.endAssistView()}}}function va(){if(!ne?.connected){ci.textContent="";return}if(!jt){ci.textContent=Ft("gan_smart_hint");return}if(jt.done){ci.textContent=Ft("gan_done");return}if(jt.deviated){const t=jt.recoveryDisplayMoves.join(" ");ci.textContent=`${Ft("gan_deviated")}
${Ft("gan_recover")}: ${t}`;return}const i=Ds==="recovered"?`${Ft("gan_recovered")}
`:jt.pointer===0?`${Ft(Nl?"gan_regrip":"gan_regrip_up")}
`:"";ci.textContent=`${i}${Ft("gan_assist_progress")}: ${jt.pointer}/${jt.total}  ${Ft("gan_next")}: ${jt.displayNext}`}function Bl(){ne?.connected&&jt&&!jt.done?yt.setHint(jt.hintMove):yt.setHint(null)}function Wl(i){const t={move:i};if(jt&&!jt.done){const e=jt.feed(i);if(Ds=e,e==="advance"||e==="done"){ve.setExternalPointer(jt.pointer);const n=jt.lastCompletedStep?.drift;n&&(t.drift=gn(n))}ve.setRecovery(jt.deviated?jt.recoveryDisplayMoves:null),va(),Bl()}ze.push(t),Wm()}function Om(i){ze.length===0&&!yt.busy&&i!==yt.state&&(yt.setState(i),Fs.setState(i))}function mi(i,t=!1){yt.setAxisLock(i),sa.disabled=t,sa.textContent=Ft(t?"gan_connecting":i?"gan_disconnect":"gan_connect"),Wo.textContent=i?Ft("gan_connected")+(ne?.deviceName??""):"",Wo.classList.toggle("connected",i),Vl.disabled=!i,Gl.disabled=!i,i||(Dl.textContent=""),ve.setExternalMode(i),va()}function Oo(){jt=null,Ds=null,ze.length=0,ne=null,yt.setHint(null),yt.endAssistView(),ve.setRecovery(null),mi(!1)}sa.addEventListener("click",async()=>{if(Sr.textContent="",ne?.connected){await ne.disconnect(),Oo();return}const i=await Yl(()=>import("./gan-BXCfplj7.js"),[],import.meta.url);if(!i.isWebBluetoothAvailable()){Sr.textContent=Ft("gan_no_bt");return}mi(!1,!0);try{const t=new i.GanCubeLink;await t.connect(Bm,{onMove:Wl,onFacelets:Om,onBattery:e=>{Dl.textContent=`🔋 ${e}%`},onDisconnect:Oo}),ne=t,ve.reset(),mi(!0)}catch(t){ne=null,mi(!1),t instanceof DOMException&&t.name==="NotFoundError"||(Sr.textContent=`${Ft("gan_connect_failed")}: ${t instanceof Error?t.message:String(t)}`)}});Gn.addEventListener("change",()=>{const i=ra(Gn.value);i?(Gn.value=i,localStorage.setItem(Ls,i)):Gn.value.trim()===""&&localStorage.removeItem(Ls)});Vl.addEventListener("click",()=>void ne?.requestFacelets());Gl.addEventListener("click",async()=>{ne?.connected&&confirm(Ft("gan_reset_confirm"))&&await ne.markSolved()});function Ol(){document.querySelectorAll("[data-i18n]").forEach(i=>{i.textContent=Ft(i.dataset.i18n)}),Jt("#langToggle").textContent=na()==="ja"?"EN":"日本語",fs||(li.textContent=Ft("solve")),Ts.textContent=Ft(Pl?"ready":"initializing"),document.documentElement.lang=na(),mi(!!ne?.connected)}Jt("#langToggle").addEventListener("click",()=>{Cm(na()==="ja"?"en":"ja")});document.addEventListener("langchange",Ol);Ol();window.__cubesolver={cube:yt,playback:ve,getAssist:()=>jt,simulateMove:Wl,enableFakeGan:()=>{ne={connected:!0,deviceName:"(fake)",disconnect:async()=>{},requestFacelets:async()=>{},markSolved:async()=>{}},mi(!0)}};export{Yl as _};
