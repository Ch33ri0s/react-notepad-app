import React, { Component } from 'react';
import Navbar from './navigation';
import Footer from './footer';

class Profile extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Navbar />
                <p>
                    This is the profile page.
                </p>
                <Footer />
            </div>
        );
    }
}

export default Profile;