import Stack from 'react-bootstrap/Stack';
import Biodata from './Biodata';
import Experience from './Experience';
import Education from './Education';
import Volunteer from './Volunteer';


function LeftSide() {
  return (
    <Stack direction="stack">
      <div className="info">
        <h1><Biodata /></h1>
        <h1><Experience/></h1>
        <h1><Education/></h1>
        <h1><Volunteer/></h1>
      </div>
    </Stack>
  );
}

export default LeftSide;