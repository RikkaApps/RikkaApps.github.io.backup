$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.href);
    if (results != null) {
        return results[1] || 0;
    } else {
        return 0;
    }
}

var paths = window.location.href.split('/');
var lang = $.urlParam('lang') || 'en';
for (var i = 0; i < paths.length; i++) {
    if (paths[i] == 'docs') {
        lang = paths[i + 1];
        if (lang.indexOf('?') >= 0) {
            lang = lang.substr(0, lang.indexOf('?') - 1);
        }
    }
}

var rawUrl = "https://raw.githubusercontent.com/RikkaApps/StorageRedirect-assets/master/docs";
var githubUrl = "https://github.com/RikkaApps/StorageRedirect-assets/blob/master/docs";
var docName = $.urlParam('doc');

var converter = new showdown.Converter();
converter.setFlavor('github');

if (docName) {
    document.title = decodeURI(docName);

    $.ajax({
        url : rawUrl + "/" + lang + "/" + docName + ".md",
        success: function(result) {
            $('#markdown-content').get(0).innerHTML = converter.makeHtml(result);
        }   
    });

    $('#source-link').get(0).href = githubUrl + "/" + lang + "/" + docName + ".md";
} else {
    $('#markdown-content').get(0).style.display = 'none';
    $('#markdown-error-text').get(0).style.display = 'unset';
    $('#source-link').get(0).style.display = 'none';
}