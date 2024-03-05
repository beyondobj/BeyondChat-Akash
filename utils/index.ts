export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): T {
  let lastFunc: ReturnType<typeof setTimeout>;
  let las