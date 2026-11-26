/*!
 * Contact page: show a confirmation after the form service redirects back with ?sent=1,
 * then tidy the URL so a refresh does not keep showing it.
 */
(function () {
	'use strict';

	var banner = document.getElementById('form-sent');
	if (!banner) { return; }

	var sent = /[?&]sent=1(&|$)/.test(window.location.search);
	if (!sent) { return; }

	banner.hidden = false;
	var form = document.getElementById('contact-form');
	if (form) { form.hidden = true; }

	if (window.history && history.replaceState) {
		history.replaceState(null, '', window.location.pathname);
	}
})();
