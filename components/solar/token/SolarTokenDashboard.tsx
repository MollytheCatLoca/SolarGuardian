import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Coins, 
  Repeat, 
  TrendingUp, 
  Users, 
  Globe, 
  Award, 
  RefreshCw,
  BarChart2,
  Zap,
  PlusCircle,
  Share2,
  ListFilter,
  Info,
  Landmark,
  CalendarCheck,
  DollarSign,
  X
} from 'lucide-react';

// Import the token service

import { tokenService } from '@/lib/services/solarTokenService';
import {
  TokenGenerationRecord,
  TokenTransaction,
  TokenMarketData,
  TokenPortfolio,
  PlantFinanceData
} from '@/lib/services/solarTokenService';

// Main component
const SolarTokenDashboard = ({ plantId }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State for data
  const [generationData, setGenerationData] = useState<TokenGenerationRecord[]>([]);
  const [transactions, setTransactions] = useState<TokenTransaction[]>([]);
  const [marketData, setMarketData] = useState<TokenMarketData | null>(null);
  const [portfolio, setPortfolio] = useState<TokenPortfolio | null>(null);
  const [plantFinance, setPlantFinance] = useState<PlantFinanceData | null>(null);

  // For the token mint modal
  const [showMintModal, setShowMintModal] = useState(false);
  const [mintAmount, setMintAmount] = useState(100);
  const [isMinting, setIsMinting] = useState(false);
  
  // Load data on component mount
  useEffect(() => {
    loadAllData();
  }, [plantId]);
  
  // Function to load all data
  const loadAllData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Load all data in parallel
      const [
        generationData,
        transactions,
        marketData,
        portfolio,
        plantFinance
      ] = await Promise.all([
        tokenService.getTokenGenerationByPlant(plantId),
        tokenService.getTokenTransactions(),
        tokenService.getMarketData(),
        tokenService.getPortfolio(),
        tokenService.getPlantFinanceData(plantId)
      ]);
      
      // Set state with loaded data
      setGenerationData(generationData);
      setTransactions(transactions);
      setMarketData(marketData);
      setPortfolio(portfolio);
      setPlantFinance(plantFinance);
    } catch (err) {
      console.error("Error loading token data:", err);
      setError("Failed to load token data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Function to mint new tokens
  const handleMintTokens = async () => {
    if (mintAmount <= 0) return;
    
    setIsMinting(true);
    try {
      // Call the service to mint tokens
      await tokenService.mintTokens(plantId, mintAmount);
      
      // Reload data
      await loadAllData();
      
      // Close modal
      setShowMintModal(false);
    } catch (err) {
      console.error("Error minting tokens:", err);
      setError("Failed to mint tokens. Please try again.");
    } finally {
      setIsMinting(false);
    }
  };
  
  // Calculate formatted token data
  const formattedGenerationData = generationData.map(item => {
    const date = new Date(item.timestamp);
    const month = date.toLocaleString('default', { month: 'short' });
    return {
      month,
      tokens: item.tokensGenerated,
      energyKWh: item.energyKWh,
      valueUSD: item.valueUSD
    };
  });
  
  // Format emission data for chart
  const emissionsData = generationData.reduce((acc, item) => {
    return {
      co2Avoided: (acc.co2Avoided || 0) + item.emissions.co2Avoided,
      treeEquivalent: (acc.treeEquivalent || 0) + item.emissions.treeEquivalent
    };
  }, { co2Avoided: 0, treeEquivalent: 0 });
  
  // Format for pie chart
  const impactData = [
    { name: 'CO2 Avoided', value: emissionsData.co2Avoided },
    { name: 'Tree Equivalent', value: emissionsData.treeEquivalent }
  ];
  
  // Format allocation data for pie chart
  const allocationData = portfolio ? [
    { name: 'In Wallet', value: portfolio.allocation.inWallet },
    { name: 'Sold', value: portfolio.allocation.sold },
    { name: 'Transferred', value: portfolio.allocation.transferred }
  ] : [];
  
  // Colors for pie charts
  const COLORS = ['#4a4ae2', '#10b981', '#f59e0b', '#ef4444'];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2 text-white">SolarToken Dashboard</h1>
          <p className="text-sm text-gray-400">Tokenization and trading of generated solar energy</p>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline"
            size="sm"
            onClick={loadAllData}
            disabled={isLoading}
            className="bg-[#1f2937] border-[#374151] text-white hover:bg-[#374151]"
          >
            <RefreshCw size={16} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button
            size="sm"
            className="bg-[#4a4ae2] text-white hover:bg-[#3b3be0]"
            onClick={() => setShowMintModal(true)}
          >
            <PlusCircle size={16} className="mr-2" />
            Mint Tokens
          </Button>
        </div>
      </div>

      {/* Tabs for different sections */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-[#1f2937] border border-[#374151]">
          <TabsTrigger 
            value="overview"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="market"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Market
          </TabsTrigger>
          <TabsTrigger 
            value="transactions"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Transactions
          </TabsTrigger>
          <TabsTrigger 
            value="finance"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Finance
          </TabsTrigger>
          <TabsTrigger 
            value="impact"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Impact
          </TabsTrigger>
        </TabsList>
        
        {/* Overview tab content */}
        <TabsContent value="overview" className="space-y-6">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>Token Generation</CardTitle>
              <CardDescription className="text-gray-400">
                Monthly tokens generated based on energy production
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={formattedGenerationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#718096" />
                    <YAxis stroke="#718096" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111928', 
                        border: '1px solid #374151',
                        color: 'white'
                      }}
                      formatter={(value, name) => {
                        if (name === 'tokens') return [value, 'Tokens'];
                        if (name === 'valueUSD') return [`${value.toFixed(2)}`, 'Value USD'];
                        return [value, name];
                      }}
                    />
                    <Legend />
                    <Bar dataKey="tokens" name="Tokens (kWh)" fill="#4a4ae2" />
                    <Bar dataKey="valueUSD" name="Value (USD)" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardHeader>
                <CardTitle>Token Distribution</CardTitle>
                <CardDescription className="text-gray-400">
                  How your generated tokens are distributed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] flex justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={allocationData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#111928', 
                          border: '1px solid #374151',
                          color: 'white'
                        }}
                        formatter={(value, name, props) => [value, props.payload.name]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="bg-[#111928] p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-400">In Wallet</p>
                    <p className="text-lg font-medium">{portfolio?.allocation.inWallet.toLocaleString() || '0'}</p>
                  </div>
                  <div className="bg-[#111928] p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-400">Sold</p>
                    <p className="text-lg font-medium">{portfolio?.allocation.sold.toLocaleString() || '0'}</p>
                  </div>
                  <div className="bg-[#111928] p-3 rounded-lg text-center">
                    <p className="text-xs text-gray-400">Transferred</p>
                    <p className="text-lg font-medium">{portfolio?.allocation.transferred.toLocaleString() || '0'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription className="text-gray-400">
                  Recent activity with your tokens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-[300px] overflow-auto pr-1">
                  {transactions.slice(0, 5).map((tx, index) => (
                    <div key={index} className="bg-[#111928] p-3 rounded-lg">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-medium">{tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction</p>
                          <p className="text-xs text-gray-400">{new Date(tx.timestamp).toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{tx.amount} tokens</p>
                          <p className="text-xs text-green-400">{tx.status}</p>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2 pt-2 border-t border-[#374151] text-xs text-gray-400">
                        <span>ID: {tx.id.substring(0, 10)}...</span>
                        <a href="#" className="text-blue-400 hover:underline">View on blockchain</a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Market tab content */}
        <TabsContent value="market" className="space-y-6">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader className="flex flex-row justify-between items-center">
              <div>
                <CardTitle>SolarToken Market</CardTitle>
                <CardDescription className="text-gray-400">
                  Buy and sell renewable energy tokens
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Buy
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Sell
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={marketData?.priceHistory || []}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="timestamp" 
                      stroke="#718096"
                      tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { weekday: 'short' })} 
                    />
                    <YAxis yAxisId="left" stroke="#4a4ae2" />
                    <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
                    <Tooltip
                      contentStyle={{ 
                        backgroundColor: '#111928', 
                        border: '1px solid #374151',
                        color: 'white'
                      }}
                      formatter={(value, name) => {
                        if (name === 'price') return [`${value.toFixed(2)}`, 'Price USD'];
                        if (name === 'volume') return [value, 'Volume'];
                        return [value, name];
                      }}
                      labelFormatter={(value) => new Date(value).toLocaleString()}
                    />
                    <Legend />
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="price" 
                      name="Price (USD)" 
                      stroke="#4a4ae2" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="volume" 
                      name="Volume" 
                      stroke="#10b981" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Current Price</p>
                  <p className="text-2xl font-bold">${marketData?.currentPrice.toFixed(2) || '0.00'}</p>
                  <p className="text-xs text-green-400">{marketData?.priceChange24h > 0 ? '+' : ''}{marketData?.priceChange24h.toFixed(1) || '0.0'}% (24h)</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">24h Volume</p>
                  <p className="text-2xl font-bold">{marketData?.volume24h.toLocaleString() || '0'}</p>
                  <p className="text-xs text-green-400">+12.3% (24h)</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Market Cap</p>
                  <p className="text-2xl font-bold">${(marketData?.marketCap / 1000000).toFixed(1) || '0.0'}M</p>
                  <p className="text-xs text-green-400">+4.8% (24h)</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Total Supply</p>
                  <p className="text-2xl font-bold">{(marketData?.totalSupply / 1000000).toFixed(1) || '0.0'}M</p>
                  <p className="text-xs text-gray-400">Tokens</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardHeader>
                <CardTitle>Active Buy Orders</CardTitle>
                <CardDescription className="text-gray-400">
                  Current offers in the market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {marketData?.buyOrders.map((order, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                      <span className="text-green-400">${order.price.toFixed(2)} USD</span>
                      <span>{order.amount.toLocaleString()} tokens</span>
                      <span className="text-xs text-gray-400">{order.buyerCount} buyers</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardHeader>
                <CardTitle>Active Sell Orders</CardTitle>
                <CardDescription className="text-gray-400">
                  Current demand in the market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {marketData?.sellOrders.map((order, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                      <span className="text-red-400">${order.price.toFixed(2)} USD</span>
                      <span>{order.amount.toLocaleString()} tokens</span>
                      <span className="text-xs text-gray-400">{order.sellerCount} sellers</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Transactions tab content */}
        <TabsContent value="transactions" className="space-y-6">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription className="text-gray-400">
                  Complete record of token movements
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-[#111928] border-[#374151] text-white hover:bg-[#374151]"
                >
                  <ListFilter size={16} className="mr-2" />
                  Filter
                </Button>
                <Button
                  variant="outline" 
                  size="sm"
                  className="bg-[#111928] border-[#374151] text-white hover:bg-[#374151]"
                >
                  <Share2 size={16} className="mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-white">
                  <thead className="text-xs uppercase bg-[#111928] text-gray-300">
                    <tr>
                      <th scope="col" className="px-6 py-3">Transaction ID</th>
                      <th scope="col" className="px-6 py-3">Type</th>
                      <th scope="col" className="px-6 py-3">Tokens</th>
                      <th scope="col" className="px-6 py-3">Value</th>
                      <th scope="col" className="px-6 py-3">Date</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                      <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, index) => (
                      <tr key={index} className="bg-[#1f2937] border-b border-[#374151] hover:bg-[#374151]">
                        <td className="px-6 py-4 font-medium">{tx.id.substring(0, 10)}...</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            tx.type === 'mint' ? 'bg-purple-500/20 text-purple-400' :
                            tx.type === 'buy' ? 'bg-green-500/20 text-green-400' :
                            tx.type === 'sell' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">{tx.amount}</td>
                        <td className="px-6 py-4">
                          {tx.totalValue ? `${tx.totalValue.toFixed(2)}` : '-'}
                        </td>
                        <td className="px-6 py-4">{new Date(tx.timestamp).toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            tx.status === 'confirmed' ? 'bg-green-500/20 text-green-400' :
                            tx.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-blue-400 hover:text-blue-300">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Finance tab content */}
        <TabsContent value="finance" className="space-y-6">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>Plant Financial Overview</CardTitle>
              <CardDescription className="text-gray-400">
                Financial impact of tokenized energy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-[#111928] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Landmark size={20} className="text-blue-400 mr-2" />
                    <p className="text-lg font-medium">Initial CAPEX</p>
                  </div>
                  <p className="text-2xl font-bold">${(plantFinance?.initialCapex / 1000000).toFixed(2)}M</p>
                  <p className="text-xs text-gray-400 mt-1">Plant initial investment</p>
                </div>
                
                <div className="bg-[#111928] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign size={20} className="text-green-400 mr-2" />
                    <p className="text-lg font-medium">CAPEX Recouped</p>
                  </div>
                  <p className="text-2xl font-bold">
                    ${(plantFinance?.capexPaidToDate / 1000000).toFixed(2)}M
                    <span className="text-sm font-normal text-gray-400 ml-2">
                      ({plantFinance ? ((plantFinance.capexPaidToDate / plantFinance.initialCapex) * 100).toFixed(1) : '0'}%)
                    </span>
                  </p>
                  <p className="text-xs text-green-400 mt-1">
                    From tokenized energy value
                  </p>
                </div>
                
                <div className="bg-[#111928] p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <CalendarCheck size={20} className="text-purple-400 mr-2" />
                    <p className="text-lg font-medium">ROI Estimate</p>
                  </div>
                  <p className="text-2xl font-bold">
                    {plantFinance?.estimatedROI.toFixed(1) || '0'} years
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Estimated at current generation rates
                  </p>
                </div>
              </div>
              
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={plantFinance?.monthlyRevenue || []}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="month" 
                      stroke="#718096" 
                    />
                    <YAxis stroke="#718096" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111928', 
                        border: '1px solid #374151',
                        color: 'white'
                      }}
                      formatter={(value, name) => [`${value.toFixed(2)}`, 'Revenue']}
                    />
                    <Legend />
                    <Bar dataKey="revenue" name="Monthly Revenue (USD)" fill="#4a4ae2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 p-4 bg-[#111928] rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-medium">CAPEX Payoff Progress</p>
                  <p className="text-sm">
                    ${(plantFinance?.capexPaidToDate || 0).toLocaleString()} / 
                    ${(plantFinance?.initialCapex || 0).toLocaleString()}
                  </p>
                </div>
                <div className="w-full bg-[#1f2937] rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{ 
                      width: `${plantFinance ? (plantFinance.capexPaidToDate / plantFinance.initialCapex) * 100 : 0}%` 
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-xs text-gray-400">
                    Estimated payoff date: {
                      plantFinance?.estimatedPayoffDate 
                        ? new Date(plantFinance.estimatedPayoffDate).toLocaleDateString() 
                        : 'N/A'
                    }
                  </p>
                  <p className="text-xs text-gray-400">
                    {plantFinance ? ((plantFinance.capexPaidToDate / plantFinance.initialCapex) * 100).toFixed(1) : '0'}% complete
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Impact tab content */}
        <TabsContent value="impact" className="space-y-6">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>Environmental Impact</CardTitle>
              <CardDescription className="text-gray-400">
                Positive environmental contribution from your solar plant
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-[#111928] p-4 rounded-lg flex flex-col justify-between">
                  <div className="flex items-center mb-2">
                    <Globe size={24} className="text-green-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">CO₂ Emissions Avoided</p>
                      <p className="text-2xl font-bold">{emissionsData.co2Avoided.toFixed(1)} tons</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-auto">
                    Equivalent to taking {Math.round(emissionsData.co2Avoided * 0.2)} cars off the road for a year
                  </p>
                </div>
                
                <div className="bg-[#111928] p-4 rounded-lg flex flex-col justify-between">
                  <div className="flex items-center mb-2">
                    <Award size={24} className="text-yellow-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Tree Equivalent</p>
                      <p className="text-2xl font-bold">{Math.round(emissionsData.treeEquivalent)} trees</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-auto">
                    Equivalent CO₂ absorption capacity of mature trees
                  </p>
                </div>
                
                <div className="bg-[#111928] p-4 rounded-lg flex flex-col justify-between">
                  <div className="flex items-center mb-2">
                    <Zap size={24} className="text-blue-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Clean Energy Generated</p>
                      <p className="text-2xl font-bold">{marketData?.totalSupply.toLocaleString() || '0'} kWh</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-auto">
                    Equivalent to powering {Math.round((marketData?.totalSupply || 0) / 900)} homes for a month
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card className="bg-[#111928] border-[#374151] text-white">
                  <CardHeader>
                    <CardTitle className="text-lg">Emissions Reduction Visualization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={impactData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, value }) => `${name}: ${value.toFixed(1)}`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {impactData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#111928', 
                              border: '1px solid #374151',
                              color: 'white'
                            }}
                            formatter={(value, name) => [value.toFixed(1), name]}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#111928] border-[#374151] text-white">
                  <CardHeader>
                    <CardTitle className="text-lg">Environmental Certificates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 border border-green-500/30 rounded-lg bg-green-500/10 flex items-center">
                        <Award className="text-green-400 mr-3" />
                        <div>
                          <p className="font-medium">Renewable Energy Certificate</p>
                          <p className="text-xs text-gray-400">Each token is backed by 1 kWh of verified solar energy</p>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-blue-500/30 rounded-lg bg-blue-500/10 flex items-center">
                        <Globe className="text-blue-400 mr-3" />
                        <div>
                          <p className="font-medium">Carbon Offset Certificate</p>
                          <p className="text-xs text-gray-400">Verified carbon emission reduction</p>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-purple-500/30 rounded-lg bg-purple-500/10 flex items-center">
                        <Info className="text-purple-400 mr-3" />
                        <div>
                          <p className="font-medium">Sustainable Development Goals</p>
                          <p className="text-xs text-gray-400">Contributing to SDG 7 (Clean Energy) and SDG 13 (Climate Action)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 p-4 bg-[#111928] rounded-lg">
                <h3 className="font-medium mb-2 flex items-center">
                  <Users className="mr-2 text-blue-400" />
                  Community Impact
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Your solar plant's tokenized energy is helping to build a sustainable future for the local community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#1f2937] p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-400">${((marketData?.marketCap || 0) * 0.02).toLocaleString()}</p>
                    <p className="text-xs text-gray-400">Community development fund</p>
                  </div>
                  <div className="bg-[#1f2937] p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-yellow-400">{Math.round((marketData?.totalSupply || 0) * 0.001)}</p>
                    <p className="text-xs text-gray-400">Local jobs supported</p>
                  </div>
                  <div className="bg-[#1f2937] p-3 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-400">{Math.round((emissionsData.co2Avoided || 0) * 100)} kg</p>
                    <p className="text-xs text-gray-400">Local air pollutants avoided</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Token Mint Modal */}
      {showMintModal && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
          <div className="bg-[#1f2937] rounded-lg border border-[#374151] w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Mint New Tokens</h2>
              <button 
                onClick={() => setShowMintModal(false)}
                className="text-gray-400 hover:text-white"
                disabled={isMinting}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Energy Production (kWh)</label>
                <input
                  type="number"
                  value={mintAmount}
                  onChange={(e) => setMintAmount(parseInt(e.target.value) || 0)}
                  className="w-full p-2 bg-[#111928] border border-[#374151] rounded-md text-white"
                  min="1"
                  disabled={isMinting}
                />
                <p className="text-xs text-gray-400 mt-1">1 kWh = 1 Token</p>
              </div>
              
              <div className="bg-[#111928] p-3 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Tokens to Mint:</span>
                  <span className="text-sm">{mintAmount}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Token Value:</span>
                  <span className="text-sm">${(mintAmount * (marketData?.currentPrice || 0)).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">CO₂ Avoided:</span>
                  <span className="text-sm">{(mintAmount * 0.0005).toFixed(2)} tons</span>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-2">
                <Button
                  variant="outline"
                  onClick={() => setShowMintModal(false)}
                  disabled={isMinting}
                  className="border-[#374151] text-gray-300"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleMintTokens}
                  disabled={isMinting || mintAmount <= 0}
                  className="bg-[#4a4ae2] text-white"
                >
                  {isMinting ? (
                    <>
                      <RefreshCw size={16} className="mr-2 animate-spin" />
                      Minting...
                    </>
                  ) : (
                    <>
                      <Coins size={16} className="mr-2" />
                      Mint Tokens
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolarTokenDashboard;