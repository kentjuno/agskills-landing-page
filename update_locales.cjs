const fs = require('fs');

const viPath = 'src/locales/vi.json';
const viData = JSON.parse(fs.readFileSync(viPath, 'utf8'));

viData.howItWorks = {
  title: 'Cài Đặt Cực Đỉnh Bằng AI',
  subtitle: 'Bạn không biết code? Không sao cả! Vì bạn đang dùng công cụ AI, hãy để chính AI tự tay cài đặt hệ thống này cho bạn chỉ với 1 cú Copy-Paste.',
  aiBoxTitle: 'Cài Đặt Tự Động 100%',
  aiBoxDesc: 'Mở một thư mục trống bằng VS Code (hoặc trình duyệt có Antigravity AI). Copy đoạn mã dưới đây dán vào khung chat của AI và bấm Enter:',
  tabs: {
    demo: 'Bản Demo (Miễn phí)',
    pro: 'Bản Pro (Trả phí)'
  },
  promptDemo: 'Chào AI, tôi muốn cài đặt bản Demo của hệ thống Marketing Dashboard. Hãy tự động mở Terminal và chạy lệnh sau giúp tôi nhé:\n\n1. `npm install -g @kjantigravity/cli`\n2. `kj-kit demo`\n\nYêu cầu:\n- Nếu hệ thống hỏi (Yes/No), hãy tự động chọn Yes.\n- Nếu máy tôi chưa cài Node.js, hãy dừng lại và đưa link tải trực tiếp cho tôi.\n- Sau khi tải xong thư mục dự án, hãy chạy lệnh khởi động server. Gửi cho tôi link http://localhost để tôi truy cập ngay!',
  promptPro: 'Chào AI, tôi muốn cài đặt bản Full của hệ thống Marketing Dashboard. Hãy tự động mở Terminal và chạy lệnh sau giúp tôi nhé:\n\n1. `npm install -g @kjantigravity/cli`\n2. `kj-kit init -k marketing`\n\nYêu cầu:\n- AI hãy hướng dẫn tôi nhập mã License Token để xác thực tải mã nguồn gốc.\n- Nếu máy tôi chưa cài Node.js, hãy đưa link tải trực tiếp cho tôi.\n- Sau khi tải xong thư mục dự án, hãy chạy lệnh khởi động server. Gửi cho tôi link http://localhost để tôi truy cập ngay!'
};

fs.writeFileSync(viPath, JSON.stringify(viData, null, 2), 'utf8');

const enPath = 'src/locales/en.json';
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

enData.howItWorks = {
  title: 'AI-Powered Installation',
  subtitle: 'Don\'t know how to code? No problem! Let your AI assistant automatically install the entire system for you with just 1 Copy-Paste.',
  aiBoxTitle: '100% Automated Setup',
  aiBoxDesc: 'Open an empty folder in VS Code (or browser with Antigravity AI). Copy the prompt below into the AI chat box and press Enter:',
  tabs: {
    demo: 'Demo Version',
    pro: 'Pro Version'
  },
  promptDemo: 'Hi AI, I want to install the Demo version of the Marketing Dashboard. Please open the Terminal and run these commands automatically:\n\n1. `npm install -g @kjantigravity/cli`\n2. `kj-kit demo`\n\nRequirements:\n- If prompted for Yes/No, automatically select Yes.\n- If my machine lacks Node.js, stop and provide the direct download link.\n- After downloading, run the server startup command and give me the http://localhost link to access it immediately!',
  promptPro: 'Hi AI, I want to install the Full version of the Marketing Dashboard. Please open the Terminal and run these commands automatically:\n\n1. `npm install -g @kjantigravity/cli`\n2. `kj-kit init -k marketing`\n\nRequirements:\n- Guide me to enter the License Token when prompted.\n- If my machine lacks Node.js, stop and provide the direct download link.\n- After downloading, run the server startup command and give me the http://localhost link to access it immediately!'
};

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2), 'utf8');
console.log('Updated JSONs');
