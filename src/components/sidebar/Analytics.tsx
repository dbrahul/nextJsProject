"use client"

import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

const AnalyticsCollapse = () => {
  const [open, setOpen] = useState(false); // State to control collapse open/close

  return (
    <List>
      {/* ListItemButton to toggle collapse */}
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          {/* Using next/image for optimized image rendering */}
          <Image src="/Analytics.svg" alt="Analytics Icon" width={23} height={23} />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
        {/* Conditional rendering of expand/collapse icons */}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* Collapsible list items */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default AnalyticsCollapse;
