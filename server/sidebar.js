import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

const Sidebar = () => {
    return S.list()
        .title(`Slick's Slices`)
        .items([
            S.listItem()
                .title('Home page')
                .icon(() => <strong>🔥 </strong>)
                .child(
                    S.editor()
                        .schemaType('storeSettings')
                        .documentId('downtown')
                ),
            ...S.documentTypeListItems().filter(item => item.getId() !== 'storeSettings')
        ])
}

export default Sidebar;
