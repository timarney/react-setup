#TL;DR

Do at least this

```
new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
```
That's a 65 KB win -> because by default, React is in development mode.

Facebook also recommends UglifyJS to completely remove the extra code present in development mode.

https://twitter.com/timarney/status/715614327911395328

#Note
Check the Webpack 2 version here https://github.com/timarney/react-setup/tree/webpack2

#What is this?
I started this as an experiment to see **how big** React is for a production build via Webpack (without gzip etc...)

React and React Dom are split out into a **vendors.js** file (standalone).


*Note this isn't a React Starter boilerplate.*  It's an experiment to test Webpack settings.


#Tips / Ideas?
Feel free to send a pull request or add to the dicussion using Issues i.e -> https://github.com/timarney/react-setup/issues/1

#Production Output
```
+-- dist
|   +-- bundle.js (495 bytes)
|   +-- index.html (219 bytes)
|   +-- vendors.js (140 kB) 👍
```

#Build
npm run build (output to production dir)

#What about GZIP sizes?
Checkout http://minime.stephan-brumme.com/react/15.0.2
