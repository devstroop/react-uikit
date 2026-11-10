// Build-graph input only (GAP-015). lib/main.ts stopped importing the theme as
// a side effect, so this entry keeps dist/style.css complete for packaged
// consumers. It emits a near-empty theme.[es|cjs].js chunk and is deliberately
// not published in "exports" — consumers import ./style.css, ./tokens.css or
// ./themes/<name>.css plus ./utilities.css, or ./tokens.css for geometry. A CSS
// input is not an option: vite refuses one while
// build.cssCodeSplit is false.
import './styles/tokens.css';
import './styles/themes/zen.css';
import './utilities.css';
