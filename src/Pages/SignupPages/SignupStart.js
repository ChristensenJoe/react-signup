//Dependency Imports

import {
    useParams
} from 'react-router-dom'

import {
    useState
} from 'react'

import {
    makeStyles,
    useTheme
} from '@material-ui/core'

//Local Imports
import SignupZero from './SignupZero'
import SignupOne from './SignupOne'
import SignupTwo from './SignupTwo'
import SignupThree from './SignupThree'
import SignupFour from './SignupFour'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        overflowY: 'scroll'
    }
}));

function SignupStart({ formProgress, setFormProgress }) {
    const { id } = useParams();
    const theme = useTheme();
    const classes = useStyles(theme);
    const [formData, setFormData] = useState({ 
        city: ""
    })

    function handleFormChange(e) {
        setFormData(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }
    console.log(formData)
    const pages = {
        0: <SignupZero
            handleFormChange={handleFormChange}
            formData={formData}
        />,
        1: <SignupOne
            handleFormChange={handleFormChange}
        />,
        2: <SignupTwo
            handleFormChange={handleFormChange}
        />,
        3: <SignupThree
            handleFormChange={handleFormChange}
        />,
        4: <SignupFour
            handleFormChange={handleFormChange}
        />
    }

    return (
        <div
            className={classes.root}
        >
            <form
                autoComplete="off"
            >
                {pages[id]}
            </form>
        </div>
    );
}

export default SignupStart;