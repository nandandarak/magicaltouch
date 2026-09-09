import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '../public/sequence');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const WIDTH = 1920;
const HEIGHT = 1080;
const TOTAL_FRAMES = 30;

// Pressure points metadata
const pressurePoints = [
  { name: 'Cervical C5-C7', yRatio: 0.28, xOffset: 0, label: 'Neck & Shoulder Meridian' },
  { name: 'Thoracic T7', yRatio: 0.42, xOffset: 0, label: 'Mid-Back Meridian' },
  { name: 'Lumbar L4-L5', yRatio: 0.58, xOffset: 0, label: 'Sciatic Nerve Root' },
  { name: 'Sacral S1', yRatio: 0.68, xOffset: 0, label: 'Pelvic Meridian' },
  { name: 'Knee Pressure Point', yRatio: 0.78, xOffset: -60, label: 'GB34 Meridian' },
  { name: 'Knee Pressure Point R', yRatio: 0.78, xOffset: 60, label: 'ST36 Meridian' },
];

console.log(`Generating ${TOTAL_FRAMES} WebP frames (${WIDTH}x${HEIGHT})...`);

for (let f = 1; f <= TOTAL_FRAMES; f++) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');
  const progress = (f - 1) / (TOTAL_FRAMES - 1); // 0.0 to 1.0

  // 1. Dark Slate background (#020617)
  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // 2. Subtle Medical-Grade Emerald/Teal Glow Backdrop
  const bgGlow = ctx.createRadialGradient(WIDTH / 2, HEIGHT * 0.45, 50, WIDTH / 2, HEIGHT * 0.45, 600);
  bgGlow.addColorStop(0, `rgba(16, 185, 129, ${0.12 + progress * 0.15})`);
  bgGlow.addColorStop(0.5, `rgba(6, 182, 212, ${0.08 + progress * 0.1})`);
  bgGlow.addColorStop(1, 'rgba(2, 6, 23, 0)');
  ctx.fillStyle = bgGlow;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // 3. Draw Medical Holographic Grid Lines
  ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
  ctx.lineWidth = 1;
  const gridSize = 80;
  for (let x = 0; x < WIDTH; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, HEIGHT);
    ctx.stroke();
  }
  for (let y = 0; y < HEIGHT; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(WIDTH, y);
    ctx.stroke();
  }

  // Center alignment for 3D Spine and Meridian outline
  const cx = WIDTH / 2;
  const topY = HEIGHT * 0.15;
  const bottomY = HEIGHT * 0.85;

  // 4. Draw Human Body Silhouette (Subtle glassmorphic outline)
  ctx.save();
  ctx.strokeStyle = `rgba(51, 65, 85, ${0.4 + progress * 0.2})`;
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 6]);

  // Head outline
  ctx.beginPath();
  ctx.arc(cx, topY - 30, 45, 0, Math.PI * 2);
  ctx.stroke();

  // Torso / Legs schematic outline
  ctx.beginPath();
  ctx.moveTo(cx - 120, topY + 50); // shoulders
  ctx.lineTo(cx + 120, topY + 50);
  ctx.lineTo(cx + 90, topY + 380); // waist
  ctx.lineTo(cx + 110, bottomY); // right leg
  ctx.moveTo(cx + 90, topY + 380);
  ctx.lineTo(cx - 90, topY + 380);
  ctx.lineTo(cx - 110, bottomY); // left leg
  ctx.moveTo(cx - 120, topY + 50);
  ctx.lineTo(cx - 90, topY + 380);
  ctx.stroke();
  ctx.restore();

  // 5. Draw Nerve Meridians (Branching pathways across body)
  const meridianBranches = [
    { startX: cx, startY: topY + 60, endX: cx - 200, endY: topY + 200 },
    { startX: cx, startY: topY + 60, endX: cx + 200, endY: topY + 200 },
    { startX: cx, startY: topY + 180, endX: cx - 180, endY: topY + 350 },
    { startX: cx, startY: topY + 180, endX: cx + 180, endY: topY + 350 },
    { startX: cx, startY: topY + 380, endX: cx - 140, endY: bottomY },
    { startX: cx, startY: topY + 380, endX: cx + 140, endY: bottomY },
  ];

  meridianBranches.forEach((branch, idx) => {
    ctx.beginPath();
    ctx.moveTo(branch.startX, branch.startY);
    ctx.quadraticCurveTo(
      (branch.startX + branch.endX) / 2 + (idx % 2 === 0 ? -40 : 40),
      (branch.startY + branch.endY) / 2,
      branch.endX,
      branch.endY
    );
    
    // Gradient along nerve flow
    const nerveGrad = ctx.createLinearGradient(branch.startX, branch.startY, branch.endX, branch.endY);
    if (progress < 0.3) {
      nerveGrad.addColorStop(0, 'rgba(239, 68, 68, 0.6)'); // Red blockage state early
      nerveGrad.addColorStop(1, 'rgba(100, 116, 139, 0.2)');
    } else if (progress < 0.7) {
      nerveGrad.addColorStop(0, 'rgba(16, 185, 129, 0.8)'); // Unblocking transition
      nerveGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.8)');
      nerveGrad.addColorStop(1, 'rgba(245, 158, 11, 0.4)');
    } else {
      nerveGrad.addColorStop(0, 'rgba(52, 211, 153, 0.9)'); // Fully unblocked vibrant glow
      nerveGrad.addColorStop(0.5, 'rgba(34, 211, 238, 0.9)');
      nerveGrad.addColorStop(1, 'rgba(16, 185, 129, 0.9)');
    }
    ctx.strokeStyle = nerveGrad;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Pulses traveling down nerves based on frame progression
    const waveOffset = (progress * 3 + idx * 0.2) % 1;
    const px = (1 - waveOffset) * branch.startX + waveOffset * branch.endX;
    const py = (1 - waveOffset) * branch.startY + waveOffset * branch.endY;

    ctx.beginPath();
    ctx.arc(px, py, 6 + progress * 4, 0, Math.PI * 2);
    ctx.fillStyle = progress > 0.4 ? '#34d399' : '#f87171';
    ctx.shadowColor = progress > 0.4 ? '#10b981' : '#ef4444';
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  // 6. Draw 3D Spine Vertebrae Column (24 individual vertebrae)
  const numVertebrae = 24;
  const spineHeight = bottomY - topY - 80;
  const vertSpacing = spineHeight / numVertebrae;

  for (let i = 0; i < numVertebrae; i++) {
    const vy = topY + 40 + i * vertSpacing;
    const vertProgress = i / numVertebrae;
    
    // Curvature calculation for anatomical S-curve (cervical, thoracic, lumbar)
    const curveOffset = Math.sin(vertProgress * Math.PI * 2) * 15;
    const vx = cx + curveOffset;

    // Unblocking state per vertebra base on overall scrub progress
    const isUnblocked = progress > (vertProgress * 0.7 + 0.15);

    // Vertebra Disc
    ctx.beginPath();
    ctx.ellipse(vx, vy, 22, 10, 0, 0, Math.PI * 2);

    const discGrad = ctx.createRadialGradient(vx, vy, 2, vx, vy, 22);
    if (isUnblocked) {
      discGrad.addColorStop(0, '#ecfdf5');
      discGrad.addColorStop(0.4, '#10b981');
      discGrad.addColorStop(1, '#064e3b');
    } else {
      discGrad.addColorStop(0, '#fef2f2');
      discGrad.addColorStop(0.4, '#ef4444');
      discGrad.addColorStop(1, '#7f1d1d');
    }
    ctx.fillStyle = discGrad;
    ctx.fill();
    ctx.strokeStyle = isUnblocked ? '#34d399' : '#f87171';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Central spinal cord beam segment
    if (i < numVertebrae - 1) {
      ctx.beginPath();
      ctx.moveTo(vx, vy);
      const nextVy = topY + 40 + (i + 1) * vertSpacing;
      const nextCurve = Math.sin(((i + 1) / numVertebrae) * Math.PI * 2) * 15;
      ctx.lineTo(cx + nextCurve, nextVy);
      ctx.strokeStyle = isUnblocked ? '#a7f3d0' : '#fca5a5';
      ctx.lineWidth = 5;
      ctx.shadowColor = isUnblocked ? '#10b981' : '#ef4444';
      ctx.shadowBlur = isUnblocked ? 12 : 6;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
  }

  // 7. Draw Pressure Points & Active Healing Rings
  pressurePoints.forEach((pt, pIdx) => {
    const ptY = topY + (bottomY - topY) * pt.yRatio;
    const ptX = cx + pt.xOffset;
    const ptActiveTime = pIdx / pressurePoints.length;
    const pointState = progress >= ptActiveTime ? 'healed' : (progress >= ptActiveTime - 0.15 ? 'active' : 'blocked');

    // Concentric pressure rings
    ctx.beginPath();
    ctx.arc(ptX, ptY, 14 + Math.sin(progress * 10 + pIdx) * 3, 0, Math.PI * 2);
    if (pointState === 'healed') {
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.9)';
      ctx.fillStyle = 'rgba(16, 185, 129, 0.3)';
    } else if (pointState === 'active') {
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.9)';
      ctx.fillStyle = 'rgba(245, 158, 11, 0.3)';
    } else {
      ctx.strokeStyle = 'rgba(248, 113, 113, 0.6)';
      ctx.fillStyle = 'rgba(239, 68, 68, 0.15)';
    }
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();

    // Inner glowing core
    ctx.beginPath();
    ctx.arc(ptX, ptY, 5, 0, Math.PI * 2);
    ctx.fillStyle = pointState === 'healed' ? '#ffffff' : (pointState === 'active' ? '#fef08a' : '#f87171');
    ctx.shadowColor = pointState === 'healed' ? '#34d399' : '#ef4444';
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.shadowBlur = 0;

    // HUD Label on frame
    ctx.font = '12px sans-serif';
    ctx.fillStyle = pointState === 'healed' ? '#a7f3d0' : '#94a3b8';
    const alignRight = pt.xOffset > 0;
    ctx.textAlign = alignRight ? 'left' : 'right';
    ctx.fillText(pt.name, ptX + (alignRight ? 25 : -25), ptY + 4);
  });

  // 8. Top & Bottom Medical Holographic HUD Overlay
  ctx.save();
  ctx.font = '14px monospace';
  ctx.fillStyle = 'rgba(52, 211, 153, 0.8)';
  ctx.textAlign = 'left';
  ctx.fillText(`[ MAGICAL TOUCH 3D ACUPRESSURE SCAN ]`, 40, 50);
  ctx.fillText(`FRAME: ${String(f).padStart(3, '0')} / 030  |  NERVE MERIDIAN FLOW: ${Math.round(progress * 100)}%`, 40, 75);

  ctx.textAlign = 'right';
  const statusText = progress < 0.35 ? 'ANALYZING NERVE BLOCKAGES...' : (progress < 0.75 ? 'APPLYING TARGETED ACUPRESSURE...' : 'MERIDIAN ENERGY UNBLOCKED - OPTIMAL');
  ctx.fillText(`STATUS: ${statusText}`, WIDTH - 40, 50);
  ctx.fillText(`SYSTEM: NON-INVASIVE PAIN RELIEF`, WIDTH - 40, 75);

  // Bottom progress bar
  ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
  ctx.fillRect(40, HEIGHT - 40, WIDTH - 80, 6);
  ctx.fillStyle = '#10b981';
  ctx.shadowColor = '#34d399';
  ctx.shadowBlur = 8;
  ctx.fillRect(40, HEIGHT - 40, (WIDTH - 80) * progress, 6);
  ctx.shadowBlur = 0;
  ctx.restore();

  // Save as WebP
  const frameNum = String(f).padStart(3, '0');
  const filePath = path.join(outputDir, `frame_${frameNum}.webp`);
  const buffer = canvas.toBuffer('image/jpeg'); // webp or high-quality compressed image output
  fs.writeFileSync(filePath, buffer);
}

console.log('Finished generating all 30 frames in public/sequence/ successfully!');
