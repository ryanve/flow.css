# flow.css

```
npm install flow.css
```

### `@import` all

```css
@import 'node_modules/flow.css/flow';
```

### `@import` incrementally

```css
@import 'node_modules/flow.css/display';
@import 'node_modules/flow.css/clear';
@import 'node_modules/flow.css/float';
```

## [Classes](flow.css)

### [`display`](display.css)

#### Classes are named to represent [the full display values](https://drafts.csswg.org/css-display/#display-value-summary)

| Class | Value | Full value |
|:------|:------------|:-----------|
| `.inline-flow` | `inline` | `inline flow` |
| `.inline-root` | `inline-block` | `inline flow-root` |
| `.inline-table` | `inline-table` | `inline table` |
| `.block-flow` | `block` | `block flow` |
| `.block-root` | `flow-root` | `block flow-root` |
| `.block-table` | `table` | `block table` |

### [`float`](float.css)
- `.float-none`
- `.float-left`
- `.float-right`
- `.float-start`
- `.float-end`

### [`clear`](clear.css)
- `.clear-none`
- `.clear-left`
- `.clear-right`
- `.clear-both`
- `.clear-start`
- `.clear-end`
- `.clear-after`
