---
title: Authors
layout: single
subtitle: |
    Get to know the people who write for Casinocademy.
---
{% for author in site.data.authors %}
{%- assign author_posts = site.posts | where: "author", author.name -%}
<section class="author-profile" id="{{ author.name | slugify }}">
	<img class="author-photo" src="{{ '/images/' | append: author.photo | relative_url }}" alt="{{ author.name }}" width="140" height="140" />
	<div class="author-details">
		<h3>{{ author.name }}</h3>
		<p class="author-role">{{ author.role }}</p>
		{% for paragraph in author.bio %}<p>{{ paragraph }}</p>
		{% endfor %}
		{% if author_posts.size > 0 %}<h4>Posts by {{ author.name }}</h4>
		<ul class="author-posts">
			{% for post in author_posts %}<li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%b %-d, %Y" }}</time></li>
			{% endfor %}
		</ul>
		{% else %}<p class="author-posts-empty">No posts yet.</p>{% endif %}
	</div>
</section>
{% endfor %}
