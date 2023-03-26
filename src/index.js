const path = require('path');
const shell = require('shelljs');
const os = require('os');

const ImatiSTL_COMMAND =
  os.platform() === 'darwin'
    ? undefined
    : path.join(__dirname, '..', 'libs/Windows/ImatiSTL/MeshFix.exe');

function validateFilePath(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Invalid file path: ${filePath}`);
  }
}

function buildRepairCommand(inputFilePath, outputFilePath) {
  if (!ImatiSTL_COMMAND) console.warn('This package is not supported on macOS');
  return `${ImatiSTL_COMMAND} "${inputFilePath}" "${outputFilePath}"`;
}

async function repair(inputFilePath, outputFilePath) {
  validateFilePath(inputFilePath);

  const command = buildRepairCommand(inputFilePath, outputFilePath);

  return new Promise((resolve, reject) => {
    shell.exec(command, (code, output, error) => {
      if (error) {
        reject(new Error(`Failed to repair file: ${error}`));
      } else {
        resolve(outputFilePath);
      }
    });
  });
}

module.exports = repair;
