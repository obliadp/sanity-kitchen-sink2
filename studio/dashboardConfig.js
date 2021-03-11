export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604a9e6b506e2200d686bf68',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-pd7ug3j5',
                  apiId: '1604c0ff-f4e1-4da3-86b0-147f1986d357'
                },
                {
                  buildHookId: '604a9e6b56841100a7683b6a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-cy1od95s',
                  apiId: '04fec4be-bd52-4f8f-85a4-fd80d34b74be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/obliadp/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-cy1od95s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
