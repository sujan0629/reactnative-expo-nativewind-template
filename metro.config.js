const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname);

// ─── SVG Transformer ─────────────────────────────────────────────────────────
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

// ─── Asset path alias ─────────────────────────────────────────────────────────
config.resolver.alias = {
  '@assets': path.join(__dirname, 'assets'),
};

// ─── Production minifier: preserve class names for NativeWind ────────────────
config.transformer.minifierConfig = {
  keep_classnames: true,
  keep_fnames: true,
  mangle: {
    keep_classnames: true,
    keep_fnames: true,
  },
  output: {
    ascii_only: true,
    quote_style: 3,
    wrap_iife: true,
  },
  sourceMap: { includeSources: false },
  toplevel: false,
  compress: {
    reduce_funcs: false,
  },
};

// ─── NativeWind (wrap last) ───────────────────────────────────────────────────
module.exports = withNativeWind(config, {
  input: path.join(__dirname, 'global.css'),
  configPath: path.join(__dirname, 'tailwind.config.js'),
});
