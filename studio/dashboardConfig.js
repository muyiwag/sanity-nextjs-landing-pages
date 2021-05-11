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
                  buildHookId: '609ab17d26fdbd3da149da81',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ayuy7wv1',
                  apiId: '718f43ef-e4e8-48c2-9ec0-713f6c8a6c25'
                },
                {
                  buildHookId: '609ab17d4c047256f5d5d265',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g5o9qk9h',
                  apiId: '0d74c8c1-305a-4c3e-842b-7ff067196f6c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muyiwag/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g5o9qk9h.netlify.app', category: 'apps'}
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
