export const breakpoints = [576, 768, 992, 1200, 1600];

export const mqMin = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
export const mqMax = breakpoints.map(bp => `@media (max-width: ${bp - 1}px)`);

export const mqNavMobile = `@media (max-width: 820px)`;
export const mqNavDesktop = `@media (min-width: 821px)`;
