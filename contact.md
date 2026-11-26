---
title: Contact
description: "Get in touch with the Casinocademy team. Questions, feedback and ideas for new posts are always welcome."
layout: single
subtitle: |
    Questions, feedback or ideas for a post? We would love to hear from you.
---
<form class="contact-form" id="contact-form" action="mailto:support@casinocademy.com" method="post" enctype="text/plain">
	<div class="row uniform">
		<div class="6u 12u$(xsmall)">
			<label for="contact-name">Name</label>
			<input type="text" name="Name" id="contact-name" maxlength="100" required autocomplete="name" />
		</div>
		<div class="6u$ 12u$(xsmall)">
			<label for="contact-email">Email</label>
			<input type="email" name="Email" id="contact-email" maxlength="200" required autocomplete="email" />
		</div>
		<div class="12u$">
			<label for="contact-message">Message</label>
			<textarea name="Message" id="contact-message" rows="7" maxlength="1500" required></textarea>
		</div>
		<div class="12u$">
			<ul class="actions">
				<li><input type="submit" value="Send message" class="button big" /></li>
			</ul>
		</div>
	</div>
</form>
<p class="form-note">Sending opens your email app with this message ready to go, addressed to <a href="mailto:support@casinocademy.com">support@casinocademy.com</a>. Press send there to deliver it.</p>
<script src="{{ '/assets/js/contact.js' | relative_url }}"></script>
