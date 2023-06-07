# Trust Farm
<p> A Blockchain Revolution in Organic Farming <p/>

![Landing](https://github.com/ishika4u/trustFarm/assets/135499946/dcda5f7e-10f8-4119-8d6e-d91e677a93a8)

## Technologies Used

- [Next Js](https://nextjs.org/)
- [Next-PWA](https://www.npmjs.com/package/next-pwa) 
- [Tailwind CSS](https://tailwindcss.com/)
- [Solidity](https://soliditylang.org/)
- [IPFS](https://ipfs.tech/)
- [SuperFluid](https://www.superfluid.finance)
- [Arcana](https://www.mantle.xyz/)
- [Mantle](https://www.arcana.network/)
- [ChainLink](https://chain.link/)
- [Polygon](https://polygon.technology/)
- [Push Protocol](https://push.org)
- [Polywrap](https://polywrap.io/)
- [Raspberry Pi (IoT)](https://www.raspberrypi.org/)


<br/>

## Problems

Organic farming faces a number of challenges, including:

- Multiple certification requirements: Currently, there are two government sanctioned mechanisms for issuing certification for organic products: Participatory Guarantee Systems (PGS) and third party certification. PGS is a system where farmers in a group inspect each other's land and vouch for its organic credentials. Third party certification is when the farm is inspected by an authorized third party certifying agency.
- Poor database: The database of India's organic products is very poor, which makes it difficult to track and trace organic products. This is a key issue for export growth, as many major markets require traceability information.
- Costly third party certification: Third party certification is very costly, which can make it difficult for small farmers to afford.
- Lack of acceptance of PGS certification: Major markets for export do not accept PGS certification, which means that farmers who use this system are limited in their export options.
- No mechanism to link PGS and third party certification: There is no mechanism to link PGS and third party certification, which makes it difficult for farmers to switch between the two systems.
These challenges make it difficult for organic farmers to succeed, and they limit the growth of the organic farming sector in India.

Here are some possible solutions to these challenges:

- Improve the database of organic products: The government could improve the database of organic products by working with farmers, certifying agencies, and other stakeholders to collect and maintain accurate information about organic products.
- Reduce the cost of third party certification: The government could reduce the cost of third party certification by providing subsidies or other financial assistance to farmers.
- Increase acceptance of PGS certification: The government could increase acceptance of PGS certification by working with major markets to recognize PGS as a valid certification system.
- Create a mechanism to link PGS and third party certification: The government could create a mechanism to link PGS and third party certification by developing a set of standards that both systems must meet.

## Solution
- Trust Farm offers a solution for obtaining certification in organic farming by organizing decentralized Participatory Guarantee Systems (PGSs).

- In order to secure certification, every harvest must be sponsored by a group of certified farmers who contribute a stake as a form of assurance that organic farming methods have been properly implemented. The platform utilizes decentralized IoT sensor data to monitor and track various environmental conditions. Additionally, anyone can challenge the organic authenticity of a particular harvest on the platform.

- These challenges are then evaluated by a certified inspector. If the challenge is deemed to be valid, the challenger will receive the stake put forward for the harvest. Conversely, if the challenge is found to be invalid, the challenger will lose the stake they put forward to initiate the challenge.

- This system provides a number of advantages over traditional third-party certification. First, it is more decentralized, which makes it more resistant to corruption. Second, it is more transparent, as all data is stored on the blockchain. Third, it is more affordable, as farmers can self-certify their own crops.

- Trust Farm is a promising new solution for organic farming certification. It has the potential to make organic farming more accessible and affordable for farmers, while also ensuring the quality and authenticity of organic products.

### 

#### Farmer
- A farmer joins the Trust Farm platform to use the decentralized PGS system of verification for their organic crops. 
- The onboarding process is simplified by using Arcana Auth, which provides a seamless interface from Web2 to Web3. 
- This gives the farmer a platform to gain credibility for their crops without paying high third-party certification fees.

- To use the Trust Farm platform, farmers pay a nominal subscription fee in terms of Superfluid's CFA (Continuous Flow Agreement) money streaming model. 
- Farmers can request stakes to be placed on their farm by stakeholders by clicking on the "Request Stake" button, which sends a push notification to everyone subscribed to the Trust Farm channel.
  
#### Verifier
An authorized Organic Crop Verifier associated with our platform.

- The Verifier will be randomly allocated to inspect a Challenged Crop through our system.
- Since the Crop challenges will be randomly allocated, the bias in the Verifier's judgement will be highly reduced.
- The Verifier can either approve or reject a challenge after inspecting the challenged crop.
- The Verifier always gets the same amount (his inspection fee) irrespective of his decision, which reduces his bias further.
 
#### Stakeholder
Here is a breakdown of the stakeholder's role in more detail:

- Vouches for the credibility of an organic crop: Stakeholders are responsible for verifying that the crop they are staking on is indeed organic. They do this by reviewing the farmer's records and conducting on-site inspections.
- Places a certain amount as stake: Stakeholders must place a certain amount of money as stake in order to participate. This stake acts as a guarantee that the stakeholder will fulfill their duties.
- Receives a reward: Stakeholders are rewarded for their participation in the program. The reward is generated from the farmer's subscriptions and is paid out automatically using Superfluid's IDA (Instant Distribution Agreement) model.
- Loses their stake amount if a challenge is approved: If a challenge on the crop is approved by a verifier, then the stakeholder loses their stake amount. This is to deter stakeholders from falsely vouching for the credibility of a crop.
 
### Consumer
- The consumer is the person who purchases and consumes organic products.
Organic products will have QR codes that can be scanned to access information about the crop, such as crop health data, challenges on the crop, and stakeholders.
- Consumers can challenge the credibility of an organic crop harvest by placing a challenge and staking a certain amount of money.
- If the challenge is approved by the verifier, the stakeholders' stakes are transferred to the consumer as compensation, and the consumer's stake is transferred to the verifier as a fee.
- If the challenge is rejected by the verifier, the consumer loses their staked amount to the verifier.

## Advantages

- <b>Establishing traceability</b>: Placing information regarding the lifecycle of crops on a
blockchain will help improving trust in the self certification process and establishing
traceability at the point of sale.

- <b>Disintermediation of multiple stakeholders</b>: As highlighted, the process of third party
certification is often expensive, and in turn drives up cost of produce, making it harder for
farmers to sell. Disintermediation through peer to peer certification mechanisms, or
integration of third party certifiers into the PGS process would unlock large markets for
produce and reduce cost of production.

- <b> Programmable transfers </b>: Much like in supply chain, tracking of products using IoT devices
along their value chain can help increase efficiency in transfer of asset between
stakeholders, and alert stakeholders immediately of issues. 

## Links

## Network Diagram 
![Trust FarmND](https://github.com/ishika4u/ishika4u/assets/135499946/7cbf5817-9304-4c84-95d1-dbedec8c643a)

## Team Members
- Ishika C

## Setup 
### Contract
1. Touch `root/.env` file as follows:
```.env
GOERLI_PRIVATE_KEY=<key>
CONTRACT_ADDRESS=0x45124
```
2. `npm i`
3. `npx hardhat run ./scripts/deploy.js --network NETWORK_NAME`

### Frontend
1. `cd trustfarm`
2. `npm i`
3. `npm run build`
4. `npm run start`
