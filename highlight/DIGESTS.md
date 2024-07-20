## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"
  integrity="sha384-pGqTJHE/m20W4oDrfxTVzOutpMhjK3uP/0lReY0Jq/KInpuJSXUnk4WAYbciCLqT"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/languages/go.min.js"
  integrity="sha384-Mtb4EH3R9NMDME1sPQALOYR8KGqwrXAtmc6XGxDd0XaXB23irPKsuET0JjZt5utI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-1m2pjrOy/Dm/JliuRfZbGdoiP/XAXgZhTh6pRW+O+O0cJm+fBx2+PGqYQUBRJUGx /es/languages/arduino.js
sha384-w9lwucuIeYK8hzWrD0H1CZhvQLisv4eUmJc7pL7oMNkpBVpuuSDAwWJB7XW0ys+z /es/languages/arduino.min.js
sha384-TRdlxCSNmTNG3v+joTZ5Y4I/4Xf5ii/wekG9tuSxcHAf9BX30vv3+jrD0qR9WXKv /languages/arduino.js
sha384-1fjvRLYZVspF/TsOQHIoipbUkoNfSWsc5/FG6aYc1rnvRhLFDZmjuEJRiRZQBgzb /languages/arduino.min.js
sha384-clGUOyR0c7fmaq7KPk6HRG44YcPe1hdzhrjZlMW7opwIXfUzguA9dGrYGInAhn9C /highlight.js
sha384-7t+9DNNVBb/pOzibQJdJEAOtzFqOFEc8415Z7/1kcBxweLrPvWiead+HGi31fBCw /highlight.min.js
```

