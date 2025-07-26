import { FaGraduationCap, FaUsers } from 'react-icons/fa';

export const getExperiences = (t) => [
    {
        type: 'internship',
        title: t('internshipTitle'),
        company: 'Centre de Formation PKFOKAM48',
        period: '2024 - En cours',
        location: 'Yaoundé, Cameroun',
        description: t('internshipDesc'),
        technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
        icon: FaGraduationCap,
        color: 'bg-base-300'
    },
    {
        type: 'project',
        title: t('projectTitle'),
        company: 'PKFOKAM48',
        period: '2025',
        location: 'Yaoundé, Cameroun',
        description: t('projectDesc'),
        technologies: ['React', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL'],
        icon: FaUsers,
        color: 'bg-base-content'
    }
];