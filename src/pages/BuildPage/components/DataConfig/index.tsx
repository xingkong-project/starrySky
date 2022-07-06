// 第三方组件
import React from 'react';
import { CaretLeftFilled, CaretRightFilled, CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Button } from 'antd';
import { useReactive } from 'ahooks';
import type { IMaterialItem } from '../../';
import SchemaForm from '@/components/SchemaForm';

// css
import styles from './index.less';

import type { DraftFunction } from 'use-immer';

const { Panel } = Collapse;

export interface IMaterialProps {
  materialList: IMaterialItem[];
  setMaterialList: (args: DraftFunction<IMaterialItem[]> | IMaterialItem[]) => void;
  config?: {
    width?: number | string;
  };
}

const DataConfig: React.FC<IMaterialProps> = (props) => {
  // props
  const { config = { width: 350 }, materialList, setMaterialList } = props;

  // 私有变量
  const state = useReactive({
    switch: true, // 开关
  });

  /**
   * 根据 moduleId 更新页面组件数据
   *
   * @param moduleId
   * @param formData
   */
  const handleOnChange = (moduleId: number, formData: any) => {
    const targetIndex = materialList.findIndex((item) => item.moduleId === moduleId);
    setMaterialList((draft) => {
      draft[targetIndex].props = { ...formData };
    });
  };

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
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          style={{ background: '#FFF' }}
        >
          {materialList.map((item) => (
            <Panel header={item.title} key={item.moduleId} className="site-collapse-custom-panel">
              <SchemaForm {...item} onChange={handleOnChange} />
            </Panel>
          ))}
        </Collapse>
        <div className={styles.savaData}>
          <Button style={{ width: '100%' }} type="primary">
            提交
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataConfig;
