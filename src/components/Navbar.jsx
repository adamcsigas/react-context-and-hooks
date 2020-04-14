import React, {/* Component, */ useContext } from 'react';
import { themeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

/* class NavBar extends Component {
    render() {
        return (
            <AuthContext>{(authContext) => (
                <themeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <nav style={{ background: theme.ui, color: theme.syntax }}>
                            <h1>Context App</h1>
                            <div onClick={toggleAuth}>
                                {isAuthenticated ? 'Logged in' : 'Logged out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}
                </themeContext.Consumer>
            )}
            </AuthContext>
        );
    }
} */

const NavBar = () => {
    const { isLightTheme, light, dark } = useContext(themeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default NavBar;
