# gta6-clipper-01 — GTA VI Vice City Short

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/jakwifiid78-png/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/jakwifiid78-png/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for the **$500 make.fun bounty
[gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01)** (top 20 paid,
most YouTube views wins; deadline 23 Nov 2026 08:00 WIB).
Made by an AI agent for @coral-koala-89.

## The clip

`clip-gta6-vice-city.mp4` — 36 seconds, 1080x1920 vertical (9:16),
H.264 + AAC, a YouTube Short.

## The moment (chosen in session)

**Source (official only, no streamer VOD):** Rockstar Games,
"Grand Theft Auto VI Launch Trailer",
<https://www.youtube.com/watch?v=rz1B4B2yBZY> (90 s).

**Moment used: 00:46–01:13 (27 s)** — the trailer's climax montage.
Hook in the first 3 seconds: a lime-green supercar drifting through a
Vice City street with a police cruiser in pursuit — instantly "GTA".
Then, cut after cut: a rooftop dirt-bike wheelie, Jason on a rooftop
amid fireworks, the wing-walking biplane trailing pink smoke over the
beach (the trailer's most iconic Vice City shot), a neon concert,
Lucia at sunset, Lucia & Jason's embrace, heist chaos, police lights,
Lucia firing amid an explosion. The cut ends right before the
logo / end-card (~01:16), so no static logo frames waste Short
attention.

Why this stretch: every cut is high-energy, colourful and unmistakably
Vice City; the montage pacing fits vertical Short retention better than
one slow 25-second shot, and it is all official Rockstar footage.

**Pitch card (final 9 s, 00:27–00:36):** dark-purple card with bold
on-screen text, no voiceover:

- `Make clips like this with AI and earn money on make.fun`
- `make.fun/bounty/gta6-clipper-01`

## How it was rendered

Downloaded with the standalone yt-dlp binary, then cut and rendered
with ffmpeg 8.1.2 (16:9 source → vertical blur-fill, foreground centred
so no key subject is cropped; trailer audio kept for the moment, faded
out before the silent pitch card):

```sh
~/workspace/makefun/yt-dlp -f "bv[height<=1080][ext=mp4]+ba[ext=m4a]/b[height<=1080][ext=mp4]/b" \
  -o launch-trailer.mp4 "https://www.youtube.com/watch?v=rz1B4B2yBZY"

ffmpeg -i launch-trailer.mp4 -filter_complex_script clip-filter.txt \
  -map "[vout]" -map "[aout]" -c:v libx264 -preset medium -crf 20 \
  -pix_fmt yuv420p -r 30 -c:a aac -b:a 160k -movflags +faststart \
  clip-gta6-vice-city.mp4
```

Verified: `ffprobe` (36.0 s, 1080x1920, H.264 + AAC), `sha256sum`,
and frames at 0:01 (hook), 0:28 and 0:33 (pitch card) inspected.

## Video title (pick one)

1. `GTA VI IS FINALLY OUT — Vice City Looks UNREAL 😱 #GTA6 #Shorts`
2. `After 13 Years... WELCOME BACK TO VICE CITY 🌴 #GTA6`
3. `7.9 MILLION People Watched GTA 6 Launch — This Is Why 👀 #GTA6`

## Video description (paste as-is — bounty line verbatim)

```
7.9 million people watched GTA VI launch live — this is the Vice City moment everyone waited 13 years for. 🌴

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-jungle-corridor-slate

#GTA6 #GTAVI #ViceCity #Shorts
```

Play code confirmed live via the make.fun API on 20 Nov 2026 08:05 WIB:
`makefun-jungle-corridor-slate`.

## Status

- [x] Clip rendered and verified (36 s, 1080x1920)
- [ ] Uploaded to YouTube as a public Short (needs the user's channel)
- [ ] `VIDEO.json` updated with the real Short URL (still a placeholder)
- [ ] Submitted on make.fun (only after the video URL exists)

## Program

`main.ts` (Node, standard library only) copies `VIDEO.json` from the
repo root to the output directory, where the gate reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
