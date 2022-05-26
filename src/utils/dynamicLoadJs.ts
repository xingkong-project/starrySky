interface ILoadJsInput {
  url: string;
}

type ILoadJsOutput<T> = Promise<T>;

/**
 * 动态加载 js 资源
 */
export function dynamicLoadJs<T>({ url }: ILoadJsInput): ILoadJsOutput<T | void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => resolve();
    script.onerror = () => reject();
    script.crossOrigin = 'anonymous';
    script.src = url;
    if (document.head.append) {
      document.head.append(script);
    } else {
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  });
}
