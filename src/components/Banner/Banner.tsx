import { useEffect, useRef } from 'react';
import './Banner.scss';
const titleText = ['П','р','и','в','і','т','!','<br />','<br />','М','е','н','е',' ','з','в','а','т','и', ' ', 'Є','в','г','е','н', '<br />','<br />','я', ' ', '-', ' ', 'м','е','н','т','о','р', ' ','з',' ','в','е','б','-','р','о','з','р','о','б', 'к','и'];
export const Banner: React.FC = () => {
const title = useRef<HTMLHeadingElement | null>(null);

useEffect(() => {
  if (title.current) {
    for (let i = 0; i < titleText.length; i++) {
        setTimeout(() => {
          if (title.current) {
            title.current.innerHTML += titleText[i];
          }
        }, 100 * i + 100 * Math.random());
    }
  }
}, [title])



  return (
    <section className='section banner'>
      <div className='container'>
        <div className='banner__content'>
          <h1 className='banner__title' ref={title}></h1>
        </div>
      </div>
    </section>
  );
};
