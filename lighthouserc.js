module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['http://localhost:3000/'],
      startServerCommand: 'npm run start',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
  },
}
