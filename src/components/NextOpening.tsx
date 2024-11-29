import React from 'react';
import { Clock } from 'lucide-react';

interface NextOpeningProps {
  nextGroup: { group: string; time: string } | null;
}

export const NextOpening: React.FC<NextOpeningProps> = ({ nextGroup }) => {
  if (!nextGroup) return null;

  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-6">
      <div className="flex items-center">
        <Clock className="w-5 h-5 text-blue-500 mr-2" />
        <div>
          <h3 className="font-semibold text-blue-900">Next Opening</h3>
          <p className="text-blue-700">
            {nextGroup.group} opens at {nextGroup.time}
          </p>
        </div>
      </div>
    </div>
  );
};