function Nav() {
  return (
    <nav class="max-w-[960px] mx-auto flex justify-between">
      <a href="/">
        <figure class="flex items-center gap-2">
          <svg role="img" width="24" height="24" viewBox="0 0 24 24">
            <circle r="12" cx="12" cy="12" fill="currentColor" />
            <circle id="circle" r="3" cx="12" cy="18" fill="#f8f7fa" />
          </svg>
          <figcaption>
            <b class="uppercase">Ben Adam</b>
          </figcaption>
        </figure>
      </a>
      <div class='flex justify-end align-center gap-8'>
        <a class='nav-link' href='/'>Home</a>
        <a class='nav-link' href='/thoughts/'>Thoughts</a>
      </div>
    </nav>
  );
}
export default Nav;
