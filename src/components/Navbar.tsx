import Stack from './Stack';
import AnchorTag from './AnchorTag';

const Navbar = () => {
  return (
    <Stack $justify="flex-end" $margin="12px 0px">
      <Stack $gap="12px">
        <AnchorTag to="/create-task">Create Task</AnchorTag>
        <AnchorTag to="/list-tasks">Tasks List</AnchorTag>
        <AnchorTag to="/bulk-delete">Bulk Delete</AnchorTag>
      </Stack>
    </Stack>
  );
};

export default Navbar;
