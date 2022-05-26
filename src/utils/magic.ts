import magic from '@magic-microservices/magic';
import type { MagicOptions } from '@magic-microservices/magic';
import { dynamicLoadJs } from './dynamicLoadJs';

export interface IOptions extends MagicOptions {
  /**
   * 物料组件样式 CDN 集合
   */
  styles?: string[];
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
  moduleScriptUrl: string;

  /**
   * 物料组件配置信息
   */
  options?: IOptions;
}

/**
 * 注册一个 webcomponents
 */
export async function registerWebcomponents({
  name,
  moduleScriptUrl,
  options = {},
}: IRegisterInput) {
  await dynamicLoadJs({ url: moduleScriptUrl });
  // 这块需要再处理下
  const temp = { ...options, styles: options.styles };
  magic(name, window[name], temp);
}
