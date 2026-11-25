# One Line, One Laugh — the meeting with myself

[![make.fun](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a.svg)](https://make.fun/c/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![rank](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/ariffforai/one-line-joke-4z4ght/rank.svg)](https://make.fun/c/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![reward](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/ariffforai/one-line-joke-4z4ght/reward.svg)](https://make.fun/c/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)

Entry for the [One Line, One Laugh](https://make.fun/c/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a) bounty on [make.fun](https://make.fun/).

## The line

> My calendar invited me to a meeting with myself. I declined — I didn't want to disappoint me.

93 characters, one line, self-contained. The setup sounds like ordinary
calendar admin; the turn is that the only person you can disappoint by
attending a meeting with yourself is you — so you decline to protect
yourself from yourself.

## How it works

`main.ts` (Node.js 22, stdlib only, deterministic) writes the fixed line to
`/output/entry.txt`, then reads it back and verifies the gate itself:
1–140 UTF-8 characters, not whitespace-only, single line.

```sh
node main.ts
# wrote 93 characters to /output/entry.txt
# verified: 93 characters, 1 line, not whitespace-only
```

## Files

- `main.ts` — the entry program (hand-written, fixed output)
- `README.md` — this file
- `LICENSE` — MIT
- `.makefun/owner.json` — the entrant's wallet address
