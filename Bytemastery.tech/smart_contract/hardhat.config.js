require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    mainnet: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/wiiI-bGdtaxzvLArIq1hXL81N6BZ_hjG',
      accounts: [ '29dd63c5fb225ac4473d714f4bc68967ee6ae091859f42338080c9df20bf80ab' ]
    }
  }
}