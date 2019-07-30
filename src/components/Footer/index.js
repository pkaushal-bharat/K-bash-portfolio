import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer>
                <ul>
            <li data-title="Finder"><img onClick={props.modalToggle} src="http://cdn.osxdaily.com/wp-content/uploads/2010/08/terminal.png" /></li>
            <li data-title="Chrome"><img onClick={(e) => props.jump(e)} src="https://harnerdesigns.com/wp-content/uploads/2018/05/Google_Chrome_icon_2011.png" /></li>
            <li data-title="LinkedIn"><a href="https://linkedin.com/in/akshatnitd"><img onClick={(e) => props.jump(e)} src="http://cofarming.info/wp-content/uploads/2017/01/Linkedin-logo-1-550x550-300x300.png" /></a></li>
            <li data-title="Dreamweaver"><a href="https://fb.com/akshatnitd"><img onClick={(e) => props.jump(e)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1000px-F_icon.svg.png" /></a></li>
            <li data-title="System&nbsp;Preferences"><a href="https://github.com/akshatnitd"><img onClick={(e) => props.jump(e)} src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png" /></a></li>
        </ul>
        </footer>
    );
}

export default Footer;
