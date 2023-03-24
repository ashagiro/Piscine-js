function dogYears(planetName, dogAgeSec) {
    const time = (dogAgeSec / 31557600) * 7;
    let dogAge = 0;
    switch (planetName) {
        case "earth":
            dogAge = time;
            break;
        case 'mercury':
            dogAge = time / 0.2408467;
            break;
        case 'venus':
            dogAge = time / 0.61519726;
            break;
        case 'mars':
            dogAge = time / 1.8808158;
            break;
        case 'jupiter':
            dogAge = time / 11.862615;
            break;
        case 'saturn':
            dogAge = time / 29.447498;
            break;
        case 'uranus':
            dogAge = time / 84.016846;
            break;
        case 'neptune':
            dogAge = time / 164.79132;
    }
    return Math.round(dogAge * 100) / 100;
}

