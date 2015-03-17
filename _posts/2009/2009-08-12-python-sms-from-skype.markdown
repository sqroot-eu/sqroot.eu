---
title: 'Python: SMS from Skype'
category: Projects
tags:
- linux
- python
- script
- skype
- sms
---
Mõtlesin välja mooduse, kuidas oma koduarvutist läbi Skype telefonile SMS teateid saata. Sain neti abiga valmis sellise python skripti:

<script src="https://gist.github.com/2656890.js?file=skype_sms.py"></script>

Sõnumi saatmiseks käivitan lihtsalt käsu:

```bash
$ python SkypeSMS.py +37258****** 'Sulle saabus uus e-mail'
```

Nüüd tuleb ainult välja mõelda praktiline kasutus. Äkki deluge torrenti kliendile - et teada saada, millal torrentid valmis saavad? Ühe sõnumi hind on natuke üle krooni - kallim kui telefonilt telefonile.
