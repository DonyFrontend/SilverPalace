import { useParams } from "react-router-dom";

const CharacterPage = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Персонаж: {id}</h1>
      <p>Здесь будет информация о персонаже.</p>
    </div>
  );
};

export default CharacterPage;
