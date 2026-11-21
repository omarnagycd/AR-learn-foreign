'use strict';
const wordGroups=[{id:'food',en:'Food & drinks',ar:'أكل ومشروبات',source:'https://openbooks.lib.msu.edu/arb101/chapter/vocabulary/'},{id:'home',en:'At home',ar:'في البيت',source:'https://openbooks.lib.msu.edu/arb101/chapter/vocabulary-and-reading/'},{id:'world',en:'Around you',ar:'حواليك',source:'https://openbooks.lib.msu.edu/arb101/chapter/vocabulary-and-reading/'}];
const words=[
{id:'bread',ar:'خُبْز',en:'Bread',latin:'khubz',group:'food'},
{id:'milk',ar:'حَلِيب',en:'Milk',latin:'ḥaliib',group:'food'},
{id:'chicken',ar:'دَجَاج',en:'Chicken',latin:'dajaaj',group:'food'},
{id:'salad',ar:'سَلَطَة',en:'Salad',latin:'salaṭa',group:'food'},
{id:'door',ar:'بَاب',en:'Door',latin:'baab',group:'home'},
{id:'chair',ar:'كُرْسِيّ',en:'Chair',latin:'kursii',group:'home'},
{id:'table',ar:'طَاوِلَة',en:'Table',latin:'ṭaawila',group:'home'},
{id:'bed',ar:'سَرِير',en:'Bed',latin:'sariir',group:'home'},
{id:'tree',ar:'شَجَرَة',en:'Tree',latin:'shajara',group:'world'},
{id:'flower',ar:'وَرْدَة',en:'Flower',latin:'warda',group:'world'},
{id:'cat',ar:'قِطَّة',en:'Cat',latin:'qiṭṭa',group:'world',source:'https://openbooks.lib.msu.edu/arb101/chapter/vocabulary-and-grammar-2/'},
{id:'car',ar:'سَيَّارَة',en:'Car',latin:'sayyaara',group:'world',source:'https://openbooks.lib.msu.edu/arb101/chapter/vocabulary-and-grammar-2/'}
];
function wordSource(w){return w.source||wordGroups.find(g=>g.id===w.group).source}
function wText(en,ar){return interfaceLanguage==='ar'?ar:en}
function wordImage(w,quiz=false){return `<img class="word-picture" src="/images/words/${w.id}.webp" alt="${quiz?wText('Picture to identify. Choose the Arabic word below.', 'صورة للتعرف عليها. اختار الكلمة العربية تحتها.'):wText(w.en,w.ar)}">`}
