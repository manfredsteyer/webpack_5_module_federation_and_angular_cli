const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

exports.default = {
    config: function(config) {

        config.output.publicPath = 'http://localhost:5000/';
        
        config.plugins.unshift(new ModuleFederationPlugin({
            name: "shell",
            remotes: {
              mfe1: "mfe1@http://localhost:3000/remoteEntry.js" 
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        }));

      

        return config;
    }
}