const https = require('https');
const fs = require('fs');

// Usar Gemini 3 Pro Image para generar imágenes
const prompts = [
  {
    name: 'hero',
    prompt: 'Abstract futuristic AI neural network visualization, blue and purple gradients, modern tech aesthetic, digital brain concept, minimalist corporate style, high quality 3D render'
  },
  {
    name: 'services',
    prompt: 'Business team working with AI holograms, modern office, consulting meeting, professional atmosphere, blue color scheme, futuristic but realistic, corporate photography style'
  },
  {
    name: 'process',
    prompt: 'AI transformation process diagram, data flow visualization, machine learning pipeline, abstract geometric shapes, blue cyan white colors, clean modern infographic style'
  },
  {
    name: 'results',
    prompt: 'Dashboard with AI analytics, charts and graphs showing growth, dark mode interface, futuristic UI, neon blue accents, data visualization, professional dashboard design'
  }
];

console.log('Generando imágenes con prompts...');
prompts.forEach(p => {
  console.log(`- ${p.name}: ${p.prompt.substring(0, 50)}...`);
});
