# ⚡ Performance notes

The current app is a small client-rendered React view. No measured performance baseline, bundle report, load test, or Core Web Vitals report is committed.

## Practical checks
- Run `npm run build` and inspect build output.
- Avoid adding unnecessary runtime dependencies for small UI changes.
- Keep list rendering straightforward; consider stable IDs and virtualization only if real usage justifies it.
- Optimize images before adding large visual assets.
- Measure before introducing memoization or complex performance tooling.
