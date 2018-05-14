# Library

Generic approach to offer a tooling for GDPR-compliant cookie handling. Use `@ckies/library` in your JavaScript or TypeScript projects, or use it as a drop-in solution for static projects.

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