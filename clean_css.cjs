const fs = require('fs');
let code = fs.readFileSync('src/styles/extras.css', 'utf8');

const search = `.omiyage-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 10px;
  background: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  margin-bottom: var(--space-sm);
  animation: slideUp 0.2s var(--ease-out);
}

.omiyage-item.purchased {
  opacity: 0.6;
}

.omiyage-item.purchased .omiyage-item-name {
  text-decoration: line-through;
}

.omiyage-item-name {
  flex: 1;
  font-size: 0.9rem;
}

.omiyage-item-price {
  font-size: 0.8rem;
  font-weight: var(--fw-medium);
  color: var(--color-text-light);
}`;

code = code.replace(search, '');
fs.writeFileSync('src/styles/extras.css', code, 'utf8');
