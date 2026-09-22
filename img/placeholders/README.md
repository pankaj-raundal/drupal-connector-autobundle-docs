# Placeholder screenshots

Every image path referenced in the docs like `/img/placeholders/<name>.png`
resolves here. Support staff should:

1. Run `npm run capture` from the docs root to produce real PNGs into
   `../auto/`.
2. Annotate them per [ANNOTATION-GUIDE.md](../../screenshot-capture/ANNOTATION-GUIDE.md)
   into `../annotated/`.
3. Update the affected page to point at
   `require('@site/static/img/annotated/<name>.png')` instead of the
   placeholder path.

Until then, Docusaurus will 404 the placeholder image references — that is
intentional and reminds the writer that the page needs a real screenshot
before it ships.
