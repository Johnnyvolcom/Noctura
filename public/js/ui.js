const time = document.querySelector('.clock-text');
const date = document.querySelector('.date-text');

if (date && time) {
    setInterval(function() {
        date.innerText = new Date().toLocaleDateString();
        time.innerText = new Date().toLocaleTimeString();
    }, 1000);
}

addEventListener('router:end', function() {
    const time = document.querySelector('.clock-text');
    const date = document.querySelector('.date-text');

    if (date && time) {
        setInterval(function() {
            date.innerText = new Date().toLocaleDateString();
            time.innerText = new Date().toLocaleTimeString();
        }, 1000);
    }
});

const proxy = document.querySelector('.header .switch-btn-container');

if (proxy) {
    try {
        var cookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith("astro-proxy"))
            .split("=")[1];
    } catch {
        var cookie = null;
    }

    proxy.querySelector('img').src = cookie ? document.querySelector("a[data-value='" + cookie + "'] img").src : document.querySelector("a[data-value='Ultraviolet'] img").src;
    proxy.querySelector('img').srcset = cookie ? document.querySelector("a[data-value='" + cookie + "'] img").srcset : document.querySelector("a[data-value='Ultraviolet'] img").srcset;
}

addEventListener('router:end', function() {
    const proxy = document.querySelector('.header .switch-btn-container');

    if (proxy) {
        try {
            var cookie = document.cookie
                .split("; ")
                .find((row) => row.startsWith("astro-proxy"))
                .split("=")[1];
        } catch {
            var cookie = null;
        }

        proxy.querySelector('img').src = cookie ? document.querySelector("a[data-value='" + cookie + "'] img").src : document.querySelector("a[data-value='Ultraviolet'] img").src;
        proxy.querySelector('img').srcset = cookie ? document.querySelector("a[data-value='" + cookie + "'] img").srcset : document.querySelector("a[data-value='Ultraviolet'] img").srcset;
    }
});

window.console.error = new Proxy(window.console.error, {
    apply: function(target, thisArg, argumentsList) {
        try {
            if (argumentsList.length && argumentsList[0].includes('Warning: ReactDOM.render is no longer supported in React 18')) {
                return;
            } else {
                return Reflect.apply(target, thisArg, argumentsList);
            }
        } catch {
            return Reflect.apply(target, thisArg, argumentsList);
        }
    }
});