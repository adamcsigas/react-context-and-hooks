import React, { Component } from 'react';
import { themeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = themeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;  
        return (
            <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
                <ul>
                    <li style={{ background: theme.ui }}>the way of kings</li>
                    <li style={{ background: theme.ui }}>final empire</li>
                    <li style={{ background: theme.ui }}>yolo the woldar</li>
                </ul>
            </div>
          );
    }
}
 
export default BookList;