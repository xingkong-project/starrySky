import React from 'react';
import { Input, Form, Button } from 'antd';
// import { ProFormCaptcha, ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-form';
import { history } from 'umi';
// import Footer from '@/components/Footer';
import 'antd/es/form/style';
import styles from './index.less';

const Login: React.FC = () => {
  // const { initialState, setInitialState } = useModel('@@initialState');

  // const fetchUserInfo = async () => {
  //   const userInfo = await initialState?.fetchUserInfo?.();

  //   if (userInfo) {
  //     await setInitialState((s) => ({ ...s, currentUser: userInfo }));
  //   }
  // };

  // const { status, type: loginType } = userLoginState;

  const onFinish = (values: any) => {
    console.log('Success:', values);
    history.push('/welcome');
  };
  return (
    <div className={styles.container}>
      <div className={styles.loginWrap}>
        <img className={styles.logo} src={require('../../../../public/logo.svg')} alt="" />
        <h3 className={styles.title}>星空 - 聚星汇辰</h3>
        <div className={styles.loginBody}>
          <Form
            className={styles.login_form}
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item name="username" rules={[{ required: true, message: '请输入你的用户名' }]}>
              <Input size="large" placeholder="用户名" allowClear />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: '请输入你的密码' }]}>
              <Input.Password size="large" placeholder="密码" allowClear />
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" style={{ textAlign: 'center' }}>
                进入星球
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

export default Login;
