module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['http://localhost:3000/'],
      startServerCommand: 'npm run start',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'installable-manifest': 'off',
        'apple-touch-icon': 'off',
        'service-worker': 'off',
        'maskable-icon': 'off',
        'splash-screen': 'off',
      },
    },
  },
}
