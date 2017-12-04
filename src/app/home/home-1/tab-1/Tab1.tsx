import * as React from 'react';
import * as PropTypes from 'prop-types';
import { UIView } from '@uirouter/react';
import { Table } from 'antd';
import AppDataService from '../../../../service/AppDataService';

// tslint:disable-next-line
export default class Tab1 extends React.Component<{}, { data: any[] }> {
  static contextTypes = {
    router: PropTypes.object,
  };
  // tslint:disable-next-line
  columns: any[] = [];

  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
    };
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
        onCellClick: this.onClickDetails,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];
  }

  onClickDetails = e => {
    this.context.router.stateService.go('home.home1.tab1.details', {
      id: e.key,
    });
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    AppDataService.getHome1Tab1Data().then(data => {
      this.setState({
        data,
      });
    });
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: '20px', backgroundColor: '#fff' }}>
          <Table columns={this.columns} dataSource={this.state.data} />
        </div>
        <UIView />
      </div>
    );
  }
}
