import React from 'react';
import { MdClose } from 'react-icons/md';

const SelectedSkills = props => {
  const { skills, onDeleteClick, disabled } = props;

  return (
    <div className="selected-skills">
      {skills.map(skill => (
        <div className="selected-skill" key={skill.id}>
          <span>{skill.name}</span>
          <button
            type="button"
            onClick={() => {
              onDeleteClick(skill.skillCategory.name, skill);
            }}
            disabled={disabled}
          >
            <MdClose size={15} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedSkills;
