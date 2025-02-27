
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, className }) => {
  return (
    <div className={cn('w-full space-y-2', className)}>
      <Progress value={value} className="h-1.5 w-full bg-secondary/50" />
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          Progress
        </span>
        <span className="font-medium">{value}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
