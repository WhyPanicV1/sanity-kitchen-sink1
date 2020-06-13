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
                  buildHookId: '5ee4ff2bd464fd3ad7ef32b3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink1-studio',
                  apiId: 'b249a428-6dde-4812-b85a-3b6c7c57313d'
                },
                {
                  buildHookId: '5ee4ff2b6dd7c3a66d89d81c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink1',
                  apiId: '884d6800-f70b-476d-8868-277c787905b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WhyPanicV1/sanity-kitchen-sink1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink1.netlify.app', category: 'apps'}
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
