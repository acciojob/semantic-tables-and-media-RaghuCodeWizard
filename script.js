cy.visit(baseUrl + "/main.html");

// Select the video element
cy.get('video').should('have.attr', 'controls');

// Select the source element and assert its src attribute
cy.get('video source').should('have.attr', 'src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');

cy.visit(baseUrl + "/main.html");

// Select the audio element
cy.get('audio').should('have.attr', 'controls');

// Select the source element and assert its src attribute
cy.get('audio source').should('have.attr', 'src', 'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg');
