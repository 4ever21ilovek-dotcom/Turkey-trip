// v15: restore the better visual set without overriding the valid embedded Blue Mosque asset.
if(typeof IMGS!=='undefined'){IMGS.sunset=IMGS.balloon;}
if(typeof DAYS!=='undefined'){for(const d of DAYS){for(const e of (d.events||[])){if(e[1]==='日落观景台')e[3]='sunset';}}}
if(typeof RESTAURANTS!=='undefined'){const realPics={"D1":"https://images.weserv.nl/?url=https%3A%2F%2Fqul.imgix.net%2F358f96bb-def8-4457-8735-9fa1ba7c6b07%2F769413_sld.jpg&w=1000&h=650&fit=cover&output=webp&q=82","D2":"https://images.weserv.nl/?url=https%3A%2F%2Fd3h1lg3ksw6i6b.cloudfront.net%2Fmedia%2Fimage%2F2024%2F12%2F05%2F39c7a1f4469942bb968243abd21152bb_Lokanta_Feriye.jpg&w=1000&h=650&fit=cover&output=webp&q=82","D3":"https://images.weserv.nl/?url=https%3A%2F%2Fwww.turkiyeroutes.com%2Fimages%2Furunler%2Fisletme-topdeck-cave-restaurant-2750.png&w=1000&h=650&fit=cover&output=webp&q=82","D4":"https://images.weserv.nl/?url=https%3A%2F%2Ftcdn.mindtrip.ai%2Fimages%2F173881%2Ffulp27.png&w=1000&h=650&fit=cover&output=webp&q=82","D5":"https://images.weserv.nl/?url=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F18343a_cf8c74acaa2742dfa88f2f347b50262e~mv2.jpg%2Fv1%2Ffill%2Fw_980%252Ch_434%252Cal_c%252Cq_85%252Cusm_0.66_1.00_0.01%252Cenc_avif%252Cquality_auto%2F18343a_cf8c74acaa2742dfa88f2f347b50262e~mv2.jpg&w=1000&h=650&fit=cover&output=webp&q=82","D6":"https://images.weserv.nl/?url=https%3A%2F%2Fi.dugun.com%2Fgallery%2F55559%2F720x744_f_kaleici-balikci-meyhanesi_mu1FUJJ1.jpg&w=1000&h=650&fit=cover&output=webp&q=82","D7":"https://images.weserv.nl/?url=https%3A%2F%2Fairial.travel%2F_next%2Fimage%3Fq%3D80%26url%3Dhttps%253A%252F%252Fmedia-cdn.tripadvisor.com%252Fmedia%252Fphoto-w%252F2a%252F86%252F91%252Fca%252Fcaption.jpg%26w%3D1600&w=1000&h=650&fit=cover&output=webp&q=82","D8":"https://images.weserv.nl/?url=https%3A%2F%2Fcdn.restoranim.net%2Fpamukkale-mom-eve-restaurant-pub-wine-house-caf1f96c.jpg&w=1000&h=650&fit=cover&output=webp&q=82","D9":"https://images.weserv.nl/?url=https%3A%2F%2Fstatic.where-e.com%2FTurkey%2FIzmir_Province%2FSelcuk%2FEjder-Restaurant_71336f1892d65a40217e5064cdac5689.jpg&w=1000&h=650&fit=cover&output=webp&q=82","D10":"https://images.weserv.nl/?url=https%3A%2F%2Fwww.gastronomidergisi.com%2Fimages%2Fhaber%2Fads%25C4%25B1z%2520tasar%25C4%25B1m7447.png&w=1000&h=650&fit=cover&output=webp&q=82"};Object.keys(realPics).forEach(k=>{if(RESTAURANTS[k])RESTAURANTS[k].img=realPics[k]});}

// Password gate. This is a client-side access screen for GitHub Pages.
(function(){
  const PASS_HASH='938521e0c82d69844e9024d3b71a59ecc7b4313160dea1e75287bf0b892f8446';
  const SESSION_KEY='turkeyTripUnlockedV16';
  if(sessionStorage.getItem(SESSION_KEY)==='1') return;

  document.documentElement.style.overflow='hidden';
  const style=document.createElement('style');
  style.textContent=`
    #tripLock{position:fixed;inset:0;z-index:2147483647;background:#f3f0e8;display:flex;align-items:center;justify-content:center;padding:24px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC",sans-serif;color:#18201a}
    #tripLock .lock-card{width:min(420px,100%);background:#fbfaf6;border:1px solid rgba(24,32,26,.09);border-radius:28px;padding:28px 24px;box-shadow:0 24px 70px rgba(24,32,26,.16);text-align:center}
    #tripLock .lock-mark{width:54px;height:54px;border-radius:18px;background:#24483b;color:white;display:grid;place-items:center;margin:0 auto 18px;font-size:24px}
    #tripLock .lock-kicker{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#6c726b;font-weight:800}
    #tripLock h1{font-family:Georgia,"Times New Roman",serif;font-size:32px;font-weight:500;letter-spacing:-.03em;margin:8px 0 8px}
    #tripLock p{font-size:13px;line-height:1.6;color:#6c726b;margin:0 0 18px}
    #tripLock input{width:100%;height:50px;border:1px solid #d9d8cf;border-radius:15px;background:white;padding:0 14px;font-size:18px;text-align:center;letter-spacing:.16em;outline:none;color:#18201a}
    #tripLock input:focus{border-color:#24483b;box-shadow:0 0 0 3px rgba(36,72,59,.10)}
    #tripLock button{width:100%;height:48px;border:0;border-radius:15px;background:#24483b;color:white;font-size:14px;font-weight:800;margin-top:10px;cursor:pointer}
    #tripLock .lock-error{height:20px;margin-top:10px;font-size:12px;color:#a8563c}
    #tripLock.shake .lock-card{animation:tripShake .28s ease}
    @keyframes tripShake{25%{transform:translateX(-7px)}50%{transform:translateX(7px)}75%{transform:translateX(-4px)}}
  `;
  document.head.appendChild(style);

  const gate=document.createElement('div');
  gate.id='tripLock';
  gate.innerHTML=`<div class="lock-card"><div class="lock-mark">✦</div><div class="lock-kicker">Private trip</div><h1>Turkey Road Trip</h1><p>这是私人旅行计划。请输入访问密码后继续。</p><input id="tripPassword" type="password" inputmode="numeric" autocomplete="current-password" placeholder="输入密码" aria-label="访问密码"><button id="tripUnlock">进入行程</button><div class="lock-error" id="tripLockError"></div></div>`;
  document.body.appendChild(gate);

  async function digest(text){
    const bytes=new TextEncoder().encode(text);
    const hash=await crypto.subtle.digest('SHA-256',bytes);
    return Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,'0')).join('');
  }
  async function unlock(){
    const input=document.getElementById('tripPassword');
    const error=document.getElementById('tripLockError');
    const value=input.value.trim();
    if(!value){error.textContent='请输入密码';return;}
    const hash=await digest(value);
    if(hash===PASS_HASH){
      sessionStorage.setItem(SESSION_KEY,'1');
      gate.remove();
      style.remove();
      document.documentElement.style.overflow='';
    }else{
      error.textContent='密码不正确，请重试';
      input.select();
      gate.classList.remove('shake');
      void gate.offsetWidth;
      gate.classList.add('shake');
    }
  }
  document.getElementById('tripUnlock').addEventListener('click',unlock);
  document.getElementById('tripPassword').addEventListener('keydown',e=>{if(e.key==='Enter')unlock();});
  setTimeout(()=>document.getElementById('tripPassword')?.focus(),50);
})();
