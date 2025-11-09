import logSymbols from 'log-symbols';

export const info = (...args: unknown[]) => {
  console.log(logSymbols.info, ...args);
};

export const success = (...args: unknown[]) => {
  console.log(logSymbols.success, ...args);
};

export const warning = (...args: unknown[]) => {
  console.warn(logSymbols.warning, ...args);
};

export const error = (...args: unknown[]) => {
  console.error(logSymbols.error, ...args);
};
