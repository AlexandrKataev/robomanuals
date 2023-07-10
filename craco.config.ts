import path from 'path';

const resolvePath = (p: any) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@entities': resolvePath('./src/entities'),
      '@features': resolvePath('./src/features'),
      '@layouts': resolvePath('./src/layouts'),
      '@pages': resolvePath('./src/pages'),
    },
  },
};