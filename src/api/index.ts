import shortid from 'shortid';

export const getRandomImage = (size: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image(200, 200);
    try {
      img.crossOrigin = 'anonymous';
      img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.height = img.naturalHeight;
        canvas.width = img.naturalWidth;
        if (ctx) {
          ctx.drawImage(img, 0, 0);
        }
        const dataURL = canvas.toDataURL();
        resolve(dataURL);
      };
      img.src = `https://picsum.photos/${size}?no-cache=${shortid.generate()}`;
    } catch (err) {
      reject();
    }
  });
};
