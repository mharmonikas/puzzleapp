(function(){"use strict";var e={9090:function(e,t,i){var o=i(3233),n=i(3396);function h(e,t,i,o,h,s){const r=(0,n.up)("layout");return(0,n.wg)(),(0,n.j4)(r)}function s(e,t,i,o,h,s){const r=(0,n.up)("konva");return(0,n.wg)(),(0,n.j4)(r)}function r(e,t,i,o,h,s){const r=(0,n.up)("v-shape"),a=(0,n.up)("v-layer"),l=(0,n.up)("v-stage");return(0,n.wg)(),(0,n.j4)(l,{ref:"stage",config:h.stageSize},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{ref:"layer"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.shapes,((e,t)=>((0,n.wg)(),(0,n.j4)(r,{key:t,config:e.config,onDragend:e=>s.dragMove(e,t)},null,8,["config","onDragend"])))),128))])),_:1},512)])),_:1},8,["config"])}const a=window.innerWidth,l=window.innerHeight;var p={name:"konva-app",data(){return{stageSize:{width:a,height:l},isDragging:!1,shapeSizes:[{height:100,width:60},{height:30,width:100},{height:30,width:100},{height:100,width:40},{height:100,width:40},{height:100,width:40}],shapes:[{config:{sceneFunc:(e,t)=>{const i=20,o=20,n=60,h=100,s=20,r=20;e.beginPath(),e.moveTo(i,o),e.lineTo(i+n/2-s/2,o),e.quadraticCurveTo(i+n/2,o+r,i+n/2+s/2,o),e.lineTo(i+n,o),e.lineTo(i+n,o+h),e.lineTo(i+n/2+s/2,o+h),e.quadraticCurveTo(i+n/2,o+h-r,i+n/2-s/2,o+h),e.lineTo(i,o+h),e.lineTo(i,o),e.closePath(),e.fillStyle="pink",e.fill(),e.lineWidth=2,e.strokeStyle="black",e.stroke(),e.fillStrokeShape(t)},fill:"#00D2FF",stroke:"black",strokeWidth:4,draggable:!0},horizontal:!1,left:"empty",right:"empty",top:"in",bottom:"in"},{config:{sceneFunc:(e,t)=>{const i=20,o=20,n=100,h=30,s=20,r=12;e.beginPath(),e.moveTo(i,o),e.lineTo(i,o+h),e.lineTo(i+(n-s)/2,o+h),e.bezierCurveTo(i+(n-s)/2,o+h+r,i+(n+s)/2,o+h+r,i+(n+s)/2,o+h),e.lineTo(i+n,o+h),e.lineTo(i+n,o),e.lineTo(i+(n+s)/2,o),e.bezierCurveTo(i+(n+s)/2,o-r,i+(n-s)/2,o-r,i+(n-s)/2,o),e.lineTo(i,o),e.closePath(),e.fillStyle="pink",e.fill(),e.lineWidth=2,e.strokeStyle="black",e.stroke(),e.fillStrokeShape(t)},fill:"#00D2FF",stroke:"black",strokeWidth:4,draggable:!0},horizontal:!0,left:"empty",right:"empty",top:"out",bottom:"out"},{config:{sceneFunc:(e,t)=>{const i=20,o=20,n=100,h=30,s=20,r=12;e.beginPath(),e.moveTo(i,o),e.lineTo(i,o+h),e.lineTo(i+(n-s)/2,o+h),e.bezierCurveTo(i+(n-s)/2,o+h+r,i+(n+s)/2,o+h+r,i+(n+s)/2,o+h),e.lineTo(i+n,o+h),e.lineTo(i+n,o),e.lineTo(i+(n+s)/2,o),e.bezierCurveTo(i+(n+s)/2,o-r,i+(n-s)/2,o-r,i+(n-s)/2,o),e.lineTo(i,o),e.closePath(),e.fillStyle="pink",e.fill(),e.lineWidth=2,e.strokeStyle="black",e.stroke(),e.fillStrokeShape(t)},fill:"#00D2FF",stroke:"black",strokeWidth:4,draggable:!0},horizontal:!0,left:"empty",right:"empty",top:"out",bottom:"out"},{config:{sceneFunc:(e,t)=>{const i=50,o=50,n=40,h=100,s=20,r=20;e.beginPath(),e.moveTo(i,o),e.lineTo(i+n,o),e.lineTo(i+n,o+h/2-s/2),e.quadraticCurveTo(i+n+r,o+h/2,i+n,o+h/2+s/2),e.lineTo(i+n,o+h),e.lineTo(i,o+h),e.lineTo(i,o+h/2+s/2),e.quadraticCurveTo(i-r,o+h/2,i,o+h/2-s/2),e.lineTo(i,o),e.closePath(),e.fillStyle="pink",e.fill(),e.lineWidth=2,e.strokeStyle="black",e.stroke(),e.fillStrokeShape(t)},fill:"#00D2FF",stroke:"black",strokeWidth:4,draggable:!0},horizontal:!0,left:"out",right:"out",top:"empty",bottom:"empty"},{config:{sceneFunc:(e,t)=>{const i=50,o=50,n=40,h=100,s=20,r=20;e.beginPath(),e.moveTo(i,o),e.lineTo(i+n,o),e.lineTo(i+n,o+h/2-s/2),e.quadraticCurveTo(i+n+r,o+h/2,i+n,o+h/2+s/2),e.lineTo(i+n,o+h),e.lineTo(i,o+h),e.lineTo(i,o+h/2+s/2),e.quadraticCurveTo(i-r,o+h/2,i,o+h/2-s/2),e.lineTo(i,o),e.closePath(),e.fillStyle="pink",e.fill(),e.lineWidth=2,e.strokeStyle="black",e.stroke(),e.fillStrokeShape(t)},fill:"#00D2FF",stroke:"black",strokeWidth:4,draggable:!0},horizontal:!0,left:"out",right:"out",top:"empty",bottom:"empty"},{config:{sceneFunc:(e,t)=>{const i=50,o=50,n=40,h=100,s=20,r=20;e.beginPath(),e.moveTo(i,o),e.lineTo(i+n,o),e.lineTo(i+n,o+h/2-s/2),e.quadraticCurveTo(i+n-r,o+h/2,i+n,o+h/2+s/2),e.lineTo(i+n,o+h),e.lineTo(i,o+h),e.lineTo(i,o+h/2+s/2),e.quadraticCurveTo(i+r,o+h/2,i,o+h/2-s/2),e.lineTo(i,o),e.closePath(),e.fillStyle="pink",e.fill(),e.lineWidth=2,e.strokeStyle="black",e.stroke(),e.fillStrokeShape(t)},fill:"#00D2FF",stroke:"black",strokeWidth:4,draggable:!0},horizontal:!0,left:"in",right:"in",top:"empty",bottom:"empty"}],shapeIndex:0,otherShapeIndex:0}},methods:{dragMove(e,t){let i=this.$refs.stage.getStage().children[0].children;const o=i[t];this.shapeIndex=t,o.horizontal=this.shapes[t].horizontal,i.forEach(((t,i)=>{if(this.otherShapeIndex=i,o!==t){const i=e.target.position(),n=t.position(),h=this.calculateDistance(i.x,i.y,n.x,n.y);let s=this.getClip(h,i,n);console.log(s),"top clip"===s&&o.position({x:n.x+this.shapeSizes[this.otherShapeIndex].width/2-this.shapeSizes[this.shapeIndex].width/2,y:n.y+this.shapeSizes[this.otherShapeIndex].height+3}),"bottom clip"===s&&o.position({x:n.x+this.shapeSizes[this.otherShapeIndex].width/2-this.shapeSizes[this.shapeIndex].width/2,y:n.y-this.shapeSizes[this.shapeIndex].height-3}),"right clip"===s&&o.position({x:n.x-this.shapeSizes[this.shapeIndex].width-3,y:n.y}),"left clip"===s&&o.position({x:n.x+this.shapeSizes[this.shapeIndex].width+3,y:n.y}),this.$refs.stage.getStage().children[0].batchDraw()}}))},getRightSideDifference(e,t){return Math.abs(e.x+this.shapeSizes[this.shapeIndex].width-t.x)},getLeftSideDifference(e,t){return Math.abs(e.x-t.x-this.shapeSizes[this.otherShapeIndex].width)},getTopDifference(e,t){return Math.abs(e.y-t.y-this.shapeSizes[this.otherShapeIndex].height)},getBottomDifference(e,t){return Math.abs(e.y+this.shapeSizes[this.shapeIndex].height-t.y)},getClip(e,t,i){const o=this.getRightSideDifference(t,i),n=this.getLeftSideDifference(t,i),h=this.getTopDifference(t,i),s=this.getBottomDifference(t,i);let r=t.y+this.shapeSizes[this.shapeIndex].height/2-10,a=i.y+this.shapeSizes[this.otherShapeIndex].height/2-10,l=Math.abs(r-a),p=t.x+this.shapeSizes[this.shapeIndex].width/2-10,c=i.x+this.shapeSizes[this.otherShapeIndex].width/2-10,u=Math.abs(p-c);return o<10&&l<10&&this.rightSideMatch?"right clip":n<10&&l<10&&this.leftSideMatch?"left clip":h<10&&u<10&&this.topSideMatch?"top clip":s<10&&u<10&&this.bottomSideMatch?"bottom clip":void 0},calculateDistance(e,t,i,o){return Math.sqrt(Math.pow(i-e,2)+Math.pow(o-t,2))}},computed:{rightSideMatch(){return this.shapes[this.shapeIndex].right!==this.shapes[this.otherShapeIndex].left},leftSideMatch(){return this.shapes[this.shapeIndex].left!==this.shapes[this.otherShapeIndex].right},topSideMatch(){return this.shapes[this.shapeIndex].top!==this.shapes[this.otherShapeIndex].bottom},bottomSideMatch(){return this.shapes[this.shapeIndex].bottom!==this.shapes[this.otherShapeIndex].top}}},c=i(89);const u=(0,c.Z)(p,[["render",r]]);var d=u,f={name:"puzzle-app",display:"PuzzleApp",order:6,components:{konva:d}};const g=(0,c.Z)(f,[["render",s]]);var S=g,b={name:"App",components:{Layout:S}};const y=(0,c.Z)(b,[["render",h]]);var T=y,k=i(3571),v=i.n(k);const x=(0,o.ri)(T);x.use(v()),x.mount("#app")}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var h=t[o]={exports:{}};return e[o].call(h.exports,h,h.exports,i),h.exports}i.m=e,function(){var e=[];i.O=function(t,o,n,h){if(!o){var s=1/0;for(p=0;p<e.length;p++){o=e[p][0],n=e[p][1],h=e[p][2];for(var r=!0,a=0;a<o.length;a++)(!1&h||s>=h)&&Object.keys(i.O).every((function(e){return i.O[e](o[a])}))?o.splice(a--,1):(r=!1,h<s&&(s=h));if(r){e.splice(p--,1);var l=n();void 0!==l&&(t=l)}}return t}h=h||0;for(var p=e.length;p>0&&e[p-1][2]>h;p--)e[p]=e[p-1];e[p]=[o,n,h]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,h,s=o[0],r=o[1],a=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(a)var p=a(i)}for(t&&t(o);l<s.length;l++)h=s[l],i.o(e,h)&&e[h]&&e[h][0](),e[h]=0;return i.O(p)},o=self["webpackChunkpuzzleapp"]=self["webpackChunkpuzzleapp"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(9090)}));o=i.O(o)})();
//# sourceMappingURL=app.cb409708.js.map