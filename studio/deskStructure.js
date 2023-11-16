export const myStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'tutorial',
          ].includes(listItem.getId())
      ),
    ])
