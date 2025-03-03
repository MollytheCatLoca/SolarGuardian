"use client";

import React from 'react';

interface MetricItem {
  title: string;
  value: string | number;
  change?: {
    value: string | number;
    isPositive: boolean;
  };
  prefix?: string;
  suffix?: string;
}

interface ReportMetricsGridProps {
  metrics: MetricItem[];
  columns?: 2 | 3 | 4;
}

const ReportMetricsGrid: React.FC<ReportMetricsGridProps> = ({
  metrics,
  columns = 4
}) => {
  const getColumnClass = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-3';
      case 4:
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
  };

  return (
    <div className={`grid ${getColumnClass()} gap-4`}>
      {metrics.map((metric, index) => (
        <div key={index} className="bg-[#111928] p-4 rounded-lg">
          <p className="text-sm text-gray-400">{metric.title}</p>
          <p className="text-2xl font-bold">
            {metric.prefix && <span>{metric.prefix}</span>}
            {metric.value}
            {metric.suffix && <span>{metric.suffix}</span>}
          </p>
          {metric.change && (
            <p className={`text-xs ${metric.change.isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {metric.change.isPositive ? '+' : ''}
              {metric.change.value}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReportMetricsGrid;