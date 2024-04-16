import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "uai8y270",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})


//skP2Kj2FDRaBJzt9FxWJEIl8BmHVjvwGx3sa5aSTGmutR6ncYoK1Q2KaPYvr3GB0sLqx9Y0Efx9oicvLmIdQ3AYyBuSl6bTQ5noM2RcEY1TNQVK18A8vyTWYzltOtaSa4ougYi4tuansTVX3wpqIUKmrMDiZCrfk60goauc7wKlGw5dM6yze


export const writeClient = createClient({
    projectId: "uai8y270",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "skP2Kj2FDRaBJzt9FxWJEIl8BmHVjvwGx3sa5aSTGmutR6ncYoK1Q2KaPYvr3GB0sLqx9Y0Efx9oicvLmIdQ3AYyBuSl6bTQ5noM2RcEY1TNQVK18A8vyTWYzltOtaSa4ougYi4tuansTVX3wpqIUKmrMDiZCrfk60goauc7wKlGw5dM6yze"
})