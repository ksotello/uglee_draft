import React, { useState } from 'react';
import { 
    AppBar, 
    Toolbar, 
    Button, 
    Typography, 
    IconButton, 
    SwipeableDrawer, 
    List, 
    ListItem,
    Hidden
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';


export default () => {
    const [open, updateDrawerState] = useState(false);

    const toggleDrawer = event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        updateDrawerState(!open);
    };

    return (
        <AppBar position="fixed">
            <Hidden only={['md', 'lg', 'xl']}>
                <IconButton
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>
            </Hidden>
            <Typography variant="h1">
                <img src="images/Uglee-Draft Final.png" alt="uglee draft logo" />
            </Typography>
            <Hidden only={['md', 'lg', 'xl']}>
                <SwipeableDrawer
                    open={open}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <List>
                        <ListItem><Button>How it Works</Button></ListItem>
                        <ListItem><Button>Writing Tasks</Button></ListItem>
                        <ListItem><Button>Sign Up</Button></ListItem>
                    </List>
                </SwipeableDrawer>
            </Hidden>
            <Hidden only={['xs', 'sm']}>
                <Toolbar>
                    <Button>How it Works</Button>
                    <Button>Writing Tasks</Button>
                    <Button>Sign Up</Button>
                </Toolbar>
            </Hidden>
        </AppBar>
    )
}