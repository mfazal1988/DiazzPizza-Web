import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';

export const StyledPopover = styled(Popover)(() => ({
  '& .MuiPaper-root': {
    backgroundColor: ' #ECECEC',
  },
  border: 'solid 1px #CCCCCC',
  borderRadius: '8px',
  boxShadow: '0',
}));