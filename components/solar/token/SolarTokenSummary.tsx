import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coins, TrendingUp, Zap, Globe, BarChart2 } from 'lucide-react';
import Link from 'next/link';

// This component integrates with the main dashboard to provide a summary of 
// the SolarToken functionality and serves as an entry point to the full module
const SolarTokenSummary = ({ plantId }) => {
  // In a real implementation, these values would be loaded from the token service
  const tokenBalance = 1875;
  const tokenValue = 506.25; // $0.27 per token
  const tokenPrice = 0.27;
  const priceChange = 5.2;
  const totalGenerated = 40500;
  const co2Avoided = 15.2;
  
  return (
    <Card className="bg-[#1f2937] border-[#374151] text-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg">SolarToken Summary</CardTitle>
          <CardDescription className="text-gray-400">
            Tokenized solar energy
          </CardDescription>
        </div>
        <Link href={`/dashboard/${plantId}/tokens`}>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-[#111928] border-[#374151] text-white hover:bg-[#374151]"
          >
            <BarChart2 size={16} className="mr-2" />
            View Full Dashboard
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#111928] p-3 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-400">Token Balance</p>
              <Coins size={16} className="text-yellow-400" />
            </div>
            <p className="text-lg font-bold">{tokenBalance.toLocaleString()}</p>
            <p className="text-xs text-green-400">${tokenValue.toFixed(2)}</p>
          </div>
          
          <div className="bg-[#111928] p-3 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-400">Current Price</p>
              <TrendingUp size={16} className="text-green-400" />
            </div>
            <p className="text-lg font-bold">${tokenPrice.toFixed(2)}</p>
            <p className="text-xs text-green-400">+{priceChange}% (24h)</p>
          </div>
          
          <div className="bg-[#111928] p-3 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-400">Total Generated</p>
              <Zap size={16} className="text-blue-400" />
            </div>
            <p className="text-lg font-bold">{totalGenerated.toLocaleString()}</p>
            <p className="text-xs text-gray-400">{totalGenerated.toLocaleString()} kWh</p>
          </div>
          
          <div className="bg-[#111928] p-3 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-400">CO₂ Avoided</p>
              <Globe size={16} className="text-green-400" />
            </div>
            <p className="text-lg font-bold">{co2Avoided} tons</p>
            <p className="text-xs text-green-400">Environmental impact</p>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <Link href={`/dashboard/${plantId}/tokens/market`}>
            <Button 
              size="sm"
              className="bg-[#4a4ae2] text-white hover:bg-[#3b3be0] mr-2"
            >
              Trade Tokens
            </Button>
          </Link>
          <Link href={`/dashboard/${plantId}/tokens/mint`}>
            <Button 
              variant="outline"
              size="sm"
              className="border-[#374151] text-white hover:bg-[#374151]"
            >
              Mint New Tokens
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolarTokenSummary;