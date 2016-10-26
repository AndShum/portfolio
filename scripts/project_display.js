var projects = [];

function ProjectConstuctor(options){

  this.siteName = options.siteName;
  this.siteUrl = options.siteUrl;
  this.imageSrc = options.imageSrc;
  this.imageAlt = options.imageAlt;
  this.siteInfo = options.siteInfo;
};

ProjectConstuctor.prototype.toHtml = function(){

  var $newProjectConstructor = $('div.template').clone();

  $newProjectConstructor.removeClass('template');
  $newProjectConstructor.find('h2').text(this.siteName);
  $newProjectConstructor.find('a').attr('href', this.siteUrl);
  $newProjectConstructor.find('img').attr('src', this.imageSrc);
  $newProjectConstructor.find('img').attr('alt', this.imageAlt);
  $newProjectConstructor.find('p').text(this.siteInfo);

  return $newProjectConstructor;
};

projects_list.forEach(function(list){
  projects.push(new ProjectConstuctor(list));
});

projects.forEach(function(displayList){
  $('#project_display').append(displayList.toHtml());
});
