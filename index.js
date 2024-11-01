const {hash} = window.location;

 const message = atob(hash.replace('#', ''));

 if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
 };

document.querySelector('form').addEventListener('submit', event => {
    //no backend server to send this to
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}`;
    //selects the input
    linkInput.select()
});

/*
Parts of a URL
 - Domain
   - 
 - Path
   - 
 - Query String
   - Used to communicate options to a backend server
 - Hash/fragment
   - Used by the browser exclusively

 message.com  -  /index.html/  -  ?color=red  -  #value

 in the console, window.location is an object that contains 
  info that describes the current url
*/

