module.exports = {
    projectId: '4b7344',
    e2e: {
        env: {
            navbarSite: 'cypress.io',
        },
        baseUrl: 'http://localhost:8080',
        watchForFileChanges: false,
        video: false,
        pageLoadTimeout: 40000,
        responseTimeout: 40000,
        viewportHeight: 1000,
        viewportWidth: 1920,
        chromeWebSecurity: false,
    },
}
