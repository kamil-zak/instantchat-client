import 'styled-components';

type colors = 'primary' | 'primaryDark' | 'primarySuperDark' | 'gray' | 'grayLight' | 'danger';

type fontSizes = 'xxs' | 'xs' | 's' | 'base' | 'lg' | 'xl';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [T in colors]: string;
    };
    fontSizes: {
      [T in fontSizes]: string;
    };
    boxShadow: string;
  }
}
