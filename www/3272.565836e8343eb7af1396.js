(self.webpackChunkhushtags_app=self.webpackChunkhushtags_app||[]).push([[3272],{3272:(e,t,a)=>{"use strict";a.r(t),a.d(t,{createSwipeBackGesture:()=>n});var s=a(2377),r=a(9461);a(960);const n=(e,t,a,n,c)=>{const o=e.ownerDocument.defaultView;return(0,r.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:a,onMove:e=>{n(e.deltaX/o.innerWidth)},onEnd:e=>{const t=o.innerWidth,a=e.deltaX/t,r=e.velocityX,n=r>=0&&(r>.2||e.deltaX>t/2),h=(n?1-a:a)*t;let i=0;if(h>5){const e=h/Math.abs(r);i=Math.min(e,540)}c(n,a<=0?.01:(0,s.j)(0,a,.9999),i)}})}}}]);