/**
 * Register the service worker
 */
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	// .register('../sw.js') // load from pwa
	.register('pwa/service-worker.js')
		.then(function () { console.log('Service Worker Registered'); });
}
