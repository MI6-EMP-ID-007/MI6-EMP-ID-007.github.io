---
title: Topics
layout: single
permalink: /topics/
description: "Browse every Casinocademy post by topic: games, bonuses, payments, casinos and site news."
subtitle: |
    Everything we have written, sorted by subject.
---
{% assign topic_pages = site.pages | where_exp: "p", "p.topic" | sort: "title" %}
<section>
	<ul class="posts">
		{% for t in topic_pages %}
		{% assign n = site.posts | where: "topic", t.topic | size %}
		<li>
			<article>
				<header>
					<h3><a href="{{ t.url | relative_url }}">{{ t.title }}</a></h3>
				</header>
				<p>{{ t.subtitle | strip }} <em>({{ n }} post{% if n != 1 %}s{% endif %})</em></p>
			</article>
		</li>
		{% endfor %}
	</ul>
</section>
