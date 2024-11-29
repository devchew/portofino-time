import React from 'react';
import { isCurrentlyOpen } from '../utils/timeUtils';
import { Clock } from 'lucide-react';

interface MealGroupProps {
  name: string;
  restaurants: Record<string, { opening: string; closing: string }>;
}

export const MealGroup: React.FC<MealGroupProps> = ({ name, restaurants }) => {
  const hasOpenRestaurant = Object.entries(restaurants).some(
    ([_, times]) => isCurrentlyOpen(times.opening, times.closing)
  );

  return (
    <div className={`p-4 rounded-lg ${hasOpenRestaurant ? 'bg-green-50' : 'bg-gray-50'} mb-4`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${
          hasOpenRestaurant ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'
        }`}>
          {hasOpenRestaurant ? 'Open' : 'Closed'}
        </span>
      </div>
      <div className="space-y-2">
        {Object.entries(restaurants).map(([restaurantName, times]) => (
          <div
            key={restaurantName}
            className="flex items-center justify-between p-2 rounded bg-white"
          >
            <span className="font-medium">{restaurantName}</span>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">
                {times.opening} - {times.closing}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};