const { User } = require('../../src/app/models');

describe('User CRUD', () => {
    it('should create a user and persist data into database', async () => {
        const user = await User.create({ 
                name: 'Wender', 
                email: 'wenderls@unipam.edu.br', 
                password_hash: '123' 
            });

        console.log(user);

        expect(user._options.isNewRecord).toBe(true);
    });
})

