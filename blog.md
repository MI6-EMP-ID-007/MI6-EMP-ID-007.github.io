---
title: Blogs
layout: single
subtitle: |
    Read our Blog posts and start winning!
---
<section>
	<ul class="posts">
		{% for post in site.posts limit:8 %}
			{% include postlist.html %}
		{% endfor %}
	</ul>
</section>