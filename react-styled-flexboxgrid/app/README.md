## [React-Style-Flexbox Grid](https://loicmahieu.github.io/react-styled-flexboxgrid/demo/index.html)

### Bootstrapping

- Run `npx create-react-app app`.
- Delete uneeded files.
- Run `npm install --save react-styled-flexboxgrid`.

### Learnings

- Can leverage `ThemeProvider` and the `flexboxgrid` key on the `theme` object
  to customize grid behavior.
  - Can easily extend it at well - for example I have added row gutters.
  - More importantly, you can utilize the them to actually proportionally control
    the size of the elements inside the grid as well.
- Appears that the `gutterwidth` is 2x the padding amount applied for each
  column; essentially it is applying 0.5 * `gutterwidth` padding to the columns.
- Easy enough to extend the existing flexbox grid styled components - I extended
  `Row` (as `StyledRow`) relatively easily.
- Can change breakpoints.
