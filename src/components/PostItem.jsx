export default function PostItem({ published, url, title }) {
  return (
    <li className="block mb-4">
      <time className="font-mono font-medium text-grey2 text-sm mb-2">
        {published}
      </time>
      <a href={url}>
        <h3 className="text-xl font-serif font-bold">{title}</h3>
      </a>
    </li>
  );
}
