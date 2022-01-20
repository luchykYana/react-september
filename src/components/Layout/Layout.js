import {Outlet} from 'react-router-dom'

import css from './Layout.module.css';

import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <div className={css.header}><Header/></div>
            <div className={css.outlet}><Outlet/></div>
            <div className={css.footer}><Footer/></div>
        </div>
    );
};

export {Layout};
