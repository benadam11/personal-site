export default function Footer() {
  return (
    <footer className="mx-auto max-w-[90ch] my-12 fade-in px-4">
      <h2 className="uppercase text-sm mb-12 font-bold">Connect</h2>
      <ul>
        <li>
          <a className='font-serif text-lg' href="https://twitter.com/benadam11" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a className='font-serif text-lg'  href="https://www.linkedin.com/in/benjaminadam/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a className='font-serif text-lg'  href="mailto:someone@benjamin.mark.adam@gmail.com?subject=Email from your website" target="_blank" rel="noreferrer">
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}
