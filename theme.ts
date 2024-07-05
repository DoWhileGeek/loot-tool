// theme.ts
import { createTheme } from "@mui/material/styles";

const getTheme = (rootElement: HTMLElement | null) =>
  createTheme({
    components: {
      MuiPaper: {
        defaultProps: {
          elevation: 3,
        },
      },
      MuiPopover: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiDialog: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiModal: {
        defaultProps: {
          container: rootElement,
        },
      },
    },
  });

export default getTheme;
