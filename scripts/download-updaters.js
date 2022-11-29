/* eslint-disable */
const downloadRelease = require('download-github-release');
const path = require('path');
const os = require('os');
const fs = require('fs');

const user = 'aopu-edu';
const repo = 'openblock-updaters';
const outputdir = path.join(__dirname, '../updaters');
const leaveZipped = false;

function filterRelease (release) {
    return release.prerelease === false;
}

function filterAsset(asset) {
    return (asset.name.indexOf(os.platform()) >= 0);
}

if (!fs.existsSync(outputdir)) {
    fs.mkdirSync(outputdir, {recursive: true});
}

downloadRelease(user, repo, outputdir, filterRelease, filterAsset, leaveZipped)
    .then(() => {
        console.log('Tools download complete');
    })
    .catch(err => {
        console.error(err.message);
    });
