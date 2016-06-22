'use strict';

const gictivity = require('./index.js');

gictivity.pin('codedotjs').then(user => {
	console.log(user);
});

gictivity.day('codedotjs').then(user => {
	console.log(user);
});

gictivity.days('codedotjs').then(user => {
	console.log(user);
});

gictivity.week('codedotjs').then(user => {
	console.log(user);
});

gictivity.month('codedotjs').then(user => {
	console.log(user);
});

gictivity.year('codedotjs').then(user => {
	console.log(user);
});
