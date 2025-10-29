interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  gravity: number;
  life: number;
  maxLife: number;
}

const colors = [
  '#ff69b4', 
  '#ff1493', 
  '#ff6347', 
  '#ff4500', 
  '#ffa500', 
  '#ffb6c1', 
  '#ffc0cb', 
  '#ff69b4',
  '#ff1493', 
  '#da70d6', 
  '#ba55d3', 
  '#9370db'  
];


export function createConfetti(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  const particles: Particle[] = [];
  let animationId: number;

  const resizeCanvas = () => {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  };

  resizeCanvas();

  const createParticles = () => {
    const particleCount = 200; 
    const canvasRect = canvas.getBoundingClientRect();
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvasRect.width / 2,
        y: canvasRect.height / 2,
        vx: (Math.random() - 0.5) * 20, 
        vy: (Math.random() - 0.5) * 20 - 8, 
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4, 
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        gravity: 0.4 + Math.random() * 0.3,
        life: 0,
        maxLife: 180 + Math.random() * 120 
      });
    }
  };

  const animate = () => {
    const canvasRect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);

    particles.forEach((particle, index) => {
      
      particle.vy += particle.gravity;
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;
      particle.life++;

      
      const alpha = Math.max(0, 1 - (particle.life / particle.maxLife) * 0.8); 
      
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      
     
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 3;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      
      ctx.fillStyle = particle.color;
      ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
      
      ctx.restore();

    
      if (particle.life >= particle.maxLife || particle.y > canvasRect.height + 50) {
        particles.splice(index, 1);
      }
    });

    if (particles.length > 0) {
      animationId = requestAnimationFrame(animate);
    }
  };


  createParticles();
  animate();


  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    particles.length = 0;
  };
}