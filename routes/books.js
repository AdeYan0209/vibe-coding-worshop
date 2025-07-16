const express = require('express');
const router = express.Router();

// 抽出書本資料陣列，方便重複使用
const books = [
  {
    title: '原子習慣：細微改變帶來巨大成就的實證法則',
    publishDate: '2019/06/01',
    imageUrl: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/082/25/0010822522.jpg&v=5cda990ck&w=348&h=348',
    summary: "每天都進步1%，一年後，你會進步37倍；每天都退步1%，一年後，你會弱化到趨近於0！你的一點小改變、一個好習慣，將會產生複利效應，如滾雪球般，為你帶來豐碩的人生成果！",
    author: '詹姆斯‧克利爾',
    isbn: '9789861755267'
  },
  {
    title: '人月神話：軟體專案管理之道（20週年紀念版）',
    publishDate: '：2004/04/04',
    imageUrl: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/025/45/0010254508.jpg&v=559baa9ek&w=348&h=348',
    summary: 'Frederick P. Brooks, Jr.任教於北卡羅萊納大學Chapel Hill分校，擔任計算機科學的Kenan講座教授。由於他在IBM System/360開發階段擔任專案經理一職，遂以「IBM System/360之父」聞名於世，隨後擔任過OS/360設計階段的軟體專案經理，為此，他與Bob Evans、Erich Bloch共同獲頒了1985年國家科技成就獎的殊榮，在此之前，還曾經是IBM Stretch和Harvest電腦的架構設計師。1999年，他獲頒美國計算機協會（ACM）的圖靈獎（A. M. Turing Award），這是在計算機領域中最具權威性的技術獎項，美國計算機協會盛讚他「對計算機結構、作業系統和軟體工程做出了劃時代的貢獻」。',
    author: 'Frederick P. Brooks, Jr.',
    isbn: '9789867889188'
  },
  {
    title: '矽谷最夯‧產品專案管理全書：專案管理大師教你用可實踐的流程打造人人都喜歡的產品',
    publishDate: '2019/05/02',
    imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/082/03/0010820309.jpg&v=609516c2k&w=348&h=348',
    // imageUrl: '',
    summary: '　當傳統產品朝數位化邁進、科技產品不再完全數位化時，專案管理面臨更多元服務、線上與線下體驗……各種獨特議題，創新的思維、複雜的工作、人力的配置、工程的整合都是挑戰，唯有擁抱受歡迎的產品、持續為客戶創新才能脫引而出！',
    author: '馬提．凱根 ',
    isbn: '9789867778628'
  },
  {
    title: '賈伯斯傳（紀念增訂版）',
    publishDate: '2023/05/31',
    imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/095/81/0010958103.jpg&v=646b4468k&w=348&h=348',
    summary: '這本賈伯斯生前唯一授權的傳記，談的不只是賈伯斯。人人都知道賈伯斯不遺餘力捍衛隱私，這位傳奇企業家從未寫過回憶錄，但自2009 年起，他接受本書作者艾薩克森多達四十餘次的深入訪談，並允許艾薩克森遍訪他的朋友、親戚、競爭對手、仇人和同事，總數超過一百人。在本書中，艾薩克森寫出「最真實的賈伯斯」，詳實描述這位創造力旺盛的企業家雲霄飛車般驚險刺激的一生。賈伯斯執著的個性、追求完美的熱情和狂猛的驅力，成功推動六大產業革命，包括個人電腦、動畫、音樂、手機、平板電腦和數位出版。而在賈伯斯出版十年後的這本紀念增訂版中，艾薩克森新增一篇後記，重新回顧賈伯斯的評價。他將賈伯斯比擬為達文西，認為兩人的創造天才都來自藝術與科學的交會口， 兩人都明白藝術與科學並不可分。',
    author: '華特．艾薩克森 ',
    isbn: '9786263552463'
  },
];

// 取得所有書本
router.get('/all', (req, res) => {
  res.json(books);
});

// 依 ISBN 查詢單一本書
router.get('/', (req, res) => {
  const { isbn } = req.query;
  if (!isbn) {
    return res.status(400).json({ error: '請提供 ISBN 參數' });
  }
  const book = books.find(b => b.isbn === isbn);
  if (!book) {
    return res.status(404).json({ error: '找不到該書本' });
  }
  res.json(book);
});

module.exports = router; 