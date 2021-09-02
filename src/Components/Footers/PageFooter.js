//Dependency Imports

import {
    makeStyles,
    useTheme,
    Box
} from '@material-ui/core'

//Local Imports


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#132e2a',
        padding: '35px',
        display: 'flex',
        alignItems: 'center',
        flex: 'none',
        height: '6vh',
        [theme.breakpoints.down('lg')]: {
            flexWrap: 'wrap',
        }
    }
}))

function PageFooter() {
    const theme = useTheme();
    const classes = useStyles(theme)
        
    return (
        <Box
        className={classes.root}
        >

        </Box>
    );
}

export default PageFooter;