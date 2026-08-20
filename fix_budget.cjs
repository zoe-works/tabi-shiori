const fs = require('fs');

let code = fs.readFileSync('src/pages/budget.js', 'utf8');

const search = `        fab.addEventListener('click', () => {`;
const startIdx = code.indexOf(search);

const newTail = `        fab.addEventListener('click', () => {
            modal.classList.add('active');
        });

        cancelBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            form.reset();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                form.reset();
            }
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true;

            const newItem = {
                tripId,
                amount: Number(document.getElementById('budget-amount').value),
                title: document.getElementById('budget-title').value,
                category: document.getElementById('budget-category').value,
                currency: document.getElementById('budget-currency').value,
                date: new Date().toISOString()
            };

            // 楽観的UI
            modal.classList.remove('active');
            
            try {
                await addBudgetItem(tripId, newItem);
                form.reset();
                await loadItems();
            } catch (err) {
                console.error(err);
                alert(t('errorOccurred') || 'エラーが発生しました');
            } finally {
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }
};`;

code = code.substring(0, startIdx) + newTail;
fs.writeFileSync('src/pages/budget.js', code, 'utf8');
