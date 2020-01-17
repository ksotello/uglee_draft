import React from 'react';
import axios from 'axios';
import { Box, Typography, TextField, MenuItem, Button } from '@material-ui/core';
import { Section } from '../components';

const sendEmail = async ({ first_name, last_name, email_address, project_of_interest }) => {
    axios.post("http://localhost:3000/send-email", {
        first_name,
        last_name,
        email_address,
        project_of_interest
    })
}

const onSubmit = e => {
    e.preventDefault();

    const data = new FormData(e.currentTarget).entries();
    const json = Object.assign(...Array.from(data, ([x,y]) => ({[x]:y})));

    sendEmail(json);
}

export default () => (
    <Section heading="Sign Up" className="sign-up">
        <Box>
            <Typography variant="body1">
                We are still in the beta phase. Drop your email to stay connected for periodic updates.
            </Typography>

            <form onSubmit={onSubmit}>
                <TextField id="first_name" name="first_name" label="First Name" />

                <TextField id="last_name" name="last_name" label="Last Name" />

                <TextField id="email_address" name="email_address" label="Email Address" />

                <TextField id="project_of_interest" name="project_of_interest" select label="Project of Interest">
                    <MenuItem value="">Please Select An Option</MenuItem>
                    <MenuItem value="30 Day Challenge">Woohoo 30 Day Challenge</MenuItem>
                    <MenuItem value="30 Day Story Elements">Story Elements 30 Day Challenge</MenuItem>
                </TextField>

                <Button type="submit">Submit</Button>
            </form>
        </Box>
    </Section>
)