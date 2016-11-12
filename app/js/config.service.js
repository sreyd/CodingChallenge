System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config;
    return {
        setters:[],
        execute: function() {
            config = (function () {
                function config() {
                }
                config.TITLE = "My App";
                return config;
            }());
            exports_1("config", config);
        }
    }
});
//# sourceMappingURL=config.service.js.map