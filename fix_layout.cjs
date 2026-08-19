const fs = require('fs');

let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// 1. Add try-catch for photo upload
const uploadLogicOld = `if (photosInput.files.length > 0) {
        for (let file of photosInput.files) {
           const compressed = await compressImage(file);
           const state = getState();
             compressed.name = file.name || \`photo_\${Date.now()}.jpg\`;
             const url = await uploadPhoto(state.user.uid, trip.id, compressed);
           photos.push(url);
        }
      }`;

const uploadLogicNew = `if (photosInput.files.length > 0) {
        try {
          for (let file of photosInput.files) {
             const compressed = await compressImage(file);
             const state = getState();
             compressed.name = file.name || \`photo_\${Date.now()}.jpg\`;
             const url = await uploadPhoto(state.user.uid, trip.id, compressed);
             photos.push(url);
          }
        } catch(e) {
          console.error(e);
          alert('写真の保存に失敗しました。CORSなどの設定を確認してください。');
        }
      }`;

s = s.replace(uploadLogicOld, uploadLogicNew);

// 2. Fix the layout of journal-entry
const layoutOld = `journalHtml = \`
            <div class="journal-entry">
              
              \${item.journalRating ? \`<span class="journal-rating">\${stars}</span>\` : ''}
              \${item.journalText ? \`<p class="journal-text">\${item.journalText}</p>\` : ''}
              \${photos ? \`<div class="journal-photos">\${photos}</div>\` : ''}
              <button class="btn small edit-journal-btn" data-id="\${item.id}">編集</button>
            </div>
          \`;`;

const layoutNew = `journalHtml = \`
            <div class="journal-entry">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
                <div style="flex:1;">
                  \${item.journalRating ? \`<div class="journal-rating">\${stars}</div>\` : ''}
                  \${item.journalText ? \`<p class="journal-text" style="margin-top:4px;">\${item.journalText}</p>\` : ''}
                </div>
                \${photos ? \`<div class="journal-photos" style="display:flex; flex-wrap:wrap; gap:4px; max-width:120px; justify-content:flex-end; margin-top:0;">\${photos}</div>\` : ''}
              </div>
              <button class="btn small edit-journal-btn" data-id="\${item.id}" style="margin-top:8px;">編集</button>
            </div>
          \`;`;

s = s.replace(layoutOld, layoutNew);

// 3. Make the image small
const photoMapOld = `const photos = item.journalPhotos ? item.journalPhotos.map(url => \`<img src="\${url}" class="journal-photo">\`).join('') : '';`;
const photoMapNew = `const photos = item.journalPhotos ? item.journalPhotos.map(url => \`<img src="\${url}" class="journal-photo" style="width:50px; height:50px; object-fit:cover; border-radius:6px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">\`).join('') : '';`;

s = s.replace(photoMapOld, photoMapNew);

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
