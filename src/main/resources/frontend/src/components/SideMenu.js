import { Menu, Icon } from 'antd';
import React from 'react'
const SubMenu = Menu.SubMenu;

export default class SiderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      current: 'user',
      openKeys: []
    };
  }

  handleClick(e) {
      window.location.hash = e.key;
      this.setState({
          current: e.key,
          openKeys: e.keyPath.slice(1)
      });
  }

  render() {
    return (
      <Menu onClick={this.handleClick.bind(this)}
        style={{ width: '100%' }}
        penKeys = {this.state.openKeys}
        theme={'light'}
        defaultOpenKeys={['sub1','sub2']}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
      
        <SubMenu key="sub1" title={<span><Icon type="setting" /><span>用户中心</span></span>}>
          <Menu.Item key="User">用户管理</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>文件中心</span></span>}>
          {/*<Menu.Item key="AreaStack">折线图</Menu.Item>
          <Menu.Item key="HeatmapCartesian">热力图</Menu.Item>*/}
          <Menu.Item key="File">文件管理</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
