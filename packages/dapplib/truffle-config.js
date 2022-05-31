require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remember column harvest forum fringe gate'; 
let testAccounts = [
"0x8b074a732dff84b60cc749217e2cfcbcd2d9afc2c9f2e8dfc997911a354a51c7",
"0xb8a12176d4b908e5eb0710be1c6e1eccc39e1034970e37686a39627a3315014a",
"0xcbe08eadd820b809ee577014aeb94021109f5d6e02377d22c1339c55cf41e216",
"0xd3dd5257d167dfcd20cf8ee236c4c33049027bc988f899068f7c43f69eb22a28",
"0x39980964b538993bb703858170a1b8e8b273346ad490eacaf69db10caa3fe3cf",
"0x0f266ad3106f79e014b03ed8dbd3fecbd4f62f18e6edbedb2e60bf4c595ab645",
"0xd8d1f073eb2a34951fa80de60ad5b2d5be749a93e71dae1854ffd913d193c970",
"0x2238117caf77b31e939070393647f8306ad073253773d7d103512d41afb4a764",
"0x01766675a1a3ca8e8a55ae74a077d4e3670994ed28c2776ebd2c8ccfb16c5e0a",
"0x99a4ff70834bc6cb8877b84620f54b91c190f0289f3c627f0a1718282027a0f4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

