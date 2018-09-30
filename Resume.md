---
layout: default_cv
title: Resume
permalink: /resume/
---


{% include career-profile.html %}

{% include experiences.html %}
{% include volunteer.html %}

{% unless site.data.data.sidebar.education %}
  {% include education.html %}
{% endunless %}

 <!--  include projects.html -->

<!-- include publications.html  -->

{% include skills.html %}
