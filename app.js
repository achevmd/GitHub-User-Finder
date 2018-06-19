//init github class
const github = new GitHub;
//init ui class
const ui = new UI;



// Search input
const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup', (e) => {
  //get input text
  let userText = e.target.value;
  if(userText !== '') {
    //Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          //Show alert
          ui.showAlert('User not found', 'alert alert-danger text-center');
        } else {
          //Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    ui.clearProfile();
  } 
});