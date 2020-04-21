import React, { useState } from 'react';

import { logoFull } from 'assets/images';

import classnames from 'classnames';

import { FiChevronDown, FiMenu } from 'react-icons/fi';

const Header = props => {
  const [isUserMenuShown, setIsUserMenuShown] = useState(true);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const toggleMenu = param => {
    if (param === 'user') {
      setIsUserMenuShown(!isUserMenuShown);
    } else {
      setIsMenuShown(!isMenuShown);
    }
  };

  //const { user } = props;

  return (
    <header>
      <div className="header--top d-flex flex-fix align-items-center">
        <div className="container flex-1 flex-fix d-flex justify-content-between align-items-center">
          <div className="toggle-menu d-md-none" onClick={() => toggleMenu()}>
            <FiMenu size="24" />
          </div>
          <div className="header-left">
            <div className="logo">
              <a href="/" title="Leapfrog Technology">
                <img src={logoFull} alt="Leapfrog Technology" />
              </a>
            </div>
            <ul className={classnames('header-left__nav left', { show: isMenuShown })}>
              <li className="header-left__item">
                <a href="/menu1">Menu 1</a>
              </li>
              <li className="header-left__item">
                <a href="/menu2">Menu 2</a>
              </li>
            </ul>
          </div>
          <ul className="header-right">
            <li className="header-right__item dropdown-cover d-flex align-items-center">
              <div className="user-card d-flex align-items-center">
                <img
                  alt="display"
                  src={logoFull}
                  className="left nametag nametag--lg profile-photo"
                />
                <span className="text-truncate">Anish Manandhar</span>
                <FiChevronDown className="icon--grey ml-10 flex-shrink-0" size="18px" />
              </div>

              <div className={classnames('dropmenu', { show: isUserMenuShown })}>
                <div className="dropmenu__node">
                  <a href="/profile" title={'Anish Manandhar'} className="d-flex align-items-center">
                    View Profile
                  </a>
                </div>
                <div className="dropmenu__node">
                  <a href="/logout" title="Logout">
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

export default Header;
