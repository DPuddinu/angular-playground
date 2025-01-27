export const categories = ['back', 'chest', 'legs', 'shoulders', 'arms', 'core'] as const;
export type Category = (typeof categories)[number];
