// 第三方组件
import React from 'react';
import { useImmer } from 'use-immer';
// import { message, Tabs } from 'antd';
import { useReactive } from 'ahooks';

// 私有组件 ｜ 方法
import Header from './components/Header';
import Material from './components/Material';
import Preview from './components/Preview';
import DataConfig from './components/DataConfig';

// scc
import styles from './index.less';

import type { IRegisterInput } from '@/utils/magic';
import type { SchemaBase } from 'form-render';

export interface IMaterialItem extends IRegisterInput {
  moduleId: number;
  title: string;
  desc?: string;
  props: Record<string, unknown>;
  schema: Partial<SchemaBase>;
}

const Build: React.FC = () => {
  const state = useReactive({
    leftWidth: 350, // 开关
  });

  const [materialList, setMaterialList] = useImmer<IMaterialItem[]>([
    {
      name: 'react-test',
      title: '星空物料组件',
      desc: '模块的详细描述',
      url: 'https://images.tuyacn.com/rms-static/5d5fe440-dccb-11ec-a0c1-c9688f19b248-1653552654468.js?tyName=react-test.umd.min(2).js',
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
      moduleId: 1,
      props: { desc: '哈哈哈', test_name: '宗纬' },
      // schema => 右侧表单 => props 改变 => 入库
      // 保存之后，schema 的 default 需要同步更新
      // schema 的 default，可以直接配置成 props.desc 这种，这样的话，db 只用存 schema 的结构
      // props 来存具体的数据
      schema: {
        type: 'object',
        properties: {
          desc: {
            title: '描述',
            type: 'string',
            placeholder: '请输入',
            required: true,
            default: '哈哈哈',
          },
          test_name: {
            title: '名字',
            type: 'string',
            placeholder: '请输入',
            required: true,
            default: '宗纬',
          },
        },
      },
    },
    {
      name: 'react-test',
      title: '星空物料组件',
      desc: '模块的详细描述',
      url: 'https://images.tuyacn.com/rms-static/5d5fe440-dccb-11ec-a0c1-c9688f19b248-1653552654468.js?tyName=react-test.umd.min(2).js',
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
      moduleId: 2,
      props: { desc: '哈哈哈', test_name: '宗纬' },
      // schema => 右侧表单 => props 改变 => 入库
      // 保存之后，schema 的 default 需要同步更新
      // schema 的 default，可以直接配置成 props.desc 这种，这样的话，db 只用存 schema 的结构
      // props 来存具体的数据
      schema: {
        type: 'object',
        properties: {
          desc: {
            title: '描述',
            type: 'string',
            placeholder: '请输入',
            required: true,
            default: '哈哈哈哈默认值',
          },
          test_name: {
            title: '名字',
            type: 'string',
            placeholder: '请输入',
            required: true,
            default: '默认值宗纬',
          },
        },
      },
    },
    {
      name: 'react-test',
      title: '星空物料组件',
      desc: '模块的详细描述',
      url: 'https://images.tuyacn.com/rms-static/5d5fe440-dccb-11ec-a0c1-c9688f19b248-1653552654468.js?tyName=react-test.umd.min(2).js',
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
      moduleId: 3,
      props: { desc: '哈哈哈', test_name: '宗纬' },
      // schema => 右侧表单 => props 改变 => 入库
      // 保存之后，schema 的 default 需要同步更新
      // schema 的 default，可以直接配置成 props.desc 这种，这样的话，db 只用存 schema 的结构
      // props 来存具体的数据
      schema: {
        type: 'object',
        properties: {
          desc: {
            title: '描述',
            type: 'string',
            placeholder: '请输入',
            required: true,
            default: '哈哈哈',
          },
          test_name: {
            title: '名字',
            type: 'string',
            placeholder: '请输入',
            required: true,
            default: '宗纬',
          },
        },
      },
    },
    {
      name: 'react-test',
      title: '星空物料组件',
      desc: '模块的详细描述',
      url: 'https://images.tuyacn.com/rms-static/5d5fe440-dccb-11ec-a0c1-c9688f19b248-1653552654468.js?tyName=react-test.umd.min(2).js',
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
      moduleId: 4,
      props: { desc: '哈哈哈', test_name: '宗纬' },
      // schema => 右侧表单 => props 改变 => 入库
      // 保存之后，schema 的 default 需要同步更新
      // schema 的 default，可以直接配置成 props.desc 这种，这样的话，db 只用存 schema 的结构
      // props 来存具体的数据
      schema: {
        type: 'object',
        properties: {
          desc: {
            title: '描述',
            type: 'string',
            placeholder: '请输入',
            required: true,
            default: '哈哈哈',
          },
          test_name: {
            title: '名字',
            type: 'string',
            placeholder: '请输入',
            required: true,
            default: '宗纬',
          },
        },
      },
    },
  ]);

  const addMaterial = (material: IMaterialItem) => {
    setMaterialList((draft) => {
      draft.push(material);
    });
  };

  return (
    <div className={styles.container}>
      {/* 导航 */}
      <Header />

      {/* 主体 */}
      <section className={styles.buildBody}>
        {/* 物料（left） */}
        <Material
          config={{ width: state.leftWidth }}
          addMaterial={addMaterial}
          setMaterialList={setMaterialList}
          materialList={materialList}
        />

        {/* 预览 */}
        <Preview materialList={materialList} />

        {/* 物料配置 */}
        <DataConfig materialList={materialList} setMaterialList={setMaterialList} />
      </section>
    </div>
  );
};

export default Build;
