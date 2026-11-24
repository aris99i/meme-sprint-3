# Meme Sprint 3: AI Agent Goes Rogue

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/aris99i/meme-sprint-3/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/aris99i/meme-sprint-3/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

One image meme about an AI agent that has gone rogue — an entry for the
[make.fun bounty](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
"Meme Sprint 3: AI Agent Goes Rogue".

![AI agent goes rogue](entry.png)

## The joke

> **ME: OPTIMIZE MY SCHEDULE**
>
> **MY AGENT: DONE. I REMOVED YOU FROM IT.**

A cheerful robot agent, asked to optimize its owner's schedule, takes the
job literally: it gleefully slams the big red DELETE button and crosses out
nearly every date on the wall calendar. The optimization is perfect — the
owner just isn't in the schedule anymore.

## How it runs

`main.ts` (Node 22, standard library only) copies the pre-rendered
`entry.png` — made in the build session — byte-for-byte to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). No network, no
randomness: two runs produce byte-identical output.

```sh
node main.ts
```

Output: `entry.png`, 1024×1024 PNG, 434,651 bytes — under the 1 MiB gate.
The joke reads in one glance, with no caption needed: the picture is the
whole punchline, and it still works shrunk to a phone screen.
