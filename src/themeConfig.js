import { createTheme } from "@material-ui/core/styles";
import lightGreen from '@material-ui/core/colors/lightGreen';

const themeGlobal = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
});

export default themeGlobal;