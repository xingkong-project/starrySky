// 第三方组件
import React from 'react';
import { Input } from 'antd';
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
import { useReactive } from 'ahooks';

// css
import styles from './index.less';

const { Search } = Input;

export interface IMaterialProps {
  config?: {
    width?: number | string;
  };
}

const Material: React.FC<IMaterialProps> = (props) => {
  // props
  const { config = { width: 350 } } = props;

  // 私有变量
  const state = useReactive({
    switch: true, // 开关
  });

  /**
   * 搜索
   * @param value keyword
   * @returns
   */
  const onSearch = (value: any) => console.log(value);

  return (
    <div
      className={styles.materialBody}
      style={{
        width: config.width,
        transform: `translateX(${state.switch ? 0 : -Number(config.width)}px)`,
      }}
    >
      {/* 伸缩 */}
      <div
        className={styles.switch}
        onClick={() => {
          state.switch = !state.switch;
        }}
      >
        {state.switch ? <CaretLeftFilled /> : <CaretRightFilled />}
      </div>
      {/* 主体 */}
      <div className={styles.materialContent}>
        <header className={styles.searchBox}>
          <Search placeholder="输入物料名称" enterButton="搜索物料" onSearch={onSearch} />
          {/* <Input placeholder="输入物料名称" onSearch={onSearch} prefix={<SearchOutlined />} /> */}
        </header>
      </div>
    </div>
  );
};

export default Material;
