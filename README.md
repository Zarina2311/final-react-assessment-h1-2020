# Assessment Instructions

Use [Create React App](https://github.com/facebook/create-react-app) to make **Algopedia**, a directory of sorting algorithms.

In [algorithms.json](./src/algorithms.json) there is some example data but you can also add more from [Wikipedia Sorting Algorithm Page](https://en.wikipedia.org/wiki/Sorting_algorithm).

## Display the Algorithms

Create an `Algorithm` component that shows the data for each algorithm.

- Name as a heading
- The image (hint: use the numeric `width` to constrain the size but keep the aspect ratio, or you can also use CSS)
- Description
- `averagePerformance` (Big O Notation)
- The `addedOn` date - you can leave the format as it is in JSON or format it
- Pros & Cons lists

### Notes

- You can use either class-based or functional components
- CSS styling is not important so you can leave that for the end if you have time
- Unlike syling, choice of HTML elements **is important** so choose appropriate elements you feel are the best fit for the structural meaning of the data (e.g. a list should be a list, not just divs)

## Make it dynamic

Once the page is showing the data, let's add ways to change the way the list is viewed.

The SEAM will assign you one of these features:

### "Stable" Filter Checkbox

- Add a checkbox "Stable" that is checked by default. When the user unchecks it, you should only hide algorithms where stable is `true`
  - Note: some data won't have a "stable" attribute which means it's not known if it's stable. Treat that as `false` for the purposes of the filter

### Big O Dropdown Filter

- Add a dropdown to choose Big O Notation (e.g. O(n²)). When the user chooses one, the list should hide all algorithms except those with that Big O value for `averagePerformance`
  - The default choice should be "Show All Big O Notations" so none are filtered.

### Sorting Radio Buttons

Add radio button to allow sorting of the list.

1.  "No Sorting" - same as in JSON file
1.  "Most Recent First"
1.  "Oldest First"

When clicked, the list should sort according to the rule.

## Optional Challenges

Once you have the above working well, consider taking on one of these optional add-ons. Be sure to commit before starting them in case you need to stop if you run out of time.

### Style It!

Style the page using your own custom styles or a prebuilt library like [reactstrap](https://reactstrap.github.io/components/alerts/) or [material-ui](https://material-ui.com/)

### Smart Count

Add a count to the top of the page showing how many algorithms exist in the data and how many are visible.

### Show/Hide Pros & Cons

Add a toggle so you can conditionally show and hide pros & cons since they might take up a lot of space.

### Multi-Filter

- Add all the filters mentioned above
- Have them work with each other, i.e. the user can filter by both stable and O(n) at the same time
- Add a reset button to go back to the original view

### Add Algorithm Form

Add a form at the bottom so users can add new algorithms without editing the JSON

### Sorting Demo Component

Create a demo component that demonstrates a specific sort (e.g. Bubble Sort)

- Start with a random set of 5 numbers or letters
- Update the display with each step of the sort (add a delay so it's not too fast)
- If you really get ambititious you could consider animating the swaps 😱with an [animation library](https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/).

## Submission Instructions

- Create a new private repository and push your code
- Slack the repo URL to the SEAM and add their GitHub username as a collaborator to the repo so they can view it
