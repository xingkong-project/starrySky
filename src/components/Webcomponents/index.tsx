import React from 'react';
import { registerWebcomponents } from '../../utils/magic';
import type { IRegisterInput } from '../../utils/magic';
import { useProps } from '@magic-microservices/magic';

interface IWebcomponentsInput extends IRegisterInput {
  props?: Record<string | number | symbol, any>;
}

/**
 * 渲染 webcomponents
 *
 * 未注册 -> 注册 -> element
 * 已注册 -> element
 */
export default function Webcomponents({
  name,
  moduleScriptUrl,
  options = {},
  props = {},
}: IWebcomponentsInput) {
  const registered = customElements.get(name);

  // useProps 包裹 props
  Object.keys(props).forEach((key) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    props[key] = useProps(props[key]);
  });
  const element = React.createElement(name, props);

  if (registered) {
    return <div style={{ height: 'auto' }}>{element}</div>;
  }

  registerWebcomponents({
    name,
    moduleScriptUrl,
    options,
  });

  return <div style={{ height: 'auto' }}>{element}</div>;
}
