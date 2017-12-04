import * as React from 'react';
import { UIView } from '@uirouter/react';
import * as PropTypes from 'prop-types';
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const tabs = [
  {
    name: 'Home-1 Tab-1',
    route: 'tab1',
  },
  {
    name: 'Home-1 Tab-2',
    route: 'tab2',
  },
  {
    name: 'Home-1 Tab-3',
    route: 'tab3',
  },
];
export default class Home1 extends React.Component<{}, {}> {
  static contextTypes = {
    router: PropTypes.object,
  };
  onChangeTab = e => {
    this.context.router.stateService.go(`home.home1.${e.target.value}`);
  };
  render() {
    return (
      <div style={{ padding: '20px', width: '100%' }}>
        <RadioGroup
          defaultValue="tab1"
          size="large"
          onChange={this.onChangeTab}
        >
          {tabs.map(({ name, route }) => (
            <RadioButton key={route} value={route}>
              {name}
            </RadioButton>
          ))}
        </RadioGroup>
        <UIView />
      </div>
    );
  }
}
