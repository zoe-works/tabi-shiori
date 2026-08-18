const fs = require('fs');

let css = fs.readFileSync('src/styles/index.css', 'utf8');

if (!css.includes('.star.half')) {
  css += `

/* --- Star Rating 0.5 Increments --- */
.star {
  font-size: 2.2rem;
  color: var(--color-border);
  cursor: pointer;
  display: inline-block;
  user-select: none;
  transition: transform 0.2s;
}
.star:active {
  transform: scale(0.9);
}
.star.full {
  color: gold;
}
.star.half {
  background: linear-gradient(to right, gold 50%, var(--color-border) 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
`;
  fs.writeFileSync('src/styles/index.css', css, 'utf8');
}
