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
- [x] 14. Contact page added (`/contact`) and linked from nav, menu, footer, and About. The "comment below any post" sentence was dropped from About since there are no comments.
- [x] 15. Author names and photos now link to `/authors#<author>`.

## Declined or not an issue

- 4. Cookie/consent banner: declined (site does not process cookies).
- 6. Unsubstantiated claims review: declined (owner confirms the claims are accurate).

## Pinned (decide later)

- [ ] 7. Fake engagement numbers: every post shows a hard-coded "28 likes / 128 comments", and "Most Popular, as voted by you" is just the 4 newest posts.
- [ ] 11. Twitter and Facebook footer icons link to `#`, and the About page asks visitors to follow you there.
- [ ] 13. 3 of the 5 nav items (Casino Rankings, Bonus Rankings, and formerly Authors) go to the same "coming soon" page, and its browser title is the raw text `comingSoon`.

## Follow-ups from the first round

- [ ] A. **Abigail Benson's bio and avatar are placeholders.** The bio text is a draft and the avatar is a generated "AB" initials image (`images/Authors/abigail-benson.svg`). Replace both with real content. Andrew Morris's bio is based on the existing posts; review it too.
- [ ] B. **Contact form needs one-time activation.** It posts to FormSubmit. The first submission sends an activation email to `support@casinocademy.com`; click the link in it, otherwise messages are not delivered. The thank-you redirect URL is hard-coded to `https://casinocademy.com/contact?sent=1` in `contact.md`.
- [ ] C. **Check GA4 exists inside the GTM container** `GTM-MS9J2KH`. With the UA tag gone, analytics only works if GTM has a GA4 tag.
- [ ] D. `_layouts/single.html` shows the same `Casino.jpg` banner on Authors and Contact. Let pages set their own header image, or drop it for utility pages.
- [ ] E. The theme's `#header .main ul li` rules style every `li` and `li > a` in the header nav. New widgets in the header should mount outside it (as the search panel does).

## Remaining issues, by priority

### High (visible breakage and content)

- [ ] 16. Homepage pagination is fragile.
  - `divided_by: 4 | ceil` uses integer division, so a post count that is a multiple of 4 produces a blank trailing page.
  - Page restore parses `document.referrer` by string length and hard-codes `http://casinocademy.com/page` and `http://localhost:4000`. Under HTTPS the referrer check never matches, so deep links lose their position.
- [ ] 17. Header and sidebar link to a hard-coded `http://www.casinocademy.com/page0.html` (3 places). That is http + www, goes through a redirect, and downgrades the connection.
- [ ] 18. `pushState` writes `pageN.html` URLs that are not real pages. Refreshing or sharing one lands on page 0, and only `page0`–`page9` redirect.
- [ ] 19. Five posts are titled "The Ace of Games" and are mostly stubs (e.g. "Meet Immortal Romance / Best games across the web"). Thin duplicate content.
- [ ] 20. Posts promise content that is not there:
  - Best Bonuses says "the below table…" but has no table.
  - King of Deposits lists "the following 12 deposit methods" but none follow.
  - Most Popular Casinos ends right after its intro.
- [ ] 21. The 2017-09-04 post says "At Casinotips.com…", the wrong brand.
- [ ] 22. `/blog` shows only 8 posts (`limit:8`), so the 9th is missing.

### Medium: SEO and discoverability

- [ ] 23. `robots.txt`, `sitemap.xml`, `feed.xml` all 404. Add `jekyll-sitemap`, `jekyll-feed`, `jekyll-seo-tag` (supported by GitHub Pages).
- [ ] 24. No canonical tags, Open Graph tags, or Twitter cards, so link previews are blank.
- [ ] 25. Meta description exists only on the homepage.
- [ ] 26. The `keywords` meta tag is obsolete and looks spammy. Remove it.
- [ ] 27. `<html>` has no `lang` attribute.
- [ ] 28. No custom `404.html`; visitors get GitHub's default page.
- [ ] 29. No structured data (`Article`, `Organization`).
- [ ] 30. `<time datetime="Sep 6, 2017">` is not machine-readable. Use `%Y-%m-%d`.
- [ ] 31. `_config.yml` has no `url`, `lang`, or `description`.
- [ ] 32. No per-author or per-category pages for internal linking (authors now have a profile page; post lists per author are there).

### Medium: markup, accessibility, correctness

- [ ] 33. `miniPost.html` has `<img img src=…`, a typo.
- [ ] 34. Every sidebar thumbnail's alt text is hard-coded to "Andrew Morris" (`miniPost.html`). Should be `{{ post.author }}`.
- [ ] 35. `id="main"` is used twice (`div#main` and `p#main` in the sidebar).
- [ ] 36. `<p>{{ content }}</p>` in the layouts wraps block content in a paragraph (invalid HTML).
- [ ] 37. Many attributes are unquoted, e.g. `src={{ … }}`; breaks on paths with spaces.
- [ ] 38. `single.html` hard-codes `images/Casino.jpg` without `relative_url`, and the alt text is empty.
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
