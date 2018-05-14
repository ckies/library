# Library

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