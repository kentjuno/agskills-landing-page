const fs = require('fs');
const execSync = require('child_process').execSync;

function mergeOldSteps(lang) {
  const filePath = `src/locales/${lang}.json`;
  
  // Get old json from git
  const oldJsonStr = execSync(`git show HEAD:${filePath}`).toString('utf8');
  const oldJson = JSON.parse(oldJsonStr);
  
  // Get current json
  const currentJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Merge steps back
  if (oldJson.howItWorks && oldJson.howItWorks.steps) {
    currentJson.howItWorks.steps = oldJson.howItWorks.steps;
    if (lang === 'vi') {
        currentJson.howItWorks.manualInstallTitle = 'Dành cho dân chuyên (Cài đặt thủ công)';
    } else {
        currentJson.howItWorks.manualInstallTitle = 'For Developers (Manual Install)';
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(currentJson, null, 2), 'utf8');
}

mergeOldSteps('vi');
mergeOldSteps('en');
console.log('Merged old steps successfully');
