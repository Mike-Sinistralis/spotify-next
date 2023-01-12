import ListItem from './ListItem';
import { User } from '../interfaces';

type Props = {
  items: User[]
}

function List({ items }: Props): JSX.Element {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem data={item} />
        </li>
      ))}
    </ul>
  );
}

export default List;
