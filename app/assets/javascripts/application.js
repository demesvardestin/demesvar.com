// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require social-share-button
//= require tinymce
//= require tinymce-jquery
//= require_tree .

$(document).ready(function() {
    
    previewPost = () => {
        let data = {
            title: document.querySelector('#article-title').value,
            content: document.querySelector('#article-content').value,
            tags: document.querySelector('#article-tags').value,
            category: document.querySelector('#category-name').value
        };
        
        $.get('/preview_post', { article: data });
    };
    
    loadCategory = (element, category) => {
        $.get("/blog/filter_by_category", { category: category });
        
        $('#categoryMenuButton').html(`
            ${category} <i class="fas fa-angle-down"></i>
        `);
    };
});