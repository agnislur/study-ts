// import AddWork from '../../components/tiket/addWork';
import ListWork from '../../components/tiket/listWork';
import {AddWork} from '../../components'

const Work: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
        <div>
          <AddWork />
          <ListWork />
        </div>
    </div>
  );
};

export default Work;
