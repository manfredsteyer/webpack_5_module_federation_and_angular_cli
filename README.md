# MfDemo

- Starting:
  - npm run start:shell
  - npm run start:mfe1

- Webpack-Configs:
  - projects\shell\webpack.extra.js
  - projects\mfe1\webpack.extra.js
  - These are partial webpack configs
  - They are merged into the webpack configs the CLI generates

- Testing:
  - Start both
  - In the shell, click the 2nd menu item
  - The remote mfe1 is loaded
  - If the auth-lib is shared, it should display ``Hello from Shell!``