module.exports = {
    defaultNetwork: "localhost",
    networks: {
        hardhat: {
        },
        localhost: {
            url: "http://127.0.0.1:8545"
        },
    },
    solidity: {
        version: "0.8.7",
        settings: {
        optimizer: {
            enabled: true,
            runs: 200
        }
        }
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    mocha: {
        timeout: 40000
    }
}