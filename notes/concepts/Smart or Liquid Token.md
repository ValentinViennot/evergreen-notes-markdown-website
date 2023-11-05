[ERC20](https://github.com/ethereum/EIPs/issues/20), [Bancor Smart Tokens](https://blog.bancor.network/smart-tokens-101-63edc2cc5a89)

[[TODO]]

1. **Introduction to Smart Tokens**
   * **Smart Tokens**:
     * A new type of currency.
     * Natively liquid.
     * Built on "smart" contracts.
     * ERC20 compliant.
   * **Main Feature**: 
     * Can be bought or sold anytime through their smart contract.
     * No need for an exchange or a second party to trade with.

2. **How Smart Tokens Work**
   * **Functionality**:
     * **Smart Tokens as "Holders"**:
       * They hold other tokens.
       * These held tokens are called "reserves".
     * **Buying and Selling**:
       * Purchase a smart token by transferring a reserve token to it.
       * The smart token's contract then gives you new units of the smart token.
       * You can also sell (liquidate) the smart token and get the reserve token in return.
     * **Price Setting**:
       * Smart tokens set their own price concerning the reserve tokens they hold.
       * Price increases when smart tokens are bought and decreases when sold.
       * Pricing is related to the reserve balance and the supply of the smart token.
       * They have a "Constant Reserve Ratio" (CRR) that ensures proper price setting.

3. **Need for Smart Tokens**
   * **Traditional Exchanges**:
     * Work as matchmakers between parties.
     * A trade requires two parties with opposite desires.
     * There's a "liquidity risk" for some assets due to this system.
     * Profit-seeking nature of market makers means liquidity has a cost.
   * **Advantage of Smart Tokens**:
     * No liquidity risk.
     * No compulsory need for traders or market makers.
     * They have their own built-in automatic market maker.

4. **Additional Features**
   * **Multiple Reserves**:
     * A smart token can hold more than one reserve.
     * Acts as a bridge between different reserve tokens.
     * Enables "token changers" and "decentralized token baskets".
   * **Future Enhancements**:
     * Smart tokens can evolve with new features.
     * Features like Delegated Account Recovery and a built-in "Vault" are in development.
     * Aim: Make smart tokens accessible and user-friendly for mainstream adoption.

5. **Conclusion**
   * Smart tokens have the potential to make blockchain technology more approachable.
   * The Bancor protocol is constantly seeking ways to enhance the smart token functionality.