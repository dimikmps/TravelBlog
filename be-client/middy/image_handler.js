const Parse = require('parse/node');
const sharp = require('sharp');

// Upload the original size
async function orig_handler(file) {
  const buffer = file.buffer;

  const base64 = buffer.toString('base64');

  const name = 'original';
  
  let original_size = new Parse.File(name, { base64: base64 });

  return original_size;
}

// Resize photos to thumb spec
async function thumb_handler(file) {
  const buffer = file.buffer;

  const resize = await sharp(buffer).rotate().resize(250, 250,{ fit: 'inside' }).toBuffer();

  resize_base64 = resize.toString('base64');

  const name = 'resized';

  let thumb_size = new Parse.File(name, { base64: resize_base64 });

  return thumb_size;
}

module.exports = {
  orig_handler,
  thumb_handler,
};
