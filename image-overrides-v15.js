// v17: stable visual overrides + robust password gate
if(typeof IMGS!=='undefined'){IMGS.sunset=IMGS.balloon;}
if(typeof DAYS!=='undefined'){for(const d of DAYS){for(const e of (d.events||[])){if(e[1]==='日落观景台')e[3]='sunset';}}}

(function(){
  const SESSION_KEY='turkeyTripUnlockedV17';
  try{ if(sessionStorage.getItem(SESSION_KEY)==='1') return; }catch(e){}

  document.documentElement.style.overflow='hidden';
  const style=document.createElement('style');
  style.id='tripLockStyle';
  style.textContent=`
    #tripLock{position:fixed;inset:0;z-index:2147483647;background:#f3f0e8;display:flex;align-items:center;justify-content:center;padding:24px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC",sans-serif;color:#18201a}
    #tripLock .lock-card{width:min(420px,100%);background:#fbfaf6;border:1px solid rgba(24,32,26,.09);border-radius:28px;padding:28px 24px;box-shadow:0 24px 70px rgba(24,32,26,.16);text-align:center}
    #tripLock .lock-mark{width:54px;height:54px;border-radius:18px;background:#24483b;color:white;display:grid;place-items:center;margin:0 auto 18px;font-size:24px}
    #tripLock .lock-kicker{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6c726b;font-weight:800}
    #tripLock h1{font-family:Georgia,"Times New Roman",serif;font-size:32px;font-weight:500;letter-spacing:-.03em;margin:8px 0 8px}
    #tripLock p{font-size:13px;line-height:1.6;color:#6c726b;margin:0 0 18px}
    #tripLock input{width:100%;height:50px;border:1px solid #d9d8cf;border-radius:15px;background:white;padding:0 14px;font-size:18px;text-align:center;letter-spacing:.16em;outline:none;color:#18201a}
    #tripLock input:focus{border-color:#24483b;box-shadow:0 0 0 3px rgba(36,72,59,.10)}
    #tripLock button{width:100%;height:48px;border:0;border-radius:15px;background:#24483b;color:white;font-size:14px;font-weight:800;margin-top:10px;cursor:pointer;-webkit-appearance:none;appearance:none}
    #tripLock .lock-error{min-height:20px;margin-top:10px;font-size:12px;color:#a8563c}
    #tripLock.shake .lock-card{animation:tripShake .28s ease}
    @keyframes tripShake{25%{transform:translateX(-7px)}50%{transform:translateX(7px)}75%{transform:translateX(-4px)}}
  `;
  document.head.appendChild(style);

  const gate=document.createElement('div');
  gate.id='tripLock';
  gate.innerHTML=`<form class="lock-card" id="tripLockForm"><div class="lock-mark">✦</div><div class="lock-kicker">Private trip</div><h1>Turkey Road Trip</h1><p>这是私人旅行计划。请输入访问密码后继续。</p><input id="tripPassword" type="password" inputmode="numeric" autocomplete="off" placeholder="输入密码" aria-label="访问密码"><button id="tripUnlock" type="submit">进入行程</button><div class="lock-error" id="tripLockError"></div></form>`;
  document.body.appendChild(gate);

  function unlock(e){
    if(e) e.preventDefault();
    const input=document.getElementById('tripPassword');
    const error=document.getElementById('tripLockError');
    const value=(input?.value||'').trim();
    if(value==='332211'){
      try{sessionStorage.setItem(SESSION_KEY,'1');}catch(err){}
      gate.remove();
      style.remove();
      document.documentElement.style.overflow='';
      window.scrollTo(0,0);
      return false;
    }
    error.textContent=value?'密码不正确，请重试':'请输入密码';
    if(input){input.focus();input.select();}
    gate.classList.remove('shake');
    void gate.offsetWidth;
    gate.classList.add('shake');
    return false;
  }

  document.getElementById('tripLockForm').addEventListener('submit',unlock);
  document.getElementById('tripUnlock').addEventListener('touchend',function(e){e.preventDefault();unlock(e);},{passive:false});
  setTimeout(()=>document.getElementById('tripPassword')?.focus(),80);
})();
