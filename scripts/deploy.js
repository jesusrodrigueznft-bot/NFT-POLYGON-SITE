// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  console.log("🚀 Desplegando contrato MyNFT...");

  // 1️⃣ Obtenemos el contrato
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");

  // 2️⃣ Desplegamos con un URI base (puedes cambiarlo por el tuyo)
  const nft = await MyNFT.deploy("https://mi-api.com/metadata/{id}.json");

  // 3️⃣ En ethers v6 usamos waitForDeployment()
  await nft.waitForDeployment();

  // 4️⃣ Obtenemos la dirección del contrato desplegado
  const address = await nft.getAddress();

  console.log("✅ NFT desplegado correctamente en:", address);
}

main().catch((error) => {
  console.error("❌ Error en el despliegue:", error);
  process.exitCode = 1;
});
