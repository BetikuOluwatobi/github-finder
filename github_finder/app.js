const github = new GitHub;
const ui = new UI;
// UI params
const searchUser = document.getElementById('searchUsers');

// Add Event Listener
searchUser.addEventListener('keyup', (e) => {
    const userInput = e.target.value;

    if (userInput !== "") {
        github.getUser(userInput).then(data => {
            if (data.profile.message === 'Not Found') {
                ui.clearProfile();
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {

        ui.clearProfile();
    }
});