// 第三方组件
import React from 'react';
import { Popover, Slider } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { useReactive, useKeyPress } from 'ahooks';
import Webcomponents from '@/components/Webcomponents';
import type { IMaterialItem } from '../../';

// css
import styles from './index.less';

export interface IPreviewProps {
  materialList: IMaterialItem[];
  config?: {
    width?: number | string;
  };
}

// 默认可配置项
const defaultConfig = {
  width: 320,
  height: 600,
  scale: 1,
};

const Preview: React.FC<IPreviewProps> = ({ materialList = [] }) => {
  // 私有变量
  const state = useReactive({
    defaultConfig: {
      ...defaultConfig,
    },
  });

  // 预览区可配置区域
  const _style = () => {
    return {
      width: state.defaultConfig.width + 'px',
      height: state.defaultConfig.height + 'px',
      transform: `scale(${state.defaultConfig.scale})`,
    };
  };

  // 放大缩小
  const trimScale = (type: 'add' | 'cat') => {
    if (
      (type === 'add' && state.defaultConfig.scale >= 2) ||
      (type === 'cat' && state.defaultConfig.scale <= 0.4)
    )
      return;
    state.defaultConfig.scale = state.defaultConfig.scale + (type === 'add' ? 0.1 : -0.1);
  };

  // 调整宽高
  const sizeContent = (
    <div className={styles.sizeContent}>
      <div className={styles.item}>
        <p>宽度</p>
        <Slider
          style={{ flex: 1 }}
          value={state.defaultConfig.width}
          onChange={(v) => {
            state.defaultConfig.width = v;
          }}
          min={300}
          max={600}
          step={10}
        />
      </div>
      <div className={styles.item}>
        <p>高度</p>
        <Slider
          style={{ flex: 1 }}
          value={state.defaultConfig.height}
          onChange={(v) => {
            state.defaultConfig.height = v;
          }}
          min={400}
          max={1000}
          step={10}
        />
      </div>
    </div>
  );

  // 按键控制 - 放大缩小
  useKeyPress(['-', '='], (event) => {
    trimScale(event.key === '-' ? 'cat' : 'add');
  });

  // 按键控制 - 恢复默认
  useKeyPress(['1'], () => {
    state.defaultConfig = { ...defaultConfig };
  });

  return (
    <div className={styles.preview}>
      {/* 预览区 */}
      <section className={styles.previewBody} style={_style()}>
        {materialList.map(({ name, url, options, moduleId, props }) => (
          <Webcomponents key={moduleId} name={name} url={url} options={options} props={props} />
        ))}
      </section>
      {/* 底部控制 */}
      <div className={styles.footerConfig}>
        <Popover content={sizeContent} trigger="click">
          <div className={styles.configItem}>尺寸调整</div>
        </Popover>
        <div className={styles.configBox}>
          <PlusOutlined
            className={styles.item}
            onClick={() => {
              trimScale('add');
            }}
          />
          <div className={styles.scaleText}>{Math.floor(state.defaultConfig.scale * 100)}%</div>
          <MinusOutlined
            className={styles.item}
            onClick={() => {
              trimScale('cat');
            }}
          />
        </div>
        <div
          className={styles.configItem}
          onClick={() => {
            state.defaultConfig = { ...defaultConfig };
          }}
        >
          恢复默认
        </div>
      </div>
    </div>
  );
};

export default Preview;
