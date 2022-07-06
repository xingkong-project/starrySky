import magic from '@magic-microservices/magic';
import type { MagicOptions } from '@magic-microservices/magic';
import { dynamicLoadJs } from './dynamicLoadJs';

export interface IOptions extends MagicOptions {
  /**
   * 物料组件样式 CDN 集合
   */
  styles?: string[];

  /**
   * 物料组件额外 js 资源 CDN 集合
   */
  scripts?: string[];
}

export interface IRegisterInput {
  /**
   * webcomponents 名称
   */
  name: string;

  /**
   * 物料组件 umd 格式的 CDN 地址
   */
  url: string;

  /**
   * 物料组件配置信息
   */
  options?: IOptions;
}

/**
 * 注册一个 webcomponents
 */
export async function registerWebcomponents({ name, url, options = {} }: IRegisterInput) {
  await dynamicLoadJs({ url });

  // hack magic 内部异常
  const enhanceOptions = { ...options, styles: options.styles, scripts: options.scripts };

  magic(name, window[name], enhanceOptions);
}
