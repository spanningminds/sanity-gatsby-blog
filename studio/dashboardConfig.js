export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d0ddcb1b4df78c00eacb492',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xb7onod7',
                  apiId: '956f2d15-0412-46c6-acc4-e6497ffa1cbb'
                },
                {
                  buildHookId: '5d0ddcb14297e44c3b087d04',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-doxn6vz2',
                  apiId: 'e92ffdc6-61dd-4906-8e5f-1729085b4b65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spanningminds/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-doxn6vz2.netlify.com', category: 'apps'}
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
