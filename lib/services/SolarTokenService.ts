// Types and interfaces for SolarToken data model
export interface TokenGenerationRecord {
    id: string;
    plantId: number;
    timestamp: string;
    energyKWh: number;
    tokensGenerated: number;
    valueUSD: number;
    status: 'pending' | 'confirmed' | 'rejected';
    transactionHash?: string;
    emissions: {
      co2Avoided: number;
      treeEquivalent: number;
    };
  }
  
  export interface TokenTransaction {
    id: string;
    type: 'mint' | 'buy' | 'sell' | 'transfer';
    fromAddress?: string;
    toAddress: string;
    amount: number;
    pricePerToken?: number;
    totalValue?: number;
    timestamp: string;
    status: 'pending' | 'confirmed' | 'rejected' | 'cancelled';
    transactionHash?: string;
    plantId?: number; // Only for mint transactions
  }
  
  export interface TokenMarketData {
    currentPrice: number;
    priceHistory: Array<{
      timestamp: string;
      price: number;
      volume: number;
    }>;
    buyOrders: Array<{
      id: string;
      price: number;
      amount: number;
      timestamp: string;
      buyerCount: number;
    }>;
    sellOrders: Array<{
      id: string;
      price: number;
      amount: number;
      timestamp: string;
      sellerCount: number;
    }>;
    marketCap: number;
    totalSupply: number;
    volume24h: number;
    priceChange24h: number;
  }
  
  export interface TokenPortfolio {
    address: string;
    balance: number;
    valueUSD: number;
    allocation: {
      inWallet: number;
      sold: number;
      transferred: number;
    };
  }
  
  export interface PlantFinanceData {
    plantId: number;
    initialCapex: number;
    capexPaidToDate: number;
    estimatedROI: number;
    estimatedPayoffDate: string;
    tokenValueGenerated: number;
    monthlyRevenue: Array<{
      month: string;
      revenue: number;
    }>;
  }
  
  // SolarToken Service to fetch token data
  class SolarTokenService {
    private static instance: SolarTokenService | null = null;
    private walletAddress: string = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
    
    // Mock data for development
    private mockGenerationData: TokenGenerationRecord[] = [];
    private mockTransactions: TokenTransaction[] = [];
    private mockMarketData: TokenMarketData | null = null;
    private mockPortfolio: TokenPortfolio | null = null;
    private mockPlantFinance: PlantFinanceData | null = null;
    
    private constructor() {
      this.initializeMockData();
    }
    
    public static getInstance(): SolarTokenService {
      if (!SolarTokenService.instance) {
        SolarTokenService.instance = new SolarTokenService();
      }
      return SolarTokenService.instance;
    }
    
    private initializeMockData(): void {
      try {
        this.generateMockGenerationData();
        this.generateMockTransactions();
        this.generateMockMarketData();
        this.generateMockPortfolio();
        this.generateMockFinanceData();
      } catch (error) {
        console.error("Error initializing mock data:", error);
      }
    }
    
    private generateMockGenerationData(): void {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      months.forEach((month, index) => {
        // Generate power based on season (more in summer, less in winter - northern hemisphere)
        const seasonFactor = Math.sin((index - 2) * Math.PI / 6) * 0.3 + 0.85;
        const baseEnergy = 3500; // Base kWh per month
        const energyKWh = Math.round(baseEnergy * seasonFactor);
        
        // Generate a record for each month
        this.mockGenerationData.push({
          id: `gen-${Date.now()}-${index}`,
          plantId: 1,
          timestamp: new Date(2024, index, 15).toISOString(),
          energyKWh: energyKWh,
          tokensGenerated: energyKWh, // 1 token per kWh
          valueUSD: energyKWh * 0.25, // $0.25 per token
          status: 'confirmed',
          transactionHash: `0x${Math.random().toString(16).substr(2, 40)}`,
          emissions: {
            co2Avoided: energyKWh * 0.0005, // 0.5 kg CO2 per kWh
            treeEquivalent: energyKWh * 0.0002 // 0.2 trees per kWh (simplified)
          }
        });
      });
    }
    
    private generateMockTransactions(): void {
      // Create some mint transactions (from energy generation)
      for (let i = 0; i < 10; i++) {
        const amount = Math.floor(Math.random() * 200) + 50;
        const daysAgo = i * 3;
        
        this.mockTransactions.push({
          id: `tx-mint-${Date.now()}-${i}`,
          type: 'mint',
          toAddress: this.walletAddress,
          amount: amount,
          timestamp: new Date(Date.now() - daysAgo * 86400000).toISOString(),
          status: 'confirmed',
          transactionHash: `0x${Math.random().toString(16).substr(2, 40)}`,
          plantId: 1
        });
      }
      
      // Add some sell transactions
      for (let i = 0; i < 5; i++) {
        const amount = Math.floor(Math.random() * 100) + 20;
        const pricePerToken = 0.25 + (Math.random() * 0.05);
        const daysAgo = i * 5 + 2;
        
        this.mockTransactions.push({
          id: `tx-sell-${Date.now()}-${i}`,
          type: 'sell',
          fromAddress: this.walletAddress,
          toAddress: `0x${Math.random().toString(16).substr(2, 40)}`,
          amount: amount,
          pricePerToken: pricePerToken,
          totalValue: amount * pricePerToken,
          timestamp: new Date(Date.now() - daysAgo * 86400000).toISOString(),
          status: 'confirmed',
          transactionHash: `0x${Math.random().toString(16).substr(2, 40)}`
        });
      }
      
      // Add some buy transactions
      for (let i = 0; i < 3; i++) {
        const amount = Math.floor(Math.random() * 50) + 10;
        const pricePerToken = 0.24 + (Math.random() * 0.03);
        const daysAgo = i * 4 + 3;
        
        this.mockTransactions.push({
          id: `tx-buy-${Date.now()}-${i}`,
          type: 'buy',
          fromAddress: `0x${Math.random().toString(16).substr(2, 40)}`,
          toAddress: this.walletAddress,
          amount: amount,
          pricePerToken: pricePerToken,
          totalValue: amount * pricePerToken,
          timestamp: new Date(Date.now() - daysAgo * 86400000).toISOString(),
          status: 'confirmed',
          transactionHash: `0x${Math.random().toString(16).substr(2, 40)}`
        });
      }
      
      // Add some transfer transactions
      for (let i = 0; i < 2; i++) {
        const amount = Math.floor(Math.random() * 30) + 5;
        const daysAgo = i * 7 + 5;
        
        this.mockTransactions.push({
          id: `tx-transfer-${Date.now()}-${i}`,
          type: 'transfer',
          fromAddress: this.walletAddress,
          toAddress: `0x${Math.random().toString(16).substr(2, 40)}`,
          amount: amount,
          timestamp: new Date(Date.now() - daysAgo * 86400000).toISOString(),
          status: 'confirmed',
          transactionHash: `0x${Math.random().toString(16).substr(2, 40)}`
        });
      }
      
      // Sort transactions by timestamp (newest first)
      this.mockTransactions.sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
    }
    
    private generateMockMarketData(): void {
      // Generate price history data for the last 7 days
      const priceHistory = [];
      const basePrice = 0.25;
      
      for (let i = 0; i < 7; i++) {
        // Generate slight variations in price
        const priceVariation = (Math.random() * 0.04) - 0.02;
        const price = basePrice + priceVariation;
        
        // Generate random volume
        const volume = Math.floor(Math.random() * 1000) + 500;
        
        priceHistory.push({
          timestamp: new Date(Date.now() - (6 - i) * 86400000).toISOString(),
          price: price,
          volume: volume
        });
      }
      
      // Current price is the last in the history
      const currentPrice = priceHistory[priceHistory.length - 1].price;
      
      // Generate buy orders
      const buyOrders = [
        {
          id: 'bo-1',
          price: currentPrice - 0.01,
          amount: 1250,
          timestamp: new Date().toISOString(),
          buyerCount: 3
        },
        {
          id: 'bo-2',
          price: currentPrice - 0.02,
          amount: 3450,
          timestamp: new Date().toISOString(),
          buyerCount: 7
        },
        {
          id: 'bo-3',
          price: currentPrice - 0.03,
          amount: 5120,
          timestamp: new Date().toISOString(),
          buyerCount: 12
        },
        {
          id: 'bo-4',
          price: currentPrice - 0.04,
          amount: 7890,
          timestamp: new Date().toISOString(),
          buyerCount: 15
        }
      ];
      
      // Generate sell orders
      const sellOrders = [
        {
          id: 'so-1',
          price: currentPrice + 0.01,
          amount: 2125,
          timestamp: new Date().toISOString(),
          sellerCount: 5
        },
        {
          id: 'so-2',
          price: currentPrice + 0.02,
          amount: 3870,
          timestamp: new Date().toISOString(),
          sellerCount: 9
        },
        {
          id: 'so-3',
          price: currentPrice + 0.03,
          amount: 4590,
          timestamp: new Date().toISOString(),
          sellerCount: 11
        },
        {
          id: 'so-4',
          price: currentPrice + 0.04,
          amount: 6230,
          timestamp: new Date().toISOString(),
          sellerCount: 14
        }
      ];
      
      // Calculate total supply based on generation data
      const totalSupply = this.mockGenerationData.reduce(
        (sum, record) => sum + record.tokensGenerated, 0
      );
      
      // Calculate market cap
      const marketCap = totalSupply * currentPrice;
      
      // Calculate 24h volume (sum of all transaction volumes in the last 24 hours)
      const oneDayAgo = new Date(Date.now() - 86400000);
      const volume24h = this.mockTransactions
        .filter(tx => new Date(tx.timestamp) > oneDayAgo && (tx.type === 'buy' || tx.type === 'sell'))
        .reduce((sum, tx) => sum + (tx.totalValue || 0), 0);
      
      // Calculate price change
      const previousPrice = priceHistory[priceHistory.length - 2].price;
      const priceChange24h = ((currentPrice - previousPrice) / previousPrice) * 100;
      
      this.mockMarketData = {
        currentPrice,
        priceHistory,
        buyOrders,
        sellOrders,
        marketCap,
        totalSupply,
        volume24h,
        priceChange24h
      };
    }
    
    private generateMockPortfolio(): void {
      if (!this.mockMarketData) {
        throw new Error("Market data must be generated before portfolio");
      }
      
      // Calculate total balance from transactions
      const mintedTokens = this.mockTransactions
        .filter(tx => tx.type === 'mint' && tx.toAddress === this.walletAddress)
        .reduce((sum, tx) => sum + tx.amount, 0);
      
      const soldTokens = this.mockTransactions
        .filter(tx => tx.type === 'sell' && tx.fromAddress === this.walletAddress)
        .reduce((sum, tx) => sum + tx.amount, 0);
      
      const boughtTokens = this.mockTransactions
        .filter(tx => tx.type === 'buy' && tx.toAddress === this.walletAddress)
        .reduce((sum, tx) => sum + tx.amount, 0);
      
      const transferredTokens = this.mockTransactions
        .filter(tx => tx.type === 'transfer' && tx.fromAddress === this.walletAddress)
        .reduce((sum, tx) => sum + tx.amount, 0);
      
      const receivedTokens = this.mockTransactions
        .filter(tx => tx.type === 'transfer' && tx.toAddress === this.walletAddress)
        .reduce((sum, tx) => sum + tx.amount, 0);
      
      // Calculate current balance
      const currentBalance = mintedTokens + boughtTokens + receivedTokens - soldTokens - transferredTokens;
      
      // Calculate allocation percentages
      const inWallet = currentBalance;
      
      this.mockPortfolio = {
        address: this.walletAddress,
        balance: currentBalance,
        valueUSD: currentBalance * this.mockMarketData.currentPrice,
        allocation: {
          inWallet: inWallet,
          sold: soldTokens,
          transferred: transferredTokens
        }
      };
    }
    
    private generateMockFinanceData(): void {
      // Sample CAPEX and financial data
      const initialCapex = 1000000; // $1 million initial investment
      
      // Calculate token value generated
      const tokenValueGenerated = this.mockGenerationData.reduce(
        (sum, record) => sum + record.valueUSD, 0
      );
      
      // Calculate percentage of CAPEX paid off
      const capexPaidToDate = Math.min(tokenValueGenerated, initialCapex);
      
      // Generate monthly revenue data
      const monthlyRevenue = this.mockGenerationData.map(record => {
        const date = new Date(record.timestamp);
        return {
          month: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`,
          revenue: record.valueUSD
        };
      });
      
      // Calculate estimated ROI (years)
      const annualRevenue = monthlyRevenue.reduce((sum, month) => sum + month.revenue, 0);
      const estimatedROI = initialCapex / annualRevenue;
      
      // Calculate estimated payoff date
      const remainingCapex = initialCapex - capexPaidToDate;
      const monthsToPayoff = remainingCapex / (annualRevenue / 12);
      const payoffDate = new Date();
      payoffDate.setMonth(payoffDate.getMonth() + monthsToPayoff);
      
      this.mockPlantFinance = {
        plantId: 1,
        initialCapex,
        capexPaidToDate,
        estimatedROI,
        estimatedPayoffDate: payoffDate.toISOString(),
        tokenValueGenerated,
        monthlyRevenue
      };
    }
    
    // Public API methods
    
    /**
     * Get token generation data for a specific plant
     */
    async getTokenGenerationByPlant(plantId: number): Promise<TokenGenerationRecord[]> {
      // In a real implementation, this would make a blockchain API call
      return this.mockGenerationData.filter(record => record.plantId === plantId);
    }
    
    /**
     * Get token transactions for the current wallet
     */
    async getTokenTransactions(limit: number = 10): Promise<TokenTransaction[]> {
      // In a real implementation, this would make a blockchain API call
      return this.mockTransactions.slice(0, limit);
    }
    
    /**
     * Get current market data for tokens
     */
    async getMarketData(): Promise<TokenMarketData> {
      // In a real implementation, this would make an API call to a token exchange
      if (!this.mockMarketData) {
        throw new Error("Market data not initialized");
      }
      return this.mockMarketData;
    }
    
    /**
     * Get token portfolio data for the current user
     */
    async getPortfolio(): Promise<TokenPortfolio> {
      // In a real implementation, this would make a blockchain API call
      if (!this.mockPortfolio) {
        throw new Error("Portfolio not initialized");
      }
      return this.mockPortfolio;
    }
    
    /**
     * Get finance data for a specific plant
     */
    async getPlantFinanceData(plantId: number): Promise<PlantFinanceData> {
      // In a real implementation, this would make an API call
      if (!this.mockPlantFinance) {
        throw new Error("Plant finance data not initialized");
      }
      return this.mockPlantFinance;
    }
    
    /**
     * Mint new tokens based on energy production
     */
    async mintTokens(plantId: number, energyKWh: number): Promise<TokenTransaction> {
      if (!this.mockMarketData || !this.mockPortfolio) {
        throw new Error("Market data or portfolio not initialized");
      }
      
      // In a real implementation, this would make a blockchain transaction
      const newTokens: TokenTransaction = {
        id: `tx-mint-${Date.now()}`,
        type: 'mint',
        toAddress: this.walletAddress,
        amount: energyKWh,
        timestamp: new Date().toISOString(),
        status: 'confirmed',
        transactionHash: `0x${Math.random().toString(16).substr(2, 40)}`,
        plantId: plantId
      };
      
      // Add to local mock data
      this.mockTransactions.unshift(newTokens);
      
      // Add generation record as well
      const newGeneration: TokenGenerationRecord = {
        id: `gen-${Date.now()}`,
        plantId: plantId,
        timestamp: new Date().toISOString(),
        energyKWh: energyKWh,
        tokensGenerated: energyKWh,
        valueUSD: energyKWh * this.mockMarketData.currentPrice,
        status: 'confirmed',
        transactionHash: newTokens.transactionHash,
        emissions: {
          co2Avoided: energyKWh * 0.0005,
          treeEquivalent: energyKWh * 0.0002
        }
      };
      
      this.mockGenerationData.push(newGeneration);
      
      // Update the portfolio
      this.mockPortfolio.balance += energyKWh;
      this.mockPortfolio.valueUSD = this.mockPortfolio.balance * this.mockMarketData.currentPrice;
      this.mockPortfolio.allocation.inWallet += energyKWh;
      
      // Update the plant finance data
      if (this.mockPlantFinance) {
        this.mockPlantFinance.tokenValueGenerated += newGeneration.valueUSD;
        this.mockPlantFinance.capexPaidToDate = Math.min(
          this.mockPlantFinance.tokenValueGenerated,
          this.mockPlantFinance.initialCapex
        );
      }
      
      return newTokens;
    }
    
    /**
     * Buy tokens on the market
     */
    async buyTokens(amount: number, price: number): Promise<TokenTransaction> {
      if (!this.mockMarketData || !this.mockPortfolio) {
        throw new Error("Market data or portfolio not initialized");
      }
      
      // In a real implementation, this would make a blockchain transaction
      const totalValue = amount * price;
      const newTransaction: TokenTransaction = {
        id: `tx-buy-${Date.now()}`,
        type: 'buy',
        fromAddress: `0x${Math.random().toString(16).substr(2, 40)}`, // Random seller
        toAddress: this.walletAddress,
        amount: amount,
        pricePerToken: price,
        totalValue: totalValue,
        timestamp: new Date().toISOString(),
        status: 'confirmed',
        transactionHash: `0x${Math.random().toString(16).substr(2, 40)}`
      };
      
      // Add to local mock data
      this.mockTransactions.unshift(newTransaction);
      
      // Update the portfolio
      this.mockPortfolio.balance += amount;
      this.mockPortfolio.valueUSD = this.mockPortfolio.balance * this.mockMarketData.currentPrice;
      this.mockPortfolio.allocation.inWallet += amount;
      
      return newTransaction;
    }
    
    /**
     * Sell tokens on the market
     */
    async sellTokens(amount: number, price: number): Promise<TokenTransaction> {
      if (!this.mockMarketData || !this.mockPortfolio) {
        throw new Error("Market data or portfolio not initialized");
      }
      
      // Check if user has enough tokens
      if (this.mockPortfolio.balance < amount) {
        throw new Error("Insufficient token balance");
      }
      
      // In a real implementation, this would make a blockchain transaction
      const totalValue = amount * price;
      const newTransaction: TokenTransaction = {
        id: `tx-sell-${Date.now()}`,
        type: 'sell',
        fromAddress: this.walletAddress,
        toAddress: `0x${Math.random().toString(16).substr(2, 40)}`, // Random buyer
        amount: amount,
        pricePerToken: price,
        totalValue: totalValue,
        timestamp: new Date().toISOString(),
        status: 'confirmed',
        transactionHash: `0x${Math.random().toString(16).substr(2, 40)}`
      };
      
      // Add to local mock data
      this.mockTransactions.unshift(newTransaction);
      
      // Update the portfolio
      this.mockPortfolio.balance -= amount;
      this.mockPortfolio.valueUSD = this.mockPortfolio.balance * this.mockMarketData.currentPrice;
      this.mockPortfolio.allocation.inWallet -= amount;
      this.mockPortfolio.allocation.sold += amount;
      
      return newTransaction;
    }
    
    /**
     * Transfer tokens to another address
     */
    async transferTokens(toAddress: string, amount: number): Promise<TokenTransaction> {
      if (!this.mockMarketData || !this.mockPortfolio) {
        throw new Error("Market data or portfolio not initialized");
      }
      
      // Check if user has enough tokens
      if (this.mockPortfolio.balance < amount) {
        throw new Error("Insufficient token balance");
      }
      
      // In a real implementation, this would make a blockchain transaction
      const newTransaction: TokenTransaction = {
        id: `tx-transfer-${Date.now()}`,
        type: 'transfer',
        fromAddress: this.walletAddress,
        toAddress: toAddress,
        amount: amount,
        timestamp: new Date().toISOString(),
        status: 'confirmed',
        transactionHash: `0x${Math.random().toString(16).substr(2, 40)}`
      };
      
      // Add to local mock data
      this.mockTransactions.unshift(newTransaction);
      
      // Update the portfolio
      this.mockPortfolio.balance -= amount;
      this.mockPortfolio.valueUSD = this.mockPortfolio.balance * this.mockMarketData.currentPrice;
      this.mockPortfolio.allocation.inWallet -= amount;
      this.mockPortfolio.allocation.transferred += amount;
      
      return newTransaction;
    }
  }
  
  // Export a singleton instance
  export const tokenService = SolarTokenService.getInstance();