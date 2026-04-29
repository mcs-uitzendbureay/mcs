const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images');

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  // Optimize MCSUitzendbureau.png (logo) - create multiple sizes
  const logoPath = path.join(inputDir, 'MCSUitzendbureau.png');
  if (fs.existsSync(logoPath)) {
    console.log('Optimizing logo...');

    // Create optimized PNG logo (400px wide for nav)
    await sharp(logoPath)
      .resize(400, null, { withoutEnlargement: true })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(path.join(outputDir, 'logo.png'));

    // Create WebP version
    await sharp(logoPath)
      .resize(400, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, 'logo.webp'));

    const originalSize = fs.statSync(logoPath).size;
    const newSize = fs.statSync(path.join(outputDir, 'logo.png')).size;
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Optimized PNG: ${(newSize / 1024).toFixed(0)} KB`);
    console.log(`  Saved: ${((1 - newSize / originalSize) * 100).toFixed(0)}%\n`);
  }

  // Optimize Uitzendbureau.png (hero image) - create multiple sizes
  const heroPath = path.join(inputDir, 'Uitzendbureau.png');
  if (fs.existsSync(heroPath)) {
    console.log('Optimizing hero image...');

    // Large version for desktop (1920px)
    await sharp(heroPath)
      .resize(1920, null, { withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(path.join(outputDir, 'hero-large.jpg'));

    await sharp(heroPath)
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, 'hero-large.webp'));

    // Medium version for tablet (1280px)
    await sharp(heroPath)
      .resize(1280, null, { withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(path.join(outputDir, 'hero-medium.jpg'));

    await sharp(heroPath)
      .resize(1280, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, 'hero-medium.webp'));

    // Small version for mobile (768px)
    await sharp(heroPath)
      .resize(768, null, { withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(path.join(outputDir, 'hero-small.jpg'));

    await sharp(heroPath)
      .resize(768, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, 'hero-small.webp'));

    const originalSize = fs.statSync(heroPath).size;
    const largeSize = fs.statSync(path.join(outputDir, 'hero-large.jpg')).size;
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Large JPG: ${(largeSize / 1024).toFixed(0)} KB`);
    console.log(`  Saved: ${((1 - largeSize / originalSize) * 100).toFixed(0)}%\n`);
  }

  console.log('Image optimization complete!');
  console.log('\nOptimized files created:');
  console.log('  - logo.png, logo.webp');
  console.log('  - hero-large.jpg, hero-large.webp');
  console.log('  - hero-medium.jpg, hero-medium.webp');
  console.log('  - hero-small.jpg, hero-small.webp');
}

optimizeImages().catch(console.error);
