import { Tag } from "../../types/Music";

function PopularTags(props: { tags: Tag[] }) {
  return (
    <ul className="popular-tags">
      {
        props.tags.map(tag => {
          return <li key={tag.name} className="popular-tags-item">
            <a href={tag.url} className="link tag-music">{tag.name}</a>
          </li>
        })
      }
    </ul>
  );
}

export default PopularTags;
