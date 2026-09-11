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
      xhr.open('GET','turkey-travel-offline.html?v=12',false);
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
  applyOfflineAssets();
})();
