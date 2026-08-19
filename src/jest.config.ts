import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets';

export default {
  ...createCjsPreset({
    tsconfig: '<rootDir>/tsconfig.spec.json',
  }),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
} satisfies Config;