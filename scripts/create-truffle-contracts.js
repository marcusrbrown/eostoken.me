const ContractSchema = require('truffle-contract-schema');
const chalk = require('chalk');
const fs = require('fs-extra');
const artifacts = require('../package.json')['truffle-contract-artifacts'];

const error = message => {
  console.log(chalk.red(`Error:\n\t${message}\n`));
  process.exit(1);
};

const success = message => {
  console.log(chalk.green(`Success:\n\t${message}\n`));
  process.exit(0);
};

const resolve = path => require('path').resolve(process.cwd(), path);

if (!artifacts || (typeof artifacts !== 'object')) {
  error('package.json has a missing or invalid "truffle-contract-artifacts" key');
}

for (let outputPath of Object.keys(artifacts)) {
  let contract = artifacts[outputPath];

  if (typeof contract.abi === 'string') {
    try {
      contract.abi = require(resolve(contract.abi));
    } catch (err) {
      error(err.message || err);
    }
  }

  contract = ContractSchema.normalize(contract);

  if (!contract.contractName) {
    error('A "contractName" value must be specified for each artifact');
  }

  if (!contract.abi) {
    error('A "abi" value must be specified for each artifact');
  }

  contract.updatedAt = new Date().toISOString();

  const output = `/* eslint-disable quotes */
export default require('truffle-contract')(${JSON.stringify(contract, null, 2)});
`;

  try {
    fs.outputFileSync(resolve(outputPath), output, 'utf8');
  } catch (err) {
    error(err.message || err);
  }

  console.log(`Wrote ${outputPath}\n`);
}

success('Created Truffle contracts');
