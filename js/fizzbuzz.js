/*
 * spa.js
 * Root namespace module
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, fizzbuzz */
var fizzbuzz = (function() {
	'use strict';
	var 
		initModule,
		container, printFizzBuzz;
	printFizzBuzz = function (){	
		var i, $box,
			direc = 'right',
			cols 	= 8,
			rows 	= 8,
			max 	= cols*rows,
			colCount = 1,
			rowCount = 0,
			leftCol	 = 1, 
			topRow 	= 0,
			boxW 	= 50;
		
		for (i = 0 ; i < max; i++ ){
			$box = {};
		
			if (i % 3 === 0 &&  i % 5 === 0 ){
				//$('<span class="fizz-buzz">fizz-buzz</span>').appendTo($box);
				//$box = $( '<span class="fizz-buzz">fizz-buzz</span>' );
				$box = $( '<span class="fizz-buzz">' + i +  '</br>fizz-buzz</span>');
			} 
			else {
				if ( i % 3 === 0 ) {
					
					//$box = $(  '<span class="fizz">fizz</span>' );
					$box = $( '<span class="fizz">'+i+  '</br>fizz</span>');
				} 
				else  if ( i % 5 === 0 ) {
					
					//$box = $( '<span class="buzz">buzz</span>' );
					$box = $( '<span class="buzz">'+i +  '</br>buzz</span>');
				} 
				else {
					$box = $('<span class="num">'+i+'</span>');
				}
			}
			
			//$box.css( 'left' , boxW * ( colCount)+'px' );
			//$box.css( 'top' , boxW * (rowCount )+'px' );

			//hexString = yourNumber.toString(16);

			var color = Math.max(0 , 255 - i*2 ).toString(16);
/*
			$box.animate(
				{ 
					left : boxW * ( colCount)+'px',
					top : boxW * (rowCount )+'px'
				}, 5000, 'swing', true
				);
*/
			$box.css( 'background-color' , '#'+ 'ff' + color + color);
			$box.css( 'left' , '200px');
			$box.css( 'top' , '200px');

			TweenLite.to($box, .5, 
				{ 	left : boxW * ( colCount-1)+'px',
					top : boxW * (rowCount )+'px',
					opacity : 1,
					delay : .1*i
				} );

			
			switch (direc) {
				case 'right':
					if ( colCount < cols ){
						colCount++;
					} else {
						//cols--;
						direc = 'down';
						rowCount++;
					}
				break;
				case 'down':
					if ( rowCount < rows - 1  ) {
						rowCount++;
					} else {
						//topRow--;
						rows--;
						cols--;
						colCount--;
						direc = 'left';
					}
				break;
				case 'left':
					if ( colCount > leftCol ){
						colCount--;

					} else {
						rowCount--;
						topRow++;
						direc = 'up';
						//leftCol++;
					}

				break;
				case 'up':
					if ( rowCount > topRow  ){
						rowCount--;

					} else {
						//topRow++;
						leftCol++;
						colCount++;
						direc = 'right';
					}
				break;
			}
			container.append($box);
		}

	};
	//--------- PUBLIC METHODS
	initModule = function ( _container ) {
		container = _container;
		
		printFizzBuzz();

	};

	return {
		initModule : initModule
	};

}());