(function(){
var pages=['home','services','dashboard','about','contact'];
var titles={home:'IronPulse – Gym Management & Maintenance Software',services:'Services – IronPulse',dashboard:'Dashboard Demo – IronPulse',about:'About Us – IronPulse',contact:'Contact – IronPulse'};
function show(id){
 if(pages.indexOf(id)<0)id='home';
 pages.forEach(function(p){document.getElementById(p).classList.toggle('on',p===id)});
 document.querySelectorAll('nav a').forEach(function(a){a.classList.toggle('on',a.getAttribute('data-go')===id)});
 document.title=titles[id];
 document.getElementById('menu').classList.remove('open');
 document.getElementById('burger').setAttribute('aria-expanded','false');
 window.scrollTo(0,0);
}
function cur(){return (location.hash||'').replace('#','')}
document.addEventListener('click',function(e){
 var a=e.target.closest('[data-go]');
 if(a){e.preventDefault();var id=a.getAttribute('data-go');try{location.hash=id}catch(x){}show(id)}
});
window.addEventListener('hashchange',function(){show(cur())});
document.getElementById('burger').onclick=function(){
 var m=document.getElementById('menu'),o=m.classList.toggle('open');this.setAttribute('aria-expanded',o)};
// calendar
var c=document.getElementById('cal'),h='';
['M','T','W','T','F','S','S'].forEach(function(d){h+='<div class="h">'+d+'</div>'});
h+='<div></div><div></div><div></div><div></div>';
for(var d=1;d<=31;d++){var cl=d===22?'t':(d===23||d===30||d===12?'e':'');h+='<div class="'+cl+'">'+d+'</div>'}
c.innerHTML=h;
// form
document.getElementById('form').addEventListener('submit',function(e){
 e.preventDefault();var f=e.target,err=document.getElementById('err'),ok=document.getElementById('ok');
 ok.style.display='none';err.textContent='';
 if(!f.n.value.trim()||!f.m.value.trim()){err.textContent='Please fill in your name and message.';return}
 if(!/^\S+@\S+\.\S+$/.test(f.e.value)){err.textContent='Please enter a valid email address.';return}
 ok.style.display='block';f.reset();
});
show(cur());
})();
