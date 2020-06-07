!function(){"use strict";var r=["blocks.png","items.png","enemies.png","mario-small.png"],_=[2400,256],t="canvas",D=300,n=2400,i=256,R=5;function u(r,e,n){for(var t=new Array(n),i=0,o=e;i<n;)t[i]=r[o],i=i+1|0,o=o+1|0;return t}function f(r,e,n){if(e<0||e>=r.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};r[e]=n}function d(r,e){if(e<0||e>=r.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};return r[e]}function s(r,e){for(;;){var n=e,t=r,i=t.length,o=0===i?1:i,a=o-n.length|0;if(0==a)return t.apply(null,n);if(0<=a)return function(e,n){return function(r){return s(e,n.concat([r]))}}(t,n);e=u(n,o,0|-a),r=t.apply(null,u(n,0,o))}}function o(e){return 1===e.length?e:function(r){return function(a,u){var r=a.length;if(1===r)return a(u);switch(r){case 1:return a(u);case 2:return function(r){return a(u,r)};case 3:return function(r,e){return a(u,r,e)};case 4:return function(r,e,n){return a(u,r,e,n)};case 5:return function(r,e,n,t){return a(u,r,e,n,t)};case 6:return function(r,e,n,t,i){return a(u,r,e,n,t,i)};case 7:return function(r,e,n,t,i,o){return a(u,r,e,n,t,i,o)};default:return s(a,[u])}}(e,r)}}function a(n){return 2===n.length?n:function(r,e){return function(o,a,u){var r=o.length;if(2===r)return o(a,u);switch(r){case 1:return s(o(a),[u]);case 2:return o(a,u);case 3:return function(r){return o(a,u,r)};case 4:return function(r,e){return o(a,u,r,e)};case 5:return function(r,e,n){return o(a,u,r,e,n)};case 6:return function(r,e,n,t){return o(a,u,r,e,n,t)};case 7:return function(r,e,n,t,i){return o(a,u,r,e,n,t,i)};default:return s(o,[a,u])}}(n,r,e)}}function c(r,e){return r<e?r:e}function l(r,e){return e<r?r:e}var v=function(r,e){for(var n in r)e(n)};function p(e,n){if(e===n)return 1;var r=typeof e;if("string"!=r&&"number"!=r&&"boolean"!=r&&"undefined"!=r&&null!==e){var t=typeof n;if("function"==r||"function"==t)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: functional value",Error:new Error};if("number"!=t&&"undefined"!=t&&null!==n){var i=0|e.TAG,o=0|n.TAG;if(248==i)return e[1]===n[1];if(251==i)throw{RE_EXN_ID:"Invalid_argument",_1:"equal: abstract value",Error:new Error};if(i==o){if(256==i)return e[1]===n[1];var a=0|e.length;if(a==(0|n.length)){if(!Array.isArray(e)){if(e instanceof Date&&n instanceof Date)return!(n<e||e<n);var u={contents:!0};return v(e,function(r){n.hasOwnProperty(r)||(u.contents=!1)}),u.contents&&v(n,function(r){e.hasOwnProperty(r)&&p(n[r],e[r])||(u.contents=!1)}),u.contents}for(var s=0;;){var c=s;if(c===a)return 1;if(!p(e[c],n[c]))return;s=c+1|0}}}}}}function x(r,e,n,t,i,o){var a=((e+r|0)+t|0)+o|0;return(a<<i|a>>>(32-i|0)|0)+n|0}function m(r,e,n,t,i,o,a){return x(e&n|(-1^e)&t,r,e,i,o,a)}function y(r,e,n,t,i,o,a){return x(e&t|n&(-1^t),r,e,i,o,a)}function g(r,e,n,t,i,o,a){return x(e^n^t,r,e,i,o,a)}function h(r,e,n,t,i,o,a){return x(n^(e|-1^t),r,e,i,o,a)}function b(r,e){var n=m(n=r[0],o=r[1],i=r[2],t=r[3],e[0],7,-680876936),t=m(t,n,o,i,e[1],12,-389564586),i=m(i,t,n,o,e[2],17,606105819),o=m(o,i,t,n,e[3],22,-1044525330);n=m(n,o,i,t,e[4],7,-176418897),t=m(t,n,o,i,e[5],12,1200080426),i=m(i,t,n,o,e[6],17,-1473231341),o=m(o,i,t,n,e[7],22,-45705983),n=m(n,o,i,t,e[8],7,1770035416),t=m(t,n,o,i,e[9],12,-1958414417),i=m(i,t,n,o,e[10],17,-42063),o=m(o,i,t,n,e[11],22,-1990404162),n=m(n,o,i,t,e[12],7,1804603682),t=m(t,n,o,i,e[13],12,-40341101),i=m(i,t,n,o,e[14],17,-1502002290),n=y(n,o=m(o,i,t,n,e[15],22,1236535329),i,t,e[1],5,-165796510),t=y(t,n,o,i,e[6],9,-1069501632),i=y(i,t,n,o,e[11],14,643717713),o=y(o,i,t,n,e[0],20,-373897302),n=y(n,o,i,t,e[5],5,-701558691),t=y(t,n,o,i,e[10],9,38016083),i=y(i,t,n,o,e[15],14,-660478335),o=y(o,i,t,n,e[4],20,-405537848),n=y(n,o,i,t,e[9],5,568446438),t=y(t,n,o,i,e[14],9,-1019803690),i=y(i,t,n,o,e[3],14,-187363961),o=y(o,i,t,n,e[8],20,1163531501),n=y(n,o,i,t,e[13],5,-1444681467),t=y(t,n,o,i,e[2],9,-51403784),i=y(i,t,n,o,e[7],14,1735328473),n=g(n,o=y(o,i,t,n,e[12],20,-1926607734),i,t,e[5],4,-378558),t=g(t,n,o,i,e[8],11,-2022574463),i=g(i,t,n,o,e[11],16,1839030562),o=g(o,i,t,n,e[14],23,-35309556),n=g(n,o,i,t,e[1],4,-1530992060),t=g(t,n,o,i,e[4],11,1272893353),i=g(i,t,n,o,e[7],16,-155497632),o=g(o,i,t,n,e[10],23,-1094730640),n=g(n,o,i,t,e[13],4,681279174),t=g(t,n,o,i,e[0],11,-358537222),i=g(i,t,n,o,e[3],16,-722521979),o=g(o,i,t,n,e[6],23,76029189),n=g(n,o,i,t,e[9],4,-640364487),t=g(t,n,o,i,e[12],11,-421815835),i=g(i,t,n,o,e[15],16,530742520),n=h(n,o=g(o,i,t,n,e[2],23,-995338651),i,t,e[0],6,-198630844),t=h(t,n,o,i,e[7],10,1126891415),i=h(i,t,n,o,e[14],15,-1416354905),o=h(o,i,t,n,e[5],21,-57434055),n=h(n,o,i,t,e[12],6,1700485571),t=h(t,n,o,i,e[3],10,-1894986606),i=h(i,t,n,o,e[10],15,-1051523),o=h(o,i,t,n,e[1],21,-2054922799),n=h(n,o,i,t,e[8],6,1873313359),t=h(t,n,o,i,e[15],10,-30611744),i=h(i,t,n,o,e[6],15,-1560198380),o=h(o,i,t,n,e[13],21,1309151649),n=h(n,o,i,t,e[4],6,-145523070),t=h(t,n,o,i,e[11],10,-1120210379),i=h(i,t,n,o,e[2],15,718787259),o=h(o,i,t,n,e[9],21,-343485551),r[0]=n+r[0]|0,r[1]=o+r[1]|0,r[2]=i+r[2]|0,r[3]=t+r[3]|0}var w=[1732584193,-271733879,-1732584194,271733878],k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];function A(r,e){if(e>=r.length||e<0)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};return r.charCodeAt(e)}function T(r){throw{RE_EXN_ID:"Failure",_1:r,Error:new Error}}function E(r,e){return r?{_0:r._0,_1:E(r._1,e)}:e}function G(r){return function(r,e,n){var t=r.slice(e,n),i=t.length;w[0]=1732584193,w[1]=-271733879,w[2]=-1732584194,w[3]=271733878;for(var o=0;o<=15;++o)k[o]=0;for(var a=i/64|0,u=1;u<=a;++u){for(var s=0;s<=15;++s){var c=((u<<6)-64|0)+(s<<2)|0;k[s]=((t.charCodeAt(c)+(t.charCodeAt(1+c|0)<<8)|0)+(t.charCodeAt(2+c|0)<<16)|0)+(t.charCodeAt(3+c|0)<<24)|0}b(w,k)}for(var _=t.slice(a<<6),v=0;v<=15;++v)k[v]=0;for(var f=_.length-1|0,d=0;d<=f;++d)k[d/4|0]=k[d/4|0]|_.charCodeAt(d)<<(d%4<<3);var l=1+f|0;if(k[l/4|0]=k[l/4|0]|128<<(l%4<<3),55<l){b(w,k);for(var p=0;p<=15;++p)k[p]=0}return k[14]=i<<3,b(w,k),String.fromCharCode(255&w[0],w[0]>>8&255,w[0]>>16&255,w[0]>>24&255,255&w[1],w[1]>>8&255,w[1]>>16&255,w[1]>>24&255,255&w[2],w[2]>>8&255,w[2]>>16&255,w[2]>>24&255,255&w[3],w[3]>>8&255,w[3]>>16&255,w[3]>>24&255)}(r,0,r.length)}function e(r,e){if(1073741823<e||e<=0)throw{RE_EXN_ID:"Invalid_argument",_1:"Random.int",Error:new Error};for(;;){var n=function(r){r.idx=(r.idx+1|0)%55;var e=d(r.st,r.idx),n=1073741823&(d(r.st,(r.idx+24|0)%55)+(e^e>>>25&31)|0);return f(r.st,r.idx,n),n}(r),t=n%e;if((n-t|0)<=(1+(1073741823-e|0)|0))return t}}var S={st:[987910699,495797812,364182224,414272206,318284740,990407751,383018966,270373319,840823159,24560019,536292337,512266505,189156120,730249596,143776328,51606627,140166561,366354223,1003410265,700563762,981890670,913149062,526082594,1021425055,784300257,667753350,630144451,949649812,48546892,415514493,258888527,511570777,89983870,283659902,308386020,242688715,482270760,865188196,1027664170,207196989,193777847,619708188,671350186,149669678,257044018,87658204,558145612,183450813,28133145,901332182,710253903,510646120,652377910,409934019,801085050],idx:0};function C(r){return e(S,r)}function I(r){return function(r,e){for(var n=0===e.length?[0]:e,t=n.length,i=0;i<=54;++i)f(r.st,i,i);for(var o,a,u,s="x",c=0,_=54+(t<55?55:t)|0;c<=_;++c){var v=c%55;a=s,u=d(n,c%t),s=G(a+String(u)),f(r.st,v,1073741823&(d(r.st,v)^(((A(o=s,0)+(A(o,1)<<8)|0)+(A(o,2)<<16)|0)+(A(o,3)<<24)|0)))}r.idx=0}(S,r)}function M(){return I([(4294967295^(0|Date.now()))*Math.random()|0])}function j(r,e){var n=r.context,t=r.params.src_offset,i=r.params.frame_size,o=i[0],a=r.params.frame_size,u=t[0]+r.frame.contents*o;return n.drawImage(r.img,u,t[1],o,i[1],e[0],e[1],a[0],a[1])}function N(r,e){if(0===e)throw{RE_EXN_ID:"Division_by_zero",Error:new Error};return r%e}function P(r,e,n,t,i,o,a){var u=void 0!==e?e:[0,0];return{max_frames:t,max_ticks:i,img_src:"./sprites/"+n,frame_size:o,src_offset:a,bbox_offset:void 0!==r?r:[0,0],bbox_size:p(u,[0,0])?o:u}}function z(r){var e=r[1];switch(r[0]){case 0:return P([1,1],[14,14],"enemies.png",2,10,[16,16],[0,128]);case 1:return e?P([1,10],[11,16],"enemies.png",2,10,[16,27],[32,69]):P([4,10],[11,16],"enemies.png",2,10,[16,27],[0,69]);case 2:return e?P([1,10],[11,16],"enemies.png",2,10,[16,27],[32,5]):P([4,10],[11,16],"enemies.png",2,10,[16,27],[0,5]);case 3:return P([2,2],[12,13],"enemies.png",4,10,[16,16],[0,96]);case 4:return P([2,2],[12,13],"enemies.png",4,10,[16,16],[0,32])}}function X(r,e){var n=document.createElement("img");return n.src=r.img_src,{params:r,context:e,frame:{contents:0},ticks:{contents:0},img:n}}function F(r,e,n){return X(function(r,e){switch(0|r.TAG){case 0:var n=r._0,t=[r._1,e];if(n){var i=t[0];if(t[1])switch(i){case 0:return P([1,1],[11,15],"mario-small.png",1,0,[16,16],[0,32]);case 1:return P([2,1],[13,15],"mario-small.png",2,10,[16,16],[16,48]);case 2:return P([2,1],[12,15],"mario-small.png",3,5,[16,16],[16,32]);case 3:return P([1,5],[14,10],"mario-small.png",1,0,[16,16],[0,64])}else switch(i){case 0:return P([3,1],[11,15],"mario-small.png",1,0,[16,16],[0,0]);case 1:return P([2,1],[13,15],"mario-small.png",2,10,[16,16],[16,16]);case 2:return P([2,1],[12,15],"mario-small.png",3,5,[16,16],[16,0]);case 3:return P([1,5],[14,10],"mario-small.png",1,0,[16,16],[0,64])}}else{var o=t[0];if(t[1])switch(o){case 0:return P([1,1],[13,25],"mario-big.png",1,0,[16,26],[16,69]);case 1:return P([2,1],[12,25],"mario-big.png",1,0,[16,26],[48,70]);case 2:return P([2,1],[13,25],"mario-big.png",4,10,[16,27],[0,101]);case 3:return P([2,10],[13,17],"mario-big.png",1,0,[16,27],[32,69])}else switch(o){case 0:return P([2,1],[13,25],"mario-big.png",1,0,[16,27],[16,5]);case 1:return P([2,1],[12,25],"mario-big.png",1,0,[16,26],[48,6]);case 2:return P([2,1],[13,25],"mario-big.png",4,10,[16,27],[0,37]);case 3:return P([2,10],[13,17],"mario-big.png",1,0,[16,27],[32,5])}}case 1:return z([r._0,e]);case 2:return r._0?P([3,0],[12,16],"items.png",3,15,[16,16],[0,80]):P([2,0],[12,16],"items.png",1,0,[16,16],[0,0]);case 3:var a=r._0;if("number"!=typeof a)return P(void 0,void 0,"blocks.png",4,15,[16,16],[0,16]);switch(a){case 0:return P(void 0,void 0,"blocks.png",1,0,[16,16],[0,32]);case 1:return P(void 0,void 0,"blocks.png",5,10,[16,16],[0,0]);case 2:return P(void 0,void 0,"blocks.png",1,0,[16,16],[0,48]);case 3:return P(void 0,void 0,"blocks.png",1,0,[16,16],[0,64]);case 4:return P(void 0,void 0,"panel.png",3,15,[26,26],[0,0]);case 5:return P(void 0,void 0,"ground.png",1,0,[16,16],[0,32])}}}(r,e),n)}function q(r,e){return X(function(r){switch(r){case 0:return P(void 0,void 0,"enemies.png",1,0,[16,16],[0,144]);case 1:return P(void 0,void 0,"chunks.png",1,0,[8,8],[0,0]);case 2:return P(void 0,void 0,"chunks.png",1,0,[8,8],[8,0]);case 3:return P(void 0,void 0,"score.png",1,0,[12,8],[0,0]);case 4:return P(void 0,void 0,"score.png",1,0,[12,9],[0,9]);case 5:return P(void 0,void 0,"score.png",1,0,[12,9],[0,18]);case 6:return P(void 0,void 0,"score.png",1,0,[12,9],[0,27]);case 7:return P(void 0,void 0,"score.png",1,0,[14,9],[13,0]);case 8:return P(void 0,void 0,"score.png",1,0,[14,9],[13,9]);case 9:return P(void 0,void 0,"score.png",1,0,[14,9],[13,18]);case 10:return P(void 0,void 0,"score.png",1,0,[14,9],[13,27])}}(r),e)}function L(r){return{x:r[0],y:r[1]}}function O(r,e,n,t,i){var o,a,u=void 0!==r?r:[0,0],s=void 0!==e?e:[0,0],c=(a=i,2===(o=n)||1===o?{sprite:q(o,a),lifetime:300}:{sprite:q(o,a),lifetime:30});return{params:c,pos:L(t),vel:L(u),acc:L(s),kill:!1,life:c.lifetime}}function Y(r,e,n){return O([.5,-.7],void 0,801<=r?2001<=r?4e3!==r?8e3!==r?3:10:9:1e3!==r?2e3<=r?8:3:7:201<=r?400!==r?800<=r?6:3:5:100!==r&&200<=r?4:3,e,n)}var B=function(r,e){r._1=e};function V(r,e){return function(r,e){for(;;){var n=r;if(!n)return;e(n._0),r=n._1}}(r,o(e)),0}function H(r,e,n){return function(r,e,n){for(;;){var t=r;if(!t)return e;e=n(e,t._0),r=t._1}}(r,e,a(n))}function J(r,e){for(;;){if(!r)return 0;var n=r._1,t=r._0;if(e(t)){var i={_0:t,_1:0};return function(r,e,n){for(;;){var t=n;if(!e)return;var i,o=e._1,a=e._0;r(a)?(B(t,i={_0:a,_1:0}),n=i,e=o):e=o}}(e,n,i),i}r=n}}var K={contents:-2147483648};function Q(r,e){return{has_gravity:void 0===r||r,speed:void 0!==e?e:1}}function U(r){var e=r.params.speed,n=r.dir;r.vel.x=n?e:-e}function W(r,e,n,t){var i=void 0!==r?r:0;return[F(e,i,n),{params:function(r){switch(0|r.TAG){case 0:return Q(void 0,2.8);case 1:return Q(void 0,3<=r._0?3:void 0);case 2:return Q(!r._0&&void 0,void 0);case 3:return r._0,Q(!1,void 0)}}(e),pos:t,vel:{x:0,y:0},id:(K.contents=K.contents+1|0,K.contents),jumping:!1,grounded:!1,dir:i,invuln:0,kill:!1,health:1,crouch:!1,score:0}]}function Z(r,e,n){var t=W(void 0,r,e,n),i=t[1],o=t[0];switch(0|r.TAG){case 0:return{TAG:0,_0:r._0,_1:o,_2:i};case 1:return U(i),{TAG:1,_0:r._0,_1:o,_2:i};case 2:return{TAG:2,_0:r._0,_1:o,_2:i};case 3:return{TAG:3,_0:r._0,_1:o,_2:i}}}function $(r){return r._2}function rr(r){return!r.TAG}function er(r,e,n){var t=e.bbox_offset,i=n.bbox_offset,o=e.bbox_size,a=n.bbox_size;r.x=r.x-(a[0]+i[0])+(o[0]+t[0]),r.y=r.y-(a[1]+i[1])+(o[1]+t[1])}function nr(r,e){var n,t;(n=r).grounded?n.vel.y=0:n.params.has_gravity&&(n.vel.y=c(n.vel.y+.2+.01*Math.abs(n.vel.y),4.5)),(t=r).pos.x=t.vel.x+t.pos.x,t.params.has_gravity&&(t.pos.y=t.vel.y+t.pos.y),r.pos.y>e&&(r.kill=!0)}function tr(r,e){1!==r?0!==r?e.vel.x=0:e.vel.y=-.001:(e.vel.y=0,e.grounded=!0,e.jumping=!1)}function ir(r){r.vel.x=-r.vel.x,r.dir=r.dir?0:1}function or(r,e,n,t,i){switch(e){case 0:return void(t.kill=!0);case 1:var o=W(t.dir,{TAG:1,_0:3},i,t.pos),a=o[1],u=o[0];return er(a.pos,n.params,u.params),{TAG:1,_0:3,_1:u,_2:a};case 2:var s=W(t.dir,{TAG:1,_0:4},i,t.pos),c=s[1],_=s[0];return er(c.pos,n.params,_.params),{TAG:1,_0:4,_1:_,_2:c}}t.dir=r,0!==t.vel.x?t.vel.x=0:U(t)}function ar(r,e,n){ir(r);var t,i,o,a,u,s=n.params;return t=e,i=n,o=r.dir,a=z([t,o]),(u=document.createElement("img")).src=a.img_src,i.params=a,i.img=u,er(r.pos,s,n.params),0}function ur(r){var e=r.health-1|0;return 0==e?void(r.kill=!0):0===r.invuln&&void(r.health=e)}function sr(r,e){ur(r);var n=W(void 0,{TAG:3,_0:0},e,r.pos);return{TAG:3,_0:0,_1:n[0],_2:n[1]}}function cr(r,e,n,t){var i=Z({TAG:2,_0:n},t,e.pos),o=i._2;return o.pos.y=o.pos.y-i._1.params.frame_size[1],o.dir=r?0:1,U(o),i}function _r(r){var e=r._1.params,n=r._2,t=e.bbox_offset,i=n.pos.x+t[0],o=n.pos.y+t[1],a=e.bbox_size,u=a[1],s=a[0];return{center:{x:i+s/2,y:o+u/2},half:{x:s/2,y:u/2}}}function vr(r,e){var n=_r(r),t=_r(e),i=r._2;if(!function(r,e){var n,t=r._2,i=e._2;switch(0|r.TAG){case 0:n=1===e.TAG&&0<r._2.invuln;break;case 1:n=2===e.TAG;break;case 2:switch(0|e.TAG){case 1:case 2:n=!0;break;case 0:case 3:n=!1}break;case 3:n=!1}return t.kill||i.kill||n}(r,e)){var o=n.center.x-t.center.x,a=n.center.y-t.center.y,u=n.half.x+t.half.x,s=n.half.y+t.half.y;if(Math.abs(o)<u&&Math.abs(a)<s){var c=u-Math.abs(o),_=s-Math.abs(a);return _<=c?0<a?(i.pos.y=i.pos.y+_,0):(i.pos.y=i.pos.y-_,1):0<o?(i.pos.x=i.pos.x+c,3):(i.pos.x=i.pos.x-c,2)}}}var fr=60,dr=4;function lr(r){return r.pos}function pr(r,e,n){var t=e/2;return c(l(r-t,0),c(n-e,Math.abs(r-t)))}function xr(r,e){var n=r.pos.x-32,t=r.pos.x+r.v_dim.x,i=r.pos.y-32,o=r.pos.y+r.v_dim.y,a=e.x,u=e.y;return n<=a&&a<=t&&i<=u&&u<=o}function mr(r,e){return r.pos.y+r.v_dim.y<=e}function yr(r,e){return{pos:{x:pr(e.x,r.v_dim.x,r.m_dim.x),y:pr(e.y,r.v_dim.y,r.m_dim.y)},v_dim:r.v_dim,m_dim:r.m_dim}}function gr(r,e){for(;;){var n=e;if(!n)return;if(p(r,n._0[1]))return 1;e=n._1}}function hr(r,e){for(;;){if(!r)return 0;var n=r._1,t=r._0;if(!gr(t[1],e))return E({_0:t,_1:0},hr(n,e));r=n}}function br(r,e,n){for(;;){if(!r)return 0;var t=r._1,i=r._0,o=i[1].x,a=i[1].y;if(!(o<128||16*e-o<528||0===a||16*n-a<48))return E({_0:i,_1:0},br(t,e,n));r=t}}function wr(r,e,n,t,i){if(r<n||e<t)return 0;var o,a,u,s,c,_,v,f,d,l=C(4),p=C(2),x=0===C(5)?3:p;switch(i){case 0:return 2<r-n?{_0:[p,{x:n,y:t}],_1:{_0:[x,{x:n+1,y:t}],_1:{_0:[p,{x:n+2,y:t}],_1:0}}}:1<r-n?{_0:[l,{x:n,y:t}],_1:{_0:[l,{x:n+1,y:t}],_1:0}}:{_0:[l,{x:n,y:t}],_1:0};case 1:var m=C(5)+5|0;return t<5?function r(e,n,t,i){return 0===i?0:E({_0:[t,{x:e,y:n}],_1:0},r(e+1,n,t,i-1|0))}(n,t,2,m):0;case 2:return e-t==1?E({_0:[d=p,{x:v=n,y:f=t}],_1:{_0:[d,{x:v+1,y:f}],_1:{_0:[d,{x:v+2,y:f}],_1:{_0:[d,{x:v+3,y:f}],_1:0}}}},E({_0:[d,{x:v+1,y:f-1}],_1:{_0:[d,{x:v+2,y:f-1}],_1:{_0:[d,{x:v+3,y:f-1}],_1:0}}},E({_0:[d,{x:v+2,y:f-2}],_1:{_0:[d,{x:v+3,y:f-2}],_1:0}},{_0:[d,{x:v+3,y:f-3}],_1:0}))):0;case 3:return 0===p&&3<e-t?E({_0:[_=p,{x:s=n,y:c=t}],_1:{_0:[_,{x:s+1,y:c}],_1:{_0:[_,{x:s+2,y:c}],_1:0}}},E({_0:[_,{x:s+2,y:c+1}],_1:{_0:[_,{x:s+3,y:c+1}],_1:0}},{_0:[_,{x:s+5,y:c+2}],_1:{_0:[_,{x:s+6,y:c+2}],_1:0}})):2<e-t?E({_0:[u=p,{x:o=n,y:a=t}],_1:{_0:[u,{x:o+1,y:a}],_1:0}},E({_0:[u,{x:o+3,y:a-1}],_1:{_0:[u,{x:o+4,y:a-1}],_1:0}},{_0:[u,{x:o+4,y:a-2}],_1:{_0:[u,{x:o+5,y:a-2}],_1:{_0:[u,{x:o+6,y:a-2}],_1:0}}})):{_0:[p,{x:n,y:t}],_1:0};case 4:return t+3-e==2?{_0:[p,{x:n,y:t}],_1:0}:t+3-e==1?{_0:[p,{x:n,y:t}],_1:{_0:[p,{x:n,y:t+1}],_1:0}}:{_0:[p,{x:n,y:t}],_1:{_0:[p,{x:n,y:t+1}],_1:{_0:[p,{x:n,y:t+2}],_1:0}}};case 5:return{_0:[3,{x:n,y:t}],_1:0};default:return T("Shouldn't reach here")}}function kr(r,e){if(!r)return 0;var n=r._0;return E({_0:Z({TAG:3,_0:function(r){switch(r){case 0:return 1;case 1:return 2;case 2:return 3;case 3:return{_0:0};case 4:return 5;default:return T("Shouldn't reach here")}}(n[0])},e,n[1]),_1:0},kr(r._1,e))}function Ar(r,e){if(!r)return 0;var n=r._0;return E({_0:Z({TAG:1,_0:function(r){switch(r){case 0:return 2;case 1:return 1;case 2:return 0;default:return T("Shouldn't reach here")}}(n[0])},e,n[1]),_1:0},Ar(r._1,e))}function Tr(r,e,n,t,i){var o=function(r,e,n,t,i){for(;;){var o,a=i,u=t,s=n;if(r-s<33)return a;e-1<u?(t=0,n=s+1):t=(gr({x:s,y:u},a)||0===u||(o=C(100))<5&&(i=E(a,hr(wr(r,e,s,u,o),a))),u+1)}}(r,e,0,0,0),a=br(function r(e){if(!e)return 0;var n=e._0;return E({_0:[n[0],{x:16*n[1].x,y:16*n[1].y}],_1:0},r(e._1))}(o),r,e),u=kr(a,i),s=function(r,e,n,t){for(;;){var i=t,o=n;if(r<o)return i;if(10<o){var a=C(10),u=E(i,{_0:[4,{x:16*o,y:16*e}],_1:0});if(7===a&&32<r-o){n=o+1;continue}t=u,n=o+1}else{t=E(i,{_0:[4,{x:16*o,y:16*e}],_1:0}),n=o+1}}}(r,e,0,0),c=kr(s,i),_=E(o,s),v=E(u,c),f=Ar(function r(e,n,t,i,o){for(;;){var a=i,u=t;if(e-32<u)return 0;if(n-1<a||u<15)i=0,t=u+1;else if(gr({x:u,y:a},o)||0===a)i=a+1;else{var s=C(30);if(s<3&&n-1===a)return E({_0:[s,{x:16*u,y:16*a}],_1:0},r(e,n,u,a+1,o));i=a+1}}}(r,e,0,0,_),i),d=function r(e){for(;;){var n=e,t=C(2);if(!n)return 0;var i=n._1,o=n._0;if(0===t)return E({_0:[0,{x:o[1].x,y:o[1].y-16}],_1:0},r(i));e=i}}(a),l=br(hr(d,a),r,e),p=E(a,d),x=Ar(hr(function r(e){for(;;){var n=e,t=C(20),i=C(3);if(!n)return 0;var o=n._1,a=n._0;if(0===t)return E({_0:[i,{x:a[1].x,y:a[1].y-16}],_1:0},r(o));e=o}}(a),p),i),m=function r(e,n){return e?E({_0:Z({TAG:2,_0:1},n,e._0[1]),_1:0},r(e._1,n)):0}(l,i);return E(v,E(f,E(m,E(x,{_0:Z({TAG:3,_0:4},i,{x:16*r-256,y:16*e*2/3}),_1:0}))))}function Er(r){var e=Tr(n/16,i/16-1,0,0,r);return[Z({TAG:0,_0:1,_1:0},r,{x:100,y:224}),e]}var Gr={left:!1,right:!1,up:!1,down:!1,bbox:0},Sr={contents:0},Cr={contents:0},Ir={contents:0};function Mr(r,e){r.score=r.score+e|0}function zr(r,e,n,t,i){return 3<=e?[void 0,0===t.vel.x?or(r.dir,e,n,t,i):(ur(r),void(r.invuln=fr))]:(ur(r),r.invuln=fr,[void 0,void 0])}function Dr(r,e,n,t){var i,o,a,u,s,c,_,v=t.ctx,f=0;switch(0|e.TAG){case 0:var d=e._2;switch(0|n.TAG){case 0:return[void 0,void 0];case 1:var l=n._2,p=n._1,x=n._0;if(1!==r)return zr(d,x,p,l,v);i=d,o=x,a=p,u=l,f=1;break;case 2:s=d,c=n._0,_=n._2,f=2;break;case 3:var m=n._2,y=n._0;if(0!==r){return"number"==typeof y&&4===y?(t.status=1,[void 0,void 0]):(1!==r||(t.multiplier=1),tr(r,d),[void 0,void 0])}if("number"==typeof y)return 1!==y?4!==y?tr(r,d):t.status=1:0===e._0?(tr(r,d),ur(m)):tr(r,d),[void 0,void 0];var g=sr(m,v),h=cr(d.dir,m,y._0,v);return tr(r,d),[h,g]}break;case 1:var b=e._2,w=e._1,k=e._0;switch(0|n.TAG){case 0:var A=n._2;if(0!==r)return zr(A,k,w,b,v);i=A,o=k,a=w,u=b,f=1;break;case 1:return function(r,e,n,t,i,o,a){if(3!==r){if(r<4)return 3<=t?0===o.vel.x?ar(n,r,e):ur(n):2<=a&&(ar(n,r,e),ar(o,t,i)),[void 0,void 0];if(3<=t)return ur(n),ur(o),[void 0,void 0]}else if(3<=t)return ur(n),ur(o),[void 0,void 0];return 0===n.vel.x?ar(o,t,i):ur(o),[void 0,void 0]}(k,w,b,n._0,n._1,n._2,r);case 2:return[void 0,void 0];case 3:var T=n._2,E=n._0;if(2<=r){if(3<=k){if("number"==typeof E)return 1!==E?ar(b,k,w):(ur(T),ir(b)),[void 0,void 0];var G=sr(T,v),S=cr(b.dir,T,E._0,v);return ar(b,k,w),[G,S]}return ar(b,k,w),[void 0,void 0]}return tr(r,b),[void 0,void 0]}break;case 2:var C=e._2;switch(0|n.TAG){case 0:s=n._2,c=e._0,_=C,f=2;break;case 1:case 2:return[void 0,void 0];case 3:return 2<=r?ir(C):tr(r,C),[void 0,void 0]}break;case 3:return[void 0,void 0]}switch(f){case 1:return function(r,e,n,t,i,o){if(r.invuln=10,r.jumping=!1,r.grounded=!0,3<=e){var a=or(r.dir,e,n,t,o);return r.vel.y=-dr,r.pos.y=r.pos.y-5,[void 0,a]}if(ur(t),r.vel.y=-dr,8===i.multiplier)return Mr(i,800),t.score=800,[void 0,or(r.dir,e,n,t,o)];var u=Math.imul(100,i.multiplier);return Mr(i,u),t.score=u,i.multiplier=i.multiplier<<1,[void 0,or(r.dir,e,n,t,o)]}(i,o,a,u,t,v);case 2:return c?(t.coins=t.coins+1|0,ur(_),Mr(t,100)):(ur(_),2===s.health||(s.health=s.health+1|0),s.vel.x=0,s.vel.y=0,Mr(t,1e3),_.score=1e3),[void 0,void 0]}}function Rr(e,r,n){var t=$(e);return J(r,o(function(r){return!(!xr(n.vpt,t.pos)&&!rr(e))||mr(n.vpt,t.pos.y)}))}function jr(r,e,n){return 3===r.TAG?0:function(r,e,n){for(var t,i=e,o=0;;){var a=o,u=i;if(!u)return a;var s,c,_=u._0,v=$(r);t=_;var f,d,l=(c=r._2.id!==t._2.id&&void 0!==(s=vr(r,_))&&$(_).id!==v.id?Dr(s,r,_,n):[void 0,void 0])[0],o=void 0!==l?void 0!==(f=c[1])?{_0:l,_1:{_0:f,_1:a}}:{_0:l,_1:a}:void 0!==(d=c[1])?{_0:d,_1:a}:a,i=u._1}}(r,Rr(r,e,n),n)}function Nr(r,e,n){var t=$(e),i=e._1;t.invuln=0<t.invuln?t.invuln-1|0:0;var o=xr(r.vpt,t.pos)||rr(e)||mr(r.vpt,t.pos.y);if(t.kill||!o)return 0;t.grounded=!1,nr(t,r.map);var a,u,s,c,_,v,f,d,l,p=jr(e,n,r),x=(a=r.vpt,{x:(u=t.pos).x-a.pos.x,y:u.y-a.pos.y});return j(i,[x.x,x.y]),1===Gr.bbox&&(c=[x.x,x.y],_=(s=i).context,v=s.params.bbox_offset,f=s.params.bbox_size,_.strokeStyle="#FF0000",_.strokeRect(c[0]+v[0],c[1]+v[1],f[0],f[1])),0===t.vel.x&&1===e.TAG||((l=(d=i).ticks.contents)>=d.params.max_ticks?(d.ticks.contents=0,d.frame.contents=N(d.frame.contents+1|0,d.params.max_frames)):d.ticks.contents=l+1|0),p}function Pr(r,e,n){if(e.TAG){var t=$(e),i=Nr(r,e,n);t.kill||(Sr.contents={_0:e,_1:E(Sr.contents,i)});var o=t.kill?function(r,e){switch(0|r.TAG){case 0:return 0;case 1:var n=r._2,t=[n.pos.x,n.pos.y];return E(0<n.score?{_0:Y(n.score,t,e),_1:0}:0,0!==r._0?0:{_0:O(void 0,void 0,0,t,e),_1:0});case 2:var i=r._2;return r._0?0:{_0:Y(i.score,[i.pos.x,i.pos.y],e),_1:0};case 3:var o=r._2,a=r._0;if("number"!=typeof a)return 0;if(1!==a)return 0;var u=[o.pos.x,o.pos.y];return{_0:O([-5,-5],[0,.2],1,u,e),_1:{_0:O([-3,-4],[0,.2],1,u,e),_1:{_0:O([3,-4],[0,.2],2,u,e),_1:{_0:O([5,-5],[0,.2],2,u,e),_1:0}}}}}}(e,r.ctx):0;return Cr.contents=E(Cr.contents,o),e}var a=e._2,u=H({_0:[Gr.left,0],_1:{_0:[Gr.right,1],_1:{_0:[Gr.up,2],_1:{_0:[Gr.down,3],_1:0}}}},0,function(r,e){return e[0]?{_0:e[1],_1:r}:r});a.crouch=!1;var s,c=function(n,r,e){var t=n.jumping,i=n.dir,o=Math.abs(n.vel.x);V(r,function(r){var e=.2*n.vel.x;switch(r){case 0:return n.crouch?void 0:(n.vel.x>-n.params.speed&&(n.vel.x=n.vel.x-(.4-e)),void(n.dir=0));case 1:return n.crouch?void 0:(n.vel.x<n.params.speed&&(n.vel.x=n.vel.x+(.4+e)),void(n.dir=1));case 2:return!n.jumping&&n.grounded?(n.jumping=!0,n.grounded=!1,void(n.vel.y=l(n.vel.y-(5.7+.25*Math.abs(n.vel.x)),-6))):void 0;case 3:return!n.jumping&&n.grounded?void(n.crouch=!0):void 0}});var a=.9*n.vel.x,u=Math.abs(a)<.1?0:a;n.vel.x=u;var s=n.health<=1?1:0;return!t&&n.jumping?[s,F({TAG:0,_0:s,_1:1},n.dir,e)]:i!==n.dir||0===o&&0<Math.abs(n.vel.x)&&!n.jumping?[s,F({TAG:0,_0:s,_1:2},n.dir,e)]:i!==n.dir&&n.jumping&&t?[s,F({TAG:0,_0:s,_1:1},n.dir,e)]:0===n.vel.y&&n.crouch?[s,F({TAG:0,_0:s,_1:3},n.dir,e)]:0===n.vel.y&&0===n.vel.x?[s,F({TAG:0,_0:s,_1:0},n.dir,e)]:void 0}(a,u,r.ctx),_=void 0!==c?(s=c[1],er(a.pos,e._1.params,s.params),{TAG:0,_0:c[0],_1:s,_2:a}):e,v=Nr(r,_,n);return Sr.contents=E(Sr.contents,v),_}function Xr(M,r){var e,n,t,i=r[0],o=M.getContext("2d"),a=+M.width,u=+M.height,s=(n=_,{pos:{x:0,y:0},v_dim:{x:(e=[a,u])[0],y:e[1]},m_dim:{x:n[0],y:n[1]}}),c={bgd:(t=o,X(P(void 0,void 0,"bgd-1.png",1,0,[512,256],[0,0]),t)),ctx:o,vpt:yr(s,$(i).pos),map:_[1],score:0,coins:0,multiplier:1,status:0};c.ctx.scale(1,1);var z=function(r,e,n,t,i){var o,a,u,s=e.status;if("number"==typeof s){if(0!==s)return(u=e.ctx).rect(0,0,512,512),u.fillStyle="black",u.fill(),u.fillStyle="white",u.font="20px 'Press Start 2P'",u.fillText("You win!",180,128)}else{var c=s._0;if(D<r-c){var _=R-((r-c|0)/1e3|0)|0;if(0<_)return o=e.ctx,a=_,o.rect(0,0,512,512),o.fillStyle="black",o.fill(),o.fillStyle="white",o.font="20px 'Press Start 2P'",o.fillText("GAME OVER. You lose! ",60,128),o.fillText(String(a),230,200),void requestAnimationFrame(function(r){return z(r,e,n,Sr.contents,Cr.contents)});var v=Er(e.ctx);return Xr(M,[v[0],v[1]])}}Sr.contents=0,Cr.contents=0;var f,d,l,p,x,m=(f=Ir.contents,1/((r-f)/1e3));Ir.contents=r,l=(d=M).getContext("2d"),p=d.width,x=d.height,l.clearRect(0,0,p,x);var y,g,h=lr(e.vpt).x/5|0,b=0|e.bgd.params.frame_size[0];y=e.bgd,g=N(h,b),j(y,[-g,0]),j(y,[y.params.frame_size[0]-g,0]);var w=Pr(e,n,t);!0===$(w).kill&&"number"==typeof e.status&&(e.status={_0:r});var k,A,T,E,G,S,C,I={bgd:e.bgd,ctx:e.ctx,vpt:yr(e.vpt,$(w).pos),map:e.map,score:e.score,coins:e.coins,multiplier:e.multiplier,status:e.status};V(t,function(r){return Pr(I,r,t)}),V(i,function(r){return function(r,e){var n,t;(n=e).life=n.life-1|0,0===n.life&&(n.kill=!0),(t=n).vel.x=t.vel.x+t.acc.x,t.vel.y=t.vel.y+t.acc.y,n.pos.x=n.vel.x+n.pos.x,n.pos.y=n.vel.y+n.pos.y;var i=e.pos.x-lr(r.vpt).x,o=e.pos.y-lr(r.vpt).y;j(e.params.sprite,[i,o]),e.kill||(Cr.contents={_0:e,_1:Cr.contents})}(I,r)}),k=M,A=String(0|m),k.getContext("2d").fillText(A,10,18),T=M,E=I.coins,G=String(I.score),S=String(E),(C=T.getContext("2d")).font="10px 'Press Start 2P'",C.fillText("Score: "+G,T.width-140,18),C.fillText("Coins: "+S,120,18),requestAnimationFrame(function(r){return z(r,I,w,Sr.contents,Cr.contents)})};return z(0,c,i,r[1],0)}function Fr(r){var e=r.keyCode;if(41<=e)switch(e){case 65:Gr.left=!0;break;case 66:Gr.bbox=(Gr.bbox+1|0)%2;break;case 68:Gr.right=!0;break;case 83:Gr.down=!0;break;case 67:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 84:case 85:case 86:break;case 87:Gr.up=!0}else if(32<=e)switch(e-32|0){case 1:case 2:case 3:case 4:break;case 5:Gr.left=!0;break;case 0:case 6:Gr.up=!0;break;case 7:Gr.right=!0;break;case 8:Gr.down=!0}return!0}function qr(r){var e=r.keyCode;if(68<=e)83!==e?87!==e?69<=e||(Gr.right=!1):Gr.up=!1:Gr.down=!1;else if(41<=e)65!==e||(Gr.left=!1);else if(32<=e)switch(e-32|0){case 1:case 2:case 3:case 4:break;case 5:Gr.left=!1;break;case 0:case 6:Gr.up=!1;break;case 7:Gr.right=!1;break;case 8:Gr.down=!1}return!0}function Lr(){M();var r=document.getElementById(t),e=null!==r?r:(console.log("cant find canvas "+t+" \n"),T("fail")),n=e.getContext("2d");return document.addEventListener("keydown",Fr,!0),document.addEventListener("keyup",qr,!0),M(),Xr(e,Er(n))}function Or(){var n={contents:0},t=r.length;return function(r,e){for(var n=0,t=r.length;n<t;++n)e(r[n])}(r,function(r){var e=document.createElement("img");e.src="sprites/"+r,e.addEventListener("load",function(r){return n.contents=n.contents+1|0,n.contents===t&&Lr(),!0},!0)}),0}window.onload=function(r){return Or(),!0}}();
