/*
 * Personalize - CKeditor Plugin - v0.0.1
 * https://github.com/MOFB/ckeditor-plugin-tags
 * Copyright (c) 2013 Master Of Bits, LLC. Licensed MIT
 */
CKEDITOR.plugins.add('personalize', {   
    init: function(editor) {
        editor.ui.addRichCombo('Personalize', {
            label: "Personalize",

            panel: {
                css: [ CKEDITOR.getUrl( CKEDITOR.skin.path() + 'editor.css' ), editor.config.contentsCss ],
            },

            init: function() {
                var dd = this;
                $.each(CKEDITOR_PERSONALIZE, function(group, fields) {
                    dd.startGroup(group);
                    $.each(fields, function(i, field) {
                        dd.add(field.value, field.label);
                    });
                });
            },

            onClick: function(value) {
                editor.focus();
                editor.fire('saveSnapshot');
                editor.insertHtml('<span class="personalize" title="Personalization" contenteditable="false" unselectable="on">'+value+'</span>', 'unfiltered_html');
                editor.fire('saveSnapshot');
            }
        });
    }
});