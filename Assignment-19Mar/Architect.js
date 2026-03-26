const fs = require('fs');
const path = require('path');

// Base directory
const baseDir = path.join(__dirname, 'data');

// Create folder
function createFolder(folderName) {
    const folderPath = path.join(baseDir, folderName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log("Folder created:", folderName);
    } else {
        console.log("Folder already exists");
    }
}

// Save file
function saveFile(folderName, fileName, content) {
    const filePath = path.join(baseDir, folderName, fileName);
    fs.writeFileSync(filePath, content);
    console.log("File saved:", fileName);
}

// Read file
function readFile(folderName, fileName) {
    const filePath = path.join(baseDir, folderName, fileName);
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log("File content:\n", data);
    } else {
        console.log("File not found");
    }
}

// Example Usage
createFolder('students');
saveFile('students', 'info.txt', 'Name: Monisha\nCourse: Web Dev');
readFile('students', 'info.txt');