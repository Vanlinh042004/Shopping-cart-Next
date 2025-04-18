import { RiGithubFill, MdApi } from '@assets/icons';

export function Footer(): JSX.Element {
  return (
    <footer
      className='inner:tab flex justify-between text-lg font-medium
                 text-secondary inner:flex inner:items-center inner:gap-2
                 inner:transition-colors hover:inner:text-primary'
    >
      <a
        href='https://github.com/Vanlinh042004'
        target='_blank'
        rel='noreferrer'
      >
        <RiGithubFill /> vanlinh
      </a>
      <a href='https://fakestoreapi.com' target='_blank' rel='noreferrer'>
        <MdApi />
        Fake Store API
      </a>
    </footer>
  );
}
