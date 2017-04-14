YUI.add("loader-app",function(Y){Y.applyConfig({groups:{app:Y.merge(((Y.config.groups&&Y.config.groups.app)||{}),{modules:{"mojito":{"requires":[],"path":"/static/mojito.js","name":"mojito","type":"js","defaults":{"requires":[],"supersedes":null,"optional":null},"expanded_map":{}},"mojito-hooks":{"requires":["mojito"],"path":"/static/mojito-hooks.js","name":"mojito-hooks","type":"js","defaults":{"requires":["mojito"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true}},"mojito-util":{"requires":["array-extras","json-stringify","mojito"],"path":"/static/mojito-util.js","name":"mojito-util","type":"js","defaults":{"requires":["array-extras","json-stringify","mojito"],"supersedes":null,"optional":null},"expanded_map":{"array-extras":true,"yui-base":true,"json-stringify":true,"mojito":true}},"mojito-view-renderer":{"requires":["mojito","mojito-hooks"],"path":"/static/mojito-view-renderer.js","name":"mojito-view-renderer","type":"js","defaults":{"requires":["mojito","mojito-hooks"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"mojito-hooks":true}},"mojito-action-context":{"requires":["mojito","json-stringify","event-custom-base","mojito-view-renderer","mojito-util","mojito-hooks"],"path":"/static/mojito-action-context.js","name":"mojito-action-context","type":"js","defaults":{"requires":["mojito","json-stringify","event-custom-base","mojito-view-renderer","mojito-util","mojito-hooks"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"json-stringify":true,"yui-base":true,"event-custom-base":true,"oop":true,"mojito-view-renderer":true,"mojito-hooks":true,"mojito-util":true,"array-extras":true}},"mojito-dispatcher":{"requires":["mojito-action-context","mojito-util","mojito-hooks"],"path":"/static/mojito-dispatcher.js","name":"mojito-dispatcher","type":"js","defaults":{"requires":["mojito-action-context","mojito-util","mojito-hooks"],"supersedes":null,"optional":null},"expanded_map":{"mojito-action-context":true,"mojito":true,"json-stringify":true,"yui-base":true,"event-custom-base":true,"oop":true,"mojito-view-renderer":true,"mojito-hooks":true,"mojito-util":true,"array-extras":true}},"mojito-mojit-proxy":{"requires":["mojito","mojito-util","querystring-parse","querystring-stringify"],"path":"/static/mojito-mojit-proxy.js","name":"mojito-mojit-proxy","type":"js","defaults":{"requires":["mojito","mojito-util","querystring"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"mojito-util":true,"array-extras":true,"yui-base":true,"json-stringify":true,"querystring-parse":true,"querystring-stringify":true}},"mojito-output-handler":{"requires":["mojito","json-parse","node-base","node-event-delegate","node-pluginhost","node-screen","node-style"],"path":"/static/mojito-output-handler.js","name":"mojito-output-handler","type":"js","defaults":{"requires":["mojito","json-parse","node"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"json-parse":true,"yui-base":true,"node-base":true,"event-base":true,"event-custom-base":true,"oop":true,"node-core":true,"dom-core":true,"features":true,"selector":true,"selector-native":true,"dom-base":true,"node-event-delegate":true,"event-delegate":true,"node-pluginhost":true,"pluginhost-base":true,"pluginhost-config":true,"node-screen":true,"dom-screen":true,"dom-style":true,"dom-style-ie":true,"node-style":true}},"mojito-route-maker":{"requires":["querystring-stringify-simple","querystring-parse","mojito-util"],"path":"/static/mojito-route-maker.js","name":"mojito-route-maker","type":"js","defaults":{"requires":["querystring-stringify-simple","querystring-parse","mojito-util"],"supersedes":null,"optional":null},"expanded_map":{"querystring-stringify-simple":true,"yui-base":true,"querystring-parse":true,"array-extras":true,"mojito-util":true,"json-stringify":true,"mojito":true}},"mojito-client-store":{"requires":["mojito-util","querystring-stringify-simple"],"path":"/static/mojito-client-store.js","name":"mojito-client-store","type":"js","defaults":{"requires":["mojito-util","querystring-stringify-simple"],"supersedes":null,"optional":null},"expanded_map":{"mojito-util":true,"array-extras":true,"yui-base":true,"json-stringify":true,"mojito":true,"querystring-stringify-simple":true}},"mojito-tunnel-client":{"requires":["mojito","io-base","json-stringify","json-parse"],"path":"/static/mojito-tunnel-client.js","name":"mojito-tunnel-client","type":"js","defaults":{"requires":["mojito","io-base","json-stringify","json-parse"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"io-base":true,"event-custom-base":true,"oop":true,"yui-base":true,"querystring-stringify-simple":true,"io-nodejs":true,"json-stringify":true,"json-parse":true}},"mojito-client":{"requires":["io-base","event-delegate","node-base","querystring-stringify-simple","mojito","mojito-dispatcher","mojito-route-maker","mojito-client-store","mojito-mojit-proxy","mojito-tunnel-client","mojito-output-handler","mojito-util","mojito-hooks"],"path":"/static/mojito-client.js","name":"mojito-client","type":"js","defaults":{"requires":["io-base","event-delegate","node-base","querystring-stringify-simple","mojito","mojito-dispatcher","mojito-route-maker","mojito-client-store","mojito-mojit-proxy","mojito-tunnel-client","mojito-output-handler","mojito-util","mojito-hooks"],"supersedes":null,"optional":null},"expanded_map":{"io-base":true,"event-custom-base":true,"oop":true,"yui-base":true,"querystring-stringify-simple":true,"io-nodejs":true,"event-delegate":true,"node-base":true,"event-base":true,"node-core":true,"dom-core":true,"features":true,"selector":true,"selector-native":true,"dom-base":true,"mojito":true,"mojito-dispatcher":true,"mojito-action-context":true,"json-stringify":true,"mojito-view-renderer":true,"mojito-hooks":true,"mojito-util":true,"array-extras":true,"mojito-route-maker":true,"querystring-parse":true,"mojito-client-store":true,"mojito-mojit-proxy":true,"querystring-stringify":true,"mojito-tunnel-client":true,"json-parse":true,"mojito-output-handler":true,"node-event-delegate":true,"node-pluginhost":true,"pluginhost-base":true,"pluginhost-config":true,"node-screen":true,"dom-screen":true,"dom-style":true,"dom-style-ie":true,"node-style":true}},"TodoMojitBinderIndex":{"requires":["mojito-client","node-base","node-event-delegate","node-pluginhost","node-screen","node-style","json-parse","json-stringify"],"path":"/static/TodoMojitBinderIndex.js","name":"TodoMojitBinderIndex","type":"js","defaults":{"requires":["mojito-client","node","json"],"supersedes":null,"optional":null},"expanded_map":{"mojito-client":true,"io-base":true,"event-custom-base":true,"oop":true,"yui-base":true,"querystring-stringify-simple":true,"io-nodejs":true,"event-delegate":true,"node-base":true,"event-base":true,"node-core":true,"dom-core":true,"features":true,"selector":true,"selector-native":true,"dom-base":true,"mojito":true,"mojito-dispatcher":true,"mojito-action-context":true,"json-stringify":true,"mojito-view-renderer":true,"mojito-hooks":true,"mojito-util":true,"array-extras":true,"mojito-route-maker":true,"querystring-parse":true,"mojito-client-store":true,"mojito-mojit-proxy":true,"querystring-stringify":true,"mojito-tunnel-client":true,"json-parse":true,"mojito-output-handler":true,"node-event-delegate":true,"node-pluginhost":true,"pluginhost-base":true,"pluginhost-config":true,"node-screen":true,"dom-screen":true,"dom-style":true,"dom-style-ie":true,"node-style":true}},"TodoMojitModelTodo":{"requires":["json-parse","json-stringify","cache-offline"],"path":"/static/TodoMojitModelTodo.js","name":"TodoMojitModelTodo","type":"js","defaults":{"requires":["json","cache-offline"],"supersedes":null,"optional":null},"expanded_map":{"json-parse":true,"yui-base":true,"json-stringify":true,"cache-offline":true,"cache-base":true,"base-base":true,"base-core":true,"attribute-core":true,"oop":true,"attribute-base":true,"attribute-events":true,"event-custom-base":true,"event-custom-complex":true,"attribute-extras":true,"base-pluginhost":true,"pluginhost-base":true,"pluginhost-config":true,"base-build":true}},"mojito-assets-addon":{"requires":["mojito","mojito-util"],"path":"/static/mojito-assets-addon.js","name":"mojito-assets-addon","type":"js","defaults":{"requires":["mojito","mojito-util"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"mojito-util":true,"array-extras":true,"yui-base":true,"json-stringify":true}},"mojito-models-addon":{"requires":["mojito","mojito-util"],"path":"/static/mojito-models-addon.js","name":"mojito-models-addon","type":"js","defaults":{"requires":["mojito","mojito-util"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"mojito-util":true,"array-extras":true,"yui-base":true,"json-stringify":true}},"mojito-params-addon":{"requires":["mojito"],"path":"/static/mojito-params-addon.js","name":"mojito-params-addon","type":"js","defaults":{"requires":["mojito"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true}},"TodoMojit":{"requires":["mojito","TodoMojitModelTodo","mojito-models-addon","json-parse","json-stringify","mojito-assets-addon","mojito-params-addon"],"path":"/static/TodoMojit.js","name":"TodoMojit","type":"js","defaults":{"requires":["mojito","TodoMojitModelTodo","mojito-models-addon","json","mojito-assets-addon","mojito-params-addon"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"TodoMojitModelTodo":true,"json-parse":true,"yui-base":true,"json-stringify":true,"cache-offline":true,"cache-base":true,"base-base":true,"base-core":true,"attribute-core":true,"oop":true,"attribute-base":true,"attribute-events":true,"event-custom-base":true,"event-custom-complex":true,"attribute-extras":true,"base-pluginhost":true,"pluginhost-base":true,"pluginhost-config":true,"base-build":true,"mojito-models-addon":true,"mojito-util":true,"array-extras":true,"mojito-assets-addon":true,"mojito-params-addon":true}},"LazyLoadBinderIndex":{"requires":["mojito-client","node-base","node-event-delegate","node-pluginhost","node-screen","node-style","json-parse","json-stringify"],"path":"/static/LazyLoadBinderIndex.js","name":"LazyLoadBinderIndex","type":"js","defaults":{"requires":["mojito-client","node","json"],"supersedes":null,"optional":null},"expanded_map":{"mojito-client":true,"io-base":true,"event-custom-base":true,"oop":true,"yui-base":true,"querystring-stringify-simple":true,"io-nodejs":true,"event-delegate":true,"node-base":true,"event-base":true,"node-core":true,"dom-core":true,"features":true,"selector":true,"selector-native":true,"dom-base":true,"mojito":true,"mojito-dispatcher":true,"mojito-action-context":true,"json-stringify":true,"mojito-view-renderer":true,"mojito-hooks":true,"mojito-util":true,"array-extras":true,"mojito-route-maker":true,"querystring-parse":true,"mojito-client-store":true,"mojito-mojit-proxy":true,"querystring-stringify":true,"mojito-tunnel-client":true,"json-parse":true,"mojito-output-handler":true,"node-event-delegate":true,"node-pluginhost":true,"pluginhost-base":true,"pluginhost-config":true,"node-screen":true,"dom-screen":true,"dom-style":true,"dom-style-ie":true,"node-style":true}},"mojito-composite-addon":{"requires":["mojito","mojito-util","mojito-hooks","mojito-assets-addon","mojito-params-addon"],"path":"/static/mojito-composite-addon.js","name":"mojito-composite-addon","type":"js","defaults":{"requires":["mojito","mojito-util","mojito-hooks","mojito-assets-addon","mojito-params-addon"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"mojito-util":true,"array-extras":true,"yui-base":true,"json-stringify":true,"mojito-hooks":true,"mojito-assets-addon":true,"mojito-params-addon":true}},"LazyLoad":{"requires":["mojito","mojito-composite-addon","mojito-params-addon","json-parse","json-stringify"],"path":"/static/LazyLoad.js","name":"LazyLoad","type":"js","defaults":{"requires":["mojito","mojito-composite-addon","mojito-params-addon","json"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"mojito-composite-addon":true,"mojito-util":true,"array-extras":true,"yui-base":true,"json-stringify":true,"mojito-hooks":true,"mojito-assets-addon":true,"mojito-params-addon":true,"json-parse":true}},"mojito-meta-addon":{"requires":["mojito-util"],"path":"/static/mojito-meta-addon.js","name":"mojito-meta-addon","type":"js","defaults":{"requires":["mojito-util"],"supersedes":null,"optional":null},"expanded_map":{"mojito-util":true,"array-extras":true,"yui-base":true,"json-stringify":true,"mojito":true}},"mojito-analytics-addon":{"requires":["mojito","mojito-util","mojito-meta-addon"],"path":"/static/mojito-analytics-addon.js","name":"mojito-analytics-addon","type":"js","defaults":{"requires":["mojito","mojito-util","mojito-meta-addon"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true,"mojito-util":true,"array-extras":true,"yui-base":true,"json-stringify":true,"mojito-meta-addon":true}},"mojito-config-addon":{"requires":["mojito"],"path":"/static/mojito-config-addon.js","name":"mojito-config-addon","type":"js","defaults":{"requires":["mojito"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true}},"mojito-cookie-addon":{"requires":["cookie","mojito","mojito-meta-addon"],"path":"/static/mojito-cookie-addon.js","name":"mojito-cookie-addon","type":"js","defaults":{"requires":["cookie","mojito","mojito-meta-addon"],"supersedes":null,"optional":null},"expanded_map":{"cookie":true,"yui-base":true,"mojito":true,"mojito-meta-addon":true,"mojito-util":true,"array-extras":true,"json-stringify":true}},"mojito-intl-addon":{"requires":["intl","datatype-date-parse","datatype-date-format","datatype-date-math","mojito","mojito-util","mojito-config-addon"],"path":"/static/mojito-intl-addon.js","name":"mojito-intl-addon","type":"js","defaults":{"requires":["intl","datatype-date","mojito","mojito-util","mojito-config-addon"],"supersedes":null,"optional":null},"expanded_map":{"intl":true,"intl-base":true,"yui-base":true,"event-custom-base":true,"oop":true,"event-custom-complex":true,"datatype-date-parse":true,"datatype-date-format":true,"lang/datatype-date-format_en-US":true,"datatype-date-math":true,"mojito":true,"mojito-util":true,"array-extras":true,"json-stringify":true,"mojito-config-addon":true}},"mojito-partial-addon":{"requires":["mojito-util","mojito-params-addon","mojito-view-renderer"],"path":"/static/mojito-partial-addon.js","name":"mojito-partial-addon","type":"js","defaults":{"requires":["mojito-util","mojito-params-addon","mojito-view-renderer"],"supersedes":null,"optional":null},"expanded_map":{"mojito-util":true,"array-extras":true,"yui-base":true,"json-stringify":true,"mojito":true,"mojito-params-addon":true,"mojito-view-renderer":true,"mojito-hooks":true}},"mojito-url-addon":{"requires":["mojito-config-addon","mojito-route-maker","querystring-parse-simple","mojito-util"],"path":"/static/mojito-url-addon.js","name":"mojito-url-addon","type":"js","defaults":{"requires":["mojito-config-addon","mojito-route-maker","querystring-parse-simple","mojito-util"],"supersedes":null,"optional":null},"expanded_map":{"mojito-config-addon":true,"mojito":true,"mojito-route-maker":true,"querystring-stringify-simple":true,"yui-base":true,"querystring-parse":true,"array-extras":true,"mojito-util":true,"json-stringify":true,"querystring-parse-simple":true}},"mojito-hb":{"requires":["io-base","parallel","handlebars-compiler"],"path":"/static/mojito-hb.js","name":"mojito-hb","type":"js","defaults":{"requires":["io-base","parallel","handlebars"],"supersedes":null,"optional":null},"expanded_map":{"io-base":true,"event-custom-base":true,"oop":true,"yui-base":true,"querystring-stringify-simple":true,"io-nodejs":true,"parallel":true,"handlebars-compiler":true,"handlebars-base":true,"escape":true}},"mojito-mu":{"requires":["mojito-hb"],"path":"/static/mojito-mu.js","name":"mojito-mu","type":"js","defaults":{"requires":["mojito-hb"],"supersedes":null,"optional":null},"expanded_map":{"mojito-hb":true,"io-base":true,"event-custom-base":true,"oop":true,"yui-base":true,"querystring-stringify-simple":true,"io-nodejs":true,"parallel":true,"handlebars-compiler":true,"handlebars-base":true,"escape":true}},"mojito-test":{"requires":["mojito"],"path":"/static/mojito-test.js","name":"mojito-test","type":"js","defaults":{"requires":["mojito"],"supersedes":null,"optional":null},"expanded_map":{"mojito":true}},"mojito-perf":{"requires":["mojito-hooks"],"path":"/static/mojito-perf.js","name":"mojito-perf","type":"js","defaults":{"requires":["mojito-hooks"],"supersedes":null,"optional":null},"expanded_map":{"mojito-hooks":true,"mojito":true}},"mojito-rest-lib":{"requires":["io-base","querystring-stringify-simple","mojito"],"path":"/static/mojito-rest-lib.js","name":"mojito-rest-lib","type":"js","defaults":{"requires":["io-base","querystring-stringify-simple","mojito"],"supersedes":null,"optional":null},"expanded_map":{"io-base":true,"event-custom-base":true,"oop":true,"yui-base":true,"querystring-stringify-simple":true,"io-nodejs":true,"mojito":true}},"loader-app":{"requires":[],"path":"/static/loader-app.js","name":"loader-app","type":"js","defaults":{"requires":[],"supersedes":null,"optional":null},"expanded_map":{}},"loader-app-base":{"requires":[],"path":"/static/loader-app-base.js","name":"loader-app-base","type":"js","defaults":{"requires":[],"supersedes":null,"optional":null},"expanded_map":{}},"loader-app-resolved":{"requires":[],"path":"/static/loader-app-resolved.js","name":"loader-app-resolved","type":"js","defaults":{"requires":[],"supersedes":null,"optional":null},"expanded_map":{}},"loader-yui3-base":{"requires":[],"path":"/static/loader-yui3-base.js","name":"loader-yui3-base","type":"js","defaults":{"requires":[],"supersedes":null,"optional":null},"expanded_map":{}},"loader-yui3-resolved":{"requires":[],"path":"/static/loader-yui3-resolved.js","name":"loader-yui3-resolved","type":"js","defaults":{"requires":[],"supersedes":null,"optional":null},"expanded_map":{}}}})}});},"",{requires:["loader-base"]});