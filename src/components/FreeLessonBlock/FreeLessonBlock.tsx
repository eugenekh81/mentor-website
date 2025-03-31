import React from 'react';
import {
  Book,
  BookOpen,
  Calendar,
  Clock,
  DollarSign,
  Users,
} from 'lucide-react';
import styles from './FreeLessonBlock.module.scss';

export const FreeLessonBlock: React.FC = () => {
  const lessonFeatures = [
    {
      title: 'Визначити твій рівень знань',
      description:
        'Determine your current skill level and identify areas for improvement',
      icon: <Users className={`${styles.icon} ${styles.blue}`} />,
      colorClass: 'blue',
    },
    {
      title: 'Визначити твої цілі',
      description:
        'Define clear, achievable objectives tailored to your career aspirations',
      icon: <BookOpen className={`${styles.icon} ${styles.green}`} />,
      colorClass: 'green',
    },
    {
      title: 'Обговорити програму навчання',
      description:
        'Discuss a personalized learning path aligned with your goals',
      icon: <Book className={`${styles.icon} ${styles.purple}`} />,
      colorClass: 'purple',
    },
    {
      title: 'Обговорити вартість навчання',
      description:
        'Transparent discussion about lesson packages and payment options',
      icon: <DollarSign className={`${styles.icon} ${styles.amber}`} />,
      colorClass: 'amber',
    },
    {
      title: 'Обговорити графік занять',
      description: 'Find convenient time slots that fit your busy lifestyle',
      icon: <Calendar className={`${styles.icon} ${styles.pink}`} />,
      colorClass: 'pink',
    },
    {
      title: 'Обговорити твої запитання',
      description:
        'Address any questions or concerns you may have about the program',
      icon: <Clock className={`${styles.icon} ${styles.teal}`} />,
      colorClass: 'teal',
    },
  ];

  return (
    <div className={styles.featuresGrid}>
      {lessonFeatures.map((feature, index) => (
        <div key={index} className={styles.featureCard}>
          <div className={styles.featureContent}>
            <div
              className={`${styles.iconContainer} ${
                styles[feature.colorClass]
              }`}
            >
              {feature.icon}
            </div>
            <h4 className={styles.featureTitle}>{feature.title}</h4>
            {/* <p className={styles.featureDescription}>{feature.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};
