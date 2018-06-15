import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {children, open} = this.props;
    return (
        <Dialog
          open={open}
          onClose={this.handleClose}
        >
        <DialogTitle>Edite</DialogTitle>
        <DialogContent>
            <div className="dialog_box">{children}</div>
          </DialogContent>
        </Dialog>
    );
  }
}

AlertDialog.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};

export default AlertDialog;