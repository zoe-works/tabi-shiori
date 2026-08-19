const fs = require('fs');
let s = fs.readFileSync('src/pages/schedule.js', 'utf8');

// 1. Add import
if (!s.includes('compressImageAsBase64')) {
    s = s.replace(
        /import \{ compressImage, uploadPhoto \} from '\.\.\/utils\/storage\.js';/,
        "import { compressImageAsBase64 } from '../utils/storage.js';"
    );
}

// 2. Change logic
const oldUpload = `          for (let file of photosInput.files) {
             const compressed = await compressImage(file);
             const state = getState();
             compressed.name = file.name || \`photo_\${Date.now()}.jpg\`;
             const url = await uploadPhoto(state.user.uid, trip.id, compressed);
             photos.push(url);
          }`;

const newUpload = `          for (let file of photosInput.files) {
             // Firebase Storageを使わずBase64文字列に変換して直接データベースに保存
             const dataUrl = await compressImageAsBase64(file);
             photos.push(dataUrl);
          }`;

s = s.replace(oldUpload, newUpload);

// 3. Remove try-catch alert about CORS since it's no longer applicable
const catchOld = `        } catch(e) {
          console.error(e);
          alert('写真の保存に失敗しました。CORSなどの設定を確認してください。');
        }`;

const catchNew = `        } catch(e) {
          console.error(e);
          alert('写真の処理に失敗しました。ファイルサイズが大きすぎる可能性があります。');
        }`;

s = s.replace(catchOld, catchNew);

fs.writeFileSync('src/pages/schedule.js', s, 'utf8');
