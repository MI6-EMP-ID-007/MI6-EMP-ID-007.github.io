---
title: Andrew Morris
layout: single
permalink: /authors/andrew-morris/
author_name: Andrew Morris
description: "Everything written by Andrew Morris, Casinocademy's lead writer: game reviews, bonus guides, deposit method tests and casino checklists."
subtitle: |
    Lead Writer at Casinocademy
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
