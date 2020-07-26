const clock = document.querySelector('.clock');
const count = document.querySelector('.count');

const time = ()=>{
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let mm = now.getMilliseconds();

  let lh = 24 - h;
  let lm = 60 - m;
  let ls = 60 - s;
  let lmm = 1000 - mm;

  if(h < 10){
    h = `0${h}`;
  }
  if(m < 10){
    m = `0${m}`;
  }
  if(s < 10){
    s = `0${s}`;
  }
  if(mm < 100){
    mm = `0${mm}`;
  }

  if(lh < 10){
    lh = `0${lh}`;
  }
  if(lm < 10){
    lm = `0${lm}`;
  }
  if(ls < 10){
    ls = `0${ls}`;
  }
  if(lmm < 100){
    lmm = `0${lmm}`;
  }

  const html = `
   <span>${h}</span>&nbsp;:&nbsp; 
  <span>${m}</span>&nbsp;:&nbsp;  
  <span>${s}</span>&nbsp;:&nbsp;  
  <span>${mm}</span> 
  `;

  const htmlLeft = `
   <span>${lh}</span>&nbsp;:&nbsp; 
  <span>${lm}</span>&nbsp;:&nbsp;  
  <span>${ls}</span>&nbsp;:&nbsp;  
  <span>${lmm}</span> 
  `;

  clock.innerHTML = html;

  count.innerHTML = htmlLeft;
  
};

setInterval(time, 100);