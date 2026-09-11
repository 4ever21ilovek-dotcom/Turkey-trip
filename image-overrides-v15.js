// v18 visual overrides
if(typeof IMGS!=='undefined'){IMGS.sunset=IMGS.balloon;}
if(typeof DAYS!=='undefined'){for(var i=0;i<DAYS.length;i++){var es=DAYS[i].events||[];for(var j=0;j<es.length;j++){if(es[j][1]==='日落观景台')es[j][3]='sunset';}}}

(function(){
  var key='turkeyTripUnlockedV18';
  try{if(sessionStorage.getItem(key)==='1')return;}catch(e){}
  var gate=document.createElement('div');
  gate.id='tripLock';
  gate.setAttribute('style','position:fixed;inset:0;z-index:2147483647;background:#f3f0e8;display:flex;align-items:center;justify-content:center;padding:24px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:#18201a');
  gate.innerHTML='<div style="box-sizing:border-box;width:100%;max-width:420px;background:#fbfaf6;border-radius:28px;padding:28px 24px;text-align:center;box-shadow:0 24px 70px rgba(24,32,26,.16)"><div style="font-size:10px;letter-spacing:.16em;color:#6c726b;font-weight:800">PRIVATE TRIP</div><h1 style="font-family:Georgia,serif;font-size:32px;font-weight:500;margin:8px 0">Turkey Road Trip</h1><p style="font-size:13px;color:#6c726b">请输入访问密码后继续。</p><input id="tripPassword" type="password" inputmode="numeric" autocomplete="off" placeholder="输入密码" style="box-sizing:border-box;width:100%;height:50px;border:1px solid #d9d8cf;border-radius:15px;background:#fff;padding:0 14px;font-size:18px;text-align:center;letter-spacing:.16em"><button id="tripUnlock" type="button" style="width:100%;height:48px;border:0;border-radius:15px;background:#24483b;color:#fff;font-size:14px;font-weight:800;margin-top:10px">进入行程</button><div id="tripLockError" style="min-height:20px;margin-top:10px;font-size:12px;color:#a8563c"></div></div>';
  document.body.appendChild(gate);
  document.documentElement.style.overflow='hidden';
  document.body.style.overflow='hidden';
  function unlock(){
    var input=document.getElementById('tripPassword');
    var value=input?String(input.value).replace(/\s/g,''):'';
    var expected=window.atob('MzMyMjEx');
    if(value===expected){
      try{sessionStorage.setItem(key,'1');}catch(e){}
      gate.style.display='none';
      document.documentElement.style.overflow='';
      document.body.style.overflow='';
      return false;
    }
    document.getElementById('tripLockError').innerHTML=value?'密码不正确，请重试':'请输入密码';
    return false;
  }
  document.getElementById('tripUnlock').onclick=unlock;
  document.getElementById('tripPassword').onkeyup=function(e){e=e||window.event;if((e.keyCode||e.which)===13)unlock();};
})();
