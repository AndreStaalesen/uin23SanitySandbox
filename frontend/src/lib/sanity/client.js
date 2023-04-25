import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'ug6sji17',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})