/*
 Emily

 The MIT License (MIT)

 Copyright (c) 2012 Olivier Scherrer <pode.fr@gmail.com>
*/
define("CouchDBStore",["Store","StateMachine","Tools","Promise"],function(b,d,h,e){function c(){var c=null,a={},f=new e,b={getView:function(){a.query=a.query||{};a.query.update_seq=true;c.request("CouchDB",{method:"GET",path:"/"+a.database+"/_design/"+a.design+"/_view/"+a.view,query:a.query},function(f){var b=JSON.parse(f);if(b.rows)this.reset(b.rows),i.event("subscribeToViewChanges",b.update_seq);else throw Error("CouchDBStore ["+a.database+", "+a.design+", "+a.view+"].sync() failed: "+f);},this)},
getDocument:function(){c.request("CouchDB",{method:"GET",path:"/"+a.database+"/"+a.document,query:a.query},function(a){a=JSON.parse(a);a._id?(this.reset(a),i.event("subscribeToDocumentChanges")):f.reject(this)},this)},getBulkDocuments:function(){a.query=a.query||{};a.query.include_docs=true;a.query.update_seq=true;c.request("CouchDB",{method:"POST",path:"/"+a.database+"/_all_docs",query:a.query,headers:{"Content-Type":"application/json"},data:JSON.stringify({keys:a.bulkDoc})},function(f){var b=JSON.parse(f);
if(b.rows)this.reset(b.rows),i.event("subscribeToBulkChanges",b.update_seq);else throw Error("CouchDBStore ["+a.database+", "+JSON.stringify(a.bulkDoc)+"].sync() failed: "+f);},this)},createDocument:function(f){c.request("CouchDB",{method:"PUT",path:"/"+a.database+"/"+a.document,headers:{"Content-Type":"application/json"},data:this.toJSON()},function(a){a=JSON.parse(a);a.ok?(f.resolve(a),i.event("subscribeToDocumentChanges")):f.reject(a)})},subscribeToViewChanges:function(f){h.mixin({feed:"continuous",
heartbeat:2E4,since:f},a.query);this.stopListening=c.listen("CouchDB",{path:"/"+a.database+"/_changes",query:a.query},function(a){if(a=="\n")return false;var a=JSON.parse(a),f;f=a.deleted?"delete":a.changes[0].rev.search("1-")==0?"add":"change";i.event(f,a.id)},this)},subscribeToDocumentChanges:function(){this.stopListening=c.listen("CouchDB",{path:"/"+a.database+"/_changes",query:{feed:"continuous",heartbeat:2E4}},function(f){if(f=="\n")return false;f=JSON.parse(f);f.id==a.document&&f.changes.pop().rev!=
this.get("_rev")&&(f.deleted?i.event("deleteDoc"):i.event("updateDoc"))},this)},subscribeToBulkChanges:function(f){h.mixin({feed:"continuous",heartbeat:2E4,since:f},a.query);this.stopListening=c.listen("CouchDB",{path:"/"+a.database+"/_changes",query:a.query},function(a){if(a=="\n")return false;a=JSON.parse(a);i.event(a.deleted?"delete":"bulkChange",a.id)},this)},updateDocInStore:function(f){c.request("CouchDB",{method:"GET",path:"/"+a.database+"/_design/"+a.design+"/_view/"+a.view,query:a.query},
function(a){JSON.parse(a).rows.some(function(a,b){a.id==f&&this.set(b,a)},this)},this)},updateBulkDocInStore:function(f){c.request("CouchDB",{method:"POST",path:"/"+a.database+"/_all_docs",query:a.query},function(a){JSON.parse(a).rows.some(function(a,b){a.id==f&&this.set(b,a)},this)})},removeDocInStore:function(a){this.loop(function(f,b){f.id==a&&this.del(b)},this)},addDocInStore:function(f){c.request("CouchDB",{method:"GET",path:"/"+a.database+"/_design/"+a.design+"/_view/"+a.view,query:a.query},
function(a){JSON.parse(a).rows.some(function(a,b){a.id==f&&this.alter("splice",b,0,a)},this)},this)},updateDoc:function(){c.request("CouchDB",{method:"GET",path:"/"+a.database+"/"+a.document},function(a){this.reset(JSON.parse(a))},this)},deleteDoc:function(){this.reset({})},updateDatabase:function(f){c.request("CouchDB",{method:"PUT",path:"/"+a.database+"/"+a.document,headers:{"Content-Type":"application/json"},data:this.toJSON()},function(a){a=JSON.parse(a);a.ok?f.resolve(a):f.reject(a)})},updateDatabaseWithBulkDoc:function(f){var b=
[];this.loop(function(a){b.push(a.doc)});c.request("CouchDB",{method:"POST",path:"/"+a.database+"/_bulk_docs",headers:{"Content-Type":"application/json"},data:JSON.stringify({docs:b})},function(a){f.resolve(JSON.parse(a))})},removeFromDatabase:function(){c.request("CouchDB",{method:"DELETE",path:"/"+a.database+"/"+a.document,query:{rev:this.get("_rev")}})},resolve:function(){f.resolve(this)},unsync:function(){this.stopListening();delete this.stopListening}},i=new d("Unsynched",{Unsynched:[["getView",
b.getView,this,"Synched"],["getDocument",b.getDocument,this,"Synched"],["getBulkDocuments",b.getBulkDocuments,this,"Synched"]],Synched:[["updateDatabase",b.createDocument,this],["subscribeToViewChanges",b.subscribeToViewChanges,this,"Listening"],["subscribeToDocumentChanges",b.subscribeToDocumentChanges,this,"Listening"],["subscribeToBulkChanges",b.subscribeToBulkChanges,this,"Listening"],["unsync",function(){},"Unsynched"]],Listening:[["entry",b.resolve,this],["change",b.updateDocInStore,this],["bulkChange",
b.updateBulkDocInStore,this],["delete",b.removeDocInStore,this],["add",b.addDocInStore,this],["updateDoc",b.updateDoc,this],["deleteDoc",b.deleteDoc,this],["updateDatabase",b.updateDatabase,this],["updateDatabaseWithBulkDoc",b.updateDatabaseWithBulkDoc,this],["removeFromDatabase",b.removeFromDatabase,this],["unsync",b.unsync,this,"Unsynched"]]});this.sync=function(a,b,c,e){if(typeof a=="string"&&typeof b=="string"&&typeof c=="string")return this.setSyncInfo(a,b,c,e),i.event("getView"),f;else if(typeof a==
"string"&&typeof b=="string"&&typeof c!="string")return this.setSyncInfo(a,b,c),i.event("getDocument"),f;else if(typeof a=="string"&&b instanceof Array)return this.setSyncInfo(a,b,c),i.event("getBulkDocuments"),f;return false};this.setSyncInfo=function(f,b,c,e){if(typeof f=="string"&&typeof b=="string"&&typeof c=="string")return a.database=f,a.design=b,a.view=c,a.query=e,true;else if(typeof f=="string"&&typeof b=="string"&&typeof c!="string")return a.database=f,a.document=b,a.query=c,true;else if(typeof f==
"string"&&b instanceof Array)return a.database=f,a.bulkDoc=b,a.query=c,true;return false};this.getSyncInfo=function(){return a};this.unsync=function(){return i.event("unsync")};this.upload=function(){var f=new e;if(a.document)return i.event("updateDatabase",f),f;else if(a.bulkDoc)return i.event("updateDatabaseWithBulkDoc",f),f;return false};this.remove=function(){return a.document?i.event("removeFromDatabase"):false};this.setTransport=function(a){return a&&typeof a.listen=="function"&&typeof a.request==
"function"?(c=a,true):false};this.getStateMachine=function(){return i};this.getTransport=function(){return c};this.actions=b}return function(){c.prototype=new b;return new c}});
define("Observable",["Tools"],function(b){return function(){var d={};this.watch=function(b,e,c){if(typeof e=="function"){var g=d[b]=d[b]||[];observer=[e,c];g.push(observer);return[b,g.indexOf(observer)]}else return false};this.unwatch=function(b){var e=b[0],b=b[1];return d[e]&&d[e][b]?(delete d[e][b],d[e].some(function(b){return!!b})||delete d[e],true):false};this.notify=function(h){var e=d[h],c;if(e){for(c=e.length;c--;)e[c]&&e[c][0].apply(e[c][1]||null,b.toArray(arguments).slice(1));return true}else return false};
this.hasObserver=function(b){return!(!b||!d[b[0]]||!d[b[0]][b[1]])};this.hasTopic=function(b){return!!d[b]};this.unwatchAll=function(b){d[b]?delete d[b]:d={};return true}}});
define("Promise",["Observable","StateMachine"],function(b,d){return function(){var h,e,c=new d("Unresolved",{Unresolved:[["resolve",function(a){h=a;g.notify("success",a)},"Resolved"],["reject",function(a){e=a;g.notify("fail",a)},"Rejected"],["addSuccess",function(a,b){g.watch("success",a,b)}],["addFail",function(a,b){g.watch("fail",a,b)}]],Resolved:[["addSuccess",function(a,b){a.call(b,h)}]],Rejected:[["addFail",function(a,b){a.call(b,e)}]]}),g=new b;this.resolve=function(a){return c.event("resolve",
a)};this.reject=function(a){return c.event("reject",a)};this.then=function(a,b,e,d){a instanceof Function&&(b instanceof Function?c.event("addSuccess",a):c.event("addSuccess",a,b));b instanceof Function&&c.event("addFail",b,e);e instanceof Function&&c.event("addFail",e,d);return this};this.getObservable=function(){return g};this.getStateMachine=function(){return c}}});
define("StateMachine",["Tools"],function(b){function d(){var d={};this.add=function(b,c,g,a){var f=[];if(d[b])return false;return typeof b=="string"&&typeof c=="function"?(f[0]=c,typeof g=="object"&&(f[1]=g),typeof g=="string"&&(f[2]=g),typeof a=="string"&&(f[2]=a),d[b]=f,true):false};this.has=function(b){return!!d[b]};this.get=function(b){return d[b]||false};this.event=function c(c){var g=d[c];return g?(g[0].apply(g[1],b.toArray(arguments).slice(1)),g[2]):false}}return function(h,e){var c={},g="";
this.init=function(a){return c[a]?(g=a,true):false};this.add=function(a){return c[a]?false:c[a]=new d};this.get=function(a){return c[a]};this.getCurrent=function(){return g};this.event=function(a){var f;f=c[g].event.apply(c[g].event,b.toArray(arguments));return f===false?false:(f&&(c[g].event("exit"),g=f,c[g].event("entry")),true)};b.loop(e,function(a,b){var c=this.add(b);a.forEach(function(a){c.add.apply(null,a)})},this);this.init(h)}});
define("Store",["Observable","Tools"],function(b,d){return function(h){var e=d.clone(h)||{},c=new b,g=new b,a=function(a){var b=d.objectsDiffs(a,e);["updated","deleted","added"].forEach(function(a){b[a].forEach(function(b){c.notify(a,b,e[b]);g.notify(b,e[b],a)})})};this.getNbItems=function(){return e instanceof Array?e.length:d.count(e)};this.get=function(a){return e[a]};this.has=function(a){return e.hasOwnProperty(a)};this.set=function(a,b){var d;return typeof a!="undefined"?(d=this.has(a),e[a]=
b,d=d?"updated":"added",c.notify(d,a,e[a]),g.notify(a,e[a],d),true):false};this.update=function(a,b,e){var h;return this.has(a)?(h=this.get(a),d.setNestedProperty(h,b,e),c.notify("updated",b,e),g.notify(a,h,"updated"),true):false};this.del=function(a){return this.has(a)?(this.alter("splice",a,1)||(delete e[a],c.notify("deleted",a),g.notify(a,e[a],"deleted")),true):false};this.delAll=function(a){return a instanceof Array?(a.sort(d.compareNumbers).reverse().forEach(this.del,this),true):false};this.alter=
function(b){var c,g;return e[b]?(g=d.clone(e),c=e[b].apply(e,Array.prototype.slice.call(arguments,1)),a(g),c):false};this.watch=function(a,b,e){return c.watch(a,b,e)};this.unwatch=function(a){return c.unwatch(a)};this.getStoreObservable=function(){return c};this.watchValue=function(a,b,c){return g.watch(a,b,c)};this.unwatchValue=function(a){return g.unwatch(a)};this.getValueObservable=function(){return g};this.loop=function(a,b){d.loop(e,a,b)};this.reset=function(b){if(b instanceof Object){var c=
d.clone(e);e=d.clone(b)||{};a(c);return true}else return false};this.toJSON=function(){return JSON.stringify(e)}}});
define("Tools",function(){return{getGlobal:function(){return function(){return this}.call(null)},mixin:function(b,d,h){this.loop(b,function(e,c){if(!d[c]||!h)d[c]=b[c]});return d},count:function(b){var d=0;this.loop(b,function(){d++});return d},compareObjects:function(b,d){return Object.getOwnPropertyNames(b).sort().join("")==Object.getOwnPropertyNames(d).sort().join("")},compareNumbers:function(b,d){return b>d?1:b<d?-1:0},toArray:function(b){return Array.prototype.slice.call(b)},loop:function(b,
d,h){var e,c;if(b instanceof Object&&typeof d=="function"){if(c=b.length)for(e=0;e<c;e++)d.call(h,b[e],e,b);else for(e in b)b.hasOwnProperty(e)&&d.call(h,b[e],e,b);return true}else return false},objectsDiffs:function(b,d){if(b instanceof Object&&d instanceof Object){var h=[],e=[],c=[],g=[];this.loop(d,function(a,c){typeof b[c]=="undefined"?g.push(c):a!==b[c]?e.push(c):a===b[c]&&h.push(c)});this.loop(b,function(a,b){typeof d[b]=="undefined"&&c.push(b)});return{updated:e,unchanged:h,added:g,deleted:c}}else return false},
jsonify:function(b){return b instanceof Object?JSON.parse(JSON.stringify(b)):false},clone:function(b){return b instanceof Array?b.slice(0):typeof b=="object"&&b!==null&&!(b instanceof RegExp)?this.mixin(b,{}):false},getNestedProperty:function(b,d){return b&&b instanceof Object?typeof d=="string"&&d!=""?d.split(".").reduce(function(b,e){return b&&b[e]},b):typeof d=="number"?b[d]:b:b},setNestedProperty:function(b,d,h){if(b&&b instanceof Object)if(typeof d=="string"&&d!=""){var e=d.split(".");return e.reduce(function(b,
d,a){b[d]=b[d]||{};e.length==a+1&&(b[d]=h);return b[d]},b)}else return typeof d=="number"?(b[d]=h,b[d]):b;else return b}}});
define("Transport",["Store","Tools"],function(b,d){return function(h){var e=null;this.setReqHandlers=function(c){return c instanceof b?(e=c,true):false};this.getReqHandlers=function(){return e};this.request=function(b,d,a,f){return e.has(b)&&typeof d=="object"?(e.get(b)(d,function(){a&&a.apply(f,arguments)}),true):false};this.listen=function(b,g,a,f){if(e.has(b)&&typeof g=="object"&&typeof g.path=="string"&&typeof a=="function"){var h=function(){a.apply(f,arguments)},i;d.mixin({keptAlive:true,method:"get"},
g);i=e.get(b)(g,h,h);return function(){i.func.call(i.scope)}}else return false};this.setReqHandlers(h)}});
