(function(){
  function extractObject(text,name){
    var marker='const '+name+'=';
    var start=text.indexOf(marker);
    if(start<0)return null;
    start+=marker.length;
    while(/\s/.test(text[start]))start++;
    if(text[start]!=='{')return null;
    var depth=0,inStr=false,esc=false;
    for(var i=start;i<text.length;i++){
      var ch=text[i];
      if(inStr){
        if(esc){esc=false;continue;}
        if(ch==='\\'){esc=true;continue;}
        if(ch==='"')inStr=false;
        continue;
      }
      if(ch==='"'){inStr=true;continue;}
      if(ch==='{')depth++;
      else if(ch==='}'){
        depth--;
        if(depth===0){
          try{return JSON.parse(text.slice(start,i+1));}catch(e){return null;}
        }
      }
    }
    return null;
  }

  function applyOfflineAssets(){
    try{
      var xhr=new XMLHttpRequest();
      xhr.open('GET','turkey-travel-offline.html?v=16',false);
      xhr.send(null);
      if(xhr.status && xhr.status>=400)throw new Error('offline asset file '+xhr.status);
      var text=xhr.responseText||'';
      var fullImgs=extractObject(text,'IMGS');
      if(fullImgs && typeof IMGS!=='undefined')Object.assign(IMGS,fullImgs);
      var fullRestaurants=extractObject(text,'RESTAURANTS');
      if(fullRestaurants && typeof RESTAURANTS!=='undefined'){
        Object.keys(fullRestaurants).forEach(function(k){
          if(RESTAURANTS[k] && fullRestaurants[k] && fullRestaurants[k].img && fullRestaurants[k].img.indexOf('data:image')===0){
            RESTAURANTS[k].img=fullRestaurants[k].img;
          }
        });
      }
      var carMatch=text.match(/<div class="car-photo"><img src="(data:image\/[^"]+)" alt="Citroën C3">/);
      var car=document.getElementById('carImg');
      if(carMatch && car)car.src=carMatch[1];
      window.__tripImagesEmbedded=true;
    }catch(err){
      console.warn('Embedded travel images could not be loaded',err);
    }
  }

  function applyV15Overrides(){
    try{
      var xhr=new XMLHttpRequest();
      xhr.open('GET','image-overrides-v15.js?v=16',false);
      xhr.send(null);
      if(xhr.status && xhr.status>=400)throw new Error('override file '+xhr.status);
      (0,eval)(xhr.responseText||'');
      window.__tripImageOverridesV15=true;
    }catch(err){
      console.warn('Image overrides could not be loaded',err);
    }
  }

  function setupBudgetCollapse(){
    var card=document.querySelector('#budget .budget-card');
    var total=card&&card.querySelector('.budget-total');
    if(!card||!total||card.querySelector('.budget-toggle'))return;

    var style=document.createElement('style');
    style.textContent='.budget-card.budget-collapsed #budgetRows,.budget-card.budget-collapsed .budget-note,.budget-card.budget-collapsed .budget-actions,.budget-card.budget-collapsed .budget-editor{display:none!important}.budget-toggle{width:100%;border:1px solid #d5d3ca;background:#f4f1e9;color:#27332d;border-radius:16px;padding:12px 14px;margin-top:10px;font-size:12px;font-weight:850;display:flex;align-items:center;justify-content:space-between;cursor:pointer}.budget-toggle span:last-child{font-size:17px;transition:.2s}.budget-card:not(.budget-collapsed) .budget-toggle span:last-child{transform:rotate(180deg)}';
    document.head.appendChild(style);

    var btn=document.createElement('button');
    btn.type='button';
    btn.className='budget-toggle';
    btn.innerHTML='<span>预算明细</span><span>⌄</span>';
    btn.addEventListener('click',function(){
      var collapsed=card.classList.toggle('budget-collapsed');
      btn.firstElementChild.textContent=collapsed?'预算明细':'收起预算明细';
    });
    total.insertAdjacentElement('afterend',btn);
    card.classList.add('budget-collapsed');
  }

  applyOfflineAssets();
  applyV15Overrides();
  setupBudgetCollapse();
})();
