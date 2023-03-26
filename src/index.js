const path = require('path');
const shell = require('shelljs');
const os = require('os');

const ImatiSTL_COMMAND =
  os.platform() === 'darwin'
    ? console.warn('This package is not supported on macOS')
    : path.join(__dirname, '..', 'libs/Windows/ImatiSTL/MeshFix.exe');

async function repair(inputputFilePath, outputputFilePath) {
  return new Promise((resolve, reject) => {
    shell.exec(
      `${ImatiSTL_COMMAND} "${inputputFilePath}" "${outputputFilePath}"`,
      (code, output, error) => {
        if (error) return reject({ code, output, error });
        return resolve(`${outputputFilePath}`);
      },
    );
  });
}

module.exports = repair;
