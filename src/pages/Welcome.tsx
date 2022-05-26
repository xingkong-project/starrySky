import React from 'react';
import { useImmer } from 'use-immer';
import './Welcome.less';
import Webcomponents from '../components/Webcomponents';
import type { IRegisterInput } from '../utils/magic';
import { Button } from 'antd';

interface IModule extends IRegisterInput {
  moduleId: number;
}

export default (): React.ReactNode => {
  const [moduleList, setModuleList] = useImmer<IModule[]>([]);

  const addModule = () => {
    setModuleList((draft) => {
      draft.push({
        name: 'react-test',
        moduleScriptUrl:
          'https://images.tuyacn.com/rms-static/5d5fe440-dccb-11ec-a0c1-c9688f19b248-1653552654468.js?tyName=react-test.umd.min(2).js',
        options: {
          propTypes: {
            desc: String,
            test_name: String,
          },
          shadow: true,
          styles: [
            'https://images.tuyacn.com/rms-static/5d600b50-dccb-11ec-a0c1-c9688f19b248-1653552654469.css?tyName=react-test.umd.min(1).css',
          ],
        },
        moduleId: Math.floor(Math.random() * 16),
      });
    });
  };

  return (
    <div className="container">
      <Button onClick={addModule}>添加一个模块</Button>
      {moduleList.map(({ name, moduleScriptUrl, options, moduleId }) => (
        <Webcomponents
          key={moduleId}
          name={name}
          moduleScriptUrl={moduleScriptUrl}
          options={options}
          props={{ desc: '哈哈哈', test_name: '宗纬' }}
        />
      ))}
    </div>
  );
};
