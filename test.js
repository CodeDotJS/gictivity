import test from 'ava';
import fn from './';

test(async t => {
	const gitDay = await fn.day('codedotjs');
	const gitDays = await fn.days('codedotjs');
	const gitWeek = await fn.week('codedotjs');
	const gitMonth = await fn.month('codedotjs');
	const gitYear = await fn.year('codedotjs');
	const gitPin = await fn.pin('codedotjs');

	t.is(gitDay.commits, '8 commits');
	t.is(gitDay.pulls, null);
	t.is(gitDay.issues, null);

	t.is(gitDays.commits, '20 commits');
	t.is(gitDays.pulls, null);
	t.is(gitDays.issues, null);

	t.is(gitWeek.commits, '41 commits');
	t.is(gitWeek.pulls, '1 Issue reported');
	t.is(gitWeek.issues, null);

	t.is(gitMonth.commits, '170 commits');
	t.is(gitMonth.pulls, '9 Pull Requests');
	t.is(gitMonth.issues, '3 Issues reported');

	t.is(gitYear.contributions, '1,890 contributions in the last year');

	t.is(gitPin.repo1, 'facebook-mass-comment');
	t.is(gitPin.repo2, 'instavim');
	t.is(gitPin.repo3, 'Pythonic-PrayForParis');
	t.is(gitPin.repo4, 'kote');
	t.is(gitPin.repo5, 'xkcd-comics');
});
