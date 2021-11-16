// 第三方组件
import React from 'react';
// import { message, Tabs } from 'antd';
import { useReactive } from 'ahooks';

// 私有组件 ｜ 方法
import Header from './components/Header';
import Material from './components/Material';
import Preview from './components/Preview';
import DataConfig from './components/DataConfig';

// scc
import styles from './index.less';

const Build: React.FC = () => {
  const state = useReactive({
    leftWidth: 350, // 开关
  });
  return (
    <div className={styles.container}>
      {/* 导航 */}
      <Header />
      {/* 主体 */}
      <section className={styles.buildBody}>
        {/* 物料（left） */}
        <Material config={{ width: state.leftWidth }} />
        {/* 预览 */}
        <Preview />
        {/* 物料配置 */}
        <DataConfig />
      </section>
    </div>
  );
};

export default Build;
