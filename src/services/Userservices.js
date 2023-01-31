import axios from 'axios';

export function getUsers() {
    return axios.get('http://127.0.0.1:8000/users/')
        .then(response => response.data)
}

export function addUser(user) {
    return axios.post('http://127.0.0.1:8000/users/', {
        UserId: null,
        FirstName: user.FirstName.value,
        LastName: user.LastName.value,
        UserName: user.UserName.value,
        Email: user.Email.value,
        Password: user.Password.value
    })
        .then(response => response.data)
}

export function deleteUser(UserId) {
    return axios.delete('http://127.0.0.1:8000/users/' + UserId + '/', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.data)
}

export function updateuser(UserId, user) {
    return axios.put('http://127.0.0.1:8000/users/' + UserId + '/', {
        FirstName: user.FirstName.value,
        LastName: user.LastName.value,
        UserName: user.UserName.value,
        Email: user.Email.value,
        Password: user.Password.value
    })
        .then(response => response.data)
}