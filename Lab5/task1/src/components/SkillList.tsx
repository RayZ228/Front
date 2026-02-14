import { Skill, SkillLevel } from '../types';

interface SkillListProps {
  skills: Skill[];
}

const getColor = (level: SkillLevel): string => {
  switch (level) {
    case 'Beginner': return 'green';
    case 'Intermediate': return 'orange';
    case 'Expert': return 'red';
    default: return 'black';
  }
};

export const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id} style={{ color: getColor(skill.level) }}>
          {skill.name} - {skill.level}
        </li>
      ))}
    </ul>
  );
};