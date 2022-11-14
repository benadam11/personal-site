import * as utils from "./utils.js";

export const animateCanvas = (canvas, count) => {
  const ctx = canvas.getContext("2d");
  const el = canvas.parentNode;
  let width, height;

  function setDimensions() {
    width = canvas.width = el.clientWidth;
    height = canvas.height = Math.min(240, el.clientWidth);
  }

  setDimensions();

  window.addEventListener("resize", setDimensions);

  class Particle {
    constructor() {
      this.init();
      this.setVelocity();
      this.setNewRadius();
    }

    init() {
      this.x = utils.randomInt(0, width);
      this.y = utils.randomInt(0, 80);
      this.base = [this.x, this.y];
      this.falling = false;
      this.radius = 20;
      this.vx = 0;
      this.vy = 0;
      this.friction = 1;
      this.gravity = 0.5;
      this.distance = 0.4;
    }

    setNewRadius() {
      this.futureRadius = utils.randomInt(this.radius, this.radius + 10);
    }

    getDirection() {
      return Math.atan2(this.vy, this.vx);
    }

    getCurrentVelocity() {
      return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    }

    setSpeed() {
      const speed = utils.randomInt(0, 2);
      const direction = this.getDirection();
      this.vx = Math.cos(direction) * speed;
      this.vy = Math.sin(direction) * speed;
    }

    setVelocity() {
      const speed = this.getCurrentVelocity();
      const direction = utils.randomInt(
        utils.degreesToRads(0),
        utils.degreesToRads(360)
      );
      this.vx = Math.cos(direction) * speed;
      this.vy = Math.sin(direction) * speed;
    }

    reset() {
      this.x = this.base[0];
      this.y = this.base[1];
      this.falling = false;
      this.setSpeed();
      this.setNewRadius();
      this.setVelocity();
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 2.2, 2.2 * Math.PI, false);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }

    update() {
      this.draw();
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.gravity;
      this.vx *= this.friction;
      this.vy *= this.friction;

      if (this.radius < this.futureRadius && !this.falling) {
        this.radius += this.distance;
      } else {
        this.falling = true;
      }

      if (this.falling) {
        this.radius -= this.distance;
      }

      if (this.radius <= 0) {
        this.reset();
      }
    }
  }

  const particles = Array.from({ length: count }).map(() => new Particle());
  function update() {
    ctx.clearRect(0, 0, width, height);
    requestAnimationFrame(update);
    particles.forEach((particle) => {
      particle.update();
    });
  }
  requestAnimationFrame(update);
};
