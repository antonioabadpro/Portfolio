const fs = require('fs');
const path = require('path');

const locales = JSON.parse(fs.readFileSync('translation.json', 'utf8'));
const template = fs.readFileSync('template.html', 'utf8');

['es', 'en'].forEach((lang) => {
    let html = template;
    const dict = locales[lang];

    // Reemplaza cada {{clave}} por su traducción
    Object.keys(dict).forEach((key) => {
        html = html.replaceAll(`{{${key}}}`, dict[key]);
    });

    // Crea las carpetas /es/index.html y /en/index.html
    const outputDir = path.join(__dirname, lang);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outputDir, 'index.html'), html);
});

console.log('✅ Archivos /es/index.html y /en/index.html generados correctamente.');