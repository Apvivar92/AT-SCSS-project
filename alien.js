// create class for aliens just like the Player class
class Alien {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    // Player's movement Speed
    this.velocity = {
      x: 0,
      y: 0,
    };
    
    // Players sprite image
    const image = new Image();
    image.src = './Assets/R (1).png';
    image.onload = () => {
      // const scale = 1
      this.image = image;
      // Render the images to scale of canvas.. Hard code img size causes img to squish
      this.width = image.width * 0.1;
      this.height = image.height * 0.1;
      // Aliens position
      this.position = {
        x: this.canvas.width / 2 - this.width / 2,
        y: this.canvas.height / 2,
      };
      
      this.hitbox = new Hitbox(
        this.position.x,
        this.position.y,
        this.width,
        this.height
        );
    };
  };

  draw() {
    // context.fillStyle = 'red'
    // context.fillRect(this.position.x, this.position.y, this.width, this.height)
    if (this.image) {
      this.context.drawImage(
        this.image,
        this.position.x, 
        this.position.y,
        this.width,
        this.height
      );
    }
  }

  update() {
    if (this.image) {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.hitbox.updateHitboxPosition(this.position.x, this.position.y);
      this.draw();
    }
  }

  getPosition() {
    return {
      x: this.position.x,
      y: this.position.y,
    };
  };

  getHitbox() {
    return this.hitbox;
  };
};
