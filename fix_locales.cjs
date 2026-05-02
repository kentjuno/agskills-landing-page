const fs = require('fs');
const viPath = 'src/locales/vi.json';
const vi = JSON.parse(fs.readFileSync(viPath));
vi.howItWorks.promptDemo = vi.howItWorks.promptDemo.replace(/@/g, "{'@'}");
vi.howItWorks.promptPro = vi.howItWorks.promptPro.replace(/@/g, "{'@'}");
fs.writeFileSync(viPath, JSON.stringify(vi, null, 2));

const enPath = 'src/locales/en.json';
const en = JSON.parse(fs.readFileSync(enPath));
en.howItWorks.promptDemo = en.howItWorks.promptDemo.replace(/@/g, "{'@'}");
en.howItWorks.promptPro = en.howItWorks.promptPro.replace(/@/g, "{'@'}");
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));

console.log('Fixed @ symbol');
