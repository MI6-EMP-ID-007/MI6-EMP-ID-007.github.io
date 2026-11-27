/* Casinocademy cookie consent.
   - No choice yet: show the banner. Nothing from Google is loaded.
   - Accept: store the choice, grant analytics_storage, load GTM (window.ccLoadGtm, defined in _includes/head.html).
   - Reject: store the choice, deny analytics_storage, delete any GA cookies.
   - Any element with [data-cookie-settings] reopens the banner so visitors can change their mind. */
(function () {
	'use strict';

	var KEY = 'cc_consent_v1';
	var script = document.currentScript;
	var privacyUrl = script && script.getAttribute('data-privacy-url');
	var banner = null;

	function getChoice() {
		try { return localStorage.getItem(KEY); } catch (e) { return null; }
	}

	function setChoice(value) {
		try { localStorage.setItem(KEY, value); } catch (e) {}
	}

	function deleteGaCookies() {
		var host = location.hostname;
		var bare = host.replace(/^www\./, '');
		var domains = ['', host, '.' + host, bare, '.' + bare];
		document.cookie.split(';').forEach(function (part) {
			var name = part.split('=')[0].trim();
			if (/^(_ga|_ga_.*|_gid|_gat.*)$/.test(name)) {
				domains.forEach(function (d) {
					document.cookie = name + '=; Max-Age=0; path=/' + (d ? '; domain=' + d : '');
				});
			}
		});
	}

	function accept() {
		setChoice('granted');
		gtag('consent', 'update', { analytics_storage: 'granted' });
		window.ccLoadGtm();
		hide();
	}

	function reject() {
		var gtmRunning = !!window.ccGtmLoaded;
		setChoice('denied');
		gtag('consent', 'update', { analytics_storage: 'denied' });
		deleteGaCookies();
		hide();
		// Consent withdrawn after GTM was loaded on this page: reload so no Google script keeps running.
		if (gtmRunning) location.reload();
	}

	function el(tag, attrs, text) {
		var node = document.createElement(tag);
		Object.keys(attrs || {}).forEach(function (k) { node.setAttribute(k, attrs[k]); });
		if (text) node.textContent = text;
		return node;
	}

	function build() {
		banner = el('section', {
			'class': 'cookie-consent',
			'role': 'dialog',
			'aria-labelledby': 'cookie-consent-title',
			'aria-describedby': 'cookie-consent-text',
			'hidden': ''
		});

		var title = el('h2', { id: 'cookie-consent-title' }, 'Cookies & analytics');
		var text = el('p', { id: 'cookie-consent-text' },
			'With your consent we use Google Analytics (via Google Tag Manager) to see which articles are read ' +
			'and which links are clicked. This sets cookies and sends data to Google, which may process it in the USA. ' +
			'If you reject, no analytics are loaded. You can change your choice any time via "Cookie settings" at the bottom of the page.');

		if (privacyUrl) {
			text.appendChild(document.createTextNode(' '));
			text.appendChild(el('a', { href: privacyUrl }, 'Privacy policy'));
		}

		var actions = el('div', { 'class': 'cookie-consent-actions' });
		var acceptBtn = el('button', { type: 'button', 'class': 'button' }, 'Accept');
		var rejectBtn = el('button', { type: 'button', 'class': 'button' }, 'Reject');
		acceptBtn.addEventListener('click', accept);
		rejectBtn.addEventListener('click', reject);
		actions.appendChild(rejectBtn);
		actions.appendChild(acceptBtn);

		banner.appendChild(title);
		banner.appendChild(text);
		banner.appendChild(actions);

		// First in the body so keyboard users reach it before the page content.
		document.body.insertBefore(banner, document.body.firstChild);
	}

	function show() {
		if (!banner) build();
		banner.hidden = false;
	}

	function hide() {
		if (banner) banner.hidden = true;
	}

	document.addEventListener('click', function (e) {
		var trigger = e.target.closest && e.target.closest('[data-cookie-settings]');
		if (!trigger) return;
		e.preventDefault();
		show();
	});

	if (getChoice() === null) show();
})();
