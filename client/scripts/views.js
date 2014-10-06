 define(function (require) {
var Backbone    = require('backbone'),
    Handlebars  = require('handlebars'),
    Templates   = require('Templates');

    var BaseView = Backbone.View.extend({
        containerSelector :  '#content',
        /**
        *   The data to render into the template
        *   @override - subclasses  override
        */
        templateData : null,
        /**
        *   The template name
        *   @override - subclasses  override
        */
        templateName : null,
        initialize: function () {
         this.$container = $(this.containerSelector);
         if (this.$container.length === 0) return new Error('No container element found');
        },
        render : function () {
         var html = (this.templateData) ? this.getTemplate(this.templateData) : this.getTemplate();
         this.$el.html(html);
         this.$container.html(this.$el);
        },
        getTemplate : function (data) {
         if (!Templates[this.templateName]) throw new Error('No template found for:'+ this.templateName);
         return Templates[this.templateName](data);
        }
    });


    var IndexView = BaseView.extend({
        className: "main",
        templateName :  'index',
        initialize: function () {
            this.templateData = {data: 'data'};
            BaseView.prototype.initialize.call(this)
        }
    });
    var PageView = BaseView.extend({
        className: "page",
        templateName :  'page',
        events : {
        'click #do-something' : 'doSomething'
        },
        initialize: function () {
         this.templateData = {data: 'data'};
         BaseView.prototype.initialize.call(this)
        },
        doSomething : function () {
          var obj = {
              0 : {
                  x : 10,
                  y : 11
              }
          }
          this.router.navigate('/page/'+ JSON.stringify(obj));
        }

    });
     return {
         IndexView : IndexView,
         PageView : PageView
     }
});//end define