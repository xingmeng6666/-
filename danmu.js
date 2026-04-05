const box = document.querySelector('.danmu-box');
const texts = [
  '恩佐你记住 这一次雪莉老师没了 是因为你太弱小了 是你又一次害死了她',
  '雪莉老师第一次是因你而死！第二次也是因为你的弱小，为了保护你而死！',
  '你实在是太弱小了，如果你强大到精灵王也不是你的对手，谁敢阻拦你复活雪莉老师！',
  '恩佐都怪你不够强大打不过精灵王，所以雪梨老师才再一次离开了你！',
  '如果你够强的话……',
  '恩佐你记住了，雪莉老师刚复活的时候，知道你献祭草系精灵，可没有指责你',
  '就是因为你太弱小，雪莉老师才为了救你第二次献出了生命，就如第一次救你一样，而你只能眼睁睁看着',
  '看着雪莉老师又一次为你而死，因为你的弱小，你什么都做不到，你什么都做不到'
];

function randColor() {
  const colors = [
    // 暗血系
    '#1a0000','#330000','#4a0000','#660000','#800000',
    // 尸腐绿
    '#0a1a10','#112211','#1a2e1a','#223322',
    // 诡谲紫
    '#1b0f2b','#221533','#281838','#302042',
    // 死寂黑灰
    '#08080b','#0d0d0d','#121212','#171717',
    // 👻 惨白鬼影色（低概率出现，最吓人）
    '#e0e0ff','#d0d0e0','#c0c0d0'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

const totalTrack = 12;
const trackHeight = 7;

for (let i = 0; i < 12; i++) {
  let el = document.createElement('div');
  el.className = 'danmu';
  el.innerText = texts[Math.floor(Math.random() * texts.length)];

  // 轨道防重叠
  el.style.top = (i % totalTrack) * trackHeight + 'vh';
  el.style.fontSize = Math.random() * 15 + 18 + 'px';
  el.style.color = randColor();
  
  // 随机滚动速度（更慢更诡异）
  el.style.animationDuration = Math.random() * 10 + 10 + 's';
  el.style.animationDelay = Math.random() * 6 + 's';
  
  // 🔥 恐怖效果随机开启
  // 随机透明度
  el.style.opacity = Math.random() * 0.4 + 0.6;
  // 随机模糊强度
  el.style.filter = `blur(${Math.random() * 0.8}px)`;
  // 概率触发闪烁
  if (Math.random() > 0.4) {
    el.style.animation += `, horrorFlicker ${Math.random()*2+3}s infinite`;
  }
  // 概率触发轻微抖动
  if (Math.random() > 0.6) {
    el.style.animation += `, horrorShake ${Math.random()*4+5}s infinite`;
  }

  box.appendChild(el);
}