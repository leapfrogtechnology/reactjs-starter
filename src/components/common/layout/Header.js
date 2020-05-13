import classnames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import { logoFull } from 'assets/images';

import * as routes from 'constants/routes';

import { withAuthState } from 'components/hoc/auth';

const Header = ({ loggedInUser, logout }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar navbar--bordered-bottom navbar--sticky">
        <div className="container">
          <div className="navbar__wrap navbar__wrap--content-spread">
            <div className="navbar__left">
              <div className="navbar__logo">
                <img src={logoFull} alt="logo" />
              </div>
              <div className="nav">
                <div className="nav__node">
                  <Link to={routes.EMPLOYEES} href="/menu1">
                    {t('components.header.employees')}
                  </Link>
                </div>
              </div>
            </div>

            <div className="navbar__right">
              <div className="media media--small navbar__right-logout">
                <div className="avatar avatar--round avatar--sm">
                  <img src={'https://images.lftechnology.com/avatar/349.png'} alt={loggedInUser.first_name} />
                </div>
                <div className="media__content media__content--small-spaced">
                  <h4 className="media__title media__title--sm-font font-weight--normal">{loggedInUser.first_name}</h4>
                </div>
                <FiChevronDown className="color-grey-40" onClick={() => setIsMenuShown(!isMenuShown)} />
                <div className={classnames('dropmenu', { show: isMenuShown })}>
                  <div className="dropmenu__node">
                    <a href="#" title="Logout" onClick={logout}>
                      {t('components.header.logout')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default withAuthState(Header);
