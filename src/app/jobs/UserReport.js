export default {
    key: 'UserReport',
    Options: {
        delay: 5000
    },
    async handle({ data }) {
        const { user } = data;

        // Report dos dados do usuário
        console.log(user);
    },
}