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

[Order reflects cascade](flow.css)

### [`display`](display.css)

| Selector | Value | [Full display](https://drafts.csswg.org/css-display/#display-value-summary) | Fallback |
|:---------|:------|:-------------|:---------|
| `.inline-flow` | `inline` | `inline flow` ||
| `.inline-root` | `inline-block` | `inline flow-root` ||
| `.inline-flex` | `inline-flex` | `inline flex` | `inline-block` |
| `.inline-grid` | `inline-grid` | `inline flex` | `inline-block` |
| `.inline-table` | `inline-table` | `inline table` ||
| `.block-flow` | `block` | `block flow` ||
| `.block-root` | `flow-root` | `block flow-root` | `block` |
| `.block-flex` | `flex` | `block flex` | `block` |
| `.block-grid` | `grid` | `block grid` | `block` |
| `.block-table` | `table` | `block table` ||
| `.play-none` | `none` | `none` ||
| `.play-tent` | `contents` | `contents` ||
| `[hidden]` | `none` | `none` ||

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
