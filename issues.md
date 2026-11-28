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
- [x] 25. Wrote a meta description for every page and post (all under 160 characters), set as `description:` in their front matter (output now handled by `jekyll-seo-tag`, see the fourth round).
- [x] 26. Removed the obsolete `keywords` meta tag.
- [x] 27. Added `lang="en"` to every page (driven by `lang` in `_config.yml`).
- [x] 28. Custom 404 page ("Snake Eyes! This page folded before we could show you its hand.") in `404.md`.
- [x] 30. `<time datetime>` now uses ISO dates (`date_to_xmlschema`).
- [x] 31. `_config.yml` now has `url`, `baseurl`, `lang` and `description`.
- [x] 32. Added per-author pages (`/authors/andrew-morris/`, `/authors/abigail-benson/`) and per-topic pages (`/topics/`, `/topics/games/`, `bonuses`, `payments`, `casinos`, `site-news`). The post footers' dead "General" link now goes to the post's topic. The About page links the authors page, both author pages, the topics index and every topic. The /authors page now links to each author's own page instead of listing their posts.

## Done in the fourth fix round

- [x] 24. Canonical, Open Graph and Twitter card tags added with the `jekyll-seo-tag` plugin (the standard Jekyll/GitHub Pages approach). Every page gets one canonical URL, `og:` tags and a `summary_large_image` Twitter card. The share image is the hat logo placed on the site's light grey in a 1200x630 canvas (`images/CasinocademyShare.png`, so a transparent black logo does not vanish on dark previews). It is set for all pages in `_config.yml` (`defaults:`) and a page or post can override it with its own `image:`. Our own `<title>` lines are kept (`{% seo title=false %}`), so paginated pages still say "(Page 2)".
- [x] 29. Structured data added: `BlogPosting` for each post (headline, author, dates, image), `WebSite` for the homepage, `WebPage` for other pages, and a hand-written `Organization` block (Casinocademy plus the hat logo) on every page. The plugin would have named the publisher after the post's author, so no `logo:` is set in `_config.yml` and the Organization is described in `_includes/head.html` instead. Do not add `logo:` to the config.
- [x] 25 (update). Meta descriptions are now written by `jekyll-seo-tag`: `description:` front matter first, then the post excerpt, then the site description. The earlier hand-made fallback in `head.html` was removed.

- [x] R. Site name: `title:` in `_config.yml` is now "Casinocademy" instead of the domain. Page titles now end in "| Casinocademy" (e.g. "No. 1 Casino Academy | Casinocademy", "... (Page 2) | Casinocademy"), and the feed title, `og:site_name` and the WebSite structured data say "Casinocademy".
- [x] H. Favicon fixed: the link was `href=/favicon.ico/>` unquoted, so browsers requested `/favicon.ico/` (404). It is now quoted and resolves to `/favicon.ico` (verified on every page type in Chrome).

## Done in the fifth fix round

- [x] 33. Fixed the `<img img src=…` typo in `miniPost.html`.
- [x] 34. Sidebar thumbnail alt text is now `{{ post.author }}`.
- [x] 35. The duplicate `id="main"` on the two sidebar `<p>` tags was removed. Only `div#main` remains.
- [x] 36. `<p>{{ content }}</p>` is now plain `{{ content }}` in all four layouts (it was a leftover placeholder; Markdown already supplies its own paragraphs, so the output had nested `<p>` tags).
- [x] 37. All unquoted `src=`/`href=` attributes in `_includes/` and `_layouts/` are quoted (also `class=author`).
- [x] 38. Banner images have alt text: "Rows of slot machines in a dimly lit casino" (`single.html`) and "The words Coming Soon written in chalk on a green blackboard" (`comingSoon.html`).
- [x] 39. Checked: the contact form's fields all have `<label for>`, the submit button has a value and both search inputs have `aria-label`. Nothing to add.
- [x] 40. `<a href="#">` removed from the page-title `<h2>` in `single.html` and `comingSoon.html`, and the fake like/comment counters are now `<span>`s (they did nothing; their numbers are still pinned #7). Not changed: the footer Twitter/Facebook icons (pinned #11) and the search/menu `#search`/`#menu` links, which the theme's script needs.
- [x] 41. `textilize` replaced with `strip` (the subtitles are plain text).
- [x] 42. Removed the IE8/IE9 support: `html5shiv.js`, `respond.min.js`, `ie8.css`, `ie9.css`, their four conditional-comment lines in `head.html`, and two IE-only lines in `main.js` (the IE<=9 main/sidebar reorder and the placeholder polyfill). In `main.css` the 57 `-ms-` prefixed duplicates (`-ms-transition`, `-ms-transform`, `-ms-flex*`, `display: -ms-flex`, etc.) were removed; every one sat next to its standard version. The remaining IE-only rules (`@-ms-viewport`, `-ms-overflow-style`, `::-ms-expand`, `:-ms-input-placeholder`, `.formerize-placeholder`) were removed too. `main.css` now has no IE code. Left alone: the vendored `font-awesome.min.css` still carries its own IE font/filter fallbacks (see #48), and `util.js` still contains the unused placeholder polyfill function.

- [x] 43. Removed 13 unused images that were duplicates or odd sizes: `images/favicon.ico` (identical to the root `favicon.ico`), `coming_soon_full.jpg` (grey generic placeholder), `GoldChest.png` (unused portrait copy of `GoldChest.jpg`), `Throne-PNG-Photo.png` (1.6 MB 3D render on white), `throne1.jpg` (distorted, stretched with side bars), and the template leftovers `avatar.jpg` (36x36), `logo.jpg` (81x80), `placeholder-logo.jpg` and `pic08` to `pic12` (51x51). Kept for possible later use: `golden-throne.jpg`, `throne2.jpg`, `meditation.jpg`, `thunderstruck_ii.jpg`, `Neteller_logo_logotype.png` (5800x1050, huge canvas for a logo; shrink it before using) and `pic01` to `pic07`.
- [x] 44. Resized and recompressed: `bestCasino.jpg` 3000x1362, 823 KB to 1200x544, 162 KB; `comingSoon.jpg` 407 KB to 79 KB (same 800x533); and `sunset.jpg` (Hello post) 1920x1279, 249 KB to 1200x799, 113 KB. Same file names, so nothing else changed.
- [x] 45. `loading="lazy"` added to the sidebar thumbnails and to post-preview images, except the first post on each page (so the top image is not delayed). Banner images on single pages stay eager as they are at the top.
- [x] 46. Already fixed in round 2: pagination renders only 4 posts per page, so images of later pages are not downloaded on the homepage.
- [x] 47. `defer` added to jQuery, skel, util and main.js in `head.html` (they still run in order, before the page finishes loading).
- [x] 48. Font Awesome 4 (29 KB CSS plus six font files) replaced by `assets/css/icons.css` and a 2.4 KB subset font (`assets/fonts/fontawesome-subset.woff2`) with only the 13 glyphs the site uses (search, heart, comment, bars, twitter, facebook, instagram, rss, envelope, and the chevrons, check and chevron-down that `main.css` uses by code). The `@import` in `main.css` and the old font files were deleted. To add an icon later, add its code to the subset (`pyftsubset --unicodes=...`) and a rule in `icons.css`.
- [x] 50. Typos fixed across all content and templates (posts, About, header, sidebar): "Your number one stop", "Tips and Tricks", "experiences", "professionals", "online", "The Web's best", "The world's No. 1", "its" for "it's" (3x in Best Bonuses, 1x in Round 1), "casino's opening offer", "don't", "Microgaming's", "casino players", "how most of the stuff works", "how-tos", "slot machine", "cash in", plus a few capitals, commas and a missing question mark and full stop (and "King of Deposits" / "Most Popular Casinos" in titles). I did not find "addage". Facebook and Twitter are now capitalised on About.
- [x] 53. `_site/` removed from the repo (78 files). No `.gitignore` was added, as requested; if you build locally with Jekyll, `_site/` will reappear and must not be committed.
- [x] 54. Repo stays public. Added a `LICENSE` (all rights reserved, with a note that the HTML5 UP template keeps its own CC BY 3.0 licence) and updated the README to match.
- [x] 55. Real author photos added for both authors (`images/Authors/andrew-morris.jpg`, `abigail-benson.jpg`, resized to 300 px). The layouts now read the photo from `_data/authors.yml` instead of building the file name from the author's name, so a new author only needs an entry there. The old initials SVGs and `Andrew Morris.jpg` are removed.

## Done in the sixth fix round

- [x] Closed follow-ups A, B, D, F, G, I, K, L, M, Q, S, E, J and V (see the notes on each below).
- [x] C. GA4 is live: the published GTM container now contains a Google tag for `G-PCT50DJQYC`.
- [x] N, O, U, L fixed (page 2+ descriptions, README/`redirects.json` excluded, `timezone: UTC`, footer "Topics" link).
- [x] Added "The Ace of Games, Round 2: Mega Moolah" (no game screenshots yet, see D/I/Q).
- [x] 54. `LICENSE` (all rights reserved) added, 55. Andrew Morris avatar. (Both in the fifth round list above.)

## Done in the seventh fix round

- [x] 4. Cookie/consent banner (earlier declined because the site set no cookies; reopened now that GA4 runs through GTM and sets `_ga` cookies). A banner (`assets/js/consent.js`, styles in `custom.css`) with equally prominent Accept and Reject buttons. GTM, and with it GA4, only loads after Accept; Google Consent Mode defaults are all denied. Reject (or withdrawing later) deletes the GA cookies and reloads the page if GTM was already running. The choice is stored in `localStorage` (`cc_consent_v1`), and a footer "Cookie settings" link reopens the banner. The GTM `<noscript>` iframe was removed from `homepage.html`, because a visitor without JavaScript cannot consent (it was the only layout that had one).

## Done in the eighth fix round

- [x] Real author photos for Andrew Morris and Abigail Benson (updates #55 and A). Post, sidebar and author pages now read the photo from `_data/authors.yml`.

## Done in the ninth fix round

- [x] 7. Likes and comments counters removed (see the note on 7 below). Sidebar tagline no longer claims posts are voted for.

## Done in the tenth fix round

- [x] The Mega Moolah post (Round 2) is now by Abigail Benson and dated 5 Nov 2026 (file renamed to `_posts/2026-11-05-The-Ace-of-Games.md`; the old URL `/2017/09/07/The-Ace-of-Games.html` redirects to the new one). Her "first articles will appear here soon" line was removed from her bio.

## Follow-ups from the fourth round

- [x] Q. Every page shares the same hat share image. Posts could use their own `headerImg` as a per-post `image:` for richer previews. **Closed: see D.**
- [x] S. `locale` is set to `en_GB` because the copy uses British spelling. Change it if the audience is mainly US. **Closed: `en_GB` stays.**
- [x] U. Dates in `article:published_time` and the structured data carry the build machine's time zone offset. Set `timezone:` in `_config.yml` so it is the same wherever the site is built. **Fixed: `timezone: UTC` in `_config.yml`; dates now read `+00:00` on every machine.**
- [x] V. No `WebSite` search box in the structured data: it needs a URL-based search results page, which the client-side search does not have. **Closed, not doing: it needs a URL-based results page, and Google has retired the sitelinks search box anyway.**
- [ ] W. **Possible schema.org type-case quirk.** `jekyll-seo-tag` 2.8.0 (the version GitHub Pages provides) writes each post's `image` as `"@type": "imageObject"` (lowercase i) while writing its publisher logo as `ImageObject`. Schema.org types are case-sensitive. Run a post through Google's Rich Results Test (see T). If it flags the image, the fix is to hand-write the `BlogPosting` block in `_layouts/posts.html` and stop using the plugin's structured data for posts (the plugin has no switch to turn off only its JSON-LD, so that would mean dropping the plugin and writing the canonical, Open Graph and Twitter tags by hand).

## Declined or not an issue

- 51. "Casinocademy(Beta)" header: intentional, left as is.
- 52. Content dated Sept 2017 and no year in the footer: leave for now, more content is coming.
- 6. Unsubstantiated claims review: declined (owner confirms the claims are accurate).

## Pinned (decide later)

- [x] 7. Fake engagement numbers. **Superseded 2026-11-28: the likes and comments counters were removed from the site** (post pages and homepage cards; the heart and comment icon styles too), so there is nothing fake left to replace with a backend. The sidebar tagline "as voted for by you" was changed to "Our top posts". The "Most Popular" heading is still just the 4 newest posts (see 49).
- [ ] 11. Twitter and Facebook footer icons link to `#`, and the About page asks visitors to follow you there.
- [ ] 13. 3 of the 5 nav items (Casino Rankings, Bonus Rankings, and formerly Authors) go to the same "coming soon" page, and its browser title is the raw text `comingSoon`.
- [ ] 56. Test that `support@casinocademy.com` receives mail (MX and SPF records exist). **Pinned: tackle with the better contact form (B).**
- [ ] 57. No affiliate or advertising disclosure. Needed before rankings go live. **Pinned: do when the site is production ready and ads or affiliate content are running.**
- [ ] 58. No CAA DNS record. Optional hardening. **Pinned.**
- [ ] P. **Twitter/X handle and social profiles.** When accounts exist, add `twitter: username:` to `_config.yml` and a `sameAs` list to the Organization block in `head.html` (also see pinned #11, footer icons still link to `#`). **Pinned: accounts do not exist yet.**
- [ ] T. After the next deploy, run a page through the Facebook Sharing Debugger and LinkedIn Post Inspector (they cache previews) and Google's Rich Results Test to confirm the tags and structured data are read as intended. **Pinned: do at go-live.**

## Backend for interactive features (planned)

Idea: one small hosted backend (a Salesforce Developer Edition org, or another free hosted database) called from the static site with JS. It could serve a real "Most Popular" ranking and the contact form (B). Likes and comments were dropped in round 9, so they are no longer part of the plan. Things to settle first: the site is public, so the browser can only hold a public endpoint, never a secret; the endpoint needs spam and abuse limits; Developer Edition orgs are for development and are deactivated if not logged into for a long period, so check Salesforce's current terms and API limits for production use; and pages must still work if the backend is down.

- [ ] 49. Sidebar "Most Popular" and "Recent Posts" show nearly the same posts. This is only because there are few posts; revisit when more content exists (and with #7).

## Follow-ups from the first round

- [x] A. **Abigail Benson's bio and avatar are placeholders.** The bio text is a draft and the avatar is a generated "AB" initials image (`images/Authors/abigail-benson.svg`). Replace both with real content. Andrew Morris's bio is based on the existing posts; review it too. **Closed: owner will supply real bios and avatars.** Photos added in round 7 (see #55).
- [x] B. **Contact form is `mailto:`-based.** Visitors without an email app configured (common on shared or work computers) can't send anything; the page also shows the address as a fallback. If that becomes a problem, the alternatives are a form service or a small serverless function. **Closed: handled by #56 (pinned).**
- [x] C. **Check GA4 exists inside the GTM container** `GTM-MS9J2KH`. With the UA tag gone, analytics only works if GTM has a GA4 tag. **Done: the published GTM container now contains a Google tag for GA4 measurement ID `G-PCT50DJQYC` (verified in the live `gtm.js`). First data should show in GA4 Realtime.**
- [x] D. `_layouts/single.html` shows the same `Casino.jpg` banner on Authors and Contact. Let pages set their own header image, or drop it for utility pages. **Closed: banner images will be revisited later (with I, M, Q).**
- [x] E. The theme's `#header .main ul li` rules style every `li` and `li > a` in the header nav. New widgets in the header should mount outside it (as the search panel does). **Closed: developer note only, no action needed.**

## Follow-ups from the second round

- [x] F. **Verify the game facts** in the new Ace of Games posts. They were written from general knowledge, not checked against the providers' documentation: provider attributions (Microgaming: Thunderstruck II, Immortal Romance, Mega Moolah; NetEnt: Starburst, Gonzo's Quest; Play'n GO: Book of Dead), 243 ways for Thunderstruck II and Immortal Romance, Immortal Romance's 2011 launch, its four characters, the Chamber of Spins and the Wild Desire feature, and the volatility descriptions. **Closed: owner checked; the posts are not presented as hard facts.**
- [x] G. When Casino Rankings and Bonus Rankings launch, replace the `/comingSoon` links in Best Bonuses and Most Popular Casinos. **Closed: nothing to do until the rankings launch.**
- [x] I. Four of the Ace of Games posts share one header image (`theAceOfGamesGeneric.jpg`), which looks repetitive in "Most Popular" and on the homepage. Give each post its own image. **Closed: images will be revisited later (see D).**
- [x] J. Old pages page-count mapping (`page1.html`, `page2.html`) assumes the current post count. Harmless, but it will not change if more posts are added. **Closed: the old URLs only ever existed for the old 3-page layout, so the mapping never needs to change.**

## Follow-ups from the third round

- [x] K. **Topic assignments are my judgement.** Games (the 5 Ace of Games posts), Bonuses (Best Bonuses), Payments (King of Deposits), Casinos (Most Popular Casinos), Site News (My First Post). Change `topic:` in any post's front matter; a new topic needs a file in `topics/`. **Closed: owner approved the topic assignments.**
- [x] L. Topics are not in the main nav or footer. They are linked from the About page and each post's footer only. Add a nav or menu entry if wanted. **Fixed: one "Topics" link to `/topics/` added to the footer (not a link per topic, so it does not grow). Revisit a main-nav entry at roughly 8-10 topics.**
- [x] M. Author and topic pages show the shared `Casino.jpg` banner (see D). **Closed: see D.**
- [x] N. The paginated pages `/page2/` and `/page3/` share the homepage's meta description, and are in the sitemap. Consider unique descriptions or `noindex` once more posts exist. **Fixed: pages 2 and later now get their own description listing the posts on that page (built in `head.html`).**
- [x] O. `redirects.json` (created by jekyll-redirect-from) and `README.md` are published on the site. Exclude them in `_config.yml` if unwanted. **Fixed: `README.md` is excluded and `redirect_from: json: false` stops `redirects.json` being generated. `LICENSE` is still published, on purpose.**

## Remaining issues, by priority


### High (needed before going live)

- [ ] 59. No privacy policy page. The consent banner links to one automatically once `privacy_url:` is set in `_config.yml` (e.g. `privacy_url: /privacy/`). It should cover GA4/GTM, the data transfer to the USA, and the consent storage.

### Low: content polish and housekeeping

