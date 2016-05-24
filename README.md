#TL;DR

Do at least this

```
new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
```
That's a 65 KB win -> because by default, React is in development mode.  The -p flag puts Webpack2 into the production env 👍

Facebook also recommends UglifyJS to completely remove the extra code present in development mode.

Note:
You can pass the webpack '-p' flag which is a shortcut for --optimize-minimize --define process.env.NODE_ENV=\"production\" and skip using

```
config.plugins.push(new webpack.DefinePlugin({
'process.env': {
  'NODE_ENV': '"production"'
}
}))
```

If you don't mind more noise coming from UglifyJs.

Setting in the webpack config gives better control.


#What is this?
I started this as an experiment to see **how big** React is for a production build via Webpack2 (without gzip etc...)

React and React Dom are split out into a **vendors.js** file (standalone).


*Note this isn't a React Starter boilerplate.*  It's an experiment to test Webpack2 settings.


#Tips / Ideas?
Feel free to send a pull request or add to the dicussion using Issues i.e -> https://github.com/timarney/react-setup/issues/1

#Production Output
```
+-- dist
|   +-- bundle.js (501 bytes)
|   +-- index.html (219 bytes)
|   +-- vendor.bundle.js (141 kB) 👍
```

#Build
npm run build (output to production dir)

#What about GZIP sizes?
Checkout http://minime.stephan-brumme.com/react/15.0.2
