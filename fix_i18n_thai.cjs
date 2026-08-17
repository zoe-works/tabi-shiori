const fs = require('fs');
let content = fs.readFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', 'utf8');

if (!content.includes('ค่าอาหาร')) {
  // Find the end of Thai section (before the last closing brace)
  content = content.replace(/}([^}]*)$/, `
    // Budget & Omiyage keys
    catFood: 'ค่าอาหาร',
    catTransport: 'ค่าเดินทาง',
    catShopping: 'ช้อปปิ้ง',
    catStay: 'ที่พัก',
    catActivity: 'กิจกรรม',
    catOther: 'อื่นๆ',
    addExpenseTitle: 'เพิ่มค่าใช้จ่าย ✏️',
    amountRequiredLabel: 'จำนวนเงิน (จำเป็น)',
    usageLabel: 'การใช้งาน',
    usagePlaceholder: 'เช่น ค่าอาหารกลางวัน',
    categoryLabel: 'หมวดหมู่',
    paidByLabel: 'จ่ายโดย',
    selectMemberLabel: 'เลือกสมาชิก',
    cancelBtn: 'ยกเลิก',
    noBudgetItems: 'ยังไม่มีค่าใช้จ่าย<br>เพิ่มรายการด้วยปุ่ม + เลย!',
    totalExpense: 'รายจ่ายทั้งหมด',
    warikanStatus: 'สถานะการแชร์ค่าใช้จ่าย',
    youPaid: 'คุณจ่ายไป',
    budgetListTitle: 'รายการค่าใช้จ่าย 📝',
    errorOccurred: 'เกิดข้อผิดพลาด 😢',
    confirmDelete: 'คุณแน่ใจหรือไม่ว่าต้องการลบ?',
    addOmiyage: 'เพิ่มของฝาก ✏️',
    omiyageRecipient: 'ให้ใคร? (จำเป็น)',
    recipientPlaceholder: 'เช่น ครอบครัว, ที่ทำงาน, ตัวเอง',
    omiyageItem: 'ชื่อของฝาก / บันทึก',
    itemPlaceholder: 'เช่น คุกกี้ท้องถิ่น',
    budgetEstimate: 'งบประมาณโดยประมาณ',
    noOmiyageProgress: 'ยังไม่มีรายการของฝาก',
    noOmiyageList: 'เพิ่มของฝากโดยใช้ปุ่ม + เลย!',
    progressStatus: 'สถานะความคืบหน้า 💪',
    purchased: 'ซื้อแล้ว',
    undecided: 'ยังไม่ตัดสินใจ',
    budgetLabel: 'งบประมาณ',
    backToHome: 'กลับหน้าแรก',
  }$1`);
  fs.writeFileSync('C:/Users/81806/.gemini/antigravity/scratch/tabi-shiori/src/utils/i18n.js', content, 'utf8');
}
