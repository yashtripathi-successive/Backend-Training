import { faker } from '@faker-js/faker';
function mockApiGenerator() {
    return function (req, res, next) {
        const count = parseInt(req.body.count);
        const users = [];
        for (let i = 0; i < count; i++) {
            users.push({
                name: faker.person.fullName(),
                email: faker.internet.email()
            });
        }
        req.users = users;
        next();
    };
}
export default mockApiGenerator;
//# sourceMappingURL=mockApiGenerator.js.map