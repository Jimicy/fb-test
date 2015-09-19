// window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '1614226585496485',
//       xfbml      : true,
//       version    : 'v2.4'
//     });
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "//connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));

// function myFacebookLogin() {
//   FB.login(function(){}, {scope: 'publish_actions'});
// }

// FB.login(function(){
//   // Note: The call will only work if you accept the permission request
//   FB.api('/me/feed', 'post', {message: 'Hello, world!'});
// }, {scope: 'publish_actions'});

var myDataRef = new Firebase('https://shining-inferno-4500.firebaseio.com/');
$('#messageInput').keypress(function (e) {
  if (e.keyCode == 13) {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    myDataRef.push({name: name, text: text});
    $('#messageInput').val('');
  }
});

myDataRef.on('child_added', function(snapshot) {
  var message = snapshot.val();
  console.log(event);
});