CKEDITOR.dialog.add( 'accordionDialog', function ( editor ) {
    return {
        title: 'Configuração do Accordion',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
//                    {
//                        id: 'cmbAlign',
//                        type: 'select',
//                        requiredContent: 'table[align]',
//                        'default': '',
//                        label: editor.lang.common.align,
//                        items: [
//                            [ editor.lang.common.notSet, '' ],
//                            [ editor.lang.common.alignLeft, 'left' ],
//                            [ editor.lang.common.alignCenter, 'center' ],
//                            [ editor.lang.common.alignRight, 'right' ]
//                        ],
//                        commit: function( data, selectedTable ) {
//                            if ( this.getValue() )
//                                selectedTable.setAttribute( 'align', this.getValue() );
//                            else
//                                selectedTable.removeAttribute( 'align' );
//                        }
//                    },
                    {
                        type: 'text',
                        id: 'number',
                        label: 'Número de seções do accordion',
                        validate: CKEDITOR.dialog.validate.notEmpty( "Não pode ficar vazio" )
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;
            //var align = dialog.getValueOf( 'tab-basic', 'cmbAlign' );
            var sections = parseInt(dialog.getValueOf('tab-basic','number')); //Número de seções que serão criadas

            section = "<h3>Nome da Seção</h3><div><p>Insira o texto da seção do accordion aqui</p></div>"
            intern = ""
            for (i=0;i<sections;i++){
                intern = intern + section
            }

            editor.insertHtml('<div class="accordion">'+ intern +'</div>');

        }
    };
});
