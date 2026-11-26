---
title: Authors
description: "Meet Andrew Morris and Abigail Benson, the writers behind Casinocademy's casino guides, bonus breakdowns and game reviews."
layout: single
subtitle: |
    Get to know the people who write for Casinocademy.
---
{% for author in site.data.authors %}
<section class="author-profile" id="{{ author.name | slugify }}">
	{% include author-card.html author=author link_to_posts=true %}
</section>
{% endfor %}
