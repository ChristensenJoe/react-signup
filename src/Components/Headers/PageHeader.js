//Dependency Imports

import {
    makeStyles,
    useTheme,
    Box
} from '@material-ui/core'

//Local Imports
import logo from '../../assets/logo-text.png'


const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: '10%',
        paddingRight: '10%',
        flex: 'none',
        height: '130px',
        paddingTop: '50px',
        [theme.breakpoints.up('md')]: {
            height: '130px',
            paddingTop: '50px'
        },
        [theme.breakpoints.down('sm')]: {
            height: '78px',
            paddingTop: '30px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '52px',
            paddingTop: '20px',
            paddingLeft: '15px',
            paddingRight: '15px',
        }
    },
    img: {
        verticalAlign: 'middle',
        width: '200px',
        height: '36px',
        [theme.breakpoints.up('md')]: {
            width: '442px',
            height: '91px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '177px',
            height: '37px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '147px',
            height: '30px'
        }
    }
}))

function PageHeader() {
    const theme = useTheme();
    const classes = useStyles(theme)

    return (
        <Box
            className={classes.root}
        >
            <img
                className={classes.img}
                src={logo}
                alt="logo"
            />
        </Box>
    );
}

export default PageHeader;