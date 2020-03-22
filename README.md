# Assessment Instructions

Use [Create React App](https://github.com/facebook/create-react-app) to make Algo-pedia, a directory of sorting algorithms.

In [algorithms.json](./src/algorithms.json) there is some example data but you can also add more from [Wikipedia Sorting Algorithm Page](https://en.wikipedia.org/wiki/Sorting_algorithm).

## Display the Data

- Add a heading describing the data
- It is up to you what components to make (feel free to use class or functional components)
- CSS styling is generally not important so you can leave that for the end if you have time
- Choice of HTML elements **is important** so choose appropriate elements you feel best match the structure of the data

## Make it dynamic

Once the page is showing the data, let's add ways to change the way the list is viewed.

- Add a dropdown to choose Big O Notation (e.g. O(n²)). When the user chooses one, the list should hide all algorithms except those with that Big O value for `averagePerformance`
- Add a checkbox "Stable" that is checked by default. When the user unchecks it, you should only hide algorithms where stable is `true`
- Add two links, "Most Recent First" and "Oldest First". When clicked, the list should sort according to `addedOn`

## Optional Challenges

Once you have the above working well, consider taking on one of these optional add-ons. Be sure to commit before starting them in case you need to stop if you run out of time.

1. Style the page using your own custom styles or a prebuilt library like [reactstrap](https://reactstrap.github.io/components/alerts/) or [material-ui](https://material-ui.com/)
1. Add a form at the bottom so users can add new algorithms without editing the JSON
1. When a user changes the sort, actually use one of the slow sorts to manually sort the data, updating the display with each step (add a delay so it's not too fast). If you really get ambititious you could consider animating the swaps 😱with an [animation library](https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/).

## Submission Instructions

- Create a new private repository and push your code
- Slack the repo URL to the SEAM and add their GitHub username as a collaborator to the repo so they can view it
