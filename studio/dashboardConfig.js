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
                  buildHookId: '5d6d48f10809824a8cd4626e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-cto-studio',
                  apiId: '52a1eaab-a2d3-4eca-b83d-5c5ce97818a1'
                },
                {
                  buildHookId: '5d6d48f1c0835a5b5d965b31',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-cto',
                  apiId: '198f2d4a-8047-4b78-b7a6-b1b124ceaa99'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelve/sanity-nextjs-landing-pages-cto',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-cto.netlify.com', category: 'apps'}
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
