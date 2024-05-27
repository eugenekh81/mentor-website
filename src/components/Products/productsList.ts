import js from '../../assets/images/icons/icon--js.png';
interface IProduct {
  id: number;
  title: string;
  spriteId?: string;
  imgSrc?: string;
}
export const productsList: IProduct[] = [
  { id: 1, title: 'HTML', spriteId: 'html' },
  { id: 2, title: 'CSS', spriteId: 'css' },
  { id: 3, title: 'SASS', spriteId: 'sass' },
  { id: 4, title: 'Figma', spriteId: 'figma' },
  { id: 5, title: 'JavaScript', imgSrc: js },
  { id: 6, title: 'React', spriteId: 'react' },
  { id: 7, title: 'Redux', spriteId: 'redux' },
  { id: 8, title: 'Node.JS', spriteId: 'nodejs' },
  { id: 9, title: 'GitHub', spriteId: 'github' },
  { id: 10, title: 'Bootstrap', spriteId: 'bootstrap' },
  { id: 11, title: 'API', spriteId: 'api' },
  { id: 12, title: 'SQL', spriteId: 'sql' },
];
