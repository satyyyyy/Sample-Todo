define("app",function(){!function(){"use strict"}(window)});define("model.todo",function(e,t,o){var n="todos-riverjs";e.get=function(){return JSON.parse(localStorage.getItem(n)||"[]")};e.put=function(){localStorage.setItem(n,JSON.stringify(todos))}});define("river.grammer.checkstatus",function(e,t,o){e=o.exports=function(e,t,o,n){var c=o.querySelector("[type=checkbox]");if(n.status==="active"){o.className="";c.checked=false}else{o.className="completed";c.checked=true}c.onclick=function(e){n.status=o.className?"active":"completed";o.className=o.className?"":"completed"}}});define("controller.todo",function(e,t,o){var n=t("model.todo"),c=e.todos=n.get();e.newtodo="";e.add=function(t){if(t.keyCode==13&&e.newtodo){c.unshift({desc:e.newtodo,status:"active"});e.newtodo=""}};e.remove=function(e){var t=c.indexOf(e);c.splice(t,1)};e.getAll=function(){};e.getActive=function(){};e.getCompleted=function(){}});define("river.grammer.filter",function(exports,require,module){exports=module.exports=function(str,scope,element){var eom=this.eom;window.onhashchange=function(){var menu=window.location.hash.replace(/\#\//,"")||"all";var domlist=element.querySelectorAll("a");clear(domlist);logic[menu].call(domlist);console.log(scope);console.log(eom)};function clear(domlist){for(var i=0,len=domlist.length;i<len;i++){domlist[i].className=""}}var logic={};logic.all=function(){this[0].className="selected"};logic.active=function(){this[1].className="selected"};logic.completed=function(){this[2].className="selected"}}});//# sourceMappingURL=app.map