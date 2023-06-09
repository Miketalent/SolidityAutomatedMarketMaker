# AutomatedMarketMaker

This project is a mock Automated Market Maker that allows users to trade two tokens. 

Main Methods:
1. Deposit() - Deposit token and the amount to the liquidity pool.  Returns the LP share for token supply
2. Withdraw() - Withdraw token amount from the liquidity pool. 
3. Trade() - Swap tokens.  

Other methods and notes:
1. This contract handles/simulates the token holding for participants and acts as a wallet.  There is no actual token transaction involved.
2. This AMM uses the Constant Product x*y=k model
3. getPrice and faucet test methods