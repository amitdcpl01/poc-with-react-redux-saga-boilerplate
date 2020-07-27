import React from 'react';
import './header.css';
import { connect } from 'react-redux';

function Header() {
    return (
        <header id="header" className="header">
            <div>
                <h5>Header section</h5>
            </div>
        </header>
    );
}

export default Header;