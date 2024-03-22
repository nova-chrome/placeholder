import { cn } from '@placeholder/ui-kit/util';
import React from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

interface TruncateTooltipProps {
  className?: string;
  text: string;
}

export const TruncateTooltip: React.FC<TruncateTooltipProps> = ({
  className,
  text,
}) => {
  const [isOverflowed, setIsOverflow] = React.useState(false);
  const textElementRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const compareSize = () => {
      if (textElementRef.current) {
        const compare =
          textElementRef.current.scrollWidth >
          textElementRef.current.clientWidth;

        setIsOverflow(compare);
      }
    };
    compareSize();
    window.addEventListener('resize', compareSize);
    return () => window.removeEventListener('resize', compareSize);
  }, []);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            ref={textElementRef}
            className={cn(
              'overflow-hidden whitespace-nowrap text-ellipsis w-[calc(100%-1px)]',
              className
            )}
          >
            {text}
          </div>
        </TooltipTrigger>
        {isOverflowed && <TooltipContent>{text}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
};
