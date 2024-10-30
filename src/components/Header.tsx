export default function Header() {
  return (
    <header className="py-4 w-full mx-0 my-auto flex justify-between items-center">
      <span className="font-prompt text-white text-3xl">MXFin</span>

      <nav className="text-white text-lg font-prompt desktopNav">
        <ul className="flex gap-6 items-center">
          <li>
            <a href="">Dashboard</a>
          </li>
          <li>
            <a href="">Transactions</a>
          </li>
          <li>
            <a href="">Analytics</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}