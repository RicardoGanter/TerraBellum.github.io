const  {ethers}  = require('ethers');
    // const provider = new ethers.providers.JsonRpcProvider();
    const provider = new ethers.providers.JsonRpcProvider("https://eth-goerli.g.alchemy.com/v2/gIYahKEbCs9lj1MRp6mwlzYHxonY3hYL");
    // const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/f8191b77762f407da099f89c34a57514')
    const privateKey = "af28d50f35dff3890a623374f65656227d9c7b92d9fee07ffa398657047c5ebd";
    // const privateKey = "af28d50f35dff3890a623374f65656227d9c7b92d9fee07ffa398657047c5ebd";
    const signer = new ethers.Wallet(privateKey, provider);
    // const signer = provider.getSigner();
    const Address = '0x85721b88Bd588f433601AF9ad505BDC633cc86B9'; // la dirección del contrato NFT
    const abi = require('../web3/abi.js')
    
    // const privateKey = 'af28d50f35dff3890a623374f65656227d9c7b92d9fee07ffa398657047c5ebd'; // clave privada de la cuenta
    // const wallet = new ethers.Wallet(privateKey, provider);
    
    // const accountAddress = wallet.getAddress();
const contract = new ethers.Contract(Address, abi, signer);
// 0x621f47478a55583084e9bD70e535D509f95D9B78 mi wallet publica

// contract.setPoolNFT("0x72663d37D859EA388518a696F7E83EA53A994c43","0x72663d37D859EA388518a696F7E83EA53A994c43")

// contract._safeTransfer("0x621f47478a55583084e9bD70e535D509f95D9B78", 5)  //transferir nft

// contract.upgrade(1,2,3)
// .then(cantidadmint=>{
//     console.log(cantidadmint)})

  // contract.downgrade(5)
  //  contract._mintTokenAllowedToEarn("0x65197058cE55937675d604B89e6404816BF1b797")

  //  contract.tokenURI(10)
  //  .then(cantidadmint=>{
  //   console.log(cantidadmint)})


  // contract.balance()
  // .then(cantidadmint=>{
  //   console.log(cantidadmint.toString())})
  
  // .then(lol =>{
  //   console.log(lol)
  // })
  // .catch(error=>{
  //   console.log(error)
  // })










// wallet.unlock().then(() => {
//     // Enviar transacción
//     const tx = {
//       to: '0x621f47478a55583084e9bD70e535D509f95D9B78',
//       value: ethers.utils.parseEther('1')
//     };
  
//     wallet.sendTransaction(tx)
//       .then(console.log)
//       .catch(console.error);
//   })
//   .catch(console.error);