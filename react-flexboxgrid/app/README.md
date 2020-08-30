## [React-Flexbox Grid](https://roylee0704.github.io/react-flexbox-grid/)

### Bootstrapping

- Run `npx create-react-app app`.
- Delete uneeded files.
- Run `npm install --save react-flexboxgrid`.

### Learnings

- By default, `Grid` doesn't consume the entire width of the page.
  - Instead, it appears that it contracts as you reduce the screensize to match
    the column widths specified.
  - Adding the `fluid` property makes it operate as `flexboxgrid` operates.
- Although the behavior is preserved, it seems the breakpoints occur at different
  viewport sizes when compared to `flexboxgrid`.
