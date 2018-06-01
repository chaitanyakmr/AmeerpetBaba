import React from 'react';
import h from 'react-hyperscript';
import { Form, Button, ControlLabel, FormGroup, FormControl, Col, Panel } from 'react-bootstrap';
// import ReactDataGrid from 'react-data-grid';
import PropTypes from 'prop-types';
// import 'uxt-core/themes/light.scss';
// import 'uxt-core/uxt-core.scss';


export class MyBooks extends React.Component {
  // static defaultProps = {
  //   booksList: [],
  // }

  constructor(props, context) {
    super(props, context);
    // this.props.GetBooks();
    this.state = {
      booksList: this.props.booksList,
      name: '',
      author: '',
    };
    this.columns = [
      { key: 'bookId', name: 'ID' },
      { key: 'name', name: 'Title' },
      { key: 'author', name: 'Author' },
    ];
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props !== nextProps) {
  //     this.setState({ booksList: nextProps.booksList });
  //   }
  // }

  render() {
    return (
      h('div', { className: 'container' }, [
        h(Panel, { header: 'My Books', bsStyle: 'primary' }, [
          h(Form, { horizontal: true }, [
            h(FormGroup, { controlId: 'formBasicText' }, [
              h(Col, { componentClass: ControlLabel, sm: 2 }, 'Book Name'),
              h(Col, { sm: 4 }, [
                h(FormControl, { type: 'text', placeholder: 'Enter text', value: this.state.name }),
              ]),
              h(Col, { componentClass: ControlLabel, sm: 2 }, 'Author'),
              h(Col, { sm: 4 }, [
                h(FormControl, { type: 'text', placeholder: 'Enter text ', value: this.state.author }),
              ]),
            ]),
            h(FormGroup, { controlId: 'formInlineSave' }, [
              h(Col, { sm: 4 }),
              h(Col, { sm: 1 }, [
                h(Button, { bsStyle: 'primary', bsSize: 'small', onClick: this.props.registerBooks }, 'save'),
              ]),
              h(Col, { sm: 1 }, [
                h(Button, { bsStyle: 'danger', bsSize: 'small' }, 'cancel'),
              ]),
            ]),
          ]),
        ]),
      ])
    );
  }

  // rowGetter = (i) => {
  //   return this.state.booksList[i];
  // };
}

MyBooks.propTypes = {
  GetBooks: PropTypes.func.isRequired,
  booksList: PropTypes.arrayOf(PropTypes.object),
  registerBooks: PropTypes.func.isRequired,
};
