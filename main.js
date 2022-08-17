const createWoodBlock = () => {
    return {
        type: 'wood block',
        length: 10,
        material: 'pine',
        purpose: 'flute'
    }
}

const createBeautifulCarving = (woodObject) => {
    return `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}`
}

const woodBlock = createWoodBlock();

const carvingString = createBeautifulCarving(woodBlock);

console.log(carvingString);