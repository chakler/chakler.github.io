---
layout: speak
title: Speak
permalink: /speak/
weight: 3
---

## I enjoy sharing knowledge about visual design, front end web, and typography*.

If you're interested in having me to speak at your event, shoot me an [email](mailto:hi@aclr.co?subject=We want you to speak at our event!). Give me some information about the event and let me know what topic you have in mind. I'll keep in touch with you and hopefully see you in the near future.

*\* Really, I can do it all day long*

****

{% if site.data.events.upcoming %}
## Upcoming events
{% for event in site.data.events.upcoming %}
+	<a href="{{event.url}}" target="_blank">{{event.name}}</a> — *{{event.date}}*
{% endfor %}
{% endif %}

{% if site.data.events.past %}
## Past events
{% for event in site.data.events.past %}
+	<a href="{{event.url}}" target="_blank">{{event.name}}</a> — *{{event.date}}*<br>
	Talked about: <a href="{{event.talk_url}}" target="_blank">{{event.title}}</a>
{% endfor %}
{% endif %}