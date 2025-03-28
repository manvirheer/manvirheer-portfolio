// app/components/yvr/ui/TabContent.tsx
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TabContentProps {
  children: ReactNode;
  isActive: boolean;
}

const TabContent = ({ children, isActive }: TabContentProps) => {
  return isActive ? (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {children}
    </motion.div>
  ) : null;
};

export default TabContent;