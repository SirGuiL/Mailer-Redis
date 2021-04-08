import Queue from '../lib/Queue';

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password,
        };

        // Adicionando job RegistrationMail na fila (Queue)
        await Queue.add('RegistrationMail', { user });
        await Queue.add('UserReport', { user });

        return res.json(user);
    }
}

// 24:34