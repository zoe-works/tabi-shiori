const fs = require('fs');

let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// 1. Remove capture="environment"
s = s.replace(
  /<input type="file" id="journalPhotos" accept="image\/\*" capture="environment" multiple>/g,
  '<input type="file" id="journalPhotos" accept="image/*" multiple>'
);

// 2. Change photos HTML to include delete button
const oldPhotoHtml = "const photos = item.journalPhotos ? item.journalPhotos.map(url => `<img src=\"${url}\" class=\"journal-photo\" style=\"width:50px; height:50px; object-fit:cover; border-radius:6px; box-shadow:0 2px 4px rgba(0,0,0,0.1);\">`).join('') : '';";
const newPhotoHtml = "const photos = item.journalPhotos ? item.journalPhotos.map((url, i) => `\\n                <div style=\"position:relative; display:inline-block;\">\\n                  <img src=\"${url}\" class=\"journal-photo\" style=\"width:50px; height:50px; object-fit:cover; border-radius:6px; box-shadow:0 2px 4px rgba(0,0,0,0.1);\">\\n                  <button class=\"delete-photo-btn\" data-id=\"${item.id}\" data-index=\"${i}\" style=\"position:absolute; top:-6px; right:-6px; background:white; border:1px solid #ddd; border-radius:50%; width:20px; height:20px; font-size:12px; line-height:1; cursor:pointer; color:red; display:flex; align-items:center; justify-content:center; box-shadow:0 1px 3px rgba(0,0,0,0.2); padding:0;\">&times;</button>\\n                </div>`).join('') : '';";
s = s.replace(oldPhotoHtml, newPhotoHtml);

// 3. Change edit button UI
const oldEditBtn = `<button class="btn small edit-journal-btn" data-id="\${item.id}" style="margin-top:8px;">編集</button>`;
const newEditBtn = `<button class="btn small journal-add-btn edit-journal-btn" data-id="\${item.id}" style="margin-top:8px; display:inline-flex;">記録を編集</button>`;
s = s.replace(oldEditBtn, newEditBtn);

// 4. Add event listeners for delete-photo-btn in renderTimeline
// Find where we add listeners to edit-journal-btn
const oldListeners = `if (currentMode === 'journal') {
        container.querySelectorAll('.journal-add-btn, .edit-journal-btn').forEach(btn => {`;
const newListeners = `if (currentMode === 'journal') {
        container.querySelectorAll('.delete-photo-btn').forEach(btn => {
          btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (confirm(t('confirmDeletePhoto') || '写真を削除しますか？')) {
              const id = btn.dataset.id;
              const index = parseInt(btn.dataset.index);
              const item = schedules.find(s => s.id === id);
              if (item && item.journalPhotos) {
                item.journalPhotos.splice(index, 1);
                await updateScheduleItem(trip.id, id, { journalPhotos: item.journalPhotos });
                this.loadSchedules(trip.id);
              }
            }
          });
        });

        container.querySelectorAll('.journal-add-btn, .edit-journal-btn').forEach(btn => {`;
s = s.replace(oldListeners, newListeners);

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
