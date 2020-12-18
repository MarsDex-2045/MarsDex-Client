const {calculateLocation} = require('../../src/assets/js/colonies/location-calculations');

test('calculate Location', () => {
    let colonyLocation = {
        "altitude": -200.232,
        "latitude": 24.33564,
        "longitude": 22.21773
    };
    let groundZero = {
        "altitude": 0,
        "latitude": 0,
        "longitude": 0
    };

    expect(calculateLocation(groundZero)).toBe(`0°N 0°E`);
})
