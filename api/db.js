const faker = require('faker')

faker.commerce.rating = () => faker.random.number({ min: 0.0, max: 5.0 })

module.exports = () => {
	let departments = ['Microbiology', 'Parasitology', 'Virology', 'Hematology', 'Coagulation', 'Clinical Biochemistry', 'Toxicology', 'Immunology', 'Immunohaematology', 'Urianalysis', 'Histopathology', 'Cytopathology', 'Molecular diagnostics', 'Cytogenetics', 'Surgical pathology']
	let data = { labs: [], departments: departments.map((value, index) => ({ id: index, name: value }))}
	for (let i = 0; i < 1000; i++) {
		data.labs.push({
			id: i,
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
			department: faker.random.arrayElement(departments),
		})
	}

	return data
}
