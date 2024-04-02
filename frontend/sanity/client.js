import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "uai8y270",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})
