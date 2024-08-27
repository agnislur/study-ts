import { useAppSelector } from "../../store";

const ListWork = () => {
  const works = useAppSelector((state) => state.work.works);
  
  return (
    <div className="rounded-md shadow border m-2 p-2">
      <p></p>
      <table className="rounded-md">
        <thead>
          <tr className="bg-gradient-to-b from-sky-400 to-sky-600 text-white  ">
            <th className="p-2 border rounded">ID</th>
            <th className="p-2 border rounded">Tiket</th>
            <th className="p-2 border rounded">Created</th>
            <th className="p-2 border rounded">completedAt</th>
            <th className="p-2 border rounded">status</th>
          </tr>
        </thead>
        <tbody>
          {works.map((work) => (
            <tr className="even:bg-slate-50" key={work.id}>
              <td className="p-2">{work.id}</td>
              <td className="p-2">{work.tiket}</td>
              <td className="p-2">{work.createdAt}</td>
              <td className="p-2">{work.completedAt}</td>
              <td className="p-2">{work.status}</td>
            </tr>

          ))}
        </tbody>
      </table>

    </div>
  );
};

export default ListWork;
