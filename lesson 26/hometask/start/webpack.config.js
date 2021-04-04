const path = require('path')

const conf = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
}
module.exports = () => {return conf};
