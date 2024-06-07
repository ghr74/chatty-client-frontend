export const mock_users = [
    { id: 1, name: "User1" },
    { id: 2, name: "Chatter2" },
];

export const logged_in_user = mock_users[0];

export const useUser = () => {
    return logged_in_user;
};
