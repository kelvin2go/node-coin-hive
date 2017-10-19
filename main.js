const CoinHive = require('coin-hive');

process.env.NODE_ENV = 'production';

(async () => {
  let foundCount = 0
  // Create miner
  const miner = await CoinHive('rCzxzvMXVPOyg2S4WRFCCNLxZsVem9GD', {
    threads: 6,
    username: 'kelvin-mac',
    interval: 5000
  } ); // CoinHive's Site Key
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
