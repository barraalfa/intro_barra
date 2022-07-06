import Stack from 'react-bootstrap/Stack';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function Body() {
  return (
    <Stack direction="horizontal">
      <div className="info">
        <h1><LeftSide /></h1>
      </div>
      <div className="aside">
        <h1><RightSide/></h1>
      </div>
    </Stack>
  );
}

export default Body;