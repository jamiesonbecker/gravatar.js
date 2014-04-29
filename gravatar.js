/*
 * (c) Jamieson Becker, MIT license
 * needs an MD5 Javascript library like
 * https://github.com/blueimp/JavaScript-MD5/blob/master/js/md5.js
 * or
 * http://pajhome.org.uk/crypt/md5/md5.html
 */


$.fn.gravatar = function(email, size){
    var email = email || "";
    $(this).html(
        '<img src="https://secure.gravatar.com/avatar/' +
        md5(email.trim().toLowerCase()) + '?s=' + size + '&d=mm">');
    return this;}
