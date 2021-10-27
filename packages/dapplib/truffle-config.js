require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remember minor half clog bottom gauge'; 
let testAccounts = [
"0xd18d8a6b7fa7294c958bbebbf78861f3909f284985968403ef962f967cdf1fe8",
"0x6bffc1099f09a280118a88d117a89d0f229646e3dd41a21a609e77a78512fa42",
"0x748b0e4e92049a75b4396a0efad952ab7234ece54fb72bb4df6b2af40bde4711",
"0x78d3c8c50426bfe6eb407aa3ddeab4aa93facf32e3e2e1ac2c044019f53acb75",
"0xfc025270fc9640e9f61147a8e293d4a4a32333af8a4c9e5444247815be847fed",
"0x80bd919765e77010fcc8ab0f19d0bf67375b778d04e78516ef1839d5f6fb4245",
"0xd8c01155b30402da78836daa4e5b0d52a1b54b483ab8c6830c827a898f22c056",
"0xd798a665bf81d6f93b826c94c9730f11f312c15441b6c54eeebce9a38d6c9f61",
"0xb26ecf90295a85f499627e07a71b2e083896e587fe6c32bc2f15c4b61e830da2",
"0xd404e17292d93871d11578f89cdea48a79acc2564fee9bbb71e5f784d16548d9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


