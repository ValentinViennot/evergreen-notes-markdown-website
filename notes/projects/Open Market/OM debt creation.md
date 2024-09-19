What is [[debt]]?
Debt creates an amount of currency, trusting the amount of currency will be paid back.
Banks have the power to create currency (= issue debt).

In [[Open Market Economy]], [[Open Market Exchange]]s have the power to issue debt.
They can create tokens (BETs) trusting the amount of BETs created will be returned.

How is it returned? New investor-consumers buying BETs at market price.
What happens if it isn't returned? Then the OME should take over collateral.

The value of the collateral is the risk that the OME is taking.
It should equal to the value of the amount of currency being created.

Best case scenario:
Debt is issued and the amount of currency is paid back by new token creation (sales).

Worst case scenario:
The amount of currency is never paid back and token price decreases to its minimum.

The OME needs to cover its risk for the worst case scenario.
Therefore, debt creation will happen the following way (parameters TBD by each OME):
- The OME creates an amount of new tokens by increasing the buy/sell spread
- This decreases liquidity as the 'buy' (create) price increased proportionally
	- The 'sell' (destroy) price remains the same as before (= value locked)
	- Buyers will now prefer the second-hand market, provided there are sellers
	- But sellers will be more careful as buying back is more expensive (leverage)
	- OME doesn't like this situation as this decreases exchange liquidity
- The OME will provide liquidity to cover for the spread
	- If the supply increases (i.e. more buyers than sellers)
		- say s is the lowest sell price according to the bonding curve
		- say b is the highest sell price according to the bonding curve
		- each period, the OME will close the highest bids between s and b
	- If the supply decreases (i.e. more sellers than buyers)
		- the OME will buy back tokens at a market price as per its contract
		- unless the second-hand market can do a better match
- The token created by the OME are not destroyable
	- This means that the OME needs to set a minimum supply
		- Under which an equivalent supply of tokens will get burned
		- This is the minimum supply under which the OME takes over collateral
		- And proceeds to a collateral sale to cover for its losses
- The project refunds its load by burning the equivalent amount of tokens
	- For example, buy buying tokens and burning them
	- Or burning their 'reserve' in case they own one
	- Once the load is refunded, collateral is returned by the OME to the project
