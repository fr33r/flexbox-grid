## [Flexbox Grid](http://flexboxgrid.com/)

### Learnings

- Primary goal is to make a layout / page responsive by facilitating different
  column sizes, offsets, alignment, and distribution at `xs` (extra small),
  `sm` (small), `md` (medium), and `lg` (large` viewport widths.
- Adjusting the width of your viewpiont dynamically resizes the columns, it
  doesn't hide columns as you go smaller.
- Don't need React at all - simply import it via CDN.
- By default, there is a "gutter" between columns, but not between rows.
  - It appears that column-related classes have a gutter of `.5rem`;
- Adding a custom class to rows with `padding-left: 0.5rem;` and `padding-right: 0.5rem`
  make the gutter look uniform :) .
- Intuitively to me, it makes sense for having larger column sizes assigned
  to columns as the screen size decreases.
  - In other words, think of a wider screen. Since, column widths are
    percentage based, a column size 2 starts off decently wide.
    - As you descrease screen size, these smaller column begin to contract to
      a point where they become less and less effective at
      communicating their content. Therefore, it make sense that as they get
      smaller, they should "break to become larger" by taking up more columns.
    - These smaller column should steal column real-estate from other columns
      that are larger.
- None of this has anything to do with the height; only width. THIS IS IMPORTANT.
  - Essentially it's on you for determining how tall the things are going to
    be in the grid.
- Nesting columns causes alignment issues, cause we have padding applied each
  subsequent time.
  - My solution to this was to be able to apply the gutter conditionally for
    top and bottom of the row.
    - In other words, when nesting a `row`, don't apply a top gutter for the
      top row, and don't apply a bottom gutter for the last row.
  - In addition, base the height of your elements in the grid on `rems`, since
    the gutters are based on rem.
- Don't embed columns directly within other columns.
  - You need columns to be wrapped in rows in order for their width to be correct.
