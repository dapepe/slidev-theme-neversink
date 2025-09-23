// DIFO Company Configuration
// Complete control over every visual aspect of DIFO presentations

export default {
  // Company information
  name: 'DIFO',
  
  // ===== SHARED BRAND COLORS =====
  primary: '#1e3a8a',
  primaryLight: '#3b82f6', 
  primaryDark: '#1e40af',
  primaryRgb: '30, 58, 138',
  
  secondary: '#059669',
  secondaryLight: '#10b981',
  secondaryDark: '#047857',
  secondaryRgb: '5, 150, 105',
  
  accent: '#f59e0b',
  accentLight: '#fbbf24',
  accentDark: '#d97706',
  accentRgb: '245, 158, 11',
  
  // ===== BACKGROUND COLORS =====
  bgPrimary: '#ffffff',
  bgPrimaryDark: '#1a202c',
  bgSecondary: '#f8fafc',
  bgSecondaryDark: '#2d3748',
  bgTertiary: '#f1f5f9',
  bgTertiaryDark: '#4a5568',
  bgOverlay: 'rgba(30, 58, 138, 0.9)',
  bgCard: '#ffffff',
  bgSection: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
  bgCover: 'linear-gradient(135deg, #1e3a8a, #1e40af)',
  bgQuote: '#f8fafc',
  bgCode: '#f7fafc',
  
  // ===== TEXT COLORS =====
  textPrimary: '#1a202c',
  textPrimaryDark: '#ffffff',
  textSecondary: '#4a5568',
  textSecondaryDark: '#e2e8f0',
  textTertiary: '#718096',
  textTertiaryDark: '#cbd5e0',
  textInverse: '#ffffff',
  textInverseDark: '#1a202c',
  textMuted: '#a0aec0',
  textMutedDark: '#718096',
  textHeading: '#1a202c',
  textQuote: '#4a5568',
  textCode: '#2d3748',
  
  // ===== BORDER & DIVIDER COLORS =====
  borderPrimary: '#e2e8f0',
  borderPrimaryDark: '#4a5568',
  borderSecondary: '#cbd5e0',
  borderSecondaryDark: '#718096',
  borderCard: '#e2e8f0',
  borderFocus: '#1e3a8a',
  divider: '#e2e8f0',
  dividerDark: '#4a5568',
  
  // ===== STATUS COLORS =====
  success: '#10b981',
  warning: '#f59e0b', 
  error: '#ef4444',
  info: '#3b82f6',
  
  // ===== TYPOGRAPHY =====
  fontPrimary: "'Inter', sans-serif",
  fontHeading: "'Inter', sans-serif", 
  fontMono: "'Fira Code', monospace",
  fontQuote: "'Inter', sans-serif",
  
  fontWeightLight: '300',
  fontWeightNormal: '400',
  fontWeightMedium: '500',
  fontWeightSemibold: '600',
  fontWeightBold: '700',
  
  fontSizeXs: '0.75rem',
  fontSizeSm: '0.875rem',
  fontSizeBase: '1rem',
  fontSizeLg: '1.125rem',
  fontSizeXl: '1.25rem',
  fontSize2xl: '1.5rem',
  fontSize3xl: '1.875rem',
  fontSize4xl: '2.25rem',
  fontSize5xl: '3rem',
  
  lineHeightTight: '1.25',
  lineHeightNormal: '1.5',
  lineHeightRelaxed: '1.75',
  
  // ===== SPACING =====
  spaceXs: '0.25rem',
  spaceSm: '0.5rem',
  spaceMd: '1rem',
  spaceLg: '1.5rem',
  spaceXl: '2rem',
  space2xl: '3rem',
  space3xl: '4rem',
  
  // ===== BORDER RADIUS =====
  radiusNone: '0',
  radiusSm: '0.125rem',
  radiusBase: '0.25rem',
  radiusMd: '0.375rem',
  radiusLg: '0.5rem',
  radiusXl: '0.75rem',
  radius2xl: '1rem',
  radiusFull: '9999px',
  
  // ===== SHADOWS =====
  shadowSm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  shadowBase: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  shadowMd: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  shadowLg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  shadowXl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  
  // ===== TRANSITIONS =====
  transitionAll: 'all 0.3s ease',
  transitionColors: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
  transitionTransform: 'transform 0.3s ease',
  transitionOpacity: 'opacity 0.3s ease',
  
  // ===== COMPONENT-SPECIFIC =====
  // Card components
  cardBg: '#ffffff',
  cardBorder: '#e2e8f0',
  cardShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  cardRadius: '0.5rem',
  cardPadding: '1.5rem',
  cardTitleSize: '1.25rem',
  cardContentSize: '1rem',
  
  // Button components
  buttonPrimary: '#1e3a8a',
  buttonPrimaryHover: '#1e40af',
  buttonSecondary: '#10b981',
  buttonSecondaryHover: '#059669',
  buttonRadius: '0.375rem',
  buttonPadding: '0.75rem 1.5rem',
  
  // Speech bubble components
  bubbleBg: '#ffffff',
  bubbleBorder: '#e2e8f0',
  bubbleRadius: '0.5rem',
  bubbleShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  bubblePadding: '1rem',
  bubbleArrowSize: '0.5rem',
  
  // Sticky note components
  stickyBg: '#fef3c7',
  stickyBorder: '#f59e0b',
  stickyText: '#92400e',
  stickyShadow: '5px 4px 6px rgba(0, 0, 0, 0.1)',
  stickySize: '180px',
  stickyRadius: '0.25rem',
  
  // Box components
  boxBg: '#ffffff',
  boxBgDark: '#2d3748',
  boxBorder: '#e2e8f0',
  boxBorderDark: '#4a5568',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  boxShadowDark: '0 1px 3px rgba(0, 0, 0, 0.3)',
  boxRadius: '0.5rem',
  boxPadding: '1rem',
  
  // Code block styling
  codeBg: '#f7fafc',
  codeBgDark: '#2d3748',
  codeText: '#2d3748',
  codeTextDark: '#e2e8f0',
  codeBorder: '#e2e8f0',
  codeBorderDark: '#4a5568',
  codeRadius: '0.375rem',
  codePadding: '1rem',
  codeFont: "'Fira Code', monospace",
  
  // Highlight styling  
  highlightBg: '#fef3c7',
  highlightBgDark: '#374151',
  highlightText: '#92400e',
  highlightTextDark: '#fbbf24',
  highlightRadius: '0.25rem',
  highlightPadding: '0.25rem 0.5rem',
  
  // ===== LAYOUT-SPECIFIC =====
  // Cover layout
  coverTitleSize: '8rem',
  coverTitleWeight: '700',
  coverSubtitleSize: '1.5rem',
  coverSubtitleWeight: '400',
  coverLogoSize: '5rem',
  coverPresenterSize: '1rem',
  coverDateSize: '0.875rem',
  coverPadding: '2rem',
  
  // Section layout
  sectionTitleSize: '2.25rem',
  sectionTitleWeight: '600',
  sectionBorderWidth: '2px',
  sectionPadding: '2rem',
  
  // Quote layout
  quoteFontSize: '1.5rem',
  quoteWeight: '400',
  quoteIconSize: '3rem',
  quoteIconOpacity: '0.3',
  quoteAuthorSize: '1.125rem',
  quoteTitleSize: '1rem',
  quotePadding: '2rem',
  
  // Thank you layout
  thankYouTitleSize: '2.5rem',
  thankYouTitleWeight: '700',
  thankYouSubtitleSize: '1.25rem',
  thankYouPadding: '2rem',
  
  // Default layout
  defaultTitleSize: '2rem',
  defaultContentSize: '1rem',
  defaultPadding: '2rem',
  
  // ===== ANIMATION =====
  animationDuration: '0.6s',
  animationDelay: '0.1s',
  animationStagger: '0.1s',
  animationEasing: 'ease-out',
  
  // ===== LIST STYLING =====
  listItemSpacing: '1rem',
  listIndent: '1.5rem',
  bulletColor: '#4a5568',
  bulletColorDark: '#cbd5e0',
  bulletSize: '0.375rem',
  
  // ===== TABLE STYLING =====
  tableBorder: '#e2e8f0',
  tableBorderDark: '#4a5568',
  tableHeaderBg: '#f8fafc',
  tableHeaderBgDark: '#2d3748',
  tableStripe: '#f8fafc',
  tableStripeDark: '#374151',
  tablePadding: '0.75rem',
  
  // ===== FORM STYLING =====
  inputBg: '#ffffff',
  inputBgDark: '#374151',
  inputBorder: '#e2e8f0',
  inputBorderDark: '#4a5568',
  inputFocus: '#1e3a8a',
  inputFocusDark: '#3b82f6',
  inputRadius: '0.375rem',
  inputPadding: '0.75rem',
  
  // ===== ALERT/ADMONITION COLORS =====
  infoBg: '#eff6ff',
  infoBgDark: '#1e3a8a',
  warningBg: '#fffbeb',
  warningBgDark: '#92400e',
  successBg: '#f0fdf4',
  successBgDark: '#166534',
  errorBg: '#fef2f2',
  errorBgDark: '#991b1b',
  accentBg: '#f8fafc',
  accentBgDark: '#374151',

  // ===== UTILITY COLORS =====
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.25)',
  overlayDark: 'rgba(0, 0, 0, 0.75)',
  
  // ===== RESPONSIVE BREAKPOINTS =====
  breakpointSm: '640px',
  breakpointMd: '768px',
  breakpointLg: '1024px',
  breakpointXl: '1280px',

}
