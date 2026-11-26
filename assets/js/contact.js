/*!
 * Contact page: turn the form into a ready-to-send email.
 *
 * There is no server, so "sending" means opening the visitor's email app with the
 * recipient, subject and message filled in. Without JavaScript the form still works
 * through its own mailto: action (enctype="text/plain"), just with a plainer layout.
 */
(function () {
	'use strict';

	var SUBJECT = 'Message from casinocademy.com';

	var form = document.getElementById('contact-form');
	if (!form) { return; }

	// Builds e.g. mailto:support@casinocademy.com?subject=...&body=Name%3A%20...
	function buildMailto(form) {
		var recipient = form.getAttribute('action').replace(/^mailto:/i, '');
		var name = form.elements['Name'].value.trim();
		var email = form.elements['Email'].value.trim();
		var message = form.elements['Message'].value.trim();

		var body = 'Name: ' + name + '\r\n' +
			'Email: ' + email + '\r\n\r\n' +
			message;

		return 'mailto:' + recipient +
			'?subject=' + encodeURIComponent(SUBJECT) +
			'&body=' + encodeURIComponent(body);
	}

	form.addEventListener('submit', function (event) {
		event.preventDefault();                     // required fields were already checked by the browser
		var url = buildMailto(form);
		form.setAttribute('data-mailto', url);      // handy for debugging and tests
		window.location.href = url;
	});
})();
