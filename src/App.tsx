import * as React from 'react';
import * as PropTypes from 'prop-types';
import { UIView } from '@uirouter/react';

import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

import './App.css';

const menu = [
  {
    name: 'Home',
    route: 'home',
  },
  {
    name: 'About',
    route: 'about',
  },
  {
    name: 'Events',
    route: 'events',
  },
  {
    name: 'Products',
    route: 'products',
  },
  {
    name: 'Contact',
    route: 'contact',
  },
];

export default class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };
  onMenuSelect = ({ item, key, selectedKeys }) => {
    this.context.router.stateService.go(key);
  };
  render() {
    return (
      <Layout>
        <Header className="header">
          <Menu
            theme="dark"
            mode="horizontal"
            onSelect={this.onMenuSelect}
            defaultSelectedKeys={['home']}
            style={{ lineHeight: '64px' }}
          >
            {menu.map(({ name, route }) => (
              <Menu.Item key={route}>{name}</Menu.Item>
            ))}
          </Menu>
        </Header>
        <UIView />
      </Layout>
    );
  }
}
