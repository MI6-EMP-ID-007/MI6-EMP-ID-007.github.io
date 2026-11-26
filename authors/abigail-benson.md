---
title: Abigail Benson
layout: single
permalink: /authors/abigail-benson/
author_name: Abigail Benson
description: "Posts by Abigail Benson, contributing writer at Casinocademy, covering the basics for newer online casino players."
subtitle: |
    Contributing Writer at Casinocademy
---
{% assign person = site.data.authors | where: "name", page.author_name | first %}
<section class="author-profile" id="{{ person.name | slugify }}">
	{% include author-card.html author=person %}
</section>

### All posts by {{ person.name }}

{% assign author_posts = site.posts | where: "author", person.name %}
{% if author_posts.size > 0 %}
<section>
	<ul class="posts">
		{% for post in author_posts %}
			{% include postlist.html %}
		{% endfor %}
	</ul>
</section>
{% else %}
<p class="author-posts-empty">No posts yet.</p>
{% endif %}

<p><a href="{{ '/authors' | relative_url }}">&larr; All authors</a></p>
