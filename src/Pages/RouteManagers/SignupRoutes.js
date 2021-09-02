//Dependency Imports

import {
    Switch,
    Route,
    useHistory
} from 'react-router-dom'

import {
    useState
} from 'react'

import {
    makeStyles,
    useTheme
} from '@material-ui/core'

//Local Imports
import SignupStart from '../SignupPages/SignupStart.js'
import PageFooter from '../../Components/Footers/PageFooter.js'
import PageHeader from '../../Components/Headers/PageHeader.js'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
}));

function SignupRoutes() {
    const history = useHistory();
    const theme = useTheme();
    const classes = useStyles(theme);
    const [formProgress, setFormProgress] = useState({
        id: 1
    })

    return (
        <Switch>
            <Route path="/signup/:id">
                <div
                    className={classes.root}
                >
                    <PageHeader />
                    <SignupStart 
                        formProgress={formProgress}
                        setFormProgress={setFormProgress}
                    />
                    <PageFooter />
                </div>
            </Route>
            <Route path="/signup">
                {
                    formProgress.id === 0 ?
                        history.push('/signup/0')
                        :
                        null
                }
            </Route>
        </Switch>
    );
}

export default SignupRoutes;