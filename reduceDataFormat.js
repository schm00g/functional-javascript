import fs from 'fs';

var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('    '))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            material: line[2],
            price: line[3],
            quantity: line[4]
        })
        return customers
    }, {})

console.log(JSON.stringify(output, null, 2));