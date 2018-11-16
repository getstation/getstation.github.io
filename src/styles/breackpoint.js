export const breakpoints = [576, 768, 992, 1200];

export const mqOnlyPhone = `@media (max-width: ${breakpoints[0] - 1}px)`;

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const mqNavMobile = `@media (max-width: 820px)`;
export const mqNavDesktop = `@media (min-width: 821px)`;
