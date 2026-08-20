(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const aa={user:null,currentTrip:null,currentTripId:null,trips:[],isLoading:!1,language:localStorage.getItem("language")||"ja"},$r=new Map;function Z(){return{...aa}}function Je(r){Object.assign(aa,r),Object.keys(r).forEach(e=>{$r.has(e)&&$r.get(e).forEach(t=>t(aa[e]))})}function Ua(r,e){$r.has(r)||$r.set(r,new Set),$r.get(r).add(e)}function Kh(r){localStorage.setItem("language",r),Je({language:r})}const Qm=Object.freeze(Object.defineProperty({__proto__:null,getState:Z,setLanguage:Kh,setState:Je,subscribe:Ua},Symbol.toStringTag,{value:"Module"})),Jm={ja:{readingPlaceholder:"例: サワディー",readingMemo:"読み方メモ",localPlaceholder:"例: สวัสดี",localSaying:"現地での言い方",wordPlaceholder:"例: こんにちは",wordToSearch:"調べたい言葉（あなたの言語）",addNewPhrase:"新しいフレーズを追加 ✏️",tapToReturn:"タップで戻る 🔙",tapToFlip:"タップで裏返す 👆",appTitle:"旅のしおり",menu:"メニュー",home:"ホーム",flashcard:"単語帳",checklist:"持ち物",schedule:"スケジュール",research:"リサーチノート",budget:"費用メモ",emergency:"緊急連絡先",omiyage:"お土産リスト",switchTrip:"旅行を切り替え",createNewTrip:"新しい旅行を作成",googleLink:"Googleアカウントと連携",googleLinked:"Googleでログイン済み",share:"共有しおり",shareInfo:"🔗 しおりを共有",shareUrl:"共有URL",sharePassword:"パスワード",shareCopyBtn:"📋 URLをコピー",shareCopySuccess:"✅ コピーしました！",shareSetupText:"共有パスワードを設定して、仲間にURLを送りましょう！",shareCreateBtn:"🔗 共有リンクを作成",noTripAlert:"まず旅行を作成してください",loading:"よみこみ中... 🧸",welcomeTitle:"旅のしおりを作ろう！",welcomeDesc:"旅行の計画から記録まで、<br>みんなで楽しく作る旅のしおり 🌴",yourTrips:"あなたの旅行",btnWelcomeCreate:"✨ 新しい旅行を作成",btnWelcomeGoogle:"🌐 Googleアカウントでログイン/引き継ぎ",untitledTrip:"無題の旅行",countdownBefore:"旅行まであと",countdownDays:"日！",countdownDuring:"🎉 旅行",countdownDuringDays:"日目！",countdownAfter:"✨ おつかれさまでした！",members:"👥 メンバー",btnEditTrip:"✏️ 旅行情報を編集",tripFormNewTitle:"✨ 新しい旅行",tripFormEditTitle:"✏️ 旅行を編集",tripTitlePlaceholder:"例: はじめての台湾旅行！",startDate:"出発日",endDate:"帰国日",destinations:"行き先",countryPlaceholder:"国 (例: 台湾)",cityPlaceholder:"都市 (例: 台北)",addDestination:"＋ 行き先を追加",membersLabel:"メンバー",memberNamePlaceholder:"名前 (例: たろう)",addMember:"＋ メンバーを追加",btnSave:"💾 保存する",btnSaving:"保存中...",btnSaveError:"❌ エラー。もう一度お試しください",authError:"ユーザー情報の読み込みに失敗しました。少し待ってから再度保存してください。",scheduleTitle:"スケジュール & ジャーナル",planMode:"📝 プラン",journalMode:"📖 ジャーナル",btnAddSchedule:"+",addScheduleModalTitle:"予定を追加",timeLabel:"時間",itemTitlePlaceholder:"場所・予定名",itemTransportPlaceholder:"移動手段 (例: タクシー)",itemMemoPlaceholder:"メモ",btnAdd:"追加する",addJournalModalTitle:"記録を追加",journalMood:"気分:",journalRating:"評価:",journalTextPlaceholder:"感想を書いてね",journalAddPhoto:"写真を追加:",noSchedule:"予定がありません。追加してみましょう！",btnEdit:"編集",btnAddJournal:"記録を追加",selectTripFirst:"旅行が選択されていません。",checklistTitle:"持ち物チェック",tabPersonal:"👤 個人",tabShared:"👥 共有",addItemPlaceholder:"新しい持ち物を追加...",noItems:"まだアイテムがありません",catDocuments:"📄 書類",catElectronics:"🔌 電子機器",catClothing:"👕 衣類",catToiletries:"🧴 洗面用品",catOtherList:"📦 その他",rq1:"首都・人口・面積・公用語・・・",rq2:"現地通貨は？",rq3:"現地の人の性格は？",rq4:"食文化・・・",rq5:"コンビニなどの便利なお店は？",rq6:"移動手段はどう違う？",rq7:"家やトイレはどんな感じ？",rq8:"実際に行きたい場所3つ",rq9:"食べたいもの3つ",researchTitle:"リサーチノート",all:"全て",sightseeing:"観光",gourmet:"グルメ",shopping:"お土産",activity:"体験",budgetTitle:"費用メモ",emergencyTitle:"緊急連絡先",catSightseeing:"観光",catMeal:"食事",catTransport:"移動",catHotelSch:"ホテル",catShopping:"買い物",catActivity:"体験",catOther:"その他",catFlight:"フライト",catSightseeing:"観光",catMeal:"食事",catTransport:"移動",catHotelSch:"ホテル",catShopping:"買い物",catActivity:"体験",catOther:"その他",catPolice:"警察・消防・救急",catHotel:"ホテルの連絡先",catEmbassy:"大使館の連絡先",catInsurance:"海外旅行保険",addSmallBtn:"追加",noInfo:"情報がありません。",omiyageTitle:"お土産リスト",flashcardTitle:"単語帳",playAudio:"🔊 読み上げ",settings:"設定",checklistMasterTitle:"持ち物チェック 初期マスタ設定",checklistMasterDesc:"新しい旅行を作成した際に、ここで設定した持ち物が自動的に登録されます。",loginRequiredForSettings:"設定を変更するにはログインが必要です。",newlineSeparated:"改行区切りでアイテムを入力してください。",saveBtn:"保存する",savedExclamation:"保存しました！",saveFailed:"保存に失敗しました: ",settings:"設定",checklistMasterTitle:"持ち物チェック 初期マスタ設定",checklistMasterDesc:"新しい旅行を作成した際に、ここで設定した持ち物が自動的に登録されます。",loginRequiredForSettings:"設定を変更するにはログインが必要です。",newlineSeparated:"改行区切りでアイテムを入力してください。",preparing:"準備中...",noTripSelected:"旅行が選択されていません。",currencyLabel:"通貨",catFood:"食費",catBudgetTransport:"交通費",catShopping:"買い物",catStay:"宿泊費",catActivity:"アクティビティ",catOther:"その他",addExpenseTitle:"支出の追加 ✏️",amountRequiredLabel:"金額 (必須)",usageLabel:"用途",usagePlaceholder:"例: ランチ代",categoryLabel:"カテゴリ",paidByLabel:"支払った人",selectMemberLabel:"メンバーを選択",cancelBtn:"キャンセル",noBudgetItems:"まだ支出がありません。<br>＋ボタンから追加しよう！",totalExpense:"合計支出",warikanStatus:"割り勘 / 立て替え状況",youPaid:"あなたが払った",budgetListTitle:"支出リスト 📝",errorOccurred:"エラーが発生しました😢",confirmDelete:"本当に削除しますか？",deleteAction:"削除",addOmiyage:"お土産の追加 ✏️",omiyageRecipient:"誰に渡す？ (必須)",recipientPlaceholder:"例: 家族、職場、自分",omiyageItem:"お土産名 / メモ",itemPlaceholder:"例: ご当地クッキー",budgetEstimate:"予算目安",noOmiyageProgress:"まだお土産リストがありません。",noOmiyageList:"＋ボタンからお土産リストを追加しよう！",progressStatus:"進捗状況 💪",purchased:"購入済み",undecided:"未定",budgetLabel:"予算",backToHome:"ホームに戻る"},en:{readingPlaceholder:"e.g. Sa-wa-dee",readingMemo:"Pronunciation",localPlaceholder:"e.g. Sawadee",localSaying:"Local Phrase",wordPlaceholder:"e.g. Hello",wordToSearch:"Word (Your Language)",addNewPhrase:"Add New Phrase ✏️",tapToReturn:"Tap to return 🔙",tapToFlip:"Tap to flip 👆",appTitle:"Trip Itinerary",menu:"Menu",home:"Home",flashcard:"Flashcards",checklist:"Checklist",schedule:"Schedule",research:"Research",budget:"Budget",emergency:"Emergency",omiyage:"Souvenirs",switchTrip:"Switch Trip",createNewTrip:"Create New Trip",googleLink:"Link Google Account",googleLinked:"Logged in with Google",share:"Shared Itinerary",shareInfo:"🔗 Share Itinerary",shareUrl:"Share URL",sharePassword:"Password",shareCopyBtn:"📋 Copy URL",shareCopySuccess:"✅ Copied!",shareSetupText:"Set a password to share this itinerary with friends!",shareCreateBtn:"🔗 Create Share Link",noTripAlert:"Please create a trip first",loading:"Loading... 🧸",welcomeTitle:"Create an Itinerary!",welcomeDesc:"Plan and record your trips<br>together with everyone! 🌴",yourTrips:"Your Trips",btnWelcomeCreate:"✨ Create New Trip",btnWelcomeGoogle:"🌐 Login/Link with Google",untitledTrip:"Untitled Trip",countdownBefore:"",countdownDays:"days to go!",countdownDuring:"🎉 Day",countdownDuringDays:" of the trip!",countdownAfter:"✨ Trip completed!",members:"👥 Members",btnEditTrip:"✏️ Edit Trip Info",tripFormNewTitle:"✨ New Trip",tripFormEditTitle:"✏️ Edit Trip",tripTitlePlaceholder:"e.g., First trip to Taiwan!",startDate:"Start Date",endDate:"End Date",destinations:"Destinations",countryPlaceholder:"Country (e.g., Taiwan)",cityPlaceholder:"City (e.g., Taipei)",addDestination:"＋ Add Destination",membersLabel:"Members",memberNamePlaceholder:"Name (e.g., Taro)",addMember:"＋ Add Member",btnSave:"💾 Save",btnSaving:"Saving...",btnSaveError:"❌ Error. Please try again",authError:"Failed to load user info. Please wait and try again.",scheduleTitle:"Schedule & Journal",planMode:"📝 Plan",journalMode:"📖 Journal",btnAddSchedule:"+",addScheduleModalTitle:"Add Schedule",timeLabel:"Time",itemTitlePlaceholder:"Place / Activity",itemTransportPlaceholder:"Transport (e.g., Taxi)",itemMemoPlaceholder:"Memo",btnAdd:"Add",addJournalModalTitle:"Add Journal",journalMood:"Mood:",journalRating:"Rating:",journalTextPlaceholder:"Write your thoughts",journalAddPhoto:"Add Photo:",noSchedule:"No schedules yet. Let's add some!",btnEdit:"Edit",btnAddJournal:"Add Journal",selectTripFirst:"No trip selected.",checklistTitle:"Checklist",tabPersonal:"👤 Personal",tabShared:"👥 Shared",addItemPlaceholder:"Add new item...",noItems:"No items yet",catDocuments:"📄 Documents",catElectronics:"🔌 Electronics",catClothing:"👕 Clothing",catToiletries:"🧴 Toiletries",catOtherList:"📦 Other",rq1:"Capital, Population, Area, Official Language...",rq2:"Local Currency?",rq3:"Local Personality?",rq4:"Food Culture...",rq5:"Convenience Stores?",rq6:"Transportation Differences?",rq7:"Houses and Toilets?",rq8:"3 Places I want to go",rq9:"3 Foods I want to eat",researchTitle:"Research Notes",all:"All",sightseeing:"Sightseeing",gourmet:"Food",shopping:"Shopping",activity:"Activity",budgetTitle:"Budget",emergencyTitle:"Emergency",catSightseeing:"Sightseeing",catMeal:"Meal",catTransport:"Transport",catHotelSch:"Hotel",catShopping:"Shopping",catActivity:"Activity",catOther:"Other",catFlight:"Flight",catSightseeing:"Sightseeing",catMeal:"Meal",catTransport:"Transport",catHotelSch:"Hotel",catShopping:"Shopping",catActivity:"Activity",catOther:"Other",catPolice:"Police/Ambulance/Fire",catHotel:"Hotel Contact",catEmbassy:"Embassy Contact",catInsurance:"Travel Insurance",addSmallBtn:"Add",noInfo:"No information yet.",omiyageTitle:"Souvenirs",flashcardTitle:"Flashcards",playAudio:"🔊 Play",preparing:"Preparing...",noTripSelected:"No trip selected.",currencyLabel:"Currency",catFood:"Food",catBudgetTransport:"Transport",catShopping:"Shopping",catStay:"Stay",catActivity:"Activity",catOther:"Other",addExpenseTitle:"Add Expense ✏️",amountRequiredLabel:"Amount (Required)",usageLabel:"Usage",usagePlaceholder:"e.g., Lunch",categoryLabel:"Category",paidByLabel:"Paid By",selectMemberLabel:"Select Member",cancelBtn:"Cancel",noBudgetItems:"No budget items yet.<br>Add one with the + button!",totalExpense:"Total Expense",warikanStatus:"Split/Advance Status",youPaid:"You Paid",budgetListTitle:"Expense List 📝",errorOccurred:"An error occurred 😢",confirmDelete:"Are you sure you want to delete?",deleteAction:"Delete",addOmiyage:"Add Souvenir ✏️",omiyageRecipient:"For Whom? (Required)",recipientPlaceholder:"e.g., Family, Office, Myself",omiyageItem:"Item Name / Memo",itemPlaceholder:"e.g., Local Cookies",budgetEstimate:"Budget Estimate",noOmiyageProgress:"No souvenir list yet.",noOmiyageList:"Add souvenirs using the + button!",progressStatus:"Progress Status 💪",purchased:"Purchased",undecided:"Undecided",budgetLabel:"Budget",backToHome:"Back to Home"},th:{readingPlaceholder:"เช่น ฮัลโหล",readingMemo:"การออกเสียง",localPlaceholder:"เช่น Hello",localSaying:"วลีท้องถิ่น",wordPlaceholder:"เช่น สวัสดี",wordToSearch:"คำศัพท์ (ภาษาของคุณ)",addNewPhrase:"เพิ่มวลีใหม่ ✏️",tapToReturn:"แตะเพื่อกลับ 🔙",tapToFlip:"แตะเพื่อพลิก 👆",appTitle:"แผนการเดินทาง",menu:"เมนู",home:"หน้าแรก",flashcard:"บัตรคำศัพท์",checklist:"รายการของ",schedule:"กำหนดการ",research:"ข้อมูลท่องเที่ยว",budget:"งบประมาณ",emergency:"ฉุกเฉิน",omiyage:"ของฝาก",switchTrip:"เปลี่ยนทริป",createNewTrip:"สร้างทริปใหม่",googleLink:"เชื่อมต่อบัญชี Google",googleLinked:"เข้าสู่ระบบด้วย Google แล้ว",share:"แชร์แผนการเดินทาง",shareInfo:"🔗 แชร์แผนการเดินทาง",shareUrl:"URL สำหรับแชร์",sharePassword:"รหัสผ่าน",shareCopyBtn:"📋 คัดลอก URL",shareCopySuccess:"✅ คัดลอกแล้ว!",shareSetupText:"ตั้งรหัสผ่านเพื่อแชร์ทริปนี้กับเพื่อน!",shareCreateBtn:"🔗 สร้างลิงก์สำหรับแชร์",noTripAlert:"กรุณาสร้างทริปก่อน",loading:"กำลังโหลด... 🧸",welcomeTitle:"สร้างแผนการเดินทาง!",welcomeDesc:"วางแผนและบันทึกการเดินทาง<br>ไปพร้อมกันทุกคน! 🌴",yourTrips:"ทริปของคุณ",btnWelcomeCreate:"✨ สร้างทริปใหม่",btnWelcomeGoogle:"🌐 เข้าสู่ระบบ/เชื่อมโยง Google",untitledTrip:"ทริปที่ไม่มีชื่อ",countdownBefore:"อีก",countdownDays:"วันจะถึงทริป!",countdownDuring:"🎉 วันที่",countdownDuringDays:" ของทริป!",countdownAfter:"✨ จบทริปแล้ว!",members:"👥 สมาชิก",btnEditTrip:"✏️ แก้ไขข้อมูลทริป",tripFormNewTitle:"✨ ทริปใหม่",tripFormEditTitle:"✏️ แก้ไขทริป",tripTitlePlaceholder:"เช่น เที่ยวไต้หวันครั้งแรก!",startDate:"วันเดินทางไป",endDate:"วันเดินทางกลับ",destinations:"จุดหมายปลายทาง",countryPlaceholder:"ประเทศ (เช่น ไต้หวัน)",cityPlaceholder:"เมือง (เช่น ไทเป)",addDestination:"＋ เพิ่มจุดหมาย",membersLabel:"สมาชิก",memberNamePlaceholder:"ชื่อ (เช่น ทาโร่)",addMember:"＋ เพิ่มสมาชิก",btnSave:"💾 บันทึก",btnSaving:"กำลังบันทึก...",btnSaveError:"❌ เกิดข้อผิดพลาด กรุณาลองใหม่",authError:"ไม่สามารถโหลดข้อมูลผู้ใช้ได้ กรุณารอสักครู่แล้วลองอีกครั้ง",scheduleTitle:"กำหนดการ & บันทึก",planMode:"📝 แผน",journalMode:"📖 บันทึก",btnAddSchedule:"+",addScheduleModalTitle:"เพิ่มกำหนดการ",timeLabel:"เวลา",itemTitlePlaceholder:"สถานที่ / กิจกรรม",itemTransportPlaceholder:"การเดินทาง (เช่น แท็กซี่)",itemMemoPlaceholder:"บันทึก",btnAdd:"เพิ่ม",addJournalModalTitle:"เพิ่มบันทึก",journalMood:"อารมณ์:",journalRating:"คะแนน:",journalTextPlaceholder:"เขียนความรู้สึกของคุณ",journalAddPhoto:"เพิ่มรูปภาพ:",noSchedule:"ยังไม่มีกำหนดการ ลองเพิ่มดูสิ!",btnEdit:"แก้ไข",btnAddJournal:"เพิ่มบันทึก",selectTripFirst:"โปรดเลือกทริปก่อน",checklistTitle:"รายการของ",tabPersonal:"👤 ส่วนตัว",tabShared:"👥 แชร์",addItemPlaceholder:"เพิ่มของใหม่...",noItems:"ยังไม่มีสิ่งของ",catDocuments:"📄 เอกสาร",catElectronics:"🔌 อุปกรณ์อิเล็กทรอนิกส์",catClothing:"👕 เสื้อผ้า",catToiletries:"🧴 ของใช้ส่วนตัว",catOtherList:"📦 อื่นๆ",rq1:"เมืองหลวง ประชากร พื้นที่ ภาษา...",rq2:"สกุลเงินท้องถิ่น?",rq3:"นิสัยคนท้องถิ่น?",rq4:"วัฒนธรรมอาหาร...",rq5:"ร้านสะดวกซื้อ?",rq6:"การเดินทางต่างกันอย่างไร?",rq7:"บ้านและห้องน้ำ?",rq8:"3 สถานที่ที่อยากไป",rq9:"3 อาหารที่อยากกิน",researchTitle:"ข้อมูลท่องเที่ยว",all:"ทั้งหมด",sightseeing:"สถานที่",gourmet:"อาหาร",shopping:"ช้อปปิ้ง",activity:"กิจกรรม",budgetTitle:"งบประมาณ",emergencyTitle:"ติดต่อฉุกเฉิน",catSightseeing:"ท่องเที่ยว",catMeal:"อาหาร",catTransport:"เดินทาง",catHotelSch:"โรงแรม",catShopping:"ช้อปปิ้ง",catActivity:"กิจกรรม",catOther:"อื่นๆ",catFlight:"เที่ยวบิน",catSightseeing:"ท่องเที่ยว",catMeal:"อาหาร",catTransport:"เดินทาง",catHotelSch:"โรงแรม",catShopping:"ช้อปปิ้ง",catActivity:"กิจกรรม",catOther:"อื่นๆ",catPolice:"ตำรวจ/ดับเพลิง/รถพยาบาล",catHotel:"ติดต่อโรงแรม",catEmbassy:"ติดต่อสถานทูต",catInsurance:"ประกันการเดินทาง",addSmallBtn:"เพิ่ม",noInfo:"ยังไม่มีข้อมูล",omiyageTitle:"ของฝาก",flashcardTitle:"บัตรคำศัพท์",playAudio:"🔊 เล่นเสียง",settings:"การตั้งค่า",checklistMasterTitle:"ตั้งค่ารายการของเริ่มต้น",checklistMasterDesc:"เมื่อสร้างทริปใหม่ สิ่งของเหล่านี้จะถูกเพิ่มเข้าไปในรายการของของคุณโดยอัตโนมัติ",loginRequiredForSettings:"คุณต้องเข้าสู่ระบบเพื่อเปลี่ยนการตั้งค่า",newlineSeparated:"ป้อนรายการโดยแยกด้วยการขึ้นบรรทัดใหม่",saveBtn:"บันทึก",savedExclamation:"บันทึกแล้ว!",saveFailed:"บันทึกไม่สำเร็จ: ",settings:"การตั้งค่า",checklistMasterTitle:"ตั้งค่ารายการของเริ่มต้น",preparing:"กำลังเตรียม...",noTripSelected:"ไม่ได้เลือกทริป",currencyLabel:"สกุลเงิน",catFood:"ค่าอาหาร",catBudgetTransport:"ค่าเดินทาง",catShopping:"ช้อปปิ้ง",catStay:"ที่พัก",catActivity:"กิจกรรม",catOther:"อื่นๆ",addExpenseTitle:"เพิ่มค่าใช้จ่าย ✏️",amountRequiredLabel:"จำนวนเงิน (จำเป็น)",usageLabel:"การใช้งาน",usagePlaceholder:"เช่น ค่าอาหารกลางวัน",categoryLabel:"หมวดหมู่",paidByLabel:"จ่ายโดย",selectMemberLabel:"เลือกสมาชิก",cancelBtn:"ยกเลิก",noBudgetItems:"ยังไม่มีค่าใช้จ่าย<br>เพิ่มรายการด้วยปุ่ม + เลย!",totalExpense:"รายจ่ายทั้งหมด",warikanStatus:"สถานะการแชร์ค่าใช้จ่าย",youPaid:"คุณจ่ายไป",budgetListTitle:"รายการค่าใช้จ่าย 📝",errorOccurred:"เกิดข้อผิดพลาด 😢",confirmDelete:"คุณแน่ใจหรือไม่ว่าต้องการลบ?",deleteAction:"ลบ",addOmiyage:"เพิ่มของฝาก ✏️",omiyageRecipient:"ให้ใคร? (จำเป็น)",recipientPlaceholder:"เช่น ครอบครัว, ที่ทำงาน, ตัวเอง",omiyageItem:"ชื่อของฝาก / บันทึก",itemPlaceholder:"เช่น คุกกี้ท้องถิ่น",budgetEstimate:"งบประมาณโดยประมาณ",noOmiyageProgress:"ยังไม่มีรายการของฝาก",noOmiyageList:"เพิ่มของฝากโดยใช้ปุ่ม + เลย!",progressStatus:"สถานะความคืบหน้า 💪",purchased:"ซื้อแล้ว",undecided:"ยังไม่ตัดสินใจ",budgetLabel:"งบประมาณ",backToHome:"กลับหน้าแรก"}};function _(r){var n;const t=Z().language||"ja";return(n=Jm[t])==null?void 0:n[r]}function pi(){return Z().language||"ja"}const Wh={};let ca="";function ze(r,e){Wh[r]=e}function se(r,e=!0,t=!1){if(ca===r&&!t)return;const n=r.split("?")[0],s=Wh[n];if(!s){console.warn(`Route not found: ${r}`),se("/");return}ca=r,e&&(window.location.hash=r);const i=document.getElementById("page-content");i&&(i.style.opacity="0",i.style.transform="translateY(8px)",setTimeout(async()=>{try{const o=await s.render();i.innerHTML=o,i.style.opacity="1",i.style.transform="translateY(0)",setTimeout(()=>{i.style.transform="none"},400),s.init&&s.init(),Ym(r),window.scrollTo({top:0})}catch(o){console.error("Page render error:",o)}},150))}function Ym(r){document.querySelectorAll(".nav-item").forEach(n=>{const s=n.getAttribute("data-route");n.classList.toggle("active",s===r)});const e={"/":"appTitle","/flashcard":"flashcardTitle","/checklist":"checklistTitle","/schedule":"scheduleTitle","/research":"researchTitle","/budget":"budgetTitle","/emergency":"emergencyTitle","/omiyage":"omiyageTitle","/settings":"menu","/trip/new":"tripFormNewTitle","/trip/edit":"tripFormEditTitle","/share":"share"},t=document.querySelector(".header-title-text");if(t){const n=e[r];if(n){let s=_(n);r==="/settings"&&(s="設定"),t.textContent=s}else t.textContent=_("appTitle")}}function Kl(){return ca}window.addEventListener("hashchange",()=>{const r=window.location.hash.replace("#","")||"/";se(r,!1)});var Wl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xm=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,h=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,v=h&63;l||(v=64,o||(g=64)),n.push(t[f],t[p],t[g],t[v])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Qh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Xm(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Zm;const g=i<<2|c>>4;if(n.push(g),h!==64){const v=c<<4&240|h>>2;if(n.push(v),p!==64){const P=h<<6&192|p;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Zm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(r){const e=Qh(r);return Jh.encodeByteArray(e,!0)},mi=function(r){return eg(r).replace(/\./g,"")},Yh=function(r){try{return Jh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=()=>tg().__FIREBASE_DEFAULTS__,rg=()=>{if(typeof process>"u"||typeof Wl>"u")return;const r=Wl.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},sg=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Yh(r[1]);return e&&JSON.parse(e)},ji=()=>{try{return ng()||rg()||sg()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Xh=r=>{var e,t;return(t=(e=ji())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},ig=r=>{const e=Xh(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Zh=()=>{var r;return(r=ji())===null||r===void 0?void 0:r.config},ed=r=>{var e;return(e=ji())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[mi(JSON.stringify(t)),mi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function lg(){var r;const e=(r=ji())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ug(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fg(){const r=ye();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function td(){return!lg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nd(){try{return typeof indexedDB=="object"}catch{return!1}}function pg(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="FirebaseError";class at extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=mg,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gg(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new at(s,c,n)}}function gg(r,e){return r.replace(yg,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const yg=/\{\$([^}]+)}/g;function _g(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Xr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Ql(i)&&Ql(o)){if(!Xr(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Ql(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function vg(r,e){const t=new Ig(r,e);return t.subscribe.bind(t)}class Ig{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Tg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=$o),s.error===void 0&&(s.error=$o),s.complete===void 0&&(s.complete=$o);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tg(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function $o(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(r){return r&&r._delegate?r._delegate:r}class Ut{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new og;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wg(e))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rn){return this.instances.has(e)}getOptions(e=rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:bg(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=rn){return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bg(r){return r===rn?void 0:r}function wg(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Eg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Y||(Y={}));const Sg={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Rg=Y.INFO,Pg={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Cg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Pg[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $a{constructor(e){this.name=e,this._logLevel=Rg,this._logHandler=Cg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const kg=(r,e)=>e.some(t=>r instanceof t);let Jl,Yl;function xg(){return Jl||(Jl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dg(){return Yl||(Yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rd=new WeakMap,la=new WeakMap,sd=new WeakMap,qo=new WeakMap,qa=new WeakMap;function Vg(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Mt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&rd.set(t,r)}).catch(()=>{}),qa.set(e,r),e}function Ng(r){if(la.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});la.set(r,e)}let ua={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return la.get(r);if(e==="objectStoreNames")return r.objectStoreNames||sd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Lg(r){ua=r(ua)}function Og(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(zo(this),e,...t);return sd.set(n,e.sort?e.sort():[e]),Mt(n)}:Dg().includes(r)?function(...e){return r.apply(zo(this),e),Mt(rd.get(this))}:function(...e){return Mt(r.apply(zo(this),e))}}function Mg(r){return typeof r=="function"?Og(r):(r instanceof IDBTransaction&&Ng(r),kg(r,xg())?new Proxy(r,ua):r)}function Mt(r){if(r instanceof IDBRequest)return Vg(r);if(qo.has(r))return qo.get(r);const e=Mg(r);return e!==r&&(qo.set(r,e),qa.set(e,r)),e}const zo=r=>qa.get(r);function Fg(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Mt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const jg=["get","getKey","getAll","getAllKeys","count"],Bg=["put","add","delete","clear"],Go=new Map;function Xl(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Go.get(e))return Go.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Bg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||jg.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Go.set(e,i),i}Lg(r=>({...r,get:(e,t,n)=>Xl(e,t)||r.get(e,t,n),has:(e,t)=>!!Xl(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($g(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function $g(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",Zl="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new $a("@firebase/app"),qg="@firebase/app-compat",zg="@firebase/analytics-compat",Gg="@firebase/analytics",Hg="@firebase/app-check-compat",Kg="@firebase/app-check",Wg="@firebase/auth",Qg="@firebase/auth-compat",Jg="@firebase/database",Yg="@firebase/data-connect",Xg="@firebase/database-compat",Zg="@firebase/functions",ey="@firebase/functions-compat",ty="@firebase/installations",ny="@firebase/installations-compat",ry="@firebase/messaging",sy="@firebase/messaging-compat",iy="@firebase/performance",oy="@firebase/performance-compat",ay="@firebase/remote-config",cy="@firebase/remote-config-compat",ly="@firebase/storage",uy="@firebase/storage-compat",hy="@firebase/firestore",dy="@firebase/vertexai-preview",fy="@firebase/firestore-compat",py="firebase",my="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="[DEFAULT]",gy={[ha]:"fire-core",[qg]:"fire-core-compat",[Gg]:"fire-analytics",[zg]:"fire-analytics-compat",[Kg]:"fire-app-check",[Hg]:"fire-app-check-compat",[Wg]:"fire-auth",[Qg]:"fire-auth-compat",[Jg]:"fire-rtdb",[Yg]:"fire-data-connect",[Xg]:"fire-rtdb-compat",[Zg]:"fire-fn",[ey]:"fire-fn-compat",[ty]:"fire-iid",[ny]:"fire-iid-compat",[ry]:"fire-fcm",[sy]:"fire-fcm-compat",[iy]:"fire-perf",[oy]:"fire-perf-compat",[ay]:"fire-rc",[cy]:"fire-rc-compat",[ly]:"fire-gcs",[uy]:"fire-gcs-compat",[hy]:"fire-fst",[fy]:"fire-fst-compat",[dy]:"fire-vertex","fire-js":"fire-js",[py]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Map,yy=new Map,fa=new Map;function eu(r,e){try{r.container.addComponent(e)}catch(t){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function fn(r){const e=r.name;if(fa.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,r);for(const t of gi.values())eu(t,r);for(const t of yy.values())eu(t,r);return!0}function Bi(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function pt(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new ps("app","Firebase",_y);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=my;function id(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:da,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});if(t||(t=Zh()),!t)throw Ft.create("no-options");const i=gi.get(s);if(i){if(Xr(t,i.options)&&Xr(n,i.config))return i;throw Ft.create("duplicate-app",{appName:s})}const o=new Ag(s);for(const l of fa.values())o.addComponent(l);const c=new vy(t,n,o);return gi.set(s,c),c}function od(r=da){const e=gi.get(r);if(!e&&r===da&&Zh())return id();if(!e)throw Ft.create("no-app",{appName:r});return e}function Ze(r,e,t){var n;let s=(n=gy[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(c.join(" "));return}fn(new Ut(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firebase-heartbeat-database",Ty=1,Zr="firebase-heartbeat-store";let Ho=null;function ad(){return Ho||(Ho=Fg(Iy,Ty,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Zr)}catch(t){console.warn(t)}}}}).catch(r=>{throw Ft.create("idb-open",{originalErrorMessage:r.message})})),Ho}async function Ey(r){try{const t=(await ad()).transaction(Zr),n=await t.objectStore(Zr).get(cd(r));return await t.done,n}catch(e){if(e instanceof at)vt.warn(e.message);else{const t=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(t.message)}}}async function tu(r,e){try{const n=(await ad()).transaction(Zr,"readwrite");await n.objectStore(Zr).put(e,cd(r)),await n.done}catch(t){if(t instanceof at)vt.warn(t.message);else{const n=Ft.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vt.warn(n.message)}}}function cd(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=1024,wy=30*24*60*60*1e3;class Ay{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ry(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=nu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=wy}),this._storage.overwrite(this._heartbeatsCache))}catch(n){vt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nu(),{heartbeatsToSend:n,unsentEntries:s}=Sy(this._heartbeatsCache.heartbeats),i=mi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return vt.warn(t),""}}}function nu(){return new Date().toISOString().substring(0,10)}function Sy(r,e=by){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ru(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ru(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nd()?pg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ey(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return tu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ru(r){return mi(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(r){fn(new Ut("platform-logger",e=>new Ug(e),"PRIVATE")),fn(new Ut("heartbeat",e=>new Ay(e),"PRIVATE")),Ze(ha,Zl,r),Ze(ha,Zl,"esm2017"),Ze("fire-js","")}Py("");var Cy="firebase",ky="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze(Cy,ky,"app");var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var un,ld;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function I(){}I.prototype=y.prototype,E.D=y.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(b,w,S){for(var T=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)T[lt-2]=arguments[lt];return y.prototype[w].apply(b,T)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,I){I||(I=0);var b=Array(16);if(typeof y=="string")for(var w=0;16>w;++w)b[w]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(w=0;16>w;++w)b[w]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=E.g[0],I=E.g[1],w=E.g[2];var S=E.g[3],T=y+(S^I&(w^S))+b[0]+3614090360&4294967295;y=I+(T<<7&4294967295|T>>>25),T=S+(w^y&(I^w))+b[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=w+(I^S&(y^I))+b[2]+606105819&4294967295,w=S+(T<<17&4294967295|T>>>15),T=I+(y^w&(S^y))+b[3]+3250441966&4294967295,I=w+(T<<22&4294967295|T>>>10),T=y+(S^I&(w^S))+b[4]+4118548399&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(w^y&(I^w))+b[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=w+(I^S&(y^I))+b[6]+2821735955&4294967295,w=S+(T<<17&4294967295|T>>>15),T=I+(y^w&(S^y))+b[7]+4249261313&4294967295,I=w+(T<<22&4294967295|T>>>10),T=y+(S^I&(w^S))+b[8]+1770035416&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(w^y&(I^w))+b[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=w+(I^S&(y^I))+b[10]+4294925233&4294967295,w=S+(T<<17&4294967295|T>>>15),T=I+(y^w&(S^y))+b[11]+2304563134&4294967295,I=w+(T<<22&4294967295|T>>>10),T=y+(S^I&(w^S))+b[12]+1804603682&4294967295,y=I+(T<<7&4294967295|T>>>25),T=S+(w^y&(I^w))+b[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=w+(I^S&(y^I))+b[14]+2792965006&4294967295,w=S+(T<<17&4294967295|T>>>15),T=I+(y^w&(S^y))+b[15]+1236535329&4294967295,I=w+(T<<22&4294967295|T>>>10),T=y+(w^S&(I^w))+b[1]+4129170786&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^w&(y^I))+b[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=w+(y^I&(S^y))+b[11]+643717713&4294967295,w=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(w^S))+b[0]+3921069994&4294967295,I=w+(T<<20&4294967295|T>>>12),T=y+(w^S&(I^w))+b[5]+3593408605&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^w&(y^I))+b[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=w+(y^I&(S^y))+b[15]+3634488961&4294967295,w=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(w^S))+b[4]+3889429448&4294967295,I=w+(T<<20&4294967295|T>>>12),T=y+(w^S&(I^w))+b[9]+568446438&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^w&(y^I))+b[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=w+(y^I&(S^y))+b[3]+4107603335&4294967295,w=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(w^S))+b[8]+1163531501&4294967295,I=w+(T<<20&4294967295|T>>>12),T=y+(w^S&(I^w))+b[13]+2850285829&4294967295,y=I+(T<<5&4294967295|T>>>27),T=S+(I^w&(y^I))+b[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=w+(y^I&(S^y))+b[7]+1735328473&4294967295,w=S+(T<<14&4294967295|T>>>18),T=I+(S^y&(w^S))+b[12]+2368359562&4294967295,I=w+(T<<20&4294967295|T>>>12),T=y+(I^w^S)+b[5]+4294588738&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^w)+b[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=w+(S^y^I)+b[11]+1839030562&4294967295,w=S+(T<<16&4294967295|T>>>16),T=I+(w^S^y)+b[14]+4259657740&4294967295,I=w+(T<<23&4294967295|T>>>9),T=y+(I^w^S)+b[1]+2763975236&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^w)+b[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=w+(S^y^I)+b[7]+4139469664&4294967295,w=S+(T<<16&4294967295|T>>>16),T=I+(w^S^y)+b[10]+3200236656&4294967295,I=w+(T<<23&4294967295|T>>>9),T=y+(I^w^S)+b[13]+681279174&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^w)+b[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=w+(S^y^I)+b[3]+3572445317&4294967295,w=S+(T<<16&4294967295|T>>>16),T=I+(w^S^y)+b[6]+76029189&4294967295,I=w+(T<<23&4294967295|T>>>9),T=y+(I^w^S)+b[9]+3654602809&4294967295,y=I+(T<<4&4294967295|T>>>28),T=S+(y^I^w)+b[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=w+(S^y^I)+b[15]+530742520&4294967295,w=S+(T<<16&4294967295|T>>>16),T=I+(w^S^y)+b[2]+3299628645&4294967295,I=w+(T<<23&4294967295|T>>>9),T=y+(w^(I|~S))+b[0]+4096336452&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~w))+b[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=w+(y^(S|~I))+b[14]+2878612391&4294967295,w=S+(T<<15&4294967295|T>>>17),T=I+(S^(w|~y))+b[5]+4237533241&4294967295,I=w+(T<<21&4294967295|T>>>11),T=y+(w^(I|~S))+b[12]+1700485571&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~w))+b[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=w+(y^(S|~I))+b[10]+4293915773&4294967295,w=S+(T<<15&4294967295|T>>>17),T=I+(S^(w|~y))+b[1]+2240044497&4294967295,I=w+(T<<21&4294967295|T>>>11),T=y+(w^(I|~S))+b[8]+1873313359&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~w))+b[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=w+(y^(S|~I))+b[6]+2734768916&4294967295,w=S+(T<<15&4294967295|T>>>17),T=I+(S^(w|~y))+b[13]+1309151649&4294967295,I=w+(T<<21&4294967295|T>>>11),T=y+(w^(I|~S))+b[4]+4149444226&4294967295,y=I+(T<<6&4294967295|T>>>26),T=S+(I^(y|~w))+b[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=w+(y^(S|~I))+b[2]+718787259&4294967295,w=S+(T<<15&4294967295|T>>>17),T=I+(S^(w|~y))+b[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(w+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+S&4294967295}n.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var I=y-this.blockSize,b=this.B,w=this.h,S=0;S<y;){if(w==0)for(;S<=I;)s(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<y;)if(b[w++]=E.charCodeAt(S++),w==this.blockSize){s(this,b),w=0;break}}else for(;S<y;)if(b[w++]=E[S++],w==this.blockSize){s(this,b),w=0;break}}this.h=w,this.o+=y},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var I=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=I&255,I/=256;for(this.u(E),E=Array(16),y=I=0;4>y;++y)for(var b=0;32>b;b+=8)E[I++]=this.g[y]>>>b&255;return E};function i(E,y){var I=c;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=y(E)}function o(E,y){this.h=y;for(var I=[],b=!0,w=E.length-1;0<=w;w--){var S=E[w]|0;b&&S==y||(I[w]=S,b=!1)}this.g=I}var c={};function l(E){return-128<=E&&128>E?i(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return k(h(-E));for(var y=[],I=1,b=0;E>=I;b++)y[b]=E/I|0,I*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return k(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(y,8)),b=p,w=0;w<E.length;w+=8){var S=Math.min(8,E.length-w),T=parseInt(E.substring(w,w+S),y);8>S?(S=h(Math.pow(y,S)),b=b.j(S).add(h(T))):(b=b.j(I),b=b.add(h(T)))}return b}var p=l(0),g=l(1),v=l(16777216);r=o.prototype,r.m=function(){if(D(this))return-k(this).m();for(var E=0,y=1,I=0;I<this.g.length;I++){var b=this.i(I);E+=(0<=b?b:4294967296+b)*y,y*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(P(this))return"0";if(D(this))return"-"+k(this).toString(E);for(var y=h(Math.pow(E,6)),I=this,b="";;){var w=$(I,y).g;I=O(I,w.j(y));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=w,P(I))return S+b;for(;6>S.length;)S="0"+S;b=S+b}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function P(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function D(E){return E.h==-1}r.l=function(E){return E=O(this,E),D(E)?-1:P(E)?0:1};function k(E){for(var y=E.g.length,I=[],b=0;b<y;b++)I[b]=~E.g[b];return new o(I,~E.h).add(g)}r.abs=function(){return D(this)?k(this):this},r.add=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],b=0,w=0;w<=y;w++){var S=b+(this.i(w)&65535)+(E.i(w)&65535),T=(S>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);b=T>>>16,S&=65535,T&=65535,I[w]=T<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function O(E,y){return E.add(k(y))}r.j=function(E){if(P(this)||P(E))return p;if(D(this))return D(E)?k(this).j(k(E)):k(k(this).j(E));if(D(E))return k(this.j(k(E)));if(0>this.l(v)&&0>E.l(v))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,I=[],b=0;b<2*y;b++)I[b]=0;for(b=0;b<this.g.length;b++)for(var w=0;w<E.g.length;w++){var S=this.i(b)>>>16,T=this.i(b)&65535,lt=E.i(w)>>>16,pr=E.i(w)&65535;I[2*b+2*w]+=T*pr,U(I,2*b+2*w),I[2*b+2*w+1]+=S*pr,U(I,2*b+2*w+1),I[2*b+2*w+1]+=T*lt,U(I,2*b+2*w+1),I[2*b+2*w+2]+=S*lt,U(I,2*b+2*w+2)}for(b=0;b<y;b++)I[b]=I[2*b+1]<<16|I[2*b];for(b=y;b<2*y;b++)I[b]=0;return new o(I,0)};function U(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function L(E,y){this.g=E,this.h=y}function $(E,y){if(P(y))throw Error("division by zero");if(P(E))return new L(p,p);if(D(E))return y=$(k(E),y),new L(k(y.g),k(y.h));if(D(y))return y=$(E,k(y)),new L(k(y.g),y.h);if(30<E.g.length){if(D(E)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var I=g,b=y;0>=b.l(E);)I=N(I),b=N(b);var w=M(I,1),S=M(b,1);for(b=M(b,2),I=M(I,2);!P(b);){var T=S.add(b);0>=T.l(E)&&(w=w.add(I),S=T),b=M(b,1),I=M(I,1)}return y=O(E,w.j(y)),new L(w,y)}for(w=p;0<=E.l(y);){for(I=Math.max(1,Math.floor(E.m()/y.m())),b=Math.ceil(Math.log(I)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),S=h(I),T=S.j(y);D(T)||0<T.l(E);)I-=b,S=h(I),T=S.j(y);P(S)&&(S=g),w=w.add(S),E=O(E,T)}return new L(w,E)}r.A=function(E){return $(this,E).h},r.and=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],b=0;b<y;b++)I[b]=this.i(b)&E.i(b);return new o(I,this.h&E.h)},r.or=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],b=0;b<y;b++)I[b]=this.i(b)|E.i(b);return new o(I,this.h|E.h)},r.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),I=[],b=0;b<y;b++)I[b]=this.i(b)^E.i(b);return new o(I,this.h^E.h)};function N(E){for(var y=E.g.length+1,I=[],b=0;b<y;b++)I[b]=E.i(b)<<1|E.i(b-1)>>>31;return new o(I,E.h)}function M(E,y){var I=y>>5;y%=32;for(var b=E.g.length-I,w=[],S=0;S<b;S++)w[S]=0<y?E.i(S+I)>>>y|E.i(S+I+1)<<32-y:E.i(S+I);return new o(w,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ld=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,un=o}).apply(typeof su<"u"?su:typeof self<"u"?self:typeof window<"u"?window:{});var Gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ud,Mr,hd,ti,pa,dd,fd,pd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gs=="object"&&Gs];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in d))break e;d=d[A]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,A={next:function(){if(!m&&d<a.length){var C=d++;return{value:u(C,a[C]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,A,C){for(var j=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)j[oe-2]=arguments[oe];return u.prototype[A].apply(m,j)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function k(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const A=a.length||0,C=m.length||0;a.length=A+C;for(let j=0;j<C;j++)a[A+j]=m[j]}else a.push(m)}}class O{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var N=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function M(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function E(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,u){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)a[d]=m[d];for(let C=0;C<I.length;C++)d=I[C],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function w(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=_o;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class lt{constructor(){this.h=this.g=null}add(u,d){const m=pr.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var pr=new O(()=>new pm,a=>a.reset());class pm{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let mr,gr=!1,_o=new lt,Kc=()=>{const a=c.Promise.resolve(void 0);mr=()=>{a.then(mm)}};var mm=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){S(d)}var u=pr;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}gr=!1};function bt(){this.s=this.s,this.C=this.C}bt.prototype.s=!1,bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var gm=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function yr(a,u){if(be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(N){e:{try{$(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ym[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yr.aa.h.call(this)}}P(yr,be);var ym={2:"touch",3:"pen",4:"mouse"};yr.prototype.h=function(){yr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ss="closure_listenable_"+(1e6*Math.random()|0),_m=0;function vm(a,u,d,m,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=A,this.key=++_m,this.da=this.fa=!1}function Rs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ps(a){this.src=a,this.g={},this.h=0}Ps.prototype.add=function(a,u,d,m,A){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var j=Io(a,u,m,A);return-1<j?(u=a[j],d||(u.fa=!1)):(u=new vm(u,this.src,C,!!m,A),u.fa=d,a.push(u)),u};function vo(a,u){var d=u.type;if(d in a.g){var m=a.g[d],A=Array.prototype.indexOf.call(m,u,void 0),C;(C=0<=A)&&Array.prototype.splice.call(m,A,1),C&&(Rs(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Io(a,u,d,m){for(var A=0;A<a.length;++A){var C=a[A];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==m)return A}return-1}var To="closure_lm_"+(1e6*Math.random()|0),Eo={};function Wc(a,u,d,m,A){if(Array.isArray(u)){for(var C=0;C<u.length;C++)Wc(a,u[C],d,m,A);return null}return d=Yc(d),a&&a[Ss]?a.K(u,d,h(m)?!!m.capture:!1,A):Im(a,u,d,!1,m,A)}function Im(a,u,d,m,A,C){if(!u)throw Error("Invalid event type");var j=h(A)?!!A.capture:!!A,oe=wo(a);if(oe||(a[To]=oe=new Ps(a)),d=oe.add(u,d,m,j,C),d.proxy)return d;if(m=Tm(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)gm||(A=j),A===void 0&&(A=!1),a.addEventListener(u.toString(),m,A);else if(a.attachEvent)a.attachEvent(Jc(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Tm(){function a(d){return u.call(a.src,a.listener,d)}const u=Em;return a}function Qc(a,u,d,m,A){if(Array.isArray(u))for(var C=0;C<u.length;C++)Qc(a,u[C],d,m,A);else m=h(m)?!!m.capture:!!m,d=Yc(d),a&&a[Ss]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],d=Io(C,d,m,A),-1<d&&(Rs(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=wo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Io(u,d,m,A)),(d=-1<a?u[a]:null)&&bo(d))}function bo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ss])vo(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(Jc(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=wo(u))?(vo(d,a),d.h==0&&(d.src=null,u[To]=null)):Rs(a)}}}function Jc(a){return a in Eo?Eo[a]:Eo[a]="on"+a}function Em(a,u){if(a.da)a=!0;else{u=new yr(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&bo(a),a=d.call(m,u)}return a}function wo(a){return a=a[To],a instanceof Ps?a:null}var Ao="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yc(a){return typeof a=="function"?a:(a[Ao]||(a[Ao]=function(u){return a.handleEvent(u)}),a[Ao])}function we(){bt.call(this),this.i=new Ps(this),this.M=this,this.F=null}P(we,bt),we.prototype[Ss]=!0,we.prototype.removeEventListener=function(a,u,d,m){Qc(this,a,u,d,m)};function xe(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new be(u,a);else if(u instanceof be)u.target=u.target||a;else{var A=u;u=new be(m,a),b(u,A)}if(A=!0,d)for(var C=d.length-1;0<=C;C--){var j=u.g=d[C];A=Cs(j,m,!0,u)&&A}if(j=u.g=a,A=Cs(j,m,!0,u)&&A,A=Cs(j,m,!1,u)&&A,d)for(C=0;C<d.length;C++)j=u.g=d[C],A=Cs(j,m,!1,u)&&A}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Rs(d[m]);delete a.g[u],a.h--}}this.F=null},we.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},we.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Cs(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,C=0;C<u.length;++C){var j=u[C];if(j&&!j.da&&j.capture==d){var oe=j.listener,Te=j.ha||j.src;j.fa&&vo(a.i,j),A=oe.call(Te,m)!==!1&&A}}return A&&!m.defaultPrevented}function Xc(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Zc(a){a.g=Xc(()=>{a.g=null,a.i&&(a.i=!1,Zc(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class bm extends bt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Zc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _r(a){bt.call(this),this.h=a,this.g={}}P(_r,bt);var el=[];function tl(a){M(a.g,function(u,d){this.g.hasOwnProperty(d)&&bo(u)},a),a.g={}}_r.prototype.N=function(){_r.aa.N.call(this),tl(this)},_r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var So=c.JSON.stringify,wm=c.JSON.parse,Am=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ro(){}Ro.prototype.h=null;function nl(a){return a.h||(a.h=a.i())}function rl(){}var vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Po(){be.call(this,"d")}P(Po,be);function Co(){be.call(this,"c")}P(Co,be);var Yt={},sl=null;function ks(){return sl=sl||new we}Yt.La="serverreachability";function il(a){be.call(this,Yt.La,a)}P(il,be);function Ir(a){const u=ks();xe(u,new il(u))}Yt.STAT_EVENT="statevent";function ol(a,u){be.call(this,Yt.STAT_EVENT,a),this.stat=u}P(ol,be);function De(a){const u=ks();xe(u,new ol(u,a))}Yt.Ma="timingevent";function al(a,u){be.call(this,Yt.Ma,a),this.size=u}P(al,be);function Tr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Er(){this.g=!0}Er.prototype.xa=function(){this.g=!1};function Sm(a,u,d,m,A,C){a.info(function(){if(a.g)if(C)for(var j="",oe=C.split("&"),Te=0;Te<oe.length;Te++){var te=oe[Te].split("=");if(1<te.length){var Ae=te[0];te=te[1];var Se=Ae.split("_");j=2<=Se.length&&Se[1]=="type"?j+(Ae+"="+te+"&"):j+(Ae+"=redacted&")}}else j=null;else j=C;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+d+`
`+j})}function Rm(a,u,d,m,A,C,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+d+`
`+C+" "+j})}function Cn(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Cm(a,d)+(m?" "+m:"")})}function Pm(a,u){a.info(function(){return"TIMEOUT: "+u})}Er.prototype.info=function(){};function Cm(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var j=1;j<A.length;j++)A[j]=""}}}}return So(d)}catch{return u}}var xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},cl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ko;function Ds(){}P(Ds,Ro),Ds.prototype.g=function(){return new XMLHttpRequest},Ds.prototype.i=function(){return{}},ko=new Ds;function wt(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new _r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ll}function ll(){this.i=null,this.g="",this.h=!1}var ul={},xo={};function Do(a,u,d){a.L=1,a.v=Os(ut(u)),a.m=d,a.P=!0,hl(a,null)}function hl(a,u){a.F=Date.now(),Vs(a),a.A=ut(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Al(d.i,"t",m),a.C=0,d=a.j.J,a.h=new ll,a.g=ql(a.j,d?u:null,!a.m),0<a.O&&(a.M=new bm(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(el[0]=A.toString()),A=el);for(var C=0;C<A.length;C++){var j=Wc(d,A[C],m||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ir(),Sm(a.i,a.u,a.A,a.l,a.R,a.m)}wt.prototype.ca=function(a){a=a.target;const u=this.M;u&&ht(a)==3?u.j():this.Y(a)},wt.prototype.Y=function(a){try{if(a==this.g)e:{const Se=ht(this.g);var u=this.g.Ba();const Dn=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||Dl(this.g)))){this.J||Se!=4||u==7||(u==8||0>=Dn?Ir(3):Ir(2)),Vo(this);var d=this.g.Z();this.X=d;t:if(dl(this)){var m=Dl(this.g);a="";var A=m.length,C=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xt(this),br(this);var j="";break t}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(C&&u==A-1)});m.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,Rm(this.i,this.u,this.A,this.l,this.R,Se,d),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Te=this.g;if((oe=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(oe)){var te=oe;break t}}te=null}if(d=te)Cn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,No(this,d);else{this.o=!1,this.s=3,De(12),Xt(this),br(this);break e}}if(this.P){d=!0;let Ge;for(;!this.J&&this.C<j.length;)if(Ge=km(this,j),Ge==xo){Se==4&&(this.s=4,De(14),d=!1),Cn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==ul){this.s=4,De(15),Cn(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Cn(this.i,this.l,Ge,null),No(this,Ge);if(dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||j.length!=0||this.h.h||(this.s=1,De(16),d=!1),this.o=this.o&&d,!d)Cn(this.i,this.l,j,"[Invalid Chunked Response]"),Xt(this),br(this);else if(0<j.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Bo(Ae),Ae.M=!0,De(11))}}else Cn(this.i,this.l,j,null),No(this,j);Se==4&&Xt(this),this.o&&!this.J&&(Se==4?jl(this.j,this):(this.o=!1,Vs(this)))}else Km(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Xt(this),br(this)}}}catch{}finally{}};function dl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function km(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?xo:(d=Number(u.substring(d,m)),isNaN(d)?ul:(m+=1,m+d>u.length?xo:(u=u.slice(m,m+d),a.C=m+d,u)))}wt.prototype.cancel=function(){this.J=!0,Xt(this)};function Vs(a){a.S=Date.now()+a.I,fl(a,a.I)}function fl(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Tr(g(a.ba,a),u)}function Vo(a){a.B&&(c.clearTimeout(a.B),a.B=null)}wt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Pm(this.i,this.A),this.L!=2&&(Ir(),De(17)),Xt(this),this.s=2,br(this)):fl(this,this.S-a)};function br(a){a.j.G==0||a.J||jl(a.j,a)}function Xt(a){Vo(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,tl(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function No(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Lo(d.h,a))){if(!a.K&&Lo(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)$s(d),Bs(d);else break e;jo(d),De(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Tr(g(d.Za,d),6e3));if(1>=gl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else en(d,11)}else if((a.K||d.g==a)&&$s(d),!U(u))for(A=d.Da.g.parse(u),u=0;u<A.length;u++){let te=A[u];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const Ae=te[3];Ae!=null&&(d.la=Ae,d.j.info("VER="+d.la));const Se=te[4];Se!=null&&(d.Aa=Se,d.j.info("SVER="+d.Aa));const Dn=te[5];Dn!=null&&typeof Dn=="number"&&0<Dn&&(m=1.5*Dn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ge=a.g;if(Ge){const zs=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zs){var C=m.h;C.g||zs.indexOf("spdy")==-1&&zs.indexOf("quic")==-1&&zs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Oo(C,C.h),C.h=null))}if(m.D){const Uo=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(m.ya=Uo,ce(m.I,m.D,Uo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var j=a;if(m.qa=$l(m,m.J?m.ia:null,m.W),j.K){yl(m.h,j);var oe=j,Te=m.L;Te&&(oe.I=Te),oe.B&&(Vo(oe),Vs(oe)),m.g=j}else Ml(m);0<d.i.length&&Us(d)}else te[0]!="stop"&&te[0]!="close"||en(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?en(d,7):Fo(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}Ir(4)}catch{}}var xm=class{constructor(a,u){this.g=a,this.map=u}};function pl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ml(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gl(a){return a.h?1:a.g?a.g.size:0}function Lo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Oo(a,u){a.g?a.g.add(u):a.h=u}function yl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}pl.prototype.cancel=function(){if(this.i=_l(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function _l(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function Dm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function Vm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function vl(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Vm(a),m=Dm(a),A=m.length,C=0;C<A;C++)u.call(void 0,m[C],d&&d[C],a)}var Il=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nm(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),A=null;if(0<=m){var C=a[d].substring(0,m);A=a[d].substring(m+1)}else C=a[d];u(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Zt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Zt){this.h=a.h,Ns(this,a.j),this.o=a.o,this.g=a.g,Ls(this,a.s),this.l=a.l;var u=a.i,d=new Sr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Tl(this,d),this.m=a.m}else a&&(u=String(a).match(Il))?(this.h=!1,Ns(this,u[1]||"",!0),this.o=wr(u[2]||""),this.g=wr(u[3]||"",!0),Ls(this,u[4]),this.l=wr(u[5]||"",!0),Tl(this,u[6]||"",!0),this.m=wr(u[7]||"")):(this.h=!1,this.i=new Sr(null,this.h))}Zt.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ar(u,El,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ar(u,El,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ar(d,d.charAt(0)=="/"?Mm:Om,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ar(d,jm)),a.join("")};function ut(a){return new Zt(a)}function Ns(a,u,d){a.j=d?wr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ls(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Tl(a,u,d){u instanceof Sr?(a.i=u,Bm(a.i,a.h)):(d||(u=Ar(u,Fm)),a.i=new Sr(u,a.h))}function ce(a,u,d){a.i.set(u,d)}function Os(a){return ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function wr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ar(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Lm),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Lm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var El=/[#\/\?@]/g,Om=/[#\?:]/g,Mm=/[#\?]/g,Fm=/[#\?@]/g,jm=/#/g;function Sr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function At(a){a.g||(a.g=new Map,a.h=0,a.i&&Nm(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Sr.prototype,r.add=function(a,u){At(this),this.i=null,a=kn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function bl(a,u){At(a),u=kn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function wl(a,u){return At(a),u=kn(a,u),a.g.has(u)}r.forEach=function(a,u){At(this),this.g.forEach(function(d,m){d.forEach(function(A){a.call(u,A,m,this)},this)},this)},r.na=function(){At(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const A=a[m];for(let C=0;C<A.length;C++)d.push(u[m])}return d},r.V=function(a){At(this);let u=[];if(typeof a=="string")wl(this,a)&&(u=u.concat(this.g.get(kn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return At(this),this.i=null,a=kn(this,a),wl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Al(a,u,d){bl(a,u),0<d.length&&(a.i=null,a.g.set(kn(a,u),D(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const C=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var A=C;j[m]!==""&&(A+="="+encodeURIComponent(String(j[m]))),a.push(A)}}return this.i=a.join("&")};function kn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Bm(a,u){u&&!a.j&&(At(a),a.i=null,a.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(bl(this,m),Al(this,A,d))},a)),a.j=u}function Um(a,u){const d=new Er;if(c.Image){const m=new Image;m.onload=v(St,d,"TestLoadImage: loaded",!0,u,m),m.onerror=v(St,d,"TestLoadImage: error",!1,u,m),m.onabort=v(St,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=v(St,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function $m(a,u){const d=new Er,m=new AbortController,A=setTimeout(()=>{m.abort(),St(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(C=>{clearTimeout(A),C.ok?St(d,"TestPingServer: ok",!0,u):St(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),St(d,"TestPingServer: error",!1,u)})}function St(a,u,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function qm(){this.g=new Am}function zm(a,u,d){const m=d||"";try{vl(a,function(A,C){let j=A;h(A)&&(j=So(A)),u.push(m+C+"="+encodeURIComponent(j))})}catch(A){throw u.push(m+"type="+encodeURIComponent("_badmap")),A}}function Ms(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Ms,Ro),Ms.prototype.g=function(){return new Fs(this.l,this.j)},Ms.prototype.i=function(a){return function(){return a}}({});function Fs(a,u){we.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Fs,we),r=Fs.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Pr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Pr(this)),this.g&&(this.readyState=3,Pr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Rr(this):Pr(this),this.readyState==3&&Sl(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Rr(this))},r.Qa=function(a){this.g&&(this.response=a,Rr(this))},r.ga=function(){this.g&&Rr(this)};function Rr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Pr(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Pr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Rl(a){let u="";return M(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Mo(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Rl(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ce(a,u,d))}function de(a){we.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(de,we);var Gm=/^https?$/i,Hm=["POST","PUT"];r=de.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ko.g(),this.v=this.o?nl(this.o):nl(ko),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){Pl(this,C);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Hm,u,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,j]of d)this.g.setRequestHeader(C,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xl(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){Pl(this,C)}};function Pl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Cl(a),js(a)}function Cl(a){a.A||(a.A=!0,xe(a,"complete"),xe(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,xe(this,"complete"),xe(this,"abort"),js(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),js(this,!0)),de.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?kl(this):this.bb())},r.bb=function(){kl(this)};function kl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ht(a)!=4||a.Z()!=2)){if(a.u&&ht(a)==4)Xc(a.Ea,0,a);else if(xe(a,"readystatechange"),ht(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=j===0){var A=String(a.D).match(Il)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!Gm.test(A?A.toLowerCase():"")}d=m}if(d)xe(a,"complete"),xe(a,"success");else{a.m=6;try{var C=2<ht(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",Cl(a)}}finally{js(a)}}}}function js(a,u){if(a.g){xl(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||xe(a,"ready");try{d.onreadystatechange=m}catch{}}}function xl(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function ht(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),wm(u)}};function Dl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Km(a){const u={};a=(a.g&&2<=ht(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(U(a[m]))continue;var d=w(a[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[A]||[];u[A]=C,C.push(d)}E(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Vl(a){this.Aa=0,this.i=[],this.j=new Er,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cr("baseRetryDelayMs",5e3,a),this.cb=Cr("retryDelaySeedMs",1e4,a),this.Wa=Cr("forwardChannelMaxRetries",2,a),this.wa=Cr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new pl(a&&a.concurrentRequestLimit),this.Da=new qm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Vl.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){De(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=$l(this,null,this.W),Us(this)};function Fo(a){if(Nl(a),a.G==3){var u=a.U++,d=ut(a.I);if(ce(d,"SID",a.K),ce(d,"RID",u),ce(d,"TYPE","terminate"),kr(a,d),u=new wt(a,a.j,u),u.L=2,u.v=Os(ut(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=ql(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Vs(u)}Ul(a)}function Bs(a){a.g&&(Bo(a),a.g.cancel(),a.g=null)}function Nl(a){Bs(a),a.u&&(c.clearTimeout(a.u),a.u=null),$s(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Us(a){if(!ml(a.h)&&!a.s){a.s=!0;var u=a.Ga;mr||Kc(),gr||(mr(),gr=!0),_o.add(u,a),a.B=0}}function Wm(a,u){return gl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Tr(g(a.Ga,a,u),Bl(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new wt(this,this.j,a);let C=this.o;if(this.S&&(C?(C=y(C),b(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Ol(this,A,u),d=ut(this.I),ce(d,"RID",a),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),kr(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Rl(C)))+"&"+u:this.m&&Mo(d,this.m,C)),Oo(this.h,A),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",u),ce(d,"SID","null"),A.T=!0,Do(A,d,null)):Do(A,d,u),this.G=2}}else this.G==3&&(a?Ll(this,a):this.i.length==0||ml(this.h)||Ll(this))};function Ll(a,u){var d;u?d=u.l:d=a.U++;const m=ut(a.I);ce(m,"SID",a.K),ce(m,"RID",d),ce(m,"AID",a.T),kr(a,m),a.m&&a.o&&Mo(m,a.m,a.o),d=new wt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Ol(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Oo(a.h,d),Do(d,m,u)}function kr(a,u){a.H&&M(a.H,function(d,m){ce(u,m,d)}),a.l&&vl({},function(d,m){ce(u,m,d)})}function Ol(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var A=a.i;let C=-1;for(;;){const j=["count="+d];C==-1?0<d?(C=A[0].g,j.push("ofs="+C)):C=0:j.push("ofs="+C);let oe=!0;for(let Te=0;Te<d;Te++){let te=A[Te].g;const Ae=A[Te].map;if(te-=C,0>te)C=Math.max(0,A[Te].g-100),oe=!1;else try{zm(Ae,j,"req"+te+"_")}catch{m&&m(Ae)}}if(oe){m=j.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Ml(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;mr||Kc(),gr||(mr(),gr=!0),_o.add(u,a),a.v=0}}function jo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Tr(g(a.Fa,a),Bl(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Tr(g(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Bs(this),Fl(this))};function Bo(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Fl(a){a.g=new wt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=ut(a.qa);ce(u,"RID","rpc"),ce(u,"SID",a.K),ce(u,"AID",a.T),ce(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ce(u,"TO",a.ja),ce(u,"TYPE","xmlhttp"),kr(a,u),a.m&&a.o&&Mo(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Os(ut(u)),d.m=null,d.P=!0,hl(d,a)}r.Za=function(){this.C!=null&&(this.C=null,Bs(this),jo(this),De(19))};function $s(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function jl(a,u){var d=null;if(a.g==u){$s(a),Bo(a),a.g=null;var m=2}else if(Lo(a.h,u))d=u.D,yl(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;m=ks(),xe(m,new al(m,d)),Us(a)}else Ml(a);else if(A=u.s,A==3||A==0&&0<u.X||!(m==1&&Wm(a,u)||m==2&&jo(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),A){case 1:en(a,5);break;case 4:en(a,10);break;case 3:en(a,6);break;default:en(a,2)}}}function Bl(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function en(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const A=!m;m=new Zt(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ns(m,"https"),Os(m),A?Um(m.toString(),d):$m(m.toString(),d)}else De(2);a.G=0,a.l&&a.l.sa(u),Ul(a),Nl(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Ul(a){if(a.G=0,a.ka=[],a.l){const u=_l(a.h);(u.length!=0||a.i.length!=0)&&(k(a.ka,u),k(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function $l(a,u,d){var m=d instanceof Zt?ut(d):new Zt(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ls(m,m.s);else{var A=c.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var C=new Zt(null);m&&Ns(C,m),u&&(C.g=u),A&&Ls(C,A),d&&(C.l=d),m=C}return d=a.D,u=a.ya,d&&u&&ce(m,d,u),ce(m,"VER",a.la),kr(a,m),m}function ql(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new de(new Ms({eb:d})):new de(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function zl(){}r=zl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function qs(){}qs.prototype.g=function(a,u){return new Be(a,u)};function Be(a,u){we.call(this),this.g=new Vl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!U(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new xn(this)}P(Be,we),Be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){Fo(this.g)},Be.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=So(a),a=d);u.i.push(new xm(u.Ya++,a)),u.G==3&&Us(u)},Be.prototype.N=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,Be.aa.N.call(this)};function Gl(a){Po.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}P(Gl,Po);function Hl(){Co.call(this),this.status=1}P(Hl,Co);function xn(a){this.g=a}P(xn,zl),xn.prototype.ua=function(){xe(this.g,"a")},xn.prototype.ta=function(a){xe(this.g,new Gl(a))},xn.prototype.sa=function(a){xe(this.g,new Hl)},xn.prototype.ra=function(){xe(this.g,"b")},qs.prototype.createWebChannel=qs.prototype.g,Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,pd=function(){return new qs},fd=function(){return ks()},dd=Yt,pa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xs.NO_ERROR=0,xs.TIMEOUT=8,xs.HTTP_ERROR=6,ti=xs,cl.COMPLETE="complete",hd=cl,rl.EventType=vr,vr.OPEN="a",vr.CLOSE="b",vr.ERROR="c",vr.MESSAGE="d",we.prototype.listen=we.prototype.K,Mr=rl,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,ud=de}).apply(typeof Gs<"u"?Gs:typeof self<"u"?self:typeof window<"u"?window:{});const iu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new $a("@firebase/firestore");function Mn(){return pn.logLevel}function V(r,...e){if(pn.logLevel<=Y.DEBUG){const t=e.map(za);pn.debug(`Firestore (${cr}): ${r}`,...t)}}function pe(r,...e){if(pn.logLevel<=Y.ERROR){const t=e.map(za);pn.error(`Firestore (${cr}): ${r}`,...t)}}function es(r,...e){if(pn.logLevel<=Y.WARN){const t=e.map(za);pn.warn(`Firestore (${cr}): ${r}`,...t)}}function za(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(r="Unexpected state"){const e=`FIRESTORE (${cr}) INTERNAL ASSERTION FAILED: `+r;throw pe(e),new Error(e)}function G(r,e){r||q()}function z(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Dy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class Vy{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new et;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new et,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new et)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string"),new xy(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new Pe(e)}}class Ny{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ly{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Ny(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Oy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class My{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){G(this.o===void 0);const n=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new Oy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=Fy(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function W(r,e){return r<e?-1:r>e?1:0}function Wn(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function gd(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new F(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new he(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new he(0,0))}static max(){return new H(new he(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,n){t===void 0?t=0:t>e.length&&q(),n===void 0?n=e.length-t:n>e.length-t&&q(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ts.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ts?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ne extends ts{construct(e,t,n){return new ne(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new F(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const jy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ue extends ts{construct(e,t,n){return new ue(e,t,n)}static isValidIdentifier(e){return jy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ue(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new F(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new F(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ue(t)}static emptyPath(){return new ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ne.fromString(e))}static fromName(e){return new B(ne.fromString(e).popFirst(5))}static empty(){return new B(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ne(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function ma(r){return r.fields.find(e=>e.kind===2)}function sn(r){return r.fields.filter(e=>e.kind!==2)}yi.UNKNOWN_ID=-1;class ni{constructor(e,t){this.fieldPath=e,this.kind=t}}class ns{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ns(0,qe.min())}}function yd(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=H.fromTimestamp(n===1e9?new he(t+1,0):new he(t,n));return new qe(s,B.empty(),e)}function _d(r){return new qe(r.readTime,r.key,-1)}class qe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new qe(H.min(),B.empty(),-1)}static max(){return new qe(H.max(),B.empty(),-1)}}function Ga(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(r.documentKey,e.documentKey),t!==0?t:W(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Id{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(r){if(r.code!==x.FAILED_PRECONDITION||r.message!==vd)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,n)=>{t(e)})}static reject(e){return new R((t,n)=>{n(e)})}static waitFor(e){return new R((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=R.resolve(!1);for(const n of e)t=t.next(s=>s?R.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new R((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&n(o)},f=>s(f))}})}static doWhile(e,t){return new R((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new et,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new qr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=Ha(n.target.error);this.V.reject(new qr(e,s))}}static open(e,t,n,s){try{return new Ui(t,e.transaction(s,n))}catch(i){throw new qr(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Uy(t)}}class jt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,jt.S(ye())===12.2&&pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),on(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!nd())return!1;if(jt.v())return!0;const e=ye(),t=jt.S(e),n=0<t&&t<10,s=Td(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new qr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new F(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new F(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new qr(e,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=Ui.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),R.reject(h))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Td(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class By{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return on(this.B.delete())}}class qr extends F{constructor(e,t){super(x.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Kt(r){return r.name==="IndexedDbTransactionError"}class Uy{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(V("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),on(n)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),on(this.store.add(e))}get(e){return on(this.store.get(e)).next(t=>(t===void 0&&(t=null),V("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),on(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),on(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new R((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new R((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){V("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new R((n,s)=>{t.onerror=i=>{const o=Ha(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new R((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new By(c),h=t(c.primaryKey,c.value,l);if(h instanceof R){const f=h.catch(p=>(l.done(),R.reject(p)));n.push(f)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>R.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function on(r){return new R((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Ha(n.target.error);t(s)}})}let ou=!1;function Ha(r){const e=jt.S(ye());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new F("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ou||(ou=!0,setTimeout(()=>{throw n},0)),n}}return r}class $y{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){V("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{V("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Kt(t)?V("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Ht(t)}await this.X(6e4)})}}class qy{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return R.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return V("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(V("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=_d(i);Ga(o,n)>0&&(n=o)}),new qe(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fe.oe=-1;function $i(r){return r==null}function rs(r){return r===0&&1/r==-1/0}function Ed(r){return typeof r=="number"&&Number.isInteger(r)&&!rs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=au(e)),e=zy(r.get(t),e);return au(e)}function zy(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function au(r){return r+""}function Ye(r){const e=r.length;if(G(e>=2),e===2)return G(r.charAt(0)===""&&r.charAt(1)===""),ne.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&q(),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:q()}i=o+2}return new ne(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(r,e){return[r,Ve(e)]}function bd(r,e,t){return[r,Ve(e),t]}const Gy={},Hy=["prefixPath","collectionGroup","readTime","documentId"],Ky=["prefixPath","collectionGroup","documentId"],Wy=["collectionGroup","readTime","prefixPath","documentId"],Qy=["canonicalId","targetId"],Jy=["targetId","path"],Yy=["path","targetId"],Xy=["collectionId","parent"],Zy=["indexId","uid"],e_=["uid","sequenceNumber"],t_=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],n_=["indexId","uid","orderedDocumentKey"],r_=["userId","collectionPath","documentId"],s_=["userId","collectionPath","largestBatchId"],i_=["userId","collectionGroup","largestBatchId"],wd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],o_=[...wd,"documentOverlays"],Ad=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Sd=Ad,Ka=[...Sd,"indexConfiguration","indexState","indexEntries"],a_=Ka,c_=[...Ka,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends Id{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ve(r,e){const t=z(r);return jt.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function bn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Rd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hs(this.root,e,this.comparator,!0)}}class Hs{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Ee.RED,this.left=s??Ee.EMPTY,this.right=i??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Ee(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,n,s,i){return this}insert(e,t,n){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uu(this.data.getIterator())}getIteratorFrom(e){return new uu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ie(this.comparator);return t.data=e,t}}class uu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Vn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.fields=e,e.sort(ue.comparator)}static empty(){return new je([])}unionWith(e){let t=new ie(ue.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Pd("Invalid base64 string: "+i):i}}(e);return new me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const l_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(r){if(G(!!r),typeof r=="string"){let e=0;const t=l_.exec(r);if(G(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:le(r.seconds),nanos:le(r.nanos)}}function le(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function $t(r){return typeof r=="string"?me.fromBase64String(r):me.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Qa(r){const e=r.mapValue.fields.__previous_value__;return Wa(e)?Qa(e):e}function ss(r){const e=It(r.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t,n,s,i,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class mn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},si={nullValue:"NULL_VALUE"};function gn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Wa(r)?4:Cd(r)?9007199254740991:qi(r)?10:11:q()}function nt(r,e){if(r===e)return!0;const t=gn(r);if(t!==gn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ss(r).isEqual(ss(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=It(s.timestampValue),c=It(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return $t(s.bytesValue).isEqual($t(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return le(s.geoPointValue.latitude)===le(i.geoPointValue.latitude)&&le(s.geoPointValue.longitude)===le(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return le(s.integerValue)===le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=le(s.doubleValue),c=le(i.doubleValue);return o===c?rs(o)===rs(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return Wn(r.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(lu(o)!==lu(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!nt(o[l],c[l])))return!1;return!0}(r,e);default:return q()}}function is(r,e){return(r.values||[]).find(t=>nt(t,e))!==void 0}function qt(r,e){if(r===e)return 0;const t=gn(r),n=gn(e);if(t!==n)return W(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=le(i.integerValue||i.doubleValue),l=le(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return hu(r.timestampValue,e.timestampValue);case 4:return hu(ss(r),ss(e));case 5:return W(r.stringValue,e.stringValue);case 6:return function(i,o){const c=$t(i),l=$t(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=W(c[h],l[h]);if(f!==0)return f}return W(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=W(le(i.latitude),le(o.latitude));return c!==0?c:W(le(i.longitude),le(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return du(r.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},g=o.fields||{},v=(c=p.value)===null||c===void 0?void 0:c.arrayValue,P=(l=g.value)===null||l===void 0?void 0:l.arrayValue,D=W(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:du(v,P)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Lt.mapValue&&o===Lt.mapValue)return 0;if(i===Lt.mapValue)return 1;if(o===Lt.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=W(l[p],f[p]);if(g!==0)return g;const v=qt(c[l[p]],h[f[p]]);if(v!==0)return v}return W(l.length,f.length)}(r.mapValue,e.mapValue);default:throw q()}}function hu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return W(r,e);const t=It(r),n=It(e),s=W(t.seconds,n.seconds);return s!==0?s:W(t.nanos,n.nanos)}function du(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=qt(t[s],n[s]);if(i)return i}return W(t.length,n.length)}function Qn(r){return ya(r)}function ya(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=It(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return $t(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return B.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=ya(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${ya(t.fields[o])}`;return s+"}"}(r.mapValue):q()}function os(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function _a(r){return!!r&&"integerValue"in r}function as(r){return!!r&&"arrayValue"in r}function fu(r){return!!r&&"nullValue"in r}function pu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ii(r){return!!r&&"mapValue"in r}function qi(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function zr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return bn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=zr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function Cd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const kd={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function h_(r){return"nullValue"in r?si:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?os(mn.empty(),B.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?qi(r)?kd:{mapValue:{}}:q()}function d_(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?os(mn.empty(),B.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?kd:"mapValue"in r?qi(r)?{mapValue:{}}:Lt:q()}function mu(r,e){const t=qt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function gu(r,e){const t=qt(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ii(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(t)}setAll(e){let t=ue.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=zr(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());ii(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];ii(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){bn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Ce(zr(this.value))}}function xd(r){const e=[];return bn(r.fields,(t,n)=>{const s=new ue([t]);if(ii(n)){const i=xd(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new fe(e,0,H.min(),H.min(),H.min(),Ce.empty(),0)}static newFoundDocument(e,t,n,s){return new fe(e,1,t,H.min(),n,s,0)}static newNoDocument(e,t){return new fe(e,2,t,H.min(),H.min(),Ce.empty(),0)}static newUnknownDocument(e,t){return new fe(e,3,t,H.min(),H.min(),Ce.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t){this.position=e,this.inclusive=t}}function yu(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=B.comparator(B.fromName(o.referenceValue),t.key):n=qt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function _u(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!nt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t="asc"){this.field=e,this.dir=t}}function f_(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{}class X extends Dd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new p_(e,t,n):t==="array-contains"?new y_(e,n):t==="in"?new Fd(e,n):t==="not-in"?new __(e,n):t==="array-contains-any"?new v_(e,n):new X(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new m_(e,n):new g_(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(qt(t,this.value)):t!==null&&gn(this.value)===gn(t)&&this.matchesComparison(qt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Dd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new re(e,t)}matches(e){return Yn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Yn(r){return r.op==="and"}function va(r){return r.op==="or"}function Ja(r){return Vd(r)&&Yn(r)}function Vd(r){for(const e of r.filters)if(e instanceof re)return!1;return!0}function Ia(r){if(r instanceof X)return r.field.canonicalString()+r.op.toString()+Qn(r.value);if(Ja(r))return r.filters.map(e=>Ia(e)).join(",");{const e=r.filters.map(t=>Ia(t)).join(",");return`${r.op}(${e})`}}function Nd(r,e){return r instanceof X?function(n,s){return s instanceof X&&n.op===s.op&&n.field.isEqual(s.field)&&nt(n.value,s.value)}(r,e):r instanceof re?function(n,s){return s instanceof re&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&Nd(o,s.filters[c]),!0):!1}(r,e):void q()}function Ld(r,e){const t=r.filters.concat(e);return re.create(t,r.op)}function Od(r){return r instanceof X?function(t){return`${t.field.canonicalString()} ${t.op} ${Qn(t.value)}`}(r):r instanceof re?function(t){return t.op.toString()+" {"+t.getFilters().map(Od).join(" ,")+"}"}(r):"Filter"}class p_ extends X{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class m_ extends X{constructor(e,t){super(e,"in",t),this.keys=Md("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class g_ extends X{constructor(e,t){super(e,"not-in",t),this.keys=Md("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Md(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>B.fromName(n.referenceValue))}class y_ extends X{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return as(t)&&is(t.arrayValue,this.value)}}class Fd extends X{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&is(this.value.arrayValue,t)}}class __ extends X{constructor(e,t){super(e,"not-in",t)}matches(e){if(is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!is(this.value.arrayValue,t)}}class v_ extends X{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!as(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>is(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Ta(r,e=null,t=[],n=[],s=null,i=null,o=null){return new I_(r,e,t,n,s,i,o)}function yn(r){const e=z(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Ia(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),$i(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Qn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Qn(n)).join(",")),e.ue=t}return e.ue}function gs(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!f_(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Nd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!_u(r.startAt,e.startAt)&&_u(r.endAt,e.endAt)}function _i(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function vi(r,e){return r.filters.filter(t=>t instanceof X&&t.field.isEqual(e))}function vu(r,e,t){let n=si,s=!0;for(const i of vi(r,e)){let o=si,c=!0;switch(i.op){case"<":case"<=":o=h_(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=si}mu({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];mu({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Iu(r,e,t){let n=Lt,s=!0;for(const i of vi(r,e)){let o=Lt,c=!0;switch(i.op){case">=":case">":o=d_(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Lt}gu({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];gu({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jd(r,e,t,n,s,i,o,c){return new lr(r,e,t,n,s,i,o,c)}function zi(r){return new lr(r)}function Tu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Bd(r){return r.collectionGroup!==null}function Gr(r){const e=z(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ie(ue.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new cs(i,n))}),t.has(ue.keyField().canonicalString())||e.ce.push(new cs(ue.keyField(),n))}return e.ce}function $e(r){const e=z(r);return e.le||(e.le=T_(e,Gr(r))),e.le}function T_(r,e){if(r.limitType==="F")return Ta(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new cs(s.field,i)});const t=r.endAt?new Jn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Jn(r.startAt.position,r.startAt.inclusive):null;return Ta(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Ea(r,e){const t=r.filters.concat([e]);return new lr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ba(r,e,t){return new lr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Gi(r,e){return gs($e(r),$e(e))&&r.limitType===e.limitType}function Ud(r){return`${yn($e(r))}|lt:${r.limitType}`}function Fn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Od(s)).join(", ")}]`),$i(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Qn(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Qn(s)).join(",")),`Target(${n})`}($e(r))}; limitType=${r.limitType})`}function ys(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Gr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const h=yu(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,Gr(n),s)||n.endAt&&!function(o,c,l){const h=yu(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,Gr(n),s))}(r,e)}function $d(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function qd(r){return(e,t)=>{let n=!1;for(const s of Gr(r)){const i=E_(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function E_(r,e,t){const n=r.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?qt(l,h):q()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Rd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new ae(B.comparator);function Ue(){return b_}const zd=new ae(B.comparator);function Fr(...r){let e=zd;for(const t of r)e=e.insert(t.key,t);return e}function Gd(r){let e=zd;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Xe(){return Hr()}function Hd(){return Hr()}function Hr(){return new Wt(r=>r.toString(),(r,e)=>r.isEqual(e))}const w_=new ae(B.comparator),A_=new ie(B.comparator);function Q(...r){let e=A_;for(const t of r)e=e.add(t);return e}const S_=new ie(W);function Ya(){return S_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rs(e)?"-0":e}}function Kd(r){return{integerValue:""+r}}function R_(r,e){return Ed(e)?Kd(e):Xa(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this._=void 0}}function P_(r,e,t){return r instanceof Xn?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wa(i)&&(i=Qa(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof Zn?Qd(r,e):r instanceof er?Jd(r,e):function(s,i){const o=Wd(s,i),c=Eu(o)+Eu(s.Pe);return _a(o)&&_a(s.Pe)?Kd(c):Xa(s.serializer,c)}(r,e)}function C_(r,e,t){return r instanceof Zn?Qd(r,e):r instanceof er?Jd(r,e):t}function Wd(r,e){return r instanceof ls?function(n){return _a(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Xn extends Hi{}class Zn extends Hi{constructor(e){super(),this.elements=e}}function Qd(r,e){const t=Yd(e);for(const n of r.elements)t.some(s=>nt(s,n))||t.push(n);return{arrayValue:{values:t}}}class er extends Hi{constructor(e){super(),this.elements=e}}function Jd(r,e){let t=Yd(e);for(const n of r.elements)t=t.filter(s=>!nt(s,n));return{arrayValue:{values:t}}}class ls extends Hi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Eu(r){return le(r.integerValue||r.doubleValue)}function Yd(r){return as(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.field=e,this.transform=t}}function k_(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Zn&&s instanceof Zn||n instanceof er&&s instanceof er?Wn(n.elements,s.elements,nt):n instanceof ls&&s instanceof ls?nt(n.Pe,s.Pe):n instanceof Xn&&s instanceof Xn}(r.transform,e.transform)}class x_{constructor(e,t){this.version=e,this.transformResults=t}}class ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oi(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ki{}function Zd(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Wi(r.key,ke.none()):new ur(r.key,r.data,ke.none());{const t=r.data,n=Ce.empty();let s=new ie(ue.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Et(r.key,n,new je(s.toArray()),ke.none())}}function D_(r,e,t){r instanceof ur?function(s,i,o){const c=s.value.clone(),l=wu(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Et?function(s,i,o){if(!oi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=wu(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ef(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Kr(r,e,t,n){return r instanceof ur?function(i,o,c,l){if(!oi(i.precondition,o))return c;const h=i.value.clone(),f=Au(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof Et?function(i,o,c,l){if(!oi(i.precondition,o))return c;const h=Au(i.fieldTransforms,l,o),f=o.data;return f.setAll(ef(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,c){return oi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function V_(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Wd(n.transform,s||null);i!=null&&(t===null&&(t=Ce.empty()),t.set(n.field,i))}return t||null}function bu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Wn(n,s,(i,o)=>k_(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ur extends Ki{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Et extends Ki{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ef(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function wu(r,e,t){const n=new Map;G(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,C_(o,c,t[s]))}return n}function Au(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,P_(i,o,e))}return n}class Wi extends Ki{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tf extends Ki{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&D_(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Kr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Kr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Hd();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Zd(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,(t,n)=>bu(t,n))&&Wn(this.baseMutations,e.baseMutations,(t,n)=>bu(t,n))}}class ec{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){G(e.mutations.length===n.length);let s=function(){return w_}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new ec(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,ee;function L_(r){switch(r){default:return q();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function nf(r){if(r===void 0)return pe("GRPC error has no .code"),x.UNKNOWN;switch(r){case ge.OK:return x.OK;case ge.CANCELLED:return x.CANCELLED;case ge.UNKNOWN:return x.UNKNOWN;case ge.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case ge.INTERNAL:return x.INTERNAL;case ge.UNAVAILABLE:return x.UNAVAILABLE;case ge.UNAUTHENTICATED:return x.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case ge.NOT_FOUND:return x.NOT_FOUND;case ge.ALREADY_EXISTS:return x.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return x.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case ge.ABORTED:return x.ABORTED;case ge.OUT_OF_RANGE:return x.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return x.UNIMPLEMENTED;case ge.DATA_LOSS:return x.DATA_LOSS;default:return q()}}(ee=ge||(ge={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=new un([4294967295,4294967295],0);function Su(r){const e=O_().encode(r),t=new ld;return t.update(e),new Uint8Array(t.digest())}function Ru(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new un([t,n],0),new un([s,i],0)]}class nc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new jr(`Invalid padding: ${t}`);if(n<0)throw new jr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new jr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new jr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=un.fromNumber(this.Ie)}Ee(e,t,n){let s=e.add(t.multiply(un.fromNumber(n)));return s.compare(M_)===1&&(s=new un([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Su(e),[n,s]=Ru(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nc(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Su(e),[n,s]=Ru(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,vs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new _s(H.min(),s,new ae(W),Ue(),Q())}}class vs{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new vs(n,t,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class rf{constructor(e,t){this.targetId=e,this.me=t}}class sf{constructor(e,t,n=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Pu{constructor(){this.fe=0,this.ge=ku(),this.pe=me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Q(),t=Q(),n=Q();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:q()}}),new vs(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=ku()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class F_{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ue(),this.qe=Cu(),this.Qe=new ae(W)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,n=e.me.count,s=this.Je(t);if(s){const i=s.target;if(_i(i))if(n===0){const o=new B(i.path);this.Ue(t,o,fe.newNoDocument(o,H.min()))}else G(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=$t(n).toUint8Array()}catch(l){if(l instanceof Pd)return es("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new nc(o,s,i)}catch(l){return es(l instanceof jr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&_i(c.target)){const l=new B(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,fe.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=Q();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new _s(e,t,this.Qe,this.ke,n);return this.ke=Ue(),this.qe=Cu(),this.Qe=new ae(W),s}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Pu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ie(W),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Pu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Cu(){return new ae(B.comparator)}function ku(){return new ae(B.comparator)}const j_={asc:"ASCENDING",desc:"DESCENDING"},B_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},U_={and:"AND",or:"OR"};class $_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wa(r,e){return r.useProto3Json||$i(e)?e:{value:e}}function tr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function of(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function q_(r,e){return tr(r,e.toTimestamp())}function Ne(r){return G(!!r),H.fromTimestamp(function(t){const n=It(t);return new he(n.seconds,n.nanos)}(r))}function rc(r,e){return Aa(r,e).canonicalString()}function Aa(r,e){const t=function(s){return new ne(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function af(r){const e=ne.fromString(r);return G(gf(e)),e}function Ii(r,e){return rc(r.databaseId,e.path)}function hn(r,e){const t=af(e);if(t.get(1)!==r.databaseId.projectId)throw new F(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new F(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new B(uf(t))}function cf(r,e){return rc(r.databaseId,e)}function lf(r){const e=af(r);return e.length===4?ne.emptyPath():uf(e)}function Sa(r){return new ne(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function uf(r){return G(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function xu(r,e,t){return{name:Ii(r,e),fields:t.value.mapValue.fields}}function z_(r,e,t){const n=hn(r,e.name),s=Ne(e.updateTime),i=e.createTime?Ne(e.createTime):H.min(),o=new Ce({mapValue:{fields:e.fields}}),c=fe.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function G_(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(G(f===void 0||typeof f=="string"),me.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array),me.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?x.UNKNOWN:nf(h.code);return new F(f,h.message||"")}(o);t=new sf(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=hn(r,n.document.name),i=Ne(n.document.updateTime),o=n.document.createTime?Ne(n.document.createTime):H.min(),c=new Ce({mapValue:{fields:n.document.fields}}),l=fe.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new ai(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=hn(r,n.document),i=n.readTime?Ne(n.readTime):H.min(),o=fe.newNoDocument(s,i),c=n.removedTargetIds||[];t=new ai([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=hn(r,n.document),i=n.removedTargetIds||[];t=new ai([],i,s,null)}else{if(!("filter"in e))return q();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new N_(s,i),c=n.targetId;t=new rf(c,o)}}return t}function Ti(r,e){let t;if(e instanceof ur)t={update:xu(r,e.key,e.value)};else if(e instanceof Wi)t={delete:Ii(r,e.key)};else if(e instanceof Et)t={update:xu(r,e.key,e.data),updateMask:Y_(e.fieldMask)};else{if(!(e instanceof tf))return q();t={verify:Ii(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof Xn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Zn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof er)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ls)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw q()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:q_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(r,e.precondition)),t}function Ra(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ke.updateTime(Ne(i.updateTime)):i.exists!==void 0?ke.exists(i.exists):ke.none()}(e.currentDocument):ke.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)G(c.setToServerValue==="REQUEST_TIME"),l=new Xn;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new Zn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new er(f)}else"increment"in c?l=new ls(o,c.increment):q();const h=ue.fromServerFormat(c.fieldPath);return new Xd(h,l)}(r,s)):[];if(e.update){e.update.name;const s=hn(r,e.update.name),i=new Ce({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new je(h.map(f=>ue.fromServerFormat(f)))}(e.updateMask);return new Et(s,i,o,t,n)}return new ur(s,i,t,n)}if(e.delete){const s=hn(r,e.delete);return new Wi(s,t)}if(e.verify){const s=hn(r,e.verify);return new tf(s,t)}return q()}function H_(r,e){return r&&r.length>0?(G(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?Ne(s.updateTime):Ne(i);return o.isEqual(H.min())&&(o=Ne(i)),new x_(o,s.transformResults||[])}(t,e))):[]}function hf(r,e){return{documents:[cf(r,e.path)]}}function df(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=cf(r,s);const i=function(h){if(h.length!==0)return mf(re.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:jn(g.field),direction:W_(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=wa(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function ff(r){let e=lf(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){G(n===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const g=pf(p);return g instanceof re&&Ja(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(P){return new cs(Bn(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,$i(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,v=p.values||[];return new Jn(v,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,v=p.values||[];return new Jn(v,g)}(t.endAt)),jd(e,s,o,i,c,"F",l,h)}function K_(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Bn(t.unaryFilter.field);return X.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Bn(t.unaryFilter.field);return X.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bn(t.unaryFilter.field);return X.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bn(t.unaryFilter.field);return X.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(r):r.fieldFilter!==void 0?function(t){return X.create(Bn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return re.create(t.compositeFilter.filters.map(n=>pf(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(r):q()}function W_(r){return j_[r]}function Q_(r){return B_[r]}function J_(r){return U_[r]}function jn(r){return{fieldPath:r.canonicalString()}}function Bn(r){return ue.fromServerFormat(r.fieldPath)}function mf(r){return r instanceof X?function(t){if(t.op==="=="){if(pu(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NAN"}};if(fu(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pu(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NAN"}};if(fu(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jn(t.field),op:Q_(t.op),value:t.value}}}(r):r instanceof re?function(t){const n=t.getFilters().map(s=>mf(s));return n.length===1?n[0]:{compositeFilter:{op:J_(t.op),filters:n}}}(r):q()}function Y_(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t,n,s,i=H.min(),o=H.min(),c=me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.ct=e}}function X_(r,e){let t;if(e.document)t=z_(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=B.fromSegments(e.noDocument.path),s=vn(e.noDocument.readTime);t=fe.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const n=B.fromSegments(e.unknownDocument.path),s=vn(e.unknownDocument.version);t=fe.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new he(s[0],s[1]);return H.fromTimestamp(i)}(e.readTime)),t}function Du(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Ei(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Ii(i,o.key),fields:o.data.value.mapValue.fields,updateTime:tr(i,o.version.toTimestamp()),createTime:tr(i,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:_n(e.version)};else{if(!e.isUnknownDocument())return q();n.unknownDocument={path:t.path.toArray(),version:_n(e.version)}}return n}function Ei(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function _n(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function vn(r){const e=new he(r.seconds,r.nanoseconds);return H.fromTimestamp(e)}function an(r,e){const t=(e.baseMutations||[]).map(i=>Ra(r.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>Ra(r.ct,i)),s=he.fromMillis(e.localWriteTimeMs);return new Za(e.batchId,s,t,n)}function Br(r){const e=vn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?vn(r.lastLimboFreeSnapshotVersion):H.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return G(i.documents.length===1),$e(zi(lf(i.documents[0])))}(r.query):function(i){return $e(ff(i))}(r.query),new mt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,me.fromBase64String(r.resumeToken))}function _f(r,e){const t=_n(e.snapshotVersion),n=_n(e.lastLimboFreeSnapshotVersion);let s;s=_i(e.target)?hf(r.ct,e.target):df(r.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:yn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function vf(r){const e=ff({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ba(e,e.limit,"L"):e}function Ko(r,e){return new tc(e.largestBatchId,Ra(r.ct,e.overlayMutation))}function Vu(r,e){const t=e.path.lastSegment();return[r,Ve(e.path.popLast()),t]}function Nu(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:_n(n.readTime),documentKey:Ve(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{getBundleMetadata(e,t){return Lu(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:vn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return Lu(e).put(function(s){return{bundleId:s.id,createTime:_n(Ne(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Ou(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:vf(i.bundledQuery),readTime:vn(i.readTime)}}(n)})}saveNamedQuery(e,t){return Ou(e).put(function(s){return{name:s.name,readTime:_n(Ne(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Lu(r){return ve(r,"bundles")}function Ou(r){return ve(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new Qi(e,n)}getOverlay(e,t){return xr(e).get(Vu(this.userId,t)).next(n=>n?Ko(this.serializer,n):null)}getOverlays(e,t){const n=Xe();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new tc(t,o);s.push(this.ht(e,c))}),R.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(Ve(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(xr(e).j("collectionPathOverlayIndex",c))}),R.waitFor(i)}getOverlaysForCollection(e,t,n){const s=Xe(),i=Ve(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return xr(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const h=Ko(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=Xe();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return xr(e).J({index:"collectionGroupOverlayIndex",range:c},(l,h,f)=>{const p=Ko(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return xr(e).put(function(s,i,o){const[c,l,h]=Vu(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ti(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function xr(r){return ve(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{Pt(e){return ve(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?me.fromUint8Array(n):me.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(le(e.integerValue));else if("doubleValue"in e){const n=le(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),rs(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=It(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt($t(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?Cd(e)?this.dt(t,Number.MAX_SAFE_INTEGER):qi(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):q()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const s of Object.keys(n))this.Vt(s,t),this.Tt(n[s],t)}wt(e,t){var n,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(le(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const s of n)this.Tt(s,t)}yt(e,t){this.dt(t,37),B.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}cn.vt=new cn;function tv(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Mu(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=tv(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class nv{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),n=Mu(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),n=Mu(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class rv{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class sv{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Dr{constructor(){this.jt=new nv,this.Ht=new rv(this.jt),this.Jt=new sv(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new ln(this.indexId,this.documentKey,this.arrayValue,n)}}function Rt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Fu(r.arrayValue,e.arrayValue),t!==0?t:(t=Fu(r.directionalValue,e.directionalValue),t!==0?t:B.comparator(r.documentKey,e.documentKey)))}function Fu(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.Xt=new ie((t,n)=>ue.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(G(e.collectionGroup===this.collectionId),this.nn)return!1;const t=ma(e);if(t!==void 0&&!this.sn(t))return!1;const n=sn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ie(ue.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ni(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ni(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ni(n.field,n.dir==="asc"?0:1)));return new yi(yi.UNKNOWN_ID,this.collectionId,t,ns.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(r){var e,t;if(G(r instanceof X||r instanceof re),r instanceof X){if(r instanceof Fd){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>X.create(r.field,"==",i)))||[];return re.create(s,"or")}return r}const n=r.filters.map(s=>If(s));return re.create(n,r.op)}function iv(r){if(r.getFilters().length===0)return[];const e=ka(If(r));return G(Tf(e)),Pa(e)||Ca(e)?[e]:e.getFilters()}function Pa(r){return r instanceof X}function Ca(r){return r instanceof re&&Ja(r)}function Tf(r){return Pa(r)||Ca(r)||function(t){if(t instanceof re&&va(t)){for(const n of t.getFilters())if(!Pa(n)&&!Ca(n))return!1;return!0}return!1}(r)}function ka(r){if(G(r instanceof X||r instanceof re),r instanceof X)return r;if(r.filters.length===1)return ka(r.filters[0]);const e=r.filters.map(n=>ka(n));let t=re.create(e,r.op);return t=bi(t),Tf(t)?t:(G(t instanceof re),G(Yn(t)),G(t.filters.length>1),t.filters.reduce((n,s)=>sc(n,s)))}function sc(r,e){let t;return G(r instanceof X||r instanceof re),G(e instanceof X||e instanceof re),t=r instanceof X?e instanceof X?function(s,i){return re.create([s,i],"and")}(r,e):Bu(r,e):e instanceof X?Bu(e,r):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),Yn(s)&&Yn(i))return Ld(s,i.getFilters());const o=va(s)?s:i,c=va(s)?i:s,l=o.filters.map(h=>sc(h,c));return re.create(l,"or")}(r,e),bi(t)}function Bu(r,e){if(Yn(e))return Ld(e,r.getFilters());{const t=e.filters.map(n=>sc(r,n));return re.create(t,"or")}}function bi(r){if(G(r instanceof X||r instanceof re),r instanceof X)return r;const e=r.getFilters();if(e.length===1)return bi(e[0]);if(Vd(r))return r;const t=e.map(s=>bi(s)),n=[];return t.forEach(s=>{s instanceof X?n.push(s):s instanceof re&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:re.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this.un=new ic}addToCollectionParentIndex(e,t){return this.un.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(qe.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(qe.min())}updateCollectionGroup(e,t,n){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class ic{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ie(ne.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ie(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new Uint8Array(0);class av{constructor(e,t){this.databaseId=t,this.cn=new ic,this.ln=new Wt(n=>yn(n),(n,s)=>gs(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:Ve(s)};return Uu(e).put(i)}return R.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[gd(t),""],!1,!0);return Uu(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(Ye(o.parent))}return n})}addFieldIndex(e,t){const n=Vr(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Ln(e);return i.next(c=>{o.put(Nu(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Vr(e),s=Ln(e),i=Nn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Vr(e),n=Nn(e),s=Ln(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return R.forEach(this.hn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new ju(n).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Nn(e);let s=!0;const i=new Map;return R.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=Q();const c=[];return R.forEach(i,(l,h)=>{V("IndexedDbIndexManager",`Using index ${function(L){return`id=${L.indexId}|cg=${L.collectionGroup}|f=${L.fields.map($=>`${$.fieldPath}:${$.kind}`).join(",")}`}(l)} to execute ${yn(t)}`);const f=function(L,$){const N=ma($);if(N===void 0)return null;for(const M of vi(L,N.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(h,l),p=function(L,$){const N=new Map;for(const M of sn($))for(const E of vi(L,M.fieldPath))switch(E.op){case"==":case"in":N.set(M.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return N.set(M.fieldPath.canonicalString(),E.value),Array.from(N.values())}return null}(h,l),g=function(L,$){const N=[];let M=!0;for(const E of sn($)){const y=E.kind===0?vu(L,E.fieldPath,L.startAt):Iu(L,E.fieldPath,L.startAt);N.push(y.value),M&&(M=y.inclusive)}return new Jn(N,M)}(h,l),v=function(L,$){const N=[];let M=!0;for(const E of sn($)){const y=E.kind===0?Iu(L,E.fieldPath,L.endAt):vu(L,E.fieldPath,L.endAt);N.push(y.value),M&&(M=y.inclusive)}return new Jn(N,M)}(h,l),P=this.In(l,h,g),D=this.In(l,h,v),k=this.Tn(l,h,p),O=this.En(l.indexId,f,P,g.inclusive,D,v.inclusive,k);return R.forEach(O,U=>n.G(U,t.limit).next(L=>{L.forEach($=>{const N=B.fromSegments($.documentKey);o.has(N)||(o=o.add(N),c.push(N))})}))}).next(()=>c)}return R.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=iv(re.create(e.filters,"and")).map(n=>Ta(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const g=t?this.dn(t[p/h]):Ks,v=this.An(e,g,n[p%h],s),P=this.Rn(e,g,i[p%h],o),D=c.map(k=>this.An(e,g,k,!0));f.push(...this.createRange(v,P,D))}return f}An(e,t,n,s){const i=new ln(e,B.empty(),t,n);return s?i:i.Zt()}Rn(e,t,n,s){const i=new ln(e,B.empty(),t,n);return s?i.Zt():i}Pn(e,t){const n=new ju(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.hn(t);return R.forEach(s,i=>this.Pn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new ie(ue.comparator),f=!1;for(const p of l.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:h=h.add(g.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Vn(e,t){const n=new Dr;for(const s of sn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Yt(s.kind);cn.vt.It(i,o)}return n.zt()}dn(e){const t=new Dr;return cn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Dr;return cn.vt.It(os(this.databaseId,t),n.Yt(function(i){const o=sn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let s=[];s.push(new Dr);let i=0;for(const o of sn(e)){const c=n[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&as(c))s=this.gn(s,o,c);else{const h=l.Yt(o.kind);cn.vt.It(c,h)}}return this.pn(s)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new Dr;l.seed(c.zt()),cn.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(n=>n instanceof X&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Vr(e),s=Ln(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return R.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const g=p?new ns(p.sequenceNumber,new qe(vn(p.readTime),new B(Ye(p.documentKey)),p.largestBatchId)):ns.empty(),v=f.fields.map(([P,D])=>new ni(ue.fromServerFormat(P),D));return new yi(f.indexId,f.collectionGroup,v,g)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:W(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Vr(e),i=Ln(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>R.forEach(c,l=>i.put(Nu(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return R.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),R.forEach(c,l=>this.wn(e,s,l).next(h=>{const f=this.Sn(i,l);return h.isEqual(f)?R.resolve():this.bn(e,i,l,h,f)}))))})}Dn(e,t,n,s){return Nn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,s){return Nn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const s=Nn(e);let i=new ie(Rt);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,c)=>{i=i.add(new ln(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let n=new ie(Rt);const s=this.Vn(t,e);if(s==null)return n;const i=ma(t);if(i!=null){const o=e.data.field(i.fieldPath);if(as(o))for(const c of o.arrayValue.values||[])n=n.add(new ln(t.indexId,e.key,this.dn(c),s))}else n=n.add(new ln(t.indexId,e.key,Ks,s));return n}bn(e,t,n,s,i){V("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,g){const v=l.getIterator(),P=h.getIterator();let D=Vn(v),k=Vn(P);for(;D||k;){let O=!1,U=!1;if(D&&k){const L=f(D,k);L<0?U=!0:L>0&&(O=!0)}else D!=null?U=!0:O=!0;O?(p(k),k=Vn(P)):U?(g(D),D=Vn(v)):(D=Vn(v),k=Vn(P))}}(s,i,Rt,c=>{o.push(this.Dn(e,t,n,c))},c=>{o.push(this.vn(e,t,n,c))}),R.waitFor(o)}yn(e){let t=1;return Ln(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>Rt(o,c)).filter((o,c,l)=>!c||Rt(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=Rt(o,e),l=Rt(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Ks,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Ks,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return Rt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next($u)}getMinOffset(e,t){return R.mapArray(this.hn(t),n=>this.Pn(e,n).next(s=>s||q())).next($u)}}function Uu(r){return ve(r,"collectionParents")}function Nn(r){return ve(r,"indexEntries")}function Vr(r){return ve(r,"indexConfiguration")}function Ln(r){return ve(r,"indexState")}function $u(r){G(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Ga(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new qe(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Me{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Me(e,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.J({range:o},(f,p,g)=>(c++,g.delete()));i.push(l.next(()=>{G(c===1)}));const h=[];for(const f of t.mutations){const p=bd(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return R.waitFor(i).next(()=>h)}function wi(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw q();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.DEFAULT_COLLECTION_PERCENTILE=10,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Me.DEFAULT=new Me(41943040,Me.DEFAULT_COLLECTION_PERCENTILE,Me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Me.DISABLED=new Me(-1,0,0);class Ji{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(e,t,n,s){G(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Ji(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Pt(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=Un(e),o=Pt(e);return o.add({}).next(c=>{G(typeof c=="number");const l=new Za(c,t,n,s),h=function(v,P,D){const k=D.baseMutations.map(U=>Ti(v.ct,U)),O=D.mutations.map(U=>Ti(v.ct,U));return{userId:P,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:k,mutations:O}}(this.serializer,this.userId,l),f=[];let p=new ie((g,v)=>W(g.canonicalString(),v.canonicalString()));for(const g of s){const v=bd(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),f.push(o.put(h)),f.push(i.put(v,Gy))}return p.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),R.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return Pt(e).get(t).next(n=>n?(G(n.userId===this.userId),an(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?R.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Pt(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(G(c.batchId>=n),i=an(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Pt(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Pt(e).U("userMutationsIndex",t).next(n=>n.map(s=>an(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ri(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Un(e).J({range:s},(o,c,l)=>{const[h,f,p]=o,g=Ye(f);if(h===this.userId&&t.path.isEqual(g))return Pt(e).get(p).next(v=>{if(!v)throw q();G(v.userId===this.userId),i.push(an(this.serializer,v))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(W);const s=[];return t.forEach(i=>{const o=ri(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=Un(e).J({range:c},(h,f,p)=>{const[g,v,P]=h,D=Ye(v);g===this.userId&&i.path.isEqual(D)?n=n.add(P):p.done()});s.push(l)}),R.waitFor(s).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=ri(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new ie(W);return Un(e).J({range:o},(l,h,f)=>{const[p,g,v]=l,P=Ye(g);p===this.userId&&n.isPrefixOf(P)?P.length===s&&(c=c.add(v)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(Pt(e).get(i).next(o=>{if(o===null)throw q();G(o.userId===this.userId),n.push(an(this.serializer,o))}))}),R.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return Ef(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),R.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Un(e).J({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=Ye(i[1]);s.push(l)}else c.done()}).next(()=>{G(s.length===0)})})}containsKey(e,t){return bf(e,this.userId,t)}Nn(e){return wf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function bf(r,e,t){const n=ri(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Un(r).J({range:i,H:!0},(c,l,h)=>{const[f,p,g]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function Pt(r){return ve(r,"mutations")}function Un(r){return ve(r,"documentMutations")}function wf(r){return ve(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new In(0)}static kn(){return new In(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new In(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>H.fromTimestamp(new he(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>On(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(G(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return On(e).J((o,c)=>{const l=Br(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>R.waitFor(i)).next(()=>s)}forEachTarget(e,t){return On(e).J((n,s)=>{const i=Br(s);t(i)})}qn(e){return zu(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Qn(e,t){return zu(e).put("targetGlobalKey",t)}Kn(e,t){return On(e).put(_f(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=yn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return On(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const h=Br(c);gs(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=xt(e);return t.forEach(o=>{const c=Ve(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),R.waitFor(s)}removeMatchingKeys(e,t,n){const s=xt(e);return R.forEach(t,i=>{const o=Ve(i.path);return R.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=xt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=xt(e);let i=Q();return s.J({range:n,H:!0},(o,c,l)=>{const h=Ye(o[1]),f=new B(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=Ve(t.path),s=IDBKeyRange.bound([n],[gd(n)],!1,!0);let i=0;return xt(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return On(e).get(t).next(n=>n?Br(n):null)}}function On(r){return ve(r,"targets")}function zu(r){return ve(r,"targetGlobal")}function xt(r){return ve(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu([r,e],[t,n]){const s=W(r,t);return s===0?W(e,n):s}class lv{constructor(e){this.Un=e,this.buffer=new ie(Gu),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Gu(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class uv{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Kt(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ht(t)}await this.Hn(3e5)})}}class hv{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Fe.oe);const n=new lv(t);return this.Jn.forEachTarget(e,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(qu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qu):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),Mn()<=Y.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function dv(r,e){return new hv(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.db=e,this.garbageCollector=dv(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,s)=>t(s))}addReference(e,t,n){return Ws(e,n)}removeReference(e,t,n){return Ws(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Ws(e,t)}nr(e,t){return function(s,i){let o=!1;return wf(s).Y(c=>bf(s,c,i).next(l=>(l&&(o=!0),R.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,H.min()),xt(e).delete(function(p){return[0,Ve(p.path)]}(o))))});s.push(l)}}).next(()=>R.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Ws(e,t)}tr(e,t){const n=xt(e);let s,i=Fe.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==Fe.oe&&t(new B(Ye(s)),i),i=h,s=l):i=Fe.oe}).next(()=>{i!==Fe.oe&&t(new B(Ye(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Ws(r,e){return xt(r).put(function(n,s){return{targetId:0,path:Ve(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.changes=new Wt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?R.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return tn(e).put(n)}removeEntry(e,t,n){return tn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Ei(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=fe.newInvalidDocument(t);return tn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Nr(t))},(s,i)=>{n=this.ir(t,i)}).next(()=>n)}sr(e,t){let n={size:0,document:fe.newInvalidDocument(t)};return tn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Nr(t))},(s,i)=>{n={document:this.ir(t,i),size:wi(i)}}).next(()=>n)}getEntries(e,t){let n=Ue();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);n=n.insert(s,o)}).next(()=>n)}ar(e,t){let n=Ue(),s=new ae(B.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);n=n.insert(i,c),s=s.insert(i,wi(o))}).next(()=>({documents:n,ur:s}))}_r(e,t,n){if(t.isEmpty())return R.resolve();let s=new ie(Wu);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Nr(s.first()),Nr(s.last())),o=s.getIterator();let c=o.getNext();return tn(e).J({index:"documentKeyIndex",range:i},(l,h,f)=>{const p=B.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Wu(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Nr(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Ei(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return tn(e).U(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Ue();for(const p of h){const g=this.ir(B.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(ys(t,g)||s.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=Ue();const o=Ku(t,n),c=Ku(t,qe.max());return tn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.ir(B.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new mv(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Hu(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}rr(e,t){return Hu(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=X_(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(H.min())))return n}return fe.newInvalidDocument(e)}}function Sf(r){return new pv(r)}class mv extends Af{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Wt(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new ie((i,o)=>W(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Du(this.cr.serializer,o);s=s.add(i.path.popLast());const h=wi(l);n+=h-c.size,t.push(this.cr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=Du(this.cr.serializer,o.convertToNoDocument(H.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,n)),R.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Hu(r){return ve(r,"remoteDocumentGlobal")}function tn(r){return ve(r,"remoteDocumentsV14")}function Nr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ku(r,e){const t=e.documentKey.path.toArray();return[r,Ei(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Wu(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=W(t[i],n[i]),s)return s;return s=W(t.length,n.length),s||(s=W(t[t.length-2],n[n.length-2]),s||W(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Kr(n.mutation,s,je.empty(),he.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Q()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Q()){const s=Xe();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Fr();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Xe();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Q()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=Ue();const o=Hr(),c=function(){return Hr()}();return t.forEach((l,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Et)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Kr(f.mutation,h,f.mutation.getFieldMask(),he.now())):o.set(h.key,je.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new gv(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Hr();let s=new ae((o,c)=>o-c),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||je.empty();f=c.applyToLocalView(h,f),n.set(l,f);const p=(s.get(c.batchId)||Q()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Hd();f.forEach(g=>{if(!i.has(g)){const v=Zd(t.get(g),n.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return R.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):R.resolve(Xe());let c=-1,l=i;return o.next(h=>R.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Q())).next(f=>({batchId:c,changes:Gd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(n=>{let s=Fr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Fr();return this.indexManager.getCollectionParents(e,i).next(c=>R.forEach(c,l=>{const h=function(p,g){return new lr(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,fe.newInvalidDocument(f)))});let c=Fr();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Kr(f.mutation,h,je.empty(),he.now()),ys(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return R.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:vf(s.bundledQuery),readTime:Ne(s.readTime)}}(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this.overlays=new ae(B.comparator),this.Ir=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Xe();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.ht(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),R.resolve()}getOverlaysForCollection(e,t,n){const s=Xe(),i=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ae((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=Xe(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Xe(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return R.resolve(c)}ht(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new tc(t,n));let i=this.Ir.get(t);i===void 0&&(i=Q(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this.Tr=new ie(Ie.Er),this.dr=new ie(Ie.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Ie(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new B(new ne([])),n=new Ie(t,e),s=new Ie(t,e+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new ne([])),n=new Ie(t,e),s=new Ie(t,e+1);let i=Q();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ie(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||W(e.wr,t.wr)}static Ar(e,t){return W(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ie(Ie.Er)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Za(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ie(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.vr(n),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const c=this.Dr(o.wr);i.push(c)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(W);return t.forEach(s=>{const i=new Ie(s,0),o=new Ie(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{n=n.add(c.wr)})}),R.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;B.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new B(i),0);let c=new ie(W);return this.br.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),R.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const s=this.Dr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return R.forEach(t.mutations,s=>{const i=new Ie(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Ie(t,0),s=this.br.firstAfterOrEqual(n);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.Mr=e,this.docs=function(){return new ae(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return R.resolve(n?n.document.mutableCopy():fe.newInvalidDocument(t))}getEntries(e,t){let n=Ue();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():fe.newInvalidDocument(s))}),R.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ue();const o=t.path,c=new B(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Ga(_d(f),n)<=0||(s.has(f.key)||ys(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,n,s){q()}Or(e,t){return R.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Ev(this)}getSize(e){return R.resolve(this.size)}}class Ev extends Af{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(n)}),R.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.persistence=e,this.Nr=new Wt(t=>yn(t),gs),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new oc,this.targetCount=0,this.kr=In.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),R.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new In(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Kn(t),R.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return R.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),R.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return R.resolve(n)}containsKey(e,t){return R.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Fe(0),this.Kr=!1,this.Kr=!0,this.$r=new vv,this.referenceDelegate=e(this),this.Ur=new bv(this),this.indexManager=new ov,this.remoteDocumentCache=function(s){return new Tv(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new yf(t),this.Gr=new yv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _v,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Iv(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const s=new wv(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return R.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class wv extends Id{constructor(e){super(),this.currentSequenceNumber=e}}class Yi{constructor(e){this.persistence=e,this.Jr=new oc,this.Yr=null}static Zr(e){return new Yi(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),R.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),R.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,n=>{const s=B.fromPath(n);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return R.or([()=>R.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.serializer=e}O(e,t,n,s){const i=new Ui("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cu,{unique:!0}),l.createObjectStore("documentMutations")}(e),Qu(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=R.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Qu(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",cu,{unique:!0});const p=h.store("mutations"),g=f.map(v=>p.put(v));return R.waitFor(g)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ni(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&s>=7&&(o=o.next(()=>this.ii(i))),n<8&&s>=8&&(o=o.next(()=>this.si(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.oi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:r_});h.createIndex("collectionPathOverlayIndex",s_,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",i_,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:Hy});h.createIndex("documentKeyIndex",Ky),h.createIndex("collectionGroupIndex",Wy)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Zy}).createIndex("sequenceNumberIndex",e_,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:t_}).createIndex("documentKeyIndex",n_,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=wi(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>R.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>R.forEach(c,l=>{G(l.userId===i.userId);const h=an(this.serializer,l);return Ef(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,c)=>{const l=new ne(o),h=function(p){return[0,Ve(p)]}(l);i.push(t.get(h).next(f=>f?R.resolve():(p=>t.put({targetId:0,path:Ve(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>R.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:Xy});const n=t.store("collectionParents"),s=new ic,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:Ve(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new ne(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],h)=>{const f=Ye(c);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,s)=>{const i=Br(s),o=_f(this.serializer,i);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new B(ne.fromString(p.document.name).popFirst(5)):p.noDocument?B.fromSegments(p.noDocument.path):p.unknownDocument?B.fromSegments(p.unknownDocument.path):q()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>R.waitFor(s))}ai(e,t){const n=t.store("mutations"),s=Sf(this.serializer),i=new Pf(Yi.Zr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:Q();an(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),R.forEach(c,(l,h)=>{const f=new Pe(h),p=Qi.lt(this.serializer,f),g=i.getIndexManager(f),v=Ji.lt(f,this.serializer,g,i.referenceDelegate);return new Rf(s,v,p,g).recalculateAndSaveOverlaysForDocumentKeys(new ga(t,Fe.oe),l).next()})})}}function Qu(r){r.createObjectStore("targetDocuments",{keyPath:Jy}).createIndex("documentTargetsIndex",Yy,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Qy,{unique:!0}),r.createObjectStore("targetGlobal")}const Wo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ac{constructor(e,t,n,s,i,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!ac.D())throw new F(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new fv(this,s),this.Ai=t+"main",this.serializer=new yf(l),this.Ri=new jt(this.Ai,this.hi,new Av(this.serializer)),this.$r=new ev,this.Ur=new cv(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Sf(this.serializer),this.Gr=new Z_,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&pe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new F(x.FAILED_PRECONDITION,Wo);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Fe(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Qs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Kt(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Lr(e).get("owner").next(t=>R.resolve(this.vi(t)))}Ci(e){return Qs(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ve(t,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return R.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?R.resolve(!0):Lr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new F(x.FAILED_PRECONDITION,Wo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Qs(e).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ga(e,Fe.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Qs(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Ji.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new av(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Qi.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){V("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?c_:l===16?a_:l===15?Ka:l===14?Sd:l===13?Ad:l===12?o_:l===11?wd:void q()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new ga(c,this.Qr?this.Qr.next():Fe.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw pe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new F(x.FAILED_PRECONDITION,vd);return n(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Lr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new F(x.FAILED_PRECONDITION,Wo)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Lr(e).put("owner",t)}static D(){return jt.D()}bi(e){const t=Lr(e);return t.get("owner").next(n=>this.vi(n)?(V("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):R.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(pe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;td()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return pe("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){pe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Lr(r){return ve(r,"owner")}function Qs(r){return ve(r,"clientMetadata")}function Cf(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=s}static Wi(e,t){let n=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new cc(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return td()?8:Td(ye())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Sv;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,n,s){return n.documentReadCount<this.ji?(Mn()<=Y.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Fn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Mn()<=Y.DEBUG&&V("QueryEngine","Query:",Fn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(Mn()<=Y.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Fn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$e(t))):R.resolve())}Yi(e,t){if(Tu(t))return R.resolve(null);let n=$e(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ba(t,null,"F"),n=$e(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=Q(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,ba(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,n,s){return Tu(t)||s.isEqual(H.min())?R.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const o=this.ts(t,i);return this.ns(t,o,n,s)?R.resolve(null):(Mn()<=Y.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fn(t)),this.rs(e,o,t,yd(s,-1)).next(c=>c))})}ts(e,t){let n=new ie(qd(e));return t.forEach((s,i)=>{ys(e,i)&&(n=n.add(i))}),n}ns(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,n){return Mn()<=Y.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Fn(t)),this.Ji.getDocumentsMatchingQuery(e,t,qe.min(),n)}rs(e,t,n,s){return this.Ji.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,t,n,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ae(W),this._s=new Wt(i=>yn(i),gs),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Rf(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function xf(r,e,t,n){return new Rv(r,e,t,n)}async function Df(r,e){const t=z(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=Q();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function Pv(r,e){const t=z(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let v=R.resolve();return g.forEach(P=>{v=v.next(()=>f.getEntry(l,P)).next(D=>{const k=h.docVersions.get(P);G(k!==null),D.version.compareTo(k)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),v.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=Q();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Vf(r){const e=z(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Cv(r,e){const t=z(r),n=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(me.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,n)),s=s.insert(p,v),function(D,k,O){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(g,v,f)&&c.push(t.Ur.updateTargetData(i,v))});let l=Ue(),h=Q();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(kv(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!n.isEqual(H.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return R.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function kv(r,e,t){let n=Q(),s=Q();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Ue();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function xv(r,e){const t=z(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Ai(r,e){const t=z(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ur.getTargetData(n,e).next(i=>i?(s=i,R.resolve(s)):t.Ur.allocateTargetId(n).next(o=>(s=new mt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function nr(r,e,t){const n=z(r),s=n.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Kt(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(s.target)}function xa(r,e,t){const n=z(r);let s=H.min(),i=Q();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=z(l),g=p._s.get(f);return g!==void 0?R.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(n,o,$e(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?s:H.min(),t?i:Q())).next(c=>(Of(n,$d(e),c),{documents:c,Ts:i})))}function Nf(r,e){const t=z(r),n=z(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,e).next(o=>o?o.target:null))}function Lf(r,e){const t=z(r),n=t.us.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,yd(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Of(t,e,s),s))}function Of(r,e,t){let n=r.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(e,n)}function Ju(r,e){return`firestore_clients_${r}_${e}`}function Yu(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function Qo(r,e){return`firestore_targets_${r}_${e}`}class Si{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Rs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new F(s.error.code,s.error.message))),o?new Si(e,t,s.state,i):(pe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wr{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new F(n.error.code,n.error.message))),i?new Wr(e,n.state,s):(pe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ri{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Ya();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=Ed(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Ri(e,i):(pe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class lc{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new lc(t.clientId,t.onlineState):(pe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Da{constructor(){this.activeTargetIds=Ya()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jo{constructor(e,t,n,s,i){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ae(W),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Ju(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Da),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const s=this.getItem(Ju(this.persistenceKey,n));if(s){const i=Ri.Rs(n,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Qo(this.persistenceKey,e));if(s){const i=Wr.Rs(e,s);i&&(n=i.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Qo(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V("SharedClientState","READ",e,t),t}setItem(e,t){V("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(V("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void pe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(i){let o=Fe.oe;if(i!=null)try{const c=JSON.parse(i);G(typeof c=="number"),o=c}catch(c){pe("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==Fe.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const s=new Si(this.currentUser,e,t,n),i=Yu(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=Yu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const s=Qo(this.persistenceKey,e),i=new Wr(e,t,n);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return Ri.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Si.Rs(new Pe(i),s,t)}Ys(e,t){const n=this.Ms.exec(e),s=Number(n[1]);return Wr.Rs(s,t)}Ls(e){return lc.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(n),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Ya();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Mf{constructor(){this.so=new Da,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Da,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js=null;function Yo(){return Js===null?Js=function(){return 268435456+Math.round(2147483648*Math.random())}():Js++,"0x"+Js.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="WebChannelConnection";class Lv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,n,s,i,o){const c=Yo(),l=this.xo(t,n.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw es("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,n,s,i,o,c){return this.Mo(t,n,s,i,o)}Oo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,n){const s=Vv[t];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,s){const i=Yo();return new Promise((o,c)=>{const l=new ud;l.setWithCredentials(!0),l.listenOnce(hd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ti.NO_ERROR:const f=l.getResponseJson();V(Re,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case ti.TIMEOUT:V(Re,`RPC '${e}' ${i} timed out`),c(new F(x.DEADLINE_EXCEEDED,"Request time out"));break;case ti.HTTP_ERROR:const p=l.getStatus();if(V(Re,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const P=function(k){const O=k.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(O)>=0?O:x.UNKNOWN}(v.status);c(new F(P,v.message))}else c(new F(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new F(x.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{V(Re,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);V(Re,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,n,15)})}Bo(e,t,n){const s=Yo(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pd(),c=fd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");V(Re,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,v=!1;const P=new Nv({Io:k=>{v?V(Re,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(g||(V(Re,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),V(Re,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},To:()=>p.close()}),D=(k,O,U)=>{k.listen(O,L=>{try{U(L)}catch($){setTimeout(()=>{throw $},0)}})};return D(p,Mr.EventType.OPEN,()=>{v||(V(Re,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),D(p,Mr.EventType.CLOSE,()=>{v||(v=!0,V(Re,`RPC '${e}' stream ${s} transport closed`),P.So())}),D(p,Mr.EventType.ERROR,k=>{v||(v=!0,es(Re,`RPC '${e}' stream ${s} transport errored:`,k),P.So(new F(x.UNAVAILABLE,"The operation could not be completed")))}),D(p,Mr.EventType.MESSAGE,k=>{var O;if(!v){const U=k.data[0];G(!!U);const L=U,$=L.error||((O=L[0])===null||O===void 0?void 0:O.error);if($){V(Re,`RPC '${e}' stream ${s} received error:`,$);const N=$.status;let M=function(I){const b=ge[I];if(b!==void 0)return nf(b)}(N),E=$.message;M===void 0&&(M=x.INTERNAL,E="Unknown error status: "+N+" with message "+$.message),v=!0,P.So(new F(M,E)),p.close()}else V(Re,`RPC '${e}' stream ${s} received:`,U),P.bo(U)}}),D(c,dd.STAT_EVENT,k=>{k.stat===pa.PROXY?V(Re,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===pa.NOPROXY&&V(Re,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(){return typeof window<"u"?window:null}function ci(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(r){return new $_(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t,n,s,i,o,c,l){this.ui=e,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new jf(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(pe(t.toString()),pe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===t&&this.P_(n,s)},n=>{e(()=>{const s=new F(x.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ov extends Bf{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=G_(this.serializer,e),n=function(i){if(!("targetChange"in i))return H.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Ne(o.readTime):H.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Sa(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=_i(l)?{documents:hf(i,l)}:{query:df(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=of(i,o.resumeToken);const h=wa(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=tr(i,o.snapshotVersion.toTimestamp());const h=wa(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=K_(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Sa(this.serializer),t.removeTarget=e,this.a_(t)}}class Mv extends Bf{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return G(!!e.streamToken),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=H_(e.writeResults,e.commitTime),n=Ne(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Sa(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Ti(this.serializer,n))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new F(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Aa(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(x.UNKNOWN,i.toString())})}Lo(e,t,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Aa(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(x.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class jv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(pe(t),this.D_=!1):V("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{wn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=z(l);h.L_.add(4),await Is(h),h.q_.set("Unknown"),h.L_.delete(4),await Zi(h)}(this))})}),this.q_=new jv(n,s)}}async function Zi(r){if(wn(r))for(const e of r.B_)await e(!0)}async function Is(r){for(const e of r.B_)await e(!1)}function eo(r,e){const t=z(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),dc(t)?hc(t):dr(t).r_()&&uc(t,e))}function rr(r,e){const t=z(r),n=dr(t);t.N_.delete(e),n.r_()&&Uf(t,e),t.N_.size===0&&(n.r_()?n.o_():wn(t)&&t.q_.set("Unknown"))}function uc(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dr(r).A_(e)}function Uf(r,e){r.Q_.xe(e),dr(r).R_(e)}function hc(r){r.Q_=new F_({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),dr(r).start(),r.q_.v_()}function dc(r){return wn(r)&&!dr(r).n_()&&r.N_.size>0}function wn(r){return z(r).L_.size===0}function $f(r){r.Q_=void 0}async function Uv(r){r.q_.set("Online")}async function $v(r){r.N_.forEach((e,t)=>{uc(r,e)})}async function qv(r,e){$f(r),dc(r)?(r.q_.M_(e),hc(r)):r.q_.set("Unknown")}async function zv(r,e,t){if(r.q_.set("Online"),e instanceof sf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(r,e)}catch(n){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Pi(r,n)}else if(e instanceof ai?r.Q_.Ke(e):e instanceof rf?r.Q_.He(e):r.Q_.We(e),!t.isEqual(H.min()))try{const n=await Vf(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(me.EMPTY_BYTE_STRING,f.snapshotVersion)),Uf(i,l);const p=new mt(f.target,l,h,f.sequenceNumber);uc(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){V("RemoteStore","Failed to raise snapshot:",n),await Pi(r,n)}}async function Pi(r,e,t){if(!Kt(e))throw e;r.L_.add(1),await Is(r),r.q_.set("Offline"),t||(t=()=>Vf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Zi(r)})}function qf(r,e){return e().catch(t=>Pi(r,t,e))}async function hr(r){const e=z(r),t=zt(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Gv(e);)try{const s=await xv(e.localStore,n);if(s===null){e.O_.length===0&&t.o_();break}n=s.batchId,Hv(e,s)}catch(s){await Pi(e,s)}zf(e)&&Gf(e)}function Gv(r){return wn(r)&&r.O_.length<10}function Hv(r,e){r.O_.push(e);const t=zt(r);t.r_()&&t.V_&&t.m_(e.mutations)}function zf(r){return wn(r)&&!zt(r).n_()&&r.O_.length>0}function Gf(r){zt(r).start()}async function Kv(r){zt(r).p_()}async function Wv(r){const e=zt(r);for(const t of r.O_)e.m_(t.mutations)}async function Qv(r,e,t){const n=r.O_.shift(),s=ec.from(n,e,t);await qf(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await hr(r)}async function Jv(r,e){e&&zt(r).V_&&await async function(n,s){if(function(o){return L_(o)&&o!==x.ABORTED}(s.code)){const i=n.O_.shift();zt(n).s_(),await qf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hr(n)}}(r,e),zf(r)&&Gf(r)}async function Zu(r,e){const t=z(r);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const n=wn(t);t.L_.add(3),await Is(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Zi(t)}async function Va(r,e){const t=z(r);e?(t.L_.delete(2),await Zi(t)):e||(t.L_.add(2),await Is(t),t.q_.set("Unknown"))}function dr(r){return r.K_||(r.K_=function(t,n,s){const i=z(t);return i.w_(),new Ov(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:Uv.bind(null,r),Ro:$v.bind(null,r),mo:qv.bind(null,r),d_:zv.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),dc(r)?hc(r):r.q_.set("Unknown")):(await r.K_.stop(),$f(r))})),r.K_}function zt(r){return r.U_||(r.U_=function(t,n,s){const i=z(t);return i.w_(),new Mv(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Kv.bind(null,r),mo:Jv.bind(null,r),f_:Wv.bind(null,r),g_:Qv.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await hr(r)):(await r.U_.stop(),r.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new fc(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pc(r,e){if(pe("AsyncQueue",`${e}: ${r}`),Kt(r))return new F(x.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(t,n)=>B.comparator(t.key,n.key),this.keyedMap=Fr(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new qn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new qn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.W_=new ae(B.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class sr{constructor(e,t,n,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new sr(e,t,qn.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Xv{constructor(){this.queries=th(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const s=z(t),i=s.queries;s.queries=th(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(n)})})(this,new F(x.ABORTED,"Firestore shutting down"))}}function th(){return new Wt(r=>Ud(r),Gi)}async function Hf(r,e){const t=z(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(n=2):(i=new Yv,n=e.J_()?0:1);try{switch(n){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=pc(o,`Initialization of query '${Fn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&mc(t)}async function Kf(r,e){const t=z(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Zv(r,e){const t=z(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(n=!0);o.z_=s}}n&&mc(t)}function eI(r,e,t){const n=z(r),s=n.queries.get(e);if(s)for(const i of s.j_)i.onError(t);n.queries.delete(e)}function mc(r){r.Y_.forEach(e=>{e.next()})}var Na,nh;(nh=Na||(Na={})).ea="default",nh.Cache="cache";class Wf{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new sr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Na.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.key=e}}class Jf{constructor(e){this.key=e}}class tI{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Q(),this.mutatedKeys=Q(),this.Aa=qd(e),this.Ra=new qn(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new eh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),v=ys(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),D=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;g&&v?g.data.isEqual(v.data)?P!==D&&(n.track({type:3,doc:v}),k=!0):this.ga(g,v)||(n.track({type:2,doc:v}),k=!0,(l&&this.Aa(v,l)>0||h&&this.Aa(v,h)<0)&&(c=!0)):!g&&v?(n.track({type:0,doc:v}),k=!0):g&&!v&&(n.track({type:1,doc:g}),k=!0,(l||h)&&(c=!0)),k&&(v?(o=o.add(v),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(v,P){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return D(v)-D(P)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new sr(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new eh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Q(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Jf(n))}),this.da.forEach(n=>{e.has(n)||t.push(new Qf(n))}),t}ba(e){this.Ta=e.Ts,this.da=Q();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return sr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class nI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rI{constructor(e){this.key=e,this.va=!1}}class sI{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Wt(c=>Ud(c),Gi),this.Ma=new Map,this.xa=new Set,this.Oa=new ae(B.comparator),this.Na=new Map,this.La=new oc,this.Ba={},this.ka=new Map,this.qa=In.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function iI(r,e,t=!0){const n=to(r);let s;const i=n.Fa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Yf(n,e,t,!0),s}async function oI(r,e){const t=to(r);await Yf(t,e,!0,!1)}async function Yf(r,e,t,n){const s=await Ai(r.localStore,$e(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await gc(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&eo(r.remoteStore,s),c}async function gc(r,e,t,n,s){r.Ka=(p,g,v)=>async function(D,k,O,U){let L=k.view.ma(O);L.ns&&(L=await xa(D.localStore,k.query,!1).then(({documents:E})=>k.view.ma(E,L)));const $=U&&U.targetChanges.get(k.targetId),N=U&&U.targetMismatches.get(k.targetId)!=null,M=k.view.applyChanges(L,D.isPrimaryClient,$,N);return La(D,k.targetId,M.wa),M.snapshot}(r,p,g,v);const i=await xa(r.localStore,e,!0),o=new tI(e,i.Ts),c=o.ma(i.documents),l=vs.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,l);La(r,t,h.wa);const f=new nI(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function aI(r,e,t){const n=z(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!Gi(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await nr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&rr(n.remoteStore,s.targetId),ir(n,s.targetId)}).catch(Ht)):(ir(n,s.targetId),await nr(n.localStore,s.targetId,!0))}async function cI(r,e){const t=z(r),n=t.Fa.get(e),s=t.Ma.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),rr(t.remoteStore,n.targetId))}async function lI(r,e,t){const n=Ic(r);try{const s=await function(o,c){const l=z(o),h=he.now(),f=c.reduce((v,P)=>v.add(P.key),Q());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let P=Ue(),D=Q();return l.cs.getEntries(v,f).next(k=>{P=k,P.forEach((O,U)=>{U.isValidDocument()||(D=D.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,P)).next(k=>{p=k;const O=[];for(const U of c){const L=V_(U,p.get(U.key).overlayedDocument);L!=null&&O.push(new Et(U.key,L,xd(L.value.mapValue),ke.exists(!0)))}return l.mutationQueue.addMutationBatch(v,h,O,c)}).next(k=>{g=k;const O=k.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(v,k.batchId,O)})}).then(()=>({batchId:g.batchId,changes:Gd(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new ae(W)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(n,s.batchId,t),await Qt(n,s.changes),await hr(n.remoteStore)}catch(s){const i=pc(s,"Failed to persist write");t.reject(i)}}async function Xf(r,e){const t=z(r);try{const n=await Cv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?G(o.va):s.removedDocuments.size>0&&(G(o.va),o.va=!1))}),await Qt(t,n,e)}catch(n){await Ht(n)}}function rh(r,e,t){const n=z(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=z(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(c)&&(h=!0)}),h&&mc(l)}(n.eventManager,e),s.length&&n.Ca.d_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function uI(r,e,t){const n=z(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Na.get(e),i=s&&s.key;if(i){let o=new ae(B.comparator);o=o.insert(i,fe.newNoDocument(i,H.min()));const c=Q().add(i),l=new _s(H.min(),new Map,new ae(W),o,c);await Xf(n,l),n.Oa=n.Oa.remove(i),n.Na.delete(e),vc(n)}else await nr(n.localStore,e,!1).then(()=>ir(n,e,t)).catch(Ht)}async function hI(r,e){const t=z(r),n=e.batch.batchId;try{const s=await Pv(t.localStore,e);_c(t,n,null),yc(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Qt(t,s)}catch(s){await Ht(s)}}async function dI(r,e,t){const n=z(r);try{const s=await function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(G(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);_c(n,e,t),yc(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Qt(n,s)}catch(s){await Ht(s)}}function yc(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function _c(r,e,t){const n=z(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ba[n.currentUser.toKey()]=s}}function ir(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Zf(r,n)})}function Zf(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(rr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),vc(r))}function La(r,e,t){for(const n of t)n instanceof Qf?(r.La.addReference(n.key,e),fI(r,n)):n instanceof Jf?(V("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Zf(r,n.key)):q()}function fI(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(V("SyncEngine","New document in limbo: "+t),r.xa.add(n),vc(r))}function vc(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new B(ne.fromString(e)),n=r.qa.next();r.Na.set(n,new rI(t)),r.Oa=r.Oa.insert(t,n),eo(r.remoteStore,new mt($e(zi(t.path)),n,"TargetPurposeLimboResolution",Fe.oe))}}async function Qt(r,e,t){const n=z(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((c,l)=>{o.push(n.Ka(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=cc.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(l,h){const f=z(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(h,g=>R.forEach(g.$i,v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>R.forEach(g.Ui,v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Kt(p))throw p;V("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=f.os.get(g),P=v.snapshotVersion,D=v.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(g,D)}}}(n.localStore,i))}async function pI(r,e){const t=z(r);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const n=await Df(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new F(x.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Qt(t,n.hs)}}function mI(r,e){const t=z(r),n=t.Na.get(e);if(n&&n.va)return Q().add(n.key);{let s=Q();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function gI(r,e){const t=z(r),n=await xa(t.localStore,e.query,!0),s=e.view.ba(n);return t.isPrimaryClient&&La(t,e.targetId,s.wa),s}async function yI(r,e){const t=z(r);return Lf(t.localStore,e).then(n=>Qt(t,n))}async function _I(r,e,t,n){const s=z(r),i=await function(c,l){const h=z(c),f=z(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,l).next(g=>g?h.localDocuments.getDocuments(p,g):R.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await hr(s.remoteStore):t==="acknowledged"||t==="rejected"?(_c(s,e,n||null),yc(s,e),function(c,l){z(z(c).mutationQueue).On(l)}(s.localStore,e)):q(),await Qt(s,i)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function vI(r,e){const t=z(r);if(to(t),Ic(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await sh(t,n.toArray());t.Qa=!0,await Va(t.remoteStore,!0);for(const i of s)eo(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const n=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(ir(t,o),nr(t.localStore,o,!0))),rr(t.remoteStore,o)}),await s,await sh(t,n),function(o){const c=z(o);c.Na.forEach((l,h)=>{rr(c.remoteStore,h)}),c.La.pr(),c.Na=new Map,c.Oa=new ae(B.comparator)}(t),t.Qa=!1,await Va(t.remoteStore,!1)}}async function sh(r,e,t){const n=z(r),s=[],i=[];for(const o of e){let c;const l=n.Ma.get(o);if(l&&l.length!==0){c=await Ai(n.localStore,$e(l[0]));for(const h of l){const f=n.Fa.get(h),p=await gI(n,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await Nf(n.localStore,o);c=await Ai(n.localStore,h),await gc(n,ep(h),o,!1,c.resumeToken)}s.push(c)}return n.Ca.d_(i),s}function ep(r){return jd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function II(r){return function(t){return z(z(t).persistence).Qi()}(z(r).localStore)}async function TI(r,e,t,n){const s=z(r);if(s.Qa)return void V("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Lf(s.localStore,$d(i[0])),c=_s.createSynthesizedRemoteEventForCurrentChange(e,t==="current",me.EMPTY_BYTE_STRING);await Qt(s,o,c);break}case"rejected":await nr(s.localStore,e,!0),ir(s,e,n);break;default:q()}}async function EI(r,e,t){const n=to(r);if(n.Qa){for(const s of e){if(n.Ma.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){V("SyncEngine","Adding an already active target "+s);continue}const i=await Nf(n.localStore,s),o=await Ai(n.localStore,i);await gc(n,ep(i),o.targetId,!1,o.resumeToken),eo(n.remoteStore,o)}for(const s of t)n.Ma.has(s)&&await nr(n.localStore,s,!1).then(()=>{rr(n.remoteStore,s),ir(n,s)}).catch(Ht)}}function to(r){const e=z(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uI.bind(null,e),e.Ca.d_=Zv.bind(null,e.eventManager),e.Ca.$a=eI.bind(null,e.eventManager),e}function Ic(r){const e=z(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dI.bind(null,e),e}class us{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return xf(this.persistence,new kf,e.initialUser,this.serializer)}Ga(e){return new Pf(Yi.Zr,this.serializer)}Wa(e){return new Mf}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}us.provider={build:()=>new us};class tp extends us{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Ic(this.Ja.syncEngine),await hr(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return xf(this.persistence,new kf,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new uv(n,e.asyncQueue,t)}Ha(e,t){const n=new qy(t,this.persistence);return new $y(e.asyncQueue,n)}Ga(e){const t=Cf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Me.withCacheSize(this.cacheSizeBytes):Me.DEFAULT;return new ac(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ff(),ci(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Mf}}class bI extends tp{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Jo&&(this.sharedClientState.syncEngine={no:_I.bind(null,t),ro:TI.bind(null,t),io:EI.bind(null,t),Qi:II.bind(null,t),eo:yI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await vI(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Ff();if(!Jo.D(t))throw new F(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Cf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Jo(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class hs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>rh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=pI.bind(null,this.syncEngine),await Va(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xv}()}createDatastore(e){const t=Xi(e.databaseInfo.databaseId),n=function(i){return new Lv(i)}(e.databaseInfo);return function(i,o,c,l){return new Fv(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new Bv(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>rh(this.syncEngine,t,0),function(){return Xu.D()?new Xu:new Dv}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new sI(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=z(s);V("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Is(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hs.provider={build:()=>new hs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):pe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Pe.UNAUTHENTICATED,this.clientId=md.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=pc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Xo(r,e){r.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Df(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function ih(r,e){r.asyncQueue.verifyOperationInProgress();const t=await AI(r);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Zu(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Zu(e.remoteStore,s)),r._onlineComponents=e}async function AI(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xo(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;es("Error using user provided cache. Falling back to memory cache: "+t),await Xo(r,new us)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Xo(r,new us);return r._offlineComponents}async function rp(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await ih(r,r._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await ih(r,new hs))),r._onlineComponents}function SI(r){return rp(r).then(e=>e.syncEngine)}async function sp(r){const e=await rp(r),t=e.eventManager;return t.onListen=iI.bind(null,e.syncEngine),t.onUnlisten=aI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cI.bind(null,e.syncEngine),t}function RI(r,e,t={}){const n=new et;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new np({next:g=>{f.Za(),o.enqueueAndForget(()=>Kf(i,p));const v=g.docs.has(c);!v&&g.fromCache?h.reject(new F(x.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&l&&l.source==="server"?h.reject(new F(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Wf(zi(c.path),f,{includeMetadataChanges:!0,_a:!0});return Hf(i,p)}(await sp(r),r.asyncQueue,e,t,n)),n.promise}function PI(r,e,t={}){const n=new et;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new np({next:g=>{f.Za(),o.enqueueAndForget(()=>Kf(i,p)),g.fromCache&&l.source==="server"?h.reject(new F(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Wf(c,f,{includeMetadataChanges:!0,_a:!0});return Hf(i,p)}(await sp(r),r.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(r,e,t){if(!t)throw new F(x.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function CI(r,e,t,n){if(e===!0&&n===!0)throw new F(x.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ah(r){if(!B.isDocumentKey(r))throw new F(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ch(r){if(B.isDocumentKey(r))throw new F(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function no(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":q()}function rt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new F(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=no(r);throw new F(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new F(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ip((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tc{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Dy;switch(n.type){case"firstParty":return new Ly(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=oh.get(t);n&&(V("ComponentProvider","Removing Datastore"),oh.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new An(this.firestore,e,this._query)}}class Le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}}class Bt extends An{constructor(e,t,n){super(e,t,zi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new B(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function Gt(r,e,...t){if(r=_e(r),op("collection","path",e),r instanceof Tc){const n=ne.fromString(e,...t);return ch(n),new Bt(r,null,n)}{if(!(r instanceof Le||r instanceof Bt))throw new F(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return ch(n),new Bt(r.firestore,null,n)}}function Jt(r,e,...t){if(r=_e(r),arguments.length===1&&(e=md.newId()),op("doc","path",e),r instanceof Tc){const n=ne.fromString(e,...t);return ah(n),new Le(r,null,new B(n))}{if(!(r instanceof Le||r instanceof Bt))throw new F(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ne.fromString(e,...t));return ah(n),new Le(r.firestore,r instanceof Bt?r.converter:null,new B(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new jf(this,"async_queue_retry"),this.Vu=()=>{const n=ci();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=ci();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ci();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new et;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Kt(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw pe("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=fc.createAndSchedule(this,e,t,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Sn extends Tc{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new uh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new uh(e),this._firestoreClient=void 0,await e}}}function kI(r,e,t){t||(t="(default)");const n=Bi(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(Xr(i,e))return s;throw new F(x.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new F(x.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function Ec(r){if(r._terminated)throw new F(x.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||xI(r),r._firestoreClient}function xI(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,h,f){return new u_(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ip(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new wI(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this._byteString=e}static fromBase64String(e){try{return new or(me.fromBase64String(e))}catch(t){throw new F(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new or(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=/^__.*__$/;class VI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Et(e,this.data,this.fieldMask,t,this.fieldTransforms):new ur(e,this.data,t,this.fieldTransforms)}}class ap{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Et(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function cp(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Ac{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ac(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.Ou(e),s}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ci(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(cp(this.Cu)&&DI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class NI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Xi(e)}Qu(e,t,n,s=!1){return new Ac({Cu:e,methodName:t,qu:n,path:ue.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function io(r){const e=r._freezeSettings(),t=Xi(r._databaseId);return new NI(r._databaseId,!!e.ignoreUndefinedProperties,t)}function lp(r,e,t,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,e,t,s);Rc("Data must be an object, but it was:",o,n);const c=up(n,o);let l,h;if(i.merge)l=new je(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Oa(e,p,t);if(!o.contains(g))throw new F(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);dp(f,g)||f.push(g)}l=new je(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new VI(new Ce(c),l,h)}class oo extends so{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oo}}class Sc extends so{_toFieldTransform(e){return new Xd(e.path,new Xn)}isEqual(e){return e instanceof Sc}}function LI(r,e,t,n){const s=r.Qu(1,e,t);Rc("Data must be an object, but it was:",s,n);const i=[],o=Ce.empty();bn(n,(l,h)=>{const f=Pc(e,l,t);h=_e(h);const p=s.Nu(f);if(h instanceof oo)i.push(f);else{const g=Ts(h,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new je(i);return new ap(o,c,s.fieldTransforms)}function OI(r,e,t,n,s,i){const o=r.Qu(1,e,t),c=[Oa(e,n,t)],l=[s];if(i.length%2!=0)throw new F(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Oa(e,i[g])),l.push(i[g+1]);const h=[],f=Ce.empty();for(let g=c.length-1;g>=0;--g)if(!dp(h,c[g])){const v=c[g];let P=l[g];P=_e(P);const D=o.Nu(v);if(P instanceof oo)h.push(v);else{const k=Ts(P,D);k!=null&&(h.push(v),f.set(v,k))}}const p=new je(h);return new ap(f,p,o.fieldTransforms)}function MI(r,e,t,n=!1){return Ts(t,r.Qu(n?4:3,e))}function Ts(r,e){if(hp(r=_e(r)))return Rc("Unsupported field value:",e,r),up(r,e);if(r instanceof so)return function(n,s){if(!cp(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=Ts(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return R_(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=he.fromDate(n);return{timestampValue:tr(s.serializer,i)}}if(n instanceof he){const i=new he(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tr(s.serializer,i)}}if(n instanceof bc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof or)return{bytesValue:of(s.serializer,n._byteString)};if(n instanceof Le){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rc(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof wc)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Xa(c.serializer,l)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${no(n)}`)}(r,e)}function up(r,e){const t={};return Rd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(r,(n,s)=>{const i=Ts(s,e.Mu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function hp(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof he||r instanceof bc||r instanceof or||r instanceof Le||r instanceof so||r instanceof wc)}function Rc(r,e,t){if(!hp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=no(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Oa(r,e,t){if((e=_e(e))instanceof ro)return e._internalPath;if(typeof e=="string")return Pc(r,e);throw Ci("Field path arguments must be of type string or ",r,!1,void 0,t)}const FI=new RegExp("[~\\*/\\[\\]]");function Pc(r,e,t){if(e.search(FI)>=0)throw Ci(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new ro(...e.split("."))._internalPath}catch{throw Ci(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ci(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new F(x.INVALID_ARGUMENT,c+r+l)}function dp(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ao("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class jI extends fp{data(){return super.data()}}function ao(r,e){return typeof e=="string"?Pc(r,e):e instanceof ro?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new F(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cc{}class pp extends Cc{}function ki(r,e,...t){let n=[];e instanceof Cc&&n.push(e),n=n.concat(t),function(i){const o=i.filter(l=>l instanceof kc).length,c=i.filter(l=>l instanceof co).length;if(o>1||o>0&&c>0)throw new F(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class co extends pp{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new co(e,t,n)}_apply(e){const t=this._parse(e);return gp(e._query,t),new An(e.firestore,e.converter,Ea(e._query,t))}_parse(e){const t=io(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new F(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){dh(p,f);const v=[];for(const P of p)v.push(hh(l,i,P));g={arrayValue:{values:v}}}else g=hh(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||dh(p,f),g=MI(c,o,p,f==="in"||f==="not-in");return X.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function mp(r,e,t){const n=e,s=ao("where",r);return co._create(s,n,t)}class kc extends Cc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new kc(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)gp(o,l),o=Ea(o,l)}(e._query,t),new An(e.firestore,e.converter,Ea(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xc extends pp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new xc(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new F(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cs(i,o)}(e._query,this._field,this._direction);return new An(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new lr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function UI(r,e="asc"){const t=e,n=ao("orderBy",r);return xc._create(n,t)}function hh(r,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new F(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bd(e)&&t.indexOf("/")!==-1)throw new F(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ne.fromString(t));if(!B.isDocumentKey(n))throw new F(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return os(r,new B(n))}if(t instanceof Le)return os(r,t._key);throw new F(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${no(t)}.`)}function dh(r,e){if(!Array.isArray(r)||r.length===0)throw new F(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gp(r,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $I{convertValue(e,t="none"){switch(gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($t(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return bn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>le(o.doubleValue));return new wc(i)}convertGeoPoint(e){return new bc(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Qa(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ss(e));default:return null}}convertTimestamp(e){const t=It(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ne.fromString(e);G(gf(n));const s=new mn(n.get(1),n.get(3)),i=new B(n.popFirst(5));return s.isEqual(t)||pe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _p extends fp{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new li(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ao("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class li extends _p{data(e={}){return super.data(e)}}class qI{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ur(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new li(this._firestore,this._userDataWriter,n.key,n,new Ur(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new li(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ur(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new li(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ur(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:zI(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function zI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(r){r=rt(r,Le);const e=rt(r.firestore,Sn);return RI(Ec(e),r._key).then(t=>HI(e,r,t))}class Ip extends $I{constructor(e){super(),this.firestore=e}convertBytes(e){return new or(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}function ds(r){r=rt(r,An);const e=rt(r.firestore,Sn),t=Ec(e),n=new Ip(e);return BI(r._query),PI(t,r._query).then(s=>new qI(e,n,r,s))}function GI(r,e,t){r=rt(r,Le);const n=rt(r.firestore,Sn),s=yp(r.converter,e,t);return lo(n,[lp(io(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,ke.none())])}function Tp(r,e,t,...n){r=rt(r,Le);const s=rt(r.firestore,Sn),i=io(s);let o;return o=typeof(e=_e(e))=="string"||e instanceof ro?OI(i,"updateDoc",r._key,e,t,n):LI(i,"updateDoc",r._key,e),lo(s,[o.toMutation(r._key,ke.exists(!0))])}function Ep(r){return lo(rt(r.firestore,Sn),[new Wi(r._key,ke.none())])}function Dc(r,e){const t=rt(r.firestore,Sn),n=Jt(r),s=yp(r.converter,e);return lo(t,[lp(io(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ke.exists(!1))]).then(()=>n)}function lo(r,e){return function(n,s){const i=new et;return n.asyncQueue.enqueueAndForget(async()=>lI(await SI(n),s,i)),i.promise}(Ec(r),e)}function HI(r,e,t){const n=t.docs.get(e._key),s=new Ip(r);return new _p(r,s,e._key,n,new Ur(t.hasPendingWrites,t.fromCache),e.converter)}class KI{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=YI(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function WI(r){return new KI(r)}class QI{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=hs.provider,this._offlineComponentProvider={build:t=>new tp(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class JI{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=hs.provider,this._offlineComponentProvider={build:t=>new bI(t,e==null?void 0:e.cacheSizeBytes)}}}function YI(r){return new QI(void 0)}function XI(){return new JI}function Vc(){return new Sc("serverTimestamp")}(function(e,t=!0){(function(s){cr=s})(En),fn(new Ut("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new Sn(new Vy(n.getProvider("auth-internal")),new My(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ze(iu,"4.7.3",e),Ze(iu,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="firebasestorage.googleapis.com",ZI="storageBucket",eT=2*60*1e3,tT=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends at{constructor(e,t,n=0){super(Zo(e),`Firebase Storage: ${t} (${Zo(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ct.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var st;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(st||(st={}));function Zo(r){return"storage/"+r}function nT(){const r="An unknown error occurred, please check the error payload for server response.";return new ct(st.UNKNOWN,r)}function rT(){return new ct(st.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sT(){return new ct(st.CANCELED,"User canceled the upload/download.")}function iT(r){return new ct(st.INVALID_URL,"Invalid URL '"+r+"'.")}function oT(r){return new ct(st.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function fh(r){return new ct(st.INVALID_ARGUMENT,r)}function wp(){return new ct(st.APP_DELETED,"The Firebase app was deleted.")}function aT(r){return new ct(st.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=He.makeFromUrl(e,t)}catch{return new He(e,"")}if(n.path==="")return n;throw oT(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h($){$.path_=decodeURIComponent($.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),P={bucket:1,path:3},D=t===bp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",O=new RegExp(`^https?://${D}/${s}/${k}`,"i"),L=[{regex:c,indices:l,postModify:i},{regex:v,indices:P,postModify:h},{regex:O,indices:{bucket:1,path:2},postModify:h}];for(let $=0;$<L.length;$++){const N=L[$],M=N.regex.exec(e);if(M){const E=M[N.indices.bucket];let y=M[N.indices.path];y||(y=""),n=new He(E,y),N.postModify(n);break}}if(n==null)throw iT(e);return n}}class cT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(r,e,t){let n=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...k){h||(h=!0,e.apply(null,k))}function p(k){s=setTimeout(()=>{s=null,r(v,l())},k)}function g(){i&&clearTimeout(i)}function v(k,...O){if(h){g();return}if(k){g(),f.call(null,k,...O);return}if(l()||o){g(),f.call(null,k,...O);return}n<64&&(n*=2);let L;c===1?(c=2,L=0):L=(n+Math.random())*1e3,p(L)}let P=!1;function D(k){P||(P=!0,g(),!h&&(s!==null?(k||(c=2),clearTimeout(s),p(0)):k||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},t),D}function uT(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(r){return r!==void 0}function ph(r,e,t,n){if(n<e)throw fh(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw fh(`Invalid value for '${r}'. Expected ${t} or less.`)}function dT(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var xi;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(xi||(xi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,t,n,s,i,o,c,l,h,f,p,g=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,P)=>{this.resolve_=v,this.reject_=P,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new Ys(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===xi.NO_ERROR,l=i.getStatus();if(!c||fT(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===xi.ABORT;n(!1,new Ys(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;n(!0,new Ys(h,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());hT(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=nT();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?wp():sT();o(l)}else{const l=rT();o(l)}};this.canceled_?t(!1,new Ys(!1,null,!0)):this.backoffId_=lT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ys{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function mT(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function gT(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function yT(r,e){e&&(r["X-Firebase-GMPID"]=e)}function _T(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function vT(r,e,t,n,s,i,o=!0){const c=dT(r.urlParams),l=r.url+c,h=Object.assign({},r.headers);return yT(h,e),mT(h,t),gT(h,i),_T(h,n),new pT(l,r.method,h,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function TT(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t){this._service=e,t instanceof He?this._location=t:this._location=He.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Di(e,t)}get root(){const e=new He(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return TT(this._location.path)}get storage(){return this._service}get parent(){const e=IT(this._location.path);if(e===null)return null;const t=new He(this._location.bucket,e);return new Di(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw aT(e)}}function mh(r,e){const t=e==null?void 0:e[ZI];return t==null?null:He.makeFromBucketSpec(t,r)}function ET(r,e,t,n={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:ag(s,r.app.options.projectId))}class bT{constructor(e,t,n,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=bp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eT,this._maxUploadRetryTime=tT,this._requests=new Set,s!=null?this._bucket=He.makeFromBucketSpec(s,this._host):this._bucket=mh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=He.makeFromBucketSpec(this._url,e):this._bucket=mh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ph("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ph("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Di(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new cT(wp());{const o=vT(e,this._appId,n,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const gh="@firebase/storage",yh="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="storage";function wT(r=od(),e){r=_e(r);const n=Bi(r,Ap).getImmediate({identifier:e}),s=ig("storage");return s&&AT(n,...s),n}function AT(r,e,t,n={}){ET(r,e,t,n)}function ST(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new bT(t,n,s,e,En)}function RT(){fn(new Ut(Ap,ST,"PUBLIC").setMultipleInstances(!0)),Ze(gh,yh,""),Ze(gh,yh,"esm2017")}RT();function Nc(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function Sp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PT=Sp,Rp=new ps("auth","Firebase",Sp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new $a("@firebase/auth");function CT(r,...e){Vi.logLevel<=Y.WARN&&Vi.warn(`Auth (${En}): ${r}`,...e)}function ui(r,...e){Vi.logLevel<=Y.ERROR&&Vi.error(`Auth (${En}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(r,...e){throw Oc(r,...e)}function Ke(r,...e){return Oc(r,...e)}function Lc(r,e,t){const n=Object.assign(Object.assign({},PT()),{[e]:t});return new ps("auth","Firebase",n).create(e,{appName:r.name})}function dn(r){return Lc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pp(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&it(r,"argument-error"),Lc(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Rp.create(r,...e)}function K(r,e,...t){if(!r)throw Oc(e,...t)}function gt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ui(e),new Error(e)}function Tt(r,e){r||gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function kT(){return _h()==="http:"||_h()==="https:"}function _h(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kT()||hg()||"connection"in navigator)?navigator.onLine:!0}function DT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=cg()||dg()}get(){return xT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(r,e){Tt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new Es(3e4,6e4);function Fc(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function fr(r,e,t,n,s={}){return kp(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=ms(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},i);return ug()||(h.referrerPolicy="no-referrer"),Cp.fetch()(xp(r,r.config.apiHost,t,c),h)})}async function kp(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},VT),e);try{const s=new OT(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Xs(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xs(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xs(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xs(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Lc(r,f,h);it(r,f)}}catch(s){if(s instanceof at)throw s;it(r,"network-request-failed",{message:String(s)})}}async function LT(r,e,t,n,s={}){const i=await fr(r,e,t,n,s);return"mfaPendingCredential"in i&&it(r,"multi-factor-auth-required",{_serverResponse:i}),i}function xp(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?Mc(r.config,s):`${r.config.apiScheme}://${s}`}class OT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ke(this.auth,"network-request-failed")),NT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xs(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Ke(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(r,e){return fr(r,"POST","/v1/accounts:delete",e)}async function Dp(r,e){return fr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FT(r,e=!1){const t=_e(r),n=await t.getIdToken(e),s=jc(n);K(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Qr(ea(s.auth_time)),issuedAtTime:Qr(ea(s.iat)),expirationTime:Qr(ea(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ea(r){return Number(r)*1e3}function jc(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ui("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yh(t);return s?JSON.parse(s):(ui("Failed to decode base64 JWT payload"),null)}catch(s){return ui("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vh(r){const e=jc(r);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof at&&jT(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function jT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qr(this.lastLoginAt),this.creationTime=Qr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(r){var e;const t=r.auth,n=await r.getIdToken(),s=await fs(r,Dp(t,{idToken:n}));K(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vp(i.providerUserInfo):[],c=$T(r.providerData,o),l=r.isAnonymous,h=!(r.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Fa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function UT(r){const e=_e(r);await Ni(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $T(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Vp(r){return r.map(e=>{var{providerId:t}=e,n=Nc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(r,e){const t=await kp(r,{},async()=>{const n=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=xp(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Cp.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zT(r,e){return fr(r,"POST","/v2/accounts:revokeToken",Fc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=vh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await qT(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new zn;return n&&(K(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zn,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(r,e){K(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class yt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=Nc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await fs(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return FT(this,e)}reload(){return UT(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ni(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await fs(this,MT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,c,l,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,v=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=t.photoURL)!==null&&o!==void 0?o:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,O=(h=t.createdAt)!==null&&h!==void 0?h:void 0,U=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:L,emailVerified:$,isAnonymous:N,providerData:M,stsTokenManager:E}=t;K(L&&E,e,"internal-error");const y=zn.fromJSON(this.name,E);K(typeof L=="string",e,"internal-error"),Ct(p,e.name),Ct(g,e.name),K(typeof $=="boolean",e,"internal-error"),K(typeof N=="boolean",e,"internal-error"),Ct(v,e.name),Ct(P,e.name),Ct(D,e.name),Ct(k,e.name),Ct(O,e.name),Ct(U,e.name);const I=new yt({uid:L,auth:e,email:g,emailVerified:$,displayName:p,isAnonymous:N,photoURL:P,phoneNumber:v,tenantId:D,stsTokenManager:y,createdAt:O,lastLoginAt:U});return M&&Array.isArray(M)&&(I.providerData=M.map(b=>Object.assign({},b))),k&&(I._redirectEventId=k),I}static async _fromIdTokenResponse(e,t,n=!1){const s=new zn;s.updateFromServerResponse(t);const i=new yt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Ni(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Vp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new zn;c.updateFromIdToken(n);const l=new yt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=new Map;function _t(r){Tt(r instanceof Function,"Expected a class definition");let e=Ih.get(r);return e?(Tt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Ih.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Np.type="NONE";const Th=Np;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(r,e,t){return`firebase:${r}:${e}:${t}`}class Gn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=hi(this.userKey,s.apiKey,i),this.fullPersistenceKey=hi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Gn(_t(Th),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_t(Th);const o=hi(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=yt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Gn(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Gn(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bp(e))return"Blackberry";if(Up(e))return"Webos";if(Op(e))return"Safari";if((e.includes("chrome/")||Mp(e))&&!e.includes("edge/"))return"Chrome";if(jp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Lp(r=ye()){return/firefox\//i.test(r)}function Op(r=ye()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mp(r=ye()){return/crios\//i.test(r)}function Fp(r=ye()){return/iemobile/i.test(r)}function jp(r=ye()){return/android/i.test(r)}function Bp(r=ye()){return/blackberry/i.test(r)}function Up(r=ye()){return/webos/i.test(r)}function Bc(r=ye()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function GT(r=ye()){var e;return Bc(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HT(){return fg()&&document.documentMode===10}function $p(r=ye()){return Bc(r)||jp(r)||Up(r)||Bp(r)||/windows phone/i.test(r)||Fp(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(r,e=[]){let t;switch(r){case"Browser":t=Eh(ye());break;case"Worker":t=`${Eh(ye())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${En}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(r,e={}){return fr(r,"GET","/v2/passwordPolicy",Fc(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=6;class JT{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:QT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bh(this),this.idTokenSubscription=new bh(this),this.beforeStateQueue=new KT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Gn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Dp(this,{idToken:e}),n=await yt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ni(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(dn(this));const t=e?_e(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WT(this),t=new JT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await zT(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&CT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function uo(r){return _e(r)}class bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=vg(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XT(r){Uc=r}function ZT(r){return Uc.loadJS(r)}function eE(){return Uc.gapiScript}function tE(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(r,e){const t=Bi(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Xr(i,e??{}))return s;it(s,"already-initialized")}return t.initialize({options:e})}function rE(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function sE(r,e,t){const n=uo(r);K(n._canInitEmulator,n,"emulator-config-failed"),K(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=zp(e),{host:o,port:c}=iE(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${i}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),oE()}function zp(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function iE(r){const e=zp(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:wh(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:wh(o)}}}function wh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function oE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,t){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(r,e){return LT(r,"POST","/v1/accounts:signInWithIdp",Fc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="http://localhost";class Tn extends Gp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=Nc(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new Tn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Hn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Hn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hn(e,t)}buildRequest(){const e={requestUri:aE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ms(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends ho{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends bs{constructor(){super("facebook.com")}static credential(e){return Tn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tn._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ft.credential(t,n)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends bs{constructor(){super("github.com")}static credential(e){return Tn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends bs{constructor(){super("twitter.com")}static credential(e,t){return Tn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Nt.credential(t,n)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await yt._fromIdTokenResponse(e,n,s),o=Ah(n);return new ar({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Ah(n);return new ar({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Ah(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends at{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Li.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Li(e,t,n,s)}}function Hp(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Li._fromErrorAndOperation(r,i,e,n):i})}async function cE(r,e,t=!1){const n=await fs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ar._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(r,e,t=!1){const{auth:n}=r;if(pt(n.app))return Promise.reject(dn(n));const s="reauthenticate";try{const i=await fs(r,Hp(n,s,e,r),t);K(i.idToken,n,"internal-error");const o=jc(i.idToken);K(o,n,"internal-error");const{sub:c}=o;return K(r.uid===c,n,"user-mismatch"),ar._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&it(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(r,e,t=!1){if(pt(r.app))return Promise.reject(dn(r));const n="signIn",s=await Hp(r,n,e),i=await ar._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function hE(r,e,t,n){return _e(r).onIdTokenChanged(e,t,n)}function dE(r,e,t){return _e(r).beforeAuthStateChanged(e,t)}function fE(r,e,t,n){return _e(r).onAuthStateChanged(e,t,n)}function pE(r){return _e(r).signOut()}const Oi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Oi,"1"),this.storage.removeItem(Oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=1e3,gE=10;class Wp extends Kp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$p(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);HT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gE):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},mE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wp.type="LOCAL";const yE=Wp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends Kp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qp.type="SESSION";const Jp=Qp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new fo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await _E(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=$c("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function IE(r){tt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function TE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EE(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function bE(){return Yp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="firebaseLocalStorageDb",wE=1,Mi="firebaseLocalStorage",Zp="fbase_key";class ws{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function po(r,e){return r.transaction([Mi],e?"readwrite":"readonly").objectStore(Mi)}function AE(){const r=indexedDB.deleteDatabase(Xp);return new ws(r).toPromise()}function ja(){const r=indexedDB.open(Xp,wE);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Mi,{keyPath:Zp})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Mi)?e(n):(n.close(),await AE(),e(await ja()))})})}async function Sh(r,e,t){const n=po(r,!0).put({[Zp]:e,value:t});return new ws(n).toPromise()}async function SE(r,e){const t=po(r,!1).get(e),n=await new ws(t).toPromise();return n===void 0?null:n.value}function Rh(r,e){const t=po(r,!0).delete(e);return new ws(t).toPromise()}const RE=800,PE=3;class em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ja(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>PE)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fo._getInstance(bE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await TE(),!this.activeServiceWorker)return;this.sender=new vE(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ja();return await Sh(e,Oi,"1"),await Rh(e,Oi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>SE(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Rh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=po(s,!1).getAll();return new ws(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}em.type="LOCAL";const CE=em;new Es(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(r,e){return e?_t(e):(K(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends Gp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kE(r){return uE(r.auth,new zc(r),r.bypassAuthState)}function xE(r){const{auth:e,user:t}=r;return K(t,e,"internal-error"),lE(t,new zc(r),r.bypassAuthState)}async function DE(r){const{auth:e,user:t}=r;return K(t,e,"internal-error"),cE(t,new zc(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kE;case"linkViaPopup":case"linkViaRedirect":return DE;case"reauthViaPopup":case"reauthViaRedirect":return xE;default:it(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=new Es(2e3,1e4);async function NE(r,e,t){if(pt(r.app))return Promise.reject(Ke(r,"operation-not-supported-in-this-environment"));const n=uo(r);Pp(r,e,ho);const s=qc(n,t);return new Ot(n,"signInViaPopup",e,s).executeNotNull()}async function LE(r,e,t){const n=_e(r);Pp(n.auth,e,ho);const s=qc(n.auth,t);return new Ot(n.auth,"linkViaPopup",e,s,n).executeNotNull()}class Ot extends tm{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Ot.currentPopupAction&&Ot.currentPopupAction.cancel(),Ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=$c();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VE.get())};e()}}Ot.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="pendingRedirect",di=new Map;class ME extends tm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=di.get(this.auth._key());if(!e){try{const n=await FE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}di.set(this.auth._key(),e)}return this.bypassAuthState||di.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FE(r,e){const t=UE(e),n=BE(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function jE(r,e){di.set(r._key(),e)}function BE(r){return _t(r._redirectPersistence)}function UE(r){return hi(OE,r.config.apiKey,r.name)}async function $E(r,e,t=!1){if(pt(r.app))return Promise.reject(dn(r));const n=uo(r),s=qc(n,e),o=await new ME(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=10*60*1e3;class zE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!nm(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ke(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ph(e))}saveEventToCache(e){this.cachedEventUids.add(Ph(e)),this.lastProcessedEventTime=Date.now()}}function Ph(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function nm({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nm(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(r,e={}){return fr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WE=/^https?/;async function QE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await HE(r);for(const t of e)try{if(JE(t))return}catch{}it(r,"unauthorized-domain")}function JE(r){const e=Ma(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!WE.test(t))return!1;if(KE.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=new Es(3e4,6e4);function Ch(){const r=tt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function XE(r){return new Promise((e,t)=>{var n,s,i;function o(){Ch(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ch(),t(Ke(r,"network-request-failed"))},timeout:YE.get()})}if(!((s=(n=tt().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const c=tE("iframefcb");return tt()[c]=()=>{gapi.load?o():t(Ke(r,"network-request-failed"))},ZT(`${eE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw fi=null,e})}let fi=null;function ZE(r){return fi=fi||XE(r),fi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=new Es(5e3,15e3),tb="__/auth/iframe",nb="emulator/auth/iframe",rb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ib(r){const e=r.config;K(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Mc(e,nb):`https://${r.config.authDomain}/${tb}`,n={apiKey:e.apiKey,appName:r.name,v:En},s=sb.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ms(n).slice(1)}`}async function ob(r){const e=await ZE(r),t=tt().gapi;return K(t,r,"internal-error"),e.open({where:document.body,url:ib(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rb,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Ke(r,"network-request-failed"),c=tt().setTimeout(()=>{i(o)},eb.get());function l(){tt().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cb=500,lb=600,ub="_blank",hb="http://localhost";class kh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function db(r,e,t,n=cb,s=lb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},ab),{width:n.toString(),height:s.toString(),top:i,left:o}),h=ye().toLowerCase();t&&(c=Mp(h)?ub:t),Lp(h)&&(e=e||hb,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[v,P])=>`${g}${v}=${P},`,"");if(GT(h)&&c!=="_self")return fb(e||"",c),new kh(null);const p=window.open(e||"",c,f);K(p,r,"popup-blocked");try{p.focus()}catch{}return new kh(p)}function fb(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="__/auth/handler",mb="emulator/auth/handler",gb=encodeURIComponent("fac");async function xh(r,e,t,n,s,i){K(r.config.authDomain,r,"auth-domain-config-required"),K(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:En,eventId:s};if(e instanceof ho){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",_g(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof bs){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${gb}=${encodeURIComponent(l)}`:"";return`${yb(r)}?${ms(c).slice(1)}${h}`}function yb({config:r}){return r.emulator?Mc(r,mb):`https://${r.authDomain}/${pb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="webStorageSupport";class _b{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jp,this._completeRedirectFn=$E,this._overrideRedirectResult=jE}async _openPopup(e,t,n,s){var i;Tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await xh(e,t,n,Ma(),s);return db(e,o,$c())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await xh(e,t,n,Ma(),s);return IE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await ob(e),n=new zE(e);return t.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ta,{type:ta},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ta];o!==void 0&&t(!!o),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $p()||Op()||Bc()}}const vb=_b;var Dh="@firebase/auth",Vh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Eb(r){fn(new Ut("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qp(r)},h=new YT(n,s,i,l);return rE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),fn(new Ut("auth-internal",e=>{const t=uo(e.getProvider("auth").getImmediate());return(n=>new Ib(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Dh,Vh,Tb(r)),Ze(Dh,Vh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=5*60,wb=ed("authIdTokenMaxAge")||bb;let Nh=null;const Ab=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>wb)return;const s=t==null?void 0:t.token;Nh!==s&&(Nh=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Sb(r=od()){const e=Bi(r,"auth");if(e.isInitialized())return e.getImmediate();const t=nE(r,{popupRedirectResolver:vb,persistence:[CE,yE,Jp]}),n=ed("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Ab(i.toString());dE(t,o,()=>o(t.currentUser)),hE(t,c=>o(c))}}const s=Xh("auth");return s&&sE(t,`http://${s}`),t}function Rb(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}XT({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Ke("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",Rb().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Eb("Browser");const Pb={apiKey:"AIzaSyCh5zX-2AgcibKw-tCvXpsFuRA9POYFt-Y",authDomain:"my-trip-record.firebaseapp.com",projectId:"my-trip-record",storageBucket:"my-trip-record.firebasestorage.app",messagingSenderId:"656393008816",appId:"1:656393008816:web:307ff5f1ee6e509242ad75",measurementId:"G-8SQ1KTE1YP"},Gc=id(Pb),Oe=kI(Gc,{localCache:WI({tabManager:XI()})});wT(Gc);const mo=Sb(Gc);function Cb(){return new Promise(r=>{const e=fE(mo,t=>{e(),r(t)})})}const rm=new ft;async function sm(){return(await NE(mo,rm)).user}async function im(){return(await LE(mo.currentUser,rm)).user}async function kb(){await pE(mo)}function As(){var e;return(e=Z().user)==null?void 0:e.uid}async function Ba(r){const e=ki(Gt(Oe,"users",r,"trips"),UI("createdAt","desc")),n=(await ds(e)).docs.map(i=>({id:i.id,ownerId:r,...i.data()}));let s=[];try{const i=ki(Gt(Oe,"users",r,"joinedTrips")),o=await ds(i);for(const c of o.docs){const{ownerId:l,tripId:h}=c.data(),f=await xb(l,h);f&&(f.isShared=!0,s.push(f))}}catch{}return[...n,...s].sort((i,o)=>{var h,f;const c=(h=i.createdAt)!=null&&h.toMillis?i.createdAt.toMillis():0;return((f=o.createdAt)!=null&&f.toMillis?o.createdAt.toMillis():0)-c})}async function xb(r,e){const t=Jt(Oe,"users",r,"trips",e),n=await vp(t);return n.exists()?{id:n.id,ownerId:r,...n.data()}:null}async function Db(r,e){const t={...e,ownerId:r,createdAt:Vc()},s=(await Dc(Gt(Oe,"users",r,"trips"),t)).id;if(t.startDate&&t.endDate){const i=new Date(t.startDate),o=new Date(t.endDate),c=Math.ceil((o-i)/(1e3*60*60*24))+1;for(let l=1;l<=c;l++)l===1?(await $n(s,{day:1,time:"08:00",title:"出発",category:"transport",order:0}),await $n(s,{day:1,time:"15:00",title:"ホテル到着・チェックイン",category:"hotel",order:1})):l===c?(await $n(s,{day:l,time:"10:00",title:"ホテル出発・帰路へ",category:"transport",order:0}),await $n(s,{day:l,time:"18:00",title:"自宅到着",category:"other",order:1})):await $n(s,{day:l,time:"09:00",title:"観光スタート",category:"sightseeing",order:0})}return s}async function Vb(r,e,t){const n=Jt(Oe,"users",r,"trips",e);await Tp(n,t)}async function Nb(r,e){await Ep(Jt(Oe,"users",r,"trips",e))}async function Rn(r,e){var i;const n=((i=Z().currentTrip)==null?void 0:i.ownerId)||As();return(await ds(Gt(Oe,"users",n,"trips",r,e))).docs.map(o=>({id:o.id,...o.data()}))}async function Pn(r,e,t){var o;const s=((o=Z().currentTrip)==null?void 0:o.ownerId)||As();return(await Dc(Gt(Oe,"users",s,"trips",r,e),{...t,createdAt:Vc()})).id}async function go(r,e,t,n){var o;const i=((o=Z().currentTrip)==null?void 0:o.ownerId)||As();await Tp(Jt(Oe,"users",i,"trips",r,e,t),n)}async function yo(r,e,t){var i;const s=((i=Z().currentTrip)==null?void 0:i.ownerId)||As();await Ep(Jt(Oe,"users",s,"trips",r,e,t))}const Lb=r=>Rn(r,"flashcards"),Ob=(r,e)=>Pn(r,"flashcards",e),Lh=r=>Rn(r,"checklist"),om=(r,e)=>Pn(r,"checklist",e),Mb=(r,e,t)=>go(r,"checklist",e,t),Fb=r=>Rn(r,"schedules"),$n=(r,e)=>Pn(r,"schedules",e),na=(r,e,t)=>go(r,"schedules",e,t),jb=(r,e)=>yo(r,"schedules",e),ra=r=>Rn(r,"research"),Oh=(r,e)=>Pn(r,"research",e),Mh=(r,e,t)=>go(r,"research",e,t),Fh=(r,e)=>yo(r,"research",e),jh=r=>Rn(r,"budget"),Bb=(r,e)=>Pn(r,"budget",e),Ub=(r,e)=>yo(r,"budget",e),$b=r=>Rn(r,"emergency"),qb=(r,e)=>Pn(r,"emergency",e);async function am(r){if(!r)return null;const e=Jt(Oe,"users",r,"settings","master"),t=await vp(e);return t.exists()?t.data():null}async function zb(r,e){if(!r)return;const t=Jt(Oe,"users",r,"settings","master");await GI(t,e,{merge:!0})}const Gb=r=>Rn(r,"omiyage"),Hb=(r,e)=>Pn(r,"omiyage",e),Kb=(r,e,t)=>go(r,"omiyage",e,t),Wb=(r,e)=>yo(r,"omiyage",e);async function Qb(r,e){const t=ki(Gt(Oe,"sharedTrips"),mp("shareId","==",r)),n=await ds(t);return n.empty?!1:n.docs[0].data().password===e}const Jb="modulepreload",Yb=function(r){return"/tabi-shiori/"+r},Bh={},cm=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Yb(l),l in Bh)return;Bh[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Jb,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,v)=>{p.addEventListener("load",g),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Xb="https://script.google.com/macros/s/AKfycbwARwcfB8irhjuKvmaifTk-M0FePVPjzVohKRZTXaQtTAvpN1K4iX-cr5rdiAfYpATr/exec",lm="tabi_shiori_translation_cache";let Jr=new Map;try{const r=localStorage.getItem(lm);r&&(Jr=new Map(Object.entries(JSON.parse(r))))}catch(r){console.warn("Failed to load translation cache",r)}function Zb(){try{const r=Object.fromEntries(Jr);localStorage.setItem(lm,JSON.stringify(r))}catch{}}async function ot(r,e=!1){if(!r||typeof r!="string"||/^[\d\s\W]+$/.test(r))return r;const{language:t}=Z();if(t==="ja")return r;const n=`${r}_${t}`;if(Jr.has(n))return Jr.get(n);if(e)return r;try{const s=new URL(Xb);s.searchParams.append("text",r),s.searchParams.append("target",t);const o=await(await fetch(s.toString(),{method:"GET"})).json();return o.success&&o.translatedText?(Jr.set(n,o.translatedText),Zb(),o.translatedText):r}catch(s){return console.warn("Translation failed:",s),r}}const sa=[{id:"greeting",label:"挨拶",emoji:"👋"},{id:"thanks",label:"感謝",emoji:"🙏"},{id:"shopping",label:"買い物",emoji:"🛍️"},{id:"restaurant",label:"レストラン",emoji:"🍽️"},{id:"transport",label:"交通",emoji:"🚌"},{id:"emergency",label:"緊急",emoji:"🆘"},{id:"basic",label:"基本",emoji:"💬"}],Zs={en:{greeting:[{phrase:"Hello",reading:"ハロー",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Good morning",reading:"グッド モーニング",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Good evening",reading:"グッド イブニング",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"Good night",reading:"グッド ナイト",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"How are you?",reading:"ハウ アー ユー？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Thank you",reading:"サンキュー",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Thanks a lot",reading:"サンクス ア ロット",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"You're welcome",reading:"ユア ウェルカム",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"No problem",reading:"ノー プロブレム",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"I appreciate it",reading:"アイ アプリシエイト イット",jp:"感謝します",th:"ฉันซาบซึ้ง",en:"I appreciate it"}],shopping:[{phrase:"How much is this?",reading:"ハウ マッチ イズ ディス？",jp:"これはいくらですか？",th:"อันนี้ราคาเท่าไหร่?",en:"How much is this?"},{phrase:"Can I pay by credit card?",reading:"キャン アイ ペイ バイ クレジット カード？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรเครดิตได้ไหม?",en:"Can I pay by credit card?"},{phrase:"I'll take this",reading:"アイル テイク ディス",jp:"これを買います",th:"ฉันเอาอันนี้",en:"I'll take this"},{phrase:"Can you give me a discount?",reading:"キャン ユー ギブ ミー ア ディスカウント？",jp:"安くしてもらえませんか？",th:"ลดราคาให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"Do you have this in a different color?",reading:"ドゥー ユー ハブ ディス イン ア ディファレント カラー？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in a different color?"}],restaurant:[{phrase:"Table for two, please",reading:"テーブル フォー トゥー プリーズ",jp:"2人です",th:"ขอโต๊ะสำหรับสองคนครับ/ค่ะ",en:"Table for two, please"},{phrase:"Can I have the menu?",reading:"キャン アイ ハブ ザ メニュー？",jp:"メニューを見せてください",th:"ขอเมนูหน่อยครับ/ค่ะ",en:"Can I have the menu?"},{phrase:"I'd like to order",reading:"アイド ライク トゥー オーダー",jp:"注文をお願いします",th:"ขอสั่งอาหารครับ/ค่ะ",en:"I'd like to order"},{phrase:"Check, please",reading:"チェック プリーズ",jp:"お会計をお願いします",th:"เช็คบิลด้วยครับ/ค่ะ",en:"Check, please"},{phrase:"Water, please",reading:"ウォーター プリーズ",jp:"お水をください",th:"ขอน้ำเปล่าครับ/ค่ะ",en:"Water, please"}],transport:[{phrase:"Where is the train station?",reading:"ウェア イズ ザ トレイン ステーション？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"I want to go here",reading:"アイ ウォント トゥー ゴー ヒア",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Does this bus go to the airport?",reading:"ダズ ディス バス ゴー トゥー ザ エアポート？",jp:"このバスは空港に行きますか？",th:"รถบัสคันนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Stop here, please",reading:"ストップ ヒア プリーズ",jp:"ここで降ろしてください",th:"จอดตรงนี้ครับ/ค่ะ",en:"Stop here, please"},{phrase:"How long does it take?",reading:"ハウ ロング ダズ イット テイク？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Help!",reading:"ヘルプ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Call an ambulance",reading:"コール アン アンビュランス",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลให้หน่อย",en:"Call an ambulance"},{phrase:"Call the police",reading:"コール ザ ポリス",jp:"警察を呼んでください",th:"เรียกตำรวจให้หน่อย",en:"Call the police"},{phrase:"I lost my passport",reading:"アイ ロスト マイ パスポート",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Where is the hospital?",reading:"ウェア イズ ザ ホスピタル？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Yes",reading:"イエス",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノー",jp:"いいえ",th:"ไม่",en:"No"},{phrase:"Excuse me",reading:"エクスキューズ ミー",jp:"すみません",th:"ขอโทษครับ/ค่ะ",en:"Excuse me"},{phrase:"Sorry",reading:"ソーリー",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"I don't understand",reading:"アイ ドント アンダースタンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},th:{greeting:[{phrase:"สวัสดี",reading:"サワディー",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"อรุณสวัสดิ์",reading:"アルンサワッ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"ราตรีสวัสดิ์",reading:"ラートリーサワッ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"สบายดีไหม",reading:"サバーイ ディー マイ",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"},{phrase:"แล้วพบกันใหม่",reading:"レーオ ポップ ガン マイ",jp:"また会いましょう",th:"แล้วพบกันใหม่",en:"See you again"}],thanks:[{phrase:"ขอบคุณ",reading:"コップクン",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"ขอบคุณมาก",reading:"コップクン マーク",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"ไม่เป็นไร",reading:"マイペンライ",jp:"どういたしまして/大丈夫です",th:"ไม่เป็นไร",en:"You're welcome/No problem"},{phrase:"ด้วยความยินดี",reading:"ドゥアイ クワーム インディー",jp:"喜んで",th:"ด้วยความยินดี",en:"With pleasure"},{phrase:"ขอบคุณสำหรับความช่วยเหลือ",reading:"コップクン サムラップ クワーム チュアイ ルア",jp:"助けてくれてありがとう",th:"ขอบคุณสำหรับความช่วยเหลือ",en:"Thank you for your help"}],shopping:[{phrase:"อันนี้ราคาเท่าไหร่",reading:"アンニー ラーカー タオライ",jp:"これはいくらですか？",th:"อันนี้ราคาเท่าไหร่?",en:"How much is this?"},{phrase:"ลดราคาให้หน่อยได้ไหม",reading:"ロット ラーカー ハイ ノイ ダイ マイ",jp:"安くしてもらえませんか？",th:"ลดราคาให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"เอาอันนี้",reading:"アオ アンニー",jp:"これを買います",th:"เอาอันนี้",en:"I'll take this"},{phrase:"มีสีอื่นไหม",reading:"ミー シー ウーン マイ",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in a different color?"},{phrase:"รับบัตรเครดิตไหม",reading:"ラップ バット クレディット マイ",jp:"クレジットカードは使えますか？",th:"รับบัตรเครดิตไหม?",en:"Do you accept credit cards?"}],restaurant:[{phrase:"ขอเมนูหน่อย",reading:"コー メニュー ノイ",jp:"メニューを見せてください",th:"ขอเมนูหน่อย",en:"Can I have the menu?"},{phrase:"เก็บเงินด้วย",reading:"ゲップ ングン ドゥアイ",jp:"お会計をお願いします",th:"เก็บเงินด้วย",en:"Check, please"},{phrase:"ไม่ใส่ผักชี",reading:"マイ サイ パクチー",jp:"パクチーを入れないでください",th:"ไม่ใส่ผักชี",en:"No coriander"},{phrase:"เผ็ดน้อย",reading:"ペット ノーイ",jp:"辛くしないでください",th:"เผ็ดน้อย",en:"Less spicy"},{phrase:"อร่อยมาก",reading:"アロイ マーク",jp:"とても美味しいです",th:"อร่อยมาก",en:"Very delicious"}],transport:[{phrase:"สถานีรถไฟอยู่ที่ไหน",reading:"サターニー ロッファイ ユー ティーナイ",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"ไปที่นี่",reading:"パイ ティーニー",jp:"ここに行ってください",th:"ไปที่นี่",en:"Go here, please"},{phrase:"จอดตรงนี้",reading:"ジョート トロンニー",jp:"ここで停めてください",th:"จอดตรงนี้",en:"Stop here"},{phrase:"ใช้เวลานานเท่าไหร่",reading:"チャイ ウェーラー ナーン タオライ",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"},{phrase:"เปิดมิเตอร์ด้วย",reading:"プート ミーター ドゥアイ",jp:"メーターを回してください",th:"เปิดมิเตอร์ด้วย",en:"Please turn on the meter"}],emergency:[{phrase:"ช่วยด้วย",reading:"チュアイ ドゥアイ",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"เรียกรถพยาบาลให้หน่อย",reading:"リアク ロッパヤバーン ハイ ノイ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลให้หน่อย",en:"Call an ambulance"},{phrase:"เรียกตำรวจให้หน่อย",reading:"リアク タムルワット ハイ ノイ",jp:"警察を呼んでください",th:"เรียกตำรวจให้หน่อย",en:"Call the police"},{phrase:"ทำพาสปอร์ตหาย",reading:"タム パスポート ハーイ",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"โรงพยาบาลอยู่ที่ไหน",reading:"ローンパヤバーン ユー ティーナイ",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"ใช่",reading:"チャイ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"ไม่ใช่",reading:"マイチャイ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"ขอโทษ",reading:"コートート",jp:"すみません/ごめんなさい",th:"ขอโทษ",en:"Excuse me / Sorry"},{phrase:"ไม่เข้าใจ",reading:"マイ カオジャイ",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"},{phrase:"พูดภาษาอังกฤษได้ไหม",reading:"プート パーサー アングリット ダイ マイ",jp:"英語を話せますか？",th:"พูดภาษาอังกฤษได้ไหม?",en:"Can you speak English?"}]},zh:{greeting:[{phrase:"你好",reading:"ニーハオ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"早上好",reading:"ザオシャンハオ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"晚上好",reading:"ワンシャンハオ",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"晚安",reading:"ワンアン",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"你好吗？",reading:"ニーハオマ？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"谢谢",reading:"シエシエ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"非常感谢",reading:"フェイチャンガンシエ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"不客气",reading:"ブーカーチー",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"没关系",reading:"メイグアンシー",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"辛苦了",reading:"シンクーラ",jp:"お疲れ様でした",th:"ขอบคุณสำหรับความเหนื่อยยาก",en:"Thank you for your hard work"}],shopping:[{phrase:"多少钱？",reading:"ドゥオシャオチエン？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"可以刷卡吗？",reading:"クーイシュアカーマ？",jp:"クレジットカードは使えますか？",th:"รูดบัตรได้ไหม?",en:"Can I use a credit card?"},{phrase:"我要这个",reading:"ウォーヤオジェイガ",jp:"これを買います",th:"เอาอันนี้",en:"I want this"},{phrase:"能便宜一点吗？",reading:"ノォンピエンイーイーディエンマ？",jp:"安くしてもらえませんか？",th:"ลดหน่อยได้ไหม?",en:"Can you make it cheaper?"},{phrase:"有别的颜色吗？",reading:"ヨウビエダユィエンスーマ？",jp:"他の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have other colors?"}],restaurant:[{phrase:"两个人",reading:"リャンガレン",jp:"2人です",th:"สองคน",en:"Two people"},{phrase:"请给我菜单",reading:"チンゲイウォツァイダン",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"Please give me the menu"},{phrase:"我要点餐",reading:"ウォーヤオディエンツァン",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I'd like to order"},{phrase:"买单",reading:"マイダン",jp:"お会計をお願いします",th:"เช็คบิล",en:"Check, please"},{phrase:"请给我水",reading:"チンゲイウォシュイ",jp:"お水をください",th:"ขอน้ำเปล่าหน่อย",en:"Water, please"}],transport:[{phrase:"火车站怎么走？",reading:"フオチャージャンゼンマゾウ？",jp:"駅へはどう行けばいいですか？",th:"ไปสถานีรถไฟยังไง?",en:"How to go to the train station?"},{phrase:"我要去这里",reading:"ウォーヤオチュージェーリー",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"这辆车去机场吗？",reading:"ジェリャンチャチュウジーチャンマ？",jp:"このバス/車は空港に行きますか？",th:"รถคันนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"在这里停",reading:"ザイジェリーティン",jp:"ここで停めてください",th:"จอดตรงนี้",en:"Stop here"},{phrase:"要多长时间？",reading:"ヤオドゥオチャンシージエン？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"救命！",reading:"ジウミン！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"叫救护车",reading:"ジャオジウフーチャー",jp:"救急車を呼んでください",th:"เรียกรถพยาบาล",en:"Call an ambulance"},{phrase:"报警",reading:"バオジン",jp:"警察を呼んでください",th:"แจ้งตำรวจ",en:"Call the police"},{phrase:"我护照丢了",reading:"ウォーフージャオディウラ",jp:"パスポートを無くしました",th:"พาสปอร์ตหาย",en:"I lost my passport"},{phrase:"医院在哪里？",reading:"イーユエンザイナーリー？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"是",reading:"シー",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"不是",reading:"ブーシー",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"不好意思",reading:"ブーハオイースー",jp:"すみません",th:"ขอโทษ (เรียกความสนใจ)",en:"Excuse me"},{phrase:"对不起",reading:"ドゥイブーチー",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"我听不懂",reading:"ウォーティンブードン",jp:"わかりません",th:"ฟังไม่เข้าใจ",en:"I don't understand"}]},ko:{greeting:[{phrase:"안녕하세요",reading:"アンニョンハセヨ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"안녕히 주무세요",reading:"アンニョンヒ ジュムセヨ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"잘 지내셨어요?",reading:"チャル ジネショッソヨ？",jp:"お元気でしたか？",th:"สบายดีไหม?",en:"How have you been?"},{phrase:"안녕히 계세요",reading:"アンニョンヒ ゲセヨ",jp:"さようなら（自分が去る時）",th:"ลาก่อน",en:"Goodbye"},{phrase:"반갑습니다",reading:"パンガプスムニ다",jp:"はじめまして",th:"ยินดีที่ได้รู้จัก",en:"Nice to meet you"}],thanks:[{phrase:"감사합니다",reading:"カムサハムニダ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"정말 감사합니다",reading:"チョンマル カムサハムニダ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"천만에요",reading:"チョンマネヨ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"괜찮아요",reading:"ケンチャナヨ",jp:"大丈夫です/結構です",th:"ไม่เป็นไร",en:"It's okay/No thanks"},{phrase:"수고하셨습니다",reading:"スゴハショッスムニダ",jp:"お疲れ様でした",th:"ขอบคุณที่เหนื่อยยาก",en:"Good job"}],shopping:[{phrase:"얼마예요?",reading:"オルマエヨ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"카드 되나요?",reading:"カドゥ テナヨ？",jp:"カードは使えますか？",th:"รับบัตรไหม?",en:"Can I use a card?"},{phrase:"이걸로 주세요",reading:"イゴルロ ジュセヨ",jp:"これをください",th:"เอาอันนี้",en:"I'll take this"},{phrase:"조금 깎아주세요",reading:"チョグム カッカジュセヨ",jp:"少し安くしてください",th:"ลดราคาให้หน่อย",en:"Please give me a discount"},{phrase:"다른 색상 있나요?",reading:"タルン セクサン インナヨ？",jp:"他の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have other colors?"}],restaurant:[{phrase:"두 명이요",reading:"トゥ ミョンイヨ",jp:"2人です",th:"สองคนค่ะ/ครับ",en:"Two people"},{phrase:"메뉴판 주세요",reading:"メニューパン ジュセヨ",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"Menu, please"},{phrase:"주문할게요",reading:"チュムナルケ요",jp:"注文します",th:"ขอสั่งอาหาร",en:"I will order"},{phrase:"계산서 주세요",reading:"ケサンソ ジュセヨ",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"Check, please"},{phrase:"물 좀 주세요",reading:"ムル チョム ジュセヨ",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"기차역이 어디예요?",reading:"キチャヨギ オディエヨ？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"여기로 가주세요",reading:"ヨギロ カジュセヨ",jp:"ここに行ってください",th:"ไปที่นี่",en:"Please go here"},{phrase:"이 버스 공항 가나요?",reading:"イ ボス コンハン カナヨ？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"여기서 세워주세요",reading:"ヨギソ セウォジュセヨ",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Please stop here"},{phrase:"얼마나 걸려요?",reading:"オルマ나 コルリョヨ？",jp:"どのくらいかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"도와주세요!",reading:"トワジュセヨ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"구급차 불러주세요",reading:"クグプチャ プルロジュセヨ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Please call an ambulance"},{phrase:"경찰 불러주세요",reading:"キョンチャル プルロジュセヨ",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Please call the police"},{phrase:"여권을 잃어버렸어요",reading:"ヨックォヌル イロボリョッソヨ",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"병원이 어디예요?",reading:"ピョンウォニ オディエヨ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"네",reading:"ネ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"아니요",reading:"アニヨ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"실례합니다",reading:"シルレハムニダ",jp:"すみません（尋ねる時）",th:"ขอโทษ",en:"Excuse me"},{phrase:"죄송합니다",reading:"チェソンハムニダ",jp:"ごめんなさい",th:"ขอโทษ",en:"I am sorry"},{phrase:"모르겠어요",reading:"モルゲッソヨ",jp:"わかりません",th:"ไม่รู้/ไม่เข้าใจ",en:"I don't know/understand"}]},es:{greeting:[{phrase:"Hola",reading:"オラ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Buenos días",reading:"ブエノス ディアス",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Buenas tardes",reading:"ブエナス タルデス",jp:"こんにちは/こんばんは",th:"สวัสดีตอนบ่าย",en:"Good afternoon"},{phrase:"Buenas noches",reading:"ブエナス ノチェス",jp:"こんばんは/おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"¿Cómo estás?",reading:"コモ エスタス？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Gracias",reading:"グラシアス",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Muchas gracias",reading:"ムチャス グラシアス",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"De nada",reading:"デ ナダ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"No hay problema",reading:"ノ アイ プロブレマ",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"Muy amable",reading:"ムイ アマブレ",jp:"ご親切に",th:"ใจดีมาก",en:"Very kind"}],shopping:[{phrase:"¿Cuánto cuesta?",reading:"クアント クエスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much does it cost?"},{phrase:"¿Puedo pagar con tarjeta?",reading:"プエド パガール コン タルヘタ？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรได้ไหม?",en:"Can I pay with a card?"},{phrase:"Me lo llevo",reading:"メ ロ ジェボ",jp:"これを買います",th:"เอาอันนี้",en:"I'll take it"},{phrase:"¿Puede hacerme un descuento?",reading:"プエデ アセルメ ウン デスクエント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"¿Tiene esto en otro color?",reading:"ティエネ エスト エン オトロ コロール？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in another color?"}],restaurant:[{phrase:"Una mesa para dos, por favor",reading:"ウナ メサ パラ ドス ポル ファボール",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"El menú, por favor",reading:"エル メニュー ポル ファボール",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Quisiera pedir",reading:"キシエラ ペディール",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"La cuenta, por favor",reading:"ラ クエンタ ポル ファボール",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Agua, por favor",reading:"アグア ポル ファボール",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"¿Dónde está la estación de tren?",reading:"ドンデ エスタ ラ エスタシオン デ トレン？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Quiero ir aquí",reading:"キエロ イール アキ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"¿Este autobús va al aeropuerto?",reading:"エステ アウトブス バ アル アエロプエルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Pare aquí, por favor",reading:"パレ アキ ポル ファボール",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"¿Cuánto tiempo tarda?",reading:"クアント ティエンポ タルダ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"¡Ayuda!",reading:"アユダ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Llame a una ambulancia",reading:"ジャメ ア ウナ アンブランシア",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Llame a la policía",reading:"ジャメ ア ラ ポリシア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"He perdido mi pasaporte",reading:"エ ペルディード ミ パサポルテ",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I have lost my passport"},{phrase:"¿Dónde está el hospital?",reading:"ドンデ エスタ エル オスピタル？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sí",reading:"シ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Disculpe",reading:"ディスクルペ",jp:"すみません",th:"ขอโทษ (เรียก)",en:"Excuse me"},{phrase:"Lo siento",reading:"ロ シエント",jp:"ごめんなさい",th:"ขอโทษ",en:"I'm sorry"},{phrase:"No entiendo",reading:"ノ エンティエンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},it:{greeting:[{phrase:"Ciao",reading:"チャオ",jp:"こんにちは / さようなら",th:"สวัสดี/ลาก่อน",en:"Hello/Goodbye"},{phrase:"Buongiorno",reading:"ブオンジョルノ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Buonasera",reading:"ブオナセーラ",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"Buonanotte",reading:"ブオナノッテ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"Come stai?",reading:"コメ スタイ？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Grazie",reading:"グラッツィエ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Mille grazie",reading:"ミッレ グラッツィエ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"Prego",reading:"プレーゴ",jp:"どういたしまして / どうぞ",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"Di nulla",reading:"ディ ヌッラ",jp:"とんでもない",th:"ไม่เป็นไร",en:"Not at all"},{phrase:"Nessun problema",reading:"ネッスン プロブレーマ",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"}],shopping:[{phrase:"Quanto costa?",reading:"クアント コスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"Posso pagare con la carta di credito?",reading:"ポッソ パガーレ コン ラ カルタ ディ クレディト？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรเครดิตได้ไหม?",en:"Can I pay with credit card?"},{phrase:"Prendo questo",reading:"プレンド クエスト",jp:"これを買います",th:"เอาอันนี้",en:"I'll take this"},{phrase:"Può farmi uno sconto?",reading:"プォ ファルミ ウノ スコント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"Avete questo in un altro colore?",reading:"アヴェーテ クエスト イン ウン アルトロ コローレ？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in another color?"}],restaurant:[{phrase:"Un tavolo per due, per favore",reading:"ウン ターヴォロ ペル ドゥーエ ペル ファヴォーレ",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"Il menù, per favore",reading:"イル メニュー ペル ファヴォーレ",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Vorrei ordinare",reading:"ヴォッレイ オルディナーレ",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"Il conto, per favore",reading:"イル コント ペル ファヴォーレ",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Acqua, per favore",reading:"アックア ペル ファヴォーレ",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"Dov'è la stazione ferroviaria?",reading:"ドヴェ ラ スタツィオーネ フェッロヴィアーリア？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Voglio andare qui",reading:"ヴォーリョ アンダーレ クイ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Questo autobus va all'aeroporto?",reading:"クエスト アウトブス ヴァ アッラエロポルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Si fermi qui, per favore",reading:"シ フェルミ クイ ペル ファヴォーレ",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"Quanto tempo ci vuole?",reading:"クアント テンポ チ ヴオーレ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Aiuto!",reading:"アユート！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Chiami un'ambulanza",reading:"キアーミ ウナンブランツァ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Chiami la polizia",reading:"キアーミ ラ ポリツィーア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"Ho perso il passaporto",reading:"オ ペルソ イル パッサポルト",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Dov'è l'ospedale?",reading:"ドヴェ ロスペダーレ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sì",reading:"スィ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Scusa",reading:"スクーザ",jp:"すみません",th:"ขอโทษ (เรียก)",en:"Excuse me"},{phrase:"Mi dispiace",reading:"ミ ディスピアチェ",jp:"ごめんなさい",th:"ขอโทษ",en:"I am sorry"},{phrase:"Non capisco",reading:"ノン カピスコ",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},pt:{greeting:[{phrase:"Olá",reading:"オラ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Bom dia",reading:"ボン ジーア",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Boa tarde",reading:"ボア タルヂ",jp:"こんにちは（午後）",th:"สวัสดีตอนบ่าย",en:"Good afternoon"},{phrase:"Boa noite",reading:"ボア ノイチ",jp:"こんばんは/おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"Tudo bem?",reading:"トゥド ベン？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Obrigado(a)",reading:"オブリガード（ダ）",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Muito obrigado(a)",reading:"ムイント オブリガード（ダ）",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"De nada",reading:"ジ ナダ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"Não há de quê",reading:"ナォン ア ジ ケ",jp:"とんでもないです",th:"ไม่เป็นไร",en:"Not at all"},{phrase:"Imagina",reading:"イマジナ",jp:"気にしないでください",th:"ช่างมันเถอะ",en:"Don't mention it"}],shopping:[{phrase:"Quanto custa?",reading:"クアント クスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much does it cost?"},{phrase:"Posso pagar com cartão?",reading:"ポッソ パガール コン カルタォン？",jp:"カードで払えますか？",th:"จ่ายด้วยบัตรได้ไหม?",en:"Can I pay with card?"},{phrase:"Vou levar este",reading:"ヴォウ レヴァール エスチ",jp:"これを買います",th:"เอาอันนี้",en:"I will take this"},{phrase:"Tem desconto?",reading:"テン デスコント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Is there a discount?"},{phrase:"Tem em outra cor?",reading:"テン エン オウトラ コール？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have it in another color?"}],restaurant:[{phrase:"Uma mesa para dois, por favor",reading:"ウマ メザ パラ ドイス ポル ファヴォール",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"O cardápio, por favor",reading:"オ カルダピオ ポル ファヴォール",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Gostaria de fazer o pedido",reading:"ゴスタリア ジ ファゼール オ ペジード",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"A conta, por favor",reading:"ア コンタ ポル ファヴォール",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Água, por favor",reading:"アグア ポル ファヴォール",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"Onde fica a estação de trem?",reading:"オンヂ フィカ ア エスタサォン ジ トレン？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Quero ir para cá",reading:"ケロ イール パラ カ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Este ônibus vai para o aeroporto?",reading:"エスチ オニブス ヴァイ パラ オ アエロポルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Pare aqui, por favor",reading:"パリ アキ ポル ファヴォール",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"Quanto tempo demora?",reading:"クアント テンポ デモラ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Socorro!",reading:"ソホーホ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Chame uma ambulância",reading:"シャミ ウマ アンブランシア",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Chame a polícia",reading:"シャミ ア ポリシア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"Perdi meu passaporte",reading:"ペルジ メウ パサポルチ",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Onde fica o hospital?",reading:"オンヂ フィカ オ オスピタウ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sim",reading:"シン",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"Não",reading:"ナォン",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Com licença",reading:"コン リセンサ",jp:"すみません",th:"ขออนุญาต/ขอโทษ",en:"Excuse me"},{phrase:"Desculpe",reading:"デスクウピ",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"Não entendo",reading:"ナォン エンテンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]}},Uh={US:"en",GB:"en",AU:"en",CA:"en",NZ:"en",IE:"en",ZA:"en",IN:"en",PH:"en",SG:"en",TH:"th",CN:"zh",TW:"zh",HK:"zh",MO:"zh",KR:"ko",KP:"ko",ES:"es",MX:"es",AR:"es",CO:"es",PE:"es",CL:"es",EC:"es",GT:"es",CU:"es",BO:"es",DO:"es",HN:"es",PY:"es",SV:"es",NI:"es",CR:"es",PA:"es",UY:"es",VE:"es",IT:"it",SM:"it",VA:"it",CH:"it",PT:"pt",BR:"pt",MZ:"pt",AO:"pt",CV:"pt",GW:"pt",ST:"pt",JP:"ja"};function Hc(r){if(!r)return"en";const e=r.toUpperCase();if(Uh[e])return Uh[e];const t=r.toLowerCase();return t.includes("タイ")||t.includes("thai")?"th":t.includes("台湾")||t.includes("taiwan")||t.includes("中国")||t.includes("china")||t.includes("香港")||t.includes("hong")?"zh":t.includes("韓国")||t.includes("korea")?"ko":t.includes("スペイン")||t.includes("メキシコ")||t.includes("spain")||t.includes("mexico")?"es":t.includes("イタリア")||t.includes("italy")?"it":t.includes("ポルトガル")||t.includes("ブラジル")||t.includes("portugal")||t.includes("brazil")?"pt":t.includes("日本")||t.includes("japan")?"ja":"en"}function Fi(r){return{en:"🇺🇸",th:"🇹🇭",zh:"🇹🇼",ko:"🇰🇷",es:"🇪🇸",it:"🇮🇹",pt:"🇵🇹",ja:"🇯🇵"}[r]||"🏳️"}const Yr=[{code:"TW",name:{ja:"台湾",en:"Taiwan",th:"ไต้หวัน"},flag:"🇹🇼"},{code:"KR",name:{ja:"韓国",en:"South Korea",th:"เกาหลีใต้"},flag:"🇰🇷"},{code:"US",name:{ja:"アメリカ",en:"United States",th:"สหรัฐอเมริกา"},flag:"🇺🇸"},{code:"TH",name:{ja:"タイ",en:"Thailand",th:"ไทย"},flag:"🇹🇭"},{code:"CN",name:{ja:"中国",en:"China",th:"จีน"},flag:"🇨🇳"},{code:"HK",name:{ja:"香港",en:"Hong Kong",th:"ฮ่องกง"},flag:"🇭🇰"},{code:"SG",name:{ja:"シンガポール",en:"Singapore",th:"สิงคโปร์"},flag:"🇸🇬"},{code:"AU",name:{ja:"オーストラリア",en:"Australia",th:"ออสเตรเลีย"},flag:"🇦🇺"},{code:"GB",name:{ja:"イギリス",en:"United Kingdom",th:"สหราชอาณาจักร"},flag:"🇬🇧"},{code:"FR",name:{ja:"フランス",en:"France",th:"ฝรั่งเศส"},flag:"🇫🇷"},{code:"IT",name:{ja:"イタリア",en:"Italy",th:"อิตาลี"},flag:"🇮🇹"},{code:"ES",name:{ja:"スペイン",en:"Spain",th:"สเปน"},flag:"🇪🇸"},{code:"DE",name:{ja:"ドイツ",en:"Germany",th:"เยอรมนี"},flag:"🇩🇪"},{code:"CA",name:{ja:"カナダ",en:"Canada",th:"แคนาดา"},flag:"🇨🇦"},{code:"PH",name:{ja:"フィリピン",en:"Philippines",th:"ฟิลิปปินส์"},flag:"🇵🇭"},{code:"VN",name:{ja:"ベトナム",en:"Vietnam",th:"เวียดนาม"},flag:"🇻🇳"},{code:"MY",name:{ja:"マレーシア",en:"Malaysia",th:"มาเลเซีย"},flag:"🇲🇾"},{code:"ID",name:{ja:"インドネシア",en:"Indonesia",th:"อินโดนีเซีย"},flag:"🇮🇩"},{code:"PT",name:{ja:"ポルトガル",en:"Portugal",th:"โปรตุเกส"},flag:"🇵🇹"},{code:"BR",name:{ja:"ブラジル",en:"Brazil",th:"บราซิล"},flag:"🇧🇷"},{code:"MX",name:{ja:"メキシコ",en:"Mexico",th:"เม็กซิโก"},flag:"🇲🇽"},{code:"CH",name:{ja:"スイス",en:"Switzerland",th:"สวิตเซอร์แลนด์"},flag:"🇨🇭"},{code:"JP",name:{ja:"日本",en:"Japan",th:"ญี่ปุ่น"},flag:"🇯🇵"},{code:"OTHER",name:{ja:"その他 (自由入力)",en:"Other",th:"อื่นๆ"},flag:"🏳️"}],ew={async render(){const{currentTrip:r,trips:e,user:t}=Z();if(!r){let v="";return e&&e.length>0&&(v=`
          <div class="portal-trips" style="margin-top: 32px;">
            <h2 class="text-center mb-md" style="font-size: 1.2rem; color: var(--text-dark);">${_("yourTrips")||"あなたの旅行"}</h2>
            <div class="trips-list" style="display: flex; flex-direction: column; gap: 12px; padding: 0 16px;">
              ${e.map(P=>`
                <div class="card portal-trip-card" data-trip-id="${P.id}" style="cursor: pointer; display: flex; align-items: center; padding: 16px;">
                  <span style="font-size: 24px; margin-right: 12px;">✈️</span>
                  <div style="flex: 1; min-width: 0;">
                    <h3 style="margin: 0; font-size: 1.1rem; color: var(--text-dark); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${P.title||_("untitledTrip")}</h3>
                    <p style="margin: 4px 0 0; font-size: 0.85rem; color: var(--text-muted);">${P.startDate||""} ${P.endDate?"〜 "+P.endDate:""}</p>
                  </div>
                  <span style="color: var(--color-pink); font-weight: bold;">❯</span>
                </div>
              `).join("")}
            </div>
          </div>
        `),`
        <div class="page fade-in">
          <div class="welcome-section">
            <img src="/tabi-shiori/images/mascot.jpg" alt="たびくま" class="welcome-mascot" />
            <h1 class="welcome-title">${_("welcomeTitle")}</h1>
            <p class="welcome-text">${_("welcomeDesc")}</p>
            <button id="btn-create-trip" class="btn btn-primary">${_("btnWelcomeCreate")}</button>
            ${!t||t.isAnonymous?`
            <button id="btn-welcome-google" class="btn btn-secondary mt-md" style="width:100%; border:1px solid #ccc; background:#fff; color:#333; margin-top:16px;">
              <span style="margin-right:8px">🌐</span>${_("btnWelcomeGoogle")}
            </button>
            `:""}
          </div>
          ${v}
          <div class="text-center" style="margin-top: 40px; margin-bottom: 40px;">
            <span class="text-xs text-muted">Version 1.1.0</span>
          </div>
        </div>
      `}const n=new Date;n.setHours(0,0,0,0);const s=new Date(r.startDate),i=new Date(r.endDate);let o="";if(n<s){const v=Math.ceil((s-n)/864e5);o=`${_("countdownBefore")} <strong>${v}</strong> ${_("countdownDays")}`}else if(n>=s&&n<=i){const v=Math.ceil((n-s)/864e5)+1;o=`${_("countdownDuring")} <strong>${v}</strong> ${_("countdownDuringDays")}`}else o=_("countdownAfter");const c=v=>{if(!v)return"";const P=new Date(v),D=pi();return D==="en"?P.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):D==="th"?P.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}):`${P.getFullYear()}年${P.getMonth()+1}月${P.getDate()}日`},l=await ot(r.title)||_("untitledTrip"),h=(r.destinations||[]).map(async v=>{const P=Yr.find(k=>k.code===v.country);let D="🏳️";if(P)D=P.flag;else{const k=Hc(v.country);D=Fi(k)}return`<span style="font-size: 2rem;">${D}</span>`}),f=await Promise.all(h),p=(r.members||[]).map(async v=>{const P=v.name||"";return`
        <div class="member-avatar" title="${P}">
          <span class="member-icon">${v.icon||"😊"}</span>
          <span class="member-name">${P}</span>
        </div>
      `}),g=await Promise.all(p);return`
      <div class="page fade-in">
        <div class="home-cover" style="background-image: url('${r.coverImage||"/tabi-shiori/images/mascot.jpg"}')">
          <div class="home-cover-overlay"></div>
          <h1 class="home-trip-title">${l}</h1>
          <p class="home-trip-dates">${c(r.startDate)} 〜 ${c(r.endDate)}</p>
        </div>

        <div class="home-content">
          <div class="countdown-card">
            ${o}
          </div>

          <div class="destinations-flags" style="display: flex; justify-content: center; gap: 12px; margin-bottom: 24px;">
            ${f.join("")}
          </div>

          <div class="members-section">
            <h3>${_("members")}</h3>
            <div class="members-row">
              ${g.join("")}
            </div>
          </div>
          
          <div class="features-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px;">
            <div class="feature-card" data-route="/flashcard">
              <span class="feature-icon">🗣️</span>
              <span class="feature-label">${_("flashcardTitle")}</span>
            </div>
            <div class="feature-card" data-route="/checklist">
              <span class="feature-icon">🎒</span>
              <span class="feature-label">${_("checklistTitle")}</span>
            </div>
            <div class="feature-card" data-route="/schedule">
              <span class="feature-icon">📅</span>
              <span class="feature-label">${_("scheduleTitle")}</span>
            </div>
            <div class="feature-card" data-route="/research">
              <span class="feature-icon">🔍</span>
              <span class="feature-label">${_("researchTitle")}</span>
            </div>
            <div class="feature-card" data-route="/budget">
              <span class="feature-icon">💰</span>
              <span class="feature-label">${_("budgetTitle")}</span>
            </div>
            <div class="feature-card" data-route="/omiyage">
              <span class="feature-icon">🎁</span>
              <span class="feature-label">${_("omiyageTitle")}</span>
            </div>
          </div>

        <button id="btn-edit-trip" class="btn btn-secondary btn-small w-full mt-md" style="margin-bottom: 16px;">
          ${_("btnEditTrip")}
        </button>

        <div class="text-center mt-lg" style="margin-bottom: 24px;">
          <span class="text-xs text-muted">Version 1.1.0</span>
        </div>
      </div>
    `},init(){var r,e,t;(r=document.getElementById("btn-create-trip"))==null||r.addEventListener("click",()=>se("/trip/new")),(e=document.getElementById("btn-edit-trip"))==null||e.addEventListener("click",()=>se("/trip/edit")),document.querySelectorAll(".portal-trip-card").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-trip-id"),{trips:i}=Z(),o=i.find(c=>c.id===s);o&&cm(async()=>{const{setState:c}=await Promise.resolve().then(()=>Qm);return{setState:c}},void 0).then(({setState:c})=>{c({currentTripId:s,currentTrip:o}),localStorage.setItem("currentTripId",s),se("/",!0,!0)})})}),(t=document.getElementById("btn-welcome-google"))==null||t.addEventListener("click",async()=>{try{const{user:n}=Z();n&&n.isAnonymous?await im():await sm(),window.location.reload()}catch(n){n.code!=="auth/popup-closed-by-user"&&n.code!=="auth/cancelled-popup-request"&&alert("ログインに失敗しました: "+n.message)}}),document.querySelectorAll(".feature-card").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-route");s&&se(s)})})}};let J={activeLang:"en",activeCategory:"greeting",currentCardIndex:0,flashcards:[],customCards:[]};const tw={render(){return`
      <div class="page flashcard-page">
        <header class="page-header">
          <button class="btn-back" id="btn-back">←</button>
          <h2 class="page-title">🗣️ ${_("flashcardTitle")||"トラベル単語帳"}</h2>
        </header>

        <div class="flashcard-language-selector" id="fc-target-langs">
          <!-- Dynamically populated flag buttons -->
        </div>

        <div class="tabs" id="fc-categories" style="margin-bottom: var(--space-lg); overflow-x: auto; white-space: nowrap;">
          <!-- Dynamically populated category tabs -->
        </div>

        <div class="flashcard-container">
          <div class="flashcard-scene" id="fc-card-wrapper">
            <div class="flashcard" id="fc-card">
              <div class="flashcard-face flashcard-front">
                <h3 id="fc-front-text" class="flashcard-phrase"></h3>
                <div class="swipe-hint">${_("tapToFlip")||"タップで裏返す 👆"}</div>
              </div>
              <div class="flashcard-face flashcard-back">
                <div style="display:flex; justify-content:center; align-items:center; gap: 12px; margin-bottom: 8px;">
                  <h3 id="fc-back-text" class="flashcard-translation" style="margin: 0;"></h3>
                  <button id="fc-play-btn" class="btn-icon" style="font-size: 1.5rem; background: var(--bg-soft); border-radius: 50%; width: 40px; height: 40px;">🔊</button>
                </div>
                <p id="fc-back-reading" class="flashcard-reading"></p>
                <div class="swipe-hint">${_("tapToReturn")||"タップで戻る 🔙"}</div>
              </div>
            </div>
          </div>
          
          <div class="flashcard-nav">
            <button id="fc-prev-btn" class="flashcard-nav-btn">◀</button>
            <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
              <span id="fc-counter" class="flashcard-counter">0 / 0</span>
              <div id="fc-fav-btn" class="flashcard-star">⭐</div>
            </div>
            <button id="fc-next-btn" class="flashcard-nav-btn">▶</button>
          </div>
        </div>

        <button class="fab" id="fc-add-btn">➕</button>

        <div id="fc-modal" class="modal-overlay">
          <div class="modal-content">
            <div class="modal-title">${_("addNewPhrase")||"新しいフレーズを追加"}</div>
            <div class="form-group mt-md">
              <label class="form-label">${_("wordToSearch")||"調べたい言葉（あなたの言語）"}</label>
              <input type="text" id="fc-new-front" placeholder="${_("wordPlaceholder")||"例: こんにちは"}" class="form-input">
            </div>
            <div class="form-group">
              <label class="form-label">${_("localSaying")||"現地での言い方"}</label>
              <input type="text" id="fc-new-back" placeholder="${_("localPlaceholder")||"例: Hello"}" class="form-input">
            </div>
            <div class="form-group">
              <label class="form-label">${_("readingMemo")||"読み方メモ"}</label>
              <input type="text" id="fc-new-reading" placeholder="${_("readingPlaceholder")||"例: ハロー"}" class="form-input">
            </div>
            <button id="fc-modal-save" class="btn btn-primary w-full mt-lg">${_("saveBtn")||"保存する"}</button>
            <button type="button" class="btn btn-secondary w-full mt-sm" id="fc-modal-close">${_("cancelBtn")||"キャンセル"}</button>
          </div>
        </div>
      </div>
    `},init(){var p,g,v,P,D,k,O,U,L,$;const r=Z(),e=r.currentTrip,t=pi(),n=t==="ja"?"jp":t;let s=["en"];if(e&&e.destinations){const N=e.destinations.map(M=>Hc(M.country)).filter(Boolean);N.length>0&&(s=[...new Set(N)])}J.activeLang=s[0]||"en";const i=document.getElementById("fc-target-langs");s.length>1?i.innerHTML=s.map(N=>`<span class="flag-tab" data-lang="${N}" style="font-size: 2.5rem; cursor: pointer; transition: opacity 0.2s; opacity: ${N===J.activeLang?"1":"0.4"};">
          ${Fi(N)}
        </span>`).join(""):s.length===1&&(i.innerHTML=`<span style="font-size: 2.5rem;">${Fi(s[0])}</span>`);const o=document.getElementById("fc-categories"),c=sa?sa.map(N=>N.id):["greeting"];c.length>0&&(J.activeCategory=c[0],o.innerHTML=sa.map(N=>`<button class="tab ${N.id===J.activeCategory?"active":""}" data-cat="${N.id}">
          ${N.emoji} ${N.label}
        </button>`).join(""));const l=()=>{let N=[];Zs&&Zs[J.activeLang]&&Zs[J.activeLang][J.activeCategory]&&(N=[...Zs[J.activeLang][J.activeCategory]]);const M=J.customCards.filter(E=>E.category===J.activeCategory&&E.lang===J.activeLang);J.flashcards=[...N,...M],J.currentCardIndex=0,h()},h=()=>{const N=J.flashcards[J.currentCardIndex],M=document.getElementById("fc-card");if(!N){document.getElementById("fc-front-text").textContent="カードがありません",document.getElementById("fc-back-text").textContent="右下の➕から追加！",document.getElementById("fc-back-reading").textContent="",document.getElementById("fc-counter").textContent="0 / 0",M.classList.remove("flipped");return}const E=N.userFront||N[n]||N.en||N.phrase,y=N.targetBack||N.phrase||"",I=N.reading||"";document.getElementById("fc-front-text").textContent=E,document.getElementById("fc-back-text").textContent=y;const b=document.getElementById("fc-back-reading");t==="ja"&&I?(b.style.display="block",b.textContent=I):(b.style.display="none",b.textContent=""),document.getElementById("fc-counter").textContent=`${J.currentCardIndex+1} / ${J.flashcards.length}`,M.classList.remove("flipped");const S=JSON.parse(localStorage.getItem("tabi_shiori_fav_cards")||"[]").includes(N.id||E);document.getElementById("fc-fav-btn").textContent=S?"🌟":"⭐",document.getElementById("fc-fav-btn").classList.toggle("active",S)};e?Lb(e.id).then(N=>{J.customCards=N,l()}):l(),(p=document.getElementById("btn-back"))==null||p.addEventListener("click",()=>se("/")),(g=document.getElementById("fc-card-wrapper"))==null||g.addEventListener("click",N=>{N.target.closest("#fc-play-btn")||document.getElementById("fc-card").classList.toggle("flipped")}),(v=document.getElementById("fc-play-btn"))==null||v.addEventListener("click",N=>{N.stopPropagation();const M=J.flashcards[J.currentCardIndex],E=(M==null?void 0:M.targetBack)||(M==null?void 0:M.phrase);if(E&&window.speechSynthesis){window.speechSynthesis.cancel();const y=new SpeechSynthesisUtterance(E),I={zh:"zh-CN",th:"th-TH",ko:"ko-KR",es:"es-ES",it:"it-IT",pt:"pt-PT",en:"en-US",ja:"ja-JP"};y.lang=I[J.activeLang]||J.activeLang,window.speechSynthesis.speak(y)}}),(P=document.getElementById("fc-prev-btn"))==null||P.addEventListener("click",N=>{N.stopPropagation(),J.currentCardIndex>0&&(J.currentCardIndex--,h())}),(D=document.getElementById("fc-next-btn"))==null||D.addEventListener("click",N=>{N.stopPropagation(),J.currentCardIndex<J.flashcards.length-1&&(J.currentCardIndex++,h())}),document.querySelectorAll(".flag-tab").forEach(N=>{N.addEventListener("click",M=>{const E=M.target.closest(".flag-tab");J.activeLang!==E.dataset.lang&&(document.querySelectorAll(".flag-tab").forEach(y=>y.style.opacity="0.4"),E.style.opacity="1",J.activeLang=E.dataset.lang,l())})}),(k=document.getElementById("fc-categories"))==null||k.addEventListener("click",N=>{const M=N.target.closest(".tab");M&&!M.classList.contains("active")&&(document.querySelectorAll("#fc-categories .tab").forEach(E=>E.classList.remove("active")),M.classList.add("active"),J.activeCategory=M.dataset.cat,l())}),(O=document.getElementById("fc-fav-btn"))==null||O.addEventListener("click",N=>{N.stopPropagation();const M=J.flashcards[J.currentCardIndex];if(!M)return;const E=M.userFront||M[n]||M.phrase,y=M.id||E;let I=JSON.parse(localStorage.getItem("tabi_shiori_fav_cards")||"[]");I.includes(y)?I=I.filter(b=>b!==y):I.push(y),localStorage.setItem("tabi_shiori_fav_cards",JSON.stringify(I)),h()});const f=document.getElementById("fc-modal");(U=document.getElementById("fc-add-btn"))==null||U.addEventListener("click",()=>{document.getElementById("fc-new-front").value="",document.getElementById("fc-new-back").value="",document.getElementById("fc-new-reading").value="",f.classList.add("active")}),(L=document.getElementById("fc-modal-close"))==null||L.addEventListener("click",()=>{f.classList.remove("active")}),f==null||f.addEventListener("click",N=>{N.target===f&&f.classList.remove("active")}),($=document.getElementById("fc-modal-save"))==null||$.addEventListener("click",async()=>{const N=document.getElementById("fc-new-front").value.trim(),M=document.getElementById("fc-new-back").value.trim(),E=document.getElementById("fc-new-reading").value.trim();if(!(!N||!M)&&e&&r.user){const y={userFront:N,targetBack:M,reading:E,category:J.activeCategory,lang:J.activeLang};await Ob(e.id,y),J.customCards.push(y),l(),f.classList.remove("active")}})}},nw=[{category:"documents",items:["パスポート","航空券(予約確認書)","ホテル予約確認書","海外旅行保険証","クレジットカード"]},{category:"electronics",items:["スマホ充電器","モバイルバッテリー","変換プラグ","イヤホン","カメラ"]},{category:"clothing",items:["着替え","下着","靴下","パジャマ","上着/羽織り"]},{category:"toiletries",items:["歯ブラシ","歯磨き粉","シャンプー","日焼け止め","常備薬"]},{category:"other",items:["現金","エコバッグ","雨具","ガイドブック"]}],$h={documents:{label:_("catDocuments")||"📄 書類",color:"var(--color-yellow)"},electronics:{label:_("catElectronics")||"🔌 電子機器",color:"var(--color-blue)"},clothing:{label:_("catClothing")||"👕 衣類",color:"var(--color-pink)"},toiletries:{label:_("catToiletries")||"🧴 洗面用品",color:"var(--color-mint)"},other:{label:_("catOtherList")||"📦 その他",color:"#e0c3fc"}},rw=["パスポート","航空券","航空券(予約確認書)"];let Kn=[];async function sw(){return`
    <div class="page checklist-page">
      <header class="page-header">
        <button class="back-btn" id="cl-back-btn">←</button>
        <h2>${_("checklistTitle")}</h2>
      </header>

      <div class="progress-container">
        <div class="progress-text" id="cl-progress-text">0/0 ${_("preparing")}</div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" id="cl-progress-fill"></div>
        </div>
      </div>

      <div class="checklist-container" id="cl-container">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `}async function iw(){if(!Z().currentTrip){document.getElementById("cl-container").innerHTML=`<p class="empty-state">${_("noTripSelected")}</p>`;return}ow(),await um()}async function um(){const r=Z(),e=r.currentTrip;if(Kn=await Lh(e.id),Kn.length===0){let t=nw;if(r.user){const n=await am(r.user.uid);n&&n.checklistMaster&&(t=n.checklistMaster)}for(const n of t)for(const s of n.items){const i={name:s,category:n.category,checked:!1,important:rw.includes(s),assignee:null};await om(e.id,i)}Kn=await Lh(e.id)}qh(!0),qh(!1)}async function qh(r=!1){const e=document.getElementById("cl-container");e.innerHTML="";for(const t of Object.keys($h)){const n=$h[t],s=Kn.filter(h=>h.category===t);if(s.length===0)continue;const i=document.createElement("div");i.className="checklist-section";const o=document.createElement("div");o.className="checklist-header",o.style.backgroundColor=n.color,o.innerHTML=`<h3>${n.label}</h3><span class="toggle-icon">▼</span>`,o.addEventListener("click",()=>{const h=i.querySelector(".checklist-items");h.classList.toggle("hidden"),o.querySelector(".toggle-icon").textContent=h.classList.contains("hidden")?"▶":"▼"}),i.appendChild(o);const c=document.createElement("div");c.className="checklist-items";for(const h of s){h.checked;const f=document.createElement("div");f.className=`checklist-item ${h.checked?"checked":""}`;const p=await ot(h.name,r)||h.name;f.innerHTML=`
        <div class="checkbox-custom" data-id="${h.id}"></div>
        <div class="item-name">
          ${h.important?'<span class="important-mark">❗</span>':""}
          ${p}
        </div>
      `,f.querySelector(".checkbox-custom").addEventListener("click",g=>{h.checked=!h.checked,h.checked?f.classList.add("checked"):f.classList.remove("checked"),ia();const v=Z();Mb(v.currentTrip.id,h.id,{checked:h.checked}).catch(P=>{console.error("Failed to update checklist item:",P),h.checked=!h.checked,f.classList.toggle("checked"),ia()})}),c.appendChild(f)}const l=document.createElement("div");l.className="add-item-container",l.innerHTML=`
      <input type="text" class="add-item-input" placeholder="${_("addItemPlaceholder")||"+ アイテムを追加"}">
    `,l.querySelector(".add-item-input").addEventListener("keypress",async h=>{if(h.key!=="Enter")return;const f=h.target;if(f.value.trim()){const p=Z();await om(p.currentTrip.id,{name:f.value.trim(),category:t,checked:!1,important:!1,assignee:null}),await um()}}),c.appendChild(l),i.appendChild(c),e.appendChild(i)}ia()}function ia(){const r=Kn.length,e=Kn.filter(s=>s.checked).length,t=document.getElementById("cl-progress-text"),n=document.getElementById("cl-progress-fill");if(r>0&&t&&n){const s=Math.round(e/r*100);n.style.width=`${s}%`,e===r?(t.textContent=`${e}/${r} ${_("perfect")||"完璧！🎉"}`,n.style.backgroundColor="var(--color-mint)"):(t.textContent=`${e}/${r} ${_("preparing")||"準備中..."}`,n.style.backgroundColor="var(--color-pink-deep)")}}function ow(){var r;(r=document.getElementById("cl-back-btn"))==null||r.addEventListener("click",()=>se("/"))}const aw={render:sw,init:iw};function cw(r,e=300,t=.6){return new Promise((n,s)=>{const i=new FileReader;i.readAsDataURL(r),i.onload=o=>{const c=new Image;c.src=o.target.result,c.onload=()=>{const l=document.createElement("canvas");let h=c.width,f=c.height;h>e&&(f=Math.round(f*e/h),h=e),l.width=h,l.height=f,l.getContext("2d").drawImage(c,0,0,h,f),n(l.toDataURL(r.type||"image/jpeg",t))},c.onerror=l=>s(l)},i.onerror=o=>s(o)})}let ei=1,We="plan",dt=[];const oa=()=>({sightseeing:{icon:"🏛️",label:_("catSightseeing")||"観光"},meal:{icon:"🍽️",label:_("catMeal")||"食事"},transport:{icon:"🚌",label:_("catTransport")||"移動"},flight:{icon:"✈️",label:_("catFlight")||"フライト"},hotel:{icon:"🏨",label:_("catHotelSch")||"ホテル"},shopping:{icon:"🛒",label:_("catShopping")||"買い物"},activity:{icon:"🎭",label:_("catActivity")||"体験"},other:{icon:"✨",label:_("catOther")||"その他"}}),lw={render(){return`
      <div class="page schedule-page">
        <header class="page-header">
          <button class="btn-icon btn-back" id="btn-back-schedule">←</button>
          <h2>${_("scheduleTitle")}</h2>
        </header>

        <div class="mode-toggle">
          <button class="mode-btn ${We==="plan"?"active":""}" data-mode="plan">${_("planMode")}</button>
          <button class="mode-btn ${We==="journal"?"active":""}" data-mode="journal">${_("journalMode")}</button>
        </div>

        <div class="day-tabs" id="dayTabs">
          <!-- タブがここに生成されます -->
        </div>

        <div class="timeline" id="timelineContainer">
          <!-- タイムラインがここに生成されます -->
        </div>

        <button class="fab" id="addScheduleBtn">+</button>

        <!-- 予定追加モーダル -->
        <div class="modal-overlay" id="scheduleModal">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <span class="close-modal">&times;</span>
            <h3>${_("addScheduleModalTitle")}</h3>
            <form id="scheduleForm">
              <input type="hidden" id="scheduleItemId">
              <div class="form-group mb-sm" style="position:relative;">
                <span style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--text-muted); pointer-events:none;">${_("timeLabel")||"時間"}</span>
                <input type="time" id="itemTime" class="form-input" style="width:100%; padding:12px 12px 12px 60px; border-radius:8px; border:1px solid #ddd;" required>
              </div>
              <input type="text" id="itemTitle" class="form-input" placeholder="${_("itemTitlePlaceholder")}" required style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
              <select id="itemCategory" class="form-input" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
                ${Object.entries(oa()).map(([r,e])=>`<option value="${r}">${e.icon} ${e.label}</option>`).join("")}
              </select>
              <input type="text" id="itemTransport" class="form-input" placeholder="${_("itemTransportPlaceholder")}" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
              <textarea id="itemMemo" class="form-input" placeholder="${_("itemMemoPlaceholder")}" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px; min-height:80px;"></textarea>
              <button type="submit" class="btn btn-primary w-full mt-lg">${_("btnAdd")}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="schedule-cancel">${_("cancelBtn")||"キャンセル"}</button>
            </form>
          </div>
        </div>

        <!-- ジャーナル記録モーダル -->
        <div class="modal-overlay" id="journalModal">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <span class="close-modal">&times;</span>
            <h3>${_("addJournalModalTitle")}</h3>
            <form id="journalForm">
              <input type="hidden" id="journalItemId">

              <div class="mb-sm">
                <label style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${_("journalRating")}</label>
                <div class="stars">
                  ${[1,2,3,4,5].map(r=>`<span class="star" data-rating="${r}">★</span>`).join("")}
                </div>
                <input type="hidden" id="journalRating" value="0">
              </div>

              <textarea id="journalText" class="form-input" placeholder="${_("journalTextPlaceholder")}" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ddd; margin-bottom:8px; min-height:60px;"></textarea>
              
              <div class="photo-upload mb-sm">
                <label style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${_("journalAddPhoto")}</label>
                <input type="file" id="journalPhotos" accept="image/*" multiple style="font-size:0.9rem;">
              </div>

              <button type="submit" class="btn btn-primary w-full mt-md">${_("btnSave")}</button>
              <button type="button" class="btn btn-secondary w-full mt-sm" id="journal-cancel">${_("cancelBtn")||"キャンセル"}</button>
            </form>
          </div>
        </div>
      </div>
    `},async init(){var h,f,p;(h=document.getElementById("btn-back-schedule"))==null||h.addEventListener("click",()=>se("/"));const e=Z().currentTrip;if(!e){alert(_("noTripSelected")||"旅行が選択されていません。"),se("/");return}const t=new Date(e.startDate),n=new Date(e.endDate),s=Math.ceil((n-t)/(1e3*60*60*24))+1,i=document.getElementById("dayTabs");let o="";for(let g=1;g<=s;g++){const v=new Date(t);v.setDate(v.getDate()+(g-1));const P=`${v.getMonth()+1}/${v.getDate()}`;o+=`<button class="day-tab ${g===ei?"active":""}" data-day="${g}">Day ${g} (${P})</button>`}i.innerHTML=o,i.querySelectorAll(".day-tab").forEach(g=>{g.addEventListener("click",v=>{document.querySelectorAll(".day-tab").forEach(P=>P.classList.remove("active")),v.target.classList.add("active"),ei=parseInt(v.target.dataset.day),this.loadSchedules(e.id)})}),document.querySelectorAll(".mode-btn").forEach(g=>{g.addEventListener("click",v=>{document.querySelectorAll(".mode-btn").forEach(P=>P.classList.remove("active")),v.target.classList.add("active"),We=v.target.dataset.mode,this.renderTimeline(!0),this.renderTimeline(!1)})});const c=document.getElementById("scheduleModal"),l=document.getElementById("journalModal");c.addEventListener("click",g=>{g.target===c&&(c.classList.remove("active"),document.getElementById("scheduleForm").reset(),document.getElementById("scheduleItemId").value="")}),l.addEventListener("click",g=>{g.target===l&&(l.classList.remove("active"),document.getElementById("journalForm").reset())}),document.getElementById("addScheduleBtn").addEventListener("click",()=>{document.getElementById("scheduleItemId").value="",document.getElementById("scheduleForm").reset(),c.classList.add("active")}),document.querySelectorAll(".close-modal").forEach(g=>{g.addEventListener("click",()=>{c.classList.remove("active"),l.classList.remove("active"),document.getElementById("scheduleForm").reset(),document.getElementById("journalForm").reset()})}),(f=document.getElementById("schedule-cancel"))==null||f.addEventListener("click",()=>{document.getElementById("scheduleModal").classList.remove("active"),document.getElementById("scheduleForm").reset(),document.getElementById("scheduleItemId").value=""}),document.getElementById("scheduleForm").addEventListener("submit",async g=>{g.preventDefault();const v={tripId:e.id,day:ei,time:document.getElementById("itemTime").value,title:document.getElementById("itemTitle").value,category:document.getElementById("itemCategory").value,transport:document.getElementById("itemTransport").value,memo:document.getElementById("itemMemo").value,order:dt.length},P=document.getElementById("scheduleItemId").value;P?await na(e.id,P,v):await $n(e.id,v),c.classList.remove("active"),g.target.reset(),document.getElementById("scheduleItemId").value="",this.loadSchedules(e.id)}),document.querySelectorAll(".star").forEach(g=>{g.addEventListener("click",v=>{const P=v.target.getBoundingClientRect(),k=v.clientX-P.left<P.width/2,O=parseInt(v.target.dataset.rating)-(k?.5:0);document.getElementById("journalRating").value=O,document.querySelectorAll(".star").forEach(U=>{const L=parseInt(U.dataset.rating);U.classList.remove("full","half"),L<=O?U.classList.add("full"):L-.5===O&&U.classList.add("half")})})}),(p=document.getElementById("journal-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("journalModal").classList.remove("active"),document.getElementById("journalForm").reset()}),document.getElementById("journalForm").addEventListener("submit",async g=>{g.preventDefault();const v=document.getElementById("journalItemId").value,P=document.getElementById("journalRating").value,D=document.getElementById("journalText").value,k=document.getElementById("journalPhotos");let U=dt.find(L=>L.id===v).journalPhotos||[];if(k.files.length>0)try{for(let L of k.files){const $=await cw(L);U.push($)}}catch(L){console.error(L),alert("画像の処理に失敗しました。ファイルサイズが大きすぎる可能性があります。")}try{await na(e.id,v,{journalText:D,journalRating:parseFloat(P),journalPhotos:U}),l.classList.remove("active"),document.getElementById("journalForm").reset(),this.loadSchedules(e.id)}catch(L){console.error(L),alert("保存に失敗しました。写真のサイズや枚数が多すぎる可能性があります。写真を減らして再度お試しください。")}}),this.loadSchedules(e.id)},async loadSchedules(r){dt=(await Fb(r)).filter(t=>t.day===ei),dt.sort((t,n)=>t.time.localeCompare(n.time)),await this.renderTimeline(!0),this.renderTimeline(!1)},async renderTimeline(r=!1){const e=document.getElementById("timelineContainer");if(dt.length===0){e.innerHTML=`<p class="empty-state">${We==="plan"?_("noScheduleHelp")||"予定がありません。追加してみましょう！":_("noJournalHelp")||"記録がありません。思い出を追加しよう！"}</p>`;return}const t=dt.map(async o=>{const c=oa()[o.category]||oa().other,l=await ot(o.title,r)||o.title,h=o.memo?await ot(o.memo,r)||o.memo:"";let f="";if(We==="journal")if(o.journalText||o.journalRating||o.journalPhotos&&o.journalPhotos.length>0){const g=o.journalPhotos?o.journalPhotos.map((U,L)=>`
              <div style="position:relative; display:inline-block; margin-right:8px; margin-bottom:8px;">
                <img src="${U}" class="journal-photo" style="width:70px; height:70px; object-fit:cover; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                <button class="delete-photo-btn" data-id="${o.id}" data-index="${L}" style="position:absolute; top:-6px; right:-6px; background:white; border:1px solid #ddd; border-radius:50%; width:22px; height:22px; font-size:14px; line-height:1; cursor:pointer; color:red; display:flex; align-items:center; justify-content:center; box-shadow:0 1px 3px rgba(0,0,0,0.2); padding:0; z-index:10;">&times;</button>
              </div>
            `).join(""):"",v=parseFloat(o.journalRating||0),P=Math.floor(v),D=v%1!==0,k=5-Math.ceil(v),O='<span class="star full" style="font-size:1rem; cursor:default; transform:none;">★</span>'.repeat(P)+(D?'<span class="star half" style="font-size:1rem; cursor:default; transform:none;">★</span>':"")+'<span class="star" style="font-size:1rem; cursor:default; transform:none; color:#E0E0E0;">★</span>'.repeat(k);f=`
            <div class="journal-entry">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
                <div style="flex:1;">
                  ${o.journalRating?`<div class="journal-rating">${O}</div>`:""}
                  ${o.journalText?`<p class="journal-text" style="margin-top:4px;">${o.journalText}</p>`:""}
                </div>
                ${g?`<div class="journal-photos" style="display:flex; flex-wrap:wrap; gap:4px; max-width:180px; justify-content:flex-end; margin-top:0;">${g}</div>`:""}
              </div>
              <button class="btn small journal-add-btn edit-journal-btn" data-id="${o.id}" style="margin-top:8px; display:inline-flex;">記録を編集</button>
            </div>
          `}else f=`<button class="btn small journal-add-btn" data-id="${o.id}">記録を追加</button>`;return`
          <div class="timeline-item" data-id="${o.id}" style="position: relative; margin-bottom: 24px;">
            <!-- Delete Background -->
            <div class="swipe-delete-bg" style="position: absolute; top: 0; left: 0; bottom: 0; width: 100%; background: #ff3b30; color: white; display: flex; align-items: center; padding-left: 20px; font-weight: bold; z-index: 1; border-radius: 8px; opacity: 0; transition: opacity 0.4s;">
              ${_("deleteAction")||"削除"}
            </div>
          <!-- Foreground Content -->
          <div class="timeline-content-wrapper" style="position: relative; z-index: 2; background: var(--color-background); display: flex; width: 100%; transition: transform 0.2s ease-out; gap: 16px;">
            <div class="timeline-time">${o.time}</div>
            <div class="timeline-dot" data-category="${o.category}">${c.icon}</div>
            <div class="timeline-card" style="flex: 1; margin: 0;">
              <h4>${l}</h4>
              ${o.transport?`<p class="transport">🚌 ${o.transport}</p>`:""}
              ${h?`<p class="memo">${h}</p>`:""}
              ${f}
            </div>
          </div>
        </div>
      `}),n=await Promise.all(t);e.innerHTML=n.join("");const i=Z().currentTrip;e.querySelectorAll(".timeline-item").forEach(o=>{const c=o.querySelector(".timeline-content-wrapper"),l=o.dataset.id;let h=0,f=0;c.addEventListener("touchstart",p=>{We==="plan"&&(h=p.touches[0].clientX,c.style.transition="none")},{passive:!0}),c.addEventListener("touchmove",p=>{if(We==="plan"&&(f=p.touches[0].clientX-h,f>0)){const g=f*.8;c.style.transform=`translateX(${g}px)`,g>20&&(o.querySelector(".swipe-delete-bg").style.opacity="1")}},{passive:!0}),c.addEventListener("click",p=>{if(We!=="plan"||Math.abs(f)>10)return;const g=dt.find(v=>v.id===l);g&&(document.getElementById("scheduleItemId").value=g.id,document.getElementById("itemTime").value=g.time,document.getElementById("itemTitle").value=g.title,document.getElementById("itemCategory").value=g.category,document.getElementById("itemTransport").value=g.transport||"",document.getElementById("itemMemo").value=g.memo||"",document.getElementById("scheduleModal").classList.add("active"))}),c.addEventListener("touchend",async p=>{We==="plan"&&(c.style.transition="transform 0.8s ease-out",f>100?(c.style.transform="translateX(100vw)",setTimeout(async()=>{confirm(_("confirmDelete")||"本当に削除しますか？")?(o.style.opacity="0",o.style.height="0",o.style.margin="0",o.style.overflow="hidden",o.style.transition="all 0.3s ease-out",await jb(i.id,l),this.loadSchedules(i.id)):(c.style.transform="translateX(0)",o.querySelector(".swipe-delete-bg").style.opacity="0")},100)):(c.style.transform="translateX(0)",o.querySelector(".swipe-delete-bg").style.opacity="0"),f=0)})}),We==="journal"&&(e.querySelectorAll(".delete-photo-btn").forEach(o=>{o.addEventListener("click",async c=>{if(c.stopPropagation(),confirm(_("confirmDeletePhoto")||"写真を削除しますか？")){const l=o.dataset.id,h=parseInt(o.dataset.index),f=Z().currentTrip,p=dt.find(g=>g.id===l);if(p&&p.journalPhotos){p.journalPhotos.splice(h,1);try{await na(f.id,l,{journalPhotos:p.journalPhotos}),this.loadSchedules(f.id)}catch(g){console.error(g),alert("削除に失敗しました。")}}}})}),e.querySelectorAll(".journal-add-btn, .edit-journal-btn").forEach(o=>{o.addEventListener("click",c=>{const l=c.target.dataset.id,h=dt.find(p=>p.id===l);document.getElementById("journalItemId").value=l,document.getElementById("journalText").value=h.journalText||"",document.getElementById("journalPhotos").value="",document.getElementById("journalRating").value=h.journalRating||0;const f=parseFloat(h.journalRating||0);document.querySelectorAll("#journalForm .star").forEach(p=>{const g=parseInt(p.dataset.rating);p.classList.remove("full","half"),p.style.color="",g<=f?p.classList.add("full"):g-.5===f&&p.classList.add("half")}),document.getElementById("journalModal").classList.add("active")})}))}};let kt="",Qe=[];const zh=[_("rq3")||"現地の人の性格は？",_("rq4")||"食文化は？",_("rq5")||"コンビニなどの便利なお店は？",_("rq6")||"移動手段はどういう？",_("rq7")||"家やトイレはどんな感じ？",_("rq8")||"実際に行きたい場所3つ",_("rq9")||"食べたいもの3つ"],uw={render(){return`
      <div class="page research-page">
        <header class="page-header">
          <button class="btn-icon btn-back" id="rs-back-btn">←</button>
          <h2 class="page-title">${_("researchTitle")}</h2>
        </header>

        <div class="country-tabs" id="rs-country-tabs">
          <!-- Dynamically populated country tabs -->
        </div>

        <div class="research-list" id="rs-list">
          <div class="loading">${_("loading")||"よみこみ中... 🧸"}</div>
        </div>

        <button class="fab" id="rs-add-btn">➕</button>

        <!-- 質問追加・編集モーダル -->
        <div class="modal-overlay" id="rs-modal">
          <div class="modal-content">
            <div class="modal-title" id="rs-modal-title">${_("addNote")||"項目の追加"}</div>
            <form id="rs-form">
              <input type="hidden" id="rs-note-id">
              <div class="form-group mt-md">
                <label class="form-label">${_("researchItem")||"調べる項目（質問）"}</label>
                <input type="text" id="rs-question" class="form-input" placeholder="${_("researchItemPlaceholder")||"例: おすすめのカフェは？"}" required>
              </div>
              <button type="submit" class="btn btn-primary w-full mt-lg">${_("saveBtn")||"保存する"}</button>
              <button type="button" class="btn btn-secondary w-full mt-sm" id="rs-modal-close">${_("cancelBtn")||"キャンセル"}</button>
            </form>
          </div>
        </div>
      </div>
    `},async init(){var o;const e=Z().currentTrip;if(!e){document.getElementById("rs-list").innerHTML=`<p class="empty-state">${_("noTripSelected")||"旅行が選択されていません。"}</p>`;return}const t=e.destinations||[],n=[...new Set(t.map(c=>c.country).filter(Boolean))];if(n.length===0){document.getElementById("rs-list").innerHTML=`<p class="empty-state">${_("noDestinationsSet")||"行き先が設定されていません。<br>旅行の編集から行き先を追加してください。"}</p>`;return}kt=n[0];const s=document.getElementById("rs-country-tabs");s.style.display="flex",s.style.justifyContent="center",s.style.gap="16px",s.style.marginBottom="16px",s.innerHTML=n.map(c=>{const l=Yr.find(f=>f.code===c);let h="🏳️";if(l)h=l.flag;else{const f=Hc(c);h=Fi(f)}return`<span class="tab flag-tab" data-country="${c}" style="font-size: 2.5rem; cursor: pointer; transition: opacity 0.2s; opacity: ${c===kt?"1":"0.4"};">${h}</span>`}).join(""),s.addEventListener("click",c=>{const l=c.target.closest(".tab");l&&(document.querySelectorAll("#rs-country-tabs .tab").forEach(h=>{h.style.opacity="0.4",h.classList.remove("active")}),l.style.opacity="1",l.classList.add("active"),kt=l.dataset.country,this.loadNotes(e.id))});const i=document.getElementById("rs-modal");document.getElementById("rs-add-btn").addEventListener("click",()=>{document.getElementById("rs-modal-title").textContent=_("addNote")||"項目の追加",document.getElementById("rs-note-id").value="",document.getElementById("rs-question").value="",i.classList.add("active")}),document.getElementById("rs-modal-close").addEventListener("click",()=>{i.classList.remove("active")}),i.addEventListener("click",c=>{c.target===i&&i.classList.remove("active")}),document.getElementById("rs-form").addEventListener("submit",async c=>{c.preventDefault();const l=document.getElementById("rs-question").value.trim(),h=document.getElementById("rs-note-id").value;l&&(h?await Mh(e.id,h,{question:l}):await Oh(e.id,{country:kt,question:l,answer:"",order:Qe.length}),i.classList.remove("active"),await this.loadNotes(e.id))}),(o=document.getElementById("rs-back-btn"))==null||o.addEventListener("click",()=>se("/")),await this.loadNotes(e.id)},async loadNotes(r){let e=await ra(r);if(Qe=e.filter(s=>s.country===kt),Qe.length===0){for(let s=0;s<zh.length;s++)await Oh(r,{country:kt,question:zh[s],answer:"",order:s});e=await ra(r),Qe=e.filter(s=>s.country===kt)}const t=["首都・人口・面積・公用語など","首都・人口・面積・公用語は？","現地通貨は？"],n=Qe.filter(s=>t.includes(s.question)&&!s.answer);if(n.length>0){for(const s of n)await Fh(r,s.id);e=await ra(r),Qe=e.filter(s=>s.country===kt)}Qe.sort((s,i)=>(s.order||0)-(i.order||0)),await this.renderNotes(r,!0),this.renderNotes(r,!1)},async renderNotes(r,e=!1){const t=document.getElementById("rs-list");if(Qe.length===0){t.innerHTML=`<p class="empty-state">${_("noResearch")||"項目がありません。"}</p>`;return}const n=Qe.map(async o=>{let c=o.question;c&&c.match(/^rq[1-9]$/)&&(c=_(c));const l=await ot(c,e)||c,h=o.answer?await ot(o.answer,e)||o.answer:"";return`
        <div class="rs-card" data-id="${o.id}">
          <div class="rs-card-header">
            <h3 class="rs-question">${l}</h3>
            <div class="rs-actions">
              <button class="btn-icon rs-edit-q" data-id="${o.id}">✏️</button>
              <button class="btn-icon rs-delete-q" data-id="${o.id}">✖</button>
            </div>
          </div>
          <div class="rs-card-body">
            <textarea class="rs-answer-input" data-id="${o.id}" placeholder="${_("researchAnswer")||"調べてわかったこと..."}">${o.answer||""}</textarea>
            ${h!==(o.answer||"")&&h?`<div class="rs-answer-translated">💡 ${_("translationLabel")||"翻訳"}: ${h}</div>`:""}
          </div>
        </div>
      `}),s=await Promise.all(n);t.innerHTML=s.join(""),t.querySelectorAll(".rs-edit-q").forEach(o=>{o.addEventListener("click",c=>{const l=c.target.closest(".rs-edit-q").dataset.id,h=Qe.find(f=>f.id===l);h&&(document.getElementById("rs-modal-title").textContent=_("editNote")||"項目の編集",document.getElementById("rs-note-id").value=h.id,document.getElementById("rs-question").value=h.question,document.getElementById("rs-modal").classList.add("active"))})}),t.querySelectorAll(".rs-delete-q").forEach(o=>{o.addEventListener("click",async c=>{const l=c.target.closest(".rs-delete-q").dataset.id;confirm(_("confirmDelete")||"この項目を削除しますか？")&&(await Fh(r,l),await this.loadNotes(r))})});let i;t.querySelectorAll(".rs-answer-input").forEach(o=>{o.addEventListener("input",c=>{clearTimeout(i);const l=c.target.dataset.id,h=c.target.value;i=setTimeout(async()=>{await Mh(r,l,{answer:h})},1e3)})})}},Gh={food:{icon:"🍽️",label:_("catFood")||"食事"},transport:{icon:"🚕",label:_("catBudgetTransport")||"交通"},shopping:{icon:"🛒",label:_("catShopping")||"買い物"},stay:{icon:"🏨",label:_("catStay")||"宿泊"},activity:{icon:"🎭",label:_("catActivity")||"アクティビティ"},other:{icon:"📦",label:_("catOther")||"その他"}},hw={render(){return`
            <div class="page page-budget">
                <header class="header">
                    <button class="btn-icon btn-back" id="btn-back-budget">←</button>
                    <h2>${_("budgetTitle")||"予算管理"}</h2>
                </header>
                <main class="content" id="budget-main">
                    <div class="loading">${_("loading")||"よみこみ中... 🧸"}</div>
                </main>
                <button class="fab fab-center" id="budget-fab">＋</button>
                
                <div id="budget-modal" class="modal-overlay">
                    <div class="modal-content">
                        <div class="modal-handle"></div>
                        <h3>${_("addExpenseTitle")||"支出の追加 ✏️"}</h3>
                        <form id="budget-form">
                            <div class="form-group">
                                <label>${_("amountRequiredLabel")||"金額 (必須)"}</label>
                                <input type="number" id="budget-amount" required>
                            </div>
                            <div class="form-group">
                                <label>${_("usageLabel")||"用途"}</label>
                                <input type="text" id="budget-title" placeholder="${_("usagePlaceholder")||"例: ランチ代"}">
                            </div>
                            <div class="form-group">
                                <label>${_("currencyLabel")||"通貨"}</label>
                                <select id="budget-currency">
                                    <option value="¥">JPY (¥)</option>
                                    <option value="$">USD ($)</option>
                                    <option value="€">EUR (€)</option>
                                    <option value="฿">THB (฿)</option>
                                    <option value="₩">KRW (₩)</option>
                                    <option value="NT$">TWD (NT$)</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>${_("categoryLabel")||"カテゴリ"}</label>
                                <select id="budget-category">
                                    ${Object.entries(Gh).map(([r,e])=>`<option value="${r}">${e.icon} ${e.label}</option>`).join("")}
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary w-full mt-lg">${_("saveBtn")||"保存する ✨"}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="budget-cancel">${_("cancelBtn")||"キャンセル"}</button>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){var f;(f=document.getElementById("btn-back-budget"))==null||f.addEventListener("click",()=>se("/"));const e=Z().currentTripId,t=document.getElementById("budget-main");if(!e){t.innerHTML=`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>${_("noTripSelected")||"旅行が選択されていません。"}</p>
                    <button class="btn-primary" onclick="window.location.hash='#/'">${_("backToHome")||"ホームに戻る"}</button>
                </div>`;return}let n=[];const s=async(p=!1)=>{var P;if(n.length===0){t.innerHTML=`
                    <div class="empty-state">
                        <div class="empty-icon">👛</div>
                        <p>${_("noBudgetItems")||"まだ支出がありません。<br>右下の＋ボタンから追加しよう！"}</p>
                    </div>`;return}const g=n.reduce((D,k)=>D+Number(k.amount),0);let v=`
                <div class="budget-summary card mb-md">
                    <div class="text-center mb-sm">
                        <div class="text-sm text-muted">${_("totalExpense")||"合計支出"}</div>
                        <div class="text-xl font-bold">¥${g.toLocaleString()}</div>
                    </div>
                </div>
                <div class="budget-list">
                    <h3>${_("budgetListTitle")||"支出リスト 📝"}</h3>`;for(const D of n){const k=await ot(D.title,p)||"無題",O=D.currency||"¥";v+=`
                    <div class="budget-item card" data-id="${D.id}">
                        <div class="budget-icon">${((P=Gh[D.category])==null?void 0:P.icon)||"📦"}</div>
                        <div class="budget-details">
                            <div class="budget-title">${k}</div>
                        </div>
                        <div class="budget-amount">${O}${Number(D.amount).toLocaleString()}</div>
                        <div class="item-actions">
                            <button class="btn-icon small btn-delete-budget" data-id="${D.id}">🗑️</button>
                        </div>
                    </div>
                `}v+="</div>",t.innerHTML=v,document.querySelectorAll(".btn-delete-budget").forEach(D=>{D.addEventListener("click",async k=>{const O=k.target.closest(".btn-delete-budget").dataset.id;confirm(_("confirmDelete")||"本当に削除しますか？")&&(await Ub(e,O),n=await jh(e),s())})})},i=async()=>{try{n=await jh(e),await s(!0),s(!1)}catch(p){console.error(p),t.innerHTML=`<p>${_("errorOccurred")||"エラーが発生しました😢"}</p>`}};await i();const o=document.getElementById("budget-modal"),c=document.getElementById("budget-fab"),l=document.getElementById("budget-cancel"),h=document.getElementById("budget-form");c.addEventListener("click",()=>{o.classList.add("active")}),l.addEventListener("click",()=>{o.classList.remove("active"),h.reset()}),o.addEventListener("click",p=>{p.target===o&&(o.classList.remove("active"),h.reset())}),h.addEventListener("submit",async p=>{p.preventDefault();const g=h.querySelector('button[type="submit"]');g&&(g.disabled=!0);const v={tripId:e,amount:Number(document.getElementById("budget-amount").value),title:document.getElementById("budget-title").value,category:document.getElementById("budget-category").value,currency:document.getElementById("budget-currency").value,date:new Date().toISOString()};o.classList.remove("active");try{await Bb(e,v),h.reset(),await i()}catch(P){console.error(P),alert(_("errorOccurred")||"エラーが発生しました")}finally{g&&(g.disabled=!1)}})}},nn=()=>({police:{icon:"🚨",label:_("catPolice")||"警察・消防・救急"},hotel:{icon:"🏨",label:_("catHotel")||"ホテルの連絡先"},embassy:{icon:"🏛️",label:_("catEmbassy")||"大使館の連絡先"},insurance:{icon:"🛡️",label:_("catInsurance")||"海外旅行保険"}}),dw={render(){return`
            <div class="page page-emergency">
                <header class="header">
                    <button class="btn-icon btn-back" id="btn-back-emergency">←</button>
                    <h2>${_("emergencyTitle")}</h2>
                </header>
                <main class="content" id="emergency-main">
                    <div class="loading">${_("loading")||"よみこみ中... 🧸"}</div>
                </main>
                
                <div id="emergency-modal" class="modal-overlay">
                    <div class="modal-content">
                        <h3 id="modal-title">${_("addEmergency")||"情報の追加 ✏️"}</h3>
                        <form id="emergency-form">
                            <input type="hidden" id="em-category">
                            <div class="form-group">
                                <label>${_("emergencyTitleLabel")||"タイトル (必須)"}</label>
                                <input type="text" id="em-title" required placeholder="${_("emergencyTitlePlaceholder")||"例: ホテル電話番号"}">
                            </div>
                            <div class="form-group">
                                <label>${_("emergencyPhone")||"電話番号"}</label>
                                <input type="tel" id="em-phone" placeholder="090-XXXX-XXXX">
                            </div>
                            <div class="form-group">
                                <label>${_("emergencyMemo")||"メモ (内容)"}</label>
                                <textarea id="em-info" rows="3" placeholder="${_("emergencyMemoPlaceholder")||"住所や予約番号など"}"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-full mt-lg">${_("saveBtn")||"保存する ✨"}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="em-cancel">${_("cancelBtn")||"キャンセル"}</button>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){var h;(h=document.getElementById("btn-back-emergency"))==null||h.addEventListener("click",()=>se("/"));const e=Z().currentTripId,t=document.getElementById("emergency-main");if(!e){t.innerHTML=`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>${_("noTripSelected")||"旅行が選択されていません。"}</p>
                </div>`;return}let n=[];const s=async(f=!1)=>{if(n.length===0)t.innerHTML=Object.keys(nn()).map(p=>`
                    <div class="emergency-section card">
                        <div class="section-header">
                            <h3>${nn()[p].icon} ${nn()[p].label}</h3>
                            <button class="btn-add-small" data-cat="${p}">＋ ${_("addSmallBtn")||"追加"}</button>
                        </div>
                        <div class="empty-text">${_("noInfo")||"情報がありません。"}</div>
                    </div>
                `).join("");else{const p=Object.keys(nn()).map(async v=>{const P=n.filter(O=>O.category===v),D=P.map(async O=>{const U=await ot(O.title,f)||O.title,L=O.info?await ot(O.info,f)||O.info:"";return`
                                    <div class="emergency-card">
                                        <h4>${U}</h4>
                                        ${L?`<p class="em-info">${L.replace(/\\n/g,"<br>")}</p>`:""}
                                        ${O.phone?`
                                            <a href="tel:${O.phone}" class="btn-tel">
                                                📞 ${_("callBtn")||"電話をかける"} (${O.phone})
                                            </a>
                                        `:""}
                                    </div>
                        `}),k=await Promise.all(D);return`
                        <div class="emergency-section card">
                            <div class="section-header">
                                <h3>${nn()[v].icon} ${nn()[v].label}</h3>
                                <button class="btn-add-small" data-cat="${v}">＋ ${_("addSmallBtn")||"追加"}</button>
                            </div>
                            <div class="emergency-list">
                                ${P.length===0?`<div class="empty-text">${_("noInfo")||"情報がありません。"}</div>`:k.join("")}
                            </div>
                        </div>
                    `}),g=await Promise.all(p);t.innerHTML=g.join("")}document.querySelectorAll(".btn-add-small").forEach(p=>{p.addEventListener("click",g=>{const v=g.target.getAttribute("data-cat");document.getElementById("em-category").value=v,document.getElementById("modal-title").innerText=`${nn()[v].label}の追加 ✏️`,document.getElementById("emergency-modal").classList.add("active")})})},i=async()=>{try{n=await $b(e),await s()}catch(f){console.error(f),t.innerHTML="<p>エラーが発生しました😢</p>"}};await i();const o=document.getElementById("emergency-modal"),c=document.getElementById("em-cancel");o.addEventListener("click",f=>{f.target===o&&o.classList.remove("active")});const l=document.getElementById("emergency-form");c.addEventListener("click",()=>{o.classList.remove("active"),l.reset()}),l.addEventListener("submit",async f=>{f.preventDefault();const p={tripId:e,title:document.getElementById("em-title").value,phone:document.getElementById("em-phone").value,info:document.getElementById("em-info").value,category:document.getElementById("em-category").value};await qb(p),o.classList.remove("active"),l.reset(),await i()})}},fw={render(){return`
            <div class="page page-omiyage">
                <header class="header">
                    <button class="btn-icon btn-back" id="btn-back-omiyage">←</button>
                    <h2>${_("omiyageTitle")}</h2>
                </header>
                <div class="progress-section card" id="omiyage-progress-container">
                    <!-- Progress injected here -->
                </div>
                <main class="content" id="omiyage-main">
                    <div class="loading">${_("loading")||"よみこみ中... 🧸"}</div>
                </main>
                <button class="fab fab-center" id="omiyage-fab">＋</button>
                
                <div id="omiyage-modal" class="modal-overlay">
                    <div class="modal-content">
                        <div class="modal-handle"></div>
                        <h3>${_("addOmiyage")||"お土産の追加 ✏️"}</h3>
                        <form id="omiyage-form">
                            <div class="form-group">
                                <label>${_("omiyageRecipient")||"誰に渡す？(必須)"}</label>
                                <input type="text" id="omi-recipient" required placeholder="${_("recipientPlaceholder")||"例: 家族、職場、自分"}">
                            </div>
                            <div class="form-group">
                                <label>${_("omiyageItem")||"お土産名 / メモ"}</label>
                                <input type="text" id="omi-item" placeholder="${_("itemPlaceholder")||"例: ご当地クッキー"}">
                            </div>
                            <div class="form-group">
                                <label>${_("budgetEstimate")||"予算目安"}</label>
                                <input type="number" id="omi-budget" placeholder="例: 1000">
                            </div>
                            <button type="submit" class="btn btn-primary w-full mt-lg">${_("saveBtn")||"保存する✨"}</button>
                            <button type="button" class="btn btn-secondary w-full mt-sm" id="omi-cancel">${_("cancelBtn")||"キャンセル"}</button>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){var p;(p=document.getElementById("btn-back-omiyage"))==null||p.addEventListener("click",()=>se("/"));const e=Z().currentTripId,t=document.getElementById("omiyage-main"),n=document.getElementById("omiyage-progress-container");let s=[];const i=async(g=!1)=>{if(s.length===0){n.innerHTML=`<p>${_("noOmiyageProgress")||"まだお土産リストがありません。"}</p>`,t.innerHTML=`
                    <div class="empty-state">
                        <div class="empty-icon">🎁</div>
                        <p>${_("noOmiyageList")||"＋ボタンからお土産リストを追加しよう！"}</p>
                    </div>`;return}const v=s.length,P=s.filter(O=>O.purchased).length;n.innerHTML=`
                <h3>${_("progressStatus")||"進捗状況 💪"}</h3>
                <div class="progress-text">${P} / ${v} ${_("purchased")||"購入済み"}</div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${P/v*100}%"></div>
                </div>
            `;const D=s.map(async O=>{const U=await ot(O.itemName,g)||_("undecided")||"未定",L=O.recipientName||"";return`
                    <div class="budget-item card" data-id="${O.id}">
                        <div class="budget-icon" style="display:flex; align-items:center; justify-content:center;">
                            <label class="checkbox-wrapper" style="margin: 0;">
                                <input type="checkbox" class="omiyage-check" data-id="${O.id}" ${O.purchased?"checked":""}>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="budget-details">
                            <div class="budget-title">
                                ${U} ${L?`<span style="font-size: 0.8rem; color: var(--color-text-light); font-weight: normal; margin-left: 8px;">👤${L}</span>`:""}
                            </div>
                        </div>
                        ${O.budget?`<div class="budget-amount">¥${Number(O.budget).toLocaleString()}</div>`:""}
                        <div class="item-actions">
                            <button class="btn-icon small btn-delete-omiyage" data-id="${O.id}">🗑️</button>
                        </div>
                    </div>
                `}),k=await Promise.all(D);t.innerHTML=`<div class="budget-list">${k.join("")}</div>`,document.querySelectorAll(".omiyage-check").forEach(O=>{O.addEventListener("change",async U=>{const L=U.target.getAttribute("data-id"),$=U.target.checked,N=s.find(M=>M.id===L);N&&(N.purchased=$,await Kb(e,L,{purchased:$}),i())})}),document.querySelectorAll(".btn-delete-omiyage").forEach(O=>{O.addEventListener("click",async U=>{if(confirm(_("confirmDelete")||"本当に削除しますか？")){const L=U.target.closest(".btn-delete-omiyage").dataset.id;await Wb(e,L),await o()}})})},o=async()=>{try{s=await Gb(e),await i(!0),i(!1)}catch(g){console.error(g),t.innerHTML="<p>エラーが発生しました😢</p>"}};await o();const c=document.getElementById("omiyage-modal"),l=document.getElementById("omiyage-fab"),h=document.getElementById("omi-cancel"),f=document.getElementById("omiyage-form");l.addEventListener("click",()=>{c.classList.add("active")}),h.addEventListener("click",()=>{c.classList.remove("active"),f.reset()}),c.addEventListener("click",g=>{g.target===c&&(c.classList.remove("active"),f.reset())}),f.addEventListener("submit",async g=>{g.preventDefault();const v=f.querySelector('button[type="submit"]');v&&(v.disabled=!0);const P={tripId:e,recipientName:document.getElementById("omi-recipient").value,itemName:document.getElementById("omi-item").value,budget:Number(document.getElementById("omi-budget").value)||0,purchased:!1};c.classList.remove("active");try{await Hb(e,P),f.reset(),await o()}catch(D){console.error(D),alert(_("errorOccurred")||"エラーが発生しました")}finally{v&&(v.disabled=!1)}})}},pw=["🐱","🐶","🐻","🐰","🦊","🐼","🐨","🦁","🐯","🐵","🐸","🦄","🌸","🌻","⭐","🌈","❤️","💎"];function Hh(r={},e={}){const t=r.country||"";let n=t!==""&&!Yr.some(c=>c.code===t||Object.values(c.name).includes(t)),s=n?"OTHER":t;const i=typeof pi=="function"?pi():Z().language||"ja";if(!n&&t){const c=Yr.find(l=>l.code===t||Object.values(l.name).includes(t));c&&(s=c.code)}const o=Yr.map(c=>{const l=c.name[i]||c.name.ja;return`<option value="${c.code}" ${c.code===s?"selected":""}>${c.flag} ${l}</option>`}).join("");return`
    <div class="form-row destination-item mb-sm" style="display: flex; align-items: center; gap: 4px; flex-wrap: nowrap;">
      <select class="form-input flex-1 dest-country-select" style="min-width: 0; padding: 12px 4px; margin-bottom: 0;">
        <option value="" disabled ${s?"":"selected"}>${e.country||"国を選択"}</option>
        ${o}
      </select>
      <input type="text" class="form-input flex-1 dest-country-other" placeholder="${_("countryPlaceholder")||"国名を入力"}" value="${n?t:""}" style="min-width: 0; padding: 12px 4px; margin-bottom: 0; ${n?"":"display:none;"}" />
      <input type="text" class="form-input flex-1 dest-city" placeholder="${e.city||"都市"}" value="${r.city||""}" style="min-width: 0; padding: 12px 4px; margin-bottom: 0;" />
      <button type="button" class="btn-icon btn-remove" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
    </div>
  `}const hm={render(){const r=Kl()==="/trip/edit",{currentTrip:e}=Z(),t=r&&e?e:{title:"",startDate:"",endDate:"",destinations:[{country:"",city:""}],members:[{icon:"🐱",name:""}]};return`
      <div class="page fade-in">
        <header class="page-header">
          <button class="btn-icon btn-back" id="btn-form-back">←</button>
          <h1 class="page-title">${_(r?"tripFormEditTitle":"tripFormNewTitle")}</h1>
        </header>

        <div class="form-content fade-in" style="animation-delay: 0.1s;">
          <div class="card mb-md">
            <input type="text" id="trip-title" class="form-input text-lg fw-bold" placeholder="${_("tripTitlePlaceholder")}" value="${t.title}" />
          </div>

          <div class="card mb-md">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div class="form-group" style="min-width: 0;">
                <label class="form-label">${_("startDate")}</label>
                <input type="date" id="trip-start" class="form-input" value="${t.startDate}" style="width: 100%; box-sizing: border-box;" />
              </div>
              <div class="form-group" style="min-width: 0;">
                <label class="form-label">${_("endDate")}</label>
                <input type="date" id="trip-end" class="form-input" value="${t.endDate}" style="width: 100%; box-sizing: border-box;" />
              </div>
            </div>
          </div>

          <div class="card mb-md" id="destinations-container">
            <label class="form-label">${_("destinations")}</label>
            <div id="destinations-list">
              ${t.destinations.map(n=>Hh(n,{country:_("countryPlaceholder"),city:_("cityPlaceholder")})).join("")}
            </div>
            <button class="btn btn-secondary btn-small w-full mt-sm" id="btn-add-dest">${_("addDestination")}</button>
          </div>

          <div class="card mb-md" id="members-container">
            <label class="form-label">${_("membersLabel")}</label>
            <div id="members-list">
              ${t.members.map((n,s)=>`
                <div class="form-row member-item mb-sm" style="display: flex; align-items: center; gap: 4px; flex-wrap: nowrap;">
                  <button class="btn-emoji-picker" data-index="${s}" style="flex-shrink: 0; padding: 8px 12px;">${n.icon||"😊"}</button>
                  <input type="text" class="form-input flex-1 member-name" placeholder="${_("memberNamePlaceholder")}" value="${n.name||""}" style="min-width: 0; margin-bottom: 0; padding: 12px 4px;" />
                  <button class="btn-icon btn-remove-member" data-index="${s}" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
                </div>
              `).join("")}
            </div>
            <button class="btn btn-secondary btn-small w-full mt-sm" id="btn-add-member">${_("addMember")}</button>
          </div>
        </div>

        <div class="bottom-actions">
          <button class="btn btn-primary w-full text-lg mb-sm" id="btn-save-trip">${_("btnSave")}</button>
          ${r?`<button class="btn btn-secondary w-full" id="btn-delete-trip" style="color: var(--error);">🗑️ ${_("deleteTrip")||"この旅行を削除"}</button>`:""}
        </div>

        <!-- Emoji Picker Modal -->
        <div class="modal-overlay" id="emoji-modal">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <div class="modal-title">${_("chooseIcon")||"アイコンを選ぶ"}</div>
            <div class="emoji-picker-grid">
              ${pw.map(n=>`<button type="button" class="emoji-option">${n}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `},init(){var o,c,l,h,f;const r=Kl()==="/trip/edit",{currentTrip:e}=Z(),t=document.getElementById("destinations-list");(o=document.getElementById("btn-add-dest"))==null||o.addEventListener("click",()=>{const p=document.createElement("div");p.innerHTML=Hh({},{country:_("countryPlaceholder"),city:_("cityPlaceholder")}),t.appendChild(p.firstElementChild)}),t==null||t.addEventListener("click",p=>{p.target.classList.contains("btn-remove")&&t.querySelectorAll(".destination-item").length>1&&p.target.closest(".destination-item").remove()}),t==null||t.addEventListener("change",p=>{if(p.target.classList.contains("dest-country-select")){const v=p.target.closest(".destination-item").querySelector(".dest-country-other");p.target.value==="OTHER"?(v.style.display="block",v.focus()):(v.style.display="none",v.value="")}});const n=document.getElementById("members-list");(c=document.getElementById("btn-add-member"))==null||c.addEventListener("click",()=>{const p=document.createElement("div");p.className="form-row member-item mb-sm",p.style.display="flex",p.style.alignItems="center",p.style.gap="4px",p.style.flexWrap="nowrap",p.innerHTML=`
        <button class="btn-emoji-picker" style="flex-shrink: 0; padding: 8px 12px;">😊</button>
        <input type="text" class="form-input flex-1 member-name" placeholder="${_("memberNamePlaceholder")}" style="min-width: 0; margin-bottom: 0; padding: 12px 4px;" />
        <button class="btn-icon btn-remove-member" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
      `,n.appendChild(p)}),n==null||n.addEventListener("click",p=>{p.target.classList.contains("btn-remove-member")&&n.querySelectorAll(".member-item").length>1&&p.target.closest(".member-item").remove()});const s=document.getElementById("emoji-modal");let i=null;n==null||n.addEventListener("click",p=>{p.target.classList.contains("btn-emoji-picker")&&(i=p.target,s.classList.add("active"))}),s==null||s.addEventListener("click",p=>{p.target===s&&s.classList.remove("active")}),document.querySelectorAll(".emoji-option").forEach(p=>{p.addEventListener("click",()=>{i&&(i.textContent=p.textContent),s.classList.remove("active")})}),(l=document.getElementById("btn-form-back"))==null||l.addEventListener("click",()=>se("/")),(h=document.getElementById("btn-save-trip"))==null||h.addEventListener("click",async p=>{const g=p.target;g.disabled=!0,g.textContent=_("btnSaving");const v=document.getElementById("trip-title").value,P=document.getElementById("trip-start").value,D=document.getElementById("trip-end").value,{user:k}=Z();if(!k||!k.uid){alert(_("authError")),g.disabled=!1,g.textContent=_("btnSave");return}const O=Array.from(t.querySelectorAll(".destination-item")).map($=>{const N=$.querySelector(".dest-country-select"),M=$.querySelector(".dest-country-other");return{country:N.value==="OTHER"?M.value:N.value,city:$.querySelector(".dest-city").value}}),U=Array.from(n.querySelectorAll(".member-item")).map($=>({icon:$.querySelector(".btn-emoji-picker").textContent,name:$.querySelector(".member-name").value})),L={title:v,startDate:P,endDate:D,destinations:O,members:U};try{const $=setTimeout(()=>{var E;(E=document.getElementById("btn-save-trip"))!=null&&E.disabled&&se("/")},1e4);r&&e?await Vb(e.ownerId||k.uid,e.id,L):await Db(k.uid,L);const N=await Ba(k.uid);Je({trips:N});const M=r&&e&&N.find(E=>E.id===e.id)||N[0];Je({currentTrip:M,currentTripId:M==null?void 0:M.id}),M&&localStorage.setItem("currentTripId",M.id),clearTimeout($),se("/")}catch($){console.error("Error saving trip:",$),g.textContent=_("errorTryAgain")||"❌ エラー。もう一度お試しください",g.disabled=!1}}),r&&((f=document.getElementById("btn-delete-trip"))==null||f.addEventListener("click",async()=>{var p;if(confirm(_("confirmDeleteTrip")||`本当にこの旅行を削除しますか？
削除すると、すべてのデータ（単語帳、チェックリストなど）が消去され元に戻せません。`)){const{user:g}=Z();try{await Nb(g.uid,e.id);const v=await Ba(g.uid);Je({trips:v,currentTrip:v[0]||null,currentTripId:((p=v[0])==null?void 0:p.id)||null}),v.length>0?localStorage.setItem("currentTripId",v[0].id):localStorage.removeItem("currentTripId"),se("/")}catch(v){console.error("Error deleting trip:",v),alert(_("deleteFailed")||"削除に失敗しました。")}}}))}},mw=[{category:"documents",label:"📄 書類",items:["パスポート","航空券(予約確認書)","ホテル予約確認書","海外旅行保険証","クレジットカード"]},{category:"electronics",label:"🔌 電子機器",items:["スマホ充電器","モバイルバッテリー","変換プラグ","イヤホン","カメラ"]},{category:"clothing",label:"👕 衣類",items:["着替え","下着","靴下","パジャマ","上着/羽織り"]},{category:"toiletries",label:"🧴 洗面用品",items:["歯ブラシ","歯磨き粉","シャンプー","日焼け止め","常備薬"]},{category:"other",label:"📦 その他",items:["現金","エコバッグ","雨具","ガイドブック"]}];let Or=[];const gw={async render(){const{user:r}=Z();if(!r||r.isAnonymous)return`
        <div class="page fade-in">
          <header class="page-header">
            <button class="btn-icon btn-back" id="btn-back-settings">←</button>
            <h1 class="page-title">⚙️ ${_("settings")||"設定"}</h1>
          </header>
          <div class="empty-state">
            <div class="empty-state-icon">🔒</div>
            <p class="empty-state-text">${_("loginRequiredForSettings")||"設定を変更するにはログインが必要です。"}</p>
          </div>
        </div>
      `;const e=await am(r.uid);e&&e.checklistMaster?Or=e.checklistMaster:Or=JSON.parse(JSON.stringify(mw));const t=Or.map((n,s)=>`
      <div class="card mb-md">
        <label class="form-label">${n.label}</label>
        <p class="text-xs text-muted mb-sm">${_("newlineSeparated")||"改行区切りでアイテムを入力してください。"}</p>
        <textarea class="form-input master-textarea" data-index="${s}" rows="5" style="resize: vertical;">${n.items.join(`
`)}</textarea>
      </div>
    `).join("");return`
      <div class="page fade-in">
        <header class="page-header">
          <button class="btn-icon btn-back" id="btn-back-settings-main">←</button>
          <h1 class="page-title">⚙️ ${_("settings")||"設定"}</h1>
        </header>

        <div class="form-content fade-in" style="animation-delay: 0.1s;">
          <h2 class="mb-md text-lg">${_("checklistMasterTitle")||"🎒 持ち物チェック 初期マスタ設定"}</h2>
          <p class="text-sm text-muted mb-md">
            ${_("checklistMasterDesc")||"新しい旅行を作成した際に、ここで設定した持ち物が自動的に登録されます。"}
          </p>
          
          <div id="master-categories-container">
            ${t}
          </div>

          <button id="btn-save-settings" class="btn btn-primary w-full mt-md">${_("saveBtn")||"保存する"}</button>
        </div>
      </div>
    `},init(){var e,t;(e=document.getElementById("btn-back-settings"))==null||e.addEventListener("click",()=>se("/")),(t=document.getElementById("btn-back-settings-main"))==null||t.addEventListener("click",()=>se("/"));const r=document.getElementById("btn-save-settings");r&&r.addEventListener("click",async()=>{const{user:n}=Z();if(!n||n.isAnonymous)return;r.disabled=!0,r.textContent=_("btnSaving")||"保存中...",document.querySelectorAll(".master-textarea").forEach(i=>{const o=i.getAttribute("data-index"),l=i.value.split(`
`).map(h=>h.trim()).filter(h=>h);Or[o].items=l});try{await zb(n.uid,{checklistMaster:Or}),r.textContent=_("savedExclamation")||"保存しました！",setTimeout(()=>{r.disabled=!1,r.textContent=_("saveBtn")||"保存する"},2e3)}catch(i){alert((_("saveFailed")||"保存に失敗しました: ")+i.message),r.disabled=!1,r.textContent=_("saveBtn")||"保存する"}})}},yw={async render(){return`
      <div class="page share-page">
        <header class="page-header">
          <button class="btn-back" id="share-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h2>${_("joinTrip")||"旅行に参加"}</h2>
        </header>

        <div class="form-container">
          <div class="card p-lg">
            <p class="text-sm mb-lg" style="color: var(--color-text-light);">
              ${_("enterSharePasswordHelp")||"共有パスワードを入力して、旅行予定に参加してください。"}
            </p>
            
            <form id="share-form">
              <div class="form-group">
                <label class="form-label">${_("sharePassword")||"パスワード"}</label>
                <input type="password" id="share-pw" class="form-input" required />
              </div>
              
              <div id="share-error" class="text-sm mb-sm" style="color: var(--color-pink); display: none;"></div>
              
              <button type="submit" class="btn btn-primary w-full mt-lg">
                ${_("joinTripBtn")||"参加する"}
              </button>
            </form>
          </div>
        </div>
      </div>
    `},init(){const r=document.getElementById("share-back-btn");r&&r.addEventListener("click",()=>se("/"));const e=document.getElementById("share-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const n=document.getElementById("share-pw").value,s=document.getElementById("share-error"),i=window.location.hash,o=i.match(/\?id=([^&]+)/);let c="";if(o)c=o[1];else{const h=i.split("/");h.length>2&&(c=h[2])}if(!c){s.textContent="Invalid Share URL",s.style.display="block";return}const l=e.querySelector('button[type="submit"]');l.disabled=!0,s.style.display="none";try{const h=await Qb(c,n);if(!h){s.textContent=_("invalidPassword")||"パスワードが間違っています。",s.style.display="block",l.disabled=!1;return}const f=As();if(f){const p=ki(Gt(Oe,"users",f,"joinedTrips"),mp("tripId","==",h.tripId));(await ds(p)).empty&&await Dc(Gt(Oe,"users",f,"joinedTrips"),{ownerId:h.userId,tripId:h.tripId,joinedAt:Vc()})}se("/")}catch(h){console.error(h),s.textContent="エラーが発生しました",s.style.display="block",l.disabled=!1}})}};function _w(r={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:s,onRegisteredSW:i,onRegisterError:o}=r;let c,l;const h=async(p=!0)=>{await l};async function f(){if("serviceWorker"in navigator){if(c=await cm(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/tabi-shiori/sw.js",{scope:"/tabi-shiori/",type:"classic"})).catch(p=>{o==null||o(p)}),!c)return;c.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),c.addEventListener("installed",p=>{p.isUpdate||n==null||n()}),c.register({immediate:e}).then(p=>{i?i("/tabi-shiori/sw.js",p):s==null||s(p)}).catch(p=>{o==null||o(p)})}}return l=f(),h}ze("/",ew);ze("/flashcard",tw);ze("/checklist",aw);ze("/schedule",lw);ze("/research",uw);ze("/budget",hw);ze("/emergency",dw);ze("/omiyage",fw);ze("/trip/new",hm);ze("/trip/edit",hm);ze("/settings",gw);ze("/share",yw);function vw(){const r=document.getElementById("app");r.innerHTML=`
    <!-- Header -->
    <header class="app-header" id="app-header">
      <div class="header-title">
        <img src="/tabi-shiori/images/mascot.jpg" alt="たびくま" class="header-mascot" />
        <span class="header-title-text">${_("appTitle")}</span>
      </div>
      <div class="header-actions">
        <button class="header-btn" id="btn-share" title="${_("share")}">🔗</button>
        <button class="header-btn" id="btn-menu" title="${_("menu")}">☰</button>
      </div>
    </header>

    <!-- Page Content -->
    <main id="page-content" class="page-transition"></main>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav" id="bottom-nav">
      <a class="nav-item active" data-route="/" href="#/">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">${_("home")}</span>
      </a>
      <a class="nav-item" data-route="/flashcard" href="#/flashcard">
        <span class="nav-icon">🗣️</span>
        <span class="nav-label">${_("flashcard")}</span>
      </a>
      <a class="nav-item" data-route="/checklist" href="#/checklist">
        <span class="nav-icon">🎒</span>
        <span class="nav-label">${_("checklist")}</span>
      </a>
      <a class="nav-item" data-route="/schedule" href="#/schedule">
        <span class="nav-icon">📅</span>
        <span class="nav-label">${_("schedule")}</span>
      </a>
      <a class="nav-item" data-route="/research" href="#/research">
        <span class="nav-icon">🔍</span>
        <span class="nav-label">${_("research")}</span>
      </a>
    </nav>

    <!-- Drawer Menu -->
    <div class="modal-overlay" id="drawer-overlay">
      <div class="modal-content drawer-content">
        <div class="modal-handle"></div>
        <div class="drawer-header">
          <img src="/tabi-shiori/images/mascot.jpg" alt="たびくま" class="drawer-mascot" />
          <h2>${_("menu")}</h2>
        </div>
        <nav class="drawer-nav" id="drawer-nav">
          <a class="drawer-item" id="btn-drawer-portal">🐻 TOPページ（旅行一覧）</a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/">🏠 ${_("home")} (ダッシュボード)</a>
          <a class="drawer-item" data-route="/flashcard">🗣️ ${_("flashcardTitle")}</a>
          <a class="drawer-item" data-route="/checklist">🎒 ${_("checklistTitle")}</a>
          <a class="drawer-item" data-route="/schedule">📅 ${_("scheduleTitle")}</a>
          <a class="drawer-item" data-route="/research">🔍 ${_("researchTitle")}</a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/budget">💰 ${_("budgetTitle")}</a>
          <a class="drawer-item" data-route="/emergency">📞 ${_("emergencyTitle")}</a>
          <a class="drawer-item" data-route="/omiyage">🎁 ${_("omiyageTitle")}</a>
          <a class="drawer-item" data-route="/settings">⚙️ ${_("settings")||"設定"}</a>
          <hr class="drawer-divider" />
          <div class="drawer-trips" id="drawer-trips">
            <p class="drawer-section-title">${_("switchTrip")}</p>
          </div>
          <hr class="drawer-divider" id="drawer-logout-divider" style="display:none;" />
          <a class="drawer-item" id="btn-drawer-logout" style="display:none; color: var(--color-danger);">🚪 ${_("logout")||"ログアウト"}</a>
          <hr class="drawer-divider" />
          <div class="drawer-language" style="display:flex; justify-content:space-around; padding: 12px 16px;">
            <button class="btn-lang" data-lang="ja" style="font-size:24px; background:none; border:none; cursor:pointer;">🇯🇵</button>
            <button class="btn-lang" data-lang="en" style="font-size:24px; background:none; border:none; cursor:pointer;">🇺🇸</button>
            <button class="btn-lang" data-lang="th" style="font-size:24px; background:none; border:none; cursor:pointer;">🇹🇭</button>
          </div>
          <a class="drawer-item" id="btn-drawer-google">
            <span style="margin-right:4px">🌐</span>
            <span id="drawer-google-text">${_("googleLink")}</span>
          </a>
        </nav>
      </div>
    </div>

    <!-- Share Modal -->
    <div class="modal-overlay" id="share-overlay">
      <div class="modal-content">
        <div class="modal-handle"></div>
        <div class="modal-title">🔗 しおりを共有</div>
        <div id="share-content"></div>
      </div>
    </div>
  `}async function Iw(){var s,i,o;"serviceWorker"in navigator&&_w({immediate:!0}),vw(),document.querySelectorAll(".nav-item").forEach(c=>{c.addEventListener("click",l=>{l.preventDefault();const h=c.getAttribute("data-route");se(h)})});const r=document.getElementById("drawer-overlay"),e=document.getElementById("share-overlay");document.getElementById("btn-menu").addEventListener("click",()=>{r.classList.add("active")}),document.getElementById("btn-share").addEventListener("click",()=>{e.classList.add("active"),Tw()}),[r,e].forEach(c=>{c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")})}),document.querySelectorAll(".drawer-item[data-route]").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-route");r.classList.remove("active"),se(l)})}),(s=document.getElementById("btn-drawer-google"))==null||s.addEventListener("click",async()=>{const{user:c}=Z();if(!(c&&!c.isAnonymous))try{c&&c.isAnonymous?await im():await sm(),window.location.reload()}catch(l){l.code!=="auth/popup-closed-by-user"&&l.code!=="auth/cancelled-popup-request"&&alert("ログインに失敗しました: "+l.message)}}),(i=document.getElementById("btn-drawer-logout"))==null||i.addEventListener("click",async()=>{try{await kb(),window.location.reload()}catch(c){alert("ログアウトに失敗しました: "+c.message)}}),(o=document.getElementById("btn-drawer-portal"))==null||o.addEventListener("click",()=>{Je({currentTripId:null,currentTrip:null}),document.getElementById("drawer-overlay").classList.remove("active"),se("/",!0,!0)}),document.querySelectorAll(".btn-lang").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-lang");Kh(l),window.location.reload()})});try{const c=await Cb();Je({user:c});let l=[];c&&(l=await Ba(c.uid)),Je({trips:l}),Je({currentTripId:null,currentTrip:null}),dm(l)}catch(c){console.error("Initial data load failed:",c)}const t=document.getElementById("loading-screen");t&&t.classList.add("hidden");const n=window.location.hash.replace("#","")||"/";se(n,!1)}function dm(r){var n;const e=document.getElementById("drawer-trips");if(!e)return;const t=Z();e.innerHTML=`
    <p class="drawer-section-title">${_("switchTrip")}</p>
    ${r.map(s=>`
      <a class="drawer-trip-item ${s.id===t.currentTripId?"active":""}" data-trip-id="${s.id}">
        <span class="drawer-trip-emoji">✈️</span>
        <span class="drawer-trip-name">${s.title||_("untitledTrip")}</span>
      </a>
    `).join("")}
    <a class="drawer-trip-item drawer-trip-new" data-route="/trip/new">
      <span class="drawer-trip-emoji">➕</span>
      <span class="drawer-trip-name">${_("createNewTrip")}</span>
    </a>
  `,e.querySelectorAll(".drawer-trip-item[data-trip-id]").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-trip-id"),o=r.find(c=>c.id===i);o&&(Je({currentTripId:i,currentTrip:o}),localStorage.setItem("currentTripId",i),document.getElementById("drawer-overlay").classList.remove("active"),se("/",!0,!0))})}),(n=e.querySelector(".drawer-trip-new"))==null||n.addEventListener("click",()=>{document.getElementById("drawer-overlay").classList.remove("active"),se("/trip/new")})}function Tw(){var n;const r=Z(),e=document.getElementById("share-content");if(!r.currentTrip){e.innerHTML=`<p class="empty-state-text">${_("noTripAlert")}</p>`;return}const t=r.currentTrip.shareId;if(t){const s=`${window.location.origin}/#/share?id=${t}`;e.innerHTML=`
      <div class="share-info">
        <div class="form-group">
          <label class="form-label">${_("shareUrl")}</label>
          <input type="text" value="${s}" readonly id="share-url-input" />
        </div>
        <div class="form-group">
          <label class="form-label">${_("sharePassword")}</label>
          <input type="text" value="${r.currentTrip.sharePassword||""}" readonly id="share-pw-input" />
        </div>
        <button class="btn btn-primary w-full" id="btn-copy-share">${_("shareCopyBtn")}</button>
      </div>
    `,(n=document.getElementById("btn-copy-share"))==null||n.addEventListener("click",()=>{navigator.clipboard.writeText(s+`
`+_("sharePassword")+": "+(r.currentTrip.sharePassword||"")),document.getElementById("btn-copy-share").textContent=_("shareCopySuccess")})}else e.innerHTML=`
      <div class="share-setup">
        <p class="text-sm text-muted mb-md">${_("shareSetupText")}</p>
        <div class="form-group">
          <label class="form-label">${_("sharePassword")}</label>
          <input type="text" id="share-password-input" placeholder="****" />
        </div>
        <button class="btn btn-primary w-full" id="btn-create-share">${_("shareCreateBtn")}</button>
      </div>
    `}function fm(){const{currentTrip:r,user:e}=Z(),t=document.getElementById("bottom-nav"),n=document.querySelector(".header-actions"),s=document.getElementById("btn-drawer-google"),i=document.getElementById("drawer-google-text"),o=document.getElementById("btn-drawer-logout"),c=document.getElementById("drawer-logout-divider");r?(t&&t.classList.remove("hidden"),n&&n.classList.remove("hidden")):(t&&t.classList.add("hidden"),n&&n.classList.add("hidden")),e&&(e.isAnonymous?(i&&(i.textContent=_("googleLink")),s&&(s.style.color="inherit"),o&&(o.style.display="none"),c&&(c.style.display="none")):(i&&(i.textContent=_("googleLinked")),s&&(s.style.color="var(--text-muted)"),o&&(o.style.display="flex"),c&&(c.style.display="block")))}Ua("trips",r=>{dm(r)});Ua("currentTrip",()=>{fm()});document.addEventListener("DOMContentLoaded",()=>{Iw().then(()=>fm())});
