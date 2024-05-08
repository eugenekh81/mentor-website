import React, { useState } from 'react';
import { faqs } from './FAQs';
import { FAQItem } from '../FAQItem';

export const FAQList: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(0);

  const handleSelectFAQ = (id: number = 0) => {
    if (selectedId === id) {
      setSelectedId(0);
    } else {
      setSelectedId(id);
    }
  };
  return (
    <ul className='FAQ__list'>
      {faqs.map((faq) => (
        <FAQItem
          {...faq}
          selectedId={selectedId}
          setSelectedId={handleSelectFAQ}
        />
      ))}
    </ul>
  );
};
