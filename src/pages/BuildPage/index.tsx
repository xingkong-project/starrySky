import React from 'react';
// import { message, Tabs } from 'antd';
import { history } from 'umi';

import styles from './index.less';

const Build: React.FC = () => {
  return (
    <div className={styles.container}>
      <a
        href="##"
        onClick={() => {
          history.goBack();
        }}
      >
        返回上一页
      </a>
      <div>核心搭建页面</div>
    </div>
  );
};

export default Build;
