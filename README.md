# Node Kraken API (Fork)

**This is a maintained fork of the original [npm-kraken-api](https://github.com/nothingisdead/npm-kraken-api) by [nothingisdead](https://github.com/nothingisdead).**

The original project has been deprecated, and this fork aims to provide updates and fixes, including replacing the `got` library with `axios` for improved reliability and maintainability.

---

## About This Fork

This repository is a fork of the original [npm-kraken-api](https://github.com/nothingisdead/npm-kraken-api), which is a Node.js client library for the Kraken (kraken.com) API. The original project is no longer maintained, and this fork addresses the following:

- **Replaced `got` with `axios`**: The original library used the `got` library, which has been replaced with `axios` for modern and reliable HTTP requests.
- **Dependency updates**: Updated dependencies to resolve security vulnerabilities and ensure compatibility with newer versions of Node.js.

---

## Installation

To install this package, run:

```bash
npm install kraken-api-node
```

---

## Example Usage

```javascript
const key          = '...'; // API Key
const secret       = '...'; // API Private Key
const KrakenClient = require('kraken-api-node');
const kraken       = new KrakenClient(key, secret);

(async () => {
	// Display user's balance
	console.log(await kraken.api('Balance'));

	// Get Ticker Info
	console.log(await kraken.api('Ticker', { pair : 'XXBTZUSD' }));
})();
```

---

## Updates in This Fork

### 1.1.0:
- **Replaced `got` with `axios`**: The `got` library has been replaced with `axios` for modern and reliable HTTP requests.
- **Updated dependencies**: Resolved security vulnerabilities and ensured compatibility with newer Node.js versions.

### 1.0.1 (Original):
- Updated dependencies.
- Updated required NodeJS version: [#42](https://github.com/nothingisdead/npm-kraken-api/pull/42).
- Added `GetWebSocketsToken` private method: [#65](https://github.com/nothingisdead/npm-kraken-api/pull/65).
- Updated README: [#44](https://github.com/nothingisdead/npm-kraken-api/pull/44).

### 1.0.0 (Original):
- All methods return a promise.
- The second argument (parameters) can be omitted.
- The third argument to the constructor can be an object (configuration) or a string (OTP), for backwards compatibility.

### 0.1.0 (Original):
- The callback passed to the `api` function conforms to the Node.js standard of `function(error, data)`.

---

## Why This Fork Exists

The original project has been deprecated, as noted in [#66](https://github.com/nothingisdead/npm-kraken-api/issues/66). While the original maintainer suggested using the [Kraken REST API](https://docs.kraken.com/api/docs/guides/spot-rest-intro) directly with `fetch`, this fork provides a maintained alternative for those who prefer a dedicated client library.

---

## Credit

This project is based on the original [npm-kraken-api](https://github.com/nothingisdead/npm-kraken-api) by [nothingisdead](https://github.com/nothingisdead). Special thanks to the original authors and contributors for their work.

The original implementation was inspired by:
- The example PHP implementation at [payward/kraken-api-client](https://github.com/payward/kraken-api-client).
- The Python implementation at [veox/python3-krakenex](https://github.com/veox/python3-krakenex).

---

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

---

## License

This project is licensed under the [Original License Name]. See the [LICENSE](LICENSE) file for details.

---

## Donations

If you find this project useful, consider supporting the original author:
- **BTC donation address**: `12X8GyUpfYxEP7sh1QaU4ngWYpzXJByQn5`

