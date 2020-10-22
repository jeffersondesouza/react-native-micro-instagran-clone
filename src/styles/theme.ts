import { DefaultTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'sans-serif',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
    },
    light: {
      fontFamily: 'sans-serif-light',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
    },
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#22326E',
    accent: '#ffc408',
    third: '#ff6202',
    forthy: '#18c64e',
    background: 'white'
/*       primary: string;
        background: string;
        surface: string;
        accent: string;
        error: string;
        text: string;
        onSurface: string;
        onBackground: string;
        disabled: string;
        placeholder: string;
        backdrop: string;
        notification: string;
         */
  },
  fonts: configureFonts(fontConfig),
};

export default theme;
/* 
primary - primary color for your app, usually your brand color.
accent - secondary color for your app which complements the primary color.
background - background color for pages, such as lists.
surface - background color for elements containing content, such as cards.
text - text color for content.
disabled - color for disabled elements.
placeholder - color for placeholder text, such as input placeholder.
backdrop - color for backdrops of various components such as modals.
 */