// index.js

// 创建一个画布
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 添加画布到页面中
document.body.appendChild(canvas);

// 定义海浪参数
const wave = {
  yOffset: canvas.height / 2, // 波浪的垂直位置
  amplitude: 50, // 振幅
  wavelength: 200, // 波长
  speed: 0.05, // 波浪运动速度
  frequency: 0.02 // 波浪频率
};

// 绘制海浪函数
function drawWave() {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  for (let i = 0; i < canvas.width; i++) {
    const y = wave.yOffset + Math.sin(i * wave.frequency + wave.speed) * wave.amplitude * Math.sin(i / wave.wavelength);
    ctx.lineTo(i, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 119, 190, 0.5)';
  ctx.fill();
}

// 清除画布
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 动画循环
function animate() {
  clearCanvas();
  drawWave();
  requestAnimationFrame(animate);
}

// 开始动画
animate();

// 窗口大小改变时重新设置画布大小
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  wave.yOffset = canvas.height / 2;
});
