import * as React from 'react';
import * as PropTypes from 'prop-types';
import { UIView } from '@uirouter/react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const menus = [
  {
    name: 'Products-1',
    route: 'products.products1',
  },
  {
    name: 'Products-2',
    route: 'products.products2',
  },
  {
    name: 'Products-3',
    route: 'products.products3',
  },
];

export default class Products extends React.Component<{}, {}> {
  static contextTypes = {
    router: PropTypes.object,
  };
  onMenuClick = e => {
    this.context.router.stateService.go(e.item.props.route);
  };

  render() {
    return (
      <Layout>
        <Sider
          width={200}
          style={{ background: '#fff', height: 'calc(100vh - 64px)' }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['0']}
            onClick={this.onMenuClick}
            style={{ height: '100%', borderRight: 0 }}
          >
            {menus.map(({ name, route }, key) => (
              <Menu.Item key={key} route={route}>
                {name}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <UIView />
      </Layout>
    );
  }
}
