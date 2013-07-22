$(window).load(function () {

    $("link").each(function () {

        var linkItem = $(this);
        var oldUrl = linkItem.attr("href");
        var begining;
        
        if (oldUrl.length > 7)
            begining = oldUrl.substring(0,7);
            
        else
            begining = "0";
        
        if (oldUrl.charAt(0) != "/" && begining != "http://")
            linkItem.attr("href", "/" + oldUrl);

        });
    });