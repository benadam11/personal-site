export default function PostItem({ published, url, title }) {
  return (
    <li className="block mb-12">
      <time className="font-serif italic font-medium text-grey2 text-md mb-2">
        {published}
      </time>
      <a href={url}>
        <h3 className="text-3xl font-bold">{title}</h3>
      </a>
    </li>
  );
}
