(function(){
	var thoriseum={
		config:{
			req:'http://app.dev/learn-es6/test.php'
		},
		init:function(config){
			$.extend(this.config,config); 
			this.cache(); // Loading DOM elements and cache it
			this.bindEvents(); // Load Bind events
		},
		cache:function(){
			this.ajaxBtn=$('a.fireAjax');
			this.ul=$('ul#tasks-ul');
		},
		bindEvents:function(){
			var self=this;
			self.ajaxBtn.click(function(){
				self.ajax.apply(self,[{
					ajaxType:'GET',
					req:self.config.req,
					data:{},
				}]);
			});
		},
		ajax:function(args){
			var self=this;
			$.ajax({
				type:args.ajaxType,
				url: args.req,
				data:args.data,
				success: function(response){
					self.ajaxHandler(response);
				}
			},'json');
		},
		methods:{
			jsonString:function(data){
				return JSON.stringify(data);
			}
		},
		ajaxHandler:function(response){
			this.ul.append(response);
			return false;
		}
	};
	thoriseum.init();
})();
$(function(){
});