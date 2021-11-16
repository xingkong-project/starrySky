// 第三方组件
import React from 'react';
import { Button } from 'antd';
import { EditFilled, ThunderboltFilled, EyeFilled } from '@ant-design/icons';

// 静态资源
import buildLogo from '/public/build_logo.png';

// css
import styles from './index.less';

const Header: React.FC = () => {
  return (
    <header className={styles.headerBody}>
      <div className={styles.box}>
        <div className={styles.left}>
          {/* logo */}
          <img src={buildLogo} alt="logo" className={styles.logo} />
          {/* 保存提示 */}
          <span className={styles.saveTip}>10 : 30 保存成功</span>
        </div>
        <div className={styles.right}>
          <Button icon={<EditFilled />} type="text">
            全局配置
          </Button>
          <Button icon={<EyeFilled />} type="text">
            预览
          </Button>
          <Button type="primary" icon={<ThunderboltFilled />}>
            发布
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
