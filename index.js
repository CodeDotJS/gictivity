'use strict';

var got = require('got');
var cheerio = require('cheerio');
var Promise = require('pinkie-promise');

function gitPinned(username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	var url = 'https://github.com/' + username;
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return {
			repo1: $('.repo-and-owner').eq(0).text().trim() || null,
			repo2: $('.repo-and-owner').eq(1).text().trim() || null,
			repo3: $('.repo-and-owner').eq(2).text().trim() || null,
			repo4: $('.repo-and-owner').eq(3).text().trim() || null,
			repo5: $('.repo-and-owner').eq(4).text().trim() || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'user doesn\'t exists';
		}
		throw err;
	});
}

function gitYear(username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	var url = 'https://github.com/' + username;
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return {
			contributions: $('h3').eq(2).text().trim() || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'user doesn\'t exists';
		}
		throw err;
	});
}

function gitDay(username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	var url = 'https://github.com/' + username + '?tab=overview&period=daily';
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return {
			commits: $('h3').eq(3).text().trim() || null,
			pulls: $('h3').eq(4).text().trim() || null,
			issues: $('h3').eq(5).text().trim() || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'user doesn\'t exists';
		}
		throw err;
	});
}

function gitDays(username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	var url = 'https://github.com/' + username + '?tab=overview&period=halfweekly';
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return {
			commits: $('h3').eq(3).text().trim() || null,
			pulls: $('h3').eq(4).text().trim() || null,
			issues: $('h3').eq(5).text().trim() || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'user doesn\'t exists';
		}
		throw err;
	});
}

function gitWeek(username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	var url = 'https://github.com/' + username + '?tab=overview&period=weekly';
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return {
			commits: $('h3').eq(3).text().trim() || null,
			pulls: $('h3').eq(4).text().trim() || null,
			issues: $('h3').eq(5).text().trim() || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'user doesn\'t exists';
		}
		throw err;
	});
}

function gitMonth(username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}
	var url = 'https://github.com/' + username + '?tab=overview&period=monthly';
	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);
		return {
			commits: $('h3').eq(3).text().trim() || null,
			pulls: $('h3').eq(4).text().trim() || null,
			issues: $('h3').eq(5).text().trim() || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'user doesn\'t exists';
		}
		throw err;
	});
}

exports.pin = gitPinned;
exports.year = gitYear;
exports.day = gitDay;
exports.days = gitDays;
exports.week = gitWeek;
exports.month = gitMonth;
