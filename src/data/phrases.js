export const CATEGORIES = [
  { id: 'greeting', label: '挨拶', emoji: '👋' },
  { id: 'thanks', label: '感謝', emoji: '🙏' },
  { id: 'shopping', label: '買い物', emoji: '🛍️' },
  { id: 'restaurant', label: 'レストラン', emoji: '🍽️' },
  { id: 'transport', label: '交通', emoji: '🚌' },
  { id: 'emergency', label: '緊急', emoji: '🆘' },
  { id: 'basic', label: '基本', emoji: '💬' },
];

export const PHRASES = {
  en: {
    greeting: [
      { phrase: 'Hello', reading: 'ハロー', jp: 'こんにちは', th: 'สวัสดี', en: 'Hello' },
      { phrase: 'Good morning', reading: 'グッド モーニング', jp: 'おはようございます', th: 'อรุณสวัสดิ์', en: 'Good morning' },
      { phrase: 'Good evening', reading: 'グッド イブニング', jp: 'こんばんは', th: 'สวัสดีตอนเย็น', en: 'Good evening' },
      { phrase: 'Good night', reading: 'グッド ナイト', jp: 'おやすみなさい', th: 'ราตรีสวัสดิ์', en: 'Good night' },
      { phrase: 'How are you?', reading: 'ハウ アー ユー？', jp: 'お元気ですか？', th: 'สบายดีไหม?', en: 'How are you?' },
    ],
    thanks: [
      { phrase: 'Thank you', reading: 'サンキュー', jp: 'ありがとうございます', th: 'ขอบคุณ', en: 'Thank you' },
      { phrase: 'Thanks a lot', reading: 'サンクス ア ロット', jp: '本当にありがとうございます', th: 'ขอบคุณมาก', en: 'Thanks a lot' },
      { phrase: 'You\'re welcome', reading: 'ユア ウェルカム', jp: 'どういたしまして', th: 'ด้วยความยินดี', en: 'You\'re welcome' },
      { phrase: 'No problem', reading: 'ノー プロブレム', jp: '問題ありません', th: 'ไม่มีปัญหา', en: 'No problem' },
      { phrase: 'I appreciate it', reading: 'アイ アプリシエイト イット', jp: '感謝します', th: 'ฉันซาบซึ้ง', en: 'I appreciate it' },
    ],
    shopping: [
      { phrase: 'How much is this?', reading: 'ハウ マッチ イズ ディス？', jp: 'これはいくらですか？', th: 'อันนี้ราคาเท่าไหร่?', en: 'How much is this?' },
      { phrase: 'Can I pay by credit card?', reading: 'キャン アイ ペイ バイ クレジット カード？', jp: 'クレジットカードは使えますか？', th: 'จ่ายด้วยบัตรเครดิตได้ไหม?', en: 'Can I pay by credit card?' },
      { phrase: 'I\'ll take this', reading: 'アイル テイク ディス', jp: 'これを買います', th: 'ฉันเอาอันนี้', en: 'I\'ll take this' },
      { phrase: 'Can you give me a discount?', reading: 'キャン ユー ギブ ミー ア ディスカウント？', jp: '安くしてもらえませんか？', th: 'ลดราคาให้หน่อยได้ไหม?', en: 'Can you give me a discount?' },
      { phrase: 'Do you have this in a different color?', reading: 'ドゥー ユー ハブ ディス イン ア ディファレント カラー？', jp: 'これの別の色はありますか？', th: 'มีสีอื่นไหม?', en: 'Do you have this in a different color?' },
    ],
    restaurant: [
      { phrase: 'Table for two, please', reading: 'テーブル フォー トゥー プリーズ', jp: '2人です', th: 'ขอโต๊ะสำหรับสองคนครับ/ค่ะ', en: 'Table for two, please' },
      { phrase: 'Can I have the menu?', reading: 'キャン アイ ハブ ザ メニュー？', jp: 'メニューを見せてください', th: 'ขอเมนูหน่อยครับ/ค่ะ', en: 'Can I have the menu?' },
      { phrase: 'I\'d like to order', reading: 'アイド ライク トゥー オーダー', jp: '注文をお願いします', th: 'ขอสั่งอาหารครับ/ค่ะ', en: 'I\'d like to order' },
      { phrase: 'Check, please', reading: 'チェック プリーズ', jp: 'お会計をお願いします', th: 'เช็คบิลด้วยครับ/ค่ะ', en: 'Check, please' },
      { phrase: 'Water, please', reading: 'ウォーター プリーズ', jp: 'お水をください', th: 'ขอน้ำเปล่าครับ/ค่ะ', en: 'Water, please' },
    ],
    transport: [
      { phrase: 'Where is the train station?', reading: 'ウェア イズ ザ トレイン ステーション？', jp: '駅はどこですか？', th: 'สถานีรถไฟอยู่ที่ไหน?', en: 'Where is the train station?' },
      { phrase: 'I want to go here', reading: 'アイ ウォント トゥー ゴー ヒア', jp: 'ここに行きたいです', th: 'อยากไปที่นี่', en: 'I want to go here' },
      { phrase: 'Does this bus go to the airport?', reading: 'ダズ ディス バス ゴー トゥー ザ エアポート？', jp: 'このバスは空港に行きますか？', th: 'รถบัสคันนี้ไปสนามบินไหม?', en: 'Does this bus go to the airport?' },
      { phrase: 'Stop here, please', reading: 'ストップ ヒア プリーズ', jp: 'ここで降ろしてください', th: 'จอดตรงนี้ครับ/ค่ะ', en: 'Stop here, please' },
      { phrase: 'How long does it take?', reading: 'ハウ ロング ダズ イット テイク？', jp: 'どのくらい時間がかかりますか？', th: 'ใช้เวลานานเท่าไหร่?', en: 'How long does it take?' },
    ],
    emergency: [
      { phrase: 'Help!', reading: 'ヘルプ！', jp: '助けて！', th: 'ช่วยด้วย!', en: 'Help!' },
      { phrase: 'Call an ambulance', reading: 'コール アン アンビュランス', jp: '救急車を呼んでください', th: 'เรียกรถพยาบาลให้หน่อย', en: 'Call an ambulance' },
      { phrase: 'Call the police', reading: 'コール ザ ポリス', jp: '警察を呼んでください', th: 'เรียกตำรวจให้หน่อย', en: 'Call the police' },
      { phrase: 'I lost my passport', reading: 'アイ ロスト マイ パスポート', jp: 'パスポートを無くしました', th: 'ทำพาสปอร์ตหาย', en: 'I lost my passport' },
      { phrase: 'Where is the hospital?', reading: 'ウェア イズ ザ ホスピタル？', jp: '病院はどこですか？', th: 'โรงพยาบาลอยู่ที่ไหน?', en: 'Where is the hospital?' },
    ],
    basic: [
      { phrase: 'Yes', reading: 'イエス', jp: 'はい', th: 'ใช่', en: 'Yes' },
      { phrase: 'No', reading: 'ノー', jp: 'いいえ', th: 'ไม่', en: 'No' },
      { phrase: 'Excuse me', reading: 'エクスキューズ ミー', jp: 'すみません', th: 'ขอโทษครับ/ค่ะ', en: 'Excuse me' },
      { phrase: 'Sorry', reading: 'ソーリー', jp: 'ごめんなさい', th: 'ขอโทษ', en: 'Sorry' },
      { phrase: 'I don\'t understand', reading: 'アイ ドント アンダースタンド', jp: 'わかりません', th: 'ไม่เข้าใจ', en: 'I don\'t understand' },
    ]
  },
  th: {
    greeting: [
      { phrase: 'สวัสดี', reading: 'サワディー', jp: 'こんにちは', th: 'สวัสดี', en: 'Hello' },
      { phrase: 'อรุณสวัสดิ์', reading: 'アルンサワッ', jp: 'おはようございます', th: 'อรุณสวัสดิ์', en: 'Good morning' },
      { phrase: 'ราตรีสวัสดิ์', reading: 'ラートリーサワッ', jp: 'おやすみなさい', th: 'ราตรีสวัสดิ์', en: 'Good night' },
      { phrase: 'สบายดีไหม', reading: 'サバーイ ディー マイ', jp: 'お元気ですか？', th: 'สบายดีไหม?', en: 'How are you?' },
      { phrase: 'แล้วพบกันใหม่', reading: 'レーオ ポップ ガン マイ', jp: 'また会いましょう', th: 'แล้วพบกันใหม่', en: 'See you again' },
    ],
    thanks: [
      { phrase: 'ขอบคุณ', reading: 'コップクン', jp: 'ありがとうございます', th: 'ขอบคุณ', en: 'Thank you' },
      { phrase: 'ขอบคุณมาก', reading: 'コップクン マーク', jp: '本当にありがとうございます', th: 'ขอบคุณมาก', en: 'Thanks a lot' },
      { phrase: 'ไม่เป็นไร', reading: 'マイペンライ', jp: 'どういたしまして/大丈夫です', th: 'ไม่เป็นไร', en: 'You\'re welcome/No problem' },
      { phrase: 'ด้วยความยินดี', reading: 'ドゥアイ クワーム インディー', jp: '喜んで', th: 'ด้วยความยินดี', en: 'With pleasure' },
      { phrase: 'ขอบคุณสำหรับความช่วยเหลือ', reading: 'コップクン サムラップ クワーム チュアイ ルア', jp: '助けてくれてありがとう', th: 'ขอบคุณสำหรับความช่วยเหลือ', en: 'Thank you for your help' },
    ],
    shopping: [
      { phrase: 'อันนี้ราคาเท่าไหร่', reading: 'アンニー ラーカー タオライ', jp: 'これはいくらですか？', th: 'อันนี้ราคาเท่าไหร่?', en: 'How much is this?' },
      { phrase: 'ลดราคาให้หน่อยได้ไหม', reading: 'ロット ラーカー ハイ ノイ ダイ マイ', jp: '安くしてもらえませんか？', th: 'ลดราคาให้หน่อยได้ไหม?', en: 'Can you give me a discount?' },
      { phrase: 'เอาอันนี้', reading: 'アオ アンニー', jp: 'これを買います', th: 'เอาอันนี้', en: 'I\'ll take this' },
      { phrase: 'มีสีอื่นไหม', reading: 'ミー シー ウーン マイ', jp: 'これの別の色はありますか？', th: 'มีสีอื่นไหม?', en: 'Do you have this in a different color?' },
      { phrase: 'รับบัตรเครดิตไหม', reading: 'ラップ バット クレディット マイ', jp: 'クレジットカードは使えますか？', th: 'รับบัตรเครดิตไหม?', en: 'Do you accept credit cards?' },
    ],
    restaurant: [
      { phrase: 'ขอเมนูหน่อย', reading: 'コー メニュー ノイ', jp: 'メニューを見せてください', th: 'ขอเมนูหน่อย', en: 'Can I have the menu?' },
      { phrase: 'เก็บเงินด้วย', reading: 'ゲップ ングン ドゥアイ', jp: 'お会計をお願いします', th: 'เก็บเงินด้วย', en: 'Check, please' },
      { phrase: 'ไม่ใส่ผักชี', reading: 'マイ サイ パクチー', jp: 'パクチーを入れないでください', th: 'ไม่ใส่ผักชี', en: 'No coriander' },
      { phrase: 'เผ็ดน้อย', reading: 'ペット ノーイ', jp: '辛くしないでください', th: 'เผ็ดน้อย', en: 'Less spicy' },
      { phrase: 'อร่อยมาก', reading: 'アロイ マーク', jp: 'とても美味しいです', th: 'อร่อยมาก', en: 'Very delicious' },
    ],
    transport: [
      { phrase: 'สถานีรถไฟอยู่ที่ไหน', reading: 'サターニー ロッファイ ユー ティーナイ', jp: '駅はどこですか？', th: 'สถานีรถไฟอยู่ที่ไหน?', en: 'Where is the train station?' },
      { phrase: 'ไปที่นี่', reading: 'パイ ティーニー', jp: 'ここに行ってください', th: 'ไปที่นี่', en: 'Go here, please' },
      { phrase: 'จอดตรงนี้', reading: 'ジョート トロンニー', jp: 'ここで停めてください', th: 'จอดตรงนี้', en: 'Stop here' },
      { phrase: 'ใช้เวลานานเท่าไหร่', reading: 'チャイ ウェーラー ナーン タオライ', jp: 'どのくらい時間がかかりますか？', th: 'ใช้เวลานานเท่าไหร่?', en: 'How long does it take?' },
      { phrase: 'เปิดมิเตอร์ด้วย', reading: 'プート ミーター ドゥアイ', jp: 'メーターを回してください', th: 'เปิดมิเตอร์ด้วย', en: 'Please turn on the meter' },
    ],
    emergency: [
      { phrase: 'ช่วยด้วย', reading: 'チュアイ ドゥアイ', jp: '助けて！', th: 'ช่วยด้วย!', en: 'Help!' },
      { phrase: 'เรียกรถพยาบาลให้หน่อย', reading: 'リアク ロッパヤバーン ハイ ノイ', jp: '救急車を呼んでください', th: 'เรียกรถพยาบาลให้หน่อย', en: 'Call an ambulance' },
      { phrase: 'เรียกตำรวจให้หน่อย', reading: 'リアク タムルワット ハイ ノイ', jp: '警察を呼んでください', th: 'เรียกตำรวจให้หน่อย', en: 'Call the police' },
      { phrase: 'ทำพาสปอร์ตหาย', reading: 'タム パスポート ハーイ', jp: 'パスポートを無くしました', th: 'ทำพาสปอร์ตหาย', en: 'I lost my passport' },
      { phrase: 'โรงพยาบาลอยู่ที่ไหน', reading: 'ローンパヤバーン ユー ティーナイ', jp: '病院はどこですか？', th: 'โรงพยาบาลอยู่ที่ไหน?', en: 'Where is the hospital?' },
    ],
    basic: [
      { phrase: 'ใช่', reading: 'チャイ', jp: 'はい', th: 'ใช่', en: 'Yes' },
      { phrase: 'ไม่ใช่', reading: 'マイチャイ', jp: 'いいえ', th: 'ไม่ใช่', en: 'No' },
      { phrase: 'ขอโทษ', reading: 'コートート', jp: 'すみません/ごめんなさい', th: 'ขอโทษ', en: 'Excuse me / Sorry' },
      { phrase: 'ไม่เข้าใจ', reading: 'マイ カオジャイ', jp: 'わかりません', th: 'ไม่เข้าใจ', en: 'I don\'t understand' },
      { phrase: 'พูดภาษาอังกฤษได้ไหม', reading: 'プート パーサー アングリット ダイ マイ', jp: '英語を話せますか？', th: 'พูดภาษาอังกฤษได้ไหม?', en: 'Can you speak English?' },
    ]
  },
  zh: {
    greeting: [
      { phrase: '你好', reading: 'ニーハオ', jp: 'こんにちは', th: 'สวัสดี', en: 'Hello' },
      { phrase: '早上好', reading: 'ザオシャンハオ', jp: 'おはようございます', th: 'อรุณสวัสดิ์', en: 'Good morning' },
      { phrase: '晚上好', reading: 'ワンシャンハオ', jp: 'こんばんは', th: 'สวัสดีตอนเย็น', en: 'Good evening' },
      { phrase: '晚安', reading: 'ワンアン', jp: 'おやすみなさい', th: 'ราตรีสวัสดิ์', en: 'Good night' },
      { phrase: '你好吗？', reading: 'ニーハオマ？', jp: 'お元気ですか？', th: 'สบายดีไหม?', en: 'How are you?' },
    ],
    thanks: [
      { phrase: '谢谢', reading: 'シエシエ', jp: 'ありがとうございます', th: 'ขอบคุณ', en: 'Thank you' },
      { phrase: '非常感谢', reading: 'フェイチャンガンシエ', jp: '本当にありがとうございます', th: 'ขอบคุณมาก', en: 'Thank you very much' },
      { phrase: '不客气', reading: 'ブーカーチー', jp: 'どういたしまして', th: 'ด้วยความยินดี', en: 'You\'re welcome' },
      { phrase: '没关系', reading: 'メイグアンシー', jp: '問題ありません', th: 'ไม่มีปัญหา', en: 'No problem' },
      { phrase: '辛苦了', reading: 'シンクーラ', jp: 'お疲れ様でした', th: 'ขอบคุณสำหรับความเหนื่อยยาก', en: 'Thank you for your hard work' },
    ],
    shopping: [
      { phrase: '多少钱？', reading: 'ドゥオシャオチエン？', jp: 'いくらですか？', th: 'ราคาเท่าไหร่?', en: 'How much is it?' },
      { phrase: '可以刷卡吗？', reading: 'クーイシュアカーマ？', jp: 'クレジットカードは使えますか？', th: 'รูดบัตรได้ไหม?', en: 'Can I use a credit card?' },
      { phrase: '我要这个', reading: 'ウォーヤオジェイガ', jp: 'これを買います', th: 'เอาอันนี้', en: 'I want this' },
      { phrase: '能便宜一点吗？', reading: 'ノォンピエンイーイーディエンマ？', jp: '安くしてもらえませんか？', th: 'ลดหน่อยได้ไหม?', en: 'Can you make it cheaper?' },
      { phrase: '有别的颜色吗？', reading: 'ヨウビエダユィエンスーマ？', jp: '他の色はありますか？', th: 'มีสีอื่นไหม?', en: 'Do you have other colors?' },
    ],
    restaurant: [
      { phrase: '两个人', reading: 'リャンガレン', jp: '2人です', th: 'สองคน', en: 'Two people' },
      { phrase: '请给我菜单', reading: 'チンゲイウォツァイダン', jp: 'メニューをください', th: 'ขอเมนูหน่อย', en: 'Please give me the menu' },
      { phrase: '我要点餐', reading: 'ウォーヤオディエンツァン', jp: '注文をお願いします', th: 'ขอสั่งอาหาร', en: 'I\'d like to order' },
      { phrase: '买单', reading: 'マイダン', jp: 'お会計をお願いします', th: 'เช็คบิล', en: 'Check, please' },
      { phrase: '请给我水', reading: 'チンゲイウォシュイ', jp: 'お水をください', th: 'ขอน้ำเปล่าหน่อย', en: 'Water, please' },
    ],
    transport: [
      { phrase: '火车站怎么走？', reading: 'フオチャージャンゼンマゾウ？', jp: '駅へはどう行けばいいですか？', th: 'ไปสถานีรถไฟยังไง?', en: 'How to go to the train station?' },
      { phrase: '我要去这里', reading: 'ウォーヤオチュージェーリー', jp: 'ここに行きたいです', th: 'อยากไปที่นี่', en: 'I want to go here' },
      { phrase: '这辆车去机场吗？', reading: 'ジェリャンチャチュウジーチャンマ？', jp: 'このバス/車は空港に行きますか？', th: 'รถคันนี้ไปสนามบินไหม?', en: 'Does this bus go to the airport?' },
      { phrase: '在这里停', reading: 'ザイジェリーティン', jp: 'ここで停めてください', th: 'จอดตรงนี้', en: 'Stop here' },
      { phrase: '要多长时间？', reading: 'ヤオドゥオチャンシージエン？', jp: 'どのくらい時間がかかりますか？', th: 'ใช้เวลานานเท่าไหร่?', en: 'How long does it take?' },
    ],
    emergency: [
      { phrase: '救命！', reading: 'ジウミン！', jp: '助けて！', th: 'ช่วยด้วย!', en: 'Help!' },
      { phrase: '叫救护车', reading: 'ジャオジウフーチャー', jp: '救急車を呼んでください', th: 'เรียกรถพยาบาล', en: 'Call an ambulance' },
      { phrase: '报警', reading: 'バオジン', jp: '警察を呼んでください', th: 'แจ้งตำรวจ', en: 'Call the police' },
      { phrase: '我护照丢了', reading: 'ウォーフージャオディウラ', jp: 'パスポートを無くしました', th: 'พาสปอร์ตหาย', en: 'I lost my passport' },
      { phrase: '医院在哪里？', reading: 'イーユエンザイナーリー？', jp: '病院はどこですか？', th: 'โรงพยาบาลอยู่ที่ไหน?', en: 'Where is the hospital?' },
    ],
    basic: [
      { phrase: '是', reading: 'シー', jp: 'はい', th: 'ใช่', en: 'Yes' },
      { phrase: '不是', reading: 'ブーシー', jp: 'いいえ', th: 'ไม่ใช่', en: 'No' },
      { phrase: '不好意思', reading: 'ブーハオイースー', jp: 'すみません', th: 'ขอโทษ (เรียกความสนใจ)', en: 'Excuse me' },
      { phrase: '对不起', reading: 'ドゥイブーチー', jp: 'ごめんなさい', th: 'ขอโทษ', en: 'Sorry' },
      { phrase: '我听不懂', reading: 'ウォーティンブードン', jp: 'わかりません', th: 'ฟังไม่เข้าใจ', en: 'I don\'t understand' },
    ]
  },
  ko: {
    greeting: [
      { phrase: '안녕하세요', reading: 'アンニョンハセヨ', jp: 'こんにちは', th: 'สวัสดี', en: 'Hello' },
      { phrase: '안녕히 주무세요', reading: 'アンニョンヒ ジュムセヨ', jp: 'おやすみなさい', th: 'ราตรีสวัสดิ์', en: 'Good night' },
      { phrase: '잘 지내셨어요?', reading: 'チャル ジネショッソヨ？', jp: 'お元気でしたか？', th: 'สบายดีไหม?', en: 'How have you been?' },
      { phrase: '안녕히 계세요', reading: 'アンニョンヒ ゲセヨ', jp: 'さようなら（自分が去る時）', th: 'ลาก่อน', en: 'Goodbye' },
      { phrase: '반갑습니다', reading: 'パンガプスムニ다', jp: 'はじめまして', th: 'ยินดีที่ได้รู้จัก', en: 'Nice to meet you' },
    ],
    thanks: [
      { phrase: '감사합니다', reading: 'カムサハムニダ', jp: 'ありがとうございます', th: 'ขอบคุณ', en: 'Thank you' },
      { phrase: '정말 감사합니다', reading: 'チョンマル カムサハムニダ', jp: '本当にありがとうございます', th: 'ขอบคุณมาก', en: 'Thank you very much' },
      { phrase: '천만에요', reading: 'チョンマネヨ', jp: 'どういたしまして', th: 'ด้วยความยินดี', en: 'You\'re welcome' },
      { phrase: '괜찮아요', reading: 'ケンチャナヨ', jp: '大丈夫です/結構です', th: 'ไม่เป็นไร', en: 'It\'s okay/No thanks' },
      { phrase: '수고하셨습니다', reading: 'スゴハショッスムニダ', jp: 'お疲れ様でした', th: 'ขอบคุณที่เหนื่อยยาก', en: 'Good job' },
    ],
    shopping: [
      { phrase: '얼마예요?', reading: 'オルマエヨ？', jp: 'いくらですか？', th: 'ราคาเท่าไหร่?', en: 'How much is it?' },
      { phrase: '카드 되나요?', reading: 'カドゥ テナヨ？', jp: 'カードは使えますか？', th: 'รับบัตรไหม?', en: 'Can I use a card?' },
      { phrase: '이걸로 주세요', reading: 'イゴルロ ジュセヨ', jp: 'これをください', th: 'เอาอันนี้', en: 'I\'ll take this' },
      { phrase: '조금 깎아주세요', reading: 'チョグム カッカジュセヨ', jp: '少し安くしてください', th: 'ลดราคาให้หน่อย', en: 'Please give me a discount' },
      { phrase: '다른 색상 있나요?', reading: 'タルン セクサン インナヨ？', jp: '他の色はありますか？', th: 'มีสีอื่นไหม?', en: 'Do you have other colors?' },
    ],
    restaurant: [
      { phrase: '두 명이요', reading: 'トゥ ミョンイヨ', jp: '2人です', th: 'สองคนค่ะ/ครับ', en: 'Two people' },
      { phrase: '메뉴판 주세요', reading: 'メニューパン ジュセヨ', jp: 'メニューをください', th: 'ขอเมนูหน่อย', en: 'Menu, please' },
      { phrase: '주문할게요', reading: 'チュムナルケ요', jp: '注文します', th: 'ขอสั่งอาหาร', en: 'I will order' },
      { phrase: '계산서 주세요', reading: 'ケサンソ ジュセヨ', jp: 'お会計をお願いします', th: 'เช็คบิลหน่อย', en: 'Check, please' },
      { phrase: '물 좀 주세요', reading: 'ムル チョム ジュセヨ', jp: 'お水をください', th: 'ขอน้ำหน่อย', en: 'Water, please' },
    ],
    transport: [
      { phrase: '기차역이 어디예요?', reading: 'キチャヨギ オディエヨ？', jp: '駅はどこですか？', th: 'สถานีรถไฟอยู่ที่ไหน?', en: 'Where is the train station?' },
      { phrase: '여기로 가주세요', reading: 'ヨギロ カジュセヨ', jp: 'ここに行ってください', th: 'ไปที่นี่', en: 'Please go here' },
      { phrase: '이 버스 공항 가나요?', reading: 'イ ボス コンハン カナヨ？', jp: 'このバスは空港に行きますか？', th: 'รถบัสนี้ไปสนามบินไหม?', en: 'Does this bus go to the airport?' },
      { phrase: '여기서 세워주세요', reading: 'ヨギソ セウォジュセヨ', jp: 'ここで降ろしてください', th: 'จอดที่นี่', en: 'Please stop here' },
      { phrase: '얼마나 걸려요?', reading: 'オルマ나 コルリョヨ？', jp: 'どのくらいかかりますか？', th: 'ใช้เวลานานเท่าไหร่?', en: 'How long does it take?' },
    ],
    emergency: [
      { phrase: '도와주세요!', reading: 'トワジュセヨ！', jp: '助けて！', th: 'ช่วยด้วย!', en: 'Help!' },
      { phrase: '구급차 불러주세요', reading: 'クグプチャ プルロジュセヨ', jp: '救急車を呼んでください', th: 'เรียกรถพยาบาลหน่อย', en: 'Please call an ambulance' },
      { phrase: '경찰 불러주세요', reading: 'キョンチャル プルロジュセヨ', jp: '警察を呼んでください', th: 'เรียกตำรวจหน่อย', en: 'Please call the police' },
      { phrase: '여권을 잃어버렸어요', reading: 'ヨックォヌル イロボリョッソヨ', jp: 'パスポートを無くしました', th: 'ทำพาสปอร์ตหาย', en: 'I lost my passport' },
      { phrase: '병원이 어디예요?', reading: 'ピョンウォニ オディエヨ？', jp: '病院はどこですか？', th: 'โรงพยาบาลอยู่ที่ไหน?', en: 'Where is the hospital?' },
    ],
    basic: [
      { phrase: '네', reading: 'ネ', jp: 'はい', th: 'ใช่', en: 'Yes' },
      { phrase: '아니요', reading: 'アニヨ', jp: 'いいえ', th: 'ไม่ใช่', en: 'No' },
      { phrase: '실례합니다', reading: 'シルレハムニダ', jp: 'すみません（尋ねる時）', th: 'ขอโทษ', en: 'Excuse me' },
      { phrase: '죄송합니다', reading: 'チェソンハムニダ', jp: 'ごめんなさい', th: 'ขอโทษ', en: 'I am sorry' },
      { phrase: '모르겠어요', reading: 'モルゲッソヨ', jp: 'わかりません', th: 'ไม่รู้/ไม่เข้าใจ', en: 'I don\'t know/understand' },
    ]
  },
  es: {
    greeting: [
      { phrase: 'Hola', reading: 'オラ', jp: 'こんにちは', th: 'สวัสดี', en: 'Hello' },
      { phrase: 'Buenos días', reading: 'ブエノス ディアス', jp: 'おはようございます', th: 'อรุณสวัสดิ์', en: 'Good morning' },
      { phrase: 'Buenas tardes', reading: 'ブエナス タルデス', jp: 'こんにちは/こんばんは', th: 'สวัสดีตอนบ่าย', en: 'Good afternoon' },
      { phrase: 'Buenas noches', reading: 'ブエナス ノチェス', jp: 'こんばんは/おやすみなさい', th: 'ราตรีสวัสดิ์', en: 'Good night' },
      { phrase: '¿Cómo estás?', reading: 'コモ エスタス？', jp: 'お元気ですか？', th: 'สบายดีไหม?', en: 'How are you?' },
    ],
    thanks: [
      { phrase: 'Gracias', reading: 'グラシアス', jp: 'ありがとうございます', th: 'ขอบคุณ', en: 'Thank you' },
      { phrase: 'Muchas gracias', reading: 'ムチャス グラシアス', jp: '本当にありがとうございます', th: 'ขอบคุณมาก', en: 'Thank you very much' },
      { phrase: 'De nada', reading: 'デ ナダ', jp: 'どういたしまして', th: 'ด้วยความยินดี', en: 'You\'re welcome' },
      { phrase: 'No hay problema', reading: 'ノ アイ プロブレマ', jp: '問題ありません', th: 'ไม่มีปัญหา', en: 'No problem' },
      { phrase: 'Muy amable', reading: 'ムイ アマブレ', jp: 'ご親切に', th: 'ใจดีมาก', en: 'Very kind' },
    ],
    shopping: [
      { phrase: '¿Cuánto cuesta?', reading: 'クアント クエスタ？', jp: 'いくらですか？', th: 'ราคาเท่าไหร่?', en: 'How much does it cost?' },
      { phrase: '¿Puedo pagar con tarjeta?', reading: 'プエド パガール コン タルヘタ？', jp: 'クレジットカードは使えますか？', th: 'จ่ายด้วยบัตรได้ไหม?', en: 'Can I pay with a card?' },
      { phrase: 'Me lo llevo', reading: 'メ ロ ジェボ', jp: 'これを買います', th: 'เอาอันนี้', en: 'I\'ll take it' },
      { phrase: '¿Puede hacerme un descuento?', reading: 'プエデ アセルメ ウン デスクエント？', jp: '安くしてもらえませんか？', th: 'ลดให้หน่อยได้ไหม?', en: 'Can you give me a discount?' },
      { phrase: '¿Tiene esto en otro color?', reading: 'ティエネ エスト エン オトロ コロール？', jp: 'これの別の色はありますか？', th: 'มีสีอื่นไหม?', en: 'Do you have this in another color?' },
    ],
    restaurant: [
      { phrase: 'Una mesa para dos, por favor', reading: 'ウナ メサ パラ ドス ポル ファボール', jp: '2人です', th: 'โต๊ะสำหรับสองคน', en: 'A table for two, please' },
      { phrase: 'El menú, por favor', reading: 'エル メニュー ポル ファボール', jp: 'メニューをください', th: 'ขอเมนูหน่อย', en: 'The menu, please' },
      { phrase: 'Quisiera pedir', reading: 'キシエラ ペディール', jp: '注文をお願いします', th: 'ขอสั่งอาหาร', en: 'I would like to order' },
      { phrase: 'La cuenta, por favor', reading: 'ラ クエンタ ポル ファボール', jp: 'お会計をお願いします', th: 'เช็คบิลหน่อย', en: 'The bill, please' },
      { phrase: 'Agua, por favor', reading: 'アグア ポル ファボール', jp: 'お水をください', th: 'ขอน้ำหน่อย', en: 'Water, please' },
    ],
    transport: [
      { phrase: '¿Dónde está la estación de tren?', reading: 'ドンデ エスタ ラ エスタシオン デ トレン？', jp: '駅はどこですか？', th: 'สถานีรถไฟอยู่ที่ไหน?', en: 'Where is the train station?' },
      { phrase: 'Quiero ir aquí', reading: 'キエロ イール アキ', jp: 'ここに行きたいです', th: 'อยากไปที่นี่', en: 'I want to go here' },
      { phrase: '¿Este autobús va al aeropuerto?', reading: 'エステ アウトブス バ アル アエロプエルト？', jp: 'このバスは空港に行きますか？', th: 'รถบัสนี้ไปสนามบินไหม?', en: 'Does this bus go to the airport?' },
      { phrase: 'Pare aquí, por favor', reading: 'パレ アキ ポル ファボール', jp: 'ここで降ろしてください', th: 'จอดที่นี่', en: 'Stop here, please' },
      { phrase: '¿Cuánto tiempo tarda?', reading: 'クアント ティエンポ タルダ？', jp: 'どのくらい時間がかかりますか？', th: 'ใช้เวลานานเท่าไหร่?', en: 'How long does it take?' },
    ],
    emergency: [
      { phrase: '¡Ayuda!', reading: 'アユダ！', jp: '助けて！', th: 'ช่วยด้วย!', en: 'Help!' },
      { phrase: 'Llame a una ambulancia', reading: 'ジャメ ア ウナ アンブランシア', jp: '救急車を呼んでください', th: 'เรียกรถพยาบาลหน่อย', en: 'Call an ambulance' },
      { phrase: 'Llame a la policía', reading: 'ジャメ ア ラ ポリシア', jp: '警察を呼んでください', th: 'เรียกตำรวจหน่อย', en: 'Call the police' },
      { phrase: 'He perdido mi pasaporte', reading: 'エ ペルディード ミ パサポルテ', jp: 'パスポートを無くしました', th: 'ฉันทำพาสปอร์ตหาย', en: 'I have lost my passport' },
      { phrase: '¿Dónde está el hospital?', reading: 'ドンデ エスタ エル オスピタル？', jp: '病院はどこですか？', th: 'โรงพยาบาลอยู่ที่ไหน?', en: 'Where is the hospital?' },
    ],
    basic: [
      { phrase: 'Sí', reading: 'シ', jp: 'はい', th: 'ใช่', en: 'Yes' },
      { phrase: 'No', reading: 'ノ', jp: 'いいえ', th: 'ไม่ใช่', en: 'No' },
      { phrase: 'Disculpe', reading: 'ディスクルペ', jp: 'すみません', th: 'ขอโทษ (เรียก)', en: 'Excuse me' },
      { phrase: 'Lo siento', reading: 'ロ シエント', jp: 'ごめんなさい', th: 'ขอโทษ', en: 'I\'m sorry' },
      { phrase: 'No entiendo', reading: 'ノ エンティエンド', jp: 'わかりません', th: 'ไม่เข้าใจ', en: 'I don\'t understand' },
    ]
  },
  it: {
    greeting: [
      { phrase: 'Ciao', reading: 'チャオ', jp: 'こんにちは / さようなら', th: 'สวัสดี/ลาก่อน', en: 'Hello/Goodbye' },
      { phrase: 'Buongiorno', reading: 'ブオンジョルノ', jp: 'おはようございます', th: 'อรุณสวัสดิ์', en: 'Good morning' },
      { phrase: 'Buonasera', reading: 'ブオナセーラ', jp: 'こんばんは', th: 'สวัสดีตอนเย็น', en: 'Good evening' },
      { phrase: 'Buonanotte', reading: 'ブオナノッテ', jp: 'おやすみなさい', th: 'ราตรีสวัสดิ์', en: 'Good night' },
      { phrase: 'Come stai?', reading: 'コメ スタイ？', jp: 'お元気ですか？', th: 'สบายดีไหม?', en: 'How are you?' },
    ],
    thanks: [
      { phrase: 'Grazie', reading: 'グラッツィエ', jp: 'ありがとうございます', th: 'ขอบคุณ', en: 'Thank you' },
      { phrase: 'Mille grazie', reading: 'ミッレ グラッツィエ', jp: '本当にありがとうございます', th: 'ขอบคุณมาก', en: 'Thanks a lot' },
      { phrase: 'Prego', reading: 'プレーゴ', jp: 'どういたしまして / どうぞ', th: 'ด้วยความยินดี', en: 'You\'re welcome' },
      { phrase: 'Di nulla', reading: 'ディ ヌッラ', jp: 'とんでもない', th: 'ไม่เป็นไร', en: 'Not at all' },
      { phrase: 'Nessun problema', reading: 'ネッスン プロブレーマ', jp: '問題ありません', th: 'ไม่มีปัญหา', en: 'No problem' },
    ],
    shopping: [
      { phrase: 'Quanto costa?', reading: 'クアント コスタ？', jp: 'いくらですか？', th: 'ราคาเท่าไหร่?', en: 'How much is it?' },
      { phrase: 'Posso pagare con la carta di credito?', reading: 'ポッソ パガーレ コン ラ カルタ ディ クレディト？', jp: 'クレジットカードは使えますか？', th: 'จ่ายด้วยบัตรเครดิตได้ไหม?', en: 'Can I pay with credit card?' },
      { phrase: 'Prendo questo', reading: 'プレンド クエスト', jp: 'これを買います', th: 'เอาอันนี้', en: 'I\'ll take this' },
      { phrase: 'Può farmi uno sconto?', reading: 'プォ ファルミ ウノ スコント？', jp: '安くしてもらえませんか？', th: 'ลดให้หน่อยได้ไหม?', en: 'Can you give me a discount?' },
      { phrase: 'Avete questo in un altro colore?', reading: 'アヴェーテ クエスト イン ウン アルトロ コローレ？', jp: 'これの別の色はありますか？', th: 'มีสีอื่นไหม?', en: 'Do you have this in another color?' },
    ],
    restaurant: [
      { phrase: 'Un tavolo per due, per favore', reading: 'ウン ターヴォロ ペル ドゥーエ ペル ファヴォーレ', jp: '2人です', th: 'โต๊ะสำหรับสองคน', en: 'A table for two, please' },
      { phrase: 'Il menù, per favore', reading: 'イル メニュー ペル ファヴォーレ', jp: 'メニューをください', th: 'ขอเมนูหน่อย', en: 'The menu, please' },
      { phrase: 'Vorrei ordinare', reading: 'ヴォッレイ オルディナーレ', jp: '注文をお願いします', th: 'ขอสั่งอาหาร', en: 'I would like to order' },
      { phrase: 'Il conto, per favore', reading: 'イル コント ペル ファヴォーレ', jp: 'お会計をお願いします', th: 'เช็คบิลหน่อย', en: 'The bill, please' },
      { phrase: 'Acqua, per favore', reading: 'アックア ペル ファヴォーレ', jp: 'お水をください', th: 'ขอน้ำหน่อย', en: 'Water, please' },
    ],
    transport: [
      { phrase: 'Dov\'è la stazione ferroviaria?', reading: 'ドヴェ ラ スタツィオーネ フェッロヴィアーリア？', jp: '駅はどこですか？', th: 'สถานีรถไฟอยู่ที่ไหน?', en: 'Where is the train station?' },
      { phrase: 'Voglio andare qui', reading: 'ヴォーリョ アンダーレ クイ', jp: 'ここに行きたいです', th: 'อยากไปที่นี่', en: 'I want to go here' },
      { phrase: 'Questo autobus va all\'aeroporto?', reading: 'クエスト アウトブス ヴァ アッラエロポルト？', jp: 'このバスは空港に行きますか？', th: 'รถบัสนี้ไปสนามบินไหม?', en: 'Does this bus go to the airport?' },
      { phrase: 'Si fermi qui, per favore', reading: 'シ フェルミ クイ ペル ファヴォーレ', jp: 'ここで降ろしてください', th: 'จอดที่นี่', en: 'Stop here, please' },
      { phrase: 'Quanto tempo ci vuole?', reading: 'クアント テンポ チ ヴオーレ？', jp: 'どのくらい時間がかかりますか？', th: 'ใช้เวลานานเท่าไหร่?', en: 'How long does it take?' },
    ],
    emergency: [
      { phrase: 'Aiuto!', reading: 'アユート！', jp: '助けて！', th: 'ช่วยด้วย!', en: 'Help!' },
      { phrase: 'Chiami un\'ambulanza', reading: 'キアーミ ウナンブランツァ', jp: '救急車を呼んでください', th: 'เรียกรถพยาบาลหน่อย', en: 'Call an ambulance' },
      { phrase: 'Chiami la polizia', reading: 'キアーミ ラ ポリツィーア', jp: '警察を呼んでください', th: 'เรียกตำรวจหน่อย', en: 'Call the police' },
      { phrase: 'Ho perso il passaporto', reading: 'オ ペルソ イル パッサポルト', jp: 'パスポートを無くしました', th: 'ฉันทำพาสปอร์ตหาย', en: 'I lost my passport' },
      { phrase: 'Dov\'è l\'ospedale?', reading: 'ドヴェ ロスペダーレ？', jp: '病院はどこですか？', th: 'โรงพยาบาลอยู่ที่ไหน?', en: 'Where is the hospital?' },
    ],
    basic: [
      { phrase: 'Sì', reading: 'スィ', jp: 'はい', th: 'ใช่', en: 'Yes' },
      { phrase: 'No', reading: 'ノ', jp: 'いいえ', th: 'ไม่ใช่', en: 'No' },
      { phrase: 'Scusa', reading: 'スクーザ', jp: 'すみません', th: 'ขอโทษ (เรียก)', en: 'Excuse me' },
      { phrase: 'Mi dispiace', reading: 'ミ ディスピアチェ', jp: 'ごめんなさい', th: 'ขอโทษ', en: 'I am sorry' },
      { phrase: 'Non capisco', reading: 'ノン カピスコ', jp: 'わかりません', th: 'ไม่เข้าใจ', en: 'I don\'t understand' },
    ]
  },
  pt: {
    greeting: [
      { phrase: 'Olá', reading: 'オラ', jp: 'こんにちは', th: 'สวัสดี', en: 'Hello' },
      { phrase: 'Bom dia', reading: 'ボン ジーア', jp: 'おはようございます', th: 'อรุณสวัสดิ์', en: 'Good morning' },
      { phrase: 'Boa tarde', reading: 'ボア タルヂ', jp: 'こんにちは（午後）', th: 'สวัสดีตอนบ่าย', en: 'Good afternoon' },
      { phrase: 'Boa noite', reading: 'ボア ノイチ', jp: 'こんばんは/おやすみなさい', th: 'ราตรีสวัสดิ์', en: 'Good night' },
      { phrase: 'Tudo bem?', reading: 'トゥド ベン？', jp: 'お元気ですか？', th: 'สบายดีไหม?', en: 'How are you?' },
    ],
    thanks: [
      { phrase: 'Obrigado(a)', reading: 'オブリガード（ダ）', jp: 'ありがとうございます', th: 'ขอบคุณ', en: 'Thank you' },
      { phrase: 'Muito obrigado(a)', reading: 'ムイント オブリガード（ダ）', jp: '本当にありがとうございます', th: 'ขอบคุณมาก', en: 'Thank you very much' },
      { phrase: 'De nada', reading: 'ジ ナダ', jp: 'どういたしまして', th: 'ด้วยความยินดี', en: 'You\'re welcome' },
      { phrase: 'Não há de quê', reading: 'ナォン ア ジ ケ', jp: 'とんでもないです', th: 'ไม่เป็นไร', en: 'Not at all' },
      { phrase: 'Imagina', reading: 'イマジナ', jp: '気にしないでください', th: 'ช่างมันเถอะ', en: 'Don\'t mention it' },
    ],
    shopping: [
      { phrase: 'Quanto custa?', reading: 'クアント クスタ？', jp: 'いくらですか？', th: 'ราคาเท่าไหร่?', en: 'How much does it cost?' },
      { phrase: 'Posso pagar com cartão?', reading: 'ポッソ パガール コン カルタォン？', jp: 'カードで払えますか？', th: 'จ่ายด้วยบัตรได้ไหม?', en: 'Can I pay with card?' },
      { phrase: 'Vou levar este', reading: 'ヴォウ レヴァール エスチ', jp: 'これを買います', th: 'เอาอันนี้', en: 'I will take this' },
      { phrase: 'Tem desconto?', reading: 'テン デスコント？', jp: '安くしてもらえませんか？', th: 'ลดให้หน่อยได้ไหม?', en: 'Is there a discount?' },
      { phrase: 'Tem em outra cor?', reading: 'テン エン オウトラ コール？', jp: 'これの別の色はありますか？', th: 'มีสีอื่นไหม?', en: 'Do you have it in another color?' },
    ],
    restaurant: [
      { phrase: 'Uma mesa para dois, por favor', reading: 'ウマ メザ パラ ドイス ポル ファヴォール', jp: '2人です', th: 'โต๊ะสำหรับสองคน', en: 'A table for two, please' },
      { phrase: 'O cardápio, por favor', reading: 'オ カルダピオ ポル ファヴォール', jp: 'メニューをください', th: 'ขอเมนูหน่อย', en: 'The menu, please' },
      { phrase: 'Gostaria de fazer o pedido', reading: 'ゴスタリア ジ ファゼール オ ペジード', jp: '注文をお願いします', th: 'ขอสั่งอาหาร', en: 'I would like to order' },
      { phrase: 'A conta, por favor', reading: 'ア コンタ ポル ファヴォール', jp: 'お会計をお願いします', th: 'เช็คบิลหน่อย', en: 'The bill, please' },
      { phrase: 'Água, por favor', reading: 'アグア ポル ファヴォール', jp: 'お水をください', th: 'ขอน้ำหน่อย', en: 'Water, please' },
    ],
    transport: [
      { phrase: 'Onde fica a estação de trem?', reading: 'オンヂ フィカ ア エスタサォン ジ トレン？', jp: '駅はどこですか？', th: 'สถานีรถไฟอยู่ที่ไหน?', en: 'Where is the train station?' },
      { phrase: 'Quero ir para cá', reading: 'ケロ イール パラ カ', jp: 'ここに行きたいです', th: 'อยากไปที่นี่', en: 'I want to go here' },
      { phrase: 'Este ônibus vai para o aeroporto?', reading: 'エスチ オニブス ヴァイ パラ オ アエロポルト？', jp: 'このバスは空港に行きますか？', th: 'รถบัสนี้ไปสนามบินไหม?', en: 'Does this bus go to the airport?' },
      { phrase: 'Pare aqui, por favor', reading: 'パリ アキ ポル ファヴォール', jp: 'ここで降ろしてください', th: 'จอดที่นี่', en: 'Stop here, please' },
      { phrase: 'Quanto tempo demora?', reading: 'クアント テンポ デモラ？', jp: 'どのくらい時間がかかりますか？', th: 'ใช้เวลานานเท่าไหร่?', en: 'How long does it take?' },
    ],
    emergency: [
      { phrase: 'Socorro!', reading: 'ソホーホ！', jp: '助けて！', th: 'ช่วยด้วย!', en: 'Help!' },
      { phrase: 'Chame uma ambulância', reading: 'シャミ ウマ アンブランシア', jp: '救急車を呼んでください', th: 'เรียกรถพยาบาลหน่อย', en: 'Call an ambulance' },
      { phrase: 'Chame a polícia', reading: 'シャミ ア ポリシア', jp: '警察を呼んでください', th: 'เรียกตำรวจหน่อย', en: 'Call the police' },
      { phrase: 'Perdi meu passaporte', reading: 'ペルジ メウ パサポルチ', jp: 'パスポートを無くしました', th: 'ฉันทำพาสปอร์ตหาย', en: 'I lost my passport' },
      { phrase: 'Onde fica o hospital?', reading: 'オンヂ フィカ オ オスピタウ？', jp: '病院はどこですか？', th: 'โรงพยาบาลอยู่ที่ไหน?', en: 'Where is the hospital?' },
    ],
    basic: [
      { phrase: 'Sim', reading: 'シン', jp: 'はい', th: 'ใช่', en: 'Yes' },
      { phrase: 'Não', reading: 'ナォン', jp: 'いいえ', th: 'ไม่ใช่', en: 'No' },
      { phrase: 'Com licença', reading: 'コン リセンサ', jp: 'すみません', th: 'ขออนุญาต/ขอโทษ', en: 'Excuse me' },
      { phrase: 'Desculpe', reading: 'デスクウピ', jp: 'ごめんなさい', th: 'ขอโทษ', en: 'Sorry' },
      { phrase: 'Não entendo', reading: 'ナォン エンテンド', jp: 'わかりません', th: 'ไม่เข้าใจ', en: 'I don\'t understand' },
    ]
  }
};

export const COUNTRY_TO_LANGUAGE = {
  // English
  'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en', 'IN': 'en', 'PH': 'en', 'SG': 'en',
  
  // Thai
  'TH': 'th',
  
  // Chinese
  'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh',
  
  // Korean
  'KR': 'ko', 'KP': 'ko',
  
  // Spanish
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'CL': 'es', 'EC': 'es', 'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es', 'CR': 'es', 'PA': 'es', 'UY': 'es', 'VE': 'es',
  
  // Italian
  'IT': 'it', 'SM': 'it', 'VA': 'it', 'CH': 'it',
  
  // Portuguese
  'PT': 'pt', 'BR': 'pt', 'MZ': 'pt', 'AO': 'pt', 'CV': 'pt', 'GW': 'pt', 'ST': 'pt',
  
  // Japanese (if needed for fallback)
  'JP': 'ja'
};

export const COUNTRY_FLAGS = {
  'US': '🇺🇸', 'GB': '🇬🇧', 'AU': '🇦🇺', 'CA': '🇨🇦', 'NZ': '🇳🇿', 'IE': '🇮🇪', 'ZA': '🇿🇦', 'IN': '🇮🇳', 'PH': '🇵🇭', 'SG': '🇸🇬',
  'TH': '🇹🇭',
  'CN': '🇨🇳', 'TW': '🇹🇼', 'HK': '🇭🇰', 'MO': '🇲🇴',
  'KR': '🇰🇷', 'KP': '🇰🇵',
  'ES': '🇪🇸', 'MX': '🇲🇽', 'AR': '🇦🇷', 'CO': '🇨🇴', 'PE': '🇵🇪', 'CL': '🇨🇱', 'EC': '🇪🇨', 'GT': '🇬🇹', 'CU': '🇨🇺', 'BO': '🇧🇴', 'DO': '🇩🇴', 'HN': '🇭🇳', 'PY': '🇵🇾', 'SV': '🇸🇻', 'NI': '🇳🇮', 'CR': '🇨🇷', 'PA': '🇵🇦', 'UY': '🇺🇾', 'VE': '🇻🇪',
  'IT': '🇮🇹', 'SM': '🇸🇲', 'VA': '🇻🇦', 'CH': '🇨🇭',
  'PT': '🇵🇹', 'BR': '🇧🇷', 'MZ': '🇲🇿', 'AO': '🇦🇴', 'CV': '🇨🇻', 'GW': '🇬🇼', 'ST': '🇸🇹',
  'JP': '🇯🇵'
};

export const LANGUAGE_NAMES = {
  'en': { ja: '英語', en: 'English', th: 'อังกฤษ' },
  'th': { ja: 'タイ語', en: 'Thai', th: 'ไทย' },
  'zh': { ja: '中国語', en: 'Chinese', th: 'จีน' },
  'ko': { ja: '韓国語', en: 'Korean', th: 'เกาหลี' },
  'es': { ja: 'スペイン語', en: 'Spanish', th: 'สเปน' },
  'it': { ja: 'イタリア語', en: 'Italian', th: 'อิตาเลียน' },
  'pt': { ja: 'ポルトガル語', en: 'Portuguese', th: 'โปรตุเกส' },
  'ja': { ja: '日本語', en: 'Japanese', th: 'ญี่ปุ่น' }
};

export function getLanguageFromCountry(countryName) {
  if (!countryName) return 'en';
  const name = countryName.toLowerCase();
  
  if (name.includes('タイ') || name.includes('thai')) return 'th';
  if (name.includes('台湾') || name.includes('taiwan') || name.includes('中国') || name.includes('china') || name.includes('香港') || name.includes('hong')) return 'zh';
  if (name.includes('韓国') || name.includes('korea')) return 'ko';
  if (name.includes('スペイン') || name.includes('メキシコ') || name.includes('spain') || name.includes('mexico')) return 'es';
  if (name.includes('イタリア') || name.includes('italy')) return 'it';
  if (name.includes('ポルトガル') || name.includes('ブラジル') || name.includes('portugal') || name.includes('brazil')) return 'pt';
  if (name.includes('日本') || name.includes('japan')) return 'ja';
  
  return 'en';
}

export function getFlagFromLanguage(lang) {
  const map = {
    'en': '🇺🇸',
    'th': '🇹🇭',
    'zh': '🇹🇼', // 台湾など
    'ko': '🇰🇷',
    'es': '🇪🇸',
    'it': '🇮🇹',
    'pt': '🇵🇹',
    'ja': '🇯🇵'
  };
  return map[lang] || '🏳️';
}
