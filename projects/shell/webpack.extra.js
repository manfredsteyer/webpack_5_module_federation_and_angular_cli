const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug in the
    // cli/webpack5 integration
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        mfe1: "mfe1@http://localhost:3000/remoteEntry.js" 
      },
      // Alternative:
      // shared: ["@angular/core", "@angular/common", "@angular/router"]
      shared: {
        "@angular/core": {  }, 
        "@angular/common": { }, 
        "@angular/router": {  },
        "projects/auth-lib": { import: 'auth-lib', shareKey: 'auth-lib', packageName: 'auth-lib', requiredVersion: '0.0.1' }
      }    
    })
  ],
};


