/* eslint-disable no-console */

if (workbox) {
    console.log(`Yay! Workbox is loaded`);
    workbox.setConfig({
        debug: false,
    });
    workbox.precaching.precacheAndRoute([]);
    workbox.routing.registerNavigationRoute('/index.html');
    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
        workbox.strategies.cacheFirst({
            cacheName: 'images',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
            ],
        })
    );
    workbox.routing.registerRoute(
        /\.(?:js|css|scss|json)$/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'static-resources',
        })
    );
    workbox.routing.registerRoute(
        new RegExp('https://newsapi.org/v2/everything?'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'My-awesome-cache-news-headline',
            cacheExpiration: {
                maxAgeSeconds: 60 * 30 //cache the news content for 30mn
            }
        })
    );
    workbox.routing.registerRoute(
        new RegExp('https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps'),
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'My-awesome-cache-news-headline',
            cacheExpiration: {
                maxAgeSeconds: 60 * 30 //cache the news content for 30mn
            }
        })
    );
} else {
    console.log(`Boo! Workbox didn't load`);
}
