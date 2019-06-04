import lx1 from "@/assets/lx1.png";
import lx2 from "@/assets/lx2.png";
import lx3 from "@/assets/lx3.png";
import lx4 from "@/assets/lx4.png";
import lx5 from "@/assets/lx5.png";

export default class Meteor {
  constructor() {
    this.img = new Image();
    let imgs = [lx1, lx2, lx3, lx4, lx5];
    let size = [[138, 91], [140, 128], [133, 114], [107, 116], [96, 83]];
    const index = this.randomFrom(0, 4);
    let imgSrc = imgs[index];
    this.img.src = imgSrc;
    this.img.width = size[index][0] / 2;
    this.img.height = size[index][1] / 2;
    this.img.classList.add("me");
    this.img.style.left = this.randomFrom(0, 50) + "px";
    this.img.style.top = this.randomFrom(0, 250) + "px";
    this.img.style.webkitTransform = `translate3d(0,0,0)`;
    this.canRemove = true;
    setTimeout(() => {
      this.move(parseInt(this.img.style.left), parseInt(this.img.style.top));
    }, 16.7);
    document.querySelector(".home").appendChild(this.img);
    this.destroy();
  }

  move() {
    let distance = this.randomFrom(100, 350);
    this.img.style.webkitTransform = `translate3d(${distance}px,${distance}px,0)`;
    this.img.style.opacity = 0;
  }

  destroy() {
    const that = this;
    this.img.addEventListener("webkitTransitionEnd", function() {
      if (that.canRemove) {
        that.removeSelf(this);
        that.canRemove = false;
      }
    });
  }

  removeSelf(el) {
    return el.parentNode.removeChild(el);
  }

  randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
  }
}
