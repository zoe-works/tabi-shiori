const fs = require('fs');

let s = fs.readFileSync('src/pages/schedule.js', 'utf8');
s = s.replace('const getCategories() = {', 'const getCategories = () => ({');
s = s.replace(/  other: \{ icon: '✨', label: t\('catOther'\) \|\| 'その他' \}\n\};/, 
              "  other: { icon: '✨', label: t('catOther') || 'その他' }\n});");
fs.writeFileSync('src/pages/schedule.js', s, 'utf8');

let e = fs.readFileSync('src/pages/emergency.js', 'utf8');
if (e.includes('const getCategories() = {')) {
  e = e.replace('const getCategories() = {', 'const getCategories = () => ({');
  e = e.replace(/  insurance: \{ icon: '🛡️', label: t\('catInsurance'\) \|\| '海外旅行保険' \}\n\};/, 
                "  insurance: { icon: '🛡️', label: t('catInsurance') || '海外旅行保険' }\n});");
  fs.writeFileSync('src/pages/emergency.js', e, 'utf8');
}
