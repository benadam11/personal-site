export default function PostItem({ published, url, title, isHomePage }) {
  const headingClasses = isHomePage ? "text-xl font-bold" : "text-3xl font-bold";
  return (
    <li className={`block ${isHomePage ? "mb-4" : "mb-12"}`}>
      <time className="font-mono text-contrastShaded text-sm mb-2">
        {published}
      </time>
      <a href={url}>
        <h3 className={headingClasses}>{title}</h3>
      </a>
    </li>
  );
}
