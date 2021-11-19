import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // primaryColor: '#1890ff',
  primaryColor: '#6C63FF',
  layout: 'side',
  contentWidth: 'Fluid',
  splitMenus: false,
  fixedHeader: true,
  fixSiderbar: false,
  colorWeak: false,
  title: '星空',
  pwa: false,
  logo: '../public/logo.svg',
  iconfontUrl: '',
};

export default Settings;
