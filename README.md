# Starter project for Node + TypeScript + Express

This is a straightforward starter project for quickly building Node.js APIs with TypeScript support. It uses ESBuild as bundler for fast builds and also supports hot reload on source file changes.

## Get started

1. Clone repository into your machine

   ```
   git clone git@github.com:mpisacic/node-typescript-starter.git <folder_name>
   ```

2. Install dependencies

   ```
   cd <folder_name> && npm install
   ```

3. Run dev environment

   ```
   npm run dev
   ```

   This will start a server on port 4000 and monitor file changes. Whenever a file in `src` changes, the app will rebuild and restart.

4. Start hacking! 👨‍💻

## Building app for deployment

If you want to build the app to ship it to production, use command:

```
npm run build
```

This command will build the app and place the files in the `dist` folder.
