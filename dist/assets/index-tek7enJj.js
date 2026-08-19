(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const ta={user:null,currentTrip:null,currentTripId:null,trips:[],isLoading:!1,language:localStorage.getItem("language")||"ja"},Ur=new Map;function ne(){return{...ta}}function We(r){Object.assign(ta,r),Object.keys(r).forEach(e=>{Ur.has(e)&&Ur.get(e).forEach(t=>t(ta[e]))})}function La(r,e){Ur.has(r)||Ur.set(r,new Set),Ur.get(r).add(e)}function $h(r){localStorage.setItem("language",r),We({language:r})}const zm=Object.freeze(Object.defineProperty({__proto__:null,getState:ne,setLanguage:$h,setState:We,subscribe:La},Symbol.toStringTag,{value:"Module"})),Gm={ja:{readingPlaceholder:"例: サワディー",readingMemo:"読み方メモ",localPlaceholder:"例: สวัสดี",localSaying:"現地での言い方",wordPlaceholder:"例: こんにちは",wordToSearch:"調べたい言葉（あなたの言語）",addNewPhrase:"新しいフレーズを追加 ✏️",tapToReturn:"タップで戻る 🔙",tapToFlip:"タップで裏返す 👆",appTitle:"旅のしおり",menu:"メニュー",home:"ホーム",flashcard:"単語帳",checklist:"持ち物",schedule:"スケジュール",research:"リサーチノート",budget:"費用メモ",emergency:"緊急連絡先",omiyage:"お土産リスト",switchTrip:"旅行を切り替え",createNewTrip:"新しい旅行を作成",googleLink:"Googleアカウントと連携",googleLinked:"Googleでログイン済み",share:"共有しおり",shareInfo:"🔗 しおりを共有",shareUrl:"共有URL",sharePassword:"パスワード",shareCopyBtn:"📋 URLをコピー",shareCopySuccess:"✅ コピーしました！",shareSetupText:"共有パスワードを設定して、仲間にURLを送りましょう！",shareCreateBtn:"🔗 共有リンクを作成",noTripAlert:"まず旅行を作成してください",loading:"よみこみ中... 🧸",welcomeTitle:"旅のしおりを作ろう！",welcomeDesc:"旅行の計画から記録まで、<br>みんなで楽しく作る旅のしおり 🌴",yourTrips:"あなたの旅行",btnWelcomeCreate:"✨ 新しい旅行を作成",btnWelcomeGoogle:"🌐 Googleアカウントでログイン/引き継ぎ",untitledTrip:"無題の旅行",countdownBefore:"旅行まであと",countdownDays:"日！",countdownDuring:"🎉 旅行",countdownDuringDays:"日目！",countdownAfter:"✨ おつかれさまでした！",members:"👥 メンバー",btnEditTrip:"✏️ 旅行情報を編集",tripFormNewTitle:"✨ 新しい旅行",tripFormEditTitle:"✏️ 旅行を編集",tripTitlePlaceholder:"例: はじめての台湾旅行！",startDate:"出発日",endDate:"帰国日",destinations:"行き先",countryPlaceholder:"国 (例: 台湾)",cityPlaceholder:"都市 (例: 台北)",addDestination:"＋ 行き先を追加",membersLabel:"メンバー",memberNamePlaceholder:"名前 (例: たろう)",addMember:"＋ メンバーを追加",btnSave:"💾 保存する",btnSaving:"保存中...",btnSaveError:"❌ エラー。もう一度お試しください",authError:"ユーザー情報の読み込みに失敗しました。少し待ってから再度保存してください。",scheduleTitle:"スケジュール & ジャーナル",planMode:"📝 プラン",journalMode:"📖 ジャーナル",btnAddSchedule:"+",addScheduleModalTitle:"予定を追加",timeLabel:"時間",itemTitlePlaceholder:"場所・予定名",itemTransportPlaceholder:"移動手段 (例: タクシー)",itemMemoPlaceholder:"メモ",btnAdd:"追加する",addJournalModalTitle:"記録を追加",journalMood:"気分:",journalRating:"評価:",journalTextPlaceholder:"感想を書いてね",journalAddPhoto:"写真を追加:",noSchedule:"予定がありません。追加してみましょう！",btnEdit:"編集",btnAddJournal:"記録を追加",selectTripFirst:"旅行が選択されていません。",checklistTitle:"持ち物チェック",tabPersonal:"👤 個人",tabShared:"👥 共有",addItemPlaceholder:"新しい持ち物を追加...",noItems:"まだアイテムがありません",catDocuments:"📄 書類",catElectronics:"🔌 電子機器",catClothing:"👕 衣類",catToiletries:"🧴 洗面用品",catOtherList:"📦 その他",rq1:"首都・人口・面積・公用語・・・",rq2:"現地通貨は？",rq3:"現地の人の性格は？",rq4:"食文化・・・",rq5:"コンビニなどの便利なお店は？",rq6:"移動手段はどう違う？",rq7:"家やトイレはどんな感じ？",rq8:"実際に行きたい場所3つ",rq9:"食べたいもの3つ",researchTitle:"リサーチノート",all:"全て",sightseeing:"観光",gourmet:"グルメ",shopping:"お土産",activity:"体験",budgetTitle:"費用メモ",emergencyTitle:"緊急連絡先",catSightseeing:"観光",catMeal:"食事",catTransport:"移動",catHotelSch:"ホテル",catShopping:"買い物",catActivity:"体験",catOther:"その他",catSightseeing:"観光",catMeal:"食事",catTransport:"移動",catHotelSch:"ホテル",catShopping:"買い物",catActivity:"体験",catOther:"その他",catPolice:"警察・消防・救急",catHotel:"ホテルの連絡先",catEmbassy:"大使館の連絡先",catInsurance:"海外旅行保険",addSmallBtn:"追加",noInfo:"情報がありません。",omiyageTitle:"お土産リスト",flashcardTitle:"単語帳",playAudio:"🔊 読み上げ",settings:"設定",checklistMasterTitle:"持ち物チェック 初期マスタ設定",checklistMasterDesc:"新しい旅行を作成した際に、ここで設定した持ち物が自動的に登録されます。",loginRequiredForSettings:"設定を変更するにはログインが必要です。",newlineSeparated:"改行区切りでアイテムを入力してください。",saveBtn:"保存する",savedExclamation:"保存しました！",saveFailed:"保存に失敗しました: ",settings:"設定",checklistMasterTitle:"持ち物チェック 初期マスタ設定",checklistMasterDesc:"新しい旅行を作成した際に、ここで設定した持ち物が自動的に登録されます。",loginRequiredForSettings:"設定を変更するにはログインが必要です。",newlineSeparated:"改行区切りでアイテムを入力してください。",preparing:"準備中...",noTripSelected:"旅行が選択されていません。",currencyLabel:"通貨",catFood:"食費",catTransport:"交通費",catShopping:"買い物",catStay:"宿泊費",catActivity:"アクティビティ",catOther:"その他",addExpenseTitle:"支出の追加 ✏️",amountRequiredLabel:"金額 (必須)",usageLabel:"用途",usagePlaceholder:"例: ランチ代",categoryLabel:"カテゴリ",paidByLabel:"支払った人",selectMemberLabel:"メンバーを選択",cancelBtn:"キャンセル",noBudgetItems:"まだ支出がありません。<br>＋ボタンから追加しよう！",totalExpense:"合計支出",warikanStatus:"割り勘 / 立て替え状況",youPaid:"あなたが払った",budgetListTitle:"支出リスト 📝",errorOccurred:"エラーが発生しました😢",confirmDelete:"本当に削除しますか？",addOmiyage:"お土産の追加 ✏️",omiyageRecipient:"誰に渡す？ (必須)",recipientPlaceholder:"例: 家族、職場、自分",omiyageItem:"お土産名 / メモ",itemPlaceholder:"例: ご当地クッキー",budgetEstimate:"予算目安",noOmiyageProgress:"まだお土産リストがありません。",noOmiyageList:"右下の＋ボタンからお土産リストを追加しよう！",progressStatus:"進捗状況 💪",purchased:"購入済み",undecided:"未定",budgetLabel:"予算",backToHome:"ホームに戻る"},en:{readingPlaceholder:"e.g. Sa-wa-dee",readingMemo:"Pronunciation",localPlaceholder:"e.g. Sawadee",localSaying:"Local Phrase",wordPlaceholder:"e.g. Hello",wordToSearch:"Word (Your Language)",addNewPhrase:"Add New Phrase ✏️",tapToReturn:"Tap to return 🔙",tapToFlip:"Tap to flip 👆",appTitle:"Trip Itinerary",menu:"Menu",home:"Home",flashcard:"Flashcards",checklist:"Checklist",schedule:"Schedule",research:"Research",budget:"Budget",emergency:"Emergency",omiyage:"Souvenirs",switchTrip:"Switch Trip",createNewTrip:"Create New Trip",googleLink:"Link Google Account",googleLinked:"Logged in with Google",share:"Shared Itinerary",shareInfo:"🔗 Share Itinerary",shareUrl:"Share URL",sharePassword:"Password",shareCopyBtn:"📋 Copy URL",shareCopySuccess:"✅ Copied!",shareSetupText:"Set a password to share this itinerary with friends!",shareCreateBtn:"🔗 Create Share Link",noTripAlert:"Please create a trip first",loading:"Loading... 🧸",welcomeTitle:"Create an Itinerary!",welcomeDesc:"Plan and record your trips<br>together with everyone! 🌴",yourTrips:"Your Trips",btnWelcomeCreate:"✨ Create New Trip",btnWelcomeGoogle:"🌐 Login/Link with Google",untitledTrip:"Untitled Trip",countdownBefore:"",countdownDays:"days to go!",countdownDuring:"🎉 Day",countdownDuringDays:" of the trip!",countdownAfter:"✨ Trip completed!",members:"👥 Members",btnEditTrip:"✏️ Edit Trip Info",tripFormNewTitle:"✨ New Trip",tripFormEditTitle:"✏️ Edit Trip",tripTitlePlaceholder:"e.g., First trip to Taiwan!",startDate:"Start Date",endDate:"End Date",destinations:"Destinations",countryPlaceholder:"Country (e.g., Taiwan)",cityPlaceholder:"City (e.g., Taipei)",addDestination:"＋ Add Destination",membersLabel:"Members",memberNamePlaceholder:"Name (e.g., Taro)",addMember:"＋ Add Member",btnSave:"💾 Save",btnSaving:"Saving...",btnSaveError:"❌ Error. Please try again",authError:"Failed to load user info. Please wait and try again.",scheduleTitle:"Schedule & Journal",planMode:"📝 Plan",journalMode:"📖 Journal",btnAddSchedule:"+",addScheduleModalTitle:"Add Schedule",timeLabel:"Time",itemTitlePlaceholder:"Place / Activity",itemTransportPlaceholder:"Transport (e.g., Taxi)",itemMemoPlaceholder:"Memo",btnAdd:"Add",addJournalModalTitle:"Add Journal",journalMood:"Mood:",journalRating:"Rating:",journalTextPlaceholder:"Write your thoughts",journalAddPhoto:"Add Photo:",noSchedule:"No schedules yet. Let's add some!",btnEdit:"Edit",btnAddJournal:"Add Journal",selectTripFirst:"No trip selected.",checklistTitle:"Checklist",tabPersonal:"👤 Personal",tabShared:"👥 Shared",addItemPlaceholder:"Add new item...",noItems:"No items yet",catDocuments:"📄 Documents",catElectronics:"🔌 Electronics",catClothing:"👕 Clothing",catToiletries:"🧴 Toiletries",catOtherList:"📦 Other",rq1:"Capital, Population, Area, Official Language...",rq2:"Local Currency?",rq3:"Local Personality?",rq4:"Food Culture...",rq5:"Convenience Stores?",rq6:"Transportation Differences?",rq7:"Houses and Toilets?",rq8:"3 Places I want to go",rq9:"3 Foods I want to eat",researchTitle:"Research Notes",all:"All",sightseeing:"Sightseeing",gourmet:"Food",shopping:"Shopping",activity:"Activity",budgetTitle:"Budget",emergencyTitle:"Emergency",catSightseeing:"Sightseeing",catMeal:"Meal",catTransport:"Transport",catHotelSch:"Hotel",catShopping:"Shopping",catActivity:"Activity",catOther:"Other",catSightseeing:"Sightseeing",catMeal:"Meal",catTransport:"Transport",catHotelSch:"Hotel",catShopping:"Shopping",catActivity:"Activity",catOther:"Other",catPolice:"Police/Ambulance/Fire",catHotel:"Hotel Contact",catEmbassy:"Embassy Contact",catInsurance:"Travel Insurance",addSmallBtn:"Add",noInfo:"No information yet.",omiyageTitle:"Souvenirs",flashcardTitle:"Flashcards",playAudio:"🔊 Play",preparing:"Preparing...",noTripSelected:"No trip selected.",currencyLabel:"Currency",catFood:"Food",catTransport:"Transport",catShopping:"Shopping",catStay:"Stay",catActivity:"Activity",catOther:"Other",addExpenseTitle:"Add Expense ✏️",amountRequiredLabel:"Amount (Required)",usageLabel:"Usage",usagePlaceholder:"e.g., Lunch",categoryLabel:"Category",paidByLabel:"Paid By",selectMemberLabel:"Select Member",cancelBtn:"Cancel",noBudgetItems:"No budget items yet.<br>Add one with the + button!",totalExpense:"Total Expense",warikanStatus:"Split/Advance Status",youPaid:"You Paid",budgetListTitle:"Expense List 📝",errorOccurred:"An error occurred 😢",confirmDelete:"Are you sure you want to delete?",addOmiyage:"Add Souvenir ✏️",omiyageRecipient:"For Whom? (Required)",recipientPlaceholder:"e.g., Family, Office, Myself",omiyageItem:"Item Name / Memo",itemPlaceholder:"e.g., Local Cookies",budgetEstimate:"Budget Estimate",noOmiyageProgress:"No souvenir list yet.",noOmiyageList:"Add souvenirs using the + button!",progressStatus:"Progress Status 💪",purchased:"Purchased",undecided:"Undecided",budgetLabel:"Budget",backToHome:"Back to Home"},th:{readingPlaceholder:"เช่น ฮัลโหล",readingMemo:"การออกเสียง",localPlaceholder:"เช่น Hello",localSaying:"วลีท้องถิ่น",wordPlaceholder:"เช่น สวัสดี",wordToSearch:"คำศัพท์ (ภาษาของคุณ)",addNewPhrase:"เพิ่มวลีใหม่ ✏️",tapToReturn:"แตะเพื่อกลับ 🔙",tapToFlip:"แตะเพื่อพลิก 👆",appTitle:"แผนการเดินทาง",menu:"เมนู",home:"หน้าแรก",flashcard:"บัตรคำศัพท์",checklist:"รายการของ",schedule:"กำหนดการ",research:"ข้อมูลท่องเที่ยว",budget:"งบประมาณ",emergency:"ฉุกเฉิน",omiyage:"ของฝาก",switchTrip:"เปลี่ยนทริป",createNewTrip:"สร้างทริปใหม่",googleLink:"เชื่อมต่อบัญชี Google",googleLinked:"เข้าสู่ระบบด้วย Google แล้ว",share:"แชร์แผนการเดินทาง",shareInfo:"🔗 แชร์แผนการเดินทาง",shareUrl:"URL สำหรับแชร์",sharePassword:"รหัสผ่าน",shareCopyBtn:"📋 คัดลอก URL",shareCopySuccess:"✅ คัดลอกแล้ว!",shareSetupText:"ตั้งรหัสผ่านเพื่อแชร์ทริปนี้กับเพื่อน!",shareCreateBtn:"🔗 สร้างลิงก์สำหรับแชร์",noTripAlert:"กรุณาสร้างทริปก่อน",loading:"กำลังโหลด... 🧸",welcomeTitle:"สร้างแผนการเดินทาง!",welcomeDesc:"วางแผนและบันทึกการเดินทาง<br>ไปพร้อมกันทุกคน! 🌴",yourTrips:"ทริปของคุณ",btnWelcomeCreate:"✨ สร้างทริปใหม่",btnWelcomeGoogle:"🌐 เข้าสู่ระบบ/เชื่อมโยง Google",untitledTrip:"ทริปที่ไม่มีชื่อ",countdownBefore:"อีก",countdownDays:"วันจะถึงทริป!",countdownDuring:"🎉 วันที่",countdownDuringDays:" ของทริป!",countdownAfter:"✨ จบทริปแล้ว!",members:"👥 สมาชิก",btnEditTrip:"✏️ แก้ไขข้อมูลทริป",tripFormNewTitle:"✨ ทริปใหม่",tripFormEditTitle:"✏️ แก้ไขทริป",tripTitlePlaceholder:"เช่น เที่ยวไต้หวันครั้งแรก!",startDate:"วันเดินทางไป",endDate:"วันเดินทางกลับ",destinations:"จุดหมายปลายทาง",countryPlaceholder:"ประเทศ (เช่น ไต้หวัน)",cityPlaceholder:"เมือง (เช่น ไทเป)",addDestination:"＋ เพิ่มจุดหมาย",membersLabel:"สมาชิก",memberNamePlaceholder:"ชื่อ (เช่น ทาโร่)",addMember:"＋ เพิ่มสมาชิก",btnSave:"💾 บันทึก",btnSaving:"กำลังบันทึก...",btnSaveError:"❌ เกิดข้อผิดพลาด กรุณาลองใหม่",authError:"ไม่สามารถโหลดข้อมูลผู้ใช้ได้ กรุณารอสักครู่แล้วลองอีกครั้ง",scheduleTitle:"กำหนดการ & บันทึก",planMode:"📝 แผน",journalMode:"📖 บันทึก",btnAddSchedule:"+",addScheduleModalTitle:"เพิ่มกำหนดการ",timeLabel:"เวลา",itemTitlePlaceholder:"สถานที่ / กิจกรรม",itemTransportPlaceholder:"การเดินทาง (เช่น แท็กซี่)",itemMemoPlaceholder:"บันทึก",btnAdd:"เพิ่ม",addJournalModalTitle:"เพิ่มบันทึก",journalMood:"อารมณ์:",journalRating:"คะแนน:",journalTextPlaceholder:"เขียนความรู้สึกของคุณ",journalAddPhoto:"เพิ่มรูปภาพ:",noSchedule:"ยังไม่มีกำหนดการ ลองเพิ่มดูสิ!",btnEdit:"แก้ไข",btnAddJournal:"เพิ่มบันทึก",selectTripFirst:"โปรดเลือกทริปก่อน",checklistTitle:"รายการของ",tabPersonal:"👤 ส่วนตัว",tabShared:"👥 แชร์",addItemPlaceholder:"เพิ่มของใหม่...",noItems:"ยังไม่มีสิ่งของ",catDocuments:"📄 เอกสาร",catElectronics:"🔌 อุปกรณ์อิเล็กทรอนิกส์",catClothing:"👕 เสื้อผ้า",catToiletries:"🧴 ของใช้ส่วนตัว",catOtherList:"📦 อื่นๆ",rq1:"เมืองหลวง ประชากร พื้นที่ ภาษา...",rq2:"สกุลเงินท้องถิ่น?",rq3:"นิสัยคนท้องถิ่น?",rq4:"วัฒนธรรมอาหาร...",rq5:"ร้านสะดวกซื้อ?",rq6:"การเดินทางต่างกันอย่างไร?",rq7:"บ้านและห้องน้ำ?",rq8:"3 สถานที่ที่อยากไป",rq9:"3 อาหารที่อยากกิน",researchTitle:"ข้อมูลท่องเที่ยว",all:"ทั้งหมด",sightseeing:"สถานที่",gourmet:"อาหาร",shopping:"ช้อปปิ้ง",activity:"กิจกรรม",budgetTitle:"งบประมาณ",emergencyTitle:"ติดต่อฉุกเฉิน",catSightseeing:"ท่องเที่ยว",catMeal:"อาหาร",catTransport:"เดินทาง",catHotelSch:"โรงแรม",catShopping:"ช้อปปิ้ง",catActivity:"กิจกรรม",catOther:"อื่นๆ",catSightseeing:"ท่องเที่ยว",catMeal:"อาหาร",catTransport:"เดินทาง",catHotelSch:"โรงแรม",catShopping:"ช้อปปิ้ง",catActivity:"กิจกรรม",catOther:"อื่นๆ",catPolice:"ตำรวจ/ดับเพลิง/รถพยาบาล",catHotel:"ติดต่อโรงแรม",catEmbassy:"ติดต่อสถานทูต",catInsurance:"ประกันการเดินทาง",addSmallBtn:"เพิ่ม",noInfo:"ยังไม่มีข้อมูล",omiyageTitle:"ของฝาก",flashcardTitle:"บัตรคำศัพท์",playAudio:"🔊 เล่นเสียง",settings:"การตั้งค่า",checklistMasterTitle:"ตั้งค่ารายการของเริ่มต้น",checklistMasterDesc:"เมื่อสร้างทริปใหม่ สิ่งของเหล่านี้จะถูกเพิ่มเข้าไปในรายการของของคุณโดยอัตโนมัติ",loginRequiredForSettings:"คุณต้องเข้าสู่ระบบเพื่อเปลี่ยนการตั้งค่า",newlineSeparated:"ป้อนรายการโดยแยกด้วยการขึ้นบรรทัดใหม่",saveBtn:"บันทึก",savedExclamation:"บันทึกแล้ว!",saveFailed:"บันทึกไม่สำเร็จ: ",settings:"การตั้งค่า",checklistMasterTitle:"ตั้งค่ารายการของเริ่มต้น",preparing:"กำลังเตรียม...",noTripSelected:"ไม่ได้เลือกทริป",currencyLabel:"สกุลเงิน",catFood:"ค่าอาหาร",catTransport:"ค่าเดินทาง",catShopping:"ช้อปปิ้ง",catStay:"ที่พัก",catActivity:"กิจกรรม",catOther:"อื่นๆ",addExpenseTitle:"เพิ่มค่าใช้จ่าย ✏️",amountRequiredLabel:"จำนวนเงิน (จำเป็น)",usageLabel:"การใช้งาน",usagePlaceholder:"เช่น ค่าอาหารกลางวัน",categoryLabel:"หมวดหมู่",paidByLabel:"จ่ายโดย",selectMemberLabel:"เลือกสมาชิก",cancelBtn:"ยกเลิก",noBudgetItems:"ยังไม่มีค่าใช้จ่าย<br>เพิ่มรายการด้วยปุ่ม + เลย!",totalExpense:"รายจ่ายทั้งหมด",warikanStatus:"สถานะการแชร์ค่าใช้จ่าย",youPaid:"คุณจ่ายไป",budgetListTitle:"รายการค่าใช้จ่าย 📝",errorOccurred:"เกิดข้อผิดพลาด 😢",confirmDelete:"คุณแน่ใจหรือไม่ว่าต้องการลบ?",addOmiyage:"เพิ่มของฝาก ✏️",omiyageRecipient:"ให้ใคร? (จำเป็น)",recipientPlaceholder:"เช่น ครอบครัว, ที่ทำงาน, ตัวเอง",omiyageItem:"ชื่อของฝาก / บันทึก",itemPlaceholder:"เช่น คุกกี้ท้องถิ่น",budgetEstimate:"งบประมาณโดยประมาณ",noOmiyageProgress:"ยังไม่มีรายการของฝาก",noOmiyageList:"เพิ่มของฝากโดยใช้ปุ่ม + เลย!",progressStatus:"สถานะความคืบหน้า 💪",purchased:"ซื้อแล้ว",undecided:"ยังไม่ตัดสินใจ",budgetLabel:"งบประมาณ",backToHome:"กลับหน้าแรก"}};function _(r){var n;const t=ne().language||"ja";return(n=Gm[t])==null?void 0:n[r]}function ui(){return ne().language||"ja"}const qh={};let na="";function He(r,e){qh[r]=e}function oe(r,e=!0,t=!1){if(na===r&&!t)return;const n=qh[r];if(!n){console.warn(`Route not found: ${r}`),oe("/");return}na=r,e&&(window.location.hash=r);const s=document.getElementById("page-content");s&&(s.style.opacity="0",s.style.transform="translateY(8px)",setTimeout(async()=>{try{const i=await n.render();s.innerHTML=i,s.style.opacity="1",s.style.transform="translateY(0)",n.init&&n.init(),Hm(r),window.scrollTo({top:0})}catch(i){console.error("Page render error:",i)}},150))}function Hm(r){document.querySelectorAll(".nav-item").forEach(n=>{const s=n.getAttribute("data-route");n.classList.toggle("active",s===r)});const e={"/":"appTitle","/flashcard":"flashcardTitle","/checklist":"checklistTitle","/schedule":"scheduleTitle","/research":"researchTitle","/budget":"budgetTitle","/emergency":"emergencyTitle","/omiyage":"omiyageTitle","/settings":"menu","/trip/new":"tripFormNewTitle","/trip/edit":"tripFormEditTitle","/share":"share"},t=document.querySelector(".header-title-text");if(t){const n=e[r];if(n){let s=_(n);r==="/settings"&&(s="設定"),t.textContent=s}else t.textContent=_("appTitle")}}function Ul(){return na}window.addEventListener("hashchange",()=>{const r=window.location.hash.replace("#","")||"/";oe(r,!1)});var $l={};/**
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
 */const zh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Km=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,h=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,E=h&63;l||(E=64,o||(g=64)),n.push(t[f],t[p],t[g],t[E])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(zh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Km(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const h=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new Wm;const g=i<<2|c>>4;if(n.push(g),h!==64){const E=c<<4&240|h>>2;if(n.push(E),p!==64){const P=h<<6&192|p;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Wm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qm=function(r){const e=zh(r);return Gh.encodeByteArray(e,!0)},hi=function(r){return Qm(r).replace(/\./g,"")},Hh=function(r){try{return Gh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Jm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ym=()=>Jm().__FIREBASE_DEFAULTS__,Xm=()=>{if(typeof process>"u"||typeof $l>"u")return;const r=$l.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Zm=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Hh(r[1]);return e&&JSON.parse(e)},Ni=()=>{try{return Ym()||Xm()||Zm()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Kh=r=>{var e,t;return(t=(e=Ni())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},eg=r=>{const e=Kh(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Wh=()=>{var r;return(r=Ni())===null||r===void 0?void 0:r.config},Qh=r=>{var e;return(e=Ni())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class tg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function ng(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[hi(JSON.stringify(t)),hi(JSON.stringify(o)),""].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function sg(){var r;const e=(r=Ni())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ig(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function og(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function ag(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cg(){const r=ye();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Jh(){return!sg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yh(){try{return typeof indexedDB=="object"}catch{return!1}}function lg(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const ug="FirebaseError";class it extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=ug,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?hg(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new it(s,c,n)}}function hg(r,e){return r.replace(dg,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const dg=/\{\$([^}]+)}/g;function fg(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Jr(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(ql(i)&&ql(o)){if(!Jr(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function ql(r){return r!==null&&typeof r=="object"}/**
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
 */function ds(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function pg(r,e){const t=new mg(r,e);return t.subscribe.bind(t)}class mg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");gg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Mo),s.error===void 0&&(s.error=Mo),s.complete===void 0&&(s.complete=Mo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gg(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Mo(){}/**
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
 */function _e(r){return r&&r._delegate?r._delegate:r}class Bt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class yg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new tg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vg(e))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tn){return this.instances.has(e)}getOptions(e=tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:_g(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=tn){return this.component?this.component.multipleInstances?e:tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _g(r){return r===tn?void 0:r}function vg(r){return r.instantiationMode==="EAGER"}/**
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
 */class Ig{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Y||(Y={}));const Tg={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Eg=Y.INFO,wg={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},bg=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=wg[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oa{constructor(e){this.name=e,this._logLevel=Eg,this._logHandler=bg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Ag=(r,e)=>e.some(t=>r instanceof t);let zl,Gl;function Sg(){return zl||(zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rg(){return Gl||(Gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xh=new WeakMap,ra=new WeakMap,Zh=new WeakMap,Fo=new WeakMap,Ma=new WeakMap;function Pg(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Ot(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Xh.set(t,r)}).catch(()=>{}),Ma.set(e,r),e}function Cg(r){if(ra.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});ra.set(r,e)}let sa={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ra.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Zh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ot(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function kg(r){sa=r(sa)}function Dg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(jo(this),e,...t);return Zh.set(n,e.sort?e.sort():[e]),Ot(n)}:Rg().includes(r)?function(...e){return r.apply(jo(this),e),Ot(Xh.get(this))}:function(...e){return Ot(r.apply(jo(this),e))}}function xg(r){return typeof r=="function"?Dg(r):(r instanceof IDBTransaction&&Cg(r),Ag(r,Sg())?new Proxy(r,sa):r)}function Ot(r){if(r instanceof IDBRequest)return Pg(r);if(Fo.has(r))return Fo.get(r);const e=xg(r);return e!==r&&(Fo.set(r,e),Ma.set(e,r)),e}const jo=r=>Ma.get(r);function Vg(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Ot(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Ot(o.result),l.oldVersion,l.newVersion,Ot(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Ng=["get","getKey","getAll","getAllKeys","count"],Lg=["put","add","delete","clear"],Bo=new Map;function Hl(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Bo.get(e))return Bo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Lg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Ng.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Bo.set(e,i),i}kg(r=>({...r,get:(e,t,n)=>Hl(e,t)||r.get(e,t,n),has:(e,t)=>!!Hl(e,t)||r.has(e,t)}));/**
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
 */class Og{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Mg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Mg(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ia="@firebase/app",Kl="0.10.13";/**
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
 */const yt=new Oa("@firebase/app"),Fg="@firebase/app-compat",jg="@firebase/analytics-compat",Bg="@firebase/analytics",Ug="@firebase/app-check-compat",$g="@firebase/app-check",qg="@firebase/auth",zg="@firebase/auth-compat",Gg="@firebase/database",Hg="@firebase/data-connect",Kg="@firebase/database-compat",Wg="@firebase/functions",Qg="@firebase/functions-compat",Jg="@firebase/installations",Yg="@firebase/installations-compat",Xg="@firebase/messaging",Zg="@firebase/messaging-compat",ey="@firebase/performance",ty="@firebase/performance-compat",ny="@firebase/remote-config",ry="@firebase/remote-config-compat",sy="@firebase/storage",iy="@firebase/storage-compat",oy="@firebase/firestore",ay="@firebase/vertexai-preview",cy="@firebase/firestore-compat",ly="firebase",uy="10.14.1";/**
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
 */const oa="[DEFAULT]",hy={[ia]:"fire-core",[Fg]:"fire-core-compat",[Bg]:"fire-analytics",[jg]:"fire-analytics-compat",[$g]:"fire-app-check",[Ug]:"fire-app-check-compat",[qg]:"fire-auth",[zg]:"fire-auth-compat",[Gg]:"fire-rtdb",[Hg]:"fire-data-connect",[Kg]:"fire-rtdb-compat",[Wg]:"fire-fn",[Qg]:"fire-fn-compat",[Jg]:"fire-iid",[Yg]:"fire-iid-compat",[Xg]:"fire-fcm",[Zg]:"fire-fcm-compat",[ey]:"fire-perf",[ty]:"fire-perf-compat",[ny]:"fire-rc",[ry]:"fire-rc-compat",[sy]:"fire-gcs",[iy]:"fire-gcs-compat",[oy]:"fire-fst",[cy]:"fire-fst-compat",[ay]:"fire-vertex","fire-js":"fire-js",[ly]:"fire-js-all"};/**
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
 */const di=new Map,dy=new Map,aa=new Map;function Wl(r,e){try{r.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function hn(r){const e=r.name;if(aa.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,r);for(const t of di.values())Wl(t,r);for(const t of dy.values())Wl(t,r);return!0}function Li(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function dt(r){return r.settings!==void 0}/**
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
 */const fy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new hs("app","Firebase",fy);/**
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
 */class py{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const In=uy;function ed(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Mt.create("bad-app-name",{appName:String(s)});if(t||(t=Wh()),!t)throw Mt.create("no-options");const i=di.get(s);if(i){if(Jr(t,i.options)&&Jr(n,i.config))return i;throw Mt.create("duplicate-app",{appName:s})}const o=new Ig(s);for(const l of aa.values())o.addComponent(l);const c=new py(t,n,o);return di.set(s,c),c}function td(r=oa){const e=di.get(r);if(!e&&r===oa&&Wh())return ed();if(!e)throw Mt.create("no-app",{appName:r});return e}function Ye(r,e,t){var n;let s=(n=hy[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(c.join(" "));return}hn(new Bt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const my="firebase-heartbeat-database",gy=1,Yr="firebase-heartbeat-store";let Uo=null;function nd(){return Uo||(Uo=Vg(my,gy,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Yr)}catch(t){console.warn(t)}}}}).catch(r=>{throw Mt.create("idb-open",{originalErrorMessage:r.message})})),Uo}async function yy(r){try{const t=(await nd()).transaction(Yr),n=await t.objectStore(Yr).get(rd(r));return await t.done,n}catch(e){if(e instanceof it)yt.warn(e.message);else{const t=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(t.message)}}}async function Ql(r,e){try{const n=(await nd()).transaction(Yr,"readwrite");await n.objectStore(Yr).put(e,rd(r)),await n.done}catch(t){if(t instanceof it)yt.warn(t.message);else{const n=Mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yt.warn(n.message)}}}function rd(r){return`${r.name}!${r.options.appId}`}/**
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
 */const _y=1024,vy=30*24*60*60*1e3;class Iy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ey(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=vy}),this._storage.overwrite(this._heartbeatsCache))}catch(n){yt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Jl(),{heartbeatsToSend:n,unsentEntries:s}=Ty(this._heartbeatsCache.heartbeats),i=hi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return yt.warn(t),""}}}function Jl(){return new Date().toISOString().substring(0,10)}function Ty(r,e=_y){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Yl(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Ey{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yh()?lg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await yy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ql(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ql(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Yl(r){return hi(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function wy(r){hn(new Bt("platform-logger",e=>new Og(e),"PRIVATE")),hn(new Bt("heartbeat",e=>new Iy(e),"PRIVATE")),Ye(ia,Kl,r),Ye(ia,Kl,"esm2017"),Ye("fire-js","")}wy("");var by="firebase",Ay="10.14.1";/**
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
 */Ye(by,Ay,"app");var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,sd;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function v(){}v.prototype=y.prototype,I.D=y.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(w,b,S){for(var T=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)T[ct-2]=arguments[ct];return y.prototype[b].apply(w,T)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,v){v||(v=0);var w=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)w[b]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(b=0;16>b;++b)w[b]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=I.g[0],v=I.g[1],b=I.g[2];var S=I.g[3],T=y+(S^v&(b^S))+w[0]+3614090360&4294967295;y=v+(T<<7&4294967295|T>>>25),T=S+(b^y&(v^b))+w[1]+3905402710&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(v^S&(y^v))+w[2]+606105819&4294967295,b=S+(T<<17&4294967295|T>>>15),T=v+(y^b&(S^y))+w[3]+3250441966&4294967295,v=b+(T<<22&4294967295|T>>>10),T=y+(S^v&(b^S))+w[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(b^y&(v^b))+w[5]+1200080426&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(v^S&(y^v))+w[6]+2821735955&4294967295,b=S+(T<<17&4294967295|T>>>15),T=v+(y^b&(S^y))+w[7]+4249261313&4294967295,v=b+(T<<22&4294967295|T>>>10),T=y+(S^v&(b^S))+w[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(b^y&(v^b))+w[9]+2336552879&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(v^S&(y^v))+w[10]+4294925233&4294967295,b=S+(T<<17&4294967295|T>>>15),T=v+(y^b&(S^y))+w[11]+2304563134&4294967295,v=b+(T<<22&4294967295|T>>>10),T=y+(S^v&(b^S))+w[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=S+(b^y&(v^b))+w[13]+4254626195&4294967295,S=y+(T<<12&4294967295|T>>>20),T=b+(v^S&(y^v))+w[14]+2792965006&4294967295,b=S+(T<<17&4294967295|T>>>15),T=v+(y^b&(S^y))+w[15]+1236535329&4294967295,v=b+(T<<22&4294967295|T>>>10),T=y+(b^S&(v^b))+w[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^b&(y^v))+w[6]+3225465664&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^v&(S^y))+w[11]+643717713&4294967295,b=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(b^S))+w[0]+3921069994&4294967295,v=b+(T<<20&4294967295|T>>>12),T=y+(b^S&(v^b))+w[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^b&(y^v))+w[10]+38016083&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^v&(S^y))+w[15]+3634488961&4294967295,b=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(b^S))+w[4]+3889429448&4294967295,v=b+(T<<20&4294967295|T>>>12),T=y+(b^S&(v^b))+w[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^b&(y^v))+w[14]+3275163606&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^v&(S^y))+w[3]+4107603335&4294967295,b=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(b^S))+w[8]+1163531501&4294967295,v=b+(T<<20&4294967295|T>>>12),T=y+(b^S&(v^b))+w[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=S+(v^b&(y^v))+w[2]+4243563512&4294967295,S=y+(T<<9&4294967295|T>>>23),T=b+(y^v&(S^y))+w[7]+1735328473&4294967295,b=S+(T<<14&4294967295|T>>>18),T=v+(S^y&(b^S))+w[12]+2368359562&4294967295,v=b+(T<<20&4294967295|T>>>12),T=y+(v^b^S)+w[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^b)+w[8]+2272392833&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^v)+w[11]+1839030562&4294967295,b=S+(T<<16&4294967295|T>>>16),T=v+(b^S^y)+w[14]+4259657740&4294967295,v=b+(T<<23&4294967295|T>>>9),T=y+(v^b^S)+w[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^b)+w[4]+1272893353&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^v)+w[7]+4139469664&4294967295,b=S+(T<<16&4294967295|T>>>16),T=v+(b^S^y)+w[10]+3200236656&4294967295,v=b+(T<<23&4294967295|T>>>9),T=y+(v^b^S)+w[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^b)+w[0]+3936430074&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^v)+w[3]+3572445317&4294967295,b=S+(T<<16&4294967295|T>>>16),T=v+(b^S^y)+w[6]+76029189&4294967295,v=b+(T<<23&4294967295|T>>>9),T=y+(v^b^S)+w[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=S+(y^v^b)+w[12]+3873151461&4294967295,S=y+(T<<11&4294967295|T>>>21),T=b+(S^y^v)+w[15]+530742520&4294967295,b=S+(T<<16&4294967295|T>>>16),T=v+(b^S^y)+w[2]+3299628645&4294967295,v=b+(T<<23&4294967295|T>>>9),T=y+(b^(v|~S))+w[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~b))+w[7]+1126891415&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~v))+w[14]+2878612391&4294967295,b=S+(T<<15&4294967295|T>>>17),T=v+(S^(b|~y))+w[5]+4237533241&4294967295,v=b+(T<<21&4294967295|T>>>11),T=y+(b^(v|~S))+w[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~b))+w[3]+2399980690&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~v))+w[10]+4293915773&4294967295,b=S+(T<<15&4294967295|T>>>17),T=v+(S^(b|~y))+w[1]+2240044497&4294967295,v=b+(T<<21&4294967295|T>>>11),T=y+(b^(v|~S))+w[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~b))+w[15]+4264355552&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~v))+w[6]+2734768916&4294967295,b=S+(T<<15&4294967295|T>>>17),T=v+(S^(b|~y))+w[13]+1309151649&4294967295,v=b+(T<<21&4294967295|T>>>11),T=y+(b^(v|~S))+w[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=S+(v^(y|~b))+w[11]+3174756917&4294967295,S=y+(T<<10&4294967295|T>>>22),T=b+(y^(S|~v))+w[2]+718787259&4294967295,b=S+(T<<15&4294967295|T>>>17),T=v+(S^(b|~y))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}n.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var v=y-this.blockSize,w=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=v;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<y;)if(w[b++]=I.charCodeAt(S++),b==this.blockSize){s(this,w),b=0;break}}else for(;S<y;)if(w[b++]=I[S++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=y},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var v=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=v&255,v/=256;for(this.u(I),I=Array(16),y=v=0;4>y;++y)for(var w=0;32>w;w+=8)I[v++]=this.g[y]>>>w&255;return I};function i(I,y){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=y(I)}function o(I,y){this.h=y;for(var v=[],w=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;w&&S==y||(v[b]=S,w=!1)}this.g=v}var c={};function l(I){return-128<=I&&128>I?i(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return C(h(-I));for(var y=[],v=1,w=0;I>=v;w++)y[w]=I/v|0,v*=4294967296;return new o(y,0)}function f(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return C(f(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),w=p,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),T=parseInt(I.substring(b,b+S),y);8>S?(S=h(Math.pow(y,S)),w=w.j(S).add(h(T))):(w=w.j(v),w=w.add(h(T)))}return w}var p=l(0),g=l(1),E=l(16777216);r=o.prototype,r.m=function(){if(x(this))return-C(this).m();for(var I=0,y=1,v=0;v<this.g.length;v++){var w=this.i(v);I+=(0<=w?w:4294967296+w)*y,y*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(x(this))return"-"+C(this).toString(I);for(var y=h(Math.pow(I,6)),v=this,w="";;){var b=$(v,y).g;v=U(v,b.j(y));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=b,P(v))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function x(I){return I.h==-1}r.l=function(I){return I=U(this,I),x(I)?-1:P(I)?0:1};function C(I){for(var y=I.g.length,v=[],w=0;w<y;w++)v[w]=~I.g[w];return new o(v,~I.h).add(g)}r.abs=function(){return x(this)?C(this):this},r.add=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],w=0,b=0;b<=y;b++){var S=w+(this.i(b)&65535)+(I.i(b)&65535),T=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);w=T>>>16,S&=65535,T&=65535,v[b]=T<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function U(I,y){return I.add(C(y))}r.j=function(I){if(P(this)||P(I))return p;if(x(this))return x(I)?C(this).j(C(I)):C(C(this).j(I));if(x(I))return C(this.j(C(I)));if(0>this.l(E)&&0>I.l(E))return h(this.m()*I.m());for(var y=this.g.length+I.g.length,v=[],w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<I.g.length;b++){var S=this.i(w)>>>16,T=this.i(w)&65535,ct=I.i(b)>>>16,fr=I.i(b)&65535;v[2*w+2*b]+=T*fr,j(v,2*w+2*b),v[2*w+2*b+1]+=S*fr,j(v,2*w+2*b+1),v[2*w+2*b+1]+=T*ct,j(v,2*w+2*b+1),v[2*w+2*b+2]+=S*ct,j(v,2*w+2*b+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new o(v,0)};function j(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function O(I,y){this.g=I,this.h=y}function $(I,y){if(P(y))throw Error("division by zero");if(P(I))return new O(p,p);if(x(I))return y=$(C(I),y),new O(C(y.g),C(y.h));if(x(y))return y=$(I,C(y)),new O(C(y.g),y.h);if(30<I.g.length){if(x(I)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,w=y;0>=w.l(I);)v=N(v),w=N(w);var b=L(v,1),S=L(w,1);for(w=L(w,2),v=L(v,2);!P(w);){var T=S.add(w);0>=T.l(I)&&(b=b.add(v),S=T),w=L(w,1),v=L(v,1)}return y=U(I,b.j(y)),new O(b,y)}for(b=p;0<=I.l(y);){for(v=Math.max(1,Math.floor(I.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=h(v),T=S.j(y);x(T)||0<T.l(I);)v-=w,S=h(v),T=S.j(y);P(S)&&(S=g),b=b.add(S),I=U(I,T)}return new O(b,I)}r.A=function(I){return $(this,I).h},r.and=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)&I.i(w);return new o(v,this.h&I.h)},r.or=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)|I.i(w);return new o(v,this.h|I.h)},r.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)^I.i(w);return new o(v,this.h^I.h)};function N(I){for(var y=I.g.length+1,v=[],w=0;w<y;w++)v[w]=I.i(w)<<1|I.i(w-1)>>>31;return new o(v,I.h)}function L(I,y){var v=y>>5;y%=32;for(var w=I.g.length-v,b=[],S=0;S<w;S++)b[S]=0<y?I.i(S+v)>>>y|I.i(S+v+1)<<32-y:I.i(S+v);return new o(b,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,sd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,cn=o}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});var Us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var id,Or,od,Ys,ca,ad,cd,ld;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Us=="object"&&Us];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var m=0;m<a.length-1;m++){var A=a[m];if(!(A in d))break e;d=d[A]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,A={next:function(){if(!m&&d<a.length){var k=d++;return{value:u(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),a.apply(u,A)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function E(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,A,k){for(var F=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)F[ie-2]=arguments[ie];return u.prototype[A].apply(m,F)}}function x(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function C(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const A=a.length||0,k=m.length||0;a.length=A+k;for(let F=0;F<k;F++)a[A+F]=m[F]}else a.push(m)}}class U{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function O(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var N=O().indexOf("Gecko")!=-1&&!(O().toLowerCase().indexOf("webkit")!=-1&&O().indexOf("Edge")==-1)&&!(O().indexOf("Trident")!=-1||O().indexOf("MSIE")!=-1)&&O().indexOf("Edge")==-1;function L(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function I(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function y(a){const u={};for(const d in a)u[d]=a[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)a[d]=m[d];for(let k=0;k<v.length;k++)d=v[k],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=fo;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ct{constructor(){this.h=this.g=null}add(u,d){const m=fr.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var fr=new U(()=>new lm,a=>a.reset());class lm{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let pr,mr=!1,fo=new ct,Uc=()=>{const a=c.Promise.resolve(void 0);pr=()=>{a.then(um)}};var um=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){S(d)}var u=fr;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}mr=!1};function Tt(){this.s=this.s,this.C=this.C}Tt.prototype.s=!1,Tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var hm=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function gr(a,u){if(we.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(N){e:{try{$(u.nodeName);var A=!0;break e}catch{}A=!1}A||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:dm[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&gr.aa.h.call(this)}}P(gr,we);var dm={2:"touch",3:"pen",4:"mouse"};gr.prototype.h=function(){gr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Es="closure_listenable_"+(1e6*Math.random()|0),fm=0;function pm(a,u,d,m,A){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=A,this.key=++fm,this.da=this.fa=!1}function ws(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function bs(a){this.src=a,this.g={},this.h=0}bs.prototype.add=function(a,u,d,m,A){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var F=mo(a,u,m,A);return-1<F?(u=a[F],d||(u.fa=!1)):(u=new pm(u,this.src,k,!!m,A),u.fa=d,a.push(u)),u};function po(a,u){var d=u.type;if(d in a.g){var m=a.g[d],A=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=A)&&Array.prototype.splice.call(m,A,1),k&&(ws(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function mo(a,u,d,m){for(var A=0;A<a.length;++A){var k=a[A];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==m)return A}return-1}var go="closure_lm_"+(1e6*Math.random()|0),yo={};function $c(a,u,d,m,A){if(Array.isArray(u)){for(var k=0;k<u.length;k++)$c(a,u[k],d,m,A);return null}return d=Gc(d),a&&a[Es]?a.K(u,d,h(m)?!!m.capture:!1,A):mm(a,u,d,!1,m,A)}function mm(a,u,d,m,A,k){if(!u)throw Error("Invalid event type");var F=h(A)?!!A.capture:!!A,ie=vo(a);if(ie||(a[go]=ie=new bs(a)),d=ie.add(u,d,m,F,k),d.proxy)return d;if(m=gm(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)hm||(A=F),A===void 0&&(A=!1),a.addEventListener(u.toString(),m,A);else if(a.attachEvent)a.attachEvent(zc(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function gm(){function a(d){return u.call(a.src,a.listener,d)}const u=ym;return a}function qc(a,u,d,m,A){if(Array.isArray(u))for(var k=0;k<u.length;k++)qc(a,u[k],d,m,A);else m=h(m)?!!m.capture:!!m,d=Gc(d),a&&a[Es]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],d=mo(k,d,m,A),-1<d&&(ws(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=vo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=mo(u,d,m,A)),(d=-1<a?u[a]:null)&&_o(d))}function _o(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Es])po(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(zc(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=vo(u))?(po(d,a),d.h==0&&(d.src=null,u[go]=null)):ws(a)}}}function zc(a){return a in yo?yo[a]:yo[a]="on"+a}function ym(a,u){if(a.da)a=!0;else{u=new gr(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&_o(a),a=d.call(m,u)}return a}function vo(a){return a=a[go],a instanceof bs?a:null}var Io="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gc(a){return typeof a=="function"?a:(a[Io]||(a[Io]=function(u){return a.handleEvent(u)}),a[Io])}function be(){Tt.call(this),this.i=new bs(this),this.M=this,this.F=null}P(be,Tt),be.prototype[Es]=!0,be.prototype.removeEventListener=function(a,u,d,m){qc(this,a,u,d,m)};function De(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new we(u,a);else if(u instanceof we)u.target=u.target||a;else{var A=u;u=new we(m,a),w(u,A)}if(A=!0,d)for(var k=d.length-1;0<=k;k--){var F=u.g=d[k];A=As(F,m,!0,u)&&A}if(F=u.g=a,A=As(F,m,!0,u)&&A,A=As(F,m,!1,u)&&A,d)for(k=0;k<d.length;k++)F=u.g=d[k],A=As(F,m,!1,u)&&A}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)ws(d[m]);delete a.g[u],a.h--}}this.F=null},be.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},be.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function As(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,k=0;k<u.length;++k){var F=u[k];if(F&&!F.da&&F.capture==d){var ie=F.listener,Te=F.ha||F.src;F.fa&&po(a.i,F),A=ie.call(Te,m)!==!1&&A}}return A&&!m.defaultPrevented}function Hc(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Kc(a){a.g=Hc(()=>{a.g=null,a.i&&(a.i=!1,Kc(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class _m extends Tt{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Kc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yr(a){Tt.call(this),this.h=a,this.g={}}P(yr,Tt);var Wc=[];function Qc(a){L(a.g,function(u,d){this.g.hasOwnProperty(d)&&_o(u)},a),a.g={}}yr.prototype.N=function(){yr.aa.N.call(this),Qc(this)},yr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var To=c.JSON.stringify,vm=c.JSON.parse,Im=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Eo(){}Eo.prototype.h=null;function Jc(a){return a.h||(a.h=a.i())}function Yc(){}var _r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wo(){we.call(this,"d")}P(wo,we);function bo(){we.call(this,"c")}P(bo,we);var Wt={},Xc=null;function Ss(){return Xc=Xc||new be}Wt.La="serverreachability";function Zc(a){we.call(this,Wt.La,a)}P(Zc,we);function vr(a){const u=Ss();De(u,new Zc(u))}Wt.STAT_EVENT="statevent";function el(a,u){we.call(this,Wt.STAT_EVENT,a),this.stat=u}P(el,we);function xe(a){const u=Ss();De(u,new el(u,a))}Wt.Ma="timingevent";function tl(a,u){we.call(this,Wt.Ma,a),this.size=u}P(tl,we);function Ir(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Tr(){this.g=!0}Tr.prototype.xa=function(){this.g=!1};function Tm(a,u,d,m,A,k){a.info(function(){if(a.g)if(k)for(var F="",ie=k.split("&"),Te=0;Te<ie.length;Te++){var ee=ie[Te].split("=");if(1<ee.length){var Ae=ee[0];ee=ee[1];var Se=Ae.split("_");F=2<=Se.length&&Se[1]=="type"?F+(Ae+"="+ee+"&"):F+(Ae+"=redacted&")}}else F=null;else F=k;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+d+`
`+F})}function Em(a,u,d,m,A,k,F){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+d+`
`+k+" "+F})}function Pn(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+bm(a,d)+(m?" "+m:"")})}function wm(a,u){a.info(function(){return"TIMEOUT: "+u})}Tr.prototype.info=function(){};function bm(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var k=A[0];if(k!="noop"&&k!="stop"&&k!="close")for(var F=1;F<A.length;F++)A[F]=""}}}}return To(d)}catch{return u}}var Rs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ao;function Ps(){}P(Ps,Eo),Ps.prototype.g=function(){return new XMLHttpRequest},Ps.prototype.i=function(){return{}},Ao=new Ps;function Et(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new yr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rl}function rl(){this.i=null,this.g="",this.h=!1}var sl={},So={};function Ro(a,u,d){a.L=1,a.v=xs(lt(u)),a.m=d,a.P=!0,il(a,null)}function il(a,u){a.F=Date.now(),Cs(a),a.A=lt(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),vl(d.i,"t",m),a.C=0,d=a.j.J,a.h=new rl,a.g=Ml(a.j,d?u:null,!a.m),0<a.O&&(a.M=new _m(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(Wc[0]=A.toString()),A=Wc);for(var k=0;k<A.length;k++){var F=$c(d,A[k],m||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),vr(),Tm(a.i,a.u,a.A,a.l,a.R,a.m)}Et.prototype.ca=function(a){a=a.target;const u=this.M;u&&ut(a)==3?u.j():this.Y(a)},Et.prototype.Y=function(a){try{if(a==this.g)e:{const Se=ut(this.g);var u=this.g.Ba();const Dn=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||Sl(this.g)))){this.J||Se!=4||u==7||(u==8||0>=Dn?vr(3):vr(2)),Po(this);var d=this.g.Z();this.X=d;t:if(ol(this)){var m=Sl(this.g);a="";var A=m.length,k=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),Er(this);var F="";break t}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(k&&u==A-1)});m.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,Em(this.i,this.u,this.A,this.l,this.R,Se,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,Te=this.g;if((ie=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ie)){var ee=ie;break t}}ee=null}if(d=ee)Pn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Co(this,d);else{this.o=!1,this.s=3,xe(12),Qt(this),Er(this);break e}}if(this.P){d=!0;let qe;for(;!this.J&&this.C<F.length;)if(qe=Am(this,F),qe==So){Se==4&&(this.s=4,xe(14),d=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==sl){this.s=4,xe(15),Pn(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else Pn(this.i,this.l,qe,null),Co(this,qe);if(ol(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||F.length!=0||this.h.h||(this.s=1,xe(16),d=!1),this.o=this.o&&d,!d)Pn(this.i,this.l,F,"[Invalid Chunked Response]"),Qt(this),Er(this);else if(0<F.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Lo(Ae),Ae.M=!0,xe(11))}}else Pn(this.i,this.l,F,null),Co(this,F);Se==4&&Qt(this),this.o&&!this.J&&(Se==4?Vl(this.j,this):(this.o=!1,Cs(this)))}else $m(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),Qt(this),Er(this)}}}catch{}finally{}};function ol(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Am(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?So:(d=Number(u.substring(d,m)),isNaN(d)?sl:(m+=1,m+d>u.length?So:(u=u.slice(m,m+d),a.C=m+d,u)))}Et.prototype.cancel=function(){this.J=!0,Qt(this)};function Cs(a){a.S=Date.now()+a.I,al(a,a.I)}function al(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ir(g(a.ba,a),u)}function Po(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Et.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(wm(this.i,this.A),this.L!=2&&(vr(),xe(17)),Qt(this),this.s=2,Er(this)):al(this,this.S-a)};function Er(a){a.j.G==0||a.J||Vl(a.j,a)}function Qt(a){Po(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Qc(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Co(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||ko(d.h,a))){if(!a.K&&ko(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Fs(d),Os(d);else break e;No(d),xe(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ir(g(d.Za,d),6e3));if(1>=ul(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Yt(d,11)}else if((a.K||d.g==a)&&Fs(d),!j(u))for(A=d.Da.g.parse(u),u=0;u<A.length;u++){let ee=A[u];if(d.T=ee[0],ee=ee[1],d.G==2)if(ee[0]=="c"){d.K=ee[1],d.ia=ee[2];const Ae=ee[3];Ae!=null&&(d.la=Ae,d.j.info("VER="+d.la));const Se=ee[4];Se!=null&&(d.Aa=Se,d.j.info("SVER="+d.Aa));const Dn=ee[5];Dn!=null&&typeof Dn=="number"&&0<Dn&&(m=1.5*Dn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const qe=a.g;if(qe){const Bs=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bs){var k=m.h;k.g||Bs.indexOf("spdy")==-1&&Bs.indexOf("quic")==-1&&Bs.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Do(k,k.h),k.h=null))}if(m.D){const Oo=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(m.ya=Oo,ce(m.I,m.D,Oo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var F=a;if(m.qa=Ol(m,m.J?m.ia:null,m.W),F.K){hl(m.h,F);var ie=F,Te=m.L;Te&&(ie.I=Te),ie.B&&(Po(ie),Cs(ie)),m.g=F}else Dl(m);0<d.i.length&&Ms(d)}else ee[0]!="stop"&&ee[0]!="close"||Yt(d,7);else d.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?Yt(d,7):Vo(d):ee[0]!="noop"&&d.l&&d.l.ta(ee),d.v=0)}}vr(4)}catch{}}var Sm=class{constructor(a,u){this.g=a,this.map=u}};function cl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ll(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ul(a){return a.h?1:a.g?a.g.size:0}function ko(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Do(a,u){a.g?a.g.add(u):a.h=u}function hl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}cl.prototype.cancel=function(){if(this.i=dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function dl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return x(a.i)}function Rm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function Pm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function fl(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Pm(a),m=Rm(a),A=m.length,k=0;k<A;k++)u.call(void 0,m[k],d&&d[k],a)}var pl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cm(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),A=null;if(0<=m){var k=a[d].substring(0,m);A=a[d].substring(m+1)}else k=a[d];u(k,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Jt(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Jt){this.h=a.h,ks(this,a.j),this.o=a.o,this.g=a.g,Ds(this,a.s),this.l=a.l;var u=a.i,d=new Ar;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),ml(this,d),this.m=a.m}else a&&(u=String(a).match(pl))?(this.h=!1,ks(this,u[1]||"",!0),this.o=wr(u[2]||""),this.g=wr(u[3]||"",!0),Ds(this,u[4]),this.l=wr(u[5]||"",!0),ml(this,u[6]||"",!0),this.m=wr(u[7]||"")):(this.h=!1,this.i=new Ar(null,this.h))}Jt.prototype.toString=function(){var a=[],u=this.j;u&&a.push(br(u,gl,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(br(u,gl,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(br(d,d.charAt(0)=="/"?xm:Dm,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",br(d,Nm)),a.join("")};function lt(a){return new Jt(a)}function ks(a,u,d){a.j=d?wr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ds(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function ml(a,u,d){u instanceof Ar?(a.i=u,Lm(a.i,a.h)):(d||(u=br(u,Vm)),a.i=new Ar(u,a.h))}function ce(a,u,d){a.i.set(u,d)}function xs(a){return ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function wr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function br(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,km),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function km(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gl=/[#\/\?@]/g,Dm=/[#\?:]/g,xm=/[#\?]/g,Vm=/[#\?@]/g,Nm=/#/g;function Ar(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function wt(a){a.g||(a.g=new Map,a.h=0,a.i&&Cm(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Ar.prototype,r.add=function(a,u){wt(this),this.i=null,a=Cn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function yl(a,u){wt(a),u=Cn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function _l(a,u){return wt(a),u=Cn(a,u),a.g.has(u)}r.forEach=function(a,u){wt(this),this.g.forEach(function(d,m){d.forEach(function(A){a.call(u,A,m,this)},this)},this)},r.na=function(){wt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const A=a[m];for(let k=0;k<A.length;k++)d.push(u[m])}return d},r.V=function(a){wt(this);let u=[];if(typeof a=="string")_l(this,a)&&(u=u.concat(this.g.get(Cn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return wt(this),this.i=null,a=Cn(this,a),_l(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function vl(a,u,d){yl(a,u),0<d.length&&(a.i=null,a.g.set(Cn(a,u),x(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const k=encodeURIComponent(String(m)),F=this.V(m);for(m=0;m<F.length;m++){var A=k;F[m]!==""&&(A+="="+encodeURIComponent(String(F[m]))),a.push(A)}}return this.i=a.join("&")};function Cn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Lm(a,u){u&&!a.j&&(wt(a),a.i=null,a.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(yl(this,m),vl(this,A,d))},a)),a.j=u}function Om(a,u){const d=new Tr;if(c.Image){const m=new Image;m.onload=E(bt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=E(bt,d,"TestLoadImage: error",!1,u,m),m.onabort=E(bt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=E(bt,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function Mm(a,u){const d=new Tr,m=new AbortController,A=setTimeout(()=>{m.abort(),bt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(A),k.ok?bt(d,"TestPingServer: ok",!0,u):bt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),bt(d,"TestPingServer: error",!1,u)})}function bt(a,u,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Fm(){this.g=new Im}function jm(a,u,d){const m=d||"";try{fl(a,function(A,k){let F=A;h(A)&&(F=To(A)),u.push(m+k+"="+encodeURIComponent(F))})}catch(A){throw u.push(m+"type="+encodeURIComponent("_badmap")),A}}function Vs(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Vs,Eo),Vs.prototype.g=function(){return new Ns(this.l,this.j)},Vs.prototype.i=function(a){return function(){return a}}({});function Ns(a,u){be.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ns,be),r=Ns.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Rr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Il(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Il(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Sr(this):Rr(this),this.readyState==3&&Il(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Sr(this))},r.Qa=function(a){this.g&&(this.response=a,Sr(this))},r.ga=function(){this.g&&Sr(this)};function Sr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Rr(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Rr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tl(a){let u="";return L(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function xo(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Tl(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ce(a,u,d))}function de(a){be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(de,be);var Bm=/^https?$/i,Um=["POST","PUT"];r=de.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ao.g(),this.v=this.o?Jc(this.o):Jc(Ao),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){El(this,k);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Um,u,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,F]of d)this.g.setRequestHeader(k,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Al(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){El(this,k)}};function El(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,wl(a),Ls(a)}function wl(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,De(this,"complete"),De(this,"abort"),Ls(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ls(this,!0)),de.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?bl(this):this.bb())},r.bb=function(){bl(this)};function bl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ut(a)!=4||a.Z()!=2)){if(a.u&&ut(a)==4)Hc(a.Ea,0,a);else if(De(a,"readystatechange"),ut(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=F===0){var A=String(a.D).match(pl)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!Bm.test(A?A.toLowerCase():"")}d=m}if(d)De(a,"complete"),De(a,"success");else{a.m=6;try{var k=2<ut(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",wl(a)}}finally{Ls(a)}}}}function Ls(a,u){if(a.g){Al(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||De(a,"ready");try{d.onreadystatechange=m}catch{}}}function Al(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function ut(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),vm(u)}};function Sl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $m(a){const u={};a=(a.g&&2<=ut(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(j(a[m]))continue;var d=b(a[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[A]||[];u[A]=k,k.push(d)}I(u,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Rl(a){this.Aa=0,this.i=[],this.j=new Tr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pr("baseRetryDelayMs",5e3,a),this.cb=Pr("retryDelaySeedMs",1e4,a),this.Wa=Pr("forwardChannelMaxRetries",2,a),this.wa=Pr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new cl(a&&a.concurrentRequestLimit),this.Da=new Fm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Rl.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,m){xe(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Ol(this,null,this.W),Ms(this)};function Vo(a){if(Pl(a),a.G==3){var u=a.U++,d=lt(a.I);if(ce(d,"SID",a.K),ce(d,"RID",u),ce(d,"TYPE","terminate"),Cr(a,d),u=new Et(a,a.j,u),u.L=2,u.v=xs(lt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Ml(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Cs(u)}Ll(a)}function Os(a){a.g&&(Lo(a),a.g.cancel(),a.g=null)}function Pl(a){Os(a),a.u&&(c.clearTimeout(a.u),a.u=null),Fs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ms(a){if(!ll(a.h)&&!a.s){a.s=!0;var u=a.Ga;pr||Uc(),mr||(pr(),mr=!0),fo.add(u,a),a.B=0}}function qm(a,u){return ul(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ir(g(a.Ga,a,u),Nl(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new Et(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),w(k,this.S)):k=this.S),this.m!==null||this.O||(A.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=kl(this,A,u),d=lt(this.I),ce(d,"RID",a),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),Cr(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(Tl(k)))+"&"+u:this.m&&xo(d,this.m,k)),Do(this.h,A),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",u),ce(d,"SID","null"),A.T=!0,Ro(A,d,null)):Ro(A,d,u),this.G=2}}else this.G==3&&(a?Cl(this,a):this.i.length==0||ll(this.h)||Cl(this))};function Cl(a,u){var d;u?d=u.l:d=a.U++;const m=lt(a.I);ce(m,"SID",a.K),ce(m,"RID",d),ce(m,"AID",a.T),Cr(a,m),a.m&&a.o&&xo(m,a.m,a.o),d=new Et(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=kl(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Do(a.h,d),Ro(d,m,u)}function Cr(a,u){a.H&&L(a.H,function(d,m){ce(u,m,d)}),a.l&&fl({},function(d,m){ce(u,m,d)})}function kl(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var A=a.i;let k=-1;for(;;){const F=["count="+d];k==-1?0<d?(k=A[0].g,F.push("ofs="+k)):k=0:F.push("ofs="+k);let ie=!0;for(let Te=0;Te<d;Te++){let ee=A[Te].g;const Ae=A[Te].map;if(ee-=k,0>ee)k=Math.max(0,A[Te].g-100),ie=!1;else try{jm(Ae,F,"req"+ee+"_")}catch{m&&m(Ae)}}if(ie){m=F.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Dl(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;pr||Uc(),mr||(pr(),mr=!0),fo.add(u,a),a.v=0}}function No(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ir(g(a.Fa,a),Nl(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,xl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ir(g(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),Os(this),xl(this))};function Lo(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function xl(a){a.g=new Et(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=lt(a.qa);ce(u,"RID","rpc"),ce(u,"SID",a.K),ce(u,"AID",a.T),ce(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ce(u,"TO",a.ja),ce(u,"TYPE","xmlhttp"),Cr(a,u),a.m&&a.o&&xo(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=xs(lt(u)),d.m=null,d.P=!0,il(d,a)}r.Za=function(){this.C!=null&&(this.C=null,Os(this),No(this),xe(19))};function Fs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Vl(a,u){var d=null;if(a.g==u){Fs(a),Lo(a),a.g=null;var m=2}else if(ko(a.h,u))d=u.D,hl(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var A=a.B;m=Ss(),De(m,new tl(m,d)),Ms(a)}else Dl(a);else if(A=u.s,A==3||A==0&&0<u.X||!(m==1&&qm(a,u)||m==2&&No(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),A){case 1:Yt(a,5);break;case 4:Yt(a,10);break;case 3:Yt(a,6);break;default:Yt(a,2)}}}function Nl(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Yt(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const A=!m;m=new Jt(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ks(m,"https"),xs(m),A?Om(m.toString(),d):Mm(m.toString(),d)}else xe(2);a.G=0,a.l&&a.l.sa(u),Ll(a),Pl(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Ll(a){if(a.G=0,a.ka=[],a.l){const u=dl(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ka,u),C(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Ol(a,u,d){var m=d instanceof Jt?lt(d):new Jt(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ds(m,m.s);else{var A=c.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var k=new Jt(null);m&&ks(k,m),u&&(k.g=u),A&&Ds(k,A),d&&(k.l=d),m=k}return d=a.D,u=a.ya,d&&u&&ce(m,d,u),ce(m,"VER",a.la),Cr(a,m),m}function Ml(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new de(new Vs({eb:d})):new de(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fl(){}r=Fl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function js(){}js.prototype.g=function(a,u){return new je(a,u)};function je(a,u){be.call(this),this.g=new Rl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new kn(this)}P(je,be),je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){Vo(this.g)},je.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=To(a),a=d);u.i.push(new Sm(u.Ya++,a)),u.G==3&&Ms(u)},je.prototype.N=function(){this.g.l=null,delete this.j,Vo(this.g),delete this.g,je.aa.N.call(this)};function jl(a){wo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}P(jl,wo);function Bl(){bo.call(this),this.status=1}P(Bl,bo);function kn(a){this.g=a}P(kn,Fl),kn.prototype.ua=function(){De(this.g,"a")},kn.prototype.ta=function(a){De(this.g,new jl(a))},kn.prototype.sa=function(a){De(this.g,new Bl)},kn.prototype.ra=function(){De(this.g,"b")},js.prototype.createWebChannel=js.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,ld=function(){return new js},cd=function(){return Ss()},ad=Wt,ca={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rs.NO_ERROR=0,Rs.TIMEOUT=8,Rs.HTTP_ERROR=6,Ys=Rs,nl.COMPLETE="complete",od=nl,Yc.EventType=_r,_r.OPEN="a",_r.CLOSE="b",_r.ERROR="c",_r.MESSAGE="d",be.prototype.listen=be.prototype.K,Or=Yc,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,id=de}).apply(typeof Us<"u"?Us:typeof self<"u"?self:typeof window<"u"?window:{});const Zl="@firebase/firestore";/**
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
 */let ar="10.14.0";/**
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
 */const dn=new Oa("@firebase/firestore");function On(){return dn.logLevel}function V(r,...e){if(dn.logLevel<=Y.DEBUG){const t=e.map(Fa);dn.debug(`Firestore (${ar}): ${r}`,...t)}}function pe(r,...e){if(dn.logLevel<=Y.ERROR){const t=e.map(Fa);dn.error(`Firestore (${ar}): ${r}`,...t)}}function Xr(r,...e){if(dn.logLevel<=Y.WARN){const t=e.map(Fa);dn.warn(`Firestore (${ar}): ${r}`,...t)}}function Fa(r){if(typeof r=="string")return r;try{/**
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
 */function q(r="Unexpected state"){const e=`FIRESTORE (${ar}) INTERNAL ASSERTION FAILED: `+r;throw pe(e),new Error(e)}function G(r,e){r||q()}function z(r,e){return r}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends it{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xe{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Sy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ry{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class Py{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new Xe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xe,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xe)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string"),new Sy(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new Pe(e)}}class Cy{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ky{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Cy(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){G(this.o===void 0);const n=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new Dy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Vy(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class ud{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=Vy(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function W(r,e){return r<e?-1:r>e?1:0}function Kn(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function hd(r){return r+"\0"}/**
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
 */class he{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new M(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return he.fromMillis(Date.now())}static fromDate(e){return he.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new he(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Zr{constructor(e,t,n){t===void 0?t=0:t>e.length&&q(),n===void 0?n=e.length-t:n>e.length-t&&q(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Zr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zr?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class te extends Zr{construct(e,t,n){return new te(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new M(D.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new te(t)}static emptyPath(){return new te([])}}const Ny=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ue extends Zr{construct(e,t,n){return new ue(e,t,n)}static isValidIdentifier(e){return Ny.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ue(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new M(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new M(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new M(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ue(t)}static emptyPath(){return new ue([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(te.fromString(e))}static fromName(e){return new B(te.fromString(e).popFirst(5))}static empty(){return new B(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new te(e.slice()))}}/**
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
 */class fi{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function la(r){return r.fields.find(e=>e.kind===2)}function nn(r){return r.fields.filter(e=>e.kind!==2)}fi.UNKNOWN_ID=-1;class Xs{constructor(e,t){this.fieldPath=e,this.kind=t}}class es{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new es(0,$e.min())}}function dd(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=H.fromTimestamp(n===1e9?new he(t+1,0):new he(t,n));return new $e(s,B.empty(),e)}function fd(r){return new $e(r.readTime,r.key,-1)}class $e{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new $e(H.min(),B.empty(),-1)}static max(){return new $e(H.max(),B.empty(),-1)}}function ja(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(r.documentKey,e.documentKey),t!==0?t:W(r.largestBatchId,e.largestBatchId))}/**
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
 */const pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class md{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zt(r){if(r.code!==D.FAILED_PRECONDITION||r.message!==pd)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Oi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Xe,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new $r(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=Ba(n.target.error);this.V.reject(new $r(e,s))}}static open(e,t,n,s){try{return new Oi(t,e.transaction(s,n))}catch(i){throw new $r(t,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Oy(t)}}class Ft{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Ft.S(ye())===12.2&&pe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),rn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Yh())return!1;if(Ft.v())return!0;const e=ye(),t=Ft.S(e),n=0<t&&t<10,s=gd(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new $r(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new M(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new M(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new $r(e,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=Oi.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),R.reject(h))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function gd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Ly{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return rn(this.B.delete())}}class $r extends M{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Gt(r){return r.name==="IndexedDbTransactionError"}class Oy{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(V("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),rn(n)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),rn(this.store.add(e))}get(e){return rn(this.store.get(e)).next(t=>(t===void 0&&(t=null),V("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),rn(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),rn(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new R((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new R((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){V("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new R((n,s)=>{t.onerror=i=>{const o=Ba(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new R((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new Ly(c),h=t(c.primaryKey,c.value,l);if(h instanceof R){const f=h.catch(p=>(l.done(),R.reject(p)));n.push(f)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>R.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function rn(r){return new R((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Ba(n.target.error);t(s)}})}let eu=!1;function Ba(r){const e=Ft.S(ye());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eu||(eu=!0,setTimeout(()=>{throw n},0)),n}}return r}class My{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){V("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{V("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Gt(t)?V("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await zt(t)}await this.X(6e4)})}}class Fy{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return R.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return V("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(V("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=fd(i);ja(o,n)>0&&(n=o)}),new $e(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Me{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Me.oe=-1;function Mi(r){return r==null}function ts(r){return r===0&&1/r==-1/0}function yd(r){return typeof r=="number"&&Number.isInteger(r)&&!ts(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ve(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=tu(e)),e=jy(r.get(t),e);return tu(e)}function jy(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function tu(r){return r+""}function Qe(r){const e=r.length;if(G(e>=2),e===2)return G(r.charAt(0)===""&&r.charAt(1)===""),te.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&q(),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:q()}i=o+2}return new te(n)}/**
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
 */const nu=["userId","batchId"];/**
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
 */function Zs(r,e){return[r,Ve(e)]}function _d(r,e,t){return[r,Ve(e),t]}const By={},Uy=["prefixPath","collectionGroup","readTime","documentId"],$y=["prefixPath","collectionGroup","documentId"],qy=["collectionGroup","readTime","prefixPath","documentId"],zy=["canonicalId","targetId"],Gy=["targetId","path"],Hy=["path","targetId"],Ky=["collectionId","parent"],Wy=["indexId","uid"],Qy=["uid","sequenceNumber"],Jy=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Yy=["indexId","uid","orderedDocumentKey"],Xy=["userId","collectionPath","documentId"],Zy=["userId","collectionPath","largestBatchId"],e_=["userId","collectionGroup","largestBatchId"],vd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],t_=[...vd,"documentOverlays"],Id=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Td=Id,Ua=[...Td,"indexConfiguration","indexState","indexEntries"],n_=Ua,r_=[...Ua,"globals"];/**
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
 */class ua extends md{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function ve(r,e){const t=z(r);return Ft.F(t._e,e)}/**
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
 */function ru(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Tn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Ed(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ae{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Ee.RED,this.left=s??Ee.EMPTY,this.right=i??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Ee(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,n,s,i){return this}insert(e,t,n){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(e){this.comparator=e,this.data=new ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new su(this.data.getIterator())}getIteratorFrom(e){return new su(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new se(this.comparator);return t.data=e,t}}class su{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function xn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Fe{constructor(e){this.fields=e,e.sort(ue.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new se(ue.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class wd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class me{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wd("Invalid base64 string: "+i):i}}(e);return new me(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new me(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}me.EMPTY_BYTE_STRING=new me("");const s_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(r){if(G(!!r),typeof r=="string"){let e=0;const t=s_.exec(r);if(G(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:le(r.seconds),nanos:le(r.nanos)}}function le(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ut(r){return typeof r=="string"?me.fromBase64String(r):me.fromUint8Array(r)}/**
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
 */function $a(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function qa(r){const e=r.mapValue.fields.__previous_value__;return $a(e)?qa(e):e}function ns(r){const e=_t(r.mapValue.fields.__local_write_time__.timestampValue);return new he(e.seconds,e.nanos)}/**
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
 */class i_{constructor(e,t,n,s,i,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class fn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Nt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ei={nullValue:"NULL_VALUE"};function pn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?$a(r)?4:bd(r)?9007199254740991:Fi(r)?10:11:q()}function et(r,e){if(r===e)return!0;const t=pn(r);if(t!==pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ns(r).isEqual(ns(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_t(s.timestampValue),c=_t(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return Ut(s.bytesValue).isEqual(Ut(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return le(s.geoPointValue.latitude)===le(i.geoPointValue.latitude)&&le(s.geoPointValue.longitude)===le(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return le(s.integerValue)===le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=le(s.doubleValue),c=le(i.doubleValue);return o===c?ts(o)===ts(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return Kn(r.arrayValue.values||[],e.arrayValue.values||[],et);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ru(o)!==ru(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!et(o[l],c[l])))return!1;return!0}(r,e);default:return q()}}function rs(r,e){return(r.values||[]).find(t=>et(t,e))!==void 0}function $t(r,e){if(r===e)return 0;const t=pn(r),n=pn(e);if(t!==n)return W(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return W(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=le(i.integerValue||i.doubleValue),l=le(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return iu(r.timestampValue,e.timestampValue);case 4:return iu(ns(r),ns(e));case 5:return W(r.stringValue,e.stringValue);case 6:return function(i,o){const c=Ut(i),l=Ut(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=W(c[h],l[h]);if(f!==0)return f}return W(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=W(le(i.latitude),le(o.latitude));return c!==0?c:W(le(i.longitude),le(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return ou(r.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,f;const p=i.fields||{},g=o.fields||{},E=(c=p.value)===null||c===void 0?void 0:c.arrayValue,P=(l=g.value)===null||l===void 0?void 0:l.arrayValue,x=W(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:ou(E,P)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Nt.mapValue&&o===Nt.mapValue)return 0;if(i===Nt.mapValue)return 1;if(o===Nt.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=W(l[p],f[p]);if(g!==0)return g;const E=$t(c[l[p]],h[f[p]]);if(E!==0)return E}return W(l.length,f.length)}(r.mapValue,e.mapValue);default:throw q()}}function iu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return W(r,e);const t=_t(r),n=_t(e),s=W(t.seconds,n.seconds);return s!==0?s:W(t.nanos,n.nanos)}function ou(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=$t(t[s],n[s]);if(i)return i}return W(t.length,n.length)}function Wn(r){return ha(r)}function ha(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=_t(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ut(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return B.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=ha(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${ha(t.fields[o])}`;return s+"}"}(r.mapValue):q()}function ss(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function da(r){return!!r&&"integerValue"in r}function is(r){return!!r&&"arrayValue"in r}function au(r){return!!r&&"nullValue"in r}function cu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ti(r){return!!r&&"mapValue"in r}function Fi(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function qr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Tn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=qr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function bd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Ad={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function o_(r){return"nullValue"in r?ei:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?ss(fn.empty(),B.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Fi(r)?Ad:{mapValue:{}}:q()}function a_(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?ss(fn.empty(),B.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Ad:"mapValue"in r?Fi(r)?{mapValue:{}}:Nt:q()}function lu(r,e){const t=$t(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function uu(r,e){const t=$t(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class Ce{constructor(e){this.value=e}static empty(){return new Ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ti(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qr(t)}setAll(e){let t=ue.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=qr(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());ti(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return et(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];ti(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Tn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Ce(qr(this.value))}}function Sd(r){const e=[];return Tn(r.fields,(t,n)=>{const s=new ue([t]);if(ti(n)){const i=Sd(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Fe(e)}/**
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
 */class Qn{constructor(e,t){this.position=e,this.inclusive=t}}function hu(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=B.comparator(B.fromName(o.referenceValue),t.key):n=$t(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function du(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!et(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class os{constructor(e,t="asc"){this.field=e,this.dir=t}}function c_(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Rd{}class X extends Rd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new l_(e,t,n):t==="array-contains"?new d_(e,n):t==="in"?new Vd(e,n):t==="not-in"?new f_(e,n):t==="array-contains-any"?new p_(e,n):new X(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new u_(e,n):new h_(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison($t(t,this.value)):t!==null&&pn(this.value)===pn(t)&&this.matchesComparison($t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Rd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new re(e,t)}matches(e){return Jn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Jn(r){return r.op==="and"}function fa(r){return r.op==="or"}function za(r){return Pd(r)&&Jn(r)}function Pd(r){for(const e of r.filters)if(e instanceof re)return!1;return!0}function pa(r){if(r instanceof X)return r.field.canonicalString()+r.op.toString()+Wn(r.value);if(za(r))return r.filters.map(e=>pa(e)).join(",");{const e=r.filters.map(t=>pa(t)).join(",");return`${r.op}(${e})`}}function Cd(r,e){return r instanceof X?function(n,s){return s instanceof X&&n.op===s.op&&n.field.isEqual(s.field)&&et(n.value,s.value)}(r,e):r instanceof re?function(n,s){return s instanceof re&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&Cd(o,s.filters[c]),!0):!1}(r,e):void q()}function kd(r,e){const t=r.filters.concat(e);return re.create(t,r.op)}function Dd(r){return r instanceof X?function(t){return`${t.field.canonicalString()} ${t.op} ${Wn(t.value)}`}(r):r instanceof re?function(t){return t.op.toString()+" {"+t.getFilters().map(Dd).join(" ,")+"}"}(r):"Filter"}class l_ extends X{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class u_ extends X{constructor(e,t){super(e,"in",t),this.keys=xd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class h_ extends X{constructor(e,t){super(e,"not-in",t),this.keys=xd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function xd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>B.fromName(n.referenceValue))}class d_ extends X{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return is(t)&&rs(t.arrayValue,this.value)}}class Vd extends X{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&rs(this.value.arrayValue,t)}}class f_ extends X{constructor(e,t){super(e,"not-in",t)}matches(e){if(rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!rs(this.value.arrayValue,t)}}class p_ extends X{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!is(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>rs(this.value.arrayValue,n))}}/**
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
 */class m_{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function ma(r,e=null,t=[],n=[],s=null,i=null,o=null){return new m_(r,e,t,n,s,i,o)}function mn(r){const e=z(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>pa(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Mi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Wn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Wn(n)).join(",")),e.ue=t}return e.ue}function fs(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!c_(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Cd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!du(r.startAt,e.startAt)&&du(r.endAt,e.endAt)}function pi(r){return B.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function mi(r,e){return r.filters.filter(t=>t instanceof X&&t.field.isEqual(e))}function fu(r,e,t){let n=ei,s=!0;for(const i of mi(r,e)){let o=ei,c=!0;switch(i.op){case"<":case"<=":o=o_(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=ei}lu({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];lu({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function pu(r,e,t){let n=Nt,s=!0;for(const i of mi(r,e)){let o=Nt,c=!0;switch(i.op){case">=":case">":o=a_(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Nt}uu({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];uu({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class cr{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Nd(r,e,t,n,s,i,o,c){return new cr(r,e,t,n,s,i,o,c)}function ji(r){return new cr(r)}function mu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ld(r){return r.collectionGroup!==null}function zr(r){const e=z(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new se(ue.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new os(i,n))}),t.has(ue.keyField().canonicalString())||e.ce.push(new os(ue.keyField(),n))}return e.ce}function Ue(r){const e=z(r);return e.le||(e.le=g_(e,zr(r))),e.le}function g_(r,e){if(r.limitType==="F")return ma(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new os(s.field,i)});const t=r.endAt?new Qn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Qn(r.startAt.position,r.startAt.inclusive):null;return ma(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function ga(r,e){const t=r.filters.concat([e]);return new cr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ya(r,e,t){return new cr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Bi(r,e){return fs(Ue(r),Ue(e))&&r.limitType===e.limitType}function Od(r){return`${mn(Ue(r))}|lt:${r.limitType}`}function Mn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Dd(s)).join(", ")}]`),Mi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Wn(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Wn(s)).join(",")),`Target(${n})`}(Ue(r))}; limitType=${r.limitType})`}function ps(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of zr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const h=hu(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,zr(n),s)||n.endAt&&!function(o,c,l){const h=hu(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,zr(n),s))}(r,e)}function Md(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Fd(r){return(e,t)=>{let n=!1;for(const s of zr(r)){const i=y_(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function y_(r,e,t){const n=r.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?$t(l,h):q()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return q()}}/**
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
 */class Ht{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Tn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Ed(this.inner)}size(){return this.innerSize}}/**
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
 */const __=new ae(B.comparator);function Be(){return __}const jd=new ae(B.comparator);function Mr(...r){let e=jd;for(const t of r)e=e.insert(t.key,t);return e}function Bd(r){let e=jd;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Je(){return Gr()}function Ud(){return Gr()}function Gr(){return new Ht(r=>r.toString(),(r,e)=>r.isEqual(e))}const v_=new ae(B.comparator),I_=new se(B.comparator);function Q(...r){let e=I_;for(const t of r)e=e.add(t);return e}const T_=new se(W);function Ga(){return T_}/**
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
 */function Ha(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ts(e)?"-0":e}}function $d(r){return{integerValue:""+r}}function E_(r,e){return yd(e)?$d(e):Ha(r,e)}/**
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
 */class Ui{constructor(){this._=void 0}}function w_(r,e,t){return r instanceof Yn?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$a(i)&&(i=qa(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof Xn?zd(r,e):r instanceof Zn?Gd(r,e):function(s,i){const o=qd(s,i),c=gu(o)+gu(s.Pe);return da(o)&&da(s.Pe)?$d(c):Ha(s.serializer,c)}(r,e)}function b_(r,e,t){return r instanceof Xn?zd(r,e):r instanceof Zn?Gd(r,e):t}function qd(r,e){return r instanceof as?function(n){return da(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Yn extends Ui{}class Xn extends Ui{constructor(e){super(),this.elements=e}}function zd(r,e){const t=Hd(e);for(const n of r.elements)t.some(s=>et(s,n))||t.push(n);return{arrayValue:{values:t}}}class Zn extends Ui{constructor(e){super(),this.elements=e}}function Gd(r,e){let t=Hd(e);for(const n of r.elements)t=t.filter(s=>!et(s,n));return{arrayValue:{values:t}}}class as extends Ui{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function gu(r){return le(r.integerValue||r.doubleValue)}function Hd(r){return is(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Kd{constructor(e,t){this.field=e,this.transform=t}}function A_(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Xn&&s instanceof Xn||n instanceof Zn&&s instanceof Zn?Kn(n.elements,s.elements,et):n instanceof as&&s instanceof as?et(n.Pe,s.Pe):n instanceof Yn&&s instanceof Yn}(r.transform,e.transform)}class S_{constructor(e,t){this.version=e,this.transformResults=t}}class ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ni(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class $i{}function Wd(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new qi(r.key,ke.none()):new lr(r.key,r.data,ke.none());{const t=r.data,n=Ce.empty();let s=new se(ue.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new It(r.key,n,new Fe(s.toArray()),ke.none())}}function R_(r,e,t){r instanceof lr?function(s,i,o){const c=s.value.clone(),l=_u(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof It?function(s,i,o){if(!ni(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=_u(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Qd(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Hr(r,e,t,n){return r instanceof lr?function(i,o,c,l){if(!ni(i.precondition,o))return c;const h=i.value.clone(),f=vu(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof It?function(i,o,c,l){if(!ni(i.precondition,o))return c;const h=vu(i.fieldTransforms,l,o),f=o.data;return f.setAll(Qd(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,c){return ni(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function P_(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=qd(n.transform,s||null);i!=null&&(t===null&&(t=Ce.empty()),t.set(n.field,i))}return t||null}function yu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Kn(n,s,(i,o)=>A_(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class lr extends $i{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class It extends $i{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qd(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function _u(r,e,t){const n=new Map;G(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,b_(o,c,t[s]))}return n}function vu(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,w_(i,o,e))}return n}class qi extends $i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jd extends $i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ka{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&R_(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Hr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Hr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ud();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Wd(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Kn(this.mutations,e.mutations,(t,n)=>yu(t,n))&&Kn(this.baseMutations,e.baseMutations,(t,n)=>yu(t,n))}}class Wa{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){G(e.mutations.length===n.length);let s=function(){return v_}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Wa(e,t,n,s)}}/**
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
 */class Qa{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class C_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ge,Z;function k_(r){switch(r){default:return q();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Yd(r){if(r===void 0)return pe("GRPC error has no .code"),D.UNKNOWN;switch(r){case ge.OK:return D.OK;case ge.CANCELLED:return D.CANCELLED;case ge.UNKNOWN:return D.UNKNOWN;case ge.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ge.INTERNAL:return D.INTERNAL;case ge.UNAVAILABLE:return D.UNAVAILABLE;case ge.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ge.NOT_FOUND:return D.NOT_FOUND;case ge.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ge.ABORTED:return D.ABORTED;case ge.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ge.DATA_LOSS:return D.DATA_LOSS;default:return q()}}(Z=ge||(ge={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function D_(){return new TextEncoder}/**
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
 */const x_=new cn([4294967295,4294967295],0);function Iu(r){const e=D_().encode(r),t=new sd;return t.update(e),new Uint8Array(t.digest())}function Tu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cn([t,n],0),new cn([s,i],0)]}class Ja{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Fr(`Invalid padding: ${t}`);if(n<0)throw new Fr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Fr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Fr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=cn.fromNumber(this.Ie)}Ee(e,t,n){let s=e.add(t.multiply(cn.fromNumber(n)));return s.compare(x_)===1&&(s=new cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Iu(e),[n,s]=Tu(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ja(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Iu(e),[n,s]=Tu(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ms{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,gs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ms(H.min(),s,new ae(W),Be(),Q())}}class gs{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new gs(n,t,Q(),Q(),Q())}}/**
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
 */class ri{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class Xd{constructor(e,t){this.targetId=e,this.me=t}}class Zd{constructor(e,t,n=me.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Eu{constructor(){this.fe=0,this.ge=bu(),this.pe=me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Q(),t=Q(),n=Q();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:q()}}),new gs(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=bu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class V_{constructor(e){this.Le=e,this.Be=new Map,this.ke=Be(),this.qe=wu(),this.Qe=new ae(W)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,n=e.me.count,s=this.Je(t);if(s){const i=s.target;if(pi(i))if(n===0){const o=new B(i.path);this.Ue(t,o,fe.newNoDocument(o,H.min()))}else G(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Ut(n).toUint8Array()}catch(l){if(l instanceof wd)return Xr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ja(o,s,i)}catch(l){return Xr(l instanceof Fr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&pi(c.target)){const l=new B(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,fe.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=Q();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ms(e,t,this.Qe,this.ke,n);return this.ke=Be(),this.qe=wu(),this.Qe=new ae(W),s}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Eu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new se(W),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Eu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function wu(){return new ae(B.comparator)}function bu(){return new ae(B.comparator)}const N_={asc:"ASCENDING",desc:"DESCENDING"},L_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},O_={and:"AND",or:"OR"};class M_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _a(r,e){return r.useProto3Json||Mi(e)?e:{value:e}}function er(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ef(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function F_(r,e){return er(r,e.toTimestamp())}function Ne(r){return G(!!r),H.fromTimestamp(function(t){const n=_t(t);return new he(n.seconds,n.nanos)}(r))}function Ya(r,e){return va(r,e).canonicalString()}function va(r,e){const t=function(s){return new te(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function tf(r){const e=te.fromString(r);return G(hf(e)),e}function gi(r,e){return Ya(r.databaseId,e.path)}function ln(r,e){const t=tf(e);if(t.get(1)!==r.databaseId.projectId)throw new M(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new M(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new B(sf(t))}function nf(r,e){return Ya(r.databaseId,e)}function rf(r){const e=tf(r);return e.length===4?te.emptyPath():sf(e)}function Ia(r){return new te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function sf(r){return G(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Au(r,e,t){return{name:gi(r,e),fields:t.value.mapValue.fields}}function j_(r,e,t){const n=ln(r,e.name),s=Ne(e.updateTime),i=e.createTime?Ne(e.createTime):H.min(),o=new Ce({mapValue:{fields:e.fields}}),c=fe.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function B_(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(G(f===void 0||typeof f=="string"),me.fromBase64String(f||"")):(G(f===void 0||f instanceof Buffer||f instanceof Uint8Array),me.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?D.UNKNOWN:Yd(h.code);return new M(f,h.message||"")}(o);t=new Zd(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=ln(r,n.document.name),i=Ne(n.document.updateTime),o=n.document.createTime?Ne(n.document.createTime):H.min(),c=new Ce({mapValue:{fields:n.document.fields}}),l=fe.newFoundDocument(s,i,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new ri(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=ln(r,n.document),i=n.readTime?Ne(n.readTime):H.min(),o=fe.newNoDocument(s,i),c=n.removedTargetIds||[];t=new ri([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=ln(r,n.document),i=n.removedTargetIds||[];t=new ri([],i,s,null)}else{if(!("filter"in e))return q();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new C_(s,i),c=n.targetId;t=new Xd(c,o)}}return t}function yi(r,e){let t;if(e instanceof lr)t={update:Au(r,e.key,e.value)};else if(e instanceof qi)t={delete:gi(r,e.key)};else if(e instanceof It)t={update:Au(r,e.key,e.data),updateMask:H_(e.fieldMask)};else{if(!(e instanceof Jd))return q();t={verify:gi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof Yn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Xn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Zn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof as)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw q()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:F_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(r,e.precondition)),t}function Ta(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?ke.updateTime(Ne(i.updateTime)):i.exists!==void 0?ke.exists(i.exists):ke.none()}(e.currentDocument):ke.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)G(c.setToServerValue==="REQUEST_TIME"),l=new Yn;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new Xn(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new Zn(f)}else"increment"in c?l=new as(o,c.increment):q();const h=ue.fromServerFormat(c.fieldPath);return new Kd(h,l)}(r,s)):[];if(e.update){e.update.name;const s=ln(r,e.update.name),i=new Ce({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new Fe(h.map(f=>ue.fromServerFormat(f)))}(e.updateMask);return new It(s,i,o,t,n)}return new lr(s,i,t,n)}if(e.delete){const s=ln(r,e.delete);return new qi(s,t)}if(e.verify){const s=ln(r,e.verify);return new Jd(s,t)}return q()}function U_(r,e){return r&&r.length>0?(G(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?Ne(s.updateTime):Ne(i);return o.isEqual(H.min())&&(o=Ne(i)),new S_(o,s.transformResults||[])}(t,e))):[]}function of(r,e){return{documents:[nf(r,e.path)]}}function af(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=nf(r,s);const i=function(h){if(h.length!==0)return uf(re.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Fn(g.field),direction:q_(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=_a(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function cf(r){let e=rf(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){G(n===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const g=lf(p);return g instanceof re&&za(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(P){return new os(jn(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Mi(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,E=p.values||[];return new Qn(E,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,E=p.values||[];return new Qn(E,g)}(t.endAt)),Nd(e,s,o,i,c,"F",l,h)}function $_(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function lf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=jn(t.unaryFilter.field);return X.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=jn(t.unaryFilter.field);return X.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jn(t.unaryFilter.field);return X.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=jn(t.unaryFilter.field);return X.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(r):r.fieldFilter!==void 0?function(t){return X.create(jn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return re.create(t.compositeFilter.filters.map(n=>lf(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(r):q()}function q_(r){return N_[r]}function z_(r){return L_[r]}function G_(r){return O_[r]}function Fn(r){return{fieldPath:r.canonicalString()}}function jn(r){return ue.fromServerFormat(r.fieldPath)}function uf(r){return r instanceof X?function(t){if(t.op==="=="){if(cu(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NAN"}};if(au(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cu(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NAN"}};if(au(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(t.field),op:z_(t.op),value:t.value}}}(r):r instanceof re?function(t){const n=t.getFilters().map(s=>uf(s));return n.length===1?n[0]:{compositeFilter:{op:G_(t.op),filters:n}}}(r):q()}function H_(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function hf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ft{constructor(e,t,n,s,i=H.min(),o=H.min(),c=me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class df{constructor(e){this.ct=e}}function K_(r,e){let t;if(e.document)t=j_(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=B.fromSegments(e.noDocument.path),s=yn(e.noDocument.readTime);t=fe.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const n=B.fromSegments(e.unknownDocument.path),s=yn(e.unknownDocument.version);t=fe.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new he(s[0],s[1]);return H.fromTimestamp(i)}(e.readTime)),t}function Su(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:_i(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:gi(i,o.key),fields:o.data.value.mapValue.fields,updateTime:er(i,o.version.toTimestamp()),createTime:er(i,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:gn(e.version)};else{if(!e.isUnknownDocument())return q();n.unknownDocument={path:t.path.toArray(),version:gn(e.version)}}return n}function _i(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function gn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function yn(r){const e=new he(r.seconds,r.nanoseconds);return H.fromTimestamp(e)}function sn(r,e){const t=(e.baseMutations||[]).map(i=>Ta(r.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>Ta(r.ct,i)),s=he.fromMillis(e.localWriteTimeMs);return new Ka(e.batchId,s,t,n)}function jr(r){const e=yn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?yn(r.lastLimboFreeSnapshotVersion):H.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return G(i.documents.length===1),Ue(ji(rf(i.documents[0])))}(r.query):function(i){return Ue(cf(i))}(r.query),new ft(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,me.fromBase64String(r.resumeToken))}function ff(r,e){const t=gn(e.snapshotVersion),n=gn(e.lastLimboFreeSnapshotVersion);let s;s=pi(e.target)?of(r.ct,e.target):af(r.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:mn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function pf(r){const e=cf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ya(e,e.limit,"L"):e}function $o(r,e){return new Qa(e.largestBatchId,Ta(r.ct,e.overlayMutation))}function Ru(r,e){const t=e.path.lastSegment();return[r,Ve(e.path.popLast()),t]}function Pu(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:gn(n.readTime),documentKey:Ve(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class W_{getBundleMetadata(e,t){return Cu(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:yn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return Cu(e).put(function(s){return{bundleId:s.id,createTime:gn(Ne(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return ku(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:pf(i.bundledQuery),readTime:yn(i.readTime)}}(n)})}saveNamedQuery(e,t){return ku(e).put(function(s){return{name:s.name,readTime:gn(Ne(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Cu(r){return ve(r,"bundles")}function ku(r){return ve(r,"namedQueries")}/**
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
 */class zi{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new zi(e,n)}getOverlay(e,t){return kr(e).get(Ru(this.userId,t)).next(n=>n?$o(this.serializer,n):null)}getOverlays(e,t){const n=Je();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new Qa(t,o);s.push(this.ht(e,c))}),R.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(Ve(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(kr(e).j("collectionPathOverlayIndex",c))}),R.waitFor(i)}getOverlaysForCollection(e,t,n){const s=Je(),i=Ve(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return kr(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const h=$o(this.serializer,l);s.set(h.getKey(),h)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=Je();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return kr(e).J({index:"collectionGroupOverlayIndex",range:c},(l,h,f)=>{const p=$o(this.serializer,h);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>i)}ht(e,t){return kr(e).put(function(s,i,o){const[c,l,h]=Ru(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:yi(s.ct,o.mutation)}}(this.serializer,this.userId,t))}}function kr(r){return ve(r,"documentOverlays")}/**
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
 */class Q_{Pt(e){return ve(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?me.fromUint8Array(n):me.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class on{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(le(e.integerValue));else if("doubleValue"in e){const n=le(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ts(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=_t(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(Ut(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?bd(e)?this.dt(t,Number.MAX_SAFE_INTEGER):Fi(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):q()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const s of Object.keys(n))this.Vt(s,t),this.Tt(n[s],t)}wt(e,t){var n,s;const i=e.fields||{};this.dt(t,53);const o="value",c=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(t,15),t.At(le(c)),this.Vt(o,t),this.Tt(i[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const s of n)this.Tt(s,t)}yt(e,t){this.dt(t,37),B.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}on.vt=new on;function J_(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Du(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=J_(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class Y_{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=t.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=t.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const t=this.qt(e),n=Du(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Kt(e){const t=this.qt(e),n=Du(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class X_{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class Z_{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Dr{constructor(){this.jt=new Y_,this.Ht=new X_(this.jt),this.Jt=new Z_(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class an{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new an(this.indexId,this.documentKey,this.arrayValue,n)}}function At(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=xu(r.arrayValue,e.arrayValue),t!==0?t:(t=xu(r.directionalValue,e.directionalValue),t!==0?t:B.comparator(r.documentKey,e.documentKey)))}function xu(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class Vu{constructor(e){this.Xt=new se((t,n)=>ue.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(G(e.collectionGroup===this.collectionId),this.nn)return!1;const t=la(e);if(t!==void 0&&!this.sn(t))return!1;const n=nn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new se(ue.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Xs(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Xs(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Xs(n.field,n.dir==="asc"?0:1)));return new fi(fi.UNKNOWN_ID,this.collectionId,t,es.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function mf(r){var e,t;if(G(r instanceof X||r instanceof re),r instanceof X){if(r instanceof Vd){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>X.create(r.field,"==",i)))||[];return re.create(s,"or")}return r}const n=r.filters.map(s=>mf(s));return re.create(n,r.op)}function ev(r){if(r.getFilters().length===0)return[];const e=ba(mf(r));return G(gf(e)),Ea(e)||wa(e)?[e]:e.getFilters()}function Ea(r){return r instanceof X}function wa(r){return r instanceof re&&za(r)}function gf(r){return Ea(r)||wa(r)||function(t){if(t instanceof re&&fa(t)){for(const n of t.getFilters())if(!Ea(n)&&!wa(n))return!1;return!0}return!1}(r)}function ba(r){if(G(r instanceof X||r instanceof re),r instanceof X)return r;if(r.filters.length===1)return ba(r.filters[0]);const e=r.filters.map(n=>ba(n));let t=re.create(e,r.op);return t=vi(t),gf(t)?t:(G(t instanceof re),G(Jn(t)),G(t.filters.length>1),t.filters.reduce((n,s)=>Xa(n,s)))}function Xa(r,e){let t;return G(r instanceof X||r instanceof re),G(e instanceof X||e instanceof re),t=r instanceof X?e instanceof X?function(s,i){return re.create([s,i],"and")}(r,e):Nu(r,e):e instanceof X?Nu(e,r):function(s,i){if(G(s.filters.length>0&&i.filters.length>0),Jn(s)&&Jn(i))return kd(s,i.getFilters());const o=fa(s)?s:i,c=fa(s)?i:s,l=o.filters.map(h=>Xa(h,c));return re.create(l,"or")}(r,e),vi(t)}function Nu(r,e){if(Jn(e))return kd(e,r.getFilters());{const t=e.filters.map(n=>Xa(r,n));return re.create(t,"or")}}function vi(r){if(G(r instanceof X||r instanceof re),r instanceof X)return r;const e=r.getFilters();if(e.length===1)return vi(e[0]);if(Pd(r))return r;const t=e.map(s=>vi(s)),n=[];return t.forEach(s=>{s instanceof X?n.push(s):s instanceof re&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:re.create(n,r.op)}/**
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
 */class tv{constructor(){this.un=new Za}addToCollectionParentIndex(e,t){return this.un.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve($e.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve($e.min())}updateCollectionGroup(e,t,n){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Za{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new se(te.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new se(te.comparator)).toArray()}}/**
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
 */const qs=new Uint8Array(0);class nv{constructor(e,t){this.databaseId=t,this.cn=new Za,this.ln=new Ht(n=>mn(n),(n,s)=>fs(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const i={collectionId:n,parent:Ve(s)};return Lu(e).put(i)}return R.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[hd(t),""],!1,!0);return Lu(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(Qe(o.parent))}return n})}addFieldIndex(e,t){const n=xr(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Nn(e);return i.next(c=>{o.put(Pu(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=xr(e),s=Nn(e),i=Vn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=xr(e),n=Vn(e),s=Nn(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return R.forEach(this.hn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Vu(n).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Vn(e);let s=!0;const i=new Map;return R.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=Q();const c=[];return R.forEach(i,(l,h)=>{V("IndexedDbIndexManager",`Using index ${function(O){return`id=${O.indexId}|cg=${O.collectionGroup}|f=${O.fields.map($=>`${$.fieldPath}:${$.kind}`).join(",")}`}(l)} to execute ${mn(t)}`);const f=function(O,$){const N=la($);if(N===void 0)return null;for(const L of mi(O,N.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(h,l),p=function(O,$){const N=new Map;for(const L of nn($))for(const I of mi(O,L.fieldPath))switch(I.op){case"==":case"in":N.set(L.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return N.set(L.fieldPath.canonicalString(),I.value),Array.from(N.values())}return null}(h,l),g=function(O,$){const N=[];let L=!0;for(const I of nn($)){const y=I.kind===0?fu(O,I.fieldPath,O.startAt):pu(O,I.fieldPath,O.startAt);N.push(y.value),L&&(L=y.inclusive)}return new Qn(N,L)}(h,l),E=function(O,$){const N=[];let L=!0;for(const I of nn($)){const y=I.kind===0?pu(O,I.fieldPath,O.endAt):fu(O,I.fieldPath,O.endAt);N.push(y.value),L&&(L=y.inclusive)}return new Qn(N,L)}(h,l),P=this.In(l,h,g),x=this.In(l,h,E),C=this.Tn(l,h,p),U=this.En(l.indexId,f,P,g.inclusive,x,E.inclusive,C);return R.forEach(U,j=>n.G(j,t.limit).next(O=>{O.forEach($=>{const N=B.fromSegments($.documentKey);o.has(N)||(o=o.add(N),c.push(N))})}))}).next(()=>c)}return R.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=ev(re.create(e.filters,"and")).map(n=>ma(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),h=l/(t!=null?t.length:1),f=[];for(let p=0;p<l;++p){const g=t?this.dn(t[p/h]):qs,E=this.An(e,g,n[p%h],s),P=this.Rn(e,g,i[p%h],o),x=c.map(C=>this.An(e,g,C,!0));f.push(...this.createRange(E,P,x))}return f}An(e,t,n,s){const i=new an(e,B.empty(),t,n);return s?i:i.Zt()}Rn(e,t,n,s){const i=new an(e,B.empty(),t,n);return s?i.Zt():i}Pn(e,t){const n=new Vu(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.hn(t);return R.forEach(s,i=>this.Pn(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new se(ue.comparator),f=!1;for(const p of l.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:h=h.add(g.field));for(const p of l.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}Vn(e,t){const n=new Dr;for(const s of nn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Yt(s.kind);on.vt.It(i,o)}return n.zt()}dn(e){const t=new Dr;return on.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Dr;return on.vt.It(ss(this.databaseId,t),n.Yt(function(i){const o=nn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let s=[];s.push(new Dr);let i=0;for(const o of nn(e)){const c=n[i++];for(const l of s)if(this.fn(t,o.fieldPath)&&is(c))s=this.gn(s,o,c);else{const h=l.Yt(o.kind);on.vt.It(c,h)}}return this.pn(s)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new Dr;l.seed(c.zt()),on.vt.It(o,l.Yt(t.kind)),i.push(l)}return i}fn(e,t){return!!e.filters.find(n=>n instanceof X&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=xr(e),s=Nn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return R.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(f,p){const g=p?new es(p.sequenceNumber,new $e(yn(p.readTime),new B(Qe(p.documentKey)),p.largestBatchId)):es.empty(),E=f.fields.map(([P,x])=>new Xs(ue.fromServerFormat(P),x));return new fi(f.indexId,f.collectionGroup,E,g)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:W(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=xr(e),i=Nn(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>R.forEach(c,l=>i.put(Pu(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return R.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),R.forEach(c,l=>this.wn(e,s,l).next(h=>{const f=this.Sn(i,l);return h.isEqual(f)?R.resolve():this.bn(e,i,l,h,f)}))))})}Dn(e,t,n,s){return Vn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,s){return Vn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const s=Vn(e);let i=new se(At);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,c)=>{i=i.add(new an(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Sn(e,t){let n=new se(At);const s=this.Vn(t,e);if(s==null)return n;const i=la(t);if(i!=null){const o=e.data.field(i.fieldPath);if(is(o))for(const c of o.arrayValue.values||[])n=n.add(new an(t.indexId,e.key,this.dn(c),s))}else n=n.add(new an(t.indexId,e.key,qs,s));return n}bn(e,t,n,s,i){V("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,p,g){const E=l.getIterator(),P=h.getIterator();let x=xn(E),C=xn(P);for(;x||C;){let U=!1,j=!1;if(x&&C){const O=f(x,C);O<0?j=!0:O>0&&(U=!0)}else x!=null?j=!0:U=!0;U?(p(C),C=xn(P)):j?(g(x),x=xn(E)):(x=xn(E),C=xn(P))}}(s,i,At,c=>{o.push(this.Dn(e,t,n,c))},c=>{o.push(this.vn(e,t,n,c))}),R.waitFor(o)}yn(e){let t=1;return Nn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>At(o,c)).filter((o,c,l)=>!c||At(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=At(o,e),l=At(o,t);if(c===0)s[0]=e.Zt();else if(c>0&&l<0)s.push(o),s.push(o.Zt());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,qs,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,qs,[]];i.push(IDBKeyRange.bound(c,l))}return i}Cn(e,t){return At(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ou)}getMinOffset(e,t){return R.mapArray(this.hn(t),n=>this.Pn(e,n).next(s=>s||q())).next(Ou)}}function Lu(r){return ve(r,"collectionParents")}function Vn(r){return ve(r,"indexEntries")}function xr(r){return ve(r,"indexConfiguration")}function Nn(r){return ve(r,"indexState")}function Ou(r){G(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;ja(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new $e(e.readTime,e.documentKey,t)}/**
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
 */const Mu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Oe{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function yf(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.J({range:o},(f,p,g)=>(c++,g.delete()));i.push(l.next(()=>{G(c===1)}));const h=[];for(const f of t.mutations){const p=_d(e,f.key.path,t.batchId);i.push(s.delete(p)),h.push(f.key)}return R.waitFor(i).next(()=>h)}function Ii(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw q();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(41943040,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);class Gi{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(e,t,n,s){G(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Gi(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return St(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=Bn(e),o=St(e);return o.add({}).next(c=>{G(typeof c=="number");const l=new Ka(c,t,n,s),h=function(E,P,x){const C=x.baseMutations.map(j=>yi(E.ct,j)),U=x.mutations.map(j=>yi(E.ct,j));return{userId:P,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:C,mutations:U}}(this.serializer,this.userId,l),f=[];let p=new se((g,E)=>W(g.canonicalString(),E.canonicalString()));for(const g of s){const E=_d(this.userId,g.key.path,c);p=p.add(g.key.path.popLast()),f.push(o.put(h)),f.push(i.put(E,By))}return p.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),R.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return St(e).get(t).next(n=>n?(G(n.userId===this.userId),sn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?R.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.Fn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return St(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(G(c.batchId>=n),i=sn(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return St(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return St(e).U("userMutationsIndex",t).next(n=>n.map(s=>sn(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Zs(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Bn(e).J({range:s},(o,c,l)=>{const[h,f,p]=o,g=Qe(f);if(h===this.userId&&t.path.isEqual(g))return St(e).get(p).next(E=>{if(!E)throw q();G(E.userId===this.userId),i.push(sn(this.serializer,E))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se(W);const s=[];return t.forEach(i=>{const o=Zs(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=Bn(e).J({range:c},(h,f,p)=>{const[g,E,P]=h,x=Qe(E);g===this.userId&&i.path.isEqual(x)?n=n.add(P):p.done()});s.push(l)}),R.waitFor(s).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Zs(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new se(W);return Bn(e).J({range:o},(l,h,f)=>{const[p,g,E]=l,P=Qe(g);p===this.userId&&n.isPrefixOf(P)?P.length===s&&(c=c.add(E)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(St(e).get(i).next(o=>{if(o===null)throw q();G(o.userId===this.userId),n.push(sn(this.serializer,o))}))}),R.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return yf(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),R.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return R.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Bn(e).J({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=Qe(i[1]);s.push(l)}else c.done()}).next(()=>{G(s.length===0)})})}containsKey(e,t){return _f(e,this.userId,t)}Nn(e){return vf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function _f(r,e,t){const n=Zs(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Bn(r).J({range:i,H:!0},(c,l,h)=>{const[f,p,g]=c;f===e&&p===s&&(o=!0),h.done()}).next(()=>o)}function St(r){return ve(r,"mutations")}function Bn(r){return ve(r,"documentMutations")}function vf(r){return ve(r,"mutationQueues")}/**
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
 */class _n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new _n(0)}static kn(){return new _n(-1)}}/**
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
 */class rv{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new _n(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>H.fromTimestamp(new he(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Qn(e,s)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ln(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(G(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return Ln(e).J((o,c)=>{const l=jr(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>R.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Ln(e).J((n,s)=>{const i=jr(s);t(i)})}qn(e){return Fu(e).get("targetGlobalKey").next(t=>(G(t!==null),t))}Qn(e,t){return Fu(e).put("targetGlobalKey",t)}Kn(e,t){return Ln(e).put(ff(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=mn(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Ln(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const h=jr(c);fs(t,h.target)&&(i=h,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=kt(e);return t.forEach(o=>{const c=Ve(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),R.waitFor(s)}removeMatchingKeys(e,t,n){const s=kt(e);return R.forEach(t,i=>{const o=Ve(i.path);return R.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=kt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=kt(e);let i=Q();return s.J({range:n,H:!0},(o,c,l)=>{const h=Qe(o[1]),f=new B(h);i=i.add(f)}).next(()=>i)}containsKey(e,t){const n=Ve(t.path),s=IDBKeyRange.bound([n],[hd(n)],!1,!0);let i=0;return kt(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,h)=>{o!==0&&(i++,h.done())}).next(()=>i>0)}ot(e,t){return Ln(e).get(t).next(n=>n?jr(n):null)}}function Ln(r){return ve(r,"targets")}function Fu(r){return ve(r,"targetGlobal")}function kt(r){return ve(r,"targetDocuments")}/**
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
 */function ju([r,e],[t,n]){const s=W(r,t);return s===0?W(e,n):s}class sv{constructor(e){this.Un=e,this.buffer=new se(ju),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();ju(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iv{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){V("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gt(t)?V("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await zt(t)}await this.Hn(3e5)})}}class ov{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Me.oe);const n=new sv(t);return this.Jn.forEachTarget(e,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Mu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mu):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(h=Date.now(),On()<=Y.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function av(r,e){return new ov(r,e)}/**
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
 */class cv{constructor(e,t){this.db=e,this.garbageCollector=av(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,s)=>t(s))}addReference(e,t,n){return zs(e,n)}removeReference(e,t,n){return zs(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return zs(e,t)}nr(e,t){return function(s,i){let o=!1;return vf(s).Y(c=>_f(s,c,i).next(l=>(l&&(o=!0),R.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(h=>{if(!h)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,H.min()),kt(e).delete(function(p){return[0,Ve(p.path)]}(o))))});s.push(l)}}).next(()=>R.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return zs(e,t)}tr(e,t){const n=kt(e);let s,i=Me.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:h})=>{o===0?(i!==Me.oe&&t(new B(Qe(s)),i),i=h,s=l):i=Me.oe}).next(()=>{i!==Me.oe&&t(new B(Qe(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function zs(r,e){return kt(r).put(function(n,s){return{targetId:0,path:Ve(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class If{constructor(){this.changes=new Ht(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?R.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lv{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Xt(e).put(n)}removeEntry(e,t,n){return Xt(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],_i(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=fe.newInvalidDocument(t);return Xt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Vr(t))},(s,i)=>{n=this.ir(t,i)}).next(()=>n)}sr(e,t){let n={size:0,document:fe.newInvalidDocument(t)};return Xt(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Vr(t))},(s,i)=>{n={document:this.ir(t,i),size:Ii(i)}}).next(()=>n)}getEntries(e,t){let n=Be();return this._r(e,t,(s,i)=>{const o=this.ir(s,i);n=n.insert(s,o)}).next(()=>n)}ar(e,t){let n=Be(),s=new ae(B.comparator);return this._r(e,t,(i,o)=>{const c=this.ir(i,o);n=n.insert(i,c),s=s.insert(i,Ii(o))}).next(()=>({documents:n,ur:s}))}_r(e,t,n){if(t.isEmpty())return R.resolve();let s=new se($u);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Vr(s.first()),Vr(s.last())),o=s.getIterator();let c=o.getNext();return Xt(e).J({index:"documentKeyIndex",range:i},(l,h,f)=>{const p=B.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&$u(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Vr(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),_i(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Xt(e).U(IDBKeyRange.bound(c,l,!0)).next(h=>{i==null||i.incrementDocumentReadCount(h.length);let f=Be();for(const p of h){const g=this.ir(B.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(ps(t,g)||s.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,t,n,s){let i=Be();const o=Uu(t,n),c=Uu(t,$e.max());return Xt(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const p=this.ir(B.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);i=i.insert(p.key,p),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(e){return new uv(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Bu(e).get("remoteDocumentGlobalKey").next(t=>(G(!!t),t))}rr(e,t){return Bu(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=K_(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(H.min())))return n}return fe.newInvalidDocument(e)}}function Tf(r){return new lv(r)}class uv extends If{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new Ht(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new se((i,o)=>W(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.lr.get(i);if(t.push(this.cr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Su(this.cr.serializer,o);s=s.add(i.path.popLast());const h=Ii(l);n+=h-c.size,t.push(this.cr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=Su(this.cr.serializer,o.convertToNoDocument(H.min()));t.push(this.cr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.cr.updateMetadata(e,n)),R.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function Bu(r){return ve(r,"remoteDocumentGlobal")}function Xt(r){return ve(r,"remoteDocumentsV14")}function Vr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Uu(r,e){const t=e.documentKey.path.toArray();return[r,_i(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function $u(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=W(t[i],n[i]),s)return s;return s=W(t.length,n.length),s||(s=W(t[t.length-2],n[n.length-2]),s||W(t[t.length-1],n[n.length-1]))}/**
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
 */class hv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ef{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Hr(n.mutation,s,Fe.empty(),he.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Q()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Q()){const s=Je();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Mr();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Je();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Q()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=Be();const o=Gr(),c=function(){return Gr()}();return t.forEach((l,h)=>{const f=n.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof It)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Hr(f.mutation,h,f.mutation.getFieldMask(),he.now())):o.set(h.key,Fe.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new hv(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Gr();let s=new ae((o,c)=>o-c),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||Fe.empty();f=c.applyToLocalView(h,f),n.set(l,f);const p=(s.get(c.batchId)||Q()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Ud();f.forEach(g=>{if(!i.has(g)){const E=Wd(t.get(g),n.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return R.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ld(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):R.resolve(Je());let c=-1,l=i;return o.next(h=>R.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Q())).next(f=>({batchId:c,changes:Bd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(n=>{let s=Mr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Mr();return this.indexManager.getCollectionParents(e,i).next(c=>R.forEach(c,l=>{const h=function(p,g){return new cr(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,n,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,fe.newInvalidDocument(f)))});let c=Mr();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Hr(f.mutation,h,Fe.empty(),he.now()),ps(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class dv{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return R.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ne(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:pf(s.bundledQuery),readTime:Ne(s.readTime)}}(t)),R.resolve()}}/**
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
 */class fv{constructor(){this.overlays=new ae(B.comparator),this.Ir=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Je();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.ht(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(n)),R.resolve()}getOverlaysForCollection(e,t,n){const s=Je(),i=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ae((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=i.get(h.largestBatchId);f===null&&(f=Je(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Je(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return R.resolve(c)}ht(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Qa(t,n));let i=this.Ir.get(t);i===void 0&&(i=Q(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}/**
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
 */class pv{constructor(){this.sessionToken=me.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
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
 */class ec{constructor(){this.Tr=new se(Ie.Er),this.dr=new se(Ie.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Ie(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new B(new te([])),n=new Ie(t,e),s=new Ie(t,e+1),i=[];return this.dr.forEachInRange([n,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new B(new te([])),n=new Ie(t,e),s=new Ie(t,e+1);let i=Q();return this.dr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ie(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return B.comparator(e.key,t.key)||W(e.wr,t.wr)}static Ar(e,t){return W(e.wr,t.wr)||B.comparator(e.key,t.key)}}/**
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
 */class mv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new se(Ie.Er)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ka(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new Ie(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.vr(n),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),s=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],o=>{const c=this.Dr(o.wr);i.push(c)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new se(W);return t.forEach(s=>{const i=new Ie(s,0),o=new Ie(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{n=n.add(c.wr)})}),R.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;B.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new B(i),0);let c=new se(W);return this.br.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),R.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const s=this.Dr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){G(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return R.forEach(t.mutations,s=>{const i=new Ie(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Ie(t,0),s=this.br.firstAfterOrEqual(n);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class gv{constructor(e){this.Mr=e,this.docs=function(){return new ae(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return R.resolve(n?n.document.mutableCopy():fe.newInvalidDocument(t))}getEntries(e,t){let n=Be();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():fe.newInvalidDocument(s))}),R.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Be();const o=t.path,c=new B(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ja(fd(f),n)<=0||(s.has(f.key)||ps(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,n,s){q()}Or(e,t){return R.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new yv(this)}getSize(e){return R.resolve(this.size)}}class yv extends If{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(n)}),R.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class _v{constructor(e){this.persistence=e,this.Nr=new Ht(t=>mn(t),fs),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ec,this.targetCount=0,this.kr=_n.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),R.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new _n(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Kn(t),R.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return R.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),R.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return R.resolve(n)}containsKey(e,t){return R.resolve(this.Br.containsKey(t))}}/**
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
 */class wf{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Me(0),this.Kr=!1,this.Kr=!0,this.$r=new pv,this.referenceDelegate=e(this),this.Ur=new _v(this),this.indexManager=new tv,this.remoteDocumentCache=function(s){return new gv(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new df(t),this.Gr=new dv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new mv(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const s=new vv(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return R.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class vv extends md{constructor(e){super(),this.currentSequenceNumber=e}}class Hi{constructor(e){this.persistence=e,this.Jr=new ec,this.Yr=null}static Zr(e){return new Hi(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),R.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),R.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,n=>{const s=B.fromPath(n);return this.ei(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return R.or([()=>R.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Iv{constructor(e){this.serializer=e}O(e,t,n,s){const i=new Oi("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nu,{unique:!0}),l.createObjectStore("documentMutations")}(e),qu(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=R.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),qu(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nu,{unique:!0});const p=h.store("mutations"),g=f.map(E=>p.put(E));return R.waitFor(g)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ni(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),n<7&&s>=7&&(o=o.next(()=>this.ii(i))),n<8&&s>=8&&(o=o.next(()=>this.si(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.oi(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:Xy});h.createIndex("collectionPathOverlayIndex",Zy,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",e_,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:Uy});h.createIndex("documentKeyIndex",$y),h.createIndex("collectionGroupIndex",qy)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Wy}).createIndex("sequenceNumberIndex",Qy,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:Jy}).createIndex("documentKeyIndex",Yy,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=Ii(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>R.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>R.forEach(c,l=>{G(l.userId===i.userId);const h=sn(this.serializer,l);return yf(e,i.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,c)=>{const l=new te(o),h=function(p){return[0,Ve(p)]}(l);i.push(t.get(h).next(f=>f?R.resolve():(p=>t.put({targetId:0,path:Ve(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>R.waitFor(i))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:Ky});const n=t.store("collectionParents"),s=new Za,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:Ve(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new te(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],h)=>{const f=Qe(c);return i(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,s)=>{const i=jr(s),o=ff(this.serializer,i);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new B(te.fromString(p.document.name).popFirst(5)):p.noDocument?B.fromSegments(p.noDocument.path):p.unknownDocument?B.fromSegments(p.unknownDocument.path):q()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(h))}).next(()=>R.waitFor(s))}ai(e,t){const n=t.store("mutations"),s=Tf(this.serializer),i=new wf(Hi.Zr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:Q();sn(this.serializer,l).keys().forEach(p=>f=f.add(p)),c.set(l.userId,f)}),R.forEach(c,(l,h)=>{const f=new Pe(h),p=zi.lt(this.serializer,f),g=i.getIndexManager(f),E=Gi.lt(f,this.serializer,g,i.referenceDelegate);return new Ef(s,E,p,g).recalculateAndSaveOverlaysForDocumentKeys(new ua(t,Me.oe),l).next()})})}}function qu(r){r.createObjectStore("targetDocuments",{keyPath:Gy}).createIndex("documentTargetsIndex",Hy,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",zy,{unique:!0}),r.createObjectStore("targetGlobal")}const qo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class tc{constructor(e,t,n,s,i,o,c,l,h,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=i,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!tc.D())throw new M(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cv(this,s),this.Ai=t+"main",this.serializer=new df(l),this.Ri=new Ft(this.Ai,this.hi,new Iv(this.serializer)),this.$r=new Q_,this.Ur=new rv(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Tf(this.serializer),this.Gr=new W_,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&pe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(D.FAILED_PRECONDITION,qo);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Me(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Gs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Gt(e))return V("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return V("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Nr(e).get("owner").next(t=>R.resolve(this.vi(t)))}Ci(e){return Gs(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=ve(t,"clientMetadata");return n.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return R.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?R.resolve(!0):Nr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new M(D.FAILED_PRECONDITION,qo);return!1}}return!(!this.networkEnabled||!this.inForeground)||Gs(e).U().next(n=>this.xi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&V("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new ua(e,Me.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Gs(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return Gi.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new nv(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return zi.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){V("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?r_:l===16?n_:l===15?Ua:l===14?Td:l===13?Id:l===12?t_:l===11?vd:void q()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,c=>(o=new ua(c,this.Qr?this.Qr.next():Me.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw pe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new M(D.FAILED_PRECONDITION,pd);return n(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Nr(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new M(D.FAILED_PRECONDITION,qo)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Nr(e).put("owner",t)}static D(){return Ft.D()}bi(e){const t=Nr(e);return t.get("owner").next(n=>this.vi(n)?(V("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):R.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(pe(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Jh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return V("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return pe("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){pe("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Nr(r){return ve(r,"owner")}function Gs(r){return ve(r,"clientMetadata")}function bf(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class nc{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=s}static Wi(e,t){let n=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nc(e,t.fromCache,n,s)}}/**
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
 */class Tv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Af{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Jh()?8:gd(ye())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Tv;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,n,s){return n.documentReadCount<this.ji?(On()<=Y.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(On()<=Y.DEBUG&&V("QueryEngine","Query:",Mn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(On()<=Y.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ue(t))):R.resolve())}Yi(e,t){if(mu(t))return R.resolve(null);let n=Ue(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ya(t,null,"F"),n=Ue(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=Q(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,ya(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,n,s){return mu(t)||s.isEqual(H.min())?R.resolve(null):this.Ji.getDocuments(e,n).next(i=>{const o=this.ts(t,i);return this.ns(t,o,n,s)?R.resolve(null):(On()<=Y.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mn(t)),this.rs(e,o,t,dd(s,-1)).next(c=>c))})}ts(e,t){let n=new se(Fd(e));return t.forEach((s,i)=>{ps(e,i)&&(n=n.add(i))}),n}ns(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,n){return On()<=Y.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.Ji.getDocumentsMatchingQuery(e,t,$e.min(),n)}rs(e,t,n,s){return this.Ji.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Ev{constructor(e,t,n,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new ae(W),this._s=new Ht(i=>mn(i),fs),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ef(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Sf(r,e,t,n){return new Ev(r,e,t,n)}async function Rf(r,e){const t=z(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=Q();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function wv(r,e){const t=z(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let E=R.resolve();return g.forEach(P=>{E=E.next(()=>f.getEntry(l,P)).next(x=>{const C=h.docVersions.get(P);G(C!==null),x.version.compareTo(C)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=Q();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Pf(r){const e=z(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function bv(r,e){const t=z(r),n=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(t.Ur.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.Ur.addMatchingKeys(i,f.addedDocuments,p)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(me.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,n)),s=s.insert(p,E),function(x,C,U){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(g,E,f)&&c.push(t.Ur.updateTargetData(i,E))});let l=Be(),h=Q();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Av(i,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!n.isEqual(H.min())){const f=t.Ur.getLastRemoteSnapshotVersion(i).next(p=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(f)}return R.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function Av(r,e,t){let n=Q(),s=Q();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Be();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):V("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function Sv(r,e){const t=z(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Ti(r,e){const t=z(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Ur.getTargetData(n,e).next(i=>i?(s=i,R.resolve(s)):t.Ur.allocateTargetId(n).next(o=>(s=new ft(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function tr(r,e,t){const n=z(r),s=n.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Gt(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(s.target)}function Aa(r,e,t){const n=z(r);let s=H.min(),i=Q();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=z(l),g=p._s.get(f);return g!==void 0?R.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(n,o,Ue(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?s:H.min(),t?i:Q())).next(c=>(Df(n,Md(e),c),{documents:c,Ts:i})))}function Cf(r,e){const t=z(r),n=z(t.Ur),s=t.os.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,e).next(o=>o?o.target:null))}function kf(r,e){const t=z(r),n=t.us.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.cs.getAllFromCollectionGroup(s,e,dd(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Df(t,e,s),s))}function Df(r,e,t){let n=r.us.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.us.set(e,n)}function zu(r,e){return`firestore_clients_${r}_${e}`}function Gu(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function zo(r,e){return`firestore_targets_${r}_${e}`}class Ei{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Rs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new M(s.error.code,s.error.message))),o?new Ei(e,t,s.state,i):(pe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Kr{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new M(n.error.code,n.error.message))),i?new Kr(e,n.state,s):(pe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Ga();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=yd(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new wi(e,i):(pe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class rc{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new rc(t.clientId,t.onlineState):(pe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Sa{constructor(){this.activeTargetIds=Ga()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Go{constructor(e,t,n,s,i){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ae(W),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=zu(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Sa),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const s=this.getItem(zu(this.persistenceKey,n));if(s){const i=wi.Rs(n,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(zo(this.persistenceKey,e));if(s){const i=Kr.Rs(e,s);i&&(n=i.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(zo(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.Qs(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return V("SharedClientState","READ",e,t),t}setItem(e,t){V("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){V("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(V("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void pe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(i){let o=Me.oe;if(i!=null)try{const c=JSON.parse(i);G(typeof c=="number"),o=c}catch(c){pe("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==Me.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const s=new Ei(this.currentUser,e,t,n),i=Gu(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const t=Gu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const s=zo(this.persistenceKey,e),i=new Kr(e,t,n);this.setItem(s,i.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return wi.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ei.Rs(new Pe(i),s,t)}Ys(e,t){const n=this.Ms.exec(e),s=Number(n[1]);return Kr.Rs(s,t)}Ls(e){return rc.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);V("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(n),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Ga();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class xf{constructor(){this.so=new Sa,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Sa,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Rv{_o(e){}shutdown(){}}/**
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
 */class Hu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hs=null;function Ho(){return Hs===null?Hs=function(){return 268435456+Math.round(2147483648*Math.random())}():Hs++,"0x"+Hs.toString(16)}/**
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
 */const Pv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Cv{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Re="WebChannelConnection";class kv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,n,s,i,o){const c=Ho(),l=this.xo(t,n.toUriEncodedString());V("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(f=>(V("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Xr("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}Lo(t,n,s,i,o,c){return this.Mo(t,n,s,i,o)}Oo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ar}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,n){const s=Pv[t];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,s){const i=Ho();return new Promise((o,c)=>{const l=new id;l.setWithCredentials(!0),l.listenOnce(od.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ys.NO_ERROR:const f=l.getResponseJson();V(Re,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case Ys.TIMEOUT:V(Re,`RPC '${e}' ${i} timed out`),c(new M(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ys.HTTP_ERROR:const p=l.getStatus();if(V(Re,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const P=function(C){const U=C.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(U)>=0?U:D.UNKNOWN}(E.status);c(new M(P,E.message))}else c(new M(D.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new M(D.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{V(Re,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);V(Re,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,n,15)})}Bo(e,t,n){const s=Ho(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ld(),c=cd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=i.join("");V(Re,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,E=!1;const P=new Cv({Io:C=>{E?V(Re,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(V(Re,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),V(Re,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},To:()=>p.close()}),x=(C,U,j)=>{C.listen(U,O=>{try{j(O)}catch($){setTimeout(()=>{throw $},0)}})};return x(p,Or.EventType.OPEN,()=>{E||(V(Re,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),x(p,Or.EventType.CLOSE,()=>{E||(E=!0,V(Re,`RPC '${e}' stream ${s} transport closed`),P.So())}),x(p,Or.EventType.ERROR,C=>{E||(E=!0,Xr(Re,`RPC '${e}' stream ${s} transport errored:`,C),P.So(new M(D.UNAVAILABLE,"The operation could not be completed")))}),x(p,Or.EventType.MESSAGE,C=>{var U;if(!E){const j=C.data[0];G(!!j);const O=j,$=O.error||((U=O[0])===null||U===void 0?void 0:U.error);if($){V(Re,`RPC '${e}' stream ${s} received error:`,$);const N=$.status;let L=function(v){const w=ge[v];if(w!==void 0)return Yd(w)}(N),I=$.message;L===void 0&&(L=D.INTERNAL,I="Unknown error status: "+N+" with message "+$.message),E=!0,P.So(new M(L,I)),p.close()}else V(Re,`RPC '${e}' stream ${s} received:`,j),P.bo(j)}}),x(c,ad.STAT_EVENT,C=>{C.stat===ca.PROXY?V(Re,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===ca.NOPROXY&&V(Re,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}/**
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
 */function Vf(){return typeof window<"u"?window:null}function si(){return typeof document<"u"?document:null}/**
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
 */function Ki(r){return new M_(r,!0)}/**
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
 */class Nf{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Lf{constructor(e,t,n,s,i,o,c,l){this.ui=e,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Nf(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(pe(t.toString()),pe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===t&&this.P_(n,s)},n=>{e(()=>{const s=new M(D.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dv extends Lf{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=B_(this.serializer,e),n=function(i){if(!("targetChange"in i))return H.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Ne(o.readTime):H.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Ia(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=pi(l)?{documents:of(i,l)}:{query:af(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ef(i,o.resumeToken);const h=_a(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=er(i,o.snapshotVersion.toTimestamp());const h=_a(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=$_(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Ia(this.serializer),t.removeTarget=e,this.a_(t)}}class xv extends Lf{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return G(!!e.streamToken),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=U_(e.writeResults,e.commitTime),n=Ne(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Ia(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>yi(this.serializer,n))};this.a_(t)}}/**
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
 */class Vv extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new M(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,va(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(D.UNKNOWN,i.toString())})}Lo(e,t,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,va(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(D.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Nv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */class Lv{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{n.enqueueAndForget(async()=>{En(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=z(l);h.L_.add(4),await ys(h),h.q_.set("Unknown"),h.L_.delete(4),await Wi(h)}(this))})}),this.q_=new Nv(n,s)}}async function Wi(r){if(En(r))for(const e of r.B_)await e(!0)}async function ys(r){for(const e of r.B_)await e(!1)}function Qi(r,e){const t=z(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),oc(t)?ic(t):hr(t).r_()&&sc(t,e))}function nr(r,e){const t=z(r),n=hr(t);t.N_.delete(e),n.r_()&&Of(t,e),t.N_.size===0&&(n.r_()?n.o_():En(t)&&t.q_.set("Unknown"))}function sc(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hr(r).A_(e)}function Of(r,e){r.Q_.xe(e),hr(r).R_(e)}function ic(r){r.Q_=new V_({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),hr(r).start(),r.q_.v_()}function oc(r){return En(r)&&!hr(r).n_()&&r.N_.size>0}function En(r){return z(r).L_.size===0}function Mf(r){r.Q_=void 0}async function Ov(r){r.q_.set("Online")}async function Mv(r){r.N_.forEach((e,t)=>{sc(r,e)})}async function Fv(r,e){Mf(r),oc(r)?(r.q_.M_(e),ic(r)):r.q_.set("Unknown")}async function jv(r,e,t){if(r.q_.set("Online"),e instanceof Zd&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(r,e)}catch(n){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await bi(r,n)}else if(e instanceof ri?r.Q_.Ke(e):e instanceof Xd?r.Q_.He(e):r.Q_.We(e),!t.isEqual(H.min()))try{const n=await Pf(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(me.EMPTY_BYTE_STRING,f.snapshotVersion)),Of(i,l);const p=new ft(f.target,l,h,f.sequenceNumber);sc(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){V("RemoteStore","Failed to raise snapshot:",n),await bi(r,n)}}async function bi(r,e,t){if(!Gt(e))throw e;r.L_.add(1),await ys(r),r.q_.set("Offline"),t||(t=()=>Pf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Wi(r)})}function Ff(r,e){return e().catch(t=>bi(r,t,e))}async function ur(r){const e=z(r),t=qt(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Bv(e);)try{const s=await Sv(e.localStore,n);if(s===null){e.O_.length===0&&t.o_();break}n=s.batchId,Uv(e,s)}catch(s){await bi(e,s)}jf(e)&&Bf(e)}function Bv(r){return En(r)&&r.O_.length<10}function Uv(r,e){r.O_.push(e);const t=qt(r);t.r_()&&t.V_&&t.m_(e.mutations)}function jf(r){return En(r)&&!qt(r).n_()&&r.O_.length>0}function Bf(r){qt(r).start()}async function $v(r){qt(r).p_()}async function qv(r){const e=qt(r);for(const t of r.O_)e.m_(t.mutations)}async function zv(r,e,t){const n=r.O_.shift(),s=Wa.from(n,e,t);await Ff(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await ur(r)}async function Gv(r,e){e&&qt(r).V_&&await async function(n,s){if(function(o){return k_(o)&&o!==D.ABORTED}(s.code)){const i=n.O_.shift();qt(n).s_(),await Ff(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ur(n)}}(r,e),jf(r)&&Bf(r)}async function Ku(r,e){const t=z(r);t.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const n=En(t);t.L_.add(3),await ys(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Wi(t)}async function Ra(r,e){const t=z(r);e?(t.L_.delete(2),await Wi(t)):e||(t.L_.add(2),await ys(t),t.q_.set("Unknown"))}function hr(r){return r.K_||(r.K_=function(t,n,s){const i=z(t);return i.w_(),new Dv(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:Ov.bind(null,r),Ro:Mv.bind(null,r),mo:Fv.bind(null,r),d_:jv.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),oc(r)?ic(r):r.q_.set("Unknown")):(await r.K_.stop(),Mf(r))})),r.K_}function qt(r){return r.U_||(r.U_=function(t,n,s){const i=z(t);return i.w_(),new xv(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:$v.bind(null,r),mo:Gv.bind(null,r),f_:qv.bind(null,r),g_:zv.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await ur(r)):(await r.U_.stop(),r.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class ac{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new ac(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cc(r,e){if(pe("AsyncQueue",`${e}: ${r}`),Gt(r))return new M(D.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class $n{constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(t,n)=>B.comparator(t.key,n.key),this.keyedMap=Mr(),this.sortedSet=new ae(this.comparator)}static emptySet(e){return new $n(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new $n;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class Wu{constructor(){this.W_=new ae(B.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class rr{constructor(e,t,n,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new rr(e,t,$n.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class Hv{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Kv{constructor(){this.queries=Qu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const s=z(t),i=s.queries;s.queries=Qu(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(n)})})(this,new M(D.ABORTED,"Firestore shutting down"))}}function Qu(){return new Ht(r=>Od(r),Bi)}async function Uf(r,e){const t=z(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(n=2):(i=new Hv,n=e.J_()?0:1);try{switch(n){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=cc(o,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&lc(t)}async function $f(r,e){const t=z(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Wv(r,e){const t=z(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(n=!0);o.z_=s}}n&&lc(t)}function Qv(r,e,t){const n=z(r),s=n.queries.get(e);if(s)for(const i of s.j_)i.onError(t);n.queries.delete(e)}function lc(r){r.Y_.forEach(e=>{e.next()})}var Pa,Ju;(Ju=Pa||(Pa={})).ea="default",Ju.Cache="cache";class qf{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new rr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Pa.Cache}}/**
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
 */class zf{constructor(e){this.key=e}}class Gf{constructor(e){this.key=e}}class Jv{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Q(),this.mutatedKeys=Q(),this.Aa=Fd(e),this.Ra=new $n(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new Wu,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),E=ps(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),x=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let C=!1;g&&E?g.data.isEqual(E.data)?P!==x&&(n.track({type:3,doc:E}),C=!0):this.ga(g,E)||(n.track({type:2,doc:E}),C=!0,(l&&this.Aa(E,l)>0||h&&this.Aa(E,h)<0)&&(c=!0)):!g&&E?(n.track({type:0,doc:E}),C=!0):g&&!E&&(n.track({type:1,doc:g}),C=!0,(l||h)&&(c=!0)),C&&(E?(o=o.add(E),i=x?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(E,P){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return x(E)-x(P)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(n),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new rr(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Wu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Q(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Gf(n))}),this.da.forEach(n=>{e.has(n)||t.push(new zf(n))}),t}ba(e){this.Ta=e.Ts,this.da=Q();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return rr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Yv{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Xv{constructor(e){this.key=e,this.va=!1}}class Zv{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ht(c=>Od(c),Bi),this.Ma=new Map,this.xa=new Set,this.Oa=new ae(B.comparator),this.Na=new Map,this.La=new ec,this.Ba={},this.ka=new Map,this.qa=_n.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function eI(r,e,t=!0){const n=Ji(r);let s;const i=n.Fa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Hf(n,e,t,!0),s}async function tI(r,e){const t=Ji(r);await Hf(t,e,!0,!1)}async function Hf(r,e,t,n){const s=await Ti(r.localStore,Ue(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await uc(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Qi(r.remoteStore,s),c}async function uc(r,e,t,n,s){r.Ka=(p,g,E)=>async function(x,C,U,j){let O=C.view.ma(U);O.ns&&(O=await Aa(x.localStore,C.query,!1).then(({documents:I})=>C.view.ma(I,O)));const $=j&&j.targetChanges.get(C.targetId),N=j&&j.targetMismatches.get(C.targetId)!=null,L=C.view.applyChanges(O,x.isPrimaryClient,$,N);return Ca(x,C.targetId,L.wa),L.snapshot}(r,p,g,E);const i=await Aa(r.localStore,e,!0),o=new Jv(e,i.Ts),c=o.ma(i.documents),l=gs.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),h=o.applyChanges(c,r.isPrimaryClient,l);Ca(r,t,h.wa);const f=new Yv(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function nI(r,e,t){const n=z(r),s=n.Fa.get(e),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter(o=>!Bi(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await tr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&nr(n.remoteStore,s.targetId),sr(n,s.targetId)}).catch(zt)):(sr(n,s.targetId),await tr(n.localStore,s.targetId,!0))}async function rI(r,e){const t=z(r),n=t.Fa.get(e),s=t.Ma.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),nr(t.remoteStore,n.targetId))}async function sI(r,e,t){const n=pc(r);try{const s=await function(o,c){const l=z(o),h=he.now(),f=c.reduce((E,P)=>E.add(P.key),Q());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let P=Be(),x=Q();return l.cs.getEntries(E,f).next(C=>{P=C,P.forEach((U,j)=>{j.isValidDocument()||(x=x.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,P)).next(C=>{p=C;const U=[];for(const j of c){const O=P_(j,p.get(j.key).overlayedDocument);O!=null&&U.push(new It(j.key,O,Sd(O.value.mapValue),ke.exists(!0)))}return l.mutationQueue.addMutationBatch(E,h,U,c)}).next(C=>{g=C;const U=C.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(E,C.batchId,U)})}).then(()=>({batchId:g.batchId,changes:Bd(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new ae(W)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(n,s.batchId,t),await Kt(n,s.changes),await ur(n.remoteStore)}catch(s){const i=cc(s,"Failed to persist write");t.reject(i)}}async function Kf(r,e){const t=z(r);try{const n=await bv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?G(o.va):s.removedDocuments.size>0&&(G(o.va),o.va=!1))}),await Kt(t,n,e)}catch(n){await zt(n)}}function Yu(r,e,t){const n=z(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=z(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(c)&&(h=!0)}),h&&lc(l)}(n.eventManager,e),s.length&&n.Ca.d_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function iI(r,e,t){const n=z(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Na.get(e),i=s&&s.key;if(i){let o=new ae(B.comparator);o=o.insert(i,fe.newNoDocument(i,H.min()));const c=Q().add(i),l=new ms(H.min(),new Map,new ae(W),o,c);await Kf(n,l),n.Oa=n.Oa.remove(i),n.Na.delete(e),fc(n)}else await tr(n.localStore,e,!1).then(()=>sr(n,e,t)).catch(zt)}async function oI(r,e){const t=z(r),n=e.batch.batchId;try{const s=await wv(t.localStore,e);dc(t,n,null),hc(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Kt(t,s)}catch(s){await zt(s)}}async function aI(r,e,t){const n=z(r);try{const s=await function(o,c){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(G(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);dc(n,e,t),hc(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Kt(n,s)}catch(s){await zt(s)}}function hc(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function dc(r,e,t){const n=z(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Ba[n.currentUser.toKey()]=s}}function sr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Wf(r,n)})}function Wf(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(nr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),fc(r))}function Ca(r,e,t){for(const n of t)n instanceof zf?(r.La.addReference(n.key,e),cI(r,n)):n instanceof Gf?(V("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Wf(r,n.key)):q()}function cI(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(V("SyncEngine","New document in limbo: "+t),r.xa.add(n),fc(r))}function fc(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new B(te.fromString(e)),n=r.qa.next();r.Na.set(n,new Xv(t)),r.Oa=r.Oa.insert(t,n),Qi(r.remoteStore,new ft(Ue(ji(t.path)),n,"TargetPurposeLimboResolution",Me.oe))}}async function Kt(r,e,t){const n=z(r),s=[],i=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((c,l)=>{o.push(n.Ka(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=nc.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),n.Ca.d_(s),await async function(l,h){const f=z(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>R.forEach(h,g=>R.forEach(g.$i,E=>f.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>R.forEach(g.Ui,E=>f.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!Gt(p))throw p;V("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const E=f.os.get(g),P=E.snapshotVersion,x=E.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(g,x)}}}(n.localStore,i))}async function lI(r,e){const t=z(r);if(!t.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const n=await Rf(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new M(D.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Kt(t,n.hs)}}function uI(r,e){const t=z(r),n=t.Na.get(e);if(n&&n.va)return Q().add(n.key);{let s=Q();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}async function hI(r,e){const t=z(r),n=await Aa(t.localStore,e.query,!0),s=e.view.ba(n);return t.isPrimaryClient&&Ca(t,e.targetId,s.wa),s}async function dI(r,e){const t=z(r);return kf(t.localStore,e).then(n=>Kt(t,n))}async function fI(r,e,t,n){const s=z(r),i=await function(c,l){const h=z(c),f=z(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.Mn(p,l).next(g=>g?h.localDocuments.getDocuments(p,g):R.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await ur(s.remoteStore):t==="acknowledged"||t==="rejected"?(dc(s,e,n||null),hc(s,e),function(c,l){z(z(c).mutationQueue).On(l)}(s.localStore,e)):q(),await Kt(s,i)):V("SyncEngine","Cannot apply mutation batch with id: "+e)}async function pI(r,e){const t=z(r);if(Ji(t),pc(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await Xu(t,n.toArray());t.Qa=!0,await Ra(t.remoteStore,!0);for(const i of s)Qi(t.remoteStore,i)}else if(e===!1&&t.Qa!==!1){const n=[];let s=Promise.resolve();t.Ma.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(sr(t,o),tr(t.localStore,o,!0))),nr(t.remoteStore,o)}),await s,await Xu(t,n),function(o){const c=z(o);c.Na.forEach((l,h)=>{nr(c.remoteStore,h)}),c.La.pr(),c.Na=new Map,c.Oa=new ae(B.comparator)}(t),t.Qa=!1,await Ra(t.remoteStore,!1)}}async function Xu(r,e,t){const n=z(r),s=[],i=[];for(const o of e){let c;const l=n.Ma.get(o);if(l&&l.length!==0){c=await Ti(n.localStore,Ue(l[0]));for(const h of l){const f=n.Fa.get(h),p=await hI(n,f);p.snapshot&&i.push(p.snapshot)}}else{const h=await Cf(n.localStore,o);c=await Ti(n.localStore,h),await uc(n,Qf(h),o,!1,c.resumeToken)}s.push(c)}return n.Ca.d_(i),s}function Qf(r){return Nd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function mI(r){return function(t){return z(z(t).persistence).Qi()}(z(r).localStore)}async function gI(r,e,t,n){const s=z(r);if(s.Qa)return void V("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await kf(s.localStore,Md(i[0])),c=ms.createSynthesizedRemoteEventForCurrentChange(e,t==="current",me.EMPTY_BYTE_STRING);await Kt(s,o,c);break}case"rejected":await tr(s.localStore,e,!0),sr(s,e,n);break;default:q()}}async function yI(r,e,t){const n=Ji(r);if(n.Qa){for(const s of e){if(n.Ma.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){V("SyncEngine","Adding an already active target "+s);continue}const i=await Cf(n.localStore,s),o=await Ti(n.localStore,i);await uc(n,Qf(i),o.targetId,!1,o.resumeToken),Qi(n.remoteStore,o)}for(const s of t)n.Ma.has(s)&&await tr(n.localStore,s,!1).then(()=>{nr(n.remoteStore,s),sr(n,s)}).catch(zt)}}function Ji(r){const e=z(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iI.bind(null,e),e.Ca.d_=Wv.bind(null,e.eventManager),e.Ca.$a=Qv.bind(null,e.eventManager),e}function pc(r){const e=z(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aI.bind(null,e),e}class cs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ki(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Sf(this.persistence,new Af,e.initialUser,this.serializer)}Ga(e){return new wf(Hi.Zr,this.serializer)}Wa(e){return new xf}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cs.provider={build:()=>new cs};class Jf extends cs{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await pc(this.Ja.syncEngine),await ur(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return Sf(this.persistence,new Af,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new iv(n,e.asyncQueue,t)}Ha(e,t){const n=new Fy(t,this.persistence);return new My(e.asyncQueue,n)}Ga(e){const t=bf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new tc(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Vf(),si(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new xf}}class _I extends Jf{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof Go&&(this.sharedClientState.syncEngine={no:fI.bind(null,t),ro:gI.bind(null,t),io:yI.bind(null,t),Qi:mI.bind(null,t),eo:dI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await pI(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=Vf();if(!Go.D(t))throw new M(D.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=bf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Go(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ls{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Yu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=lI.bind(null,this.syncEngine),await Ra(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Kv}()}createDatastore(e){const t=Ki(e.databaseInfo.databaseId),n=function(i){return new kv(i)}(e.databaseInfo);return function(i,o,c,l){return new Vv(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new Lv(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Yu(this.syncEngine,t,0),function(){return Hu.D()?new Hu:new Rv}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const p=new Zv(s,i,o,c,l,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=z(s);V("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ys(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ls.provider={build:()=>new ls};/**
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
 */class Yf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):pe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class vI{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Pe.UNAUTHENTICATED,this.clientId=ud.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=cc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ko(r,e){r.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Rf(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Zu(r,e){r.asyncQueue.verifyOperationInProgress();const t=await II(r);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Ku(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Ku(e.remoteStore,s)),r._onlineComponents=e}async function II(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ko(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Xr("Error using user provided cache. Falling back to memory cache: "+t),await Ko(r,new cs)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Ko(r,new cs);return r._offlineComponents}async function Xf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Zu(r,r._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Zu(r,new ls))),r._onlineComponents}function TI(r){return Xf(r).then(e=>e.syncEngine)}async function Zf(r){const e=await Xf(r),t=e.eventManager;return t.onListen=eI.bind(null,e.syncEngine),t.onUnlisten=nI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rI.bind(null,e.syncEngine),t}function EI(r,e,t={}){const n=new Xe;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new Yf({next:g=>{f.Za(),o.enqueueAndForget(()=>$f(i,p));const E=g.docs.has(c);!E&&g.fromCache?h.reject(new M(D.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&g.fromCache&&l&&l.source==="server"?h.reject(new M(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new qf(ji(c.path),f,{includeMetadataChanges:!0,_a:!0});return Uf(i,p)}(await Zf(r),r.asyncQueue,e,t,n)),n.promise}function wI(r,e,t={}){const n=new Xe;return r.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new Yf({next:g=>{f.Za(),o.enqueueAndForget(()=>$f(i,p)),g.fromCache&&l.source==="server"?h.reject(new M(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new qf(c,f,{includeMetadataChanges:!0,_a:!0});return Uf(i,p)}(await Zf(r),r.asyncQueue,e,t,n)),n.promise}/**
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
 */function ep(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const eh=new Map;/**
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
 */function tp(r,e,t){if(!t)throw new M(D.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function bI(r,e,t,n){if(e===!0&&n===!0)throw new M(D.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function th(r){if(!B.isDocumentKey(r))throw new M(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function nh(r){if(B.isDocumentKey(r))throw new M(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Yi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":q()}function tt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new M(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yi(r);throw new M(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class rh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ep((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mc{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ry;switch(n.type){case"firstParty":return new ky(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=eh.get(t);n&&(V("ComponentProvider","Removing Datastore"),eh.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class wn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new wn(this.firestore,e,this._query)}}class Le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}}class jt extends wn{constructor(e,t,n){super(e,t,ji(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new B(e))}withConverter(e){return new jt(this.firestore,e,this._path)}}function Xi(r,e,...t){if(r=_e(r),tp("collection","path",e),r instanceof mc){const n=te.fromString(e,...t);return nh(n),new jt(r,null,n)}{if(!(r instanceof Le||r instanceof jt))throw new M(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(te.fromString(e,...t));return nh(n),new jt(r.firestore,null,n)}}function bn(r,e,...t){if(r=_e(r),arguments.length===1&&(e=ud.newId()),tp("doc","path",e),r instanceof mc){const n=te.fromString(e,...t);return th(n),new Le(r,null,new B(n))}{if(!(r instanceof Le||r instanceof jt))throw new M(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(te.fromString(e,...t));return th(n),new Le(r.firestore,r instanceof jt?r.converter:null,new B(n))}}/**
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
 */class sh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Nf(this,"async_queue_retry"),this.Vu=()=>{const n=si();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=si();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=si();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Xe;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gt(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw pe("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=ac.createAndSchedule(this,e,t,n,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class An extends mc{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new sh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sh(e),this._firestoreClient=void 0,await e}}}function AI(r,e,t){t||(t="(default)");const n=Li(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(Jr(i,e))return s;throw new M(D.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new M(D.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function gc(r){if(r._terminated)throw new M(D.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||SI(r),r._firestoreClient}function SI(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,h,f){return new i_(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ep(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new vI(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
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
 */class ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ir(me.fromBase64String(e))}catch(t){throw new M(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ir(me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class eo{constructor(e){this._methodName=e}}/**
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
 */class yc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
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
 */class _c{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const RI=/^__.*__$/;class PI{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new It(e,this.data,this.fieldMask,t,this.fieldTransforms):new lr(e,this.data,t,this.fieldTransforms)}}class np{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new It(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rp(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class vc{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new vc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.Ou(e),s}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ai(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(rp(this.Cu)&&RI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class CI{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ki(e)}Qu(e,t,n,s=!1){return new vc({Cu:e,methodName:t,qu:n,path:ue.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function to(r){const e=r._freezeSettings(),t=Ki(r._databaseId);return new CI(r._databaseId,!!e.ignoreUndefinedProperties,t)}function sp(r,e,t,n,s,i={}){const o=r.Qu(i.merge||i.mergeFields?2:0,e,t,s);Tc("Data must be an object, but it was:",o,n);const c=ip(n,o);let l,h;if(i.merge)l=new Fe(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=ka(e,p,t);if(!o.contains(g))throw new M(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ap(f,g)||f.push(g)}l=new Fe(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new PI(new Ce(c),l,h)}class no extends eo{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof no}}class Ic extends eo{_toFieldTransform(e){return new Kd(e.path,new Yn)}isEqual(e){return e instanceof Ic}}function kI(r,e,t,n){const s=r.Qu(1,e,t);Tc("Data must be an object, but it was:",s,n);const i=[],o=Ce.empty();Tn(n,(l,h)=>{const f=Ec(e,l,t);h=_e(h);const p=s.Nu(f);if(h instanceof no)i.push(f);else{const g=_s(h,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new Fe(i);return new np(o,c,s.fieldTransforms)}function DI(r,e,t,n,s,i){const o=r.Qu(1,e,t),c=[ka(e,n,t)],l=[s];if(i.length%2!=0)throw new M(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(ka(e,i[g])),l.push(i[g+1]);const h=[],f=Ce.empty();for(let g=c.length-1;g>=0;--g)if(!ap(h,c[g])){const E=c[g];let P=l[g];P=_e(P);const x=o.Nu(E);if(P instanceof no)h.push(E);else{const C=_s(P,x);C!=null&&(h.push(E),f.set(E,C))}}const p=new Fe(h);return new np(f,p,o.fieldTransforms)}function xI(r,e,t,n=!1){return _s(t,r.Qu(n?4:3,e))}function _s(r,e){if(op(r=_e(r)))return Tc("Unsupported field value:",e,r),ip(r,e);if(r instanceof eo)return function(n,s){if(!rp(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=_s(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return E_(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=he.fromDate(n);return{timestampValue:er(s.serializer,i)}}if(n instanceof he){const i=new he(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:er(s.serializer,i)}}if(n instanceof yc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ir)return{bytesValue:ef(s.serializer,n._byteString)};if(n instanceof Le){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ya(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof _c)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ha(c.serializer,l)})}}}}}}(n,s);throw s.Bu(`Unsupported field value: ${Yi(n)}`)}(r,e)}function ip(r,e){const t={};return Ed(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tn(r,(n,s)=>{const i=_s(s,e.Mu(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function op(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof he||r instanceof yc||r instanceof ir||r instanceof Le||r instanceof eo||r instanceof _c)}function Tc(r,e,t){if(!op(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=Yi(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function ka(r,e,t){if((e=_e(e))instanceof Zi)return e._internalPath;if(typeof e=="string")return Ec(r,e);throw Ai("Field path arguments must be of type string or ",r,!1,void 0,t)}const VI=new RegExp("[~\\*/\\[\\]]");function Ec(r,e,t){if(e.search(VI)>=0)throw Ai(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Zi(...e.split("."))._internalPath}catch{throw Ai(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Ai(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new M(D.INVALID_ARGUMENT,c+r+l)}function ap(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class cp{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NI extends cp{data(){return super.data()}}function wc(r,e){return typeof e=="string"?Ec(r,e):e instanceof Zi?e._internalPath:e._delegate._internalPath}/**
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
 */function LI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new M(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bc{}class lp extends bc{}function OI(r,e,...t){let n=[];e instanceof bc&&n.push(e),n=n.concat(t),function(i){const o=i.filter(l=>l instanceof Sc).length,c=i.filter(l=>l instanceof Ac).length;if(o>1||o>0&&c>0)throw new M(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Ac extends lp{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ac(e,t,n)}_apply(e){const t=this._parse(e);return up(e._query,t),new wn(e.firestore,e.converter,ga(e._query,t))}_parse(e){const t=to(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new M(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){oh(p,f);const E=[];for(const P of p)E.push(ih(l,i,P));g={arrayValue:{values:E}}}else g=ih(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||oh(p,f),g=xI(c,o,p,f==="in"||f==="not-in");return X.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Sc extends bc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sc(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)up(o,l),o=ga(o,l)}(e._query,t),new wn(e.firestore,e.converter,ga(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rc extends lp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Rc(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new M(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new os(i,o)}(e._query,this._field,this._direction);return new wn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new cr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function MI(r,e="asc"){const t=e,n=wc("orderBy",r);return Rc._create(n,t)}function ih(r,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new M(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ld(e)&&t.indexOf("/")!==-1)throw new M(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(te.fromString(t));if(!B.isDocumentKey(n))throw new M(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ss(r,new B(n))}if(t instanceof Le)return ss(r,t._key);throw new M(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yi(t)}.`)}function oh(r,e){if(!Array.isArray(r)||r.length===0)throw new M(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function up(r,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new M(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class FI{convertValue(e,t="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Tn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>le(o.doubleValue));return new _c(i)}convertGeoPoint(e){return new yc(le(e.latitude),le(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=qa(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ns(e));default:return null}}convertTimestamp(e){const t=_t(e);return new he(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=te.fromString(e);G(hf(n));const s=new fn(n.get(1),n.get(3)),i=new B(n.popFirst(5));return s.isEqual(t)||pe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function hp(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
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
 */class Br{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dp extends cp{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ii(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(wc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ii extends dp{data(e={}){return super.data(e)}}class jI{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Br(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ii(this._firestore,this._userDataWriter,n.key,n,new Br(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new ii(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Br(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ii(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Br(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:BI(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function BI(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function UI(r){r=tt(r,Le);const e=tt(r.firestore,An);return EI(gc(e),r._key).then(t=>qI(e,r,t))}class fp extends FI{constructor(e){super(),this.firestore=e}convertBytes(e){return new ir(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}function pp(r){r=tt(r,wn);const e=tt(r.firestore,An),t=gc(e),n=new fp(e);return LI(r._query),wI(t,r._query).then(s=>new jI(e,n,r,s))}function $I(r,e,t){r=tt(r,Le);const n=tt(r.firestore,An),s=hp(r.converter,e,t);return ro(n,[sp(to(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,ke.none())])}function mp(r,e,t,...n){r=tt(r,Le);const s=tt(r.firestore,An),i=to(s);let o;return o=typeof(e=_e(e))=="string"||e instanceof Zi?DI(i,"updateDoc",r._key,e,t,n):kI(i,"updateDoc",r._key,e),ro(s,[o.toMutation(r._key,ke.exists(!0))])}function gp(r){return ro(tt(r.firestore,An),[new qi(r._key,ke.none())])}function yp(r,e){const t=tt(r.firestore,An),n=bn(r),s=hp(r.converter,e);return ro(t,[sp(to(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ke.exists(!1))]).then(()=>n)}function ro(r,e){return function(n,s){const i=new Xe;return n.asyncQueue.enqueueAndForget(async()=>sI(await TI(n),s,i)),i.promise}(gc(r),e)}function qI(r,e,t){const n=t.docs.get(e._key),s=new fp(r);return new dp(r,s,e._key,n,new Br(t.hasPendingWrites,t.fromCache),e.converter)}class zI{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=WI(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function GI(r){return new zI(r)}class HI{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ls.provider,this._offlineComponentProvider={build:t=>new Jf(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class KI{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ls.provider,this._offlineComponentProvider={build:t=>new _I(t,e==null?void 0:e.cacheSizeBytes)}}}function WI(r){return new HI(void 0)}function QI(){return new KI}function _p(){return new Ic("serverTimestamp")}(function(e,t=!0){(function(s){ar=s})(In),hn(new Bt("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new An(new Py(n.getProvider("auth-internal")),new xy(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new M(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fn(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ye(Zl,"4.7.3",e),Ye(Zl,"4.7.3","esm2017")})();/**
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
 */const vp="firebasestorage.googleapis.com",JI="storageBucket",YI=2*60*1e3,XI=10*60*1e3;/**
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
 */class ot extends it{constructor(e,t,n=0){super(Wo(e),`Firebase Storage: ${t} (${Wo(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var nt;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(nt||(nt={}));function Wo(r){return"storage/"+r}function ZI(){const r="An unknown error occurred, please check the error payload for server response.";return new ot(nt.UNKNOWN,r)}function eT(){return new ot(nt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tT(){return new ot(nt.CANCELED,"User canceled the upload/download.")}function nT(r){return new ot(nt.INVALID_URL,"Invalid URL '"+r+"'.")}function rT(r){return new ot(nt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function ah(r){return new ot(nt.INVALID_ARGUMENT,r)}function Ip(){return new ot(nt.APP_DELETED,"The Firebase app was deleted.")}function sT(r){return new ot(nt.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ze{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=ze.makeFromUrl(e,t)}catch{return new ze(e,"")}if(n.path==="")return n;throw rT(e)}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h($){$.path_=decodeURIComponent($.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),P={bucket:1,path:3},x=t===vp?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",U=new RegExp(`^https?://${x}/${s}/${C}`,"i"),O=[{regex:c,indices:l,postModify:i},{regex:E,indices:P,postModify:h},{regex:U,indices:{bucket:1,path:2},postModify:h}];for(let $=0;$<O.length;$++){const N=O[$],L=N.regex.exec(e);if(L){const I=L[N.indices.bucket];let y=L[N.indices.path];y||(y=""),n=new ze(I,y),N.postModify(n);break}}if(n==null)throw nT(e);return n}}class iT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function oT(r,e,t){let n=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...C){h||(h=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,r(E,l())},C)}function g(){i&&clearTimeout(i)}function E(C,...U){if(h){g();return}if(C){g(),f.call(null,C,...U);return}if(l()||o){g(),f.call(null,C,...U);return}n<64&&(n*=2);let O;c===1?(c=2,O=0):O=(n+Math.random())*1e3,p(O)}let P=!1;function x(C){P||(P=!0,g(),!h&&(s!==null?(C||(c=2),clearTimeout(s),p(0)):C||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,x(!0)},t),x}function aT(r){r(!1)}/**
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
 */function cT(r){return r!==void 0}function ch(r,e,t,n){if(n<e)throw ah(`Invalid value for '${r}'. Expected ${e} or greater.`);if(n>t)throw ah(`Invalid value for '${r}'. Expected ${t} or less.`)}function lT(r){const e=encodeURIComponent;let t="?";for(const n in r)if(r.hasOwnProperty(n)){const s=e(n)+"="+e(r[n]);t=t+s+"&"}return t=t.slice(0,-1),t}var Si;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Si||(Si={}));/**
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
 */function uT(r,e){const t=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=e.indexOf(r)!==-1;return t||s||i}/**
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
 */class hT{constructor(e,t,n,s,i,o,c,l,h,f,p,g=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,P)=>{this.resolve_=E,this.reject_=P,this.start_()})}start_(){const e=(n,s)=>{if(s){n(!1,new Ks(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Si.NO_ERROR,l=i.getStatus();if(!c||uT(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Si.ABORT;n(!1,new Ks(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;n(!0,new Ks(h,i))})},t=(n,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());cT(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=ZI();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Ip():tT();o(l)}else{const l=eT();o(l)}};this.canceled_?t(!1,new Ks(!1,null,!0)):this.backoffId_=oT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ks{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function dT(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function fT(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pT(r,e){e&&(r["X-Firebase-GMPID"]=e)}function mT(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function gT(r,e,t,n,s,i,o=!0){const c=lT(r.urlParams),l=r.url+c,h=Object.assign({},r.headers);return pT(h,e),dT(h,t),fT(h,i),mT(h,n),new hT(l,r.method,h,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,o)}/**
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
 */function yT(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function _T(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
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
 */class Ri{constructor(e,t){this._service=e,t instanceof ze?this._location=t:this._location=ze.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ri(e,t)}get root(){const e=new ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _T(this._location.path)}get storage(){return this._service}get parent(){const e=yT(this._location.path);if(e===null)return null;const t=new ze(this._location.bucket,e);return new Ri(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw sT(e)}}function lh(r,e){const t=e==null?void 0:e[JI];return t==null?null:ze.makeFromBucketSpec(t,r)}function vT(r,e,t,n={}){r.host=`${e}:${t}`,r._protocol="http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:ng(s,r.app.options.projectId))}class IT{constructor(e,t,n,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=vp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YI,this._maxUploadRetryTime=XI,this._requests=new Set,s!=null?this._bucket=ze.makeFromBucketSpec(s,this._host):this._bucket=lh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ze.makeFromBucketSpec(this._url,e):this._bucket=lh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ch("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ch("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ri(this,e)}_makeRequest(e,t,n,s,i=!0){if(this._deleted)return new iT(Ip());{const o=gT(e,this._appId,n,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const uh="@firebase/storage",hh="0.13.2";/**
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
 */const Tp="storage";function TT(r=td(),e){r=_e(r);const n=Li(r,Tp).getImmediate({identifier:e}),s=eg("storage");return s&&ET(n,...s),n}function ET(r,e,t,n={}){vT(r,e,t,n)}function wT(r,{instanceIdentifier:e}){const t=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new IT(t,n,s,e,In)}function bT(){hn(new Bt(Tp,wT,"PUBLIC").setMultipleInstances(!0)),Ye(uh,hh,""),Ye(uh,hh,"esm2017")}bT();function Pc(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function Ep(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AT=Ep,wp=new hs("auth","Firebase",Ep());/**
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
 */const Pi=new Oa("@firebase/auth");function ST(r,...e){Pi.logLevel<=Y.WARN&&Pi.warn(`Auth (${In}): ${r}`,...e)}function oi(r,...e){Pi.logLevel<=Y.ERROR&&Pi.error(`Auth (${In}): ${r}`,...e)}/**
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
 */function rt(r,...e){throw kc(r,...e)}function Ge(r,...e){return kc(r,...e)}function Cc(r,e,t){const n=Object.assign(Object.assign({},AT()),{[e]:t});return new hs("auth","Firebase",n).create(e,{appName:r.name})}function un(r){return Cc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bp(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&rt(r,"argument-error"),Cc(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return wp.create(r,...e)}function K(r,e,...t){if(!r)throw kc(e,...t)}function pt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw oi(e),new Error(e)}function vt(r,e){r||pt(e)}/**
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
 */function Da(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function RT(){return dh()==="http:"||dh()==="https:"}function dh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function PT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RT()||og()||"connection"in navigator)?navigator.onLine:!0}function CT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class vs{constructor(e,t){this.shortDelay=e,this.longDelay=t,vt(t>e,"Short delay should be less than long delay!"),this.isMobile=rg()||ag()}get(){return PT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dc(r,e){vt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ap{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const DT=new vs(3e4,6e4);function xc(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function dr(r,e,t,n,s={}){return Sp(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=ds(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},i);return ig()||(h.referrerPolicy="no-referrer"),Ap.fetch()(Rp(r,r.config.apiHost,t,c),h)})}async function Sp(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},kT),e);try{const s=new VT(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ws(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ws(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ws(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ws(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Cc(r,f,h);rt(r,f)}}catch(s){if(s instanceof it)throw s;rt(r,"network-request-failed",{message:String(s)})}}async function xT(r,e,t,n,s={}){const i=await dr(r,e,t,n,s);return"mfaPendingCredential"in i&&rt(r,"multi-factor-auth-required",{_serverResponse:i}),i}function Rp(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?Dc(r.config,s):`${r.config.apiScheme}://${s}`}class VT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ge(this.auth,"network-request-failed")),DT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ws(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Ge(r,e,n);return s.customData._tokenResponse=t,s}/**
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
 */async function NT(r,e){return dr(r,"POST","/v1/accounts:delete",e)}async function Pp(r,e){return dr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wr(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LT(r,e=!1){const t=_e(r),n=await t.getIdToken(e),s=Vc(n);K(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Wr(Qo(s.auth_time)),issuedAtTime:Wr(Qo(s.iat)),expirationTime:Wr(Qo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qo(r){return Number(r)*1e3}function Vc(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hh(t);return s?JSON.parse(s):(oi("Failed to decode base64 JWT payload"),null)}catch(s){return oi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fh(r){const e=Vc(r);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function us(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof it&&OT(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function OT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class MT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wr(this.lastLoginAt),this.creationTime=Wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ci(r){var e;const t=r.auth,n=await r.getIdToken(),s=await us(r,Pp(t,{idToken:n}));K(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cp(i.providerUserInfo):[],c=jT(r.providerData,o),l=r.isAnonymous,h=!(r.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new xa(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(r,p)}async function FT(r){const e=_e(r);await Ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jT(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Cp(r){return r.map(e=>{var{providerId:t}=e,n=Pc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function BT(r,e){const t=await Sp(r,{},async()=>{const n=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=Rp(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ap.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function UT(r,e){return dr(r,"POST","/v2/accounts:revokeToken",xc(r,e))}/**
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
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=fh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await BT(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new qn;return n&&(K(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
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
 */function Rt(r,e){K(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class mt{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=Pc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await us(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LT(this,e)}reload(){return FT(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ci(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await us(this,NT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,c,l,h,f;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,E=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=t.photoURL)!==null&&o!==void 0?o:void 0,x=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,U=(h=t.createdAt)!==null&&h!==void 0?h:void 0,j=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:$,isAnonymous:N,providerData:L,stsTokenManager:I}=t;K(O&&I,e,"internal-error");const y=qn.fromJSON(this.name,I);K(typeof O=="string",e,"internal-error"),Rt(p,e.name),Rt(g,e.name),K(typeof $=="boolean",e,"internal-error"),K(typeof N=="boolean",e,"internal-error"),Rt(E,e.name),Rt(P,e.name),Rt(x,e.name),Rt(C,e.name),Rt(U,e.name),Rt(j,e.name);const v=new mt({uid:O,auth:e,email:g,emailVerified:$,displayName:p,isAnonymous:N,photoURL:P,phoneNumber:E,tenantId:x,stsTokenManager:y,createdAt:U,lastLoginAt:j});return L&&Array.isArray(L)&&(v.providerData=L.map(w=>Object.assign({},w))),C&&(v._redirectEventId=C),v}static async _fromIdTokenResponse(e,t,n=!1){const s=new qn;s.updateFromServerResponse(t);const i=new mt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Ci(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new qn;c.updateFromIdToken(n);const l=new mt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const ph=new Map;function gt(r){vt(r instanceof Function,"Expected a class definition");let e=ph.get(r);return e?(vt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ph.set(r,e),e)}/**
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
 */class kp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kp.type="NONE";const mh=kp;/**
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
 */function ai(r,e,t){return`firebase:${r}:${e}:${t}`}class zn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=ai(this.userKey,s.apiKey,i),this.fullPersistenceKey=ai("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new zn(gt(mh),e,n);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||gt(mh);const o=ai(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=mt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new zn(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new zn(i,e,n))}}/**
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
 */function gh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Np(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Op(e))return"Blackberry";if(Mp(e))return"Webos";if(xp(e))return"Safari";if((e.includes("chrome/")||Vp(e))&&!e.includes("edge/"))return"Chrome";if(Lp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Dp(r=ye()){return/firefox\//i.test(r)}function xp(r=ye()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vp(r=ye()){return/crios\//i.test(r)}function Np(r=ye()){return/iemobile/i.test(r)}function Lp(r=ye()){return/android/i.test(r)}function Op(r=ye()){return/blackberry/i.test(r)}function Mp(r=ye()){return/webos/i.test(r)}function Nc(r=ye()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function $T(r=ye()){var e;return Nc(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qT(){return cg()&&document.documentMode===10}function Fp(r=ye()){return Nc(r)||Lp(r)||Mp(r)||Op(r)||/windows phone/i.test(r)||Np(r)}/**
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
 */function jp(r,e=[]){let t;switch(r){case"Browser":t=gh(ye());break;case"Worker":t=`${gh(ye())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${In}/${n}`}/**
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
 */class zT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function GT(r,e={}){return dr(r,"GET","/v2/passwordPolicy",xc(r,e))}/**
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
 */const HT=6;class KT{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:HT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class WT{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yh(this),this.idTokenSubscription=new yh(this),this.beforeStateQueue=new zT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Pp(this,{idToken:e}),n=await mt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ci(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(un(this));const t=e?_e(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GT(this),t=new KT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await UT(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gt(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ST(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function so(r){return _e(r)}class yh{constructor(e){this.auth=e,this.observer=null,this.addObserver=pg(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QT(r){Lc=r}function JT(r){return Lc.loadJS(r)}function YT(){return Lc.gapiScript}function XT(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ZT(r,e){const t=Li(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Jr(i,e??{}))return s;rt(s,"already-initialized")}return t.initialize({options:e})}function eE(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(gt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function tE(r,e,t){const n=so(r);K(n._canInitEmulator,n,"emulator-config-failed"),K(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Bp(e),{host:o,port:c}=nE(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${i}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),rE()}function Bp(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function nE(r){const e=Bp(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:_h(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:_h(o)}}}function _h(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function rE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Up{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}/**
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
 */async function Gn(r,e){return xT(r,"POST","/v1/accounts:signInWithIdp",xc(r,e))}/**
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
 */const sE="http://localhost";class vn extends Up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=Pc(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new vn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Gn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Gn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gn(e,t)}buildRequest(){const e={requestUri:sE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ds(t)}return e}}/**
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
 */class io{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Is extends io{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dt extends Is{constructor(){super("facebook.com")}static credential(e){return vn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
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
 */class ht extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vn._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ht.credential(t,n)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
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
 */class xt extends Is{constructor(){super("github.com")}static credential(e){return vn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
 */class Vt extends Is{constructor(){super("twitter.com")}static credential(e,t){return vn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Vt.credential(t,n)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
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
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await mt._fromIdTokenResponse(e,n,s),o=vh(n);return new or({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=vh(n);return new or({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function vh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ki extends it{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ki.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ki(e,t,n,s)}}function $p(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ki._fromErrorAndOperation(r,i,e,n):i})}async function iE(r,e,t=!1){const n=await us(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return or._forOperation(r,"link",n)}/**
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
 */async function oE(r,e,t=!1){const{auth:n}=r;if(dt(n.app))return Promise.reject(un(n));const s="reauthenticate";try{const i=await us(r,$p(n,s,e,r),t);K(i.idToken,n,"internal-error");const o=Vc(i.idToken);K(o,n,"internal-error");const{sub:c}=o;return K(r.uid===c,n,"user-mismatch"),or._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rt(n,"user-mismatch"),i}}/**
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
 */async function aE(r,e,t=!1){if(dt(r.app))return Promise.reject(un(r));const n="signIn",s=await $p(r,n,e),i=await or._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function cE(r,e,t,n){return _e(r).onIdTokenChanged(e,t,n)}function lE(r,e,t){return _e(r).beforeAuthStateChanged(e,t)}function uE(r,e,t,n){return _e(r).onAuthStateChanged(e,t,n)}function hE(r){return _e(r).signOut()}const Di="__sak";/**
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
 */class qp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Di,"1"),this.storage.removeItem(Di),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dE=1e3,fE=10;class zp extends qp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);qT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fE):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},dE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zp.type="LOCAL";const pE=zp;/**
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
 */class Gp extends qp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gp.type="SESSION";const Hp=Gp;/**
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
 */function mE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new oo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await mE(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oo.receivers=[];/**
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
 */function Oc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class gE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Oc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ze(){return window}function yE(r){Ze().location.href=r}/**
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
 */function Kp(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function _E(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vE(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function IE(){return Kp()?self:null}/**
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
 */const Wp="firebaseLocalStorageDb",TE=1,xi="firebaseLocalStorage",Qp="fbase_key";class Ts{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ao(r,e){return r.transaction([xi],e?"readwrite":"readonly").objectStore(xi)}function EE(){const r=indexedDB.deleteDatabase(Wp);return new Ts(r).toPromise()}function Va(){const r=indexedDB.open(Wp,TE);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(xi,{keyPath:Qp})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(xi)?e(n):(n.close(),await EE(),e(await Va()))})})}async function Ih(r,e,t){const n=ao(r,!0).put({[Qp]:e,value:t});return new Ts(n).toPromise()}async function wE(r,e){const t=ao(r,!1).get(e),n=await new Ts(t).toPromise();return n===void 0?null:n.value}function Th(r,e){const t=ao(r,!0).delete(e);return new Ts(t).toPromise()}const bE=800,AE=3;class Jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>AE)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oo._getInstance(IE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _E(),!this.activeServiceWorker)return;this.sender=new gE(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Va();return await Ih(e,Di,"1"),await Th(e,Di),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ih(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>wE(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Th(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ao(s,!1).getAll();return new Ts(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jp.type="LOCAL";const SE=Jp;new vs(3e4,6e4);/**
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
 */function Mc(r,e){return e?gt(e):(K(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Fc extends Up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function RE(r){return aE(r.auth,new Fc(r),r.bypassAuthState)}function PE(r){const{auth:e,user:t}=r;return K(t,e,"internal-error"),oE(t,new Fc(r),r.bypassAuthState)}async function CE(r){const{auth:e,user:t}=r;return K(t,e,"internal-error"),iE(t,new Fc(r),r.bypassAuthState)}/**
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
 */class Yp{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RE;case"linkViaPopup":case"linkViaRedirect":return CE;case"reauthViaPopup":case"reauthViaRedirect":return PE;default:rt(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kE=new vs(2e3,1e4);async function DE(r,e,t){if(dt(r.app))return Promise.reject(Ge(r,"operation-not-supported-in-this-environment"));const n=so(r);bp(r,e,io);const s=Mc(n,t);return new Lt(n,"signInViaPopup",e,s).executeNotNull()}async function xE(r,e,t){const n=_e(r);bp(n.auth,e,io);const s=Mc(n.auth,t);return new Lt(n.auth,"linkViaPopup",e,s,n).executeNotNull()}class Lt extends Yp{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=Oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kE.get())};e()}}Lt.currentPopupAction=null;/**
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
 */const VE="pendingRedirect",ci=new Map;class NE extends Yp{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ci.get(this.auth._key());if(!e){try{const n=await LE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ci.set(this.auth._key(),e)}return this.bypassAuthState||ci.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LE(r,e){const t=FE(e),n=ME(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function OE(r,e){ci.set(r._key(),e)}function ME(r){return gt(r._redirectPersistence)}function FE(r){return ai(VE,r.config.apiKey,r.name)}async function jE(r,e,t=!1){if(dt(r.app))return Promise.reject(un(r));const n=so(r),s=Mc(n,e),o=await new NE(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const BE=10*60*1e3;class UE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$E(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Xp(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ge(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eh(e))}saveEventToCache(e){this.cachedEventUids.add(Eh(e)),this.lastProcessedEventTime=Date.now()}}function Eh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Xp({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $E(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xp(r);default:return!1}}/**
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
 */async function qE(r,e={}){return dr(r,"GET","/v1/projects",e)}/**
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
 */const zE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GE=/^https?/;async function HE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await qE(r);for(const t of e)try{if(KE(t))return}catch{}rt(r,"unauthorized-domain")}function KE(r){const e=Da(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!GE.test(t))return!1;if(zE.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const WE=new vs(3e4,6e4);function wh(){const r=Ze().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function QE(r){return new Promise((e,t)=>{var n,s,i;function o(){wh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wh(),t(Ge(r,"network-request-failed"))},timeout:WE.get()})}if(!((s=(n=Ze().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ze().gapi)===null||i===void 0)&&i.load)o();else{const c=XT("iframefcb");return Ze()[c]=()=>{gapi.load?o():t(Ge(r,"network-request-failed"))},JT(`${YT()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw li=null,e})}let li=null;function JE(r){return li=li||QE(r),li}/**
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
 */const YE=new vs(5e3,15e3),XE="__/auth/iframe",ZE="emulator/auth/iframe",ew={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nw(r){const e=r.config;K(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Dc(e,ZE):`https://${r.config.authDomain}/${XE}`,n={apiKey:e.apiKey,appName:r.name,v:In},s=tw.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ds(n).slice(1)}`}async function rw(r){const e=await JE(r),t=Ze().gapi;return K(t,r,"internal-error"),e.open({where:document.body,url:nw(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ew,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Ge(r,"network-request-failed"),c=Ze().setTimeout(()=>{i(o)},YE.get());function l(){Ze().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const sw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iw=500,ow=600,aw="_blank",cw="http://localhost";class bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lw(r,e,t,n=iw,s=ow){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},sw),{width:n.toString(),height:s.toString(),top:i,left:o}),h=ye().toLowerCase();t&&(c=Vp(h)?aw:t),Dp(h)&&(e=e||cw,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[E,P])=>`${g}${E}=${P},`,"");if($T(h)&&c!=="_self")return uw(e||"",c),new bh(null);const p=window.open(e||"",c,f);K(p,r,"popup-blocked");try{p.focus()}catch{}return new bh(p)}function uw(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const hw="__/auth/handler",dw="emulator/auth/handler",fw=encodeURIComponent("fac");async function Ah(r,e,t,n,s,i){K(r.config.authDomain,r,"auth-domain-config-required"),K(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:In,eventId:s};if(e instanceof io){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",fg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Is){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${fw}=${encodeURIComponent(l)}`:"";return`${pw(r)}?${ds(c).slice(1)}${h}`}function pw({config:r}){return r.emulator?Dc(r,dw):`https://${r.authDomain}/${hw}`}/**
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
 */const Jo="webStorageSupport";class mw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hp,this._completeRedirectFn=jE,this._overrideRedirectResult=OE}async _openPopup(e,t,n,s){var i;vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ah(e,t,n,Da(),s);return lw(e,o,Oc())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Ah(e,t,n,Da(),s);return yE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(vt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await rw(e),n=new UE(e);return t.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jo,{type:Jo},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Jo];o!==void 0&&t(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=HE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fp()||xp()||Nc()}}const gw=mw;var Sh="@firebase/auth",Rh="1.7.9";/**
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
 */class yw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _w(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vw(r){hn(new Bt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jp(r)},h=new WT(n,s,i,l);return eE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),hn(new Bt("auth-internal",e=>{const t=so(e.getProvider("auth").getImmediate());return(n=>new yw(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(Sh,Rh,_w(r)),Ye(Sh,Rh,"esm2017")}/**
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
 */const Iw=5*60,Tw=Qh("authIdTokenMaxAge")||Iw;let Ph=null;const Ew=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Tw)return;const s=t==null?void 0:t.token;Ph!==s&&(Ph=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ww(r=td()){const e=Li(r,"auth");if(e.isInitialized())return e.getImmediate();const t=ZT(r,{popupRedirectResolver:gw,persistence:[SE,pE,Hp]}),n=Qh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Ew(i.toString());lE(t,o,()=>o(t.currentUser)),cE(t,c=>o(c))}}const s=Kh("auth");return s&&tE(t,`http://${s}`),t}function bw(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}QT({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Ge("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",bw().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vw("Browser");const Aw={apiKey:"AIzaSyCh5zX-2AgcibKw-tCvXpsFuRA9POYFt-Y",authDomain:"my-trip-record.firebaseapp.com",projectId:"my-trip-record",storageBucket:"my-trip-record.firebasestorage.app",messagingSenderId:"656393008816",appId:"1:656393008816:web:307ff5f1ee6e509242ad75",measurementId:"G-8SQ1KTE1YP"},jc=ed(Aw),at=AI(jc,{localCache:GI({tabManager:QI()})});TT(jc);const co=ww(jc);function Sw(){return new Promise(r=>{const e=uE(co,t=>{e(),r(t)})})}const Zp=new ht;async function em(){return(await DE(co,Zp)).user}async function tm(){return(await xE(co.currentUser,Zp)).user}async function Rw(){await hE(co)}function lo(){var e;return(e=ne().user)==null?void 0:e.uid}async function Na(r){const e=OI(Xi(at,"users",r,"trips"),MI("createdAt","desc"));return(await pp(e)).docs.map(n=>({id:n.id,...n.data()}))}async function Pw(r,e){const t={...e,createdAt:_p()},s=(await yp(Xi(at,"users",r,"trips"),t)).id;if(t.startDate&&t.endDate){const i=new Date(t.startDate),o=new Date(t.endDate),c=Math.ceil((o-i)/(1e3*60*60*24))+1;for(let l=1;l<=c;l++)l===1?(await Un(s,{day:1,time:"08:00",title:"出発",category:"transport",order:0}),await Un(s,{day:1,time:"15:00",title:"ホテル到着・チェックイン",category:"hotel",order:1})):l===c?(await Un(s,{day:l,time:"10:00",title:"ホテル出発・帰路へ",category:"transport",order:0}),await Un(s,{day:l,time:"18:00",title:"自宅到着",category:"other",order:1})):await Un(s,{day:l,time:"09:00",title:"観光スタート",category:"sightseeing",order:0})}return s}async function Cw(r,e,t){const n=bn(at,"users",r,"trips",e);await mp(n,t)}async function kw(r,e){await gp(bn(at,"users",r,"trips",e))}async function Sn(r,e){const t=lo();return(await pp(Xi(at,"users",t,"trips",r,e))).docs.map(s=>({id:s.id,...s.data()}))}async function Rn(r,e,t){const n=lo();return(await yp(Xi(at,"users",n,"trips",r,e),{...t,createdAt:_p()})).id}async function uo(r,e,t,n){const s=lo();await mp(bn(at,"users",s,"trips",r,e,t),n)}async function ho(r,e,t){const n=lo();await gp(bn(at,"users",n,"trips",r,e,t))}const Dw=r=>Sn(r,"flashcards"),xw=(r,e)=>Rn(r,"flashcards",e),Ch=r=>Sn(r,"checklist"),nm=(r,e)=>Rn(r,"checklist",e),Vw=(r,e,t)=>uo(r,"checklist",e,t),Nw=r=>Sn(r,"schedules"),Un=(r,e)=>Rn(r,"schedules",e),kh=(r,e,t)=>uo(r,"schedules",e,t),Lw=(r,e)=>ho(r,"schedules",e),Dh=r=>Sn(r,"research"),xh=(r,e)=>Rn(r,"research",e),Vh=(r,e,t)=>uo(r,"research",e,t),Ow=(r,e)=>ho(r,"research",e),Nh=r=>Sn(r,"budget"),Lh=(r,e)=>Rn(r,"budget",e),Mw=(r,e)=>ho(r,"budget",e),Fw=r=>Sn(r,"emergency"),jw=(r,e)=>Rn(r,"emergency",e);async function rm(r){if(!r)return null;const e=bn(at,"users",r,"settings","master"),t=await UI(e);return t.exists()?t.data():null}async function Bw(r,e){if(!r)return;const t=bn(at,"users",r,"settings","master");await $I(t,e,{merge:!0})}const Uw=r=>Sn(r,"omiyage"),$w=(r,e)=>Rn(r,"omiyage",e),qw=(r,e,t)=>uo(r,"omiyage",e,t),zw=(r,e)=>ho(r,"omiyage",e),Gw="modulepreload",Hw=function(r){return"/tabi-shiori/"+r},Oh={},sm=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=Hw(l),l in Oh)return;Oh[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Gw,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,E)=>{p.addEventListener("load",g),p.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Kw="https://script.google.com/macros/s/AKfycbwARwcfB8irhjuKvmaifTk-M0FePVPjzVohKRZTXaQtTAvpN1K4iX-cr5rdiAfYpATr/exec",Yo=new Map;async function st(r){if(!r||typeof r!="string")return r;const{language:e}=ne(),t=`${r}_${e}`;if(e==="ja")return r;if(Yo.has(t))return Yo.get(t);try{const n=new URL(Kw);n.searchParams.append("text",r),n.searchParams.append("target",e);const i=await(await fetch(n.toString(),{method:"GET"})).json();return i.success&&i.translatedText?(Yo.set(t,i.translatedText),i.translatedText):r}catch(n){return console.warn("Translation failed:",n),r}}const Xo=[{id:"greeting",label:"挨拶",emoji:"👋"},{id:"thanks",label:"感謝",emoji:"🙏"},{id:"shopping",label:"買い物",emoji:"🛍️"},{id:"restaurant",label:"レストラン",emoji:"🍽️"},{id:"transport",label:"交通",emoji:"🚌"},{id:"emergency",label:"緊急",emoji:"🆘"},{id:"basic",label:"基本",emoji:"💬"}],Qs={en:{greeting:[{phrase:"Hello",reading:"ハロー",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Good morning",reading:"グッド モーニング",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Good evening",reading:"グッド イブニング",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"Good night",reading:"グッド ナイト",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"How are you?",reading:"ハウ アー ユー？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Thank you",reading:"サンキュー",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Thanks a lot",reading:"サンクス ア ロット",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"You're welcome",reading:"ユア ウェルカム",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"No problem",reading:"ノー プロブレム",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"I appreciate it",reading:"アイ アプリシエイト イット",jp:"感謝します",th:"ฉันซาบซึ้ง",en:"I appreciate it"}],shopping:[{phrase:"How much is this?",reading:"ハウ マッチ イズ ディス？",jp:"これはいくらですか？",th:"อันนี้ราคาเท่าไหร่?",en:"How much is this?"},{phrase:"Can I pay by credit card?",reading:"キャン アイ ペイ バイ クレジット カード？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรเครดิตได้ไหม?",en:"Can I pay by credit card?"},{phrase:"I'll take this",reading:"アイル テイク ディス",jp:"これを買います",th:"ฉันเอาอันนี้",en:"I'll take this"},{phrase:"Can you give me a discount?",reading:"キャン ユー ギブ ミー ア ディスカウント？",jp:"安くしてもらえませんか？",th:"ลดราคาให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"Do you have this in a different color?",reading:"ドゥー ユー ハブ ディス イン ア ディファレント カラー？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in a different color?"}],restaurant:[{phrase:"Table for two, please",reading:"テーブル フォー トゥー プリーズ",jp:"2人です",th:"ขอโต๊ะสำหรับสองคนครับ/ค่ะ",en:"Table for two, please"},{phrase:"Can I have the menu?",reading:"キャン アイ ハブ ザ メニュー？",jp:"メニューを見せてください",th:"ขอเมนูหน่อยครับ/ค่ะ",en:"Can I have the menu?"},{phrase:"I'd like to order",reading:"アイド ライク トゥー オーダー",jp:"注文をお願いします",th:"ขอสั่งอาหารครับ/ค่ะ",en:"I'd like to order"},{phrase:"Check, please",reading:"チェック プリーズ",jp:"お会計をお願いします",th:"เช็คบิลด้วยครับ/ค่ะ",en:"Check, please"},{phrase:"Water, please",reading:"ウォーター プリーズ",jp:"お水をください",th:"ขอน้ำเปล่าครับ/ค่ะ",en:"Water, please"}],transport:[{phrase:"Where is the train station?",reading:"ウェア イズ ザ トレイン ステーション？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"I want to go here",reading:"アイ ウォント トゥー ゴー ヒア",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Does this bus go to the airport?",reading:"ダズ ディス バス ゴー トゥー ザ エアポート？",jp:"このバスは空港に行きますか？",th:"รถบัสคันนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Stop here, please",reading:"ストップ ヒア プリーズ",jp:"ここで降ろしてください",th:"จอดตรงนี้ครับ/ค่ะ",en:"Stop here, please"},{phrase:"How long does it take?",reading:"ハウ ロング ダズ イット テイク？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Help!",reading:"ヘルプ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Call an ambulance",reading:"コール アン アンビュランス",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลให้หน่อย",en:"Call an ambulance"},{phrase:"Call the police",reading:"コール ザ ポリス",jp:"警察を呼んでください",th:"เรียกตำรวจให้หน่อย",en:"Call the police"},{phrase:"I lost my passport",reading:"アイ ロスト マイ パスポート",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Where is the hospital?",reading:"ウェア イズ ザ ホスピタル？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Yes",reading:"イエス",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノー",jp:"いいえ",th:"ไม่",en:"No"},{phrase:"Excuse me",reading:"エクスキューズ ミー",jp:"すみません",th:"ขอโทษครับ/ค่ะ",en:"Excuse me"},{phrase:"Sorry",reading:"ソーリー",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"I don't understand",reading:"アイ ドント アンダースタンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},th:{greeting:[{phrase:"สวัสดี",reading:"サワディー",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"อรุณสวัสดิ์",reading:"アルンサワッ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"ราตรีสวัสดิ์",reading:"ラートリーサワッ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"สบายดีไหม",reading:"サバーイ ディー マイ",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"},{phrase:"แล้วพบกันใหม่",reading:"レーオ ポップ ガン マイ",jp:"また会いましょう",th:"แล้วพบกันใหม่",en:"See you again"}],thanks:[{phrase:"ขอบคุณ",reading:"コップクン",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"ขอบคุณมาก",reading:"コップクン マーク",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"ไม่เป็นไร",reading:"マイペンライ",jp:"どういたしまして/大丈夫です",th:"ไม่เป็นไร",en:"You're welcome/No problem"},{phrase:"ด้วยความยินดี",reading:"ドゥアイ クワーム インディー",jp:"喜んで",th:"ด้วยความยินดี",en:"With pleasure"},{phrase:"ขอบคุณสำหรับความช่วยเหลือ",reading:"コップクン サムラップ クワーム チュアイ ルア",jp:"助けてくれてありがとう",th:"ขอบคุณสำหรับความช่วยเหลือ",en:"Thank you for your help"}],shopping:[{phrase:"อันนี้ราคาเท่าไหร่",reading:"アンニー ラーカー タオライ",jp:"これはいくらですか？",th:"อันนี้ราคาเท่าไหร่?",en:"How much is this?"},{phrase:"ลดราคาให้หน่อยได้ไหม",reading:"ロット ラーカー ハイ ノイ ダイ マイ",jp:"安くしてもらえませんか？",th:"ลดราคาให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"เอาอันนี้",reading:"アオ アンニー",jp:"これを買います",th:"เอาอันนี้",en:"I'll take this"},{phrase:"มีสีอื่นไหม",reading:"ミー シー ウーン マイ",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in a different color?"},{phrase:"รับบัตรเครดิตไหม",reading:"ラップ バット クレディット マイ",jp:"クレジットカードは使えますか？",th:"รับบัตรเครดิตไหม?",en:"Do you accept credit cards?"}],restaurant:[{phrase:"ขอเมนูหน่อย",reading:"コー メニュー ノイ",jp:"メニューを見せてください",th:"ขอเมนูหน่อย",en:"Can I have the menu?"},{phrase:"เก็บเงินด้วย",reading:"ゲップ ングン ドゥアイ",jp:"お会計をお願いします",th:"เก็บเงินด้วย",en:"Check, please"},{phrase:"ไม่ใส่ผักชี",reading:"マイ サイ パクチー",jp:"パクチーを入れないでください",th:"ไม่ใส่ผักชี",en:"No coriander"},{phrase:"เผ็ดน้อย",reading:"ペット ノーイ",jp:"辛くしないでください",th:"เผ็ดน้อย",en:"Less spicy"},{phrase:"อร่อยมาก",reading:"アロイ マーク",jp:"とても美味しいです",th:"อร่อยมาก",en:"Very delicious"}],transport:[{phrase:"สถานีรถไฟอยู่ที่ไหน",reading:"サターニー ロッファイ ユー ティーナイ",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"ไปที่นี่",reading:"パイ ティーニー",jp:"ここに行ってください",th:"ไปที่นี่",en:"Go here, please"},{phrase:"จอดตรงนี้",reading:"ジョート トロンニー",jp:"ここで停めてください",th:"จอดตรงนี้",en:"Stop here"},{phrase:"ใช้เวลานานเท่าไหร่",reading:"チャイ ウェーラー ナーン タオライ",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"},{phrase:"เปิดมิเตอร์ด้วย",reading:"プート ミーター ドゥアイ",jp:"メーターを回してください",th:"เปิดมิเตอร์ด้วย",en:"Please turn on the meter"}],emergency:[{phrase:"ช่วยด้วย",reading:"チュアイ ドゥアイ",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"เรียกรถพยาบาลให้หน่อย",reading:"リアク ロッパヤバーン ハイ ノイ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลให้หน่อย",en:"Call an ambulance"},{phrase:"เรียกตำรวจให้หน่อย",reading:"リアク タムルワット ハイ ノイ",jp:"警察を呼んでください",th:"เรียกตำรวจให้หน่อย",en:"Call the police"},{phrase:"ทำพาสปอร์ตหาย",reading:"タム パスポート ハーイ",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"โรงพยาบาลอยู่ที่ไหน",reading:"ローンパヤバーン ユー ティーナイ",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"ใช่",reading:"チャイ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"ไม่ใช่",reading:"マイチャイ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"ขอโทษ",reading:"コートート",jp:"すみません/ごめんなさい",th:"ขอโทษ",en:"Excuse me / Sorry"},{phrase:"ไม่เข้าใจ",reading:"マイ カオジャイ",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"},{phrase:"พูดภาษาอังกฤษได้ไหม",reading:"プート パーサー アングリット ダイ マイ",jp:"英語を話せますか？",th:"พูดภาษาอังกฤษได้ไหม?",en:"Can you speak English?"}]},zh:{greeting:[{phrase:"你好",reading:"ニーハオ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"早上好",reading:"ザオシャンハオ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"晚上好",reading:"ワンシャンハオ",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"晚安",reading:"ワンアン",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"你好吗？",reading:"ニーハオマ？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"谢谢",reading:"シエシエ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"非常感谢",reading:"フェイチャンガンシエ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"不客气",reading:"ブーカーチー",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"没关系",reading:"メイグアンシー",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"辛苦了",reading:"シンクーラ",jp:"お疲れ様でした",th:"ขอบคุณสำหรับความเหนื่อยยาก",en:"Thank you for your hard work"}],shopping:[{phrase:"多少钱？",reading:"ドゥオシャオチエン？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"可以刷卡吗？",reading:"クーイシュアカーマ？",jp:"クレジットカードは使えますか？",th:"รูดบัตรได้ไหม?",en:"Can I use a credit card?"},{phrase:"我要这个",reading:"ウォーヤオジェイガ",jp:"これを買います",th:"เอาอันนี้",en:"I want this"},{phrase:"能便宜一点吗？",reading:"ノォンピエンイーイーディエンマ？",jp:"安くしてもらえませんか？",th:"ลดหน่อยได้ไหม?",en:"Can you make it cheaper?"},{phrase:"有别的颜色吗？",reading:"ヨウビエダユィエンスーマ？",jp:"他の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have other colors?"}],restaurant:[{phrase:"两个人",reading:"リャンガレン",jp:"2人です",th:"สองคน",en:"Two people"},{phrase:"请给我菜单",reading:"チンゲイウォツァイダン",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"Please give me the menu"},{phrase:"我要点餐",reading:"ウォーヤオディエンツァン",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I'd like to order"},{phrase:"买单",reading:"マイダン",jp:"お会計をお願いします",th:"เช็คบิล",en:"Check, please"},{phrase:"请给我水",reading:"チンゲイウォシュイ",jp:"お水をください",th:"ขอน้ำเปล่าหน่อย",en:"Water, please"}],transport:[{phrase:"火车站怎么走？",reading:"フオチャージャンゼンマゾウ？",jp:"駅へはどう行けばいいですか？",th:"ไปสถานีรถไฟยังไง?",en:"How to go to the train station?"},{phrase:"我要去这里",reading:"ウォーヤオチュージェーリー",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"这辆车去机场吗？",reading:"ジェリャンチャチュウジーチャンマ？",jp:"このバス/車は空港に行きますか？",th:"รถคันนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"在这里停",reading:"ザイジェリーティン",jp:"ここで停めてください",th:"จอดตรงนี้",en:"Stop here"},{phrase:"要多长时间？",reading:"ヤオドゥオチャンシージエン？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"救命！",reading:"ジウミン！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"叫救护车",reading:"ジャオジウフーチャー",jp:"救急車を呼んでください",th:"เรียกรถพยาบาล",en:"Call an ambulance"},{phrase:"报警",reading:"バオジン",jp:"警察を呼んでください",th:"แจ้งตำรวจ",en:"Call the police"},{phrase:"我护照丢了",reading:"ウォーフージャオディウラ",jp:"パスポートを無くしました",th:"พาสปอร์ตหาย",en:"I lost my passport"},{phrase:"医院在哪里？",reading:"イーユエンザイナーリー？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"是",reading:"シー",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"不是",reading:"ブーシー",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"不好意思",reading:"ブーハオイースー",jp:"すみません",th:"ขอโทษ (เรียกความสนใจ)",en:"Excuse me"},{phrase:"对不起",reading:"ドゥイブーチー",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"我听不懂",reading:"ウォーティンブードン",jp:"わかりません",th:"ฟังไม่เข้าใจ",en:"I don't understand"}]},ko:{greeting:[{phrase:"안녕하세요",reading:"アンニョンハセヨ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"안녕히 주무세요",reading:"アンニョンヒ ジュムセヨ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"잘 지내셨어요?",reading:"チャル ジネショッソヨ？",jp:"お元気でしたか？",th:"สบายดีไหม?",en:"How have you been?"},{phrase:"안녕히 계세요",reading:"アンニョンヒ ゲセヨ",jp:"さようなら（自分が去る時）",th:"ลาก่อน",en:"Goodbye"},{phrase:"반갑습니다",reading:"パンガプスムニ다",jp:"はじめまして",th:"ยินดีที่ได้รู้จัก",en:"Nice to meet you"}],thanks:[{phrase:"감사합니다",reading:"カムサハムニダ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"정말 감사합니다",reading:"チョンマル カムサハムニダ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"천만에요",reading:"チョンマネヨ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"괜찮아요",reading:"ケンチャナヨ",jp:"大丈夫です/結構です",th:"ไม่เป็นไร",en:"It's okay/No thanks"},{phrase:"수고하셨습니다",reading:"スゴハショッスムニダ",jp:"お疲れ様でした",th:"ขอบคุณที่เหนื่อยยาก",en:"Good job"}],shopping:[{phrase:"얼마예요?",reading:"オルマエヨ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"카드 되나요?",reading:"カドゥ テナヨ？",jp:"カードは使えますか？",th:"รับบัตรไหม?",en:"Can I use a card?"},{phrase:"이걸로 주세요",reading:"イゴルロ ジュセヨ",jp:"これをください",th:"เอาอันนี้",en:"I'll take this"},{phrase:"조금 깎아주세요",reading:"チョグム カッカジュセヨ",jp:"少し安くしてください",th:"ลดราคาให้หน่อย",en:"Please give me a discount"},{phrase:"다른 색상 있나요?",reading:"タルン セクサン インナヨ？",jp:"他の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have other colors?"}],restaurant:[{phrase:"두 명이요",reading:"トゥ ミョンイヨ",jp:"2人です",th:"สองคนค่ะ/ครับ",en:"Two people"},{phrase:"메뉴판 주세요",reading:"メニューパン ジュセヨ",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"Menu, please"},{phrase:"주문할게요",reading:"チュムナルケ요",jp:"注文します",th:"ขอสั่งอาหาร",en:"I will order"},{phrase:"계산서 주세요",reading:"ケサンソ ジュセヨ",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"Check, please"},{phrase:"물 좀 주세요",reading:"ムル チョム ジュセヨ",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"기차역이 어디예요?",reading:"キチャヨギ オディエヨ？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"여기로 가주세요",reading:"ヨギロ カジュセヨ",jp:"ここに行ってください",th:"ไปที่นี่",en:"Please go here"},{phrase:"이 버스 공항 가나요?",reading:"イ ボス コンハン カナヨ？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"여기서 세워주세요",reading:"ヨギソ セウォジュセヨ",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Please stop here"},{phrase:"얼마나 걸려요?",reading:"オルマ나 コルリョヨ？",jp:"どのくらいかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"도와주세요!",reading:"トワジュセヨ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"구급차 불러주세요",reading:"クグプチャ プルロジュセヨ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Please call an ambulance"},{phrase:"경찰 불러주세요",reading:"キョンチャル プルロジュセヨ",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Please call the police"},{phrase:"여권을 잃어버렸어요",reading:"ヨックォヌル イロボリョッソヨ",jp:"パスポートを無くしました",th:"ทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"병원이 어디예요?",reading:"ピョンウォニ オディエヨ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"네",reading:"ネ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"아니요",reading:"アニヨ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"실례합니다",reading:"シルレハムニダ",jp:"すみません（尋ねる時）",th:"ขอโทษ",en:"Excuse me"},{phrase:"죄송합니다",reading:"チェソンハムニダ",jp:"ごめんなさい",th:"ขอโทษ",en:"I am sorry"},{phrase:"모르겠어요",reading:"モルゲッソヨ",jp:"わかりません",th:"ไม่รู้/ไม่เข้าใจ",en:"I don't know/understand"}]},es:{greeting:[{phrase:"Hola",reading:"オラ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Buenos días",reading:"ブエノス ディアス",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Buenas tardes",reading:"ブエナス タルデス",jp:"こんにちは/こんばんは",th:"สวัสดีตอนบ่าย",en:"Good afternoon"},{phrase:"Buenas noches",reading:"ブエナス ノチェス",jp:"こんばんは/おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"¿Cómo estás?",reading:"コモ エスタス？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Gracias",reading:"グラシアス",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Muchas gracias",reading:"ムチャス グラシアス",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"De nada",reading:"デ ナダ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"No hay problema",reading:"ノ アイ プロブレマ",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"},{phrase:"Muy amable",reading:"ムイ アマブレ",jp:"ご親切に",th:"ใจดีมาก",en:"Very kind"}],shopping:[{phrase:"¿Cuánto cuesta?",reading:"クアント クエスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much does it cost?"},{phrase:"¿Puedo pagar con tarjeta?",reading:"プエド パガール コン タルヘタ？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรได้ไหม?",en:"Can I pay with a card?"},{phrase:"Me lo llevo",reading:"メ ロ ジェボ",jp:"これを買います",th:"เอาอันนี้",en:"I'll take it"},{phrase:"¿Puede hacerme un descuento?",reading:"プエデ アセルメ ウン デスクエント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"¿Tiene esto en otro color?",reading:"ティエネ エスト エン オトロ コロール？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in another color?"}],restaurant:[{phrase:"Una mesa para dos, por favor",reading:"ウナ メサ パラ ドス ポル ファボール",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"El menú, por favor",reading:"エル メニュー ポル ファボール",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Quisiera pedir",reading:"キシエラ ペディール",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"La cuenta, por favor",reading:"ラ クエンタ ポル ファボール",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Agua, por favor",reading:"アグア ポル ファボール",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"¿Dónde está la estación de tren?",reading:"ドンデ エスタ ラ エスタシオン デ トレン？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Quiero ir aquí",reading:"キエロ イール アキ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"¿Este autobús va al aeropuerto?",reading:"エステ アウトブス バ アル アエロプエルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Pare aquí, por favor",reading:"パレ アキ ポル ファボール",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"¿Cuánto tiempo tarda?",reading:"クアント ティエンポ タルダ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"¡Ayuda!",reading:"アユダ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Llame a una ambulancia",reading:"ジャメ ア ウナ アンブランシア",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Llame a la policía",reading:"ジャメ ア ラ ポリシア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"He perdido mi pasaporte",reading:"エ ペルディード ミ パサポルテ",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I have lost my passport"},{phrase:"¿Dónde está el hospital?",reading:"ドンデ エスタ エル オスピタル？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sí",reading:"シ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Disculpe",reading:"ディスクルペ",jp:"すみません",th:"ขอโทษ (เรียก)",en:"Excuse me"},{phrase:"Lo siento",reading:"ロ シエント",jp:"ごめんなさい",th:"ขอโทษ",en:"I'm sorry"},{phrase:"No entiendo",reading:"ノ エンティエンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},it:{greeting:[{phrase:"Ciao",reading:"チャオ",jp:"こんにちは / さようなら",th:"สวัสดี/ลาก่อน",en:"Hello/Goodbye"},{phrase:"Buongiorno",reading:"ブオンジョルノ",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Buonasera",reading:"ブオナセーラ",jp:"こんばんは",th:"สวัสดีตอนเย็น",en:"Good evening"},{phrase:"Buonanotte",reading:"ブオナノッテ",jp:"おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"Come stai?",reading:"コメ スタイ？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Grazie",reading:"グラッツィエ",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Mille grazie",reading:"ミッレ グラッツィエ",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thanks a lot"},{phrase:"Prego",reading:"プレーゴ",jp:"どういたしまして / どうぞ",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"Di nulla",reading:"ディ ヌッラ",jp:"とんでもない",th:"ไม่เป็นไร",en:"Not at all"},{phrase:"Nessun problema",reading:"ネッスン プロブレーマ",jp:"問題ありません",th:"ไม่มีปัญหา",en:"No problem"}],shopping:[{phrase:"Quanto costa?",reading:"クアント コスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much is it?"},{phrase:"Posso pagare con la carta di credito?",reading:"ポッソ パガーレ コン ラ カルタ ディ クレディト？",jp:"クレジットカードは使えますか？",th:"จ่ายด้วยบัตรเครดิตได้ไหม?",en:"Can I pay with credit card?"},{phrase:"Prendo questo",reading:"プレンド クエスト",jp:"これを買います",th:"เอาอันนี้",en:"I'll take this"},{phrase:"Può farmi uno sconto?",reading:"プォ ファルミ ウノ スコント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Can you give me a discount?"},{phrase:"Avete questo in un altro colore?",reading:"アヴェーテ クエスト イン ウン アルトロ コローレ？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have this in another color?"}],restaurant:[{phrase:"Un tavolo per due, per favore",reading:"ウン ターヴォロ ペル ドゥーエ ペル ファヴォーレ",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"Il menù, per favore",reading:"イル メニュー ペル ファヴォーレ",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Vorrei ordinare",reading:"ヴォッレイ オルディナーレ",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"Il conto, per favore",reading:"イル コント ペル ファヴォーレ",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Acqua, per favore",reading:"アックア ペル ファヴォーレ",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"Dov'è la stazione ferroviaria?",reading:"ドヴェ ラ スタツィオーネ フェッロヴィアーリア？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Voglio andare qui",reading:"ヴォーリョ アンダーレ クイ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Questo autobus va all'aeroporto?",reading:"クエスト アウトブス ヴァ アッラエロポルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Si fermi qui, per favore",reading:"シ フェルミ クイ ペル ファヴォーレ",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"Quanto tempo ci vuole?",reading:"クアント テンポ チ ヴオーレ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Aiuto!",reading:"アユート！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Chiami un'ambulanza",reading:"キアーミ ウナンブランツァ",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Chiami la polizia",reading:"キアーミ ラ ポリツィーア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"Ho perso il passaporto",reading:"オ ペルソ イル パッサポルト",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Dov'è l'ospedale?",reading:"ドヴェ ロスペダーレ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sì",reading:"スィ",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"No",reading:"ノ",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Scusa",reading:"スクーザ",jp:"すみません",th:"ขอโทษ (เรียก)",en:"Excuse me"},{phrase:"Mi dispiace",reading:"ミ ディスピアチェ",jp:"ごめんなさい",th:"ขอโทษ",en:"I am sorry"},{phrase:"Non capisco",reading:"ノン カピスコ",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]},pt:{greeting:[{phrase:"Olá",reading:"オラ",jp:"こんにちは",th:"สวัสดี",en:"Hello"},{phrase:"Bom dia",reading:"ボン ジーア",jp:"おはようございます",th:"อรุณสวัสดิ์",en:"Good morning"},{phrase:"Boa tarde",reading:"ボア タルヂ",jp:"こんにちは（午後）",th:"สวัสดีตอนบ่าย",en:"Good afternoon"},{phrase:"Boa noite",reading:"ボア ノイチ",jp:"こんばんは/おやすみなさい",th:"ราตรีสวัสดิ์",en:"Good night"},{phrase:"Tudo bem?",reading:"トゥド ベン？",jp:"お元気ですか？",th:"สบายดีไหม?",en:"How are you?"}],thanks:[{phrase:"Obrigado(a)",reading:"オブリガード（ダ）",jp:"ありがとうございます",th:"ขอบคุณ",en:"Thank you"},{phrase:"Muito obrigado(a)",reading:"ムイント オブリガード（ダ）",jp:"本当にありがとうございます",th:"ขอบคุณมาก",en:"Thank you very much"},{phrase:"De nada",reading:"ジ ナダ",jp:"どういたしまして",th:"ด้วยความยินดี",en:"You're welcome"},{phrase:"Não há de quê",reading:"ナォン ア ジ ケ",jp:"とんでもないです",th:"ไม่เป็นไร",en:"Not at all"},{phrase:"Imagina",reading:"イマジナ",jp:"気にしないでください",th:"ช่างมันเถอะ",en:"Don't mention it"}],shopping:[{phrase:"Quanto custa?",reading:"クアント クスタ？",jp:"いくらですか？",th:"ราคาเท่าไหร่?",en:"How much does it cost?"},{phrase:"Posso pagar com cartão?",reading:"ポッソ パガール コン カルタォン？",jp:"カードで払えますか？",th:"จ่ายด้วยบัตรได้ไหม?",en:"Can I pay with card?"},{phrase:"Vou levar este",reading:"ヴォウ レヴァール エスチ",jp:"これを買います",th:"เอาอันนี้",en:"I will take this"},{phrase:"Tem desconto?",reading:"テン デスコント？",jp:"安くしてもらえませんか？",th:"ลดให้หน่อยได้ไหม?",en:"Is there a discount?"},{phrase:"Tem em outra cor?",reading:"テン エン オウトラ コール？",jp:"これの別の色はありますか？",th:"มีสีอื่นไหม?",en:"Do you have it in another color?"}],restaurant:[{phrase:"Uma mesa para dois, por favor",reading:"ウマ メザ パラ ドイス ポル ファヴォール",jp:"2人です",th:"โต๊ะสำหรับสองคน",en:"A table for two, please"},{phrase:"O cardápio, por favor",reading:"オ カルダピオ ポル ファヴォール",jp:"メニューをください",th:"ขอเมนูหน่อย",en:"The menu, please"},{phrase:"Gostaria de fazer o pedido",reading:"ゴスタリア ジ ファゼール オ ペジード",jp:"注文をお願いします",th:"ขอสั่งอาหาร",en:"I would like to order"},{phrase:"A conta, por favor",reading:"ア コンタ ポル ファヴォール",jp:"お会計をお願いします",th:"เช็คบิลหน่อย",en:"The bill, please"},{phrase:"Água, por favor",reading:"アグア ポル ファヴォール",jp:"お水をください",th:"ขอน้ำหน่อย",en:"Water, please"}],transport:[{phrase:"Onde fica a estação de trem?",reading:"オンヂ フィカ ア エスタサォン ジ トレン？",jp:"駅はどこですか？",th:"สถานีรถไฟอยู่ที่ไหน?",en:"Where is the train station?"},{phrase:"Quero ir para cá",reading:"ケロ イール パラ カ",jp:"ここに行きたいです",th:"อยากไปที่นี่",en:"I want to go here"},{phrase:"Este ônibus vai para o aeroporto?",reading:"エスチ オニブス ヴァイ パラ オ アエロポルト？",jp:"このバスは空港に行きますか？",th:"รถบัสนี้ไปสนามบินไหม?",en:"Does this bus go to the airport?"},{phrase:"Pare aqui, por favor",reading:"パリ アキ ポル ファヴォール",jp:"ここで降ろしてください",th:"จอดที่นี่",en:"Stop here, please"},{phrase:"Quanto tempo demora?",reading:"クアント テンポ デモラ？",jp:"どのくらい時間がかかりますか？",th:"ใช้เวลานานเท่าไหร่?",en:"How long does it take?"}],emergency:[{phrase:"Socorro!",reading:"ソホーホ！",jp:"助けて！",th:"ช่วยด้วย!",en:"Help!"},{phrase:"Chame uma ambulância",reading:"シャミ ウマ アンブランシア",jp:"救急車を呼んでください",th:"เรียกรถพยาบาลหน่อย",en:"Call an ambulance"},{phrase:"Chame a polícia",reading:"シャミ ア ポリシア",jp:"警察を呼んでください",th:"เรียกตำรวจหน่อย",en:"Call the police"},{phrase:"Perdi meu passaporte",reading:"ペルジ メウ パサポルチ",jp:"パスポートを無くしました",th:"ฉันทำพาสปอร์ตหาย",en:"I lost my passport"},{phrase:"Onde fica o hospital?",reading:"オンヂ フィカ オ オスピタウ？",jp:"病院はどこですか？",th:"โรงพยาบาลอยู่ที่ไหน?",en:"Where is the hospital?"}],basic:[{phrase:"Sim",reading:"シン",jp:"はい",th:"ใช่",en:"Yes"},{phrase:"Não",reading:"ナォン",jp:"いいえ",th:"ไม่ใช่",en:"No"},{phrase:"Com licença",reading:"コン リセンサ",jp:"すみません",th:"ขออนุญาต/ขอโทษ",en:"Excuse me"},{phrase:"Desculpe",reading:"デスクウピ",jp:"ごめんなさい",th:"ขอโทษ",en:"Sorry"},{phrase:"Não entendo",reading:"ナォン エンテンド",jp:"わかりません",th:"ไม่เข้าใจ",en:"I don't understand"}]}},Mh={US:"en",GB:"en",AU:"en",CA:"en",NZ:"en",IE:"en",ZA:"en",IN:"en",PH:"en",SG:"en",TH:"th",CN:"zh",TW:"zh",HK:"zh",MO:"zh",KR:"ko",KP:"ko",ES:"es",MX:"es",AR:"es",CO:"es",PE:"es",CL:"es",EC:"es",GT:"es",CU:"es",BO:"es",DO:"es",HN:"es",PY:"es",SV:"es",NI:"es",CR:"es",PA:"es",UY:"es",VE:"es",IT:"it",SM:"it",VA:"it",CH:"it",PT:"pt",BR:"pt",MZ:"pt",AO:"pt",CV:"pt",GW:"pt",ST:"pt",JP:"ja"};function Bc(r){if(!r)return"en";const e=r.toUpperCase();if(Mh[e])return Mh[e];const t=r.toLowerCase();return t.includes("タイ")||t.includes("thai")?"th":t.includes("台湾")||t.includes("taiwan")||t.includes("中国")||t.includes("china")||t.includes("香港")||t.includes("hong")?"zh":t.includes("韓国")||t.includes("korea")?"ko":t.includes("スペイン")||t.includes("メキシコ")||t.includes("spain")||t.includes("mexico")?"es":t.includes("イタリア")||t.includes("italy")?"it":t.includes("ポルトガル")||t.includes("ブラジル")||t.includes("portugal")||t.includes("brazil")?"pt":t.includes("日本")||t.includes("japan")?"ja":"en"}function Vi(r){return{en:"🇺🇸",th:"🇹🇭",zh:"🇹🇼",ko:"🇰🇷",es:"🇪🇸",it:"🇮🇹",pt:"🇵🇹",ja:"🇯🇵"}[r]||"🏳️"}const Qr=[{code:"TW",name:{ja:"台湾",en:"Taiwan",th:"ไต้หวัน"},flag:"🇹🇼"},{code:"KR",name:{ja:"韓国",en:"South Korea",th:"เกาหลีใต้"},flag:"🇰🇷"},{code:"US",name:{ja:"アメリカ",en:"United States",th:"สหรัฐอเมริกา"},flag:"🇺🇸"},{code:"TH",name:{ja:"タイ",en:"Thailand",th:"ไทย"},flag:"🇹🇭"},{code:"CN",name:{ja:"中国",en:"China",th:"จีน"},flag:"🇨🇳"},{code:"HK",name:{ja:"香港",en:"Hong Kong",th:"ฮ่องกง"},flag:"🇭🇰"},{code:"SG",name:{ja:"シンガポール",en:"Singapore",th:"สิงคโปร์"},flag:"🇸🇬"},{code:"AU",name:{ja:"オーストラリア",en:"Australia",th:"ออสเตรเลีย"},flag:"🇦🇺"},{code:"GB",name:{ja:"イギリス",en:"United Kingdom",th:"สหราชอาณาจักร"},flag:"🇬🇧"},{code:"FR",name:{ja:"フランス",en:"France",th:"ฝรั่งเศส"},flag:"🇫🇷"},{code:"IT",name:{ja:"イタリア",en:"Italy",th:"อิตาลี"},flag:"🇮🇹"},{code:"ES",name:{ja:"スペイン",en:"Spain",th:"สเปน"},flag:"🇪🇸"},{code:"DE",name:{ja:"ドイツ",en:"Germany",th:"เยอรมนี"},flag:"🇩🇪"},{code:"CA",name:{ja:"カナダ",en:"Canada",th:"แคนาดา"},flag:"🇨🇦"},{code:"PH",name:{ja:"フィリピン",en:"Philippines",th:"ฟิลิปปินส์"},flag:"🇵🇭"},{code:"VN",name:{ja:"ベトナム",en:"Vietnam",th:"เวียดนาม"},flag:"🇻🇳"},{code:"MY",name:{ja:"マレーシア",en:"Malaysia",th:"มาเลเซีย"},flag:"🇲🇾"},{code:"ID",name:{ja:"インドネシア",en:"Indonesia",th:"อินโดนีเซีย"},flag:"🇮🇩"},{code:"PT",name:{ja:"ポルトガル",en:"Portugal",th:"โปรตุเกส"},flag:"🇵🇹"},{code:"BR",name:{ja:"ブラジル",en:"Brazil",th:"บราซิล"},flag:"🇧🇷"},{code:"MX",name:{ja:"メキシコ",en:"Mexico",th:"เม็กซิโก"},flag:"🇲🇽"},{code:"CH",name:{ja:"スイス",en:"Switzerland",th:"สวิตเซอร์แลนด์"},flag:"🇨🇭"},{code:"JP",name:{ja:"日本",en:"Japan",th:"ญี่ปุ่น"},flag:"🇯🇵"},{code:"OTHER",name:{ja:"その他 (自由入力)",en:"Other",th:"อื่นๆ"},flag:"🏳️"}],Ww={async render(){const{currentTrip:r,trips:e,user:t}=ne();if(!r){let E="";return e&&e.length>0&&(E=`
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
          ${E}
          <div class="text-center" style="margin-top: 40px; margin-bottom: 40px;">
            <span class="text-xs text-muted">Version 1.1.0</span>
          </div>
        </div>
      `}const n=new Date;n.setHours(0,0,0,0);const s=new Date(r.startDate),i=new Date(r.endDate);let o="";if(n<s){const E=Math.ceil((s-n)/864e5);o=`${_("countdownBefore")} <strong>${E}</strong> ${_("countdownDays")}`}else if(n>=s&&n<=i){const E=Math.ceil((n-s)/864e5)+1;o=`${_("countdownDuring")} <strong>${E}</strong> ${_("countdownDuringDays")}`}else o=_("countdownAfter");const c=E=>{if(!E)return"";const P=new Date(E),x=ui();return x==="en"?P.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):x==="th"?P.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"}):`${P.getFullYear()}年${P.getMonth()+1}月${P.getDate()}日`},l=await st(r.title)||_("untitledTrip"),h=(r.destinations||[]).map(async E=>{const P=Qr.find(C=>C.code===E.country);let x="🏳️";if(P)x=P.flag;else{const C=Bc(E.country);x=Vi(C)}return`<span style="font-size: 2rem;">${x}</span>`}),f=await Promise.all(h),p=(r.members||[]).map(async E=>{const P=E.name||"";return`
        <div class="member-avatar" title="${P}">
          <span class="member-icon">${E.icon||"😊"}</span>
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
    `},init(){var r,e,t;(r=document.getElementById("btn-create-trip"))==null||r.addEventListener("click",()=>oe("/trip/new")),(e=document.getElementById("btn-edit-trip"))==null||e.addEventListener("click",()=>oe("/trip/edit")),document.querySelectorAll(".portal-trip-card").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-trip-id"),{trips:i}=ne(),o=i.find(c=>c.id===s);o&&sm(async()=>{const{setState:c}=await Promise.resolve().then(()=>zm);return{setState:c}},void 0).then(({setState:c})=>{c({currentTripId:s,currentTrip:o}),localStorage.setItem("currentTripId",s),oe("/",!0,!0)})})}),(t=document.getElementById("btn-welcome-google"))==null||t.addEventListener("click",async()=>{try{const{user:n}=ne();n&&n.isAnonymous?await tm():await em(),window.location.reload()}catch(n){n.code!=="auth/popup-closed-by-user"&&n.code!=="auth/cancelled-popup-request"&&alert("ログインに失敗しました: "+n.message)}}),document.querySelectorAll(".feature-card").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-route");s&&oe(s)})})}};let J={activeLang:"en",activeCategory:"greeting",currentCardIndex:0,flashcards:[],customCards:[]};const Qw={render(){return`
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
    `},init(){var p,g,E,P,x,C,U,j,O,$;const r=ne(),e=r.currentTrip,t=ui(),n=t==="ja"?"jp":t;let s=["en"];if(e&&e.destinations){const N=e.destinations.map(L=>Bc(L.country)).filter(Boolean);N.length>0&&(s=[...new Set(N)])}J.activeLang=s[0]||"en";const i=document.getElementById("fc-target-langs");s.length>1?i.innerHTML=s.map(N=>`<span class="flag-tab" data-lang="${N}" style="font-size: 2.5rem; cursor: pointer; transition: opacity 0.2s; opacity: ${N===J.activeLang?"1":"0.4"};">
          ${Vi(N)}
        </span>`).join(""):s.length===1&&(i.innerHTML=`<span style="font-size: 2.5rem;">${Vi(s[0])}</span>`);const o=document.getElementById("fc-categories"),c=Xo?Xo.map(N=>N.id):["greeting"];c.length>0&&(J.activeCategory=c[0],o.innerHTML=Xo.map(N=>`<button class="tab ${N.id===J.activeCategory?"active":""}" data-cat="${N.id}">
          ${N.emoji} ${N.label}
        </button>`).join(""));const l=()=>{let N=[];Qs&&Qs[J.activeLang]&&Qs[J.activeLang][J.activeCategory]&&(N=[...Qs[J.activeLang][J.activeCategory]]);const L=J.customCards.filter(I=>I.category===J.activeCategory&&I.lang===J.activeLang);J.flashcards=[...N,...L],J.currentCardIndex=0,h()},h=()=>{const N=J.flashcards[J.currentCardIndex],L=document.getElementById("fc-card");if(!N){document.getElementById("fc-front-text").textContent="カードがありません",document.getElementById("fc-back-text").textContent="右下の➕から追加！",document.getElementById("fc-back-reading").textContent="",document.getElementById("fc-counter").textContent="0 / 0",L.classList.remove("flipped");return}const I=N.userFront||N[n]||N.en||N.phrase,y=N.targetBack||N.phrase||"",v=N.reading||"";document.getElementById("fc-front-text").textContent=I,document.getElementById("fc-back-text").textContent=y;const w=document.getElementById("fc-back-reading");t==="ja"&&v?(w.style.display="block",w.textContent=v):(w.style.display="none",w.textContent=""),document.getElementById("fc-counter").textContent=`${J.currentCardIndex+1} / ${J.flashcards.length}`,L.classList.remove("flipped");const S=JSON.parse(localStorage.getItem("tabi_shiori_fav_cards")||"[]").includes(N.id||I);document.getElementById("fc-fav-btn").textContent=S?"🌟":"⭐",document.getElementById("fc-fav-btn").classList.toggle("active",S)};e?Dw(e.id).then(N=>{J.customCards=N,l()}):l(),(p=document.getElementById("btn-back"))==null||p.addEventListener("click",()=>oe("/")),(g=document.getElementById("fc-card-wrapper"))==null||g.addEventListener("click",N=>{N.target.closest("#fc-play-btn")||document.getElementById("fc-card").classList.toggle("flipped")}),(E=document.getElementById("fc-play-btn"))==null||E.addEventListener("click",N=>{N.stopPropagation();const L=J.flashcards[J.currentCardIndex],I=(L==null?void 0:L.targetBack)||(L==null?void 0:L.phrase);if(I&&window.speechSynthesis){window.speechSynthesis.cancel();const y=new SpeechSynthesisUtterance(I),v={zh:"zh-CN",th:"th-TH",ko:"ko-KR",es:"es-ES",it:"it-IT",pt:"pt-PT",en:"en-US",ja:"ja-JP"};y.lang=v[J.activeLang]||J.activeLang,window.speechSynthesis.speak(y)}}),(P=document.getElementById("fc-prev-btn"))==null||P.addEventListener("click",N=>{N.stopPropagation(),J.currentCardIndex>0&&(J.currentCardIndex--,h())}),(x=document.getElementById("fc-next-btn"))==null||x.addEventListener("click",N=>{N.stopPropagation(),J.currentCardIndex<J.flashcards.length-1&&(J.currentCardIndex++,h())}),document.querySelectorAll(".flag-tab").forEach(N=>{N.addEventListener("click",L=>{const I=L.target.closest(".flag-tab");J.activeLang!==I.dataset.lang&&(document.querySelectorAll(".flag-tab").forEach(y=>y.style.opacity="0.4"),I.style.opacity="1",J.activeLang=I.dataset.lang,l())})}),(C=document.getElementById("fc-categories"))==null||C.addEventListener("click",N=>{const L=N.target.closest(".tab");L&&!L.classList.contains("active")&&(document.querySelectorAll("#fc-categories .tab").forEach(I=>I.classList.remove("active")),L.classList.add("active"),J.activeCategory=L.dataset.cat,l())}),(U=document.getElementById("fc-fav-btn"))==null||U.addEventListener("click",N=>{N.stopPropagation();const L=J.flashcards[J.currentCardIndex];if(!L)return;const I=L.userFront||L[n]||L.phrase,y=L.id||I;let v=JSON.parse(localStorage.getItem("tabi_shiori_fav_cards")||"[]");v.includes(y)?v=v.filter(w=>w!==y):v.push(y),localStorage.setItem("tabi_shiori_fav_cards",JSON.stringify(v)),h()});const f=document.getElementById("fc-modal");(j=document.getElementById("fc-add-btn"))==null||j.addEventListener("click",()=>{document.getElementById("fc-new-front").value="",document.getElementById("fc-new-back").value="",document.getElementById("fc-new-reading").value="",f.classList.add("active")}),(O=document.getElementById("fc-modal-close"))==null||O.addEventListener("click",()=>{f.classList.remove("active")}),f==null||f.addEventListener("click",N=>{N.target===f&&f.classList.remove("active")}),($=document.getElementById("fc-modal-save"))==null||$.addEventListener("click",async()=>{const N=document.getElementById("fc-new-front").value.trim(),L=document.getElementById("fc-new-back").value.trim(),I=document.getElementById("fc-new-reading").value.trim();if(!(!N||!L)&&e&&r.user){const y={userFront:N,targetBack:L,reading:I,category:J.activeCategory,lang:J.activeLang};await xw(e.id,y),J.customCards.push(y),l(),f.classList.remove("active")}})}},Jw=[{category:"documents",items:["パスポート","航空券(予約確認書)","ホテル予約確認書","海外旅行保険証","クレジットカード"]},{category:"electronics",items:["スマホ充電器","モバイルバッテリー","変換プラグ","イヤホン","カメラ"]},{category:"clothing",items:["着替え","下着","靴下","パジャマ","上着/羽織り"]},{category:"toiletries",items:["歯ブラシ","歯磨き粉","シャンプー","日焼け止め","常備薬"]},{category:"other",items:["現金","エコバッグ","雨具","ガイドブック"]}],Fh={documents:{label:_("catDocuments")||"📄 書類",color:"var(--color-yellow)"},electronics:{label:_("catElectronics")||"🔌 電子機器",color:"var(--color-blue)"},clothing:{label:_("catClothing")||"👕 衣類",color:"var(--color-pink)"},toiletries:{label:_("catToiletries")||"🧴 洗面用品",color:"var(--color-mint)"},other:{label:_("catOtherList")||"📦 その他",color:"#e0c3fc"}},Yw=["パスポート","航空券","航空券(予約確認書)"];let Hn=[];async function Xw(){return`
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
  `}async function Zw(){if(!ne().currentTrip){document.getElementById("cl-container").innerHTML=`<p class="empty-state">${_("noTripSelected")}</p>`;return}tb(),await im()}async function im(){const r=ne(),e=r.currentTrip;if(Hn=await Ch(e.id),Hn.length===0){let t=Jw;if(r.user){const n=await rm(r.user.uid);n&&n.checklistMaster&&(t=n.checklistMaster)}for(const n of t)for(const s of n.items){const i={name:s,category:n.category,checked:!1,important:Yw.includes(s),assignee:null};await nm(e.id,i)}Hn=await Ch(e.id)}eb()}async function eb(){const r=document.getElementById("cl-container");r.innerHTML="";for(const e of Object.keys(Fh)){const t=Fh[e],n=Hn.filter(l=>l.category===e);if(n.length===0)continue;const s=document.createElement("div");s.className="checklist-section";const i=document.createElement("div");i.className="checklist-header",i.style.backgroundColor=t.color,i.innerHTML=`<h3>${t.label}</h3><span class="toggle-icon">▼</span>`,i.addEventListener("click",()=>{const l=s.querySelector(".checklist-items");l.classList.toggle("hidden"),i.querySelector(".toggle-icon").textContent=l.classList.contains("hidden")?"▶":"▼"}),s.appendChild(i);const o=document.createElement("div");o.className="checklist-items";for(const l of n){l.checked;const h=document.createElement("div");h.className=`checklist-item ${l.checked?"checked":""}`;const f=await st(l.name)||l.name;h.innerHTML=`
        <div class="checkbox-custom" data-id="${l.id}"></div>
        <div class="item-name">
          ${l.important?'<span class="important-mark">❗</span>':""}
          ${f}
        </div>
      `,h.querySelector(".checkbox-custom").addEventListener("click",p=>{l.checked=!l.checked,l.checked?h.classList.add("checked"):h.classList.remove("checked"),Zo();const g=ne();Vw(g.currentTrip.id,l.id,{checked:l.checked}).catch(E=>{console.error("Failed to update checklist item:",E),l.checked=!l.checked,h.classList.toggle("checked"),Zo()})}),o.appendChild(h)}const c=document.createElement("div");c.className="add-item-container",c.innerHTML=`
      <input type="text" class="add-item-input" placeholder="${_("addItemPlaceholder")||"+ アイテムを追加"}">
    `,c.querySelector(".add-item-input").addEventListener("keypress",async l=>{if(l.key!=="Enter")return;const h=l.target;if(h.value.trim()){const f=ne();await nm(f.currentTrip.id,{name:h.value.trim(),category:e,checked:!1,important:!1,assignee:null}),await im()}}),o.appendChild(c),s.appendChild(o),r.appendChild(s)}Zo()}function Zo(){const r=Hn.length,e=Hn.filter(s=>s.checked).length,t=document.getElementById("cl-progress-text"),n=document.getElementById("cl-progress-fill");if(r>0&&t&&n){const s=Math.round(e/r*100);n.style.width=`${s}%`,e===r?(t.textContent=`${e}/${r} ${_("perfect")||"完璧！🎉"}`,n.style.backgroundColor="var(--color-mint)"):(t.textContent=`${e}/${r} ${_("preparing")||"準備中..."}`,n.style.backgroundColor="var(--color-pink-deep)")}}function tb(){var r;(r=document.getElementById("cl-back-btn"))==null||r.addEventListener("click",()=>oe("/"))}const nb={render:Xw,init:Zw};function rb(r,e=300,t=.6){return new Promise((n,s)=>{const i=new FileReader;i.readAsDataURL(r),i.onload=o=>{const c=new Image;c.src=o.target.result,c.onload=()=>{const l=document.createElement("canvas");let h=c.width,f=c.height;h>e&&(f=Math.round(f*e/h),h=e),l.width=h,l.height=f,l.getContext("2d").drawImage(c,0,0,h,f),n(l.toDataURL(r.type||"image/jpeg",t))},c.onerror=l=>s(l)},i.onerror=o=>s(o)})}let Js=1,Ke="plan",Pt=[];const ea=()=>({sightseeing:{icon:"🏛️",label:_("catSightseeing")||"観光"},meal:{icon:"🍽️",label:_("catMeal")||"食事"},transport:{icon:"🚌",label:_("catTransport")||"移動"},hotel:{icon:"🏨",label:_("catHotelSch")||"ホテル"},shopping:{icon:"🛒",label:_("catShopping")||"買い物"},activity:{icon:"🎭",label:_("catActivity")||"体験"},other:{icon:"✨",label:_("catOther")||"その他"}}),sb={render(){return`
      <div class="page schedule-page">
        <header class="page-header">
          <button class="btn-icon btn-back" id="btn-back-schedule">←</button>
          <h2>${_("scheduleTitle")}</h2>
        </header>

        <div class="mode-toggle">
          <button class="mode-btn ${Ke==="plan"?"active":""}" data-mode="plan">${_("planMode")}</button>
          <button class="mode-btn ${Ke==="journal"?"active":""}" data-mode="journal">${_("journalMode")}</button>
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
                ${Object.entries(ea()).map(([r,e])=>`<option value="${r}">${e.icon} ${e.label}</option>`).join("")}
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

              <textarea id="journalText" class="form-input" placeholder="${_("journalTextPlaceholder")}" style="width:100%; padding:12px; border-radius:8px; border:1px solid #ddd; margin-bottom:12px; min-height:100px;"></textarea>
              
              <div class="photo-upload mb-md">
                <label style="display:block; margin-bottom:4px; font-size:0.9rem; color:var(--text-muted);">${_("journalAddPhoto")}</label>
                <input type="file" id="journalPhotos" accept="image/*" multiple>
              </div>

              <button type="submit" class="btn btn-primary w-full mt-lg">${_("btnSave")}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="journal-cancel">${_("cancelBtn")||"キャンセル"}</button>
            </form>
          </div>
        </div>
      </div>
    `},async init(){var h,f,p;(h=document.getElementById("btn-back-schedule"))==null||h.addEventListener("click",()=>oe("/"));const e=ne().currentTrip;if(!e){alert(_("noTripSelected")||"旅行が選択されていません。"),oe("/");return}const t=new Date(e.startDate),n=new Date(e.endDate),s=Math.ceil((n-t)/(1e3*60*60*24))+1,i=document.getElementById("dayTabs");let o="";for(let g=1;g<=s;g++){const E=new Date(t);E.setDate(E.getDate()+(g-1));const P=`${E.getMonth()+1}/${E.getDate()}`;o+=`<button class="day-tab ${g===Js?"active":""}" data-day="${g}">Day ${g} (${P})</button>`}i.innerHTML=o,i.querySelectorAll(".day-tab").forEach(g=>{g.addEventListener("click",E=>{document.querySelectorAll(".day-tab").forEach(P=>P.classList.remove("active")),E.target.classList.add("active"),Js=parseInt(E.target.dataset.day),this.loadSchedules(e.id)})}),document.querySelectorAll(".mode-btn").forEach(g=>{g.addEventListener("click",E=>{document.querySelectorAll(".mode-btn").forEach(P=>P.classList.remove("active")),E.target.classList.add("active"),Ke=E.target.dataset.mode,this.renderTimeline()})});const c=document.getElementById("scheduleModal"),l=document.getElementById("journalModal");document.getElementById("addScheduleBtn").addEventListener("click",()=>{document.getElementById("scheduleItemId").value="",document.getElementById("scheduleForm").reset(),c.classList.add("active")}),document.querySelectorAll(".close-modal").forEach(g=>{g.addEventListener("click",()=>{c.classList.remove("active"),l.classList.remove("active"),document.getElementById("scheduleForm").reset(),document.getElementById("journalForm").reset()})}),(f=document.getElementById("schedule-cancel"))==null||f.addEventListener("click",()=>{document.getElementById("scheduleModal").classList.remove("active"),document.getElementById("scheduleForm").reset(),document.getElementById("scheduleItemId").value=""}),document.getElementById("scheduleForm").addEventListener("submit",async g=>{g.preventDefault();const E={tripId:e.id,day:Js,time:document.getElementById("itemTime").value,title:document.getElementById("itemTitle").value,category:document.getElementById("itemCategory").value,transport:document.getElementById("itemTransport").value,memo:document.getElementById("itemMemo").value,order:Pt.length},P=document.getElementById("scheduleItemId").value;P?await kh(e.id,P,E):await Un(e.id,E),c.classList.remove("active"),g.target.reset(),document.getElementById("scheduleItemId").value="",this.loadSchedules(e.id)}),document.querySelectorAll(".star").forEach(g=>{g.addEventListener("click",E=>{const P=E.target.getBoundingClientRect(),C=E.clientX-P.left<P.width/2,U=parseInt(E.target.dataset.rating)-(C?.5:0);document.getElementById("journalRating").value=U,document.querySelectorAll(".star").forEach(j=>{const O=parseInt(j.dataset.rating);j.classList.remove("full","half"),O<=U?j.classList.add("full"):O-.5===U&&j.classList.add("half")})})}),(p=document.getElementById("journal-cancel"))==null||p.addEventListener("click",()=>{document.getElementById("journalModal").classList.remove("active"),document.getElementById("journalForm").reset()}),document.getElementById("journalForm").addEventListener("submit",async g=>{g.preventDefault();const E=document.getElementById("journalItemId").value,P=document.getElementById("journalRating").value,x=document.getElementById("journalText").value,C=document.getElementById("journalPhotos");let j=Pt.find(O=>O.id===E).journalPhotos||[];if(C.files.length>0)try{for(let O of C.files){const $=await rb(O);j.push($)}}catch(O){console.error(O),alert("画像の処理に失敗しました。ファイルサイズが大きすぎる可能性があります。")}try{await kh(e.id,E,{journalText:x,journalRating:parseFloat(P),journalPhotos:j}),l.classList.remove("active"),document.getElementById("journalForm").reset(),this.loadSchedules(e.id)}catch(O){console.error(O),alert("保存に失敗しました。写真のサイズや枚数が多すぎる可能性があります。写真を減らして再度お試しください。")}}),this.loadSchedules(e.id)},async loadSchedules(r){Pt=(await Nw(r)).filter(t=>t.day===Js),Pt.sort((t,n)=>t.time.localeCompare(n.time)),await this.renderTimeline()},async renderTimeline(){const r=document.getElementById("timelineContainer");if(Pt.length===0){r.innerHTML=`<p class="empty-state">${Ke==="plan"?_("noScheduleHelp")||"予定がありません。追加してみましょう！":_("noJournalHelp")||"記録がありません。思い出を追加しよう！"}</p>`;return}const e=Pt.map(async i=>{const o=ea()[i.category]||ea().other,c=await st(i.title)||i.title,l=i.memo?await st(i.memo)||i.memo:"";let h="";if(Ke==="journal")if(i.journalText||i.journalRating||i.journalPhotos&&i.journalPhotos.length>0){const p=i.journalPhotos?i.journalPhotos.map(U=>`<img src="${U}" class="journal-photo">`).join(""):"",g=parseFloat(i.journalRating||0),E=Math.floor(g),P=g%1!==0,x=5-Math.ceil(g),C='<span class="star full" style="font-size:1rem; cursor:default; transform:none;">★</span>'.repeat(E)+(P?'<span class="star half" style="font-size:1rem; cursor:default; transform:none;">★</span>':"")+'<span class="star" style="font-size:1rem; cursor:default; transform:none; color:#E0E0E0;">★</span>'.repeat(x);h=`
            <div class="journal-entry">
              
              ${i.journalRating?`<span class="journal-rating">${C}</span>`:""}
              ${i.journalText?`<p class="journal-text">${i.journalText}</p>`:""}
              ${p?`<div class="journal-photos">${p}</div>`:""}
              <button class="btn small journal-add-btn edit-journal-btn" data-id="${i.id}" style="margin-top:8px; display:inline-flex;">記録を編集</button>
            </div>
          `}else h=`<button class="btn small journal-add-btn" data-id="${i.id}">記録を追加</button>`;return`
        <div class="timeline-item" data-id="${i.id}" style="position: relative; margin-bottom: 24px;">
          <!-- Delete Background -->
          <div class="swipe-delete-bg" style="position: absolute; top: 0; left: 0; bottom: 0; width: 100%; background: #ff3b30; color: white; display: flex; align-items: center; padding-left: 20px; font-weight: bold; z-index: 1; border-radius: 8px; opacity: 0; transition: opacity 0.2s;">
            削除
          </div>
          <!-- Foreground Content -->
          <div class="timeline-content-wrapper" style="position: relative; z-index: 2; background: var(--color-background); display: flex; width: 100%; transition: transform 0.2s ease-out; gap: 16px;">
            <div class="timeline-time">${i.time}</div>
            <div class="timeline-dot" data-category="${i.category}">${o.icon}</div>
            <div class="timeline-card" style="flex: 1; margin: 0;">
              <h4>${c}</h4>
              ${i.transport?`<p class="transport">🚌 ${i.transport}</p>`:""}
              ${l?`<p class="memo">${l}</p>`:""}
              ${h}
            </div>
          </div>
        </div>
      `}),t=await Promise.all(e);r.innerHTML=t.join("");const s=ne().currentTrip;r.querySelectorAll(".timeline-item").forEach(i=>{const o=i.querySelector(".timeline-content-wrapper"),c=i.dataset.id;let l=0,h=0;o.addEventListener("touchstart",f=>{Ke==="plan"&&(l=f.touches[0].clientX,o.style.transition="none")},{passive:!0}),o.addEventListener("touchmove",f=>{Ke==="plan"&&(h=f.touches[0].clientX-l,h>0&&(o.style.transform=`translateX(${h}px)`,h>20&&(i.querySelector(".swipe-delete-bg").style.opacity="1")))},{passive:!0}),o.addEventListener("click",f=>{if(Ke!=="plan"||Math.abs(h)>10)return;const p=Pt.find(g=>g.id===c);p&&(document.getElementById("scheduleItemId").value=p.id,document.getElementById("itemTime").value=p.time,document.getElementById("itemTitle").value=p.title,document.getElementById("itemCategory").value=p.category,document.getElementById("itemTransport").value=p.transport||"",document.getElementById("itemMemo").value=p.memo||"",document.getElementById("scheduleModal").classList.add("active"))}),o.addEventListener("touchend",async f=>{Ke==="plan"&&(o.style.transition="transform 0.2s ease-out",h>100?(o.style.transform="translateX(100vw)",confirm(_("confirmDelete")||"本当に削除しますか？")?(await Lw(s.id,c),this.loadSchedules(s.id)):(o.style.transform="translateX(0)",i.querySelector(".swipe-delete-bg").style.opacity="0")):(o.style.transform="translateX(0)",i.querySelector(".swipe-delete-bg").style.opacity="0"),h=0)})}),Ke==="journal"&&r.querySelectorAll(".journal-add-btn, .edit-journal-btn").forEach(i=>{i.addEventListener("click",o=>{const c=o.target.dataset.id,l=Pt.find(f=>f.id===c);document.getElementById("journalItemId").value=c,document.getElementById("journalText").value=l.journalText||"",document.getElementById("journalPhotos").value="",document.getElementById("journalRating").value=l.journalRating||0;const h=parseFloat(l.journalRating||0);document.querySelectorAll("#journalForm .star").forEach(f=>{const p=parseInt(f.dataset.rating);f.classList.remove("full","half"),f.style.color="",p<=h?f.classList.add("full"):p-.5===h&&f.classList.add("half")}),document.getElementById("journalModal").classList.add("active")})})}};let Zt="",Ct=[];const jh=[_("rq1")||"首都・人口・面積・公用語は？",_("rq2")||"現地通貨は？",_("rq3")||"現地の人の性格は？",_("rq4")||"食文化は？",_("rq5")||"コンビニなどの便利なお店は？",_("rq6")||"移動手段はどう違う？",_("rq7")||"家やトイレはどんな感じ？",_("rq8")||"実際に行きたい場所3つ",_("rq9")||"食べたいもの3つ"],ib={render(){return`
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
    `},async init(){var o;const e=ne().currentTrip;if(!e){document.getElementById("rs-list").innerHTML=`<p class="empty-state">${_("noTripSelected")||"旅行が選択されていません。"}</p>`;return}const t=e.destinations||[],n=[...new Set(t.map(c=>c.country).filter(Boolean))];if(n.length===0){document.getElementById("rs-list").innerHTML=`<p class="empty-state">${_("noDestinationsSet")||"行き先が設定されていません。<br>旅行の編集から行き先を追加してください。"}</p>`;return}Zt=n[0];const s=document.getElementById("rs-country-tabs");s.style.display="flex",s.style.justifyContent="center",s.style.gap="16px",s.style.marginBottom="16px",s.innerHTML=n.map(c=>{const l=Qr.find(f=>f.code===c);let h="🏳️";if(l)h=l.flag;else{const f=Bc(c);h=Vi(f)}return`<span class="tab flag-tab" data-country="${c}" style="font-size: 2.5rem; cursor: pointer; transition: opacity 0.2s; opacity: ${c===Zt?"1":"0.4"};">${h}</span>`}).join(""),s.addEventListener("click",c=>{const l=c.target.closest(".tab");l&&(document.querySelectorAll("#rs-country-tabs .tab").forEach(h=>{h.style.opacity="0.4",h.classList.remove("active")}),l.style.opacity="1",l.classList.add("active"),Zt=l.dataset.country,this.loadNotes(e.id))});const i=document.getElementById("rs-modal");document.getElementById("rs-add-btn").addEventListener("click",()=>{document.getElementById("rs-modal-title").textContent=_("addNote")||"項目の追加",document.getElementById("rs-note-id").value="",document.getElementById("rs-question").value="",i.classList.add("active")}),document.getElementById("rs-modal-close").addEventListener("click",()=>{i.classList.remove("active")}),i.addEventListener("click",c=>{c.target===i&&i.classList.remove("active")}),document.getElementById("rs-form").addEventListener("submit",async c=>{c.preventDefault();const l=document.getElementById("rs-question").value.trim(),h=document.getElementById("rs-note-id").value;l&&(h?await Vh(e.id,h,{question:l}):await xh(e.id,{country:Zt,question:l,answer:"",order:Ct.length}),i.classList.remove("active"),await this.loadNotes(e.id))}),(o=document.getElementById("rs-back-btn"))==null||o.addEventListener("click",()=>oe("/")),await this.loadNotes(e.id)},async loadNotes(r){if(Ct=(await Dh(r)).filter(t=>t.country===Zt),Ct.length===0){for(let n=0;n<jh.length;n++)await xh(r,{country:Zt,question:jh[n],answer:"",order:n});Ct=(await Dh(r)).filter(n=>n.country===Zt)}Ct.sort((t,n)=>(t.order||0)-(n.order||0)),await this.renderNotes(r)},async renderNotes(r){const e=document.getElementById("rs-list");if(Ct.length===0){e.innerHTML=`<p class="empty-state">${_("noResearch")||"項目がありません。"}</p>`;return}const t=Ct.map(async i=>{let o=i.question;o&&o.match(/^rq[1-9]$/)&&(o=_(o));const c=await st(o)||o,l=i.answer?await st(i.answer)||i.answer:"";return`
        <div class="rs-card" data-id="${i.id}">
          <div class="rs-card-header">
            <h3 class="rs-question">${c}</h3>
            <div class="rs-actions">
              <button class="btn-icon rs-edit-q" data-id="${i.id}">✏️</button>
              <button class="btn-icon rs-delete-q" data-id="${i.id}">✖</button>
            </div>
          </div>
          <div class="rs-card-body">
            <textarea class="rs-answer-input" data-id="${i.id}" placeholder="${_("researchAnswer")||"調べてわかったこと..."}">${i.answer||""}</textarea>
            ${l!==(i.answer||"")&&l?`<div class="rs-answer-translated">💡 ${_("translationLabel")||"翻訳"}: ${l}</div>`:""}
          </div>
        </div>
      `}),n=await Promise.all(t);e.innerHTML=n.join(""),e.querySelectorAll(".rs-edit-q").forEach(i=>{i.addEventListener("click",o=>{const c=o.target.closest(".rs-edit-q").dataset.id,l=Ct.find(h=>h.id===c);l&&(document.getElementById("rs-modal-title").textContent=_("editNote")||"項目の編集",document.getElementById("rs-note-id").value=l.id,document.getElementById("rs-question").value=l.question,document.getElementById("rs-modal").classList.add("active"))})}),e.querySelectorAll(".rs-delete-q").forEach(i=>{i.addEventListener("click",async o=>{const c=o.target.closest(".rs-delete-q").dataset.id;confirm(_("confirmDelete")||"この項目を削除しますか？")&&(await Ow(r,c),await this.loadNotes(r))})});let s;e.querySelectorAll(".rs-answer-input").forEach(i=>{i.addEventListener("input",o=>{clearTimeout(s);const c=o.target.dataset.id,l=o.target.value;s=setTimeout(async()=>{await Vh(r,c,{answer:l})},1e3)})})}},Bh={food:{icon:"🍽️",label:_("catFood")||"食事"},transport:{icon:"🚕",label:_("catTransport")||"交通"},shopping:{icon:"🛒",label:_("catShopping")||"買い物"},stay:{icon:"🏨",label:_("catStay")||"宿泊"},activity:{icon:"🎭",label:_("catActivity")||"アクティビティ"},other:{icon:"📦",label:_("catOther")||"その他"}},ob={render(){return`
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
                                    ${Object.entries(Bh).map(([r,e])=>`<option value="${r}">${e.icon} ${e.label}</option>`).join("")}
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary w-full mt-lg">${_("saveBtn")||"保存する ✨"}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="budget-cancel">${_("cancelBtn")||"キャンセル"}</button>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){var f;(f=document.getElementById("btn-back-budget"))==null||f.addEventListener("click",()=>oe("/"));const e=ne().currentTripId,t=document.getElementById("budget-main");if(!e){t.innerHTML=`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>${_("noTripSelected")||"旅行が選択されていません。"}</p>
                    <button class="btn-primary" onclick="window.location.hash='#/'">${_("backToHome")||"ホームに戻る"}</button>
                </div>`;return}let n=[];const s=async()=>{var E;if(n.length===0){t.innerHTML=`
                    <div class="empty-state">
                        <div class="empty-icon">👛</div>
                        <p>${_("noBudgetItems")||"まだ支出がありません。<br>右下の＋ボタンから追加しよう！"}</p>
                    </div>`;return}const p=n.reduce((P,x)=>P+Number(x.amount),0);let g=`
                <div class="budget-summary card mb-md">
                    <div class="text-center mb-sm">
                        <div class="text-sm text-muted">${_("totalExpense")||"合計支出"}</div>
                        <div class="text-xl font-bold">¥${p.toLocaleString()}</div>
                    </div>
                </div>
                <div class="budget-list">
                    <h3>${_("budgetListTitle")||"支出リスト 📝"}</h3>`;for(const P of n){const x=await st(P.title)||"無題",C=P.currency||"¥";g+=`
                    <div class="budget-item card" data-id="${P.id}">
                        <div class="budget-icon">${((E=Bh[P.category])==null?void 0:E.icon)||"📦"}</div>
                        <div class="budget-details">
                            <div class="budget-title">${x}</div>
                        </div>
                        <div class="budget-amount">${C}${Number(P.amount).toLocaleString()}</div>
                        <div class="item-actions">
                            <button class="btn-icon small btn-delete-budget" data-id="${P.id}">🗑️</button>
                        </div>
                    </div>
                `}g+="</div>",t.innerHTML=g,document.querySelectorAll(".btn-delete-budget").forEach(P=>{P.addEventListener("click",async x=>{const C=x.target.closest(".btn-delete-budget").dataset.id;confirm(_("confirmDelete")||"本当に削除しますか？")&&(await Mw(e,C),n=await Nh(e),s())})})},i=async()=>{try{n=await Nh(e),await s()}catch(p){console.error(p),t.innerHTML=`<p>${_("errorOccurred")||"エラーが発生しました😢"}</p>`}};await i();const o=document.getElementById("budget-modal"),c=document.getElementById("budget-fab"),l=document.getElementById("budget-cancel"),h=document.getElementById("budget-form");c.addEventListener("click",()=>{o.classList.add("active")}),l.addEventListener("click",()=>{o.classList.remove("active"),h.reset()}),o.addEventListener("click",p=>{p.target===o&&(o.classList.remove("active"),h.reset())}),h.addEventListener("submit",async p=>{p.preventDefault();const g={tripId:e,amount:Number(document.getElementById("budget-amount").value),title:document.getElementById("budget-title").value,category:document.getElementById("budget-category").value,currency:document.getElementById("budget-currency").value,date:new Date().toISOString()};await Lh(g),o.classList.remove("active"),h.reset(),await i()}),l.addEventListener("click",()=>{o.classList.remove("active"),h.reset()}),o.addEventListener("click",p=>{p.target===o&&(o.classList.remove("active"),h.reset())}),h.addEventListener("submit",async p=>{p.preventDefault();const g={tripId:e,amount:Number(document.getElementById("budget-amount").value),title:document.getElementById("budget-title").value,category:document.getElementById("budget-category").value,currency:document.getElementById("budget-currency").value,date:new Date().toISOString()};await Lh(g),o.classList.remove("active"),h.reset(),await i()})}},en=()=>({police:{icon:"🚨",label:_("catPolice")||"警察・消防・救急"},hotel:{icon:"🏨",label:_("catHotel")||"ホテルの連絡先"},embassy:{icon:"🏛️",label:_("catEmbassy")||"大使館の連絡先"},insurance:{icon:"🛡️",label:_("catInsurance")||"海外旅行保険"}}),ab={render(){return`
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
        `},async init(){var h;(h=document.getElementById("btn-back-emergency"))==null||h.addEventListener("click",()=>oe("/"));const e=ne().currentTripId,t=document.getElementById("emergency-main");if(!e){t.innerHTML=`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>${_("noTripSelected")||"旅行が選択されていません。"}</p>
                </div>`;return}let n=[];const s=async()=>{if(n.length===0)t.innerHTML=Object.keys(en()).map(f=>`
                    <div class="emergency-section card">
                        <div class="section-header">
                            <h3>${en()[f].icon} ${en()[f].label}</h3>
                            <button class="btn-add-small" data-cat="${f}">＋ ${_("addSmallBtn")||"追加"}</button>
                        </div>
                        <div class="empty-text">${_("noInfo")||"情報がありません。"}</div>
                    </div>
                `).join("");else{const f=Object.keys(en()).map(async g=>{const E=n.filter(C=>C.category===g),P=E.map(async C=>{const U=await st(C.title)||C.title,j=C.info?await st(C.info)||C.info:"";return`
                                    <div class="emergency-card">
                                        <h4>${U}</h4>
                                        ${j?`<p class="em-info">${j.replace(/\\n/g,"<br>")}</p>`:""}
                                        ${C.phone?`
                                            <a href="tel:${C.phone}" class="btn-tel">
                                                📞 ${_("callBtn")||"電話をかける"} (${C.phone})
                                            </a>
                                        `:""}
                                    </div>
                        `}),x=await Promise.all(P);return`
                        <div class="emergency-section card">
                            <div class="section-header">
                                <h3>${en()[g].icon} ${en()[g].label}</h3>
                                <button class="btn-add-small" data-cat="${g}">＋ ${_("addSmallBtn")||"追加"}</button>
                            </div>
                            <div class="emergency-list">
                                ${E.length===0?`<div class="empty-text">${_("noInfo")||"情報がありません。"}</div>`:x.join("")}
                            </div>
                        </div>
                    `}),p=await Promise.all(f);t.innerHTML=p.join("")}document.querySelectorAll(".btn-add-small").forEach(f=>{f.addEventListener("click",p=>{const g=p.target.getAttribute("data-cat");document.getElementById("em-category").value=g,document.getElementById("modal-title").innerText=`${en()[g].label}の追加 ✏️`,document.getElementById("emergency-modal").classList.add("active")})})},i=async()=>{try{n=await Fw(e),await s()}catch(f){console.error(f),t.innerHTML="<p>エラーが発生しました😢</p>"}};await i();const o=document.getElementById("emergency-modal"),c=document.getElementById("em-cancel");o.addEventListener("click",f=>{f.target===o&&o.classList.remove("active")});const l=document.getElementById("emergency-form");c.addEventListener("click",()=>{o.classList.remove("active"),l.reset()}),l.addEventListener("submit",async f=>{f.preventDefault();const p={tripId:e,title:document.getElementById("em-title").value,phone:document.getElementById("em-phone").value,info:document.getElementById("em-info").value,category:document.getElementById("em-category").value};await jw(p),o.classList.remove("active"),l.reset(),await i()})}},cb={render(){return`
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
                                <label>${_("omiyageRecipient")||"誰に渡す？ (必須)"}</label>
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
                            <button type="submit" class="btn btn-primary w-full mt-lg">${_("saveBtn")||"保存する ✨"}</button>
   <button type="button" class="btn btn-secondary w-full mt-sm" id="omi-cancel">${_("cancelBtn")||"キャンセル"}</button>
                        </form>
                    </div>
                </div>
            </div>
        `},async init(){var p;(p=document.getElementById("btn-back-omiyage"))==null||p.addEventListener("click",()=>oe("/"));const e=ne().currentTripId,t=document.getElementById("omiyage-main"),n=document.getElementById("omiyage-progress-container");if(!e){t.innerHTML=`
                <div class="empty-state">
                    <div class="empty-icon">😢</div>
                    <p>${_("noTripSelected")||"旅行が選択されていません。"}</p>
                </div>`,n.style.display="none";return}let s=[];const i=async()=>{if(s.length===0){n.innerHTML=`<p>${_("noOmiyageProgress")||"まだお土産リストがありません。"}</p>`,t.innerHTML=`
                    <div class="empty-state">
                        <div class="empty-icon">🎁</div>
                        <p>${_("noOmiyageList")||"右下の＋ボタンからお土産リストを追加しよう！"}</p>
                    </div>`;return}const g=s.length,E=s.filter(U=>U.purchased).length;n.innerHTML=`
                <h3>${_("progressStatus")||"進捗状況 💪"}</h3>
                <div class="progress-text">${E} / ${g} ${_("purchased")||"購入済み"}</div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${E/g*100}%"></div>
                </div>
            `;const P={};for(const U of s){const j=U.recipientName;P[j]||(P[j]=[]),P[j].push(U)}const x=Object.keys(P).map(async U=>{const j=P[U],O=j.reduce((L,I)=>L+Number(I.budget||0),0),$=j.map(async L=>{const I=await st(L.itemName)||_("undecided")||"未定";return`
                                <li class="omiyage-item ${L.purchased?"purchased":""}" data-id="${L.id}">
                                    <label class="checkbox-wrapper">
                                        <input type="checkbox" class="omiyage-check" data-id="${L.id}" ${L.purchased?"checked":""}>
                                        <span class="checkmark"></span>
                                        <div class="omiyage-details">
                                            <div class="omiyage-name">${I}</div>
                                            ${L.budget?`<div class="omiyage-budget">¥${Number(L.budget).toLocaleString()}</div>`:""}
                                        </div>
                                    </label>
                                    <button class="btn-delete" data-id="${L.id}">🗑️</button>
                                </li>
                    `}),N=await Promise.all($);return`
                    <div class="omiyage-recipient card">
                        <div class="recipient-header">
                            <h3>👤 ${U}</h3>
                            <span class="recipient-budget">${_("budgetLabel")||"予算"}: ¥${O.toLocaleString()}</span>
                        </div>
                        <ul class="omiyage-list">
                            ${N.join("")}
                        </ul>
                    </div>
                `}),C=await Promise.all(x);t.innerHTML=C.join(""),document.querySelectorAll(".omiyage-check").forEach(U=>{U.addEventListener("change",async j=>{const O=j.target.getAttribute("data-id"),$=j.target.checked,N=s.find(L=>L.id===O);N&&(N.purchased=$,await qw(O,{purchased:$}),i())})}),document.querySelectorAll(".btn-delete").forEach(U=>{U.addEventListener("click",async j=>{if(confirm(_("confirmDelete")||"本当に削除しますか？")){const O=j.target.getAttribute("data-id");await zw(O),await o()}})})},o=async()=>{try{s=await Uw(e),await i()}catch(g){console.error(g),t.innerHTML="<p>エラーが発生しました😢</p>"}};await o();const c=document.getElementById("omiyage-modal"),l=document.getElementById("omiyage-fab"),h=document.getElementById("omi-cancel"),f=document.getElementById("omiyage-form");l.addEventListener("click",()=>{c.classList.add("active")}),h.addEventListener("click",()=>{c.classList.remove("active"),f.reset()}),f.addEventListener("submit",async g=>{g.preventDefault();const E={tripId:e,recipientName:document.getElementById("omi-recipient").value,itemName:document.getElementById("omi-item").value,budget:Number(document.getElementById("omi-budget").value)||0,purchased:!1};await $w(E),c.classList.remove("active"),f.reset(),await o()})}},lb=["🐱","🐶","🐻","🐰","🦊","🐼","🐨","🦁","🐯","🐵","🐸","🦄","🌸","🌻","⭐","🌈","❤️","💎"];function Uh(r={},e={}){const t=r.country||"";let n=t!==""&&!Qr.some(c=>c.code===t||Object.values(c.name).includes(t)),s=n?"OTHER":t;const i=typeof ui=="function"?ui():ne().language||"ja";if(!n&&t){const c=Qr.find(l=>l.code===t||Object.values(l.name).includes(t));c&&(s=c.code)}const o=Qr.map(c=>{const l=c.name[i]||c.name.ja;return`<option value="${c.code}" ${c.code===s?"selected":""}>${c.flag} ${l}</option>`}).join("");return`
    <div class="form-row destination-item mb-sm" style="display: flex; align-items: center; gap: 4px; flex-wrap: nowrap;">
      <select class="form-input flex-1 dest-country-select" style="min-width: 0; padding: 12px 4px; margin-bottom: 0;">
        <option value="" disabled ${s?"":"selected"}>${e.country||"国を選択"}</option>
        ${o}
      </select>
      <input type="text" class="form-input flex-1 dest-country-other" placeholder="${_("countryPlaceholder")||"国名を入力"}" value="${n?t:""}" style="min-width: 0; padding: 12px 4px; margin-bottom: 0; ${n?"":"display:none;"}" />
      <input type="text" class="form-input flex-1 dest-city" placeholder="${e.city||"都市"}" value="${r.city||""}" style="min-width: 0; padding: 12px 4px; margin-bottom: 0;" />
      <button type="button" class="btn-icon btn-remove" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
    </div>
  `}const om={render(){const r=Ul()==="/trip/edit",{currentTrip:e}=ne(),t=r&&e?e:{title:"",startDate:"",endDate:"",destinations:[{country:"",city:""}],members:[{icon:"🐱",name:""}]};return`
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
              ${t.destinations.map(n=>Uh(n,{country:_("countryPlaceholder"),city:_("cityPlaceholder")})).join("")}
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
              ${lb.map(n=>`<button type="button" class="emoji-option">${n}</button>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `},init(){var o,c,l,h,f;const r=Ul()==="/trip/edit",{currentTrip:e}=ne(),t=document.getElementById("destinations-list");(o=document.getElementById("btn-add-dest"))==null||o.addEventListener("click",()=>{const p=document.createElement("div");p.innerHTML=Uh({},{country:_("countryPlaceholder"),city:_("cityPlaceholder")}),t.appendChild(p.firstElementChild)}),t==null||t.addEventListener("click",p=>{p.target.classList.contains("btn-remove")&&t.querySelectorAll(".destination-item").length>1&&p.target.closest(".destination-item").remove()}),t==null||t.addEventListener("change",p=>{if(p.target.classList.contains("dest-country-select")){const E=p.target.closest(".destination-item").querySelector(".dest-country-other");p.target.value==="OTHER"?(E.style.display="block",E.focus()):(E.style.display="none",E.value="")}});const n=document.getElementById("members-list");(c=document.getElementById("btn-add-member"))==null||c.addEventListener("click",()=>{const p=document.createElement("div");p.className="form-row member-item mb-sm",p.style.display="flex",p.style.alignItems="center",p.style.gap="4px",p.style.flexWrap="nowrap",p.innerHTML=`
        <button class="btn-emoji-picker" style="flex-shrink: 0; padding: 8px 12px;">😊</button>
        <input type="text" class="form-input flex-1 member-name" placeholder="${_("memberNamePlaceholder")}" style="min-width: 0; margin-bottom: 0; padding: 12px 4px;" />
        <button class="btn-icon btn-remove-member" style="flex-shrink: 0; padding: 8px; margin-bottom: 0;">✖</button>
      `,n.appendChild(p)}),n==null||n.addEventListener("click",p=>{p.target.classList.contains("btn-remove-member")&&n.querySelectorAll(".member-item").length>1&&p.target.closest(".member-item").remove()});const s=document.getElementById("emoji-modal");let i=null;n==null||n.addEventListener("click",p=>{p.target.classList.contains("btn-emoji-picker")&&(i=p.target,s.classList.add("active"))}),s==null||s.addEventListener("click",p=>{p.target===s&&s.classList.remove("active")}),document.querySelectorAll(".emoji-option").forEach(p=>{p.addEventListener("click",()=>{i&&(i.textContent=p.textContent),s.classList.remove("active")})}),(l=document.getElementById("btn-form-back"))==null||l.addEventListener("click",()=>oe("/")),(h=document.getElementById("btn-save-trip"))==null||h.addEventListener("click",async p=>{const g=p.target;g.disabled=!0,g.textContent=_("btnSaving");const E=document.getElementById("trip-title").value,P=document.getElementById("trip-start").value,x=document.getElementById("trip-end").value,{user:C}=ne();if(!C||!C.uid){alert(_("authError")),g.disabled=!1,g.textContent=_("btnSave");return}const U=Array.from(t.querySelectorAll(".destination-item")).map($=>{const N=$.querySelector(".dest-country-select"),L=$.querySelector(".dest-country-other");return{country:N.value==="OTHER"?L.value:N.value,city:$.querySelector(".dest-city").value}}),j=Array.from(n.querySelectorAll(".member-item")).map($=>({icon:$.querySelector(".btn-emoji-picker").textContent,name:$.querySelector(".member-name").value})),O={title:E,startDate:P,endDate:x,destinations:U,members:j};try{const $=setTimeout(()=>{var I;(I=document.getElementById("btn-save-trip"))!=null&&I.disabled&&oe("/")},1e4);r&&e?await Cw(C.uid,e.id,O):await Pw(C.uid,O);const N=await Na(C.uid);We({trips:N});const L=r&&e&&N.find(I=>I.id===e.id)||N[0];We({currentTrip:L,currentTripId:L==null?void 0:L.id}),L&&localStorage.setItem("currentTripId",L.id),clearTimeout($),oe("/")}catch($){console.error("Error saving trip:",$),g.textContent=_("errorTryAgain")||"❌ エラー。もう一度お試しください",g.disabled=!1}}),r&&((f=document.getElementById("btn-delete-trip"))==null||f.addEventListener("click",async()=>{var p;if(confirm(_("confirmDeleteTrip")||`本当にこの旅行を削除しますか？
削除すると、すべてのデータ（単語帳、チェックリストなど）が消去され元に戻せません。`)){const{user:g}=ne();try{await kw(g.uid,e.id);const E=await Na(g.uid);We({trips:E,currentTrip:E[0]||null,currentTripId:((p=E[0])==null?void 0:p.id)||null}),E.length>0?localStorage.setItem("currentTripId",E[0].id):localStorage.removeItem("currentTripId"),oe("/")}catch(E){console.error("Error deleting trip:",E),alert(_("deleteFailed")||"削除に失敗しました。")}}}))}},ub=[{category:"documents",label:"📄 書類",items:["パスポート","航空券(予約確認書)","ホテル予約確認書","海外旅行保険証","クレジットカード"]},{category:"electronics",label:"🔌 電子機器",items:["スマホ充電器","モバイルバッテリー","変換プラグ","イヤホン","カメラ"]},{category:"clothing",label:"👕 衣類",items:["着替え","下着","靴下","パジャマ","上着/羽織り"]},{category:"toiletries",label:"🧴 洗面用品",items:["歯ブラシ","歯磨き粉","シャンプー","日焼け止め","常備薬"]},{category:"other",label:"📦 その他",items:["現金","エコバッグ","雨具","ガイドブック"]}];let Lr=[];const hb={async render(){const{user:r}=ne();if(!r||r.isAnonymous)return`
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
      `;const e=await rm(r.uid);e&&e.checklistMaster?Lr=e.checklistMaster:Lr=JSON.parse(JSON.stringify(ub));const t=Lr.map((n,s)=>`
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
    `},init(){var e,t;(e=document.getElementById("btn-back-settings"))==null||e.addEventListener("click",()=>oe("/")),(t=document.getElementById("btn-back-settings-main"))==null||t.addEventListener("click",()=>oe("/"));const r=document.getElementById("btn-save-settings");r&&r.addEventListener("click",async()=>{const{user:n}=ne();if(!n||n.isAnonymous)return;r.disabled=!0,r.textContent=_("btnSaving")||"保存中...",document.querySelectorAll(".master-textarea").forEach(i=>{const o=i.getAttribute("data-index"),l=i.value.split(`
`).map(h=>h.trim()).filter(h=>h);Lr[o].items=l});try{await Bw(n.uid,{checklistMaster:Lr}),r.textContent=_("savedExclamation")||"保存しました！",setTimeout(()=>{r.disabled=!1,r.textContent=_("saveBtn")||"保存する"},2e3)}catch(i){alert((_("saveFailed")||"保存に失敗しました: ")+i.message),r.disabled=!1,r.textContent=_("saveBtn")||"保存する"}})}};function db(r={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:s,onRegisteredSW:i,onRegisterError:o}=r;let c,l;const h=async(p=!0)=>{await l};async function f(){if("serviceWorker"in navigator){if(c=await sm(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/tabi-shiori/sw.js",{scope:"/tabi-shiori/",type:"classic"})).catch(p=>{o==null||o(p)}),!c)return;c.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),c.addEventListener("installed",p=>{p.isUpdate||n==null||n()}),c.register({immediate:e}).then(p=>{i?i("/tabi-shiori/sw.js",p):s==null||s(p)}).catch(p=>{o==null||o(p)})}}return l=f(),h}He("/",Ww);He("/flashcard",Qw);He("/checklist",nb);He("/schedule",sb);He("/research",ib);He("/budget",ob);He("/emergency",ab);He("/omiyage",cb);He("/trip/new",om);He("/trip/edit",om);He("/settings",hb);function fb(){const r=document.getElementById("app");r.innerHTML=`
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
  `}async function pb(){var s,i,o;"serviceWorker"in navigator&&db({immediate:!0}),fb(),document.querySelectorAll(".nav-item").forEach(c=>{c.addEventListener("click",l=>{l.preventDefault();const h=c.getAttribute("data-route");oe(h)})});const r=document.getElementById("drawer-overlay"),e=document.getElementById("share-overlay");document.getElementById("btn-menu").addEventListener("click",()=>{r.classList.add("active")}),document.getElementById("btn-share").addEventListener("click",()=>{e.classList.add("active"),mb()}),[r,e].forEach(c=>{c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")})}),document.querySelectorAll(".drawer-item[data-route]").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-route");r.classList.remove("active"),oe(l)})}),(s=document.getElementById("btn-drawer-google"))==null||s.addEventListener("click",async()=>{const{user:c}=ne();if(!(c&&!c.isAnonymous))try{c&&c.isAnonymous?await tm():await em(),window.location.reload()}catch(l){l.code!=="auth/popup-closed-by-user"&&l.code!=="auth/cancelled-popup-request"&&alert("ログインに失敗しました: "+l.message)}}),(i=document.getElementById("btn-drawer-logout"))==null||i.addEventListener("click",async()=>{try{await Rw(),window.location.reload()}catch(c){alert("ログアウトに失敗しました: "+c.message)}}),(o=document.getElementById("btn-drawer-portal"))==null||o.addEventListener("click",()=>{We({currentTripId:null,currentTrip:null}),document.getElementById("drawer-overlay").classList.remove("active"),oe("/",!0,!0)}),document.querySelectorAll(".btn-lang").forEach(c=>{c.addEventListener("click",()=>{const l=c.getAttribute("data-lang");$h(l),window.location.reload()})});try{const c=await Sw();We({user:c});let l=[];c&&(l=await Na(c.uid)),We({trips:l}),We({currentTripId:null,currentTrip:null}),am(l)}catch(c){console.error("Initial data load failed:",c)}const t=document.getElementById("loading-screen");t&&t.classList.add("hidden");const n=window.location.hash.replace("#","")||"/";oe(n,!1)}function am(r){var n;const e=document.getElementById("drawer-trips");if(!e)return;const t=ne();e.innerHTML=`
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
  `,e.querySelectorAll(".drawer-trip-item[data-trip-id]").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-trip-id"),o=r.find(c=>c.id===i);o&&(We({currentTripId:i,currentTrip:o}),localStorage.setItem("currentTripId",i),document.getElementById("drawer-overlay").classList.remove("active"),oe("/",!0,!0))})}),(n=e.querySelector(".drawer-trip-new"))==null||n.addEventListener("click",()=>{document.getElementById("drawer-overlay").classList.remove("active"),oe("/trip/new")})}function mb(){var n;const r=ne(),e=document.getElementById("share-content");if(!r.currentTrip){e.innerHTML=`<p class="empty-state-text">${_("noTripAlert")}</p>`;return}const t=r.currentTrip.shareId;if(t){const s=`${window.location.origin}/share/${t}`;e.innerHTML=`
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
    `}function cm(){const{currentTrip:r,user:e}=ne(),t=document.getElementById("bottom-nav"),n=document.querySelector(".header-actions"),s=document.getElementById("btn-drawer-google"),i=document.getElementById("drawer-google-text"),o=document.getElementById("btn-drawer-logout"),c=document.getElementById("drawer-logout-divider");r?(t&&t.classList.remove("hidden"),n&&n.classList.remove("hidden")):(t&&t.classList.add("hidden"),n&&n.classList.add("hidden")),e&&(e.isAnonymous?(i&&(i.textContent=_("googleLink")),s&&(s.style.color="inherit"),o&&(o.style.display="none"),c&&(c.style.display="none")):(i&&(i.textContent=_("googleLinked")),s&&(s.style.color="var(--text-muted)"),o&&(o.style.display="flex"),c&&(c.style.display="block")))}La("trips",r=>{am(r)});La("currentTrip",()=>{cm()});document.addEventListener("DOMContentLoaded",()=>{pb().then(()=>cm())});
