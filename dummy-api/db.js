module.exports = function () {
    return Object.assign({},
        require('./stockTicker.json'),
        require('./stockMarketIndex.json')
        );
}