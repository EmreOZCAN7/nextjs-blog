import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-14 pb-10">
      <img src='https://avatars.githubusercontent.com/u/107696151?v=4' className="w-32 h-32 rounded-full block mx-auto mb-1 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
