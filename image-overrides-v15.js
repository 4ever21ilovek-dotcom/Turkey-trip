// v19: stable visuals, password gate, and in-page tour-guide notes
if(typeof IMGS!=='undefined'){IMGS.sunset=IMGS.balloon;}
if(typeof DAYS!=='undefined'){
  for(var i=0;i<DAYS.length;i++){
    var es=DAYS[i].events||[];
    for(var j=0;j<es.length;j++){
      if(es[j][1]==='日落观景台')es[j][3]='sunset';
      if(es[j][1]&&es[j][1].indexOf('蓝色清真寺')>-1)es[j][3]='blue';
    }
  }
}

(function(){
  var key='turkeyTripUnlockedV19';
  try{if(sessionStorage.getItem(key)==='1')return;}catch(e){}
  if(document.getElementById('tripLock'))return;
  var gate=document.createElement('div');
  gate.id='tripLock';
  gate.setAttribute('style','position:fixed;inset:0;z-index:2147483647;background:#f3f0e8;display:flex;align-items:center;justify-content:center;padding:24px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:#18201a');
  gate.innerHTML='<div style="box-sizing:border-box;width:100%;max-width:420px;background:#fbfaf6;border-radius:28px;padding:28px 24px;text-align:center;box-shadow:0 24px 70px rgba(24,32,26,.16)"><div style="font-size:10px;letter-spacing:.16em;color:#6c726b;font-weight:800">PRIVATE TRIP</div><h1 style="font-family:Georgia,serif;font-size:32px;font-weight:500;margin:8px 0">Turkey Road Trip</h1><p style="font-size:13px;color:#6c726b">请输入访问密码后继续。</p><input id="tripPassword" type="password" inputmode="numeric" autocomplete="off" placeholder="输入密码" style="box-sizing:border-box;width:100%;height:50px;border:1px solid #d9d8cf;border-radius:15px;background:#fff;padding:0 14px;font-size:18px;text-align:center;letter-spacing:.16em"><button id="tripUnlock" type="button" style="width:100%;height:48px;border:0;border-radius:15px;background:#24483b;color:#fff;font-size:14px;font-weight:800;margin-top:10px;-webkit-appearance:none;appearance:none">进入行程</button><div id="tripLockError" style="min-height:20px;margin-top:10px;font-size:12px;color:#a8563c"></div></div>';
  document.body.appendChild(gate);
  document.documentElement.style.overflow='hidden';
  document.body.style.overflow='hidden';
  function unlock(){
    var input=document.getElementById('tripPassword');
    var value=input?String(input.value).replace(/\s/g,''):'';
    if(value==='332211'){
      try{sessionStorage.setItem(key,'1');}catch(e){}
      gate.remove();
      document.documentElement.style.overflow='';
      document.body.style.overflow='';
      return false;
    }
    var err=document.getElementById('tripLockError');
    if(err)err.textContent=value?'密码不正确，请重试':'请输入密码';
    if(input){input.focus();input.select();}
    return false;
  }
  document.getElementById('tripUnlock').onclick=unlock;
  document.getElementById('tripPassword').onkeydown=function(e){e=e||window.event;if((e.keyCode||e.which)===13){if(e.preventDefault)e.preventDefault();unlock();return false;}};
})();

var TOUR_GUIDES=[
  {m:'圣索菲亚',must:'抬头看中央大穹顶，再找拜占庭马赛克与巨型伊斯兰书法圆盘同框。这里最值得看的不是某一件文物，而是基督教与伊斯兰两套视觉系统叠在同一空间里。',story:'公元532年的“尼卡暴动”烧毁前代教堂后，查士丁尼一世下令重建，537年完工。1453年奥斯曼征服君士坦丁堡后改为清真寺；20世纪一度作为博物馆，后来再次恢复清真寺功能。你站的其实是1500年帝国更替的现场。'},
  {m:'蓝色清真寺',must:'先在广场上看它与圣索菲亚隔空对望，再进内部看成片的伊兹尼克蓝、绿、白瓷砖和层层下落的穹顶。六座宣礼塔是它最容易辨认的外部特征。',story:'苏丹艾哈迈德一世在1609—1617年间兴建，由Sedefkâr Mehmed Ağa设计。关于“六座宣礼塔”，最有名的传说是苏丹想要“金色（altın）”宣礼塔，建筑师却听成“六座（altı）”；这属于民间轶闻，不是确证史实，但当地导游很爱讲。'},
  {m:'地下水宫',must:'一定走到最深处看两颗美杜莎头像：一颗横放、一颗倒置。再回头看336根柱子在水面中的倒影，会更容易理解这里为什么被叫作“地下宫殿”。',story:'现存水宫主要形成于查士丁尼一世时期，用来为大皇宫周边储水。柱子和美杜莎头像大量使用了旧建筑构件。美杜莎为何倒着放，没有定论；最朴素的解释只是为了垫到合适高度。'},
  {m:'托普卡帕',must:'优先看后宫、帝国议事厅、珍宝馆和面向博斯普鲁斯的露台。别只把它当“皇宫”，四重庭院从公共到私密的层层递进，本身就是奥斯曼权力秩序。',story:'征服君士坦丁堡后的穆罕默德二世自1459年起营建这座“新宫”。此后约四百年，它既是苏丹居所，也是行政、教育、外交与礼仪中心。1856年宫廷迁往更欧式的多尔玛巴赫切宫，象征帝国审美和政治重心的变化。'},
  {m:'加拉塔塔',must:'上塔后不要只拍海峡，重点找金角湾、历史半岛和博斯普鲁斯三条城市线。黄昏时能最直观看到伊斯坦布尔“七丘城市”的层次。',story:'今天的塔主要由热那亚人在1348年修建，是其加拉塔城防体系的一部分；奥斯曼时期长期兼作火警瞭望塔。当地常讲17世纪Hezarfen Ahmed Çelebi从这里飞越博斯普鲁斯的故事，但它更接近传奇叙事。'},
  {m:'多尔玛巴赫切',must:'重点看水晶楼梯、礼仪大厅和苏丹私人区，最后别错过阿塔图尔克去世的房间。这里的“欧洲宫廷感”正好和托普卡帕形成鲜明对比。',story:'宫殿在19世纪中叶建成，融合巴洛克、洛可可、新古典与奥斯曼元素。1856年后成为主要皇宫。土耳其共和国建立后，阿塔图尔克也曾在此办公并于1938年11月10日在宫中去世。'},
  {m:'博斯普鲁斯',must:'坐船时把视线放在两岸：多尔玛巴赫切、奥尔塔柯伊清真寺、跨海大桥、沿岸木质豪宅会依次出现。真正的看点是“欧洲岸”和“亚洲岸”同时在眼前展开。',story:'这条海峡连接黑海与马尔马拉海，也是欧亚之间的天然分界。1453年前，穆罕默德二世修建Rumeli Hisarı控制海峡航运，为攻取君士坦丁堡做准备，所以这里从来不只是风景线，也是帝国战略咽喉。'},
  {m:'格雷梅露天博物馆',must:'优先看黑暗教堂 Dark Church、苹果教堂和蛇教堂。黑暗教堂因为采光少，壁画颜色保存尤其鲜艳，值得单独购票。',story:'这里是6—13世纪卡帕多奇亚基督教修道与礼拜空间的集中遗存。火山凝灰岩很软，人们能直接在山体里挖出教堂、食堂和住处，再把《圣经》场景画到墙上。'},
  {m:'日落观景台',must:'太阳落下前20—30分钟就到，先看玫瑰谷、鸽子谷一带由金色转粉红，再等天色变蓝。别只盯太阳，真正好看的是岩壁颜色变化。',story:'卡帕多奇亚的奇岩来自火山灰凝结成的凝灰岩，之后被风雨长期侵蚀。所谓“仙人烟囱”并不是单个景点，而是千万年地质作用留下的巨大地貌实验室。'},
  {m:'热气球',must:'起飞后先看脚下峡谷与岩柱，再抬头看数十只气球同框。日出前后10—15分钟是颜色最梦幻的时段。',story:'热气球本身不是古迹，但它让你用最直观的方式看懂卡帕多奇亚：平地、峡谷、火山锥与聚落高度关系会一下子变得非常清楚。'},
  {m:'帕夏贝',must:'这里要看最典型的“蘑菇头”仙人烟囱，以及岩柱里凿出的隐修空间。相比只拍远景，靠近后看岩层帽盖和柱身材质差异更有意思。',story:'帕夏贝也常被称为“修士谷”。早期基督教隐修者曾利用天然岩柱开凿小室和礼拜空间；与圣西缅相关的隐修传统，是当地导游最常讲的宗教故事之一。'},
  {m:'乌奇希萨尔',must:'一定登到高处看360°全景：晴天能看到格雷梅、鸽子谷甚至远处的埃尔吉耶斯山。它更像“天然城堡”，而不是传统意义上的石砌城堡。',story:'这块巨大的凝灰岩山体被历代居民不断掏空，形成房间、通道和防御空间。它长期承担瞭望与避难功能，是理解卡帕多奇亚“住进岩石里”的最好例子。'},
  {m:'代林库尤',must:'注意圆形滚石门、纵向通风井、储藏室和狭窄通道。越往下越能体会它不是普通地窖，而是一套能长期躲避战乱的地下生活系统。',story:'地下城是在柔软火山岩中逐层开凿并经多个时代扩展的。公开区域可见多层空间，包括教堂、水井与通风设施；它与早期基督徒躲避冲突和宗教迫害的历史长期联系在一起。'},
  {m:'Ihlara',must:'沿Melendiz河走一段就够，重点进几座岩壁教堂看壁画。峡谷最特别的地方，是荒凉高原突然切出一条有水、有树的绿色裂谷。',story:'河流长期切割火山岩形成峡谷，拜占庭时期的宗教群体又在峭壁上开凿了大量教堂和修道空间，因此这里同时是地质景观和宗教遗址。'},
  {m:'Selime',must:'爬进岩窟后重点看大教堂式空间、柱廊和高处视野。它比格雷梅更粗犷，像一整座被掏空的石山。',story:'Selime是卡帕多奇亚规模很大的岩窟宗教建筑群，包含礼拜、居住和公共空间。它位于历史交通路线附近，既有修道功能，也反映了高原地区长期的人群往来。'},
  {m:'哈德良门',must:'站到城门两侧看三拱门、科林斯柱式和古老石板路，最容易看出罗马城市入口的仪式感。穿过门后就是Kaleiçi老城，时代切换非常明显。',story:'城门约建于公元130年前后，用来纪念罗马皇帝哈德良访问安塔利亚。后来它被城市防御体系包在墙内，反而因此保存得比很多古罗马城门更完整。'},
  {m:'Antalya 老城',must:'早上重点看哈德良门、弯曲石巷、奥斯曼老宅和旧港。别赶路，Kaleiçi最好的体验就是在小巷里不断看到罗马、拜占庭、塞尔柱和奥斯曼痕迹混在一起。',story:'安塔利亚古城核心经历了从罗马港城到拜占庭、塞尔柱和奥斯曼统治的多次转换，所以这里不是单一年代的“古城”，而是一层层叠加的城市。'},
  {m:'Kaputaş',must:'从公路观景点先拍全景，再下长楼梯到海滩。中午前后海水最容易出现亮蓝和青绿渐变；风浪大时不要勉强下水。',story:'Kaputaş形成在狭窄峡谷出海口，山体把海滩夹在D400与地中海之间。它的震撼感来自尺度：公路、悬崖、峡谷和小海湾几乎挤在同一个画面里。'},
  {m:'Kaş',must:'除了港口和白房子，留意镇中心的吕基亚石棺；如果时间够，可去古剧场看海。这样你会发现Kaş并不只是“漂亮海边小镇”。',story:'Kaş对应古代安提菲洛斯 Antiphellos，属于吕基亚文化圈。今天镇上还能看到石棺、剧场等古代遗存，所以它其实是一座建立在古城之上的现代海滨小镇。'},
  {m:'Ölüdeniz',must:'从高处先看蓝湖与外海被沙嘴分开的形状，再下到水边。上午风通常更小，湖面更像镜子。',story:'Ölüdeniz直译近似“死海/静海”，名字来自泻湖水面异常平静。它的核心价值不是古迹，而是被沙嘴半封闭形成的独特泻湖地貌。'},
  {m:'Pamukkale',must:'重点不是“白色山坡”，而是看温泉水如何沿台阶流动并不断沉积白色钙华。赤脚走允许开放的水道，日落时白色会变成粉金色。',story:'富含方解石的温泉从近200米高的断崖流下，长期沉积形成层层钙华池，“Pamukkale”意为“棉花城堡”。古人正因为这些温泉，在山顶建立了Hierapolis疗养城市。'},
  {m:'Hierapolis',must:'罗马剧场一定要爬上去看，其次看长达数公里的墓地群和古城主街。时间够再看Plutonium与圣腓力纪念建筑。',story:'这座温泉城由帕加马王国在公元前2世纪末建立，罗马时期繁盛。公元60年前后的大地震后重建，后来又成为重要的早期基督教中心。这里本质上是一座“古代温泉疗养城”。'},
  {m:'以弗所',must:'从Curetes Street一路走到塞尔苏斯图书馆，再看大剧场；若体力和预算允许，露台屋 Terrace Houses 很值得，因为能看到真正的罗马富人住宅内部。',story:'以弗所在罗马时期是亚细亚行省的重要中心和港口城市。塞尔苏斯图书馆其实兼具纪念墓功能；附近阿尔忒弥斯神庙曾是古代世界七大奇迹之一。随着海岸线不断后退、港口淤积，城市最终失去海港优势。'}
];

(function(){
  var css=document.createElement('style');
  css.textContent='.guide-panel{display:none;margin-top:10px;padding:13px 14px;border:1px solid #dedbd0;border-radius:16px;background:#f3f0e8;color:#27332d}.guide-panel.show{display:block}.guide-panel .guide-row{padding:8px 0;border-top:1px solid rgba(39,51,45,.10)}.guide-panel .guide-row:first-child{border-top:0;padding-top:0}.guide-panel .guide-label{display:inline-block;margin-bottom:4px;padding:3px 7px;border-radius:999px;background:#24483b;color:#fff;font-size:9px;font-weight:850;letter-spacing:.08em}.guide-panel .guide-label.story{background:#a8563c}.guide-panel p{margin:0!important;color:#4f5751!important;font-size:11.5px!important;line-height:1.65!important}.btn.guide.is-open{background:#24483b!important;border-color:#24483b!important;color:#fff!important}';
  document.head.appendChild(css);
  function findGuide(title){for(var i=0;i<TOUR_GUIDES.length;i++){if(title.indexOf(TOUR_GUIDES[i].m)>-1)return TOUR_GUIDES[i];}return null;}
  function enhance(){
    var events=document.querySelectorAll('.event');
    for(var i=0;i<events.length;i++){
      var ev=events[i];
      var h=ev.querySelector('h4');
      if(!h)continue;
      var title=h.textContent||'';
      if(title.indexOf('蓝色清真寺')>-1 && typeof IMGS!=='undefined' && IMGS.blue){
        var img=ev.querySelector('.spot-img');
        if(!img){
          img=document.createElement('img');
          img.className='spot-img';
          img.alt=title;
          h.insertAdjacentElement('afterend',img);
        }
        img.loading='eager';
        img.src=IMGS.blue;
      }
      var btn=ev.querySelector('a.btn.guide');
      if(!btn)continue;
      var data=findGuide(title);
      if(!data){btn.style.display='none';continue;}
      btn.removeAttribute('href');
      btn.removeAttribute('target');
      btn.setAttribute('role','button');
      btn.style.cursor='pointer';
      btn.textContent='导游讲解 ↓';
      var panel=document.createElement('div');
      panel.className='guide-panel';
      panel.innerHTML='<div class="guide-row"><span class="guide-label">必看</span><p>'+data.must+'</p></div><div class="guide-row"><span class="guide-label story">历史典故</span><p>'+data.story+'</p></div>';
      var actions=btn.closest('.actions');
      if(actions)actions.insertAdjacentElement('afterend',panel);
      btn.onclick=(function(b,p){return function(e){if(e)e.preventDefault();var open=p.classList.toggle('show');b.classList.toggle('is-open',open);b.textContent=open?'收起讲解 ↑':'导游讲解 ↓';return false;};})(btn,panel);
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(enhance,0);});else setTimeout(enhance,0);
})();
