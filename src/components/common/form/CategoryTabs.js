import React from 'react';

import classnames from 'classnames';

const CategoryTabs = props => {
  const { handleTabChange, selected, items } = props;

  const renderTabList = tabs => {
    return (
      <ul className="skill-category-tab-list">
        {tabs.map(tab => {
          const isActive = selected === tab;

          return (
            <li
              key={tab}
              className={classnames('skill-category-tab', {
                'is-active': isActive,
              })}
            >
              <button type="button" className="skill-category-tab-button" onClick={() => handleTabChange(tab)}>
                {tab}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return <div className="skill-category-tabs">{renderTabList(items)}</div>;
};

export default CategoryTabs;
