import React from 'react'
import Button from '@material-ui/core/Button';
import './LandingPage.css'
export default function LandingPage() {
    return (
        <div className='container'><h1>Welcome to To Do Application</h1>
            <div className="center">

                <Button variant="contained" color="primary" href="login">
                    Get Started
                </Button>
            </div>
        </div>
    )
}
