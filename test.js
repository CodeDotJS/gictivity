import test from 'ava';
import fn from './';

test(async t => {
	const gitDay = await fn.day('codedotjs');
	const gitDays = await fn.days('codedotjs');
	const gitWeek = await fn.week('codedotjs');
	const gitMonth = await fn.month('codedotjs');
	const gitYear = await fn.year('codedotjs');
	const gitPin = await fn.pin('codedotjs');

	t.is(gitDay.commits, '14 commits');
	t.is(gitDay.pulls, null);
	t.is(gitDay.issues, null);

	t.is(gitDays.commits, '43 commits');
	t.is(gitDays.pulls, null);
	t.is(gitDays.issues, null);

	t.is(gitWeek.commits, '67 commits');
	t.is(gitWeek.pulls, '3 Pull Requests');
	t.is(gitWeek.issues, '1 Issue reported');

	t.is(gitMonth.commits, '216 commits');
	t.is(gitMonth.pulls, '12 Pull Requests');
	t.is(gitMonth.issues, '6 Issues reported');

	t.is(gitYear, '1,798 contributions in the last year');

	t.is(gitPin.repo1, 'instavim');
	t.is(gitPin.repo2, 'facebook-mass-comment');
	t.is(gitPin.repo3, 'feross/nagger');
	t.is(gitPin.repo4, 'cauealves/pagespeed-score-cli');
	t.is(gitPin.repo5, 'sindresorhus/fast-cli');
});
