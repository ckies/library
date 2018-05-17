# Browser Library

[![@ckies/library](https://img.shields.io/npm/v/@ckies/library.svg)](https://npmjs.com/package/@ckies/library)
[![MIT License](https://img.shields.io/github/license/ckies/library.svg)](https://github.com/ckies/library/blob/master/LICENSE.md)
[![CircleCI](https://img.shields.io/circleci/project/github/ckies/library.svg)](http://circleci.com/gh/ckies/library)
[![Downloads](https://img.shields.io/npm/dt/@ckies/library.svg)](https://npmjs.com/package/@ckies/library)


Approach to offer a generic tooling for GDPR-compliant cookie handling. Use `@ckies/library` in your JavaScript or TypeScript projects, or use it as a drop-in solution for static projects.

### Mode

Per default, **opt-out** is used and all cookies are allowed. Set `window.CKIES_OPTIN` to `true` and all cookies **but necessary** ones are denied per default. 

## Usage

### Custom Build Process

```javascript
import { ckies } from '@ckies/library'

if (ckies.useMarketing()) {
  console.log('Marketing cookies are allowed!')
}
```

### Hosted Library

```html
<script src="ckies.min.js"></script>

<script>
  if (ckies.useMarketing()) {
    console.log('Marketing cookies are allowed!')
  }
</script>
```
