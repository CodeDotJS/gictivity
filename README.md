# gictivity

> Activities of a github user.

[![Build Status](https://travis-ci.org/CodeDotJS/gictivity.svg?branch=master)](https://travis-ci.org/CodeDotJS/gictivity)

## Install

```
$ npm install --save gictivity
```

## Usage

- `Pinned Repos`

```js
const gictivity = require('gictivity');

gictivity.pin('CodeDotJS').then(repo => {
	console.log(repo);
	/*
	{
		'repo1': instavim,
		'repo2': facebook-mass-comments,
		'repo3': feross/nagger,
		'repo4': pagespeed-score-cli,
		'repo5': sindresorhus/fast-cli
	}
	*/
});
```

__```TOTAL PUBLIC CONTRIBUTIONS```__

- `Last Year :`

```js
const gictivity = require('gictivity');

gictivity.year('CodeDotJS').then(count => {
	console.log(count);
	// => 1,793 contributions in the last year
});
```

__```CONTRIBUTION PERIOD```__

`Also available for` __`3 days`__, __`week`__ and __`month`__

- `For 1 day :`

```js
const gictivity = require('gictivity');

gictivity.day('CodeDotJS').then(contributions => {
	console.log(contributions);
	// => { commits: '9 commits', pulls: null, issues: null }
})
```

__```NOTE :```__ `returns` __```null```__ `if values are not set or found in user's github profile`

## API

### __```gictivity.pin('username')```__

- `returns all the pinned repositories's names.`

### __```gictivity.day('username')```__

- `returns total contribution made within a day.`

### __```gictivity.days('username')```__

- `returns total contributions made within 3 days.`

### __```gictivity.week('username')```__

- `returns total contribution made within a week.`

### __```gictivity.month('username')```__

- `returns total contribution made within a month.`

### __```gictivity.year('username')```__

- `returns total contribution made by a github user in a year.`

### __```username```__

### __```TYPE :```__ __```string```__

## Related

- [stafo](https://github.com/CodeDotJS/stafo) : Get the total number of stars and forks on a particular github repository.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)
