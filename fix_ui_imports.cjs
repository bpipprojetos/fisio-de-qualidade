const fs = require('fs');
const path = require('path');

const uiDir = './client/src/pages/lps/ondasdechoque-joaopessoa/components/ui';

function processUiFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    const replaceMap = {
        'from "./ui/': 'from "./',
        'from "./components/ui/': 'from "./',
        'from "../components/ui/': 'from "./',
        'from "../../lib/': 'from "../../../../../lib/' // Oops, wait. If they are in UI, they need to target the global lib properly, which is 6 dirs up from src/pages/lps/... wait:
        // client/src/pages/lps/ondasdechoque-joaopessoa/components/ui/button.tsx
        // to reach client/src/lib:
        // ui -> components -> ondasdechoque-joaopessoa -> lps -> pages -> src
        // 1        2               3                        4       5
        // Wait, the project root is `fisio-de-qualidade/client/src/lib`? Let me check.
    };

    for (const [key, value] of Object.entries(replaceMap)) {
        if (content.includes(key)) {
            content = content.split(key).join(value);
            changed = true;
        }
    }

    // Also fix ErrorBoundary which is in components
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated UI imports in ${filePath}`);
    }
}

function processComponentFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    const replaceMap = {
        'from "./ui/': 'from "./ui/', // This is correct from components/ to ui/
        // if there's any wrong components/ui:
        'from "./components/ui/': 'from "./ui/',
    };

    for (const [key, value] of Object.entries(replaceMap)) {
        if (content.includes(key) && filePath.includes('components') && !filePath.includes('ui/')) {
            content = content.split(key).join(value);
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated Component imports in ${filePath}`);
    }
}

function walkUi(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkUi(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            processUiFile(fullPath);
        }
    }
}

function walkComp(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (!fs.statSync(fullPath).isDirectory() && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
            processComponentFile(fullPath);
        }
    }
}

walkUi(uiDir);
walkComp('./client/src/pages/lps/ondasdechoque-joaopessoa/components');
console.log('Done mapping UI imports.');

// Specifically fix Map.tsx which had an error at line 81:
// 1 client/src/pages/lps/ondasdechoque-joaopessoa/components/Map.tsx:81
const mapPath = './client/src/pages/lps/ondasdechoque-joaopessoa/components/Map.tsx';
let mapContent = fs.readFileSync(mapPath, 'utf8');
// Map.tsx probably imports something wrong
mapContent = mapContent.replace('from "./components/', 'from "./');
fs.writeFileSync(mapPath, mapContent, 'utf8');

// ErrorBoundary explicitly
const errBoundaryPath = './client/src/pages/lps/ondasdechoque-joaopessoa/components/ErrorBoundary.tsx';
let errContent = fs.readFileSync(errBoundaryPath, 'utf8');
errContent = errContent.replace('from "./components/ui/', 'from "./ui/');
fs.writeFileSync(errBoundaryPath, errContent, 'utf8');

// Footer.tsx where it says 'from "./components/ui/button"'
const footerPath = './client/src/pages/lps/ondasdechoque-joaopessoa/components/Footer.tsx';
let footerContent = fs.readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace('from "./components/ui/', 'from "./ui/');
fs.writeFileSync(footerPath, footerContent, 'utf8');

// fix all components that might have from "./components/ui/
walkComp('./client/src/pages/lps/ondasdechoque-joaopessoa/components');
