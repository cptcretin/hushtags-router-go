(self.webpackChunkhushtags_app=self.webpackChunkhushtags_app||[]).push([[8991],{8991:(e,t,o)=>{"use strict";o.r(t),o.d(t,{startTapClick:()=>n});var s=o(2377);const n=e=>{let t,o,n,v,p=10*-u,f=0;const h=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap,m=e=>{p=(0,s.o)(e),g(e)},E=()=>{clearTimeout(v),v=void 0,o&&(S(!1),o=void 0)},w=e=>{o||void 0!==t&&null!==t.parentElement||(t=void 0,k(a(e),e))},g=e=>{k(void 0,e)},k=(e,t)=>{if(e&&e===o)return;clearTimeout(v),v=void 0;const{x:n,y:a}=(0,s.p)(t);if(o){if(L.has(o))throw new Error("internal error");o.classList.contains(c)||T(o,n,a),S(!0)}if(e){const t=L.get(e);t&&(clearTimeout(t),L.delete(e));const o=i(e)?0:d;e.classList.remove(c),v=setTimeout(()=>{T(e,n,a),v=void 0},o)}o=e},T=(e,t,o)=>{f=Date.now(),e.classList.add(c);const s=h&&r(e);s&&s.addRipple&&(b(),n=s.addRipple(t,o))},b=()=>{void 0!==n&&(n.then(e=>e()),n=void 0)},S=e=>{b();const t=o;if(!t)return;const s=l-Date.now()+f;if(e&&s>0&&!i(t)){const e=setTimeout(()=>{t.classList.remove(c),L.delete(t)},l);L.set(t,e)}else t.classList.remove(c)},C=document;C.addEventListener("ionScrollStart",e=>{t=e.target,E()}),C.addEventListener("ionScrollEnd",()=>{t=void 0}),C.addEventListener("ionGestureCaptured",E),C.addEventListener("touchstart",e=>{p=(0,s.o)(e),w(e)},!0),C.addEventListener("touchcancel",m,!0),C.addEventListener("touchend",m,!0),C.addEventListener("mousedown",e=>{const t=(0,s.o)(e)-u;p<t&&w(e)},!0),C.addEventListener("mouseup",e=>{const t=(0,s.o)(e)-u;p<t&&g(e)},!0)},a=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(o.classList&&o.classList.contains("ion-activatable"))return o}}},i=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);