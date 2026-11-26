---
title: Contact
layout: single
subtitle: |
    Questions, feedback or ideas for a post? We would love to hear from you.
---
<div class="form-sent" id="form-sent" role="status" hidden>Thank you! Your message has been sent. We will get back to you as soon as we can.</div>
<form class="contact-form" id="contact-form" action="https://formsubmit.co/support@casinocademy.com" method="POST">
	<input type="text" name="_honey" class="form-trap" tabindex="-1" autocomplete="off" aria-hidden="true" />
	<input type="hidden" name="_subject" value="New message from casinocademy.com" />
	<input type="hidden" name="_template" value="table" />
	<input type="hidden" name="_next" value="https://casinocademy.com/contact?sent=1" />
	<div class="row uniform">
		<div class="6u 12u$(xsmall)">
			<label for="contact-name">Name</label>
			<input type="text" name="name" id="contact-name" maxlength="100" required autocomplete="name" />
		</div>
		<div class="6u$ 12u$(xsmall)">
			<label for="contact-email">Email</label>
			<input type="email" name="email" id="contact-email" maxlength="200" required autocomplete="email" />
		</div>
		<div class="12u$">
			<label for="contact-message">Message</label>
			<textarea name="message" id="contact-message" rows="7" maxlength="5000" required></textarea>
		</div>
		<div class="12u$">
			<ul class="actions">
				<li><input type="submit" value="Send message" class="button big" /></li>
			</ul>
		</div>
	</div>
</form>
<p class="form-note">Your message is delivered to <a href="mailto:support@casinocademy.com">support@casinocademy.com</a> by the FormSubmit service. You can also email us directly at that address.</p>
<script src="{{ '/assets/js/contact.js' | relative_url }}"></script>
