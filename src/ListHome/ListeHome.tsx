import { FunctionComponent } from "react";

type HomeProps = {
  icon: JSX.Element;
  listElements: string[];
  titleList: string;
};

const ListeHome: FunctionComponent<HomeProps> = ({
  icon,
  listElements,
  titleList,
}: HomeProps): JSX.Element => {
  return (
    <div>
      <h3>{icon}{titleList}</h3>
      <ul>
        {listElements.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListeHome;
