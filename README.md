# Description

## Run with

### Setup
```
git clone <repo-url> \
    && pushd vse-guard-ui \
    && npm install \
    && pushd vse-guard-ui \
    && npm install \
    && popd \
    && popd
```

### Start mocked backend
```
/vse-guard-ui/mocked-backend$ npm start
```

### Start frontend
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
/vse-guard-ui$ npm start

```

### `proxy` property in `package.json`
https://create-react-app.dev/docs/proxying-api-requests-in-development/

```"proxy": "http://localhost:5000",```

This way, when you ```fetch('/api/todos')``` in development, the development server will recognize that it’s not a static asset, and will proxy your request to ```http://localhost:4000/api/todos``` as a fallback. The development server will only attempt to send requests without text/html in its Accept header to the proxy.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Layout Ressources

https://www.joomlashack.com/blog/tutorials/center-and-align-items-in-css-grid/

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://css-tricks.com/filling-space-last-row-flexbox/

https://yoksel.github.io/flex-cheatsheet/

https://tobiasahlin.com/blog/common-flexbox-patterns/

## Font size responsive
https://stackoverflow.com/questions/14431411/pure-css-to-make-font-size-responsive-based-on-dynamic-amount-of-characters?rq=1

## Material UI

```
npm i @material-ui/core
```

```
import Button from "@material-ui/core/Button"

function MatButtonEx() {
    return (
        <div>
            <Button color="primary">
                Button
            </Button>
        </div>
    )
}
```