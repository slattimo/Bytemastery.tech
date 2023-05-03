require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/e8LaTjJIJbxDR2dI-3RQqTSPI3vaEP-Z',
      accounts: [ '29dd63c5fb225ac4473d714f4bc68967ee6ae091859f42338080c9df20bf80ab' ]
    }
  }
}