(function(dust){dust.register("manage\/books\/edit",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/manage",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<div class=\"row\"><div class=\"large-12 columns\"><h2>Add Book</h2><form method=\"post\" action=\"/manage/books/edit/").f(ctx.getPath(false, ["book","_id"]),ctx,"h").w("\"><div class=\"row\"><div class=\"large-12 columns\"><label for=\"title\">Title<input type=\"text\" name=\"title\" value='").f(ctx.getPath(false, ["book","title"]),ctx,"h").w("' required/></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label for=\"author\">Author<input type=\"text\" name=\"author\" value='").f(ctx.getPath(false, ["book","author"]),ctx,"h").w("' /></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label for=\"publisher\">Publisher<input type=\"text\" name=\"publisher\" value='").f(ctx.getPath(false, ["book","publisher"]),ctx,"h").w("'/></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label for=\"price\">Price<input type=\"text\" name=\"price\" value='").f(ctx.getPath(false, ["book","price"]),ctx,"h").w("' required/></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label for=\"category\">Category<select name=\"category\" />").s(ctx.get(["categories"], false),ctx,{"block":body_2},{}).w("</select></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label for=\"description\">Description<textarea name=\"description\" value='").f(ctx.getPath(false, ["book","description"]),ctx,"h").w("' /></textarea></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label for=\"cover\">Cover URL<input type=\"text\" name=\"cover\" value='").f(ctx.getPath(false, ["book","cover"]),ctx,"h").w("'/></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><input type=\"submit\" class='button' value='Submit' /></div></div><input type=\"hidden\" name=\"_csrf\" value=\"").f(ctx.get(["_csrf"], false),ctx,"h").w("\"></form></div></div>");}body_1.__dustBody=!0;function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<option value=\"").f(ctx.getPath(true, ["name"]),ctx,"h").w("\">").f(ctx.getPath(true, ["name"]),ctx,"h").w("</option>");}body_2.__dustBody=!0;return body_0}(dust));