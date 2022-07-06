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
  url,
  options = {},
  props = {},
}: IWebcomponentsInput) {
  const registered = customElements.get(name);

  // useProps 包裹 props
  const magicProps = { ...props };
  Object.keys(magicProps).forEach((key) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    magicProps[key] = useProps(magicProps[key]);
  });
  const element = <div style={{ height: 'auto' }}>{React.createElement(name, magicProps)}</div>;

  if (registered) {
    return element;
  }

  registerWebcomponents({
    name,
    url,
    options,
  });

  return element;
}
