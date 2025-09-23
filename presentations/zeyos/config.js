// ZeyOS Company Configuration
// Complete control over every visual aspect of ZeyOS presentations

export default {
  // Company information
  name: 'ZeyOS',
  
  // ===== BRAND COLORS =====
  primary: '#6366f1',
  primaryLight: '#818cf8',
  primaryDark: '#4f46e5',
  primaryRgb: '99, 102, 241',
  
  secondary: '#06b6d4',
  secondaryLight: '#22d3ee',
  secondaryDark: '#0891b2',
  secondaryRgb: '6, 182, 212',
  
  accent: '#ec4899',
  accentLight: '#f472b6',
  accentDark: '#db2777',
  accentRgb: '236, 72, 153',
  
  // ===== BACKGROUND COLORS =====
  bgPrimary: '#ffffff',
  bgSecondary: '#f8fafc',
  bgTertiary: '#f1f5f9',
  bgOverlay: 'rgba(99, 102, 241, 0.9)',
  bgCard: '#ffffff',
  bgSection: 'linear-gradient(135deg, #6366f1, #818cf8)',
  bgCover: 'linear-gradient(135deg, #6366f1, #4f46e5)',
  bgQuote: '#f8fafc',
  bgCode: '#f8fafc',
  
  // ===== TEXT COLORS =====
  textPrimary: '#1a202c',
  textSecondary: '#4a5568',
  textTertiary: '#718096',
  textInverse: '#ffffff',
  textMuted: '#a0aec0',
  textHeading: '#1a202c',
  textQuote: '#4a5568',
  textCode: '#3730a3',
  
  // ===== BORDER & DIVIDER COLORS =====
  borderPrimary: '#e2e8f0',
  borderSecondary: '#cbd5e0',
  borderCard: '#e2e8f0',
  borderFocus: '#6366f1',
  divider: '#e2e8f0',
  
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
  cardShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.1)',
  cardRadius: '0.75rem',
  cardPadding: '1.5rem',
  cardTitleSize: '1.25rem',
  cardContentSize: '1rem',
  
  // Button components
  buttonPrimary: '#6366f1',
  buttonPrimaryHover: '#4f46e5',
  buttonSecondary: '#06b6d4',
  buttonSecondaryHover: '#0891b2',
  buttonRadius: '0.5rem',
  buttonPadding: '0.75rem 1.5rem',
  
  // Speech bubble components
  bubbleBg: '#ffffff',
  bubbleBorder: '#e2e8f0',
  bubbleRadius: '0.75rem',
  bubbleShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.1)',
  bubblePadding: '1rem',
  bubbleArrowSize: '0.5rem',
  
  // Sticky note components
  stickyBg: '#e0e7ff',
  stickyBorder: '#6366f1',
  stickyText: '#3730a3',
  stickyShadow: '5px 4px 6px rgba(99, 102, 241, 0.1)',
  stickySize: '180px',
  stickyRadius: '0.5rem',
  
  // Box components
  boxBg: '#ffffff',
  boxBgDark: '#1e293b',
  boxBorder: '#e2e8f0',
  boxBorderDark: '#475569',
  boxShadow: '0 1px 3px rgba(99, 102, 241, 0.1)',
  boxShadowDark: '0 1px 3px rgba(99, 102, 241, 0.3)',
  boxRadius: '0.75rem',
  boxPadding: '1rem',
  
  // Code block styling
  codeBg: '#f8fafc',
  codeBgDark: '#1e293b',
  codeText: '#3730a3',
  codeTextDark: '#a5b4fc',
  codeBorder: '#e2e8f0',
  codeBorderDark: '#475569',
  codeRadius: '0.5rem',
  codePadding: '1rem',
  codeFont: "'Fira Code', monospace",
  
  // Highlight styling  
  highlightBg: '#e0e7ff',
  highlightBgDark: '#334155',
  highlightText: '#3730a3',
  highlightTextDark: '#a5b4fc',
  highlightRadius: '0.375rem',
  highlightPadding: '0.25rem 0.5rem',
  
  // ===== LAYOUT-SPECIFIC =====
  // Cover layout
  coverTitleSize: '3rem',
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
  bulletColor: '#6366f1',
  bulletColorDark: '#a5b4fc',
  bulletSize: '0.375rem',
  
  // ===== TABLE STYLING =====
  tableBorder: '#e2e8f0',
  tableBorderDark: '#475569',
  tableHeaderBg: '#f8fafc',
  tableHeaderBgDark: '#1e293b',
  tableStripe: '#f8fafc',
  tableStripeDark: '#334155',
  tablePadding: '0.75rem',
  
  // ===== FORM STYLING =====
  inputBg: '#ffffff',
  inputBgDark: '#334155',
  inputBorder: '#e2e8f0',
  inputBorderDark: '#475569',
  inputFocus: '#6366f1',
  inputFocusDark: '#a5b4fc',
  inputRadius: '0.5rem',
  inputPadding: '0.75rem',
  
  // ===== ALERT/ADMONITION COLORS =====
  infoBg: '#ede9fe',
  infoBgDark: '#1e293b',
  warningBg: '#fef3c7',
  warningBgDark: '#92400e',
  successBg: '#dcfce7',
  successBgDark: '#166534',
  errorBg: '#fee2e2',
  errorBgDark: '#991b1b',
  accentBg: '#e0e7ff',
  accentBgDark: '#334155',

  // ===== UTILITY COLORS =====
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.25)',
  overlayDark: 'rgba(0, 0, 0, 0.75)',
  
  // ===== RESPONSIVE BREAKPOINTS =====
  breakpointSm: '640px',
  breakpointMd: '768px',
  breakpointLg: '1024px',
  breakpointXl: '1280px'
}
