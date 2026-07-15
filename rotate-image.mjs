import sharp from 'sharp';
import fs from 'fs';

const src = './public/best moments/20260208_084906(0).webp';
const out = './public/best moments/20260208_084906_rotated.webp';

await sharp(src)
  .rotate(90)
  .webp({ quality: 80 })
  .toFile(out);

console.log('✅ Gambar berhasil dirotasi! Disimpan sebagai 20260208_084906_rotated.webp');
