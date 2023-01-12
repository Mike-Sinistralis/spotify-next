import Link from 'next/link';

import { User } from '../interfaces';

type Props = {
  data: User
}

function ListItem({ data }: Props): JSX.Element {
  return (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      {data.id}
      :
      {data.name}
    </Link>
  );
}

export default ListItem;
