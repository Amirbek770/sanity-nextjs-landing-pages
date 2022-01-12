export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61df0877a4cfe300aac64713',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wr4z2xzm',
                  apiId: 'e83a9970-25dd-48df-8b28-8978082e3343'
                },
                {
                  buildHookId: '61df0877b9323f00777c6c9a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ba54ktuu',
                  apiId: 'b13a8456-458c-4e97-8645-097e27419ee9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Amirbek770/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ba54ktuu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
