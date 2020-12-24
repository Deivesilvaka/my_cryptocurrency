"use strict"
const EC = require("elliptic").ec
const ec = new EC("secp256k1")
const { Blockchain, Transaction } = require("./blockchain")


const myKey = ec.keyFromPrivate('cb3417f49e36c79c585177c2defd25a1aedf483de73a6d27144efbd6f6c23806')
const myWallet = myKey.getPublic("hex")

const _1A1J = new Blockchain()

const tx1 = new Transaction(myWallet, 'other Wallet', 10)
tx1.signTransaction(myKey)
_1A1J.addTransaction(tx1)

//_1A1J.createTransaction(new Transaction("address1", "address2", 100))
//_1A1J.createTransaction(new Transaction("address2", "address1", 50))

console.log("\n Starting the miner...")
_1A1J.minePandingTransactions(myWallet)

console.log(`\n Balance of Deive is: ${_1A1J.getBalanceOfAddress(myWallet)}`)

console.log("Is chain valid?", _1A1J.isChainValid())
