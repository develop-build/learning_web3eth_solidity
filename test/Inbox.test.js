const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
const { interface, bytecode } = require('../compile');

const ganacheProvider = ganache.provider();
const web3 = new Web3(ganacheProvider);

let accounts;
let inbox;
beforeEach(async () => {
  //Get a list of all accounts
  //async in nature => return Promise
  accounts = await web3.eth.getAccounts();
  //Use one of accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      //   arguments: ['Hi Deepak'],
    })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('Deploys a new contract', () => {
    console.log(inbox);
  });
});
