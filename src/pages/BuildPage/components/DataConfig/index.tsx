// 第三方组件
import React from 'react';
// import { Input } from 'antd';
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
import { useReactive } from 'ahooks';

// css
import styles from './index.less';

export interface IMaterialProps {
  config?: {
    width?: number | string;
  };
}

const DataConfig: React.FC<IMaterialProps> = (props) => {
  // props
  const { config = { width: 350 } } = props;

  // 私有变量
  const state = useReactive({
    switch: true, // 开关
  });

  return (
    <div
      className={styles.dataConfigBody}
      style={{
        width: config.width,
        transform: `translateX(${state.switch ? 0 : Number(config.width)}px)`,
      }}
    >
      {/* 伸缩 */}
      <div
        className={styles.switch}
        onClick={() => {
          state.switch = !state.switch;
        }}
      >
        {state.switch ? <CaretRightFilled /> : <CaretLeftFilled />}
      </div>
      {/* 主体 */}
      <div className={styles.dataConfigContent}>
        <header className={styles.searchBox}>
          <h3 className={styles.title}>物料一配置</h3>
        </header>
      </div>
    </div>
  );
};

export default DataConfig;
