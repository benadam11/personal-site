export default function PostItem({ published, url, title }) {
  return (
    <li class="block mb-8">
      <time className="font-serif italic font-medium text-grey2 text-md mb-2">
        {published}
      </time>
      <a href={url}>
        <h3 className="text-3xl">{title}</h3>
      </a>
    </li>
  );
}
