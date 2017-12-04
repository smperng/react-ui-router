import * as React from 'react';
import * as PropTypes from 'prop-types';
import AppDataService from '../../../../../service/AppDataService';

// tslint:disable-next-line
export default class Details extends React.Component<{}, { data: any }> {
  static contextTypes = {
    router: PropTypes.object,
  };
  itemId = '';
  loading = false;
  constructor(props: {}) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentWillMount() {
    this.fetchData();
  }
  fetchData() {
    this.loading = true;
    this.itemId = this.context.router.stateService.params.id;
    AppDataService.getHome1Tab1DataDetailById(this.itemId).then(
      data => {
        this.setState({
          data,
        });
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }

  itemIdChanged(): boolean {
    return (
      !this.loading &&
      this.itemId !== this.context.router.stateService.params.id
    );
  }

  // tslint:disable-next-line
  componentWillUpdate(nextProps: {}, nextState: { data: any }) {
    if (this.itemIdChanged()) {
      this.fetchData();
    }
  }
  onClickClose = e => {
    this.context.router.stateService.go('home.home1.tab1.zero');
  };
  render() {
    const { data } = this.state;
    return data !== null ? (
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          height: '300px',
          backgroundColor: '#fff',
        }}
      >
        <div style={{ float: 'right', cursor: 'pointer' }}>
          <i onClick={this.onClickClose} className="anticon anticon-close" />
        </div>
        <div>Name:</div>
        <div>{data.name}</div>
        <div>Age:</div>
        <div>{data.age}</div>
        <div>Address:</div>
        <div>{data.address}</div>
      </div>
    ) : (
      <div style={{ marginTop: '20px' }}>No Data ???</div>
    );
  }
}
