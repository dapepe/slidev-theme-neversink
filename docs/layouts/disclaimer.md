# `layout: disclaimer`

## Description

The `layout: disclaimer` is a versatile layout designed for professional presentations that automatically adapts between two modes:

1. **Detailed Mode** (single column) - For detailed disclaimer text, legal notices, terms and conditions with a single H1 heading
2. **Bilingual Mode** (two columns) - For side-by-side bilingual disclaimers or translations with aligned content

The layout automatically detects which mode to use based on the slots provided. If you provide both `left` and `right` slots, it uses bilingual mode. If you only provide the default slot, it uses detailed mode. You can also explicitly set the mode using the `mode` prop.

**Key Features:**
- Uses direct CSS units (px, rem, em) instead of Tailwind classes for font sizing
- Responsive padding using company theme variables
- Professional styling matching corporate presentation standards
- Aligned content in bilingual mode with fixed-height headers
- Scrollable content areas for long text

## Frontmatter

- `layout: disclaimer` (required).
- `color:` (optional) can be any of the [color scheme](/colors) options. Default is `white`.
- `fontSize:` (optional) the font size of the disclaimer content. Default is `14px`. Use direct sizes like `14px`, `16px`, `1rem`, etc.
- `headingSize:` (optional) the font size for headings. In detailed mode, controls H1 size. In bilingual mode, controls column header size. Default is `48px`. Use direct sizes like `32px`, `48px`, `56px`, `3rem`, etc.
- `mode:` (optional) explicitly set the mode. Options: `auto` (default), `detailed`, `bilingual`.

**Additional props for Bilingual Mode:**
- `leftTitle:` (optional) the title for the left column. Default is `English`.
- `rightTitle:` (optional) the title for the right column. Default is `Translation`.
- `columnRatio:` (optional) the ratio of column widths. Options: `1-1` (equal), `1-2` (left smaller), `2-1` (right smaller). Default is `1-1`.
- `leftBg:` (optional) background color for the left column. Example: `#e5e7eb` for gray.
- `rightBg:` (optional) background color for the right column.

Example:

```yaml
---
layout: disclaimer
color: light
fontSize: 14px
headingSize: 32px
---
```

## Slots

The layout supports both single-column and dual-column modes:

**Detailed Mode (Single Column):**
- **Default slot**: Content for the disclaimer. Use `# Heading` (H1) for the title, controlled by `headingSize` prop.

**Bilingual Mode (Two Columns):**
- **`left`**: Content for the left column (typically the primary language)
- **`right`**: Content for the right column (typically the translation)
- Column headers are defined by `leftTitle` and `rightTitle` props

## Features

- **Automatic Mode Detection**: Intelligently switches between detailed and bilingual modes based on slots
- **Direct Font Sizing**: Uses CSS units (px, rem, em) for precise control instead of Tailwind classes
- **Scrollable Content**: Handles long content with custom-styled scrollbars
- **Independent Column Scrolling**: In bilingual mode, each column scrolls independently
- **Content Alignment**: Fixed-height headers ensure content aligns horizontally across bilingual columns
- **Flexible Column Ratios**: Adjust column widths with `1-1`, `1-2`, or `2-1` ratios
- **Background Colors**: Optional custom backgrounds for left/right columns (e.g., gray backgrounds)
- **Typography**: Bold text is styled as section headers with consistent spacing
- **Formatted Text**: Full markdown support including bold, italic, lists, headings, and paragraphs
- **Professional Design**: Clean, edge-to-edge layout matching corporate presentation standards
- **Responsive Padding**: Uses company theme spacing variables for consistency

## Examples

### Detailed Mode (Single Column)

In detailed mode, use a markdown H1 heading (`# Title`) for the main title. The `headingSize` prop controls this heading.

```md
---
layout: disclaimer
mode: detailed
color: white
fontSize: 11px
headingSize: 32px
---

# DISCLAIMER - IMPORTANT NOTICE

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

**Important**: This presentation is for informational purposes only.

- No guarantee of accuracy or completeness
- Not intended as financial or legal advice
- Subject to change without notice

**Contact**: For questions, please contact us.
```

### Bilingual Mode (Professional Corporate Style)

This example matches professional corporate presentation standards with gray background on one side:

```md
---
layout: disclaimer
leftTitle: 'WICHTIG: VERTRAULICHE UNTERLAGEN'
rightTitle: 'ATTENTION: CONFIDENTIAL DOCUMENTS'
color: light
fontSize: 1rem
headingSize: 2rem
columnRatio: '1-1'
leftBg: '#e5e7eb'
---

::left::
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

::right::
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

**Key Points:**
- Large uppercase headings controlled by `headingSize`
- Gray background (`#e5e7eb`) on left column for visual distinction
- Fixed-height headers ensure content alignment across columns
- Professional edge-to-edge layout

### Bilingual Mode (Two Equal Columns)

```md
---
layout: disclaimer
leftTitle: 'English'
rightTitle: 'Deutsch'
fontSize: 14px
---

::left::
**Notice**: This presentation contains confidential information.

The information provided is:
- For authorized viewers only
- Subject to change
- Not to be distributed

Please consult legal counsel before making any decisions based on this information.

::right::
**Hinweis**: Diese Präsentation enthält vertrauliche Informationen.

Die bereitgestellten Informationen sind:
- Nur für autorisierte Betrachter
- Änderungen vorbehalten
- Nicht zur Weitergabe bestimmt

Bitte konsultieren Sie einen Rechtsberater, bevor Sie Entscheidungen auf der Grundlage dieser Informationen treffen.
```

### Bilingual Mode with Custom Column Ratio

```md
---
layout: disclaimer
leftTitle: 'Full Text (English)'
rightTitle: 'Summary (简体中文)'
columnRatio: '2-1'
fontSize: 14px
color: sky-light
---

::left::
## Complete Terms and Conditions

1. **Acceptance of Terms**: By accessing this presentation, you acknowledge and agree to these terms...

2. **Use of Information**: The content is provided for informational purposes only...

3. **Intellectual Property**: All materials are protected by copyright...

4. **Privacy Policy**: We respect your privacy and handle data according to applicable laws...

::right::
## 条款摘要

1. 接受条款
2. 信息使用
3. 知识产权
4. 隐私政策
```

### Explicitly Setting Mode

You can force a specific mode even if slots would suggest otherwise:

```md
---
layout: disclaimer
mode: detailed
fontSize: 14px
headingSize: 32px
---

# Privacy Notice

Your detailed privacy content here...
```

### Multi-Section Bilingual Example with Aligned Sections

Use `**bold text**` for section headings to create aligned sections across columns:

```md
---
layout: disclaimer
leftTitle: 'English'
rightTitle: 'Français'
columnRatio: '1-1'
fontSize: 14px
headingSize: 36px
---

::left::
**Privacy Policy**

We respect your privacy and protect your data in accordance with GDPR regulations.

**Liability Notice**

The company is not responsible for indirect or consequential damages.

**Copyright**

© 2025 All rights reserved. Unauthorized reproduction is prohibited.

::right::
**Politique de Confidentialité**

Nous respectons votre vie privée et protégeons vos données conformément au RGPD.

**Avis de Responsabilité**

La société n'est pas responsable des dommages indirects ou consécutifs.

**Droits d'Auteur**

© 2025 Tous droits réservés. La reproduction non autorisée est interdite.
```

**Note**: Bold text (`**text**`) is styled as block-level section headers with consistent height (`min-height: 1.5em`), ensuring content below them aligns horizontally across both columns.

### Detailed Corporate Disclaimer (Full Example)

This is a comprehensive example matching professional corporate presentations:

```md
---
layout: disclaimer
leftTitle: 'IMPORTANT: CONFIDENTIAL MATERIAL'
rightTitle: 'DISCLAIMER - IMPORTANT NOTICE'
headingSize: 52px
fontSize: 13px
columnRatio: '1-1'
leftBg: '#f3f4f6'
rightBg: '#ffffff'
---

::left::

lorem ipsum 

::right::
lorem ipsum
```