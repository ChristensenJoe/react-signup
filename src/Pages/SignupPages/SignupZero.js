//Dependency Imports

import {
    makeStyles,
    useTheme,
    Container,
    Grid,
    Typography,
    Divider,
    useMediaQuery,
    TextField,
    Link
} from '@material-ui/core'

//Local Imports

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        overflowY: 'scroll',
        [theme.breakpoints.down('md')]: {
            flex: 'auto',
            display: 'flex',
        }
    },
    content: {
        paddingLeft: '10%',
        paddingRight: '10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 'auto',
        margin: 'auto 0',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '15px',
            paddingRight: '15px'
        }
    },
    left: {
        minHeight: '400px',
        padding: '2rem 0',
        width: '600px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            minHeight: 'unset',
            paddingTop: '4rem',
            paddingBottom: 0,
            textAlign: 'center'
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: '2rem',
            width: '100%',
        }
    },
    right: {
        padding: '2rem 0',
        width: '600px',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            minHeight: 'unset',
            paddingTop: '4rem',
            paddingBottom: 0,
            textAlign: 'center'
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: '0rem',
            width: '100%',
        }
    },
    rightDiv: {
        minHeight: '300px',
        display: 'block',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '20%'
        }
    },
    header: {
        fontWeight: 'normal',
        fontFamily: `'Poppins', sans-serif`,
        marginTop: '3rem',
        marginBottom: '1.5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.8rem',
            marginLeft: "4px"
        },
    },
    subHeader: {
        fontWeight: 'normal',
        fontFamily: `'Poppins', sans-serif`,
        lineHeight: 1.5,
        marginBottom: '10px',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem'
        },
    },
    body: {
        fontFamily: `'Poppins', sans-serif`,
        marginBottom: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem'
        },
    },
    divider: {
        width: '1px',
        height: '400px',
        margin: '6rem',
        backgroundColor: theme.palette.primary.main,
        flex: 'none',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    input: {
        lineHeight: 1.5,
        fontSize: '6rem',
        '&::placeholder': {
            color: theme.palette.primary.main,
            fontFamily: `"Markazi Text", serif`,
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '4rem',
            textAlign: 'center'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.4rem'
        }
    },
    link: {
        padding: 0,
        marginLeft: '4px',
        verticalAlign: 'baseline',
        fontSize: 'inherit',
        fontWeight: '400',
        color: "#f95b3e"
    }
}));


function SignupZero({handleFormChange, formData}) {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <Container
            className={classes.root}
        >
            <Grid
                className={classes.content}
                container
            >
                <Grid
                    className={classes.left}
                    item
                    lg={5}
                    md={12}
                    sm={12}
                    xs={12}
                >
                    <Typography
                        className={classes.header}
                        variant="h2"
                        color="primary"
                    >
                        Choose your city
                    </Typography>
                    <Typography
                        className={classes.subHeader}
                        variant="h4"
                        color="primary"
                    >
                        Placeholder is available in most cities.
                    </Typography>
                    <Typography
                        className={classes.body}
                        variant="body1"
                        color="primary"
                    >
                        Already have an account? 
                        <Link
                            className={classes.link}
                            variant="body"
                            href="/login"
                        >
                            Log in
                        </Link>
                    </Typography>
                </Grid>
                {
                    useMediaQuery(theme.breakpoints.up('lg')) ?
                        <Grid item lg={2}>
                        <Divider 
                            className={classes.divider}
                            orientation="vertical"
                        />
                        </Grid>
                        :
                        null
                }
                <Grid
                    className={classes.right}
                    item
                    lg={5}
                    md={12}
                    sm={12}
                    xs={12}
                >
                    <div
                        className={classes.rightDiv}
                    >
                    <TextField
                        placeholder="Your city"
                        name="city"
                        value={formData.city}
                        onChange={handleFormChange}
                        InputProps={{
                            disableUnderline: true, 
                            classes: {input: classes.input}
                        }}
                    />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SignupZero;