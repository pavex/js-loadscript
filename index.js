export default function loadScript(src, opt_async) {
	return new Promise((resolve, reject) => {
		try {
			let el = document.createElement('script');
			el.type = 'text/javascript';
			el.async = opt_async ? opt_async : true;
			el.src = src;
			el.onload = () => {
				resolve();
			};
			el.onerror = (e) => {
				throw e;
			};
			document.head.appendChild(el);
		}
		catch (e) {
			reject(e);
		}
	});
};