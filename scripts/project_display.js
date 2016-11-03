var projects = [];

function ProjectConstuctor(options){

  this.siteName = options.siteName;
  this.siteUrl = options.siteUrl;
  this.imageSrc = options.imageSrc;
  this.imageAlt = options.imageAlt;
  this.siteInfo = options.siteInfo;
};

ProjectConstuctor.prototype.toHtml = function(){

  var getTemplate = $('#projects_template').html();
  var compileTemplate = handlebars.compile(getTemplate);
  return compileTemplate(this);

};

projects_list.forEach(function(list){
  projects.push(new ProjectConstuctor(list));
});

projects.forEach(function(displayList){
  $('#project_display').append(displayList.toHtml());
});
