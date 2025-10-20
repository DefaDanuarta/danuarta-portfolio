'use client';;
import * as React from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui-components/react/tooltip';
import { AnimatePresence, motion } from 'motion/react';

import { getStrictContext } from '@/lib/get-strict-context';
import { useControlledState } from '@/hooks/use-controlled-state';

const [LocalTooltipProvider, useTooltip] =
  getStrictContext('TooltipContext');

function TooltipProvider(props) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} />;
}

function Tooltip(props) {
  const [isOpen, setIsOpen] = useControlledState({
    value: props?.open,
    defaultValue: props?.defaultOpen,
    onChange: props?.onOpenChange,
  });

  return (
    <LocalTooltipProvider value={{ isOpen, setIsOpen }}>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} onOpenChange={setIsOpen} />
    </LocalTooltipProvider>
  );
}

function TooltipTrigger(props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipPortal(props) {
  const { isOpen } = useTooltip();

  return (
    <AnimatePresence>
      {isOpen && (
        <TooltipPrimitive.Portal keepMounted data-slot="tooltip-portal" {...props} />
      )}
    </AnimatePresence>
  );
}

function TooltipPositioner(props) {
  return (<TooltipPrimitive.Positioner data-slot="tooltip-positioner" {...props} />);
}

function TooltipPopup({
  transition = { type: 'spring', stiffness: 300, damping: 25 },
  ...props
}) {
  return (
    <TooltipPrimitive.Popup
      render={
        <motion.div
          key="tooltip-popup"
          data-slot="tooltip-popup"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={transition}
          {...props} />
      } />
  );
}

function TooltipArrow(props) {
  return <TooltipPrimitive.Arrow data-slot="tooltip-arrow" {...props} />;
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipPortal, TooltipPositioner, TooltipPopup, TooltipArrow, useTooltip };
