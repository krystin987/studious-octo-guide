import { Container, Typography, Card, Grid, CardHeader, CardContent, Box, Button, CardActions } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/StarBorder';


const defaultTheme = createTheme();

const tiers = [
    {
      title: 'Free',
      price: '0',
      description: [
        '10 users included',
        '2 GB of storage',
        'Help center access',
        'Email support',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '15',
      description: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: '30',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
  ];

const LandingPage = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                Lifeline Phones
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                Welcome to Southern Colorado No Cost Phones! Please fill out your zip code to get started!
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                {tiers.map((tier) => (
                    // Enterprise card is full width at sm breakpoint
                    <Grid
                    item
                    key={tier.title}
                    xs={12}
                    sm={tier.title === 'Enterprise' ? 12 : 6}
                    md={4}
                    >
                    <Card>
                        <CardHeader
                        title={tier.title}
                        subheader={tier.subheader}
                        titleTypographyProps={{ align: 'center' }}
                        action={tier.title === 'Pro' ? <StarIcon /> : null}
                        subheaderTypographyProps={{
                            align: 'center',
                        }}
                        sx={{
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[700],
                        }}
                        />
                        <CardContent>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'baseline',
                            mb: 2,
                            }}
                        >
                            <Typography component="h2" variant="h3" color="text.primary">
                            ${tier.price}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                            /mo
                            </Typography>
                        </Box>
                        <ul>
                            {tier.description.map((line) => (
                            <Typography
                                component="li"
                                variant="subtitle1"
                                align="center"
                                key={line}
                            >
                                {line}
                            </Typography>
                            ))}
                        </ul>
                        </CardContent>
                        <CardActions>
                        <Button
                            fullWidth
                            variant={tier.buttonVariant as 'outlined' | 'contained'}
                        >
                            {tier.buttonText}
                        </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </ThemeProvider>
      )
}

export default LandingPage;