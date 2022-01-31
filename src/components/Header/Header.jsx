import react from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import searchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (

        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.titile}>
                    Tour Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.titile}>
                        Explore new places
                    </Typography>
                    {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <searchIcon />
                        </div>
                        <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;