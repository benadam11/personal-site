export default function Footer() {
  return (
    <footer className="mx-auto max-w-[80ch] py-12 fade-in px-4">
      <h2 className="uppercase text-sm mb-12 font-bold text-accent">Connect</h2>
      <ul className='grid gap-4'>
        <li>
          <a className='font-serif text-lg opacity-80 hover:opacity-100 underline' href="https://twitter.com/benadam11" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a className='font-serif text-lg opacity-80 hover:opacity-100 underline' href="https://github.com/benadam11" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a className='font-serif text-lg opacity-80 hover:opacity-100 underline'  href="https://www.linkedin.com/in/benjaminadam/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a className='font-serif text-lg opacity-80 hover:opacity-100 underline'  href="mailto:someone@benjamin.mark.adam@gmail.com?subject=Email from your website" target="_blank" rel="noreferrer">
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}
