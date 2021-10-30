// import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const defaultMessage = '星空';
  const currentYear = new Date().getFullYear();
  return <DefaultFooter copyright={`${currentYear} ${defaultMessage}`} links={[]} />;
};

// {
//   key: '',
//   title: 'Ant Design Pro1',
//   href: 'https://pro.ant.design',
//   blankTarget: true,
// },
// {
//   key: 'github',
//   title: <GithubOutlined />,
//   href: 'https://github.com/ant-design/ant-design-pro',
//   blankTarget: true,
// },
// {
//   key: 'Ant Design',
//   title: 'Ant Design',
//   href: 'https://ant.design',
//   blankTarget: true,
// },
