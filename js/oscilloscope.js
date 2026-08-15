/**
 * Interactive Hardware Oscilloscope & Signal Analyzer
 * High-performance Canvas renderer simulating embedded digital/analog buses
 * Supports dynamic Dark/Light color schemes
 */

class HardwareOscilloscope {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.mode = 'uart'; // 'uart', 'i2c', 'spi', 'pwm', 'sine'
    this.phase = 0;
    this.isRunning = true;
    this.lastTime = performance.now();

    this.initResize();
    this.bindControls();
    this.render = this.render.bind(this);
    requestAnimationFrame(this.render);
  }

  initResize() {
    const resize = () => {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      this.canvas.width = rect.width * (window.devicePixelRatio || 1);
      this.canvas.height = 230 * (window.devicePixelRatio || 1);
      this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    resize();
    window.addEventListener('resize', resize);
  }

  setMode(mode) {
    this.mode = mode;
    this.updateTelemetry();
  }

  bindControls() {
    const pillButtons = document.querySelectorAll('.hud-pill-btn');
    pillButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        pillButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.dataset.mode;
        if (mode) this.setMode(mode);
      });
    });
  }

  updateTelemetry() {
    const freqEl = document.getElementById('hudFreq');
    const voltEl = document.getElementById('hudVolt');
    const busEl = document.getElementById('hudBus');

    if (!freqEl || !voltEl || !busEl) return;

    switch (this.mode) {
      case 'uart':
        freqEl.textContent = '115.2 kbps';
        voltEl.textContent = '3.3V Logic';
        busEl.textContent = 'UART (8N1)';
        break;
      case 'i2c':
        freqEl.textContent = '400 kHz';
        voltEl.textContent = '3.3V Pull-Up';
        busEl.textContent = 'I²C Fast Mode';
        break;
      case 'spi':
        freqEl.textContent = '10.0 MHz';
        voltEl.textContent = '3.3V CMOS';
        busEl.textContent = 'SPI Mode 0';
        break;
      case 'pwm':
        freqEl.textContent = '25.0 kHz';
        voltEl.textContent = '5.0V / 75% Duty';
        busEl.textContent = 'PWM Driver';
        break;
      case 'sine':
        freqEl.textContent = '1.00 kHz';
        voltEl.textContent = '±2.5V AC';
        busEl.textContent = 'Analog Probe';
        break;
    }
  }

  drawGrid(w, h) {
    this.ctx.strokeStyle = 'rgba(0, 210, 255, 0.08)';
    this.ctx.lineWidth = 1;

    const gridSize = 24;
    this.ctx.beginPath();
    for (let x = 0; x <= w; x += gridSize) {
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, h);
    }
    for (let y = 0; y <= h; y += gridSize) {
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(w, y);
    }
    this.ctx.stroke();

    // Center Crosshairs
    this.ctx.strokeStyle = 'rgba(0, 210, 255, 0.15)';
    this.ctx.beginPath();
    this.ctx.moveTo(0, h / 2);
    this.ctx.lineTo(w, h / 2);
    this.ctx.moveTo(w / 2, 0);
    this.ctx.lineTo(w / 2, h);
    this.ctx.stroke();
  }

  render(timestamp) {
    if (!this.isRunning) return;

    const dt = (timestamp - this.lastTime) / 1000;
    this.lastTime = timestamp;
    this.phase += dt * 5;

    const w = this.canvas.width / (window.devicePixelRatio || 1);
    const h = this.canvas.height / (window.devicePixelRatio || 1);

    // Clear Screen
    this.ctx.fillStyle = '#060b17';
    this.ctx.fillRect(0, 0, w, h);

    // Grid
    this.drawGrid(w, h);

    // Signal Trace
    this.ctx.shadowBlur = 10;
    this.ctx.shadowColor = '#00d2ff';
    this.ctx.strokeStyle = '#00d2ff';
    this.ctx.lineWidth = 2;

    this.ctx.beginPath();

    const midY = h / 2;
    const highY = h * 0.28;
    const lowY = h * 0.72;

    switch (this.mode) {
      case 'uart': {
        const bitWidth = 40;
        const bits = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1];
        const offset = (this.phase * 50) % (bitWidth * bits.length);

        this.ctx.moveTo(0, bits[0] ? highY : lowY);

        for (let x = -offset; x < w + bitWidth; x += bitWidth) {
          const bitIndex = Math.floor(Math.abs(x + offset) / bitWidth) % bits.length;
          const bitVal = bits[bitIndex];
          const targetY = bitVal ? highY : lowY;

          this.ctx.lineTo(Math.max(0, x), targetY);
          this.ctx.lineTo(Math.min(w, x + bitWidth), targetY);
        }
        break;
      }

      case 'i2c': {
        // SCL (Clock)
        const clkWidth = 24;
        const clkOffset = (this.phase * 60) % (clkWidth * 2);
        this.ctx.moveTo(0, highY - 15);
        for (let x = -clkOffset; x < w + clkWidth; x += clkWidth) {
          const isHigh = (Math.floor((x + clkOffset) / clkWidth) % 2 === 0);
          const y = isHigh ? highY - 15 : midY - 15;
          this.ctx.lineTo(Math.max(0, x), y);
          this.ctx.lineTo(Math.min(w, x + clkWidth), y);
        }
        this.ctx.stroke();

        // SDA (Data)
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#f59e0b';
        this.ctx.shadowColor = '#f59e0b';
        const sdaBits = [1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0];
        const sdaWidth = 48;
        const sdaOffset = (this.phase * 60) % (sdaWidth * sdaBits.length);
        for (let x = -sdaOffset; x < w + sdaWidth; x += sdaWidth) {
          const idx = Math.floor(Math.abs(x + sdaOffset) / sdaWidth) % sdaBits.length;
          const y = sdaBits[idx] ? midY + 15 : lowY + 15;
          this.ctx.lineTo(Math.max(0, x), y);
          this.ctx.lineTo(Math.min(w, x + sdaWidth), y);
        }
        break;
      }

      case 'spi': {
        const burstWidth = 120;
        const burstOffset = (this.phase * 80) % burstWidth;
        this.ctx.moveTo(0, highY);
        for (let x = 0; x < w; x += 4) {
          const inBurst = (x + burstOffset) % burstWidth < 80;
          const y = inBurst ? (Math.sin((x + this.phase * 20) * 0.4) > 0 ? highY : lowY) : highY;
          this.ctx.lineTo(x, y);
        }
        break;
      }

      case 'pwm': {
        const period = 60;
        const duty = 0.7;
        const offset = (this.phase * 50) % period;
        this.ctx.moveTo(0, highY);
        for (let x = -offset; x < w + period; x += period) {
          this.ctx.lineTo(Math.max(0, x), highY);
          this.ctx.lineTo(Math.min(w, x + period * duty), highY);
          this.ctx.lineTo(Math.min(w, x + period * duty), lowY);
          this.ctx.lineTo(Math.min(w, x + period), lowY);
          this.ctx.lineTo(Math.min(w, x + period), highY);
        }
        break;
      }

      case 'sine': {
        for (let x = 0; x < w; x++) {
          const noise = (Math.random() - 0.5) * 2;
          const y = midY + Math.sin(x * 0.03 - this.phase * 3) * (h * 0.35) + noise;
          if (x === 0) this.ctx.moveTo(x, y);
          else this.ctx.lineTo(x, y);
        }
        break;
      }
    }

    this.ctx.stroke();
    this.ctx.shadowBlur = 0;

    requestAnimationFrame(this.render);
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.oscilloscopeInstance = new HardwareOscilloscope('oscilloscopeCanvas');
});
