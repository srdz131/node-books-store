(function(dust){dust.register("layouts\/manage",body_0);function body_0(chk,ctx){return chk.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\" /><title>").b(ctx.getBlock("title"),ctx,{},{}).w("</title><link rel=\"stylesheet\" href=\"/css/app.css\"><link rel=\"stylesheet\" href=\"/css/foundation.css\"><link rel=\"stylesheet\" href=\"/css/style.css\"></head><body><div class=\"row\"><div class=\"large-12 columns\"><h1>NodeJSBooks</h1></div></div><div class=\"row\"><div class=\"large-12 columns\"><nav class=\"top-bar\" data-topbar role=\"navigation\"><section class=\"top-bar-left\"><ul class='menu'><li><a href=\"/manage\">Dashbord</a></li><li><a href=\"/manage/books\">Books</a></li><li><a href=\"/manage/categories\">Categories</a></li><li><a href=\"/\" target='_blank'>View Website</a></li></ul></section></nav></div></div><div class=\"row\"><div class=\"large-12 columns\">").f(ctx.get(["messages"], false),ctx,"h",["s"]).b(ctx.getBlock("body"),ctx,{},{}).w("</div></div><footer><div class=\"row\"><div class=\"large-12 columns\"><p>NODEJSBOOKS &copy; 2017 | <a href=\"/manage\">Manage</a></p></div></div></footer><script data-main=\"/js/app\" src=\"/components/requirejs/require.js\"></script><script src='/js/vendor/jquery.js' type=\"text/javascript\"></script><script src='/js/vendor/foundation.min.js'></script><script src='/js/main.js'></script><script src='/js/app.js'></script></body></html>");}body_0.__dustBody=!0;return body_0}(dust));