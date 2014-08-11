ckeditor-accordion-plugin
=========================

Ckeditor plugin to create jquery accordion tabs


Installation
=============

Extract the accordion/ to the ckeditor's plugins folder.

Enable the plugin: 

    config.extraPlugins = 'accordion';
    
Plugin Installed:

![alt tag](https://github.com/ffreitasalves/ckeditor-accordion-plugin/blob/master/accordion%20plugin%20installed.png)



Dependencies:
=============

You must have jquery, jquery-ui and jquery-ui css(any theme you like) in your views:

    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css"> 
    
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    
    <script src="//code.jquery.com/ui/1.11.0/jquery-ui.js"></script>

Usage:
=======
You need this script to show the accordion in your views:

    <script type="text/javascript">
    
        $(".accordion").accordion();
        
    </script>
