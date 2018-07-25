# js-loadscript
Async load scipt into your app using Promise

```js

import loadScript from 'js-loadscript';

loadScript('https://myscript.js')
	.then(() => {
		// loaded
	})
	.catch((e) => {
		// error
	});

```
