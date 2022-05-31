function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function verifyCookie(returned) {
        if (getCookie('aceptCokieSDH') == '') {
            $('#txt-user').prop('readonly', true);
            $('#txt-pass').prop('readonly', true);
            $('#btn-login').prop('disabled', true);
            $('#myModal').modal('toggle')
        } else {
            $('#txt-user').prop('readonly', false);
            $('#txt-pass').prop('readonly', false);
            $('#btn-login').prop('disabled', false);
        }
}


var cookie = {
    set : function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    get : function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(";");
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==" ") c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    }
};