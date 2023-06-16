(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),s=t.n(a),i=t(667),c=t.n(i),d=new URL(t(454),t.b),l=s()(r()),p=c()(d);l.push([n.id,`* {\n  padding: 0;\n  margin: 0;\n  font-family: "poppins", sans-serif;\n  box-sizing: border-box;\n}\n\n.container {\n  width: 100%;\n  min-height: 100vh;\n  background: linear-gradient(135deg, #153677, #4e085f);\n  padding: 10px;\n}\n\n.to-do-app {\n  width: 100%;\n  max-width: 540px;\n  background: white;\n  margin: 100px auto 20px;\n  padding: 40px 30px 70px;\n  border-radius: 5px;\n}\n\n.to-do-app h2 {\n  color: #03276f;\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.icon {\n  width: 28px;\n  height: 28px;\n  margin-left: 70%;\n  background-image: url(${p});\n  background-size: cover;\n  cursor: pointer;\n}\n\n.row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #d7d8db;\n  border-radius: 30px;\n  padding-left: 20px;\n  margin-bottom: 30px;\n  transition: background-color 0.5s ease-in-out;\n}\n\n.row:hover {\n  background-color: #ffa035;\n}\n\n.my-text {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  padding: 10px;\n}\n\n.add-btn {\n  border: none;\n  outline: none;\n  background-color: #df543e;\n  color: #fff;\n  font-size: 16px;\n  padding: 15px 50px;\n  cursor: pointer;\n  border-radius: 30px;\n  transition: background-color 0.4s ease-in-out;\n}\n\n.add-btn:hover {\n  background-color: #ffd8ac;\n}\n\n.list-contaner li {\n  list-style: none;\n  font-size: 15px;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #df543e;\n}\n\n.task-checkbox {\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n}\n\n.task-checkbox:checked {\n  background-color: #df543e;\n}\n\n.edit-input {\n  border-radius: 10px;\n  padding: 5px;\n  background: transparent;\n  border: 1px solid #df543e;\n}\n\n.task-checkbox:checked::after {\n  content: "\\2713";\n  color: white;\n  font-size: 14px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.Remove-btn {\n  border: none;\n  outline: none;\n  background-color: #df543e;\n  color: #fff;\n  font-size: 16px;\n  padding: 15px 50px;\n  cursor: pointer;\n  border-radius: 30px;\n  transition: background-color 0.4s ease-in-out;\n  width: 100%;\n  margin-top: 40px;\n}\n\n.Remove-btn:hover {\n  background-color: #ffd8ac;\n}\n\n.task-delete-button {\n  appearance: none;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  background-color: transparent;\n  top: 1px;\n}\n\n.task-delete-button::after {\n  content: "\\00D7";\n  color: #ccc;\n  font-size: 20px;\n  position: absolute;\n  top: 43%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.task-delete-button:hover {\n  background-color: #df543e;\n}\n\n.task-delete-button:hover::after {\n  color: white;\n}\n`,""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=i,e.splice(i,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=t(a[s]);e[i].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},454:(n,e,t)=>{n.exports=t.p+"430b217f65fd133feb4f.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),s=t.n(a),i=t(565),c=t.n(i),d=t(216),l=t.n(d),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;class m{constructor(n,e=!1){this.description=n,this.completed=e}}const g=new class{constructor(){this.tasks=JSON.parse(localStorage.getItem("tasks"))||[]}saveTasks(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}addTask(n){const e=new m(n);this.tasks.push(e),this.updateIndexes(),this.saveTasks()}deleteTask(n){this.tasks.splice(n,1),this.updateIndexes(),this.saveTasks()}updateIndexes(){this.tasks.forEach(((n,e)=>{n.index=e+1}))}toggleComplete(n){n>=0&&n<this.tasks.length&&(this.tasks[n].completed=!this.tasks[n].completed,this.saveTasks())}editTaskDescription(n,e){n>=0&&n<this.tasks.length&&(this.tasks[n].description=e,this.saveTasks())}clearCompleted(){for(let n=this.tasks.length-1;n>=0;n-=1)this.tasks[n].completed&&this.deleteTask(n)}},b=()=>{const n=document.getElementById("ls-contaner");n.innerHTML="",g.tasks.forEach(((e,t)=>{const o=document.createElement("li");o.className="task-item";const r=document.createElement("input");r.type="checkbox",r.checked=e.completed,r.className="task-checkbox",r.addEventListener("change",(()=>g.toggleComplete(t)));const a=document.createElement("span");a.textContent=e.description,a.className="task-description",a.addEventListener("dblclick",(()=>{const n=document.createElement("input");n.type="text",n.className="edit-input",n.value=a.textContent,n.addEventListener("keyup",(e=>{if("Enter"===e.key){const e=n.value.trim();e&&(g.editTaskDescription(t,e),b())}})),n.addEventListener("blur",(()=>{const e=n.value.trim();e&&(g.editTaskDescription(t,e),b())})),o.replaceChild(n,a),n.focus()}));const s=document.createElement("button");s.className="task-delete-button",s.addEventListener("click",(()=>{g.deleteTask(t),b()})),o.appendChild(r),o.appendChild(a),o.appendChild(s),n.appendChild(o)}))};document.getElementById("my-btn").addEventListener("click",(()=>{const n=document.getElementById("input-box"),e=n.value.trim();e&&(g.addTask(e),n.value="",b())})),document.querySelector(".Remove-btn").addEventListener("click",(()=>{g.clearCompleted(),b()}));const v=document.querySelector(".icon");v.addEventListener("mouseover",(()=>{v.title="Click to reload the page"})),v.addEventListener("click",(()=>{localStorage.removeItem("tasks"),window.location.reload()})),b()})()})();