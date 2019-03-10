---
title: Рецепты
layout: default
---
<ul class="list-group">
  {% for p in site.pages %}
    {% if p.url != page.url and p.url contains "recipes" %}
      <li class="list-group-item">
        <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
