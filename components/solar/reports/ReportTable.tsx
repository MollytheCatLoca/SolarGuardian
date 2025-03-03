"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Share2, Printer } from 'lucide-react';

interface Column {
  key: string;
  title: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface ReportTableProps {
  title: string;
  description?: string;
  columns: Column[];
  data: any[];
  actions?: boolean;
}

const ReportTable: React.FC<ReportTableProps> = ({
  title,
  description,
  columns,
  data,
  actions = true
}) => {
  return (
    <Card className="bg-[#1f2937] border-[#374151] text-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          {description && (
            <CardDescription className="text-gray-400">
              {description}
            </CardDescription>
          )}
        </div>
        {actions && (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white">
              <Download className="mr-2 h-4 w-4" />
              Descargar
            </Button>
            <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white">
              <Share2 className="mr-2 h-4 w-4" />
              Compartir
            </Button>
            <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white">
              <Printer className="mr-2 h-4 w-4" />
              Imprimir
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-white">
            <thead className="text-xs uppercase bg-[#111928] text-gray-300">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col" className="px-6 py-3">
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className={`bg-[#1f2937] border-b border-[#374151] hover:bg-[#374151] ${
                    rowIndex === data.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  {columns.map((column) => (
                    <td key={`${rowIndex}-${column.key}`} className="px-6 py-4">
                      {column.render 
                        ? column.render(row[column.key], row)
                        : row[column.key]
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportTable;