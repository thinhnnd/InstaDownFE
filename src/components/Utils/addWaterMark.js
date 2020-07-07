import watermark from 'watermarkjs'

export const addWaterMark = (url) => {
    const options = {
        init(img) {
          img.crossOrigin = 'anonymous'
        }
      };
    watermark([url], options)
    .image(watermark.text.lowerRight('INSTADOWN', '60px serif', '#fff', 0.8))
    .then(function (img) {
      //document.getElementById('text').appendChild(img);
      console.log(img)
      return img;
    });
}