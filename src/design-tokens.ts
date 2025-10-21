// Design Tokens
export const designTokens = {
  colors: {
    card: {
      background: '#222933',
    },
  },
} as const;

// CSS custom properties for design tokens
export const cssVariables = {
  '--color-card-bg': designTokens.colors.card.background,
} as const;
