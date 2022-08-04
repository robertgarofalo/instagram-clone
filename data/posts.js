import { USERS } from './users'

export const POSTS = [
    {
        imageURL: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Train Ride to hogwards.',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'Wow. This build looks fire! Super excited about this one'
            },
            {
                user: 'amaanth.dev',
                comment: 'Lovin this one'
            },
        ],
    },
    {
        imageURL: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        user: USERS[1].user,
        likes: 7870,
        caption: 'Train Ride to hogwards.',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'cleveraa',
                comment: 'fireeee'
            },
            {
                user: 'amaanth.dev',
                comment: 'Good work'
            },
        ],
    },
]
