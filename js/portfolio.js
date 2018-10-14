// Left pallette 
var pallete=$('.row');
var palcolors = pallete.find('.color-container');
var palleft = pallete.find('#leftcol .color-container');
var palright = pallete.find('#rightcol .color-container');
var changeColorLink = pallete.find('.change-color');
var clickQuantity=0;

//Change color
changeColorLink.click(function(){
clickQuantity++;
//   palcolors.toggleClass('hidden');
  if (clickQuantity==1)
  {
    palcolors.toggleClass('hidden');
    palleft.toggleClass('bounceInLeft');
    palright.toggleClass('bounceInRight');
      
  }
    else if(clickQuantity%2==0)
  {
      
      palleft.toggleClass('bounceInLeft bounceOutLeft');
      palright.toggleClass('bounceInRight bounceOutRight');
  }
  else
  {
      palleft.toggleClass('bounceInLeft bounceOutLeft');
      palright.toggleClass('bounceInRight bounceOutRight');
      
  }
    
});

var css = $("<style type='text/css'></style>").appendTo('body');

palcolors.find('.color-square').click(function() {
            var color = $(this).attr('class').match(/background-color-([a-f0-9]{6})/i)[1];
            css.text('::selection { background: #' + color + ';} a { color:#' + color + ';} #banner { background-color:#' + color + ';} nav { background:#' + color + ';} @media(max-width:768px){ nav .active a { color:#' + color + ';}} .nav>li a:hover {color:#' + color + ';} .form-item-focused label {color:#' + color + ';} #footer-below { background-color:#' + color + ';} .scroll-top a { background:#' + color + ';} .scroll-top a:hover, .scroll-top a:focus { color:#' + color + '; border-color:#' + color + ';} .navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover {color: #+'+color+';}');
            });

