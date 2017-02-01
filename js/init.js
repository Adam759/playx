function get(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-43230779-1', 'ziondevelopers.github.io');
ga('send', 'pageview'); 

jwplayer.key = "lmwviL3c55Ymnx4fMjEUQeiU00zeXf6TCiDHQA==";

$(document).ready(function () {
	// Get URL
	var url = unescape(get("url"));
	
	// Check for URL
	if (url != "false") {
		/** Initialize player **/
		jwplayer("player").setup({
		  "aspectratio": "auto",
		  "autostart": true,
		  "controls": false,
		  "displaydescription": false,
		  "displaytitle": true,
		  "flashplayer": "/playx/jwplayer/jwplayer.flash.swf",
		  "ga": {
			"idstring": "title"
		  },	  
		  "hlshtml": false,
		  "mute": false,
		  "ph": 1,
		  "pid": "IJzySFh8",	  
		  "playlist": [
			{
			  "sources": [
				{
				  "file": url
				}
			  ]
			}
		  ],
		  "preload": "auto",
		  "primary": "flash",
		  "repeat": false,
		  "loop": false,
		  "stagevideo": false,
		  "stretching": "uniform",
		  "visualplaylist": false, 
		  "width": window.innerWidth,
		  "height": window.innerHeight
		});
	}
});