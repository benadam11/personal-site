function Nav() {
  return (
    <nav className="max-w-[90ch] mx-auto flex justify-between px-4">
      <a href="/">
        <figure className="flex items-center gap-2">
          <svg role="img" width="24" height="24" viewBox="0 0 24 24">
            <circle r="12" cx="12" cy="12" fill="var(--grey1)" />
            <circle id="circle" r="3" cx="12" cy="18" fill="var(--sand)" />
          </svg>
          <figcaption>
            <b className="uppercase">Ben Adam</b>
          </figcaption>
        </figure>
      </a>
      <div className='justify-end align-center gap-8 hidden lg:flex'>
        <a className='nav-link' href='/'>Home</a>
        <a className='nav-link' href='/thoughts/'>Thoughts</a>
        <a className='nav-link' href='/experiments/'>Experiments</a>
        <a className='nav-link' href='/work/'>Work</a>
      </div>
    </nav>
  );
}
export default Nav;
