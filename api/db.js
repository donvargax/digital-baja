const faker = require('faker')

faker.commerce.rating = () => faker.random.number({ min: 0.0, max: 5.0 })

module.exports = () => {
	let departments = ['Microbiology', 'Parasitology', 'Virology', 'Hematology', 'Coagulation', 'Clinical Biochemistry', 'Toxicology', 'Immunology', 'Immunohaematology', 'Urianalysis', 'Histopathology', 'Cytopathology', 'Molecular diagnostics', 'Cytogenetics', 'Surgical pathology']
	let images = ['test-example.jpg', 'test1.jpg', 'test2.jpg', 'test3.jpg', 'test4.jpg']
	let data = { labs: [], departments: departments.map((value, index) => ({ id: index, name: value }))}
	for (let i = 0; i < 1000; i++) {
		let name = faker.company.companyName()
		data.labs.push({
			id: i,
			date: faker.date.soon(),
			name: name,
			title: name,
			location: {
				latitude: faker.address.latitude(),
				longitude: faker.address.longitude(),
			},
			price: faker.commerce.price(),
			service: faker.commerce.productName,
			distance: faker.random.number({min: 5, max: 300}),
			"extra-payload": {
				title: faker.commerce.productName,
				description: faker.lorem.paragraphs,
			},
			rating: faker.commerce.rating(),
			department: faker.random.arrayElement(departments),
			description: faker.lorem.paragraph(),
			image: faker.random.arrayElement(images),
		})
	}

	return data
}
