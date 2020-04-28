import classnames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiMenu } from 'react-icons/fi';

import { logoFull } from 'assets/images';

import * as routes from 'constants/routes';

import { withAuthState } from 'components/hoc/auth';

const Header = ({ loggedInUser, logout }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <header>
      <div className="header--top d-flex flex-fix align-items-center">
        <div className="container flex-1 flex-fix d-flex justify-content-between align-items-center">
          <div className="toggle-menu d-md-none">
            <FiMenu size="24" />
          </div>
          <div className="header-left">
            <div className="logo">
              <a href="/" title="Leapfrog Technology">
                <img src={logoFull} alt="Leapfrog Technology" />
              </a>
            </div>
            <ul className={classnames('header-left__nav left')}>
              <li className="header-left__item">
                <Link to={routes.EMPLOYEES} href="/menu1">
                  Employees
                </Link>
              </li>
            </ul>
          </div>
          <ul className="header-right">
            <li className="header-right__item dropdown-cover d-flex align-items-center">
              <div className="user-card d-flex align-items-center">
                <img alt="display" src={logoFull} className="left nametag nametag--lg profile-photo" />
                <span className="text-truncate">{loggedInUser.first_name}</span>
                <FiChevronDown
                  className="icon--grey ml-10 flex-shrink-0"
                  size="18px"
                  onClick={() => setIsMenuShown(!isMenuShown)}
                />
              </div>

              <div className={classnames('dropmenu', { show: isMenuShown })}>
                <div className="dropmenu__node">
                  <a href="#" title="Logout" onClick={logout}>
                    Log Out
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default withAuthState(Header);
