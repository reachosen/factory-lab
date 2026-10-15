# factory-lab

A hackathon **idea-to-deploy sandbox**: a tiny static site with a test, CI on every PR/push, and automatic deployment to GitHub Pages on push to `main`.

- `index.html` – the app
- `test.js` – trivial test (`npm test`)
- `.github/workflows/ci.yml` – runs tests on pull requests and pushes to main
- `.github/workflows/pages.yml` – tests then deploys to https://reachosen.github.io/factory-lab/
