export class DebugConfig {
  static readonly ENERGY: boolean = true;
}

export function debug(...message: unknown[]) {
  console.log('🐛', message);
}
