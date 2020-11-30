# Ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## NOTE:

'src\app\address-form\address-form.component.ts' has the URL to which the submit button posts the addresses and mostly does not require to be changed.

paste the below code into the index.js of backend(node-api)
```javascript
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
```

Image:
![alt text](https://raw.githubusercontent.com/harsha-nemani/prept-ui-test/master/src/assets/sample.JPG)
