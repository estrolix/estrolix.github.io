;'use strict';
(function(){
    var animatePage = function () {
        $('body').removeClass('before-animation');
    }
    $(function(){
        setTimeout(animatePage, 300);
    });
})();