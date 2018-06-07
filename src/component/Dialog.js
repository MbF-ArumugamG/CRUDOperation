import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  render() {
    const {children, open} = this.props;
    return (
        <Dialog
          docked={false}
          open={open}
          onClose={this.handleClose}
          onRequestChange={this.handleDrawerClose}
        >
        <DialogTitle>Edite</DialogTitle>
        <DialogContent>
            <div className="dialog_box">{children}</div>
          </DialogContent>
        </Dialog>
    );
  }
}

export default AlertDialog;