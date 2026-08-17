# Licensed faces

The printed invitation uses three faces. Two of them are commercial and are not
bundled with this site, so the CSS names them first in each font stack and falls
through to a close web substitute when the file is absent.

| Role on the page | Invitation face | Substitute shipped | Where it appears |
| --- | --- | --- | --- |
| Body and headings | Garamond | **EB Garamond** (Google) | everything |
| Large beginning character | Foda Display | **Marcellus** (Google) | drop caps, the couple's names |
| Cursive accent | ITC Edwardian Script | **Pinyon Script** (Google) | one or two lines per spread |

## Upgrading to the real faces

If you hold a webfont licence for either commercial face, convert it to `.woff2`
and drop it in this folder using exactly these filenames:

```
public/fonts/foda-display.woff2
public/fonts/edwardian-script.woff2
```

Then uncomment the two `@font-face` blocks near the top of
`app/assets/css/main.css`. They ship commented out so that guests' phones don't
request two missing files on every load; the font stacks already name these
families first, so uncommenting is the whole switch-over.

Note that a desktop licence (`.otf`/`.ttf` for print) usually does **not** cover
web embedding. Check the licence before publishing, and ask whoever set the
invitation, since they may already own the web licence.

Garamond needs no swap: EB Garamond is a Garamond, cut from the same Claude
Garamond sources as the print face, so it holds the invitation's texture on its
own.
