moved to https://docs.google.com/document/d/1lvQlWTBbtvQ-q4FEMnxfAG-cTGLy2mUj9pUsGzUu-18/edit

- [ ] Move to LaTeX/GDocs
- [ ] Add formulas , proofs
- [ ] Iterate with supporting data, studies, stories
- [ ] Iterate with references
- [ ] Iterate with feedback
- [ ] Iterate with scenarios, edge cases, examples
- [ ] Add visual aids (illustrations, diagrams, charts)
- [ ] Integrate within higher-level paper: **the case for an open innovation economy**


# The Open Market: Investing in open-source innovation by tokenising brands as commodities

**Redefining Value in the Open Source Economy**

The Open Market is a new economic paradigm that aims to transform the open source ecosystem by redefining how value is being created, distributed, and incentivised. It envisions a parallel innovation economy where collaboration, societal impact, and meaningful work are incentivised, all operating within the existing global, traditional profit-driven economic system.

## Abstract

The proposed Open Market economy leverages the immense potential of free and libre open-source software (FLOSS), already critical to most businesses today. We introduce Brand Equity Tokens (BETs) as its foundational asset. These tokens anticipate future investments in open-source brands (projects), investing in (sometime speculating on) their growth potential. Open Market Exchanges (OMEs) facilitate the trading of BETs, drawing parallels to the stock market and exchanges.

The Open Market proposes an open protocol to serve as its financial infrastructure, implementing the exchange rules using liquid tokens and smart contracts. We do so to enforce the openness and standardisation required by both the open source culture and free markets.

By design, the Open Market recognises two types of investment: work (time) and money. 'Value' is instantly defined as the trade of one for the other. 'Brand Value' is defined as the investment going towards a specific project. 'Brand Equity' is the market-estimated future 'Brand Value'.

`Brand(t) = Time(t) x Money(t)`

BETs tokenise a share in a project's Brand Equity. Inspired by the Curation Market model, BETs are created and destroyed using an increasing, mathematical function of their available supply. 
Investors and consumers both have the opportunity to create BETs to hold or to offer as a stake in the project, trading on the contributors market in exchange for work (or rather, innovation).

Contributors, investors, and leaders of the projects would be more aligned on future value including governance and quality of contributions. As technology increasingly becomes open source, the traditional economy will refocus on resource optimisation and creative services, powered by open-source innovations—selfishly crowdfunded through the Open Market.

## Summary

1. Abstract
2. Summary
3. Context
4. Model introduction
	1. Axioms
	2. Theory of value
	3. Theory of investment
	4. Theory of speculation
	5. Roles
	6. Governance model
	7. Applicability
5. The Open Market
	1. Infrastructure
		1. Open Market Protocol
		2. Open Market Exchanges
	2. Brand Equity Tokens
		1. BET bonding curve
			1. Bonding curves principle
			2. Curation market mechanisms
		2. Different BET securities(?)
			1. Common BETs—TODO: different classes etc?
		3. Trading BETs
			1. First-hand market
			2. Second-hand market
	3. Constants and variables
		1. Non-diluted equity
		2. Debt ratio
	4. Debt securities
	5. Derivatives
		3. Index
		4. Futures
		5. Options
		6. Forwards
		7. Swaps
	6. FLOSS Brant Equity ETFs
6. [[#Scenarios]]
	1. Bootstrapping
	2. Initial brand offering
	3. Funding
	4. Revenue
	5. Speculative bubble
	6. Bankruptcy
	7. Edge cases
		1. Trademark takeover
	8. Attacks
7. Theoretical behaviour analysis (incentives, stocks, and flows)
8. Comparison with the traditional economy
9. Appendice
	1. References and prior art
	2. Proofs
	3. Second-order effects and risk analysis
	4. Proposed implementation
		1. Implementation principles
		2. Reinventing the wheel
	5. Compliance and regulation frameworks
	6. Collaborative work with School of economics(?—or keep for 'paper')

## Context

Fundamentally, the Open Market is a creator economy, where value is derived from human effort and interaction. The value of an open-source project comes from its governance, its community, and its ability to drive more innovation than other alternatives. That's why even big corporations chose to rely on open-source projects rather than creating their own alternatives. Almost by-design, open source contributors are driven by higher motivations than mere profit ; for the simple explanation that pure-open-source products are hardly—if not at all—profitable. 

Open source contributors and Intellectual Property are both entirely free. These are the non-negotiable axioms of free, open innovation. Despite these, open-source projects still attract funding for their maintenance and development, often crowdfunded from their consumers. These over-the-counter transactions happen _despite_ the rules of the current economy. As an unfortunate consequence, there's a lack of regulation, liquidity, transparency. Instead of serving the broader society, open source funding is constrained to the sole will of big tech monopolies.

With the Open Market, we propose to build the financial infrastructure and assets to commodify open source brands and provide liquidity to their projects, contributors, and investors. Our motivation is to align incentives for consumers, contributors, projects, and investors. We offer them to materialise the Brand Value of the open-source projects and trade it for work or money.

### Addressed problems

- **Funding limitations:** Open-source projects often struggle to secure sustainable funding, leading to stagnation or abandonment of valuable initiatives.

- **Monopoly of tech giants:** Current funding sources for open source are often controlled by proprietary big tech, limiting diversity and independence within the open-source ecosystem.

- **Lack of regulation:** The absence of standardised funding mechanisms results in a lack of regulation, transparency, and liquidity in open-source funding.

- **Inequitable incentives:** Current funding models do not successfully systematically align the incentives of creators, contributors, and investors, obstructing innovation.

### Delivered benefits

- **Sustainable funding:** The Open Market delivers sustainable funding by tokenising Brand Equity through Brand Equity Tokens (BETs), representing a share in a project's Trademark. The more a project grows and becomes useful, the more tokens it can mint to fund itself.

- **Diversity and decentralisation:** The democratisation of funding in the Open Market promotes diversity and decentralisation by allowing a diverse range of individuals and organisations to invest together in open-source projects. The long-term sovereignty and decreased cost promises of open source create the financial incentive to crowdfund this common knowledge.

- **Transparency and regulation:** The Open Market introduces transparency and regulation through its open protocol and market mechanisms. Smart contracts and liquid tokens enforce rules and standards, ensuring a fair and accountable funding environment. This goes along with financial regulations compliance and regulatory structures implementation.

- **Aligned incentives:** In the Open Market, incentives are fundamentally aligned to encourage innovation and the creation of valuable open-source solutions. Investors, contributors, and creators share the common goal of increasing Brand Value. Investors seek the success of the projects they support, contributors are motivated to provide high-quality work, and leaders are driven to govern their projects to greater sustained success.

## Model introduction

1. **Infrastructure**: at its core, the Open Market functions as a financial infrastructure designed specifically to support its unique principles. This infrastructure ensures that the market mechanisms operate transparently and consistently.
 
2. **Trading mechanism**: the primary asset traded in this market is Brand Equity Tokens (BETs). They represent a share in an open-source project's Brand Equity. Their value isn't arbitrary but determined through a mathematical formula that reflects supply and demand dynamics.

### Axioms

Axioms are the fundamental rules we define for our new system.

In general, Axioms are fundamental statements or propositions that are considered self-evidently true within a particular logical or mathematical system. They can then get used as the starting point for building logical arguments and proofs within that system. These axioms are the truth of our new model.

Some of these Axioms come from the Free Software philosophy, as our market is designed to enable this unique approach to innovation. We believe that free innovation is superior to and much more efficient than close-source innovation. Others come from the Curation Market model proposition. Curation Markets are an original, demonstrated approach to successfully value and sustain the Commons. Open-source innovation is described as a Commons.

1. Creative Labor is what creates Value
	1.1 The creation of Intellectual Property is Instant Value
2. Open Source should always be Free
	2.1 Intellectual Property (Knowledge) is free
	2.2 Work of contributors (Labor) is free
3. Brand Value is defined as the amount of investment that went into one project
	3.1 In other words, the ability one project had to attract valuable contributions (investments)
4. Brand Equity is the estimated future amount of investment that will go into one project
	4.1 In other words, the estimated future ability for one project to innovate faster than others
1. Time (Work), Influence (Brand), and Money are comparable currencies and can be traded

### Theory of value

In the Open Market, value is understood as an instantaneous creation, fundamentally analogous to the concept of power in energy markets. The key driver of this instantaneous value is the market demand for creative labor, essential for open-source innovation.

**Creative, innovative work (engineering, design...) is the fundamental energy.**

We distinguish two types of value creation:

- Innovative, new solutions to outstanding problems (>0),
- Maintenance work required to sustain existing solutions (<=0).

The traditional economy's businesses and consumers require continuous (open-source) innovation for their growth and service enhancement. This need creates an inherent demand for creative labor and further innovation in open-source projects.

### Theory of investment

In order to differentiate investment from speculation, we propose this 4-rule framework:

- **Transparent explainability**: Publicly available information must allow to develop a clear understanding of why past market events occurred (after the fact).
- **Influence**: Investors must be able to influence a project's development with their investment. This could be through governance participation, financial market incentives, or labor-effort.
- **Real-world value creation**: Investments must 'put money to work'. Tangible advancements and valuable contributions (i.e. creative labor) must result from capital investments.
- **Efficiency**: Market design must minimise arbitrage opportunities by ensuring equitable access to information and fair trading practices. No investor should profit from market inefficiencies.

In addition, we recommend implementing regulatory structures and compliance rules, providing accessible education and literacy, and facilitating community engagement.

Observing the demand for creative labor (i.e. more innovation), investors allocate resources to initiatives. Their goal is to accelerate the innovation rate of their chosen projects, possibly motivated by the financial gain perspectives or by a desire for specific change to happen.

The current innovative trajectory of a project serves as a 'predictor' of its future value. The underlying rationale is that projects demonstrating significant innovation now are more likely to attract even more innovation in the future.

A natural selection process emerges in the Open Market, curating the most innovative projects that are consistently delivering value. These projects would get the most funding and resources.

### Theory of speculation

Speculative behaviour is recognised as a natural and integral component of the Open Market, providing the necessary price discovery and liquidity mechanisms. This behaviour is predicated on the expectation that projects demonstrating current innovative progress will continue to attract resources and deliver future value, which in turn shapes the Brand Equity valuation—represented by the fluctuating price of Brand Equity Tokens (BETs).

The assumption is that educated speculation, based on the Open Market's transparent and data-driven insights, contributes to a balanced and robust market. It is the informed speculator who, perceiving the undervaluation of BETs due to external cash-outs or other market movements, capitalises on such moments to invest, thereby maintaining market stability and liquidity (i.e. staking _what is_ for _what could be_, i.e. taking a risk).

Investor-speculators respond to price signals that deviate from the market-discovered value of BETs. When an investor randomly liquidates (a part or the whole of) their position out of a need for immediate cash—regardless of the project's underlying value—this induces a temporary dip in the BET price. Investor-speculators interpret this price movement as an opportunity to purchase BETs at a discount, under the assumption that the price will readjust to reflect the true value of the project's future innovation potential.

### Roles

1. **Investor-contributor (Creators)**: These are individuals or teams who initiate open-source projects and actively contribute to their development. They issue (debt) or collect (fundraise) BETs to secure funding for their projects.

2. **Investor-speculator**: Investors who purchase BETs as a speculative investment, anticipating the future success and increased Brand Value of open-source projects.

3. **Investor-consumer (Consumers)**: Individuals or entities that acquire BETs to offer as stakes, rewarding projects and contributors for providing innovative solutions that meet their specific needs.

4. **Project Leaders**: In accordance with the governance structure of each project, project leaders are responsible for resource allocation, trademark management, and the project's presence on the Open Market. They collectively hold the rights and shape the identity of a project (i.e. its Brand) through their decisions, communication, and investments.

5. **End-users**: Individuals or organisations that utilise the final product of open-source projects. They may also assume roles as investors and/or consumers, participating in the ecosystem as their needs and interests evolve.

### Governance model

**The Open Market conceptualisation does not impose any governance model on projects.**

Each project should define its own governance structure according to its needs and preferences.

The market will naturally favour projects with the most effective governance models.

It's important to clarify that the Open Market concept does not necessitate open-source projects to:

- Provide governance rights to BETs holders,
- Distribute project revenue through new BETs issuance,
- Accept financial incentives to influence their roadmaps.

Projects may choose to implement any, all, or none of these options. The principles outlined in this white paper remain valid regardless. The market will incentivise productive behaviours.

**The primary aligned incentive is for all participants to foster an increase in Brand Value.**

### Applicability

Individuals and organisations purchase BETs for various motivations, including:

1. Belief in the project's vision or practicality.
2. A specific requirement for the project's deliverables.
3. Speculation on the projected growth of Brand Value.

The winners in this ecosystem are successful open-source projects and creators, investors who make informed BET investments, and end-users who gain from efficient open-source solutions.

Conversely, the losers are projects that fail to gain traction or to fulfil their commitments, as well as investors who make ill-advised investment choices.

## Open Market Infrastructure

TODO

### Open Market Protocol

TODO

### Open Market Exchanges

TODO

## Brand Equity Tokens (BETs)

TODO

- Identity
- Brand Value
- Brand Equity
- Bonding Curve
	- Multi level marketing
- Curation Markets
	- Tragedy of the commons
	- Ponzi scheme?
	- Curation is the new goldmine

### Bonding curve principle

TODO

### Curation market mechanism

TODO

### Trading BETs

TODO

## Derivative assets

TODO
- Index
- Future
- Options
- Equity
- Debt?

## Theoretical model analysis

TODO

### Flows (exchange value)

TODO

### Stocks (capital)

TODO

### Incentives analysis (simplified game theory)

- Theories and corollaries
- System effects

## Scenarios

TODO: split between scenarios to cover and risks to address

- Bootstrapping
- Initial Brand Offering
- Fundraising
- Consumer incentive
- Profit allocation
- Roadmap funding (Polar.sh)
- Speculative bubble
- Bankruptcy
- Trademark takeover
- Average consumer investing their savings into OSS
- Average consumer crowdfunding OSS app developments
- Index (ETF) funding


1. **Bootstrapping an Open-Source Project:**
    
    - **Scenario:** A new open-source project issues BETs to raise initial funding in exchange for a stake in future brand equity.
    - **Reasoning:** This mirrors early-stage funding rounds in startups, providing initial capital to get the project off the ground.
2. **Initial Brand Offering (IBO):**
    
    - **Scenario:** An established open-source project conducts an IBO, selling BETs to the public to fund expansion or new initiatives.
    - **Reasoning:** Similar to an Initial Public Offering (IPO), an IBO would be a milestone event, attracting investors and raising significant capital.
3. **Fundraising for Specific Features or Roadmap Items:**
    
    - **Scenario:** Projects issue BETs to fund specific features or roadmap items, like the development of a new module or integration (e.g., Polar.sh).
    - **Reasoning:** This allows the community to directly fund and prioritize the features they deem most valuable, much like targeted fundraising or Kickstarter campaigns for products.
4. **Consumer Incentive Programs:**
    
    - **Scenario:** Companies or end-users purchase BETs to incentivize the open-source community to address specific bugs or develop features they need.
    - **Reasoning:** This is akin to bounties in the software world, creating an immediate financial incentive for contributors.
5. **Profit Allocation to Contributors:**
    
    - **Scenario:** An open-source project distributes profits to contributors in the form of BETs.
    - **Reasoning:** This would align incentives by compensating contributors not just for their work but also giving them a stake in the project's success.
6. **Speculative Investment and Bubble Formation:**
    
    - **Scenario:** Speculators buy BETs of trending projects, inflating their value beyond the underlying fundamentals, leading to a bubble.
    - **Reasoning:** As with any tradeable asset, there is potential for speculation to drive prices away from intrinsic values, as seen in cryptocurrency markets.
7. **Bankruptcy or Project Failure:**
    
    - **Scenario:** A project fails to deliver, leading to a devaluation of its BETs, and essentially 'bankrupting' the brand.
    - **Reasoning:** Reflects the risk inherent in investment; not all projects succeed, and their tokens would become worthless, like stock in a bankrupt company.
8. **Trademark Takeover Threats:**
    
    - **Scenario:** An entity accumulates a majority of BETs, attempting to influence or take over the project's direction.
    - **Reasoning:** Similar to a hostile takeover in the corporate world, this risk necessitates measures like governance structures to protect the community's interests.
9. **Individual Investment for Personal Savings:**
    
    - **Scenario:** An average consumer invests their savings into BETs of various open-source projects, diversifying their personal portfolio.
    - **Reasoning:** This could democratize investment opportunities, similar to individuals investing in the stock market for personal gain.
10. **Crowdfunding Open-Source Application Developments:**
    
    - **Scenario:** Consumers crowdfund specific OSS application developments by purchasing BETs.
    - **Reasoning:** This would allow users to directly fund and accelerate development in areas they care about, a model proven by platforms like Patreon and GoFundMe.
11. **Creation of Open-Source Index Funds (ETFs):**
    
    - **Scenario:** Financial institutions create ETFs comprising various BETs, allowing investors to invest in the performance of the open-source sector as a whole.
    - **Reasoning:** ETFs provide diversified exposure and reduce risk, a common practice in traditional finance with sectors like technology or healthcare.
1. **Market Manipulation:**
    
    - **Threat:** Individuals or groups could manipulate the market by hoarding BETs and controlling the price.
    - **Reasoning:** As with any market, there's a risk of manipulation by those with significant purchasing power.
2. **Sybil Attacks:**
    
    - **Threat:** Bad actors create numerous identities to acquire BETs and disrupt governance decisions.
    - **Reasoning:** Decentralized systems are vulnerable to Sybil attacks where the attacker subverts the network by creating a large number of pseudonymous identities.
3. **Regulatory Compliance:**
    
    - **Threat:** The Open Market may face challenges with varying international financial regulations, including securities law.
    - **Reasoning:** Any financial instrument is subject to the laws of the jurisdictions in which it operates, and BETs could be classified as securities.
4. **Trademark Disputes:**
    
    - **Threat:** Legal battles over trademarks and intellectual property could arise with the tokenization of brand equity.
    - **Reasoning:** Trademarks are legal instruments, and their tokenization may not align with existing laws or may lead to conflicts among stakeholders.
5. **Security of Smart Contracts:**
    
    - **Threat:** Flaws or vulnerabilities in smart contracts could be exploited, leading to loss of funds or unauthorized actions.
    - **Reasoning:** Smart contracts are only as secure as their code, and any bugs can be exploited, as seen in various cryptocurrency platforms.
6. **Value Volatility:**
    
    - **Threat:** Excessive volatility in BETs could deter serious investment and stable project funding.
    - **Reasoning:** High volatility is a known issue in cryptocurrency markets and can be off-putting for potential investors seeking stability.
7. **Inequitable Access to Investments:**
    
    - **Threat:** The risk that only a small number of wealthy individuals or entities could dominate investment in popular projects.
    - **Reasoning:** Financial markets can tend towards inequality, with more affluent actors taking larger shares of profitable investments.
8. **Exit Scams:**
    
    - **Threat:** Project founders or major stakeholders could abruptly sell off their BETs, collapsing the market.
    - **Reasoning:** Similar to pump-and-dump schemes in crypto, an exit scam would destroy investor trust and project credibility.
9. **Liquidity Problems:**
    
    - **Threat:** Projects might suffer from insufficient liquidity, making it difficult for holders to sell their BETs without significantly impacting the market price.
    - **Reasoning:** New and smaller markets often struggle with liquidity, which can lead to problems when stakeholders wish to exit their positions.
10. **Over-Collateralization:**
    
    - **Threat:** To ensure liquidity, projects may over-collateralize, leading to an unsustainable debt position.
    - **Reasoning:** Similar to issues faced by DeFi platforms, ensuring liquidity through collateral can lead to financial instability if not managed properly.
11. **Focus Shift to Speculation:**
    
    - **Threat:** The focus of open-source projects may shift from innovation to financial speculation on BETs.
    - **Reasoning:** When financial incentives dominate, the primary mission of projects could become secondary to market performance.
12. **Social Engineering Attacks:**
    
    - **Threat:** Phishing, pretexting, and other social engineering methods could be used to steal BETs or influence governance decisions.
    - **Reasoning:** Human factors are often the weakest link in security, and social engineering is a common way to exploit these weaknesses.
- 

### OSS project bootstrapping

## Comparison with the traditional economy

## Proofs

- TODO: mathematically assert and prove all that is being said above.
	- under which conditions and to which extent?
- TODO: backlink proofs where required into the narrative.

## References and Prior Work

- Funding OSS:
	- GitHub Sponsors
	- Bounty marketplaces
- GitCoin
- Curation Markets & Continuous Organisations
- VC funds
	- OSS Capital

**Books**:
- "Tout savoir sur l'économie" from *Heureka* provides a comprehensive view on economics.
- "The Lean Startup" offers insights on modern startup methodologies.
- "Sapiens" delves into the history and future of humankind.
- Tim Urban's "The Story of Us" encapsulates human evolution and society.

**Movies**:
- "The Big Short" highlights the events leading up to the financial crisis.
- "The Playlist" (details not provided).

**Projects/Enterprises**:
- *DeSo* and *Braintrust* are significant in the open-source ecosystem, with the latter discussed in articles from Not Boring and Placeholder VC.
- Frontier Climate, Worldcoin, Google's X Company, and Masterworks are other notable projects.
- Huntr, with its AI and ML bug bounty platform, and other platforms like Gitcoin, OpenFund, and OnlyDust are contributing to open-source funding and development.
- *Hugging Face* and 'open' AI present advances in AI.
- Open Forum Europe, Free Software Foundation Europe, and LTSE are pushing boundaries in the open-source arena.
- Financial platforms like Bancor, Uniswap, and GitHub Sponsors, among others, are reshaping the way projects are funded.
  
**Competition**:
- Ubuntu, Red Hat, OnlyDust, OSS Capital, and GitHub Sponsors are significant competitors in the open-source landscape.

**Articles**:
- A range of articles, from the Luna Terra crash study to discussions on Web3 and open source, have been sourced from platforms like YouTube, Equinix, European Commission, Wikipedia, Forbes, and GitHub, among others. These articles touch upon topics like software failures, crypto regulations, open source profitability, and more.

**Collaborations**:
- Collaboration with entities like The Linux Foundation, CNCF, Open Source Security Foundation, Free Software Foundation, and Open Software Initiative can be explored. These foundations are pioneers in promoting open-source development, security, and best practices.

**Funds/Grants Programs**:
- Funding and grant programs from Sloan, Mozilla, Stripe, and FOSS funders (including Sentry, Microsoft, and Vercel) offer financial support to open-source initiatives.



Curation Market white paper: https://docs.google.com/document/d/1VNkBjjGhcZUV9CyC0ccWYbqeOoVKT2maqX0rK3yXB20/edit

- [[the ATLAS Studio - Implementing an Open Market Exchange as a start-up studio]]
	- link to paper (see below)
	- link to white paper (see above)
- paper: [[paper - the case for an open innovation economy]]-> school of economics
	- more socio-economic and philosophical
	- refer to prior economic and philosophical work
	- make the case of **the innovation**
	- topics
		- Can we tokenise trademarks?
		- AGPL licence for editing and sharing ([[Open source should be the only way]])
			- Unmodified can be used (as a dependency or not) without a problem
		- Brand (Trademark) belongs to brand-holders (ie project coin holders)
			- Listing Open Exchange gets an exclusive right to distribute
			- Project Leadership can grant additional rights to distribute as they decide
		- Brand = Trademark
			- ie requires to somehow automate the registering of trademarks (cost?)
		- Investing earlier in a brand is more risky than later (offer/demand dynamics)
		- Power should be separated
			- TODO: better describe/document
		- Work is a form of investment
		- Influencing the development of a project is a form of investment
		- Profit comes from good work and strategy, not from good exploitation
		- Goal of traditional companies must become to optimise the use of natural resources



- Curation Market implementations?
- Bancor?
- Fairmint?

