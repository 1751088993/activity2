import stage1 from "../assets/stage1.jpg";
import stage2 from "../assets/stage2.jpg";
import stage3 from "../assets/stage3.jpg";
import stage4a from "../assets/stagea.jpg";
import stage4b from "../assets/stageb.jpg";
import stage4c from "../assets/stagec.jpg";
import stage4d from "../assets/staged.jpg";
import stage4e from "../assets/stagee.jpg";
import stage4f from "../assets/stagef.jpg";
import stage5 from "../assets/chengshi1.jpg";

const imageList = {
  stage1: {
    url: stage1,
    src: ""
  },
  stage2: {
    url: stage2,
    src: ""
  },
  stage3: {
    url: stage3,
    src: ""
  },
  stage4a: {
    url: stage4a,
    src: ""
  },
  stage4b: {
    url: stage4b,
    src: ""
  },
  stage4c: {
    url: stage4c,
    src: ""
  },
  stage4d: {
    url: stage4d,
    src: ""
  },
  stage4f: {
    url: stage4f,
    src: ""
  },
  stage4e: {
    url: stage4e,
    src: ""
  },
  stage5: {
    url: stage5,
    src: ""
  }
};

export function LoadImage() {
  for (let key in imageList) {
    let image = new Image();
    image.src = "https://b.cqyouloft.com/wadx2018/" + imageList[key].url;
    image.onload = function() {
      imageList[key].src = image.src;
      // console.log(e);
    };
    image.error = function(e) {
      throw new Error(e);
    };
  }
}

export { imageList };
