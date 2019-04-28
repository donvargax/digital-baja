const faker = require('faker')

faker.commerce.rating = () => faker.random.number({ min: 0.0, max: 5.0 })

module.exports = () => {
	let data = { labs: [] }
	for (let i = 0; i < 1000; i++) {
		data.labs.push({
			lab: {
				ID: i,
				date: faker.date.soon(),
				name: faker.company.companyName(),
				location: {
					latitude: faker.address.latitude(),
					longitude: faker.address.longitude(),
				},
				price: faker.commerce.price(),
				service: faker.commerce.productName,
				distance: faker.random.number(),
				"extra-payload": {
					title: faker.commerce.productName,
					description: faker.lorem.paragraphs,
				},
				rated: faker.commerce.rating(),
			}
		})
	}

	return data
}
