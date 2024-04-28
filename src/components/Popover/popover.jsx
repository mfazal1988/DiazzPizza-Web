import { StyledPopover } from './popover.components';

const PopOver =(props) => {
  const { anchorEl, handleClose, children } = props;
  const open = Boolean(anchorEl);
  const id = open ? 'basic-popover' : undefined;

  return (
    <>
      <StyledPopover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {children}
      </StyledPopover>
    </>
  );
}

export default PopOver;
