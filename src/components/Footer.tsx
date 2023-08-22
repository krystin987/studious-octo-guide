import FacebookIcon from "@mui/icons-material/Facebook";
import Stack from "@mui/material/Stack";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Phone Lady
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const defaultTheme = createTheme();

const Footer = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <CssBaseline />
            <Box
              component="footer"
              sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
              }}
            >
              <Container maxWidth="sm">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <FacebookIcon color="primary" sx={{ fontSize: 40 }} />
                </Stack>
                <Typography variant="body1">
                  My sticky footer can be found here.
                </Typography>
                <Copyright />
              </Container>
            </Box>
          </Box>
        </ThemeProvider>
      );
}

export default Footer;