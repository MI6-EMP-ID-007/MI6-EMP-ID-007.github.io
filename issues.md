# casinocademy.com: open issues

Numbering follows the original site audit (2026-11-26) so items stay traceable.
This file is excluded from the built site (`exclude:` in `_config.yml`).

## Done in the first fix round

- [x] 1. HTTPS certificate: confirmed working, not an issue.
- [x] 2. Dead Universal Analytics tag `UA-110009508-1` removed from `_includes/head.html`.
- [x] 3. Duplicate GA + GTM trackers: resolved by removing the UA tag. GTM is now the only tracker.
- [x] 5. Added 18+ / responsible gambling notice with Gambling Therapy and eCOGRA links to the footer.
- [x] 8. jQuery upgraded from 1.11.3 to 3.7.1 (menu, search, and pagination retested).
- [x] 9. Search box replaced with real client-side search (`assets/js/search.js`, `search.json`).
- [x] 10. Login button removed from the menu.
- [x] 12. Authors page added (`/authors`). Mobile-menu links now go to `/authors` and `/comingSoon` instead of `#`.
- [x] 14. Contact page added (`/contact`) and linked from nav, menu, footer, and About. It is a plain `mailto:` form: Send opens the visitor's email app with the message ready for `support@casinocademy.com` (no server or third-party service). The "comment below any post" sentence was dropped from About since there are no comments.
- [x] 15. Author names and photos now link to `/authors#<author>`.

## Done in the second fix round

- [x] 16. Homepage pagination rebuilt with `jekyll-paginate`: real pages at `/`, `/page2/`, `/page3/` with plain Previous/Next links. It adapts to any number of posts (no blank trailing page) and the fragile JavaScript, the `document.referrer` parsing and the hard-coded `http://` URLs are gone.
- [x] 17. Header and sidebar links now point at `/` instead of `http://www.casinocademy.com/page0.html`.
- [x] 18. Fake `pageN.html` URLs: resolved by the new real pages. Old links still work: `/page1.html` goes to `/page2/`, `/page2.html` goes to `/page3/`, and `/page0.html`, `/page3.html` to `/page9.html` go to the homepage.
- [x] 19. The five "The Ace of Games" stubs are now a series with distinct titles (same dates and URLs): The Rules of the Contest, RTP and Volatility Explained, Meet the Contenders, Spotlight on Immortal Romance, and Round 1: Thunderstruck II (the existing review).
- [x] 20. Missing content created:
  - Best Bonuses now has its table, plus the player-type list renders as a real list.
  - King of Deposits lists all 12 methods and the six scoring points.
  - Most Popular Casinos now ends with the checklist we use to judge a casino.
  - No casino names, bonus figures or rankings were invented. The posts link to the (coming soon) rankings pages.
- [x] 21. "At Casinotips.com" is gone (the post was rewritten as part of #19).
- [x] 22. `/blog` now lists all 9 posts.

## Done in the third fix round

- [x] 23. Added `jekyll-sitemap` and `jekyll-feed` (both supported by GitHub Pages) and a `robots.txt`. The sitemap lists 25 URLs (no redirect stubs, 404 or search index), the feed has all 9 posts, and the feed is advertised in every page's `<head>`.
- [x] 25. Wrote a meta description for every page and post (all under 160 characters). Pages and posts set `description:` in their front matter. If one is missing, `head.html` falls back to the post's excerpt, then to the site description.
- [x] 26. Removed the obsolete `keywords` meta tag.
- [x] 27. Added `lang="en"` to every page (driven by `lang` in `_config.yml`).
- [x] 28. Custom 404 page ("Snake Eyes! This page folded before we could show you its hand.") in `404.md`.
- [x] 30. `<time datetime>` now uses ISO dates (`date_to_xmlschema`).
- [x] 31. `_config.yml` now has `url`, `baseurl`, `lang` and `description`.
- [x] 32. Added per-author pages (`/authors/andrew-morris/`, `/authors/abigail-benson/`) and per-topic pages (`/topics/`, `/topics/games/`, `bonuses`, `payments`, `casinos`, `site-news`). The post footers' dead "General" link now goes to the post's topic. The About page links the authors page, both author pages, the topics index and every topic. The /authors page now links to each author's own page instead of listing their posts.

## Explained, decision pending

- [ ] 24. **Canonical and social sharing tags.** Explained to the owner; not implemented yet.
  - A *canonical* tag tells search engines which URL is the official one when the same content can be reached several ways (http/https, `/about` vs `/about.html`, paginated pages). It stops ranking signals being split.
  - *Open Graph / Twitter card* tags give Facebook, LinkedIn, WhatsApp, Slack and X a title, description and image for link previews. Without them, shared links often look bare.
  - Fix options: (a) add the `jekyll-seo-tag` plugin and `{% seo %}` to `head.html`, which also covers #29. It would replace the description logic added for #25, so the `description:` front matter stays but `head.html`'s own `<title>` and description lines would go; or (b) hand-write about a dozen lines in `head.html`. Needs a default share image and, optionally, a Twitter handle.
- [ ] 29. **Structured data.** Explained to the owner; not implemented yet. It is a small block of machine-readable JSON-LD (schema.org vocabulary) in the page head describing what the page is: an `Article` (headline, author, dates, image), the `Organization` (name, logo, URL), and the `WebSite` (including its search box). It helps search engines understand who is behind the site and can enable richer search listings. It is not a ranking guarantee. Do not add review or rating markup without real reviews. Fixed by the same `jekyll-seo-tag` plugin as #24, or by hand in `_layouts/posts.html`.

## Declined or not an issue

- 4. Cookie/consent banner: declined (site does not process cookies).
- 6. Unsubstantiated claims review: declined (owner confirms the claims are accurate).

## Pinned (decide later)

- [ ] 7. Fake engagement numbers: every post shows a hard-coded "28 likes / 128 comments", and "Most Popular, as voted by you" is just the 4 newest posts.
- [ ] 11. Twitter and Facebook footer icons link to `#`, and the About page asks visitors to follow you there.
- [ ] 13. 3 of the 5 nav items (Casino Rankings, Bonus Rankings, and formerly Authors) go to the same "coming soon" page, and its browser title is the raw text `comingSoon`.

## Follow-ups from the first round

- [ ] A. **Abigail Benson's bio and avatar are placeholders.** The bio text is a draft and the avatar is a generated "AB" initials image (`images/Authors/abigail-benson.svg`). Replace both with real content. Andrew Morris's bio is based on the existing posts; review it too.
- [ ] B. **Contact form is `mailto:`-based.** Visitors without an email app configured (common on shared or work computers) can't send anything; the page also shows the address as a fallback. If that becomes a problem, the alternatives are a form service or a small serverless function.
- [ ] C. **Check GA4 exists inside the GTM container** `GTM-MS9J2KH`. With the UA tag gone, analytics only works if GTM has a GA4 tag.
- [ ] D. `_layouts/single.html` shows the same `Casino.jpg` banner on Authors and Contact. Let pages set their own header image, or drop it for utility pages.
- [ ] E. The theme's `#header .main ul li` rules style every `li` and `li > a` in the header nav. New widgets in the header should mount outside it (as the search panel does).

## Follow-ups from the second round

- [ ] F. **Verify the game facts** in the new Ace of Games posts. They were written from general knowledge, not checked against the providers' documentation: provider attributions (Microgaming: Thunderstruck II, Immortal Romance, Mega Moolah; NetEnt: Starburst, Gonzo's Quest; Play'n GO: Book of Dead), 243 ways for Thunderstruck II and Immortal Romance, Immortal Romance's 2011 launch, its four characters, the Chamber of Spins and the Wild Desire feature, and the volatility descriptions.
- [ ] G. When Casino Rankings and Bonus Rankings launch, replace the `/comingSoon` links in Best Bonuses and Most Popular Casinos.
- [ ] H. **Favicon is probably not loading.** `_includes/head.html` has `href=/favicon.ico/>` unquoted, so browsers request `/favicon.ico/`, which returns 404 on the live site. Quote the attribute (part of #37).
- [ ] I. Four of the Ace of Games posts share one header image (`theAceOfGamesGeneric.jpg`), which looks repetitive in "Most Popular" and on the homepage. Give each post its own image.
- [ ] J. Old pages page-count mapping (`page1.html`, `page2.html`) assumes the current post count. Harmless, but it will not change if more posts are added.

## Follow-ups from the third round

- [ ] K. **Topic assignments are my judgement.** Games (the 5 Ace of Games posts), Bonuses (Best Bonuses), Payments (King of Deposits), Casinos (Most Popular Casinos), Site News (My First Post). Change `topic:` in any post's front matter; a new topic needs a file in `topics/`.
- [ ] L. Topics are not in the main nav or footer. They are linked from the About page and each post's footer only. Add a nav or menu entry if wanted.
- [ ] M. Author and topic pages show the shared `Casino.jpg` banner (see D).
- [ ] N. The paginated pages `/page2/` and `/page3/` share the homepage's meta description, and are in the sitemap. Consider unique descriptions or `noindex` once more posts exist.
- [ ] O. `redirects.json` (created by jekyll-redirect-from) and `README.md` are published on the site. Exclude them in `_config.yml` if unwanted.

## Remaining issues, by priority


### Medium: markup, accessibility, correctness

- [ ] 33. `miniPost.html` has `<img img src=…`, a typo.
- [ ] 34. Every sidebar thumbnail's alt text is hard-coded to "Andrew Morris" (`miniPost.html`). Should be `{{ post.author }}`.
- [ ] 35. `id="main"` is used twice (`div#main` and `p#main` in the sidebar).
- [ ] 36. `<p>{{ content }}</p>` in the layouts wraps block content in a paragraph (invalid HTML).
- [ ] 37. Many attributes are unquoted, e.g. `src={{ … }}`; breaks on paths with spaces.
- [ ] 38. `single.html`: the banner path now uses `relative_url` (fixed in round 3), but the alt text is still empty.
- [ ] 39. (Search inputs now have `aria-label`.) Check the remaining form controls for labels once pages are added.
- [ ] 40. `href="#"` used as a button in several places. Use `<button>` or remove.
- [ ] 41. `textilize` filter is deprecated.
- [ ] 42. IE8/IE9 shims (`html5shiv`, `respond`, `ie8.css`, `ie9.css`) are dead weight.

### Medium: performance

- [ ] 43. 24 unused images take 2.8 MB, including `Throne-PNG-Photo.png` (1.6 MB) and the `pic01`–`pic12` template stock images.
- [ ] 44. `bestCasino.jpg` (823 KB) and `comingSoon.jpg` (407 KB) are served unresized. Use resized or WebP versions.
- [ ] 45. No `loading="lazy"` on images.
- [ ] 46. The homepage renders all 9 posts, including images on the hidden pages, so everything downloads up front.
- [ ] 47. jQuery, skel, util load synchronously in `<head>` with no `defer`.
- [ ] 48. Font Awesome 4 loads in full for 2 icons.
- [ ] 49. Sidebar "Most Popular" and "Recent Posts" show nearly the same posts.

### Low: content polish and housekeeping

- [ ] 50. Typos: "You number one stop" (sidebar and posts), "Tricks and Tricks", "exepriences", "proffesionals", "onlince", "Webs best", "worlds No.1", "addage", "it's" for "its", "Casinoplayers".
- [ ] 51. Header reads "Casinocademy(Beta)" with no space.
- [ ] 52. All content is from Sept 2017 and the footer has no year, so the site looks abandoned.
- [ ] 53. `_site/` is committed to the repo. It duplicates the source, bloats diffs, and goes stale (GitHub Pages rebuilds it). Remove it and add a `.gitignore`.
- [ ] 54. The repo is public, but the README says "unauthorized distribution prohibited" and there is no LICENSE file. Pick one.
- [ ] 55. The author photo is the same image under the new name (`images/Authors/Andrew Morris.jpg`). Swap in the right image if needed.
- [ ] 56. Test that `support@casinocademy.com` receives mail (MX and SPF records exist).
- [ ] 57. No affiliate or advertising disclosure. Needed before rankings go live.
- [ ] 58. No CAA DNS record. Optional hardening.
