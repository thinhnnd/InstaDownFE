import download from 'downloadjs'
import watermark from 'watermarkjs'

export const downloadFromLink = (url, name = "image.jpg") => {
    var x=new XMLHttpRequest();
      x.open("GET", url, true);
      x.responseType = 'blob';
      x.onload=function(e){download(x.response, name, "image/jpg" ); }
      x.send();
  }

  export const downloadFromLinkWithWatermark = (url, name = "image.jpg") => {
    const options = {
      init(img) {
        img.crossOrigin = 'anonymous'
      }
    };
    watermark([url], options)
    .image(watermark.text.lowerRight('INSTADOWN', '60px serif', '#fff', 0.8))
    .then(function (img) {
      //document.getElementById('text').appendChild(img);
      download(img.src, name, "image/jpg")
    });
    // var x=new XMLHttpRequest();
    //   x.open("GET", url, true);
    //   x.responseType = 'blob';
    //   x.onload=function(e){download(x.response, name, "image/jpg" ); }
    //   x.send();
  }
