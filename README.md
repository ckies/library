# Library

Approach to offer a generic tooling for GDPR-compliant cookie handling. Use `@ckies/library` in your JavaScript or TypeScript projects, or use it as a drop-in solution for static projects.

### Mode

The **opt-out** mode is enabled per default. If you set `window.CKIES_OPTIN` to `true`, all cookies **but necessary** ones are denied per default. 

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
