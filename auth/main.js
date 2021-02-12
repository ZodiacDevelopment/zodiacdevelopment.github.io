var mainApp = {};

(function(){
    var firebase = app_fireBase;
    var uid = null;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User Is Signed In
            uid = user.uid;
        }else{
            // redirect to login
            uid = null;
            window.location.replace("login.html");
        }
    });

    function logOut(){
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;

})()