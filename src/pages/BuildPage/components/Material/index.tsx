// 第三方组件
import React from 'react';
import { Input, Card, Button } from 'antd';
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
import { useReactive } from 'ahooks';

import type { DraftFunction } from 'use-immer';
import type { IMaterialItem } from '../../';

// css
import styles from './index.less';

const { Search } = Input;
const { Meta } = Card;

export interface IMaterialProps {
  addMaterial: (arg: IMaterialItem) => void;
  materialList: IMaterialItem[];
  setMaterialList: (args: DraftFunction<IMaterialItem[]>) => void;
  config?: {
    width?: number | string;
  };
}

const Material: React.FC<IMaterialProps> = (props) => {
  // props
  const { config = { width: 350 }, addMaterial, materialList } = props;

  // 私有变量
  const state = useReactive({
    switch: true, // 开关
  });

  /**
   * 搜索
   * @param value keyword
   * @returns
   */
  const onSearch = () => {};

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
        <div className={styles.materiaList}>
          {materialList.map((item) => {
            const { title, desc, moduleId } = item;
            return (
              <Card
                key={moduleId}
                hoverable
                style={{ width: 150, marginTop: 10 }}
                cover={
                  <img
                    alt="example"
                    style={{ height: '150px' }}
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title={title} description={desc} />
                <div className={styles.materiaAction}>
                  <Button type="primary" size="small" onClick={() => addMaterial(item)}>
                    添加
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Material;
