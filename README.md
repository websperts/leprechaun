# Leprechaun

> A simple, lightweight, and colorful logging utility

`info()`, `success()`, `warning()`, and `error()` prepend appropriate colored icons in front of the message(s). Well suited for CLIs and beautiful just like a leprechaun’s hidden pot of gold at the end of the rainbow.

## Install

```sh
npm install leprechaun --save-dev
```

## Usage

```js
import { info, success, warning, error } from 'leprechaun';

const a = 'Test';
const b = 1337;
const c = true;

info(a, b, c);

success(a, b, c);

warning(a, b, c);

error(a, b, c);
```

## Changelog

- 1.0.0
  - Migrate to TypeScript
- 0.0.2
  - Fix logo within README
- 0.0.1
  - Initial version

## TODO

- Documentation
- Tests

## License

Copyright (c) 2025 [websperts](http://websperts.com/)  
Licensed under the MIT license.

See LICENSE for more info.
