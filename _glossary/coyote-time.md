---
name: Coyote Time
author: 'bret-hudson'
date: 2023-11-18 12:00:00
banner: coyote-time.jpg
banner_position: 50% 20%
summary: Allow jumping for a short window after falling off a ledge
definition:
    - 'A brief window after falling off a ledge where the player can still jump. In some cases, the player may also be able to walk back onto the ledge (see: [corner correction](corner-correction)).'
solves:
    - 'During difficult platforming sections, players can benefit from having more generous time windows, both from "coyote time" and [input buffering](input-buffering), to ensure being a frame or two off doesn''t cost them a life.'
other_names:
    - ghost jump
    - phantom jumping
    - ledge forgiveness
---

## Examples

Maddy Thorson started her Twitter thread on game-feel in Celeste with an example of coyote time. She's slowed down the video to emphasize the player jumping after they've run off the ledge.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">A short thread on a few Celeste game-feel things :) I don&#39;t think we invented any of these.<br><br>1- Coyote time. You can still jump for a short time after leaving a ledge. <a href="https://t.co/nMK9ZLYbhM">pic.twitter.com/nMK9ZLYbhM</a></p>&mdash; Madeline Stephanie Thorson (@MaddyThorson) <a href="https://twitter.com/MaddyThorson/status/1238338574220546049?ref_src=twsrc%5Etfw">March 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<hr />

## Try it yourself

Here's a playable demo with coyote time. "Coyote Frames" refers to how many frames the player has left after falling off a ledge. Adjust "coyoteLimit" in the inspector to set how many frames the effect will take place.

<canvas id="basic" width="320px" height="180px" tabindex="-1"></canvas>

<script type="module">
	import { initGames } from '/js/examples.js';
	import {
		PlayerWithComponents,
		horizontalMovementComponent,
		verticalMovementComponent,
		verticalMovementComponent2,
	} from '/js/player.js';
	initGames('/', [
		{
			id: 'basic',
			inspector: true,
		}
	]);
</script>

[code snippet will live here]
