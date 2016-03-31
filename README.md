#React for Production / Webpack (Testing)
Baseline testing to optimize .js files for 'Production' use.  

Note this isn't a React Starter boilerplate.  It's an experiment to test Webpack output pre-compression (gzip etc...)

#Tips / Ideas?
Feel free to send a pull request or add to the dicussion using Issues i.e -> https://github.com/timarney/react-setup/issues/1

#Production Output
```
+-- dist
|   +-- bundle.js (546 bytes)
|   +-- index.html (219 bytes)
|   +-- vendors.js (189 KB) 👎
```

#Build
npm run build (output to production dir)

#What about GZIP sizes?
Checkout http://minime.stephan-brumme.com/react/0.14.8/


