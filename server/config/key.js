if (process.env.NODE_ENV === 'production') {    // 배포된 파일이라면
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}