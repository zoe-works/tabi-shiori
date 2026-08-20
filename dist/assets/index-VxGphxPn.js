(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Qa={user:null,currentTrip:null,currentTripId:null,trips:[],isLoading:!1,language:localStorage.getItem("language")||"ja"},bs=new Map;function te(){return{...Qa}}function Ye(r){Object.assign(Qa,r),Object.keys(r).forEach(e=>{bs.has(e)&&bs.get(e).forEach(t=>t(Qa[e]))})}function kc(r,e){bs.has(r)||bs.set(r,new Set),bs.get(r).add(e)}function tf(r){localStorage.setItem("language",r),Ye({language:r})}const By=Object.freeze(Object.defineProperty({__proto__:null,getState:te,setLanguage:tf,setState:Ye,subscribe:kc},Symbol.toStringTag,{value:"Module"})),jy={ja:{readingPlaceholder:"例: サワディー",readingMemo:"読み方メモ",localPlaceholder:"例: สวัสดี",localSaying:"現地での言い方",wordPlaceholder:"例: こんにちは",wordToSearch:"調べたい言葉（あなたの言語）",addNewPhrase:"新しいフレーズを追加 ✏️",tapToReturn:"タップで戻る 🔙",tapToFlip:"タップで裏返す 👆",appTitle:"旅のしおり",menu:"メニュー",home:"ホーム",flashcard:"単語帳",checklist:"持ち物",schedule:"スケジュール",research:"リサーチノート",budget:"費用メモ",emergency:"緊急連絡先",omiyage:"お土産リスト",switchTrip:"旅行を切り替え",createNewTrip:"新しい旅行を作成",googleLink:"Googleアカウントと連携",googleLinked:"Googleでログイン済み",share:"共有しおり",shareInfo:"🔗 しおりを共有",shareUrl:"共有URL",sharePassword:"パスワード",shareCopyBtn:"📋 URLをコピー",shareCopySuccess:"✅ コピーしました！",shareSetupText:"共有パスワードを設定して、仲間にURLを送りましょう！",shareCreateBtn:"🔗 共有リンクを作成",noTripAlert:"まず旅行を作成してください",loading:"よみこみ中... 🧸",welcomeTitle:"旅のしおりを作ろう！",welcomeDesc:"旅行の計画から記録まで、<br>みんなで楽しく作る旅のしおり 🌴",yourTrips:"あなたの旅行",btnWelcomeCreate:"✨ 新しい旅行を作成",btnWelcomeGoogle:"🌐 Googleアカウントでログイン/引き継ぎ",untitledTrip:"無題の旅行",countdownBefore:"旅行まであと",countdownDays:"日！",countdownDuring:"🎉 旅行",countdownDuringDays:"日目！",countdownAfter:"✨ おつかれさまでした！",members:"👥 メンバー",btnEditTrip:"✏️ 旅行情報を編集",tripFormNewTitle:"✨ 新しい旅行",tripFormEditTitle:"✏️ 旅行を編集",tripTitlePlaceholder:"例: はじめての台湾旅行！",startDate:"出発日",endDate:"帰国日",destinations:"行き先",countryPlaceholder:"国 (例: 台湾)",cityPlaceholder:"都市 (例: 台北)",addDestination:"＋ 行き先を追加",membersLabel:"メンバー",memberNamePlaceholder:"名前 (例: たろう)",addMember:"＋ メンバーを追加",btnSave:"💾 保存する",btnSaving:"保存中...",btnSaveError:"❌ エラー。もう一度お試しください",authError:"ユーザー情報の読み込みに失敗しました。少し待ってから再度保存してください。",scheduleTitle:"スケジュール & ジャーナル",planMode:"📝 プラン",journalMode:"📖 ジャーナル",btnAddSchedule:"+",addScheduleModalTitle:"予定を追加",timeLabel:"時間",itemTitlePlaceholder:"場所・予定名",itemTransportPlaceholder:"移動手段 (例: タクシー)",itemMemoPlaceholder:"メモ",btnAdd:"追加する",addJournalModalTitle:"記録を追加",journalMood:"気分:",journalRating:"評価:",journalTextPlaceholder:"感想を書いてね",journalAddPhoto:"写真を追加:",noSchedule:"予定がありません。追加してみましょう！",btnEdit:"編集",btnAddJournal:"記録を追加",selectTripFirst:"旅行が選択されていません。",checklistTitle:"持ち物チェック",tabPersonal:"👤 個人",tabShared:"👥 共有",addItemPlaceholder:"新しい持ち物を追加...",noItems:"まだアイテムがありません",catDocuments:"📄 書類",catElectronics:"🔌 電子機器",catClothing:"👕 衣類",catToiletries:"🧴 洗面用品",catOtherList:"📦 その他",rq1:"首都・人口・面積・公用語・・・",rq2:"現地通貨は？",rq3:"現地の人の性格は？",rq4:"食文化・・・",rq5:"コンビニなどの便利なお店は？",rq6:"移動手段はどう違う？",rq7:"家やトイレはどんな感じ？",rq8:"実際に行きたい場所3つ",rq9:"食べたいもの3つ",researchTitle:"リサーチノート",all:"全て",sightseeing:"観光",gourmet:"グルメ",shopping:"お土産",activity:"体験",budgetTitle:"費用メモ",emergencyTitle:"緊急連絡先",catSightseeing:"観光",catMeal:"食事",catTransport:"移動",catHotelSch:"ホテル",catShopping:"買い物",catActivity:"体験",catOther:"その他",catFlight:"フライト",catSightseeing:"観光",catMeal:"食事",catTransport:"移動",catHotelSch:"ホテル",catShopping:"買い物",catActivity:"体験",catOther:"その他",catPolice:"警察・消防・救急",catHotel:"ホテルの連絡先",catEmbassy:"大使館の連絡先",catInsurance:"海外旅行保険",addSmallBtn:"追加",noInfo:"情報がありません。",omiyageTitle:"お土産リスト",flashcardTitle:"単語帳",playAudio:"🔊 読み上げ",settings:"設定",checklistMasterTitle:"持ち物チェック 初期マスタ設定",checklistMasterDesc:"新しい旅行を作成した際に、ここで設定した持ち物が自動的に登録されます。",loginRequiredForSettings:"設定を変更するにはログインが必要です。",newlineSeparated:"改行区切りでアイテムを入力してください。",saveBtn:"保存する",savedExclamation:"保存しました！",saveFailed:"保存に失敗しました: ",settings:"設定",checklistMasterTitle:"持ち物チェック 初期マスタ設定",checklistMasterDesc:"新しい旅行を作成した際に、ここで設定した持ち物が自動的に登録されます。",loginRequiredForSettings:"設定を変更するにはログインが必要です。",newlineSeparated:"改行区切りでアイテムを入力してください。",preparing:"準備中...",noTripSelected:"旅行が選択されていません。",currencyLabel:"通貨",catFood:"食費",catBudgetTransport:"交通費",catShopping:"買い物",catStay:"宿泊費",catActivity:"アクティビティ",catOther:"その他",addExpenseTitle:"支出の追加 ✏️",amountRequiredLabel:"金額 (必須)",usageLabel:"用途",usagePlaceholder:"例: ランチ代",categoryLabel:"カテゴリ",paidByLabel:"支払った人",selectMemberLabel:"メンバーを選択",cancelBtn:"キャンセル",noBudgetItems:"まだ支出がありません。<br>＋ボタンから追加しよう！",totalExpense:"合計支出",warikanStatus:"割り勘 / 立て替え状況",youPaid:"あなたが払った",budgetListTitle:"支出リスト 📝",errorOccurred:"エラーが発生しました😢",confirmDelete:"本当に削除しますか？",deleteAction:"削除",addOmiyage:"お土産の追加 ✏️",omiyageRecipient:"誰に渡す？ (必須)",recipientPlaceholder:"例: 家族、職場、自分",omiyageItem:"お土産名 / メモ",itemPlaceholder:"例: ご当地クッキー",budgetEstimate:"予算目安",noOmiyageProgress:"まだお土産リストがありません。",noOmiyageList:"＋ボタンからお土産リストを追加しよう！",progressStatus:"進捗状況 💪",purchased:"購入済み",undecided:"未定",budgetLabel:"予算",backToHome:"ホームに戻る"},en:{readingPlaceholder:"e.g. Sa-wa-dee",readingMemo:"Pronunciation",localPlaceholder:"e.g. Sawadee",localSaying:"Local Phrase",wordPlaceholder:"e.g. Hello",wordToSearch:"Word (Your Language)",addNewPhrase:"Add New Phrase ✏️",tapToReturn:"Tap to return 🔙",tapToFlip:"Tap to flip 👆",appTitle:"Trip Itinerary",menu:"Menu",home:"Home",flashcard:"Flashcards",checklist:"Checklist",schedule:"Schedule",research:"Research",budget:"Budget",emergency:"Emergency",omiyage:"Souvenirs",switchTrip:"Switch Trip",createNewTrip:"Create New Trip",googleLink:"Link Google Account",googleLinked:"Logged in with Google",share:"Shared Itinerary",shareInfo:"🔗 Share Itinerary",shareUrl:"Share URL",sharePassword:"Password",shareCopyBtn:"📋 Copy URL",shareCopySuccess:"✅ Copied!",shareSetupText:"Set a password to share this itinerary with friends!",shareCreateBtn:"🔗 Create Share Link",noTripAlert:"Please create a trip first",loading:"Loading... 🧸",welcomeTitle:"Create an Itinerary!",welcomeDesc:"Plan and record your trips<br>together with everyone! 🌴",yourTrips:"Your Trips",btnWelcomeCreate:"✨ Create New Trip",btnWelcomeGoogle:"🌐 Login/Link with Google",untitledTrip:"Untitled Trip",countdownBefore:"",countdownDays:"days to go!",countdownDuring:"🎉 Day",countdownDuringDays:" of the trip!",countdownAfter:"✨ Trip completed!",members:"👥 Members",btnEditTrip:"✏️ Edit Trip Info",tripFormNewTitle:"✨ New Trip",tripFormEditTitle:"✏️ Edit Trip",tripTitlePlaceholder:"e.g., First trip to Taiwan!",startDate:"Start Date",endDate:"End Date",destinations:"Destinations",countryPlaceholder:"Country (e.g., Taiwan)",cityPlaceholder:"City (e.g., Taipei)",addDestination:"＋ Add Destination",membersLabel:"Members",memberNamePlaceholder:"Name (e.g., Taro)",addMember:"＋ Add Member",btnSave:"💾 Save",btnSaving:"Saving...",btnSaveError:"❌ Error. Please try again",authError:"Failed to load user info. Please wait and try again.",scheduleTitle:"Schedule & Journal",planMode:"📝 Plan",journalMode:"📖 Journal",btnAddSchedule:"+",addScheduleModalTitle:"Add Schedule",timeLabel:"Time",itemTitlePlaceholder:"Place / Activity",itemTransportPlaceholder:"Transport (e.g., Taxi)",itemMemoPlaceholder:"Memo",btnAdd:"Add",addJournalModalTitle:"Add Journal",journalMood:"Mood:",journalRating:"Rating:",journalTextPlaceholder:"Write your thoughts",journalAddPhoto:"Add Photo:",noSchedule:"No schedules yet. Let's add some!",btnEdit:"Edit",btnAddJournal:"Add Journal",selectTripFirst:"No trip selected.",checklistTitle:"Checklist",tabPersonal:"👤 Personal",tabShared:"👥 Shared",addItemPlaceholder:"Add new item...",noItems:"No items yet",catDocuments:"📄 Documents",catElectronics:"🔌 Electronics",catClothing:"👕 Clothing",catToiletries:"🧴 Toiletries",catOtherList:"📦 Other",rq1:"Capital, Population, Area, Official Language...",rq2:"Local Currency?",rq3:"Local Personality?",rq4:"Food Culture...",rq5:"Convenience Stores?",rq6:"Transportation Differences?",rq7:"Houses and Toilets?",rq8:"3 Places I want to go",rq9:"3 Foods I want to eat",researchTitle:"Research Notes",all:"All",sightseeing:"Sightseeing",gourmet:"Food",shopping:"Shopping",activity:"Activity",budgetTitle:"Budget",emergencyTitle:"Emergency",catSightseeing:"Sightseeing",catMeal:"Meal",catTransport:"Transport",catHotelSch:"Hotel",catShopping:"Shopping",catActivity:"Activity",catOther:"Other",catFlight:"Flight",catSightseeing:"Sightseeing",catMeal:"Meal",catTransport:"Transport",catHotelSch:"Hotel",catShopping:"Shopping",catActivity:"Activity",catOther:"Other",catPolice:"Police/Ambulance/Fire",catHotel:"Hotel Contact",catEmbassy:"Embassy Contact",catInsurance:"Travel Insurance",addSmallBtn:"Add",noInfo:"No information yet.",omiyageTitle:"Souvenirs",flashcardTitle:"Flashcards",playAudio:"🔊 Play",preparing:"Preparing...",noTripSelected:"No trip selected.",currencyLabel:"Currency",catFood:"Food",catBudgetTransport:"Transport",catShopping:"Shopping",catStay:"Stay",catActivity:"Activity",catOther:"Other",addExpenseTitle:"Add Expense ✏️",amountRequiredLabel:"Amount (Required)",usageLabel:"Usage",usagePlaceholder:"e.g., Lunch",categoryLabel:"Category",paidByLabel:"Paid By",selectMemberLabel:"Select Member",cancelBtn:"Cancel",noBudgetItems:"No budget items yet.<br>Add one with the + button!",totalExpense:"Total Expense",warikanStatus:"Split/Advance Status",youPaid:"You Paid",budgetListTitle:"Expense List 📝",errorOccurred:"An error occurred 😢",confirmDelete:"Are you sure you want to delete?",deleteAction:"Delete",addOmiyage:"Add Souvenir ✏️",omiyageRecipient:"For Whom? (Required)",recipientPlaceholder:"e.g., Family, Office, Myself",omiyageItem:"Item Name / Memo",itemPlaceholder:"e.g., Local Cookies",budgetEstimate:"Budget Estimate",noOmiyageProgress:"No souvenir list yet.",noOmiyageList:"Add souvenirs using the + button!",progressStatus:"Progress Status 💪",purchased:"Purchased",undecided:"Undecided",budgetLabel:"Budget",backToHome:"Back to Home"},th:{readingPlaceholder:"เช่น ฮัลโหล",readingMemo:"การออกเสียง",localPlaceholder:"เช่น Hello",localSaying:"วลีท้องถิ่น",wordPlaceholder:"เช่น สวัสดี",wordToSearch:"คำศัพท์ (ภาษาของคุณ)",addNewPhrase:"เพิ่มวลีใหม่ ✏️",tapToReturn:"แตะเพื่อกลับ 🔙",tapToFlip:"แตะเพื่อพลิก 👆",appTitle:"แผนการเดินทาง",menu:"เมนู",home:"หน้าแรก",flashcard:"บัตรคำศัพท์",checklist:"รายการของ",schedule:"กำหนดการ",research:"ข้อมูลท่องเที่ยว",budget:"งบประมาณ",emergency:"ฉุกเฉิน",omiyage:"ของฝาก",switchTrip:"เปลี่ยนทริป",createNewTrip:"สร้างทริปใหม่",googleLink:"เชื่อมต่อบัญชี Google",googleLinked:"เข้าสู่ระบบด้วย Google แล้ว",share:"แชร์แผนการเดินทาง",shareInfo:"🔗 แชร์แผนการเดินทาง",shareUrl:"URL สำหรับแชร์",sharePassword:"รหัสผ่าน",shareCopyBtn:"📋 คัดลอก URL",shareCopySuccess:"✅ คัดลอกแล้ว!",shareSetupText:"ตั้งรหัสผ่านเพื่อแชร์ทริปนี้กับเพื่อน!",shareCreateBtn:"🔗 สร้างลิงก์สำหรับแชร์",noTripAlert:"กรุณาสร้างทริปก่อน",loading:"กำลังโหลด... 🧸",welcomeTitle:"สร้างแผนการเดินทาง!",welcomeDesc:"วางแผนและบันทึกการเดินทาง<br>ไปพร้อมกันทุกคน! 🌴",yourTrips:"ทริปของคุณ",btnWelcomeCreate:"✨ สร้างทริปใหม่",btnWelcomeGoogle:"🌐 เข้าสู่ระบบ/เชื่อมโยง Google",untitledTrip:"ทริปที่ไม่มีชื่อ",countdownBefore:"อีก",countdownDays:"วันจะถึงทริป!",countdownDuring:"🎉 วันที่",countdownDuringDays:" ของทริป!",countdownAfter:"✨ จบทริปแล้ว!",members:"👥 สมาชิก",btnEditTrip:"✏️ แก้ไขข้อมูลทริป",tripFormNewTitle:"✨ ทริปใหม่",tripFormEditTitle:"✏️ แก้ไขทริป",tripTitlePlaceholder:"เช่น เที่ยวไต้หวันครั้งแรก!",startDate:"วันเดินทางไป",endDate:"วันเดินทางกลับ",destinations:"จุดหมายปลายทาง",countryPlaceholder:"ประเทศ (เช่น ไต้หวัน)",cityPlaceholder:"เมือง (เช่น ไทเป)",addDestination:"＋ เพิ่มจุดหมาย",membersLabel:"สมาชิก",memberNamePlaceholder:"ชื่อ (เช่น ทาโร่)",addMember:"＋ เพิ่มสมาชิก",btnSave:"💾 บันทึก",btnSaving:"กำลังบันทึก...",btnSaveError:"❌ เกิดข้อผิดพลาด กรุณาลองใหม่",authError:"ไม่สามารถโหลดข้อมูลผู้ใช้ได้ กรุณารอสักครู่แล้วลองอีกครั้ง",scheduleTitle:"กำหนดการ & บันทึก",planMode:"📝 แผน",journalMode:"📖 บันทึก",btnAddSchedule:"+",addScheduleModalTitle:"เพิ่มกำหนดการ",timeLabel:"เวลา",itemTitlePlaceholder:"สถานที่ / กิจกรรม",itemTransportPlaceholder:"การเดินทาง (เช่น แท็กซี่)",itemMemoPlaceholder:"บันทึก",btnAdd:"เพิ่ม",addJournalModalTitle:"เพิ่มบันทึก",journalMood:"อารมณ์:",journalRating:"คะแนน:",journalTextPlaceholder:"เขียนความรู้สึกของคุณ",journalAddPhoto:"เพิ่มรูปภาพ:",noSchedule:"ยังไม่มีกำหนดการ ลองเพิ่มดูสิ!",btnEdit:"แก้ไข",btnAddJournal:"เพิ่มบันทึก",selectTripFirst:"โปรดเลือกทริปก่อน",checklistTitle:"รายการของ",tabPersonal:"👤 ส่วนตัว",tabShared:"👥 แชร์",addItemPlaceholder:"เพิ่มของใหม่...",noItems:"ยังไม่มีสิ่งของ",catDocuments:"📄 เอกสาร",catElectronics:"🔌 อุปกรณ์อิเล็กทรอนิกส์",catClothing:"👕 เสื้อผ้า",catToiletries:"🧴 ของใช้ส่วนตัว",catOtherList:"📦 อื่นๆ",rq1:"เมืองหลวง ประชากร พื้นที่ ภาษา...",rq2:"สกุลเงินท้องถิ่น?",rq3:"นิสัยคนท้องถิ่น?",rq4:"วัฒนธรรมอาหาร...",rq5:"ร้านสะดวกซื้อ?",rq6:"การเดินทางต่างกันอย่างไร?",rq7:"บ้านและห้องน้ำ?",rq8:"3 สถานที่ที่อยากไป",rq9:"3 อาหารที่อยากกิน",researchTitle:"ข้อมูลท่องเที่ยว",all:"ทั้งหมด",sightseeing:"สถานที่",gourmet:"อาหาร",shopping:"ช้อปปิ้ง",activity:"กิจกรรม",budgetTitle:"งบประมาณ",emergencyTitle:"ติดต่อฉุกเฉิน",catSightseeing:"ท่องเที่ยว",catMeal:"อาหาร",catTransport:"เดินทาง",catHotelSch:"โรงแรม",catShopping:"ช้อปปิ้ง",catActivity:"กิจกรรม",catOther:"อื่นๆ",catFlight:"เที่ยวบิน",catSightseeing:"ท่องเที่ยว",catMeal:"อาหาร",catTransport:"เดินทาง",catHotelSch:"โรงแรม",catShopping:"ช้อปปิ้ง",catActivity:"กิจกรรม",catOther:"อื่นๆ",catPolice:"ตำรวจ/ดับเพลิง/รถพยาบาล",catHotel:"ติดต่อโรงแรม",catEmbassy:"ติดต่อสถานทูต",catInsurance:"ประกันการเดินทาง",addSmallBtn:"เพิ่ม",noInfo:"ยังไม่มีข้อมูล",omiyageTitle:"ของฝาก",flashcardTitle:"บัตรคำศัพท์",playAudio:"🔊 เล่นเสียง",settings:"การตั้งค่า",checklistMasterTitle:"ตั้งค่ารายการของเริ่มต้น",checklistMasterDesc:"เมื่อสร้างทริปใหม่ สิ่งของเหล่านี้จะถูกเพิ่มเข้าไปในรายการของของคุณโดยอัตโนมัติ",loginRequiredForSettings:"คุณต้องเข้าสู่ระบบเพื่อเปลี่ยนการตั้งค่า",newlineSeparated:"ป้อนรายการโดยแยกด้วยการขึ้นบรรทัดใหม่",saveBtn:"บันทึก",savedExclamation:"บันทึกแล้ว!",saveFailed:"บันทึกไม่สำเร็จ: ",settings:"การตั้งค่า",checklistMasterTitle:"ตั้งค่ารายการของเริ่มต้น",preparing:"กำลังเตรียม...",noTripSelected:"ไม่ได้เลือกทริป",currencyLabel:"สกุลเงิน",catFood:"ค่าอาหาร",catBudgetTransport:"ค่าเดินทาง",catShopping:"ช้อปปิ้ง",catStay:"ที่พัก",catActivity:"กิจกรรม",catOther:"อื่นๆ",addExpenseTitle:"เพิ่มค่าใช้จ่าย ✏️",amountRequiredLabel:"จำนวนเงิน (จำเป็น)",usageLabel:"การใช้งาน",usagePlaceholder:"เช่น ค่าอาหารกลางวัน",categoryLabel:"หมวดหมู่",paidByLabel:"จ่ายโดย",selectMemberLabel:"เลือกสมาชิก",cancelBtn:"ยกเลิก",noBudgetItems:"ยังไม่มีค่าใช้จ่าย<br>เพิ่มรายการด้วยปุ่ม + เลย!",totalExpense:"รายจ่ายทั้งหมด",warikanStatus:"สถานะการแชร์ค่าใช้จ่าย",youPaid:"คุณจ่ายไป",budgetListTitle:"รายการค่าใช้จ่าย 📝",errorOccurred:"เกิดข้อผิดพลาด 😢",confirmDelete:"คุณแน่ใจหรือไม่ว่าต้องการลบ?",deleteAction:"ลบ",addOmiyage:"เพิ่มของฝาก ✏️",omiyageRecipient:"ให้ใคร? (จำเป็น)",recipientPlaceholder:"เช่น ครอบครัว, ที่ทำงาน, ตัวเอง",omiyageItem:"ชื่อของฝาก / บันทึก",itemPlaceholder:"เช่น คุกกี้ท้องถิ่น",budgetEstimate:"งบประมาณโดยประมาณ",noOmiyageProgress:"ยังไม่มีรายการของฝาก",noOmiyageList:"เพิ่มของฝากโดยใช้ปุ่ม + เลย!",progressStatus:"สถานะความคืบหน้า 💪",purchased:"ซื้อแล้ว",undecided:"ยังไม่ตัดสินใจ",budgetLabel:"งบประมาณ",backToHome:"กลับหน้าแรก"}};function I(r){var n;const t=te().language||"ja";return(n=jy[t])==null?void 0:n[r]}function io(){return te().language||"ja"}const nf={};let Ja="";function tt(r,e){nf[r]=e}function le(r,e=!0,t=!1){if(Ja===r&&!t)return;const n=r.split("?")[0],s=nf[n];if(!s){console.warn(`Route not found: ${r}`),le("/");return}Ja=r,e&&(window.location.hash=r);const i=document.getElementById("page-content");i&&(i.style.opacity="0",i.style.transform="translateY(8px)",setTimeout(async()=>{try{const o=await s.render();i.innerHTML=o,i.style.opacity="1",i.style.transform="translateY(0)",setTimeout(()=>{i.style.transform="none"},400),s.init&&s.init(),Uy(r),window.scrollTo({top:0})}catch(o){console.error("Page render error:",o)}},150))}function Uy(r){document.querySelectorAll(".nav-item").forEach(n=>{const s=n.getAttribute("data-route");n.classList.toggle("active",s===r)});const e={"/":"appTitle","/flashcard":"flashcardTitle","/checklist":"checklistTitle","/schedule":"scheduleTitle","/research":"researchTitle","/budget":"budgetTitle","/emergency":"emergencyTitle","/omiyage":"omiyageTitle","/settings":"menu","/trip/new":"tripFormNewTitle","/trip/edit":"tripFormEditTitle","/share":"share"},t=document.querySelector(".header-title-text");if(t){const n=e[r];if(n){let s=I(n);r==="/settings"&&(s="設定"),t.textContent=s}else t.textContent=I("appTitle")}}function nh(){return Ja}window.addEventListener("hashchange",()=>{const r=window.location.hash.replace("#","")||"/";le(r,!1)});var rh={};/**
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
 */const rf=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},$y=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,u=l?r[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),n.push(t[d],t[p],t[m],t[y])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(rf(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):$y(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const u=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new qy;const m=i<<2|c>>4;if(n.push(m),u!==64){const y=c<<4&240|u>>2;if(n.push(y),p!==64){const b=u<<6&192|p;n.push(b)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class qy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zy=function(r){const e=rf(r);return sf.encodeByteArray(e,!0)},oo=function(r){return zy(r).replace(/\./g,"")},of=function(r){try{return sf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hy=()=>Gy().__FIREBASE_DEFAULTS__,Ky=()=>{if(typeof process>"u"||typeof rh>"u")return;const r=rh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Wy=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&of(r[1]);return e&&JSON.parse(e)},Do=()=>{try{return Hy()||Ky()||Wy()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},af=r=>{var e,t;return(t=(e=Do())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},cf=r=>{const e=af(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},lf=()=>{var r;return(r=Do())===null||r===void 0?void 0:r.config},uf=r=>{var e;return(e=Do())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Qy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function hf(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[oo(JSON.stringify(t)),oo(JSON.stringify(o)),""].join(".")}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Yy(){var r;const e=(r=Do())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zy(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function e_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function t_(){const r=be();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function df(){return!Yy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ff(){try{return typeof indexedDB=="object"}catch{return!1}}function n_(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const r_="FirebaseError";class pt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=r_,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?s_(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new pt(s,c,n)}}function s_(r,e){return r.replace(i_,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const i_=/\{\$([^}]+)}/g;function o_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function tn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(sh(i)&&sh(o)){if(!tn(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function sh(r){return r!==null&&typeof r=="object"}/**
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
 */function Ws(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function a_(r,e){const t=new c_(r,e);return t.subscribe.bind(t)}class c_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");l_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Da),s.error===void 0&&(s.error=Da),s.complete===void 0&&(s.complete=Da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function l_(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Da(){}/**
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
 */function oe(r){return r&&r._delegate?r._delegate:r}class nn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Sn="[DEFAULT]";/**
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
 */class u_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Qy;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(d_(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:h_(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function h_(r){return r===Sn?void 0:r}function d_(r){return r.instantiationMode==="EAGER"}/**
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
 */class f_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new u_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(X||(X={}));const p_={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},m_=X.INFO,g_={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},y_=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=g_[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xc{constructor(e){this.name=e,this._logLevel=m_,this._logHandler=y_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?p_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const __=(r,e)=>e.some(t=>r instanceof t);let ih,oh;function v_(){return ih||(ih=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I_(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pf=new WeakMap,Ya=new WeakMap,mf=new WeakMap,Va=new WeakMap,Dc=new WeakMap;function T_(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Zt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pf.set(t,r)}).catch(()=>{}),Dc.set(e,r),e}function w_(r){if(Ya.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Ya.set(r,e)}let Xa={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ya.get(r);if(e==="objectStoreNames")return r.objectStoreNames||mf.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Zt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function E_(r){Xa=r(Xa)}function b_(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Na(this),e,...t);return mf.set(n,e.sort?e.sort():[e]),Zt(n)}:I_().includes(r)?function(...e){return r.apply(Na(this),e),Zt(pf.get(this))}:function(...e){return Zt(r.apply(Na(this),e))}}function A_(r){return typeof r=="function"?b_(r):(r instanceof IDBTransaction&&w_(r),__(r,v_())?new Proxy(r,Xa):r)}function Zt(r){if(r instanceof IDBRequest)return T_(r);if(Va.has(r))return Va.get(r);const e=A_(r);return e!==r&&(Va.set(r,e),Dc.set(e,r)),e}const Na=r=>Dc.get(r);function S_(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Zt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Zt(o.result),l.oldVersion,l.newVersion,Zt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const P_=["get","getKey","getAll","getAllKeys","count"],R_=["put","add","delete","clear"],La=new Map;function ah(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(La.get(e))return La.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=R_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||P_.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return La.set(e,i),i}E_(r=>({...r,get:(e,t,n)=>ah(e,t)||r.get(e,t,n),has:(e,t)=>!!ah(e,t)||r.has(e,t)}));/**
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
 */class C_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(k_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function k_(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Za="@firebase/app",ch="0.10.13";/**
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
 */const St=new xc("@firebase/app"),x_="@firebase/app-compat",D_="@firebase/analytics-compat",V_="@firebase/analytics",N_="@firebase/app-check-compat",L_="@firebase/app-check",O_="@firebase/auth",M_="@firebase/auth-compat",F_="@firebase/database",B_="@firebase/data-connect",j_="@firebase/database-compat",U_="@firebase/functions",$_="@firebase/functions-compat",q_="@firebase/installations",z_="@firebase/installations-compat",G_="@firebase/messaging",H_="@firebase/messaging-compat",K_="@firebase/performance",W_="@firebase/performance-compat",Q_="@firebase/remote-config",J_="@firebase/remote-config-compat",Y_="@firebase/storage",X_="@firebase/storage-compat",Z_="@firebase/firestore",ev="@firebase/vertexai-preview",tv="@firebase/firestore-compat",nv="firebase",rv="10.14.1";/**
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
 */const ao="[DEFAULT]",sv={[Za]:"fire-core",[x_]:"fire-core-compat",[V_]:"fire-analytics",[D_]:"fire-analytics-compat",[L_]:"fire-app-check",[N_]:"fire-app-check-compat",[O_]:"fire-auth",[M_]:"fire-auth-compat",[F_]:"fire-rtdb",[B_]:"fire-data-connect",[j_]:"fire-rtdb-compat",[U_]:"fire-fn",[$_]:"fire-fn-compat",[q_]:"fire-iid",[z_]:"fire-iid-compat",[G_]:"fire-fcm",[H_]:"fire-fcm-compat",[K_]:"fire-perf",[W_]:"fire-perf-compat",[Q_]:"fire-rc",[J_]:"fire-rc-compat",[Y_]:"fire-gcs",[X_]:"fire-gcs-compat",[Z_]:"fire-fst",[tv]:"fire-fst-compat",[ev]:"fire-vertex","fire-js":"fire-js",[nv]:"fire-js-all"};/**
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
 */const co=new Map,iv=new Map,ec=new Map;function lh(r,e){try{r.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function On(r){const e=r.name;if(ec.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;ec.set(e,r);for(const t of co.values())lh(t,r);for(const t of iv.values())lh(t,r);return!0}function Or(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function ov(r,e,t=ao){Or(r,e).clearInstance(t)}function Tt(r){return r.settings!==void 0}/**
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
 */const av={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new Ks("app","Firebase",av);/**
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
 */class cv{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const Kn=rv;function gf(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:ao,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(t||(t=lf()),!t)throw en.create("no-options");const i=co.get(s);if(i){if(tn(t,i.options)&&tn(n,i.config))return i;throw en.create("duplicate-app",{appName:s})}const o=new f_(s);for(const l of ec.values())o.addComponent(l);const c=new cv(t,n,o);return co.set(s,c),c}function Vc(r=ao){const e=co.get(r);if(!e&&r===ao&&lf())return gf();if(!e)throw en.create("no-app",{appName:r});return e}function ot(r,e,t){var n;let s=(n=sv[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(c.join(" "));return}On(new nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const lv="firebase-heartbeat-database",uv=1,Ns="firebase-heartbeat-store";let Oa=null;function yf(){return Oa||(Oa=S_(lv,uv,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ns)}catch(t){console.warn(t)}}}}).catch(r=>{throw en.create("idb-open",{originalErrorMessage:r.message})})),Oa}async function hv(r){try{const t=(await yf()).transaction(Ns),n=await t.objectStore(Ns).get(_f(r));return await t.done,n}catch(e){if(e instanceof pt)St.warn(e.message);else{const t=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function uh(r,e){try{const n=(await yf()).transaction(Ns,"readwrite");await n.objectStore(Ns).put(e,_f(r)),await n.done}catch(t){if(t instanceof pt)St.warn(t.message);else{const n=en.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(n.message)}}}function _f(r){return`${r.name}!${r.options.appId}`}/**
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
 */const dv=1024,fv=30*24*60*60*1e3;class pv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gv(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=fv}),this._storage.overwrite(this._heartbeatsCache))}catch(n){St.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=hh(),{heartbeatsToSend:n,unsentEntries:s}=mv(this._heartbeatsCache.heartbeats),i=oo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return St.warn(t),""}}}function hh(){return new Date().toISOString().substring(0,10)}function mv(r,e=dv){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),dh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class gv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ff()?n_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await hv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return uh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dh(r){return oo(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function yv(r){On(new nn("platform-logger",e=>new C_(e),"PRIVATE")),On(new nn("heartbeat",e=>new pv(e),"PRIVATE")),ot(Za,ch,r),ot(Za,ch,"esm2017"),ot("fire-js","")}yv("");var _v="firebase",vv="10.14.1";/**
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
 */ot(_v,vv,"app");var fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vn,vf;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function v(){}v.prototype=_.prototype,T.D=_.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(E,A,R){for(var w=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)w[gt-2]=arguments[gt];return _.prototype[A].apply(E,w)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,v){v||(v=0);var E=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)E[A]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(A=0;16>A;++A)E[A]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=T.g[0],v=T.g[1],A=T.g[2];var R=T.g[3],w=_+(R^v&(A^R))+E[0]+3614090360&4294967295;_=v+(w<<7&4294967295|w>>>25),w=R+(A^_&(v^A))+E[1]+3905402710&4294967295,R=_+(w<<12&4294967295|w>>>20),w=A+(v^R&(_^v))+E[2]+606105819&4294967295,A=R+(w<<17&4294967295|w>>>15),w=v+(_^A&(R^_))+E[3]+3250441966&4294967295,v=A+(w<<22&4294967295|w>>>10),w=_+(R^v&(A^R))+E[4]+4118548399&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(A^_&(v^A))+E[5]+1200080426&4294967295,R=_+(w<<12&4294967295|w>>>20),w=A+(v^R&(_^v))+E[6]+2821735955&4294967295,A=R+(w<<17&4294967295|w>>>15),w=v+(_^A&(R^_))+E[7]+4249261313&4294967295,v=A+(w<<22&4294967295|w>>>10),w=_+(R^v&(A^R))+E[8]+1770035416&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(A^_&(v^A))+E[9]+2336552879&4294967295,R=_+(w<<12&4294967295|w>>>20),w=A+(v^R&(_^v))+E[10]+4294925233&4294967295,A=R+(w<<17&4294967295|w>>>15),w=v+(_^A&(R^_))+E[11]+2304563134&4294967295,v=A+(w<<22&4294967295|w>>>10),w=_+(R^v&(A^R))+E[12]+1804603682&4294967295,_=v+(w<<7&4294967295|w>>>25),w=R+(A^_&(v^A))+E[13]+4254626195&4294967295,R=_+(w<<12&4294967295|w>>>20),w=A+(v^R&(_^v))+E[14]+2792965006&4294967295,A=R+(w<<17&4294967295|w>>>15),w=v+(_^A&(R^_))+E[15]+1236535329&4294967295,v=A+(w<<22&4294967295|w>>>10),w=_+(A^R&(v^A))+E[1]+4129170786&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^A&(_^v))+E[6]+3225465664&4294967295,R=_+(w<<9&4294967295|w>>>23),w=A+(_^v&(R^_))+E[11]+643717713&4294967295,A=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(A^R))+E[0]+3921069994&4294967295,v=A+(w<<20&4294967295|w>>>12),w=_+(A^R&(v^A))+E[5]+3593408605&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^A&(_^v))+E[10]+38016083&4294967295,R=_+(w<<9&4294967295|w>>>23),w=A+(_^v&(R^_))+E[15]+3634488961&4294967295,A=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(A^R))+E[4]+3889429448&4294967295,v=A+(w<<20&4294967295|w>>>12),w=_+(A^R&(v^A))+E[9]+568446438&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^A&(_^v))+E[14]+3275163606&4294967295,R=_+(w<<9&4294967295|w>>>23),w=A+(_^v&(R^_))+E[3]+4107603335&4294967295,A=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(A^R))+E[8]+1163531501&4294967295,v=A+(w<<20&4294967295|w>>>12),w=_+(A^R&(v^A))+E[13]+2850285829&4294967295,_=v+(w<<5&4294967295|w>>>27),w=R+(v^A&(_^v))+E[2]+4243563512&4294967295,R=_+(w<<9&4294967295|w>>>23),w=A+(_^v&(R^_))+E[7]+1735328473&4294967295,A=R+(w<<14&4294967295|w>>>18),w=v+(R^_&(A^R))+E[12]+2368359562&4294967295,v=A+(w<<20&4294967295|w>>>12),w=_+(v^A^R)+E[5]+4294588738&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^A)+E[8]+2272392833&4294967295,R=_+(w<<11&4294967295|w>>>21),w=A+(R^_^v)+E[11]+1839030562&4294967295,A=R+(w<<16&4294967295|w>>>16),w=v+(A^R^_)+E[14]+4259657740&4294967295,v=A+(w<<23&4294967295|w>>>9),w=_+(v^A^R)+E[1]+2763975236&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^A)+E[4]+1272893353&4294967295,R=_+(w<<11&4294967295|w>>>21),w=A+(R^_^v)+E[7]+4139469664&4294967295,A=R+(w<<16&4294967295|w>>>16),w=v+(A^R^_)+E[10]+3200236656&4294967295,v=A+(w<<23&4294967295|w>>>9),w=_+(v^A^R)+E[13]+681279174&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^A)+E[0]+3936430074&4294967295,R=_+(w<<11&4294967295|w>>>21),w=A+(R^_^v)+E[3]+3572445317&4294967295,A=R+(w<<16&4294967295|w>>>16),w=v+(A^R^_)+E[6]+76029189&4294967295,v=A+(w<<23&4294967295|w>>>9),w=_+(v^A^R)+E[9]+3654602809&4294967295,_=v+(w<<4&4294967295|w>>>28),w=R+(_^v^A)+E[12]+3873151461&4294967295,R=_+(w<<11&4294967295|w>>>21),w=A+(R^_^v)+E[15]+530742520&4294967295,A=R+(w<<16&4294967295|w>>>16),w=v+(A^R^_)+E[2]+3299628645&4294967295,v=A+(w<<23&4294967295|w>>>9),w=_+(A^(v|~R))+E[0]+4096336452&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~A))+E[7]+1126891415&4294967295,R=_+(w<<10&4294967295|w>>>22),w=A+(_^(R|~v))+E[14]+2878612391&4294967295,A=R+(w<<15&4294967295|w>>>17),w=v+(R^(A|~_))+E[5]+4237533241&4294967295,v=A+(w<<21&4294967295|w>>>11),w=_+(A^(v|~R))+E[12]+1700485571&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~A))+E[3]+2399980690&4294967295,R=_+(w<<10&4294967295|w>>>22),w=A+(_^(R|~v))+E[10]+4293915773&4294967295,A=R+(w<<15&4294967295|w>>>17),w=v+(R^(A|~_))+E[1]+2240044497&4294967295,v=A+(w<<21&4294967295|w>>>11),w=_+(A^(v|~R))+E[8]+1873313359&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~A))+E[15]+4264355552&4294967295,R=_+(w<<10&4294967295|w>>>22),w=A+(_^(R|~v))+E[6]+2734768916&4294967295,A=R+(w<<15&4294967295|w>>>17),w=v+(R^(A|~_))+E[13]+1309151649&4294967295,v=A+(w<<21&4294967295|w>>>11),w=_+(A^(v|~R))+E[4]+4149444226&4294967295,_=v+(w<<6&4294967295|w>>>26),w=R+(v^(_|~A))+E[11]+3174756917&4294967295,R=_+(w<<10&4294967295|w>>>22),w=A+(_^(R|~v))+E[2]+718787259&4294967295,A=R+(w<<15&4294967295|w>>>17),w=v+(R^(A|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+R&4294967295}n.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var v=_-this.blockSize,E=this.B,A=this.h,R=0;R<_;){if(A==0)for(;R<=v;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<_;)if(E[A++]=T.charCodeAt(R++),A==this.blockSize){s(this,E),A=0;break}}else for(;R<_;)if(E[A++]=T[R++],A==this.blockSize){s(this,E),A=0;break}}this.h=A,this.o+=_},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var v=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=v&255,v/=256;for(this.u(T),T=Array(16),_=v=0;4>_;++_)for(var E=0;32>E;E+=8)T[v++]=this.g[_]>>>E&255;return T};function i(T,_){var v=c;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=_(T)}function o(T,_){this.h=_;for(var v=[],E=!0,A=T.length-1;0<=A;A--){var R=T[A]|0;E&&R==_||(v[A]=R,E=!1)}this.g=v}var c={};function l(T){return-128<=T&&128>T?i(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return C(u(-T));for(var _=[],v=1,E=0;T>=v;E++)_[E]=T/v|0,v*=4294967296;return new o(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return C(d(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(_,8)),E=p,A=0;A<T.length;A+=8){var R=Math.min(8,T.length-A),w=parseInt(T.substring(A,A+R),_);8>R?(R=u(Math.pow(_,R)),E=E.j(R).add(u(w))):(E=E.j(v),E=E.add(u(w)))}return E}var p=l(0),m=l(1),y=l(16777216);r=o.prototype,r.m=function(){if(x(this))return-C(this).m();for(var T=0,_=1,v=0;v<this.g.length;v++){var E=this.i(v);T+=(0<=E?E:4294967296+E)*_,_*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(x(this))return"-"+C(this).toString(T);for(var _=u(Math.pow(T,6)),v=this,E="";;){var A=q(v,_).g;v=V(v,A.j(_));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=A,b(v))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function x(T){return T.h==-1}r.l=function(T){return T=V(this,T),x(T)?-1:b(T)?0:1};function C(T){for(var _=T.g.length,v=[],E=0;E<_;E++)v[E]=~T.g[E];return new o(v,~T.h).add(m)}r.abs=function(){return x(this)?C(this):this},r.add=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0,A=0;A<=_;A++){var R=E+(this.i(A)&65535)+(T.i(A)&65535),w=(R>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);E=w>>>16,R&=65535,w&=65535,v[A]=w<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function V(T,_){return T.add(C(_))}r.j=function(T){if(b(this)||b(T))return p;if(x(this))return x(T)?C(this).j(C(T)):C(C(this).j(T));if(x(T))return C(this.j(C(T)));if(0>this.l(y)&&0>T.l(y))return u(this.m()*T.m());for(var _=this.g.length+T.g.length,v=[],E=0;E<2*_;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var A=0;A<T.g.length;A++){var R=this.i(E)>>>16,w=this.i(E)&65535,gt=T.i(A)>>>16,Jr=T.i(A)&65535;v[2*E+2*A]+=w*Jr,B(v,2*E+2*A),v[2*E+2*A+1]+=R*Jr,B(v,2*E+2*A+1),v[2*E+2*A+1]+=w*gt,B(v,2*E+2*A+1),v[2*E+2*A+2]+=R*gt,B(v,2*E+2*A+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new o(v,0)};function B(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function O(T,_){this.g=T,this.h=_}function q(T,_){if(b(_))throw Error("division by zero");if(b(T))return new O(p,p);if(x(T))return _=q(C(T),_),new O(C(_.g),C(_.h));if(x(_))return _=q(T,C(_)),new O(C(_.g),_.h);if(30<T.g.length){if(x(T)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=_;0>=E.l(T);)v=M(v),E=M(E);var A=F(v,1),R=F(E,1);for(E=F(E,2),v=F(v,2);!b(E);){var w=R.add(E);0>=w.l(T)&&(A=A.add(v),R=w),E=F(E,1),v=F(v,1)}return _=V(T,A.j(_)),new O(A,_)}for(A=p;0<=T.l(_);){for(v=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=u(v),w=R.j(_);x(w)||0<w.l(T);)v-=E,R=u(v),w=R.j(_);b(R)&&(R=m),A=A.add(R),T=V(T,w)}return new O(A,T)}r.A=function(T){return q(this,T).h},r.and=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)&T.i(E);return new o(v,this.h&T.h)},r.or=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)|T.i(E);return new o(v,this.h|T.h)},r.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)^T.i(E);return new o(v,this.h^T.h)};function M(T){for(var _=T.g.length+1,v=[],E=0;E<_;E++)v[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(v,T.h)}function F(T,_){var v=_>>5;_%=32;for(var E=T.g.length-v,A=[],R=0;R<E;R++)A[R]=0<_?T.i(R+v)>>>_|T.i(R+v+1)<<32-_:T.i(R+v);return new o(A,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,vf=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Vn=o}).apply(typeof fh<"u"?fh:typeof self<"u"?self:typeof window<"u"?window:{});var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var If,vs,Tf,Gi,tc,wf,Ef,bf;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ni=="object"&&Ni];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(a,h){if(h)e:{var f=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in f))break e;f=f[P]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,P={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function b(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var U=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)U[ce-2]=arguments[ce];return h.prototype[P].apply(g,U)}}function x(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let U=0;U<D;U++)a[P+U]=g[U]}else a.push(g)}}class V{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function B(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var M=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function F(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function T(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function _(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)a[f]=g[f];for(let D=0;D<v.length;D++)f=v[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function R(a){c.setTimeout(()=>{throw a},0)}function w(){var a=ca;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class gt{constructor(){this.h=this.g=null}add(h,f){const g=Jr.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Jr=new V(()=>new sy,a=>a.reset());class sy{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Yr,Xr=!1,ca=new gt,nu=()=>{const a=c.Promise.resolve(void 0);Yr=()=>{a.then(iy)}};var iy=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){R(f)}var h=Jr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Xr=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var oy=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function Zr(a,h){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{q(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ay[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zr.aa.h.call(this)}}b(Zr,Ve);var ay={2:"touch",3:"pen",4:"mouse"};Zr.prototype.h=function(){Zr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mi="closure_listenable_"+(1e6*Math.random()|0),cy=0;function ly(a,h,f,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=P,this.key=++cy,this.da=this.fa=!1}function gi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function yi(a){this.src=a,this.g={},this.h=0}yi.prototype.add=function(a,h,f,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var U=ua(a,h,g,P);return-1<U?(h=a[U],f||(h.fa=!1)):(h=new ly(h,this.src,D,!!g,P),h.fa=f,a.push(h)),h};function la(a,h){var f=h.type;if(f in a.g){var g=a.g[f],P=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(gi(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ua(a,h,f,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return P}return-1}var ha="closure_lm_"+(1e6*Math.random()|0),da={};function ru(a,h,f,g,P){if(Array.isArray(h)){for(var D=0;D<h.length;D++)ru(a,h[D],f,g,P);return null}return f=ou(f),a&&a[mi]?a.K(h,f,u(g)?!!g.capture:!1,P):uy(a,h,f,!1,g,P)}function uy(a,h,f,g,P,D){if(!h)throw Error("Invalid event type");var U=u(P)?!!P.capture:!!P,ce=pa(a);if(ce||(a[ha]=ce=new yi(a)),f=ce.add(h,f,g,U,D),f.proxy)return f;if(g=hy(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)oy||(P=U),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(iu(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function hy(){function a(f){return h.call(a.src,a.listener,f)}const h=dy;return a}function su(a,h,f,g,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)su(a,h[D],f,g,P);else g=u(g)?!!g.capture:!!g,f=ou(f),a&&a[mi]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=ua(D,f,g,P),-1<f&&(gi(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=pa(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ua(h,f,g,P)),(f=-1<a?h[a]:null)&&fa(f))}function fa(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[mi])la(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(iu(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=pa(h))?(la(f,a),f.h==0&&(f.src=null,h[ha]=null)):gi(a)}}}function iu(a){return a in da?da[a]:da[a]="on"+a}function dy(a,h){if(a.da)a=!0;else{h=new Zr(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&fa(a),a=f.call(g,h)}return a}function pa(a){return a=a[ha],a instanceof yi?a:null}var ma="__closure_events_fn_"+(1e9*Math.random()>>>0);function ou(a){return typeof a=="function"?a:(a[ma]||(a[ma]=function(h){return a.handleEvent(h)}),a[ma])}function Ne(){Ot.call(this),this.i=new yi(this),this.M=this,this.F=null}b(Ne,Ot),Ne.prototype[mi]=!0,Ne.prototype.removeEventListener=function(a,h,f,g){su(this,a,h,f,g)};function $e(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ve(h,a);else if(h instanceof Ve)h.target=h.target||a;else{var P=h;h=new Ve(g,a),E(h,P)}if(P=!0,f)for(var D=f.length-1;0<=D;D--){var U=h.g=f[D];P=_i(U,g,!0,h)&&P}if(U=h.g=a,P=_i(U,g,!0,h)&&P,P=_i(U,g,!1,h)&&P,f)for(D=0;D<f.length;D++)U=h.g=f[D],P=_i(U,g,!1,h)&&P}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)gi(f[g]);delete a.g[h],a.h--}}this.F=null},Ne.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Ne.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function _i(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,D=0;D<h.length;++D){var U=h[D];if(U&&!U.da&&U.capture==f){var ce=U.listener,ke=U.ha||U.src;U.fa&&la(a.i,U),P=ce.call(ke,g)!==!1&&P}}return P&&!g.defaultPrevented}function au(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function cu(a){a.g=au(()=>{a.g=null,a.i&&(a.i=!1,cu(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class fy extends Ot{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:cu(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(a){Ot.call(this),this.h=a,this.g={}}b(es,Ot);var lu=[];function uu(a){F(a.g,function(h,f){this.g.hasOwnProperty(f)&&fa(h)},a),a.g={}}es.prototype.N=function(){es.aa.N.call(this),uu(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ga=c.JSON.stringify,py=c.JSON.parse,my=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ya(){}ya.prototype.h=null;function hu(a){return a.h||(a.h=a.i())}function du(){}var ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _a(){Ve.call(this,"d")}b(_a,Ve);function va(){Ve.call(this,"c")}b(va,Ve);var In={},fu=null;function vi(){return fu=fu||new Ne}In.La="serverreachability";function pu(a){Ve.call(this,In.La,a)}b(pu,Ve);function ns(a){const h=vi();$e(h,new pu(h))}In.STAT_EVENT="statevent";function mu(a,h){Ve.call(this,In.STAT_EVENT,a),this.stat=h}b(mu,Ve);function qe(a){const h=vi();$e(h,new mu(h,a))}In.Ma="timingevent";function gu(a,h){Ve.call(this,In.Ma,a),this.size=h}b(gu,Ve);function rs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function ss(){this.g=!0}ss.prototype.xa=function(){this.g=!1};function gy(a,h,f,g,P,D){a.info(function(){if(a.g)if(D)for(var U="",ce=D.split("&"),ke=0;ke<ce.length;ke++){var re=ce[ke].split("=");if(1<re.length){var Le=re[0];re=re[1];var Oe=Le.split("_");U=2<=Oe.length&&Oe[1]=="type"?U+(Le+"="+re+"&"):U+(Le+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+f+`
`+U})}function yy(a,h,f,g,P,D,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+f+`
`+D+" "+U})}function tr(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+vy(a,f)+(g?" "+g:"")})}function _y(a,h){a.info(function(){return"TIMEOUT: "+h})}ss.prototype.info=function(){};function vy(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return ga(f)}catch{return h}}var Ii={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ia;function Ti(){}b(Ti,ya),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},Ia=new Ti;function Mt(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _u}function _u(){this.i=null,this.g="",this.h=!1}var vu={},Ta={};function wa(a,h,f){a.L=1,a.v=Ai(yt(h)),a.m=f,a.P=!0,Iu(a,null)}function Iu(a,h){a.F=Date.now(),wi(a),a.A=yt(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Nu(f.i,"t",g),a.C=0,f=a.j.J,a.h=new _u,a.g=Xu(a.j,f?h:null,!a.m),0<a.O&&(a.M=new fy(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(lu[0]=P.toString()),P=lu);for(var D=0;D<P.length;D++){var U=ru(f,P[D],g||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ns(),gy(a.i,a.u,a.A,a.l,a.R,a.m)}Mt.prototype.ca=function(a){a=a.target;const h=this.M;h&&_t(a)==3?h.j():this.Y(a)},Mt.prototype.Y=function(a){try{if(a==this.g)e:{const Oe=_t(this.g);var h=this.g.Ba();const sr=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||Uu(this.g)))){this.J||Oe!=4||h==7||(h==8||0>=sr?ns(3):ns(2)),Ea(this);var f=this.g.Z();this.X=f;t:if(Tu(this)){var g=Uu(this.g);a="";var P=g.length,D=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),is(this);var U="";break t}this.h.i=new c.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==P-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,yy(this.i,this.u,this.A,this.l,this.R,Oe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,ke=this.g;if((ce=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(ce)){var re=ce;break t}}re=null}if(f=re)tr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ba(this,f);else{this.o=!1,this.s=3,qe(12),Tn(this),is(this);break e}}if(this.P){f=!0;let Je;for(;!this.J&&this.C<U.length;)if(Je=Iy(this,U),Je==Ta){Oe==4&&(this.s=4,qe(14),f=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==vu){this.s=4,qe(15),tr(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else tr(this.i,this.l,Je,null),ba(this,Je);if(Tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||U.length!=0||this.h.h||(this.s=1,qe(16),f=!1),this.o=this.o&&f,!f)tr(this.i,this.l,U,"[Invalid Chunked Response]"),Tn(this),is(this);else if(0<U.length&&!this.W){this.W=!0;var Le=this.j;Le.g==this&&Le.ba&&!Le.M&&(Le.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),ka(Le),Le.M=!0,qe(11))}}else tr(this.i,this.l,U,null),ba(this,U);Oe==4&&Tn(this),this.o&&!this.J&&(Oe==4?Wu(this.j,this):(this.o=!1,wi(this)))}else My(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),Tn(this),is(this)}}}catch{}finally{}};function Tu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Iy(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Ta:(f=Number(h.substring(f,g)),isNaN(f)?vu:(g+=1,g+f>h.length?Ta:(h=h.slice(g,g+f),a.C=g+f,h)))}Mt.prototype.cancel=function(){this.J=!0,Tn(this)};function wi(a){a.S=Date.now()+a.I,wu(a,a.I)}function wu(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=rs(m(a.ba,a),h)}function Ea(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Mt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(_y(this.i,this.A),this.L!=2&&(ns(),qe(17)),Tn(this),this.s=2,is(this)):wu(this,this.S-a)};function is(a){a.j.G==0||a.J||Wu(a.j,a)}function Tn(a){Ea(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,uu(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function ba(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Aa(f.h,a))){if(!a.K&&Aa(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)xi(f),Ci(f);else break e;Ca(f),qe(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=rs(m(f.Za,f),6e3));if(1>=Au(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else En(f,11)}else if((a.K||f.g==a)&&xi(f),!B(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let re=P[h];if(f.T=re[0],re=re[1],f.G==2)if(re[0]=="c"){f.K=re[1],f.ia=re[2];const Le=re[3];Le!=null&&(f.la=Le,f.j.info("VER="+f.la));const Oe=re[4];Oe!=null&&(f.Aa=Oe,f.j.info("SVER="+f.Aa));const sr=re[5];sr!=null&&typeof sr=="number"&&0<sr&&(g=1.5*sr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Je=a.g;if(Je){const Vi=Je.g?Je.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var D=g.h;D.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Sa(D,D.h),D.h=null))}if(g.D){const xa=Je.g?Je.g.getResponseHeader("X-HTTP-Session-Id"):null;xa&&(g.ya=xa,he(g.I,g.D,xa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var U=a;if(g.qa=Yu(g,g.J?g.ia:null,g.W),U.K){Su(g.h,U);var ce=U,ke=g.L;ke&&(ce.I=ke),ce.B&&(Ea(ce),wi(ce)),g.g=U}else Hu(g);0<f.i.length&&ki(f)}else re[0]!="stop"&&re[0]!="close"||En(f,7);else f.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?En(f,7):Ra(f):re[0]!="noop"&&f.l&&f.l.ta(re),f.v=0)}}ns(4)}catch{}}var Ty=class{constructor(a,h){this.g=a,this.map=h}};function Eu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Au(a){return a.h?1:a.g?a.g.size:0}function Aa(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Sa(a,h){a.g?a.g.add(h):a.h=h}function Su(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Eu.prototype.cancel=function(){if(this.i=Pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Pu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return x(a.i)}function wy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Ey(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Ru(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Ey(a),g=wy(a),P=g.length,D=0;D<P;D++)h.call(void 0,g[D],f&&f[D],a)}var Cu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function by(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),P=null;if(0<=g){var D=a[f].substring(0,g);P=a[f].substring(g+1)}else D=a[f];h(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function wn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof wn){this.h=a.h,Ei(this,a.j),this.o=a.o,this.g=a.g,bi(this,a.s),this.l=a.l;var h=a.i,f=new cs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),ku(this,f),this.m=a.m}else a&&(h=String(a).match(Cu))?(this.h=!1,Ei(this,h[1]||"",!0),this.o=os(h[2]||""),this.g=os(h[3]||"",!0),bi(this,h[4]),this.l=os(h[5]||"",!0),ku(this,h[6]||"",!0),this.m=os(h[7]||"")):(this.h=!1,this.i=new cs(null,this.h))}wn.prototype.toString=function(){var a=[],h=this.j;h&&a.push(as(h,xu,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(as(h,xu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(as(f,f.charAt(0)=="/"?Py:Sy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",as(f,Cy)),a.join("")};function yt(a){return new wn(a)}function Ei(a,h,f){a.j=f?os(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function bi(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function ku(a,h,f){h instanceof cs?(a.i=h,ky(a.i,a.h)):(f||(h=as(h,Ry)),a.i=new cs(h,a.h))}function he(a,h,f){a.i.set(h,f)}function Ai(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function os(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function as(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Ay),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ay(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xu=/[#\/\?@]/g,Sy=/[#\?:]/g,Py=/[#\?]/g,Ry=/[#\?@]/g,Cy=/#/g;function cs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ft(a){a.g||(a.g=new Map,a.h=0,a.i&&by(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}r=cs.prototype,r.add=function(a,h){Ft(this),this.i=null,a=nr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Du(a,h){Ft(a),h=nr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Vu(a,h){return Ft(a),h=nr(a,h),a.g.has(h)}r.forEach=function(a,h){Ft(this),this.g.forEach(function(f,g){f.forEach(function(P){a.call(h,P,g,this)},this)},this)},r.na=function(){Ft(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const P=a[g];for(let D=0;D<P.length;D++)f.push(h[g])}return f},r.V=function(a){Ft(this);let h=[];if(typeof a=="string")Vu(this,a)&&(h=h.concat(this.g.get(nr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},r.set=function(a,h){return Ft(this),this.i=null,a=nr(this,a),Vu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},r.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Nu(a,h,f){Du(a,h),0<f.length&&(a.i=null,a.g.set(nr(a,h),x(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var P=D;U[g]!==""&&(P+="="+encodeURIComponent(String(U[g]))),a.push(P)}}return this.i=a.join("&")};function nr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ky(a,h){h&&!a.j&&(Ft(a),a.i=null,a.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(Du(this,g),Nu(this,P,f))},a)),a.j=h}function xy(a,h){const f=new ss;if(c.Image){const g=new Image;g.onload=y(Bt,f,"TestLoadImage: loaded",!0,h,g),g.onerror=y(Bt,f,"TestLoadImage: error",!1,h,g),g.onabort=y(Bt,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(Bt,f,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Dy(a,h){const f=new ss,g=new AbortController,P=setTimeout(()=>{g.abort(),Bt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?Bt(f,"TestPingServer: ok",!0,h):Bt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Bt(f,"TestPingServer: error",!1,h)})}function Bt(a,h,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function Vy(){this.g=new my}function Ny(a,h,f){const g=f||"";try{Ru(a,function(P,D){let U=P;u(P)&&(U=ga(P)),h.push(g+D+"="+encodeURIComponent(U))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function Si(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Si,ya),Si.prototype.g=function(){return new Pi(this.l,this.j)},Si.prototype.i=function(a){return function(){return a}}({});function Pi(a,h){Ne.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Pi,Ne),r=Pi.prototype,r.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,us(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ls(this):us(this),this.readyState==3&&Lu(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,ls(this))},r.Qa=function(a){this.g&&(this.response=a,ls(this))},r.ga=function(){this.g&&ls(this)};function ls(a){a.readyState=4,a.l=null,a.j=null,a.v=null,us(a)}r.setRequestHeader=function(a,h){this.u.append(a,h)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ou(a){let h="";return F(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Pa(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Ou(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):he(a,h,f))}function ve(a){Ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(ve,Ne);var Ly=/^https?$/i,Oy=["POST","PUT"];r=ve.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ia.g(),this.v=this.o?hu(this.o):hu(Ia),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Mu(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Oy,h,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of f)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ju(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Mu(this,D)}};function Mu(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Fu(a),Ri(a)}function Fu(a){a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,$e(this,"complete"),$e(this,"abort"),Ri(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),ve.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Bu(this):this.bb())},r.bb=function(){Bu(this)};function Bu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_t(a)!=4||a.Z()!=2)){if(a.u&&_t(a)==4)au(a.Ea,0,a);else if($e(a,"readystatechange"),_t(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=U===0){var P=String(a.D).match(Cu)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!Ly.test(P?P.toLowerCase():"")}f=g}if(f)$e(a,"complete"),$e(a,"success");else{a.m=6;try{var D=2<_t(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Fu(a)}}finally{Ri(a)}}}}function Ri(a,h){if(a.g){ju(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||$e(a,"ready");try{f.onreadystatechange=g}catch{}}}function ju(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function _t(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),py(h)}};function Uu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function My(a){const h={};a=(a.g&&2<=_t(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var f=A(a[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[P]||[];h[P]=D,D.push(f)}T(h,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function $u(a){this.Aa=0,this.i=[],this.j=new ss,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hs("baseRetryDelayMs",5e3,a),this.cb=hs("retryDelaySeedMs",1e4,a),this.Wa=hs("forwardChannelMaxRetries",2,a),this.wa=hs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Eu(a&&a.concurrentRequestLimit),this.Da=new Vy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=$u.prototype,r.la=8,r.G=1,r.connect=function(a,h,f,g){qe(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Yu(this,null,this.W),ki(this)};function Ra(a){if(qu(a),a.G==3){var h=a.U++,f=yt(a.I);if(he(f,"SID",a.K),he(f,"RID",h),he(f,"TYPE","terminate"),ds(a,f),h=new Mt(a,a.j,h),h.L=2,h.v=Ai(yt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Xu(h.j,null),h.g.ea(h.v)),h.F=Date.now(),wi(h)}Ju(a)}function Ci(a){a.g&&(ka(a),a.g.cancel(),a.g=null)}function qu(a){Ci(a),a.u&&(c.clearTimeout(a.u),a.u=null),xi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ki(a){if(!bu(a.h)&&!a.s){a.s=!0;var h=a.Ga;Yr||nu(),Xr||(Yr(),Xr=!0),ca.add(h,a),a.B=0}}function Fy(a,h){return Au(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=rs(m(a.Ga,a,h),Qu(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Mt(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),E(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Gu(this,P,h),f=yt(this.I),he(f,"RID",a),he(f,"CVER",22),this.D&&he(f,"X-HTTP-Session-Id",this.D),ds(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Ou(D)))+"&"+h:this.m&&Pa(f,this.m,D)),Sa(this.h,P),this.Ua&&he(f,"TYPE","init"),this.P?(he(f,"$req",h),he(f,"SID","null"),P.T=!0,wa(P,f,null)):wa(P,f,h),this.G=2}}else this.G==3&&(a?zu(this,a):this.i.length==0||bu(this.h)||zu(this))};function zu(a,h){var f;h?f=h.l:f=a.U++;const g=yt(a.I);he(g,"SID",a.K),he(g,"RID",f),he(g,"AID",a.T),ds(a,g),a.m&&a.o&&Pa(g,a.m,a.o),f=new Mt(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Gu(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Sa(a.h,f),wa(f,g,h)}function ds(a,h){a.H&&F(a.H,function(f,g){he(h,g,f)}),a.l&&Ru({},function(f,g){he(h,g,f)})}function Gu(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const U=["count="+f];D==-1?0<f?(D=P[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let ce=!0;for(let ke=0;ke<f;ke++){let re=P[ke].g;const Le=P[ke].map;if(re-=D,0>re)D=Math.max(0,P[ke].g-100),ce=!1;else try{Ny(Le,U,"req"+re+"_")}catch{g&&g(Le)}}if(ce){g=U.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Hu(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Yr||nu(),Xr||(Yr(),Xr=!0),ca.add(h,a),a.v=0}}function Ca(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=rs(m(a.Fa,a),Qu(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=rs(m(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),Ci(this),Ku(this))};function ka(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ku(a){a.g=new Mt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yt(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),ds(a,h),a.m&&a.o&&Pa(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ai(yt(h)),f.m=null,f.P=!0,Iu(f,a)}r.Za=function(){this.C!=null&&(this.C=null,Ci(this),Ca(this),qe(19))};function xi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Wu(a,h){var f=null;if(a.g==h){xi(a),ka(a),a.g=null;var g=2}else if(Aa(a.h,h))f=h.D,Su(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;g=vi(),$e(g,new gu(g,f)),ki(a)}else Hu(a);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&Fy(a,h)||g==2&&Ca(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),P){case 1:En(a,5);break;case 4:En(a,10);break;case 3:En(a,6);break;default:En(a,2)}}}function Qu(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function En(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const P=!g;g=new wn(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ei(g,"https"),Ai(g),P?xy(g.toString(),f):Dy(g.toString(),f)}else qe(2);a.G=0,a.l&&a.l.sa(h),Ju(a),qu(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function Ju(a){if(a.G=0,a.ka=[],a.l){const h=Pu(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Yu(a,h,f){var g=f instanceof wn?yt(f):new wn(f);if(g.g!="")h&&(g.g=h+"."+g.g),bi(g,g.s);else{var P=c.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var D=new wn(null);g&&Ei(D,g),h&&(D.g=h),P&&bi(D,P),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&he(g,f,h),he(g,"VER",a.la),ds(a,g),g}function Xu(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ve(new Si({eb:f})):new ve(a.pa),h.Ha(a.J),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zu(){}r=Zu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Di(){}Di.prototype.g=function(a,h){return new Ke(a,h)};function Ke(a,h){Ne.call(this),this.g=new $u(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!B(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!B(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new rr(this)}b(Ke,Ne),Ke.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ke.prototype.close=function(){Ra(this.g)},Ke.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ga(a),a=f);h.i.push(new Ty(h.Ya++,a)),h.G==3&&ki(h)},Ke.prototype.N=function(){this.g.l=null,delete this.j,Ra(this.g),delete this.g,Ke.aa.N.call(this)};function eh(a){_a.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}b(eh,_a);function th(){va.call(this),this.status=1}b(th,va);function rr(a){this.g=a}b(rr,Zu),rr.prototype.ua=function(){$e(this.g,"a")},rr.prototype.ta=function(a){$e(this.g,new eh(a))},rr.prototype.sa=function(a){$e(this.g,new th)},rr.prototype.ra=function(){$e(this.g,"b")},Di.prototype.createWebChannel=Di.prototype.g,Ke.prototype.send=Ke.prototype.o,Ke.prototype.open=Ke.prototype.m,Ke.prototype.close=Ke.prototype.close,bf=function(){return new Di},Ef=function(){return vi()},wf=In,tc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ii.NO_ERROR=0,Ii.TIMEOUT=8,Ii.HTTP_ERROR=6,Gi=Ii,yu.COMPLETE="complete",Tf=yu,du.EventType=ts,ts.OPEN="a",ts.CLOSE="b",ts.ERROR="c",ts.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,vs=du,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,If=ve}).apply(typeof Ni<"u"?Ni:typeof self<"u"?self:typeof window<"u"?window:{});const ph="@firebase/firestore";/**
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
 */let Mr="10.14.0";/**
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
 */const rn=new xc("@firebase/firestore");function lr(){return rn.logLevel}function Iv(r){rn.setLogLevel(r)}function L(r,...e){if(rn.logLevel<=X.DEBUG){const t=e.map(Nc);rn.debug(`Firestore (${Mr}): ${r}`,...t)}}function Te(r,...e){if(rn.logLevel<=X.ERROR){const t=e.map(Nc);rn.error(`Firestore (${Mr}): ${r}`,...t)}}function We(r,...e){if(rn.logLevel<=X.WARN){const t=e.map(Nc);rn.warn(`Firestore (${Mr}): ${r}`,...t)}}function Nc(r){if(typeof r=="string")return r;try{/**
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
 */function z(r="Unexpected state"){const e=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: `+r;throw Te(e),new Error(e)}function G(r,e){r||z()}function Tv(r,e){r||z()}function j(r,e){return r}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Re{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Af{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class wv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ev{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new Re;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Re,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Re)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string"),new Af(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new Pe(e)}}class bv{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Av{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new bv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){G(this.o===void 0);const n=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new Pf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class Pv{getToken(){return Promise.resolve(new Pf(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function Rv(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Lc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=Rv(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function K(r,e){return r<e?-1:r>e?1:0}function vr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function Rf(r){return r+"\0"}/**
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
 */class ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new N(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ge(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new ge(0,0))}static max(){return new H(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ls{constructor(e,t,n){t===void 0?t=0:t>e.length&&z(),n===void 0?n=e.length-t:n>e.length-t&&z(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ls.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ls?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Z extends Ls{construct(e,t,n){return new Z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new N(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new Z(t)}static emptyPath(){return new Z([])}}const Cv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends Ls{construct(e,t,n){return new fe(e,t,n)}static isValidIdentifier(e){return Cv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new fe(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new N(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new N(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new N(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Z.fromString(e))}static fromName(e){return new $(Z.fromString(e).popFirst(5))}static empty(){return new $(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Z(e.slice()))}}/**
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
 */class Ir{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function nc(r){return r.fields.find(e=>e.kind===2)}function Pn(r){return r.fields.filter(e=>e.kind!==2)}function kv(r,e){let t=K(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let n=0;n<Math.min(r.fields.length,e.fields.length);++n)if(t=xv(r.fields[n],e.fields[n]),t!==0)return t;return K(r.fields.length,e.fields.length)}Ir.UNKNOWN_ID=-1;class Nn{constructor(e,t){this.fieldPath=e,this.kind=t}}function xv(r,e){const t=fe.comparator(r.fieldPath,e.fieldPath);return t!==0?t:K(r.kind,e.kind)}class Tr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Tr(0,Qe.min())}}function Cf(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=H.fromTimestamp(n===1e9?new ge(t+1,0):new ge(t,n));return new Qe(s,$.empty(),e)}function kf(r){return new Qe(r.readTime,r.key,-1)}class Qe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Qe(H.min(),$.empty(),-1)}static max(){return new Qe(H.max(),$.empty(),-1)}}function Oc(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(r.documentKey,e.documentKey),t!==0?t:K(r.largestBatchId,e.largestBatchId))}/**
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
 */const xf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Df{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fn(r){if(r.code!==k.FAILED_PRECONDITION||r.message!==xf)throw r;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,n)=>{t(e)})}static reject(e){return new S((t,n)=>{n(e)})}static waitFor(e){return new S((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const n of e)t=t.next(s=>s?S.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new S((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(d=>{o[u]=d,++c,c===i&&n(o)},d=>s(d))}})}static doWhile(e,t){return new S((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
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
 */class Vo{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Re,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new As(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=Mc(n.target.error);this.V.reject(new As(e,s))}}static open(e,t,n,s){try{return new Vo(t,e.transaction(s,n))}catch(i){throw new As(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(L("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Vv(t)}}class at{constructor(e,t,n){this.name=e,this.version=t,this.p=n,at.S(be())===12.2&&Te("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return L("SimpleDb","Removing database:",e),Rn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ff())return!1;if(at.v())return!0;const e=be(),t=at.S(e),n=0<t&&t<10,s=Vf(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(L("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new As(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new N(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new N(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new As(e,o))},s.onupgradeneeded=i=>{L("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{L("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=Vo.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(u=>(c.g(),u)).catch(u=>(c.abort(u),S.reject(u))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,u=l.name!=="FirebaseError"&&o<3;if(L("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Vf(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Dv{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Rn(this.B.delete())}}class As extends N{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function pn(r){return r.name==="IndexedDbTransactionError"}class Vv{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(L("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(L("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Rn(n)}add(e){return L("SimpleDb","ADD",this.store.name,e,e),Rn(this.store.add(e))}get(e){return Rn(this.store.get(e)).next(t=>(t===void 0&&(t=null),L("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return L("SimpleDb","DELETE",this.store.name,e),Rn(this.store.delete(e))}count(){return L("SimpleDb","COUNT",this.store.name),Rn(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new S((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new S((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){L("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new S((n,s)=>{t.onerror=i=>{const o=Mc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new S((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new Dv(c),u=t(c.primaryKey,c.value,l);if(u instanceof S){const d=u.catch(p=>(l.done(),S.reject(p)));n.push(d)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>S.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Rn(r){return new S((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Mc(n.target.error);t(s)}})}let mh=!1;function Mc(r){const e=at.S(be());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mh||(mh=!0,setTimeout(()=>{throw n},0)),n}}return r}class Nv{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){L("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{L("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){pn(t)?L("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await fn(t)}await this.X(6e4)})}}class Lv{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return S.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return L("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(L("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=kf(i);Oc(o,n)>0&&(n=o)}),new Qe(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class ze{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ze.oe=-1;function Qs(r){return r==null}function Os(r){return r===0&&1/r==-1/0}function Nf(r){return typeof r=="number"&&Number.isInteger(r)&&!Os(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Be(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=gh(e)),e=Ov(r.get(t),e);return gh(e)}function Ov(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function gh(r){return r+""}function st(r){const e=r.length;if(G(e>=2),e===2)return G(r.charAt(0)===""&&r.charAt(1)===""),Z.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&z(),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:z()}i=o+2}return new Z(n)}/**
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
 */const yh=["userId","batchId"];/**
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
 */function Hi(r,e){return[r,Be(e)]}function Lf(r,e,t){return[r,Be(e),t]}const Mv={},Fv=["prefixPath","collectionGroup","readTime","documentId"],Bv=["prefixPath","collectionGroup","documentId"],jv=["collectionGroup","readTime","prefixPath","documentId"],Uv=["canonicalId","targetId"],$v=["targetId","path"],qv=["path","targetId"],zv=["collectionId","parent"],Gv=["indexId","uid"],Hv=["uid","sequenceNumber"],Kv=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Wv=["indexId","uid","orderedDocumentKey"],Qv=["userId","collectionPath","documentId"],Jv=["userId","collectionPath","largestBatchId"],Yv=["userId","collectionGroup","largestBatchId"],Of=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Xv=[...Of,"documentOverlays"],Mf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ff=Mf,Fc=[...Ff,"indexConfiguration","indexState","indexEntries"],Zv=Fc,eI=[...Fc,"globals"];/**
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
 */class rc extends Df{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Ae(r,e){const t=j(r);return at.F(t._e,e)}/**
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
 */function _h(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function mn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Bf(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function jf(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ue{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Li(this.root,e,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Li(this.root,e,this.comparator,!0)}}class Li{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??xe.RED,this.left=s??xe.EMPTY,this.right=i??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new xe(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,n,s,i){return this}insert(e,t,n){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ie{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vh(this.data.getIterator())}getIteratorFrom(e){return new vh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ie(this.comparator);return t.data=e,t}}class vh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ir(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ge{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new Ge([])}unionWith(e){let t=new ie(fe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ge(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Uf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function tI(){return typeof atob<"u"}/**
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
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Uf("Invalid base64 string: "+i):i}}(e);return new _e(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const nI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(r){if(G(!!r),typeof r=="string"){let e=0;const t=nI.exec(r);if(G(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:pe(r.seconds),nanos:pe(r.nanos)}}function pe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Rt(r){return typeof r=="string"?_e.fromBase64String(r):_e.fromUint8Array(r)}/**
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
 */function No(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Lo(r){const e=r.mapValue.fields.__previous_value__;return No(e)?Lo(e):e}function Ms(r){const e=Pt(r.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class rI{constructor(e,t,n,s,i,o,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class sn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ki={nullValue:"NULL_VALUE"};function on(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?No(r)?4:$f(r)?9007199254740991:Oo(r)?10:11:z()}function ut(r,e){if(r===e)return!0;const t=on(r);if(t!==on(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ms(r).isEqual(Ms(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Pt(s.timestampValue),c=Pt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Rt(s.bytesValue).isEqual(Rt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return pe(s.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(s.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return pe(s.integerValue)===pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=pe(s.doubleValue),c=pe(i.doubleValue);return o===c?Os(o)===Os(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return vr(r.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(_h(o)!==_h(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!ut(o[l],c[l])))return!1;return!0}(r,e);default:return z()}}function Fs(r,e){return(r.values||[]).find(t=>ut(t,e))!==void 0}function an(r,e){if(r===e)return 0;const t=on(r),n=on(e);if(t!==n)return K(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=pe(i.integerValue||i.doubleValue),l=pe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return Ih(r.timestampValue,e.timestampValue);case 4:return Ih(Ms(r),Ms(e));case 5:return K(r.stringValue,e.stringValue);case 6:return function(i,o){const c=Rt(i),l=Rt(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=K(c[u],l[u]);if(d!==0)return d}return K(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=K(pe(i.latitude),pe(o.latitude));return c!==0?c:K(pe(i.longitude),pe(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Th(r.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,u,d;const p=i.fields||{},m=o.fields||{},y=(c=p.value)===null||c===void 0?void 0:c.arrayValue,b=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=K(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Th(y,b)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Jt.mapValue&&o===Jt.mapValue)return 0;if(i===Jt.mapValue)return 1;if(o===Jt.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=K(l[p],d[p]);if(m!==0)return m;const y=an(c[l[p]],u[d[p]]);if(y!==0)return y}return K(l.length,d.length)}(r.mapValue,e.mapValue);default:throw z()}}function Ih(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return K(r,e);const t=Pt(r),n=Pt(e),s=K(t.seconds,n.seconds);return s!==0?s:K(t.nanos,n.nanos)}function Th(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=an(t[s],n[s]);if(i)return i}return K(t.length,n.length)}function wr(r){return sc(r)}function sc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Pt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Rt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return $.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=sc(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${sc(t.fields[o])}`;return s+"}"}(r.mapValue):z()}function Wi(r){switch(on(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lo(r);return e?16+Wi(e):16;case 5:return 2*r.stringValue.length;case 6:return Rt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+Wi(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return mn(n.fields,(i,o)=>{s+=i.length+Wi(o)}),s}(r.mapValue);default:throw z()}}function Mn(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function ic(r){return!!r&&"integerValue"in r}function Bs(r){return!!r&&"arrayValue"in r}function wh(r){return!!r&&"nullValue"in r}function Eh(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Qi(r){return!!r&&"mapValue"in r}function Oo(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ss(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return mn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Ss(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ss(r.arrayValue.values[t]);return e}return Object.assign({},r)}function $f(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const qf={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function sI(r){return"nullValue"in r?Ki:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Mn(sn.empty(),$.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Oo(r)?qf:{mapValue:{}}:z()}function iI(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Mn(sn.empty(),$.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?qf:"mapValue"in r?Oo(r)?{mapValue:{}}:Jt:z()}function bh(r,e){const t=an(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Ah(r,e){const t=an(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Qi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ss(t)}setAll(e){let t=fe.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=Ss(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Qi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Qi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){mn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new De(Ss(this.value))}}function zf(r){const e=[];return mn(r.fields,(t,n)=>{const s=new fe([t]);if(Qi(n)){const i=zf(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ge(e)}/**
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
 */class de{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new de(e,0,H.min(),H.min(),H.min(),De.empty(),0)}static newFoundDocument(e,t,n,s){return new de(e,1,t,H.min(),n,s,0)}static newNoDocument(e,t){return new de(e,2,t,H.min(),H.min(),De.empty(),0)}static newUnknownDocument(e,t){return new de(e,3,t,H.min(),H.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof de&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cn{constructor(e,t){this.position=e,this.inclusive=t}}function Sh(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=$.comparator($.fromName(o.referenceValue),t.key):n=an(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ph(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ut(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class js{constructor(e,t="asc"){this.field=e,this.dir=t}}function oI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Gf{}class ee extends Gf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new aI(e,t,n):t==="array-contains"?new uI(e,n):t==="in"?new Yf(e,n):t==="not-in"?new hI(e,n):t==="array-contains-any"?new dI(e,n):new ee(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new cI(e,n):new lI(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(an(t,this.value)):t!==null&&on(this.value)===on(t)&&this.matchesComparison(an(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class se extends Gf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new se(e,t)}matches(e){return Er(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Er(r){return r.op==="and"}function oc(r){return r.op==="or"}function Bc(r){return Hf(r)&&Er(r)}function Hf(r){for(const e of r.filters)if(e instanceof se)return!1;return!0}function ac(r){if(r instanceof ee)return r.field.canonicalString()+r.op.toString()+wr(r.value);if(Bc(r))return r.filters.map(e=>ac(e)).join(",");{const e=r.filters.map(t=>ac(t)).join(",");return`${r.op}(${e})`}}function Kf(r,e){return r instanceof ee?function(n,s){return s instanceof ee&&n.op===s.op&&n.field.isEqual(s.field)&&ut(n.value,s.value)}(r,e):r instanceof se?function(n,s){return s instanceof se&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&Kf(o,s.filters[c]),!0):!1}(r,e):void z()}function Wf(r,e){const t=r.filters.concat(e);return se.create(t,r.op)}function Qf(r){return r instanceof ee?function(t){return`${t.field.canonicalString()} ${t.op} ${wr(t.value)}`}(r):r instanceof se?function(t){return t.op.toString()+" {"+t.getFilters().map(Qf).join(" ,")+"}"}(r):"Filter"}class aI extends ee{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class cI extends ee{constructor(e,t){super(e,"in",t),this.keys=Jf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lI extends ee{constructor(e,t){super(e,"not-in",t),this.keys=Jf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Jf(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>$.fromName(n.referenceValue))}class uI extends ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bs(t)&&Fs(t.arrayValue,this.value)}}class Yf extends ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fs(this.value.arrayValue,t)}}class hI extends ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Fs(this.value.arrayValue,t)}}class dI extends ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Fs(this.value.arrayValue,n))}}/**
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
 */class fI{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function cc(r,e=null,t=[],n=[],s=null,i=null,o=null){return new fI(r,e,t,n,s,i,o)}function Fn(r){const e=j(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>ac(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Qs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>wr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>wr(n)).join(",")),e.ue=t}return e.ue}function Js(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!oI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Kf(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ph(r.startAt,e.startAt)&&Ph(r.endAt,e.endAt)}function lo(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function uo(r,e){return r.filters.filter(t=>t instanceof ee&&t.field.isEqual(e))}function Rh(r,e,t){let n=Ki,s=!0;for(const i of uo(r,e)){let o=Ki,c=!0;switch(i.op){case"<":case"<=":o=sI(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Ki}bh({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];bh({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Ch(r,e,t){let n=Jt,s=!0;for(const i of uo(r,e)){let o=Jt,c=!0;switch(i.op){case">=":case">":o=iI(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Jt}Ah({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Ah({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class xt{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Xf(r,e,t,n,s,i,o,c){return new xt(r,e,t,n,s,i,o,c)}function Fr(r){return new xt(r)}function kh(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function jc(r){return r.collectionGroup!==null}function fr(r){const e=j(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ie(fe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new js(i,n))}),t.has(fe.keyField().canonicalString())||e.ce.push(new js(fe.keyField(),n))}return e.ce}function je(r){const e=j(r);return e.le||(e.le=ep(e,fr(r))),e.le}function Zf(r){const e=j(r);return e.he||(e.he=ep(e,r.explicitOrderBy)),e.he}function ep(r,e){if(r.limitType==="F")return cc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new js(s.field,i)});const t=r.endAt?new cn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new cn(r.startAt.position,r.startAt.inclusive):null;return cc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function lc(r,e){const t=r.filters.concat([e]);return new xt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ho(r,e,t){return new xt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Ys(r,e){return Js(je(r),je(e))&&r.limitType===e.limitType}function tp(r){return`${Fn(je(r))}|lt:${r.limitType}`}function ur(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Qf(s)).join(", ")}]`),Qs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>wr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>wr(s)).join(",")),`Target(${n})`}(je(r))}; limitType=${r.limitType})`}function Xs(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of fr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const u=Sh(o,c,l);return o.inclusive?u<=0:u<0}(n.startAt,fr(n),s)||n.endAt&&!function(o,c,l){const u=Sh(o,c,l);return o.inclusive?u>=0:u>0}(n.endAt,fr(n),s))}(r,e)}function np(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function rp(r){return(e,t)=>{let n=!1;for(const s of fr(r)){const i=pI(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function pI(r,e,t){const n=r.field.isKeyField()?$.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?an(l,u):z()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return z()}}/**
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
 */class Dt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return jf(this.inner)}size(){return this.innerSize}}/**
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
 */const mI=new ue($.comparator);function He(){return mI}const sp=new ue($.comparator);function Is(...r){let e=sp;for(const t of r)e=e.insert(t.key,t);return e}function ip(r){let e=sp;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function it(){return Ps()}function op(){return Ps()}function Ps(){return new Dt(r=>r.toString(),(r,e)=>r.isEqual(e))}const gI=new ue($.comparator),yI=new ie($.comparator);function Q(...r){let e=yI;for(const t of r)e=e.add(t);return e}const _I=new ie(K);function Uc(){return _I}/**
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
 */function $c(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(e)?"-0":e}}function ap(r){return{integerValue:""+r}}function cp(r,e){return Nf(e)?ap(e):$c(r,e)}/**
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
 */class Mo{constructor(){this._=void 0}}function vI(r,e,t){return r instanceof br?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&No(i)&&(i=Lo(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof Bn?up(r,e):r instanceof jn?hp(r,e):function(s,i){const o=lp(s,i),c=xh(o)+xh(s.Pe);return ic(o)&&ic(s.Pe)?ap(c):$c(s.serializer,c)}(r,e)}function II(r,e,t){return r instanceof Bn?up(r,e):r instanceof jn?hp(r,e):t}function lp(r,e){return r instanceof Ar?function(n){return ic(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class br extends Mo{}class Bn extends Mo{constructor(e){super(),this.elements=e}}function up(r,e){const t=dp(e);for(const n of r.elements)t.some(s=>ut(s,n))||t.push(n);return{arrayValue:{values:t}}}class jn extends Mo{constructor(e){super(),this.elements=e}}function hp(r,e){let t=dp(e);for(const n of r.elements)t=t.filter(s=>!ut(s,n));return{arrayValue:{values:t}}}class Ar extends Mo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function xh(r){return pe(r.integerValue||r.doubleValue)}function dp(r){return Bs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Zs{constructor(e,t){this.field=e,this.transform=t}}function TI(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Bn&&s instanceof Bn||n instanceof jn&&s instanceof jn?vr(n.elements,s.elements,ut):n instanceof Ar&&s instanceof Ar?ut(n.Pe,s.Pe):n instanceof br&&s instanceof br}(r.transform,e.transform)}class wI{constructor(e,t){this.version=e,this.transformResults=t}}class me{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new me}static exists(e){return new me(void 0,e)}static updateTime(e){return new me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Fo{}function fp(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new jr(r.key,me.none()):new Br(r.key,r.data,me.none());{const t=r.data,n=De.empty();let s=new ie(fe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Vt(r.key,n,new Ge(s.toArray()),me.none())}}function EI(r,e,t){r instanceof Br?function(s,i,o){const c=s.value.clone(),l=Vh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Vt?function(s,i,o){if(!Ji(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Vh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(pp(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Rs(r,e,t,n){return r instanceof Br?function(i,o,c,l){if(!Ji(i.precondition,o))return c;const u=i.value.clone(),d=Nh(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(r,e,t,n):r instanceof Vt?function(i,o,c,l){if(!Ji(i.precondition,o))return c;const u=Nh(i.fieldTransforms,l,o),d=o.data;return d.setAll(pp(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,c){return Ji(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function bI(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=lp(n.transform,s||null);i!=null&&(t===null&&(t=De.empty()),t.set(n.field,i))}return t||null}function Dh(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&vr(n,s,(i,o)=>TI(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Br extends Fo{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vt extends Fo{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pp(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Vh(r,e,t){const n=new Map;G(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,II(o,c,t[s]))}return n}function Nh(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,vI(i,o,e))}return n}class jr extends Fo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qc extends Fo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zc{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&EI(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Rs(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Rs(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=op();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=fp(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&vr(this.mutations,e.mutations,(t,n)=>Dh(t,n))&&vr(this.baseMutations,e.baseMutations,(t,n)=>Dh(t,n))}}class Gc{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){G(e.mutations.length===n.length);let s=function(){return gI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Gc(e,t,n,s)}}/**
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
 */class Hc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class mp{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
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
 */class AI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ee,ne;function gp(r){switch(r){default:return z();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function yp(r){if(r===void 0)return Te("GRPC error has no .code"),k.UNKNOWN;switch(r){case Ee.OK:return k.OK;case Ee.CANCELLED:return k.CANCELLED;case Ee.UNKNOWN:return k.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return k.INTERNAL;case Ee.UNAVAILABLE:return k.UNAVAILABLE;case Ee.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ee.NOT_FOUND:return k.NOT_FOUND;case Ee.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ee.ABORTED:return k.ABORTED;case Ee.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ee.DATA_LOSS:return k.DATA_LOSS;default:return z()}}(ne=Ee||(Ee={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let fo=null;/**
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
 */function _p(){return new TextEncoder}/**
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
 */const SI=new Vn([4294967295,4294967295],0);function Lh(r){const e=_p().encode(r),t=new vf;return t.update(e),new Uint8Array(t.digest())}function Oh(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vn([t,n],0),new Vn([s,i],0)]}class Kc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ts(`Invalid padding: ${t}`);if(n<0)throw new Ts(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Vn.fromNumber(this.Ie)}Ee(e,t,n){let s=e.add(t.multiply(Vn.fromNumber(n)));return s.compare(SI)===1&&(s=new Vn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Lh(e),[n,s]=Oh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Kc(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Lh(e),[n,s]=Oh(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ei{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,ti.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ei(H.min(),s,new ue(K),He(),Q())}}class ti{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ti(n,t,Q(),Q(),Q())}}/**
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
 */class Yi{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class vp{constructor(e,t){this.targetId=e,this.me=t}}class Ip{constructor(e,t,n=_e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Mh{constructor(){this.fe=0,this.ge=Bh(),this.pe=_e.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Q(),t=Q(),n=Q();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:z()}}),new ti(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Bh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class PI{constructor(e){this.Le=e,this.Be=new Map,this.ke=He(),this.qe=Fh(),this.Qe=new ue(K)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:z()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,n=e.me.count,s=this.Je(t);if(s){const i=s.target;if(lo(i))if(n===0){const o=new $(i.path);this.Ue(t,o,de.newNoDocument(o,H.min()))}else G(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}fo==null||fo.et(function(d,p,m,y,b){var x,C,V,B,O,q;const M={localCacheCount:d,existenceFilterCount:p.count,databaseId:m.database,projectId:m.projectId},F=p.unchangedNames;return F&&(M.bloomFilter={applied:b===0,hashCount:(x=F==null?void 0:F.hashCount)!==null&&x!==void 0?x:0,bitmapLength:(B=(V=(C=F==null?void 0:F.bits)===null||C===void 0?void 0:C.bitmap)===null||V===void 0?void 0:V.length)!==null&&B!==void 0?B:0,padding:(q=(O=F==null?void 0:F.bits)===null||O===void 0?void 0:O.padding)!==null&&q!==void 0?q:0,mightContain:T=>{var _;return(_=y==null?void 0:y.mightContain(T))!==null&&_!==void 0&&_}}),M}(o,e.me,this.Le.tt(),c,l))}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Rt(n).toUint8Array()}catch(l){if(l instanceof Uf)return We("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Kc(o,s,i)}catch(l){return We(l instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&lo(c.target)){const l=new $(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,de.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=Q();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ei(e,t,this.Qe,this.ke,n);return this.ke=He(),this.qe=Fh(),this.Qe=new ue(K),s}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Mh,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ie(K),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Mh),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Fh(){return new ue($.comparator)}function Bh(){return new ue($.comparator)}const RI={asc:"ASCENDING",desc:"DESCENDING"},CI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kI={and:"AND",or:"OR"};class xI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uc(r,e){return r.useProto3Json||Qs(e)?e:{value:e}}function Sr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tp(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function DI(r,e){return Sr(r,e.toTimestamp())}function we(r){return G(!!r),H.fromTimestamp(function(t){const n=Pt(t);return new ge(n.seconds,n.nanos)}(r))}function Wc(r,e){return hc(r,e).canonicalString()}function hc(r,e){const t=function(s){return new Z(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function wp(r){const e=Z.fromString(r);return G(Dp(e)),e}function Us(r,e){return Wc(r.databaseId,e.path)}function ct(r,e){const t=wp(e);if(t.get(1)!==r.databaseId.projectId)throw new N(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new N(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new $(Ap(t))}function Ep(r,e){return Wc(r.databaseId,e)}function bp(r){const e=wp(r);return e.length===4?Z.emptyPath():Ap(e)}function dc(r){return new Z(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ap(r){return G(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function jh(r,e,t){return{name:Us(r,e),fields:t.value.mapValue.fields}}function Sp(r,e,t){const n=ct(r,e.name),s=we(e.updateTime),i=e.createTime?we(e.createTime):H.min(),o=new De({mapValue:{fields:e.fields}}),c=de.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function VI(r,e){return"found"in e?function(n,s){G(!!s.found),s.found.name,s.found.updateTime;const i=ct(n,s.found.name),o=we(s.found.updateTime),c=s.found.createTime?we(s.found.createTime):H.min(),l=new De({mapValue:{fields:s.found.fields}});return de.newFoundDocument(i,o,c,l)}(r,e):"missing"in e?function(n,s){G(!!s.missing),G(!!s.readTime);const i=ct(n,s.missing),o=we(s.readTime);return de.newNoDocument(i,o)}(r,e):z()}function NI(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(G(d===void 0||typeof d=="string"),_e.fromBase64String(d||"")):(G(d===void 0||d instanceof Buffer||d instanceof Uint8Array),_e.fromUint8Array(d||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?k.UNKNOWN:yp(u.code);return new N(d,u.message||"")}(o);t=new Ip(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=ct(r,n.document.name),i=we(n.document.updateTime),o=n.document.createTime?we(n.document.createTime):H.min(),c=new De({mapValue:{fields:n.document.fields}}),l=de.newFoundDocument(s,i,o,c),u=n.targetIds||[],d=n.removedTargetIds||[];t=new Yi(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=ct(r,n.document),i=n.readTime?we(n.readTime):H.min(),o=de.newNoDocument(s,i),c=n.removedTargetIds||[];t=new Yi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=ct(r,n.document),i=n.removedTargetIds||[];t=new Yi([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new AI(s,i),c=n.targetId;t=new vp(c,o)}}return t}function $s(r,e){let t;if(e instanceof Br)t={update:jh(r,e.key,e.value)};else if(e instanceof jr)t={delete:Us(r,e.key)};else if(e instanceof Vt)t={update:jh(r,e.key,e.data),updateMask:jI(e.fieldMask)};else{if(!(e instanceof qc))return z();t={verify:Us(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof br)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Bn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof jn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ar)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw z()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:DI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(r,e.precondition)),t}function fc(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?me.updateTime(we(i.updateTime)):i.exists!==void 0?me.exists(i.exists):me.none()}(e.currentDocument):me.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)G(c.setToServerValue==="REQUEST_TIME"),l=new br;else if("appendMissingElements"in c){const d=c.appendMissingElements.values||[];l=new Bn(d)}else if("removeAllFromArray"in c){const d=c.removeAllFromArray.values||[];l=new jn(d)}else"increment"in c?l=new Ar(o,c.increment):z();const u=fe.fromServerFormat(c.fieldPath);return new Zs(u,l)}(r,s)):[];if(e.update){e.update.name;const s=ct(r,e.update.name),i=new De({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Ge(u.map(d=>fe.fromServerFormat(d)))}(e.updateMask);return new Vt(s,i,o,t,n)}return new Br(s,i,t,n)}if(e.delete){const s=ct(r,e.delete);return new jr(s,t)}if(e.verify){const s=ct(r,e.verify);return new qc(s,t)}return z()}function LI(r,e){return r&&r.length>0?(G(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?we(s.updateTime):we(i);return o.isEqual(H.min())&&(o=we(i)),new wI(o,s.transformResults||[])}(t,e))):[]}function Pp(r,e){return{documents:[Ep(r,e.path)]}}function Bo(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Ep(r,s);const i=function(u){if(u.length!==0)return xp(se.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:zt(m.field),direction:MI(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=uc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:s}}function Rp(r,e,t,n){const{_t:s,parent:i}=Bo(r,e),o={},c=[];let l=0;return t.forEach(u=>{const d=n?u.alias:"aggregate_"+l++;o[d]=u.alias,u.aggregateType==="count"?c.push({alias:d,count:{}}):u.aggregateType==="avg"?c.push({alias:d,avg:{field:zt(u.fieldPath)}}):u.aggregateType==="sum"&&c.push({alias:d,sum:{field:zt(u.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:c,structuredQuery:s.structuredQuery},parent:s.parent},ut:o,parent:i}}function Cp(r){let e=bp(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){G(n===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const m=kp(p);return m instanceof se&&Bc(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(b){return new js(hr(b.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Qs(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(p){const m=!!p.before,y=p.values||[];return new cn(y,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new cn(y,m)}(t.endAt)),Xf(e,s,o,i,c,"F",l,u)}function OI(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kp(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=hr(t.unaryFilter.field);return ee.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=hr(t.unaryFilter.field);return ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hr(t.unaryFilter.field);return ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hr(t.unaryFilter.field);return ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(r):r.fieldFilter!==void 0?function(t){return ee.create(hr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return se.create(t.compositeFilter.filters.map(n=>kp(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(r):z()}function MI(r){return RI[r]}function FI(r){return CI[r]}function BI(r){return kI[r]}function zt(r){return{fieldPath:r.canonicalString()}}function hr(r){return fe.fromServerFormat(r.fieldPath)}function xp(r){return r instanceof ee?function(t){if(t.op==="=="){if(Eh(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NAN"}};if(wh(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Eh(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NOT_NAN"}};if(wh(t.value))return{unaryFilter:{field:zt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zt(t.field),op:FI(t.op),value:t.value}}}(r):r instanceof se?function(t){const n=t.getFilters().map(s=>xp(s));return n.length===1?n[0]:{compositeFilter:{op:BI(t.op),filters:n}}}(r):z()}function jI(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Dp(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class wt{constructor(e,t,n,s,i=H.min(),o=H.min(),c=_e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vp{constructor(e){this.ct=e}}function UI(r,e){let t;if(e.document)t=Sp(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=$.fromSegments(e.noDocument.path),s=$n(e.noDocument.readTime);t=de.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return z();{const n=$.fromSegments(e.unknownDocument.path),s=$n(e.unknownDocument.version);t=de.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new ge(s[0],s[1]);return H.fromTimestamp(i)}(e.readTime)),t}function Uh(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:po(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Us(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Sr(i,o.version.toTimestamp()),createTime:Sr(i,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Un(e.version)};else{if(!e.isUnknownDocument())return z();n.unknownDocument={path:t.path.toArray(),version:Un(e.version)}}return n}function po(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Un(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function $n(r){const e=new ge(r.seconds,r.nanoseconds);return H.fromTimestamp(e)}function Cn(r,e){const t=(e.baseMutations||[]).map(i=>fc(r.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>fc(r.ct,i)),s=ge.fromMillis(e.localWriteTimeMs);return new zc(e.batchId,s,t,n)}function ws(r){const e=$n(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?$n(r.lastLimboFreeSnapshotVersion):H.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return G(i.documents.length===1),je(Fr(bp(i.documents[0])))}(r.query):function(i){return je(Cp(i))}(r.query),new wt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,_e.fromBase64String(r.resumeToken))}function Np(r,e){const t=Un(e.snapshotVersion),n=Un(e.lastLimboFreeSnapshotVersion);let s;s=lo(e.target)?Pp(r.ct,e.target):Bo(r.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Fn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Qc(r){const e=Cp({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ho(e,e.limit,"L"):e}function Ma(r,e){return new Hc(e.largestBatchId,fc(r.ct,e.overlayMutation))}function $h(r,e){const t=e.path.lastSegment();return[r,Be(e.path.popLast()),t]}function qh(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Un(n.readTime),documentKey:Be(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class $I{getBundleMetadata(e,t){return zh(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:$n(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return zh(e).put(function(s){return{bundleId:s.id,createTime:Un(we(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Gh(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:Qc(i.bundledQuery),readTime:$n(i.readTime)}}(n)})}saveNamedQuery(e,t){return Gh(e).put(function(s){return{name:s.name,readTime:Un(we(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function zh(r){return Ae(r,"bundles")}function Gh(r){return Ae(r,"namedQueries")}/**
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
 */class jo{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new jo(e,n)}getOverlay(e,t){return fs(e).get($h(this.userId,t)).next(n=>n?Ma(this.serializer,n):null)}getOverlays(e,t){const n=it();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new Hc(t,o);s.push(this.ht(e,c))}),S.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(Be(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(fs(e).j("collectionPathOverlayIndex",c))}),S.waitFor(i)}getOverlaysForCollection(e,t,n){const s=it(),i=Be(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return fs(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const u=Ma(this.serializer,l);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=it();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return fs(e).J({index:"collectionGroupOverlayIndex",range:c},(l,u,d)=>{const p=Ma(this.serializer,u);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):d.done()}).next(()=>i)}ht(e,t){return fs(e).put(function(s,i,o){const[c,l,u]=$h(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:$s(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function fs(r){return Ae(r,"documentOverlays")}/**
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
 */class qI{Pt(e){return Ae(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?_e.fromUint8Array(n):_e.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class kn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(pe(e.integerValue));else if("doubleValue"in e){const n=pe(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),Os(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=Pt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Rt(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?$f(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Oo(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):z()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const s of Object.keys(n))this.Vt(s,t),this.Tt(n[s],t)}wt(e,t){var n,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(pe(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const s of n)this.Tt(s,t)}yt(e,t){this.dt(t,37),$.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}kn.vt=new kn;function zI(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Hh(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=zI(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class GI{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),n=Hh(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),n=Hh(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class HI{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class KI{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class ps{constructor(){this.jt=new GI,this.Ht=new HI(this.jt),this.Jt=new KI(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class xn{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new xn(this.indexId,this.documentKey,this.arrayValue,n)}}function jt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Kh(r.arrayValue,e.arrayValue),t!==0?t:(t=Kh(r.directionalValue,e.directionalValue),t!==0?t:$.comparator(r.documentKey,e.documentKey)))}function Kh(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class Wh{constructor(e){this.Xt=new ie((t,n)=>fe.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(G(e.collectionGroup===this.collectionId),this.nn)return!1;const t=nc(e);if(t!==void 0&&!this.sn(t))return!1;const n=Pn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ie(fe.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Nn(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Nn(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Nn(n.field,n.dir==="asc"?0:1)));return new Ir(Ir.UNKNOWN_ID,this.collectionId,t,Tr.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Lp(r){var e,t;if(G(r instanceof ee||r instanceof se),r instanceof ee){if(r instanceof Yf){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ee.create(r.field,"==",i)))||[];return se.create(s,"or")}return r}const n=r.filters.map(s=>Lp(s));return se.create(n,r.op)}function WI(r){if(r.getFilters().length===0)return[];const e=gc(Lp(r));return G(Op(e)),pc(e)||mc(e)?[e]:e.getFilters()}function pc(r){return r instanceof ee}function mc(r){return r instanceof se&&Bc(r)}function Op(r){return pc(r)||mc(r)||function(t){if(t instanceof se&&oc(t)){for(const n of t.getFilters())if(!pc(n)&&!mc(n))return!1;return!0}return!1}(r)}function gc(r){if(G(r instanceof ee||r instanceof se),r instanceof ee)return r;if(r.filters.length===1)return gc(r.filters[0]);const e=r.filters.map(n=>gc(n));let t=se.create(e,r.op);return t=mo(t),Op(t)?t:(G(t instanceof se),G(Er(t)),G(t.filters.length>1),t.filters.reduce((n,s)=>Jc(n,s)))}function Jc(r,e){let t;return G(r instanceof ee||r instanceof se),G(e instanceof ee||e instanceof se),t=r instanceof ee?e instanceof ee?function(s,i){return se.create([s,i],"and")}(r,e):Qh(r,e):e instanceof ee?Qh(e,r):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),Er(s)&&Er(i))return Wf(s,i.getFilters());const o=oc(s)?s:i,c=oc(s)?i:s,l=o.filters.map(u=>Jc(u,c));return se.create(l,"or")}(r,e),mo(t)}function Qh(r,e){if(Er(e))return Wf(e,r.getFilters());{const t=e.filters.map(n=>Jc(r,n));return se.create(t,"or")}}function mo(r){if(G(r instanceof ee||r instanceof se),r instanceof ee)return r;const e=r.getFilters();if(e.length===1)return mo(e[0]);if(Hf(r))return r;const t=e.map(s=>mo(s)),n=[];return t.forEach(s=>{s instanceof ee?n.push(s):s instanceof se&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:se.create(n,r.op)}/**
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
 */class QI{constructor(){this.un=new Yc}addToCollectionParentIndex(e,t){return this.un.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(Qe.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(Qe.min())}updateCollectionGroup(e,t,n){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Yc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ie(Z.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ie(Z.comparator)).toArray()}}/**
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
 */const Oi=new Uint8Array(0);class JI{constructor(e,t){this.databaseId=t,this.cn=new Yc,this.ln=new Dt(n=>Fn(n),(n,s)=>Js(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:Be(s)};return Jh(e).put(i)}return S.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[Rf(t),""],!1,!0);return Jh(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(st(o.parent))}return n})}addFieldIndex(e,t){const n=ms(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=ar(e);return i.next(c=>{o.put(qh(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=ms(e),s=ar(e),i=or(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=ms(e),n=or(e),s=ar(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return S.forEach(this.hn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Wh(n).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=or(e);let s=!0;const i=new Map;return S.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=Q();const c=[];return S.forEach(i,(l,u)=>{L("IndexedDbIndexManager",`Using index ${function(O){return`id=${O.indexId}|cg=${O.collectionGroup}|f=${O.fields.map(q=>`${q.fieldPath}:${q.kind}`).join(",")}`}(l)} to execute ${Fn(t)}`);const d=function(O,q){const M=nc(q);if(M===void 0)return null;for(const F of uo(O,M.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(u,l),p=function(O,q){const M=new Map;for(const F of Pn(q))for(const T of uo(O,F.fieldPath))switch(T.op){case"==":case"in":M.set(F.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return M.set(F.fieldPath.canonicalString(),T.value),Array.from(M.values())}return null}(u,l),m=function(O,q){const M=[];let F=!0;for(const T of Pn(q)){const _=T.kind===0?Rh(O,T.fieldPath,O.startAt):Ch(O,T.fieldPath,O.startAt);M.push(_.value),F&&(F=_.inclusive)}return new cn(M,F)}(u,l),y=function(O,q){const M=[];let F=!0;for(const T of Pn(q)){const _=T.kind===0?Ch(O,T.fieldPath,O.endAt):Rh(O,T.fieldPath,O.endAt);M.push(_.value),F&&(F=_.inclusive)}return new cn(M,F)}(u,l),b=this.In(l,u,m),x=this.In(l,u,y),C=this.Tn(l,u,p),V=this.En(l.indexId,d,b,m.inclusive,x,y.inclusive,C);return S.forEach(V,B=>n.G(B,t.limit).next(O=>{O.forEach(q=>{const M=$.fromSegments(q.documentKey);o.has(M)||(o=o.add(M),c.push(M))})}))}).next(()=>c)}return S.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=WI(se.create(e.filters,"and")).map(n=>cc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),u=l/(t!=null?t.length:1),d=[];for(let p=0;p<l;++p){const m=t?this.dn(t[p/u]):Oi,y=this.An(e,m,n[p%u],s),b=this.Rn(e,m,i[p%u],o),x=c.map(C=>this.An(e,m,C,!0));d.push(...this.createRange(y,b,x))}return d}An(e,t,n,s){const i=new xn(e,$.empty(),t,n);return s?i:i.Zt()}Rn(e,t,n,s){const i=new xn(e,$.empty(),t,n);return s?i.Zt():i}Pn(e,t){const n=new Wh(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.hn(t);return S.forEach(s,i=>this.Pn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let u=new ie(fe.comparator),d=!1;for(const p of l.filters)for(const m of p.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?d=!0:u=u.add(m.field));for(const p of l.orderBy)p.field.isKeyField()||(u=u.add(p.field));return u.size+(d?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Vn(e,t){const n=new ps;for(const s of Pn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Yt(s.kind);kn.vt.It(i,o)}return n.zt()}dn(e){const t=new ps;return kn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new ps;return kn.vt.It(Mn(this.databaseId,t),n.Yt(function(i){const o=Pn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let s=[];s.push(new ps);let i=0;for(const o of Pn(e)){const c=n[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&Bs(c))s=this.gn(s,o,c);else{const u=l.Yt(o.kind);kn.vt.It(c,u)}}return this.pn(s)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new ps;l.seed(c.zt()),kn.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(n=>n instanceof ee&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=ms(e),s=ar(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return S.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(d,p){const m=p?new Tr(p.sequenceNumber,new Qe($n(p.readTime),new $(st(p.documentKey)),p.largestBatchId)):Tr.empty(),y=d.fields.map(([b,x])=>new Nn(fe.fromServerFormat(b),x));return new Ir(d.indexId,d.collectionGroup,y,m)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:K(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=ms(e),i=ar(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>S.forEach(c,l=>i.put(qh(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return S.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?S.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),S.forEach(c,l=>this.wn(e,s,l).next(u=>{const d=this.Sn(i,l);return u.isEqual(d)?S.resolve():this.bn(e,i,l,u,d)}))))})}Dn(e,t,n,s){return or(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,s){return or(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const s=or(e);let i=new ie(jt);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,c)=>{i=i.add(new xn(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let n=new ie(jt);const s=this.Vn(t,e);if(s==null)return n;const i=nc(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Bs(o))for(const c of o.arrayValue.values||[])n=n.add(new xn(t.indexId,e.key,this.dn(c),s))}else n=n.add(new xn(t.indexId,e.key,Oi,s));return n}bn(e,t,n,s,i){L("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,u,d,p,m){const y=l.getIterator(),b=u.getIterator();let x=ir(y),C=ir(b);for(;x||C;){let V=!1,B=!1;if(x&&C){const O=d(x,C);O<0?B=!0:O>0&&(V=!0)}else x!=null?B=!0:V=!0;V?(p(C),C=ir(b)):B?(m(x),x=ir(y)):(x=ir(y),C=ir(b))}}(s,i,jt,c=>{o.push(this.Dn(e,t,n,c))},c=>{o.push(this.vn(e,t,n,c))}),S.waitFor(o)}yn(e){let t=1;return ar(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>jt(o,c)).filter((o,c,l)=>!c||jt(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=jt(o,e),l=jt(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Oi,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Oi,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return jt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Yh)}getMinOffset(e,t){return S.mapArray(this.hn(t),n=>this.Pn(e,n).next(s=>s||z())).next(Yh)}}function Jh(r){return Ae(r,"collectionParents")}function or(r){return Ae(r,"indexEntries")}function ms(r){return Ae(r,"indexConfiguration")}function ar(r){return Ae(r,"indexState")}function Yh(r){G(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Oc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Qe(e.readTime,e.documentKey,t)}/**
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
 */const Xh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Fe{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Fe(e,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Mp(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.J({range:o},(d,p,m)=>(c++,m.delete()));i.push(l.next(()=>{G(c===1)}));const u=[];for(const d of t.mutations){const p=Lf(e,d.key.path,t.batchId);i.push(s.delete(p)),u.push(d.key)}return S.waitFor(i).next(()=>u)}function go(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw z();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(41943040,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);class Uo{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(e,t,n,s){G(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Uo(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ut(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=dr(e),o=Ut(e);return o.add({}).next(c=>{G(typeof c=="number");const l=new zc(c,t,n,s),u=function(y,b,x){const C=x.baseMutations.map(B=>$s(y.ct,B)),V=x.mutations.map(B=>$s(y.ct,B));return{userId:b,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:C,mutations:V}}(this.serializer,this.userId,l),d=[];let p=new ie((m,y)=>K(m.canonicalString(),y.canonicalString()));for(const m of s){const y=Lf(this.userId,m.key.path,c);p=p.add(m.key.path.popLast()),d.push(o.put(u)),d.push(i.put(y,Mv))}return p.forEach(m=>{d.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),S.waitFor(d).next(()=>l)})}lookupMutationBatch(e,t){return Ut(e).get(t).next(n=>n?(G(n.userId===this.userId),Cn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?S.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Ut(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(G(c.batchId>=n),i=Cn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Ut(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ut(e).U("userMutationsIndex",t).next(n=>n.map(s=>Cn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Hi(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return dr(e).J({range:s},(o,c,l)=>{const[u,d,p]=o,m=st(d);if(u===this.userId&&t.path.isEqual(m))return Ut(e).get(p).next(y=>{if(!y)throw z();G(y.userId===this.userId),i.push(Cn(this.serializer,y))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(K);const s=[];return t.forEach(i=>{const o=Hi(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=dr(e).J({range:c},(u,d,p)=>{const[m,y,b]=u,x=st(y);m===this.userId&&i.path.isEqual(x)?n=n.add(b):p.done()});s.push(l)}),S.waitFor(s).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Hi(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new ie(K);return dr(e).J({range:o},(l,u,d)=>{const[p,m,y]=l,b=st(m);p===this.userId&&n.isPrefixOf(b)?b.length===s&&(c=c.add(y)):d.done()}).next(()=>this.xn(e,c))}xn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(Ut(e).get(i).next(o=>{if(o===null)throw z();G(o.userId===this.userId),n.push(Cn(this.serializer,o))}))}),S.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return Mp(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),S.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return dr(e).J({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=st(i[1]);s.push(l)}else c.done()}).next(()=>{G(s.length===0)})})}containsKey(e,t){return Fp(e,this.userId,t)}Nn(e){return Bp(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Fp(r,e,t){const n=Hi(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return dr(r).J({range:i,H:!0},(c,l,u)=>{const[d,p,m]=c;d===e&&p===s&&(o=!0),u.done()}).next(()=>o)}function Ut(r){return Ae(r,"mutations")}function dr(r){return Ae(r,"documentMutations")}function Bp(r){return Ae(r,"mutationQueues")}/**
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
 */class qn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new qn(0)}static kn(){return new qn(-1)}}/**
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
 */class YI{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new qn(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>H.fromTimestamp(new ge(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>cr(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(G(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return cr(e).J((o,c)=>{const l=ws(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>S.waitFor(i)).next(()=>s)}forEachTarget(e,t){return cr(e).J((n,s)=>{const i=ws(s);t(i)})}qn(e){return Zh(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Qn(e,t){return Zh(e).put("targetGlobalKey",t)}Kn(e,t){return cr(e).put(Np(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=Fn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return cr(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const u=ws(c);Js(t,u.target)&&(i=u,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=Gt(e);return t.forEach(o=>{const c=Be(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),S.waitFor(s)}removeMatchingKeys(e,t,n){const s=Gt(e);return S.forEach(t,i=>{const o=Be(i.path);return S.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=Gt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Gt(e);let i=Q();return s.J({range:n,H:!0},(o,c,l)=>{const u=st(o[1]),d=new $(u);i=i.add(d)}).next(()=>i)}containsKey(e,t){const n=Be(t.path),s=IDBKeyRange.bound([n],[Rf(n)],!1,!0);let i=0;return Gt(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ot(e,t){return cr(e).get(t).next(n=>n?ws(n):null)}}function cr(r){return Ae(r,"targets")}function Zh(r){return Ae(r,"targetGlobal")}function Gt(r){return Ae(r,"targetDocuments")}/**
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
 */function ed([r,e],[t,n]){const s=K(r,t);return s===0?K(e,n):s}class XI{constructor(e){this.Un=e,this.buffer=new ie(ed),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ed(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class jp{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){L("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){pn(t)?L("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await fn(t)}await this.Hn(3e5)})}}class ZI{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return S.resolve(ze.oe);const n=new XI(t);return this.Jn.forEachTarget(e,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Xh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xh):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,s,i,o,c,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(u=Date.now(),lr()<=X.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Up(r,e){return new ZI(r,e)}/**
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
 */class eT{constructor(e,t){this.db=e,this.garbageCollector=Up(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,s)=>t(s))}addReference(e,t,n){return Mi(e,n)}removeReference(e,t,n){return Mi(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Mi(e,t)}nr(e,t){return function(s,i){let o=!1;return Bp(s).Y(c=>Fp(s,c,i).next(l=>(l&&(o=!0),S.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(u=>{if(!u)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,H.min()),Gt(e).delete(function(p){return[0,Be(p.path)]}(o))))});s.push(l)}}).next(()=>S.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Mi(e,t)}tr(e,t){const n=Gt(e);let s,i=ze.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:u})=>{o===0?(i!==ze.oe&&t(new $(st(s)),i),i=u,s=l):i=ze.oe}).next(()=>{i!==ze.oe&&t(new $(st(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Mi(r,e){return Gt(r).put(function(n,s){return{targetId:0,path:Be(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class $p{constructor(){this.changes=new Dt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,de.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?S.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class tT{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return bn(e).put(n)}removeEntry(e,t,n){return bn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],po(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=de.newInvalidDocument(t);return bn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(gs(t))},(s,i)=>{n=this.ir(t,i)}).next(()=>n)}sr(e,t){let n={size:0,document:de.newInvalidDocument(t)};return bn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(gs(t))},(s,i)=>{n={document:this.ir(t,i),size:go(i)}}).next(()=>n)}getEntries(e,t){let n=He();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);n=n.insert(s,o)}).next(()=>n)}ar(e,t){let n=He(),s=new ue($.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);n=n.insert(i,c),s=s.insert(i,go(o))}).next(()=>({documents:n,ur:s}))}_r(e,t,n){if(t.isEmpty())return S.resolve();let s=new ie(rd);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(gs(s.first()),gs(s.last())),o=s.getIterator();let c=o.getNext();return bn(e).J({index:"documentKeyIndex",range:i},(l,u,d)=>{const p=$.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&rd(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,u),c=o.hasNext()?o.getNext():null),c?d.$(gs(c)):d.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),po(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bn(e).U(IDBKeyRange.bound(c,l,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let d=He();for(const p of u){const m=this.ir($.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);m.isFoundDocument()&&(Xs(t,m)||s.has(m.key))&&(d=d.insert(m.key,m))}return d})}getAllFromCollectionGroup(e,t,n,s){let i=He();const o=nd(t,n),c=nd(t,Qe.max());return bn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,u,d)=>{const p=this.ir($.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(p.key,p),i.size===s&&d.done()}).next(()=>i)}newChangeBuffer(e){return new nT(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return td(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}rr(e,t){return td(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=UI(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(H.min())))return n}return de.newInvalidDocument(e)}}function qp(r){return new tT(r)}class nT extends $p{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Dt(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new ie((i,o)=>K(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Uh(this.cr.serializer,o);s=s.add(i.path.popLast());const u=go(l);n+=u-c.size,t.push(this.cr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=Uh(this.cr.serializer,o.convertToNoDocument(H.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,n)),S.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function td(r){return Ae(r,"remoteDocumentGlobal")}function bn(r){return Ae(r,"remoteDocumentsV14")}function gs(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function nd(r,e){const t=e.documentKey.path.toArray();return[r,po(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function rd(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=K(t[i],n[i]),s)return s;return s=K(t.length,n.length),s||(s=K(t[t.length-2],n[n.length-2]),s||K(t[t.length-1],n[n.length-1]))}/**
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
 */class rT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class zp{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Rs(n.mutation,s,Ge.empty(),ge.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Q()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Q()){const s=it();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Is();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=it();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Q()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=He();const o=Ps(),c=function(){return Ps()}();return t.forEach((l,u)=>{const d=n.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Vt)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Rs(d.mutation,u,d.mutation.getFieldMask(),ge.now())):o.set(u.key,Ge.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var p;return c.set(u,new rT(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Ps();let s=new ue((o,c)=>o-c),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let d=n.get(l)||Ge.empty();d=c.applyToLocalView(u,d),n.set(l,d);const p=(s.get(c.batchId)||Q()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=op();d.forEach(m=>{if(!i.has(m)){const y=fp(t.get(m),n.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return S.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):S.resolve(it());let c=-1,l=i;return o.next(u=>S.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?S.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Q())).next(d=>({batchId:c,changes:ip(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(n=>{let s=Is();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Is();return this.indexManager.getCollectionParents(e,i).next(c=>S.forEach(c,l=>{const u=function(p,m){return new xt(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,de.newInvalidDocument(d)))});let c=Is();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&Rs(d.mutation,u,Ge.empty(),ge.now()),Xs(t,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class sT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return S.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:we(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:Qc(s.bundledQuery),readTime:we(s.readTime)}}(t)),S.resolve()}}/**
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
 */class iT{constructor(){this.overlays=new ue($.comparator),this.Ir=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const n=it();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.ht(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),S.resolve()}getOverlaysForCollection(e,t,n){const s=it(),i=t.length+1,o=new $(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ue((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let d=i.get(u.largestBatchId);d===null&&(d=it(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=it(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return S.resolve(c)}ht(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Hc(t,n));let i=this.Ir.get(t);i===void 0&&(i=Q(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
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
 */class oT{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class Xc{constructor(){this.Tr=new ie(Se.Er),this.dr=new ie(Se.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Se(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Se(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new $(new Z([])),n=new Se(t,e),s=new Se(t,e+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new $(new Z([])),n=new Se(t,e),s=new Se(t,e+1);let i=Q();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Se(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Se{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return $.comparator(e.key,t.key)||K(e.wr,t.wr)}static Ar(e,t){return K(e.wr,t.wr)||$.comparator(e.key,t.key)}}/**
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
 */class aT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ie(Se.Er)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zc(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Se(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,t){return S.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.vr(n),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const c=this.Dr(o.wr);i.push(c)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ie(K);return t.forEach(s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{n=n.add(c.wr)})}),S.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;$.isDocumentKey(i)||(i=i.child(""));const o=new Se(new $(i),0);let c=new ie(K);return this.br.forEachWhile(l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.wr)),!0)},o),S.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const s=this.Dr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return S.forEach(t.mutations,s=>{const i=new Se(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Se(t,0),s=this.br.firstAfterOrEqual(n);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class cT{constructor(e){this.Mr=e,this.docs=function(){return new ue($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return S.resolve(n?n.document.mutableCopy():de.newInvalidDocument(t))}getEntries(e,t){let n=He();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():de.newInvalidDocument(s))}),S.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=He();const o=t.path,c=new $(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Oc(kf(d),n)<=0||(s.has(d.key)||Xs(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,n,s){z()}Or(e,t){return S.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new lT(this)}getSize(e){return S.resolve(this.size)}}class lT extends $p{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(n)}),S.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class uT{constructor(e){this.persistence=e,this.Nr=new Dt(t=>Fn(t),Js),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Xc,this.targetCount=0,this.kr=qn.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),S.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new qn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Kn(t),S.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return S.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),S.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return S.resolve(n)}containsKey(e,t){return S.resolve(this.Br.containsKey(t))}}/**
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
 */class Zc{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ze(0),this.Kr=!1,this.Kr=!0,this.$r=new oT,this.referenceDelegate=e(this),this.Ur=new uT(this),this.indexManager=new QI,this.remoteDocumentCache=function(s){return new cT(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Vp(t),this.Gr=new sT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new aT(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){L("MemoryPersistence","Starting transaction:",e);const s=new hT(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return S.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class hT extends Df{constructor(e){super(),this.currentSequenceNumber=e}}class $o{constructor(e){this.persistence=e,this.Jr=new Xc,this.Yr=null}static Zr(e){return new $o(e)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),S.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Xr,n=>{const s=$.fromPath(n);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return S.or([()=>S.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}class yo{constructor(e,t){this.persistence=e,this.ti=new Dt(n=>Be(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Up(this,t)}static Zr(e,t){return new yo(e,t)}zr(){}jr(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Yn(e){const t=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}Zn(e,t){return S.forEach(this.ti,(n,s)=>this.nr(e,n,s).next(i=>i?S.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Or(e,o=>this.nr(e,o,t).next(c=>{c||(n++,i.removeEntry(o,H.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ti.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ti.set(n,e.currentSequenceNumber),S.resolve()}removeReference(e,t,n){return this.ti.set(n,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.ti.set(t,e.currentSequenceNumber),S.resolve()}Wr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wi(e.data.value)),t}nr(e,t,n){return S.or([()=>this.persistence.Hr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ti.get(t);return S.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class dT{constructor(e){this.serializer=e}O(e,t,n,s){const i=new Vo("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yh,{unique:!0}),l.createObjectStore("documentMutations")}(e),sd(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=S.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),sd(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",d)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",yh,{unique:!0});const p=u.store("mutations"),m=d.map(y=>p.put(y));return S.waitFor(m)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ni(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&s>=7&&(o=o.next(()=>this.ii(i))),n<8&&s>=8&&(o=o.next(()=>this.si(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.oi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:Qv});u.createIndex("collectionPathOverlayIndex",Jv,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",Yv,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:Fv});u.createIndex("documentKeyIndex",Bv),u.createIndex("collectionGroupIndex",jv)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Gv}).createIndex("sequenceNumberIndex",Hv,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:Kv}).createIndex("documentKeyIndex",Wv,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=go(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>S.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>S.forEach(c,l=>{G(l.userId===i.userId);const u=Cn(this.serializer,l);return Mp(e,i.userId,u).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,c)=>{const l=new Z(o),u=function(p){return[0,Be(p)]}(l);i.push(t.get(u).next(d=>d?S.resolve():(p=>t.put({targetId:0,path:Be(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>S.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:zv});const n=t.store("collectionParents"),s=new Yc,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:Be(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new Z(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],u)=>{const d=st(c);return i(d.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,s)=>{const i=ws(s),o=Np(this.serializer,i);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new $(Z.fromString(p.document.name).popFirst(5)):p.noDocument?$.fromSegments(p.noDocument.path):p.unknownDocument?$.fromSegments(p.unknownDocument.path):z()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(u))}).next(()=>S.waitFor(s))}ai(e,t){const n=t.store("mutations"),s=qp(this.serializer),i=new Zc($o.Zr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(l=>{var u;let d=(u=c.get(l.userId))!==null&&u!==void 0?u:Q();Cn(this.serializer,l).keys().forEach(p=>d=d.add(p)),c.set(l.userId,d)}),S.forEach(c,(l,u)=>{const d=new Pe(u),p=jo.lt(this.serializer,d),m=i.getIndexManager(d),y=Uo.lt(d,this.serializer,m,i.referenceDelegate);return new zp(s,y,p,m).recalculateAndSaveOverlaysForDocumentKeys(new rc(t,ze.oe),l).next()})})}}function sd(r){r.createObjectStore("targetDocuments",{keyPath:$v}).createIndex("documentTargetsIndex",qv,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Uv,{unique:!0}),r.createObjectStore("targetGlobal")}const Fa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class el{constructor(e,t,n,s,i,o,c,l,u,d,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=o,this.document=c,this.ci=u,this.li=d,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!el.D())throw new N(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new eT(this,s),this.Ai=t+"main",this.serializer=new Vp(l),this.Ri=new at(this.Ai,this.hi,new dT(this.serializer)),this.$r=new qI,this.Ur=new YI(this.referenceDelegate,this.serializer),this.remoteDocumentCache=qp(this.serializer),this.Gr=new $I,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,d===!1&&Te("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new N(k.FAILED_PRECONDITION,Fa);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new ze(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Fi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(pn(e))return L("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return L("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ys(e).get("owner").next(t=>S.resolve(this.vi(t)))}Ci(e){return Fi(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Ae(t,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return S.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?S.resolve(!0):ys(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new N(k.FAILED_PRECONDITION,Fa);return!1}}return!(!this.networkEnabled||!this.inForeground)||Fi(e).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&L("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new rc(e,ze.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Fi(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Uo.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new JI(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return jo.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){L("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?eI:l===16?Zv:l===15?Fc:l===14?Ff:l===13?Mf:l===12?Xv:l===11?Of:void z()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new rc(c,this.Qr?this.Qr.next():ze.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Te(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new N(k.FAILED_PRECONDITION,xf);return n(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return ys(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new N(k.FAILED_PRECONDITION,Fa)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ys(e).put("owner",t)}static D(){return at.D()}bi(e){const t=ys(e);return t.get("owner").next(n=>this.vi(n)?(L("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):S.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Te(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;df()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return L("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Te("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Te("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ys(r){return Ae(r,"owner")}function Fi(r){return Ae(r,"clientMetadata")}function tl(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class nl{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=s}static Wi(e,t){let n=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nl(e,t.fromCache,n,s)}}/**
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
 */class fT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Gp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return df()?8:Vf(be())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new fT;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,n,s){return n.documentReadCount<this.ji?(lr()<=X.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",ur(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),S.resolve()):(lr()<=X.DEBUG&&L("QueryEngine","Query:",ur(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(lr()<=X.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",ur(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):S.resolve())}Yi(e,t){if(kh(t))return S.resolve(null);let n=je(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ho(t,null,"F"),n=je(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=Q(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const u=this.ts(t,c);return this.ns(t,u,o,l.readTime)?this.Yi(e,ho(t,null,"F")):this.rs(e,u,t,l)}))})))}Zi(e,t,n,s){return kh(t)||s.isEqual(H.min())?S.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const o=this.ts(t,i);return this.ns(t,o,n,s)?S.resolve(null):(lr()<=X.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ur(t)),this.rs(e,o,t,Cf(s,-1)).next(c=>c))})}ts(e,t){let n=new ie(rp(e));return t.forEach((s,i)=>{Xs(e,i)&&(n=n.add(i))}),n}ns(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,n){return lr()<=X.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",ur(t)),this.Ji.getDocumentsMatchingQuery(e,t,Qe.min(),n)}rs(e,t,n,s){return this.Ji.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class pT{constructor(e,t,n,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ue(K),this._s=new Dt(i=>Fn(i),Js),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Hp(r,e,t,n){return new pT(r,e,t,n)}async function Kp(r,e){const t=j(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=Q();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(n,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:c}))})})}function mT(r,e){const t=j(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,m=p.keys();let y=S.resolve();return m.forEach(b=>{y=y.next(()=>d.getEntry(l,b)).next(x=>{const C=u.docVersions.get(b);G(C!==null),x.version.compareTo(C)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),d.addEntry(x)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=Q();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Wp(r){const e=j(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function gT(r,e){const t=j(r),n=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(t.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,d.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(_e.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,n)),s=s.insert(p,y),function(x,C,V){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(m,y,d)&&c.push(t.Ur.updateTargetData(i,y))});let l=He(),u=Q();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(Qp(i,o,e.documentUpdates).next(d=>{l=d.Ps,u=d.Is})),!n.isEqual(H.min())){const d=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(d)}return S.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.os=s,i))}function Qp(r,e,t){let n=Q(),s=Q();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=He();return t.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):L("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function yT(r,e){const t=j(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Pr(r,e){const t=j(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ur.getTargetData(n,e).next(i=>i?(s=i,S.resolve(s)):t.Ur.allocateTargetId(n).next(o=>(s=new wt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function Rr(r,e,t){const n=j(r),s=n.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!pn(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(s.target)}function _o(r,e,t){const n=j(r);let s=H.min(),i=Q();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=j(l),m=p._s.get(d);return m!==void 0?S.resolve(p.os.get(m)):p.Ur.getTargetData(u,d)}(n,o,je(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?s:H.min(),t?i:Q())).next(c=>(Xp(n,np(e),c),{documents:c,Ts:i})))}function Jp(r,e){const t=j(r),n=j(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,e).next(o=>o?o.target:null))}function Yp(r,e){const t=j(r),n=t.us.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,Cf(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Xp(t,e,s),s))}function Xp(r,e,t){let n=r.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(e,n)}async function _T(r,e,t,n){const s=j(r);let i=Q(),o=He();for(const u of t){const d=e.Es(u.metadata.name);u.document&&(i=i.add(d));const p=e.ds(u);p.setReadTime(e.As(u.metadata.readTime)),o=o.insert(d,p)}const c=s.cs.newChangeBuffer({trackRemovals:!0}),l=await Pr(s,function(d){return je(Fr(Z.fromString(`__bundle__/docs/${d}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>Qp(u,c,o).next(d=>(c.apply(u),d)).next(d=>s.Ur.removeMatchingKeysForTargetId(u,l.targetId).next(()=>s.Ur.addMatchingKeys(u,i,l.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(u,d.Ps,d.Is)).next(()=>d.Ps)))}async function vT(r,e,t=Q()){const n=await Pr(r,je(Qc(e.bundledQuery))),s=j(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=we(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return s.Gr.saveNamedQuery(i,e);const c=n.withResumeToken(_e.EMPTY_BYTE_STRING,o);return s.os=s.os.insert(c.targetId,c),s.Ur.updateTargetData(i,c).next(()=>s.Ur.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.Ur.addMatchingKeys(i,t,n.targetId)).next(()=>s.Gr.saveNamedQuery(i,e))})}function id(r,e){return`firestore_clients_${r}_${e}`}function od(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function Ba(r,e){return`firestore_targets_${r}_${e}`}class vo{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Rs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new N(s.error.code,s.error.message))),o?new vo(e,t,s.state,i):(Te("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Cs{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new N(n.error.code,n.error.message))),i?new Cs(e,n.state,s):(Te("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Io{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Uc();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=Nf(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Io(e,i):(Te("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class rl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new rl(t.clientId,t.onlineState):(Te("SharedClientState",`Failed to parse online state: ${e}`),null)}}class yc{constructor(){this.activeTargetIds=Uc()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ja{constructor(e,t,n,s,i){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ue(K),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=id(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new yc),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const s=this.getItem(id(this.persistenceKey,n));if(s){const i=Io.Rs(n,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Ba(this.persistenceKey,e));if(s){const i=Cs.Rs(e,s);i&&(n=i.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ba(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return L("SharedClientState","READ",e,t),t}setItem(e,t){L("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){L("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(L("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Te("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(i){let o=ze.oe;if(i!=null)try{const c=JSON.parse(i);G(typeof c=="number"),o=c}catch(c){Te("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==ze.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const s=new vo(this.currentUser,e,t,n),i=od(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=od(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const s=Ba(this.persistenceKey,e),i=new Cs(e,t,n);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return Io.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return vo.Rs(new Pe(i),s,t)}Ys(e,t){const n=this.Ms.exec(e),s=Number(n[1]);return Cs.Rs(s,t)}Ls(e){return rl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);L("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(n),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Uc();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Zp{constructor(){this.so=new yc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new yc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class IT{_o(e){}shutdown(){}}/**
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
 */class ad{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bi=null;function Ua(){return Bi===null?Bi=function(){return 268435456+Math.round(2147483648*Math.random())}():Bi++,"0x"+Bi.toString(16)}/**
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
 */const TT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wT{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Me="WebChannelConnection";class ET extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,n,s,i,o){const c=Ua(),l=this.xo(t,n.toUriEncodedString());L("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(t,l,u,s).then(d=>(L("RestConnection",`Received RPC '${t}' ${c}: `,d),d),d=>{throw We("RestConnection",`RPC '${t}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}Lo(t,n,s,i,o,c){return this.Mo(t,n,s,i,o)}Oo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,n){const s=TT[t];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,s){const i=Ua();return new Promise((o,c)=>{const l=new If;l.setWithCredentials(!0),l.listenOnce(Tf.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Gi.NO_ERROR:const d=l.getResponseJson();L(Me,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Gi.TIMEOUT:L(Me,`RPC '${e}' ${i} timed out`),c(new N(k.DEADLINE_EXCEEDED,"Request time out"));break;case Gi.HTTP_ERROR:const p=l.getStatus();if(L(Me,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const b=function(C){const V=C.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(V)>=0?V:k.UNKNOWN}(y.status);c(new N(b,y.message))}else c(new N(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new N(k.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{L(Me,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);L(Me,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",u,n,15)})}Bo(e,t,n){const s=Ua(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=bf(),c=Ef(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const d=i.join("");L(Me,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,y=!1;const b=new wT({Io:C=>{y?L(Me,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(L(Me,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),L(Me,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},To:()=>p.close()}),x=(C,V,B)=>{C.listen(V,O=>{try{B(O)}catch(q){setTimeout(()=>{throw q},0)}})};return x(p,vs.EventType.OPEN,()=>{y||(L(Me,`RPC '${e}' stream ${s} transport opened.`),b.yo())}),x(p,vs.EventType.CLOSE,()=>{y||(y=!0,L(Me,`RPC '${e}' stream ${s} transport closed`),b.So())}),x(p,vs.EventType.ERROR,C=>{y||(y=!0,We(Me,`RPC '${e}' stream ${s} transport errored:`,C),b.So(new N(k.UNAVAILABLE,"The operation could not be completed")))}),x(p,vs.EventType.MESSAGE,C=>{var V;if(!y){const B=C.data[0];G(!!B);const O=B,q=O.error||((V=O[0])===null||V===void 0?void 0:V.error);if(q){L(Me,`RPC '${e}' stream ${s} received error:`,q);const M=q.status;let F=function(v){const E=Ee[v];if(E!==void 0)return yp(E)}(M),T=q.message;F===void 0&&(F=k.INTERNAL,T="Unknown error status: "+M+" with message "+q.message),y=!0,b.So(new N(F,T)),p.close()}else L(Me,`RPC '${e}' stream ${s} received:`,B),b.bo(B)}}),x(c,wf.STAT_EVENT,C=>{C.stat===tc.PROXY?L(Me,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===tc.NOPROXY&&L(Me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}/**
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
 */function em(){return typeof window<"u"?window:null}function Xi(){return typeof document<"u"?document:null}/**
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
 */function ni(r){return new xI(r,!0)}/**
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
 */class sl{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-n);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class tm{constructor(e,t,n,s,i,o,c,l){this.ui=e,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new sl(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Te(t.toString()),Te("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===t&&this.P_(n,s)},n=>{e(()=>{const s=new N(k.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bT extends tm{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=NI(this.serializer,e),n=function(i){if(!("targetChange"in i))return H.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?we(o.readTime):H.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=dc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=lo(l)?{documents:Pp(i,l)}:{query:Bo(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Tp(i,o.resumeToken);const u=uc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=Sr(i,o.snapshotVersion.toTimestamp());const u=uc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const n=OI(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=dc(this.serializer),t.removeTarget=e,this.a_(t)}}class AT extends tm{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return G(!!e.streamToken),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=LI(e.writeResults,e.commitTime),n=we(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=dc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>$s(this.serializer,n))};this.a_(t)}}/**
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
 */class ST extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new N(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,hc(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(k.UNKNOWN,i.toString())})}Lo(e,t,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,hc(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(k.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class PT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Te(t),this.D_=!1):L("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class RT{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{gn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=j(l);u.L_.add(4),await Ur(u),u.q_.set("Unknown"),u.L_.delete(4),await ri(u)}(this))})}),this.q_=new PT(n,s)}}async function ri(r){if(gn(r))for(const e of r.B_)await e(!0)}async function Ur(r){for(const e of r.B_)await e(!1)}function qo(r,e){const t=j(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),al(t)?ol(t):qr(t).r_()&&il(t,e))}function Cr(r,e){const t=j(r),n=qr(t);t.N_.delete(e),n.r_()&&nm(t,e),t.N_.size===0&&(n.r_()?n.o_():gn(t)&&t.q_.set("Unknown"))}function il(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qr(r).A_(e)}function nm(r,e){r.Q_.xe(e),qr(r).R_(e)}function ol(r){r.Q_=new PI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),qr(r).start(),r.q_.v_()}function al(r){return gn(r)&&!qr(r).n_()&&r.N_.size>0}function gn(r){return j(r).L_.size===0}function rm(r){r.Q_=void 0}async function CT(r){r.q_.set("Online")}async function kT(r){r.N_.forEach((e,t)=>{il(r,e)})}async function xT(r,e){rm(r),al(r)?(r.q_.M_(e),ol(r)):r.q_.set("Unknown")}async function DT(r,e,t){if(r.q_.set("Online"),e instanceof Ip&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(r,e)}catch(n){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await To(r,n)}else if(e instanceof Yi?r.Q_.Ke(e):e instanceof vp?r.Q_.He(e):r.Q_.We(e),!t.isEqual(H.min()))try{const n=await Wp(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(_e.EMPTY_BYTE_STRING,d.snapshotVersion)),nm(i,l);const p=new wt(d.target,l,u,d.sequenceNumber);il(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){L("RemoteStore","Failed to raise snapshot:",n),await To(r,n)}}async function To(r,e,t){if(!pn(e))throw e;r.L_.add(1),await Ur(r),r.q_.set("Offline"),t||(t=()=>Wp(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await ri(r)})}function sm(r,e){return e().catch(t=>To(r,t,e))}async function $r(r){const e=j(r),t=ln(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;VT(e);)try{const s=await yT(e.localStore,n);if(s===null){e.O_.length===0&&t.o_();break}n=s.batchId,NT(e,s)}catch(s){await To(e,s)}im(e)&&om(e)}function VT(r){return gn(r)&&r.O_.length<10}function NT(r,e){r.O_.push(e);const t=ln(r);t.r_()&&t.V_&&t.m_(e.mutations)}function im(r){return gn(r)&&!ln(r).n_()&&r.O_.length>0}function om(r){ln(r).start()}async function LT(r){ln(r).p_()}async function OT(r){const e=ln(r);for(const t of r.O_)e.m_(t.mutations)}async function MT(r,e,t){const n=r.O_.shift(),s=Gc.from(n,e,t);await sm(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await $r(r)}async function FT(r,e){e&&ln(r).V_&&await async function(n,s){if(function(o){return gp(o)&&o!==k.ABORTED}(s.code)){const i=n.O_.shift();ln(n).s_(),await sm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $r(n)}}(r,e),im(r)&&om(r)}async function cd(r,e){const t=j(r);t.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const n=gn(t);t.L_.add(3),await Ur(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await ri(t)}async function _c(r,e){const t=j(r);e?(t.L_.delete(2),await ri(t)):e||(t.L_.add(2),await Ur(t),t.q_.set("Unknown"))}function qr(r){return r.K_||(r.K_=function(t,n,s){const i=j(t);return i.w_(),new bT(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:CT.bind(null,r),Ro:kT.bind(null,r),mo:xT.bind(null,r),d_:DT.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),al(r)?ol(r):r.q_.set("Unknown")):(await r.K_.stop(),rm(r))})),r.K_}function ln(r){return r.U_||(r.U_=function(t,n,s){const i=j(t);return i.w_(),new AT(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:LT.bind(null,r),mo:FT.bind(null,r),f_:OT.bind(null,r),g_:MT.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await $r(r)):(await r.U_.stop(),r.O_.length>0&&(L("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class cl{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new cl(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zr(r,e){if(Te("AsyncQueue",`${e}: ${r}`),pn(r))return new N(k.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class pr{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(t,n)=>$.comparator(t.key,n.key),this.keyedMap=Is(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new pr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof pr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new pr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class ld{constructor(){this.W_=new ue($.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):z():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class kr{constructor(e,t,n,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new kr(e,t,pr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class BT{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class jT{constructor(){this.queries=ud(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const s=j(t),i=s.queries;s.queries=ud(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(n)})})(this,new N(k.ABORTED,"Firestore shutting down"))}}function ud(){return new Dt(r=>tp(r),Ys)}async function ll(r,e){const t=j(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(n=2):(i=new BT,n=e.J_()?0:1);try{switch(n){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=zr(o,`Initialization of query '${ur(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&hl(t)}async function ul(r,e){const t=j(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function UT(r,e){const t=j(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(n=!0);o.z_=s}}n&&hl(t)}function $T(r,e,t){const n=j(r),s=n.queries.get(e);if(s)for(const i of s.j_)i.onError(t);n.queries.delete(e)}function hl(r){r.Y_.forEach(e=>{e.next()})}var vc,hd;(hd=vc||(vc={})).ea="default",hd.Cache="cache";class dl{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new kr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==vc.Cache}}/**
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
 */class qT{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
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
 */class dd{constructor(e){this.serializer=e}Es(e){return ct(this.serializer,e)}ds(e){return e.metadata.exists?Sp(this.serializer,e.document,!1):de.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return we(e)}}class zT{constructor(e,t,n){this.ca=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=am(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const n=Z.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,n=new dd(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.Es(s.metadata.name);for(const o of s.metadata.queries){const c=(t.get(o)||Q()).add(i);t.set(o,c)}}return t}async complete(){const e=await _T(this.localStore,new dd(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const n of this.queries)await vT(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function am(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class cm{constructor(e){this.key=e}}class lm{constructor(e){this.key=e}}class um{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Q(),this.mutatedKeys=Q(),this.Aa=rp(e),this.Ra=new pr(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new ld,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),y=Xs(this.query,p)?p:null,b=!!m&&this.mutatedKeys.has(m.key),x=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let C=!1;m&&y?m.data.isEqual(y.data)?b!==x&&(n.track({type:3,doc:y}),C=!0):this.ga(m,y)||(n.track({type:2,doc:y}),C=!0,(l&&this.Aa(y,l)>0||u&&this.Aa(y,u)<0)&&(c=!0)):!m&&y?(n.track({type:0,doc:y}),C=!0):m&&!y&&(n.track({type:1,doc:m}),C=!0,(l||u)&&(c=!0)),C&&(y?(o=o.add(y),i=x?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),n.track({type:1,doc:d})}return{Ra:o,fa:n,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(y,b){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return x(y)-x(b)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(n),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new kr(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ld,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Q(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new lm(n))}),this.da.forEach(n=>{e.has(n)||t.push(new cm(n))}),t}ba(e){this.Ta=e.Ts,this.da=Q();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return kr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class GT{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class HT{constructor(e){this.key=e,this.va=!1}}class KT{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Dt(c=>tp(c),Ys),this.Ma=new Map,this.xa=new Set,this.Oa=new ue($.comparator),this.Na=new Map,this.La=new Xc,this.Ba={},this.ka=new Map,this.qa=qn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function WT(r,e,t=!0){const n=zo(r);let s;const i=n.Fa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await hm(n,e,t,!0),s}async function QT(r,e){const t=zo(r);await hm(t,e,!0,!1)}async function hm(r,e,t,n){const s=await Pr(r.localStore,je(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await fl(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&qo(r.remoteStore,s),c}async function fl(r,e,t,n,s){r.Ka=(p,m,y)=>async function(x,C,V,B){let O=C.view.ma(V);O.ns&&(O=await _o(x.localStore,C.query,!1).then(({documents:T})=>C.view.ma(T,O)));const q=B&&B.targetChanges.get(C.targetId),M=B&&B.targetMismatches.get(C.targetId)!=null,F=C.view.applyChanges(O,x.isPrimaryClient,q,M);return Ic(x,C.targetId,F.wa),F.snapshot}(r,p,m,y);const i=await _o(r.localStore,e,!0),o=new um(e,i.Ts),c=o.ma(i.documents),l=ti.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),u=o.applyChanges(c,r.isPrimaryClient,l);Ic(r,t,u.wa);const d=new GT(e,t,o);return r.Fa.set(e,d),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),u.snapshot}async function JT(r,e,t){const n=j(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!Ys(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Cr(n.remoteStore,s.targetId),xr(n,s.targetId)}).catch(fn)):(xr(n,s.targetId),await Rr(n.localStore,s.targetId,!0))}async function YT(r,e){const t=j(r),n=t.Fa.get(e),s=t.Ma.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Cr(t.remoteStore,n.targetId))}async function XT(r,e,t){const n=yl(r);try{const s=await function(o,c){const l=j(o),u=ge.now(),d=c.reduce((y,b)=>y.add(b.key),Q());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let b=He(),x=Q();return l.cs.getEntries(y,d).next(C=>{b=C,b.forEach((V,B)=>{B.isValidDocument()||(x=x.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,b)).next(C=>{p=C;const V=[];for(const B of c){const O=bI(B,p.get(B.key).overlayedDocument);O!=null&&V.push(new Vt(B.key,O,zf(O.value.mapValue),me.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,V,c)}).next(C=>{m=C;const V=C.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(y,C.batchId,V)})}).then(()=>({batchId:m.batchId,changes:ip(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new ue(K)),u=u.insert(c,l),o.Ba[o.currentUser.toKey()]=u}(n,s.batchId,t),await Nt(n,s.changes),await $r(n.remoteStore)}catch(s){const i=zr(s,"Failed to persist write");t.reject(i)}}async function dm(r,e){const t=j(r);try{const n=await gT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?G(o.va):s.removedDocuments.size>0&&(G(o.va),o.va=!1))}),await Nt(t,n,e)}catch(n){await fn(n)}}function fd(r,e,t){const n=j(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=j(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(c)&&(u=!0)}),u&&hl(l)}(n.eventManager,e),s.length&&n.Ca.d_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function ZT(r,e,t){const n=j(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Na.get(e),i=s&&s.key;if(i){let o=new ue($.comparator);o=o.insert(i,de.newNoDocument(i,H.min()));const c=Q().add(i),l=new ei(H.min(),new Map,new ue(K),o,c);await dm(n,l),n.Oa=n.Oa.remove(i),n.Na.delete(e),gl(n)}else await Rr(n.localStore,e,!1).then(()=>xr(n,e,t)).catch(fn)}async function ew(r,e){const t=j(r),n=e.batch.batchId;try{const s=await mT(t.localStore,e);ml(t,n,null),pl(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Nt(t,s)}catch(s){await fn(s)}}async function tw(r,e,t){const n=j(r);try{const s=await function(o,c){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(G(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(n.localStore,e);ml(n,e,t),pl(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Nt(n,s)}catch(s){await fn(s)}}async function nw(r,e){const t=j(r);gn(t.remoteStore)||L("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(o){const c=j(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>c.mutationQueue.getHighestUnacknowledgedBatchId(l))}(t.localStore);if(n===-1)return void e.resolve();const s=t.ka.get(n)||[];s.push(e),t.ka.set(n,s)}catch(n){const s=zr(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function pl(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function ml(r,e,t){const n=j(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ba[n.currentUser.toKey()]=s}}function xr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||fm(r,n)})}function fm(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(Cr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),gl(r))}function Ic(r,e,t){for(const n of t)n instanceof cm?(r.La.addReference(n.key,e),rw(r,n)):n instanceof lm?(L("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||fm(r,n.key)):z()}function rw(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(L("SyncEngine","New document in limbo: "+t),r.xa.add(n),gl(r))}function gl(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new $(Z.fromString(e)),n=r.qa.next();r.Na.set(n,new HT(t)),r.Oa=r.Oa.insert(t,n),qo(r.remoteStore,new wt(je(Fr(t.path)),n,"TargetPurposeLimboResolution",ze.oe))}}async function Nt(r,e,t){const n=j(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((c,l)=>{o.push(n.Ka(l,e,t).then(u=>{var d;if((u||t)&&n.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=nl.Wi(l.targetId,u);i.push(p)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(l,u){const d=j(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>S.forEach(u,m=>S.forEach(m.$i,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>S.forEach(m.Ui,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!pn(p))throw p;L("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=d.os.get(m),b=y.snapshotVersion,x=y.withLastLimboFreeSnapshotVersion(b);d.os=d.os.insert(m,x)}}}(n.localStore,i))}async function sw(r,e){const t=j(r);if(!t.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const n=await Kp(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new N(k.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Nt(t,n.hs)}}function iw(r,e){const t=j(r),n=t.Na.get(e);if(n&&n.va)return Q().add(n.key);{let s=Q();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function ow(r,e){const t=j(r),n=await _o(t.localStore,e.query,!0),s=e.view.ba(n);return t.isPrimaryClient&&Ic(t,e.targetId,s.wa),s}async function aw(r,e){const t=j(r);return Yp(t.localStore,e).then(n=>Nt(t,n))}async function cw(r,e,t,n){const s=j(r),i=await function(c,l){const u=j(c),d=j(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",p=>d.Mn(p,l).next(m=>m?u.localDocuments.getDocuments(p,m):S.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await $r(s.remoteStore):t==="acknowledged"||t==="rejected"?(ml(s,e,n||null),pl(s,e),function(c,l){j(j(c).mutationQueue).On(l)}(s.localStore,e)):z(),await Nt(s,i)):L("SyncEngine","Cannot apply mutation batch with id: "+e)}async function lw(r,e){const t=j(r);if(zo(t),yl(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await pd(t,n.toArray());t.Qa=!0,await _c(t.remoteStore,!0);for(const i of s)qo(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const n=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(xr(t,o),Rr(t.localStore,o,!0))),Cr(t.remoteStore,o)}),await s,await pd(t,n),function(o){const c=j(o);c.Na.forEach((l,u)=>{Cr(c.remoteStore,u)}),c.La.pr(),c.Na=new Map,c.Oa=new ue($.comparator)}(t),t.Qa=!1,await _c(t.remoteStore,!1)}}async function pd(r,e,t){const n=j(r),s=[],i=[];for(const o of e){let c;const l=n.Ma.get(o);if(l&&l.length!==0){c=await Pr(n.localStore,je(l[0]));for(const u of l){const d=n.Fa.get(u),p=await ow(n,d);p.snapshot&&i.push(p.snapshot)}}else{const u=await Jp(n.localStore,o);c=await Pr(n.localStore,u),await fl(n,pm(u),o,!1,c.resumeToken)}s.push(c)}return n.Ca.d_(i),s}function pm(r){return Xf(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function uw(r){return function(t){return j(j(t).persistence).Qi()}(j(r).localStore)}async function hw(r,e,t,n){const s=j(r);if(s.Qa)return void L("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Yp(s.localStore,np(i[0])),c=ei.createSynthesizedRemoteEventForCurrentChange(e,t==="current",_e.EMPTY_BYTE_STRING);await Nt(s,o,c);break}case"rejected":await Rr(s.localStore,e,!0),xr(s,e,n);break;default:z()}}async function dw(r,e,t){const n=zo(r);if(n.Qa){for(const s of e){if(n.Ma.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){L("SyncEngine","Adding an already active target "+s);continue}const i=await Jp(n.localStore,s),o=await Pr(n.localStore,i);await fl(n,pm(i),o.targetId,!1,o.resumeToken),qo(n.remoteStore,o)}for(const s of t)n.Ma.has(s)&&await Rr(n.localStore,s,!1).then(()=>{Cr(n.remoteStore,s),xr(n,s)}).catch(fn)}}function zo(r){const e=j(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=dm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZT.bind(null,e),e.Ca.d_=UT.bind(null,e.eventManager),e.Ca.$a=$T.bind(null,e.eventManager),e}function yl(r){const e=j(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ew.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tw.bind(null,e),e}function fw(r,e,t){const n=j(r);(async function(i,o,c){try{const l=await o.getMetadata();if(await function(y,b){const x=j(y),C=we(b.createTime);return x.persistence.runTransaction("hasNewerBundle","readonly",V=>x.Gr.getBundleMetadata(V,b.id)).then(V=>!!V&&V.createTime.compareTo(C)>=0)}(i.localStore,l))return await o.close(),c._completeWith(function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}}(l)),Promise.resolve(new Set);c._updateProgress(am(l));const u=new zT(l,i.localStore,o.serializer);let d=await o.Ua();for(;d;){const m=await u.la(d);m&&c._updateProgress(m),d=await o.Ua()}const p=await u.complete();return await Nt(i,p.Ia,void 0),await function(y,b){const x=j(y);return x.persistence.runTransaction("Save bundle","readwrite",C=>x.Gr.saveBundleMetadata(C,b))}(i.localStore,l),c._completeWith(p.progress),Promise.resolve(p.Pa)}catch(l){return We("SyncEngine",`Loading bundle failed with ${l}`),c._failWith(l),Promise.resolve(new Set)}})(n,e,t).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class un{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ni(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Hp(this.persistence,new Gp,e.initialUser,this.serializer)}Ga(e){return new Zc($o.Zr,this.serializer)}Wa(e){return new Zp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}un.provider={build:()=>new un};class pw extends un{constructor(e){super(),this.cacheSizeBytes=e}ja(e,t){G(this.persistence.referenceDelegate instanceof yo);const n=this.persistence.referenceDelegate.garbageCollector;return new jp(n,e.asyncQueue,t)}Ga(e){const t=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new Zc(n=>yo.Zr(n,t),this.serializer)}}class _l extends un{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await yl(this.Ja.syncEngine),await $r(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Hp(this.persistence,new Gp,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new jp(n,e.asyncQueue,t)}Ha(e,t){const n=new Lv(t,this.persistence);return new Nv(e.asyncQueue,n)}Ga(e){const t=tl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new el(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,em(),Xi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Zp}}class mm extends _l{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof ja&&(this.sharedClientState.syncEngine={no:cw.bind(null,t),ro:hw.bind(null,t),io:dw.bind(null,t),Qi:uw.bind(null,t),eo:aw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await lw(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=em();if(!ja.D(t))throw new N(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=tl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ja(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class hn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>fd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=sw.bind(null,this.syncEngine),await _c(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jT}()}createDatastore(e){const t=ni(e.databaseInfo.databaseId),n=function(i){return new ET(i)}(e.databaseInfo);return function(i,o,c,l){return new ST(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new RT(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>fd(this.syncEngine,t,0),function(){return ad.D()?new ad:new IT}())}createSyncEngine(e,t){return function(s,i,o,c,l,u,d){const p=new KT(s,i,o,c,l,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=j(s);L("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ur(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hn.provider={build:()=>new hn};function md(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Go{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Te("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class mw{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new Re,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(n=>{n&&n.ua()?this.metadata.resolve(n.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.aa)}`))},n=>this.metadata.reject(n))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),n=Number(t);isNaN(n)&&this.ru(`length string (${t}) is not valid number`);const s=await this.iu(n);return new qT(JSON.parse(s),e.length+n)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class gw{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new N(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,i){const o=j(s),c={documents:i.map(p=>Us(o.serializer,p))},l=await o.Lo("BatchGetDocuments",o.serializer.databaseId,Z.emptyPath(),c,i.length),u=new Map;l.forEach(p=>{const m=VI(o.serializer,p);u.set(m.key.toString(),m)});const d=[];return i.forEach(p=>{const m=u.get(p.toString());G(!!m),d.push(m)}),d}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new jr(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const s=$.fromPath(n);this.mutations.push(new qc(s,this.precondition(s)))}),await async function(n,s){const i=j(n),o={writes:s.map(c=>$s(i.serializer,c))};await i.Mo("Commit",i.serializer.databaseId,Z.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw z();t=H.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new N(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(H.min())?me.exists(!1):me.updateTime(t):me.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(H.min()))throw new N(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return me.updateTime(t)}return me.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class yw{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this._u=n.maxAttempts,this.t_=new sl(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new gw(this.datastore),t=this.cu(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.lu(s)}))}).catch(n=>{this.lu(n)})})}cu(e){try{const t=this.updateFunction(e);return!Qs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!gp(t)}return!1}}/**
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
 */class _w{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Pe.UNAUTHENTICATED,this.clientId=Lc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{L("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(L("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=zr(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function $a(r,e){r.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Kp(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function gd(r,e){r.asyncQueue.verifyOperationInProgress();const t=await vl(r);L("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>cd(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>cd(e.remoteStore,s)),r._onlineComponents=e}async function vl(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await $a(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;We("Error using user provided cache. Falling back to memory cache: "+t),await $a(r,new un)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await $a(r,new un);return r._offlineComponents}async function Ho(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await gd(r,r._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await gd(r,new hn))),r._onlineComponents}function gm(r){return vl(r).then(e=>e.persistence)}function Gr(r){return vl(r).then(e=>e.localStore)}function ym(r){return Ho(r).then(e=>e.remoteStore)}function Il(r){return Ho(r).then(e=>e.syncEngine)}function _m(r){return Ho(r).then(e=>e.datastore)}async function Dr(r){const e=await Ho(r),t=e.eventManager;return t.onListen=WT.bind(null,e.syncEngine),t.onUnlisten=JT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=QT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=YT.bind(null,e.syncEngine),t}function vw(r){return r.asyncQueue.enqueue(async()=>{const e=await gm(r),t=await ym(r);return e.setNetworkEnabled(!0),function(s){const i=j(s);return i.L_.delete(0),ri(i)}(t)})}function Iw(r){return r.asyncQueue.enqueue(async()=>{const e=await gm(r),t=await ym(r);return e.setNetworkEnabled(!1),async function(s){const i=j(s);i.L_.add(0),await Ur(i),i.q_.set("Offline")}(t)})}function Tw(r,e){const t=new Re;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const c=await function(u,d){const p=j(u);return p.persistence.runTransaction("read document","readonly",m=>p.localDocuments.getDocument(m,d))}(s,i);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new N(k.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const l=zr(c,`Failed to get document '${i} from cache`);o.reject(l)}}(await Gr(r),e,t)),t.promise}function vm(r,e,t={}){const n=new Re;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Go({next:m=>{d.Za(),o.enqueueAndForget(()=>ul(i,p));const y=m.docs.has(c);!y&&m.fromCache?u.reject(new N(k.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?u.reject(new N(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new dl(Fr(c.path),d,{includeMetadataChanges:!0,_a:!0});return ll(i,p)}(await Dr(r),r.asyncQueue,e,t,n)),n.promise}function ww(r,e){const t=new Re;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const c=await _o(s,i,!0),l=new um(i,c.Ts),u=l.ma(c.documents),d=l.applyChanges(u,!1);o.resolve(d.snapshot)}catch(c){const l=zr(c,`Failed to execute query '${i} against cache`);o.reject(l)}}(await Gr(r),e,t)),t.promise}function Im(r,e,t={}){const n=new Re;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new Go({next:m=>{d.Za(),o.enqueueAndForget(()=>ul(i,p)),m.fromCache&&l.source==="server"?u.reject(new N(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new dl(c,d,{includeMetadataChanges:!0,_a:!0});return ll(i,p)}(await Dr(r),r.asyncQueue,e,t,n)),n.promise}function Ew(r,e,t){const n=new Re;return r.asyncQueue.enqueueAndForget(async()=>{try{const s=await _m(r);n.resolve(async function(o,c,l){var u;const d=j(o),{request:p,ut:m,parent:y}=Rp(d.serializer,Zf(c),l);d.connection.Fo||delete p.parent;const b=(await d.Lo("RunAggregationQuery",d.serializer.databaseId,y,p,1)).filter(C=>!!C.result);G(b.length===1);const x=(u=b[0].result)===null||u===void 0?void 0:u.aggregateFields;return Object.keys(x).reduce((C,V)=>(C[m[V]]=x[V],C),{})}(s,e,t))}catch(s){n.reject(s)}}),n.promise}function bw(r,e){const t=new Go(e);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){j(s).Y_.add(i),i.next()}(await Dr(r),t)),()=>{t.Za(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){j(s).Y_.delete(i)}(await Dr(r),t))}}function Aw(r,e,t,n){const s=function(o,c){let l;return l=typeof o=="string"?_p().encode(o):o,function(d,p){return new mw(d,p)}(function(d,p){if(d instanceof Uint8Array)return md(d,p);if(d instanceof ArrayBuffer)return md(new Uint8Array(d),p);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),c)}(t,ni(e));r.asyncQueue.enqueueAndForget(async()=>{fw(await Il(r),s,n)})}function Sw(r,e){return r.asyncQueue.enqueue(async()=>function(n,s){const i=j(n);return i.persistence.runTransaction("Get named query","readonly",o=>i.Gr.getNamedQuery(o,s))}(await Gr(r),e))}function Pw(r,e){return r.asyncQueue.enqueue(async()=>async function(n,s){const i=j(n),o=i.indexManager,c=[];return i.persistence.runTransaction("Configure indexes","readwrite",l=>o.getFieldIndexes(l).next(u=>function(p,m,y,b,x){p=[...p],m=[...m],p.sort(y),m.sort(y);const C=p.length,V=m.length;let B=0,O=0;for(;B<V&&O<C;){const q=y(p[O],m[B]);q<0?x(p[O++]):q>0?b(m[B++]):(B++,O++)}for(;B<V;)b(m[B++]);for(;O<C;)x(p[O++])}(u,s,kv,d=>{c.push(o.addFieldIndex(l,d))},d=>{c.push(o.deleteFieldIndex(l,d))})).next(()=>S.waitFor(c)))}(await Gr(r),e))}function Rw(r,e){return r.asyncQueue.enqueue(async()=>function(n,s){j(n).ss.zi=s}(await Gr(r),e))}function Cw(r){return r.asyncQueue.enqueue(async()=>function(t){const n=j(t),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(await Gr(r)))}/**
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
 */function Tm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const yd=new Map;/**
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
 */function Tl(r,e,t){if(!t)throw new N(k.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function wm(r,e,t,n){if(e===!0&&n===!0)throw new N(k.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function _d(r){if(!$.isDocumentKey(r))throw new N(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function vd(r){if($.isDocumentKey(r))throw new N(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ko(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":z()}function J(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new N(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ko(r);throw new N(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function Em(r,e){if(e<=0)throw new N(k.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Id{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class si{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Id({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Id(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Sf;switch(n.type){case"firstParty":return new Av(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=yd.get(t);n&&(L("ComponentProvider","Removing Datastore"),yd.delete(t),n.terminate())}(this),Promise.resolve()}}function bm(r,e,t,n={}){var s;const i=(r=J(r,si))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&We("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),n.mockUserToken){let c,l;if(typeof n.mockUserToken=="string")c=n.mockUserToken,l=Pe.MOCK_USER;else{c=hf(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new N(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Pe(u)}r._authCredentials=new wv(new Af(c,l))}}/**
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
 */class Ce{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ce(this.firestore,e,this._query)}}class Ie{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ze(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}}class Ze extends Ce{constructor(e,t,n){super(e,t,Fr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new $(e))}withConverter(e){return new Ze(this.firestore,e,this._path)}}function Ct(r,e,...t){if(r=oe(r),Tl("collection","path",e),r instanceof si){const n=Z.fromString(e,...t);return vd(n),new Ze(r,null,n)}{if(!(r instanceof Ie||r instanceof Ze))throw new N(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(e,...t));return vd(n),new Ze(r.firestore,null,n)}}function kw(r,e){if(r=J(r,si),Tl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new N(k.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ce(r,null,function(n){return new xt(Z.emptyPath(),n)}(e))}function Lt(r,e,...t){if(r=oe(r),arguments.length===1&&(e=Lc.newId()),Tl("doc","path",e),r instanceof si){const n=Z.fromString(e,...t);return _d(n),new Ie(r,null,new $(n))}{if(!(r instanceof Ie||r instanceof Ze))throw new N(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Z.fromString(e,...t));return _d(n),new Ie(r.firestore,r instanceof Ze?r.converter:null,new $(n))}}function xw(r,e){return r=oe(r),e=oe(e),(r instanceof Ie||r instanceof Ze)&&(e instanceof Ie||e instanceof Ze)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function wl(r,e){return r=oe(r),e=oe(e),r instanceof Ce&&e instanceof Ce&&r.firestore===e.firestore&&Ys(r._query,e._query)&&r.converter===e.converter}/**
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
 */class Td{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new sl(this,"async_queue_retry"),this.Vu=()=>{const n=Xi();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=Xi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Xi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Re;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!pn(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw Te("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=cl.createAndSchedule(this,e,t,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Tc(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class Am{constructor(){this._progressObserver={},this._taskCompletionResolver=new Re,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const Dw=-1;class ae extends si{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Td,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Td(e),this._firestoreClient=void 0,await e}}}function Sm(r,e,t){t||(t="(default)");const n=Or(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(tn(i,e))return s;throw new N(k.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new N(k.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function Vw(r,e){const t=typeof r=="object"?r:Vc(),n=typeof r=="string"?r:e||"(default)",s=Or(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=cf("firestore");i&&bm(s,...i)}return s}function ye(r){if(r._terminated)throw new N(k.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Pm(r),r._firestoreClient}function Pm(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,u,d){return new rI(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Tm(d.experimentalLongPollingOptions),d.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new _w(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}function Nw(r,e){We("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return Rm(r,hn.provider,{build:n=>new _l(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function Lw(r){We("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();Rm(r,hn.provider,{build:t=>new mm(t,e.cacheSizeBytes)})}function Rm(r,e,t){if((r=J(r,ae))._firestoreClient||r._terminated)throw new N(k.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new N(k.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Pm(r)}function Ow(r){if(r._initialized&&!r._terminated)throw new N(k.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Re;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!at.D())return Promise.resolve();const s=n+"main";await at.delete(s)}(tl(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Mw(r){return function(t){const n=new Re;return t.asyncQueue.enqueueAndForget(async()=>nw(await Il(t),n)),n.promise}(ye(r=J(r,ae)))}function Fw(r){return vw(ye(r=J(r,ae)))}function Bw(r){return Iw(ye(r=J(r,ae)))}function jw(r){return ov(r.app,"firestore",r._databaseId.database),r._delete()}function Uw(r,e){const t=ye(r=J(r,ae)),n=new Am;return Aw(t,r._databaseId,e,n),n}function $w(r,e){return Sw(ye(r=J(r,ae)),e).then(t=>t?new Ce(r,null,t.query):null)}/**
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
 */class Vr{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class Cm{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dn(_e.fromBase64String(e))}catch(t){throw new N(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dn(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yn{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function qw(){return new yn("__name__")}/**
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
 */class _n{constructor(e){this._methodName=e}}/**
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
 */class Wo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
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
 */class ii{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const zw=/^__.*__$/;class Gw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Vt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Br(e,this.data,t,this.fieldTransforms)}}class km{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Vt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xm(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Qo{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Qo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.Ou(e),s}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return wo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(xm(this.Cu)&&zw.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Hw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ni(e)}Qu(e,t,n,s=!1){return new Qo({Cu:e,methodName:t,qu:n,path:fe.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wn(r){const e=r._freezeSettings(),t=ni(r._databaseId);return new Hw(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Jo(r,e,t,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,e,t,s);Cl("Data must be an object, but it was:",o,n);const c=Nm(n,o);let l,u;if(i.merge)l=new Ge(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=qs(e,p,t);if(!o.contains(m))throw new N(k.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Om(d,m)||d.push(m)}l=new Ge(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new Gw(new De(c),l,u)}class oi extends _n{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oi}}function Dm(r,e,t){return new Qo({Cu:3,qu:e.settings.qu,methodName:r._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class El extends _n{_toFieldTransform(e){return new Zs(e.path,new br)}isEqual(e){return e instanceof El}}class bl extends _n{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Dm(this,e,!0),n=this.Ku.map(i=>Qn(i,t)),s=new Bn(n);return new Zs(e.path,s)}isEqual(e){return e instanceof bl&&tn(this.Ku,e.Ku)}}class Al extends _n{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Dm(this,e,!0),n=this.Ku.map(i=>Qn(i,t)),s=new jn(n);return new Zs(e.path,s)}isEqual(e){return e instanceof Al&&tn(this.Ku,e.Ku)}}class Sl extends _n{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Ar(e.serializer,cp(e.serializer,this.$u));return new Zs(e.path,t)}isEqual(e){return e instanceof Sl&&this.$u===e.$u}}function Pl(r,e,t,n){const s=r.Qu(1,e,t);Cl("Data must be an object, but it was:",s,n);const i=[],o=De.empty();mn(n,(l,u)=>{const d=Yo(e,l,t);u=oe(u);const p=s.Nu(d);if(u instanceof oi)i.push(d);else{const m=Qn(u,p);m!=null&&(i.push(d),o.set(d,m))}});const c=new Ge(i);return new km(o,c,s.fieldTransforms)}function Rl(r,e,t,n,s,i){const o=r.Qu(1,e,t),c=[qs(e,n,t)],l=[s];if(i.length%2!=0)throw new N(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(qs(e,i[m])),l.push(i[m+1]);const u=[],d=De.empty();for(let m=c.length-1;m>=0;--m)if(!Om(u,c[m])){const y=c[m];let b=l[m];b=oe(b);const x=o.Nu(y);if(b instanceof oi)u.push(y);else{const C=Qn(b,x);C!=null&&(u.push(y),d.set(y,C))}}const p=new Ge(u);return new km(d,p,o.fieldTransforms)}function Vm(r,e,t,n=!1){return Qn(t,r.Qu(n?4:3,e))}function Qn(r,e){if(Lm(r=oe(r)))return Cl("Unsupported field value:",e,r),Nm(r,e);if(r instanceof _n)return function(n,s){if(!xm(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=Qn(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cp(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ge.fromDate(n);return{timestampValue:Sr(s.serializer,i)}}if(n instanceof ge){const i=new ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sr(s.serializer,i)}}if(n instanceof Wo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof dn)return{bytesValue:Tp(s.serializer,n._byteString)};if(n instanceof Ie){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wc(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof ii)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return $c(c.serializer,l)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${Ko(n)}`)}(r,e)}function Nm(r,e){const t={};return jf(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(r,(n,s)=>{const i=Qn(s,e.Mu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function Lm(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ge||r instanceof Wo||r instanceof dn||r instanceof Ie||r instanceof _n||r instanceof ii)}function Cl(r,e,t){if(!Lm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=Ko(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function qs(r,e,t){if((e=oe(e))instanceof yn)return e._internalPath;if(typeof e=="string")return Yo(r,e);throw wo("Field path arguments must be of type string or ",r,!1,void 0,t)}const Kw=new RegExp("[~\\*/\\[\\]]");function Yo(r,e,t){if(e.search(Kw)>=0)throw wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new yn(...e.split("."))._internalPath}catch{throw wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function wo(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new N(k.INVALID_ARGUMENT,c+r+l)}function Om(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class zs{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ww(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ww extends zs{data(){return super.data()}}function Xo(r,e){return typeof e=="string"?Yo(r,e):e instanceof yn?e._internalPath:e._delegate._internalPath}/**
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
 */function Mm(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kl{}class Hr extends kl{}function Gs(r,e,...t){let n=[];e instanceof kl&&n.push(e),n=n.concat(t),function(i){const o=i.filter(l=>l instanceof Jn).length,c=i.filter(l=>l instanceof Kr).length;if(o>1||o>0&&c>0)throw new N(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Kr extends Hr{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Kr(e,t,n)}_apply(e){const t=this._parse(e);return jm(e._query,t),new Ce(e.firestore,e.converter,lc(e._query,t))}_parse(e){const t=Wn(e.firestore);return function(i,o,c,l,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new N(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Ed(p,d);const y=[];for(const b of p)y.push(wd(l,i,b));m={arrayValue:{values:y}}}else m=wd(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Ed(p,d),m=Vm(c,o,p,d==="in"||d==="not-in");return ee.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function xl(r,e,t){const n=e,s=Xo("where",r);return Kr._create(s,n,t)}class Jn extends kl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Jn(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:se.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)jm(o,l),o=lc(o,l)}(e._query,t),new Ce(e.firestore,e.converter,lc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Qw(...r){return r.forEach(e=>Um("or",e)),Jn._create("or",r)}function Jw(...r){return r.forEach(e=>Um("and",e)),Jn._create("and",r)}class Zo extends Hr{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Zo(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new N(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new N(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new js(i,o)}(e._query,this._field,this._direction);return new Ce(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new xt(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Fm(r,e="asc"){const t=e,n=Xo("orderBy",r);return Zo._create(n,t)}class ai extends Hr{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new ai(e,t,n)}_apply(e){return new Ce(e.firestore,e.converter,ho(e._query,this._limit,this._limitType))}}function Yw(r){return Em("limit",r),ai._create("limit",r,"F")}function Xw(r){return Em("limitToLast",r),ai._create("limitToLast",r,"L")}class ci extends Hr{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new ci(e,t,n)}_apply(e){const t=Bm(e,this.type,this._docOrFields,this._inclusive);return new Ce(e.firestore,e.converter,function(s,i){return new xt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,t))}}function Zw(...r){return ci._create("startAt",r,!0)}function eE(...r){return ci._create("startAfter",r,!1)}class li extends Hr{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new li(e,t,n)}_apply(e){const t=Bm(e,this.type,this._docOrFields,this._inclusive);return new Ce(e.firestore,e.converter,function(s,i){return new xt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,t))}}function tE(...r){return li._create("endBefore",r,!1)}function nE(...r){return li._create("endAt",r,!0)}function Bm(r,e,t,n){if(t[0]=oe(t[0]),t[0]instanceof zs)return function(i,o,c,l,u){if(!l)throw new N(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const d=[];for(const p of fr(i))if(p.field.isKeyField())d.push(Mn(o,l.key));else{const m=l.data.field(p.field);if(No(m))throw new N(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+p.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=p.field.canonicalString();throw new N(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(m)}return new cn(d,u)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=Wn(r.firestore);return function(o,c,l,u,d,p){const m=o.explicitOrderBy;if(d.length>m.length)throw new N(k.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let b=0;b<d.length;b++){const x=d[b];if(m[b].field.isKeyField()){if(typeof x!="string")throw new N(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof x}`);if(!jc(o)&&x.indexOf("/")!==-1)throw new N(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${x}' contains a slash.`);const C=o.path.child(Z.fromString(x));if(!$.isDocumentKey(C))throw new N(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const V=new $(C);y.push(Mn(c,V))}else{const C=Vm(l,u,x);y.push(C)}}return new cn(y,p)}(r._query,r.firestore._databaseId,s,e,t,n)}}function wd(r,e,t){if(typeof(t=oe(t))=="string"){if(t==="")throw new N(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jc(e)&&t.indexOf("/")!==-1)throw new N(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Z.fromString(t));if(!$.isDocumentKey(n))throw new N(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Mn(r,new $(n))}if(t instanceof Ie)return Mn(r,t._key);throw new N(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ko(t)}.`)}function Ed(r,e){if(!Array.isArray(r)||r.length===0)throw new N(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jm(r,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new N(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Um(r,e){if(!(e instanceof Kr||e instanceof Jn))throw new N(k.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Dl{convertValue(e,t="none"){switch(on(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return mn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>pe(o.doubleValue));return new ii(i)}convertGeoPoint(e){return new Wo(pe(e.latitude),pe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Lo(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ms(e));default:return null}}convertTimestamp(e){const t=Pt(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Z.fromString(e);G(Dp(n));const s=new sn(n.get(1),n.get(3)),i=new $(n.popFirst(5));return s.isEqual(t)||Te(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function ea(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class rE extends Dl{constructor(e){super(),this.firestore=e}convertBytes(e){return new dn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}/**
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
 */function sE(r){return new Vr("sum",qs("sum",r))}function iE(r){return new Vr("avg",qs("average",r))}function $m(){return new Vr("count")}function oE(r,e){var t,n;return r instanceof Vr&&e instanceof Vr&&r.aggregateType===e.aggregateType&&((t=r._internalFieldPath)===null||t===void 0?void 0:t.canonicalString())===((n=e._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())}function aE(r,e){return wl(r.query,e.query)&&tn(r.data(),e.data())}/**
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
 */class Yt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zn extends zs{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ks(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Xo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ks extends zn{data(e={}){return super.data(e)}}class Gn{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Yt(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ks(this._firestore,this._userDataWriter,n.key,n,new Yt(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new ks(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Yt(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ks(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Yt(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:cE(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function cE(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}function lE(r,e){return r instanceof zn&&e instanceof zn?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof Gn&&e instanceof Gn&&r._firestore===e._firestore&&wl(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function Vl(r){r=J(r,Ie);const e=J(r.firestore,ae);return vm(ye(e),r._key).then(t=>Ol(e,r,t))}class vn extends Dl{constructor(e){super(),this.firestore=e}convertBytes(e){return new dn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}function uE(r){r=J(r,Ie);const e=J(r.firestore,ae),t=ye(e),n=new vn(e);return Tw(t,r._key).then(s=>new zn(e,n,r._key,s,new Yt(s!==null&&s.hasLocalMutations,!0),r.converter))}function hE(r){r=J(r,Ie);const e=J(r.firestore,ae);return vm(ye(e),r._key,{source:"server"}).then(t=>Ol(e,r,t))}function Nr(r){r=J(r,Ce);const e=J(r.firestore,ae),t=ye(e),n=new vn(e);return Mm(r._query),Im(t,r._query).then(s=>new Gn(e,n,r,s))}function dE(r){r=J(r,Ce);const e=J(r.firestore,ae),t=ye(e),n=new vn(e);return ww(t,r._query).then(s=>new Gn(e,n,r,s))}function fE(r){r=J(r,Ce);const e=J(r.firestore,ae),t=ye(e),n=new vn(e);return Im(t,r._query,{source:"server"}).then(s=>new Gn(e,n,r,s))}function qm(r,e,t){r=J(r,Ie);const n=J(r.firestore,ae),s=ea(r.converter,e,t);return Wr(n,[Jo(Wn(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,me.none())])}function Nl(r,e,t,...n){r=J(r,Ie);const s=J(r.firestore,ae),i=Wn(s);let o;return o=typeof(e=oe(e))=="string"||e instanceof yn?Rl(i,"updateDoc",r._key,e,t,n):Pl(i,"updateDoc",r._key,e),Wr(s,[o.toMutation(r._key,me.exists(!0))])}function Ll(r){return Wr(J(r.firestore,ae),[new jr(r._key,me.none())])}function ta(r,e){const t=J(r.firestore,ae),n=Lt(r),s=ea(r.converter,e);return Wr(t,[Jo(Wn(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,me.exists(!1))]).then(()=>n)}function pE(r,...e){var t,n,s;r=oe(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Tc(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Tc(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,d;if(r instanceof Ie)u=J(r.firestore,ae),d=Fr(r._key.path),l={next:p=>{e[o]&&e[o](Ol(u,r,p))},error:e[o+1],complete:e[o+2]};else{const p=J(r,Ce);u=J(p.firestore,ae),d=p._query;const m=new vn(u);l={next:y=>{e[o]&&e[o](new Gn(u,m,p,y))},error:e[o+1],complete:e[o+2]},Mm(r._query)}return function(m,y,b,x){const C=new Go(x),V=new dl(y,C,b);return m.asyncQueue.enqueueAndForget(async()=>ll(await Dr(m),V)),()=>{C.Za(),m.asyncQueue.enqueueAndForget(async()=>ul(await Dr(m),V))}}(ye(u),d,c,l)}function mE(r,e){return bw(ye(r=J(r,ae)),Tc(e)?e:{next:e})}function Wr(r,e){return function(n,s){const i=new Re;return n.asyncQueue.enqueueAndForget(async()=>XT(await Il(n),s,i)),i.promise}(ye(r),e)}function Ol(r,e,t){const n=t.docs.get(e._key),s=new vn(r);return new zn(r,s,e._key,n,new Yt(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function gE(r){return zm(r,{count:$m()})}function zm(r,e){const t=J(r.firestore,ae),n=ye(t),s=Bf(e,(i,o)=>new mp(o,i.aggregateType,i._internalFieldPath));return Ew(n,r._query,s).then(i=>function(c,l,u){const d=new vn(c);return new Cm(l,d,u)}(t,r,i))}class yE{constructor(e){this.kind="memory",this._onlineComponentProvider=hn.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=un.provider}toJSON(){return{kind:this.kind}}}class _E{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Hm(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class vE{constructor(){this.kind="memoryEager",this._offlineComponentProvider=un.provider}toJSON(){return{kind:this.kind}}}class IE{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new pw(e)}}toJSON(){return{kind:this.kind}}}function TE(){return new vE}function wE(r){return new IE(r==null?void 0:r.cacheSizeBytes)}function EE(r){return new yE(r)}function Gm(r){return new _E(r)}class bE{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=hn.provider,this._offlineComponentProvider={build:t=>new _l(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class AE{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=hn.provider,this._offlineComponentProvider={build:t=>new mm(t,e==null?void 0:e.cacheSizeBytes)}}}function Hm(r){return new bE(r==null?void 0:r.forceOwnership)}function Km(){return new AE}/**
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
 */const SE={maxAttempts:5};/**
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
 */class Wm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Wn(e)}set(e,t,n){this._verifyNotCommitted();const s=Ht(e,this._firestore),i=ea(s.converter,t,n),o=Jo(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,me.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=Ht(e,this._firestore);let o;return o=typeof(t=oe(t))=="string"||t instanceof yn?Rl(this._dataReader,"WriteBatch.update",i._key,t,n,s):Pl(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,me.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ht(e,this._firestore);return this._mutations=this._mutations.concat(new jr(t._key,me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ht(r,e){if((r=oe(r)).firestore!==e)throw new N(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */class Qm extends class{constructor(t,n){this._firestore=t,this._transaction=n,this._dataReader=Wn(t)}get(t){const n=Ht(t,this._firestore),s=new rE(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return z();const o=i[0];if(o.isFoundDocument())return new zs(this._firestore,s,o.key,o,n.converter);if(o.isNoDocument())return new zs(this._firestore,s,n._key,null,n.converter);throw z()})}set(t,n,s){const i=Ht(t,this._firestore),o=ea(i.converter,n,s),c=Jo(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,c),this}update(t,n,s,...i){const o=Ht(t,this._firestore);let c;return c=typeof(n=oe(n))=="string"||n instanceof yn?Rl(this._dataReader,"Transaction.update",o._key,n,s,i):Pl(this._dataReader,"Transaction.update",o._key,n),this._transaction.update(o._key,c),this}delete(t){const n=Ht(t,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ht(e,this._firestore),n=new vn(this._firestore);return super.get(e).then(s=>new zn(this._firestore,n,t._key,s._document,new Yt(!1,!1),t.converter))}}function PE(r,e,t){r=J(r,ae);const n=Object.assign(Object.assign({},SE),t);return function(i){if(i.maxAttempts<1)throw new N(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,o,c){const l=new Re;return i.asyncQueue.enqueueAndForget(async()=>{const u=await _m(i);new yw(i.asyncQueue,u,c,o,l).au()}),l.promise}(ye(r),s=>e(new Qm(r,s)),n)}/**
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
 */function RE(){return new oi("deleteField")}function na(){return new El("serverTimestamp")}function CE(...r){return new bl("arrayUnion",r)}function kE(...r){return new Al("arrayRemove",r)}function xE(r){return new Sl("increment",r)}function DE(r){return new ii(r)}/**
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
 */function VE(r){return ye(r=J(r,ae)),new Wm(r,e=>Wr(r,e))}/**
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
 */function NE(r,e){const t=ye(r=J(r,ae));if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return We("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=function(i){const o=typeof i=="string"?function(u){try{return JSON.parse(u)}catch(d){throw new N(k.INVALID_ARGUMENT,"Failed to parse JSON: "+(d==null?void 0:d.message))}}(i):i,c=[];if(Array.isArray(o.indexes))for(const l of o.indexes){const u=bd(l,"collectionGroup"),d=[];if(Array.isArray(l.fields))for(const p of l.fields){const m=Yo("setIndexConfiguration",bd(p,"fieldPath"));p.arrayConfig==="CONTAINS"?d.push(new Nn(m,2)):p.order==="ASCENDING"?d.push(new Nn(m,0)):p.order==="DESCENDING"&&d.push(new Nn(m,1))}c.push(new Ir(Ir.UNKNOWN_ID,u,d,Tr.empty()))}return c}(e);return Pw(t,n)}function bd(r,e){if(typeof r[e]!="string")throw new N(k.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
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
 */class Jm{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function LE(r){var e;r=J(r,ae);const t=Ad.get(r);if(t)return t;if(((e=ye(r)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const n=new Jm(r);return Ad.set(r,n),n}function OE(r){Ym(r,!0)}function ME(r){Ym(r,!1)}function FE(r){Cw(ye(r._firestore)).then(e=>L("deleting all persistent cache indexes succeeded")).catch(e=>We("deleting all persistent cache indexes failed",e))}function Ym(r,e){Rw(ye(r._firestore),e).then(t=>L(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(t=>We(`setting persistent cache index auto creation isEnabled=${e} failed`,t))}const Ad=new WeakMap;/**
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
 */function BE(r){var e;const t=(e=ye(J(r.firestore,ae))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return t===void 0?null:Bo(t,je(r._query))._t}function jE(r,e){var t;const n=Bf(e,(i,o)=>new mp(o,i.aggregateType,i._internalFieldPath)),s=(t=ye(J(r.firestore,ae))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return s===void 0?null:Rp(s,Zf(r._query),n,!0).request}/**
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
 */class UE{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Ml.instance.onExistenceFilterMismatch(e)}}class Ml{constructor(){this.Uu=new Map}static get instance(){return ji||(ji=new Ml,function(t){if(fo)throw new Error("a TestingHooksSpi instance is already set");fo=t}(ji)),ji}et(e){this.Uu.forEach(t=>t(e))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.Uu;return n.set(t,e),()=>n.delete(t)}}let ji=null;(function(e,t=!0){(function(s){Mr=s})(Kn),On(new nn("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new ae(new Ev(n.getProvider("auth-internal")),new Sv(n.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new N(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ot(ph,"4.7.3",e),ot(ph,"4.7.3","esm2017")})();const $E=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Dl,AggregateField:Vr,AggregateQuerySnapshot:Cm,Bytes:dn,CACHE_SIZE_UNLIMITED:Dw,CollectionReference:Ze,DocumentReference:Ie,DocumentSnapshot:zn,FieldPath:yn,FieldValue:_n,Firestore:ae,FirestoreError:N,GeoPoint:Wo,LoadBundleTask:Am,PersistentCacheIndexManager:Jm,Query:Ce,QueryCompositeFilterConstraint:Jn,QueryConstraint:Hr,QueryDocumentSnapshot:ks,QueryEndAtConstraint:li,QueryFieldFilterConstraint:Kr,QueryLimitConstraint:ai,QueryOrderByConstraint:Zo,QuerySnapshot:Gn,QueryStartAtConstraint:ci,SnapshotMetadata:Yt,Timestamp:ge,Transaction:Qm,VectorValue:ii,WriteBatch:Wm,_AutoId:Lc,_ByteString:_e,_DatabaseId:sn,_DocumentKey:$,_EmptyAppCheckTokenProvider:Pv,_EmptyAuthCredentialsProvider:Sf,_FieldPath:fe,_TestingHooks:UE,_cast:J,_debugAssert:Tv,_internalAggregationQueryToProtoRunAggregationQueryRequest:jE,_internalQueryToProtoQueryTarget:BE,_isBase64Available:tI,_logWarn:We,_validateIsNotUsedTogether:wm,addDoc:ta,aggregateFieldEqual:oE,aggregateQuerySnapshotEqual:aE,and:Jw,arrayRemove:kE,arrayUnion:CE,average:iE,clearIndexedDbPersistence:Ow,collection:Ct,collectionGroup:kw,connectFirestoreEmulator:bm,count:$m,deleteAllPersistentCacheIndexes:FE,deleteDoc:Ll,deleteField:RE,disableNetwork:Bw,disablePersistentCacheIndexAutoCreation:ME,doc:Lt,documentId:qw,enableIndexedDbPersistence:Nw,enableMultiTabIndexedDbPersistence:Lw,enableNetwork:Fw,enablePersistentCacheIndexAutoCreation:OE,endAt:nE,endBefore:tE,ensureFirestoreConfigured:ye,executeWrite:Wr,getAggregateFromServer:zm,getCountFromServer:gE,getDoc:Vl,getDocFromCache:uE,getDocFromServer:hE,getDocs:Nr,getDocsFromCache:dE,getDocsFromServer:fE,getFirestore:Vw,getPersistentCacheIndexManager:LE,increment:xE,initializeFirestore:Sm,limit:Yw,limitToLast:Xw,loadBundle:Uw,memoryEagerGarbageCollector:TE,memoryLocalCache:EE,memoryLruGarbageCollector:wE,namedQuery:$w,onSnapshot:pE,onSnapshotsInSync:mE,or:Qw,orderBy:Fm,persistentLocalCache:Gm,persistentMultipleTabManager:Km,persistentSingleTabManager:Hm,query:Gs,queryEqual:wl,refEqual:xw,runTransaction:PE,serverTimestamp:na,setDoc:qm,setIndexConfiguration:NE,setLogLevel:Iv,snapshotEqual:lE,startAfter:eE,startAt:Zw,sum:sE,terminate:jw,updateDoc:Nl,vector:DE,waitForPendingWrites:Mw,where:xl,writeBatch:VE},Symbol.toStringTag,{value:"Module"}));/**
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
 */const Xm="firebasestorage.googleapis.com",qE="storageBucket",zE=2*60*1e3,GE=10*60*1e3;/**
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
 */class mt extends pt{constructor(e,t,n=0){super(qa(e),`Firebase Storage: ${t} (${qa(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ht;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ht||(ht={}));function qa(r){return"storage/"+r}function HE(){const r="An unknown error occurred, please check the error payload for server response.";return new mt(ht.UNKNOWN,r)}function KE(){return new mt(ht.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function WE(){return new mt(ht.CANCELED,"User canceled the upload/download.")}function QE(r){return new mt(ht.INVALID_URL,"Invalid URL '"+r+"'.")}function JE(r){return new mt(ht.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function Sd(r){return new mt(ht.INVALID_ARGUMENT,r)}function Zm(){return new mt(ht.APP_DELETED,"The Firebase app was deleted.")}function YE(r){return new mt(ht.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Xe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Xe.makeFromUrl(e,t)}catch{return new Xe(e,"")}if(n.path==="")return n;throw JE(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(q){q.path_=decodeURIComponent(q.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),b={bucket:1,path:3},x=t===Xm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",V=new RegExp(`^https?://${x}/${s}/${C}`,"i"),O=[{regex:c,indices:l,postModify:i},{regex:y,indices:b,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let q=0;q<O.length;q++){const M=O[q],F=M.regex.exec(e);if(F){const T=F[M.indices.bucket];let _=F[M.indices.path];_||(_=""),n=new Xe(T,_),M.postModify(n);break}}if(n==null)throw QE(e);return n}}class XE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function ZE(r,e,t){let n=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let u=!1;function d(...C){u||(u=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,r(y,l())},C)}function m(){i&&clearTimeout(i)}function y(C,...V){if(u){m();return}if(C){m(),d.call(null,C,...V);return}if(l()||o){m(),d.call(null,C,...V);return}n<64&&(n*=2);let O;c===1?(c=2,O=0):O=(n+Math.random())*1e3,p(O)}let b=!1;function x(C){b||(b=!0,m(),!u&&(s!==null?(C||(c=2),clearTimeout(s),p(0)):C||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,x(!0)},t),x}function eb(r){r(!1)}/**
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
 */function tb(r){return r!==void 0}function Pd(r,e,t,n){if(n<e)throw Sd(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw Sd(`Invalid value for '${r}'. Expected ${t} or less.`)}function nb(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var Eo;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Eo||(Eo={}));/**
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
 */function rb(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
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
 */class sb{constructor(e,t,n,s,i,o,c,l,u,d,p,m=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,b)=>{this.resolve_=y,this.reject_=b,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new Ui(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Eo.NO_ERROR,l=i.getStatus();if(!c||rb(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Eo.ABORT;n(!1,new Ui(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;n(!0,new Ui(u,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());tb(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=HE();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Zm():WE();o(l)}else{const l=KE();o(l)}};this.canceled_?t(!1,new Ui(!1,null,!0)):this.backoffId_=ZE(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ui{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function ib(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function ob(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ab(r,e){e&&(r["X-Firebase-GMPID"]=e)}function cb(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function lb(r,e,t,n,s,i,o=!0){const c=nb(r.urlParams),l=r.url+c,u=Object.assign({},r.headers);return ab(u,e),ib(u,t),ob(u,i),cb(u,n),new sb(l,r.method,u,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o)}/**
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
 */function ub(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function hb(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class bo{constructor(e,t){this._service=e,t instanceof Xe?this._location=t:this._location=Xe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new bo(e,t)}get root(){const e=new Xe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hb(this._location.path)}get storage(){return this._service}get parent(){const e=ub(this._location.path);if(e===null)return null;const t=new Xe(this._location.bucket,e);return new bo(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw YE(e)}}function Rd(r,e){const t=e==null?void 0:e[qE];return t==null?null:Xe.makeFromBucketSpec(t,r)}function db(r,e,t,n={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:hf(s,r.app.options.projectId))}class fb{constructor(e,t,n,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Xm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zE,this._maxUploadRetryTime=GE,this._requests=new Set,s!=null?this._bucket=Xe.makeFromBucketSpec(s,this._host):this._bucket=Rd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xe.makeFromBucketSpec(this._url,e):this._bucket=Rd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bo(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new XE(Zm());{const o=lb(e,this._appId,n,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const Cd="@firebase/storage",kd="0.13.2";/**
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
 */const eg="storage";function pb(r=Vc(),e){r=oe(r);const n=Or(r,eg).getImmediate({identifier:e}),s=cf("storage");return s&&mb(n,...s),n}function mb(r,e,t,n={}){db(r,e,t,n)}function gb(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new fb(t,n,s,e,Kn)}function yb(){On(new nn(eg,gb,"PUBLIC").setMultipleInstances(!0)),ot(Cd,kd,""),ot(Cd,kd,"esm2017")}yb();function Fl(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function tg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _b=tg,ng=new Ks("auth","Firebase",tg());/**
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
 */const Ao=new xc("@firebase/auth");function vb(r,...e){Ao.logLevel<=X.WARN&&Ao.warn(`Auth (${Kn}): ${r}`,...e)}function Zi(r,...e){Ao.logLevel<=X.ERROR&&Ao.error(`Auth (${Kn}): ${r}`,...e)}/**
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
 */function dt(r,...e){throw jl(r,...e)}function et(r,...e){return jl(r,...e)}function Bl(r,e,t){const n=Object.assign(Object.assign({},_b()),{[e]:t});return new Ks("auth","Firebase",n).create(e,{appName:r.name})}function Ln(r){return Bl(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rg(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&dt(r,"argument-error"),Bl(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jl(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return ng.create(r,...e)}function W(r,e,...t){if(!r)throw jl(e,...t)}function Et(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Zi(e),new Error(e)}function kt(r,e){r||Et(e)}/**
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
 */function wc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Ib(){return xd()==="http:"||xd()==="https:"}function xd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Tb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ib()||Zy()||"connection"in navigator)?navigator.onLine:!0}function wb(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ui{constructor(e,t){this.shortDelay=e,this.longDelay=t,kt(t>e,"Short delay should be less than long delay!"),this.isMobile=Jy()||e_()}get(){return Tb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ul(r,e){kt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class sg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Eb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const bb=new ui(3e4,6e4);function $l(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Qr(r,e,t,n,s={}){return ig(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=Ws(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const u=Object.assign({method:e,headers:l},i);return Xy()||(u.referrerPolicy="no-referrer"),sg.fetch()(og(r,r.config.apiHost,t,c),u)})}async function ig(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Eb),e);try{const s=new Sb(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $i(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $i(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw $i(r,"user-disabled",o);const d=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bl(r,d,u);dt(r,d)}}catch(s){if(s instanceof pt)throw s;dt(r,"network-request-failed",{message:String(s)})}}async function Ab(r,e,t,n,s={}){const i=await Qr(r,e,t,n,s);return"mfaPendingCredential"in i&&dt(r,"multi-factor-auth-required",{_serverResponse:i}),i}function og(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?Ul(r.config,s):`${r.config.apiScheme}://${s}`}class Sb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(et(this.auth,"network-request-failed")),bb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $i(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=et(r,e,n);return s.customData._tokenResponse=t,s}/**
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
 */async function Pb(r,e){return Qr(r,"POST","/v1/accounts:delete",e)}async function ag(r,e){return Qr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function xs(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rb(r,e=!1){const t=oe(r),n=await t.getIdToken(e),s=ql(n);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:xs(za(s.auth_time)),issuedAtTime:xs(za(s.iat)),expirationTime:xs(za(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function za(r){return Number(r)*1e3}function ql(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const s=of(t);return s?JSON.parse(s):(Zi("Failed to decode base64 JWT payload"),null)}catch(s){return Zi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dd(r){const e=ql(r);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hs(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof pt&&Cb(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Cb({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class kb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ec{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function So(r){var e;const t=r.auth,n=await r.getIdToken(),s=await Hs(r,ag(t,{idToken:n}));W(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cg(i.providerUserInfo):[],c=Db(r.providerData,o),l=r.isAnonymous,u=!(r.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ec(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(r,p)}async function xb(r){const e=oe(r);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Db(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function cg(r){return r.map(e=>{var{providerId:t}=e,n=Fl(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Vb(r,e){const t=await ig(r,{},async()=>{const n=Ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=og(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",sg.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nb(r,e){return Qr(r,"POST","/v2/accounts:revokeToken",$l(r,e))}/**
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
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Dd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await Vb(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new mr;return n&&(W(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
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
 */function $t(r,e){W(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=Fl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ec(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rb(this,e)}reload(){return xb(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await So(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await Hs(this,Pb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,c,l,u,d;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,y=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,V=(u=t.createdAt)!==null&&u!==void 0?u:void 0,B=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:q,isAnonymous:M,providerData:F,stsTokenManager:T}=t;W(O&&T,e,"internal-error");const _=mr.fromJSON(this.name,T);W(typeof O=="string",e,"internal-error"),$t(p,e.name),$t(m,e.name),W(typeof q=="boolean",e,"internal-error"),W(typeof M=="boolean",e,"internal-error"),$t(y,e.name),$t(b,e.name),$t(x,e.name),$t(C,e.name),$t(V,e.name),$t(B,e.name);const v=new bt({uid:O,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:M,photoURL:b,phoneNumber:y,tenantId:x,stsTokenManager:_,createdAt:V,lastLoginAt:B});return F&&Array.isArray(F)&&(v.providerData=F.map(E=>Object.assign({},E))),C&&(v._redirectEventId=C),v}static async _fromIdTokenResponse(e,t,n=!1){const s=new mr;s.updateFromServerResponse(t);const i=new bt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await So(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new mr;c.updateFromIdToken(n);const l=new bt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ec(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Vd=new Map;function At(r){kt(r instanceof Function,"Expected a class definition");let e=Vd.get(r);return e?(kt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Vd.set(r,e),e)}/**
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
 */class lg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lg.type="NONE";const Nd=lg;/**
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
 */function eo(r,e,t){return`firebase:${r}:${e}:${t}`}class gr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=eo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new gr(At(Nd),e,n);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||At(Nd);const o=eo(n,e.config.apiKey,e.name);let c=null;for(const u of t)try{const d=await u._get(o);if(d){const p=bt._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new gr(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new gr(i,e,n))}}/**
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
 */function Ld(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ug(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mg(e))return"Blackberry";if(gg(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||dg(e))&&!e.includes("edge/"))return"Chrome";if(pg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ug(r=be()){return/firefox\//i.test(r)}function hg(r=be()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dg(r=be()){return/crios\//i.test(r)}function fg(r=be()){return/iemobile/i.test(r)}function pg(r=be()){return/android/i.test(r)}function mg(r=be()){return/blackberry/i.test(r)}function gg(r=be()){return/webos/i.test(r)}function zl(r=be()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Lb(r=be()){var e;return zl(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ob(){return t_()&&document.documentMode===10}function yg(r=be()){return zl(r)||pg(r)||gg(r)||mg(r)||/windows phone/i.test(r)||fg(r)}/**
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
 */function _g(r,e=[]){let t;switch(r){case"Browser":t=Ld(be());break;case"Worker":t=`${Ld(be())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kn}/${n}`}/**
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
 */class Mb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function Fb(r,e={}){return Qr(r,"GET","/v2/passwordPolicy",$l(r,e))}/**
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
 */const Bb=6;class jb{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Bb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Ub{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Od(this),this.idTokenSubscription=new Od(this),this.beforeStateQueue=new Mb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=At(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await gr.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ag(this,{idToken:e}),n=await bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(Ln(this));const t=e?oe(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fb(this),t=new jb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Nb(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&At(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await gr.create(this,[At(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_g(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ra(r){return oe(r)}class Od{constructor(e){this.auth=e,this.observer=null,this.addObserver=a_(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $b(r){Gl=r}function qb(r){return Gl.loadJS(r)}function zb(){return Gl.gapiScript}function Gb(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Hb(r,e){const t=Or(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(tn(i,e??{}))return s;dt(s,"already-initialized")}return t.initialize({options:e})}function Kb(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(At);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Wb(r,e,t){const n=ra(r);W(n._canInitEmulator,n,"emulator-config-failed"),W(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=vg(e),{host:o,port:c}=Qb(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${i}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Jb()}function vg(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Qb(r){const e=vg(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Md(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Md(o)}}}function Md(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Jb(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ig{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}/**
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
 */async function yr(r,e){return Ab(r,"POST","/v1/accounts:signInWithIdp",$l(r,e))}/**
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
 */const Yb="http://localhost";class Hn extends Ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=Fl(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new Hn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return yr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,yr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yr(e,t)}buildRequest(){const e={requestUri:Yb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ws(t)}return e}}/**
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
 */class sa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hi extends sa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kt extends hi{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
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
 */class It extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Hn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return It.credential(t,n)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
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
 */class Wt extends hi{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
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
 */class Qt extends hi{constructor(){super("twitter.com")}static credential(e,t){return Hn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qt.credential(t,n)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await bt._fromIdTokenResponse(e,n,s),o=Fd(n);return new Lr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Fd(n);return new Lr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Fd(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Po extends pt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Po.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Po(e,t,n,s)}}function Tg(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Po._fromErrorAndOperation(r,i,e,n):i})}async function Xb(r,e,t=!1){const n=await Hs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Lr._forOperation(r,"link",n)}/**
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
 */async function Zb(r,e,t=!1){const{auth:n}=r;if(Tt(n.app))return Promise.reject(Ln(n));const s="reauthenticate";try{const i=await Hs(r,Tg(n,s,e,r),t);W(i.idToken,n,"internal-error");const o=ql(i.idToken);W(o,n,"internal-error");const{sub:c}=o;return W(r.uid===c,n,"user-mismatch"),Lr._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dt(n,"user-mismatch"),i}}/**
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
 */async function eA(r,e,t=!1){if(Tt(r.app))return Promise.reject(Ln(r));const n="signIn",s=await Tg(r,n,e),i=await Lr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function tA(r,e,t,n){return oe(r).onIdTokenChanged(e,t,n)}function nA(r,e,t){return oe(r).beforeAuthStateChanged(e,t)}function rA(r,e,t,n){return oe(r).onAuthStateChanged(e,t,n)}function sA(r){return oe(r).signOut()}const Ro="__sak";/**
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
 */class wg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ro,"1"),this.storage.removeItem(Ro),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iA=1e3,oA=10;class Eg extends wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Ob()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oA):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eg.type="LOCAL";const aA=Eg;/**
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
 */class bg extends wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bg.type="SESSION";const Ag=bg;/**
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
 */function cA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new ia(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await cA(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ia.receivers=[];/**
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
 */function Hl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class lA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Hl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function lt(){return window}function uA(r){lt().location.href=r}/**
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
 */function Sg(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function hA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dA(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function fA(){return Sg()?self:null}/**
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
 */const Pg="firebaseLocalStorageDb",pA=1,Co="firebaseLocalStorage",Rg="fbase_key";class di{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function oa(r,e){return r.transaction([Co],e?"readwrite":"readonly").objectStore(Co)}function mA(){const r=indexedDB.deleteDatabase(Pg);return new di(r).toPromise()}function bc(){const r=indexedDB.open(Pg,pA);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Co,{keyPath:Rg})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Co)?e(n):(n.close(),await mA(),e(await bc()))})})}async function Bd(r,e,t){const n=oa(r,!0).put({[Rg]:e,value:t});return new di(n).toPromise()}async function gA(r,e){const t=oa(r,!1).get(e),n=await new di(t).toPromise();return n===void 0?null:n.value}function jd(r,e){const t=oa(r,!0).delete(e);return new di(t).toPromise()}const yA=800,_A=3;class Cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>_A)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ia._getInstance(fA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hA(),!this.activeServiceWorker)return;this.sender=new lA(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await Bd(e,Ro,"1"),await jd(e,Ro),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bd(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>gA(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=oa(s,!1).getAll();return new di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cg.type="LOCAL";const vA=Cg;new ui(3e4,6e4);/**
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
 */function Kl(r,e){return e?At(e):(W(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Wl extends Ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function IA(r){return eA(r.auth,new Wl(r),r.bypassAuthState)}function TA(r){const{auth:e,user:t}=r;return W(t,e,"internal-error"),Zb(t,new Wl(r),r.bypassAuthState)}async function wA(r){const{auth:e,user:t}=r;return W(t,e,"internal-error"),Xb(t,new Wl(r),r.bypassAuthState)}/**
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
 */class kg{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IA;case"linkViaPopup":case"linkViaRedirect":return wA;case"reauthViaPopup":case"reauthViaRedirect":return TA;default:dt(this.auth,"internal-error")}}resolve(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EA=new ui(2e3,1e4);async function bA(r,e,t){if(Tt(r.app))return Promise.reject(et(r,"operation-not-supported-in-this-environment"));const n=ra(r);rg(r,e,sa);const s=Kl(n,t);return new Xt(n,"signInViaPopup",e,s).executeNotNull()}async function AA(r,e,t){const n=oe(r);rg(n.auth,e,sa);const s=Kl(n.auth,t);return new Xt(n.auth,"linkViaPopup",e,s,n).executeNotNull()}class Xt extends kg{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const e=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EA.get())};e()}}Xt.currentPopupAction=null;/**
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
 */const SA="pendingRedirect",to=new Map;class PA extends kg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const n=await RA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RA(r,e){const t=xA(e),n=kA(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function CA(r,e){to.set(r._key(),e)}function kA(r){return At(r._redirectPersistence)}function xA(r){return eo(SA,r.config.apiKey,r.name)}async function DA(r,e,t=!1){if(Tt(r.app))return Promise.reject(Ln(r));const n=ra(r),s=Kl(n,e),o=await new PA(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const VA=10*60*1e3;class NA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!xg(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(et(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ud(e))}saveEventToCache(e){this.cachedEventUids.add(Ud(e)),this.lastProcessedEventTime=Date.now()}}function Ud(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function xg({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xg(r);default:return!1}}/**
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
 */async function OA(r,e={}){return Qr(r,"GET","/v1/projects",e)}/**
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
 */const MA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FA=/^https?/;async function BA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await OA(r);for(const t of e)try{if(jA(t))return}catch{}dt(r,"unauthorized-domain")}function jA(r){const e=wc(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!FA.test(t))return!1;if(MA.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const UA=new ui(3e4,6e4);function $d(){const r=lt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function $A(r){return new Promise((e,t)=>{var n,s,i;function o(){$d(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$d(),t(et(r,"network-request-failed"))},timeout:UA.get()})}if(!((s=(n=lt().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=lt().gapi)===null||i===void 0)&&i.load)o();else{const c=Gb("iframefcb");return lt()[c]=()=>{gapi.load?o():t(et(r,"network-request-failed"))},qb(`${zb()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw no=null,e})}let no=null;function qA(r){return no=no||$A(r),no}/**
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
 */const zA=new ui(5e3,15e3),GA="__/auth/iframe",HA="emulator/auth/iframe",KA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QA(r){const e=r.config;W(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ul(e,HA):`https://${r.config.authDomain}/${GA}`,n={apiKey:e.apiKey,appName:r.name,v:Kn},s=WA.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Ws(n).slice(1)}`}async function JA(r){const e=await qA(r),t=lt().gapi;return W(t,r,"internal-error"),e.open({where:document.body,url:QA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KA,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=et(r,"network-request-failed"),c=lt().setTimeout(()=>{i(o)},zA.get());function l(){lt().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const YA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XA=500,ZA=600,eS="_blank",tS="http://localhost";class qd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nS(r,e,t,n=XA,s=ZA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},YA),{width:n.toString(),height:s.toString(),top:i,left:o}),u=be().toLowerCase();t&&(c=dg(u)?eS:t),ug(u)&&(e=e||tS,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,b])=>`${m}${y}=${b},`,"");if(Lb(u)&&c!=="_self")return rS(e||"",c),new qd(null);const p=window.open(e||"",c,d);W(p,r,"popup-blocked");try{p.focus()}catch{}return new qd(p)}function rS(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const sS="__/auth/handler",iS="emulator/auth/handler",oS=encodeURIComponent("fac");async function zd(r,e,t,n,s,i){W(r.config.authDomain,r,"auth-domain-config-required"),W(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Kn,eventId:s};if(e instanceof sa){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",o_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof hi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await r._getAppCheckToken(),u=l?`#${oS}=${encodeURIComponent(l)}`:"";return`${aS(r)}?${Ws(c).slice(1)}${u}`}function aS({config:r}){return r.emulator?Ul(r,iS):`https://${r.authDomain}/${sS}`}/**
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
 */const Ga="webStorageSupport";class cS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ag,this._completeRedirectFn=DA,this._overrideRedirectResult=CA}async _openPopup(e,t,n,s){var i;kt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zd(e,t,n,wc(),s);return nS(e,o,Hl())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await zd(e,t,n,wc(),s);return uA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(kt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await JA(e),n=new NA(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ga,{type:Ga},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ga];o!==void 0&&t(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=BA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yg()||hg()||zl()}}const lS=cS;var Gd="@firebase/auth",Hd="1.7.9";/**
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
 */class uS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hS(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dS(r){On(new nn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_g(r)},u=new Ub(n,s,i,l);return Kb(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),On(new nn("auth-internal",e=>{const t=ra(e.getProvider("auth").getImmediate());return(n=>new uS(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(Gd,Hd,hS(r)),ot(Gd,Hd,"esm2017")}/**
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
 */const fS=5*60,pS=uf("authIdTokenMaxAge")||fS;let Kd=null;const mS=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>pS)return;const s=t==null?void 0:t.token;Kd!==s&&(Kd=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gS(r=Vc()){const e=Or(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Hb(r,{popupRedirectResolver:lS,persistence:[vA,aA,Ag]}),n=uf("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=mS(i.toString());nA(t,o,()=>o(t.currentUser)),tA(t,c=>o(c))}}const s=af("auth");return s&&Wb(t,`http://${s}`),t}function yS(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}$b({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=et("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",yS().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dS("Browser");const _S={apiKey:"AIzaSyCh5zX-2AgcibKw-tCvXpsFuRA9POYFt-Y",authDomain:"my-trip-record.firebaseapp.com",projectId:"my-trip-record",storageBucket:"my-trip-record.firebasestorage.app",messagingSenderId:"656393008816",appId:"1:656393008816:web:307ff5f1ee6e509242ad75",measurementId:"G-8SQ1KTE1YP"},aa=gf(_S),Ue=Sm(aa,{localCache:Gm({tabManager:Km()})}),vS=pb(aa),fi=gS(aa);function Dg(){return new Promise(r=>{const e=rA(fi,t=>{e(),r(t)})})}const Vg=new It;async function Ql(){return(await bA(fi,Vg)).user}async function Jl(){return(await AA(fi.currentUser,Vg)).user}async function Ng(){await sA(fi)}const IS=Object.freeze(Object.defineProperty({__proto__:null,auth:fi,db:Ue,default:aa,ensureAuth:Dg,linkGoogleAccount:Jl,loginWithGoogle:Ql,logout:Ng,storage:vS},Symbol.toStringTag,{value:"Module"}));function pi(){var e;return(e=te().user)==null?void 0:e.uid}function Lg(){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let t=0;t<6;t++)e+=r.charAt(Math.floor(Math.random()*r.length));return e}async function ko(r){const e=Gs(Ct(Ue,"users",r,"trips"),Fm("createdAt","desc")),n=(await Nr(e)).docs.map(i=>({id:i.id,ownerId:r,...i.data()}));let s=[];try{const i=Gs(Ct(Ue,"users",r,"joinedTrips")),o=await Nr(i);for(const c of o.docs){const{ownerId:l,tripId:u}=c.data(),d=await Yl(l,u);d&&(d.isShared=!0,s.push(d))}}catch{}return[...n,...s].sort((i,o)=>{var u,d;const c=(u=i.createdAt)!=null&&u.toMillis?i.createdAt.toMillis():0;return((d=o.createdAt)!=null&&d.toMillis?o.createdAt.toMillis():0)-c})}async function Yl(r,e){const t=Lt(Ue,"users",r,"trips",e),n=await Vl(t);return n.exists()?{id:n.id,ownerId:r,...n.data()}:null}async function Og(r,e){const t={...e,ownerId:r,createdAt:na()},s=(await ta(Ct(Ue,"users",r,"trips"),t)).id;if(t.startDate&&t.endDate){const i=new Date(t.startDate),o=new Date(t.endDate),c=Math.ceil((o-i)/(1e3*60*60*24))+1;for(let l=1;l<=c;l++)l===1?(await Dn(s,{day:1,time:"08:00",title:"出発",category:"transport",order:0}),await Dn(s,{day:1,time:"15:00",title:"ホテル到着・チェックイン",category:"hotel",order:1})):l===c?(await Dn(s,{day:l,time:"10:00",title:"ホテル出発・帰路へ",category:"transport",order:0}),await Dn(s,{day:l,time:"18:00",title:"自宅到着",category:"other",order:1})):await Dn(s,{day:l,time:"09:00",title:"観光スタート",category:"sightseeing",order:0})}return s}async function Xl(r,e,t){const n=Lt(Ue,"users",r,"trips",e);await Nl(n,t)}async function Mg(r,e){await Ll(Lt(Ue,"users",r,"trips",e))}async function Yn(r,e){var i;const n=((i=te().currentTrip)==null?void 0:i.ownerId)||pi();return(await Nr(Ct(Ue,"users",n,"trips",r,e))).docs.map(o=>({id:o.id,...o.data()}))}async function Xn(r,e,t){var o;const s=((o=te().currentTrip)==null?void 0:o.ownerId)||pi();return(await ta(Ct(Ue,"users",s,"trips",r,e),{...t,createdAt:na()})).id}async function Zn(r,e,t,n){var o;const i=((o=te().currentTrip)==null?void 0:o.ownerId)||pi();await Nl(Lt(Ue,"users",i,"trips",r,e,t),n)}async function er(r,e,t){var i;const s=((i=te().currentTrip)==null?void 0:i.ownerId)||pi();await Ll(Lt(Ue,"users",s,"trips",r,e,t))}const Fg=r=>Yn(r,"flashcards"),Bg=(r,e)=>Xn(r,"flashcards",e),TS=(r,e,t)=>Zn(r,"flashcards",e,t),wS=(r,e)=>er(r,"flashcards",e),Ac=r=>Yn(r,"checklist"),Zl=(r,e)=>Xn(r,"checklist",e),jg=(r,e,t)=>Zn(r,"checklist",e,t),ES=(r,e)=>er(r,"checklist",e),Ug=r=>Yn(r,"schedules"),Dn=(r,e)=>Xn(r,"schedules",e),ro=(r,e,t)=>Zn(r,"schedules",e,t),$g=(r,e)=>er(r,"schedules",e),so=r=>Yn(r,"research"),Sc=(r,e)=>Xn(r,"research",e),Pc=(r,e,t)=>Zn(r,"research",e,t),Rc=(r,e)=>er(r,"research",e),Cc=r=>Yn(r,"budget"),qg=(r,e)=>Xn(r,"budget",e),bS=(r,e,t)=>Zn(r,"budget",e,t),zg=(r,e)=>er(r,"budget",e),Gg=r=>Yn(r,"emergency"),Hg=(r,e)=>Xn(r,"emergency",e),AS=(r,e,t)=>Zn(r,"emergency",e,t),SS=(r,e)=>er(r,"emergency",e);async function eu(r){if(!r)return null;const e=Lt(Ue,"users",r,"settings","master"),t=await Vl(e);return t.exists()?t.data():null}async function Kg(r,e){if(!r)return;const t=Lt(Ue,"users",r,"settings","master");await qm(t,e,{merge:!0})}const Wg=r=>Yn(r,"omiyage"),Qg=(r,e)=>Xn(r,"omiyage",e),Jg=(r,e,t)=>Zn(r,"omiyage",e,t),Yg=(r,e)=>er(r,"omiyage",e);async function PS(r){const e=Gs(Ct(Ue,"sharedTrips"),xl("shareId","==",r)),t=await Nr(e);if(!t.empty){const n=t.docs[0].data();return Yl(n.userId,n.tripId)}return null}async function Xg(r,e,t){const n=Lg();return await ta(Ct(Ue,"sharedTrips"),{shareId:n,password:t,userId:r,tripId:e,createdAt:na()}),n}async function RS(r,e){const t=Gs(Ct(Ue,"sharedTrips"),xl("shareId","==",r)),n=await Nr(t);return n.empty?null:n.docs[0].data()}const CS=Object.freeze(Object.defineProperty({__proto__:null,addBudgetItem:qg,addChecklistItem:Zl,addEmergencyContact:Hg,addFlashcard:Bg,addOmiyageItem:Qg,addResearchNote:Sc,addScheduleItem:Dn,createShareLink:Xg,createTrip:Og,deleteBudgetItem:zg,deleteChecklistItem:ES,deleteEmergencyContact:SS,deleteFlashcard:wS,deleteOmiyageItem:Yg,deleteResearchNote:Rc,deleteScheduleItem:$g,deleteTrip:Mg,generateShareId:Lg,getBudgetItems:Cc,getChecklist:Ac,getEmergencyContacts:Gg,getFlashcards:Fg,getOmiyageList:Wg,getResearchNotes:so,getSchedules:Ug,getTrip:Yl,getTripByShareId:PS,getTrips:ko,getUserId:pi,getUserSettings:eu,updateBudgetItem:bS,updateChecklistItem:jg,updateEmergencyContact:AS,updateFlashcard:TS,updateOmiyageItem:Jg,updateResearchNote:Pc,updateScheduleItem:ro,updateTrip:Xl,updateUserSettings:Kg,verifySharePassword:RS},Symbol.toStringTag,{value:"Module"})),kS="modulepreload",xS=function(r){return"/tabi-shiori/"+r},Wd={},Es=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=xS(l),l in Wd)return;Wd[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":kS,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},DS="https://script.google.com/macros/s/AKfycbwARwcfB8irhjuKvmaifTk-M0FePVPjzVohKRZTXaQtTAvpN1K4iX-cr5rdiAfYpATr/exec",Zg="tabi_shiori_translation_cache";let Ds=new Map;try{const r=localStorage.getItem(Zg);r&&(Ds=new Map(Object.entries(JSON.parse(r))))}catch(r){console.warn("Failed to load translation cache",r)}function VS(){try{const r=Object.fromEntries(Ds);localStorage.setItem(Zg,JSON.stringify(r))}catch{}}async function ft(r,e=!1){if(!r||typeof r!="string"||/^[\d\s\W]+$/.test(r))return r;const{language:t}=te();if(t==="ja")return r;const n=`${r}_${t}`;if(Ds.has(n))return Ds.get(n);if(e)return r;try{const s=new URL(DS);s.searchParams.append("text",r),s.searchParams.append("target",t);const o=await(await fetch(s.toString(),{method:"GET"})).json();return o.success&&o.translatedText?(Ds.set(n,o.translatedText),VS(),o.translatedText):r}catch(s){return console.warn("Translation failed:",s),r}}const Ha=[{id:"greeting",label:"挨拶",emoji:"👋"},{id:"thanks",label:"感謝",emoji:"🙏"},{id:"shopping",label:"買い物",emoji:"🛍️"},{id:"restaurant",label:"レストラン",emoji:"🍽️"},{id:"transport",label:"交通",emoji:"🚌"},{id:"emergency",label:"緊急",emoji:"🆘"},{id:"basic",label:"基本",emoji:"💬"}],qi={en:{greeting:[{phrase:"Hello",reading:"ハロー",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Good morning",reading:"グッド モーニング",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Good evening",reading:"グッド イブニング",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"Good night",reading:"グッド ナイト",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"How are you?",reading:"ハウ アー ユー？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Thank you",reading:"サンキュー",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Thanks a lot",reading:"サンクス ア ロット",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"You're welcome",reading:"ユア ウェルカム",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"No problem",reading:"ノー プロブレム",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"I appreciate it",reading:"アイ アプリシエイト イット",jp:"感謝します",th:"ฉันซาบซึ้ง",en:"I appreciate it"}],shopping:[{phrase:"How much is this?",reading:"ハウ マッチ イズ ディス？",jp:"これはいくらですか？",th:"อันนี้ราคาเท่าไหร่?",en:"How much is this?"},{phrase:"Can I pay by credit card?",reading:"キャン アイ ペイ バイ クレジット カード？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรเครดิตได้ไหม?",en:"Can I pay by credit card?"},{phrase:"I'll take this",reading:"アイル テイク ディス",jp:"これを買います",th:"ฉันเอาอันนี้",en:"I'll take this"},{phrase:"Can you give me a discount?",reading:"キャン ユー ギブ ミー ア ディスカウント？",jp:"安くしてもらえませんか？",th:"ลดราคาให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"Do you have this in a different color?",reading:"ドゥー ユー ハブ ディス イン ア ディファレント カラー？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in a different color?"}],restaurant:[{phrase:"Table for two, please",reading:"テーブル フォー トゥー プリーズ",jp:"2人です",th:"ขอโต๊ะสำหรับสองคนครับ/ค่ะ",en:"Table for two, please"},{phrase:"Can I have the menu?",reading:"キャン アイ ハブ ザ メニュー？",jp:"メニューを見せてください",th:"ขอเมนูหน่อยครับ/ค่ะ",en:"Can I have the menu?"},{phrase:"I'd like to order",reading:"アイド ライク トゥー オーダー",jp:"注文をお願いします",th:"ขอสั่งอาหารครับ/ค่ะ",en:"I'd like to order"},{phrase:"Check, please",reading:"チェック プリーズ",jp:"お会計をお願いします",th:"เช็คบิลด้วยครับ/ค่ะ",en:"Check, please"},{phrase:"Water, please",reading:"ウォーター プリーズ",jp:"お水をください",th:"ขอน้ำเปล่าครับ/ค่ะ",en:"Water, please"}],transport:[{phrase:"Where is the train station?",reading:"ウェア イズ ザ トレイン ステーション？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"I want to go here",reading:"アイ ウォント トゥー ゴー ヒア",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Does this bus go to the airport?",reading:"ダズ ディス バス ゴー トゥー ザ エアポート？",jp:"このバスは空港に行きますか？",th:"รถบัสคันนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Stop here, please",reading:"ストップ ヒア プリーズ",jp:"ここで降ろしてください",th:"จอดตรงนี้ครับ/ค่ะ",en:"Stop here, please"},{phrase:"How long does it take?",reading:"ハウ ロング ダズ イット テイク？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Help!",reading:"ヘルプ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Call an ambulance",reading:"コール アン アンビュランス",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลให้หน่อย",en:"Call an ambulance"},{phrase:"Call the police",reading:"コール ザ ポリス",jp:"警察を呼んでください",th:"เรียกตำรวจให้หน่อย",en:"Call the police"},{phrase:"I lost my passport",reading:"アイ ロスト マイ パスポート",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Where is the hospital?",reading:"ウェア イズ ザ ホスピタル？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Yes",reading:"イエス",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノー",jp:"いいえ",th:"ไม่",en:"No"},{phrase:"Excuse me",reading:"エクスキューズ ミー",jp:"すみません",th:"ขอโทษครับ/ค่ะ",en:"Excuse me"},{phrase:"Sorry",reading:"ソーリー",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"I don't understand",reading:"アイ ドント アンダースタンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},th:{greeting:[{phrase:"สวัสดี",reading:"サワディー",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"อรุณสวัสดิ์",reading:"アルンサワッ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"ราตรีสวัสดิ์",reading:"ラートリーサワッ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"สบายดีไหม",reading:"サバーイ ディー マイ",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"},{phrase:"แล้วพบกันใหม่",reading:"レーオ ポップ ガン マイ",jp:"また会いましょう",th:"แล้วพบกันใหม่",en:"See you again"}],thanks:[{phrase:"ขอบคุณ",reading:"コップクン",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"ขอบคุณมาก",reading:"コップクン マーク",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"ไม่เป็นไร",reading:"マイペンライ",jp:"どういたしまして/大丈夫です",th:"ไม่เป็นไร",en:"You're welcome/No problem"},{phrase:"ด้วยความยินดี",reading:"ドゥアイ クワーム インディー",jp:"喜んで",th:"ด้วยความยินดี",en:"With pleasure"},{phrase:"ขอบคุณสำหรับความช่วยเหลือ",reading:"コップクン サムラップ クワーム チュアイ ルア",jp:"助けてくれてありがとう",th:"ขอบคุณสำหรับความช่วยเหลือ",en:"Thank you for your help"}],shopping:[{phrase:"อันนี้ราคาเท่าไหร่",reading:"アンニー ラーカー タオライ",jp:"これはいくらですか？",th:"อันนี้ราคาเท่าไหร่?",en:"How much is this?"},{phrase:"ลดราคาให้หน่อยได้ไหม",reading:"ロット ラーカー ハイ ノイ ダイ マイ",jp:"安くしてもらえませんか？",th:"ลดราคาให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"เอาอันนี้",reading:"アオ アンニー",jp:"これを買います",th:"เอาอันนี้",en:"I'll take this"},{phrase:"มีสีอื่นไหม",reading:"ミー シー ウーン マイ",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in a different color?"},{phrase:"รับบัตรเครดิตไหม",reading:"ラップ バット クレディット マイ",jp:"クレジットカードは使えますか？",th:"รับบัตรเครดิตไหม?",en:"Do you accept credit cards?"}],restaurant:[{phrase:"ขอเมนูหน่อย",reading:"コー メニュー ノイ",jp:"メニューを見せてください",th:"ขอเมนูหน่อย",en:"Can I have the menu?"},{phrase:"เก็บเงินด้วย",reading:"ゲップ ングン ドゥアイ",jp:"お会計をお願いします",th:"เก็บเงินด้วย",en:"Check, please"},{phrase:"ไม่ใส่ผักชี",reading:"マイ サイ パクチー",jp:"パクチーを入れないでください",th:"ไม่ใส่ผักชี",en:"No coriander"},{phrase:"เผ็ดน้อย",reading:"ペット ノーイ",jp:"辛くしないでください",th:"เผ็ดน้อย",en:"Less spicy"},{phrase:"อร่อยมาก",reading:"アロイ マーク",jp:"とても美味しいです",th:"อร่อยมาก",en:"Very delicious"}],transport:[{phrase:"สถานีรถไฟอยู่ที่ไหน",reading:"サターニー ロッファイ ユー ティーナイ",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"ไปที่นี่",reading:"パイ ティーニー",jp:"ここに行ってください",th:"ไปที่นี่",en:"Go here, please"},{phrase:"จอดตรงนี้",reading:"ジョート トロンニー",jp:"ここで停めてください",th:"จอดตรงนี้",en:"Stop here"},{phrase:"ใช้เวลานานเท่าไหร่",reading:"チャイ ウェーラー ナーン タオライ",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"},{phrase:"เปิดมิเตอร์ด้วย",reading:"プート ミーター ドゥアイ",jp:"メーターを回してください",th:"เปิดมิเตอร์ด้วย",en:"Please turn on the meter"}],emergency:[{phrase:"ช่วยด้วย",reading:"チュアイ ドゥアイ",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"เรียกรถพยาบาลให้หน่อย",reading:"リアク ロッパヤバーン ハイ ノイ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลให้หน่อย",en:"Call an ambulance"},{phrase:"เรียกตำรวจให้หน่อย",reading:"リアク タムルワット ハイ ノイ",jp:"警察を呼んでください",th:"เรียกตำรวจให้หน่อย",en:"Call the police"},{phrase:"ทำพาสปอร์ตหาย",reading:"タム パスポート ハーイ",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"โรงพยาบาลอยู่ที่ไหน",reading:"ローンパヤバーン ユー ティーナイ",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"ใช่",reading:"チャイ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"ไม่ใช่",reading:"マイチャイ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"ขอโทษ",reading:"コートート",jp:"すみません/ごめんなさい",th:"ขอโทษ",en:"Excuse me / Sorry"},{phrase:"ไม่เข้าใจ",reading:"マイ カオジャイ",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"},{phrase:"พูดภาษาอังกฤษได้ไหม",reading:"プート パーサー アングリット ダイ マイ",jp:"英語を話せますか？",th:"พูดภาษาอังกฤษได้ไหม?",en:"Can you speak English?"}]},zh:{greeting:[{phrase:"你好",reading:"ニーハオ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"早上好",reading:"ザオシャンハオ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"晚上好",reading:"ワンシャンハオ",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"晚安",reading:"ワンアン",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"你好吗？",reading:"ニーハオマ？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"谢谢",reading:"シエシエ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"非常感谢",reading:"フェイチャンガンシエ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"不客气",reading:"ブーカーチー",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"没关系",reading:"メイグアンシー",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"辛苦了",reading:"シンクーラ",jp:"お疲れ様でした",th:"ขอบคุณสำหรับความเหนื่อยยาก",en:"Thank you for your hard work"}],shopping:[{phrase:"多少钱？",reading:"ドゥオシャオチエン？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"可以刷卡吗？",reading:"クーイシュアカーマ？",jp:"クレジットカードは使えますか？",th:"รูดบัตรได้ไหม?",en:"Can I use a credit card?"},{phrase:"我要这个",reading:"ウォーヤオジェイガ",jp:"これを買います",th:"เอาอันนี้",en:"I want this"},{phrase:"能便宜一点吗？",reading:"ノォンピエンイーイーディエンマ？",jp:"安くしてもらえませんか？",th:"ลดหน่อยได้ไหม?",en:"Can you make it cheaper?"},{phrase:"有别的颜色吗？",reading:"ヨウビエダユィエンスーマ？",jp:"他の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have other colors?"}],restaurant:[{phrase:"两个人",reading:"リャンガレン",jp:"2人です",th:"สองคน",en:"Two people"},{phrase:"请给我菜单",reading:"チンゲイウォツァイダン",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"Please give me the menu"},{phrase:"我要点餐",reading:"ウォーヤオディエンツァン",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I'd like to order"},{phrase:"买单",reading:"マイダン",jp:"お会計をお願いします",th:"เช็คบิล",en:"Check, please"},{phrase:"请给我水",reading:"チンゲイウォシュイ",jp:"お水をください",th:"ขอน้ำเปล่าหน่อย",en:"Water, please"}],transport:[{phrase:"火车站怎么走？",reading:"フオチャージャンゼンマゾウ？",jp:"駅へはどう行けばいいですか？",th:"ไปสถานีรถไฟยังไง?",en:"How to go to the train station?"},{phrase:"我要去这里",reading:"ウォーヤオチュージェーリー",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"这辆车去机场吗？",reading:"ジェリャンチャチュウジーチャンマ？",jp:"このバス/車は空港に行きますか？",th:"รถคันนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"在这里停",reading:"ザイジェリーティン",jp:"ここで停めてください",th:"จอดตรงนี้",en:"Stop here"},{phrase:"要多长时间？",reading:"ヤオドゥオチャンシージエン？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"救命！",reading:"ジウミン！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"叫救护车",reading:"ジャオジウフーチャー",jp:"救急車を呼んでください",th:"เรียกรถพยาบาล",en:"Call an ambulance"},{phrase:"报警",reading:"バオジン",jp:"警察を呼んでください",th:"แจ้งตำรวจ",en:"Call the police"},{phrase:"我护照丢了",reading:"ウォーフージャオディウラ",jp:"パスポートを無くしました",th:"พาสปอร์ตหาย",en:"I lost my passport"},{phrase:"医院在哪里？",reading:"イーユエンザイナーリー？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"是",reading:"シー",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"不是",reading:"ブーシー",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"不好意思",reading:"ブーハオイースー",jp:"すみません",th:"ขอโทษ (เรียกความสนใจ)",en:"Excuse me"},{phrase:"对不起",reading:"ドゥイブーチー",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"我听不懂",reading:"ウォーティンブードン",jp:"わかりません",th:"ฟังไม่เข้าใจ",en:"I don't understand"}]},ko:{greeting:[{phrase:"안녕하세요",reading:"アンニョンハセヨ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"안녕히 주무세요",reading:"アンニョンヒ ジュムセヨ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"잘 지내셨어요?",reading:"チャル ジネショッソヨ？",jp:"お元気でしたか？",th:"สบายดีไหม?",en:"How have you been?"},{phrase:"안녕히 계세요",reading:"アンニョンヒ ゲセヨ",jp:"さようなら（自分が去る時）",th:"ลาก่อน",en:"Goodbye"},{phrase:"반갑습니다",reading:"パンガプスムニ다",jp:"はじめまして",th:"ยินดีที่ได้รู้จัก",en:"Nice to meet you"}],thanks:[{phrase:"감사합니다",reading:"カムサハムニダ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"정말 감사합니다",reading:"チョンマル カムサハムニダ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"천만에요",reading:"チョンマネヨ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"괜찮아요",reading:"ケンチャナヨ",jp:"大丈夫です/結構です",th:"ไม่เป็นไร",en:"It's okay/No thanks"},{phrase:"수고하셨습니다",reading:"スゴハショッスムニダ",jp:"お疲れ様でした",th:"ขอบคุณที่เหนื่อยยาก",en:"Good job"}],shopping:[{phrase:"얼마예요?",reading:"オルマエヨ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"카드 되나요?",reading:"カドゥ テナヨ？",jp:"カードは使えますか？",th:"รับบัตรไหม?",en:"Can I use a card?"},{phrase:"이걸로 주세요",reading:"イゴルロ ジュセヨ",jp:"これをください",th:"เอาอันนี้",en:"I'll take this"},{phrase:"조금 깎아주세요",reading:"チョグム カッカジュセヨ",jp:"少し安くしてください",th:"ลดราคาให้หน่อย",en:"Please give me a discount"},{phrase:"다른 색상 있나요?",reading:"タルン セクサン インナヨ？",jp:"他の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have other colors?"}],restaurant:[{phrase:"두 명이요",reading:"トゥ ミョンイヨ",jp:"2人です",th:"สองคนค่ะ/ครับ",en:"Two people"},{phrase:"메뉴판 주세요",reading:"メニューパン ジュセヨ",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"Menu, please"},{phrase:"주문할게요",reading:"チュムナルケ요",jp:"注文します",th:"ขอสั่งอาหาร",en:"I will order"},{phrase:"계산서 주세요",reading:"ケサンソ ジュセヨ",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"Check, please"},{phrase:"물 좀 주세요",reading:"ムル チョム ジュセヨ",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"기차역이 어디예요?",reading:"キチャヨギ オディエヨ？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"여기로 가주세요",reading:"ヨギロ カジュセヨ",jp:"ここに行ってください",th:"ไปที่นี่",en:"Please go here"},{phrase:"이 버스 공항 가나요?",reading:"イ ボス コンハン カナヨ？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"여기서 세워주세요",reading:"ヨギソ セウォジュセヨ",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Please stop here"},{phrase:"얼마나 걸려요?",reading:"オルマ나 コルリョヨ？",jp:"どのくらいかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"도와주세요!",reading:"トワジュセヨ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"구급차 불러주세요",reading:"クグプチャ プルロジュセヨ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Please call an ambulance"},{phrase:"경찰 불러주세요",reading:"キョンチャル プルロジュセヨ",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Please call the police"},{phrase:"여권을 잃어버렸어요",reading:"ヨックォヌル イロボリョッソヨ",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"병원이 어디예요?",reading:"ピョンウォニ オディエヨ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"네",reading:"ネ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"아니요",reading:"アニヨ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"실례합니다",reading:"シルレハムニダ",jp:"すみません（尋ねる時）",th:"ขอโทษ",en:"Excuse me"},{phrase:"죄송합니다",reading:"チェソンハムニダ",jp:"ごめんなさい",th:"ขอโทษ",en:"I am sorry"},{phrase:"모르겠어요",reading:"モルゲッソヨ",jp:"わかりません",th:"ไม่รู้/ไม่เข้าใจ",en:"I don't know/understand"}]},es:{greeting:[{phrase:"Hola",reading:"オラ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Buenos días",reading:"ブエノス ディアス",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Buenas tardes",reading:"ブエナス タルデス",jp:"こんにちは/こんばんは",th:"สวัสดีตอนบ่าย",en:"Good afternoon"},{phrase:"Buenas noches",reading:"ブエナス ノチェス",jp:"こんばんは/おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"¿Cómo estás?",reading:"コモ エスタス？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Gracias",reading:"グラシアス",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Muchas gracias",reading:"ムチャス グラシアス",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"De nada",reading:"デ ナダ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"No hay problema",reading:"ノ アイ プロブレマ",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"Muy amable",reading:"ムイ アマブレ",jp:"ご親切に",th:"ใจดีมาก",en:"Very kind"}],shopping:[{phrase:"¿Cuánto cuesta?",reading:"クアント クエスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much does it cost?"},{phrase:"¿Puedo pagar con tarjeta?",reading:"プエド パガール コン タルヘタ？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรได้ไหม?",en:"Can I pay with a card?"},{phrase:"Me lo llevo",reading:"メ ロ ジェボ",jp:"これを買います",th:"เอาอันนี้",en:"I'll take it"},{phrase:"¿Puede hacerme un descuento?",reading:"プエデ アセルメ ウン デスクエント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"¿Tiene esto en otro color?",reading:"ティエネ エスト エン オトロ コロール？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in another color?"}],restaurant:[{phrase:"Una mesa para dos, por favor",reading:"ウナ メサ パラ ドス ポル ファボール",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"El menú, por favor",reading:"エル メニュー ポル ファボール",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Quisiera pedir",reading:"キシエラ ペディール",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"La cuenta, por favor",reading:"ラ クエンタ ポル ファボール",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Agua, por favor",reading:"アグア ポル ファボール",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"¿Dónde está la estación de tren?",reading:"ドンデ エスタ ラ エスタシオン デ トレン？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Quiero ir aquí",reading:"キエロ イール アキ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"¿Este autobús va al aeropuerto?",reading:"エステ アウトブス バ アル アエロプエルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Pare aquí, por favor",reading:"パレ アキ ポル ファボール",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"¿Cuánto tiempo tarda?",reading:"クアント ティエンポ タルダ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"¡Ayuda!",reading:"アユダ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Llame a una ambulancia",reading:"ジャメ ア ウナ アンブランシア",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Llame a la policía",reading:"ジャメ ア ラ ポリシア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"He perdido mi pasaporte",reading:"エ ペルディード ミ パサポルテ",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I have lost my passport"},{phrase:"¿Dónde está el hospital?",reading:"ドンデ エスタ エル オスピタル？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sí",reading:"シ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Disculpe",reading:"ディスクルペ",jp:"すみません",th:"ขอโทษ (เรียก)",en:"Excuse me"},{phrase:"Lo siento",reading:"ロ シエント",jp:"ごめんなさい",th:"ขอโทษ",en:"I'm sorry"},{phrase:"No entiendo",reading:"ノ エンティエンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},it:{greeting:[{phrase:"Ciao",reading:"チャオ",jp:"こんにちは / さようなら",th:"สวัสดี/ลาก่อน",en:"Hello/Goodbye"},{phrase:"Buongiorno",reading:"ブオンジョルノ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Buonasera",reading:"ブオナセーラ",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"Buonanotte",reading:"ブオナノッテ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"Come stai?",reading:"コメ スタイ？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Grazie",reading:"グラッツィエ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Mille grazie",reading:"ミッレ グラッツィエ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"Prego",reading:"プレーゴ",jp:"どういたしまして / どうぞ",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"Di nulla",reading:"ディ ヌッラ",jp:"とんでもない",th:"ไม่เป็นไร",en:"Not at all"},{phrase:"Nessun problema",reading:"ネッスン プロブレーマ",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"}],shopping:[{phrase:"Quanto costa?",reading:"クアント コスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"Posso pagare con la carta di credito?",reading:"ポッソ パガーレ コン ラ カルタ ディ クレディト？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรเครดิตได้ไหม?",en:"Can I pay with credit card?"},{phrase:"Prendo questo",reading:"プレンド クエスト",jp:"これを買います",th:"เอาอันนี้",en:"I'll take this"},{phrase:"Può farmi uno sconto?",reading:"プォ ファルミ ウノ スコント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"Avete questo in un altro colore?",reading:"アヴェーテ クエスト イン ウン アルトロ コローレ？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in another color?"}],restaurant:[{phrase:"Un tavolo per due, per favore",reading:"ウン ターヴォロ ペル ドゥーエ ペル ファヴォーレ",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"Il menù, per favore",reading:"イル メニュー ペル ファヴォーレ",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Vorrei ordinare",reading:"ヴォッレイ オルディナーレ",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"Il conto, per favore",reading:"イル コント ペル ファヴォーレ",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Acqua, per favore",reading:"アックア ペル ファヴォーレ",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"Dov'è la stazione ferroviaria?",reading:"ドヴェ ラ スタツィオーネ フェッロヴィアーリア？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Voglio andare qui",reading:"ヴォーリョ アンダーレ クイ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Questo autobus va all'aeroporto?",reading:"クエスト アウトブス ヴァ アッラエロポルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Si fermi qui, per favore",reading:"シ フェルミ クイ ペル ファヴォーレ",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"Quanto tempo ci vuole?",reading:"クアント テンポ チ ヴオーレ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Aiuto!",reading:"アユート！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Chiami un'ambulanza",reading:"キアーミ ウナンブランツァ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Chiami la polizia",reading:"キアーミ ラ ポリツィーア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"Ho perso il passaporto",reading:"オ ペルソ イル パッサポルト",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Dov'è l'ospedale?",reading:"ドヴェ ロスペダーレ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sì",reading:"スィ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Scusa",reading:"スクーザ",jp:"すみません",th:"ขอโทษ (เรียก)",en:"Excuse me"},{phrase:"Mi dispiace",reading:"ミ ディスピアチェ",jp:"ごめんなさい",th:"ขอโทษ",en:"I am sorry"},{phrase:"Non capisco",reading:"ノン カピスコ",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},pt:{greeting:[{phrase:"Olá",reading:"オラ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Bom dia",reading:"ボン ジーア",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Boa tarde",reading:"ボア タルヂ",jp:"こんにちは（午後）",th:"สวัสดีตอนบ่าย",en:"Good afternoon"},{phrase:"Boa noite",reading:"ボア ノイチ",jp:"こんばんは/おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"Tudo bem?",reading:"トゥド ベン？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Obrigado(a)",reading:"オブリガード（ダ）",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Muito obrigado(a)",reading:"ムイント オブリガード（ダ）",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"De nada",reading:"ジ ナダ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"Não há de quê",reading:"ナォン ア ジ ケ",jp:"とんでもないです",th:"ไม่เป็นไร",en:"Not at all"},{phrase:"Imagina",reading:"イマジナ",jp:"気にしないでください",th:"ช่างมันเถอะ",en:"Don't mention it"}],shopping:[{phrase:"Quanto custa?",reading:"クアント クスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much does it cost?"},{phrase:"Posso pagar com cartão?",reading:"ポッソ パガール コン カルタォン？",jp:"カードで払えますか？",th:"จ่ายด้วยบัตรได้ไหม?",en:"Can I pay with card?"},{phrase:"Vou levar este",reading:"ヴォウ レヴァール エスチ",jp:"これを買います",th:"เอาอันนี้",en:"I will take this"},{phrase:"Tem desconto?",reading:"テン デスコント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Is there a discount?"},{phrase:"Tem em outra cor?",reading:"テン エン オウトラ コール？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have it in another color?"}],restaurant:[{phrase:"Uma mesa para dois, por favor",reading:"ウマ メザ パラ ドイス ポル ファヴォール",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"O cardápio, por favor",reading:"オ カルダピオ ポル ファヴォール",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Gostaria de fazer o pedido",reading:"ゴスタリア ジ ファゼール オ ペジード",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"A conta, por favor",reading:"ア コンタ ポル ファヴォール",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Água, por favor",reading:"アグア ポル ファヴォール",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"Onde fica a estação de trem?",reading:"オンヂ フィカ ア エスタサォン ジ トレン？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Quero ir para cá",reading:"ケロ イール パラ カ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Este ônibus vai para o aeroporto?",reading:"エスチ オニブス ヴァイ パラ オ アエロポルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Pare aqui, por favor",reading:"パリ アキ ポル ファヴォール",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"Quanto tempo demora?",reading:"クアント テンポ デモラ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Socorro!",reading:"ソホーホ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Chame uma ambulância",reading:"シャミ ウマ アンブランシア",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Chame a polícia",reading:"シャミ ア ポリシア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"Perdi meu passaporte",reading:"ペルジ メウ パサポルチ",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Onde fica o hospital?",reading:"オンヂ フィカ オ オスピタウ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sim",reading:"シン",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"Não",reading:"ナォン",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Com licença",reading:"コン リセンサ",jp:"すみません",th:"ขออนุญาต/ขอโทษ",en:"Excuse me"},{phrase:"Desculpe",reading:"デスクウピ",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"Não entendo",reading:"ナォン エンテンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]}},Qd={US:"en",GB:"en",AU:"en",CA:"en",NZ:"en",IE:"en",ZA:"en",IN:"en",PH:"en",SG:"en",TH:"th",CN:"zh",TW:"zh",HK:"zh",MO:"zh",KR:"ko",KP:"ko",ES:"es",MX:"es",AR:"es",CO:"es",PE:"es",CL:"es",EC:"es",GT:"es",CU:"es",BO:"es",DO:"es",HN:"es",PY:"es",SV:"es",NI:"es",CR:"es",PA:"es",UY:"es",VE:"es",IT:"it",SM:"it",VA:"it",CH:"it",PT:"pt",BR:"pt",MZ:"pt",AO:"pt",CV:"pt",GW:"pt",ST:"pt",JP:"ja"};function tu(r){if(!r)return"en";const e=r.toUpperCase();if(Qd[e])return Qd[e];const t=r.toLowerCase();return t.includes("タイ")||t.includes("thai")?"th":t.includes("台湾")||t.includes("taiwan")||t.includes("中国")||t.includes("china")||t.includes("香港")||t.includes("hong")?"zh":t.includes("韓国")||t.includes("korea")?"ko":t.includes("スペイン")||t.includes("メキシコ")||t.includes("spain")||t.includes("mexico")?"es":t.includes("イタリア")||t.includes("italy")?"it":t.includes("ポルトガル")||t.includes("ブラジル")||t.includes("portugal")||t.includes("brazil")?"pt":t.includes("日本")||t.includes("japan")?"ja":"en"}function xo(r){return{en:"🇺🇸",th:"🇹🇭",zh:"🇹🇼",ko:"🇰🇷",es:"🇪🇸",it:"🇮🇹",pt:"🇵🇹",ja:"🇯🇵"}[r]||"🏳️"}const Vs=[{code:"TW",name:{ja:"台湾",en:"Taiwan",th:"ไต้หวัน"},flag:"🇹🇼"},{code:"KR",name:{ja:"韓国",en:"South Korea",th:"เกาหลีใต้"},flag:"🇰🇷"},{code:"US",name:{ja:"アメリカ",en:"United States",th:"สหรัฐอเมริกา"},flag:"🇺🇸"},{code:"TH",name:{ja:"タイ",en:"Thailand",th:"ไทย"},flag:"🇹🇭"},{code:"CN",name:{ja:"中国",en:"China",th:"จีน"},flag:"🇨🇳"},{code:"HK",name:{ja:"香港",en:"Hong Kong",th:"ฮ่องกง"},flag:"🇭🇰"},{code:"SG",name:{ja:"シンガポール",en:"Singapore",th:"สิงคโปร์"},flag:"🇸🇬"},{code:"AU",name:{ja:"オーストラリア",en:"Australia",th:"ออสเตรเลีย"},flag:"🇦🇺"},{code:"GB",name:{ja:"イギリス",en:"United Kingdom",th:"สหราชอาณาจักร"},flag:"🇬🇧"},{code:"FR",name:{ja:"フランス",en:"France",th:"ฝรั่งเศส"},flag:"🇫🇷"},{code:"IT",name:{ja:"イタリア",en:"Italy",th:"อิตาลี"},flag:"🇮🇹"},{code:"ES",name:{ja:"スペイン",en:"Spain",th:"สเปน"},flag:"🇪🇸"},{code:"DE",name:{ja:"ドイツ",en:"Germany",th:"เยอรมนี"},flag:"🇩🇪"},{code:"CA",name:{ja:"カナダ",en:"Canada",th:"แคนาดา"},flag:"🇨🇦"},{code:"PH",name:{ja:"フィリピン",en:"Philippines",th:"ฟิลิปปินส์"},flag:"🇵🇭"},{code:"VN",name:{ja:"ベトナム",en:"Vietnam",th:"เวียดนาม"},flag:"🇻🇳"},{code:"MY",name:{ja:"マレーシア",en:"Malaysia",th:"มาเลเซีย"},flag:"🇲🇾"},{code:"ID",name:{ja:"インドネシア",en:"Indonesia",th:"อินโดนีเซีย"},flag:"🇮🇩"},{code:"PT",name:{ja:"ポルトガル",en:"Portugal",th:"โปรตุเกส"},flag:"🇵🇹"},{code:"BR",name:{ja:"ブラジル",en:"Brazil",th:"บราซิล"},flag:"🇧🇷"},{code:"MX",name:{ja:"メキシコ",en:"Mexico",th:"เม็กซิโก"},flag:"🇲🇽"},{code:"CH",name:{ja:"スイス",en:"Switzerland",th:"สวิตเซอร์แลนด์"},flag:"🇨🇭"},{code:"JP",name:{ja:"日本",en:"Japan",th:"ญี่ปุ่น"},flag:"🇯🇵"},{code:"OTHER",name:{ja:"その他 (自由入力)",en:"Other",th:"อื่นๆ"},flag:"🏳️"}],NS={async render(){const{currentTrip:r,trips:e,user:t}=te();if(!r){let y="";return e&&e.length>0&&(y=`
          <div class="portal-trips" style="margin-top: 32px;">
            <h2 class="text-center mb-md" style="font-size: 1.2rem; color: var(--text-dark);">${I("yourTrips")||"あなたの旅行"}</h2>
            <div class="trips-list" style="display: flex; flex-direction: column; gap: 12px; padding: 0 16px;">
              ${e.map(b=>`
                <div class="card portal-trip-card" data-trip-id="${b.id}" style="cursor: pointer; display: flex; align-items: center; padding: 16px;">
                  <span style="font-size: 24px; margin-right: 12px;">✈️</span>
                  <div style="flex: 1; min-width: 0;">
                    <h3 style="margin: 0; font-size: 1.1rem; color: var(--text-dark); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${b.title||I("untitledTrip")}</h3>
                    <p style="margin: 4px 0 0; font-size: 0.85rem; color: var(--text-muted);">${b.startDate||""} ${b.endDate?"〜 "+b.endDate:""}</p>
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
            <h1 class="welcome-title">${I("welcomeTitle")}</h1>
            <p class="welcome-text">${I("welcomeDesc")}</p>
            <button id="btn-create-trip" class="btn btn-primary">${I("btnWelcomeCreate")}</button>
            <button id="btn-join-trip" class="btn btn-secondary mt-md" style="width:100%; border:1px solid var(--color-primary); background:#fff; color:var(--color-primary); margin-top:16px;">既存の旅行に参加</button>
            ${!t||t.isAnonymous?`
            <button id="btn-welcome-google" class="btn btn-secondary mt-md" style="width:100%; border:1px solid #ccc; background:#fff; color:#333; margin-top:16px;">
              <span style="margin-right:8px">🌐</span>${I("btnWelcomeGoogle")}
            </button>
            `:""}
          </div>
          ${y}
          <div class="text-center" style="margin-top: 40px; margin-bottom: 40px;">
            <span class="text-xs text-muted">Version 1.1.0</span>
          </div>
        </div>
      `}const n=new Date;n.setHours(0,0,0,0);const s=new Date(r.startDate),i=new Date(r.endDate);let o="";if(n<s){const y=Math.ceil((s-n)/864e5);o=`${I("countdownBefore")} <strong>${y}</strong> ${I("countdownDays")}`}else if(n>=s&&n<=i){const y=Math.ceil((n-s)/864e5)+1;o=`${I("countdownDuring")} <strong>${y}</strong> ${I("countdownDuringDays")}`}else o=I("countdownAfter");const c=y=>{if(!y)return"";const b=new Date(y),x=io();return x==="en"?b.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):x==="th"?b.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}):`${b.getFullYear()}年${b.getMonth()+1}月${b.getDate()}日`},l=await ft(r.title)||I("untitledTrip"),u=(r.destinations||[]).map(async y=>{const b=Vs.find(C=>C.code===y.country);let x="🏳️";if(b)x=b.flag;else{const C=tu(y.country);x=xo(C)}return`<span style="font-size: 2rem;">${x}</span>`}),d=await Promise.all(u),p=(r.members||[]).map(async y=>{const b=y.name||"";return`
        <div class="member-avatar" title="${b}">
          <span class="member-icon">${y.icon||"😊"}</span>
          <span class="member-name">${b}</span>
        </div>
      `}),m=await Promise.all(p);return`
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
            ${d.join("")}
          </div>

          <div class="members-section">
            <h3>${I("members")}</h3>
            <div class="members-row">
              ${m.join("")}
            </div>
          </div>
          
          <div class="features-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px;">
            <div class="feature-card" data-route="/flashcard">
              <span class="feature-icon">🗣️</span>
              <span class="feature-label">${I("flashcardTitle")}</span>
            </div>
            <div class="feature-card" data-route="/checklist">
              <span class="feature-icon">🎒</span>
              <span class="feature-label">${I("checklistTitle")}</span>
            </div>
            <div class="feature-card" data-route="/schedule">
              <span class="feature-icon">📅</span>
              <span class="feature-label">${I("scheduleTitle")}</span>
            </div>
            <div class="feature-card" data-route="/research">
              <span class="feature-icon">🔍</span>
              <span class="feature-label">${I("researchTitle")}</span>
            </div>
            <div class="feature-card" data-route="/budget">
              <span class="feature-icon">💰</span>
              <span class="feature-label">${I("budgetTitle")}</span>
            </div>
            <div class="feature-card" data-route="/omiyage">
              <span class="feature-icon">🎁</span>
              <span class="feature-label">${I("omiyageTitle")}</span>
            </div>
          </div>

        <button id="btn-edit-trip" class="btn btn-secondary btn-small w-full mt-md" style="margin-bottom: 16px;">
          ${I("btnEditTrip")}
        </button>

        <div class="text-center mt-lg" style="margin-bottom: 24px;">
          <span class="text-xs text-muted">Version 1.1.0</span>
        </div>
      </div>
    `},init(){var r,e,t,n;(r=document.getElementById("btn-create-trip"))==null||r.addEventListener("click",()=>le("/trip/new")),(e=document.getElementById("btn-join-trip"))==null||e.addEventListener("click",()=>{const s=window.prompt("旅行の共有パスワード（コード）を入力してください:");s&&Es(()=>Promise.resolve().then(()=>CS),void 0).then(async({verifySharePassword:i,getUserId:o})=>{try{const c=await i(s,"");if(!c){alert("パスワードが無効です");return}const l=o();if(l){const{db:u}=await Es(async()=>{const{db:B}=await Promise.resolve().then(()=>IS);return{db:B}},void 0),{collection:d,addDoc:p,query:m,where:y,getDocs:b,serverTimestamp:x}=await Es(async()=>{const{collection:B,addDoc:O,query:q,where:M,getDocs:F,serverTimestamp:T}=await Promise.resolve().then(()=>$E);return{collection:B,addDoc:O,query:q,where:M,getDocs:F,serverTimestamp:T}},void 0),C=m(d(u,"users",l,"joinedTrips"),y("tripId","==",c.tripId));(await b(C)).empty&&await p(d(u,"users",l,"joinedTrips"),{ownerId:c.userId,tripId:c.tripId,joinedAt:x()}),alert("旅行に参加しました！"),window.location.reload()}else alert("ログインが必要です。")}catch{alert("エラーが発生しました")}})}),(t=document.getElementById("btn-edit-trip"))==null||t.addEventListener("click",()=>le("/trip/edit")),document.querySelectorAll(".portal-trip-card").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-trip-id"),{trips:o}=te(),c=o.find(l=>l.id===i);c&&Es(async()=>{const{setState:l}=await Promise.resolve().then(()=>By);return{setState:l}},void 0).then(({setState:l})=>{l({currentTripId:i,currentTrip:c}),localStorage.setItem("currentTripId",i),le("/",!0,!0)})})}),(n=document.getElementById("btn-welcome-google"))==null||n.addEventListener("click",async()=>{try{const{user:s}=te();s&&s.isAnonymous?await Jl():await Ql(),window.location.reload()}catch(s){s.code!=="auth/popup-closed-by-user"&&s.code!=="auth/cancelled-popup-request"&&alert("ログインに失敗しました: "+s.message)}}),document.querySelectorAll(".feature-card").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-route");i&&le(i)})})}};let Y={activeLang:"en",activeCategory:"greeting",currentCardIndex:0,flashcards:[],customCards:[]};const LS={render(){return`
      <div class="page flashcard-page">
        <header class="page-header">
          <button class="btn-back" id="btn-back">←</button>
          <h2 class="page-title">🗣️ ${I("flashcardTitle")||"トラベル単語帳"}</h2>
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
                <div class="swipe-hint">${I("tapToFlip")||"タップで裏返す 👆"}</div>
              </div>
              <div class="flashcard-face flashcard-back">
                <div style="display:flex; justify-content:center; align-items:center; gap: 12px; margin-bottom: 8px;">
                  <h3 id="fc-back-text" class="flashcard-translation" style="margin: 0;"></h3>
                  <button id="fc-play-btn" class="btn-icon" style="font-size: 1.5rem; background: var(--bg-soft); border-radius: 50%; width: 40px; height: 40px;">🔊</button>
                </div>
                <p id="fc-back-reading" class="flashcard-reading"></p>
                <div class="swipe-hint">${I("tapToReturn")||"タップで戻る 🔙"}</div>
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
            <div class="modal-title">${I("addNewPhrase")||"新しいフレーズを追加"}</div>
            <div class="form-group mt-md">
              <label class="form-label">${I("wordToSearch")||"調べたい言葉（あなたの言語）"}</label>
              <input type="text" id="fc-new-front" placeholder="${I("wordPlaceholder")||"例: こんにちは"}" class="form-input">
            </div>
            <div class="form-group">
              <label class="form-label">${I("localSaying")||"現地での言い方"}</label>
              <input type="text" id="fc-new-back" placeholder="${I("localPlaceholder")||"例: Hello"}" class="form-input">
            </div>
            <div class="form-group">
              <label class="form-label">${I("readingMemo")||"読み方メモ"}</label>
              <input type="text" id="fc-new-reading" placeholder="${I("readingPlaceholder")||"例: ハロー"}" class="form-input">
            </div>
            <button id="fc-modal-save" class="btn btn-primary w-full mt-lg">${I("saveBtn")||"保存する"}</button>
            <button type="button" class="btn btn-secondary w-full mt-sm" id="fc-modal-close">${I("cancelBtn")||"キャンセル"}</button>
          </div>
        </div>
      </div>
    `},init(){var p,m,y,b,x,C,V,B,O,q;const r=te(),e=r.currentTrip,t=io(),n=t==="ja"?"jp":t;let s=["en"];if(e&&e.destinations){const M=e.destinations.map(F=>tu(F.country)).filter(Boolean);M.length>0&&(s=[...new Set(M)])}Y.activeLang=s[0]||"en";const i=document.getElementById("fc-target-langs");s.length>1?i.innerHTML=s.map(M=>`<span class="flag-tab" data-lang="${M}" style="font-size: 2.5rem; cursor: pointer; transition: opacity 0.2s; opacity: ${M===Y.activeLang?"1":"0.4"};">
          ${xo(M)}
        </span>`).join(""):s.length===1&&(i.innerHTML=`<span style="font-size: 2.5rem;">${xo(s[0])}</span>`);const o=document.getElementById("fc-categories"),c=Ha?Ha.map(M=>M.id):["greeting"];c.length>0&&(Y.activeCategory=c[0],o.innerHTML=Ha.map(M=>`<button class="tab ${M.id===Y.activeCategory?"active":""}" data-cat="${M.id}">
          ${M.emoji} ${M.label}
        </button>`).join(""));const l=()=>{let M=[];qi&&qi[Y.activeLang]&&qi[Y.activeLang][Y.activeCategory]&&(M=[...qi[Y.activeLang][Y.activeCategory]]);const F=Y.customCards.filter(T=>T.category===Y.activeCategory&&T.lang===Y.activeLang);Y.flashcards=[...M,...F],Y.currentCardIndex=0,u()},u=()=>{const M=Y.flashcards[Y.currentCardIndex],F=document.getElementById("fc-card");if(!M){document.getElementById("fc-front-text").textContent="カードがありません",document.getElementById("fc-back-text").textContent="右下の➕から追加！",document.getElementById("fc-back-reading").textContent="",document.getElementById("fc-counter").textContent="0 / 0",F.classList.remove("flipped");return}const T=M.userFront||M[n]||M.en||M.phrase,_=M.targetBack||M.phrase||"",v=M.reading||"";document.getElementById("fc-front-text").textContent=T,document.getElementById("fc-back-text").textContent=_;const E=document.getElementById("fc-back-reading");t==="ja"&&v?(E.style.display="block",E.textContent=v):(E.style.display="none",E.textContent=""),document.getElementById("fc-counter").textContent=`${Y.currentCardIndex+1} / ${Y.flashcards.length}`,F.classList.remove("flipped");const R=JSON.parse(localStorage.getItem("tabi_shiori_fav_cards")||"[]").includes(M.id||T);document.getElementById("fc-fav-btn").textContent=R?"🌟":"⭐",document.getElementById("fc-fav-btn").classList.toggle("active",R)};e?Fg(e.id).then(M=>{Y.customCards=M,l()}):l(),(p=document.getElementById("btn-back"))==null||p.addEventListener("click",()=>le("/")),(m=document.getElementById("fc-card-wrapper"))==null||m.addEventListener("click",M=>{M.target.closest("#fc-play-btn")||document.getElementById("fc-card").classList.toggle("flipped")}),(y=document.getElementById("fc-play-btn"))==null||y.addEventListener("click",M=>{M.stopPropagation();const F=Y.flashcards[Y.currentCardIndex],T=(F==null?void 0:F.targetBack)||(F==null?void 0:F.phrase);if(T&&window.speechSynthesis){window.speechSynthesis.cancel();const _=new SpeechSynthesisUtterance(T),v={zh:"zh-CN",th:"th-TH",ko:"ko-KR",es:"es-ES",it:"it-IT",pt:"pt-PT",en:"en-US",ja:"ja-JP"};_.lang=v[Y.activeLang]||Y.activeLang,window.speechSynthesis.speak(_)}}),(b=document.getElementById("fc-prev-btn"))==null||b.addEventListener("click",M=>{M.stopPropagation(),Y.currentCardIndex>0&&(Y.currentCardIndex--,u())}),(x=document.getElementById("fc-next-btn"))==null||x.addEventListener("click",M=>{M.stopPropagation(),Y.currentCardIndex<Y.flashcards.length-1&&(Y.currentCardIndex++,u())}),document.querySelectorAll(".flag-tab").forEach(M=>{M.addEventListener("click",F=>{const T=F.target.closest(".flag-tab");Y.activeLang!==T.dataset.lang&&(document.querySelectorAll(".flag-tab").forEach(_=>_.style.opacity="0.4"),T.style.opacity="1",Y.activeLang=T.dataset.lang,l())})}),(C=document.getElementById("fc-categories"))==null||C.addEventListener("click",M=>{const F=M.target.closest(".tab");F&&!F.classList.contains("active")&&(document.querySelectorAll("#fc-categories .tab").forEach(T=>T.classList.remove("active")),F.classList.add("active"),Y.activeCategory=F.dataset.cat,l())}),(V=document.getElementById("fc-fav-btn"))==null||V.addEventListener("click",M=>{M.stopPropagation();const F=Y.flashcards[Y.currentCardIndex];if(!F)return;const T=F.userFront||F[n]||F.phrase,_=F.id||T;let v=JSON.parse(localStorage.getItem("tabi_shiori_fav_cards")||"[]");v.includes(_)?v=v.filter(E=>E!==_):v.push(_),localStorage.setItem("tabi_shiori_fav_cards",JSON.stringify(v)),u()});const d=document.getElementById("fc-modal");(B=document.getElementById("fc-add-btn"))==null||B.addEventListener("click",()=>{document.getElementById("fc-new-front").value="",document.getElementById("fc-new-back").value="",document.getElementById("fc-new-reading").value="",d.classList.add("active")}),(O=document.getElementById("fc-modal-close"))==null||O.addEventListener("click",()=>{d.classList.remove("active")}),d==null||d.addEventListener("click",M=>{M.target===d&&d.classList.remove("active")}),(q=document.getElementById("fc-modal-save"))==null||q.addEventListener("click",async()=>{const M=document.getElementById("fc-new-front").value.trim(),F=document.getElementById("fc-new-back").value.trim(),T=document.getElementById("fc-new-reading").value.trim();if(!(!M||!F)&&e&&r.user){const _={userFront:M,targetBack:F,reading:T,category:Y.activeCategory,lang:Y.activeLang};await Bg(e.id,_),Y.customCards.push(_),l(),d.classList.remove("active")}})}},OS=[{category:"documents",items:["パスポート","航空券(予約確認書)","ホテル予約確認書","海外旅行保険証","クレジットカード"]},{category:"electronics",items:["スマホ充電器","モバイルバッテリー","変換プラグ","イヤホン","カメラ"]},{category:"clothing",items:["着替え","下着","靴下","パジャマ","上着/羽織り"]},{category:"toiletries",items:["歯ブラシ","歯磨き粉","シャンプー","日焼け止め","常備薬"]},{category:"other",items:["現金","エコバッグ","雨具","ガイドブック"]}],Jd={documents:{label:I("catDocuments")||"📄 書類",color:"var(--color-yellow)"},electronics:{label:I("catElectronics")||"🔌 電子機器",color:"var(--color-blue)"},clothing:{label:I("catClothing")||"👕 衣類",color:"var(--color-pink)"},toiletries:{label:I("catToiletries")||"🧴 洗面用品",color:"var(--color-mint)"},other:{label:I("catOtherList")||"📦 その他",color:"#e0c3fc"}},MS=["パスポート","航空券","航空券(予約確認書)"];let _r=[];async function FS(){return`
    <div class="page checklist-page">
      <header class="page-header">
        <button class="back-btn" id="cl-back-btn">←</button>
        <h2>${I("checklistTitle")}</h2>
      </header>

      <div class="progress-container">
        <div class="progress-text" id="cl-progress-text">0/0 ${I("preparing")}</div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" id="cl-progress-fill"></div>
        </div>
      </div>

      <div class="checklist-container" id="cl-container">
        <!-- Rendered dynamically -->
      </div>
    </div>
  `}async function BS(){if(!te().currentTrip){document.getElementById("cl-container").innerHTML=`<p class="empty-state">${I("noTripSelected")}</p>`;return}jS(),await ey()}async function ey(){const r=te(),e=r.currentTrip;if(_r=await Ac(e.id),_r.length===0){let t=OS;if(r.user){const n=await eu(r.user.uid);n&&n.checklistMaster&&(t=n.checklistMaster)}for(const n of t)for(const s of n.items){const i={name:s,category:n.category,checked:!1,important:MS.includes(s),assignee:null};await Zl(e.id,i)}_r=await Ac(e.id)}Yd(!0),Yd(!1)}async function Yd(r=!1){const e=document.getElementById("cl-container");e.innerHTML="";for(const t of Object.keys(Jd)){const n=Jd[t],s=_r.filter(u=>u.category===t);if(s.length===0)continue;const i=document.createElement("div");i.className="checklist-section";const o=document.createElement("div");o.className="checklist-header",o.style.backgroundColor=n.color,o.innerHTML=`<h3>${n.label}</h3><span class="toggle-icon">▼</span>`,o.addEventListener("click",()=>{const u=i.querySelector(".checklist-items");u.classList.toggle("hidden"),o.querySelector(".toggle-icon").textContent=u.classList.contains("hidden")?"▶":"▼"}),i.appendChild(o);const c=document.createElement("div");c.className="checklist-items";for(const u of s){u.checked;const d=document.createElement("div");d.className=`checklist-item ${u.checked?"checked":""}`;const p=await ft(u.name,r)||u.name;d.innerHTML=`
        <div class="checkbox-custom" data-id="${u.id}"></div>
        <div class="item-name">
          ${u.important?'<span class="important-mark">❗</span>':""}
          ${p}
        </div>
      `,d.querySelector(".checkbox-custom").addEventListener("click",m=>{u.checked=!u.checked,u.checked?d.classList.add("checked"):d.classList.remove("checked"),Ka();const y=te();jg(y.currentTrip.id,u.id,{checked:u.checked}).catch(b=>{console.error("Failed to update checklist item:",b),u.checked=!u.checked,d.classList.toggle("checked"),Ka()})}),c.appendChild(d)}const l=document.createElement("div");l.className="add-item-container",l.innerHTML=`
      <input type="text" class="add-item-input" placeholder="${I("addItemPlaceholder")||"+ アイテムを追加"}">
    `,l.querySelector(".add-item-input").addEventListener("keypress",async u=>{if(u.key!=="Enter")return;const d=u.target;if(d.value.trim()){const p=te();await Zl(p.currentTrip.id,{name:d.value.trim(),category:t,checked:!1,important:!1,assignee:null}),await ey()}}),c.appendChild(l),i.appendChild(c),e.appendChild(i)}Ka()}function Ka(){const r=_r.length,e=_r.filter(s=>s.checked).length,t=document.getElementById("cl-progress-text"),n=document.getElementById("cl-progress-fill");if(r>0&&t&&n){const s=Math.round(e/r*100);n.style.width=`${s}%`,e===r?(t.textContent=`${e}/${r} ${I("perfect")||"完璧！🎉"}`,n.style.backgroundColor="var(--color-mint)"):(t.textContent=`${e}/${r} ${I("preparing")||"準備中..."}`,n.style.backgroundColor="var(--color-pink-deep)")}}function jS(){var r;(r=document.getElementById("cl-back-btn"))==null||r.addEventListener("click",()=>le("/"))}const US={render:FS,init:BS};function $S(r,e=300,t=.6){return new Promise((n,s)=>{const i=new FileReader;i.readAsDataURL(r),i.onload=o=>{const c=new Image;c.src=o.target.result,c.onload=()=>{const l=document.createElement("canvas");let u=c.width,d=c.height;u>e&&(d=Math.round(d*e/u),u=e),l.width=u,l.height=d,l.getContext("2d").drawImage(c,0,0,u,d),n(l.toDataURL(r.type||"image/jpeg",t))},c.onerror=l=>s(l)},i.onerror=o=>s(o)})}let zi=1,nt="plan",vt=[];const Wa=()=>({sightseeing:{icon:"🏛️",label:I("catSightseeing")||"観光"},meal:{icon:"🍽️",label:I("catMeal")||"食事"},transport:{icon:"🚌",label:I("catTransport")||"移動"},flight:{icon:"✈️",label:I("catFlight")||"フライト"},hotel:{icon:"🏨",label:I("catHotelSch")||"ホテル"},shopping:{icon:"🛒",label:I("catShopping")||"買い物"},activity:{icon:"🎭",label:I("catActivity")||"体験"},other:{icon:"✨",label:I("catOther")||"その他"}}),qS={render(){return`
      <div class="page schedule-page">
        <header class="page-header">
          <button class="btn-icon btn-back" id="btn-back-schedule">←</button>
          <h2>${I("scheduleTitle")}</h2>
        </header>

        <div class="mode-toggle">
          <button class="mode-btn ${nt==="plan"?"active":""}" data-mode="plan">${I("planMode")}</button>
          <button class="mode-btn ${nt==="journal"?"active":""}" data-mode="journal">${I("journalMode")}</button>
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
            <h3>${I("addScheduleModalTitle")}</h3>
            <form id="scheduleForm">
              <input type="hidden" id="scheduleItemId">
              <div class="form-group mb-sm" style="position:relative;">
                <span style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--text-muted); pointer-events:none;">${I("timeLabel")||"時間"}</span>
                <input type="time" id="itemTime" class="form-input" style="width:100%; padding:12px 12px 12px 60px; border-radius:8px; border:1px solid #ddd;" required>
              </div>
              <input type="text" id="itemTitle" class="form-input" placeholder="${I("itemTitlePlaceholder")}" required style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
              <select id="itemCategory" class="form-input" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
                ${Object.entries(Wa()).map(([r,e])=>`<option value="${r}">${e.icon} ${e.label}</option>`).join("")}
              </select>
              <input type="text" id="itemTransport" class="form-input" placeholder="${I("itemTransportPlaceholder")}" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px;">
              <textarea id="itemMemo" class="form-input" placeholder="${I("itemMemoPlaceholder")}" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px; min-height:80px;"></textarea>
              <button type="submit" class="btn btn-primary w-full mt-lg">${I("btnAdd")}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="schedule-cancel">${I("cancelBtn")||"キャンセル"}</button>
            </form>
          </div>
        </div>

        <!-- ジャーナル記録モーダル -->
        <div class="modal-overlay" id="journalModal">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <span class="close-modal">&times;</span>
            <h3>${I("addJournalModalTitle")}</h3>
            <form id="journalForm">
              <input type="hidden" id="journalItemId">

              <div class="mb-sm">
                <label style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${I("journalRating")}</label>
                <div class="stars">
                  ${[1,2,3,4,5].map(r=>`<span class="star" data-rating="${r}">★</span>`).join("")}
                </div>
                <input type="hidden" id="journalRating" value="0">
              </div>

              <textarea id="journalText" class="form-input" placeholder="${I("journalTextPlaceholder")}" style="width:100%; padding:10px; border-radius:8px; border:1px solid #ddd; margin-bottom:8px; min-height:60px;"></textarea>
              
              <div class="photo-upload mb-sm">
                <label style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${I("journalAddPhoto")}</label>
                <input type="file" id="journalPhotos" accept="image/*" multiple style="font-size:0.9rem;">
              </div>

              <button type="submit" class="btn btn-primary w-full mt-md">${I("btnSave")}</button>
              <button type="button" class="btn btn-secondary w-full mt-sm" id="journal-cancel">${I("cancelBtn")||"キャンセル"}</button>
            </form>
          </div>
        </div>
      </div>
    `},async init(){var u,d,p;(u=document.getElementById("btn-back-schedule"))==null||u.addEventListener("click",()=>le("/"));const e=te().currentTrip;if(!e){alert(I("noTripSelected")||"旅行が選択されていません。"),le("/");return}const t=new Date(e.startDate),n=new Date(e.endDate),s=Math.ceil((n-t)/(1e3*60*60*24))+1,i=document.getElementById("dayTabs");let o="";for(let m=1;m<=s;m++){const y=new Date(t);y.setDate(y.getDate()+(m-1));const b=`${y.getMonth()+1}/${y.getDate()}`;o+=`<button class="day-tab ${m===zi?"active":""}" data-day="${m}">Day ${m} (${b})</button>`}i.innerHTML=o,i.querySelectorAll(".day-tab").forEach(m=>{m.addEventListener("click",y=>{document.querySelectorAll(".day-tab").forEach(b=>b.classList.remove("active")),y.target.classList.add("active"),zi=parseInt(y.target.dataset.day),this.loadSchedules(e.id)})}),document.querySelectorAll(".mode-btn").forEach(m=>{m.addEventListener("click",y=>{document.querySelectorAll(".mode-btn").forEach(b=>b.classList.remove("active")),y.target.classList.add("active"),nt=y.target.dataset.mode,this.renderTimeline(!0),this.renderTimeline(!1)})});const c=document.getElementById("scheduleModal"),l=document.getElementById("journalModal");c.addEventListener("click",m=>{m.target===c&&(c.classList.remove("active"),document.getElementById("scheduleForm").reset(),document.getElementById("scheduleItemId").value="")}),l.addEventListener("click",m=>{m.target===l&&(l.classList.remove("active"),document.getElementById("journalForm").reset())}),document.getElementById("addScheduleBtn").addEventListener("click",()=>{document.getElementById("scheduleItemId").value="",document.getElementById("scheduleForm").reset(),c.classList.add("active")}),document.querySelectorAll(".close-modal").forEach(m=>{m.addEventListener("click",()=>{c.classList.remove("active"),l.classList.remove("active"),document.getElementById("scheduleForm").reset(),document.getElementById("journalForm").reset()})}),(d=document.getElementById("schedule-cancel"))==null||d.addEventListener("click",()=>{document.getElementById("scheduleModal").classList.remove("active"),document.getElementById("scheduleForm").reset(),document.getElementById("scheduleItemId").value=""}),document.getElementById("scheduleForm").addEventListener("submit",async m=>{m.preventDefault();const y={tripId:e.id,day:zi,time:document.getElementById("itemTime").value,title:document.getElementById("itemTitle").value,category:document.getElementById("itemCategory").value,transport:document.getElementById("itemTransport").value,memo:document.getElementById("itemMemo").value,order:vt.length},b=document.getElementById("scheduleItemId").value;b?await ro(e.id,b,y):await Dn(e.id,y),c.classList.remove("active"),m.target.reset(),document.getElementById("scheduleItemId").value="",this.loadSchedules(e.id)}),document.querySelectorAll(".star").forEach(m=>{m.addEventListener("click",y=>{const b=y.target.getBoundingClientRect(),C=y.clientX-b.left<b.width/2,V=parseInt(y.target.dataset.rating)-(C?.5:0);document.getElementById("journalRating").value=V,document.querySelectorAll(".star").forEach(B=>{const O=parseInt(B.dataset.rating);B.classList.remove("full","half"),O<=V?B.classList.add("full"):O-.5===V&&B.classList.add("half")})})}),(p=document.getElementById("journal-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("journalModal").classList.remove("active"),document.getElementById("journalForm").reset()}),document.getElementById("journalForm").addEventListener("submit",async m=>{m.preventDefault();const y=document.getElementById("journalItemId").value,b=document.getElementById("journalRating").value,x=document.getElementById("journalText").value,C=document.getElementById("journalPhotos");let B=vt.find(O=>O.id===y).journalPhotos||[];if(C.files.length>0)try{for(let O of C.files){const q=await $S(O);B.push(q)}}catch(O){console.error(O),alert("画像の処理に失敗しました。ファイルサイズが大きすぎる可能性があります。")}try{await ro(e.id,y,{journalText:x,journalRating:parseFloat(b),journalPhotos:B}),l.classList.remove("active"),document.getElementById("journalForm").reset(),this.loadSchedules(e.id)}catch(O){console.error(O),alert("保存に失敗しました。写真のサイズや枚数が多すぎる可能性があります。写真を減らして再度お試しください。")}}),this.loadSchedules(e.id)},async loadSchedules(r){vt=(await Ug(r)).filter(t=>t.day===zi),vt.sort((t,n)=>t.time.localeCompare(n.time)),await this.renderTimeline(!0),this.renderTimeline(!1)},async renderTimeline(r=!1){const e=document.getElementById("timelineContainer");if(vt.length===0){e.innerHTML=`<p class="empty-state">${nt==="plan"?I("noScheduleHelp")||"予定がありません。追加してみましょう！":I("noJournalHelp")||"記録がありません。思い出を追加しよう！"}</p>`;return}const t=vt.map(async o=>{const c=Wa()[o.category]||Wa().other,l=await ft(o.title,r)||o.title,u=o.memo?await ft(o.memo,r)||o.memo:"";let d="";if(nt==="journal")if(o.journalText||o.journalRating||o.journalPhotos&&o.journalPhotos.length>0){const m=o.journalPhotos?o.journalPhotos.map((B,O)=>`
              <div style="position:relative; display:inline-block; margin-right:8px; margin-bottom:8px;">
                <img src="${B}" class="journal-photo" style="width:70px; height:70px; object-fit:cover; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                <button class="delete-photo-btn" data-id="${o.id}" data-index="${O}" style="position:absolute; top:-6px; right:-6px; background:white; border:1px solid #ddd; border-radius:50%; width:22px; height:22px; font-size:14px; line-height:1; cursor:pointer; color:red; display:flex; align-items:center; justify-content:center; box-shadow:0 1px 3px rgba(0,0,0,0.2); padding:0; z-index:10;">&times;</button>
              </div>
            `).join(""):"",y=parseFloat(o.journalRating||0),b=Math.floor(y),x=y%1!==0,C=5-Math.ceil(y),V='<span class="star full" style="font-size:1rem; cursor:default; transform:none;">★</span>'.repeat(b)+(x?'<span class="star half" style="font-size:1rem; cursor:default; transform:none;">★</span>':"")+'<span class="star" style="font-size:1rem; cursor:default; transform:none; color:#E0E0E0;">★</span>'.repeat(C);d=`
            <div class="journal-entry">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
                <div style="flex:1;">
                  ${o.journalRating?`<div class="journal-rating">${V}</div>`:""}
                  ${o.journalText?`<p class="journal-text" style="margin-top:4px;">${o.journalText}</p>`:""}
                </div>
                ${m?`<div class="journal-photos" style="display:flex; flex-wrap:wrap; gap:4px; max-width:180px; justify-content:flex-end; margin-top:0;">${m}</div>`:""}
              </div>
              <button class="btn small journal-add-btn edit-journal-btn" data-id="${o.id}" style="margin-top:8px; display:inline-flex;">記録を編集</button>
            </div>
          `}else d=`<button class="btn small journal-add-btn" data-id="${o.id}">記録を追加</button>`;return`
          <div class="timeline-item" data-id="${o.id}" style="position: relative; margin-bottom: 24px;">
            <!-- Delete Background -->
            <div class="swipe-delete-bg" style="position: absolute; top: 0; left: 0; bottom: 0; width: 100%; background: #ff3b30; color: white; display: flex; align-items: center; padding-left: 20px; font-weight: bold; z-index: 1; border-radius: 8px; opacity: 0; transition: opacity 0.4s;">
              ${I("deleteAction")||"削除"}
            </div>
          <!-- Foreground Content -->
          <div class="timeline-content-wrapper" style="position: relative; z-index: 2; background: var(--color-background); display: flex; width: 100%; transition: transform 0.2s ease-out; gap: 16px;">
            <div class="timeline-time">${o.time}</div>
            <div class="timeline-dot" data-category="${o.category}">${c.icon}</div>
            <div class="timeline-card" style="flex: 1; margin: 0;">
              <h4>${l}</h4>
              ${o.transport?`<p class="transport">🚌 ${o.transport}</p>`:""}
              ${u?`<p class="memo">${u}</p>`:""}
              ${d}
            </div>
          </div>
        </div>
      `}),n=await Promise.all(t);e.innerHTML=n.join("");const i=te().currentTrip;e.querySelectorAll(".timeline-item").forEach(o=>{const c=o.querySelector(".timeline-content-wrapper"),l=o.dataset.id;let u=0,d=0;c.addEventListener("touchstart",p=>{nt==="plan"&&(u=p.touches[0].clientX,c.style.transition="none")},{passive:!0}),c.addEventListener("touchmove",p=>{if(nt==="plan"&&(d=p.touches[0].clientX-u,d>0)){const m=d*.8;c.style.transform=`translateX(${m}px)`,m>20&&(o.querySelector(".swipe-delete-bg").style.opacity="1")}},{passive:!0}),c.addEventListener("click",p=>{if(nt!=="plan"||Math.abs(d)>10)return;const m=vt.find(y=>y.id===l);m&&(document.getElementById("scheduleItemId").value=m.id,document.getElementById("itemTime").value=m.time,document.getElementById("itemTitle").value=m.title,document.getElementById("itemCategory").value=m.category,document.getElementById("itemTransport").value=m.transport||"",document.getElementById("itemMemo").value=m.memo||"",document.getElementById("scheduleModal").classList.add("active"))}),c.addEventListener("touchend",async p=>{nt==="plan"&&(c.style.transition="transform 0.8s ease-out",d>100?(c.style.transform="translateX(100vw)",setTimeout(async()=>{confirm(I("confirmDelete")||"本当に削除しますか？")?(o.style.opacity="0",o.style.height="0",o.style.margin="0",o.style.overflow="hidden",o.style.transition="all 0.3s ease-out",await $g(i.id,l),this.loadSchedules(i.id)):(c.style.transform="translateX(0)",o.querySelector(".swipe-delete-bg").style.opacity="0")},100)):(c.style.transform="translateX(0)",o.querySelector(".swipe-delete-bg").style.opacity="0"),d=0)})}),nt==="journal"&&(e.querySelectorAll(".delete-photo-btn").forEach(o=>{o.addEventListener("click",async c=>{if(c.stopPropagation(),confirm(I("confirmDeletePhoto")||"写真を削除しますか？")){const l=o.dataset.id,u=parseInt(o.dataset.index),d=te().currentTrip,p=vt.find(m=>m.id===l);if(p&&p.journalPhotos){p.journalPhotos.splice(u,1);try{await ro(d.id,l,{journalPhotos:p.journalPhotos}),this.loadSchedules(d.id)}catch(m){console.error(m),alert("削除に失敗しました。")}}}})}),e.querySelectorAll(".journal-add-btn, .edit-journal-btn").forEach(o=>{o.addEventListener("click",c=>{const l=c.target.dataset.id,u=vt.find(p=>p.id===l);document.getElementById("journalItemId").value=l,document.getElementById("journalText").value=u.journalText||"",document.getElementById("journalPhotos").value="",document.getElementById("journalRating").value=u.journalRating||0;const d=parseFloat(u.journalRating||0);document.querySelectorAll("#journalForm .star").forEach(p=>{const m=parseInt(p.dataset.rating);p.classList.remove("full","half"),p.style.color="",m<=d?p.classList.add("full"):m-.5===d&&p.classList.add("half")}),document.getElementById("journalModal").classList.add("active")})}))}};let qt="",rt=[];const Xd=[I("rq3")||"現地の人の性格は？",I("rq4")||"食文化は？",I("rq5")||"コンビニなどの便利なお店は？",I("rq6")||"移動手段はどういう？",I("rq7")||"家やトイレはどんな感じ？",I("rq8")||"実際に行きたい場所3つ",I("rq9")||"食べたいもの3つ"],zS={render(){return`
      <div class="page research-page">
        <header class="page-header">
          <button class="btn-icon btn-back" id="rs-back-btn">←</button>
          <h2 class="page-title">${I("researchTitle")}</h2>
        </header>

        <div class="country-tabs" id="rs-country-tabs">
          <!-- Dynamically populated country tabs -->
        </div>

        <div class="research-list" id="rs-list">
          <div class="loading">${I("loading")||"よみこみ中... 🧸"}</div>
        </div>

        <button class="fab" id="rs-add-btn">➕</button>

        <!-- 質問追加・編集モーダル -->
        <div class="modal-overlay" id="rs-modal">
          <div class="modal-content">
            <div class="modal-title" id="rs-modal-title">${I("addNote")||"項目の追加"}</div>
            <form id="rs-form">
              <input type="hidden" id="rs-note-id">
              <div class="form-group mt-md">
                <label class="form-label">${I("researchItem")||"調べる項目（質問）"}</label>
                <input type="text" id="rs-question" class="form-input" placeholder="${I("researchItemPlaceholder")||"例: おすすめのカフェは？"}" required>
              </div>
              <button type="submit" class="btn btn-primary w-full mt-lg">${I("saveBtn")||"保存する"}</button>
              <button type="button" class="btn btn-secondary w-full mt-sm" id="rs-modal-close">${I("cancelBtn")||"キャンセル"}</button>
            </form>
          </div>
        </div>
      </div>
    `},async init(){var o;const e=te().currentTrip;if(!e){document.getElementById("rs-list").innerHTML=`<p class="empty-state">${I("noTripSelected")||"旅行が選択されていません。"}</p>`;return}const t=e.destinations||[],n=[...new Set(t.map(c=>c.country).filter(Boolean))];if(n.length===0){document.getElementById("rs-list").innerHTML=`<p class="empty-state">${I("noDestinationsSet")||"行き先が設定されていません。<br>旅行の編集から行き先を追加してください。"}</p>`;return}qt=n[0];const s=document.getElementById("rs-country-tabs");s.style.display="flex",s.style.justifyContent="center",s.style.gap="16px",s.style.marginBottom="16px",s.innerHTML=n.map(c=>{const l=Vs.find(d=>d.code===c);let u="🏳️";if(l)u=l.flag;else{const d=tu(c);u=xo(d)}return`<span class="tab flag-tab" data-country="${c}" style="font-size: 2.5rem; cursor: pointer; transition: opacity 0.2s; opacity: ${c===qt?"1":"0.4"};">${u}</span>`}).join(""),s.addEventListener("click",c=>{const l=c.target.closest(".tab");l&&(document.querySelectorAll("#rs-country-tabs .tab").forEach(u=>{u.style.opacity="0.4",u.classList.remove("active")}),l.style.opacity="1",l.classList.add("active"),qt=l.dataset.country,this.loadNotes(e.id))});const i=document.getElementById("rs-modal");document.getElementById("rs-add-btn").addEventListener("click",()=>{document.getElementById("rs-modal-title").textContent=I("addNote")||"項目の追加",document.getElementById("rs-note-id").value="",document.getElementById("rs-question").value="",i.classList.add("active")}),document.getElementById("rs-modal-close").addEventListener("click",()=>{i.classList.remove("active")}),i.addEventListener("click",c=>{c.target===i&&i.classList.remove("active")}),document.getElementById("rs-form").addEventListener("submit",async c=>{c.preventDefault();const l=document.getElementById("rs-question").value.trim(),u=document.getElementById("rs-note-id").value;l&&(u?await Pc(e.id,u,{question:l}):await Sc(e.id,{country:qt,question:l,answer:"",order:rt.length}),i.classList.remove("active"),await this.loadNotes(e.id))}),(o=document.getElementById("rs-back-btn"))==null||o.addEventListener("click",()=>le("/")),await this.loadNotes(e.id)},async loadNotes(r){let e=await so(r);if(rt=e.filter(s=>s.country===qt),rt.length===0){for(let s=0;s<Xd.length;s++)await Sc(r,{country:qt,question:Xd[s],answer:"",order:s});e=await so(r),rt=e.filter(s=>s.country===qt)}const t=["首都・人口・面積・公用語など","首都・人口・面積・公用語は？","現地通貨は？"],n=rt.filter(s=>t.includes(s.question)&&!s.answer);if(n.length>0){for(const s of n)await Rc(r,s.id);e=await so(r),rt=e.filter(s=>s.country===qt)}rt.sort((s,i)=>(s.order||0)-(i.order||0)),await this.renderNotes(r,!0),this.renderNotes(r,!1)},async renderNotes(r,e=!1){const t=document.getElementById("rs-list");if(rt.length===0){t.innerHTML=`<p class="empty-state">${I("noResearch")||"項目がありません。"}</p>`;return}const n=rt.map(async o=>{let c=o.question;c&&c.match(/^rq[1-9]$/)&&(c=I(c));const l=await ft(c,e)||c,u=o.answer?await ft(o.answer,e)||o.answer:"";return`
        <div class="rs-card" data-id="${o.id}">
          <div class="rs-card-header">
            <h3 class="rs-question">${l}</h3>
            <div class="rs-actions">
              <button class="btn-icon rs-edit-q" data-id="${o.id}">✏️</button>
              <button class="btn-icon rs-delete-q" data-id="${o.id}">✖</button>
            </div>
          </div>
          <div class="rs-card-body">
            <textarea class="rs-answer-input" data-id="${o.id}" placeholder="${I("researchAnswer")||"調べてわかったこと..."}">${o.answer||""}</textarea>
            ${u!==(o.answer||"")&&u?`<div class="rs-answer-translated">💡 ${I("translationLabel")||"翻訳"}: ${u}</div>`:""}
          </div>
        </div>
      `}),s=await Promise.all(n);t.innerHTML=s.join(""),t.querySelectorAll(".rs-edit-q").forEach(o=>{o.addEventListener("click",c=>{const l=c.target.closest(".rs-edit-q").dataset.id,u=rt.find(d=>d.id===l);u&&(document.getElementById("rs-modal-title").textContent=I("editNote")||"項目の編集",document.getElementById("rs-note-id").value=u.id,document.getElementById("rs-question").value=u.question,document.getElementById("rs-modal").classList.add("active"))})}),t.querySelectorAll(".rs-delete-q").forEach(o=>{o.addEventListener("click",async c=>{const l=c.target.closest(".rs-delete-q").dataset.id;confirm(I("confirmDelete")||"この項目を削除しますか？")&&(await Rc(r,l),await this.loadNotes(r))})});let i;t.querySelectorAll(".rs-answer-input").forEach(o=>{o.addEventListener("input",c=>{clearTimeout(i);const l=c.target.dataset.id,u=c.target.value;i=setTimeout(async()=>{await Pc(r,l,{answer:u})},1e3)})})}},Zd={food:{icon:"🍽️",label:I("catFood")||"食事"},transport:{icon:"🚕",label:I("catBudgetTransport")||"交通"},shopping:{icon:"🛒",label:I("catShopping")||"買い物"},stay:{icon:"🏨",label:I("catStay")||"宿泊"},activity:{icon:"🎭",label:I("catActivity")||"アクティビティ"},other:{icon:"📦",label:I("catOther")||"その他"}},GS={render(){return`
            <div class="page page-budget">
                <header class="header">
                    <button class="btn-icon btn-back" id="btn-back-budget">←</button>
                    <h2>${I("budgetTitle")||"予算管理"}</h2>
                </header>
                <main class="content" id="budget-main">
                    <div class="loading">${I("loading")||"よみこみ中... 🧸"}</div>
                </main>
                <button class="fab fab-center" id="budget-fab">＋</button>
                
                <div id="budget-modal" class="modal-overlay">
                    <div class="modal-content">
                        <div class="modal-handle"></div>
                        <h3>${I("addExpenseTitle")||"支出の追加 ✏️"}</h3>
                        <form id="budget-form">
                            <div class="form-group">
                                <label>${I("amountRequiredLabel")||"金額 (必須)"}</label>
                                <input type="number" id="budget-amount" required>
                            </div>
                            <div class="form-group">
                                <label>${I("usageLabel")||"用途"}</label>
                                <input type="text" id="budget-title" placeholder="${I("usagePlaceholder")||"例: ランチ代"}">
                            </div>
                            <div class="form-group">
                                <label>${I("currencyLabel")||"通貨"}</label>
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
                                <label>${I("categoryLabel")||"カテゴリ"}</label>
                                <select id="budget-category">
                                    ${Object.entries(Zd).map(([r,e])=>`<option value="${r}">${e.icon} ${e.label}</option>`).join("")}
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary w-full mt-lg">${I("saveBtn")||"保存する ✨"}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="budget-cancel">${I("cancelBtn")||"キャンセル"}</button>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){var d;(d=document.getElementById("btn-back-budget"))==null||d.addEventListener("click",()=>le("/"));const e=te().currentTripId,t=document.getElementById("budget-main");if(!e){t.innerHTML=`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>${I("noTripSelected")||"旅行が選択されていません。"}</p>
                    <button class="btn-primary" onclick="window.location.hash='#/'">${I("backToHome")||"ホームに戻る"}</button>
                </div>`;return}let n=[];const s=async(p=!1)=>{var b;if(n.length===0){t.innerHTML=`
                    <div class="empty-state">
                        <div class="empty-icon">👛</div>
                        <p>${I("noBudgetItems")||"まだ支出がありません。<br>右下の＋ボタンから追加しよう！"}</p>
                    </div>`;return}const m=n.reduce((x,C)=>x+Number(C.amount),0);let y=`
                <div class="budget-summary card mb-md">
                    <div class="text-center mb-sm">
                        <div class="text-sm text-muted">${I("totalExpense")||"合計支出"}</div>
                        <div class="text-xl font-bold">¥${m.toLocaleString()}</div>
                    </div>
                </div>
                <div class="budget-list">
                    <h3>${I("budgetListTitle")||"支出リスト 📝"}</h3>`;for(const x of n){const C=await ft(x.title,p)||"無題",V=x.currency||"¥";y+=`
                    <div class="budget-item card" data-id="${x.id}">
                        <div class="budget-icon">${((b=Zd[x.category])==null?void 0:b.icon)||"📦"}</div>
                        <div class="budget-details">
                            <div class="budget-title">${C}</div>
                        </div>
                        <div class="budget-amount">${V}${Number(x.amount).toLocaleString()}</div>
                        <div class="item-actions">
                            <button class="btn-icon small btn-delete-budget" data-id="${x.id}">🗑️</button>
                        </div>
                    </div>
                `}y+="</div>",t.innerHTML=y,document.querySelectorAll(".btn-delete-budget").forEach(x=>{x.addEventListener("click",async C=>{const V=C.target.closest(".btn-delete-budget").dataset.id;confirm(I("confirmDelete")||"本当に削除しますか？")&&(await zg(e,V),n=await Cc(e),s())})})},i=async()=>{try{n=await Cc(e),await s(!0),s(!1)}catch(p){console.error(p),t.innerHTML=`<p>${I("errorOccurred")||"エラーが発生しました😢"}</p>`}};await i();const o=document.getElementById("budget-modal"),c=document.getElementById("budget-fab"),l=document.getElementById("budget-cancel"),u=document.getElementById("budget-form");c.addEventListener("click",()=>{o.classList.add("active")}),l.addEventListener("click",()=>{o.classList.remove("active"),u.reset()}),o.addEventListener("click",p=>{p.target===o&&(o.classList.remove("active"),u.reset())}),u.addEventListener("submit",async p=>{p.preventDefault();const m=u.querySelector('button[type="submit"]');m&&(m.disabled=!0);const y={tripId:e,amount:Number(document.getElementById("budget-amount").value),title:document.getElementById("budget-title").value,category:document.getElementById("budget-category").value,currency:document.getElementById("budget-currency").value,date:new Date().toISOString()};o.classList.remove("active");try{await qg(e,y),u.reset(),await i()}catch(b){console.error(b),alert(I("errorOccurred")||"エラーが発生しました")}finally{m&&(m.disabled=!1)}})}},An=()=>({police:{icon:"🚨",label:I("catPolice")||"警察・消防・救急"},hotel:{icon:"🏨",label:I("catHotel")||"ホテルの連絡先"},embassy:{icon:"🏛️",label:I("catEmbassy")||"大使館の連絡先"},insurance:{icon:"🛡️",label:I("catInsurance")||"海外旅行保険"}}),HS={render(){return`
            <div class="page page-emergency">
                <header class="header">
                    <button class="btn-icon btn-back" id="btn-back-emergency">←</button>
                    <h2>${I("emergencyTitle")}</h2>
                </header>
                <main class="content" id="emergency-main">
                    <div class="loading">${I("loading")||"よみこみ中... 🧸"}</div>
                </main>
                
                <div id="emergency-modal" class="modal-overlay">
                    <div class="modal-content">
                        <h3 id="modal-title">${I("addEmergency")||"情報の追加 ✏️"}</h3>
                        <form id="emergency-form">
                            <input type="hidden" id="em-category">
                            <div class="form-group">
                                <label>${I("emergencyTitleLabel")||"タイトル (必須)"}</label>
                                <input type="text" id="em-title" required placeholder="${I("emergencyTitlePlaceholder")||"例: ホテル電話番号"}">
                            </div>
                            <div class="form-group">
                                <label>${I("emergencyPhone")||"電話番号"}</label>
                                <input type="tel" id="em-phone" placeholder="090-XXXX-XXXX">
                            </div>
                            <div class="form-group">
                                <label>${I("emergencyMemo")||"メモ (内容)"}</label>
                                <textarea id="em-info" rows="3" placeholder="${I("emergencyMemoPlaceholder")||"住所や予約番号など"}"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-full mt-lg">${I("saveBtn")||"保存する ✨"}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="em-cancel">${I("cancelBtn")||"キャンセル"}</button>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){var u;(u=document.getElementById("btn-back-emergency"))==null||u.addEventListener("click",()=>le("/"));const e=te().currentTripId,t=document.getElementById("emergency-main");if(!e){t.innerHTML=`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>${I("noTripSelected")||"旅行が選択されていません。"}</p>
                </div>`;return}let n=[];const s=async(d=!1)=>{if(n.length===0)t.innerHTML=Object.keys(An()).map(p=>`
                    <div class="emergency-section card">
                        <div class="section-header">
                            <h3>${An()[p].icon} ${An()[p].label}</h3>
                            <button class="btn-add-small" data-cat="${p}">＋ ${I("addSmallBtn")||"追加"}</button>
                        </div>
                        <div class="empty-text">${I("noInfo")||"情報がありません。"}</div>
                    </div>
                `).join("");else{const p=Object.keys(An()).map(async y=>{const b=n.filter(V=>V.category===y),x=b.map(async V=>{const B=await ft(V.title,d)||V.title,O=V.info?await ft(V.info,d)||V.info:"";return`
                                    <div class="emergency-card">
                                        <h4>${B}</h4>
                                        ${O?`<p class="em-info">${O.replace(/\\n/g,"<br>")}</p>`:""}
                                        ${V.phone?`
                                            <a href="tel:${V.phone}" class="btn-tel">
                                                📞 ${I("callBtn")||"電話をかける"} (${V.phone})
                                            </a>
                                        `:""}
                                    </div>
                        `}),C=await Promise.all(x);return`
                        <div class="emergency-section card">
                            <div class="section-header">
                                <h3>${An()[y].icon} ${An()[y].label}</h3>
                                <button class="btn-add-small" data-cat="${y}">＋ ${I("addSmallBtn")||"追加"}</button>
                            </div>
                            <div class="emergency-list">
                                ${b.length===0?`<div class="empty-text">${I("noInfo")||"情報がありません。"}</div>`:C.join("")}
                            </div>
                        </div>
                    `}),m=await Promise.all(p);t.innerHTML=m.join("")}document.querySelectorAll(".btn-add-small").forEach(p=>{p.addEventListener("click",m=>{const y=m.target.getAttribute("data-cat");document.getElementById("em-category").value=y,document.getElementById("modal-title").innerText=`${An()[y].label}の追加 ✏️`,document.getElementById("emergency-modal").classList.add("active")})})},i=async()=>{try{n=await Gg(e),await s()}catch(d){console.error(d),t.innerHTML="<p>エラーが発生しました😢</p>"}};await i();const o=document.getElementById("emergency-modal"),c=document.getElementById("em-cancel");o.addEventListener("click",d=>{d.target===o&&o.classList.remove("active")});const l=document.getElementById("emergency-form");c.addEventListener("click",()=>{o.classList.remove("active"),l.reset()}),l.addEventListener("submit",async d=>{d.preventDefault();const p={tripId:e,title:document.getElementById("em-title").value,phone:document.getElementById("em-phone").value,info:document.getElementById("em-info").value,category:document.getElementById("em-category").value};await Hg(p),o.classList.remove("active"),l.reset(),await i()})}},KS={render(){return`
            <div class="page page-omiyage">
                <header class="header">
                    <button class="btn-icon btn-back" id="btn-back-omiyage">←</button>
                    <h2>${I("omiyageTitle")}</h2>
                </header>
                <div class="progress-section card" id="omiyage-progress-container">
                    <!-- Progress injected here -->
                </div>
                <main class="content" id="omiyage-main">
                    <div class="loading">${I("loading")||"よみこみ中... 🧸"}</div>
                </main>
                <button class="fab fab-center" id="omiyage-fab">＋</button>
                
                <div id="omiyage-modal" class="modal-overlay">
                    <div class="modal-content">
                        <div class="modal-handle"></div>
                        <h3>${I("addOmiyage")||"お土産の追加 ✏️"}</h3>
                        <form id="omiyage-form">
                            <div class="form-group">
                                <label>${I("omiyageRecipient")||"誰に渡す？(必須)"}</label>
                                <input type="text" id="omi-recipient" required placeholder="${I("recipientPlaceholder")||"例: 家族、職場、自分"}">
                            </div>
                            <div class="form-group">
                                <label>${I("omiyageItem")||"お土産名 / メモ"}</label>
                                <input type="text" id="omi-item" placeholder="${I("itemPlaceholder")||"例: ご当地クッキー"}">
                            </div>
                            <div class="form-group">
                                <label>${I("budgetEstimate")||"予算目安"}</label>
                                <input type="number" id="omi-budget" placeholder="例: 1000">
                            </div>
                            <button type="submit" class="btn btn-primary w-full mt-lg">${I("saveBtn")||"保存する✨"}</button>
                            <button type="button" class="btn btn-secondary w-full mt-sm" id="omi-cancel">${I("cancelBtn")||"キャンセル"}</button>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){var p;(p=document.getElementById("btn-back-omiyage"))==null||p.addEventListener("click",()=>le("/"));const e=te().currentTripId,t=document.getElementById("omiyage-main"),n=document.getElementById("omiyage-progress-container");let s=[];const i=async(m=!1)=>{if(s.length===0){n.innerHTML=`<p>${I("noOmiyageProgress")||"まだお土産リストがありません。"}</p>`,t.innerHTML=`
                    <div class="empty-state">
                        <div class="empty-icon">🎁</div>
                        <p>${I("noOmiyageList")||"＋ボタンからお土産リストを追加しよう！"}</p>
                    </div>`;return}const y=s.length,b=s.filter(V=>V.purchased).length;n.innerHTML=`
                <h3>${I("progressStatus")||"進捗状況 💪"}</h3>
                <div class="progress-text">${b} / ${y} ${I("purchased")||"購入済み"}</div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${b/y*100}%"></div>
                </div>
            `;const x=s.map(async V=>{const B=await ft(V.itemName,m)||I("undecided")||"未定",O=V.recipientName||"";return`
                    <div class="budget-item card" data-id="${V.id}">
                        <div class="budget-icon" style="display:flex; align-items:center; justify-content:center;">
                            <label class="checkbox-wrapper" style="margin: 0;">
                                <input type="checkbox" class="omiyage-check" data-id="${V.id}" ${V.purchased?"checked":""}>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="budget-details">
                            <div class="budget-title">
                                ${B} ${O?`<span style="font-size: 0.8rem; color: var(--color-text-light); font-weight: normal; margin-left: 8px;">👤${O}</span>`:""}
                            </div>
                        </div>
                        ${V.budget?`<div class="budget-amount">¥${Number(V.budget).toLocaleString()}</div>`:""}
                        <div class="item-actions">
                            <button class="btn-icon small btn-delete-omiyage" data-id="${V.id}">🗑️</button>
                        </div>
                    </div>
                `}),C=await Promise.all(x);t.innerHTML=`<div class="budget-list">${C.join("")}</div>`,document.querySelectorAll(".omiyage-check").forEach(V=>{V.addEventListener("change",async B=>{const O=B.target.getAttribute("data-id"),q=B.target.checked,M=s.find(F=>F.id===O);M&&(M.purchased=q,await Jg(e,O,{purchased:q}),i())})}),document.querySelectorAll(".btn-delete-omiyage").forEach(V=>{V.addEventListener("click",async B=>{if(confirm(I("confirmDelete")||"本当に削除しますか？")){const O=B.target.closest(".btn-delete-omiyage").dataset.id;await Yg(e,O),await o()}})})},o=async()=>{try{s=await Wg(e),await i(!0),i(!1)}catch(m){console.error(m),t.innerHTML="<p>エラーが発生しました😢</p>"}};await o();const c=document.getElementById("omiyage-modal"),l=document.getElementById("omiyage-fab"),u=document.getElementById("omi-cancel"),d=document.getElementById("omiyage-form");l.addEventListener("click",()=>{c.classList.add("active")}),u.addEventListener("click",()=>{c.classList.remove("active"),d.reset()}),c.addEventListener("click",m=>{m.target===c&&(c.classList.remove("active"),d.reset())}),d.addEventListener("submit",async m=>{m.preventDefault();const y=d.querySelector('button[type="submit"]');y&&(y.disabled=!0);const b={tripId:e,recipientName:document.getElementById("omi-recipient").value,itemName:document.getElementById("omi-item").value,budget:Number(document.getElementById("omi-budget").value)||0,purchased:!1};c.classList.remove("active");try{await Qg(e,b),d.reset(),await o()}catch(x){console.error(x),alert(I("errorOccurred")||"エラーが発生しました")}finally{y&&(y.disabled=!1)}})}},WS=["🐱","🐶","🐻","🐰","🦊","🐼","🐨","🦁","🐯","🐵","🐸","🦄","🌸","🌻","⭐","🌈","❤️","💎"];function ef(r={},e={}){const t=r.country||"";let n=t!==""&&!Vs.some(c=>c.code===t||Object.values(c.name).includes(t)),s=n?"OTHER":t;const i=typeof io=="function"?io():te().language||"ja";if(!n&&t){const c=Vs.find(l=>l.code===t||Object.values(l.name).includes(t));c&&(s=c.code)}const o=Vs.map(c=>{const l=c.name[i]||c.name.ja;return`<option value="${c.code}" ${c.code===s?"selected":""}>${c.flag} ${l}</option>`}).join("");return`
    <div class="form-row destination-item mb-sm" style="display: flex; align-items: center; gap: 4px; flex-wrap: nowrap;">
      <select class="form-input flex-1 dest-country-select" style="min-width: 0; padding: 12px 4px; margin-bottom: 0;">
        <option value="" disabled ${s?"":"selected"}>${e.country||"国を選択"}</option>
        ${o}
      </select>
      <input type="text" class="form-input flex-1 dest-country-other" placeholder="${I("countryPlaceholder")||"国名を入力"}" value="${n?t:""}" style="min-width: 0; padding: 12px 4px; margin-bottom: 0; ${n?"":"display:none;"}" />
      <input type="text" class="form-input flex-1 dest-city" placeholder="${e.city||"都市"}" value="${r.city||""}" style="min-width: 0; padding: 12px 4px; margin-bottom: 0;" />
      <button type="button" class="btn-icon btn-remove" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
    </div>
  `}const ty={render(){const r=nh()==="/trip/edit",{currentTrip:e}=te(),t=r&&e?e:{title:"",startDate:"",endDate:"",destinations:[{country:"",city:""}],members:[{icon:"🐱",name:""}]};return`
      <div class="page fade-in">
        <header class="page-header">
          <button class="btn-icon btn-back" id="btn-form-back">←</button>
          <h1 class="page-title">${I(r?"tripFormEditTitle":"tripFormNewTitle")}</h1>
        </header>

        <div class="form-content fade-in" style="animation-delay: 0.1s;">
          <div class="card mb-md">
            <input type="text" id="trip-title" class="form-input text-lg fw-bold" placeholder="${I("tripTitlePlaceholder")}" value="${t.title}" />
          </div>

          <div class="card mb-md">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div class="form-group" style="min-width: 0;">
                <label class="form-label">${I("startDate")}</label>
                <input type="date" id="trip-start" class="form-input" value="${t.startDate}" style="width: 100%; box-sizing: border-box;" />
              </div>
              <div class="form-group" style="min-width: 0;">
                <label class="form-label">${I("endDate")}</label>
                <input type="date" id="trip-end" class="form-input" value="${t.endDate}" style="width: 100%; box-sizing: border-box;" />
              </div>
            </div>
          </div>

          <div class="card mb-md" id="destinations-container">
            <label class="form-label">${I("destinations")}</label>
            <div id="destinations-list">
              ${t.destinations.map(n=>ef(n,{country:I("countryPlaceholder"),city:I("cityPlaceholder")})).join("")}
            </div>
            <button class="btn btn-secondary btn-small w-full mt-sm" id="btn-add-dest">${I("addDestination")}</button>
          </div>

          <div class="card mb-md" id="members-container">
            <label class="form-label">${I("membersLabel")}</label>
            <div id="members-list">
              ${t.members.map((n,s)=>`
                <div class="form-row member-item mb-sm" style="display: flex; align-items: center; gap: 4px; flex-wrap: nowrap;">
                  <button class="btn-emoji-picker" data-index="${s}" style="flex-shrink: 0; padding: 8px 12px;">${n.icon||"😊"}</button>
                  <input type="text" class="form-input flex-1 member-name" placeholder="${I("memberNamePlaceholder")}" value="${n.name||""}" style="min-width: 0; margin-bottom: 0; padding: 12px 4px;" />
                  <button class="btn-icon btn-remove-member" data-index="${s}" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
                </div>
              `).join("")}
            </div>
            <button class="btn btn-secondary btn-small w-full mt-sm" id="btn-add-member">${I("addMember")}</button>
          </div>
        </div>

        <div class="bottom-actions">
          <button class="btn btn-primary w-full text-lg mb-sm" id="btn-save-trip">${I("btnSave")}</button>
          ${r?`<button class="btn btn-secondary w-full" id="btn-delete-trip" style="color: var(--error);">🗑️ ${I("deleteTrip")||"この旅行を削除"}</button>`:""}
        </div>

        <!-- Emoji Picker Modal -->
        <div class="modal-overlay" id="emoji-modal">
          <div class="modal-content">
            <div class="modal-handle"></div>
            <div class="modal-title">${I("chooseIcon")||"アイコンを選ぶ"}</div>
            <div class="emoji-picker-grid">
              ${WS.map(n=>`<button type="button" class="emoji-option">${n}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `},init(){var o,c,l,u,d;const r=nh()==="/trip/edit",{currentTrip:e}=te(),t=document.getElementById("destinations-list");(o=document.getElementById("btn-add-dest"))==null||o.addEventListener("click",()=>{const p=document.createElement("div");p.innerHTML=ef({},{country:I("countryPlaceholder"),city:I("cityPlaceholder")}),t.appendChild(p.firstElementChild)}),t==null||t.addEventListener("click",p=>{p.target.classList.contains("btn-remove")&&t.querySelectorAll(".destination-item").length>1&&p.target.closest(".destination-item").remove()}),t==null||t.addEventListener("change",p=>{if(p.target.classList.contains("dest-country-select")){const y=p.target.closest(".destination-item").querySelector(".dest-country-other");p.target.value==="OTHER"?(y.style.display="block",y.focus()):(y.style.display="none",y.value="")}});const n=document.getElementById("members-list");(c=document.getElementById("btn-add-member"))==null||c.addEventListener("click",()=>{const p=document.createElement("div");p.className="form-row member-item mb-sm",p.style.display="flex",p.style.alignItems="center",p.style.gap="4px",p.style.flexWrap="nowrap",p.innerHTML=`
        <button class="btn-emoji-picker" style="flex-shrink: 0; padding: 8px 12px;">😊</button>
        <input type="text" class="form-input flex-1 member-name" placeholder="${I("memberNamePlaceholder")}" style="min-width: 0; margin-bottom: 0; padding: 12px 4px;" />
        <button class="btn-icon btn-remove-member" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
      `,n.appendChild(p)}),n==null||n.addEventListener("click",p=>{p.target.classList.contains("btn-remove-member")&&n.querySelectorAll(".member-item").length>1&&p.target.closest(".member-item").remove()});const s=document.getElementById("emoji-modal");let i=null;n==null||n.addEventListener("click",p=>{p.target.classList.contains("btn-emoji-picker")&&(i=p.target,s.classList.add("active"))}),s==null||s.addEventListener("click",p=>{p.target===s&&s.classList.remove("active")}),document.querySelectorAll(".emoji-option").forEach(p=>{p.addEventListener("click",()=>{i&&(i.textContent=p.textContent),s.classList.remove("active")})}),(l=document.getElementById("btn-form-back"))==null||l.addEventListener("click",()=>le("/")),(u=document.getElementById("btn-save-trip"))==null||u.addEventListener("click",async p=>{const m=p.target;m.disabled=!0,m.textContent=I("btnSaving");const y=document.getElementById("trip-title").value,b=document.getElementById("trip-start").value,x=document.getElementById("trip-end").value,{user:C}=te();if(!C||!C.uid){alert(I("authError")),m.disabled=!1,m.textContent=I("btnSave");return}const V=Array.from(t.querySelectorAll(".destination-item")).map(q=>{const M=q.querySelector(".dest-country-select"),F=q.querySelector(".dest-country-other");return{country:M.value==="OTHER"?F.value:M.value,city:q.querySelector(".dest-city").value}}),B=Array.from(n.querySelectorAll(".member-item")).map(q=>({icon:q.querySelector(".btn-emoji-picker").textContent,name:q.querySelector(".member-name").value})),O={title:y,startDate:b,endDate:x,destinations:V,members:B};try{const q=setTimeout(()=>{var T;(T=document.getElementById("btn-save-trip"))!=null&&T.disabled&&le("/")},1e4);r&&e?await Xl(e.ownerId||C.uid,e.id,O):await Og(C.uid,O);const M=await ko(C.uid);Ye({trips:M});const F=r&&e&&M.find(T=>T.id===e.id)||M[0];Ye({currentTrip:F,currentTripId:F==null?void 0:F.id}),F&&localStorage.setItem("currentTripId",F.id),clearTimeout(q),le("/")}catch(q){console.error("Error saving trip:",q),m.textContent=I("errorTryAgain")||"❌ エラー。もう一度お試しください",m.disabled=!1}}),r&&((d=document.getElementById("btn-delete-trip"))==null||d.addEventListener("click",async()=>{var p;if(confirm(I("confirmDeleteTrip")||`本当にこの旅行を削除しますか？
削除すると、すべてのデータ（単語帳、チェックリストなど）が消去され元に戻せません。`)){const{user:m}=te();try{await Mg(m.uid,e.id);const y=await ko(m.uid);Ye({trips:y,currentTrip:y[0]||null,currentTripId:((p=y[0])==null?void 0:p.id)||null}),y.length>0?localStorage.setItem("currentTripId",y[0].id):localStorage.removeItem("currentTripId"),le("/")}catch(y){console.error("Error deleting trip:",y),alert(I("deleteFailed")||"削除に失敗しました。")}}}))}},QS=[{category:"documents",label:"📄 書類",items:["パスポート","航空券(予約確認書)","ホテル予約確認書","海外旅行保険証","クレジットカード"]},{category:"electronics",label:"🔌 電子機器",items:["スマホ充電器","モバイルバッテリー","変換プラグ","イヤホン","カメラ"]},{category:"clothing",label:"👕 衣類",items:["着替え","下着","靴下","パジャマ","上着/羽織り"]},{category:"toiletries",label:"🧴 洗面用品",items:["歯ブラシ","歯磨き粉","シャンプー","日焼け止め","常備薬"]},{category:"other",label:"📦 その他",items:["現金","エコバッグ","雨具","ガイドブック"]}];let _s=[];const JS={async render(){const{user:r}=te();if(!r||r.isAnonymous)return`
        <div class="page fade-in">
          <header class="page-header">
            <button class="btn-icon btn-back" id="btn-back-settings">←</button>
            <h1 class="page-title">⚙️ ${I("settings")||"設定"}</h1>
          </header>
          <div class="empty-state">
            <div class="empty-state-icon">🔒</div>
            <p class="empty-state-text">${I("loginRequiredForSettings")||"設定を変更するにはログインが必要です。"}</p>
          </div>
        </div>
      `;const e=await eu(r.uid);e&&e.checklistMaster?_s=e.checklistMaster:_s=JSON.parse(JSON.stringify(QS));const t=_s.map((n,s)=>`
      <div class="card mb-md">
        <label class="form-label">${n.label}</label>
        <p class="text-xs text-muted mb-sm">${I("newlineSeparated")||"改行区切りでアイテムを入力してください。"}</p>
        <textarea class="form-input master-textarea" data-index="${s}" rows="5" style="resize: vertical;">${n.items.join(`
`)}</textarea>
      </div>
    `).join("");return`
      <div class="page fade-in">
        <header class="page-header">
          <button class="btn-icon btn-back" id="btn-back-settings-main">←</button>
          <h1 class="page-title">⚙️ ${I("settings")||"設定"}</h1>
        </header>

        <div class="form-content fade-in" style="animation-delay: 0.1s;">
          <h2 class="mb-md text-lg">${I("checklistMasterTitle")||"🎒 持ち物チェック 初期マスタ設定"}</h2>
          <p class="text-sm text-muted mb-md">
            ${I("checklistMasterDesc")||"新しい旅行を作成した際に、ここで設定した持ち物が自動的に登録されます。"}
          </p>
          
          <div id="master-categories-container">
            ${t}
          </div>

          <button id="btn-save-settings" class="btn btn-primary w-full mt-md">${I("saveBtn")||"保存する"}</button>
        </div>
      </div>
    `},init(){var e,t;(e=document.getElementById("btn-back-settings"))==null||e.addEventListener("click",()=>le("/")),(t=document.getElementById("btn-back-settings-main"))==null||t.addEventListener("click",()=>le("/"));const r=document.getElementById("btn-save-settings");r&&r.addEventListener("click",async()=>{const{user:n}=te();if(!n||n.isAnonymous)return;r.disabled=!0,r.textContent=I("btnSaving")||"保存中...",document.querySelectorAll(".master-textarea").forEach(i=>{const o=i.getAttribute("data-index"),l=i.value.split(`
`).map(u=>u.trim()).filter(u=>u);_s[o].items=l});try{await Kg(n.uid,{checklistMaster:_s}),r.textContent=I("savedExclamation")||"保存しました！",setTimeout(()=>{r.disabled=!1,r.textContent=I("saveBtn")||"保存する"},2e3)}catch(i){alert((I("saveFailed")||"保存に失敗しました: ")+i.message),r.disabled=!1,r.textContent=I("saveBtn")||"保存する"}})}};function YS(r={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:s,onRegisteredSW:i,onRegisterError:o}=r;let c,l;const u=async(p=!0)=>{await l};async function d(){if("serviceWorker"in navigator){if(c=await Es(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/tabi-shiori/sw.js",{scope:"/tabi-shiori/",type:"classic"})).catch(p=>{o==null||o(p)}),!c)return;c.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),c.addEventListener("installed",p=>{p.isUpdate||n==null||n()}),c.register({immediate:e}).then(p=>{i?i("/tabi-shiori/sw.js",p):s==null||s(p)}).catch(p=>{o==null||o(p)})}}return l=d(),u}tt("/",NS);tt("/flashcard",LS);tt("/checklist",US);tt("/schedule",qS);tt("/research",zS);tt("/budget",GS);tt("/emergency",HS);tt("/omiyage",KS);tt("/trip/new",ty);tt("/trip/edit",ty);tt("/settings",JS);function XS(){const r=document.getElementById("app");r.innerHTML=`
    <!-- Header -->
    <header class="app-header" id="app-header">
      <div class="header-title">
        <img src="/tabi-shiori/images/mascot.jpg" alt="たびくま" class="header-mascot" />
        <span class="header-title-text">${I("appTitle")}</span>
      </div>
      <div class="header-actions">
        <button class="header-btn" id="btn-share" title="${I("share")}">🔗</button>
        <button class="header-btn" id="btn-menu" title="${I("menu")}">☰</button>
      </div>
    </header>

    <!-- Page Content -->
    <main id="page-content" class="page-transition"></main>

    <!-- Bottom Navigation -->
    <nav class="bottom-nav" id="bottom-nav">
      <a class="nav-item active" data-route="/" href="#/">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">${I("home")}</span>
      </a>
      <a class="nav-item" data-route="/flashcard" href="#/flashcard">
        <span class="nav-icon">🗣️</span>
        <span class="nav-label">${I("flashcard")}</span>
      </a>
      <a class="nav-item" data-route="/checklist" href="#/checklist">
        <span class="nav-icon">🎒</span>
        <span class="nav-label">${I("checklist")}</span>
      </a>
      <a class="nav-item" data-route="/schedule" href="#/schedule">
        <span class="nav-icon">📅</span>
        <span class="nav-label">${I("schedule")}</span>
      </a>
      <a class="nav-item" data-route="/research" href="#/research">
        <span class="nav-icon">🔍</span>
        <span class="nav-label">${I("research")}</span>
      </a>
    </nav>

    <!-- Drawer Menu -->
    <div class="modal-overlay" id="drawer-overlay">
      <div class="modal-content drawer-content">
        <div class="modal-handle"></div>
        <div class="drawer-header">
          <img src="/tabi-shiori/images/mascot.jpg" alt="たびくま" class="drawer-mascot" />
          <h2>${I("menu")}</h2>
        </div>
        <nav class="drawer-nav" id="drawer-nav">
          <a class="drawer-item" id="btn-drawer-portal">🐻 TOPページ（旅行一覧）</a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/">🏠 ${I("home")} (ダッシュボード)</a>
          <a class="drawer-item" data-route="/flashcard">🗣️ ${I("flashcardTitle")}</a>
          <a class="drawer-item" data-route="/checklist">🎒 ${I("checklistTitle")}</a>
          <a class="drawer-item" data-route="/schedule">📅 ${I("scheduleTitle")}</a>
          <a class="drawer-item" data-route="/research">🔍 ${I("researchTitle")}</a>
          <hr class="drawer-divider" />
          <a class="drawer-item" data-route="/budget">💰 ${I("budgetTitle")}</a>
          <a class="drawer-item" data-route="/emergency">📞 ${I("emergencyTitle")}</a>
          <a class="drawer-item" data-route="/omiyage">🎁 ${I("omiyageTitle")}</a>
          <a class="drawer-item" data-route="/settings">⚙️ ${I("settings")||"設定"}</a>
          <hr class="drawer-divider" />
          <div class="drawer-trips" id="drawer-trips">
            <p class="drawer-section-title">${I("switchTrip")}</p>
          </div>
          <hr class="drawer-divider" id="drawer-logout-divider" style="display:none;" />
          <a class="drawer-item" id="btn-drawer-logout" style="display:none; color: var(--color-danger);">🚪 ${I("logout")||"ログアウト"}</a>
          <hr class="drawer-divider" />
          <div class="drawer-language" style="display:flex; justify-content:space-around; padding: 12px 16px;">
            <button class="btn-lang" data-lang="ja" style="font-size:24px; background:none; border:none; cursor:pointer;">🇯🇵</button>
            <button class="btn-lang" data-lang="en" style="font-size:24px; background:none; border:none; cursor:pointer;">🇺🇸</button>
            <button class="btn-lang" data-lang="th" style="font-size:24px; background:none; border:none; cursor:pointer;">🇹🇭</button>
          </div>
          <a class="drawer-item" id="btn-drawer-google">
            <span style="margin-right:4px">🌐</span>
            <span id="drawer-google-text">${I("googleLink")}</span>
          </a>
        </nav>
      </div>
    </div>
  `}async function ZS(){var n,s,i;"serviceWorker"in navigator&&YS({immediate:!0}),XS(),document.querySelectorAll(".nav-item").forEach(o=>{o.addEventListener("click",c=>{c.preventDefault();const l=o.getAttribute("data-route");le(l)})});const r=document.getElementById("drawer-overlay");document.getElementById("btn-menu").addEventListener("click",()=>{r.classList.add("active")}),document.getElementById("btn-share").addEventListener("click",async()=>{const o=te();if(!o.currentTrip)return;let c=o.currentTrip.shareId;if(!c){const l=document.getElementById("btn-share"),u=l.innerHTML;l.innerHTML="⏳";try{c=await Xg(o.currentTrip.ownerId||o.user.uid,o.currentTrip.id,""),await Xl(o.currentTrip.ownerId||o.user.uid,o.currentTrip.id,{shareId:c}),Ye({currentTrip:{...o.currentTrip,shareId:c}})}catch(d){console.error(d),alert("共有コードの生成に失敗しました。"),l.innerHTML=u;return}l.innerHTML=u}navigator.clipboard.writeText(c).then(()=>{let l=document.getElementById("share-toast");l||(l=document.createElement("div"),l.id="share-toast",l.style.position="fixed",l.style.bottom="80px",l.style.left="50%",l.style.transform="translateX(-50%)",l.style.background="var(--color-primary)",l.style.color="white",l.style.padding="12px 24px",l.style.borderRadius="24px",l.style.boxShadow="0 4px 12px rgba(0,0,0,0.15)",l.style.zIndex="9999",l.style.transition="opacity 0.3s ease",l.style.fontWeight="bold",document.body.appendChild(l)),l.textContent="共有コードをコピーしました！",l.style.opacity="1",setTimeout(()=>{l.style.opacity="0"},3e3)}).catch(()=>{alert("共有コード: "+c)})}),[r].forEach(o=>{o.addEventListener("click",c=>{c.target===o&&o.classList.remove("active")})}),document.querySelectorAll(".drawer-item[data-route]").forEach(o=>{o.addEventListener("click",()=>{const c=o.getAttribute("data-route");r.classList.remove("active"),le(c)})}),(n=document.getElementById("btn-drawer-google"))==null||n.addEventListener("click",async()=>{const{user:o}=te();if(!(o&&!o.isAnonymous))try{o&&o.isAnonymous?await Jl():await Ql(),window.location.reload()}catch(c){c.code!=="auth/popup-closed-by-user"&&c.code!=="auth/cancelled-popup-request"&&alert("ログインに失敗しました: "+c.message)}}),(s=document.getElementById("btn-drawer-logout"))==null||s.addEventListener("click",async()=>{try{await Ng(),window.location.reload()}catch(o){alert("ログアウトに失敗しました: "+o.message)}}),(i=document.getElementById("btn-drawer-portal"))==null||i.addEventListener("click",()=>{Ye({currentTripId:null,currentTrip:null}),document.getElementById("drawer-overlay").classList.remove("active"),le("/",!0,!0)}),document.querySelectorAll(".btn-lang").forEach(o=>{o.addEventListener("click",()=>{const c=o.getAttribute("data-lang");tf(c),window.location.reload()})});try{const o=await Dg();Ye({user:o});let c=[];o&&(c=await ko(o.uid)),Ye({trips:c}),Ye({currentTripId:null,currentTrip:null}),ny(c)}catch(o){console.error("Initial data load failed:",o)}const e=document.getElementById("loading-screen");e&&e.classList.add("hidden");const t=window.location.hash.replace("#","")||"/";le(t,!1)}function ny(r){var n;const e=document.getElementById("drawer-trips");if(!e)return;const t=te();e.innerHTML=`
    <p class="drawer-section-title">${I("switchTrip")}</p>
    ${r.map(s=>`
      <a class="drawer-trip-item ${s.id===t.currentTripId?"active":""}" data-trip-id="${s.id}">
        <span class="drawer-trip-emoji">✈️</span>
        <span class="drawer-trip-name">${s.title||I("untitledTrip")}</span>
      </a>
    `).join("")}
    <a class="drawer-trip-item drawer-trip-new" data-route="/trip/new">
      <span class="drawer-trip-emoji">➕</span>
      <span class="drawer-trip-name">${I("createNewTrip")}</span>
    </a>
  `,e.querySelectorAll(".drawer-trip-item[data-trip-id]").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-trip-id"),o=r.find(c=>c.id===i);o&&(Ye({currentTripId:i,currentTrip:o}),localStorage.setItem("currentTripId",i),document.getElementById("drawer-overlay").classList.remove("active"),le("/",!0,!0))})}),(n=e.querySelector(".drawer-trip-new"))==null||n.addEventListener("click",()=>{document.getElementById("drawer-overlay").classList.remove("active"),le("/trip/new")})}function ry(){const{currentTrip:r,user:e}=te(),t=document.getElementById("bottom-nav"),n=document.querySelector(".header-actions"),s=document.getElementById("btn-drawer-google"),i=document.getElementById("drawer-google-text"),o=document.getElementById("btn-drawer-logout"),c=document.getElementById("drawer-logout-divider");r?(t&&t.classList.remove("hidden"),n&&n.classList.remove("hidden")):(t&&t.classList.add("hidden"),n&&n.classList.add("hidden")),e&&(e.isAnonymous?(i&&(i.textContent=I("googleLink")),s&&(s.style.color="inherit"),o&&(o.style.display="none"),c&&(c.style.display="none")):(i&&(i.textContent=I("googleLinked")),s&&(s.style.color="var(--text-muted)"),o&&(o.style.display="flex"),c&&(c.style.display="block")))}kc("trips",r=>{ny(r)});kc("currentTrip",()=>{ry()});document.addEventListener("DOMContentLoaded",()=>{ZS().then(()=>ry())});
