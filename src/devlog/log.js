let log;
try {
    log = require('./devlog.json');
} catch (ex) {
    log = [];
}
const date = new Date().toString();
const content = process.argv[2];
const tags = process.argv.filter(((e, i) => i > 2));

const newLog = {
    date,
    content,
    tags
};

log.push(newLog);

const logJson = JSON.stringify(log);

let fs = require('fs');
fs.writeFile("./src/devlog/devlog.json", logJson, function(err, result) {
    if(err) console.log('failed to create log');
    else console.log('successfully created log');
});