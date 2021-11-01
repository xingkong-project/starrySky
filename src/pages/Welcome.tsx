import React from 'react';
import './Welcome.less';

export default (): React.ReactNode => {
  // 根据配置，渲染组件
  const pageConfig = ['material-one', 'material-two'];

  const El = pageConfig?.map((item) => {
    return React.createElement(item);
  });

  // H5 单位处理，不能直接使用 px
  // H5 预览，不能直接用 ps 进行渲染预览，跟真实会有差别
  // 封装一个方法，通过此方法，传入 pageConfig，调用 document 原生 api，创建 script，dom 元素，生成 html，然后上传至 cdn

  return <div className="container">{El}</div>;
};
