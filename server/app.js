const CoinHive = require('coin-hive');
const config = require("../config/default");
process.env.NODE_ENV = 'production';

(async () => {
  let foundCount = 0
  // Create miner
  const miner = await CoinHive( config.SITE_KEY, config.OPTIONS) // CoinHive's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found! '+ ++foundCount))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));
})();
