(function(){"use strict";var Yn=typeof document<"u"?document.currentScript:null;const Fx=function(){const e=typeof document<"u"&&document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Dx=function(i,e){return new URL(i,e).href},Vx={},no=function(e,t,n){let s=Promise.resolve();function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},Jn=["U","R","F","D","L","B"],Ri="UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB",io={U:0,R:9,F:18,D:27,L:36,B:45},er={U:4,R:13,F:22,D:31,L:40,B:49};function tr(i){for(let e=0;e<6;e++){const t=i[e*9+4];for(let n=0;n<9;n++)if(i[e*9+n]!==t)return!1}return!0}const Bl=[[8,9,20],[6,18,38],[0,36,47],[2,45,11],[29,26,15],[27,44,24],[33,53,42],[35,17,51]],Ol=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],Wl=[[5,10],[7,19],[3,37],[1,46],[32,16],[28,25],[30,43],[34,52],[23,12],[21,41],[50,39],[48,14]],Zl=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],zl={U:{normal:[0,1,0],pos:(i,e)=>[e-1,1,i-1]},R:{normal:[1,0,0],pos:(i,e)=>[1,1-i,1-e]},F:{normal:[0,0,1],pos:(i,e)=>[e-1,1-i,1]},D:{normal:[0,-1,0],pos:(i,e)=>[e-1,-1,1-i]},L:{normal:[-1,0,0],pos:(i,e)=>[-1,1-i,e-1]},B:{normal:[0,0,-1],pos:(i,e)=>[1-e,1-i,-1]}},Hi=[],Ki=[];for(const i of Jn){const e=zl[i];for(let t=0;t<9;t++)Hi[io[i]+t]=e.pos(Math.floor(t/3),t%3),Ki[io[i]+t]=e.normal}const so=(i,e)=>`${i[0]},${i[1]},${i[2]}|${e[0]},${e[1]},${e[2]}`,ro=new Map;for(let i=0;i<54;i++)ro.set(so(Hi[i],Ki[i]),i);function ao(i,e,t){const[n,s,r]=i;return e===0?t===1?[n,-r,s]:[n,r,-s]:e===1?t===1?[r,s,-n]:[-r,s,n]:t===1?[-s,n,r]:[s,-n,r]}const fn={R:{axis:0,layers:[1],dir:-1},L:{axis:0,layers:[-1],dir:1},M:{axis:0,layers:[0],dir:1},r:{axis:0,layers:[0,1],dir:-1},l:{axis:0,layers:[-1,0],dir:1},x:{axis:0,layers:[-1,0,1],dir:-1},U:{axis:1,layers:[1],dir:-1},D:{axis:1,layers:[-1],dir:1},E:{axis:1,layers:[0],dir:1},u:{axis:1,layers:[0,1],dir:-1},d:{axis:1,layers:[-1,0],dir:1},y:{axis:1,layers:[-1,0,1],dir:-1},F:{axis:2,layers:[1],dir:-1},B:{axis:2,layers:[-1],dir:1},S:{axis:2,layers:[0],dir:-1},f:{axis:2,layers:[0,1],dir:-1},b:{axis:2,layers:[-1,0],dir:1},z:{axis:2,layers:[-1,0,1],dir:-1}},oo=new Set(["x","y","z"]),co=new Set(["M","E","S"]),Xl=new Set(["U","D","L","R","F","B"]);function kl(i){const e=new Int8Array(54);for(let t=0;t<54;t++){const n=Hi[t];if(i.layers.includes(n[i.axis])){const s=ao(n,i.axis,i.dir),r=ao(Ki[t],i.axis,i.dir),a=ro.get(so(s,r));if(a===void 0)throw new Error("geometry bug");e[a]=t}else e[t]=t}return e}const Yi=new Int8Array(54).map((i,e)=>e);function Qt(i,e){const t=new Int8Array(54);for(let n=0;n<54;n++)t[n]=i[e[n]];return t}function Ji(i){const e=new Int8Array(54);for(let t=0;t<54;t++)e[i[t]]=t;return e}const lo=new Map;for(const[i,e]of Object.entries(fn))lo.set(i,kl(e));const Hl=/^([URFDLB])w([2']*)$|^([URFDLBMESxyzudlrfb])([2']*)$/;function Lt(i){const e=[];for(const t of i.trim().split(/[\s()[\]]+/)){if(!t)continue;const n=Hl.exec(t);if(!n)throw new Error(`invalid move token: "${t}"`);const s=n[1]?n[1].toLowerCase():n[3],r=(n[1]?n[2]:n[4])??"";let a=r.includes("2")?2:1;r.includes("'")&&(a=4-a),e.push({base:s,amount:a})}return e}function un(i){return i.base+(i.amount===2?"2":i.amount===3?"'":"")}const fo=new Map;function wn(i){const e=i.base+i.amount;let t=fo.get(e);if(!t){const n=lo.get(i.base);if(!n)throw new Error(`unknown move base: ${i.base}`);t=n;for(let s=1;s<i.amount;s++)t=Qt(t,n);fo.set(e,t)}return t}function Qi(i){let e=Yi;for(const t of i)e=Qt(e,wn(t));return e}function nr(i,e){let t="";for(let n=0;n<54;n++)t+=i[e[n]];return t}function Kl(i,e){return nr(i,Qi(e))}function jt(i,e){return Kl(i,Lt(e))}function ji(i){return[...i].reverse().map(e=>({base:e.base,amount:4-e.amount}))}const ir={};for(const[i,e]of Object.entries(fn))ir[i]=e.axis;const uo=["U","D","R","L","F","B","M","E","S","u","d","r","l","f","b","x","y","z"];function sr(i){let e=[...i];for(;;){const t=[];let n=0,s=!1;for(;n<e.length;){const r=ir[e[n].base];let a=n;const o=new Map;for(;a<e.length&&ir[e[a].base]===r;)o.set(e[a].base,((o.get(e[a].base)??0)+e[a].amount)%4),a++;const c=[...o.entries()].filter(([,l])=>l!==0);c.sort((l,d)=>uo.indexOf(l[0])-uo.indexOf(d[0])),c.length!==a-n&&(s=!0);for(const[l,d]of c)t.push({base:l,amount:d});n=a}if(!s)return t;e=t}}const Yl={r:["x","L"],l:["x","R"],u:["y","D"],d:["y","U"],f:["z","B"],b:["z","F"]},ho=new Map;for(const i of[...Xl,...co,...Object.keys(Yl),...oo])for(const e of[1,2,3])ho.set(wn({base:i,amount:e}).join(","),{base:i,amount:e});function Wt(i,e){const t=Qt(Qt(i,wn(e)),Ji(i)),n=ho.get(t.join(","));if(!n)throw new Error(`conjugate not found for ${un(e)}`);return n}const po=new Map;{const i=[[]];for(const e of["x","y","z"])for(const t of[1,2,3])i.push([{base:e,amount:t}]);for(const e of i)for(const t of i){const n=[...e,...t],s=Qi(n).join(",");po.has(s)||po.set(s,n)}}function rr(i){const e=new Array(8).fill(-1),t=new Array(8).fill(-1),n=new Array(12).fill(-1),s=new Array(12).fill(-1);for(let r=0;r<8;r++){e:for(let a=0;a<8;a++)for(let o=0;o<3;o++){let c=!0;for(let l=0;l<3;l++)if(i[Bl[r][(l+o)%3]]!==Ol[a][l]){c=!1;break}if(c){e[r]=a,t[r]=o;break e}}if(e[r]<0)return null}for(let r=0;r<12;r++){e:for(let a=0;a<12;a++)for(let o=0;o<2;o++){let c=!0;for(let l=0;l<2;l++)if(i[Wl[r][(l+o)%2]]!==Zl[a][l]){c=!1;break}if(c){n[r]=a,s[r]=o;break e}}if(n[r]<0)return null}return{cp:e,co:t,ep:n,eo:s}}function xo(i){let e=0;for(let t=0;t<i.length;t++)for(let n=t+1;n<i.length;n++)i[t]>i[n]&&(e^=1);return e}function ar(i){if(i.length!==54)return{ok:!1,code:"WRONG_LENGTH"};if(!/^[URFDLB]{54}$/.test(i))return{ok:!1,code:"INVALID_CHARS"};for(const n of Jn)if(i[er[n]]!==n)return{ok:!1,code:"WRONG_CENTERS"};const e={};for(const n of i)e[n]=(e[n]??0)+1;for(const n of Jn)if(e[n]!==9)return{ok:!1,code:"COLOR_COUNT"};const t=rr(i);return t?new Set(t.cp).size!==8||new Set(t.ep).size!==12?{ok:!1,code:"INVALID_PIECES"}:t.co.reduce((n,s)=>n+s,0)%3!==0?{ok:!1,code:"TWIST"}:t.eo.reduce((n,s)=>n+s,0)%2!==0?{ok:!1,code:"FLIP"}:xo(t.cp)!==xo(t.ep)?{ok:!1,code:"PARITY"}:{ok:!0,cubie:t}:{ok:!1,code:"INVALID_PIECES"}}function or(i){if(i.length!==54)return null;const e=new Map;for(const n of Jn){const s=i[er[n]];if(e.has(s))return null;e.set(s,n)}let t="";for(const n of i){const s=e.get(n);if(!s)return null;t+=s}return t}const qi=i=>(4-i)%4,Jl={M:{rot:"x",rotInv:!0,a:"R",aInv:!1,b:"L",bInv:!0},E:{rot:"y",rotInv:!0,a:"U",aInv:!1,b:"D",bInv:!0},S:{rot:"z",rotInv:!1,a:"F",aInv:!0,b:"B",bInv:!1}},mo={r:{rot:"x",rotInv:!1,outer:"L"},l:{rot:"x",rotInv:!0,outer:"R"},u:{rot:"y",rotInv:!1,outer:"D"},d:{rot:"y",rotInv:!0,outer:"U"},f:{rot:"z",rotInv:!1,outer:"B"},b:{rot:"z",rotInv:!0,outer:"F"}};function bo(i){let e=Yi,t=Yi;const n=[],s=[];i.phases.forEach((a,o)=>{const c=[];for(const l of Lt(a.moves.join(" "))){if(oo.has(l.base)){e=Qt(e,wn(l)),a.name!=="orient"&&(t=Qt(t,wn(l)));continue}const d=e;let u,f=null;if(co.has(l.base)){const m=Jl[l.base],b={base:m.rot,amount:m.rotInv?qi(l.amount):l.amount};e=Qt(e,wn(b)),u=[Wt(e,{base:m.a,amount:m.aInv?qi(l.amount):l.amount}),Wt(e,{base:m.b,amount:m.bInv?qi(l.amount):l.amount})],f=Wt(d,b)}else if(mo[l.base]){const m=mo[l.base],b={base:m.rot,amount:m.rotInv?qi(l.amount):l.amount};e=Qt(e,wn(b)),u=[Wt(e,{base:m.outer,amount:l.amount})],f=Wt(d,b)}else u=[Wt(e,l)];const h=un(Wt(t,l));c.push(h),n.push({display:h,physical:u,drift:f,rho:Qt(d,Ji(t)),phaseIndex:o})}c.length>0&&s.push({name:a.name,detail:a.detail,moves:c})});const r=s.flatMap(a=>a.moves);return{display:{method:i.method,phases:s,moves:r,totalMoves:r.length},steps:n,regripWhiteDown:i.phases[0]?.name==="orient"}}const Ql=(i,e)=>i.base===e.base&&i.amount===e.amount;class go{steps;pointer=0;remaining=[];deviation=[];lastCompletedStep=null;constructor(e){this.steps=e,this.enterStep()}enterStep(){this.remaining=this.done?[]:this.steps[this.pointer].physical.map(e=>({...e}))}get total(){return this.steps.length}get done(){return this.pointer>=this.steps.length}get deviated(){return this.deviation.length>0}get currentStep(){return this.done?null:this.steps[this.pointer]}get untouched(){const e=this.currentStep;return e?this.remaining.length===e.physical.length&&this.remaining.every((t,n)=>Ql(t,e.physical[n])):!1}get recoveryMoves(){return sr(ji(this.deviation)).map(un)}get recoveryDisplayMoves(){const e=this.currentStep?.rho??Yi,t=Ji(e);return sr(ji(this.deviation)).map(n=>un(Wt(t,n)))}feed(e){if(this.lastCompletedStep=null,this.done)return"ignored";const t=Lt(e)[0];if(this.deviation.length>0)return this.deviation=sr([...this.deviation,t]),this.deviation.length===0?"recovered":"recovering";const n=this.steps[this.pointer];for(let s=0;s<this.remaining.length;s++){const r=this.remaining[s];if(t.base===r.base){if(r.amount===2&&t.amount!==2)return this.remaining[s]={base:t.base,amount:t.amount},"partial";if(t.amount===r.amount)return this.remaining.splice(s,1),this.remaining.length>0?"partial":(this.pointer++,this.lastCompletedStep=n,this.enterStep(),this.done?"done":"advance")}}return this.deviation=[t],"deviate"}get displayNext(){if(this.done)return null;if(this.deviated)return this.recoveryDisplayMoves.join(" ");const e=this.steps[this.pointer];if(this.untouched||e.physical.length>1)return e.display;const t=Ji(e.rho);return this.remaining.map(n=>un(Wt(t,n))).join(" ")}get hintMove(){if(this.done)return null;if(this.deviated)return this.recoveryMoves[0]??null;const e=this.steps[this.pointer];return this.untouched?un(Wt(e.rho,Lt(e.display)[0])):this.remaining.length>0?un(this.remaining[0]):null}}function jl(i,e){for(let t=0;t<Math.max(i.length,e.length);t++){const n=(i[t]??0)-(e[t]??0);if(n!==0)return n}return 0}const $i=(i,e)=>i.ep[e]===e&&i.eo[e]===0,cr=(i,e)=>i.cp[e]===e&&i.co[e]===0;function ql(i,e){const t=[4,5,6,7].every(a=>$i(e,a)),s=t?[[8,4],[9,5],[10,6],[11,7]].filter(([a,o])=>$i(e,a)&&cr(e,o)).length:0,r=t&&s===4&&[0,1,2,3].every(a=>e.co[a]===0&&e.eo[a]===0);return[t?1:0,s,r?1:0,tr(i)?1:0]}function $l(i,e,t){const n=[6,9,10].every(a=>$i(t,a))&&[5,6].every(a=>cr(t,a)),s=n&&[4,8,11].every(a=>$i(t,a))&&[4,7].every(a=>cr(t,a));let r=!1;if(s)for(let a=0;a<4&&!r;a++){const o=rr(a===0?e:jt(e,`U${a===2?"2":a===3?"'":""}`));o&&o.cp.every((c,l)=>c===l)&&o.co.every(c=>c===0)&&(r=!0)}return[n?1:0,s?1:0,r?1:0,tr(i)?1:0]}function _o(i,e){if(e==="optimal")return[tr(i)?1:0];const t=or(jt(i,"z2")),n=t?rr(t):null;return!t||!n?e==="cfop"?[0,0,0,0]:[0,0,0,0]:e==="cfop"?ql(i,n):$l(i,t,n)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lr="166",ed=0,vo=1,td=2,So=1,nd=2,qt=3,hn=0,vt=1,$t=2,pn=0,Qn=1,yo=2,Mo=3,Eo=4,id=5,Cn=100,sd=101,rd=102,ad=103,od=104,cd=200,ld=201,dd=202,fd=203,dr=204,fr=205,ud=206,hd=207,pd=208,xd=209,md=210,bd=211,gd=212,_d=213,vd=214,Sd=0,yd=1,Md=2,es=3,Ed=4,Td=5,Id=6,wd=7,ur=0,Cd=1,Ld=2,xn=0,Rd=1,Ud=2,Ad=3,Pd=4,Fd=5,Dd=6,Vd=7,To=300,jn=301,qn=302,hr=303,pr=304,ts=306,xr=1e3,Ln=1001,mr=1002,Rt=1003,Nd=1004,ns=1005,Dt=1006,br=1007,Rn=1008,en=1009,Io=1010,wo=1011,Ui=1012,gr=1013,Un=1014,tn=1015,Ai=1016,_r=1017,vr=1018,$n=1020,Co=35902,Lo=1021,Ro=1022,Vt=1023,Uo=1024,Ao=1025,ei=1026,ti=1027,Po=1028,Sr=1029,Fo=1030,yr=1031,Mr=1033,is=33776,ss=33777,rs=33778,as=33779,Er=35840,Tr=35841,Ir=35842,wr=35843,Cr=36196,Lr=37492,Rr=37496,Ur=37808,Ar=37809,Pr=37810,Fr=37811,Dr=37812,Vr=37813,Nr=37814,Gr=37815,Br=37816,Or=37817,Wr=37818,Zr=37819,zr=37820,Xr=37821,os=36492,kr=36494,Hr=36495,Do=36283,Kr=36284,Yr=36285,Jr=36286,Gd=3200,Bd=3201,Vo=0,Od=1,mn="",Zt="srgb",bn="srgb-linear",Qr="display-p3",cs="display-p3-linear",ls="linear",qe="srgb",ds="rec709",fs="p3",ni=7680,No=519,Wd=512,Zd=513,zd=514,Go=515,Xd=516,kd=517,Hd=518,Kd=519,Bo=35044,Oo="300 es",nn=2e3,us=2001;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jr=Math.PI/180,qr=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function Yd(i,e){return(i%e+e)%e}function $r(i,e,t){return(1-t)*i+t*e}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,s,r,a,o,c,l){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],f=n[2],h=n[5],m=n[8],b=s[0],x=s[3],p=s[6],E=s[1],S=s[4],T=s[7],z=s[2],R=s[5],A=s[8];return r[0]=a*b+o*E+c*z,r[3]=a*x+o*S+c*R,r[6]=a*p+o*T+c*A,r[1]=l*b+d*E+u*z,r[4]=l*x+d*S+u*R,r[7]=l*p+d*T+u*A,r[2]=f*b+h*E+m*z,r[5]=f*x+h*S+m*R,r[8]=f*p+h*T+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*a-o*l,f=o*c-d*r,h=l*r-a*c,m=t*u+n*f+s*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return e[0]=u*b,e[1]=(s*l-d*n)*b,e[2]=(o*n-s*a)*b,e[3]=f*b,e[4]=(d*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=h*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Pe;function Wo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jd(){const i=hs("canvas");return i.style.display="block",i}const Zo={};function zo(i){i in Zo||(Zo[i]=!0,console.warn(i))}function Qd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Xo=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ko=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ps={[bn]:{transfer:ls,primaries:ds,toReference:i=>i,fromReference:i=>i},[Zt]:{transfer:qe,primaries:ds,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[cs]:{transfer:ls,primaries:fs,toReference:i=>i.applyMatrix3(ko),fromReference:i=>i.applyMatrix3(Xo)},[Qr]:{transfer:qe,primaries:fs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ko),fromReference:i=>i.applyMatrix3(Xo).convertLinearToSRGB()}},jd=new Set([bn,cs]),Ke={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!jd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ps[e].toReference,s=ps[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ps[i].primaries},getTransfer:function(i){return i===mn?ls:ps[i].transfer}};function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class qd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=hs("canvas")),ri.width=e.width,ri.height=e.height;const n=ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $d=0;class Ho{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(na(s[a].image)):r.push(na(s[a]))}else r=na(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ef=0;class Mt extends ii{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=Ln,s=Ln,r=Dt,a=Rn,o=Vt,c=en,l=Mt.DEFAULT_ANISOTROPY,d=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Pi(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==To)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null,Mt.DEFAULT_MAPPING=To,Mt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],h=c[5],m=c[9],b=c[2],x=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-b)<.01&&Math.abs(m-x)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+b)<.1&&Math.abs(m+x)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,T=(h+1)/2,z=(p+1)/2,R=(d+f)/4,A=(u+b)/4,O=(m+x)/4;return S>T&&S>z?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=A/n):T>z?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=R/s,r=O/s):z<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),n=A/r,s=O/r),this.set(n,s,r,t),this}let E=Math.sqrt((x-m)*(x-m)+(u-b)*(u-b)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(x-m)/E,this.y=(u-b)/E,this.z=(f-d)/E,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tf extends ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Mt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends tf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ko extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nf extends Mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],u=n[s+3];const f=r[a+0],h=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=b;return}if(u!==b||c!==f||l!==h||d!==m){let x=1-o;const p=c*f+l*h+d*m+u*b,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const z=Math.sqrt(S),R=Math.atan2(z,p*E);x=Math.sin(x*R)/z,o=Math.sin(o*R)/z}const T=o*E;if(c=c*x+f*T,l=l*x+h*T,d=d*x+m*T,u=u*x+b*T,x===1-o){const z=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=z,l*=z,d*=z,u*=z}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],u=r[a],f=r[a+1],h=r[a+2],m=r[a+3];return e[t]=o*m+d*u+c*h-l*f,e[t+1]=c*m+d*f+l*u-o*h,e[t+2]=l*m+d*h+o*f-c*u,e[t+3]=d*m-o*u-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),u=o(r/2),f=c(n/2),h=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=f*d*u+l*h*m,this._y=l*h*u-f*d*m,this._z=l*d*m+f*h*u,this._w=l*d*u-f*h*m;break;case"YXZ":this._x=f*d*u+l*h*m,this._y=l*h*u-f*d*m,this._z=l*d*m-f*h*u,this._w=l*d*u+f*h*m;break;case"ZXY":this._x=f*d*u-l*h*m,this._y=l*h*u+f*d*m,this._z=l*d*m+f*h*u,this._w=l*d*u-f*h*m;break;case"ZYX":this._x=f*d*u-l*h*m,this._y=l*h*u+f*d*m,this._z=l*d*m-f*h*u,this._w=l*d*u+f*h*m;break;case"YZX":this._x=f*d*u+l*h*m,this._y=l*h*u+f*d*m,this._z=l*d*m-f*h*u,this._w=l*d*u-f*h*m;break;case"XZY":this._x=f*d*u-l*h*m,this._y=l*h*u-f*d*m,this._z=l*d*m+f*h*u,this._w=l*d*u+f*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-c)*h,this._y=(r-l)*h,this._z=(a-s)*h}else if(n>o&&n>u){const h=2*Math.sqrt(1+n-o-u);this._w=(d-c)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+l)/h}else if(o>u){const h=2*Math.sqrt(1+o-n-u);this._w=(r-l)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+u-n-o);this._w=(a-s)/h,this._x=(r+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),u=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*d,this.y=n+c*d+o*l-r*u,this.z=s+c*u+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new N,Yo=new Et;class Di{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nt):Nt.fromBufferAttribute(r,a),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),ms.subVectors(this.max,Vi),ai.subVectors(e.a,Vi),oi.subVectors(e.b,Vi),ci.subVectors(e.c,Vi),gn.subVectors(oi,ai),_n.subVectors(ci,oi),Pn.subVectors(ai,ci);let t=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Pn.z,Pn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Pn.z,0,-Pn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Pn.y,Pn.x,0];return!sa(t,ai,oi,ci,ms)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,ai,oi,ci,ms))?!1:(bs.crossVectors(gn,_n),t=[bs.x,bs.y,bs.z],sa(t,ai,oi,ci,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new N,new N,new N,new N,new N,new N,new N,new N],Nt=new N,xs=new Di,ai=new N,oi=new N,ci=new N,gn=new N,_n=new N,Pn=new N,Vi=new N,ms=new N,bs=new N,Fn=new N;function sa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fn.fromArray(i,r);const o=s.x*Math.abs(Fn.x)+s.y*Math.abs(Fn.y)+s.z*Math.abs(Fn.z),c=e.dot(Fn),l=t.dot(Fn),d=n.dot(Fn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const sf=new Di,Ni=new N,ra=new N;class aa{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ni,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(ra)),this.expandByPoint(Ni.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new N,oa=new N,gs=new N,vn=new N,ca=new N,_s=new N,la=new N;class rf{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oa.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),vn.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(gs),o=vn.dot(this.direction),c=-vn.dot(gs),l=vn.lengthSq(),d=Math.abs(1-a*a);let u,f,h,m;if(d>0)if(u=a*c-o,f=a*o-c,m=r*d,u>=0)if(f>=-m)if(f<=m){const b=1/d;u*=b,f*=b,h=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),h=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),h=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oa).addScaledVector(gs,f),h}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),s=rn.dot(rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,s,r){ca.subVectors(t,e),_s.subVectors(n,e),la.crossVectors(ca,_s);let a=this.direction.dot(la),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,e);const c=o*this.direction.dot(_s.crossVectors(vn,_s));if(c<0)return null;const l=o*this.direction.dot(ca.cross(vn));if(l<0||c+l>a)return null;const d=-o*vn.dot(la);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,s,r,a,o,c,l,d,u,f,h,m,b,x){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,u,f,h,m,b,x)}set(e,t,n,s,r,a,o,c,l,d,u,f,h,m,b,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=f,p[3]=h,p[7]=m,p[11]=b,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/li.setFromMatrixColumn(e,0).length(),r=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*d,h=a*u,m=o*d,b=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=h+m*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=m+h*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*d,h=c*u,m=l*d,b=l*u;t[0]=f+b*o,t[4]=m*o-h,t[8]=a*l,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=h*o-m,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*d,h=c*u,m=l*d,b=l*u;t[0]=f-b*o,t[4]=-a*u,t[8]=m+h*o,t[1]=h+m*o,t[5]=a*d,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*d,h=a*u,m=o*d,b=o*u;t[0]=c*d,t[4]=m*l-h,t[8]=f*l+b,t[1]=c*u,t[5]=b*l+f,t[9]=h*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,h=a*l,m=o*c,b=o*l;t[0]=c*d,t[4]=b-f*u,t[8]=m*u+h,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*u+m,t[10]=f-b*u}else if(e.order==="XZY"){const f=a*c,h=a*l,m=o*c,b=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+b,t[5]=a*d,t[9]=h*u-m,t[2]=m*u-h,t[6]=o*d,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(af,e,of)}lookAt(e,t,n){const s=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),Sn.crossVectors(n,Tt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),Sn.crossVectors(n,Tt)),Sn.normalize(),vs.crossVectors(Tt,Sn),s[0]=Sn.x,s[4]=vs.x,s[8]=Tt.x,s[1]=Sn.y,s[5]=vs.y,s[9]=Tt.y,s[2]=Sn.z,s[6]=vs.z,s[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],f=n[9],h=n[13],m=n[2],b=n[6],x=n[10],p=n[14],E=n[3],S=n[7],T=n[11],z=n[15],R=s[0],A=s[4],O=s[8],y=s[12],v=s[1],U=s[5],K=s[9],Z=s[13],H=s[2],j=s[6],X=s[10],ee=s[14],k=s[3],fe=s[7],xe=s[11],w=s[15];return r[0]=a*R+o*v+c*H+l*k,r[4]=a*A+o*U+c*j+l*fe,r[8]=a*O+o*K+c*X+l*xe,r[12]=a*y+o*Z+c*ee+l*w,r[1]=d*R+u*v+f*H+h*k,r[5]=d*A+u*U+f*j+h*fe,r[9]=d*O+u*K+f*X+h*xe,r[13]=d*y+u*Z+f*ee+h*w,r[2]=m*R+b*v+x*H+p*k,r[6]=m*A+b*U+x*j+p*fe,r[10]=m*O+b*K+x*X+p*xe,r[14]=m*y+b*Z+x*ee+p*w,r[3]=E*R+S*v+T*H+z*k,r[7]=E*A+S*U+T*j+z*fe,r[11]=E*O+S*K+T*X+z*xe,r[15]=E*y+S*Z+T*ee+z*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],h=e[14],m=e[3],b=e[7],x=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*h-n*c*h)+b*(+t*c*h-t*l*f+r*a*f-s*a*h+s*l*d-r*c*d)+x*(+t*l*u-t*o*h-r*a*u+n*a*h+r*o*d-n*l*d)+p*(-s*o*d-t*c*u+t*o*f+s*a*u-n*a*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],h=e[11],m=e[12],b=e[13],x=e[14],p=e[15],E=u*x*l-b*f*l+b*c*h-o*x*h-u*c*p+o*f*p,S=m*f*l-d*x*l-m*c*h+a*x*h+d*c*p-a*f*p,T=d*b*l-m*u*l+m*o*h-a*b*h-d*o*p+a*u*p,z=m*u*c-d*b*c-m*o*f+a*b*f+d*o*x-a*u*x,R=t*E+n*S+s*T+r*z;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(b*f*r-u*x*r-b*s*h+n*x*h+u*s*p-n*f*p)*A,e[2]=(o*x*r-b*c*r+b*s*l-n*x*l-o*s*p+n*c*p)*A,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*h-n*c*h)*A,e[4]=S*A,e[5]=(d*x*r-m*f*r+m*s*h-t*x*h-d*s*p+t*f*p)*A,e[6]=(m*c*r-a*x*r-m*s*l+t*x*l+a*s*p-t*c*p)*A,e[7]=(a*f*r-d*c*r+d*s*l-t*f*l-a*s*h+t*c*h)*A,e[8]=T*A,e[9]=(m*u*r-d*b*r-m*n*h+t*b*h+d*n*p-t*u*p)*A,e[10]=(a*b*r-m*o*r+m*n*l-t*b*l-a*n*p+t*o*p)*A,e[11]=(d*o*r-a*u*r-d*n*l+t*u*l+a*n*h-t*o*h)*A,e[12]=z*A,e[13]=(d*b*s-m*u*s+m*n*f-t*b*f-d*n*x+t*u*x)*A,e[14]=(m*o*s-a*b*s-m*n*c+t*b*c+a*n*x-t*o*x)*A,e[15]=(a*u*s-d*o*s+d*n*c-t*u*c-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,u=o+o,f=r*l,h=r*d,m=r*u,b=a*d,x=a*u,p=o*u,E=c*l,S=c*d,T=c*u,z=n.x,R=n.y,A=n.z;return s[0]=(1-(b+p))*z,s[1]=(h+T)*z,s[2]=(m-S)*z,s[3]=0,s[4]=(h-T)*R,s[5]=(1-(f+p))*R,s[6]=(x+E)*R,s[7]=0,s[8]=(m+S)*A,s[9]=(x-E)*A,s[10]=(1-(f+b))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=li.set(s[0],s[1],s[2]).length();const a=li.set(s[4],s[5],s[6]).length(),o=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gt.copy(this);const l=1/r,d=1/a,u=1/o;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=d,Gt.elements[5]*=d,Gt.elements[6]*=d,Gt.elements[8]*=u,Gt.elements[9]*=u,Gt.elements[10]*=u,t.setFromRotationMatrix(Gt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=nn){const c=this.elements,l=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let h,m;if(o===nn)h=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===us)h=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=nn){const c=this.elements,l=1/(t-e),d=1/(n-s),u=1/(a-r),f=(t+e)*l,h=(n+s)*d;let m,b;if(o===nn)m=(a+r)*u,b=-2*u;else if(o===us)m=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=b,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new N,Gt=new it,af=new N(0,0,0),of=new N(1,1,1),Sn=new N,vs=new N,Tt=new N,Jo=new it,Qo=new Et;class zt{constructor(e=0,t=0,n=0,s=zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],u=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zt.DEFAULT_ORDER="XYZ";class jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cf=0;const qo=new N,di=new Et,an=new it,Ss=new N,Gi=new N,lf=new N,df=new Et,$o=new N(1,0,0),ec=new N(0,1,0),tc=new N(0,0,1),nc={type:"added"},ff={type:"removed"},fi={type:"childadded",child:null},da={type:"childremoved",child:null};class bt extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new N,t=new zt,n=new Et,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Pe}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis($o,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return qo.copy(e).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($o,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Gi,Ss,this.up):an.lookAt(Ss,Gi,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),di.setFromRotationMatrix(an),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ff),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),u=a(e.shapes),f=a(e.skeletons),h=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new N(0,1,0),bt.DEFAULT_MATRIX_AUTO_UPDATE=!0,bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new N,on=new N,fa=new N,cn=new N,ui=new N,hi=new N,ic=new N,ua=new N,ha=new N,pa=new N;class Xt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bt.subVectors(e,t),s.cross(Bt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bt.subVectors(s,t),on.subVectors(n,t),fa.subVectors(e,t);const a=Bt.dot(Bt),o=Bt.dot(on),c=Bt.dot(fa),l=on.dot(on),d=on.dot(fa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,h=(l*c-o*d)*f,m=(a*d-o*c)*f;return r.set(1-h-m,m,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cn.x),c.addScaledVector(a,cn.y),c.addScaledVector(o,cn.z),c)}static isFrontFacing(e,t,n,s){return Bt.subVectors(n,t),on.subVectors(e,t),Bt.cross(on).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Bt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ui.subVectors(s,n),hi.subVectors(r,n),ua.subVectors(e,n);const c=ui.dot(ua),l=hi.dot(ua);if(c<=0&&l<=0)return t.copy(n);ha.subVectors(e,s);const d=ui.dot(ha),u=hi.dot(ha);if(d>=0&&u<=d)return t.copy(s);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(ui,a);pa.subVectors(e,r);const h=ui.dot(pa),m=hi.dot(pa);if(m>=0&&h<=m)return t.copy(r);const b=h*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(hi,o);const x=d*m-h*u;if(x<=0&&u-d>=0&&h-m>=0)return ic.subVectors(r,s),o=(u-d)/(u-d+(h-m)),t.copy(s).addScaledVector(ic,o);const p=1/(x+b+f);return a=b*p,o=f*p,t.copy(n).addScaledVector(ui,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function xa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Yd(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xa(a,r,e+1/3),this.g=xa(a,r,e),this.b=xa(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=sc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Ke.fromWorkingColorSpace(gt.copy(this),e),Math.round(St(gt.r*255,0,255))*65536+Math.round(St(gt.g*255,0,255))*256+Math.round(St(gt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,s=gt.g,r=gt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Zt){Ke.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,s=gt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(ys);const n=$r(yn.h,ys.h,t),s=$r(yn.s,ys.s,t),r=$r(yn.l,ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new We;We.NAMES=sc;let uf=0;class Bi extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Qn,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=fr,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class rc extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new N,Ms=new Be;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return zo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bo&&(e.usage=this.usage),e}}class ac extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class oc extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dn extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hf=0;const Ut=new it,ma=new bt,pi=new N,It=new Di,Oi=new Di,ut=new N;class Vn extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wo(e)?oc:ac)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(It.min,Oi.min),It.expandByPoint(ut),ut.addVectors(It.max,Oi.max),It.expandByPoint(ut)):(It.expandByPoint(Oi.min),It.expandByPoint(Oi.max))}It.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)ut.fromBufferAttribute(o,l),c&&(pi.fromBufferAttribute(e,l),ut.add(pi)),s=Math.max(s,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let O=0;O<n.count;O++)o[O]=new N,c[O]=new N;const l=new N,d=new N,u=new N,f=new Be,h=new Be,m=new Be,b=new N,x=new N;function p(O,y,v){l.fromBufferAttribute(n,O),d.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,O),h.fromBufferAttribute(r,y),m.fromBufferAttribute(r,v),d.sub(l),u.sub(l),h.sub(f),m.sub(f);const U=1/(h.x*m.y-m.x*h.y);isFinite(U)&&(b.copy(d).multiplyScalar(m.y).addScaledVector(u,-h.y).multiplyScalar(U),x.copy(u).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(U),o[O].add(b),o[y].add(b),o[v].add(b),c[O].add(x),c[y].add(x),c[v].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,y=E.length;O<y;++O){const v=E[O],U=v.start,K=v.count;for(let Z=U,H=U+K;Z<H;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const S=new N,T=new N,z=new N,R=new N;function A(O){z.fromBufferAttribute(s,O),R.copy(z);const y=o[O];S.copy(y),S.sub(z.multiplyScalar(z.dot(y))).normalize(),T.crossVectors(R,y);const U=T.dot(c[O])<0?-1:1;a.setXYZW(O,S.x,S.y,S.z,U)}for(let O=0,y=E.length;O<y;++O){const v=E[O],U=v.start,K=v.count;for(let Z=U,H=U+K;Z<H;Z+=3)A(e.getX(Z+0)),A(e.getX(Z+1)),A(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,d=new N,u=new N;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),b=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,x),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,x),o.add(d),c.add(d),l.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,f=new l.constructor(c.length*d);let h=0,m=0;for(let b=0,x=c.length;b<x;b++){o.isInterleavedBufferAttribute?h=c[b]*o.data.stride+o.offset:h=c[b]*d;for(let p=0;p<d;p++)f[m++]=l[h++]}return new kt(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){const f=l[d],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const h=l[u];d.push(h.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],u=r[l];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new it,Nn=new rf,Es=new aa,lc=new N,xi=new N,mi=new N,bi=new N,ba=new N,Ts=new N,Is=new Be,ws=new Be,Cs=new Be,dc=new N,fc=new N,uc=new N,Ls=new N,Rs=new N;class Ht extends bt{constructor(e=new Vn,t=new rc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ts.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],u=r[c];d!==0&&(ba.fromBufferAttribute(u,e),a?Ts.addScaledVector(ba,d):Ts.addScaledVector(ba.sub(t),d))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),Nn.copy(e.ray).recast(e.near),!(Es.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Es,lc)===null||Nn.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(cc.copy(r).invert(),Nn.copy(e.ray).applyMatrix4(cc),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){const x=f[m],p=a[x.materialIndex],E=Math.max(x.start,h.start),S=Math.min(o.count,Math.min(x.start+x.count,h.start+h.count));for(let T=E,z=S;T<z;T+=3){const R=o.getX(T),A=o.getX(T+1),O=o.getX(T+2);s=Us(this,p,e,n,l,d,u,R,A,O),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let x=m,p=b;x<p;x+=3){const E=o.getX(x),S=o.getX(x+1),T=o.getX(x+2);s=Us(this,a,e,n,l,d,u,E,S,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){const x=f[m],p=a[x.materialIndex],E=Math.max(x.start,h.start),S=Math.min(c.count,Math.min(x.start+x.count,h.start+h.count));for(let T=E,z=S;T<z;T+=3){const R=T,A=T+1,O=T+2;s=Us(this,p,e,n,l,d,u,R,A,O),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,h.start),b=Math.min(c.count,h.start+h.count);for(let x=m,p=b;x<p;x+=3){const E=x,S=x+1,T=x+2;s=Us(this,a,e,n,l,d,u,E,S,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function pf(i,e,t,n,s,r,a,o){let c;if(e.side===vt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===hn,o),c===null)return null;Rs.copy(o),Rs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Rs);return l<t.near||l>t.far?null:{distance:l,point:Rs.clone(),object:i}}function Us(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,xi),i.getVertexPosition(c,mi),i.getVertexPosition(l,bi);const d=pf(i,e,t,n,xi,mi,bi,Ls);if(d){s&&(Is.fromBufferAttribute(s,o),ws.fromBufferAttribute(s,c),Cs.fromBufferAttribute(s,l),d.uv=Xt.getInterpolation(Ls,xi,mi,bi,Is,ws,Cs,new Be)),r&&(Is.fromBufferAttribute(r,o),ws.fromBufferAttribute(r,c),Cs.fromBufferAttribute(r,l),d.uv1=Xt.getInterpolation(Ls,xi,mi,bi,Is,ws,Cs,new Be)),a&&(dc.fromBufferAttribute(a,o),fc.fromBufferAttribute(a,c),uc.fromBufferAttribute(a,l),d.normal=Xt.getInterpolation(Ls,xi,mi,bi,dc,fc,uc,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new N,materialIndex:0};Xt.getNormal(xi,mi,bi,u.normal),d.face=u}return d}class gi extends Vn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],u=[];let f=0,h=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Dn(l,3)),this.setAttribute("normal",new Dn(d,3)),this.setAttribute("uv",new Dn(u,2));function m(b,x,p,E,S,T,z,R,A,O,y){const v=T/A,U=z/O,K=T/2,Z=z/2,H=R/2,j=A+1,X=O+1;let ee=0,k=0;const fe=new N;for(let xe=0;xe<X;xe++){const w=xe*U-Z;for(let V=0;V<j;V++){const J=V*v-K;fe[b]=J*E,fe[x]=w*S,fe[p]=H,l.push(fe.x,fe.y,fe.z),fe[b]=0,fe[x]=0,fe[p]=R>0?1:-1,d.push(fe.x,fe.y,fe.z),u.push(V/A),u.push(1-xe/O),ee+=1}}for(let xe=0;xe<O;xe++)for(let w=0;w<A;w++){const V=f+w+j*xe,J=f+w+j*(xe+1),I=f+(w+1)+j*(xe+1),L=f+(w+1)+j*xe;c.push(V,J,L),c.push(J,I,L),k+=6}o.addGroup(h,k,y),h+=k,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _t(i){const e={};for(let t=0;t<i.length;t++){const n=_i(i[t]);for(const s in n)e[s]=n[s]}return e}function xf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const mf={clone:_i,merge:_t};var bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=nn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new N,xc=new Be,mc=new Be;class At extends pc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,xc,mc),t.subVectors(mc,xc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,Si=1;class _f extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new At(vi,Si,e,t);s.layers=this.layers,this.add(s);const r=new At(vi,Si,e,t);r.layers=this.layers,this.add(r);const a=new At(vi,Si,e,t);a.layers=this.layers,this.add(a);const o=new At(vi,Si,e,t);o.layers=this.layers,this.add(o);const c=new At(vi,Si,e,t);c.layers=this.layers,this.add(c);const l=new At(vi,Si,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,f,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bc extends Mt{constructor(e,t,n,s,r,a,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:jn,super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vf extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vt,blending:pn});r.uniforms.tEquirect.value=t;const a=new Ht(s,r),o=t.minFilter;return t.minFilter===Rn&&(t.minFilter=Dt),new _f(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const ga=new N,Sf=new N,yf=new Pe;class Gn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ga.subVectors(n,t).cross(Sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yf.getNormalMatrix(e),s=this.coplanarPoint(ga).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new aa,As=new N;class _a{constructor(e=new Gn,t=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],d=s[5],u=s[6],f=s[7],h=s[8],m=s[9],b=s[10],x=s[11],p=s[12],E=s[13],S=s[14],T=s[15];if(n[0].setComponents(c-r,f-l,x-h,T-p).normalize(),n[1].setComponents(c+r,f+l,x+h,T+p).normalize(),n[2].setComponents(c+a,f+d,x+m,T+E).normalize(),n[3].setComponents(c-a,f-d,x-m,T-E).normalize(),n[4].setComponents(c-o,f-u,x-b,T-S).normalize(),t===nn)n[5].setComponents(c+o,f+u,x+b,T+S).normalize();else if(t===us)n[5].setComponents(o,u,b,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(As.x=s.normal.x>0?e.max.x:e.min.x,As.y=s.normal.y>0?e.max.y:e.min.y,As.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mf(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const d=c.array,u=c._updateRange,f=c.updateRanges;if(i.bindBuffer(l,o),u.count===-1&&f.length===0&&i.bufferSubData(l,0,d),f.length!==0){for(let h=0,m=f.length;h<m;h++){const b=f[h];i.bufferSubData(l,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}c.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(l,u.offset*d.BYTES_PER_ELEMENT,d,u.offset,u.count),u.count=-1),c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Ps extends Vn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,u=e/o,f=t/c,h=[],m=[],b=[],x=[];for(let p=0;p<d;p++){const E=p*f-a;for(let S=0;S<l;S++){const T=S*u-r;m.push(T,-E,0),b.push(0,0,1),x.push(S/o),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const S=E+l*p,T=E+l*(p+1),z=E+1+l*(p+1),R=E+1+l*p;h.push(S,T,R),h.push(T,z,R)}this.setIndex(h),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(b,3)),this.setAttribute("uv",new Dn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
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
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",tu=`
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
}`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,au=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fu=`#ifdef USE_GRADIENTMAP
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
}`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xu=`uniform bool receiveShadow;
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
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Su=`PhysicalMaterial material;
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
#endif`,yu=`struct PhysicalMaterial {
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
}`,Mu=`
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ru=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pu=`#if defined( USE_POINTS_UV )
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
#endif`,Fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Du=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hu=`#ifdef USE_NORMALMAP
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
#endif`,Ku=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ju=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,th=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ih=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ah=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ch=`float getShadowMask() {
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
}`,lh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dh=`#ifdef USE_SKINNING
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
#endif`,fh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uh=`#ifdef USE_SKINNING
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
#endif`,hh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ph=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bh=`#ifdef USE_TRANSMISSION
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
#endif`,gh=`#ifdef USE_TRANSMISSION
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
#endif`,_h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fe={alphahash_fragment:Ef,alphahash_pars_fragment:Tf,alphamap_fragment:If,alphamap_pars_fragment:wf,alphatest_fragment:Cf,alphatest_pars_fragment:Lf,aomap_fragment:Rf,aomap_pars_fragment:Uf,batching_pars_vertex:Af,batching_vertex:Pf,begin_vertex:Ff,beginnormal_vertex:Df,bsdfs:Vf,iridescence_fragment:Nf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Bf,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Zf,color_fragment:zf,color_pars_fragment:Xf,color_pars_vertex:kf,color_vertex:Hf,common:Kf,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:Jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:jf,emissivemap_fragment:qf,emissivemap_pars_fragment:$f,colorspace_fragment:eu,colorspace_pars_fragment:tu,envmap_fragment:nu,envmap_common_pars_fragment:iu,envmap_pars_fragment:su,envmap_pars_vertex:ru,envmap_physical_pars_fragment:mu,envmap_vertex:au,fog_vertex:ou,fog_pars_vertex:cu,fog_fragment:lu,fog_pars_fragment:du,gradientmap_pars_fragment:fu,lightmap_pars_fragment:uu,lights_lambert_fragment:hu,lights_lambert_pars_fragment:pu,lights_pars_begin:xu,lights_toon_fragment:bu,lights_toon_pars_fragment:gu,lights_phong_fragment:_u,lights_phong_pars_fragment:vu,lights_physical_fragment:Su,lights_physical_pars_fragment:yu,lights_fragment_begin:Mu,lights_fragment_maps:Eu,lights_fragment_end:Tu,logdepthbuf_fragment:Iu,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:Cu,logdepthbuf_vertex:Lu,map_fragment:Ru,map_pars_fragment:Uu,map_particle_fragment:Au,map_particle_pars_fragment:Pu,metalnessmap_fragment:Fu,metalnessmap_pars_fragment:Du,morphinstance_vertex:Vu,morphcolor_vertex:Nu,morphnormal_vertex:Gu,morphtarget_pars_vertex:Bu,morphtarget_vertex:Ou,normal_fragment_begin:Wu,normal_fragment_maps:Zu,normal_pars_fragment:zu,normal_pars_vertex:Xu,normal_vertex:ku,normalmap_pars_fragment:Hu,clearcoat_normal_fragment_begin:Ku,clearcoat_normal_fragment_maps:Yu,clearcoat_pars_fragment:Ju,iridescence_pars_fragment:Qu,opaque_fragment:ju,packing:qu,premultiplied_alpha_fragment:$u,project_vertex:eh,dithering_fragment:th,dithering_pars_fragment:nh,roughnessmap_fragment:ih,roughnessmap_pars_fragment:sh,shadowmap_pars_fragment:rh,shadowmap_pars_vertex:ah,shadowmap_vertex:oh,shadowmask_pars_fragment:ch,skinbase_vertex:lh,skinning_pars_vertex:dh,skinning_vertex:fh,skinnormal_vertex:uh,specularmap_fragment:hh,specularmap_pars_fragment:ph,tonemapping_fragment:xh,tonemapping_pars_fragment:mh,transmission_fragment:bh,transmission_pars_fragment:gh,uv_pars_fragment:_h,uv_pars_vertex:vh,uv_vertex:Sh,worldpos_vertex:yh,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Kt={basic:{uniforms:_t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:_t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:_t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:_t([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:_t([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:_t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:_t([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:_t([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:_t([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:_t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:_t([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:_t([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:_t([ce.lights,ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Kt.physical={uniforms:_t([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Fs={r:0,b:0,g:0},On=new zt,Mh=new it;function Eh(i,e,t,n,s,r,a){const o=new We(0);let c=r===!0?0:1,l,d,u=null,f=0,h=null;function m(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function b(E){let S=!1;const T=m(E);T===null?p(o,c):T&&T.isColor&&(p(T,1),S=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,a):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(E,S){const T=m(S);T&&(T.isCubeTexture||T.mapping===ts)?(d===void 0&&(d=new Ht(new gi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:_i(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),On.copy(S.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Mh.makeRotationFromEuler(On)),d.material.toneMapped=Ke.getTransfer(T.colorSpace)!==qe,(u!==T||f!==T.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,u=T,f=T.version,h=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ht(new Ps(2,2),new Mn({name:"BackgroundMaterial",uniforms:_i(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(T.colorSpace)!==qe,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,h=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,S){E.getRGB(Fs,hc(i)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:b,addToRenderList:x}}function Th(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(v,U,K,Z,H){let j=!1;const X=u(Z,K,U);r!==X&&(r=X,l(r.object)),j=h(v,Z,K,H),j&&m(v,Z,K,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,T(v,U,K,Z),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function u(v,U,K){const Z=K.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let j=H[U.id];j===void 0&&(j={},H[U.id]=j);let X=j[Z];return X===void 0&&(X=f(c()),j[Z]=X),X}function f(v){const U=[],K=[],Z=[];for(let H=0;H<t;H++)U[H]=0,K[H]=0,Z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:K,attributeDivisors:Z,object:v,attributes:{},index:null}}function h(v,U,K,Z){const H=r.attributes,j=U.attributes;let X=0;const ee=K.getAttributes();for(const k in ee)if(ee[k].location>=0){const xe=H[k];let w=j[k];if(w===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(w=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(w=v.instanceColor)),xe===void 0||xe.attribute!==w||w&&xe.data!==w.data)return!0;X++}return r.attributesNum!==X||r.index!==Z}function m(v,U,K,Z){const H={},j=U.attributes;let X=0;const ee=K.getAttributes();for(const k in ee)if(ee[k].location>=0){let xe=j[k];xe===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor));const w={};w.attribute=xe,xe&&xe.data&&(w.data=xe.data),H[k]=w,X++}r.attributes=H,r.attributesNum=X,r.index=Z}function b(){const v=r.newAttributes;for(let U=0,K=v.length;U<K;U++)v[U]=0}function x(v){p(v,0)}function p(v,U){const K=r.newAttributes,Z=r.enabledAttributes,H=r.attributeDivisors;K[v]=1,Z[v]===0&&(i.enableVertexAttribArray(v),Z[v]=1),H[v]!==U&&(i.vertexAttribDivisor(v,U),H[v]=U)}function E(){const v=r.newAttributes,U=r.enabledAttributes;for(let K=0,Z=U.length;K<Z;K++)U[K]!==v[K]&&(i.disableVertexAttribArray(K),U[K]=0)}function S(v,U,K,Z,H,j,X){X===!0?i.vertexAttribIPointer(v,U,K,H,j):i.vertexAttribPointer(v,U,K,Z,H,j)}function T(v,U,K,Z){b();const H=Z.attributes,j=K.getAttributes(),X=U.defaultAttributeValues;for(const ee in j){const k=j[ee];if(k.location>=0){let fe=H[ee];if(fe===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),fe!==void 0){const xe=fe.normalized,w=fe.itemSize,V=e.get(fe);if(V===void 0)continue;const J=V.buffer,I=V.type,L=V.bytesPerElement,te=I===i.INT||I===i.UNSIGNED_INT||fe.gpuType===gr;if(fe.isInterleavedBufferAttribute){const ae=fe.data,ge=ae.stride,ve=fe.offset;if(ae.isInstancedInterleavedBuffer){for(let Ce=0;Ce<k.locationSize;Ce++)p(k.location+Ce,ae.meshPerAttribute);v.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ce=0;Ce<k.locationSize;Ce++)x(k.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Ce=0;Ce<k.locationSize;Ce++)S(k.location+Ce,w/k.locationSize,I,xe,ge*L,(ve+w/k.locationSize*Ce)*L,te)}else{if(fe.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)p(k.location+ae,fe.meshPerAttribute);v.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ae=0;ae<k.locationSize;ae++)x(k.location+ae);i.bindBuffer(i.ARRAY_BUFFER,J);for(let ae=0;ae<k.locationSize;ae++)S(k.location+ae,w/k.locationSize,I,xe,w*L,w/k.locationSize*ae*L,te)}}else if(X!==void 0){const xe=X[ee];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(k.location,xe);break;case 3:i.vertexAttrib3fv(k.location,xe);break;case 4:i.vertexAttrib4fv(k.location,xe);break;default:i.vertexAttrib1fv(k.location,xe)}}}}E()}function z(){O();for(const v in n){const U=n[v];for(const K in U){const Z=U[K];for(const H in Z)d(Z[H].object),delete Z[H];delete U[K]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const U=n[v.id];for(const K in U){const Z=U[K];for(const H in Z)d(Z[H].object),delete Z[H];delete U[K]}delete n[v.id]}function A(v){for(const U in n){const K=n[U];if(K[v.id]===void 0)continue;const Z=K[v.id];for(const H in Z)d(Z[H].object),delete Z[H];delete K[v.id]}}function O(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:y,dispose:z,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:x,disableUnusedAttributes:E}}function Ih(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),t.update(d,n,u))}function o(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let h=0;for(let m=0;m<u;m++)h+=d[m];t.update(h,n,1)}function c(l,d,u,f){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<l.length;m++)a(l[m],d[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,u);let m=0;for(let b=0;b<u;b++)m+=d[b];for(let b=0;b<f.length;b++)t.update(m,n,f[b])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function wh(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Vt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const A=R===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==tn&&!A)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=h>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:p,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:T,maxSamples:z}}function Ch(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Gn,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||n!==0||s;return s=f,n=u.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,h){const m=u.clippingPlanes,b=u.clipIntersection,x=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!x)r?d(null):l();else{const E=r?0:n,S=E*4;let T=p.clippingState||null;c.value=T,T=d(m,f,S,h);for(let z=0;z!==S;++z)T[z]=t[z];p.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,h,m){const b=u!==null?u.length:0;let x=null;if(b!==0){if(x=c.value,m!==!0||x===null){const p=h+b*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(x===null||x.length<p)&&(x=new Float32Array(p));for(let S=0,T=h;S!==b;++S,T+=4)a.copy(u[S]).applyMatrix4(E,o),a.normal.toArray(x,T),x[T+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function Lh(i){let e=new WeakMap;function t(a,o){return o===hr?a.mapping=jn:o===pr&&(a.mapping=qn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===hr||o===pr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new vf(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class _c extends pc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,vc=[.125,.215,.35,.446,.526,.582],Wn=20,va=new _c,Sc=new We;let Sa=null,ya=0,Ma=0,Ea=!1;const Zn=(1+Math.sqrt(5))/2,Mi=1/Zn,yc=[new N(-Zn,Mi,0),new N(Zn,Mi,0),new N(-Mi,0,Zn),new N(Mi,0,Zn),new N(0,Zn,-Mi),new N(0,Zn,Mi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,ya,Ma),this._renderer.xr.enabled=Ea,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jn||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ai,format:Vt,colorSpace:bn,depthBuffer:!1},s=Ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rh(r)),this._blurMaterial=Uh(r,e,t)}return s}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,s){const o=new At(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Sc),d.toneMapping=xn,d.autoClear=!1;const h=new rc({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),m=new Ht(new gi,h);let b=!1;const x=e.background;x?x.isColor&&(h.color.copy(x),e.background=null,b=!0):(h.color.copy(Sc),b=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const S=this._cubeSize;Ds(s,E*S,p>2?S:0,S,S),d.setRenderTarget(s),b&&d.render(m,o),d.render(e,o)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===jn||e.mapping===qn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ds(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yc[(s-r-1)%yc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ht(this._lodPlanes[s],l),f=l.uniforms,h=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Wn-1),b=r/m,x=isFinite(r)?1+Math.floor(d*b):Wn;x>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Wn}`);const p=[];let E=0;for(let A=0;A<Wn;++A){const O=A/b,y=Math.exp(-O*O/2);p.push(y),A===0?E+=y:A<x&&(E+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-n;const T=this._sizeLods[s],z=3*T*(s>S-yi?s-S+yi:0),R=4*(this._cubeSize-T);Ds(t,z,R,3*T,2*T),c.setRenderTarget(t),c.render(u,va)}}function Rh(i){const e=[],t=[],n=[];let s=i;const r=i-yi+1+vc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-yi?c=vc[a-i+yi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],h=6,m=6,b=3,x=2,p=1,E=new Float32Array(b*m*h),S=new Float32Array(x*m*h),T=new Float32Array(p*m*h);for(let R=0;R<h;R++){const A=R%3*2/3-1,O=R>2?0:-1,y=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];E.set(y,b*m*R),S.set(f,x*m*R);const v=[R,R,R,R,R,R];T.set(v,p*m*R)}const z=new Vn;z.setAttribute("position",new kt(E,b)),z.setAttribute("uv",new kt(S,x)),z.setAttribute("faceIndex",new kt(T,p)),e.push(z),s>yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ec(i,e,t){const n=new An(i,e,t);return n.texture.mapping=ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Uh(i,e,t){const n=new Float32Array(Wn),s=new N(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Tc(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ta(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ic(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ta(){return`

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
	`}function Ah(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===hr||c===pr,d=c===jn||c===qn;if(l||d){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Mc(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const h=o.image;return l&&h&&h.height>0||d&&h&&s(h)?(t===null&&(t=new Mc(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ph(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&zo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fh(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const b=f.morphAttributes[m];for(let x=0,p=b.length;x<p;x++)e.remove(b[x])}f.removeEventListener("dispose",a),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER);const h=u.morphAttributes;for(const m in h){const b=h[m];for(let x=0,p=b.length;x<p;x++)e.update(b[x],i.ARRAY_BUFFER)}}function l(u){const f=[],h=u.index,m=u.attributes.position;let b=0;if(h!==null){const E=h.array;b=h.version;for(let S=0,T=E.length;S<T;S+=3){const z=E[S+0],R=E[S+1],A=E[S+2];f.push(z,R,R,A,A,z)}}else if(m!==void 0){const E=m.array;b=m.version;for(let S=0,T=E.length/3-1;S<T;S+=3){const z=S+0,R=S+1,A=S+2;f.push(z,R,R,A,A,z)}}else return;const x=new(Wo(f)?oc:ac)(f,1);x.version=b;const p=r.get(u);p&&e.remove(p),r.set(u,x)}function d(u){const f=r.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function Dh(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function l(f,h,m){m!==0&&(i.drawElementsInstanced(n,h,r,f*a,m),t.update(h,n,m))}function d(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,m);let x=0;for(let p=0;p<m;p++)x+=h[p];t.update(x,n,1)}function u(f,h,m,b){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<f.length;p++)l(f[p]/a,h[p],b[p]);else{x.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,b,0,m);let p=0;for(let E=0;E<m;E++)p+=h[E];for(let E=0;E<b.length;E++)t.update(p,n,b[E])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Vh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nh(i,e,t){const n=new WeakMap,s=new lt;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;h===!0&&(S=1),m===!0&&(S=2),b===!0&&(S=3);let T=o.attributes.position.count*S,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*z*4*u),A=new Ko(R,T,z,u);A.type=tn,A.needsUpdate=!0;const O=S*4;for(let v=0;v<u;v++){const U=x[v],K=p[v],Z=E[v],H=T*z*4*v;for(let j=0;j<U.count;j++){const X=j*O;h===!0&&(s.fromBufferAttribute(U,j),R[H+X+0]=s.x,R[H+X+1]=s.y,R[H+X+2]=s.z,R[H+X+3]=0),m===!0&&(s.fromBufferAttribute(K,j),R[H+X+4]=s.x,R[H+X+5]=s.y,R[H+X+6]=s.z,R[H+X+7]=0),b===!0&&(s.fromBufferAttribute(Z,j),R[H+X+8]=s.x,R[H+X+9]=s.y,R[H+X+10]=s.z,R[H+X+11]=Z.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Be(T,z)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let b=0;b<l.length;b++)h+=l[b];const m=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gh(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class wc extends Mt{constructor(e,t,n,s,r,a,o,c,l,d=ei){if(d!==ei&&d!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===ei&&(n=Un),n===void 0&&d===ti&&(n=$n),super(null,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=c!==void 0?c:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Cc=new Mt,Lc=new wc(1,1),Rc=new Ko,Uc=new nf,Ac=new bc,Pc=[],Fc=[],Dc=new Float32Array(16),Vc=new Float32Array(9),Nc=new Float32Array(4);function Ei(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Pc[s];if(r===void 0&&(r=new Float32Array(s),Pc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vs(i,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Oh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function Wh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function Zh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function zh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Nc.set(n),i.uniformMatrix2fv(this.addr,!1,Nc),ft(t,n)}}function Xh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Vc.set(n),i.uniformMatrix3fv(this.addr,!1,Vc),ft(t,n)}}function kh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Dc.set(n),i.uniformMatrix4fv(this.addr,!1,Dc),ft(t,n)}}function Hh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function Yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function Jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function Qh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function $h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function e0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lc.compareFunction=Go,r=Lc):r=Cc,t.setTexture2D(e||r,s)}function t0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uc,s)}function n0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ac,s)}function i0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rc,s)}function s0(i){switch(i){case 5126:return Bh;case 35664:return Oh;case 35665:return Wh;case 35666:return Zh;case 35674:return zh;case 35675:return Xh;case 35676:return kh;case 5124:case 35670:return Hh;case 35667:case 35671:return Kh;case 35668:case 35672:return Yh;case 35669:case 35673:return Jh;case 5125:return Qh;case 36294:return jh;case 36295:return qh;case 36296:return $h;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(i,e){i.uniform1fv(this.addr,e)}function a0(i,e){const t=Ei(e,this.size,2);i.uniform2fv(this.addr,t)}function o0(i,e){const t=Ei(e,this.size,3);i.uniform3fv(this.addr,t)}function c0(i,e){const t=Ei(e,this.size,4);i.uniform4fv(this.addr,t)}function l0(i,e){const t=Ei(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d0(i,e){const t=Ei(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f0(i,e){const t=Ei(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u0(i,e){i.uniform1iv(this.addr,e)}function h0(i,e){i.uniform2iv(this.addr,e)}function p0(i,e){i.uniform3iv(this.addr,e)}function x0(i,e){i.uniform4iv(this.addr,e)}function m0(i,e){i.uniform1uiv(this.addr,e)}function b0(i,e){i.uniform2uiv(this.addr,e)}function g0(i,e){i.uniform3uiv(this.addr,e)}function _0(i,e){i.uniform4uiv(this.addr,e)}function v0(i,e,t){const n=this.cache,s=e.length,r=Vs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Cc,r[a])}function S0(i,e,t){const n=this.cache,s=e.length,r=Vs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Uc,r[a])}function y0(i,e,t){const n=this.cache,s=e.length,r=Vs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ac,r[a])}function M0(i,e,t){const n=this.cache,s=e.length,r=Vs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Rc,r[a])}function E0(i){switch(i){case 5126:return r0;case 35664:return a0;case 35665:return o0;case 35666:return c0;case 35674:return l0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return u0;case 35667:case 35671:return h0;case 35668:case 35672:return p0;case 35669:case 35673:return x0;case 5125:return m0;case 36294:return b0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return M0}}class T0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s0(t.type)}}class I0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}}class w0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function Gc(i,e){i.seq.push(e),i.map[e.id]=e}function C0(i,e,t){const n=i.name,s=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),a=Ia.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Gc(t,l===void 0?new T0(o,i,e):new I0(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new w0(o),Gc(t,u)),t=u}}}class Ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);C0(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Bc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const L0=37297;let R0=0;function U0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function A0(i){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(i);let n;switch(e===t?n="":e===fs&&t===ds?n="LinearDisplayP3ToLinearSRGB":e===ds&&t===fs&&(n="LinearSRGBToLinearDisplayP3"),i){case bn:case cs:return[n,"LinearTransferOETF"];case Zt:case Qr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Oc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+U0(i.getShaderSource(e),a)}else return s}function P0(i,e){const t=A0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function F0(i,e){let t;switch(e){case Rd:t="Linear";break;case Ud:t="Reinhard";break;case Ad:t="OptimizedCineon";break;case Pd:t="ACESFilmic";break;case Dd:t="AgX";break;case Vd:t="Neutral";break;case Fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function D0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wi).join(`
`)}function V0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Wi(i){return i!==""}function Wc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(i){return i.replace(G0,O0)}const B0=new Map;function O0(i,e){let t=Fe[e];if(t===void 0){const n=B0.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wa(t)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(i){return i.replace(W0,Z0)}function Z0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xc(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===So?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qt&&(e="SHADOWMAP_TYPE_VSM"),e}function X0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jn:case qn:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qn:e="ENVMAP_MODE_REFRACTION";break}return e}function H0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ur:e="ENVMAP_BLENDING_MULTIPLY";break;case Cd:e="ENVMAP_BLENDING_MIX";break;case Ld:e="ENVMAP_BLENDING_ADD";break}return e}function K0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=z0(t),l=X0(t),d=k0(t),u=H0(t),f=K0(t),h=D0(t),m=V0(r),b=s.createProgram();let x,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wi).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Wi).join(`
`),p.length>0&&(p+=`
`)):(x=[Xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),p=[Xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==xn?F0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,P0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),a=wa(a),a=Wc(a,t),a=Zc(a,t),o=wa(o),o=Wc(o,t),o=Zc(o,t),a=zc(a),o=zc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+x+a,T=E+p+o,z=Bc(s,s.VERTEX_SHADER,S),R=Bc(s,s.FRAGMENT_SHADER,T);s.attachShader(b,z),s.attachShader(b,R),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function A(U){if(i.debug.checkShaderErrors){const K=s.getProgramInfoLog(b).trim(),Z=s.getShaderInfoLog(z).trim(),H=s.getShaderInfoLog(R).trim();let j=!0,X=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,z,R);else{const ee=Oc(s,z,"vertex"),k=Oc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+ee+`
`+k)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Z===""||H==="")&&(X=!1);X&&(U.diagnostics={runnable:j,programLog:K,vertexShader:{log:Z,prefix:x},fragmentShader:{log:H,prefix:p}})}s.deleteShader(z),s.deleteShader(R),O=new Ns(s,b),y=N0(s,b)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(b,L0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=R,this}let J0=0;class Q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new j0(e),t.set(e,n)),n}}class j0{constructor(e){this.id=J0++,this.code=e,this.usedTimes=0}}function q0(i,e,t,n,s,r,a){const o=new jo,c=new Q0,l=new Set,d=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,v,U,K,Z){const H=K.fog,j=Z.geometry,X=y.isMeshStandardMaterial?K.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),k=ee&&ee.mapping===ts?ee.image.height:null,fe=m[y.type];y.precision!==null&&(h=s.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const xe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,w=xe!==void 0?xe.length:0;let V=0;j.morphAttributes.position!==void 0&&(V=1),j.morphAttributes.normal!==void 0&&(V=2),j.morphAttributes.color!==void 0&&(V=3);let J,I,L,te;if(fe){const ze=Kt[fe];J=ze.vertexShader,I=ze.fragmentShader}else J=y.vertexShader,I=y.fragmentShader,c.update(y),L=c.getVertexShaderID(y),te=c.getFragmentShaderID(y);const ae=i.getRenderTarget(),ge=Z.isInstancedMesh===!0,ve=Z.isBatchedMesh===!0,Ce=!!y.map,Ze=!!y.matcap,C=!!ee,rt=!!y.aoMap,Ye=!!y.lightMap,Je=!!y.bumpMap,Se=!!y.normalMap,at=!!y.displacementMap,Re=!!y.emissiveMap,Ae=!!y.metalnessMap,M=!!y.roughnessMap,g=y.anisotropy>0,W=y.clearcoat>0,$=y.dispersion>0,ne=y.iridescence>0,q=y.sheen>0,ye=y.transmission>0,le=g&&!!y.anisotropyMap,he=W&&!!y.clearcoatMap,Ve=W&&!!y.clearcoatNormalMap,ie=W&&!!y.clearcoatRoughnessMap,ue=ne&&!!y.iridescenceMap,Ge=ne&&!!y.iridescenceThicknessMap,Le=q&&!!y.sheenColorMap,pe=q&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,Ne=!!y.specularColorMap,et=!!y.specularIntensityMap,P=ye&&!!y.transmissionMap,se=ye&&!!y.thicknessMap,Y=!!y.gradientMap,Q=!!y.alphaMap,oe=y.alphaTest>0,Te=!!y.alphaHash,Oe=!!y.extensions;let ot=xn;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ot=i.toneMapping);const pt={shaderID:fe,shaderType:y.type,shaderName:y.name,vertexShader:J,fragmentShader:I,defines:y.defines,customVertexShaderID:L,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:ve,batchingColor:ve&&Z._colorsTexture!==null,instancing:ge,instancingColor:ge&&Z.instanceColor!==null,instancingMorph:ge&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:bn,alphaToCoverage:!!y.alphaToCoverage,map:Ce,matcap:Ze,envMap:C,envMapMode:C&&ee.mapping,envMapCubeUVHeight:k,aoMap:rt,lightMap:Ye,bumpMap:Je,normalMap:Se,displacementMap:f&&at,emissiveMap:Re,normalMapObjectSpace:Se&&y.normalMapType===Od,normalMapTangentSpace:Se&&y.normalMapType===Vo,metalnessMap:Ae,roughnessMap:M,anisotropy:g,anisotropyMap:le,clearcoat:W,clearcoatMap:he,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ie,dispersion:$,iridescence:ne,iridescenceMap:ue,iridescenceThicknessMap:Ge,sheen:q,sheenColorMap:Le,sheenRoughnessMap:pe,specularMap:Ue,specularColorMap:Ne,specularIntensityMap:et,transmission:ye,transmissionMap:P,thicknessMap:se,gradientMap:Y,opaque:y.transparent===!1&&y.blending===Qn&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:oe,alphaHash:Te,combine:y.combine,mapUv:Ce&&b(y.map.channel),aoMapUv:rt&&b(y.aoMap.channel),lightMapUv:Ye&&b(y.lightMap.channel),bumpMapUv:Je&&b(y.bumpMap.channel),normalMapUv:Se&&b(y.normalMap.channel),displacementMapUv:at&&b(y.displacementMap.channel),emissiveMapUv:Re&&b(y.emissiveMap.channel),metalnessMapUv:Ae&&b(y.metalnessMap.channel),roughnessMapUv:M&&b(y.roughnessMap.channel),anisotropyMapUv:le&&b(y.anisotropyMap.channel),clearcoatMapUv:he&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&b(y.sheenRoughnessMap.channel),specularMapUv:Ue&&b(y.specularMap.channel),specularColorMapUv:Ne&&b(y.specularColorMap.channel),specularIntensityMapUv:et&&b(y.specularIntensityMap.channel),transmissionMapUv:P&&b(y.transmissionMap.channel),thicknessMapUv:se&&b(y.thicknessMap.channel),alphaMapUv:Q&&b(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Se||g),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(Ce||Q),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:V,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$t,flipSided:y.side===vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&y.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)v.push(U),v.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(E(v,y),S(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function E(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.doubleSided&&o.enable(10),v.flipSided&&o.enable(11),v.useDepthPacking&&o.enable(12),v.dithering&&o.enable(13),v.transmission&&o.enable(14),v.sheen&&o.enable(15),v.opaque&&o.enable(16),v.pointsUvs&&o.enable(17),v.decodeVideoTexture&&o.enable(18),v.alphaToCoverage&&o.enable(19),y.push(o.mask)}function T(y){const v=m[y.type];let U;if(v){const K=Kt[v];U=mf.clone(K.uniforms)}else U=y.uniforms;return U}function z(y,v){let U;for(let K=0,Z=d.length;K<Z;K++){const H=d[K];if(H.cacheKey===v){U=H,++U.usedTimes;break}}return U===void 0&&(U=new Y0(i,v,y,r),d.push(U)),U}function R(y){if(--y.usedTimes===0){const v=d.indexOf(y);d[v]=d[d.length-1],d.pop(),y.destroy()}}function A(y){c.remove(y)}function O(){c.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:T,acquireProgram:z,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:O}}function $0(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function ep(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,h,m,b,x){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:h,groupOrder:m,renderOrder:u.renderOrder,z:b,group:x},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=h,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=x),e++,p}function o(u,f,h,m,b,x){const p=a(u,f,h,m,b,x);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):t.push(p)}function c(u,f,h,m,b,x){const p=a(u,f,h,m,b,x);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||ep),n.length>1&&n.sort(f||kc),s.length>1&&s.sort(f||kc)}function d(){for(let u=e,f=i.length;u<f;u++){const h=i[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function tp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Hc,i.set(n,[a])):s>=r.length?(a=new Hc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function np(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new We};break;case"SpotLight":t={position:new N,direction:new N,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function ip(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sp=0;function rp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ap(i){const e=new np,t=ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new it,a=new it;function o(l){let d=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let h=0,m=0,b=0,x=0,p=0,E=0,S=0,T=0,z=0,R=0,A=0;l.sort(rp);for(let y=0,v=l.length;y<v;y++){const U=l[y],K=U.color,Z=U.intensity,H=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=K.r*Z,u+=K.g*Z,f+=K.b*Z;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],Z);A++}else if(U.isDirectionalLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ee=U.shadow,k=t.get(U);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,n.directionalShadow[h]=k,n.directionalShadowMap[h]=j,n.directionalShadowMatrix[h]=U.shadow.matrix,E++}n.directional[h]=X,h++}else if(U.isSpotLight){const X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(K).multiplyScalar(Z),X.distance=H,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[b]=X;const ee=U.shadow;if(U.map&&(n.spotLightMap[z]=U.map,z++,ee.updateMatrices(U),U.castShadow&&R++),n.spotLightMatrix[b]=ee.matrix,U.castShadow){const k=t.get(U);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,n.spotShadow[b]=k,n.spotShadowMap[b]=j,T++}b++}else if(U.isRectAreaLight){const X=e.get(U);X.color.copy(K).multiplyScalar(Z),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[x]=X,x++}else if(U.isPointLight){const X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){const ee=U.shadow,k=t.get(U);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,k.shadowCameraNear=ee.camera.near,k.shadowCameraFar=ee.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=U.shadow.matrix,S++}n.point[m]=X,m++}else if(U.isHemisphereLight){const X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(Z),X.groundColor.copy(U.groundColor).multiplyScalar(Z),n.hemi[p]=X,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==h||O.pointLength!==m||O.spotLength!==b||O.rectAreaLength!==x||O.hemiLength!==p||O.numDirectionalShadows!==E||O.numPointShadows!==S||O.numSpotShadows!==T||O.numSpotMaps!==z||O.numLightProbes!==A)&&(n.directional.length=h,n.spot.length=b,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=T+z-R,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,O.directionalLength=h,O.pointLength=m,O.spotLength=b,O.rectAreaLength=x,O.hemiLength=p,O.numDirectionalShadows=E,O.numPointShadows=S,O.numSpotShadows=T,O.numSpotMaps=z,O.numLightProbes=A,n.version=sp++)}function c(l,d){let u=0,f=0,h=0,m=0,b=0;const x=d.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const S=l[p];if(S.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),u++}else if(S.isSpotLight){const T=n.spot[h];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),h++}else if(S.isRectAreaLight){const T=n.rectArea[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(x),a.identity(),r.copy(S.matrixWorld),r.premultiply(x),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(x),f++}else if(S.isHemisphereLight){const T=n.hemi[b];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(x),b++}}}return{setup:o,setupView:c,state:n}}function Kc(i){const e=new ap(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function op(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Kc(i),e.set(s,[o])):r>=a.length?(o=new Kc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class cp extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lp extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fp=`uniform sampler2D shadow_pass;
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
}`;function up(i,e,t){let n=new _a;const s=new Be,r=new Be,a=new lt,o=new cp({depthPacking:Bd}),c=new lp,l={},d=t.maxTextureSize,u={[hn]:vt,[vt]:hn,[$t]:$t},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:dp,fragmentShader:fp}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new Vn;m.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ht(m,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let p=this.type;this.render=function(R,A,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),K=i.state;K.setBlending(pn),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Z=p!==qt&&this.type===qt,H=p===qt&&this.type!==qt;for(let j=0,X=R.length;j<X;j++){const ee=R[j],k=ee.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const fe=k.getFrameExtents();if(s.multiply(fe),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/fe.x),s.x=r.x*fe.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/fe.y),s.y=r.y*fe.y,k.mapSize.y=r.y)),k.map===null||Z===!0||H===!0){const w=this.type!==qt?{minFilter:Rt,magFilter:Rt}:{};k.map!==null&&k.map.dispose(),k.map=new An(s.x,s.y,w),k.map.texture.name=ee.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const xe=k.getViewportCount();for(let w=0;w<xe;w++){const V=k.getViewport(w);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),K.viewport(a),k.updateMatrices(ee,w),n=k.getFrustum(),T(A,O,k.camera,ee,this.type)}k.isPointLightShadow!==!0&&this.type===qt&&E(k,O),k.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(y,v,U)};function E(R,A){const O=e.update(b);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new An(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,O,f,b,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,O,h,b,null)}function S(R,A,O,y){let v=null;const U=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)v=U;else if(v=O.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const K=v.uuid,Z=A.uuid;let H=l[K];H===void 0&&(H={},l[K]=H);let j=H[Z];j===void 0&&(j=v.clone(),H[Z]=j,A.addEventListener("dispose",z)),v=j}if(v.visible=A.visible,v.wireframe=A.wireframe,y===qt?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,O.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const K=i.properties.get(v);K.light=O}return v}function T(R,A,O,y,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===qt)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const Z=e.update(R),H=R.material;if(Array.isArray(H)){const j=Z.groups;for(let X=0,ee=j.length;X<ee;X++){const k=j[X],fe=H[k.materialIndex];if(fe&&fe.visible){const xe=S(R,fe,y,v);R.onBeforeShadow(i,R,A,O,Z,xe,k),i.renderBufferDirect(O,null,Z,xe,R,k),R.onAfterShadow(i,R,A,O,Z,xe,k)}}}else if(H.visible){const j=S(R,H,y,v);R.onBeforeShadow(i,R,A,O,Z,j,null),i.renderBufferDirect(O,null,Z,j,R,null),R.onAfterShadow(i,R,A,O,Z,j,null)}}const K=R.children;for(let Z=0,H=K.length;Z<H;Z++)T(K[Z],A,O,y,v)}function z(R){R.target.removeEventListener("dispose",z);for(const O in l){const y=l[O],v=R.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function hp(i){function e(){let P=!1;const se=new lt;let Y=null;const Q=new lt(0,0,0,0);return{setMask:function(oe){Y!==oe&&!P&&(i.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){P=oe},setClear:function(oe,Te,Oe,ot,pt){pt===!0&&(oe*=ot,Te*=ot,Oe*=ot),se.set(oe,Te,Oe,ot),Q.equals(se)===!1&&(i.clearColor(oe,Te,Oe,ot),Q.copy(se))},reset:function(){P=!1,Y=null,Q.set(-1,0,0,0)}}}function t(){let P=!1,se=null,Y=null,Q=null;return{setTest:function(oe){oe?te(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(oe){se!==oe&&!P&&(i.depthMask(oe),se=oe)},setFunc:function(oe){if(Y!==oe){switch(oe){case Sd:i.depthFunc(i.NEVER);break;case yd:i.depthFunc(i.ALWAYS);break;case Md:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case Ed:i.depthFunc(i.EQUAL);break;case Td:i.depthFunc(i.GEQUAL);break;case Id:i.depthFunc(i.GREATER);break;case wd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=oe}},setLocked:function(oe){P=oe},setClear:function(oe){Q!==oe&&(i.clearDepth(oe),Q=oe)},reset:function(){P=!1,se=null,Y=null,Q=null}}}function n(){let P=!1,se=null,Y=null,Q=null,oe=null,Te=null,Oe=null,ot=null,pt=null;return{setTest:function(ze){P||(ze?te(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(ze){se!==ze&&!P&&(i.stencilMask(ze),se=ze)},setFunc:function(ze,dn,Jt){(Y!==ze||Q!==dn||oe!==Jt)&&(i.stencilFunc(ze,dn,Jt),Y=ze,Q=dn,oe=Jt)},setOp:function(ze,dn,Jt){(Te!==ze||Oe!==dn||ot!==Jt)&&(i.stencilOp(ze,dn,Jt),Te=ze,Oe=dn,ot=Jt)},setLocked:function(ze){P=ze},setClear:function(ze){pt!==ze&&(i.clearStencil(ze),pt=ze)},reset:function(){P=!1,se=null,Y=null,Q=null,oe=null,Te=null,Oe=null,ot=null,pt=null}}}const s=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},d={},u=new WeakMap,f=[],h=null,m=!1,b=null,x=null,p=null,E=null,S=null,T=null,z=null,R=new We(0,0,0),A=0,O=!1,y=null,v=null,U=null,K=null,Z=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,X=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ee)[1]),j=X>=1):ee.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),j=X>=2);let k=null,fe={};const xe=i.getParameter(i.SCISSOR_BOX),w=i.getParameter(i.VIEWPORT),V=new lt().fromArray(xe),J=new lt().fromArray(w);function I(P,se,Y,Q){const oe=new Uint8Array(4),Te=i.createTexture();i.bindTexture(P,Te),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<Y;Oe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(se+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return Te}const L={};L[i.TEXTURE_2D]=I(i.TEXTURE_2D,i.TEXTURE_2D,1),L[i.TEXTURE_CUBE_MAP]=I(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[i.TEXTURE_2D_ARRAY]=I(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),L[i.TEXTURE_3D]=I(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),te(i.DEPTH_TEST),r.setFunc(es),Je(!1),Se(vo),te(i.CULL_FACE),rt(pn);function te(P){l[P]!==!0&&(i.enable(P),l[P]=!0)}function ae(P){l[P]!==!1&&(i.disable(P),l[P]=!1)}function ge(P,se){return d[P]!==se?(i.bindFramebuffer(P,se),d[P]=se,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function ve(P,se){let Y=f,Q=!1;if(P){Y=u.get(se),Y===void 0&&(Y=[],u.set(se,Y));const oe=P.textures;if(Y.length!==oe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Oe=oe.length;Te<Oe;Te++)Y[Te]=i.COLOR_ATTACHMENT0+Te;Y.length=oe.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function Ce(P){return h!==P?(i.useProgram(P),h=P,!0):!1}const Ze={[Cn]:i.FUNC_ADD,[sd]:i.FUNC_SUBTRACT,[rd]:i.FUNC_REVERSE_SUBTRACT};Ze[ad]=i.MIN,Ze[od]=i.MAX;const C={[cd]:i.ZERO,[ld]:i.ONE,[dd]:i.SRC_COLOR,[dr]:i.SRC_ALPHA,[md]:i.SRC_ALPHA_SATURATE,[pd]:i.DST_COLOR,[ud]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[fr]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[hd]:i.ONE_MINUS_DST_ALPHA,[bd]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[_d]:i.CONSTANT_ALPHA,[vd]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(P,se,Y,Q,oe,Te,Oe,ot,pt,ze){if(P===pn){m===!0&&(ae(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),P!==id){if(P!==b||ze!==O){if((x!==Cn||S!==Cn)&&(i.blendEquation(i.FUNC_ADD),x=Cn,S=Cn),ze)switch(P){case Qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yo:i.blendFunc(i.ONE,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,E=null,T=null,z=null,R.set(0,0,0),A=0,b=P,O=ze}return}oe=oe||se,Te=Te||Y,Oe=Oe||Q,(se!==x||oe!==S)&&(i.blendEquationSeparate(Ze[se],Ze[oe]),x=se,S=oe),(Y!==p||Q!==E||Te!==T||Oe!==z)&&(i.blendFuncSeparate(C[Y],C[Q],C[Te],C[Oe]),p=Y,E=Q,T=Te,z=Oe),(ot.equals(R)===!1||pt!==A)&&(i.blendColor(ot.r,ot.g,ot.b,pt),R.copy(ot),A=pt),b=P,O=!1}function Ye(P,se){P.side===$t?ae(i.CULL_FACE):te(i.CULL_FACE);let Y=P.side===vt;se&&(Y=!Y),Je(Y),P.blending===Qn&&P.transparent===!1?rt(pn):rt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const Q=P.stencilWrite;a.setTest(Q),Q&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function Se(P){P!==ed?(te(i.CULL_FACE),P!==v&&(P===vo?i.cullFace(i.BACK):P===td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),v=P}function at(P){P!==U&&(j&&i.lineWidth(P),U=P)}function Re(P,se,Y){P?(te(i.POLYGON_OFFSET_FILL),(K!==se||Z!==Y)&&(i.polygonOffset(se,Y),K=se,Z=Y)):ae(i.POLYGON_OFFSET_FILL)}function Ae(P){P?te(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function M(P){P===void 0&&(P=i.TEXTURE0+H-1),k!==P&&(i.activeTexture(P),k=P)}function g(P,se,Y){Y===void 0&&(k===null?Y=i.TEXTURE0+H-1:Y=k);let Q=fe[Y];Q===void 0&&(Q={type:void 0,texture:void 0},fe[Y]=Q),(Q.type!==P||Q.texture!==se)&&(k!==Y&&(i.activeTexture(Y),k=Y),i.bindTexture(P,se||L[P]),Q.type=P,Q.texture=se)}function W(){const P=fe[k];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(P){V.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),V.copy(P))}function pe(P){J.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),J.copy(P))}function Ue(P,se){let Y=c.get(se);Y===void 0&&(Y=new WeakMap,c.set(se,Y));let Q=Y.get(P);Q===void 0&&(Q=i.getUniformBlockIndex(se,P.name),Y.set(P,Q))}function Ne(P,se){const Q=c.get(se).get(P);o.get(se)!==Q&&(i.uniformBlockBinding(se,Q,P.__bindingPointIndex),o.set(se,Q))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},k=null,fe={},d={},u=new WeakMap,f=[],h=null,m=!1,b=null,x=null,p=null,E=null,S=null,T=null,z=null,R=new We(0,0,0),A=0,O=!1,y=null,v=null,U=null,K=null,Z=null,V.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:te,disable:ae,bindFramebuffer:ge,drawBuffers:ve,useProgram:Ce,setBlending:rt,setMaterial:Ye,setFlipSided:Je,setCullFace:Se,setLineWidth:at,setPolygonOffset:Re,setScissorTest:Ae,activeTexture:M,bindTexture:g,unbindTexture:W,compressedTexImage2D:$,compressedTexImage3D:ne,texImage2D:ue,texImage3D:Ge,updateUBOMapping:Ue,uniformBlockBinding:Ne,texStorage2D:Ve,texStorage3D:ie,texSubImage2D:q,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:he,scissor:Le,viewport:pe,reset:et}}function Yc(i,e,t,n){const s=pp(n);switch(t){case Lo:return i*e;case Uo:return i*e;case Ao:return i*e*2;case Po:return i*e/s.components*s.byteLength;case Sr:return i*e/s.components*s.byteLength;case Fo:return i*e*2/s.components*s.byteLength;case yr:return i*e*2/s.components*s.byteLength;case Ro:return i*e*3/s.components*s.byteLength;case Vt:return i*e*4/s.components*s.byteLength;case Mr:return i*e*4/s.components*s.byteLength;case is:case ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rs:case as:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tr:case wr:return Math.max(i,16)*Math.max(e,8)/4;case Er:case Ir:return Math.max(i,8)*Math.max(e,8)/2;case Cr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ar:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Nr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Br:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Or:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xr:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case os:case kr:case Hr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Do:case Kr:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yr:case Jr:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pp(i){switch(i){case en:case Io:return{byteLength:1,components:1};case Ui:case wo:case Ai:return{byteLength:2,components:1};case _r:case vr:return{byteLength:2,components:4};case Un:case gr:case tn:return{byteLength:4,components:1};case Co:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,d=new WeakMap;let u;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,g){return h?new OffscreenCanvas(M,g):hs("canvas")}function b(M,g,W){let $=1;const ne=Ae(M);if((ne.width>W||ne.height>W)&&($=W/Math.max(ne.width,ne.height)),$<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const q=Math.floor($*ne.width),ye=Math.floor($*ne.height);u===void 0&&(u=m(q,ye));const le=g?m(q,ye):u;return le.width=q,le.height=ye,le.getContext("2d").drawImage(M,0,0,q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+q+"x"+ye+")."),le}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),M;return M}function x(M){return M.generateMipmaps&&M.minFilter!==Rt&&M.minFilter!==Dt}function p(M){i.generateMipmap(M)}function E(M,g,W,$,ne=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let q=g;if(g===i.RED&&(W===i.FLOAT&&(q=i.R32F),W===i.HALF_FLOAT&&(q=i.R16F),W===i.UNSIGNED_BYTE&&(q=i.R8)),g===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.R8UI),W===i.UNSIGNED_SHORT&&(q=i.R16UI),W===i.UNSIGNED_INT&&(q=i.R32UI),W===i.BYTE&&(q=i.R8I),W===i.SHORT&&(q=i.R16I),W===i.INT&&(q=i.R32I)),g===i.RG&&(W===i.FLOAT&&(q=i.RG32F),W===i.HALF_FLOAT&&(q=i.RG16F),W===i.UNSIGNED_BYTE&&(q=i.RG8)),g===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.RG8UI),W===i.UNSIGNED_SHORT&&(q=i.RG16UI),W===i.UNSIGNED_INT&&(q=i.RG32UI),W===i.BYTE&&(q=i.RG8I),W===i.SHORT&&(q=i.RG16I),W===i.INT&&(q=i.RG32I)),g===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),g===i.RGBA){const ye=ne?ls:Ke.getTransfer($);W===i.FLOAT&&(q=i.RGBA32F),W===i.HALF_FLOAT&&(q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(q=ye===qe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(M,g){let W;return M?g===null||g===Un||g===$n?W=i.DEPTH24_STENCIL8:g===tn?W=i.DEPTH32F_STENCIL8:g===Ui&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Un||g===$n?W=i.DEPTH_COMPONENT24:g===tn?W=i.DEPTH_COMPONENT32F:g===Ui&&(W=i.DEPTH_COMPONENT16),W}function T(M,g){return x(M)===!0||M.isFramebufferTexture&&M.minFilter!==Rt&&M.minFilter!==Dt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function z(M){const g=M.target;g.removeEventListener("dispose",z),A(g),g.isVideoTexture&&d.delete(g)}function R(M){const g=M.target;g.removeEventListener("dispose",R),y(g)}function A(M){const g=n.get(M);if(g.__webglInit===void 0)return;const W=M.source,$=f.get(W);if($){const ne=$[g.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(M),Object.keys($).length===0&&f.delete(W)}n.remove(M)}function O(M){const g=n.get(M);i.deleteTexture(g.__webglTexture);const W=M.source,$=f.get(W);delete $[g.__cacheKey],a.memory.textures--}function y(M){const g=n.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let ne=0;ne<g.__webglFramebuffer[$].length;ne++)i.deleteFramebuffer(g.__webglFramebuffer[$][ne]);else i.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)i.deleteFramebuffer(g.__webglFramebuffer[$]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const W=M.textures;for(let $=0,ne=W.length;$<ne;$++){const q=n.get(W[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(W[$])}n.remove(M)}let v=0;function U(){v=0}function K(){const M=v;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),v+=1,M}function Z(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function H(M,g){const W=n.get(M);if(M.isVideoTexture&&at(M),M.isRenderTargetTexture===!1&&M.version>0&&W.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,M,g);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+g)}function j(M,g){const W=n.get(M);if(M.version>0&&W.__version!==M.version){J(W,M,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+g)}function X(M,g){const W=n.get(M);if(M.version>0&&W.__version!==M.version){J(W,M,g);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+g)}function ee(M,g){const W=n.get(M);if(M.version>0&&W.__version!==M.version){I(W,M,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+g)}const k={[xr]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[mr]:i.MIRRORED_REPEAT},fe={[Rt]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[ns]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[br]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},xe={[Wd]:i.NEVER,[Kd]:i.ALWAYS,[Zd]:i.LESS,[Go]:i.LEQUAL,[zd]:i.EQUAL,[Hd]:i.GEQUAL,[Xd]:i.GREATER,[kd]:i.NOTEQUAL};function w(M,g){if(g.type===tn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Dt||g.magFilter===br||g.magFilter===ns||g.magFilter===Rn||g.minFilter===Dt||g.minFilter===br||g.minFilter===ns||g.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,k[g.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,k[g.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,k[g.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,fe[g.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,fe[g.minFilter]),g.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,xe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rt||g.minFilter!==ns&&g.minFilter!==Rn||g.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function V(M,g){let W=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",z));const $=g.source;let ne=f.get($);ne===void 0&&(ne={},f.set($,ne));const q=Z(g);if(q!==M.__cacheKey){ne[q]===void 0&&(ne[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[q].usedTimes++;const ye=ne[M.__cacheKey];ye!==void 0&&(ne[M.__cacheKey].usedTimes--,ye.usedTimes===0&&O(g)),M.__cacheKey=q,M.__webglTexture=ne[q].texture}return W}function J(M,g,W){let $=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=i.TEXTURE_3D);const ne=V(M,g),q=g.source;t.bindTexture($,M.__webglTexture,i.TEXTURE0+W);const ye=n.get(q);if(q.version!==ye.__version||ne===!0){t.activeTexture(i.TEXTURE0+W);const le=Ke.getPrimaries(Ke.workingColorSpace),he=g.colorSpace===mn?null:Ke.getPrimaries(g.colorSpace),Ve=g.colorSpace===mn||le===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ie=b(g.image,!1,s.maxTextureSize);ie=Re(g,ie);const ue=r.convert(g.format,g.colorSpace),Ge=r.convert(g.type);let Le=E(g.internalFormat,ue,Ge,g.colorSpace,g.isVideoTexture);w($,g);let pe;const Ue=g.mipmaps,Ne=g.isVideoTexture!==!0,et=ye.__version===void 0||ne===!0,P=q.dataReady,se=T(g,ie);if(g.isDepthTexture)Le=S(g.format===ti,g.type),et&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,Le,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Le,ie.width,ie.height,0,ue,Ge,null));else if(g.isDataTexture)if(Ue.length>0){Ne&&et&&t.texStorage2D(i.TEXTURE_2D,se,Le,Ue[0].width,Ue[0].height);for(let Y=0,Q=Ue.length;Y<Q;Y++)pe=Ue[Y],Ne?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,pe.width,pe.height,ue,Ge,pe.data):t.texImage2D(i.TEXTURE_2D,Y,Le,pe.width,pe.height,0,ue,Ge,pe.data);g.generateMipmaps=!1}else Ne?(et&&t.texStorage2D(i.TEXTURE_2D,se,Le,ie.width,ie.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ue,Ge,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Le,ie.width,ie.height,0,ue,Ge,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ne&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Le,Ue[0].width,Ue[0].height,ie.depth);for(let Y=0,Q=Ue.length;Y<Q;Y++)if(pe=Ue[Y],g.format!==Vt)if(ue!==null)if(Ne){if(P)if(g.layerUpdates.size>0){const oe=Yc(pe.width,pe.height,g.format,g.type);for(const Te of g.layerUpdates){const Oe=pe.data.subarray(Te*oe/pe.data.BYTES_PER_ELEMENT,(Te+1)*oe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Te,pe.width,pe.height,1,ue,Oe,0,0)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,pe.width,pe.height,ie.depth,ue,pe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Le,pe.width,pe.height,ie.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,pe.width,pe.height,ie.depth,ue,Ge,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Le,pe.width,pe.height,ie.depth,0,ue,Ge,pe.data)}else{Ne&&et&&t.texStorage2D(i.TEXTURE_2D,se,Le,Ue[0].width,Ue[0].height);for(let Y=0,Q=Ue.length;Y<Q;Y++)pe=Ue[Y],g.format!==Vt?ue!==null?Ne?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,pe.width,pe.height,ue,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Le,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,pe.width,pe.height,ue,Ge,pe.data):t.texImage2D(i.TEXTURE_2D,Y,Le,pe.width,pe.height,0,ue,Ge,pe.data)}else if(g.isDataArrayTexture)if(Ne){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Le,ie.width,ie.height,ie.depth),P)if(g.layerUpdates.size>0){const Y=Yc(ie.width,ie.height,g.format,g.type);for(const Q of g.layerUpdates){const oe=ie.data.subarray(Q*Y/ie.data.BYTES_PER_ELEMENT,(Q+1)*Y/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,ue,Ge,oe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ue,Ge,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,ue,Ge,ie.data);else if(g.isData3DTexture)Ne?(et&&t.texStorage3D(i.TEXTURE_3D,se,Le,ie.width,ie.height,ie.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ue,Ge,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,ue,Ge,ie.data);else if(g.isFramebufferTexture){if(et)if(Ne)t.texStorage2D(i.TEXTURE_2D,se,Le,ie.width,ie.height);else{let Y=ie.width,Q=ie.height;for(let oe=0;oe<se;oe++)t.texImage2D(i.TEXTURE_2D,oe,Le,Y,Q,0,ue,Ge,null),Y>>=1,Q>>=1}}else if(Ue.length>0){if(Ne&&et){const Y=Ae(Ue[0]);t.texStorage2D(i.TEXTURE_2D,se,Le,Y.width,Y.height)}for(let Y=0,Q=Ue.length;Y<Q;Y++)pe=Ue[Y],Ne?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ue,Ge,pe):t.texImage2D(i.TEXTURE_2D,Y,Le,ue,Ge,pe);g.generateMipmaps=!1}else if(Ne){if(et){const Y=Ae(ie);t.texStorage2D(i.TEXTURE_2D,se,Le,Y.width,Y.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ge,ie)}else t.texImage2D(i.TEXTURE_2D,0,Le,ue,Ge,ie);x(g)&&p($),ye.__version=q.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function I(M,g,W){if(g.image.length!==6)return;const $=V(M,g),ne=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+W);const q=n.get(ne);if(ne.version!==q.__version||$===!0){t.activeTexture(i.TEXTURE0+W);const ye=Ke.getPrimaries(Ke.workingColorSpace),le=g.colorSpace===mn?null:Ke.getPrimaries(g.colorSpace),he=g.colorSpace===mn||ye===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ve=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let Q=0;Q<6;Q++)!Ve&&!ie?ue[Q]=b(g.image[Q],!0,s.maxCubemapSize):ue[Q]=ie?g.image[Q].image:g.image[Q],ue[Q]=Re(g,ue[Q]);const Ge=ue[0],Le=r.convert(g.format,g.colorSpace),pe=r.convert(g.type),Ue=E(g.internalFormat,Le,pe,g.colorSpace),Ne=g.isVideoTexture!==!0,et=q.__version===void 0||$===!0,P=ne.dataReady;let se=T(g,Ge);w(i.TEXTURE_CUBE_MAP,g);let Y;if(Ve){Ne&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ue,Ge.width,Ge.height);for(let Q=0;Q<6;Q++){Y=ue[Q].mipmaps;for(let oe=0;oe<Y.length;oe++){const Te=Y[oe];g.format!==Vt?Le!==null?Ne?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe,0,0,Te.width,Te.height,Le,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe,Ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe,0,0,Te.width,Te.height,Le,pe,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe,Ue,Te.width,Te.height,0,Le,pe,Te.data)}}}else{if(Y=g.mipmaps,Ne&&et){Y.length>0&&se++;const Q=Ae(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ue,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ue[Q].width,ue[Q].height,Le,pe,ue[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,ue[Q].width,ue[Q].height,0,Le,pe,ue[Q].data);for(let oe=0;oe<Y.length;oe++){const Oe=Y[oe].image[Q].image;Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe+1,0,0,Oe.width,Oe.height,Le,pe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe+1,Ue,Oe.width,Oe.height,0,Le,pe,Oe.data)}}else{Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,pe,ue[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ue,Le,pe,ue[Q]);for(let oe=0;oe<Y.length;oe++){const Te=Y[oe];Ne?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe+1,0,0,Le,pe,Te.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,oe+1,Ue,Le,pe,Te.image[Q])}}}x(g)&&p(i.TEXTURE_CUBE_MAP),q.__version=ne.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function L(M,g,W,$,ne,q){const ye=r.convert(W.format,W.colorSpace),le=r.convert(W.type),he=E(W.internalFormat,ye,le,W.colorSpace);if(!n.get(g).__hasExternalTextures){const ie=Math.max(1,g.width>>q),ue=Math.max(1,g.height>>q);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,q,he,ie,ue,g.depth,0,ye,le,null):t.texImage2D(ne,q,he,ie,ue,0,ye,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),Se(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ne,n.get(W).__webglTexture,0,Je(g)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ne,n.get(W).__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(M,g,W){if(i.bindRenderbuffer(i.RENDERBUFFER,M),g.depthBuffer){const $=g.depthTexture,ne=$&&$.isDepthTexture?$.type:null,q=S(g.stencilBuffer,ne),ye=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Je(g);Se(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,q,g.width,g.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,q,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,M)}else{const $=g.textures;for(let ne=0;ne<$.length;ne++){const q=$[ne],ye=r.convert(q.format,q.colorSpace),le=r.convert(q.type),he=E(q.internalFormat,ye,le,q.colorSpace),Ve=Je(g);W&&Se(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,he,g.width,g.height):Se(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,he,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,he,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H(g.depthTexture,0);const $=n.get(g.depthTexture).__webglTexture,ne=Je(g);if(g.depthTexture.format===ei)Se(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(g.depthTexture.format===ti)Se(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ge(M){const g=n.get(M),W=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ae(g.__webglFramebuffer,M)}else if(W){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]=i.createRenderbuffer(),te(g.__webglDepthbuffer[$],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),te(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(M,g,W){const $=n.get(M);g!==void 0&&L($.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ge(M)}function Ce(M){const g=M.texture,W=n.get(M),$=n.get(g);M.addEventListener("dispose",R);const ne=M.textures,q=M.isWebGLCubeRenderTarget===!0,ye=ne.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=g.version,a.memory.textures++),q){W.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){W.__webglFramebuffer[le]=[];for(let he=0;he<g.mipmaps.length;he++)W.__webglFramebuffer[le][he]=i.createFramebuffer()}else W.__webglFramebuffer[le]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){W.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)W.__webglFramebuffer[le]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ye)for(let le=0,he=ne.length;le<he;le++){const Ve=n.get(ne[le]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&Se(M)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const he=ne[le];W.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[le]);const Ve=r.convert(he.format,he.colorSpace),ie=r.convert(he.type),ue=E(he.internalFormat,Ve,ie,he.colorSpace,M.isXRRenderTarget===!0),Ge=Je(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,ue,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,W.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),te(W.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),w(i.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)L(W.__webglFramebuffer[le][he],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,he);else L(W.__webglFramebuffer[le],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);x(g)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,he=ne.length;le<he;le++){const Ve=ne[le],ie=n.get(Ve);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),w(i.TEXTURE_2D,Ve),L(W.__webglFramebuffer,M,Ve,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),x(Ve)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(le=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),w(le,g),g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)L(W.__webglFramebuffer[he],M,g,i.COLOR_ATTACHMENT0,le,he);else L(W.__webglFramebuffer,M,g,i.COLOR_ATTACHMENT0,le,0);x(g)&&p(le),t.unbindTexture()}M.depthBuffer&&ge(M)}function Ze(M){const g=M.textures;for(let W=0,$=g.length;W<$;W++){const ne=g[W];if(x(ne)){const q=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(ne).__webglTexture;t.bindTexture(q,ye),p(q),t.unbindTexture()}}}const C=[],rt=[];function Ye(M){if(M.samples>0){if(Se(M)===!1){const g=M.textures,W=M.width,$=M.height;let ne=i.COLOR_BUFFER_BIT;const q=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(M),le=g.length>1;if(le)for(let he=0;he<g.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let he=0;he<g.length;he++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[he]);const Ve=n.get(g[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,ne,i.NEAREST),c===!0&&(C.length=0,rt.length=0,C.push(i.COLOR_ATTACHMENT0+he),M.depthBuffer&&M.resolveDepthBuffer===!1&&(C.push(q),rt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let he=0;he<g.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ye.__webglColorRenderbuffer[he]);const Ve=n.get(g[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const g=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Je(M){return Math.min(s.maxSamples,M.samples)}function Se(M){const g=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function at(M){const g=a.render.frame;d.get(M)!==g&&(d.set(M,g),M.update())}function Re(M,g){const W=M.colorSpace,$=M.format,ne=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||W!==bn&&W!==mn&&(Ke.getTransfer(W)===qe?($!==Vt||ne!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),g}function Ae(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=ee,this.rebindTextures=ve,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=L,this.useMultisampledRTT=Se}function mp(i,e){function t(n,s=mn){let r;const a=Ke.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===_r)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Co)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Io)return i.BYTE;if(n===wo)return i.SHORT;if(n===Ui)return i.UNSIGNED_SHORT;if(n===gr)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===Ai)return i.HALF_FLOAT;if(n===Lo)return i.ALPHA;if(n===Ro)return i.RGB;if(n===Vt)return i.RGBA;if(n===Uo)return i.LUMINANCE;if(n===Ao)return i.LUMINANCE_ALPHA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===Po)return i.RED;if(n===Sr)return i.RED_INTEGER;if(n===Fo)return i.RG;if(n===yr)return i.RG_INTEGER;if(n===Mr)return i.RGBA_INTEGER;if(n===is||n===ss||n===rs||n===as)if(a===qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ss)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===as)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Er||n===Tr||n===Ir||n===wr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cr||n===Lr||n===Rr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cr||n===Lr)return a===qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ur||n===Ar||n===Pr||n===Fr||n===Dr||n===Vr||n===Nr||n===Gr||n===Br||n===Or||n===Wr||n===Zr||n===zr||n===Xr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ur)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ar)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Br)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Or)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xr)return a===qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===os||n===kr||n===Hr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===os)return a===qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Kr||n===Yr||n===Jr)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===os)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$n?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class bp extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ti extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gp={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,n),p=this._getHandJoint(l,b);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,m=.005;l.inputState.pinching&&f>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _p=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vp=`
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

}`;class Sp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Mt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mn({vertexShader:_p,fragmentShader:vp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Ps(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yp extends ii{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,f=null,h=null,m=null;const b=new Sp,x=t.getContextAttributes();let p=null,E=null;const S=[],T=[],z=new Be;let R=null;const A=new At;A.layers.enable(1),A.viewport=new lt;const O=new At;O.layers.enable(2),O.viewport=new lt;const y=[A,O],v=new bp;v.layers.enable(1),v.layers.enable(2);let U=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let L=S[I];return L===void 0&&(L=new Ca,S[I]=L),L.getTargetRaySpace()},this.getControllerGrip=function(I){let L=S[I];return L===void 0&&(L=new Ca,S[I]=L),L.getGripSpace()},this.getHand=function(I){let L=S[I];return L===void 0&&(L=new Ca,S[I]=L),L.getHandSpace()};function Z(I){const L=T.indexOf(I.inputSource);if(L===-1)return;const te=S[L];te!==void 0&&(te.update(I.inputSource,I.frame,l||a),te.dispatchEvent({type:I.type,data:I.inputSource}))}function H(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",j);for(let I=0;I<S.length;I++){const L=T[I];L!==null&&(T[I]=null,S[I].disconnect(L))}U=null,K=null,b.reset(),e.setRenderTarget(p),h=null,f=null,u=null,s=null,E=null,J.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0){const L={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,L),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new An(h.framebufferWidth,h.framebufferHeight,{format:Vt,type:en,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let L=null,te=null,ae=null;x.depth&&(ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,L=x.stencil?ti:ei,te=x.stencil?$n:Un);const ge={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new An(f.textureWidth,f.textureHeight,{format:Vt,type:en,depthTexture:new wc(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function j(I){for(let L=0;L<I.removed.length;L++){const te=I.removed[L],ae=T.indexOf(te);ae>=0&&(T[ae]=null,S[ae].disconnect(te))}for(let L=0;L<I.added.length;L++){const te=I.added[L];let ae=T.indexOf(te);if(ae===-1){for(let ve=0;ve<S.length;ve++)if(ve>=T.length){T.push(te),ae=ve;break}else if(T[ve]===null){T[ve]=te,ae=ve;break}if(ae===-1)break}const ge=S[ae];ge&&ge.connect(te)}}const X=new N,ee=new N;function k(I,L,te){X.setFromMatrixPosition(L.matrixWorld),ee.setFromMatrixPosition(te.matrixWorld);const ae=X.distanceTo(ee),ge=L.projectionMatrix.elements,ve=te.projectionMatrix.elements,Ce=ge[14]/(ge[10]-1),Ze=ge[14]/(ge[10]+1),C=(ge[9]+1)/ge[5],rt=(ge[9]-1)/ge[5],Ye=(ge[8]-1)/ge[0],Je=(ve[8]+1)/ve[0],Se=Ce*Ye,at=Ce*Je,Re=ae/(-Ye+Je),Ae=Re*-Ye;L.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ae),I.translateZ(Re),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const M=Ce+Re,g=Ze+Re,W=Se-Ae,$=at+(ae-Ae),ne=C*Ze/g*M,q=rt*Ze/g*M;I.projectionMatrix.makePerspective(W,$,ne,q,M,g),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function fe(I,L){L===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(L.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;b.texture!==null&&(I.near=b.depthNear,I.far=b.depthFar),v.near=O.near=A.near=I.near,v.far=O.far=A.far=I.far,(U!==v.near||K!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),U=v.near,K=v.far,A.near=U,A.far=K,O.near=U,O.far=K,A.updateProjectionMatrix(),O.updateProjectionMatrix(),I.updateProjectionMatrix());const L=I.parent,te=v.cameras;fe(v,L);for(let ae=0;ae<te.length;ae++)fe(te[ae],L);te.length===2?k(v,A,O):v.projectionMatrix.copy(A.projectionMatrix),xe(I,v,L)};function xe(I,L,te){te===null?I.matrix.copy(L.matrixWorld):(I.matrix.copy(te.matrixWorld),I.matrix.invert(),I.matrix.multiply(L.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(L.projectionMatrix),I.projectionMatrixInverse.copy(L.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=qr*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(I){c=I,f!==null&&(f.fixedFoveation=I),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=I)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(v)};let w=null;function V(I,L){if(d=L.getViewerPose(l||a),m=L,d!==null){const te=d.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let ae=!1;te.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let ve=0;ve<te.length;ve++){const Ce=te[ve];let Ze=null;if(h!==null)Ze=h.getViewport(Ce);else{const rt=u.getViewSubImage(f,Ce);Ze=rt.viewport,ve===0&&(e.setRenderTargetTextures(E,rt.colorTexture,f.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(E))}let C=y[ve];C===void 0&&(C=new At,C.layers.enable(ve),C.viewport=new lt,y[ve]=C),C.matrix.fromArray(Ce.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ce.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ve===0&&(v.matrix.copy(C.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(C)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const ve=u.getDepthInformation(te[0]);ve&&ve.isValid&&ve.texture&&b.init(e,ve,s.renderState)}}for(let te=0;te<S.length;te++){const ae=T[te],ge=S[te];ae!==null&&ge!==void 0&&ge.update(ae,L,l||a)}w&&w(I,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),m=null}const J=new gc;J.setAnimationLoop(V),this.setAnimationLoop=function(I){w=I},this.dispose=function(){}}}const zn=new zt,Mp=new it;function Ep(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,hc(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,E,S,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),u(x,p)):p.isMeshPhongMaterial?(r(x,p),d(x,p)):p.isMeshStandardMaterial?(r(x,p),f(x,p),p.isMeshPhysicalMaterial&&h(x,p,T)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),b(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?c(x,p,E,S):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===vt&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===vt&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,T=E.envMapRotation;S&&(x.envMap.value=S,zn.copy(T),zn.x*=-1,zn.y*=-1,zn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),x.envMapRotation.value.setFromMatrix4(Mp.makeRotationFromEuler(zn)),x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,E,S){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*E,x.scale.value=S*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function d(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function f(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function h(x,p,E){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vt&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function b(x,p){const E=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tp(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const T=S.program;n.uniformBlockBinding(E,T)}function l(E,S){let T=s[E.id];T===void 0&&(m(E),T=d(E),s[E.id]=T,E.addEventListener("dispose",x));const z=S.program;n.updateUBOMapping(E,z);const R=e.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function d(E){const S=u();E.__bindingPointIndex=S;const T=i.createBuffer(),z=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,z,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=s[E.id],T=E.uniforms,z=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,A=T.length;R<A;R++){const O=Array.isArray(T[R])?T[R]:[T[R]];for(let y=0,v=O.length;y<v;y++){const U=O[y];if(h(U,R,y,z)===!0){const K=U.__offset,Z=Array.isArray(U.value)?U.value:[U.value];let H=0;for(let j=0;j<Z.length;j++){const X=Z[j],ee=b(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,K+H,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,H),H+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(E,S,T,z){const R=E.value,A=S+"_"+T;if(z[A]===void 0)return typeof R=="number"||typeof R=="boolean"?z[A]=R:z[A]=R.clone(),!0;{const O=z[A];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return z[A]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function m(E){const S=E.uniforms;let T=0;const z=16;for(let A=0,O=S.length;A<O;A++){const y=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,U=y.length;v<U;v++){const K=y[v],Z=Array.isArray(K.value)?K.value:[K.value];for(let H=0,j=Z.length;H<j;H++){const X=Z[H],ee=b(X),k=T%z;k!==0&&z-k<ee.boundary&&(T+=z-k),K.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=ee.storage}}}const R=T%z;return R>0&&(T+=z-R),E.__size=T,E.__cache={},this}function b(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function x(E){const S=E.target;S.removeEventListener("dispose",x);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Ip{constructor(e={}){const{canvas:t=Jd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const h=new Uint32Array(4),m=new Int32Array(4);let b=null,x=null;const p=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=xn,this.toneMappingExposure=1;const S=this;let T=!1,z=0,R=0,A=null,O=-1,y=null;const v=new lt,U=new lt;let K=null;const Z=new We(0);let H=0,j=t.width,X=t.height,ee=1,k=null,fe=null;const xe=new lt(0,0,j,X),w=new lt(0,0,j,X);let V=!1;const J=new _a;let I=!1,L=!1;const te=new it,ae=new N,ge=new lt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Ze(){return A===null?ee:1}let C=n;function rt(_,F){return t.getContext(_,F)}try{const _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lr}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",oe,!1),C===null){const F="webgl2";if(C=rt(F,_),C===null)throw rt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Ye,Je,Se,at,Re,Ae,M,g,W,$,ne,q,ye,le,he,Ve,ie,ue,Ge,Le,pe,Ue,Ne,et;function P(){Ye=new Ph(C),Ye.init(),Ue=new mp(C,Ye),Je=new wh(C,Ye,e,Ue),Se=new hp(C),at=new Vh(C),Re=new $0,Ae=new xp(C,Ye,Se,Re,Je,Ue,at),M=new Lh(S),g=new Ah(S),W=new Mf(C),Ne=new Th(C,W),$=new Fh(C,W,at,Ne),ne=new Gh(C,$,W,at),Ge=new Nh(C,Je,Ae),Ve=new Ch(Re),q=new q0(S,M,g,Ye,Je,Ne,Ve),ye=new Ep(S,Re),le=new tp,he=new op(Ye),ue=new Eh(S,M,g,Se,ne,f,c),ie=new up(S,ne,Je),et=new Tp(C,at,Je,Se),Le=new Ih(C,Ye,at),pe=new Dh(C,Ye,at),at.programs=q.programs,S.capabilities=Je,S.extensions=Ye,S.properties=Re,S.renderLists=le,S.shadowMap=ie,S.state=Se,S.info=at}P();const se=new yp(S,C);this.xr=se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const _=Ye.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Ye.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(_){_!==void 0&&(ee=_,this.setSize(j,X,!1))},this.getSize=function(_){return _.set(j,X)},this.setSize=function(_,F,G=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=_,X=F,t.width=Math.floor(_*ee),t.height=Math.floor(F*ee),G===!0&&(t.style.width=_+"px",t.style.height=F+"px"),this.setViewport(0,0,_,F)},this.getDrawingBufferSize=function(_){return _.set(j*ee,X*ee).floor()},this.setDrawingBufferSize=function(_,F,G){j=_,X=F,ee=G,t.width=Math.floor(_*G),t.height=Math.floor(F*G),this.setViewport(0,0,_,F)},this.getCurrentViewport=function(_){return _.copy(v)},this.getViewport=function(_){return _.copy(xe)},this.setViewport=function(_,F,G,B){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,F,G,B),Se.viewport(v.copy(xe).multiplyScalar(ee).round())},this.getScissor=function(_){return _.copy(w)},this.setScissor=function(_,F,G,B){_.isVector4?w.set(_.x,_.y,_.z,_.w):w.set(_,F,G,B),Se.scissor(U.copy(w).multiplyScalar(ee).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(_){Se.setScissorTest(V=_)},this.setOpaqueSort=function(_){k=_},this.setTransparentSort=function(_){fe=_},this.getClearColor=function(_){return _.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(_=!0,F=!0,G=!0){let B=0;if(_){let D=!1;if(A!==null){const re=A.texture.format;D=re===Mr||re===yr||re===Sr}if(D){const re=A.texture.type,de=re===en||re===Un||re===Ui||re===$n||re===_r||re===vr,me=ue.getClearColor(),be=ue.getClearAlpha(),Ie=me.r,we=me.g,Me=me.b;de?(h[0]=Ie,h[1]=we,h[2]=Me,h[3]=be,C.clearBufferuiv(C.COLOR,0,h)):(m[0]=Ie,m[1]=we,m[2]=Me,m[3]=be,C.clearBufferiv(C.COLOR,0,m))}else B|=C.COLOR_BUFFER_BIT}F&&(B|=C.DEPTH_BUFFER_BIT),G&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),le.dispose(),he.dispose(),Re.dispose(),M.dispose(),g.dispose(),ne.dispose(),Ne.dispose(),et.dispose(),q.dispose(),se.dispose(),se.removeEventListener("sessionstart",Jt),se.removeEventListener("sessionend",Al),Kn.stop()};function Y(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const _=at.autoReset,F=ie.enabled,G=ie.autoUpdate,B=ie.needsUpdate,D=ie.type;P(),at.autoReset=_,ie.enabled=F,ie.autoUpdate=G,ie.needsUpdate=B,ie.type=D}function oe(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Te(_){const F=_.target;F.removeEventListener("dispose",Te),Oe(F)}function Oe(_){ot(_),Re.remove(_)}function ot(_){const F=Re.get(_).programs;F!==void 0&&(F.forEach(function(G){q.releaseProgram(G)}),_.isShaderMaterial&&q.releaseShaderCache(_))}this.renderBufferDirect=function(_,F,G,B,D,re){F===null&&(F=ve);const de=D.isMesh&&D.matrixWorld.determinant()<0,me=Rx(_,F,G,B,D);Se.setMaterial(B,de);let be=G.index,Ie=1;if(B.wireframe===!0){if(be=$.getWireframeAttribute(G),be===void 0)return;Ie=2}const we=G.drawRange,Me=G.attributes.position;let Xe=we.start*Ie,tt=(we.start+we.count)*Ie;re!==null&&(Xe=Math.max(Xe,re.start*Ie),tt=Math.min(tt,(re.start+re.count)*Ie)),be!==null?(Xe=Math.max(Xe,0),tt=Math.min(tt,be.count)):Me!=null&&(Xe=Math.max(Xe,0),tt=Math.min(tt,Me.count));const nt=tt-Xe;if(nt<0||nt===1/0)return;Ne.setup(D,B,me,G,be);let wt,ke=Le;if(be!==null&&(wt=W.get(be),ke=pe,ke.setIndex(wt)),D.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*Ze()),ke.setMode(C.LINES)):ke.setMode(C.TRIANGLES);else if(D.isLine){let _e=B.linewidth;_e===void 0&&(_e=1),Se.setLineWidth(_e*Ze()),D.isLineSegments?ke.setMode(C.LINES):D.isLineLoop?ke.setMode(C.LINE_LOOP):ke.setMode(C.LINE_STRIP)}else D.isPoints?ke.setMode(C.POINTS):D.isSprite&&ke.setMode(C.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)ke.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ke.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const _e=D._multiDrawStarts,xt=D._multiDrawCounts,He=D._multiDrawCount,Ot=be?W.get(be).bytesPerElement:1,Li=Re.get(B).currentProgram.getUniforms();for(let Ct=0;Ct<He;Ct++)Li.setValue(C,"_gl_DrawID",Ct),ke.render(_e[Ct]/Ot,xt[Ct])}else if(D.isInstancedMesh)ke.renderInstances(Xe,nt,D.count);else if(G.isInstancedBufferGeometry){const _e=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xt=Math.min(G.instanceCount,_e);ke.renderInstances(Xe,nt,xt)}else ke.render(Xe,nt)};function pt(_,F,G){_.transparent===!0&&_.side===$t&&_.forceSinglePass===!1?(_.side=vt,_.needsUpdate=!0,$s(_,F,G),_.side=hn,_.needsUpdate=!0,$s(_,F,G),_.side=$t):$s(_,F,G)}this.compile=function(_,F,G=null){G===null&&(G=_),x=he.get(G),x.init(F),E.push(x),G.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(x.pushLight(D),D.castShadow&&x.pushShadow(D))}),_!==G&&_.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(x.pushLight(D),D.castShadow&&x.pushShadow(D))}),x.setupLights();const B=new Set;return _.traverse(function(D){const re=D.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const me=re[de];pt(me,G,D),B.add(me)}else pt(re,G,D),B.add(re)}),E.pop(),x=null,B},this.compileAsync=function(_,F,G=null){const B=this.compile(_,F,G);return new Promise(D=>{function re(){if(B.forEach(function(de){Re.get(de).currentProgram.isReady()&&B.delete(de)}),B.size===0){D(_);return}setTimeout(re,10)}Ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ze=null;function dn(_){ze&&ze(_)}function Jt(){Kn.stop()}function Al(){Kn.start()}const Kn=new gc;Kn.setAnimationLoop(dn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(_){ze=_,se.setAnimationLoop(_),_===null?Kn.stop():Kn.start()},se.addEventListener("sessionstart",Jt),se.addEventListener("sessionend",Al),this.render=function(_,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,F,A),x=he.get(_,E.length),x.init(F),E.push(x),te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(te),L=this.localClippingEnabled,I=Ve.init(this.clippingPlanes,L),b=le.get(_,p.length),b.init(),p.push(b),se.enabled===!0&&se.isPresenting===!0){const re=S.xr.getDepthSensingMesh();re!==null&&qa(re,F,-1/0,S.sortObjects)}qa(_,F,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(k,fe),Ce=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ce&&ue.addToRenderList(b,_),this.info.render.frame++,I===!0&&Ve.beginShadows();const G=x.state.shadowsArray;ie.render(G,_,F),I===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=b.opaque,D=b.transmissive;if(x.setupLights(),F.isArrayCamera){const re=F.cameras;if(D.length>0)for(let de=0,me=re.length;de<me;de++){const be=re[de];Fl(B,D,_,be)}Ce&&ue.render(_);for(let de=0,me=re.length;de<me;de++){const be=re[de];Pl(b,_,be,be.viewport)}}else D.length>0&&Fl(B,D,_,F),Ce&&ue.render(_),Pl(b,_,F);A!==null&&(Ae.updateMultisampleRenderTarget(A),Ae.updateRenderTargetMipmap(A)),_.isScene===!0&&_.onAfterRender(S,_,F),Ne.resetDefaultState(),O=-1,y=null,E.pop(),E.length>0?(x=E[E.length-1],I===!0&&Ve.setGlobalState(S.clippingPlanes,x.state.camera)):x=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function qa(_,F,G,B){if(_.visible===!1)return;if(_.layers.test(F.layers)){if(_.isGroup)G=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(F);else if(_.isLight)x.pushLight(_),_.castShadow&&x.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||J.intersectsSprite(_)){B&&ge.setFromMatrixPosition(_.matrixWorld).applyMatrix4(te);const de=ne.update(_),me=_.material;me.visible&&b.push(_,de,me,G,ge.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||J.intersectsObject(_))){const de=ne.update(_),me=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ge.copy(_.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ge.copy(de.boundingSphere.center)),ge.applyMatrix4(_.matrixWorld).applyMatrix4(te)),Array.isArray(me)){const be=de.groups;for(let Ie=0,we=be.length;Ie<we;Ie++){const Me=be[Ie],Xe=me[Me.materialIndex];Xe&&Xe.visible&&b.push(_,de,Xe,G,ge.z,Me)}}else me.visible&&b.push(_,de,me,G,ge.z,null)}}const re=_.children;for(let de=0,me=re.length;de<me;de++)qa(re[de],F,G,B)}function Pl(_,F,G,B){const D=_.opaque,re=_.transmissive,de=_.transparent;x.setupLightsView(G),I===!0&&Ve.setGlobalState(S.clippingPlanes,G),B&&Se.viewport(v.copy(B)),D.length>0&&qs(D,F,G),re.length>0&&qs(re,F,G),de.length>0&&qs(de,F,G),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Fl(_,F,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[B.id]===void 0&&(x.state.transmissionRenderTarget[B.id]=new An(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Ai:en,minFilter:Rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const re=x.state.transmissionRenderTarget[B.id],de=B.viewport||v;re.setSize(de.z,de.w);const me=S.getRenderTarget();S.setRenderTarget(re),S.getClearColor(Z),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),Ce?ue.render(G):S.clear();const be=S.toneMapping;S.toneMapping=xn;const Ie=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),x.setupLightsView(B),I===!0&&Ve.setGlobalState(S.clippingPlanes,B),qs(_,G,B),Ae.updateMultisampleRenderTarget(re),Ae.updateRenderTargetMipmap(re),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Me=0,Xe=F.length;Me<Xe;Me++){const tt=F[Me],nt=tt.object,wt=tt.geometry,ke=tt.material,_e=tt.group;if(ke.side===$t&&nt.layers.test(B.layers)){const xt=ke.side;ke.side=vt,ke.needsUpdate=!0,Dl(nt,G,B,wt,ke,_e),ke.side=xt,ke.needsUpdate=!0,we=!0}}we===!0&&(Ae.updateMultisampleRenderTarget(re),Ae.updateRenderTargetMipmap(re))}S.setRenderTarget(me),S.setClearColor(Z,H),Ie!==void 0&&(B.viewport=Ie),S.toneMapping=be}function qs(_,F,G){const B=F.isScene===!0?F.overrideMaterial:null;for(let D=0,re=_.length;D<re;D++){const de=_[D],me=de.object,be=de.geometry,Ie=B===null?de.material:B,we=de.group;me.layers.test(G.layers)&&Dl(me,F,G,be,Ie,we)}}function Dl(_,F,G,B,D,re){_.onBeforeRender(S,F,G,B,D,re),_.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),D.transparent===!0&&D.side===$t&&D.forceSinglePass===!1?(D.side=vt,D.needsUpdate=!0,S.renderBufferDirect(G,F,B,D,_,re),D.side=hn,D.needsUpdate=!0,S.renderBufferDirect(G,F,B,D,_,re),D.side=$t):S.renderBufferDirect(G,F,B,D,_,re),_.onAfterRender(S,F,G,B,D,re)}function $s(_,F,G){F.isScene!==!0&&(F=ve);const B=Re.get(_),D=x.state.lights,re=x.state.shadowsArray,de=D.state.version,me=q.getParameters(_,D.state,re,F,G),be=q.getProgramCacheKey(me);let Ie=B.programs;B.environment=_.isMeshStandardMaterial?F.environment:null,B.fog=F.fog,B.envMap=(_.isMeshStandardMaterial?g:M).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?F.environmentRotation:_.envMapRotation,Ie===void 0&&(_.addEventListener("dispose",Te),Ie=new Map,B.programs=Ie);let we=Ie.get(be);if(we!==void 0){if(B.currentProgram===we&&B.lightsStateVersion===de)return Nl(_,me),we}else me.uniforms=q.getUniforms(_),_.onBeforeCompile(me,S),we=q.acquireProgram(me,be),Ie.set(be,we),B.uniforms=me.uniforms;const Me=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Me.clippingPlanes=Ve.uniform),Nl(_,me),B.needsLights=Ax(_),B.lightsStateVersion=de,B.needsLights&&(Me.ambientLightColor.value=D.state.ambient,Me.lightProbe.value=D.state.probe,Me.directionalLights.value=D.state.directional,Me.directionalLightShadows.value=D.state.directionalShadow,Me.spotLights.value=D.state.spot,Me.spotLightShadows.value=D.state.spotShadow,Me.rectAreaLights.value=D.state.rectArea,Me.ltc_1.value=D.state.rectAreaLTC1,Me.ltc_2.value=D.state.rectAreaLTC2,Me.pointLights.value=D.state.point,Me.pointLightShadows.value=D.state.pointShadow,Me.hemisphereLights.value=D.state.hemi,Me.directionalShadowMap.value=D.state.directionalShadowMap,Me.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Me.spotShadowMap.value=D.state.spotShadowMap,Me.spotLightMatrix.value=D.state.spotLightMatrix,Me.spotLightMap.value=D.state.spotLightMap,Me.pointShadowMap.value=D.state.pointShadowMap,Me.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=we,B.uniformsList=null,we}function Vl(_){if(_.uniformsList===null){const F=_.currentProgram.getUniforms();_.uniformsList=Ns.seqWithValue(F.seq,_.uniforms)}return _.uniformsList}function Nl(_,F){const G=Re.get(_);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Rx(_,F,G,B,D){F.isScene!==!0&&(F=ve),Ae.resetTextureUnits();const re=F.fog,de=B.isMeshStandardMaterial?F.environment:null,me=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:bn,be=(B.isMeshStandardMaterial?g:M).get(B.envMap||de),Ie=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,we=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!G.morphAttributes.position,Xe=!!G.morphAttributes.normal,tt=!!G.morphAttributes.color;let nt=xn;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(nt=S.toneMapping);const wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ke=wt!==void 0?wt.length:0,_e=Re.get(B),xt=x.state.lights;if(I===!0&&(L===!0||_!==y)){const Ft=_===y&&B.id===O;Ve.setState(B,_,Ft)}let He=!1;B.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==xt.state.version||_e.outputColorSpace!==me||D.isBatchedMesh&&_e.batching===!1||!D.isBatchedMesh&&_e.batching===!0||D.isBatchedMesh&&_e.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&_e.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&_e.instancing===!1||!D.isInstancedMesh&&_e.instancing===!0||D.isSkinnedMesh&&_e.skinning===!1||!D.isSkinnedMesh&&_e.skinning===!0||D.isInstancedMesh&&_e.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&_e.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&_e.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&_e.instancingMorph===!1&&D.morphTexture!==null||_e.envMap!==be||B.fog===!0&&_e.fog!==re||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ve.numPlanes||_e.numIntersection!==Ve.numIntersection)||_e.vertexAlphas!==Ie||_e.vertexTangents!==we||_e.morphTargets!==Me||_e.morphNormals!==Xe||_e.morphColors!==tt||_e.toneMapping!==nt||_e.morphTargetsCount!==ke)&&(He=!0):(He=!0,_e.__version=B.version);let Ot=_e.currentProgram;He===!0&&(Ot=$s(B,F,D));let Li=!1,Ct=!1,$a=!1;const ct=Ot.getUniforms(),In=_e.uniforms;if(Se.useProgram(Ot.program)&&(Li=!0,Ct=!0,$a=!0),B.id!==O&&(O=B.id,Ct=!0),Li||y!==_){ct.setValue(C,"projectionMatrix",_.projectionMatrix),ct.setValue(C,"viewMatrix",_.matrixWorldInverse);const Ft=ct.map.cameraPosition;Ft!==void 0&&Ft.setValue(C,ae.setFromMatrixPosition(_.matrixWorld)),Je.logarithmicDepthBuffer&&ct.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ct.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),y!==_&&(y=_,Ct=!0,$a=!0)}if(D.isSkinnedMesh){ct.setOptional(C,D,"bindMatrix"),ct.setOptional(C,D,"bindMatrixInverse");const Ft=D.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ct.setValue(C,"boneTexture",Ft.boneTexture,Ae))}D.isBatchedMesh&&(ct.setOptional(C,D,"batchingTexture"),ct.setValue(C,"batchingTexture",D._matricesTexture,Ae),ct.setOptional(C,D,"batchingIdTexture"),ct.setValue(C,"batchingIdTexture",D._indirectTexture,Ae),ct.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&ct.setValue(C,"batchingColorTexture",D._colorsTexture,Ae));const eo=G.morphAttributes;if((eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0)&&Ge.update(D,G,Ot),(Ct||_e.receiveShadow!==D.receiveShadow)&&(_e.receiveShadow=D.receiveShadow,ct.setValue(C,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(In.envMap.value=be,In.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&F.environment!==null&&(In.envMapIntensity.value=F.environmentIntensity),Ct&&(ct.setValue(C,"toneMappingExposure",S.toneMappingExposure),_e.needsLights&&Ux(In,$a),re&&B.fog===!0&&ye.refreshFogUniforms(In,re),ye.refreshMaterialUniforms(In,B,ee,X,x.state.transmissionRenderTarget[_.id]),Ns.upload(C,Vl(_e),In,Ae)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ns.upload(C,Vl(_e),In,Ae),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ct.setValue(C,"center",D.center),ct.setValue(C,"modelViewMatrix",D.modelViewMatrix),ct.setValue(C,"normalMatrix",D.normalMatrix),ct.setValue(C,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ft=B.uniformsGroups;for(let to=0,Px=Ft.length;to<Px;to++){const Gl=Ft[to];et.update(Gl,Ot),et.bind(Gl,Ot)}}return Ot}function Ux(_,F){_.ambientLightColor.needsUpdate=F,_.lightProbe.needsUpdate=F,_.directionalLights.needsUpdate=F,_.directionalLightShadows.needsUpdate=F,_.pointLights.needsUpdate=F,_.pointLightShadows.needsUpdate=F,_.spotLights.needsUpdate=F,_.spotLightShadows.needsUpdate=F,_.rectAreaLights.needsUpdate=F,_.hemisphereLights.needsUpdate=F}function Ax(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(_,F,G){Re.get(_.texture).__webglTexture=F,Re.get(_.depthTexture).__webglTexture=G;const B=Re.get(_);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=G===void 0,B.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,F){const G=Re.get(_);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(_,F=0,G=0){A=_,z=F,R=G;let B=!0,D=null,re=!1,de=!1;if(_){const be=Re.get(_);be.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(C.FRAMEBUFFER,null),B=!1):be.__webglFramebuffer===void 0?Ae.setupRenderTarget(_):be.__hasExternalTextures&&Ae.rebindTextures(_,Re.get(_.texture).__webglTexture,Re.get(_.depthTexture).__webglTexture);const Ie=_.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(de=!0);const we=Re.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(we[F])?D=we[F][G]:D=we[F],re=!0):_.samples>0&&Ae.useMultisampledRTT(_)===!1?D=Re.get(_).__webglMultisampledFramebuffer:Array.isArray(we)?D=we[G]:D=we,v.copy(_.viewport),U.copy(_.scissor),K=_.scissorTest}else v.copy(xe).multiplyScalar(ee).floor(),U.copy(w).multiplyScalar(ee).floor(),K=V;if(Se.bindFramebuffer(C.FRAMEBUFFER,D)&&B&&Se.drawBuffers(_,D),Se.viewport(v),Se.scissor(U),Se.setScissorTest(K),re){const be=Re.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,G)}else if(de){const be=Re.get(_.texture),Ie=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.__webglTexture,G||0,Ie)}O=-1},this.readRenderTargetPixels=function(_,F,G,B,D,re,de){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Re.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){Se.bindFramebuffer(C.FRAMEBUFFER,me);try{const be=_.texture,Ie=be.format,we=be.type;if(!Je.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=_.width-B&&G>=0&&G<=_.height-D&&C.readPixels(F,G,B,D,Ue.convert(Ie),Ue.convert(we),re)}finally{const be=A!==null?Re.get(A).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(_,F,G,B,D,re,de){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Re.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){Se.bindFramebuffer(C.FRAMEBUFFER,me);try{const be=_.texture,Ie=be.format,we=be.type;if(!Je.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=_.width-B&&G>=0&&G<=_.height-D){const Me=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.bufferData(C.PIXEL_PACK_BUFFER,re.byteLength,C.STREAM_READ),C.readPixels(F,G,B,D,Ue.convert(Ie),Ue.convert(we),0),C.flush();const Xe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await Qd(C,Xe,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,re)}finally{C.deleteBuffer(Me),C.deleteSync(Xe)}return re}}finally{const be=A!==null?Re.get(A).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(_,F=null,G=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,_=arguments[1]);const B=Math.pow(2,-G),D=Math.floor(_.image.width*B),re=Math.floor(_.image.height*B),de=F!==null?F.x:0,me=F!==null?F.y:0;Ae.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,de,me,D,re),Se.unbindTexture()},this.copyTextureToTexture=function(_,F,G=null,B=null,D=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,_=arguments[1],F=arguments[2],D=arguments[3]||0,G=null);let re,de,me,be,Ie,we;G!==null?(re=G.max.x-G.min.x,de=G.max.y-G.min.y,me=G.min.x,be=G.min.y):(re=_.image.width,de=_.image.height,me=0,be=0),B!==null?(Ie=B.x,we=B.y):(Ie=0,we=0);const Me=Ue.convert(F.format),Xe=Ue.convert(F.type);Ae.setTexture2D(F,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const tt=C.getParameter(C.UNPACK_ROW_LENGTH),nt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),wt=C.getParameter(C.UNPACK_SKIP_PIXELS),ke=C.getParameter(C.UNPACK_SKIP_ROWS),_e=C.getParameter(C.UNPACK_SKIP_IMAGES),xt=_.isCompressedTexture?_.mipmaps[D]:_.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,xt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,me),C.pixelStorei(C.UNPACK_SKIP_ROWS,be),_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,Ie,we,re,de,Me,Xe,xt.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,Ie,we,xt.width,xt.height,Me,xt.data):C.texSubImage2D(C.TEXTURE_2D,D,Ie,we,re,de,Me,Xe,xt),C.pixelStorei(C.UNPACK_ROW_LENGTH,tt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,wt),C.pixelStorei(C.UNPACK_SKIP_ROWS,ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,_e),D===0&&F.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(_,F,G=null,B=null,D=0){_.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,B=arguments[1]||null,_=arguments[2],F=arguments[3],D=arguments[4]||0);let re,de,me,be,Ie,we,Me,Xe,tt;const nt=_.isCompressedTexture?_.mipmaps[D]:_.image;G!==null?(re=G.max.x-G.min.x,de=G.max.y-G.min.y,me=G.max.z-G.min.z,be=G.min.x,Ie=G.min.y,we=G.min.z):(re=nt.width,de=nt.height,me=nt.depth,be=0,Ie=0,we=0),B!==null?(Me=B.x,Xe=B.y,tt=B.z):(Me=0,Xe=0,tt=0);const wt=Ue.convert(F.format),ke=Ue.convert(F.type);let _e;if(F.isData3DTexture)Ae.setTexture3D(F,0),_e=C.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Ae.setTexture2DArray(F,0),_e=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const xt=C.getParameter(C.UNPACK_ROW_LENGTH),He=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ot=C.getParameter(C.UNPACK_SKIP_PIXELS),Li=C.getParameter(C.UNPACK_SKIP_ROWS),Ct=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,be),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ie),C.pixelStorei(C.UNPACK_SKIP_IMAGES,we),_.isDataTexture||_.isData3DTexture?C.texSubImage3D(_e,D,Me,Xe,tt,re,de,me,wt,ke,nt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(_e,D,Me,Xe,tt,re,de,me,wt,nt.data):C.texSubImage3D(_e,D,Me,Xe,tt,re,de,me,wt,ke,nt),C.pixelStorei(C.UNPACK_ROW_LENGTH,xt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,He),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ot),C.pixelStorei(C.UNPACK_SKIP_ROWS,Li),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ct),D===0&&F.generateMipmaps&&C.generateMipmap(_e),Se.unbindTexture()},this.initRenderTarget=function(_){Re.get(_).__webglFramebuffer===void 0&&Ae.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Ae.setTextureCube(_,0):_.isData3DTexture?Ae.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Ae.setTexture2DArray(_,0):Ae.setTexture2D(_,0),Se.unbindTexture()},this.resetState=function(){z=0,R=0,A=null,Se.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qr?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===cs?"display-p3":"srgb"}}class wp extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zt,this.environmentIntensity=1,this.environmentRotation=new zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cp extends Bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zt,this.combine=ur,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jc extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const La=new it,Qc=new N,jc=new N;class Lp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jc),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rp extends Lp{constructor(){super(new _c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends Jc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Up extends Jc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lr}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lr);const Ap={U:16119285,R:13836311,F:42826,D:16766464,L:16747520,B:22488},Pp=986899,Fp=[[4,[0,1,0]],[13,[1,0,0]],[22,[0,0,1]],[31,[0,-1,0]],[40,[-1,0,0]],[49,[0,0,-1]]];function Dp(i){return i[0]===1?0:i[0]===-1?1:i[1]===1?2:i[1]===-1?3:i[2]===1?4:5}class Vp{scene=new wp;camera;renderer;cubies=[];cubeRoot=new Ti;pivot=new Ti;state=Ri;animating=!1;constructor(e){this.camera=new At(32,1,.1,100),this.camera.position.set(5.2,4.6,6.2),this.camera.lookAt(0,0,0),this.renderer=new Ip({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.scene.add(new Up(16777215,1.1));const t=new qc(16777215,1.2);t.position.set(6,10,7),this.scene.add(t);const n=new qc(16777215,.5);n.position.set(-6,-4,-7),this.scene.add(n),this.scene.add(this.cubeRoot),this.cubeRoot.add(this.pivot),this.buildCubies(),this.paint(),this.setupPointerRotation();const s=()=>{const a=e.clientWidth,o=e.clientHeight;this.camera.aspect=a/o,this.camera.updateProjectionMatrix(),this.renderer.setSize(a,o)};new ResizeObserver(s).observe(e),s();const r=()=>{requestAnimationFrame(r),this.hintTick(performance.now()),this.renderer.render(this.scene,this.camera)};r()}mainAxisLocal=new N(0,1,0);axisLock=!1;handViewQuat=null;computeMainAxisFromState(){const e=Fp.find(([t])=>this.state[t]==="U");e&&this.mainAxisLocal.set(...e[1])}updateMainAxisFromState(){this.axisLock||this.computeMainAxisFromState()}setAxisLock(e){this.axisLock=e,e||this.computeMainAxisFromState()}beginAssistView(e){this.computeMainAxisFromState(),this.axisLock=!0,this.handViewQuat=e?new Et().setFromAxisAngle(new N(0,0,1),Math.PI):new Et,this.resetView(!0)}endAssistView(){this.handViewQuat=null}driftAxisAngle(e){const t=fn[e.base];if(!t)return null;const n=new N(t.axis===0?1:0,t.axis===1?1:0,t.axis===2?1:0),s=e.amount===3?-1:e.amount;return{axis:n,angle:t.dir*s*(Math.PI/2)}}finishDrift(e,t){this.mainAxisLocal.applyAxisAngle(e,-t).round(),this.handViewQuat?.multiply(new Et().setFromAxisAngle(e,t))}playHandDrift(e,t=220){const n=this.driftAxisAngle(e);if(!n)return Promise.resolve();const{axis:s,angle:r}=n;if(t<=0)return this.cubeRoot.quaternion.multiply(new Et().setFromAxisAngle(s,r)),this.finishDrift(s,r),Promise.resolve();const a=this.cubeRoot.quaternion.clone(),o=new Et,c=performance.now();return new Promise(l=>{const d=u=>{const f=Math.min(1,(u-c)/t),h=1-Math.pow(1-f,3);o.setFromAxisAngle(s,r*h),this.cubeRoot.quaternion.copy(a).multiply(o),f<1?requestAnimationFrame(d):(this.finishDrift(s,r),l())};requestAnimationFrame(d)})}playHandTurn(e,t,n=220){if(this.animating)return Promise.reject(new Error("busy"));const s=this.driftAxisAngle(t);if(!s)return Promise.reject(new Error(`unknown drift ${t.base}`));const{axis:r,angle:a}=s,o=fn[t.base];for(const m of e)if(fn[m.base]?.axis!==o.axis)return(async()=>{for(const b of e)await this.playMove(b,n);await this.playHandDrift(t,n)})();this.releaseHint(),this.animating=!0;const c=new Set(e.map(m=>fn[m.base].layers[0])),l=[-1,0,1].filter(m=>!c.has(m)),d=m=>[m.x,m.y,m.z][o.axis],u=this.cubies.filter(m=>l.includes(Math.round(d(m.home))));this.pivot.rotation.set(0,0,0);for(const m of u)this.pivot.attach(m.mesh);const f=Math.max(60,n*(t.amount===2?1.4:1)),h=performance.now();return new Promise(m=>{const b=x=>{const p=Math.min(1,(x-h)/f),E=1-Math.pow(1-p,3);if(this.pivot.setRotationFromAxisAngle(r,a*E),p<1)requestAnimationFrame(b);else{for(const S of u)this.cubeRoot.attach(S.mesh),S.mesh.position.copy(S.home),S.mesh.rotation.set(0,0,0);this.pivot.rotation.set(0,0,0),this.state=nr(this.state,Qi(e)),this.paint(),this.cubeRoot.quaternion.multiply(new Et().setFromAxisAngle(r,a)),this.finishDrift(r,a),this.animating=!1,m()}};requestAnimationFrame(b)})}resetView(e=!1){const t=this.cubeRoot.quaternion.clone(),n=e&&this.handViewQuat?this.handViewQuat.clone():new Et,s=performance.now(),r=350,a=o=>{const c=Math.min(1,(o-s)/r),l=1-Math.pow(1-c,3);this.cubeRoot.quaternion.slerpQuaternions(t,n,l),c<1&&requestAnimationFrame(a)};requestAnimationFrame(a)}setupPointerRotation(){const e=this.renderer.domElement;e.style.cursor="grab",e.style.touchAction="none";const t=.0075;let n=!1,s=0,r=0;const a=new N(1,0,0).applyQuaternion(this.camera.quaternion),o=new Et,c=new N(0,1,0),l=()=>{const u=this.mainAxisLocal.clone().applyQuaternion(this.cubeRoot.quaternion);return u.dot(c)<0&&u.negate(),u.normalize()};e.addEventListener("pointerdown",u=>{n=!0,s=u.clientX,r=u.clientY,e.setPointerCapture(u.pointerId),e.style.cursor="grabbing",document.body.classList.add("cube-dragging")}),e.addEventListener("pointermove",u=>{if(!n)return;const f=u.clientX-s,h=u.clientY-r;s=u.clientX,r=u.clientY,f!==0&&(o.setFromAxisAngle(l(),f*t),this.cubeRoot.quaternion.premultiply(o)),h!==0&&(o.setFromAxisAngle(a,h*t),this.cubeRoot.quaternion.premultiply(o))});const d=u=>{n=!1,e.hasPointerCapture(u.pointerId)&&e.releasePointerCapture(u.pointerId),e.style.cursor="grab",document.body.classList.remove("cube-dragging")};e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d),e.addEventListener("wheel",u=>{u.preventDefault();const f=this.camera.position.length(),h=Math.min(16,Math.max(5,f*(u.deltaY>0?1.08:.93)));this.camera.position.setLength(h)},{passive:!1})}buildCubies(){const e=new gi(.96,.96,.96);for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){if(t===0&&n===0&&s===0)continue;const r=Array.from({length:6},()=>new Cp({color:Pp})),a=new Ht(e,r);a.position.set(t,n,s);const o={mesh:a,home:new N(t,n,s),stickers:[]};for(let c=0;c<54;c++){const l=Hi[c];l[0]===t&&l[1]===n&&l[2]===s&&o.stickers.push({facelet:c,material:Dp(Ki[c])})}this.cubies.push(o),this.cubeRoot.add(a)}}paint(){for(const e of this.cubies)for(const t of e.stickers)e.mesh.material[t.material].color.setHex(Ap[this.state[t.facelet]])}setState(e){this.releaseHint(),this.state=e,this.paint(),this.updateMainAxisFromState()}get busy(){return this.animating}hintToken=null;hintCubies=[];hintStart=0;setHint(e){const t=e?Lt(e)[0]:null;this.hintToken&&t&&this.hintToken.base===t.base&&this.hintToken.amount===t.amount||(this.releaseHint(),this.hintToken=t,this.hintStart=performance.now())}releaseHint(){if(this.hintCubies.length){for(const e of this.hintCubies)this.cubeRoot.attach(e.mesh),e.mesh.position.copy(e.home),e.mesh.rotation.set(0,0,0);this.hintCubies=[]}this.pivot.rotation.set(0,0,0)}hintTick(e){if(!this.hintToken||this.animating)return;const t=fn[this.hintToken.base];if(!t)return;if(this.hintCubies.length===0){const f=h=>[h.x,h.y,h.z][t.axis];this.hintCubies=this.cubies.filter(h=>t.layers.includes(Math.round(f(h.home)))),this.pivot.rotation.set(0,0,0);for(const h of this.hintCubies)this.pivot.attach(h.mesh);this.hintStart=e}const n=450,s=250,a=(e-this.hintStart)%(n+s+250),o=f=>f*f*(3-2*f);let c;a<n?c=o(a/n):a<n+s?c=1:c=0;const l=new N(t.axis===0?1:0,t.axis===1?1:0,t.axis===2?1:0),d=this.hintToken.amount===3?-1:this.hintToken.amount,u=t.dir*d*(Math.PI/2)*c;this.pivot.setRotationFromAxisAngle(l,u)}playMove(e,t=250){if(this.animating)return Promise.reject(new Error("busy"));const n=fn[e.base];if(!n)return Promise.reject(new Error(`unknown move ${e.base}`));this.releaseHint(),this.animating=!0;const s=new N(n.axis===0?1:0,n.axis===1?1:0,n.axis===2?1:0),r=e.amount===3?-1:e.amount,a=n.dir*r*(Math.PI/2),o=u=>[u.x,u.y,u.z][n.axis],c=this.cubies.filter(u=>n.layers.includes(Math.round(o(u.home))));this.pivot.rotation.set(0,0,0);for(const u of c)this.pivot.attach(u.mesh);const l=Math.max(60,t*(e.amount===2?1.4:1)),d=performance.now();return new Promise(u=>{const f=h=>{const m=Math.min(1,(h-d)/l),b=1-Math.pow(1-m,3);if(this.pivot.setRotationFromAxisAngle(s,a*b),m<1)requestAnimationFrame(f);else{for(const x of c)this.cubeRoot.attach(x.mesh),x.mesh.position.copy(x.home),x.mesh.rotation.set(0,0,0);this.pivot.rotation.set(0,0,0),this.state=nr(this.state,Qi([e])),this.paint(),"xyz".includes(e.base)&&this.updateMainAxisFromState(),this.animating=!1,u()}};requestAnimationFrame(f)})}}const Np={ja:{subtitle:"ルービックキューブ・ソルバー",scramble:"スクランブル",generate:"WCAスクランブル生成",apply:"適用",reset:"リセット",solve:"解法を生成",solving:"計算中…",method_cfop:"CFOP",method_roux:"Roux",method_optimal:"最短 (two-phase)",editor:"展開図エディタ",editor_hint:"色を選んでステッカーをクリック (センターは固定)",load3d:"3Dから読込",apply3d:"キューブへ反映",solution:"解法",moves_count:"手",playback_speed:"速度",autoplay:"自動再生",reset_view:"視点リセット",ready:"準備完了",initializing:"ソルバー初期化中…",phase_orient:"持ち替え (白面を下、緑面を正面へ)",phase_cross:"Cross (白面)",phase_f2l:"F2L",phase_oll:"OLL (黄色面)",phase_pll:"PLL (黄色面)",phase_fb:"FB (第1ブロック)",phase_fb_edge:"FB 1 — DLエッジ",phase_fb_pair1:"FB 2 — 1組目のペア",phase_fb_pair2:"FB 3 — 2組目のペア",phase_sb:"SB (第2ブロック)",phase_sb_edge:"SB 1 — DRエッジ",phase_sb_pair1:"SB 2 — 1組目のペア",phase_sb_pair2:"SB 3 — 2組目のペア",phase_cmll:"CMLL",phase_lse:"LSE",phase_lse_eo:"LSE 4a — EO (エッジの向き)",phase_lse_lr:"LSE 4b — UL/UR エッジ",phase_lse_ep:"LSE 4c — 仕上げ (M2/U2)",phase_twophase:"two-phase",err_WRONG_LENGTH:"54文字ではありません",err_INVALID_CHARS:"不正な文字が含まれています",err_WRONG_CENTERS:"センターの配置が不正です",err_COLOR_COUNT:"各色ちょうど9枚である必要があります",err_INVALID_PIECES:"存在しないピースがあります (色の組合せが不正)",err_TWIST:"コーナーのねじれが不正です (組み立てミス状態)",err_FLIP:"エッジの反転が不正です (組み立てミス状態)",err_PARITY:"パリティが不正です (2点交換状態)",err_INVALID_STATE:"不正な状態です",err_SOLVER:"ソルバーでエラーが発生しました",scramble_invalid:"スクランブル記法が不正です",smartcube:"スマートキューブ (GAN356i)",gan_connect:"接続",gan_disconnect:"切断",gan_connecting:"接続中…",gan_connected:"接続済み: ",gan_mac_hint:"MACアドレスは自動取得できない場合のみ入力 (保存されます)",gan_sync:"状態を再読込",gan_reset:"実機を完成状態として登録",gan_reset_confirm:"実機を6面完成させた状態でOKを押してください。実機の内部状態を完成としてリセットします。",gan_no_bt:"このブラウザは Web Bluetooth 非対応です (PC版 Chrome / Edge を使用してください)",gan_smart_hint:"実機接続中: 3D表示は実機に追従します。「解法を生成」後、実機で回すと進行します",gan_assist_progress:"アシスト進行中",gan_next:"次の手",gan_deviated:"⚠ 手順から外れました",gan_recover:"戻し手順",gan_recovered:"↩ 手順に復帰しました",gan_reanalyzing:"🔄 セグメント完成を検知 — ここから再分析中…",gan_reanalyzed:"✨ セグメント完成を検知したので、ここから再分析しました",gan_regrip:"🖐 まず持ち替え: 白面を下、緑面を正面にしてください",gan_regrip_up:"🖐 白面を上、緑面を正面にして持ってください",gan_done:"🎉 6面完成!",gan_scramble_hint:"実機でスクランブルを回してください (3Dは実機に追従します)",gan_connect_failed:"接続に失敗しました",gan_disabled_while_connected:"実機接続中は使用できません",gan_mac_prompt:"のMACアドレスを入力してください (例: AB:12:34:56:78:9A)"},en:{subtitle:"Rubik's Cube Solver",scramble:"Scramble",generate:"Generate WCA scramble",apply:"Apply",reset:"Reset",solve:"Solve",solving:"Solving…",method_cfop:"CFOP",method_roux:"Roux",method_optimal:"Shortest (two-phase)",editor:"Net editor",editor_hint:"Pick a color and click stickers (centers are fixed)",load3d:"Load from 3D",apply3d:"Apply to cube",solution:"Solution",moves_count:"moves",playback_speed:"Speed",autoplay:"Auto play",reset_view:"Reset view",ready:"Ready",initializing:"Initializing solver…",phase_orient:"Regrip (white down, green front)",phase_cross:"Cross (white)",phase_f2l:"F2L",phase_oll:"OLL (yellow)",phase_pll:"PLL (yellow)",phase_fb:"FB (first block)",phase_fb_edge:"FB 1 — DL edge",phase_fb_pair1:"FB 2 — first pair",phase_fb_pair2:"FB 3 — second pair",phase_sb:"SB (second block)",phase_sb_edge:"SB 1 — DR edge",phase_sb_pair1:"SB 2 — first pair",phase_sb_pair2:"SB 3 — second pair",phase_cmll:"CMLL",phase_lse:"LSE",phase_lse_eo:"LSE 4a — edge orientation",phase_lse_lr:"LSE 4b — UL/UR edges",phase_lse_ep:"LSE 4c — finish (M2/U2)",phase_twophase:"two-phase",err_WRONG_LENGTH:"State must be 54 characters",err_INVALID_CHARS:"Invalid characters",err_WRONG_CENTERS:"Invalid center arrangement",err_COLOR_COUNT:"Each color must appear exactly 9 times",err_INVALID_PIECES:"Impossible piece (invalid color combination)",err_TWIST:"Corner twist parity error (reassembled cube)",err_FLIP:"Edge flip parity error (reassembled cube)",err_PARITY:"Permutation parity error (two pieces swapped)",err_INVALID_STATE:"Invalid state",err_SOLVER:"Solver error",scramble_invalid:"Invalid scramble notation",smartcube:"Smart cube (GAN356i)",gan_connect:"Connect",gan_disconnect:"Disconnect",gan_connecting:"Connecting…",gan_connected:"Connected: ",gan_mac_hint:"Enter MAC address only if auto-detection fails (saved locally)",gan_sync:"Reload state",gan_reset:"Mark cube as solved",gan_reset_confirm:"Make sure the physical cube is solved, then press OK. This resets the internal state of the cube.",gan_no_bt:"Web Bluetooth is not supported in this browser (use desktop Chrome / Edge)",gan_smart_hint:'Connected: the 3D view follows the physical cube. Press "Solve", then turn the cube to advance.',gan_assist_progress:"Assist in progress",gan_next:"Next move",gan_deviated:"⚠ Off sequence",gan_recover:"Undo with",gan_recovered:"↩ Back on track",gan_reanalyzing:"🔄 Segment solved — re-analyzing from here…",gan_reanalyzed:"✨ Segment solved — re-analyzed from here",gan_regrip:"🖐 Regrip first: white face down, green face front",gan_regrip_up:"🖐 Hold with white face up, green face front",gan_done:"🎉 Solved!",gan_scramble_hint:"Perform the scramble on the physical cube (3D follows it)",gan_connect_failed:"Connection failed",gan_disabled_while_connected:"Not available while the smart cube is connected",gan_mac_prompt:": enter its MAC address (e.g. AB:12:34:56:78:9A)"}};let Ra=localStorage.getItem("cubesolver-lang")||"ja";function Ua(){return Ra}function Gp(i){Ra=i,localStorage.setItem("cubesolver-lang",i),document.dispatchEvent(new CustomEvent("langchange"))}function De(i){return Np[Ra][i]??i}const $c={U:"#f5f5f5",R:"#d32017",F:"#00a74a",D:"#ffd600",L:"#ff8c00",B:"#0057d8"},el=new Set(Object.values(er));class Bp{constructor(e,t,n,s){this.onApply=n,this.onLoad=s,this.state=t,e.innerHTML="";const r=document.createElement("div");r.className="net-palette";for(const f of Jn){const h=document.createElement("button");h.className="net-swatch",h.style.background=$c[f],h.dataset.face=f,h.title=f,h.addEventListener("click",()=>{this.selected=f,r.querySelectorAll(".net-swatch").forEach(m=>m.classList.remove("selected")),h.classList.add("selected")}),f==="U"&&h.classList.add("selected"),r.appendChild(h)}e.appendChild(r);const a=document.createElement("div");a.className="net-grid";const o={U:[0,3],L:[3,0],F:[3,3],R:[3,6],B:[3,9],D:[6,3]};for(const f of Jn){const[h,m]=o[f];for(let b=0;b<9;b++){const x="URFDLB".indexOf(f)*9+b,p=document.createElement("button");p.className="net-cell",p.style.gridRow=String(h+Math.floor(b/3)+1),p.style.gridColumn=String(m+b%3+1),el.has(x)&&p.classList.add("center"),p.addEventListener("click",()=>{el.has(x)||(this.state=this.state.slice(0,x)+this.selected+this.state.slice(x+1),this.paint())}),this.cells[x]=p,a.appendChild(p)}}e.appendChild(a);const c=document.createElement("p");c.className="net-hint",c.dataset.i18n="editor_hint",c.textContent=De("editor_hint"),e.appendChild(c);const l=document.createElement("div");l.className="net-actions";const d=document.createElement("button");d.className="btn",d.dataset.i18n="load3d",d.textContent=De("load3d"),d.addEventListener("click",()=>{this.state=this.onLoad(),this.paint()});const u=document.createElement("button");u.className="btn primary",u.dataset.i18n="apply3d",u.textContent=De("apply3d"),u.addEventListener("click",()=>this.onApply(this.state)),l.append(d,u),e.appendChild(l),this.paint()}cells=[];selected="U";state;setState(e){this.state=e,this.paint()}paint(){for(let e=0;e<54;e++)this.cells[e].style.background=$c[this.state[e]]}}class Op{constructor(e,t,n,s){this.cube=e,this.listEl=t,this.controlsEl=n,this.speedInput=s,this.renderControls(),document.addEventListener("langchange",()=>{this.renderList(),this.updateUI()})}tokens=[];phaseOfMove=[];pointer=0;baseState="";playing=!1;solution=null;chips=[];externalMode=!1;get isActive(){return this.solution!==null}setSolution(e){this.stop(),this.solution=e,this.tokens=[],this.phaseOfMove=[],this.pointer=0,this.baseState=this.cube.state,e&&e.phases.forEach((t,n)=>{for(const s of t.moves)this.tokens.push(Lt(s)[0]),this.phaseOfMove.push(n)}),this.renderList(),this.updateUI()}reset(){this.setSolution(null)}setExternalMode(e){this.externalMode=e,this.stop(),this.updateUI()}setExternalPointer(e){this.pointer=Math.max(0,Math.min(e,this.tokens.length)),this.updateUI()}recoveryEl=null;setRecovery(e){if(!e||e.length===0){this.recoveryEl?.remove(),this.recoveryEl=null;return}this.recoveryEl||(this.recoveryEl=document.createElement("div"),this.recoveryEl.className="recovery-inline"),this.recoveryEl.innerHTML="";const t=document.createElement("span");t.className="recovery-label",t.textContent=`⚠ ${De("gan_recover")}:`,this.recoveryEl.appendChild(t);for(const s of e){const r=document.createElement("span");r.className="move-chip recovery-chip",r.textContent=s,this.recoveryEl.appendChild(r)}const n=this.chips[this.pointer];n?.parentElement?n.parentElement.insertBefore(this.recoveryEl,n):this.listEl.appendChild(this.recoveryEl)}duration(){return 600-Number(this.speedInput.value)*5}async stepForward(){if(this.cube.busy||this.pointer>=this.tokens.length)return!1;const e=this.tokens[this.pointer++];return await this.cube.playMove(e,this.duration()),this.updateUI(),!0}async stepBack(){if(this.cube.busy||this.pointer<=0)return;const e=this.tokens[--this.pointer];await this.cube.playMove(ji([e])[0],this.duration()),this.updateUI()}jumpStart(){this.stop(),!this.cube.busy&&(this.pointer=0,this.cube.setState(this.baseState),this.updateUI())}async jumpEnd(){for(this.stop();this.pointer<this.tokens.length&&!this.cube.busy;){const e=this.tokens[this.pointer++];await this.cube.playMove(e,60)}this.updateUI()}async play(){if(this.playing){this.stop();return}for(this.playing=!0,this.updateUI();this.playing&&await this.stepForward();)await new Promise(t=>setTimeout(t,60));this.playing=!1,this.updateUI()}stop(){this.playing=!1}buttons={};renderControls(){this.controlsEl.innerHTML="";const e=(t,n,s)=>{const r=document.createElement("button");r.className="btn ctrl",r.textContent=t,r.addEventListener("click",n),this.buttons[s]=r,this.controlsEl.appendChild(r)};e("⏮",()=>this.jumpStart(),"start"),e("◀",()=>void this.stepBack(),"back"),e("▶",()=>void this.play(),"play"),e("▶▶",()=>void this.stepForward(),"fwd"),e("⏭",()=>void this.jumpEnd(),"end")}renderList(){if(this.listEl.innerHTML="",this.chips=[],this.recoveryEl=null,!this.solution)return;const e=document.createElement("div");e.className="solution-header",e.textContent=`${De("solution")}: ${this.solution.totalMoves} ${De("moves_count")}`,this.listEl.appendChild(e);let t=0;this.solution.phases.forEach(n=>{const s=document.createElement("div");s.className="phase";const r=document.createElement("div");r.className="phase-label",r.textContent=De(`phase_${n.name}`)+(n.detail?` — ${n.detail}`:"")+` (${n.moves.length})`,s.appendChild(r);const a=document.createElement("div");a.className="phase-moves";for(const o of n.moves){const c=document.createElement("button");c.className="move-chip",c.textContent=o;const l=t+1;c.addEventListener("click",()=>void this.jumpTo(l)),this.chips.push(c),a.appendChild(c),t++}s.appendChild(a),this.listEl.appendChild(s)})}async jumpTo(e){if(!this.externalMode){for(this.stop();this.pointer<e&&this.pointer<this.tokens.length;){if(this.cube.busy)return;await this.cube.playMove(this.tokens[this.pointer++],80)}for(;this.pointer>e&&this.pointer>0;){if(this.cube.busy)return;await this.cube.playMove(ji([this.tokens[--this.pointer]])[0],80)}this.updateUI()}}updateUI(){this.chips.forEach((n,s)=>{n.classList.toggle("done",s<this.pointer),n.classList.toggle("current",s===this.pointer)}),this.chips[this.pointer]?.scrollIntoView({block:"nearest"}),this.buttons.play.textContent=this.playing?"⏸":"▶";const t=this.tokens.length>0&&!this.externalMode;for(const n of["start","back","play","fwd","end"])this.buttons[n].disabled=!t}}const tl="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IFdlPVsiVSIsIlIiLCJGIiwiRCIsIkwiLCJCIl0sU2U9IlVVVVVVVVVVVVJSUlJSUlJSUkZGRkZGRkZGRkRERERERERERExMTExMTExMTEJCQkJCQkJCQiIsVHQ9e1U6MCxSOjksRjoxOCxEOjI3LEw6MzYsQjo0NX0sQXQ9e1U6NCxSOjEzLEY6MjIsRDozMSxMOjQwLEI6NDl9O2Z1bmN0aW9uIGJlKG4pe2ZvcihsZXQgZT0wO2U8NjtlKyspe2NvbnN0IG89bltlKjkrNF07Zm9yKGxldCB0PTA7dDw5O3QrKylpZihuW2UqOSt0XSE9PW8pcmV0dXJuITF9cmV0dXJuITB9Y29uc3QgYm49W1s4LDksMjBdLFs2LDE4LDM4XSxbMCwzNiw0N10sWzIsNDUsMTFdLFsyOSwyNiwxNV0sWzI3LDQ0LDI0XSxbMzMsNTMsNDJdLFszNSwxNyw1MV1dLE1uPVtbIlUiLCJSIiwiRiJdLFsiVSIsIkYiLCJMIl0sWyJVIiwiTCIsIkIiXSxbIlUiLCJCIiwiUiJdLFsiRCIsIkYiLCJSIl0sWyJEIiwiTCIsIkYiXSxbIkQiLCJCIiwiTCJdLFsiRCIsIlIiLCJCIl1dLGtuPVtbNSwxMF0sWzcsMTldLFszLDM3XSxbMSw0Nl0sWzMyLDE2XSxbMjgsMjVdLFszMCw0M10sWzM0LDUyXSxbMjMsMTJdLFsyMSw0MV0sWzUwLDM5XSxbNDgsMTRdXSxDbj1bWyJVIiwiUiJdLFsiVSIsIkYiXSxbIlUiLCJMIl0sWyJVIiwiQiJdLFsiRCIsIlIiXSxbIkQiLCJGIl0sWyJEIiwiTCJdLFsiRCIsIkIiXSxbIkYiLCJSIl0sWyJGIiwiTCJdLFsiQiIsIkwiXSxbIkIiLCJSIl1dLEJuPXtVOntub3JtYWw6WzAsMSwwXSxwb3M6KG4sZSk9PltlLTEsMSxuLTFdfSxSOntub3JtYWw6WzEsMCwwXSxwb3M6KG4sZSk9PlsxLDEtbiwxLWVdfSxGOntub3JtYWw6WzAsMCwxXSxwb3M6KG4sZSk9PltlLTEsMS1uLDFdfSxEOntub3JtYWw6WzAsLTEsMF0scG9zOihuLGUpPT5bZS0xLC0xLDEtbl19LEw6e25vcm1hbDpbLTEsMCwwXSxwb3M6KG4sZSk9PlstMSwxLW4sZS0xXX0sQjp7bm9ybWFsOlswLDAsLTFdLHBvczoobixlKT0+WzEtZSwxLW4sLTFdfX0sYXQ9W10sY3Q9W107Zm9yKGNvbnN0IG4gb2YgV2Upe2NvbnN0IGU9Qm5bbl07Zm9yKGxldCBvPTA7bzw5O28rKylhdFtUdFtuXStvXT1lLnBvcyhNYXRoLmZsb29yKG8vMyksbyUzKSxjdFtUdFtuXStvXT1lLm5vcm1hbH1jb25zdCBfdD0obixlKT0+YCR7blswXX0sJHtuWzFdfSwke25bMl19fCR7ZVswXX0sJHtlWzFdfSwke2VbMl19YCx4dD1uZXcgTWFwO2ZvcihsZXQgbj0wO248NTQ7bisrKXh0LnNldChfdChhdFtuXSxjdFtuXSksbik7ZnVuY3Rpb24gUHQobixlLG8pe2NvbnN0W3QscixsXT1uO3JldHVybiBlPT09MD9vPT09MT9bdCwtbCxyXTpbdCxsLC1yXTplPT09MT9vPT09MT9bbCxyLC10XTpbLWwscix0XTpvPT09MT9bLXIsdCxsXTpbciwtdCxsXX1jb25zdCBOdD17Ujp7YXhpczowLGxheWVyczpbMV0sZGlyOi0xfSxMOntheGlzOjAsbGF5ZXJzOlstMV0sZGlyOjF9LE06e2F4aXM6MCxsYXllcnM6WzBdLGRpcjoxfSxyOntheGlzOjAsbGF5ZXJzOlswLDFdLGRpcjotMX0sbDp7YXhpczowLGxheWVyczpbLTEsMF0sZGlyOjF9LHg6e2F4aXM6MCxsYXllcnM6Wy0xLDAsMV0sZGlyOi0xfSxVOntheGlzOjEsbGF5ZXJzOlsxXSxkaXI6LTF9LEQ6e2F4aXM6MSxsYXllcnM6Wy0xXSxkaXI6MX0sRTp7YXhpczoxLGxheWVyczpbMF0sZGlyOjF9LHU6e2F4aXM6MSxsYXllcnM6WzAsMV0sZGlyOi0xfSxkOntheGlzOjEsbGF5ZXJzOlstMSwwXSxkaXI6MX0seTp7YXhpczoxLGxheWVyczpbLTEsMCwxXSxkaXI6LTF9LEY6e2F4aXM6MixsYXllcnM6WzFdLGRpcjotMX0sQjp7YXhpczoyLGxheWVyczpbLTFdLGRpcjoxfSxTOntheGlzOjIsbGF5ZXJzOlswXSxkaXI6LTF9LGY6e2F4aXM6MixsYXllcnM6WzAsMV0sZGlyOi0xfSxiOntheGlzOjIsbGF5ZXJzOlstMSwwXSxkaXI6MX0sejp7YXhpczoyLGxheWVyczpbLTEsMCwxXSxkaXI6LTF9fSxJdD1uZXcgU2V0KFsieCIsInkiLCJ6Il0pLFRuPW5ldyBTZXQoWyJNIiwiRSIsIlMiXSksQW49bmV3IFNldChbIlUiLCJEIiwiTCIsIlIiLCJGIiwiQiJdKTtmdW5jdGlvbiBfbihuKXtjb25zdCBlPW5ldyBJbnQ4QXJyYXkoNTQpO2ZvcihsZXQgbz0wO288NTQ7bysrKXtjb25zdCB0PWF0W29dO2lmKG4ubGF5ZXJzLmluY2x1ZGVzKHRbbi5heGlzXSkpe2NvbnN0IHI9UHQodCxuLmF4aXMsbi5kaXIpLGw9UHQoY3Rbb10sbi5heGlzLG4uZGlyKSxzPXh0LmdldChfdChyLGwpKTtpZihzPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcigiZ2VvbWV0cnkgYnVnIik7ZVtzXT1vfWVsc2UgZVtvXT1vfXJldHVybiBlfWNvbnN0IHFlPW5ldyBJbnQ4QXJyYXkoNTQpLm1hcCgobixlKT0+ZSk7ZnVuY3Rpb24gQmUobixlKXtjb25zdCBvPW5ldyBJbnQ4QXJyYXkoNTQpO2ZvcihsZXQgdD0wO3Q8NTQ7dCsrKW9bdF09bltlW3RdXTtyZXR1cm4gb31mdW5jdGlvbiBqdChuKXtjb25zdCBlPW5ldyBJbnQ4QXJyYXkoNTQpO2ZvcihsZXQgbz0wO288NTQ7bysrKWVbbltvXV09bztyZXR1cm4gZX1mdW5jdGlvbiAkdChuLGUpe2ZvcihsZXQgbz0wO288NTQ7bysrKWlmKG5bb10hPT1lW29dKXJldHVybiExO3JldHVybiEwfWNvbnN0IEt0PW5ldyBNYXA7Zm9yKGNvbnN0W24sZV1vZiBPYmplY3QuZW50cmllcyhOdCkpS3Quc2V0KG4sX24oZSkpO2NvbnN0IHhuPS9eKFtVUkZETEJdKXcoWzInXSopJHxeKFtVUkZETEJNRVN4eXp1ZGxyZmJdKShbMiddKikkLztmdW5jdGlvbiBMZShuKXtjb25zdCBlPVtdO2Zvcihjb25zdCBvIG9mIG4udHJpbSgpLnNwbGl0KC9bXHMoKVtcXV0rLykpe2lmKCFvKWNvbnRpbnVlO2NvbnN0IHQ9eG4uZXhlYyhvKTtpZighdCl0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgbW92ZSB0b2tlbjogIiR7b30iYCk7Y29uc3Qgcj10WzFdP3RbMV0udG9Mb3dlckNhc2UoKTp0WzNdLGw9KHRbMV0/dFsyXTp0WzRdKT8/IiI7bGV0IHM9bC5pbmNsdWRlcygiMiIpPzI6MTtsLmluY2x1ZGVzKCInIikmJihzPTQtcyksZS5wdXNoKHtiYXNlOnIsYW1vdW50OnN9KX1yZXR1cm4gZX1mdW5jdGlvbiBmdChuKXtyZXR1cm4gbi5iYXNlKyhuLmFtb3VudD09PTI/IjIiOm4uYW1vdW50PT09Mz8iJyI6IiIpfWZ1bmN0aW9uIHp0KG4pe3JldHVybiBuLm1hcChmdCkuam9pbigiICIpfWNvbnN0IFZ0PW5ldyBNYXA7ZnVuY3Rpb24gRWUobil7Y29uc3QgZT1uLmJhc2Urbi5hbW91bnQ7bGV0IG89VnQuZ2V0KGUpO2lmKCFvKXtjb25zdCB0PUt0LmdldChuLmJhc2UpO2lmKCF0KXRocm93IG5ldyBFcnJvcihgdW5rbm93biBtb3ZlIGJhc2U6ICR7bi5iYXNlfWApO289dDtmb3IobGV0IHI9MTtyPG4uYW1vdW50O3IrKylvPUJlKG8sdCk7VnQuc2V0KGUsbyl9cmV0dXJuIG99ZnVuY3Rpb24gaWUobil7bGV0IGU9cWU7Zm9yKGNvbnN0IG8gb2YgbillPUJlKGUsRWUobykpO3JldHVybiBlfWZ1bmN0aW9uIGNlKG4sZSl7bGV0IG89IiI7Zm9yKGxldCB0PTA7dDw1NDt0Kyspbys9bltlW3RdXTtyZXR1cm4gb31mdW5jdGlvbiBSdChuLGUpe3JldHVybiBjZShuLGllKGUpKX1mdW5jdGlvbiBQbihuLGUpe3JldHVybiBSdChuLExlKGUpKX1mdW5jdGlvbiBaZShuKXtyZXR1cm5bLi4ubl0ucmV2ZXJzZSgpLm1hcChlPT4oe2Jhc2U6ZS5iYXNlLGFtb3VudDo0LWUuYW1vdW50fSkpfWNvbnN0IHV0PXt9O2Zvcihjb25zdFtuLGVdb2YgT2JqZWN0LmVudHJpZXMoTnQpKXV0W25dPWUuYXhpcztjb25zdCBIdD1bIlUiLCJEIiwiUiIsIkwiLCJGIiwiQiIsIk0iLCJFIiwiUyIsInUiLCJkIiwiciIsImwiLCJmIiwiYiIsIngiLCJ5IiwieiJdO2Z1bmN0aW9uIGRlKG4pe2xldCBlPVsuLi5uXTtmb3IoOzspe2NvbnN0IG89W107bGV0IHQ9MCxyPSExO2Zvcig7dDxlLmxlbmd0aDspe2NvbnN0IGw9dXRbZVt0XS5iYXNlXTtsZXQgcz10O2NvbnN0IGk9bmV3IE1hcDtmb3IoO3M8ZS5sZW5ndGgmJnV0W2Vbc10uYmFzZV09PT1sOylpLnNldChlW3NdLmJhc2UsKChpLmdldChlW3NdLmJhc2UpPz8wKStlW3NdLmFtb3VudCklNCkscysrO2NvbnN0IGE9Wy4uLmkuZW50cmllcygpXS5maWx0ZXIoKFssUl0pPT5SIT09MCk7YS5zb3J0KChSLEQpPT5IdC5pbmRleE9mKFJbMF0pLUh0LmluZGV4T2YoRFswXSkpLGEubGVuZ3RoIT09cy10JiYocj0hMCk7Zm9yKGNvbnN0W1IsRF1vZiBhKW8ucHVzaCh7YmFzZTpSLGFtb3VudDpEfSk7dD1zfWlmKCFyKXJldHVybiBvO2U9b319Y29uc3QgSnQ9e3I6WyJ4IiwiTCJdLGw6WyJ4IiwiUiJdLHU6WyJ5IiwiRCJdLGQ6WyJ5IiwiVSJdLGY6WyJ6IiwiQiJdLGI6WyJ6IiwiRiJdfSxObj1uZXcgU2V0KFsibCIsImQiLCJiIl0pLFh0PW5ldyBNYXA7Zm9yKGNvbnN0IG4gb2ZbLi4uQW4sLi4uVG4sLi4uT2JqZWN0LmtleXMoSnQpLC4uLkl0XSlmb3IoY29uc3QgZSBvZlsxLDIsM10pWHQuc2V0KEVlKHtiYXNlOm4sYW1vdW50OmV9KS5qb2luKCIsIikse2Jhc2U6bixhbW91bnQ6ZX0pO2Z1bmN0aW9uIEluKG4sZSl7Y29uc3Qgbz1CZShCZShuLEVlKGUpKSxqdChuKSksdD1YdC5nZXQoby5qb2luKCIsIikpO2lmKCF0KXRocm93IG5ldyBFcnJvcihgY29uanVnYXRlIG5vdCBmb3VuZCBmb3IgJHtmdChlKX1gKTtyZXR1cm4gdH1mdW5jdGlvbiBHdChuKXtsZXQgZT1xZTtjb25zdCBvPVtdLHQ9cj0+e0l0LmhhcyhyLmJhc2UpP2U9QmUoZSxFZShyKSk6by5wdXNoKCR0KGUscWUpP3I6SW4oZSxyKSl9O2Zvcihjb25zdCByIG9mIG4pe2NvbnN0IGw9SnRbci5iYXNlXTtpZihsKXtjb25zdFtzLGldPWwsYT1Obi5oYXMoci5iYXNlKT80LXIuYW1vdW50OnIuYW1vdW50O3Qoe2Jhc2U6cyxhbW91bnQ6YX0pLHQoe2Jhc2U6aSxhbW91bnQ6ci5hbW91bnR9KX1lbHNlIHQocil9cmV0dXJue3Rva2VuczpkZShvKSxyb3RhdGlvbjplfX1jb25zdCBVdD1uZXcgTWFwO3tjb25zdCBuPVtbXV07Zm9yKGNvbnN0IGUgb2ZbIngiLCJ5IiwieiJdKWZvcihjb25zdCBvIG9mWzEsMiwzXSluLnB1c2goW3tiYXNlOmUsYW1vdW50Om99XSk7Zm9yKGNvbnN0IGUgb2Ygbilmb3IoY29uc3QgbyBvZiBuKXtjb25zdCB0PVsuLi5lLC4uLm9dLHI9aWUodCkuam9pbigiLCIpO1V0LmhhcyhyKXx8VXQuc2V0KHIsdCl9fWZ1bmN0aW9uIGpuKG4pe3JldHVybiBVdC5nZXQobi5qb2luKCIsIikpPz9udWxsfWNvbnN0ICRuPVs0LDEzLDIyLDMxLDQwLDQ5XTtmdW5jdGlvbiBZdChuKXtjb25zdCBlPWllKG4pO3JldHVybiAkbi5ldmVyeShvPT5lW29dPT09byl9ZnVuY3Rpb24gS24obil7Y29uc3R7dG9rZW5zOmUscm90YXRpb246b309R3Qobik7aWYoWXQoZSkpcmV0dXJuIGRlKGUpO2NvbnN0IHQ9am4obyk7aWYoIXQpdGhyb3cgbmV3IEVycm9yKCJub24tcm90YXRpb24gcmVzaWR1YWwiKTtjb25zdCByPWRlKFsuLi5lLC4uLnRdKTtpZighWXQocikpdGhyb3cgbmV3IEVycm9yKCJhbGcgZG9lcyBub3QgcHJlc2VydmUgY2VudGVycyIpO3JldHVybiByfWZ1bmN0aW9uIHNlKG4pe2NvbnN0IGU9bmV3IEFycmF5KDgpLmZpbGwoLTEpLG89bmV3IEFycmF5KDgpLmZpbGwoLTEpLHQ9bmV3IEFycmF5KDEyKS5maWxsKC0xKSxyPW5ldyBBcnJheSgxMikuZmlsbCgtMSk7Zm9yKGxldCBsPTA7bDw4O2wrKyl7ZTpmb3IobGV0IHM9MDtzPDg7cysrKWZvcihsZXQgaT0wO2k8MztpKyspe2xldCBhPSEwO2ZvcihsZXQgUj0wO1I8MztSKyspaWYobltibltsXVsoUitpKSUzXV0hPT1NbltzXVtSXSl7YT0hMTticmVha31pZihhKXtlW2xdPXMsb1tsXT1pO2JyZWFrIGV9fWlmKGVbbF08MClyZXR1cm4gbnVsbH1mb3IobGV0IGw9MDtsPDEyO2wrKyl7ZTpmb3IobGV0IHM9MDtzPDEyO3MrKylmb3IobGV0IGk9MDtpPDI7aSsrKXtsZXQgYT0hMDtmb3IobGV0IFI9MDtSPDI7UisrKWlmKG5ba25bbF1bKFIraSklMl1dIT09Q25bc11bUl0pe2E9ITE7YnJlYWt9aWYoYSl7dFtsXT1zLHJbbF09aTticmVhayBlfX1pZih0W2xdPDApcmV0dXJuIG51bGx9cmV0dXJue2NwOmUsY286byxlcDp0LGVvOnJ9fWNvbnN0IFd0PW5ldyBNYXA7ZnVuY3Rpb24gVGUobil7Y29uc3QgZT1mdChuKTtsZXQgbz1XdC5nZXQoZSk7aWYobylyZXR1cm4gbztjb25zdCB0PXNlKGNlKFNlLEVlKG4pKSk7aWYoIXQpdGhyb3cgbmV3IEVycm9yKCJtb3ZlIG1hcCBidWciKTtjb25zdCByPW5ldyBVaW50OEFycmF5KDI0KSxsPW5ldyBVaW50OEFycmF5KDI0KTtmb3IobGV0IHM9MDtzPDEyO3MrKyl7Y29uc3QgaT10LmVwW3NdO2ZvcihsZXQgYT0wO2E8MjthKyspcltpKjIrYV09cyoyKyhhK3QuZW9bc10pJTJ9Zm9yKGxldCBzPTA7czw4O3MrKyl7Y29uc3QgaT10LmNwW3NdO2ZvcihsZXQgYT0wO2E8MzthKyspbFtpKjMrYV09cyozKyhhK3QuY29bc10pJTN9cmV0dXJuIG89e2VkZ2U6cixjb3JuZXI6bH0sV3Quc2V0KGUsbyksb31mdW5jdGlvbiBxdChuLGUpe2NvbnN0IG89VGUoZSksdD1uZXcgQXJyYXkoOCkscj1uZXcgQXJyYXkoOCksbD1uZXcgQXJyYXkoMTIpLHM9bmV3IEFycmF5KDEyKTtmb3IobGV0IGk9MDtpPDEyO2krKyl7Y29uc3QgYT1vLmVkZ2VbaSoyKzBdLFI9YT4+MTtsW1JdPW4uZXBbaV0sc1tSXT0obi5lb1tpXSsoYSYxKSklMn1mb3IobGV0IGk9MDtpPDg7aSsrKXtjb25zdCBhPW8uY29ybmVyW2kqMyswXSxSPU1hdGguZmxvb3IoYS8zKTt0W1JdPW4uY3BbaV0scltSXT0obi5jb1tpXSthJTMpJTN9cmV0dXJue2NwOnQsY286cixlcDpsLGVvOnN9fWZ1bmN0aW9uIFp0KG4pe2xldCBlPTA7Zm9yKGxldCBvPTA7bzxuLmxlbmd0aDtvKyspZm9yKGxldCB0PW8rMTt0PG4ubGVuZ3RoO3QrKyluW29dPm5bdF0mJihlXj0xKTtyZXR1cm4gZX1mdW5jdGlvbiB6bihuKXtpZihuLmxlbmd0aCE9PTU0KXJldHVybntvazohMSxjb2RlOiJXUk9OR19MRU5HVEgifTtpZighL15bVVJGRExCXXs1NH0kLy50ZXN0KG4pKXJldHVybntvazohMSxjb2RlOiJJTlZBTElEX0NIQVJTIn07Zm9yKGNvbnN0IHQgb2YgV2UpaWYobltBdFt0XV0hPT10KXJldHVybntvazohMSxjb2RlOiJXUk9OR19DRU5URVJTIn07Y29uc3QgZT17fTtmb3IoY29uc3QgdCBvZiBuKWVbdF09KGVbdF0/PzApKzE7Zm9yKGNvbnN0IHQgb2YgV2UpaWYoZVt0XSE9PTkpcmV0dXJue29rOiExLGNvZGU6IkNPTE9SX0NPVU5UIn07Y29uc3Qgbz1zZShuKTtyZXR1cm4gbz9uZXcgU2V0KG8uY3ApLnNpemUhPT04fHxuZXcgU2V0KG8uZXApLnNpemUhPT0xMj97b2s6ITEsY29kZToiSU5WQUxJRF9QSUVDRVMifTpvLmNvLnJlZHVjZSgodCxyKT0+dCtyLDApJTMhPT0wP3tvazohMSxjb2RlOiJUV0lTVCJ9Om8uZW8ucmVkdWNlKCh0LHIpPT50K3IsMCklMiE9PTA/e29rOiExLGNvZGU6IkZMSVAifTpadChvLmNwKSE9PVp0KG8uZXApP3tvazohMSxjb2RlOiJQQVJJVFkifTp7b2s6ITAsY3ViaWU6b306e29rOiExLGNvZGU6IklOVkFMSURfUElFQ0VTIn19ZnVuY3Rpb24gUXQobil7aWYobi5sZW5ndGghPT01NClyZXR1cm4gbnVsbDtjb25zdCBlPW5ldyBNYXA7Zm9yKGNvbnN0IHQgb2YgV2Upe2NvbnN0IHI9bltBdFt0XV07aWYoZS5oYXMocikpcmV0dXJuIG51bGw7ZS5zZXQocix0KX1sZXQgbz0iIjtmb3IoY29uc3QgdCBvZiBuKXtjb25zdCByPWUuZ2V0KHQpO2lmKCFyKXJldHVybiBudWxsO28rPXJ9cmV0dXJuIG99Y29uc3QgTWU9W107Zm9yKGNvbnN0IG4gb2ZbIlUiLCJEIiwiTCIsIlIiLCJGIiwiQiJdKWZvcihjb25zdCBlIG9mWzEsMiwzXSlNZS5wdXNoKHtiYXNlOm4sYW1vdW50OmV9KTtjb25zdCBBZT1bXTtmb3IoY29uc3QgbiBvZlsiVSIsIlIiLCJyIiwiTSJdKWZvcihjb25zdCBlIG9mWzEsMiwzXSlBZS5wdXNoKHtiYXNlOm4sYW1vdW50OmV9KTtjb25zdCBRZT1bXTtmb3IoY29uc3QgbiBvZlsiVSIsIk0iXSlmb3IoY29uc3QgZSBvZlsxLDIsM10pUWUucHVzaCh7YmFzZTpuLGFtb3VudDplfSk7ZnVuY3Rpb24gZXQobixlKXtmb3IobGV0IG89MDtvPDEyO28rKylpZihuLmVwW29dPT09ZSlyZXR1cm4gbyoyK24uZW9bb107dGhyb3cgbmV3IEVycm9yKCJlZGdlIG5vdCBmb3VuZCIpfWZ1bmN0aW9uIHR0KG4sZSl7Zm9yKGxldCBvPTA7bzw4O28rKylpZihuLmNwW29dPT09ZSlyZXR1cm4gbyozK24uY29bb107dGhyb3cgbmV3IEVycm9yKCJjb3JuZXIgbm90IGZvdW5kIil9ZnVuY3Rpb24gVm4obixlKXtsZXQgbz0wO2ZvcihsZXQgdD0wO3Q8bi5sZW5ndGg7dCsrKW89byoyNCtuW3RdO3JldHVybiBvfWZ1bmN0aW9uIE9lKG4sZSxvKXtjb25zdCB0PW4ubGVuZ3RoK2UubGVuZ3RoLHI9MjQqKnQsbD1uZXcgVWludDhBcnJheShyKS5maWxsKDI1NSkscz1vLm1hcChUPT5UZShUKS5lZGdlKSxpPW8ubWFwKFQ9PlRlKFQpLmNvcm5lciksYT17ZGlzdDpsLHRva2VuczpvLGVkZ2VQaWVjZXM6bixjb3JuZXJQaWVjZXM6ZSxlZGdlTWFwczpzLGNvcm5lck1hcHM6aSxyYWRpeDpuZXcgQXJyYXkodCkuZmlsbCgyNCl9LFI9Wy4uLm4ubWFwKFQ9PlQqMiksLi4uZS5tYXAoVD0+VCozKV0sRD1WbihSKTtsZXQgeT1uZXcgVWludDMyQXJyYXkoMSk7eVswXT1ELGxbRF09MDtsZXQgTT0wO2NvbnN0IEE9bi5sZW5ndGgsUD1uZXcgQXJyYXkodCk7Zm9yKDt5Lmxlbmd0aD4wOyl7Y29uc3QgVD1bXTtmb3IobGV0IFY9MDtWPHkubGVuZ3RoO1YrKyl7bGV0IFk9eVtWXTtmb3IobGV0IEk9dC0xO0k+PTA7SS0tKVBbSV09WSUyNCxZPU1hdGguZmxvb3IoWS8yNCk7Zm9yKGxldCBJPTA7STxvLmxlbmd0aDtJKyspe2NvbnN0IEo9c1tJXSxvZT1pW0ldO2xldCBRPTA7Zm9yKGxldCBaPTA7Wjx0O1orKylRPVEqMjQrKFo8QT9KW1BbWl1dOm9lW1BbWl1dKTtsW1FdPT09MjU1JiYobFtRXT1NKzEsVC5wdXNoKFEpKX19TSsrLHk9VWludDMyQXJyYXkuZnJvbShUKX1yZXR1cm4gYX1mdW5jdGlvbiBIbihuLGUpe3JldHVyblsuLi5lLmVkZ2VQaWVjZXMubWFwKG89PmV0KG4sbykpLC4uLmUuY29ybmVyUGllY2VzLm1hcChvPT50dChuLG8pKV19ZnVuY3Rpb24gbnQobixlKXtsZXQgbz1IbihuLGUpO2NvbnN0IHQ9ZS5lZGdlUGllY2VzLmxlbmd0aCxyPW8ubGVuZ3RoO2xldCBsPTA7Zm9yKGxldCBhPTA7YTxyO2ErKylsPWwqMjQrb1thXTtpZihlLmRpc3RbbF09PT0yNTUpcmV0dXJuIG51bGw7Y29uc3Qgcz1bXTtsZXQgaT0wO2Zvcig7ZS5kaXN0W2xdPjA7KXtpZihpKys+NDApdGhyb3cgbmV3IEVycm9yKCJ0YWJsZSBkZXNjZW50IHN0dWNrIik7Y29uc3QgYT1lLmRpc3RbbF07bGV0IFI9ITE7Zm9yKGxldCBEPTA7RDxlLnRva2Vucy5sZW5ndGg7RCsrKXtjb25zdCB5PWUuZWRnZU1hcHNbRF0sTT1lLmNvcm5lck1hcHNbRF07bGV0IEE9MDtjb25zdCBQPW5ldyBBcnJheShyKTtmb3IobGV0IFQ9MDtUPHI7VCsrKVBbVF09VDx0P3lbb1tUXV06TVtvW1RdXSxBPUEqMjQrUFtUXTtpZihlLmRpc3RbQV09PT1hLTEpe3MucHVzaChlLnRva2Vuc1tEXSksbz1QLGw9QSxSPSEwO2JyZWFrfX1pZighUil0aHJvdyBuZXcgRXJyb3IoInRhYmxlIGRlc2NlbnQgZmFpbGVkIil9cmV0dXJuIHN9Y2xhc3MgSyBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGUsbyl7c3VwZXIobz8/ZSksdGhpcy5jb2RlPWV9fWNvbnN0IHdlPW49Pih7YmFzZToiVSIsYW1vdW50Om59KTtmdW5jdGlvbiB2ZShuLGUpe2xldCBvPWU/P3NlKFNlKTtmb3IoY29uc3QgdCBvZiBuKW89cXQobyx0KTtyZXR1cm4gb31mdW5jdGlvbiBKbihuKXtsZXQgZT0wO2ZvcihsZXQgbz0wO288NDtvKyspZT1lKjMrbi5jb1tvXTtmb3IobGV0IG89MDtvPDQ7bysrKWU9ZSoyK24uZW9bb107cmV0dXJuIGV9ZnVuY3Rpb24gZW4obil7bGV0IGU9MDtmb3IobGV0IG89MDtvPDQ7bysrKXtpZihuLmNwW29dPjN8fG4uY29bb10hPT0wKXJldHVybiBudWxsO2U9ZSo0K24uY3Bbb119Zm9yKGxldCBvPTA7bzw0O28rKyl7aWYobi5lcFtvXT4zfHxuLmVvW29dIT09MClyZXR1cm4gbnVsbDtlPWUqNCtuLmVwW29dfXJldHVybiBlfWZ1bmN0aW9uIGh0KG4pe2xldCBlPTA7Zm9yKGxldCBvPTA7bzw0O28rKyl7aWYobi5jcFtvXT4zKXJldHVybiBudWxsO2U9ZSo0K24uY3Bbb119Zm9yKGxldCBvPTA7bzw0O28rKyllPWUqMytuLmNvW29dO3JldHVybiBlfWNvbnN0IEx0PW5ldyBTZXQ7e2ZvcihsZXQgbj0wO248OTtuKyspTHQuYWRkKG4pO2Zvcihjb25zdCBuIG9mWzksMTgsMzYsNDVdKWZvcihsZXQgZT0wO2U8MztlKyspTHQuYWRkKG4rZSl9ZnVuY3Rpb24gdG4obil7Y29uc3QgZT1SdChTZSxuKTtmb3IobGV0IG89MDtvPDU0O28rKylpZighTHQuaGFzKG8pJiZlW29dIT09U2Vbb10pcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gWG4obil7Y29uc3QgZT12ZShuKTtmb3IoY29uc3QgdCBvZls5LDEwLDYsOCwxMSw0XSlpZihlLmVwW3RdIT09dHx8ZS5lb1t0XSE9PTApcmV0dXJuITE7Zm9yKGNvbnN0IHQgb2ZbNSw2LDQsN10paWYoZS5jcFt0XSE9PXR8fGUuY29bdF0hPT0wKXJldHVybiExO2NvbnN0IG89UnQoU2Usbik7cmV0dXJuIG9bNDBdPT09IkwiJiZvWzEzXT09PSJSIn1mdW5jdGlvbiBHbihuLGUsbyx0KXtjb25zdCByPVplKG8pLGw9dD9bMCwxLDIsM106WzBdO2Zvcihjb25zdCBzIG9mIGwpe2NvbnN0IGk9cz09PTA/W106W3dlKDQtcyldLGE9dmUoWy4uLmksLi4ucl0pLFI9bi5rZXlPZihhKTtSIT09bnVsbCYmIW4uZGIuaGFzKFIpJiZuLmRiLnNldChSLHt0b2tlbnM6byxmaW5hbFU6cyxlbnRyeTplfSl9fWZ1bmN0aW9uIG10KG4sZSxvLHQscixsKXtjb25zdCBzPXtrZXlPZjplLGdvYWxLZXlzOnIsZGI6bmV3IE1hcCxlbnRyaWVzOltdLGNhbm9uaWNhbDpvfTtmb3IoY29uc3QgaSBvZiBuKXtjb25zdCBhPUtuKExlKGkuYWxnKSk7aWYoIXQoYSkpdGhyb3cgbmV3IEsoIkRCX0lOVkFMSUQiLGAke2kuaWR9OiBzdHJ1Y3R1cmFsIGNoZWNrIGZhaWxlZGApO3MuZW50cmllcy5wdXNoKHtlbnRyeTppLHRva2VuczphfSksR24ocyxpLGEsbCl9cmV0dXJuIHN9ZnVuY3Rpb24gWW4obil7Y29uc3QgZT1uZXcgQXJyYXkoOCkuZmlsbCgwKSxvPW5ldyBBcnJheSgxMikuZmlsbCgwKTtsZXQgdD1uO2ZvcihsZXQgcj0zO3I+PTA7ci0tKW9bcl09dCYxLHQ+Pj0xO2ZvcihsZXQgcj0zO3I+PTA7ci0tKWVbcl09dCUzLHQ9TWF0aC5mbG9vcih0LzMpO3JldHVybihlWzBdK2VbMV0rZVsyXStlWzNdKSUzIT09MHx8KG9bMF0rb1sxXStvWzJdK29bM10pJTIhPT0wP251bGw6e2NwOlswLDEsMiwzLDQsNSw2LDddLGNvOmUsZXA6Wy4uLkFycmF5KDEyKS5rZXlzKCldLGVvOm99fWZ1bmN0aW9uIFduKG4pe3JldHVybiBtdChuLEpuLFluLHRuLG5ldyBTZXQoWzBdKSwhMSl9ZnVuY3Rpb24gcW4obil7Y29uc3QgZT1bMCwwLDAsMCw0LDUsNiw3XSxvPVswLDAsMCwwLDQsNSw2LDcsOCw5LDEwLDExXTtsZXQgdD1uO2ZvcihsZXQgcj0zO3I+PTA7ci0tKW9bcl09dCYzLHQ+Pj0yO2ZvcihsZXQgcj0zO3I+PTA7ci0tKWVbcl09dCYzLHQ+Pj0yO3JldHVybiBuZXcgU2V0KGUuc2xpY2UoMCw0KSkuc2l6ZSE9PTR8fG5ldyBTZXQoby5zbGljZSgwLDQpKS5zaXplIT09ND9udWxsOntjcDplLGNvOm5ldyBBcnJheSg4KS5maWxsKDApLGVwOm8sZW86bmV3IEFycmF5KDEyKS5maWxsKDApfX1mdW5jdGlvbiBabigpe2NvbnN0IG49bmV3IFNldDtmb3IoY29uc3QgZSBvZlswLDEsMiwzXSl7Y29uc3Qgbz12ZShlPT09MD9bXTpbd2UoZSldKSx0PWVuKG8pO3QhPT1udWxsJiZuLmFkZCh0KX1yZXR1cm4gbn1mdW5jdGlvbiBRbihuKXtyZXR1cm4gbXQobixlbixxbixvPT57aWYoIXRuKG8pKXJldHVybiExO2NvbnN0IHQ9dmUobyk7cmV0dXJuIHQuY28uZXZlcnkocj0+cj09PTApJiZ0LmVvLmV2ZXJ5KHI9PnI9PT0wKX0sWm4oKSwhMCl9ZnVuY3Rpb24gZW8obil7Y29uc3QgZT1bMCwwLDAsMCw0LDUsNiw3XSxvPW5ldyBBcnJheSg4KS5maWxsKDApO2xldCB0PW47Zm9yKGxldCByPTM7cj49MDtyLS0pb1tyXT10JTMsdD1NYXRoLmZsb29yKHQvMyk7Zm9yKGxldCByPTM7cj49MDtyLS0pZVtyXT10JjMsdD4+PTI7cmV0dXJuIG5ldyBTZXQoZS5zbGljZSgwLDQpKS5zaXplIT09NHx8KG9bMF0rb1sxXStvWzJdK29bM10pJTMhPT0wP251bGw6e2NwOmUsY286byxlcDpbLi4uQXJyYXkoMTIpLmtleXMoKV0sZW86bmV3IEFycmF5KDEyKS5maWxsKDApfX1mdW5jdGlvbiB0bygpe2NvbnN0IG49bmV3IFNldDtmb3IoY29uc3QgZSBvZlswLDEsMiwzXSl7Y29uc3Qgbz12ZShlPT09MD9bXTpbd2UoZSldKSx0PWh0KG8pO3QhPT1udWxsJiZuLmFkZCh0KX1yZXR1cm4gbn1mdW5jdGlvbiBubyhuKXtyZXR1cm4gbXQobixodCxlbyxYbix0bygpLCEwKX1mdW5jdGlvbiBwdChuLGUpe2NvbnN0IG89bi5rZXlPZihlKTtpZihvPT09bnVsbCl0aHJvdyBuZXcgSygiTExfUEhBU0VfUFJFQ09ORElUSU9OIik7aWYobi5nb2FsS2V5cy5oYXMobykpe2NvbnN0IGk9bm4obixlKTtyZXR1cm57dG9rZW5zOmk/W3dlKGkpXTpbXSxkZXRhaWw6InNraXAifX1mb3IoY29uc3QgaSBvZlswLDEsMiwzXSl7Y29uc3QgYT1pPT09MD9bXTpbd2UoaSldLFI9aT09PTA/ZTp2ZShhLGUpLEQ9bi5rZXlPZihSKTtpZihEIT09bnVsbCl7Y29uc3QgeT1uLmRiLmdldChEKTtpZih5KXtjb25zdCBNPVsuLi5hLC4uLnkudG9rZW5zXTtyZXR1cm4geS5maW5hbFUmJk0ucHVzaCh3ZSh5LmZpbmFsVSkpLHt0b2tlbnM6ZGUoTSksZGV0YWlsOnkuZW50cnkubmFtZT8/eS5lbnRyeS5pZH19fX1jb25zdCB0PXJvKG4sbyk7aWYoIXQpdGhyb3cgbmV3IEsoIkxMX1VOU09MVkFCTEUiKTtsZXQgcj1bXSxsPWU7Zm9yKGNvbnN0IGkgb2YgdCl7Y29uc3QgYT1pLmF1Zj09PTA/W106W3dlKGkuYXVmKV07cj1bLi4uciwuLi5hLC4uLmkudG9rZW5zXSxsPXZlKFsuLi5hLC4uLmkudG9rZW5zXSxsKX1jb25zdCBzPW5uKG4sbCk7cmV0dXJuIHMmJnIucHVzaCh3ZShzKSkse3Rva2VuczpkZShyKSxkZXRhaWw6YGNoYWluKCR7dC5sZW5ndGh9KWB9fWZ1bmN0aW9uIG5uKG4sZSl7Zm9yKGNvbnN0IG8gb2ZbMCwxLDIsM10pe2NvbnN0IHQ9bz09PTA/ZTp2ZShbd2UobyldLGUpO2xldCByPSEwO2ZvcihsZXQgbD0wO2w8NDtsKyspaWYodC5jcFtsXSE9PWx8fHQuY29bbF0hPT0wKXtyPSExO2JyZWFrfWlmKHIpe2xldCBsPSEwO2ZvcihsZXQgcz0wO3M8NDtzKyspaWYodC5lcFtzXSE9PXN8fHQuZW9bc10hPT0wKXtsPSExO2JyZWFrfWlmKGx8fG9vKG4pKXJldHVybiBvfX1yZXR1cm4gMH1mdW5jdGlvbiBvbyhuKXtyZXR1cm4gbi5rZXlPZj09PWh0fWZ1bmN0aW9uIHJvKG4sZSl7Y29uc3Qgbz1uZXcgU2V0KFtlXSk7bGV0IHQ9W3trZXk6ZSxwYXRoOltdfV07Zm9yKGxldCByPTA7cjw0O3IrKyl7Y29uc3QgbD1bXTtmb3IoY29uc3QgcyBvZiB0KXtjb25zdCBpPW4uY2Fub25pY2FsKHMua2V5KTtpZihpKWZvcihjb25zdCBhIG9mWzAsMSwyLDNdKXtjb25zdCBSPWE9PT0wP1tdOlt3ZShhKV0sRD1hPT09MD9pOnZlKFIsaSk7Zm9yKGNvbnN0e3Rva2Vuczp5fW9mIG4uZW50cmllcyl7Y29uc3QgTT12ZSh5LEQpLEE9bi5rZXlPZihNKTtpZihBPT09bnVsbHx8by5oYXMoQSkpY29udGludWU7Y29uc3QgUD1bLi4ucy5wYXRoLHthdWY6YSx0b2tlbnM6eX1dO2lmKG4uZ29hbEtleXMuaGFzKEEpKXJldHVybiBQO28uYWRkKEEpLGwucHVzaCh7a2V5OkEscGF0aDpQfSl9fX10PWx9cmV0dXJuIG51bGx9ZnVuY3Rpb24ga2Uobil7cmV0dXJuIHp0KG4pLnNwbGl0KCIgIikuZmlsdGVyKEJvb2xlYW4pfXZhciBpbz1be2lkOiJPTEwwMSIsbmFtZToiRG90IDEiLGFsZzoiUiBVMiBSMiBGIFIgRicgVTIgUicgRiBSIEYnIn0se2lkOiJPTEwwMiIsbmFtZToiRG90IDIiLGFsZzoiRiBSIFUgUicgVScgRicgZiBSIFUgUicgVScgZicifSx7aWQ6Ik9MTDAzIixuYW1lOiJEb3QgMyIsYWxnOiJmIFIgVSBSJyBVJyBmJyBVJyBGIFIgVSBSJyBVJyBGJyJ9LHtpZDoiT0xMMDQiLG5hbWU6IkRvdCA0IixhbGc6ImYgUiBVIFInIFUnIGYnIFUgRiBSIFUgUicgVScgRicifSx7aWQ6Ik9MTDA1IixuYW1lOiJTcXVhcmUgTGVmdCIsYWxnOiJyJyBVMiBSIFUgUicgVSByIn0se2lkOiJPTEwwNiIsbmFtZToiU3F1YXJlIFJpZ2h0IixhbGc6InIgVTIgUicgVScgUiBVJyByJyJ9LHtpZDoiT0xMMDciLG5hbWU6IlNtYWxsIExpZ2h0bmluZyIsYWxnOiJyIFUgUicgVSBSIFUyIHInIn0se2lkOiJPTEwwOCIsbmFtZToiU21hbGwgTGlnaHRuaW5nIDIiLGFsZzoicicgVScgUiBVJyBSJyBVMiByIn0se2lkOiJPTEwwOSIsbmFtZToiRmlzaCBLaXRlIixhbGc6IlIgVSBSJyBVJyBSJyBGIFIyIFUgUicgVScgRicifSx7aWQ6Ik9MTDEwIixuYW1lOiJGaXNoIEFudGktS2l0ZSIsYWxnOiJSIFUgUicgVSBSJyBGIFIgRicgUiBVMiBSJyJ9LHtpZDoiT0xMMTEiLG5hbWU6IlNtYWxsIExpZ2h0bmluZyAzIixhbGc6InIgVSBSJyBVIFInIEYgUiBGJyBSIFUyIHInIn0se2lkOiJPTEwxMiIsbmFtZToiU21hbGwgTGlnaHRuaW5nIDQiLGFsZzoiTScgUicgVScgUiBVJyBSJyBVMiBSIFUnIE0ifSx7aWQ6Ik9MTDEzIixuYW1lOiJLbmlnaHQgMSIsYWxnOiJGIFUgUiBVJyBSMiBGJyBSIFUgUiBVJyBSJyJ9LHtpZDoiT0xMMTQiLG5hbWU6IktuaWdodCAyIixhbGc6IlInIEYgUiBVIFInIEYnIFIgRiBVJyBGJyJ9LHtpZDoiT0xMMTUiLG5hbWU6IktuaWdodCAzIixhbGc6InInIFUnIHIgUicgVScgUiBVIHInIFUgciJ9LHtpZDoiT0xMMTYiLG5hbWU6IktuaWdodCA0IixhbGc6InIgVSByJyBSIFUgUicgVScgciBVJyByJyJ9LHtpZDoiT0xMMTciLG5hbWU6IkRvdCA1IixhbGc6IlIgVSBSJyBVIFInIEYgUiBGJyBVMiBSJyBGIFIgRicifSx7aWQ6Ik9MTDE4IixuYW1lOiJEb3QgNiIsYWxnOiJyIFUgUicgVSBSIFUyIHIyIFUnIFIgVScgUicgVTIgciJ9LHtpZDoiT0xMMTkiLG5hbWU6IkRvdCA3IixhbGc6Ik0gVSBSIFUgUicgVScgTScgUicgRiBSIEYnIn0se2lkOiJPTEwyMCIsbmFtZToiRG90IDggKFgpIixhbGc6Ik0gVSBSIFUgUicgVScgTTIgVSBSIFUnIHInIn0se2lkOiJPTEwyMSIsbmFtZToiQ3Jvc3MgMSAoSCkiLGFsZzoiUiBVMiBSJyBVJyBSIFUgUicgVScgUiBVJyBSJyJ9LHtpZDoiT0xMMjIiLG5hbWU6IkNyb3NzIDIgKFBpKSIsYWxnOiJSIFUyIFIyIFUnIFIyIFUnIFIyIFUyIFIifSx7aWQ6Ik9MTDIzIixuYW1lOiJDcm9zcyAzIChVKSIsYWxnOiJSMiBEJyBSIFUyIFInIEQgUiBVMiBSIn0se2lkOiJPTEwyNCIsbmFtZToiQ3Jvc3MgNCAoVCkiLGFsZzoiciBVIFInIFUnIHInIEYgUiBGJyJ9LHtpZDoiT0xMMjUiLG5hbWU6IkNyb3NzIDUgKEwpIixhbGc6IkYnIHIgVSBSJyBVJyByJyBGIFIifSx7aWQ6Ik9MTDI2IixuYW1lOiJDcm9zcyA2IChBbnRpc3VuZSkiLGFsZzoiUiBVMiBSJyBVJyBSIFUnIFInIn0se2lkOiJPTEwyNyIsbmFtZToiQ3Jvc3MgNyAoU3VuZSkiLGFsZzoiUiBVIFInIFUgUiBVMiBSJyJ9LHtpZDoiT0xMMjgiLG5hbWU6IkNvcm5lcnMgT3JpZW50ZWQgMSIsYWxnOiJyIFUgUicgVScgTSBVIFIgVScgUicifSx7aWQ6Ik9MTDI5IixuYW1lOiJBd2t3YXJkIDEiLGFsZzoiUiBVIFInIFUnIFIgVScgUicgRicgVScgRiBSIFUgUicifSx7aWQ6Ik9MTDMwIixuYW1lOiJBd2t3YXJkIDIiLGFsZzoiRiBVIFIgVTIgUicgVScgUiBVMiBSJyBVJyBGJyJ9LHtpZDoiT0xMMzEiLG5hbWU6IlAgMSIsYWxnOiJSJyBVJyBGIFUgUiBVJyBSJyBGJyBSIn0se2lkOiJPTEwzMiIsbmFtZToiUCAyIixhbGc6IlIgVSBCJyBVJyBSJyBVIFIgQiBSJyJ9LHtpZDoiT0xMMzMiLG5hbWU6IlQgMSIsYWxnOiJSIFUgUicgVScgUicgRiBSIEYnIn0se2lkOiJPTEwzNCIsbmFtZToiQyAxIixhbGc6IlIgVSBSMiBVJyBSJyBGIFIgVSBSIFUnIEYnIn0se2lkOiJPTEwzNSIsbmFtZToiRmlzaCAzIixhbGc6IlIgVTIgUjIgRiBSIEYnIFIgVTIgUicifSx7aWQ6Ik9MTDM2IixuYW1lOiJXIDEiLGFsZzoiTCcgVScgTCBVJyBMJyBVIEwgVSBMIEYnIEwnIEYifSx7aWQ6Ik9MTDM3IixuYW1lOiJGaXNoIDQiLGFsZzoiRiBSJyBGJyBSIFUgUiBVJyBSJyJ9LHtpZDoiT0xMMzgiLG5hbWU6IlcgMiIsYWxnOiJSIFUgUicgVSBSIFUnIFInIFUnIFInIEYgUiBGJyJ9LHtpZDoiT0xMMzkiLG5hbWU6IkJpZyBMaWdodG5pbmcgMSIsYWxnOiJMIEYnIEwnIFUnIEwgVSBGIFUnIEwnIn0se2lkOiJPTEw0MCIsbmFtZToiQmlnIExpZ2h0bmluZyAyIixhbGc6IlInIEYgUiBVIFInIFUnIEYnIFUgUiJ9LHtpZDoiT0xMNDEiLG5hbWU6IkF3a3dhcmQgMyIsYWxnOiJSIFUgUicgVSBSIFUyIFInIEYgUiBVIFInIFUnIEYnIn0se2lkOiJPTEw0MiIsbmFtZToiQXdrd2FyZCA0IixhbGc6IlInIFUnIFIgVScgUicgVTIgUiBGIFIgVSBSJyBVJyBGJyJ9LHtpZDoiT0xMNDMiLG5hbWU6IlAgMyIsYWxnOiJGJyBVJyBMJyBVIEwgRiJ9LHtpZDoiT0xMNDQiLG5hbWU6IlAgNCIsYWxnOiJGIFUgUiBVJyBSJyBGJyJ9LHtpZDoiT0xMNDUiLG5hbWU6IlQgMiIsYWxnOiJGIFIgVSBSJyBVJyBGJyJ9LHtpZDoiT0xMNDYiLG5hbWU6IkMgMiIsYWxnOiJSJyBVJyBSJyBGIFIgRicgVSBSIn0se2lkOiJPTEw0NyIsbmFtZToiU21hbGwgTCAxIixhbGc6IlInIFUnIFInIEYgUiBGJyBSJyBGIFIgRicgVSBSIn0se2lkOiJPTEw0OCIsbmFtZToiU21hbGwgTCAyIixhbGc6IkYgUiBVIFInIFUnIFIgVSBSJyBVJyBGJyJ9LHtpZDoiT0xMNDkiLG5hbWU6IlNtYWxsIEwgMyIsYWxnOiJyIFUnIHIyIFUgcjIgVSByMiBVJyByIn0se2lkOiJPTEw1MCIsbmFtZToiU21hbGwgTCA0IixhbGc6InInIFUgcjIgVScgcjIgVScgcjIgVSByJyJ9LHtpZDoiT0xMNTEiLG5hbWU6IkkgMSIsYWxnOiJGIFUgUiBVJyBSJyBVIFIgVScgUicgRicifSx7aWQ6Ik9MTDUyIixuYW1lOiJJIDIiLGFsZzoiUiBVIFInIFUgUiBVJyBCIFUnIEInIFInIn0se2lkOiJPTEw1MyIsbmFtZToiU21hbGwgTCA1IixhbGc6InInIFUnIFIgVScgUicgVSBSIFUnIFInIFUyIHIifSx7aWQ6Ik9MTDU0IixuYW1lOiJTbWFsbCBMIDYiLGFsZzoiciBVIFInIFUgUiBVJyBSJyBVIFIgVTIgcicifSx7aWQ6Ik9MTDU1IixuYW1lOiJJIDMiLGFsZzoiUiBVMiBSMiBVJyBSIFUnIFInIFUyIEYgUiBGJyJ9LHtpZDoiT0xMNTYiLG5hbWU6IkkgNCIsYWxnOiJyJyBVJyByIFUnIFInIFUgUiBVJyBSJyBVIFIgcicgVSByIn0se2lkOiJPTEw1NyIsbmFtZToiQ29ybmVycyBPcmllbnRlZCAyIixhbGc6IlIgVSBSJyBVJyBNJyBVIFIgVScgcicifV0sc289W3tpZDoiUExMLUFhIixuYW1lOiJBYSBwZXJtIixhbGc6InggUicgVSBSJyBEMiBSIFUnIFInIEQyIFIyIHgnIn0se2lkOiJQTEwtQWIiLG5hbWU6IkFiIHBlcm0iLGFsZzoieCBSMiBEMiBSIFUgUicgRDIgUiBVJyBSIHgnIn0se2lkOiJQTEwtRSIsbmFtZToiRSBwZXJtIixhbGc6IngnIFIgVScgUicgRCBSIFUgUicgRCcgUiBVIFInIEQgUiBVJyBSJyBEJyB4In0se2lkOiJQTEwtRiIsbmFtZToiRiBwZXJtIixhbGc6IlInIFUnIEYnIFIgVSBSJyBVJyBSJyBGIFIyIFUnIFInIFUnIFIgVSBSJyBVIFIifSx7aWQ6IlBMTC1HYSIsbmFtZToiR2EgcGVybSIsYWxnOiJSMiBVIFInIFUgUicgVScgUiBVJyBSMiBVJyBEIFInIFUgUiBEJyJ9LHtpZDoiUExMLUdiIixuYW1lOiJHYiBwZXJtIixhbGc6IlInIFUnIFIgVSBEJyBSMiBVIFInIFUgUiBVJyBSIFUnIFIyIEQifSx7aWQ6IlBMTC1HYyIsbmFtZToiR2MgcGVybSIsYWxnOiJSMiBVJyBSIFUnIFIgVSBSJyBVIFIyIFUgRCcgUiBVJyBSJyBEIn0se2lkOiJQTEwtR2QiLG5hbWU6IkdkIHBlcm0iLGFsZzoiUiBVIFInIFUnIEQgUjIgVScgUiBVJyBSJyBVIFInIFUgUjIgRCcifSx7aWQ6IlBMTC1IIixuYW1lOiJIIHBlcm0iLGFsZzoiTTIgVSBNMiBVMiBNMiBVIE0yIn0se2lkOiJQTEwtSmEiLG5hbWU6IkphIHBlcm0iLGFsZzoiUicgVSBMJyBVMiBSIFUnIFInIFUyIFIgTCJ9LHtpZDoiUExMLUpiIixuYW1lOiJKYiBwZXJtIixhbGc6IlIgVSBSJyBGJyBSIFUgUicgVScgUicgRiBSMiBVJyBSJyJ9LHtpZDoiUExMLU5hIixuYW1lOiJOYSBwZXJtIixhbGc6IlIgVSBSJyBVIFIgVSBSJyBGJyBSIFUgUicgVScgUicgRiBSMiBVJyBSJyBVMiBSIFUnIFInIn0se2lkOiJQTEwtTmIiLG5hbWU6Ik5iIHBlcm0iLGFsZzoiUicgVSBSIFUnIFInIEYnIFUnIEYgUiBVIFInIEYgUicgRicgUiBVJyBSIn0se2lkOiJQTEwtUmEiLG5hbWU6IlJhIHBlcm0iLGFsZzoiUiBVJyBSJyBVJyBSIFUgUiBEIFInIFUnIFIgRCcgUicgVTIgUicifSx7aWQ6IlBMTC1SYiIsbmFtZToiUmIgcGVybSIsYWxnOiJSMiBGIFIgVSBSIFUnIFInIEYnIFIgVTIgUicgVTIgUiJ9LHtpZDoiUExMLVQiLG5hbWU6IlQgcGVybSIsYWxnOiJSIFUgUicgVScgUicgRiBSMiBVJyBSJyBVJyBSIFUgUicgRicifSx7aWQ6IlBMTC1VYSIsbmFtZToiVWEgcGVybSIsYWxnOiJNMiBVIE0gVTIgTScgVSBNMiJ9LHtpZDoiUExMLVViIixuYW1lOiJVYiBwZXJtIixhbGc6Ik0yIFUnIE0gVTIgTScgVScgTTIifSx7aWQ6IlBMTC1WIixuYW1lOiJWIHBlcm0iLGFsZzoiUicgVSBSJyBVJyB5IFInIEYnIFIyIFUnIFInIFUgUicgRiBSIEYifSx7aWQ6IlBMTC1ZIixuYW1lOiJZIHBlcm0iLGFsZzoiRiBSIFUnIFInIFUnIFIgVSBSJyBGJyBSIFUgUicgVScgUicgRiBSIEYnIn0se2lkOiJQTEwtWiIsbmFtZToiWiBwZXJtIixhbGc6Ik0nIFUgTTIgVSBNMiBVIE0nIFUyIE0yIn1dLGxvPVt7aWQ6IkYyTDAxIixhbGc6IlUgUiBVJyBSJyJ9LHtpZDoiRjJMMDIiLGFsZzoieSBVJyBMJyBVIEwifSx7aWQ6IkYyTDAzIixhbGc6IkYnIFUnIEYifSx7aWQ6IkYyTDA0IixhbGc6IlIgVSBSJyJ9LHtpZDoiRjJMMDUiLGFsZzoiVScgUiBVIFInIFUgUiBVIFInIn0se2lkOiJGMkwwNiIsYWxnOiJVJyBSIFUyIFInIFUyIFIgVScgUicifSx7aWQ6IkYyTDA3IixhbGc6IlUnIFIgVSBSJyBVMiBSIFUnIFInIn0se2lkOiJGMkwwOCIsYWxnOiJVJyBSIFUyIFInIFUgUiBVJyBSJyJ9LHtpZDoiRjJMMDkiLGFsZzoiVSBGJyBVJyBGIFUnIFIgVSBSJyJ9LHtpZDoiRjJMMTAiLGFsZzoiVScgUiBVJyBSJyBVIEYnIFUnIEYifSx7aWQ6IkYyTDExIixhbGc6IlIgVScgUicgVTIgRicgVScgRiJ9LHtpZDoiRjJMMTIiLGFsZzoiVSBGJyBVMiBGIFUnIFIgVSBSJyJ9LHtpZDoiRjJMMTMiLGFsZzoiVTIgUiBVIFInIFUgUiBVJyBSJyJ9LHtpZDoiRjJMMTQiLGFsZzoiVSBSIFUyIFInIFUgUiBVJyBSJyJ9LHtpZDoiRjJMMTUiLGFsZzoiUiBVMiBSJyBVJyBSIFUgUicifSx7aWQ6IkYyTDE2IixhbGc6IkYnIFUgRiBVMiBSIFUgUicifSx7aWQ6IkYyTDE3IixhbGc6IlUgUiBVJyBSJyBVJyBGJyBVIEYifSx7aWQ6IkYyTDE4IixhbGc6IlUnIEYnIFUgRiBVIFIgVScgUicifSx7aWQ6IkYyTDE5IixhbGc6IlUgUiBVJyBSJyBVIFIgVScgUicgVSBSIFUnIFInIn0se2lkOiJGMkwyMCIsYWxnOiJVJyBSIFUnIFInIFUgUiBVIFInIn0se2lkOiJGMkwyMSIsYWxnOiJVMiBSIFUnIFInIFUnIEYnIFUnIEYifSx7aWQ6IkYyTDIyIixhbGc6IkYnIFUgRiBVJyBGJyBVIEYgVScgUiBVIFInIn1dO2NvbnN0IGFvPW49Pih7YmFzZToiVSIsYW1vdW50Om59KSxvbj1be25hbWU6IkZSIixjb3JuZXI6NCxlZGdlOjgsWDoiUiIsWToiRiJ9LHtuYW1lOiJGTCIsY29ybmVyOjUsZWRnZTo5LFg6IkYiLFk6IkwifSx7bmFtZToiQkwiLGNvcm5lcjo2LGVkZ2U6MTAsWDoiTCIsWToiQiJ9LHtuYW1lOiJCUiIsY29ybmVyOjcsZWRnZToxMSxYOiJCIixZOiJSIn1dO2Z1bmN0aW9uIHJuKG4pe2xldCBlPW5ldyBVaW50OEFycmF5KDI0KS5tYXAoKHQscik9PnIpLG89bmV3IFVpbnQ4QXJyYXkoMjQpLm1hcCgodCxyKT0+cik7Zm9yKGNvbnN0IHQgb2Ygbil7Y29uc3Qgcj1UZSh0KSxsPW5ldyBVaW50OEFycmF5KDI0KSxzPW5ldyBVaW50OEFycmF5KDI0KTtmb3IobGV0IGk9MDtpPDI0O2krKylsW2ldPXIuY29ybmVyW2VbaV1dLHNbaV09ci5lZGdlW29baV1dO2U9bCxvPXN9cmV0dXJue2Nvcm5lcjplLGVkZ2U6b319ZnVuY3Rpb24gY28obil7Y29uc3QgZT1bXSxvPVtdO2Zvcihjb25zdCB0IG9mWyIiLCInIiwiMiJdKW8ucHVzaChgJHtuLlh9IFUke3R9ICR7bi5YfSdgKSxvLnB1c2goYCR7bi5ZfScgVSR7dH0gJHtuLll9YCk7Zm9yKGNvbnN0IHQgb2ZbIiIsIlUgIiwiVScgIiwiVTIgIl0pZm9yKGNvbnN0IHIgb2Ygbyl7Y29uc3QgbD1MZSh0K3IpLHM9cm4obCk7ZS5wdXNoKHt0b2tlbnM6bCxjb3JuZXJNYXA6cy5jb3JuZXIsZWRnZU1hcDpzLmVkZ2V9KX1yZXR1cm4gZX1mdW5jdGlvbiBmbyhuKXtjb25zdCBlPWNvKG4pLG89bmV3IFVpbnQ4QXJyYXkoNTc2KS5maWxsKDI1NSksdD1uLmNvcm5lciozKjI0K24uZWRnZSoyO29bdF09MDtjb25zdCByPWUubWFwKGk9PnJuKFplKGkudG9rZW5zKSkpO2xldCBsPVt0XSxzPTA7Zm9yKDtsLmxlbmd0aDspe2NvbnN0IGk9W107Zm9yKGNvbnN0IGEgb2YgbCl7Y29uc3QgUj1NYXRoLmZsb29yKGEvMjQpLEQ9YSUyNDtmb3IoY29uc3QgeSBvZiByKXtjb25zdCBNPXkuY29ybmVyW1JdKjI0K3kuZWRnZVtEXTtvW01dPT09MjU1JiYob1tNXT1zKzEsaS5wdXNoKE0pKX19cysrLGw9aX1yZXR1cm57ZGVmOm4sY29tcG9zaXRlczplLGRpc3Q6byxvdmVycmlkZXM6bmV3IE1hcH19ZnVuY3Rpb24gUm8obil7Y29uc3QgZT1FZSh7YmFzZToieSIsYW1vdW50OjF9KSxvPVs0LDEzLDIyLDMxLDQwLDQ5XTtmb3IoY29uc3QgdCBvZiBsbyl7Y29uc3R7dG9rZW5zOnJ9PUd0KExlKHQuYWxnKSksbD1jZShTZSxpZShyKSk7aWYoby5zb21lKGk9PmxbaV0hPT1TZVtpXSkpY29udGludWU7bGV0IHM9cWU7Zm9yKGxldCBpPTA7aTw0O2krKyl7Y29uc3QgYT1pPT09MD9yOnIubWFwKFI9PnVvKHMsUikpO1VvKG4sdC5pZCxhKSxzPWR0KHMsZSl9fX1mdW5jdGlvbiBkdChuLGUpe2NvbnN0IG89bmV3IEludDhBcnJheSg1NCk7Zm9yKGxldCB0PTA7dDw1NDt0Kyspb1t0XT1uW2VbdF1dO3JldHVybiBvfWNvbnN0IHNuPW5ldyBNYXA7ZnVuY3Rpb24gdW8obixlKXtjb25zdCBvPW4uam9pbigiLCIpKyJ8IitlLmJhc2UrZS5hbW91bnQ7bGV0IHQ9c24uZ2V0KG8pO2lmKHQpcmV0dXJuIHQ7Y29uc3Qgcj1kdChkdChuLEVlKGUpKSxqdChuKSk7Zm9yKGNvbnN0IGwgb2ZbIlUiLCJEIiwiTCIsIlIiLCJGIiwiQiIsIk0iLCJFIiwiUyJdKWZvcihjb25zdCBzIG9mWzEsMiwzXSlpZigkdChyLEVlKHtiYXNlOmwsYW1vdW50OnN9KSkpcmV0dXJuIHQ9e2Jhc2U6bCxhbW91bnQ6c30sc24uc2V0KG8sdCksdDt0aHJvdyBuZXcgSygiREJfSU5WQUxJRCIsImNvbmp1Z2F0ZSBub3QgZm91bmQiKX1mdW5jdGlvbiBVbyhuLGUsbyl7Y29uc3QgdD1vdChaZShvKSk7bGV0IHI9bnVsbDtmb3IoY29uc3QgYSBvZiBuKXtjb25zdCBSPXQuY3BbYS5kZWYuY29ybmVyXT09PWEuZGVmLmNvcm5lciYmdC5jb1thLmRlZi5jb3JuZXJdPT09MCxEPXQuZXBbYS5kZWYuZWRnZV09PT1hLmRlZi5lZGdlJiZ0LmVvW2EuZGVmLmVkZ2VdPT09MDtpZighUnx8IUQpe2lmKHIpcmV0dXJuO3I9YX19aWYoIXIpcmV0dXJuO2Zvcihjb25zdCBhIG9mWzQsNSw2LDddKWlmKHQuZXBbYV0hPT1hfHx0LmVvW2FdIT09MClyZXR1cm47Y29uc3QgbD10dCh0LHIuZGVmLmNvcm5lcikscz1ldCh0LHIuZGVmLmVkZ2UpLGk9bCoyNCtzO3Iub3ZlcnJpZGVzLmhhcyhpKXx8ci5vdmVycmlkZXMuc2V0KGkse3Rva2VuczpvLGlkOmV9KX1mdW5jdGlvbiBvdChuLGUpe2xldCBvPWU/P3NlKFNlKTtmb3IoY29uc3QgdCBvZiBuKW89cXQobyx0KTtyZXR1cm4gb31sZXQgRnQ9bnVsbCxndD1udWxsLGxuPW51bGwsYW49bnVsbDtmdW5jdGlvbiBjbigpe0Z0fHwoRnQ9T2UoWzQsNSw2LDddLFtdLE1lKSxndD1vbi5tYXAoZm8pLFJvKGd0KSxsbj1XbihpbyksYW49UW4oc28pKX1mdW5jdGlvbiBobyhuLGUpe3JldHVybiBuLmNwW2UuY29ybmVyXT09PWUuY29ybmVyJiZuLmNvW2UuY29ybmVyXT09PTAmJm4uZXBbZS5lZGdlXT09PWUuZWRnZSYmbi5lb1tlLmVkZ2VdPT09MH1mdW5jdGlvbiBMbyhuLGUpe2NvbnN0IG89W107bGV0IHQ9bjtmb3IobGV0IHI9MDtyPDY7cisrKXtjb25zdCBsPXR0KHQsZS5kZWYuY29ybmVyKSxzPWV0KHQsZS5kZWYuZWRnZSksaT1sKjI0K3M7aWYoaT09PWUuZGVmLmNvcm5lciozKjI0K2UuZGVmLmVkZ2UqMilyZXR1cm4gZGUobyk7Zm9yKGNvbnN0IFIgb2ZbMCwxLDIsM10pe2NvbnN0IEQ9Uj09PTA/W106W2FvKFIpXSx5PVI9PT0wP3Q6b3QoRCx0KSxNPXR0KHksZS5kZWYuY29ybmVyKSoyNCtldCh5LGUuZGVmLmVkZ2UpLEE9ZS5vdmVycmlkZXMuZ2V0KE0pO2lmKEEpcmV0dXJuIGRlKFsuLi5vLC4uLkQsLi4uQS50b2tlbnNdKX1pZihlLmRpc3RbaV0hPT0yNTUpe2xldCBSPWksRD10O2Zvcig7ZS5kaXN0W1JdPjA7KXtjb25zdCB5PWUuZGlzdFtSXTtsZXQgTT0hMTtmb3IoY29uc3QgQSBvZiBlLmNvbXBvc2l0ZXMpe2NvbnN0IFA9QS5jb3JuZXJNYXBbTWF0aC5mbG9vcihSLzI0KV0qMjQrQS5lZGdlTWFwW1IlMjRdO2lmKGUuZGlzdFtQXT09PXktMSl7by5wdXNoKC4uLkEudG9rZW5zKSxEPW90KEEudG9rZW5zLEQpLFI9UCxNPSEwO2JyZWFrfX1pZighTSl0aHJvdyBuZXcgSygiRjJMX0RFU0NFTlQiKX1yZXR1cm4gZGUobyl9Y29uc3QgYT1tbyh0LGUuZGVmKTtpZighYSl0aHJvdyBuZXcgSygiRjJMX1NUVUNLIik7by5wdXNoKC4uLmEpLHQ9b3QoYSx0KX10aHJvdyBuZXcgSygiRjJMX0xPT1AiKX1mdW5jdGlvbiBtbyhuLGUpe2NvbnN0IG89bi5jcC5pbmRleE9mKGUuY29ybmVyKSx0PW4uZXAuaW5kZXhPZihlLmVkZ2UpO2Zvcihjb25zdCByIG9mIG9uKWlmKG89PT1yLmNvcm5lciYmci5jb3JuZXIhPT1lLmNvcm5lcnx8dD09PXIuZWRnZSYmci5lZGdlIT09ZS5lZGdlKXJldHVybiBMZShgJHtyLlh9IFUgJHtyLlh9J2ApO3JldHVybiBvPT09ZS5jb3JuZXJ8fHQ9PT1lLmVkZ2U/TGUoYCR7ZS5YfSBVICR7ZS5YfSdgKTpudWxsfWZ1bmN0aW9uIHBvKG4pe2lmKGNuKCksYmUobikpcmV0dXJue21ldGhvZDoiY2ZvcCIscGhhc2VzOltdLG1vdmVzOltdLHRvdGFsTW92ZXM6MH07Y29uc3QgZT1RdChjZShuLGllKExlKCJ6MiIpKSkpO2lmKCFlfHwhc2UoZSkpdGhyb3cgbmV3IEsoIklOVkFMSURfU1RBVEUiKTtjb25zdCBvPVt7bmFtZToib3JpZW50Iixtb3ZlczpbInoyIl19XTtsZXQgdD1lO2NvbnN0IHI9bnQoc2UodCksRnQpO2lmKCFyKXRocm93IG5ldyBLKCJDUk9TU19GQUlMRUQiKTtjb25zdCBsPWRlKHIpO3Q9Y2UodCxpZShsKSksby5wdXNoKHtuYW1lOiJjcm9zcyIsbW92ZXM6a2UobCl9KTtjb25zdCBzPW5ldyBTZXQoZ3QpO2xldCBpPTE7Zm9yKDtzLnNpemU7KXtjb25zdCB5PXNlKHQpO2xldCBNPW51bGw7Zm9yKGNvbnN0IEEgb2Ygcyl7aWYoaG8oeSxBLmRlZikpe3MuZGVsZXRlKEEpO2NvbnRpbnVlfWNvbnN0IFA9TG8oeSxBKTsoIU18fFAubGVuZ3RoPE0udG9rZW5zLmxlbmd0aCkmJihNPXtzb2x2ZXI6QSx0b2tlbnM6UH0pfWlmKCFNKWJyZWFrO3MuZGVsZXRlKE0uc29sdmVyKSx0PWNlKHQsaWUoTS50b2tlbnMpKSxvLnB1c2goe25hbWU6ImYybCIsZGV0YWlsOmAjJHtpKyt9ICR7TS5zb2x2ZXIuZGVmLm5hbWV9YCxtb3ZlczprZShNLnRva2Vucyl9KX1jb25zdCBhPXB0KGxuLHNlKHQpKTt0PWNlKHQsaWUoYS50b2tlbnMpKSxvLnB1c2goe25hbWU6Im9sbCIsZGV0YWlsOmEuZGV0YWlsLG1vdmVzOmtlKGEudG9rZW5zKX0pO2NvbnN0IFI9cHQoYW4sc2UodCkpO2lmKHQ9Y2UodCxpZShSLnRva2VucykpLG8ucHVzaCh7bmFtZToicGxsIixkZXRhaWw6Ui5kZXRhaWwsbW92ZXM6a2UoUi50b2tlbnMpfSksIWJlKHQpKXRocm93IG5ldyBLKCJTT0xWRVJfRVJST1IiLCJDRk9QIGRpZCBub3Qgc29sdmUgdGhlIGN1YmUiKTtjb25zdCBEPW8uZmxhdE1hcCh5PT55Lm1vdmVzKTtpZighYmUoY2UobixpZShMZShELmpvaW4oIiAiKSkpKSkpdGhyb3cgbmV3IEsoIlNPTFZFUl9FUlJPUiIsInNvbHV0aW9uIGRvZXMgbm90IHNvbHZlIG9yaWdpbmFsIHN0YXRlIik7cmV0dXJue21ldGhvZDoiY2ZvcCIscGhhc2VzOm8sbW92ZXM6RCx0b3RhbE1vdmVzOmZuKEQpfX1mdW5jdGlvbiBmbihuKXtyZXR1cm4gbi5maWx0ZXIoZT0+ISJ4eXoiLmluY2x1ZGVzKGVbMF0pKS5sZW5ndGh9dmFyIEZvPVt7aWQ6IkNNTEwtTzEiLG5hbWU6Ik8gQWRqYWNlbnQgU3dhcCIsYWxnOiJSIFUgUicgRicgUiBVIFInIFUnIFInIEYgUjIgVScgUicifSx7aWQ6IkNNTEwtTzIiLG5hbWU6Ik8gRGlhZ29uYWwgU3dhcCIsYWxnOiJGIFIgVScgUicgVScgUiBVIFInIEYnIFIgVSBSJyBVJyBSJyBGIFIgRicifSx7aWQ6IkNNTEwtSDEiLG5hbWU6IkggUm93cyIsYWxnOiJSIFUyIFInIFUnIFIgVSBSJyBVJyBSIFUnIFInIn0se2lkOiJDTUxMLUgyIixuYW1lOiJIIENvbHVtbnMiLGFsZzoiRiBSIFUgUicgVScgUiBVIFInIFUnIFIgVSBSJyBVJyBGJyJ9LHtpZDoiQ01MTC1IMyIsbmFtZToiSCBSb3ciLGFsZzoiVSBSIFUyIFIyIEYgUiBGJyBSIFUyIFInIn0se2lkOiJDTUxMLUg0IixuYW1lOiJIIENvbHVtbiIsYWxnOiJyIFUnIHIyIEQnIHIgVScgcicgRCByMiBVIHInIn0se2lkOiJDTUxMLVBpMSIsbmFtZToiUGkgUmlnaHQgQmFyIixhbGc6IkYgUiBVIFInIFUnIFIgVSBSJyBVJyBGJyJ9LHtpZDoiQ01MTC1QaTIiLG5hbWU6IlBpIEJhY2sgU2xhc2giLGFsZzoiVSBGIFInIEYnIFIgVTIgUiBVJyBSJyBVIFIgVTIgUicifSx7aWQ6IkNNTEwtUGkzIixuYW1lOiJQaSBYIENoZWNrZXJib2FyZCIsYWxnOiJVJyBSJyBGIFIgVSBGIFUnIFIgVSBSJyBVJyBGJyJ9LHtpZDoiQ01MTC1QaTQiLG5hbWU6IlBpIEZvcndhcmQgU2xhc2giLGFsZzoiUiBVMiBSJyBVJyBSIFUgUicgVTIgUicgRiBSIEYnIn0se2lkOiJDTUxMLVBpNSIsbmFtZToiUGkgQ29sdW1ucyIsYWxnOiJVJyByIFUnIHIyIEQnIHIgVSByJyBEIHIyIFUgcicifSx7aWQ6IkNNTEwtUGk2IixuYW1lOiJQaSBMZWZ0IEJhciIsYWxnOiJVJyBGIFIgVSBSJyBVJyBGJyBSIFUyIFInIFUnIFIgVScgUicifSx7aWQ6IkNNTEwtVTEiLG5hbWU6IlUgRm9yd2FyZCBTbGFzaCIsYWxnOiJVMiBSMiBEIFInIFUyIFIgRCcgUicgVTIgUicifSx7aWQ6IkNNTEwtVTIiLG5hbWU6IlUgQmFjayBTbGFzaCIsYWxnOiJSMiBEJyBSIFUyIFInIEQgUiBVMiBSIn0se2lkOiJDTUxMLVUzIixuYW1lOiJVIEZyb250IFJvdyIsYWxnOiJGIFIyIEQgUicgVSBSIEQnIFIyIFUnIEYnIn0se2lkOiJDTUxMLVU0IixuYW1lOiJVIFJvd3MiLGFsZzoiRiBSIFUgUicgVScgRicifSx7aWQ6IkNNTEwtVTUiLG5hbWU6IlUgWCBDaGVja2VyYm9hcmQiLGFsZzoiUiBVMiBSJyBVJyBSIFUnIFInIEYgUiBVIFInIFUnIEYnIn0se2lkOiJDTUxMLVU2IixuYW1lOiJVIExlZnQgQmFyIixhbGc6IkYgUiBVJyBSJyBVIFIgVSBSJyBGJyJ9LHtpZDoiQ01MTC1UMSIsbmFtZToiVCBMZWZ0IEJhciIsYWxnOiJVJyBSIFUgUicgVScgUicgRiBSIEYnIn0se2lkOiJDTUxMLVQyIixuYW1lOiJUIFJpZ2h0IEJhciIsYWxnOiJSIFUgUicgVScgUicgRiBSIEYnIn0se2lkOiJDTUxMLVQzIixuYW1lOiJUIFJvd3MiLGFsZzoiVSBSMiBEIFInIFUyIFIgRCcgUicgVTIgUicifSx7aWQ6IkNNTEwtVDQiLG5hbWU6IlQgRnJvbnQgUm93IixhbGc6InInIFUgciBVMiBSMiBGIFIgRicgUiJ9LHtpZDoiQ01MTC1UNSIsbmFtZToiVCBDb2x1bW5zIixhbGc6InInIEQnIHIgVSByJyBEIHIgVScgciBVIHInIn0se2lkOiJDTUxMLVQ2IixuYW1lOiJUIEJhY2sgUm93IixhbGc6InIyIEQnIHIgVSByJyBEIHIyIFUnIHInIFUnIHIifSx7aWQ6IkNNTEwtUzEiLG5hbWU6IlMgTGVmdCBCYXIiLGFsZzoiUiBVIFInIFUgUiBVMiBSJyJ9LHtpZDoiQ01MTC1TMiIsbmFtZToiUyBSaWdodCBCYXIiLGFsZzoiVScgTCcgVTIgTCBVIEwnIFUgTCJ9LHtpZDoiQ01MTC1TMyIsbmFtZToiUyBCYWNrIFNsYXNoIixhbGc6IlUgUiBVIFInIFUgUicgRiBSIEYnIFIgVTIgUicifSx7aWQ6IkNNTEwtUzQiLG5hbWU6IlMgUm93cyIsYWxnOiJSIFUgUicgVScgUicgRiBSIEYnIFIgVSBSJyBVIFIgVTIgUicifSx7aWQ6IkNNTEwtUzUiLG5hbWU6IlMgQ29sdW1ucyIsYWxnOiJGIFIgVSBSJyBVJyBGJyBSIFUgUicgVSBSIFUyIFInIn0se2lkOiJDTUxMLVM2IixuYW1lOiJTIFggQ2hlY2tlcmJvYXJkIixhbGc6IlUgUiBVIFInIFUnIFInIEYgUiBGJyBSIFUgUicgVSBSIFUyIFInIn0se2lkOiJDTUxMLUFTMSIsbmFtZToiQVMgUmlnaHQgQmFyIixhbGc6IlUgUiBVMiBSJyBVJyBSIFUnIFInIn0se2lkOiJDTUxMLUFTMiIsbmFtZToiQVMgTGVmdCBCYXIiLGFsZzoiTCcgVTIgTCBVIEwnIFUgTCJ9LHtpZDoiQ01MTC1BUzMiLG5hbWU6IkFTIEZvcndhcmQgU2xhc2giLGFsZzoiUiBVMiBSJyBVJyBSIFUnIFInIFUnIFIgVSBSJyBGJyBSIFUgUicgVScgUicgRiBSMiBVJyBSJyJ9LHtpZDoiQ01MTC1BUzQiLG5hbWU6IkFTIENvbHVtbnMiLGFsZzoiRiBSIFUgUicgVScgRicgVSBSIFUyIFInIFUnIFIgVScgUicifSx7aWQ6IkNNTEwtQVM1IixuYW1lOiJBUyBSb3dzIixhbGc6IlIgVSBSJyBVJyBSJyBGIFIgRicgVTIgUiBVMiBSJyBVJyBSIFUnIFInIn0se2lkOiJDTUxMLUFTNiIsbmFtZToiQVMgWCBDaGVja2VyYm9hcmQiLGFsZzoiVSBGIFIgVScgUicgVScgUiBVIFInIEYnIFIgVTIgUicgVScgUiBVJyBSJyJ9LHtpZDoiQ01MTC1MMSIsbmFtZToiTCBNaXJyb3IiLGFsZzoiRiBSIFUnIFInIFUnIFIgVSBSJyBGJyJ9LHtpZDoiQ01MTC1MMiIsbmFtZToiTCBJbnZlcnNlIixhbGc6IkYgUicgRicgUiBVIFIgVScgUicifSx7aWQ6IkNNTEwtTDMiLG5hbWU6IkwgUHVyZSIsYWxnOiJSIFUyIFInIFUnIFIgVSBSJyBVJyBSIFUgUicgVScgUiBVJyBSJyJ9LHtpZDoiQ01MTC1MNCIsbmFtZToiTCBGcm9udCBDb21tdXRhdG9yIixhbGc6IlIgVTIgUiBEIFInIFUyIFIgRCcgUjIifSx7aWQ6IkNNTEwtTDUiLG5hbWU6IkwgRGlhZyIsYWxnOiJSJyBVJyBSIFUgUicgRicgUiBVIFInIFUnIFInIEYgUjIifSx7aWQ6IkNNTEwtTDYiLG5hbWU6IkwgQmFjayBDb21tdXRhdG9yIixhbGc6IlInIFUyIFInIEQnIFIgVTIgUicgRCBSMiJ9XTtjb25zdCB3dD1bMCwxLDIsMyw1LDddLHZ0PW5ldyBJbnQ4QXJyYXkoMTIpLmZpbGwoLTEpO3d0LmZvckVhY2goKG4sZSk9Pnt2dFtuXT1lfSk7ZnVuY3Rpb24gX2Uobil7bGV0IGU9MDtmb3IobGV0IG89MDtvPDY7bysrKXtsZXQgdD0wO2ZvcihsZXQgcj1vKzE7cjw2O3IrKyluW3JdPG5bb10mJnQrKztlPWUqKDYtbykrdH1yZXR1cm4gZX1jb25zdCBSbj1bMTIwLDI0LDYsMiwxLDFdO2Z1bmN0aW9uIER0KG4pe2NvbnN0IGU9WzAsMSwyLDMsNCw1XSxvPVtdO2xldCB0PW47Zm9yKGxldCByPTA7cjw2O3IrKyl7Y29uc3QgbD1NYXRoLmZsb29yKHQvUm5bcl0pO3QlPVJuW3JdLG8ucHVzaChlLnNwbGljZShsLDEpWzBdKX1yZXR1cm4gb31jb25zdCBydD03MjAqNjQqNCo0O2Z1bmN0aW9uIHhlKG4sZSxvLHQpe3JldHVybigobio2NCtlKSo0K28pKjQrdH1mdW5jdGlvbiBnbygpe2NvbnN0IG49UWUubWFwKGE9Pntjb25zdCBSPVRlKGEpLmVkZ2UsRD1uZXcgVWludDhBcnJheSgxMik7Zm9yKGxldCBNPTA7TTw2O00rKyl7Y29uc3QgQT13dFtNXTtmb3IobGV0IFA9MDtQPDI7UCsrKXtjb25zdCBUPVJbQSoyK1BdLFY9dnRbVD4+MV07aWYoVjwwKXRocm93IG5ldyBFcnJvcigiTFNFIHNsb3QgZXNjYXBlZCIpO0RbTSoyK1BdPVYqMisoVCYxKX19Y29uc3QgeT1hLmJhc2U9PT0iTSI7cmV0dXJue3Nsb3RNYXA6RCxjZW50ZXJEZWx0YTp5P2EuYW1vdW50OjAsY29ybmVyRGVsdGE6eT8wOmEuYW1vdW50fX0pLGU9bmV3IFVpbnQ4QXJyYXkocnQpLmZpbGwoMjU1KSxvPXhlKF9lKFswLDEsMiwzLDQsNV0pLDAsMCwwKTtlW29dPTA7bGV0IHQ9W29dLHI9MDtjb25zdCBsPW5ldyBBcnJheSg2KSxzPW5ldyBBcnJheSg2KSxpPW5ldyBBcnJheSg2KTtmb3IoO3QubGVuZ3RoOyl7Y29uc3QgYT1bXTtmb3IoY29uc3QgUiBvZiB0KXtjb25zdCBEPVImMyx5PVI+PjImMyxNPVI+PjQmNjMsQT1SPj4xMCxQPUR0KEEpO2ZvcihsZXQgVD0wO1Q8NjtUKyspbFtUXT1QW1RdO2Zvcihjb25zdCBUIG9mIG4pe2ZvcihsZXQgST0wO0k8NjtJKyspe2NvbnN0IEo9VC5zbG90TWFwW0kqMisoTT4+SSYxKV07c1tKPj4xXT1sW0ldLGlbSj4+MV09SiYxfWxldCBWPTA7Zm9yKGxldCBJPTA7STw2O0krKylWfD1pW0ldPDxJO2NvbnN0IFk9eGUoX2UocyksViwoeStULmNlbnRlckRlbHRhKSU0LChEK1QuY29ybmVyRGVsdGEpJTQpO2VbWV09PT0yNTUmJihlW1ldPXIrMSxhLnB1c2goWSkpfX1yKyssdD1hfXJldHVybntkaXN0OmUsdHJhbnNpdGlvbnM6bn19Y29uc3QgdW49WzAsMSwyLDMsNCw1XSxVbj1bMCwxLDIsNF0saG49WzEsMyw0LDVdO2Z1bmN0aW9uIHdvKG4sZSl7Y29uc3Qgbz1uJjMsdD1uPj4yJjMscj1uPj40JjYzLGw9bj4+MTAscz1EdChsKSxpPW5ldyBBcnJheSg2KTtsZXQgYT0wO2ZvcihsZXQgUj0wO1I8NjtSKyspe2NvbnN0IEQ9ZS5zbG90TWFwW1IqMisocj4+UiYxKV07aVtEPj4xXT1zW1JdLGF8PShEJjEpPDwoRD4+MSl9cmV0dXJuIHhlKF9lKGkpLGEsKHQrZS5jZW50ZXJEZWx0YSklNCwobytlLmNvcm5lckRlbHRhKSU0KX1mdW5jdGlvbiBTdChuLGUsbyl7Y29uc3QgdD1uZXcgVWludDhBcnJheShydCkuZmlsbCgyNTUpO2xldCByPVtdO2Zvcihjb25zdCBzIG9mIGUpdFtzXT0wLHIucHVzaChzKTtsZXQgbD0wO2Zvcig7ci5sZW5ndGg7KXtjb25zdCBzPVtdO2Zvcihjb25zdCBpIG9mIHIpZm9yKGNvbnN0IGEgb2Ygbyl7Y29uc3QgUj13byhpLG4udHJhbnNpdGlvbnNbYV0pO3RbUl09PT0yNTUmJih0W1JdPWwrMSxzLnB1c2goUikpfWwrKyxyPXN9cmV0dXJuIHR9ZnVuY3Rpb24gdm8obil7Y29uc3QgZT14ZShfZShbMCwxLDIsMyw0LDVdKSwwLDAsMCksbz1TdChuLFtlXSxobiksdD1bXTtmb3IobGV0IGk9MDtpPHJ0O2krKyl7aWYob1tpXT09PTI1NXx8bi5kaXN0W2ldPT09MjU1fHxpPj40JjYzJjUpY29udGludWU7Y29uc3QgUj1EdChpPj4xMCk7UlswXT09PTAmJlJbMl09PT0yJiZ0LnB1c2goaSl9Y29uc3Qgcj1TdChuLHQsVW4pLGw9W107Zm9yKGxldCBpPTA7aTxydDtpKyspcltpXT09PTI1NXx8bi5kaXN0W2ldPT09MjU1fHxpPj40JjYzfHxsLnB1c2goaSk7cmV0dXJue2VvOlN0KG4sbCx1biksbHI6cixlcDpvfX1mdW5jdGlvbiBPdChuLGUsbyl7bGV0IHQ9bixyPWl0KHQpO2lmKGVbcl09PT0yNTUpcmV0dXJuIG51bGw7Y29uc3QgbD1bXTtsZXQgcz0wO2Zvcig7ZVtyXT4wOyl7aWYocysrPjQwKXJldHVybiBudWxsO2NvbnN0IGk9ZVtyXTtsZXQgYT0hMTtmb3IoY29uc3QgUiBvZiBvKXtjb25zdCBEPVFlW1JdLHk9Y2UodCxpZShbRF0pKSxNPWl0KHkpO2lmKGVbTV09PT1pLTEpe2wucHVzaChEKSx0PXkscj1NLGE9ITA7YnJlYWt9fWlmKCFhKXJldHVybiBudWxsfXJldHVybiBsfWZ1bmN0aW9uIGl0KG4pe2NvbnN0IGU9c2Uobik7aWYoIWUpdGhyb3cgbmV3IEsoIklOVkFMSURfU1RBVEUiKTtjb25zdCBvPW5ldyBBcnJheSg2KTtsZXQgdD0wO2ZvcihsZXQgaT0wO2k8NjtpKyspe2NvbnN0IGE9d3RbaV0sUj12dFtlLmVwW2FdXTtpZihSPDApdGhyb3cgbmV3IEsoIkxTRV9QUkVDT05ESVRJT04iKTtvW2ldPVIsdHw9ZS5lb1thXTw8aX1jb25zdCBsPVtuWzRdLG5bMjJdLG5bMzFdLG5bNDldXS5pbmRleE9mKCJVIik7aWYobDwwKXRocm93IG5ldyBLKCJMU0VfUFJFQ09ORElUSU9OIik7Y29uc3Qgcz1lLmNwLmluZGV4T2YoMCk7aWYoczwwfHxzPjMpdGhyb3cgbmV3IEsoIkxTRV9QUkVDT05ESVRJT04iKTtyZXR1cm4geGUoX2UobyksdCxsLHMpfWZ1bmN0aW9uIERvKG4sZSl7bGV0IG89bix0PWl0KG8pO2lmKGUuZGlzdFt0XT09PTI1NSl0aHJvdyBuZXcgSygiTFNFX1VOUkVBQ0hBQkxFIik7Y29uc3Qgcj1bXTtsZXQgbD0wO2Zvcig7ZS5kaXN0W3RdPjA7KXtpZihsKys+MzApdGhyb3cgbmV3IEsoIkxTRV9ERVNDRU5UIik7Y29uc3Qgcz1lLmRpc3RbdF07bGV0IGk9ITE7Zm9yKGNvbnN0IGEgb2YgUWUpe2NvbnN0IFI9Y2UobyxpZShbYV0pKSxEPWl0KFIpO2lmKGUuZGlzdFtEXT09PXMtMSl7ci5wdXNoKGEpLG89Uix0PUQsaT0hMDticmVha319aWYoIWkpdGhyb3cgbmV3IEsoIkxTRV9ERVNDRU5UIil9cmV0dXJuIHJ9bGV0IHl0PW51bGwsTG49bnVsbCxtbj1udWxsLHBuPVtdLGRuPW51bGwsRm49W10sRXQ9bnVsbCxzdD1udWxsLGduPW51bGw7ZnVuY3Rpb24gd24oKXt5dHx8KHl0PU9lKFs5LDEwLDZdLFs1LDZdLE1lKSxMbj1PZShbOCwxMSw0XSxbNCw3XSxBZSksbW49T2UoWzZdLFtdLE1lKSxwbj1be25hbWU6IkZMIix0YWJsZTpPZShbNiw5XSxbNV0sTWUpfSx7bmFtZToiQkwiLHRhYmxlOk9lKFs2LDEwXSxbNl0sTWUpfV0sZG49T2UoWzRdLFtdLEFlKSxGbj1be25hbWU6IkZSIix0YWJsZTpPZShbNCw4XSxbNF0sQWUpfSx7bmFtZToiQlIiLHRhYmxlOk9lKFs0LDExXSxbN10sQWUpfV0sRXQ9Z28oKSxzdD12byhFdCksZ249bm8oRm8pKX1mdW5jdGlvbiBTbyhuKXtpZih3bigpLGJlKG4pKXJldHVybnttZXRob2Q6InJvdXgiLHBoYXNlczpbXSxtb3ZlczpbXSx0b3RhbE1vdmVzOjB9O2NvbnN0IGU9UXQoY2UobixpZShMZSgiejIiKSkpKTtpZighZXx8IXNlKGUpKXRocm93IG5ldyBLKCJJTlZBTElEX1NUQVRFIik7Y29uc3Qgbz1be25hbWU6Im9yaWVudCIsbW92ZXM6WyJ6MiJdfV07bGV0IHQ9ZTtjb25zdCByPShSLEQseSk9Pntjb25zdCBNPWRlKEQpO3Q9Y2UodCxpZShNKSksby5wdXNoKHtuYW1lOlIsZGV0YWlsOnksbW92ZXM6a2UoTSl9KX0sbD0oUixELHksTSk9Pntjb25zdCBBPW50KHNlKHQpLEQpO2lmKCFBKXRocm93IG5ldyBLKGAke1IudG9VcHBlckNhc2UoKX1fRkFJTEVEYCk7QS5sZW5ndGgmJnIoYCR7Un1fZWRnZWAsQSk7Y29uc3QgUD15Lm1hcChWPT4oe25hbWU6Vi5uYW1lLHRva2VuczpudChzZSh0KSxWLnRhYmxlKX0pKTtpZihQLnNvbWUoVj0+IVYudG9rZW5zKSl0aHJvdyBuZXcgSyhgJHtSLnRvVXBwZXJDYXNlKCl9X0ZBSUxFRGApO1Auc29ydCgoVixZKT0+Vi50b2tlbnMubGVuZ3RoLVkudG9rZW5zLmxlbmd0aCksUFswXS50b2tlbnMubGVuZ3RoJiZyKGAke1J9X3BhaXIxYCxQWzBdLnRva2VucyxQWzBdLm5hbWUpO2NvbnN0IFQ9bnQoc2UodCksTSk7aWYoIVQpdGhyb3cgbmV3IEsoYCR7Ui50b1VwcGVyQ2FzZSgpfV9GQUlMRURgKTtULmxlbmd0aCYmcihgJHtSfV9wYWlyMmAsVCxQWzFdLm5hbWUpfTtsKCJmYiIsbW4scG4seXQpLGwoInNiIixkbixGbixMbik7Y29uc3Qgcz1wdChnbixzZSh0KSk7cigiY21sbCIscy50b2tlbnMscy5kZXRhaWwpO2NvbnN0IGk9T3QodCxzdC5lbyx1bik7aWYoaSl7aS5sZW5ndGgmJnIoImxzZV9lbyIsaSk7Y29uc3QgUj1PdCh0LHN0LmxyLFVuKTtpZighUil0aHJvdyBuZXcgSygiTFNFXzRCX0ZBSUxFRCIpO1IubGVuZ3RoJiZyKCJsc2VfbHIiLFIpO2NvbnN0IEQ9T3QodCxzdC5lcCxobik7aWYoIUQpdGhyb3cgbmV3IEsoIkxTRV80Q19GQUlMRUQiKTtELmxlbmd0aCYmcigibHNlX2VwIixEKX1lbHNlIHIoImxzZSIsRG8odCxFdCkpO2lmKCFiZSh0KSl0aHJvdyBuZXcgSygiU09MVkVSX0VSUk9SIiwiUm91eCBkaWQgbm90IHNvbHZlIHRoZSBjdWJlIik7Y29uc3QgYT1vLmZsYXRNYXAoUj0+Ui5tb3Zlcyk7aWYoIWJlKGNlKG4saWUoTGUoYS5qb2luKCIgIikpKSkpKXRocm93IG5ldyBLKCJTT0xWRVJfRVJST1IiLCJzb2x1dGlvbiBkb2VzIG5vdCBzb2x2ZSBvcmlnaW5hbCBzdGF0ZSIpO3JldHVybnttZXRob2Q6InJvdXgiLHBoYXNlczpvLG1vdmVzOmEsdG90YWxNb3ZlczpmbihhKX19dmFyIHZuPXR5cGVvZiBnbG9iYWxUaGlzPCJ1Ij9nbG9iYWxUaGlzOnR5cGVvZiB3aW5kb3c8InUiP3dpbmRvdzp0eXBlb2YgZ2xvYmFsPCJ1Ij9nbG9iYWw6dHlwZW9mIHNlbGY8InUiP3NlbGY6e307ZnVuY3Rpb24gT28obil7cmV0dXJuIG4mJm4uX19lc01vZHVsZSYmT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sImRlZmF1bHQiKT9uLmRlZmF1bHQ6bn12YXIgRG49e2V4cG9ydHM6e319OyhmdW5jdGlvbihuKXsoZnVuY3Rpb24oKXt2YXIgZSxvLHQscixsLHMsaSxhLFIsRCx5LE0sQSxQLFQsVixZLEksSixvZSxRLFosZmUsdWUsVWUsbWUscGUsUGUsbHQsQ2UsRmUsZ2UsRGU7W0osSSxQLGwsWSxlXT1bMCwxLDIsMyw0LDVdLFtwZSxmZSxVZSxRLFIseSxpLEFdPVswLDEsMiwzLDQsNSw2LDddLFttZSxaLHVlLG9lLE0sYSxELHMsVixULG8sdF09WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTFdLFtsdCxGZSxEZV09ZnVuY3Rpb24oKXt2YXIgdGUscmUsbmUsTixXLGc7cmV0dXJuIGc9ZnVuY3Rpb24oZCl7cmV0dXJuIGQtMX0sVz1mdW5jdGlvbihkKXtyZXR1cm4gZyg5KStkfSxuZT1mdW5jdGlvbihkKXtyZXR1cm4gVyg5KStkfSxyZT1mdW5jdGlvbihkKXtyZXR1cm4gbmUoOSkrZH0sTj1mdW5jdGlvbihkKXtyZXR1cm4gcmUoOSkrZH0sdGU9ZnVuY3Rpb24oZCl7cmV0dXJuIE4oOSkrZH0sW1s0LDEzLDIyLDMxLDQwLDQ5XSxbW2coOSksVygxKSxuZSgzKV0sW2coNyksbmUoMSksTigzKV0sW2coMSksTigxKSx0ZSgzKV0sW2coMyksdGUoMSksVygzKV0sW3JlKDMpLG5lKDkpLFcoNyldLFtyZSgxKSxOKDkpLG5lKDcpXSxbcmUoNyksdGUoOSksTig3KV0sW3JlKDkpLFcoOSksdGUoNyldXSxbW2coNiksVygyKV0sW2coOCksbmUoMildLFtnKDQpLE4oMildLFtnKDIpLHRlKDIpXSxbcmUoNiksVyg4KV0sW3JlKDIpLG5lKDgpXSxbcmUoNCksTig4KV0sW3JlKDgpLHRlKDgpXSxbbmUoNiksVyg0KV0sW25lKDQpLE4oNildLFt0ZSg2KSxOKDQpXSxbdGUoNCksVyg2KV1dXX0oKSxQZT1bIlUiLCJSIiwiRiIsIkQiLCJMIiwiQiJdLENlPVtbIlUiLCJSIiwiRiJdLFsiVSIsIkYiLCJMIl0sWyJVIiwiTCIsIkIiXSxbIlUiLCJCIiwiUiJdLFsiRCIsIkYiLCJSIl0sWyJEIiwiTCIsIkYiXSxbIkQiLCJCIiwiTCJdLFsiRCIsIlIiLCJCIl1dLGdlPVtbIlUiLCJSIl0sWyJVIiwiRiJdLFsiVSIsIkwiXSxbIlUiLCJCIl0sWyJEIiwiUiJdLFsiRCIsIkYiXSxbIkQiLCJMIl0sWyJEIiwiQiJdLFsiRiIsIlIiXSxbIkYiLCJMIl0sWyJCIiwiTCJdLFsiQiIsIlIiXV0scj1mdW5jdGlvbigpe3ZhciB0ZSxyZSxuZTtjbGFzcyBOe2NvbnN0cnVjdG9yKGcpe2chPW51bGw/dGhpcy5pbml0KGcpOnRoaXMuaWRlbnRpdHkoKSx0aGlzLm5ld0NlbnRlcj1mdW5jdGlvbigpe3ZhciBkLHA7Zm9yKHA9W10sZD0wO2Q8PTU7KytkKXAucHVzaCgwKTtyZXR1cm4gcH0oKSx0aGlzLm5ld0NwPWZ1bmN0aW9uKCl7dmFyIGQscDtmb3IocD1bXSxkPTA7ZDw9NzsrK2QpcC5wdXNoKDApO3JldHVybiBwfSgpLHRoaXMubmV3RXA9ZnVuY3Rpb24oKXt2YXIgZCxwO2ZvcihwPVtdLGQ9MDtkPD0xMTsrK2QpcC5wdXNoKDApO3JldHVybiBwfSgpLHRoaXMubmV3Q289ZnVuY3Rpb24oKXt2YXIgZCxwO2ZvcihwPVtdLGQ9MDtkPD03OysrZClwLnB1c2goMCk7cmV0dXJuIHB9KCksdGhpcy5uZXdFbz1mdW5jdGlvbigpe3ZhciBkLHA7Zm9yKHA9W10sZD0wO2Q8PTExOysrZClwLnB1c2goMCk7cmV0dXJuIHB9KCl9aW5pdChnKXtyZXR1cm4gdGhpcy5jZW50ZXI9Zy5jZW50ZXIuc2xpY2UoMCksdGhpcy5jbz1nLmNvLnNsaWNlKDApLHRoaXMuZXA9Zy5lcC5zbGljZSgwKSx0aGlzLmNwPWcuY3Auc2xpY2UoMCksdGhpcy5lbz1nLmVvLnNsaWNlKDApfWlkZW50aXR5KCl7cmV0dXJuIHRoaXMuY2VudGVyPVswLDEsMiwzLDQsNV0sdGhpcy5jcD1bMCwxLDIsMyw0LDUsNiw3XSx0aGlzLmNvPWZ1bmN0aW9uKCl7dmFyIGcsZDtmb3IoZD1bXSxnPTA7Zzw9NzsrK2cpZC5wdXNoKDApO3JldHVybiBkfSgpLHRoaXMuZXA9WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTFdLHRoaXMuZW89ZnVuY3Rpb24oKXt2YXIgZyxkO2ZvcihkPVtdLGc9MDtnPD0xMTsrK2cpZC5wdXNoKDApO3JldHVybiBkfSgpfXRvSlNPTigpe3JldHVybntjZW50ZXI6dGhpcy5jZW50ZXIsY3A6dGhpcy5jcCxjbzp0aGlzLmNvLGVwOnRoaXMuZXAsZW86dGhpcy5lb319YXNTdHJpbmcoKXt2YXIgZyxkLHAsdixFLE8saix6LGssXywkO2ZvcigkPVtdLHA9dj0wO3Y8PTU7cD0rK3YpJFs5KnArNF09UGVbdGhpcy5jZW50ZXJbcF1dO2ZvcihwPUU9MDtFPD03O3A9KytFKWZvcihnPXRoaXMuY3BbcF0saz10aGlzLmNvW3BdLGo9Tz0wO088PTI7aj0rK08pJFtGZVtwXVsoaitrKSUzXV09Q2VbZ11bal07Zm9yKHA9ej0wO3o8PTExO3A9Kyt6KWZvcihkPXRoaXMuZXBbcF0saz10aGlzLmVvW3BdLGo9Xz0wO188PTE7aj0rK18pJFtEZVtwXVsoaitrKSUyXV09Z2VbZF1bal07cmV0dXJuICQuam9pbigiIil9c3RhdGljIGZyb21TdHJpbmcoZyl7dmFyIGQscCx2LEUsTyxqLHosayxfLCQsRyxsZSxhZSxjO2Zvcih2PW5ldyBOLEU9aj0wO2o8PTU7RT0rK2opZm9yKE89ej0wO3o8PTU7Tz0rK3opZ1s5KkUrNF09PT1QZVtPXSYmKHYuY2VudGVyW0VdPU8pO2ZvcihFPWs9MDtrPD03O0U9KytrKXtmb3IoJD1fPTA7Xzw9MiYmISgoYz1nW0ZlW0VdWyRdXSk9PT0iVSJ8fGM9PT0iRCIpOyQ9KytfKTtmb3IoZD1nW0ZlW0VdWygkKzEpJTNdXSxwPWdbRmVbRV1bKCQrMiklM11dLE89Rz0wO0c8PTc7Tz0rK0cpZD09PUNlW09dWzFdJiZwPT09Q2VbT11bMl0mJih2LmNwW0VdPU8sdi5jb1tFXT0kJTMpfWZvcihFPWxlPTA7bGU8PTExO0U9KytsZSlmb3IoTz1hZT0wO2FlPD0xMTtPPSsrYWUpe2lmKGdbRGVbRV1bMF1dPT09Z2VbT11bMF0mJmdbRGVbRV1bMV1dPT09Z2VbT11bMV0pe3YuZXBbRV09Tyx2LmVvW0VdPTA7YnJlYWt9aWYoZ1tEZVtFXVswXV09PT1nZVtPXVsxXSYmZ1tEZVtFXVsxXV09PT1nZVtPXVswXSl7di5lcFtFXT1PLHYuZW9bRV09MTticmVha319cmV0dXJuIHZ9Y2xvbmUoKXtyZXR1cm4gbmV3IE4odGhpcy50b0pTT04oKSl9c3RhdGljIHJhbmRvbSgpe3JldHVybiBuZXcgTigpLnJhbmRvbWl6ZSgpfWlzU29sdmVkKCl7dmFyIGcsZCxwLHYsRSxPLGo7Zm9yKHA9dGhpcy5jbG9uZSgpLHAubW92ZShwLnVwcmlnaHQoKSksZD1FPTA7RTw9NTtkPSsrRSlpZihwLmNlbnRlcltkXSE9PWQpcmV0dXJuITE7Zm9yKGc9Tz0wO088PTc7Zz0rK08paWYocC5jcFtnXSE9PWd8fHAuY29bZ10hPT0wKXJldHVybiExO2Zvcih2PWo9MDtqPD0xMTt2PSsrailpZihwLmVwW3ZdIT09dnx8cC5lb1t2XSE9PTApcmV0dXJuITE7cmV0dXJuITB9Y2VudGVyTXVsdGlwbHkoZyl7dmFyIGQscCx2O2Zvcih2PXA9MDtwPD01O3Y9KytwKWQ9Zy5jZW50ZXJbdl0sdGhpcy5uZXdDZW50ZXJbdl09dGhpcy5jZW50ZXJbZF07cmV0dXJuW3RoaXMuY2VudGVyLHRoaXMubmV3Q2VudGVyXT1bdGhpcy5uZXdDZW50ZXIsdGhpcy5jZW50ZXJdLHRoaXN9Y29ybmVyTXVsdGlwbHkoZyl7dmFyIGQscCx2O2Zvcih2PXA9MDtwPD03O3Y9KytwKWQ9Zy5jcFt2XSx0aGlzLm5ld0NwW3ZdPXRoaXMuY3BbZF0sdGhpcy5uZXdDb1t2XT0odGhpcy5jb1tkXStnLmNvW3ZdKSUzO3JldHVyblt0aGlzLmNwLHRoaXMubmV3Q3BdPVt0aGlzLm5ld0NwLHRoaXMuY3BdLFt0aGlzLmNvLHRoaXMubmV3Q29dPVt0aGlzLm5ld0NvLHRoaXMuY29dLHRoaXN9ZWRnZU11bHRpcGx5KGcpe3ZhciBkLHAsdjtmb3Iodj1wPTA7cDw9MTE7dj0rK3ApZD1nLmVwW3ZdLHRoaXMubmV3RXBbdl09dGhpcy5lcFtkXSx0aGlzLm5ld0VvW3ZdPSh0aGlzLmVvW2RdK2cuZW9bdl0pJTI7cmV0dXJuW3RoaXMuZXAsdGhpcy5uZXdFcF09W3RoaXMubmV3RXAsdGhpcy5lcF0sW3RoaXMuZW8sdGhpcy5uZXdFb109W3RoaXMubmV3RW8sdGhpcy5lb10sdGhpc31tdWx0aXBseShnKXtyZXR1cm4gdGhpcy5jZW50ZXJNdWx0aXBseShnKSx0aGlzLmNvcm5lck11bHRpcGx5KGcpLHRoaXMuZWRnZU11bHRpcGx5KGcpLHRoaXN9bW92ZShnKXt2YXIgZCxwLHYsRSxPLGoseixrO2Zvcih6PW5lKGcpLHA9MCxFPXoubGVuZ3RoO3A8RTtwKyspZm9yKE89eltwXSxkPU8vM3wwLGo9TyUzLHY9MCxrPWo7MDw9az92PD1rOnY+PWs7MDw9az8rK3Y6LS12KXRoaXMubXVsdGlwbHkoTi5tb3Zlc1tkXSk7cmV0dXJuIHRoaXN9dXByaWdodCgpe3ZhciBnLGQscCx2LEUsTztmb3IoZz10aGlzLmNsb25lKCksTz1bXSxkPXY9MDt2PD01JiZnLmNlbnRlcltkXSE9PVA7ZD0rK3YpO3N3aXRjaChkKXtjYXNlIGw6Ty5wdXNoKCJ4Iik7YnJlYWs7Y2FzZSBKOk8ucHVzaCgieCciKTticmVhaztjYXNlIGU6Ty5wdXNoKCJ4MiIpO2JyZWFrO2Nhc2UgSTpPLnB1c2goInkiKTticmVhaztjYXNlIFk6Ty5wdXNoKCJ5JyIpfWZvcihPLmxlbmd0aCYmZy5tb3ZlKE9bMF0pLHA9RT0wO0U8PTUmJmcuY2VudGVyW3BdIT09SjtwPSsrRSk7c3dpdGNoKHApe2Nhc2UgWTpPLnB1c2goInoiKTticmVhaztjYXNlIEk6Ty5wdXNoKCJ6JyIpO2JyZWFrO2Nhc2UgbDpPLnB1c2goInoyIil9cmV0dXJuIE8uam9pbigiICIpfXN0YXRpYyBpbnZlcnNlKGcpe3ZhciBkLHAsdixFLE8saix6O2lmKGo9ZnVuY3Rpb24oKXt2YXIgayxfLCQsRztmb3IoJD1uZShnKSxHPVtdLGs9MCxfPSQubGVuZ3RoO2s8XztrKyspRT0kW2tdLGQ9RS8zfDAsTz1FJTMsRy5wdXNoKGQqMystKE8tMSkrMSk7cmV0dXJuIEd9KCksai5yZXZlcnNlKCksdHlwZW9mIGc9PSJzdHJpbmciKXtmb3Ioej0iIixwPTAsdj1qLmxlbmd0aDtwPHY7cCsrKUU9altwXSxkPUUvM3wwLE89RSUzLHorPXRlW2RdLE89PT0xP3orPSIyIjpPPT09MiYmKHorPSInIikseis9IiAiO3JldHVybiB6LnN1YnN0cmluZygwLHoubGVuZ3RoLTEpfWVsc2UgcmV0dXJuIGcubGVuZ3RoIT1udWxsP2o6alswXX19cmV0dXJuIE4ucHJvdG90eXBlLnJhbmRvbWl6ZT1mdW5jdGlvbigpe3ZhciBXLGcsZCxwLHYsRSxPLGosejtyZXR1cm4gRT1mdW5jdGlvbihrLF8pe3JldHVybiBrK01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooXy1rKzEpKX0sej1mdW5jdGlvbihrKXt2YXIgXywkO2ZvcihfPWsubGVuZ3RoO18hPT0wOykkPUUoMCxfLTEpLF8tPTEsa1tfXSxba1tfXSxrWyRdXT1ba1skXSxrW19dXX0scD1mdW5jdGlvbihrKXt2YXIgXywkLEcsbGUsYWUsYyx1O2ZvcihhZT0wLHU9ZnVuY3Rpb24oKXt2YXIgVSxoLGY7Zm9yKGY9W10sVT0wLGg9ay5sZW5ndGgtMTswPD1oP1U8PWg6VT49aDswPD1oPysrVTotLVUpZi5wdXNoKCExKTtyZXR1cm4gZn0oKTs7KXtmb3IoXz0tMSxHPWxlPTAsYz1rLmxlbmd0aC0xOzA8PWM/bGU8PWM6bGU+PWM7Rz0wPD1jPysrbGU6LS1sZSlpZighdVtHXSl7Xz1HO2JyZWFrfWlmKF89PT0tMSlicmVhaztmb3IoJD0wOyF1W19dOyl1W19dPSEwLCQrKyxfPWtbX107YWUrPSQrMX1yZXR1cm4gYWV9LFc9ZnVuY3Rpb24oayxfKXt2YXIgJDtyZXR1cm4gJD1wKF8pK3AoayksJCUyPT09MH0sZD1mdW5jdGlvbihrLF8pe2Zvcih6KF8pLHooayk7IVcoayxfKTspeihfKSx6KGspfSxPPWZ1bmN0aW9uKGssXyl7dmFyICQsRyxsZSxhZTtmb3IobGU9MCwkPUc9MCxhZT1rLmxlbmd0aC0xOzA8PWFlP0c8PWFlOkc+PWFlOyQ9MDw9YWU/KytHOi0tRylsZSs9a1skXT1FKDAsXy0xKX0sdj1mdW5jdGlvbihrLF8pe3JldHVybiBrLnJlZHVjZShmdW5jdGlvbigkLEcpe3JldHVybiAkK0d9KSVfPT09MH0sZz1mdW5jdGlvbihrLF8pe2ZvcihPKGssMyk7IXYoaywzKTspTyhrLDMpO2ZvcihPKF8sMik7IXYoXywyKTspTyhfLDIpfSxqPWZ1bmN0aW9uKCl7cmV0dXJuIGQodGhpcy5jcCx0aGlzLmVwKSxnKHRoaXMuY28sdGhpcy5lbyksdGhpc30san0oKSxOLm1vdmVzPVt7Y2VudGVyOlswLDEsMiwzLDQsNV0sY3A6W1EscGUsZmUsVWUsUix5LGksQV0sY286WzAsMCwwLDAsMCwwLDAsMF0sZXA6W29lLG1lLFosdWUsTSxhLEQscyxWLFQsbyx0XSxlbzpbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdfSx7Y2VudGVyOlswLDEsMiwzLDQsNV0sY3A6W1IsZmUsVWUscGUsQSx5LGksUV0sY286WzIsMCwwLDEsMSwwLDAsMl0sZXA6W1YsWix1ZSxvZSx0LGEsRCxzLE0sVCxvLG1lXSxlbzpbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdfSx7Y2VudGVyOlswLDEsMiwzLDQsNV0sY3A6W2ZlLHksVWUsUSxwZSxSLGksQV0sY286WzEsMiwwLDAsMiwxLDAsMF0sZXA6W21lLFQsdWUsb2UsTSxWLEQscyxaLGEsbyx0XSxlbzpbMCwxLDAsMCwwLDEsMCwwLDEsMSwwLDBdfSx7Y2VudGVyOlswLDEsMiwzLDQsNV0sY3A6W3BlLGZlLFVlLFEseSxpLEEsUl0sY286WzAsMCwwLDAsMCwwLDAsMF0sZXA6W21lLFosdWUsb2UsYSxELHMsTSxWLFQsbyx0XSxlbzpbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdfSx7Y2VudGVyOlswLDEsMiwzLDQsNV0sY3A6W3BlLFVlLGksUSxSLGZlLHksQV0sY286WzAsMSwyLDAsMCwyLDEsMF0sZXA6W21lLFosbyxvZSxNLGEsVCxzLFYsdWUsRCx0XSxlbzpbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdfSx7Y2VudGVyOlswLDEsMiwzLDQsNV0sY3A6W3BlLGZlLFEsQSxSLHksVWUsaV0sY286WzAsMCwxLDIsMCwwLDIsMV0sZXA6W21lLFosdWUsdCxNLGEsRCxvLFYsVCxvZSxzXSxlbzpbMCwwLDAsMSwwLDAsMCwxLDAsMCwxLDFdfSx7Y2VudGVyOltKLFAsWSxsLGUsSV0sY3A6W3BlLGZlLFVlLFEsUix5LGksQV0sY286WzAsMCwwLDAsMCwwLDAsMF0sZXA6W21lLFosdWUsb2UsTSxhLEQscyxULG8sdCxWXSxlbzpbMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDFdfSx7Y2VudGVyOltlLEksSixQLFksbF0sY3A6W3BlLGZlLFVlLFEsUix5LGksQV0sY286WzAsMCwwLDAsMCwwLDAsMF0sZXA6W21lLG9lLHVlLHMsTSxaLEQsYSxWLFQsbyx0XSxlbzpbMCwxLDAsMSwwLDEsMCwxLDAsMCwwLDBdfSx7Y2VudGVyOltZLEosUCxJLGwsZV0sY3A6W3BlLGZlLFVlLFEsUix5LGksQV0sY286WzAsMCwwLDAsMCwwLDAsMF0sZXA6W3VlLFosRCxvZSxtZSxhLE0scyxWLFQsbyx0XSxlbzpbMSwwLDEsMCwxLDAsMSwwLDAsMCwwLDBdfV0scmU9e1U6MCxSOjEsRjoyLEQ6MyxMOjQsQjo1LEU6NixNOjcsUzo4LHg6OSx5OjEwLHo6MTEsdToxMixyOjEzLGY6MTQsZDoxNSxsOjE2LGI6MTd9LHRlPXswOiJVIiwxOiJSIiwyOiJGIiwzOiJEIiw0OiJMIiw1OiJCIiw2OiJFIiw3OiJNIiw4OiJTIiw5OiJ4IiwxMDoieSIsMTE6InoiLDEyOiJ1IiwxMzoiciIsMTQ6ImYiLDE1OiJkIiwxNjoibCIsMTc6ImIifSxuZT1mdW5jdGlvbihXKXt2YXIgZyxkLHAsdixFLE8sajtpZih0eXBlb2YgVz09InN0cmluZyIpe2ZvcihPPVcuc3BsaXQoL1xzKy8pLGo9W10sZz0wLGQ9Ty5sZW5ndGg7ZzxkO2crKylpZih2PU9bZ10sdi5sZW5ndGghPT0wKXtpZih2Lmxlbmd0aD4yKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb3ZlOiAke3Z9YCk7aWYocD1yZVt2WzBdXSxwPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtb3ZlOiAke3Z9YCk7aWYodi5sZW5ndGg9PT0xKUU9MDtlbHNlIGlmKHZbMV09PT0iMiIpRT0xO2Vsc2UgaWYodlsxXT09PSInIilFPTI7ZWxzZSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbW92ZTogJHt2fWApO2oucHVzaChwKjMrRSl9cmV0dXJuIGp9ZWxzZSByZXR1cm4gVy5sZW5ndGghPW51bGw/VzpbV119LE4ubW92ZXMucHVzaChuZXcgTigpLm1vdmUoIlIgTScgTCciKS50b0pTT04oKSksTi5tb3Zlcy5wdXNoKG5ldyBOKCkubW92ZSgiVSBFJyBEJyIpLnRvSlNPTigpKSxOLm1vdmVzLnB1c2gobmV3IE4oKS5tb3ZlKCJGIFMgQiciKS50b0pTT04oKSksTi5tb3Zlcy5wdXNoKG5ldyBOKCkubW92ZSgiVSBFJyIpLnRvSlNPTigpKSxOLm1vdmVzLnB1c2gobmV3IE4oKS5tb3ZlKCJSIE0nIikudG9KU09OKCkpLE4ubW92ZXMucHVzaChuZXcgTigpLm1vdmUoIkYgUyIpLnRvSlNPTigpKSxOLm1vdmVzLnB1c2gobmV3IE4oKS5tb3ZlKCJEIEUiKS50b0pTT04oKSksTi5tb3Zlcy5wdXNoKG5ldyBOKCkubW92ZSgiTCBNIikudG9KU09OKCkpLE4ubW92ZXMucHVzaChuZXcgTigpLm1vdmUoIkIgUyciKS50b0pTT04oKSksTn0uY2FsbCh0aGlzKSxuIT09bnVsbD9uLmV4cG9ydHM9cjp0aGlzLkN1YmU9cn0pLmNhbGwodm4pfSkoRG4pO3ZhciBTbj1Ebi5leHBvcnRzOyhmdW5jdGlvbigpe3ZhciBuLGUsbyx0LHIsbCxzLGksYSxSLEQseSxNLEEsUCxULFYsWSxJLEosb2UsUSxaLGZlLHVlLFVlLG1lLHBlLFBlLGx0LENlLEZlLGdlLERlLHRlLHJlLG5lLE4sVyxnLGQscCx2LEUsTyxqLHosayxfLCQsRyxsZSxhZT1bXS5pbmRleE9mO3Q9dGhpcy5DdWJlfHxTbixbZ2UsUGUsQ2UsbWUsaSxSLGwseV09WzAsMSwyLDMsNCw1LDYsN10sW0ZlLHBlLGx0LFVlLEQscyxhLHIsQSxNLG4sZV09WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTFdLG89ZnVuY3Rpb24oYyx1KXt2YXIgVSxoLGY7aWYoYzx1KXJldHVybiAwO2Zvcih1PmMvMiYmKHU9Yy11KSxmPTEsVT1jLGg9MTtVIT09Yy11OylmKj1VLGYvPWgsVS0tLGgrKztyZXR1cm4gZn0sZz1mdW5jdGlvbihjKXt2YXIgdSxVLGgsZjtmb3IodT0xLFU9aD0yLGY9YzsyPD1mP2g8PWY6aD49ZjtVPTI8PWY/KytoOi0taCl1Kj1VO3JldHVybiB1fSxwPWZ1bmN0aW9uKGMsdSl7cmV0dXJuIGM+dT9jOnV9LCQ9ZnVuY3Rpb24oYyx1LFUpe3ZhciBoLGYsbSx3LFM7Zm9yKFM9Y1t1XSxoPWY9bT11LHc9VS0xO208PXc/Zjw9dzpmPj13O2g9bTw9dz8rK2Y6LS1mKWNbaF09Y1toKzFdO3JldHVybiBjW1VdPVN9LEc9ZnVuY3Rpb24oYyx1LFUpe3ZhciBoLGYsbSx3LFM7Zm9yKFM9Y1tVXSxoPWY9bT1VLHc9dSsxO208PXc/Zjw9dzpmPj13O2g9bTw9dz8rK2Y6LS1mKWNbaF09Y1toLTFdO3JldHVybiBjW3VdPVN9LHo9ZnVuY3Rpb24oYyx1LFUsaD0hMSl7dmFyIGYsbSx3LFMsQyxIO3JldHVybiBTPVUtdSx3PWcoUysxKSxjPT09ImNvcm5lcnMiPyhtPTcsSD0iY3AiKToobT0xMSxIPSJlcCIpLEM9ZnVuY3Rpb24oKXt2YXIgQixMLEY7Zm9yKEY9W10sZj1CPTAsTD1TOzA8PUw/Qjw9TDpCPj1MO2Y9MDw9TD8rK0I6LS1CKUYucHVzaCgwKTtyZXR1cm4gRn0oKSxmdW5jdGlvbihCKXt2YXIgTCxGLHgsYixYLHEsZWUsaGUseWUsTmUsSWUsamUsa3QsJGUsS2UsQ3QsemUsQnQseW4sVmUsRW4sSGUsSmUsWGUsUmUsR2UsWWU7aWYoQiE9bnVsbCl7Zm9yKGY9cT0wLEllPVM7MDw9SWU/cTw9SWU6cT49SWU7Zj0wPD1JZT8rK3E6LS1xKUNbZl09Zit1O2ZvcihGPUIldyxMPUIvd3wwLHllPXRoaXNbSF0sZj1lZT0wLGplPW07MDw9amU/ZWU8PWplOmVlPj1qZTtmPTA8PWplPysrZWU6LS1lZSl5ZVtmXT0tMTtmb3IoYj1oZT0xLCRlPVM7MTw9JGU/aGU8PSRlOmhlPj0kZTtiPTE8PSRlPysraGU6LS1oZSlmb3IoWD1GJShiKzEpLEY9Ri8oYisxKXwwO1g+MDspRyhDLDAsYiksWC0tO2lmKFJlPVMsaClmb3IoYj1OZT0wLEtlPW07MDw9S2U/TmU8PUtlOk5lPj1LZTtiPTA8PUtlPysrTmU6LS1OZSl4PW8obS1iLFJlKzEpLEwteD49MCYmKHllW2JdPUNbUy1SZV0sTC09eCxSZS0tKTtlbHNlIGZvcihiPUhlPUN0PW07Q3Q8PTA/SGU8PTA6SGU+PTA7Yj1DdDw9MD8rK0hlOi0tSGUpeD1vKGIsUmUrMSksTC14Pj0wJiYoeWVbYl09Q1tSZV0sTC09eCxSZS0tKTtyZXR1cm4gdGhpc31lbHNle2Zvcih5ZT10aGlzW0hdLGY9SmU9MCx6ZT1TOzA8PXplP0plPD16ZTpKZT49emU7Zj0wPD16ZT8rK0plOi0tSmUpQ1tmXT0tMTtpZihMPUY9UmU9MCxoKWZvcihiPVhlPUJ0PW07QnQ8PTA/WGU8PTA6WGU+PTA7Yj1CdDw9MD8rK1hlOi0tWGUpdTw9KHluPXllW2JdKSYmeW48PVUmJihMKz1vKG0tYixSZSsxKSxDW1MtUmVdPXllW2JdLFJlKyspO2Vsc2UgZm9yKGI9R2U9MCxWZT1tOzA8PVZlP0dlPD1WZTpHZT49VmU7Yj0wPD1WZT8rK0dlOi0tR2UpdTw9KEVuPXllW2JdKSYmRW48PVUmJihMKz1vKGIsUmUrMSksQ1tSZV09eWVbYl0sUmUrKyk7Zm9yKGI9WWU9a3Q9UztrdDw9MD9ZZTw9MDpZZT49MDtiPWt0PD0wPysrWWU6LS1ZZSl7Zm9yKFg9MDtDW2JdIT09dStiOykkKEMsMCxiKSxYKys7Rj0oYisxKSpGK1h9cmV0dXJuIEwqdytGfX19LFA9e3R3aXN0OmZ1bmN0aW9uKGMpe3ZhciB1LFUsaCxmLG0sdztpZihjIT1udWxsKXtmb3IobT0wLHU9VT02O1U+PTA7dT0tLVUpZj1jJTMsYz1jLzN8MCx0aGlzLmNvW3VdPWYsbSs9ZjtyZXR1cm4gdGhpcy5jb1s3XT0oMy1tJTMpJTMsdGhpc31lbHNle2Zvcih3PTAsdT1oPTA7aDw9Njt1PSsraCl3PTMqdyt0aGlzLmNvW3VdO3JldHVybiB3fX0sZmxpcDpmdW5jdGlvbihjKXt2YXIgdSxVLGgsZixtLHc7aWYoYyE9bnVsbCl7Zm9yKG09MCx1PVU9MTA7VT49MDt1PS0tVSlmPWMlMixjPWMvMnwwLHRoaXMuZW9bdV09ZixtKz1mO3JldHVybiB0aGlzLmVvWzExXT0oMi1tJTIpJTIsdGhpc31lbHNle2Zvcih3PTAsdT1oPTA7aDw9MTA7dT0rK2gpdz0yKncrdGhpcy5lb1t1XTtyZXR1cm4gd319LGNvcm5lclBhcml0eTpmdW5jdGlvbigpe3ZhciBjLHUsVSxoLGYsbSx3LFMsQztmb3IoQz0wLGM9VT1mPXksbT1nZSsxO2Y8PW0/VTw9bTpVPj1tO2M9Zjw9bT8rK1U6LS1VKWZvcih1PWg9dz1jLTEsUz1nZTt3PD1TP2g8PVM6aD49Uzt1PXc8PVM/KytoOi0taCl0aGlzLmNwW3VdPnRoaXMuY3BbY10mJkMrKztyZXR1cm4gQyUyfSxlZGdlUGFyaXR5OmZ1bmN0aW9uKCl7dmFyIGMsdSxVLGgsZixtLHcsUyxDO2ZvcihDPTAsYz1VPWY9ZSxtPUZlKzE7Zjw9bT9VPD1tOlU+PW07Yz1mPD1tPysrVTotLVUpZm9yKHU9aD13PWMtMSxTPUZlO3c8PVM/aDw9UzpoPj1TO3U9dzw9Uz8rK2g6LS1oKXRoaXMuZXBbdV0+dGhpcy5lcFtjXSYmQysrO3JldHVybiBDJTJ9LFVSRnRvRExGOnooImNvcm5lcnMiLGdlLFIpLFVSdG9VTDp6KCJlZGdlcyIsRmUsbHQpLFVCdG9ERjp6KCJlZGdlcyIsVWUscyksVVJ0b0RGOnooImVkZ2VzIixGZSxzKSxGUnRvQlI6eigiZWRnZXMiLEEsZSwhMCl9O2ZvcihkIGluIFApbGU9UFtkXSx0LnByb3RvdHlwZVtkXT1sZTtyZT1mdW5jdGlvbihjLHUsVSl7dmFyIGgsZixtLHcsUyxDLEgsQixMLEYseDtmb3IoaD1jPT09ImNvcm5lcnMiPyJjb3JuZXJNdWx0aXBseSI6ImVkZ2VNdWx0aXBseSIsZj1uZXcgdCx4PVtdLG09Qz0wLEY9VS0xOzA8PUY/Qzw9RjpDPj1GO209MDw9Rj8rK0M6LS1DKXtmb3IoZlt1XShtKSx3PVtdLFM9Qj0wO0I8PTU7Uz0rK0Ipe2ZvcihIPXQubW92ZXNbU10sTD0wO0w8PTI7KytMKWZbaF0oSCksdy5wdXNoKGZbdV0oKSk7ZltoXShIKX14LnB1c2godyl9cmV0dXJuIHh9LHY9ZnVuY3Rpb24oKXt2YXIgYyx1O3JldHVybiBjPW5ldyB0LHU9bmV3IHQsZnVuY3Rpb24oVSxoKXt2YXIgZixtO2ZvcihjLlVSdG9VTChVKSx1LlVCdG9ERihoKSxmPW09MDttPD03O2Y9KyttKWlmKGMuZXBbZl0hPT0tMSl7aWYodS5lcFtmXSE9PS0xKXJldHVybi0xO3UuZXBbZl09Yy5lcFtmXX1yZXR1cm4gdS5VUnRvREYoKX19KCksb2U9MjE4NyxUPTIwNDgsWT0yLFY9MTE4ODAsST00OTUsSj0yNCxaPTIwMTYwLGZlPTIwMTYwLHVlPTEzMjAsUT0xMzIwLHQubW92ZVRhYmxlcz17cGFyaXR5OltbMSwwLDEsMSwwLDEsMSwwLDEsMSwwLDEsMSwwLDEsMSwwLDFdLFswLDEsMCwwLDEsMCwwLDEsMCwwLDEsMCwwLDEsMCwwLDEsMF1dLHR3aXN0Om51bGwsZmxpcDpudWxsLEZSdG9CUjpudWxsLFVSRnRvRExGOm51bGwsVVJ0b0RGOm51bGwsVVJ0b1VMOm51bGwsVUJ0b0RGOm51bGwsbWVyZ2VVUnRvREY6bnVsbH0sRT17dHdpc3Q6WyJjb3JuZXJzIixvZV0sZmxpcDpbImVkZ2VzIixUXSxGUnRvQlI6WyJlZGdlcyIsVl0sVVJGdG9ETEY6WyJjb3JuZXJzIixaXSxVUnRvREY6WyJlZGdlcyIsZmVdLFVSdG9VTDpbImVkZ2VzIix1ZV0sVUJ0b0RGOlsiZWRnZXMiLFFdLG1lcmdlVVJ0b0RGOltdfSx0LmNvbXB1dGVNb3ZlVGFibGVzPWZ1bmN0aW9uKC4uLmMpe3ZhciB1LFUsaCxmLG0sdztmb3IoYy5sZW5ndGg9PT0wJiYoYz1mdW5jdGlvbigpe3ZhciBTO1M9W107Zm9yKGggaW4gRSlTLnB1c2goaCk7cmV0dXJuIFN9KCkpLFU9MCx1PWMubGVuZ3RoO1U8dTtVKyspdz1jW1VdLHRoaXMubW92ZVRhYmxlc1t3XT09PW51bGwmJih3PT09Im1lcmdlVVJ0b0RGIj90aGlzLm1vdmVUYWJsZXMubWVyZ2VVUnRvREY9ZnVuY3Rpb24oKXt2YXIgUyxDLEgsQjtmb3IoQj1bXSxDPUg9MDtIPD0zMzU7Qz0rK0gpQi5wdXNoKGZ1bmN0aW9uKCl7dmFyIEwsRjtmb3IoRj1bXSxTPUw9MDtMPD0zMzU7Uz0rK0wpRi5wdXNoKHYoQyxTKSk7cmV0dXJuIEZ9KCkpO3JldHVybiBCfSgpOihbZixtXT1FW3ddLHRoaXMubW92ZVRhYmxlc1t3XT1yZShmLHcsbSkpKTtyZXR1cm4gdGhpc30sRGU9WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTddLE89ZnVuY3Rpb24oKXt2YXIgYyx1LFUsaCxmLG0sdyxTO2ZvcihTPVtdLHU9VT0wO1U8PTU7dT0rK1Upe2ZvcihoPVtdLGM9Zj0wO2Y8PTU7Yz0rK2YpaWYoYyE9PXUmJmMhPT11LTMpZm9yKHc9bT0wO208PTI7dz0rK20paC5wdXNoKGMqMyt3KTtTLnB1c2goaCl9cmV0dXJuIFN9KCksdGU9WzAsMSwyLDQsNyw5LDEwLDExLDEzLDE2XSxqPWZ1bmN0aW9uKCl7dmFyIGMsdSxVLGgsZixtLHcsUyxDLEg7Zm9yKEg9W10sdT1oPTA7aDw9NTt1PSsraCl7Zm9yKGY9W10sYz1tPTA7bTw9NTtjPSsrbSlpZihjIT09dSYmYyE9PXUtMylmb3IoQz1jPT09MHx8Yz09PTM/WzAsMSwyXTpbMV0sdz0wLFU9Qy5sZW5ndGg7dzxVO3crKylTPUNbd10sZi5wdXNoKGMqMytTKTtILnB1c2goZil9cmV0dXJuIEh9KCksaz1mdW5jdGlvbihjLHUsVSl7dmFyIGgsZixtO3JldHVybiBoPXUlOCxtPXU+PjMsZj1oPDwyLFUhPW51bGw/KGNbbV0mPX4oMTU8PGYpLGNbbV18PVU8PGYsVSk6KGNbbV0mMTU8PGYpPj4+Zn0sbmU9ZnVuY3Rpb24oYyx1LFUsaCl7dmFyIGYsbSx3LFMsQyxILEIsTCxGLHgsYixYO2ZvcihYPWZ1bmN0aW9uKCl7dmFyIHEsZWUsaGU7Zm9yKGhlPVtdLHE9MCxlZT1NYXRoLmNlaWwodS84KS0xOzA8PWVlP3E8PWVlOnE+PWVlOzA8PWVlPysrcTotLXEpaGUucHVzaCg0Mjk0OTY3Mjk1KTtyZXR1cm4gaGV9KCksYz09PTE/TD1EZTpMPXRlLG09MCxrKFgsMCxtKSx3PTE7dyE9PXU7KXtmb3IoUz1IPTAsYj11LTE7MDw9Yj9IPD1iOkg+PWI7Uz0wPD1iPysrSDotLUgpaWYoayhYLFMpPT09bSlmb3IoZj1VKFMpLHg9MCxDPUwubGVuZ3RoO3g8Qzt4KyspQj1MW3hdLEY9aChmLEIpLGsoWCxGKT09PTE1JiYoayhYLEYsbSsxKSx3KyspO20rK31yZXR1cm4gWH0sdC5wcnVuaW5nVGFibGVzPXtzbGljZVR3aXN0Om51bGwsc2xpY2VGbGlwOm51bGwsc2xpY2VVUkZ0b0RMRlBhcml0eTpudWxsLHNsaWNlVVJ0b0RGUGFyaXR5Om51bGx9LF89e3NsaWNlVHdpc3Q6WzEsSSpvZSxmdW5jdGlvbihjKXtyZXR1cm5bYyVJLGMvSXwwXX0sZnVuY3Rpb24oYyx1KXt2YXIgVSxoLGYsbTtyZXR1cm5bZixtXT1jLFU9dC5tb3ZlVGFibGVzLkZSdG9CUltmKjI0XVt1XS8yNHwwLGg9dC5tb3ZlVGFibGVzLnR3aXN0W21dW3VdLGgqSStVfV0sc2xpY2VGbGlwOlsxLEkqVCxmdW5jdGlvbihjKXtyZXR1cm5bYyVJLGMvSXwwXX0sZnVuY3Rpb24oYyx1KXt2YXIgVSxoLGYsbTtyZXR1cm5bbSxVXT1jLGY9dC5tb3ZlVGFibGVzLkZSdG9CUlttKjI0XVt1XS8yNHwwLGg9dC5tb3ZlVGFibGVzLmZsaXBbVV1bdV0saCpJK2Z9XSxzbGljZVVSRnRvRExGUGFyaXR5OlsyLEoqWipZLGZ1bmN0aW9uKGMpe3JldHVybltjJTIsKGMvMnwwKSVKLChjLzJ8MCkvSnwwXX0sZnVuY3Rpb24oYyx1KXt2YXIgVSxoLGYsbSx3LFM7cmV0dXJuW3csUyxVXT1jLGg9dC5tb3ZlVGFibGVzLnBhcml0eVt3XVt1XSxmPXQubW92ZVRhYmxlcy5GUnRvQlJbU11bdV0sbT10Lm1vdmVUYWJsZXMuVVJGdG9ETEZbVV1bdV0sKG0qSitmKSoyK2h9XSxzbGljZVVSdG9ERlBhcml0eTpbMixKKmZlKlksZnVuY3Rpb24oYyl7cmV0dXJuW2MlMiwoYy8yfDApJUosKGMvMnwwKS9KfDBdfSxmdW5jdGlvbihjLHUpe3ZhciBVLGgsZixtLHcsUztyZXR1cm5bdyxTLFVdPWMsaD10Lm1vdmVUYWJsZXMucGFyaXR5W3ddW3VdLGY9dC5tb3ZlVGFibGVzLkZSdG9CUltTXVt1XSxtPXQubW92ZVRhYmxlcy5VUnRvREZbVV1bdV0sKG0qSitmKSoyK2h9XX0sdC5jb21wdXRlUHJ1bmluZ1RhYmxlcz1mdW5jdGlvbiguLi5jKXt2YXIgdSxVLGgsZixtO2ZvcihjLmxlbmd0aD09PTAmJihjPWZ1bmN0aW9uKCl7dmFyIHc7dz1bXTtmb3IoaCBpbiBfKXcucHVzaChoKTtyZXR1cm4gd30oKSksVT0wLHU9Yy5sZW5ndGg7VTx1O1UrKyltPWNbVV0sdGhpcy5wcnVuaW5nVGFibGVzW21dPT09bnVsbCYmKGY9X1ttXSx0aGlzLnBydW5pbmdUYWJsZXNbbV09bmUoLi4uZikpO3JldHVybiB0aGlzfSx0LmluaXRTb2x2ZXI9ZnVuY3Rpb24oKXtyZXR1cm4gdC5jb21wdXRlTW92ZVRhYmxlcygpLHQuY29tcHV0ZVBydW5pbmdUYWJsZXMoKX0sdC5wcm90b3R5cGUuc29sdmVVcHJpZ2h0PWZ1bmN0aW9uKGM9MjIpe3ZhciB1LFUsaCxmLG0sdyxTLEMsSDtyZXR1cm4gaD1mdW5jdGlvbigpe3ZhciBCLEwsRix4LGIsWCxxO2ZvcihMPVsiVSIsIlIiLCJGIiwiRCIsIkwiLCJCIl0sWD1bIiIsIjIiLCInIl0scT1bXSxCPUY9MDtGPD01O0I9KytGKWZvcihiPXg9MDt4PD0yO2I9Kyt4KXEucHVzaChMW0JdK1hbYl0pO3JldHVybiBxfSgpLHU9Y2xhc3N7Y29uc3RydWN0b3IoTCl7dGhpcy5wYXJlbnQ9bnVsbCx0aGlzLmxhc3RNb3ZlPW51bGwsdGhpcy5kZXB0aD0wLEwmJnRoaXMuaW5pdChMKX1pbml0KEwpe3JldHVybiB0aGlzLmZsaXA9TC5mbGlwKCksdGhpcy50d2lzdD1MLnR3aXN0KCksdGhpcy5zbGljZT1MLkZSdG9CUigpL0p8MCx0aGlzLnBhcml0eT1MLmNvcm5lclBhcml0eSgpLHRoaXMuVVJGdG9ETEY9TC5VUkZ0b0RMRigpLHRoaXMuRlJ0b0JSPUwuRlJ0b0JSKCksdGhpcy5VUnRvVUw9TC5VUnRvVUwoKSx0aGlzLlVCdG9ERj1MLlVCdG9ERigpLHRoaXN9c29sdXRpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQ/dGhpcy5wYXJlbnQuc29sdXRpb24oKStoW3RoaXMubGFzdE1vdmVdKyIgIjoiIn1tb3ZlKEwsRix4KXtyZXR1cm4gdC5tb3ZlVGFibGVzW0xdW0ZdW3hdfXBydW5pbmcoTCxGKXtyZXR1cm4gayh0LnBydW5pbmdUYWJsZXNbTF0sRil9bW92ZXMxKCl7cmV0dXJuIHRoaXMubGFzdE1vdmUhPT1udWxsP09bdGhpcy5sYXN0TW92ZS8zfDBdOkRlfW1pbkRpc3QxKCl7dmFyIEwsRjtyZXR1cm4gTD10aGlzLnBydW5pbmcoInNsaWNlRmxpcCIsSSp0aGlzLmZsaXArdGhpcy5zbGljZSksRj10aGlzLnBydW5pbmcoInNsaWNlVHdpc3QiLEkqdGhpcy50d2lzdCt0aGlzLnNsaWNlKSxwKEwsRil9bmV4dDEoTCl7dmFyIEY7cmV0dXJuIEY9VS5wb3AoKSxGLnBhcmVudD10aGlzLEYubGFzdE1vdmU9TCxGLmRlcHRoPXRoaXMuZGVwdGgrMSxGLmZsaXA9dGhpcy5tb3ZlKCJmbGlwIix0aGlzLmZsaXAsTCksRi50d2lzdD10aGlzLm1vdmUoInR3aXN0Iix0aGlzLnR3aXN0LEwpLEYuc2xpY2U9dGhpcy5tb3ZlKCJGUnRvQlIiLHRoaXMuc2xpY2UqMjQsTCkvMjR8MCxGfW1vdmVzMigpe3JldHVybiB0aGlzLmxhc3RNb3ZlIT09bnVsbD9qW3RoaXMubGFzdE1vdmUvM3wwXTp0ZX1taW5EaXN0Migpe3ZhciBMLEYseCxiO3JldHVybiB4PShKKnRoaXMuVVJ0b0RGK3RoaXMuRlJ0b0JSKSpZK3RoaXMucGFyaXR5LEw9dGhpcy5wcnVuaW5nKCJzbGljZVVSdG9ERlBhcml0eSIseCksYj0oSip0aGlzLlVSRnRvRExGK3RoaXMuRlJ0b0JSKSpZK3RoaXMucGFyaXR5LEY9dGhpcy5wcnVuaW5nKCJzbGljZVVSRnRvRExGUGFyaXR5IixiKSxwKEwsRil9aW5pdDIoTD0hMCl7aWYodGhpcy5wYXJlbnQhPT1udWxsJiYodGhpcy5wYXJlbnQuaW5pdDIoITEpLHRoaXMuVVJGdG9ETEY9dGhpcy5tb3ZlKCJVUkZ0b0RMRiIsdGhpcy5wYXJlbnQuVVJGdG9ETEYsdGhpcy5sYXN0TW92ZSksdGhpcy5GUnRvQlI9dGhpcy5tb3ZlKCJGUnRvQlIiLHRoaXMucGFyZW50LkZSdG9CUix0aGlzLmxhc3RNb3ZlKSx0aGlzLnBhcml0eT10aGlzLm1vdmUoInBhcml0eSIsdGhpcy5wYXJlbnQucGFyaXR5LHRoaXMubGFzdE1vdmUpLHRoaXMuVVJ0b1VMPXRoaXMubW92ZSgiVVJ0b1VMIix0aGlzLnBhcmVudC5VUnRvVUwsdGhpcy5sYXN0TW92ZSksdGhpcy5VQnRvREY9dGhpcy5tb3ZlKCJVQnRvREYiLHRoaXMucGFyZW50LlVCdG9ERix0aGlzLmxhc3RNb3ZlKSxMKSlyZXR1cm4gdGhpcy5VUnRvREY9dGhpcy5tb3ZlKCJtZXJnZVVSdG9ERiIsdGhpcy5VUnRvVUwsdGhpcy5VQnRvREYpfW5leHQyKEwpe3ZhciBGO3JldHVybiBGPVUucG9wKCksRi5wYXJlbnQ9dGhpcyxGLmxhc3RNb3ZlPUwsRi5kZXB0aD10aGlzLmRlcHRoKzEsRi5VUkZ0b0RMRj10aGlzLm1vdmUoIlVSRnRvRExGIix0aGlzLlVSRnRvRExGLEwpLEYuRlJ0b0JSPXRoaXMubW92ZSgiRlJ0b0JSIix0aGlzLkZSdG9CUixMKSxGLnBhcml0eT10aGlzLm1vdmUoInBhcml0eSIsdGhpcy5wYXJpdHksTCksRi5VUnRvREY9dGhpcy5tb3ZlKCJVUnRvREYiLHRoaXMuVVJ0b0RGLEwpLEZ9fSxDPW51bGwsbT1mdW5jdGlvbihCKXt2YXIgTCxGLHgsYjtmb3IoTD0wLGI9W10sTD1GPTEseD1jOygxPD14P0Y8PXg6Rj49eCkmJihmKEIsTCksQz09PW51bGwpO0w9MTw9eD8rK0Y6LS1GKWIucHVzaChMKyspO3JldHVybiBifSxmPWZ1bmN0aW9uKEIsTCl7dmFyIEYseCxiLFgscSxlZSxoZTtpZihMPT09MCl7aWYoQi5taW5EaXN0MSgpPT09MCYmKEIubGFzdE1vdmU9PT1udWxsfHwocT1CLmxhc3RNb3ZlLGFlLmNhbGwodGUscSk8MCkpKXJldHVybiBTKEIpfWVsc2UgaWYoTD4wJiZCLm1pbkRpc3QxKCk8PUwpe2ZvcihlZT1CLm1vdmVzMSgpLGhlPVtdLHg9MCxGPWVlLmxlbmd0aDt4PEYmJihiPWVlW3hdLFg9Qi5uZXh0MShiKSxmKFgsTC0xKSxVLnB1c2goWCksQz09PW51bGwpO3grKyloZS5wdXNoKHZvaWQgMCk7cmV0dXJuIGhlfX0sUz1mdW5jdGlvbihCKXt2YXIgTCxGLHgsYjtmb3IoQi5pbml0MigpLGI9W10sTD1GPTEseD1jLUIuZGVwdGg7KDE8PXg/Rjw9eDpGPj14KSYmKHcoQixMKSxDPT09bnVsbCk7TD0xPD14PysrRjotLUYpYi5wdXNoKEwrKyk7cmV0dXJuIGJ9LHc9ZnVuY3Rpb24oQixMKXt2YXIgRix4LGIsWCxxLGVlO2lmKEw9PT0wKXtpZihCLm1pbkRpc3QyKCk9PT0wKXJldHVybiBDPUIuc29sdXRpb24oKX1lbHNlIGlmKEw+MCYmQi5taW5EaXN0MigpPD1MKXtmb3IocT1CLm1vdmVzMigpLGVlPVtdLHg9MCxGPXEubGVuZ3RoO3g8RiYmKGI9cVt4XSxYPUIubmV4dDIoYiksdyhYLEwtMSksVS5wdXNoKFgpLEM9PT1udWxsKTt4KyspZWUucHVzaCh2b2lkIDApO3JldHVybiBlZX19LFU9ZnVuY3Rpb24oKXt2YXIgQixMLEY7Zm9yKEY9W10sQj0wLEw9YysxOzA8PUw/Qjw9TDpCPj1MOzA8PUw/KytCOi0tQilGLnB1c2gobmV3IHUpO3JldHVybiBGfSgpLEg9VS5wb3AoKS5pbml0KHRoaXMpLG0oSCksVS5wdXNoKEgpLEMubGVuZ3RoPjAmJihDPUMuc3Vic3RyaW5nKDAsQy5sZW5ndGgtMSkpLEN9LFc9e1U6MCxSOjEsRjoyLEQ6MyxMOjQsQjo1fSxOPXswOiJVIiwxOiJSIiwyOiJGIiwzOiJEIiw0OiJMIiw1OiJCIn0sdC5wcm90b3R5cGUuc29sdmU9ZnVuY3Rpb24oYz0yMil7dmFyIHUsVSxoLGYsbSx3LFMsQyxIO2Zvcih1PXRoaXMuY2xvbmUoKSxDPXUudXByaWdodCgpLHUubW92ZShDKSx3PW5ldyB0KCkubW92ZShDKS5jZW50ZXIsSD11LnNvbHZlVXByaWdodChjKSxTPVtdLG09SC5zcGxpdCgiICIpLGg9MCxVPW0ubGVuZ3RoO2g8VTtoKyspZj1tW2hdLFMucHVzaChOW3dbV1tmWzBdXV1dKSxmLmxlbmd0aD4xJiYoU1tTLmxlbmd0aC0xXSs9ZlsxXSk7cmV0dXJuIFMuam9pbigiICIpfSx0LnNjcmFtYmxlPWZ1bmN0aW9uKCl7cmV0dXJuIHQuaW52ZXJzZSh0LnJhbmRvbSgpLnNvbHZlKCkpfX0pLmNhbGwodm4pO3ZhciB5bz1TbixidD1Pbyh5byk7bGV0IE9uPSExO2Z1bmN0aW9uIE10KCl7T258fChidC5pbml0U29sdmVyKCksT249ITApfWZ1bmN0aW9uIEVvKG4pe2lmKE10KCksYmUobikpcmV0dXJue21ldGhvZDoib3B0aW1hbCIscGhhc2VzOlt7bmFtZToidHdvcGhhc2UiLG1vdmVzOltdfV0sbW92ZXM6W10sdG90YWxNb3ZlczowfTtsZXQgZTt0cnl7ZT1idC5mcm9tU3RyaW5nKG4pLnNvbHZlKCl9Y2F0Y2gocil7dGhyb3cgbmV3IEsoIlNPTFZFUl9FUlJPUiIsYHR3by1waGFzZSBmYWlsZWQ6ICR7U3RyaW5nKHIpfWApfWNvbnN0IG89ZGUoTGUoZSkpLHQ9a2Uobyk7cmV0dXJue21ldGhvZDoib3B0aW1hbCIscGhhc2VzOlt7bmFtZToidHdvcGhhc2UiLG1vdmVzOnR9XSxtb3Zlczp0LHRvdGFsTW92ZXM6dC5sZW5ndGh9fWZ1bmN0aW9uIGJvKCl7TXQoKTtjb25zdCBuPWJ0LnJhbmRvbSgpLGU9bi5zb2x2ZSgpLG89enQoWmUoTGUoZSkpKSx0PVBuKFNlLG8pO2lmKHQhPT1uLmFzU3RyaW5nKCkpdGhyb3cgbmV3IEVycm9yKCJzY3JhbWJsZSBzZWxmLWNoZWNrIGZhaWxlZCIpO3JldHVybntzY3JhbWJsZTpvLHN0YXRlOnR9fWZ1bmN0aW9uIE1vKG4pe249PT0iY2ZvcCI/Y24oKTpuPT09InJvdXgiP3duKCk6TXQoKX1mdW5jdGlvbiBrbyhuLGUpe2NvbnN0IG89em4obik7aWYoIW8ub2spdGhyb3cgbmV3IEsoIklOVkFMSURfU1RBVEUiLG8uY29kZSk7c3dpdGNoKGUpe2Nhc2UiY2ZvcCI6cmV0dXJuIHBvKG4pO2Nhc2Uicm91eCI6cmV0dXJuIFNvKG4pO2Nhc2Uib3B0aW1hbCI6cmV0dXJuIEVvKG4pO2RlZmF1bHQ6dGhyb3cgbmV3IEsoIlVOS05PV05fTUVUSE9EIixTdHJpbmcoZSkpfX1zZWxmLm9ubWVzc2FnZT1uPT57Y29uc3QgZT1uLmRhdGEsbz10PT5zZWxmLnBvc3RNZXNzYWdlKHQpO3RyeXtzd2l0Y2goZS5hY3Rpb24pe2Nhc2UiaW5pdCI6e2NvbnN0IHQ9ZS5tZXRob2Q/PyJvcHRpbWFsIjtNbyh0KSxvKHtpZDplLmlkLG9rOiEwLHJlYWR5OnR9KTticmVha31jYXNlInNvbHZlIjp7aWYoIWUuc3RhdGV8fCFlLm1ldGhvZCl0aHJvdyBuZXcgSygiQkFEX1JFUVVFU1QiLCJzdGF0ZSBhbmQgbWV0aG9kIGFyZSByZXF1aXJlZCIpO2NvbnN0IHQ9a28oZS5zdGF0ZSxlLm1ldGhvZCk7byh7aWQ6ZS5pZCxvazohMCxzb2x1dGlvbjp0fSk7YnJlYWt9Y2FzZSJzY3JhbWJsZSI6e2NvbnN0e3NjcmFtYmxlOnQsc3RhdGU6cn09Ym8oKTtvKHtpZDplLmlkLG9rOiEwLHNjcmFtYmxlOnQsc3RhdGU6cn0pO2JyZWFrfWRlZmF1bHQ6dGhyb3cgbmV3IEsoIlVOS05PV05fQUNUSU9OIixTdHJpbmcoZS5hY3Rpb24pKX19Y2F0Y2godCl7Y29uc3Qgcj10IGluc3RhbmNlb2YgSz90LmNvZGU6IklOVEVSTkFMIjtvKHtpZDplLmlkLG9rOiExLGVycm9yOntjb2RlOnIsbWVzc2FnZTp0IGluc3RhbmNlb2YgRXJyb3I/dC5tZXNzYWdlOlN0cmluZyh0KX19KX19fSkoKTsK",Wp=i=>Uint8Array.from(atob(i),e=>e.charCodeAt(0)),nl=typeof self<"u"&&self.Blob&&new Blob([Wp(tl)],{type:"text/javascript;charset=utf-8"});function Zp(i){let e;try{if(e=nl&&(self.URL||self.webkitURL).createObjectURL(nl),!e)throw"";const t=new Worker(e,{name:i?.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),t}catch{return new Worker("data:text/javascript;base64,"+tl,{name:i?.name})}finally{e&&(self.URL||self.webkitURL).revokeObjectURL(e)}}const il=new Zp;let zp=1;const Aa=new Map;il.onmessage=i=>{const e=Aa.get(i.data.id);e&&(Aa.delete(i.data.id),e.resolve(i.data))};function Gs(i){const e=zp++;return new Promise(t=>{Aa.set(e,{resolve:t}),il.postMessage({id:e,...i})})}const je=i=>{const e=document.querySelector(i);if(!e)throw new Error(`missing element: ${i}`);return e},Ee=new Vp(je("#cube3d")),ht=new Op(Ee,je("#solutionList"),je("#playbackControls"),je("#speed"));let Pa="cfop",Zi=!1;const Bs=je("#status"),Ii=je("#solveBtn"),Os=je("#scrambleInput"),Xn=je("#scrambleError"),Fa=je("#solveError"),Da=je("#editorError"),Ws=new Bp(je("#netEditor"),Ee.state,i=>{if($e?.connected){Da.textContent=De("gan_disabled_while_connected");return}const e=or(i)??i,t=ar(e);if(!t.ok){Da.textContent=De(`err_${t.code}`);return}Da.textContent="",ht.reset(),Ee.setState(e)},()=>Ee.state);let sl=!1;Bs.textContent=De("initializing"),Gs({action:"init",method:"optimal"}).then(()=>{sl=!0,Bs.textContent=De("ready"),Bs.classList.add("ready")}),je("#genScramble").addEventListener("click",async()=>{if(Ee.busy&&!$e?.connected)return;Xn.textContent="";const i=await Gs({action:"scramble"});if(!i.ok){Xn.textContent=i.error.message;return}if(Os.value=i.scramble,$e?.connected){Hn.textContent=De("gan_scramble_hint");return}ht.reset(),await rl(i.scramble)}),je("#applyScramble").addEventListener("click",async()=>{if(!Ee.busy){if($e?.connected){Xn.textContent=De("gan_disabled_while_connected");return}Xn.textContent="";try{Lt(Os.value)}catch{Xn.textContent=De("scramble_invalid");return}ht.reset(),Ee.setState(Ri),await rl(Os.value)}}),je("#resetView").addEventListener("click",()=>Ee.resetView(!!($e?.connected&&Qe&&!Qe.done))),je("#resetCube").addEventListener("click",()=>{if(!Ee.busy){if($e?.connected){Xn.textContent=De("gan_disabled_while_connected");return}ht.reset(),Os.value="",Xn.textContent="",Ee.setState(Ri),Ws.setState(Ri)}});async function rl(i){const e=Lt(i);for(const t of e)await Ee.playMove(t,110);Ws.setState(Ee.state)}je("#methodTabs").addEventListener("click",i=>{const e=i.target.closest(".tab");e&&(Pa=e.dataset.method,document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active")),e.classList.add("active"))}),Ii.addEventListener("click",async()=>{if(Zi||Ee.busy)return;Fa.textContent="";const i=or(Ee.state)??Ee.state,e=ar(i);if(!e.ok){Fa.textContent=De(`err_${e.code}`);return}Zi=!0,Ii.textContent=De("solving"),Ii.disabled=!0;try{const t=await Gs({action:"solve",method:Pa,state:i});if(!t.ok)Fa.textContent=`${De("err_SOLVER")} (${t.error.code})`,ht.reset();else{let n=t.solution;if($e?.connected){const s=bo(n);Qe=new go(s.steps),n=s.display,dl=s.regripWhiteDown,zs=Pa,Tn=i,wi=null,Xs=!1,zi=null,Ee.beginAssistView(s.regripWhiteDown),ks(),Wa(),ht.setRecovery(null)}ht.setSolution(n),ht.setExternalMode(!!$e?.connected)}}finally{Zi=!1,Ii.textContent=De("solve"),Ii.disabled=!1}});const Va=je("#ganConnect"),al=je("#ganStatus"),ol=je("#ganBattery"),kn=je("#ganMac"),cl=je("#ganSync"),ll=je("#ganMarkSolved"),Hn=je("#ganAssistStatus"),Na=je("#ganError"),Zs="cubesolver-gan-mac";kn.value=localStorage.getItem(Zs)??"";let $e=null,Qe=null,dl=!0,zi=null,zs="cfop",Tn=Ri,wi=null,Xs=!1,Ga=!1;const Yt=[];let Ba=!1;const Xp={U:"D",D:"U",R:"L",L:"R",F:"B",B:"F"},kp={R:"x",L:"x",U:"y",D:"y",F:"z",B:"z"},Hp=new Set(["R","U","F"]);function Kp(i,e){return Xp[i.base]===e.base&&(i.amount+e.amount)%4===0}function Yp(i,e){const t=Hp.has(i.base)?i:e;return{base:kp[t.base],amount:(4-t.amount)%4}}function Oa(i){const e=i.replace(/[^0-9a-fA-F]/g,"").toUpperCase();return e.length!==12?null:e.match(/.{2}/g).join(":")}async function Jp(i,e){const t=Oa(kn.value);if(t)return t;if(!e)return null;const n=prompt(`${i.name??"GAN Cube"} ${De("gan_mac_prompt")}`),s=n?Oa(n):null;return s&&(kn.value=s,localStorage.setItem(Zs,s)),s}async function Qp(){if(!Ba){Ba=!0;try{for(;Yt.length>0;){const i=Yt.shift(),e=Lt(i.move)[0];let t=null;if(!i.drift){Yt.length===0&&await new Promise(a=>setTimeout(a,60));const r=Yt[0];r&&Kp(e,Lt(r.move)[0])&&(t=Yt.shift())}const n=Yt.length>5;if(t){const r=Lt(t.move)[0],a=Yp(e,r);n?(Ee.setState(jt(Ee.state,`${i.move} ${t.move}`)),Ee.playHandDrift(a,0)):await Ee.playHandTurn([e,r],a,200).catch(()=>{Ee.setState(jt(Ee.state,`${i.move} ${t.move}`)),Ee.playHandDrift(a,0)});continue}if(i.drift){const r=Lt(i.drift)[0];n?(Ee.setState(jt(Ee.state,i.move)),Ee.playHandDrift(r,0)):await Ee.playHandTurn([e],r,220).catch(()=>{Ee.setState(jt(Ee.state,i.move)),Ee.playHandDrift(r,0)});continue}if(n){Ee.setState(jt(Ee.state,i.move));continue}const s=Yt.length>1?45:90;try{await Ee.playMove(e,s)}catch{Ee.setState(jt(Ee.state,i.move))}}}finally{Ba=!1,Ws.setState(Ee.state),Qe?.done&&Ee.endAssistView()}}}function ks(){if(!$e?.connected){Hn.textContent="";return}if(!Qe){Hn.textContent=De("gan_smart_hint");return}if(Qe.done){Hn.textContent=De("gan_done");return}if(Qe.deviated){const e=Qe.recoveryDisplayMoves.join(" ");Hn.textContent=`${De("gan_deviated")}
${De("gan_recover")}: ${e}`;return}const i=zi==="recovered"?`${De("gan_recovered")}
`:Xs&&Qe.pointer===0?`${De("gan_reanalyzed")}
`:Qe.pointer===0?`${De(dl?"gan_regrip":"gan_regrip_up")}
`:"";Hn.textContent=`${i}${De("gan_assist_progress")}: ${Qe.pointer}/${Qe.total}  ${De("gan_next")}: ${Qe.displayNext}`}function Wa(){$e?.connected&&Qe&&!Qe.done?Ee.setHint(Qe.hintMove):Ee.setHint(null)}function fl(i){const e={move:i};if(Qe&&!Qe.done){const t=Tn;Tn=jt(Tn,i);const n=Qe.feed(i);if(zi=n,n==="advance"||n==="done"){ht.setExternalPointer(Qe.pointer);const s=Qe.lastCompletedStep?.drift;s&&(e.drift=un(s))}n==="deviate"&&(wi=_o(t,zs)),(n==="deviate"||n==="recovering")&&wi&&jl(_o(Tn,zs),wi)>0&&jp(),ht.setRecovery(Qe.deviated?Qe.recoveryDisplayMoves:null),ks(),Wa()}Yt.push(e),Qp()}async function jp(){if(!(Ga||Zi||!$e?.connected)){Ga=!0;try{Hn.textContent=De("gan_reanalyzing"),Ee.setHint(null),ht.setRecovery(null);for(let i=0;i<3;i++){const e=Tn;if(!ar(e).ok)return;const t=await Gs({action:"solve",method:zs,state:e});if(!t.ok||!$e?.connected)return;if(e!==Tn)continue;const n=bo(t.solution);Qe=new go(n.steps),wi=null,Xs=!0,zi=null,ht.setSolution(n.display),ht.setExternalMode(!0),ks(),Wa();return}}finally{Ga=!1}}}function qp(i){Yt.length===0&&!Ee.busy&&i!==Ee.state&&(Ee.setState(i),Ws.setState(i),Qe&&(Tn=i))}function Ci(i,e=!1){Ee.setAxisLock(i),Va.disabled=e,Va.textContent=De(e?"gan_connecting":i?"gan_disconnect":"gan_connect"),al.textContent=i?De("gan_connected")+($e?.deviceName??""):"",al.classList.toggle("connected",i),cl.disabled=!i,ll.disabled=!i,i||(ol.textContent=""),ht.setExternalMode(i),ks()}function ul(){Qe=null,zi=null,wi=null,Xs=!1,Yt.length=0,$e=null,Ee.setHint(null),Ee.endAssistView(),ht.setRecovery(null),Ci(!1)}Va.addEventListener("click",async()=>{if(Na.textContent="",$e?.connected){await $e.disconnect(),ul();return}const i=await no(()=>Promise.resolve().then(()=>tx),void 0,Yn&&Yn.tagName.toUpperCase()==="SCRIPT"&&Yn.src||new URL("assets/app.js",document.baseURI).href);if(!i.isWebBluetoothAvailable()){Na.textContent=De("gan_no_bt");return}Ci(!1,!0);try{const e=new i.GanCubeLink;await e.connect(Jp,{onMove:fl,onFacelets:qp,onBattery:t=>{ol.textContent=`🔋 ${t}%`},onDisconnect:ul}),$e=e,ht.reset(),Ci(!0)}catch(e){$e=null,Ci(!1),e instanceof DOMException&&e.name==="NotFoundError"||(Na.textContent=`${De("gan_connect_failed")}: ${e instanceof Error?e.message:String(e)}`)}}),kn.addEventListener("change",()=>{const i=Oa(kn.value);i?(kn.value=i,localStorage.setItem(Zs,i)):kn.value.trim()===""&&localStorage.removeItem(Zs)}),cl.addEventListener("click",()=>void $e?.requestFacelets()),ll.addEventListener("click",async()=>{$e?.connected&&confirm(De("gan_reset_confirm"))&&await $e.markSolved()});function hl(){document.querySelectorAll("[data-i18n]").forEach(i=>{i.textContent=De(i.dataset.i18n)}),je("#langToggle").textContent=Ua()==="ja"?"EN":"日本語",Zi||(Ii.textContent=De("solve")),Bs.textContent=De(sl?"ready":"initializing"),document.documentElement.lang=Ua(),Ci(!!$e?.connected)}je("#langToggle").addEventListener("click",()=>{Gp(Ua()==="ja"?"en":"ja")}),document.addEventListener("langchange",hl),hl(),window.__cubesolver={cube:Ee,playback:ht,getAssist:()=>Qe,simulateMove:fl,enableFakeGan:()=>{$e={connected:!0,deviceName:"(fake)",disconnect:async()=>{},requestFacelets:async()=>{},markSolved:async()=>{}},Ci(!0)}};function $p(){return typeof navigator<"u"&&"bluetooth"in navigator}class ex{conn=null;sub=null;get connected(){return this.conn!==null}get deviceName(){return this.conn?.deviceName??""}async connect(e,t){const{connectGanCube:n}=await no(async()=>{const{connectGanCube:r}=await Promise.resolve().then(()=>Lx);return{connectGanCube:r}},void 0,Yn&&Yn.tagName.toUpperCase()==="SCRIPT"&&Yn.src||new URL("assets/app.js",document.baseURI).href),s=await n(e);this.conn=s,this.sub=s.events$.subscribe(r=>{switch(r.type){case"MOVE":t.onMove(r.move);break;case"FACELETS":t.onFacelets(r.facelets);break;case"BATTERY":t.onBattery(r.batteryLevel);break;case"DISCONNECT":this.cleanup(),t.onDisconnect();break}}),await s.sendCubeCommand({type:"REQUEST_FACELETS"}),await s.sendCubeCommand({type:"REQUEST_BATTERY"})}async requestFacelets(){await this.conn?.sendCubeCommand({type:"REQUEST_FACELETS"})}async markSolved(){await this.conn?.sendCubeCommand({type:"REQUEST_RESET"}),await this.conn?.sendCubeCommand({type:"REQUEST_FACELETS"})}async disconnect(){const e=this.conn;this.cleanup();try{await e?.disconnect()}catch{}}cleanup(){this.sub?.unsubscribe(),this.sub=null,this.conn=null}}const tx=Object.freeze(Object.defineProperty({__proto__:null,GanCubeLink:ex,isWebBluetoothAvailable:$p},Symbol.toStringTag,{value:"Module"}));var Za=function(i,e){return Za=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])},Za(i,e)};function Hs(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Za(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function za(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xa(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),s,r=[],a;try{for(;(e===void 0||e-- >0)&&!(s=n.next()).done;)r.push(s.value)}catch(o){a={error:o}}finally{try{s&&!s.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return r}function ka(i,e,t){if(t||arguments.length===2)for(var n=0,s=e.length,r;n<s;n++)(r||!(n in e))&&(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return i.concat(r||Array.prototype.slice.call(e))}typeof SuppressedError=="function"&&SuppressedError;function ln(i){return typeof i=="function"}function pl(i){var e=function(n){Error.call(n),n.stack=new Error().stack},t=i(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ha=pl(function(i){return function(t){i(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,s){return s+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Ka(i,e){if(i){var t=i.indexOf(e);0<=t&&i.splice(t,1)}}var Ks=function(){function i(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return i.prototype.unsubscribe=function(){var e,t,n,s,r;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var o=za(a),c=o.next();!c.done;c=o.next()){var l=c.value;l.remove(this)}}catch(b){e={error:b}}finally{try{c&&!c.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}else a.remove(this);var d=this.initialTeardown;if(ln(d))try{d()}catch(b){r=b instanceof Ha?b.errors:[b]}var u=this._finalizers;if(u){this._finalizers=null;try{for(var f=za(u),h=f.next();!h.done;h=f.next()){var m=h.value;try{bl(m)}catch(b){r=r??[],b instanceof Ha?r=ka(ka([],Xa(r)),Xa(b.errors)):r.push(b)}}}catch(b){n={error:b}}finally{try{h&&!h.done&&(s=f.return)&&s.call(f)}finally{if(n)throw n.error}}}if(r)throw new Ha(r)}},i.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)bl(e);else{if(e instanceof i){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},i.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},i.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},i.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Ka(t,e)},i.prototype.remove=function(e){var t=this._finalizers;t&&Ka(t,e),e instanceof i&&e._removeParent(this)},i.EMPTY=function(){var e=new i;return e.closed=!0,e}(),i}(),xl=Ks.EMPTY;function ml(i){return i instanceof Ks||i&&"closed"in i&&ln(i.remove)&&ln(i.add)&&ln(i.unsubscribe)}function bl(i){ln(i)?i():i.unsubscribe()}var nx={Promise:void 0},ix={setTimeout:function(i,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setTimeout.apply(void 0,ka([i,e],Xa(t)))},clearTimeout:function(i){return clearTimeout(i)},delegate:void 0};function sx(i){ix.setTimeout(function(){throw i})}function gl(){}function Ys(i){i()}var _l=function(i){Hs(e,i);function e(t){var n=i.call(this)||this;return n.isStopped=!1,t?(n.destination=t,ml(t)&&t.add(n)):n.destination=ox,n}return e.create=function(t,n,s){return new Ya(t,n,s)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,i.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ks),rx=function(){function i(e){this.partialObserver=e}return i.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(n){Js(n)}},i.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(n){Js(n)}else Js(e)},i.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Js(t)}},i}(),Ya=function(i){Hs(e,i);function e(t,n,s){var r=i.call(this)||this,a;return ln(t)||!t?a={next:t??void 0,error:n??void 0,complete:s??void 0}:a=t,r.destination=new rx(a),r}return e}(_l);function Js(i){sx(i)}function ax(i){throw i}var ox={closed:!0,next:gl,error:ax,complete:gl},cx=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function lx(i){return i}function dx(i){return i.length===0?lx:i.length===1?i[0]:function(t){return i.reduce(function(n,s){return s(n)},t)}}var vl=function(){function i(e){e&&(this._subscribe=e)}return i.prototype.lift=function(e){var t=new i;return t.source=this,t.operator=e,t},i.prototype.subscribe=function(e,t,n){var s=this,r=ux(e)?e:new Ya(e,t,n);return Ys(function(){var a=s,o=a.operator,c=a.source;r.add(o?o.call(r,c):c?s._subscribe(r):s._trySubscribe(r))}),r},i.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},i.prototype.forEach=function(e,t){var n=this;return t=Sl(t),new t(function(s,r){var a=new Ya({next:function(o){try{e(o)}catch(c){r(c),a.unsubscribe()}},error:r,complete:s});n.subscribe(a)})},i.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},i.prototype[cx]=function(){return this},i.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return dx(e)(this)},i.prototype.toPromise=function(e){var t=this;return e=Sl(e),new e(function(n,s){var r;t.subscribe(function(a){return r=a},function(a){return s(a)},function(){return n(r)})})},i.create=function(e){return new i(e)},i}();function Sl(i){var e;return(e=i??nx.Promise)!==null&&e!==void 0?e:Promise}function fx(i){return i&&ln(i.next)&&ln(i.error)&&ln(i.complete)}function ux(i){return i&&i instanceof _l||fx(i)&&ml(i)}var hx=pl(function(i){return function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),yl=function(i){Hs(e,i);function e(){var t=i.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var n=new Ml(this,this);return n.operator=t,n},e.prototype._throwIfClosed=function(){if(this.closed)throw new hx},e.prototype.next=function(t){var n=this;Ys(function(){var s,r;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var a=za(n.currentObservers),o=a.next();!o.done;o=a.next()){var c=o.value;c.next(t)}}catch(l){s={error:l}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(s)throw s.error}}}})},e.prototype.error=function(t){var n=this;Ys(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var s=n.observers;s.length;)s.shift().error(t)}})},e.prototype.complete=function(){var t=this;Ys(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),i.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var n=this,s=this,r=s.hasError,a=s.isStopped,o=s.observers;return r||a?xl:(this.currentObservers=null,o.push(t),new Ks(function(){n.currentObservers=null,Ka(o,t)}))},e.prototype._checkFinalizedStatuses=function(t){var n=this,s=n.hasError,r=n.thrownError,a=n.isStopped;s?t.error(r):a&&t.complete()},e.prototype.asObservable=function(){var t=new vl;return t.source=this,t},e.create=function(t,n){return new Ml(t,n)},e}(vl),Ml=function(i){Hs(e,i);function e(t,n){var s=i.call(this)||this;return s.destination=t,s.source=n,s}return e.prototype.next=function(t){var n,s;(s=(n=this.destination)===null||n===void 0?void 0:n.next)===null||s===void 0||s.call(n,t)},e.prototype.error=function(t){var n,s;(s=(n=this.destination)===null||n===void 0?void 0:n.error)===null||s===void 0||s.call(n,t)},e.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},e.prototype._subscribe=function(t){var n,s;return(s=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&s!==void 0?s:xl},e}(yl),El={exports:{}};/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */(function(i,e){(function(t){function n(w){return parseInt(w)===w}function s(w){if(!n(w.length))return!1;for(var V=0;V<w.length;V++)if(!n(w[V])||w[V]<0||w[V]>255)return!1;return!0}function r(w,V){if(w.buffer&&w.name==="Uint8Array")return V&&(w.slice?w=w.slice():w=Array.prototype.slice.call(w)),w;if(Array.isArray(w)){if(!s(w))throw new Error("Array contains invalid value: "+w);return new Uint8Array(w)}if(n(w.length)&&s(w))return new Uint8Array(w);throw new Error("unsupported array-like object")}function a(w){return new Uint8Array(w)}function o(w,V,J,I,L){(I!=null||L!=null)&&(w.slice?w=w.slice(I,L):w=Array.prototype.slice.call(w,I,L)),V.set(w,J)}var c=function(){function w(J){var I=[],L=0;for(J=encodeURI(J);L<J.length;){var te=J.charCodeAt(L++);te===37?(I.push(parseInt(J.substr(L,2),16)),L+=2):I.push(te)}return r(I)}function V(J){for(var I=[],L=0;L<J.length;){var te=J[L];te<128?(I.push(String.fromCharCode(te)),L++):te>191&&te<224?(I.push(String.fromCharCode((te&31)<<6|J[L+1]&63)),L+=2):(I.push(String.fromCharCode((te&15)<<12|(J[L+1]&63)<<6|J[L+2]&63)),L+=3)}return I.join("")}return{toBytes:w,fromBytes:V}}(),l=function(){function w(I){for(var L=[],te=0;te<I.length;te+=2)L.push(parseInt(I.substr(te,2),16));return L}var V="0123456789abcdef";function J(I){for(var L=[],te=0;te<I.length;te++){var ae=I[te];L.push(V[(ae&240)>>4]+V[ae&15])}return L.join("")}return{toBytes:w,fromBytes:J}}(),d={16:10,24:12,32:14},u=[1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],f=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],h=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],m=[3328402341,4168907908,4000806809,4135287693,4294111757,3597364157,3731845041,2445657428,1613770832,33620227,3462883241,1445669757,3892248089,3050821474,1303096294,3967186586,2412431941,528646813,2311702848,4202528135,4026202645,2992200171,2387036105,4226871307,1101901292,3017069671,1604494077,1169141738,597466303,1403299063,3832705686,2613100635,1974974402,3791519004,1033081774,1277568618,1815492186,2118074177,4126668546,2211236943,1748251740,1369810420,3521504564,4193382664,3799085459,2883115123,1647391059,706024767,134480908,2512897874,1176707941,2646852446,806885416,932615841,168101135,798661301,235341577,605164086,461406363,3756188221,3454790438,1311188841,2142417613,3933566367,302582043,495158174,1479289972,874125870,907746093,3698224818,3025820398,1537253627,2756858614,1983593293,3084310113,2108928974,1378429307,3722699582,1580150641,327451799,2790478837,3117535592,0,3253595436,1075847264,3825007647,2041688520,3059440621,3563743934,2378943302,1740553945,1916352843,2487896798,2555137236,2958579944,2244988746,3151024235,3320835882,1336584933,3992714006,2252555205,2588757463,1714631509,293963156,2319795663,3925473552,67240454,4269768577,2689618160,2017213508,631218106,1269344483,2723238387,1571005438,2151694528,93294474,1066570413,563977660,1882732616,4059428100,1673313503,2008463041,2950355573,1109467491,537923632,3858759450,4260623118,3218264685,2177748300,403442708,638784309,3287084079,3193921505,899127202,2286175436,773265209,2479146071,1437050866,4236148354,2050833735,3362022572,3126681063,840505643,3866325909,3227541664,427917720,2655997905,2749160575,1143087718,1412049534,999329963,193497219,2353415882,3354324521,1807268051,672404540,2816401017,3160301282,369822493,2916866934,3688947771,1681011286,1949973070,336202270,2454276571,201721354,1210328172,3093060836,2680341085,3184776046,1135389935,3294782118,965841320,831886756,3554993207,4068047243,3588745010,2345191491,1849112409,3664604599,26054028,2983581028,2622377682,1235855840,3630984372,2891339514,4092916743,3488279077,3395642799,4101667470,1202630377,268961816,1874508501,4034427016,1243948399,1546530418,941366308,1470539505,1941222599,2546386513,3421038627,2715671932,3899946140,1042226977,2521517021,1639824860,227249030,260737669,3765465232,2084453954,1907733956,3429263018,2420656344,100860677,4160157185,470683154,3261161891,1781871967,2924959737,1773779408,394692241,2579611992,974986535,664706745,3655459128,3958962195,731420851,571543859,3530123707,2849626480,126783113,865375399,765172662,1008606754,361203602,3387549984,2278477385,2857719295,1344809080,2782912378,59542671,1503764984,160008576,437062935,1707065306,3622233649,2218934982,3496503480,2185314755,697932208,1512910199,504303377,2075177163,2824099068,1841019862,739644986],b=[2781242211,2230877308,2582542199,2381740923,234877682,3184946027,2984144751,1418839493,1348481072,50462977,2848876391,2102799147,434634494,1656084439,3863849899,2599188086,1167051466,2636087938,1082771913,2281340285,368048890,3954334041,3381544775,201060592,3963727277,1739838676,4250903202,3930435503,3206782108,4149453988,2531553906,1536934080,3262494647,484572669,2923271059,1783375398,1517041206,1098792767,49674231,1334037708,1550332980,4098991525,886171109,150598129,2481090929,1940642008,1398944049,1059722517,201851908,1385547719,1699095331,1587397571,674240536,2704774806,252314885,3039795866,151914247,908333586,2602270848,1038082786,651029483,1766729511,3447698098,2682942837,454166793,2652734339,1951935532,775166490,758520603,3000790638,4004797018,4217086112,4137964114,1299594043,1639438038,3464344499,2068982057,1054729187,1901997871,2534638724,4121318227,1757008337,0,750906861,1614815264,535035132,3363418545,3988151131,3201591914,1183697867,3647454910,1265776953,3734260298,3566750796,3903871064,1250283471,1807470800,717615087,3847203498,384695291,3313910595,3617213773,1432761139,2484176261,3481945413,283769337,100925954,2180939647,4037038160,1148730428,3123027871,3813386408,4087501137,4267549603,3229630528,2315620239,2906624658,3156319645,1215313976,82966005,3747855548,3245848246,1974459098,1665278241,807407632,451280895,251524083,1841287890,1283575245,337120268,891687699,801369324,3787349855,2721421207,3431482436,959321879,1469301956,4065699751,2197585534,1199193405,2898814052,3887750493,724703513,2514908019,2696962144,2551808385,3516813135,2141445340,1715741218,2119445034,2872807568,2198571144,3398190662,700968686,3547052216,1009259540,2041044702,3803995742,487983883,1991105499,1004265696,1449407026,1316239930,504629770,3683797321,168560134,1816667172,3837287516,1570751170,1857934291,4014189740,2797888098,2822345105,2754712981,936633572,2347923833,852879335,1133234376,1500395319,3084545389,2348912013,1689376213,3533459022,3762923945,3034082412,4205598294,133428468,634383082,2949277029,2398386810,3913789102,403703816,3580869306,2297460856,1867130149,1918643758,607656988,4049053350,3346248884,1368901318,600565992,2090982877,2632479860,557719327,3717614411,3697393085,2249034635,2232388234,2430627952,1115438654,3295786421,2865522278,3633334344,84280067,33027830,303828494,2747425121,1600795957,4188952407,3496589753,2434238086,1486471617,658119965,3106381470,953803233,334231800,3005978776,857870609,3151128937,1890179545,2298973838,2805175444,3056442267,574365214,2450884487,550103529,1233637070,4289353045,2018519080,2057691103,2399374476,4166623649,2148108681,387583245,3664101311,836232934,3330556482,3100665960,3280093505,2955516313,2002398509,287182607,3413881008,4238890068,3597515707,975967766],x=[1671808611,2089089148,2006576759,2072901243,4061003762,1807603307,1873927791,3310653893,810573872,16974337,1739181671,729634347,4263110654,3613570519,2883997099,1989864566,3393556426,2191335298,3376449993,2106063485,4195741690,1508618841,1204391495,4027317232,2917941677,3563566036,2734514082,2951366063,2629772188,2767672228,1922491506,3227229120,3082974647,4246528509,2477669779,644500518,911895606,1061256767,4144166391,3427763148,878471220,2784252325,3845444069,4043897329,1905517169,3631459288,827548209,356461077,67897348,3344078279,593839651,3277757891,405286936,2527147926,84871685,2595565466,118033927,305538066,2157648768,3795705826,3945188843,661212711,2999812018,1973414517,152769033,2208177539,745822252,439235610,455947803,1857215598,1525593178,2700827552,1391895634,994932283,3596728278,3016654259,695947817,3812548067,795958831,2224493444,1408607827,3513301457,0,3979133421,543178784,4229948412,2982705585,1542305371,1790891114,3410398667,3201918910,961245753,1256100938,1289001036,1491644504,3477767631,3496721360,4012557807,2867154858,4212583931,1137018435,1305975373,861234739,2241073541,1171229253,4178635257,33948674,2139225727,1357946960,1011120188,2679776671,2833468328,1374921297,2751356323,1086357568,2408187279,2460827538,2646352285,944271416,4110742005,3168756668,3066132406,3665145818,560153121,271589392,4279952895,4077846003,3530407890,3444343245,202643468,322250259,3962553324,1608629855,2543990167,1154254916,389623319,3294073796,2817676711,2122513534,1028094525,1689045092,1575467613,422261273,1939203699,1621147744,2174228865,1339137615,3699352540,577127458,712922154,2427141008,2290289544,1187679302,3995715566,3100863416,339486740,3732514782,1591917662,186455563,3681988059,3762019296,844522546,978220090,169743370,1239126601,101321734,611076132,1558493276,3260915650,3547250131,2901361580,1655096418,2443721105,2510565781,3828863972,2039214713,3878868455,3359869896,928607799,1840765549,2374762893,3580146133,1322425422,2850048425,1823791212,1459268694,4094161908,3928346602,1706019429,2056189050,2934523822,135794696,3134549946,2022240376,628050469,779246638,472135708,2800834470,3032970164,3327236038,3894660072,3715932637,1956440180,522272287,1272813131,3185336765,2340818315,2323976074,1888542832,1044544574,3049550261,1722469478,1222152264,50660867,4127324150,236067854,1638122081,895445557,1475980887,3117443513,2257655686,3243809217,489110045,2662934430,3778599393,4162055160,2561878936,288563729,1773916777,3648039385,2391345038,2493985684,2612407707,505560094,2274497927,3911240169,3460925390,1442818645,678973480,3749357023,2358182796,2717407649,2306869641,219617805,3218761151,3862026214,1120306242,1756942440,1103331905,2578459033,762796589,252780047,2966125488,1425844308,3151392187,372911126],p=[1667474886,2088535288,2004326894,2071694838,4075949567,1802223062,1869591006,3318043793,808472672,16843522,1734846926,724270422,4278065639,3621216949,2880169549,1987484396,3402253711,2189597983,3385409673,2105378810,4210693615,1499065266,1195886990,4042263547,2913856577,3570689971,2728590687,2947541573,2627518243,2762274643,1920112356,3233831835,3082273397,4261223649,2475929149,640051788,909531756,1061110142,4160160501,3435941763,875846760,2779116625,3857003729,4059105529,1903268834,3638064043,825316194,353713962,67374088,3351728789,589522246,3284360861,404236336,2526454071,84217610,2593830191,117901582,303183396,2155911963,3806477791,3958056653,656894286,2998062463,1970642922,151591698,2206440989,741110872,437923380,454765878,1852748508,1515908788,2694904667,1381168804,993742198,3604373943,3014905469,690584402,3823320797,791638366,2223281939,1398011302,3520161977,0,3991743681,538992704,4244381667,2981218425,1532751286,1785380564,3419096717,3200178535,960056178,1246420628,1280103576,1482221744,3486468741,3503319995,4025428677,2863326543,4227536621,1128514950,1296947098,859002214,2240123921,1162203018,4193849577,33687044,2139062782,1347481760,1010582648,2678045221,2829640523,1364325282,2745433693,1077985408,2408548869,2459086143,2644360225,943212656,4126475505,3166494563,3065430391,3671750063,555836226,269496352,4294908645,4092792573,3537006015,3452783745,202118168,320025894,3974901699,1600119230,2543297077,1145359496,387397934,3301201811,2812801621,2122220284,1027426170,1684319432,1566435258,421079858,1936954854,1616945344,2172753945,1330631070,3705438115,572679748,707427924,2425400123,2290647819,1179044492,4008585671,3099120491,336870440,3739122087,1583276732,185277718,3688593069,3772791771,842159716,976899700,168435220,1229577106,101059084,606366792,1549591736,3267517855,3553849021,2897014595,1650632388,2442242105,2509612081,3840161747,2038008818,3890688725,3368567691,926374254,1835907034,2374863873,3587531953,1313788572,2846482505,1819063512,1448540844,4109633523,3941213647,1701162954,2054852340,2930698567,134748176,3132806511,2021165296,623210314,774795868,471606328,2795958615,3031746419,3334885783,3907527627,3722280097,1953799400,522133822,1263263126,3183336545,2341176845,2324333839,1886425312,1044267644,3048588401,1718004428,1212733584,50529542,4143317495,235803164,1633788866,892690282,1465383342,3115962473,2256965911,3250673817,488449850,2661202215,3789633753,4177007595,2560144171,286339874,1768537042,3654906025,2391705863,2492770099,2610673197,505291324,2273808917,3924369609,3469625735,1431699370,673740880,3755965093,2358021891,2711746649,2307489801,218961690,3217021541,3873845719,1111672452,1751693520,1094828930,2576986153,757954394,252645662,2964376443,1414855848,3149649517,370555436],E=[1374988112,2118214995,437757123,975658646,1001089995,530400753,2902087851,1273168787,540080725,2910219766,2295101073,4110568485,1340463100,3307916247,641025152,3043140495,3736164937,632953703,1172967064,1576976609,3274667266,2169303058,2370213795,1809054150,59727847,361929877,3211623147,2505202138,3569255213,1484005843,1239443753,2395588676,1975683434,4102977912,2572697195,666464733,3202437046,4035489047,3374361702,2110667444,1675577880,3843699074,2538681184,1649639237,2976151520,3144396420,4269907996,4178062228,1883793496,2403728665,2497604743,1383856311,2876494627,1917518562,3810496343,1716890410,3001755655,800440835,2261089178,3543599269,807962610,599762354,33778362,3977675356,2328828971,2809771154,4077384432,1315562145,1708848333,101039829,3509871135,3299278474,875451293,2733856160,92987698,2767645557,193195065,1080094634,1584504582,3178106961,1042385657,2531067453,3711829422,1306967366,2438237621,1908694277,67556463,1615861247,429456164,3602770327,2302690252,1742315127,2968011453,126454664,3877198648,2043211483,2709260871,2084704233,4169408201,0,159417987,841739592,504459436,1817866830,4245618683,260388950,1034867998,908933415,168810852,1750902305,2606453969,607530554,202008497,2472011535,3035535058,463180190,2160117071,1641816226,1517767529,470948374,3801332234,3231722213,1008918595,303765277,235474187,4069246893,766945465,337553864,1475418501,2943682380,4003061179,2743034109,4144047775,1551037884,1147550661,1543208500,2336434550,3408119516,3069049960,3102011747,3610369226,1113818384,328671808,2227573024,2236228733,3535486456,2935566865,3341394285,496906059,3702665459,226906860,2009195472,733156972,2842737049,294930682,1206477858,2835123396,2700099354,1451044056,573804783,2269728455,3644379585,2362090238,2564033334,2801107407,2776292904,3669462566,1068351396,742039012,1350078989,1784663195,1417561698,4136440770,2430122216,775550814,2193862645,2673705150,1775276924,1876241833,3475313331,3366754619,270040487,3902563182,3678124923,3441850377,1851332852,3969562369,2203032232,3868552805,2868897406,566021896,4011190502,3135740889,1248802510,3936291284,699432150,832877231,708780849,3332740144,899835584,1951317047,4236429990,3767586992,866637845,4043610186,1106041591,2144161806,395441711,1984812685,1139781709,3433712980,3835036895,2664543715,1282050075,3240894392,1181045119,2640243204,25965917,4203181171,4211818798,3009879386,2463879762,3910161971,1842759443,2597806476,933301370,1509430414,3943906441,3467192302,3076639029,3776767469,2051518780,2631065433,1441952575,404016761,1942435775,1408749034,1610459739,3745345300,2017778566,3400528769,3110650942,941896748,3265478751,371049330,3168937228,675039627,4279080257,967311729,135050206,3635733660,1683407248,2076935265,3576870512,1215061108,3501741890],S=[1347548327,1400783205,3273267108,2520393566,3409685355,4045380933,2880240216,2471224067,1428173050,4138563181,2441661558,636813900,4233094615,3620022987,2149987652,2411029155,1239331162,1730525723,2554718734,3781033664,46346101,310463728,2743944855,3328955385,3875770207,2501218972,3955191162,3667219033,768917123,3545789473,692707433,1150208456,1786102409,2029293177,1805211710,3710368113,3065962831,401639597,1724457132,3028143674,409198410,2196052529,1620529459,1164071807,3769721975,2226875310,486441376,2499348523,1483753576,428819965,2274680428,3075636216,598438867,3799141122,1474502543,711349675,129166120,53458370,2592523643,2782082824,4063242375,2988687269,3120694122,1559041666,730517276,2460449204,4042459122,2706270690,3446004468,3573941694,533804130,2328143614,2637442643,2695033685,839224033,1973745387,957055980,2856345839,106852767,1371368976,4181598602,1033297158,2933734917,1179510461,3046200461,91341917,1862534868,4284502037,605657339,2547432937,3431546947,2003294622,3182487618,2282195339,954669403,3682191598,1201765386,3917234703,3388507166,0,2198438022,1211247597,2887651696,1315723890,4227665663,1443857720,507358933,657861945,1678381017,560487590,3516619604,975451694,2970356327,261314535,3535072918,2652609425,1333838021,2724322336,1767536459,370938394,182621114,3854606378,1128014560,487725847,185469197,2918353863,3106780840,3356761769,2237133081,1286567175,3152976349,4255350624,2683765030,3160175349,3309594171,878443390,1988838185,3704300486,1756818940,1673061617,3403100636,272786309,1075025698,545572369,2105887268,4174560061,296679730,1841768865,1260232239,4091327024,3960309330,3497509347,1814803222,2578018489,4195456072,575138148,3299409036,446754879,3629546796,4011996048,3347532110,3252238545,4270639778,915985419,3483825537,681933534,651868046,2755636671,3828103837,223377554,2607439820,1649704518,3270937875,3901806776,1580087799,4118987695,3198115200,2087309459,2842678573,3016697106,1003007129,2802849917,1860738147,2077965243,164439672,4100872472,32283319,2827177882,1709610350,2125135846,136428751,3874428392,3652904859,3460984630,3572145929,3593056380,2939266226,824852259,818324884,3224740454,930369212,2801566410,2967507152,355706840,1257309336,4148292826,243256656,790073846,2373340630,1296297904,1422699085,3756299780,3818836405,457992840,3099667487,2135319889,77422314,1560382517,1945798516,788204353,1521706781,1385356242,870912086,325965383,2358957921,2050466060,2388260884,2313884476,4006521127,901210569,3990953189,1014646705,1503449823,1062597235,2031621326,3212035895,3931371469,1533017514,350174575,2256028891,2177544179,1052338372,741876788,1606591296,1914052035,213705253,2334669897,1107234197,1899603969,3725069491,2631447780,2422494913,1635502980,1893020342,1950903388,1120974935],T=[2807058932,1699970625,2764249623,1586903591,1808481195,1173430173,1487645946,59984867,4199882800,1844882806,1989249228,1277555970,3623636965,3419915562,1149249077,2744104290,1514790577,459744698,244860394,3235995134,1963115311,4027744588,2544078150,4190530515,1608975247,2627016082,2062270317,1507497298,2200818878,567498868,1764313568,3359936201,2305455554,2037970062,1047239e3,1910319033,1337376481,2904027272,2892417312,984907214,1243112415,830661914,861968209,2135253587,2011214180,2927934315,2686254721,731183368,1750626376,4246310725,1820824798,4172763771,3542330227,48394827,2404901663,2871682645,671593195,3254988725,2073724613,145085239,2280796200,2779915199,1790575107,2187128086,472615631,3029510009,4075877127,3802222185,4107101658,3201631749,1646252340,4270507174,1402811438,1436590835,3778151818,3950355702,3963161475,4020912224,2667994737,273792366,2331590177,104699613,95345982,3175501286,2377486676,1560637892,3564045318,369057872,4213447064,3919042237,1137477952,2658625497,1119727848,2340947849,1530455833,4007360968,172466556,266959938,516552836,0,2256734592,3980931627,1890328081,1917742170,4294704398,945164165,3575528878,958871085,3647212047,2787207260,1423022939,775562294,1739656202,3876557655,2530391278,2443058075,3310321856,547512796,1265195639,437656594,3121275539,719700128,3762502690,387781147,218828297,3350065803,2830708150,2848461854,428169201,122466165,3720081049,1627235199,648017665,4122762354,1002783846,2117360635,695634755,3336358691,4234721005,4049844452,3704280881,2232435299,574624663,287343814,612205898,1039717051,840019705,2708326185,793451934,821288114,1391201670,3822090177,376187827,3113855344,1224348052,1679968233,2361698556,1058709744,752375421,2431590963,1321699145,3519142200,2734591178,188127444,2177869557,3727205754,2384911031,3215212461,2648976442,2450346104,3432737375,1180849278,331544205,3102249176,4150144569,2952102595,2159976285,2474404304,766078933,313773861,2570832044,2108100632,1668212892,3145456443,2013908262,418672217,3070356634,2594734927,1852171925,3867060991,3473416636,3907448597,2614737639,919489135,164948639,2094410160,2997825956,590424639,2486224549,1723872674,3157750862,3399941250,3501252752,3625268135,2555048196,3673637356,1343127501,4130281361,3599595085,2957853679,1297403050,81781910,3051593425,2283490410,532201772,1367295589,3926170974,895287692,1953757831,1093597963,492483431,3528626907,1446242576,1192455638,1636604631,209336225,344873464,1015671571,669961897,3375740769,3857572124,2973530695,3747192018,1933530610,3464042516,935293895,3454686199,2858115069,1863638845,3683022916,4085369519,3292445032,875313188,1080017571,3279033885,621591778,1233856572,2504130317,24197544,3017672716,3835484340,3247465558,2220981195,3060847922,1551124588,1463996600],z=[4104605777,1097159550,396673818,660510266,2875968315,2638606623,4200115116,3808662347,821712160,1986918061,3430322568,38544885,3856137295,718002117,893681702,1654886325,2975484382,3122358053,3926825029,4274053469,796197571,1290801793,1184342925,3556361835,2405426947,2459735317,1836772287,1381620373,3196267988,1948373848,3764988233,3385345166,3263785589,2390325492,1480485785,3111247143,3780097726,2293045232,548169417,3459953789,3746175075,439452389,1362321559,1400849762,1685577905,1806599355,2174754046,137073913,1214797936,1174215055,3731654548,2079897426,1943217067,1258480242,529487843,1437280870,3945269170,3049390895,3313212038,923313619,679998e3,3215307299,57326082,377642221,3474729866,2041877159,133361907,1776460110,3673476453,96392454,878845905,2801699524,777231668,4082475170,2330014213,4142626212,2213296395,1626319424,1906247262,1846563261,562755902,3708173718,1040559837,3871163981,1418573201,3294430577,114585348,1343618912,2566595609,3186202582,1078185097,3651041127,3896688048,2307622919,425408743,3371096953,2081048481,1108339068,2216610296,0,2156299017,736970802,292596766,1517440620,251657213,2235061775,2933202493,758720310,265905162,1554391400,1532285339,908999204,174567692,1474760595,4002861748,2610011675,3234156416,3693126241,2001430874,303699484,2478443234,2687165888,585122620,454499602,151849742,2345119218,3064510765,514443284,4044981591,1963412655,2581445614,2137062819,19308535,1928707164,1715193156,4219352155,1126790795,600235211,3992742070,3841024952,836553431,1669664834,2535604243,3323011204,1243905413,3141400786,4180808110,698445255,2653899549,2989552604,2253581325,3252932727,3004591147,1891211689,2487810577,3915653703,4237083816,4030667424,2100090966,865136418,1229899655,953270745,3399679628,3557504664,4118925222,2061379749,3079546586,2915017791,983426092,2022837584,1607244650,2118541908,2366882550,3635996816,972512814,3283088770,1568718495,3499326569,3576539503,621982671,2895723464,410887952,2623762152,1002142683,645401037,1494807662,2595684844,1335535747,2507040230,4293295786,3167684641,367585007,3885750714,1865862730,2668221674,2960971305,2763173681,1059270954,2777952454,2724642869,1320957812,2194319100,2429595872,2815956275,77089521,3973773121,3444575871,2448830231,1305906550,4021308739,2857194700,2516901860,3518358430,1787304780,740276417,1699839814,1592394909,2352307457,2272556026,188821243,1729977011,3687994002,274084841,3594982253,3613494426,2701949495,4162096729,322734571,2837966542,1640576439,484830689,1202797690,3537852828,4067639125,349075736,3342319475,4157467219,4255800159,1030690015,1155237496,2951971274,1757691577,607398968,2738905026,499347990,3794078908,1011452712,227885567,2818666809,213114376,3034881240,1455525988,3414450555,850817237,1817998408,3092726480],R=[0,235474187,470948374,303765277,941896748,908933415,607530554,708780849,1883793496,2118214995,1817866830,1649639237,1215061108,1181045119,1417561698,1517767529,3767586992,4003061179,4236429990,4069246893,3635733660,3602770327,3299278474,3400528769,2430122216,2664543715,2362090238,2193862645,2835123396,2801107407,3035535058,3135740889,3678124923,3576870512,3341394285,3374361702,3810496343,3977675356,4279080257,4043610186,2876494627,2776292904,3076639029,3110650942,2472011535,2640243204,2403728665,2169303058,1001089995,899835584,666464733,699432150,59727847,226906860,530400753,294930682,1273168787,1172967064,1475418501,1509430414,1942435775,2110667444,1876241833,1641816226,2910219766,2743034109,2976151520,3211623147,2505202138,2606453969,2302690252,2269728455,3711829422,3543599269,3240894392,3475313331,3843699074,3943906441,4178062228,4144047775,1306967366,1139781709,1374988112,1610459739,1975683434,2076935265,1775276924,1742315127,1034867998,866637845,566021896,800440835,92987698,193195065,429456164,395441711,1984812685,2017778566,1784663195,1683407248,1315562145,1080094634,1383856311,1551037884,101039829,135050206,437757123,337553864,1042385657,807962610,573804783,742039012,2531067453,2564033334,2328828971,2227573024,2935566865,2700099354,3001755655,3168937228,3868552805,3902563182,4203181171,4102977912,3736164937,3501741890,3265478751,3433712980,1106041591,1340463100,1576976609,1408749034,2043211483,2009195472,1708848333,1809054150,832877231,1068351396,766945465,599762354,159417987,126454664,361929877,463180190,2709260871,2943682380,3178106961,3009879386,2572697195,2538681184,2236228733,2336434550,3509871135,3745345300,3441850377,3274667266,3910161971,3877198648,4110568485,4211818798,2597806476,2497604743,2261089178,2295101073,2733856160,2902087851,3202437046,2968011453,3936291284,3835036895,4136440770,4169408201,3535486456,3702665459,3467192302,3231722213,2051518780,1951317047,1716890410,1750902305,1113818384,1282050075,1584504582,1350078989,168810852,67556463,371049330,404016761,841739592,1008918595,775550814,540080725,3969562369,3801332234,4035489047,4269907996,3569255213,3669462566,3366754619,3332740144,2631065433,2463879762,2160117071,2395588676,2767645557,2868897406,3102011747,3069049960,202008497,33778362,270040487,504459436,875451293,975658646,675039627,641025152,2084704233,1917518562,1615861247,1851332852,1147550661,1248802510,1484005843,1451044056,933301370,967311729,733156972,632953703,260388950,25965917,328671808,496906059,1206477858,1239443753,1543208500,1441952575,2144161806,1908694277,1675577880,1842759443,3610369226,3644379585,3408119516,3307916247,4011190502,3776767469,4077384432,4245618683,2809771154,2842737049,3144396420,3043140495,2673705150,2438237621,2203032232,2370213795],A=[0,185469197,370938394,487725847,741876788,657861945,975451694,824852259,1483753576,1400783205,1315723890,1164071807,1950903388,2135319889,1649704518,1767536459,2967507152,3152976349,2801566410,2918353863,2631447780,2547432937,2328143614,2177544179,3901806776,3818836405,4270639778,4118987695,3299409036,3483825537,3535072918,3652904859,2077965243,1893020342,1841768865,1724457132,1474502543,1559041666,1107234197,1257309336,598438867,681933534,901210569,1052338372,261314535,77422314,428819965,310463728,3409685355,3224740454,3710368113,3593056380,3875770207,3960309330,4045380933,4195456072,2471224067,2554718734,2237133081,2388260884,3212035895,3028143674,2842678573,2724322336,4138563181,4255350624,3769721975,3955191162,3667219033,3516619604,3431546947,3347532110,2933734917,2782082824,3099667487,3016697106,2196052529,2313884476,2499348523,2683765030,1179510461,1296297904,1347548327,1533017514,1786102409,1635502980,2087309459,2003294622,507358933,355706840,136428751,53458370,839224033,957055980,605657339,790073846,2373340630,2256028891,2607439820,2422494913,2706270690,2856345839,3075636216,3160175349,3573941694,3725069491,3273267108,3356761769,4181598602,4063242375,4011996048,3828103837,1033297158,915985419,730517276,545572369,296679730,446754879,129166120,213705253,1709610350,1860738147,1945798516,2029293177,1239331162,1120974935,1606591296,1422699085,4148292826,4233094615,3781033664,3931371469,3682191598,3497509347,3446004468,3328955385,2939266226,2755636671,3106780840,2988687269,2198438022,2282195339,2501218972,2652609425,1201765386,1286567175,1371368976,1521706781,1805211710,1620529459,2105887268,1988838185,533804130,350174575,164439672,46346101,870912086,954669403,636813900,788204353,2358957921,2274680428,2592523643,2441661558,2695033685,2880240216,3065962831,3182487618,3572145929,3756299780,3270937875,3388507166,4174560061,4091327024,4006521127,3854606378,1014646705,930369212,711349675,560487590,272786309,457992840,106852767,223377554,1678381017,1862534868,1914052035,2031621326,1211247597,1128014560,1580087799,1428173050,32283319,182621114,401639597,486441376,768917123,651868046,1003007129,818324884,1503449823,1385356242,1333838021,1150208456,1973745387,2125135846,1673061617,1756818940,2970356327,3120694122,2802849917,2887651696,2637442643,2520393566,2334669897,2149987652,3917234703,3799141122,4284502037,4100872472,3309594171,3460984630,3545789473,3629546796,2050466060,1899603969,1814803222,1730525723,1443857720,1560382517,1075025698,1260232239,575138148,692707433,878443390,1062597235,243256656,91341917,409198410,325965383,3403100636,3252238545,3704300486,3620022987,3874428392,3990953189,4042459122,4227665663,2460449204,2578018489,2226875310,2411029155,3198115200,3046200461,2827177882,2743944855],O=[0,218828297,437656594,387781147,875313188,958871085,775562294,590424639,1750626376,1699970625,1917742170,2135253587,1551124588,1367295589,1180849278,1265195639,3501252752,3720081049,3399941250,3350065803,3835484340,3919042237,4270507174,4085369519,3102249176,3051593425,2734591178,2952102595,2361698556,2177869557,2530391278,2614737639,3145456443,3060847922,2708326185,2892417312,2404901663,2187128086,2504130317,2555048196,3542330227,3727205754,3375740769,3292445032,3876557655,3926170974,4246310725,4027744588,1808481195,1723872674,1910319033,2094410160,1608975247,1391201670,1173430173,1224348052,59984867,244860394,428169201,344873464,935293895,984907214,766078933,547512796,1844882806,1627235199,2011214180,2062270317,1507497298,1423022939,1137477952,1321699145,95345982,145085239,532201772,313773861,830661914,1015671571,731183368,648017665,3175501286,2957853679,2807058932,2858115069,2305455554,2220981195,2474404304,2658625497,3575528878,3625268135,3473416636,3254988725,3778151818,3963161475,4213447064,4130281361,3599595085,3683022916,3432737375,3247465558,3802222185,4020912224,4172763771,4122762354,3201631749,3017672716,2764249623,2848461854,2331590177,2280796200,2431590963,2648976442,104699613,188127444,472615631,287343814,840019705,1058709744,671593195,621591778,1852171925,1668212892,1953757831,2037970062,1514790577,1463996600,1080017571,1297403050,3673637356,3623636965,3235995134,3454686199,4007360968,3822090177,4107101658,4190530515,2997825956,3215212461,2830708150,2779915199,2256734592,2340947849,2627016082,2443058075,172466556,122466165,273792366,492483431,1047239e3,861968209,612205898,695634755,1646252340,1863638845,2013908262,1963115311,1446242576,1530455833,1277555970,1093597963,1636604631,1820824798,2073724613,1989249228,1436590835,1487645946,1337376481,1119727848,164948639,81781910,331544205,516552836,1039717051,821288114,669961897,719700128,2973530695,3157750862,2871682645,2787207260,2232435299,2283490410,2667994737,2450346104,3647212047,3564045318,3279033885,3464042516,3980931627,3762502690,4150144569,4199882800,3070356634,3121275539,2904027272,2686254721,2200818878,2384911031,2570832044,2486224549,3747192018,3528626907,3310321856,3359936201,3950355702,3867060991,4049844452,4234721005,1739656202,1790575107,2108100632,1890328081,1402811438,1586903591,1233856572,1149249077,266959938,48394827,369057872,418672217,1002783846,919489135,567498868,752375421,209336225,24197544,376187827,459744698,945164165,895287692,574624663,793451934,1679968233,1764313568,2117360635,1933530610,1343127501,1560637892,1243112415,1192455638,3704280881,3519142200,3336358691,3419915562,3907448597,3857572124,4075877127,4294704398,3029510009,3113855344,2927934315,2744104290,2159976285,2377486676,2594734927,2544078150],y=[0,151849742,303699484,454499602,607398968,758720310,908999204,1059270954,1214797936,1097159550,1517440620,1400849762,1817998408,1699839814,2118541908,2001430874,2429595872,2581445614,2194319100,2345119218,3034881240,3186202582,2801699524,2951971274,3635996816,3518358430,3399679628,3283088770,4237083816,4118925222,4002861748,3885750714,1002142683,850817237,698445255,548169417,529487843,377642221,227885567,77089521,1943217067,2061379749,1640576439,1757691577,1474760595,1592394909,1174215055,1290801793,2875968315,2724642869,3111247143,2960971305,2405426947,2253581325,2638606623,2487810577,3808662347,3926825029,4044981591,4162096729,3342319475,3459953789,3576539503,3693126241,1986918061,2137062819,1685577905,1836772287,1381620373,1532285339,1078185097,1229899655,1040559837,923313619,740276417,621982671,439452389,322734571,137073913,19308535,3871163981,4021308739,4104605777,4255800159,3263785589,3414450555,3499326569,3651041127,2933202493,2815956275,3167684641,3049390895,2330014213,2213296395,2566595609,2448830231,1305906550,1155237496,1607244650,1455525988,1776460110,1626319424,2079897426,1928707164,96392454,213114376,396673818,514443284,562755902,679998e3,865136418,983426092,3708173718,3557504664,3474729866,3323011204,4180808110,4030667424,3945269170,3794078908,2507040230,2623762152,2272556026,2390325492,2975484382,3092726480,2738905026,2857194700,3973773121,3856137295,4274053469,4157467219,3371096953,3252932727,3673476453,3556361835,2763173681,2915017791,3064510765,3215307299,2156299017,2307622919,2459735317,2610011675,2081048481,1963412655,1846563261,1729977011,1480485785,1362321559,1243905413,1126790795,878845905,1030690015,645401037,796197571,274084841,425408743,38544885,188821243,3613494426,3731654548,3313212038,3430322568,4082475170,4200115116,3780097726,3896688048,2668221674,2516901860,2366882550,2216610296,3141400786,2989552604,2837966542,2687165888,1202797690,1320957812,1437280870,1554391400,1669664834,1787304780,1906247262,2022837584,265905162,114585348,499347990,349075736,736970802,585122620,972512814,821712160,2595684844,2478443234,2293045232,2174754046,3196267988,3079546586,2895723464,2777952454,3537852828,3687994002,3234156416,3385345166,4142626212,4293295786,3841024952,3992742070,174567692,57326082,410887952,292596766,777231668,660510266,1011452712,893681702,1108339068,1258480242,1343618912,1494807662,1715193156,1865862730,1948373848,2100090966,2701949495,2818666809,3004591147,3122358053,2235061775,2352307457,2535604243,2653899549,3915653703,3764988233,4219352155,4067639125,3444575871,3294430577,3746175075,3594982253,836553431,953270745,600235211,718002117,367585007,484830689,133361907,251657213,2041877159,1891211689,1806599355,1654886325,1568718495,1418573201,1335535747,1184342925];function v(w){for(var V=[],J=0;J<w.length;J+=4)V.push(w[J]<<24|w[J+1]<<16|w[J+2]<<8|w[J+3]);return V}var U=function(w){if(!(this instanceof U))throw Error("AES must be instanitated with `new`");Object.defineProperty(this,"key",{value:r(w,!0)}),this._prepare()};U.prototype._prepare=function(){var w=d[this.key.length];if(w==null)throw new Error("invalid key size (must be 16, 24 or 32 bytes)");this._Ke=[],this._Kd=[];for(var V=0;V<=w;V++)this._Ke.push([0,0,0,0]),this._Kd.push([0,0,0,0]);for(var J=(w+1)*4,I=this.key.length/4,L=v(this.key),te,V=0;V<I;V++)te=V>>2,this._Ke[te][V%4]=L[V],this._Kd[w-te][V%4]=L[V];for(var ae=0,ge=I,ve;ge<J;){if(ve=L[I-1],L[0]^=f[ve>>16&255]<<24^f[ve>>8&255]<<16^f[ve&255]<<8^f[ve>>24&255]^u[ae]<<24,ae+=1,I!=8)for(var V=1;V<I;V++)L[V]^=L[V-1];else{for(var V=1;V<I/2;V++)L[V]^=L[V-1];ve=L[I/2-1],L[I/2]^=f[ve&255]^f[ve>>8&255]<<8^f[ve>>16&255]<<16^f[ve>>24&255]<<24;for(var V=I/2+1;V<I;V++)L[V]^=L[V-1]}for(var V=0,Ce,Ze;V<I&&ge<J;)Ce=ge>>2,Ze=ge%4,this._Ke[Ce][Ze]=L[V],this._Kd[w-Ce][Ze]=L[V++],ge++}for(var Ce=1;Ce<w;Ce++)for(var Ze=0;Ze<4;Ze++)ve=this._Kd[Ce][Ze],this._Kd[Ce][Ze]=R[ve>>24&255]^A[ve>>16&255]^O[ve>>8&255]^y[ve&255]},U.prototype.encrypt=function(w){if(w.length!=16)throw new Error("invalid plaintext size (must be 16 bytes)");for(var V=this._Ke.length-1,J=[0,0,0,0],I=v(w),L=0;L<4;L++)I[L]^=this._Ke[0][L];for(var te=1;te<V;te++){for(var L=0;L<4;L++)J[L]=m[I[L]>>24&255]^b[I[(L+1)%4]>>16&255]^x[I[(L+2)%4]>>8&255]^p[I[(L+3)%4]&255]^this._Ke[te][L];I=J.slice()}for(var ae=a(16),ge,L=0;L<4;L++)ge=this._Ke[V][L],ae[4*L]=(f[I[L]>>24&255]^ge>>24)&255,ae[4*L+1]=(f[I[(L+1)%4]>>16&255]^ge>>16)&255,ae[4*L+2]=(f[I[(L+2)%4]>>8&255]^ge>>8)&255,ae[4*L+3]=(f[I[(L+3)%4]&255]^ge)&255;return ae},U.prototype.decrypt=function(w){if(w.length!=16)throw new Error("invalid ciphertext size (must be 16 bytes)");for(var V=this._Kd.length-1,J=[0,0,0,0],I=v(w),L=0;L<4;L++)I[L]^=this._Kd[0][L];for(var te=1;te<V;te++){for(var L=0;L<4;L++)J[L]=E[I[L]>>24&255]^S[I[(L+3)%4]>>16&255]^T[I[(L+2)%4]>>8&255]^z[I[(L+1)%4]&255]^this._Kd[te][L];I=J.slice()}for(var ae=a(16),ge,L=0;L<4;L++)ge=this._Kd[V][L],ae[4*L]=(h[I[L]>>24&255]^ge>>24)&255,ae[4*L+1]=(h[I[(L+3)%4]>>16&255]^ge>>16)&255,ae[4*L+2]=(h[I[(L+2)%4]>>8&255]^ge>>8)&255,ae[4*L+3]=(h[I[(L+1)%4]&255]^ge)&255;return ae};var K=function(w){if(!(this instanceof K))throw Error("AES must be instanitated with `new`");this.description="Electronic Code Block",this.name="ecb",this._aes=new U(w)};K.prototype.encrypt=function(w){if(w=r(w),w.length%16!==0)throw new Error("invalid plaintext size (must be multiple of 16 bytes)");for(var V=a(w.length),J=a(16),I=0;I<w.length;I+=16)o(w,J,0,I,I+16),J=this._aes.encrypt(J),o(J,V,I);return V},K.prototype.decrypt=function(w){if(w=r(w),w.length%16!==0)throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");for(var V=a(w.length),J=a(16),I=0;I<w.length;I+=16)o(w,J,0,I,I+16),J=this._aes.decrypt(J),o(J,V,I);return V};var Z=function(w,V){if(!(this instanceof Z))throw Error("AES must be instanitated with `new`");if(this.description="Cipher Block Chaining",this.name="cbc",!V)V=a(16);else if(V.length!=16)throw new Error("invalid initialation vector size (must be 16 bytes)");this._lastCipherblock=r(V,!0),this._aes=new U(w)};Z.prototype.encrypt=function(w){if(w=r(w),w.length%16!==0)throw new Error("invalid plaintext size (must be multiple of 16 bytes)");for(var V=a(w.length),J=a(16),I=0;I<w.length;I+=16){o(w,J,0,I,I+16);for(var L=0;L<16;L++)J[L]^=this._lastCipherblock[L];this._lastCipherblock=this._aes.encrypt(J),o(this._lastCipherblock,V,I)}return V},Z.prototype.decrypt=function(w){if(w=r(w),w.length%16!==0)throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");for(var V=a(w.length),J=a(16),I=0;I<w.length;I+=16){o(w,J,0,I,I+16),J=this._aes.decrypt(J);for(var L=0;L<16;L++)V[I+L]=J[L]^this._lastCipherblock[L];o(w,this._lastCipherblock,0,I,I+16)}return V};var H=function(w,V,J){if(!(this instanceof H))throw Error("AES must be instanitated with `new`");if(this.description="Cipher Feedback",this.name="cfb",!V)V=a(16);else if(V.length!=16)throw new Error("invalid initialation vector size (must be 16 size)");J||(J=1),this.segmentSize=J,this._shiftRegister=r(V,!0),this._aes=new U(w)};H.prototype.encrypt=function(w){if(w.length%this.segmentSize!=0)throw new Error("invalid plaintext size (must be segmentSize bytes)");for(var V=r(w,!0),J,I=0;I<V.length;I+=this.segmentSize){J=this._aes.encrypt(this._shiftRegister);for(var L=0;L<this.segmentSize;L++)V[I+L]^=J[L];o(this._shiftRegister,this._shiftRegister,0,this.segmentSize),o(V,this._shiftRegister,16-this.segmentSize,I,I+this.segmentSize)}return V},H.prototype.decrypt=function(w){if(w.length%this.segmentSize!=0)throw new Error("invalid ciphertext size (must be segmentSize bytes)");for(var V=r(w,!0),J,I=0;I<V.length;I+=this.segmentSize){J=this._aes.encrypt(this._shiftRegister);for(var L=0;L<this.segmentSize;L++)V[I+L]^=J[L];o(this._shiftRegister,this._shiftRegister,0,this.segmentSize),o(w,this._shiftRegister,16-this.segmentSize,I,I+this.segmentSize)}return V};var j=function(w,V){if(!(this instanceof j))throw Error("AES must be instanitated with `new`");if(this.description="Output Feedback",this.name="ofb",!V)V=a(16);else if(V.length!=16)throw new Error("invalid initialation vector size (must be 16 bytes)");this._lastPrecipher=r(V,!0),this._lastPrecipherIndex=16,this._aes=new U(w)};j.prototype.encrypt=function(w){for(var V=r(w,!0),J=0;J<V.length;J++)this._lastPrecipherIndex===16&&(this._lastPrecipher=this._aes.encrypt(this._lastPrecipher),this._lastPrecipherIndex=0),V[J]^=this._lastPrecipher[this._lastPrecipherIndex++];return V},j.prototype.decrypt=j.prototype.encrypt;var X=function(w){if(!(this instanceof X))throw Error("Counter must be instanitated with `new`");w!==0&&!w&&(w=1),typeof w=="number"?(this._counter=a(16),this.setValue(w)):this.setBytes(w)};X.prototype.setValue=function(w){if(typeof w!="number"||parseInt(w)!=w)throw new Error("invalid counter value (must be an integer)");if(w>Number.MAX_SAFE_INTEGER)throw new Error("integer value out of safe range");for(var V=15;V>=0;--V)this._counter[V]=w%256,w=parseInt(w/256)},X.prototype.setBytes=function(w){if(w=r(w,!0),w.length!=16)throw new Error("invalid counter bytes size (must be 16 bytes)");this._counter=w},X.prototype.increment=function(){for(var w=15;w>=0;w--)if(this._counter[w]===255)this._counter[w]=0;else{this._counter[w]++;break}};var ee=function(w,V){if(!(this instanceof ee))throw Error("AES must be instanitated with `new`");this.description="Counter",this.name="ctr",V instanceof X||(V=new X(V)),this._counter=V,this._remainingCounter=null,this._remainingCounterIndex=16,this._aes=new U(w)};ee.prototype.encrypt=function(w){for(var V=r(w,!0),J=0;J<V.length;J++)this._remainingCounterIndex===16&&(this._remainingCounter=this._aes.encrypt(this._counter._counter),this._remainingCounterIndex=0,this._counter.increment()),V[J]^=this._remainingCounter[this._remainingCounterIndex++];return V},ee.prototype.decrypt=ee.prototype.encrypt;function k(w){w=r(w,!0);var V=16-w.length%16,J=a(w.length+V);o(w,J);for(var I=w.length;I<J.length;I++)J[I]=V;return J}function fe(w){if(w=r(w,!0),w.length<16)throw new Error("PKCS#7 invalid length");var V=w[w.length-1];if(V>16)throw new Error("PKCS#7 padding byte out of range");for(var J=w.length-V,I=0;I<V;I++)if(w[J+I]!==V)throw new Error("PKCS#7 invalid padding byte");var L=a(J);return o(w,L,0,0,J),L}var xe={AES:U,Counter:X,ModeOfOperation:{ecb:K,cbc:Z,cfb:H,ofb:j,ctr:ee},utils:{hex:l,utf8:c},padding:{pkcs7:{pad:k,strip:fe}},_arrayTest:{coerceArray:r,createArray:a,copyArray:o}};i.exports=xe})()})(El);var Tl=El.exports,Ja;(function(i){i[i.DISCONNECT=0]="DISCONNECT",i[i.GET_SET=1]="GET_SET",i[i.HANDS_OFF=2]="HANDS_OFF",i[i.RUNNING=3]="RUNNING",i[i.STOPPED=4]="STOPPED",i[i.IDLE=5]="IDLE",i[i.HANDS_ON=6]="HANDS_ON",i[i.FINISHED=7]="FINISHED"})(Ja||(Ja={}));const Il="6e400001-b5a3-f393-e0a9-e50e24dc4179",px="28be4a4a-cd67-11e9-a32f-2a2ae2dbcce4",xx="28be4cb6-cd67-11e9-a32f-2a2ae2dbcce4",wl="8653000a-43e6-47b7-9cb0-5fc21d4ae340",mx="8653000c-43e6-47b7-9cb0-5fc21d4ae340",bx="8653000b-43e6-47b7-9cb0-5fc21d4ae340",Cl="00000010-0000-fff7-fff6-fff5fff4fff0",gx="0000fff5-0000-1000-8000-00805f9b34fb",_x="0000fff6-0000-1000-8000-00805f9b34fb",Ll=Array(256).fill(void 0).map((i,e)=>e<<8|1),Qs=[{key:[1,2,66,40,49,145,22,7,32,5,24,84,66,17,18,83],iv:[17,3,50,40,33,1,118,39,32,149,120,20,50,18,2,67]},{key:[5,18,2,69,2,1,41,86,18,120,18,118,129,1,8,3],iv:[1,68,40,6,134,33,34,40,81,5,8,49,130,2,33,6]}];class Qa{constructor(e,t,n){if(e.length!=16)throw new Error("Key must be 16 bytes (128-bit) long");if(t.length!=16)throw new Error("Iv must be 16 bytes (128-bit) long");if(n.length!=6)throw new Error("Salt must be 6 bytes (48-bit) long");this._key=new Uint8Array(e),this._iv=new Uint8Array(t);for(let s=0;s<6;s++)this._key[s]=(e[s]+n[s])%255,this._iv[s]=(t[s]+n[s])%255}encryptChunk(e,t){var n=new Tl.ModeOfOperation.cbc(this._key,this._iv),s=n.encrypt(e.subarray(t,t+16));e.set(s,t)}decryptChunk(e,t){var n=new Tl.ModeOfOperation.cbc(this._key,this._iv),s=n.decrypt(e.subarray(t,t+16));e.set(s,t)}encrypt(e){if(e.length<16)throw Error("Data must be at least 16 bytes long");var t=new Uint8Array(e);return this.encryptChunk(t,0),t.length>16&&this.encryptChunk(t,t.length-16),t}decrypt(e){if(e.length<16)throw Error("Data must be at least 16 bytes long");var t=new Uint8Array(e);return t.length>16&&this.decryptChunk(t,t.length-16),this.decryptChunk(t,0),t}}class vx extends Qa{}class Sx extends Qa{}const Xi=typeof window<"u"&&typeof window.performance?.now=="function"?()=>Math.floor(window.performance.now()):typeof process<"u"&&typeof process.hrtime?.bigint=="function"?()=>Number(process.hrtime.bigint()/1000000n):()=>Date.now(),Rl=[[8,9,20],[6,18,38],[0,36,47],[2,45,11],[29,26,15],[27,44,24],[33,53,42],[35,17,51]],Ul=[[5,10],[7,19],[3,37],[1,46],[32,16],[28,25],[30,43],[34,52],[23,12],[21,41],[50,39],[48,14]];function js(i,e,t,n){var s="URFDLB",r=[];for(let a=0;a<54;a++)r[a]=s[~~(a/9)];for(let a=0;a<8;a++)for(let o=0;o<3;o++)r[Rl[a][(o+e[a])%3]]=s[~~(Rl[i[a]][o]/9)];for(let a=0;a<12;a++)for(let o=0;o<2;o++)r[Ul[a][(o+n[a])%2]]=s[~~(Ul[t[a]][o]/9)];return r.join("")}const Pt=i=>i.reduce((e,t)=>e+t,0);class ki{constructor(e,t,n,s,r){this.onStateUpdate=async a=>{var o=a.target,c=o.value;if(c&&c.byteLength>=16){var l=this.encrypter.decrypt(new Uint8Array(c.buffer)),d=await this.driver.handleStateEvent(this,l);d.forEach(u=>this.events$.next(u))}},this.onDisconnect=async()=>(this.device.removeEventListener("gattserverdisconnected",this.onDisconnect),this.stateCharacteristic.removeEventListener("characteristicvaluechanged",this.onStateUpdate),this.events$.next({timestamp:Xi(),type:"DISCONNECT"}),this.events$.unsubscribe(),this.stateCharacteristic.stopNotifications().catch(()=>{})),this.device=e,this.commandCharacteristic=t,this.stateCharacteristic=n,this.encrypter=s,this.driver=r,this.events$=new yl}static async create(e,t,n,s,r){var a=new ki(e,t,n,s,r);return a.device.addEventListener("gattserverdisconnected",a.onDisconnect),a.stateCharacteristic.addEventListener("characteristicvaluechanged",a.onStateUpdate),await a.stateCharacteristic.startNotifications(),a}get deviceName(){return this.device.name||"GAN-XXXX"}get deviceMAC(){return this.device.mac||"00:00:00:00:00:00"}async sendCommandMessage(e){var t=this.encrypter.encrypt(e);return this.commandCharacteristic.writeValue(t)}async sendCubeCommand(e){var t=this.driver.createCommandMessage(e);if(t)return this.sendCommandMessage(t)}async disconnect(){await this.onDisconnect(),this.device.gatt?.connected&&this.device.gatt?.disconnect()}}class ja{constructor(e){this.bits=Array.from(e).map(t=>(t+256).toString(2).slice(1)).join("")}getBitWord(e,t,n=!1){if(t<=8)return parseInt(this.bits.slice(e,e+t),2);if(t==16||t==32){let s=new Uint8Array(t/8);for(let a=0;a<s.length;a++)s[a]=parseInt(this.bits.slice(8*a+e,8*a+e+8),2);let r=new DataView(s.buffer);return t==16?r.getUint16(0,n):r.getUint32(0,n)}else throw new Error("Unsupproted bit word length")}}class yx{constructor(){this.lastSerial=-1,this.lastMoveTimestamp=0,this.cubeTimestamp=0}createCommandMessage(e){var t=new Uint8Array(20).fill(0);switch(e.type){case"REQUEST_FACELETS":t[0]=4;break;case"REQUEST_HARDWARE":t[0]=5;break;case"REQUEST_BATTERY":t[0]=9;break;case"REQUEST_RESET":t.set([10,5,57,119,0,0,1,35,69,103,137,171,0,0,0,0,0,0,0,0]);break;default:t=void 0}return t}async handleStateEvent(e,t){var n=Xi(),s=[],r=new ja(t),a=r.getBitWord(0,4);if(a==1){let c=r.getBitWord(4,16),l=r.getBitWord(20,16),d=r.getBitWord(36,16),u=r.getBitWord(52,16),f=r.getBitWord(68,4),h=r.getBitWord(72,4),m=r.getBitWord(76,4);s.push({type:"GYRO",timestamp:n,quaternion:{x:(1-(l>>15)*2)*(l&32767)/32767,y:(1-(d>>15)*2)*(d&32767)/32767,z:(1-(u>>15)*2)*(u&32767)/32767,w:(1-(c>>15)*2)*(c&32767)/32767},velocity:{x:(1-(f>>3)*2)*(f&7),y:(1-(h>>3)*2)*(h&7),z:(1-(m>>3)*2)*(m&7)}})}else if(a==2){if(this.lastSerial!=-1){let c=r.getBitWord(4,8),l=Math.min(c-this.lastSerial&255,7);if(this.lastSerial=c,l>0){for(let d=l-1;d>=0;d--){let u=r.getBitWord(12+5*d,4),f=r.getBitWord(16+5*d,1),h="URFDLB".charAt(u)+" '".charAt(f),m=r.getBitWord(47+16*d,16);m==0&&(m=n-this.lastMoveTimestamp),this.cubeTimestamp+=m,s.push({type:"MOVE",serial:c-d&255,timestamp:n,localTimestamp:d==0?n:null,cubeTimestamp:this.cubeTimestamp,face:u,direction:f,move:h.trim()})}this.lastMoveTimestamp=n}}}else if(a==4){let c=r.getBitWord(4,8);this.lastSerial==-1&&(this.lastSerial=c);let l=[],d=[],u=[],f=[];for(let h=0;h<7;h++)l.push(r.getBitWord(12+h*3,3)),d.push(r.getBitWord(33+h*2,2));l.push(28-Pt(l)),d.push((3-Pt(d)%3)%3);for(let h=0;h<11;h++)u.push(r.getBitWord(47+h*4,4)),f.push(r.getBitWord(91+h,1));u.push(66-Pt(u)),f.push((2-Pt(f)%2)%2),s.push({type:"FACELETS",serial:c,timestamp:n,facelets:js(l,d,u,f),state:{CP:l,CO:d,EP:u,EO:f}})}else if(a==5){let c=r.getBitWord(8,8),l=r.getBitWord(16,8),d=r.getBitWord(24,8),u=r.getBitWord(32,8),f=r.getBitWord(104,1),h="";for(var o=0;o<8;o++)h+=String.fromCharCode(r.getBitWord(o*8+40,8));s.push({type:"HARDWARE",timestamp:n,hardwareName:h,hardwareVersion:`${c}.${l}`,softwareVersion:`${d}.${u}`,gyroSupported:!!f})}else if(a==9){let c=r.getBitWord(8,8);s.push({type:"BATTERY",timestamp:n,batteryLevel:Math.min(c,100)})}else a==13&&e.disconnect();return s}}class Mx{constructor(){this.serial=-1,this.lastSerial=-1,this.lastLocalTimestamp=null,this.moveBuffer=[]}createCommandMessage(e){var t=new Uint8Array(16).fill(0);switch(e.type){case"REQUEST_FACELETS":t.set([104,1]);break;case"REQUEST_HARDWARE":t.set([104,4]);break;case"REQUEST_BATTERY":t.set([104,7]);break;case"REQUEST_RESET":t.set([104,5,5,57,119,0,0,1,35,69,103,137,171,0,0,0]);break;default:t=void 0}return t}async requestMoveHistory(e,t,n){var s=new Uint8Array(16).fill(0);return t%2==0&&(t=t-1&255),n%2==1&&n++,n=Math.min(n,t+1),s.set([104,3,t,0,n,0]),e.sendCommandMessage(s).catch(()=>{})}async evictMoveBuffer(e){for(var t=[];this.moveBuffer.length>0;){let n=this.moveBuffer[0],s=this.lastSerial==-1?1:n.serial-this.lastSerial&255;if(s>1){e&&await this.requestMoveHistory(e,n.serial,s);break}else t.push(this.moveBuffer.shift()),this.lastSerial=n.serial}return e&&this.moveBuffer.length>16&&e.disconnect(),t}isSerialInRange(e,t,n,s=!1,r=!1){return(t-e&255)>=(n-e&255)&&(s||(e-n&255)>0)&&(r||(t-n&255)>0)}injectMissedMoveToBuffer(e){if(e.type=="MOVE")if(this.moveBuffer.length>0){var t=this.moveBuffer[0];if(this.moveBuffer.some(n=>n.type=="MOVE"&&n.serial==e.serial)||!this.isSerialInRange(this.lastSerial,t.serial,e.serial))return;e.serial==(t.serial-1&255)&&this.moveBuffer.unshift(e)}else this.isSerialInRange(this.lastSerial,this.serial,e.serial,!1,!0)&&this.moveBuffer.unshift(e)}async checkIfMoveMissed(e){let t=this.serial-this.lastSerial&255;if(t>0&&this.serial!=0){let n=this.moveBuffer[0],s=n?n.serial:this.serial+1&255;await this.requestMoveHistory(e,s,t+1)}}async handleStateEvent(e,t){var n=Xi(),s=[],r=new ja(t),a=r.getBitWord(0,8),o=r.getBitWord(8,8),c=r.getBitWord(16,8);if(a==85&&c>0)if(o==1){if(this.lastSerial!=-1){this.lastLocalTimestamp=n;let d=r.getBitWord(24,32,!0),u=this.serial=r.getBitWord(56,16,!0),f=r.getBitWord(72,2),h=[2,32,8,1,16,4].indexOf(r.getBitWord(74,6)),m="URFDLB".charAt(h)+" '".charAt(f);h>=0&&this.moveBuffer.push({type:"MOVE",serial:u,timestamp:n,localTimestamp:n,cubeTimestamp:d,face:h,direction:f,move:m.trim()}),s=await this.evictMoveBuffer(e)}}else if(o==6){let d=r.getBitWord(24,8),u=(c-1)*2;for(let f=0;f<u;f++){let h=[1,5,3,0,4,2].indexOf(r.getBitWord(32+4*f,3)),m=r.getBitWord(35+4*f,1);if(h>=0){let b="URFDLB".charAt(h)+" '".charAt(m);this.injectMissedMoveToBuffer({type:"MOVE",serial:d-f&255,timestamp:n,localTimestamp:null,cubeTimestamp:null,face:h,direction:m,move:b.trim()})}}s=await this.evictMoveBuffer()}else if(o==2){let d=this.serial=r.getBitWord(24,16,!0);this.lastSerial!=-1&&this.lastLocalTimestamp!=null&&n-this.lastLocalTimestamp>500&&await this.checkIfMoveMissed(e),this.lastSerial==-1&&(this.lastSerial=d);let u=[],f=[],h=[],m=[];for(let b=0;b<7;b++)u.push(r.getBitWord(40+b*3,3)),f.push(r.getBitWord(61+b*2,2));u.push(28-Pt(u)),f.push((3-Pt(f)%3)%3);for(let b=0;b<11;b++)h.push(r.getBitWord(77+b*4,4)),m.push(r.getBitWord(121+b,1));h.push(66-Pt(h)),m.push((2-Pt(m)%2)%2),s.push({type:"FACELETS",serial:d,timestamp:n,facelets:js(u,f,h,m),state:{CP:u,CO:f,EP:h,EO:m}})}else if(o==7){let d=r.getBitWord(72,4),u=r.getBitWord(76,4),f=r.getBitWord(80,4),h=r.getBitWord(84,4),m="";for(var l=0;l<5;l++)m+=String.fromCharCode(r.getBitWord(l*8+32,8));s.push({type:"HARDWARE",timestamp:n,hardwareName:m,hardwareVersion:`${f}.${h}`,softwareVersion:`${d}.${u}`,gyroSupported:!1})}else if(o==16){let d=r.getBitWord(24,8);s.push({type:"BATTERY",timestamp:n,batteryLevel:Math.min(d,100)})}else o==17&&e.disconnect();return s}}class Ex{constructor(){this.serial=-1,this.lastSerial=-1,this.lastLocalTimestamp=null,this.moveBuffer=[],this.hwInfo={}}createCommandMessage(e){var t=new Uint8Array(20).fill(0);switch(e.type){case"REQUEST_FACELETS":t.set([221,4,0,237,0,0]);break;case"REQUEST_HARDWARE":this.hwInfo={},t.set([223,3,0,0,0]);break;case"REQUEST_BATTERY":t.set([221,4,0,239,0,0]);break;case"REQUEST_RESET":t.set([210,13,5,57,119,0,0,1,35,69,103,137,171,0,0,0]);break;default:t=void 0}return t}async requestMoveHistory(e,t,n){var s=new Uint8Array(20).fill(0);return t%2==0&&(t=t-1&255),n%2==1&&n++,n=Math.min(n,t+1),s.set([209,4,t,0,n,0]),e.sendCommandMessage(s).catch(()=>{})}async evictMoveBuffer(e){for(var t=[];this.moveBuffer.length>0;){let n=this.moveBuffer[0],s=this.lastSerial==-1?1:n.serial-this.lastSerial&255;if(s>1){e&&await this.requestMoveHistory(e,n.serial,s);break}else t.push(this.moveBuffer.shift()),this.lastSerial=n.serial}return e&&this.moveBuffer.length>16&&e.disconnect(),t}isSerialInRange(e,t,n,s=!1,r=!1){return(t-e&255)>=(n-e&255)&&(s||(e-n&255)>0)&&(r||(t-n&255)>0)}injectMissedMoveToBuffer(e){if(e.type=="MOVE")if(this.moveBuffer.length>0){var t=this.moveBuffer[0];if(this.moveBuffer.some(n=>n.type=="MOVE"&&n.serial==e.serial)||!this.isSerialInRange(this.lastSerial,t.serial,e.serial))return;e.serial==(t.serial-1&255)&&this.moveBuffer.unshift(e)}else this.isSerialInRange(this.lastSerial,this.serial,e.serial,!1,!0)&&this.moveBuffer.unshift(e)}async checkIfMoveMissed(e){let t=this.serial-this.lastSerial&255;if(t>0&&this.serial!=0){let n=this.moveBuffer[0],s=n?n.serial:this.serial+1&255;await this.requestMoveHistory(e,s,t+1)}}async handleStateEvent(e,t){var n=Xi(),s=[],r=new ja(t),a=r.getBitWord(0,8),o=r.getBitWord(8,8);if(a==1){if(this.lastSerial!=-1){this.lastLocalTimestamp=n;let l=r.getBitWord(16,32,!0),d=this.serial=r.getBitWord(48,16,!0),u=r.getBitWord(64,2),f=[2,32,8,1,16,4].indexOf(r.getBitWord(66,6)),h="URFDLB".charAt(f)+" '".charAt(u);f>=0&&this.moveBuffer.push({type:"MOVE",serial:d,timestamp:n,localTimestamp:n,cubeTimestamp:l,face:f,direction:u,move:h.trim()}),s=await this.evictMoveBuffer(e)}}else if(a==209){let l=r.getBitWord(16,8),d=(o-1)*2;for(let u=0;u<d;u++){let f=[1,5,3,0,4,2].indexOf(r.getBitWord(24+4*u,3)),h=r.getBitWord(27+4*u,1);if(f>=0){let m="URFDLB".charAt(f)+" '".charAt(h);this.injectMissedMoveToBuffer({type:"MOVE",serial:l-u&255,timestamp:n,localTimestamp:null,cubeTimestamp:null,face:f,direction:h,move:m.trim()})}}s=await this.evictMoveBuffer()}else if(a==237){let l=this.serial=r.getBitWord(16,16,!0);this.lastSerial!=-1&&this.lastLocalTimestamp!=null&&n-this.lastLocalTimestamp>500&&await this.checkIfMoveMissed(e),this.lastSerial==-1&&(this.lastSerial=l);let d=[],u=[],f=[],h=[];for(let m=0;m<7;m++)d.push(r.getBitWord(32+m*3,3)),u.push(r.getBitWord(53+m*2,2));d.push(28-Pt(d)),u.push((3-Pt(u)%3)%3);for(let m=0;m<11;m++)f.push(r.getBitWord(69+m*4,4)),h.push(r.getBitWord(113+m,1));f.push(66-Pt(f)),h.push((2-Pt(h)%2)%2),s.push({type:"FACELETS",serial:l,timestamp:n,facelets:js(d,u,f,h),state:{CP:d,CO:u,EP:f,EO:h}})}else if(a>=250&&a<=254){switch(a){case 250:let l=r.getBitWord(24,16,!0),d=r.getBitWord(40,8),u=r.getBitWord(48,8);this.hwInfo[a]=`${l.toString().padStart(4,"0")}-${d.toString().padStart(2,"0")}-${u.toString().padStart(2,"0")}`;break;case 252:this.hwInfo[a]="";for(var c=0;c<o-1;c++)this.hwInfo[a]+=String.fromCharCode(r.getBitWord(c*8+24,8));break;case 253:let f=r.getBitWord(24,4),h=r.getBitWord(28,4);this.hwInfo[a]=`${f}.${h}`;break;case 254:let m=r.getBitWord(24,4),b=r.getBitWord(28,4);this.hwInfo[a]=`${m}.${b}`;break}Object.keys(this.hwInfo).length==4&&s.push({type:"HARDWARE",timestamp:n,hardwareName:this.hwInfo[252],hardwareVersion:this.hwInfo[254],softwareVersion:this.hwInfo[253],productDate:this.hwInfo[250],gyroSupported:["GAN12uiM"].indexOf(this.hwInfo[252])!=-1})}else if(a==236){let l=r.getBitWord(16,16),d=r.getBitWord(32,16),u=r.getBitWord(48,16),f=r.getBitWord(64,16),h=r.getBitWord(80,4),m=r.getBitWord(84,4),b=r.getBitWord(88,4);s.push({type:"GYRO",timestamp:n,quaternion:{x:(1-(d>>15)*2)*(d&32767)/32767,y:(1-(u>>15)*2)*(u&32767)/32767,z:(1-(f>>15)*2)*(f&32767)/32767,w:(1-(l>>15)*2)*(l&32767)/32767},velocity:{x:(1-(h>>3)*2)*(h&7),y:(1-(m>>3)*2)*(m&7),z:(1-(b>>3)*2)*(b&7)}})}else if(a==239){let l=r.getBitWord(8+o*8,8);s.push({type:"BATTERY",timestamp:n,batteryLevel:Math.min(l,100)})}else a==234&&e.disconnect();return s}}function Tx(i){if(i instanceof DataView)return new DataView(i.buffer.slice(2,11));for(var e of Ll)if(i.has(e))return new DataView(i.get(e).buffer.slice(0,9))}function Ix(i){var e=[],t=Tx(i);if(t&&t.byteLength>=6)for(let n=1;n<=6;n++)e.push(t.getUint8(t.byteLength-n).toString(16).toUpperCase().padStart(2,"0"));return e.join(":")}async function wx(i){return new Promise(e=>{typeof i.watchAdvertisements!="function"&&e(null);var t=new AbortController,n=r=>{i.removeEventListener("advertisementreceived",n),t.abort();var a=Ix(r.manufacturerData);e(a||null)},s=()=>{i.removeEventListener("advertisementreceived",n),t.abort(),e(null)};i.addEventListener("advertisementreceived",n),i.watchAdvertisements({signal:t.signal}).catch(s),setTimeout(s,1e4)})}async function Cx(i){var e=await navigator.bluetooth.requestDevice({filters:[{namePrefix:"GAN"},{namePrefix:"MG"},{namePrefix:"AiCube"}],optionalServices:[Il,wl,Cl],optionalManufacturerData:Ll}),t=i&&await i(e,!1)||await wx(e)||i&&await i(e,!0);if(!t)throw new Error("Unable to determine cube MAC address, connection is not possible!");e.mac=t;var n=new Uint8Array(e.mac.split(/[:-\s]+/).map(o=>parseInt(o,16)).reverse()),s=await e.gatt.connect(),r=await s.getPrimaryServices(),a=null;for(let o of r){let c=o.uuid.toLowerCase();if(c==Il){let l=await o.getCharacteristic(px),d=await o.getCharacteristic(xx),u=e.name?.startsWith("AiCube")?Qs[1]:Qs[0],f=new Qa(new Uint8Array(u.key),new Uint8Array(u.iv),n),h=new yx;a=await ki.create(e,l,d,f,h);break}else if(c==wl){let l=await o.getCharacteristic(mx),d=await o.getCharacteristic(bx),u=Qs[0],f=new vx(new Uint8Array(u.key),new Uint8Array(u.iv),n),h=new Mx;a=await ki.create(e,l,d,f,h);break}else if(c==Cl){let l=await o.getCharacteristic(gx),d=await o.getCharacteristic(_x),u=Qs[0],f=new Sx(new Uint8Array(u.key),new Uint8Array(u.iv),n),h=new Ex;a=await ki.create(e,l,d,f,h);break}}if(!a)throw new Error("Can't find target BLE services - wrong or unsupported cube device model");return a}const Lx=Object.freeze(Object.defineProperty({__proto__:null,get GanTimerState(){return Ja},connectGanCube:Cx,now:Xi,toKociembaFacelets:js},Symbol.toStringTag,{value:"Module"}))})();
