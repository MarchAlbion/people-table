import style from './container.module.scss';

type Props = {
  children: JSX.Element;
};

export const Container = ({ children }: Props) => {
  return <div className={style.container}>{children}</div>;
};
