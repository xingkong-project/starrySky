import React, { useEffect } from 'react';
import FormRender, { useForm } from 'form-render';
import type { SchemaBase } from 'form-render';

interface ISchemaForm {
  moduleId: number;
  props: Record<string, unknown>;
  schema: Partial<SchemaBase>;
  onChange: (moduleId: number, formData: any) => any;
}

const SchemaForm: React.FC<ISchemaForm> = ({ moduleId, schema, onChange, props }) => {
  const form = useForm();

  /**
   * 首次渲染填充默认值
   */
  useEffect(() => {
    form.setValues(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 监听表单数据变化
   * 执行回调
   */
  const watch = {
    /**
     * # 为全局
     * @param formData 表单的实时数据
     */
    '#': (formData: any) => {
      if (typeof onChange === 'function') {
        onChange(moduleId, formData);
      }
    },
  };

  return <FormRender schema={schema} form={form} watch={watch} />;
};

export default SchemaForm;
