import json
from slugify import slugify

TEMPLATE = '''---
title: "{conference} - {session}"
description: "{description}"
author: {liveblogger_name} for the {conference}
publishDate: {date}T00:00-{time}
tags: [
  {conference_tag}
]
slug: {slug}
heroImage: {heroImage}
published: false
---




Liveblogger: [$LIVEBLOGGER_NAME]($LIVEBLOGGER_URL)

## Abstract

{description}

---

Liveblog content here.
'''

BLOGPOSTS_PATH = '../blogposts/{}'

def create_post(talk, date):
  content = TEMPLATE.format(
    session=talk['session'],
    description=talk['description'],
    slug='{slug-prefix}-' + slugify(talk['session']),
    presenter=talk['presenter'],
    date=date,
    time=talk['start_time']
  )

  file_name = 'gophercon-2019-{}.md'.format(slugify(session['session']))
  open(BLOGPOSTS_PATH.format(file_name), 'w').write(content)


if __name__ == '__main__':
  sessions = json.loads(open('sessions.json').read())

  for session in sessions:
    create_post(session)