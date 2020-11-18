const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

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
        "auth-lib": { 
          import: path.resolve(__dirname, "../../projects/auth-lib/src/public-api.ts"),
          version: require("../../projects/auth-lib/package.json").version,
          requiredVersion: "^0.0.1"
        }
      }    
    })
  ],
};


