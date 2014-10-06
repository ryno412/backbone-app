define(function (require){
    var Backbone = require('backbone');
    var _ = require('underscore');
    var views = require('views');
    var $ = require('jquery');

    var AppRouter = Backbone.Router.extend({
        routes: {
            "" : "index",
            "page(/:param)": "page"

        },
        index: function(query, page) {
            this.setCurrentView('IndexView');
        },
        page: function(query, page) {
            console.log(query, page);
            this.setCurrentView('PageView');
        },
        setCurrentView : function (viewName) {
            if (!views[viewName]) return new Error('view not found');
            var View = views[viewName];
            if (!(this.currentView instanceof View)) {
                if (this.currentView) this.currentView.remove();
                this.currentView = new View();
                this.currentView.router = this;
            }
            this.currentView.render();
            return this.currentView;
        },
        initLinkHandler : function (){
            $(document).on("click", "a:not([data-bypass])", function(e) {
                e.preventDefault();
                var href = { prop: $(this).prop("href"), attr: $(this).attr("href")};
                Backbone.history.navigate(href.attr, true);
            });
        }
    });

    return AppRouter;
});
