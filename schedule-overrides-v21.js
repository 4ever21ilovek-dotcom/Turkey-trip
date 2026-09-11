// v22: D7 shooting moved to after 10:00, with the coastal route shifted accordingly
(function(){
if(typeof DAYS==='undefined') return;
function day(id){return DAYS.find(function(d){return d.id===id;});}
function removeBy(d,needle){if(!d||!d.events)return;d.events=d.events.filter(function(e){return !(e[1]&&e[1].indexOf(needle)>-1);});}

var d4=day('D4');
removeBy(d4,'骆驼骑乘体验');
if(d4){d4.summary='热气球 · 帕夏贝 · 爱情谷 · 乌奇希萨尔 · 鸽子谷';}

var d5=day('D5');
if(d5){
  removeBy(d5,'射击体验');
  removeBy(d5,'骆驼骑乘体验');
  d5.events=[
    ['08:00–09:15','早餐 + 酒店休整','activity',null,'Goreme',null,'给上午 10:00 的骑骆驼预留接送和准备时间。'],
    ['10:00–11:00','卡帕多西亚：骆驼骑乘体验，含酒店接送服务','activity','camel_booking','Camel Riding Cappadocia',['booked',null],'GetYourGuide 已订 · 9/30 10:00 · 2 人 · 英语 · 1 小时 · 酒店接送。具体接客时间以供应商最终通知为准。'],
    ['11:10–12:00','Göreme → Derinkuyu','drive',null,null,null,'骑骆驼结束后直接向南走绿线。'],
    ['12:00–13:15','代林库尤地下城','attraction','derinkuyu','Derinkuyu Underground City',['todo','https://muze.gov.tr/urun-detay?CatalogNo=WEB-DKY01-01-008'],'地下 8 层；幽闭恐惧慎入。'],
    ['13:15–14:00','Derinkuyu → Ihlara','drive',null,null,null,'约 40 km。'],
    ['14:00–15:30','Ihlara 峡谷徒步','attraction','ihlara','Ihlara Valley',['onsite',null],'控制在约 1.5 小时，避免影响晚上的已订活动。'],
    ['16:00–17:00','Selime 修道院','attraction','selime','Selime Monastery',['onsite',null],'大型宗教洞穴建筑群。'],
    ['17:00–19:20','Selime → Uçhisar · 休息 / 简单补给','drive',null,null,null,'晚上活动集合点就在 Uçhisar，不必先绕回 Göreme。'],
    ['19:50 集合 · 20:05–23:05','卡帕多西亚：洞穴餐馆中的土耳其晚间表演与晚餐','activity','turkishnight_booking','Yaşar Baba Restaurant Uçhisar',['booked',null],'GetYourGuide 已订 · 2026/9/30 20:05 · 2 人 · 英语 · 3 小时。19:50 前到 Yaşar Baba 餐厅：Yukarı, Başoğlu Cd. No:47, 50240 Uçhisar/Nevşehir。']
  ];
  d5.summary='10:00 骑骆驼 · 绿线 · 20:05 Turkish Night';
}

var d7=day('D7');
if(d7){
  removeBy(d7,'射击体验');
  d7.events=[
    ['08:30–09:30','Antalya 老城晨逛','attraction','antalya','Kaleici Antalya',['free',null],'早上人少、光线好。'],
    ['10:15–11:15','射击体验','activity','shooting_booking','Shooting Range Antalya',['todo',null],'按你的要求放在 10 点之后，并安排在离开 Antalya 跑 D400 之前。当前没有射击订单截图，具体场馆确认后再微调前后车程。'],
    ['11:15–14:15','D400 → Kaputaş Beach','drive',null,null,null,'射击结束后再正式上 D400；沿海观景台随停，注意弯道。'],
    ['14:15–15:30','Kaputaş Beach 游泳','activity','kaputas','Kaputas Beach',['free',null],'带泳衣；把海滩停留压到约 1 小时 15 分，避免后面太赶。'],
    ['16:00–17:15','Kaş 小镇 + 午餐','attraction','kas','Kas Antalya',['free',null],'白屋、海港、小店；当天会是偏晚午餐。'],
    ['17:15–19:15','Kaş → Fethiye / Ölüdeniz','drive',null,null,null,'沿海弯多，注意会车；天色转暗后降低车速。'],
    ['19:30–21:30','Ölüdeniz 海边晚餐','activity','oludeniz','Oludeniz Fethiye',null,'抵达后直接吃晚餐休息；第二天上午再安排蓝湖游泳。']
  ];
  d7.summary='Antalya · 10:15 射击 · D400 · Kaputaş · Kaş · Ölüdeniz';
}
})();
