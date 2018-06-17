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

var rawUrl = document.querySelector("meta[name='github-raw-url']").getAttribute("content");
var githubUrl = document.querySelector("meta[name='github-url']").getAttribute("content");
var docName = $.urlParam('doc');
var title = $.urlParam('title');
if (!title)
	title = docName;

var docRootPath = document.querySelector("meta[name='docs-root-url']").getAttribute("content");

var enableNightMode = $.urlParam('night') == 1;
if (enableNightMode) {
    $('footer').addClass('night-theme');
    document.body.classList.add('night-theme');
}

var converter = new showdown.Converter();
converter.setFlavor('github');

if (docName) {
    document.title = decodeURI(title);

    $.ajax({
        url : rawUrl + "/" + lang + "/" + docName + ".md",
        success: function(result) {
            $('#markdown-content').get(0).innerHTML = converter.makeHtml(result);

            $('#markdown-content img').attr('src', (index, value) => {
                if (value.indexOf('./images') == 0) {
                    return value.replace('.', docRootPath);
                } else {
                    return value;
                }
            });
        }   
    });

    $('#source-link').get(0).href = githubUrl + "/" + lang + "/" + docName + ".md";
} else {
    $('.markdown-body').get(0).style.display = 'none';
    $('#help-list-container').get(0).style.display = 'unset';
    $('#source-link').get(0).style.display = 'none';

    $.ajax({
        url : document.querySelector("meta[name='docs-list-json-url']").getAttribute("content"),
        success: function(result) {
            var result = JSON.parse(result);
            var listElement = $('#help-list').get(0);
            for (var i = 0; i < result.length; i++) {
                var itemNode = document.createElement('a');

                itemNode.classList.add('mdui-list-item');
                itemNode.classList.add('mdui-ripple');
                itemNode.id = result[i].id;

                var icon = document.createElement('i');
                icon.classList.add('mdui-list-item-icon');
                icon.classList.add('mdui-icon');
                icon.classList.add('material-icons');
                icon.classList.add('mdui-text-color-teal');
                icon.innerText = 'description';
                itemNode.appendChild(icon);

                var itemContent = document.createElement('div');
                itemContent.classList.add('mdui-list-item-content');

                var itemTitle = document.createElement('div');
                itemTitle.classList.add('mdui-list-item-title');
                itemTitle.classList.add('mdui-typo-body-2');
                itemTitle.innerText = result[i].title[lang];
                itemContent.appendChild(itemTitle);

                if (result[i].summary) {
                    var itemSummary = document.createElement('div');
                    itemSummary.classList.add('mdui-list-item-text');
                    itemSummary.classList.add('mdui-typo-body-1');
                    itemSummary.innerText = result[i].summary[lang];
                    itemContent.appendChild(itemSummary);
                }

                itemNode.appendChild(itemContent);
                itemNode.href = result[i].content[lang];
                if (enableNightMode) {
                    itemNode.href += (itemNode.href.indexOf('?') === -1 ? '?' : '&') + 'night=1';
                }
                listElement.appendChild(itemNode);
            }
        }
    });
}