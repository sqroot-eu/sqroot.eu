---
layout: page
title: "Sitemap"
description: "Index of all posts"
---
{% for category in site.categories %}
  <h1>{{ category | first }}</h1>
  <div>
    <ul>
    {% for posts in category %}
      {% for post in posts %}
      {% if post.url %}
        <li><a href="{{ post.url }}">[{{ post.date | date: "%B %-d, %Y" }}] {{ post.title }}</a></li>
        {% endif %}
      {% endfor %}
    {% endfor %}
    </ul>
  </div>
{% endfor %}
