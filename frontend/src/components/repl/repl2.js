const repl = require('repl');
const r = repl.start({
    prompt: '> ',
    eval: myEval,
    writer: myWriter
});

function myEval(cmd, context, filename, callback) {
    callback(null, cmd);
}

function myWriter(output) {
    return output.toUpperCase();
}